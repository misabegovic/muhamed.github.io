#!/usr/bin/env python3
"""Build the Minolovac boards for /igre/minolovac/ from Usput.ba's snapshot.

The same game runs in Usput.ba (app/controllers/minesweeper_controller.rb).
A board is a geographic grid around a preset region; a cell holds a mine iff
any cell of the 50 m "inside" mask (cells that intersect a recorded
mine-suspected area, dilated at build time so quantization only ever errs
toward danger) falls inside the board cell's rectangle. This is the same rule
as MineChecker::StaticIndex#mine_cells, reimplemented here so the site can be
fully static.

Where a board sits: the region presets are centred on the largest recorded
area near each town, where nearly every cell is a mine and the first click
always loses. So each board is moved, never its mines: the build searches
real ground near the preset for the closest centre where every level holds a
playable share of mines (DENSITY) and has a safe opening, and records that
opening as the board's start, which the game reveals before the first move.

Only per-board cell grids are written: no geometry, no mask, no coordinates
beyond each board's centre. Custom locations are not offered, because they
would need the whole mask at runtime.

Usage: .github/scripts/build-minolovac.py [path-to-usput.ba-checkout]
Writes files/igre/minolovac/boards.json in this site.
"""

import gzip
import json
import math
import pathlib
import sys

# Kept identical to MinesweeperController::REGIONS and DIFFICULTIES in Usput.ba.
REGIONS = [
    ("sarajevo", "Sarajevo", 44.0181, 18.4106, 102.3),
    ("mostar", "Mostar", 43.5322, 17.9713, 41.8),
    ("banja-luka", "Banja Luka", 44.5419, 17.0952, 5.2),
    ("jajce", "Jajce", 44.3937, 17.2329, 62.4),
    ("una", "NP Una", 44.8466, 16.0245, 51.9),
    ("sutjeska", "NP Sutjeska", 43.5190, 18.6322, 3.7),
]
LEVELS = {
    "easy": {"rows": 9, "cols": 9, "cell_m": 150},
    "medium": {"rows": 12, "cols": 12, "cell_m": 125},
    "hard": {"rows": 14, "cols": 14, "cell_m": 100},
}
# The share of a board's cells that may be mines, per level. Higher than
# classic Minesweeper (12% to 21%) on purpose: real areas cluster, and below
# about a quarter mines the safe ground is one sheet that a single opening
# clears, so the game would be won before it starts.
DENSITY = {"easy": (0.15, 0.32), "medium": (0.18, 0.34), "hard": (0.20, 0.36)}
# How far from the preset a board may move, and the step of the search.
SEARCH_KM, STEP_M = 12, 250
# The start opens the largest pocket of safe ground (at least MIN_OPENING
# cells), and at least HIDDEN of the safe cells must stay hidden after it:
# the part the player reads their way to across the edges of the areas.
MIN_OPENING, HIDDEN = 6, 0.25
# MinesweeperController::COUNTRY_SUSPECTED_KM2: the official BHMAC figure
# (822.87 km2, rounded), the one number not derived from the snapshot.
COUNTRY_SUSPECTED_KM2 = 823


def main():
    usput = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else pathlib.Path.home() / "projects" / "usput.ba")
    static = usput / "db" / "data" / "mine_checker" / "static"
    site = pathlib.Path(__file__).resolve().parents[2]
    out = site / "files" / "igre" / "minolovac" / "boards.json"

    meta = json.loads((static / "meta.json").read_text())
    grid = meta["grids"]["inside"]
    mask = gzip.decompress((static / "inside.bin.gz").read_bytes())
    bbox_west, bbox_south = meta["bbox"][0], meta["bbox"][1]

    def row_for(lat):
        return math.floor((lat - bbox_south) / grid["dlat"])

    def col_for(lon):
        return math.floor((lon - bbox_west) / grid["dlon"])

    def bit(r, c):
        idx = r * grid["cols"] + c
        byte = mask[idx >> 3] if (idx >> 3) < len(mask) else 0
        return (byte >> (idx & 7)) & 1

    def board_at(lat, lon, spec, filled):
        rows, cols, cell_m = spec["rows"], spec["cols"], spec["cell_m"]
        dlat = cell_m / 111_320.0
        dlon = cell_m / (111_320.0 * math.cos(lat * math.pi / 180))
        south = lat - rows * dlat / 2
        west = lon - cols * dlon / 2
        return [
            r * cols + c
            for r in range(rows)
            for c in range(cols)
            if filled(row_for(south + r * dlat), col_for(west + c * dlon), row_for(south + (r + 1) * dlat), col_for(west + (c + 1) * dlon))
        ]

    def opening(mines, rows, cols):
        """The start: a zero cell in the largest pocket of safe ground,
        nearest the centre. Returns None when that pocket is too small to
        read from, or so large that it leaves less than HIDDEN of the safe
        ground to play for."""
        mine = set(mines)
        safe = rows * cols - len(mine)

        def nbrs(i):
            r, c = divmod(i, cols)
            return [(r + dr) * cols + c + dc for dr in (-1, 0, 1) for dc in (-1, 0, 1)
                    if (dr or dc) and 0 <= r + dr < rows and 0 <= c + dc < cols]

        zero = {i for i in range(rows * cols) if i not in mine and not any(n in mine for n in nbrs(i))}
        mid = (rows - 1) / 2, (cols - 1) / 2

        def dist(i):
            r, c = divmod(i, cols)
            return (r - mid[0]) ** 2 + (c - mid[1]) ** 2

        pockets, seen = [], set()
        for z in sorted(zero, key=dist):
            if z in seen:
                continue
            opened, stack = set(), [z]
            while stack:
                j = stack.pop()
                if j in opened:
                    continue
                opened.add(j)
                if j in zero:
                    stack.extend(n for n in nbrs(j) if n not in opened)
            seen.update(opened & zero)
            pockets.append((z, len(opened)))
        if not pockets:
            return None, 0
        largest = max(size for _z, size in pockets)
        if largest < MIN_OPENING or safe - largest < HIDDEN * safe:
            return None, 0
        # pockets are found nearest-the-centre first, so the first of the
        # largest is the one closest to the middle of the board.
        return next(p for p in pockets if p[1] == largest)

    boards, starts, centres = {}, {}, {}
    for slug, name, lat, lon, _km2 in REGIONS:
        # A prefix sum over the mask around the preset answers "any inside
        # cell in this rectangle?" in constant time.
        pad_km = SEARCH_KM + 2
        r0, r1 = max(row_for(lat - pad_km / 111.32), 0), min(row_for(lat + pad_km / 111.32), grid["rows"] - 1)
        span = pad_km / (111.32 * math.cos(lat * math.pi / 180))
        c0, c1 = max(col_for(lon - span), 0), min(col_for(lon + span), grid["cols"] - 1)
        w = c1 - c0 + 2
        acc = [0] * ((r1 - r0 + 2) * w)
        for r in range(r0, r1 + 1):
            run, base, prev = 0, (r - r0 + 1) * w, (r - r0) * w
            for c in range(c0, c1 + 1):
                run += bit(r, c)
                acc[base + c - c0 + 1] = acc[prev + c - c0 + 1] + run

        def filled(ra, ca, rb, cb):
            ra, rb = max(ra, r0), min(rb, r1)
            ca, cb = max(ca, c0), min(cb, c1)
            if ra > rb or ca > cb:
                return False
            A, B = (ra - r0) * w, (rb - r0 + 1) * w
            return acc[B + cb - c0 + 1] - acc[A + cb - c0 + 1] - acc[B + ca - c0] + acc[A + ca - c0] > 0

        candidates = []
        steps = int(SEARCH_KM * 1000 / STEP_M)
        for dy in range(-steps, steps + 1):
            for dx in range(-steps, steps + 1):
                d = math.hypot(dx, dy) * STEP_M
                if d <= SEARCH_KM * 1000:
                    candidates.append((d, dy, dx))
        candidates.sort()
        # Each level takes the closest centre where it is playable.
        for level, spec in LEVELS.items():
            cells = spec["rows"] * spec["cols"]
            lo, hi = DENSITY[level]
            chosen = None
            for d, dy, dx in candidates:
                clat = lat + dy * STEP_M / 111_320.0
                clon = lon + dx * STEP_M / (111_320.0 * math.cos(lat * math.pi / 180))
                mines = board_at(clat, clon, spec, filled)
                if not lo <= len(mines) / cells <= hi:
                    continue
                start, size = opening(mines, spec["rows"], spec["cols"])
                if start is not None and size >= MIN_OPENING:
                    chosen = (clat, clon, d, mines, start)
                    break
            if chosen is None:
                raise SystemExit(f"no playable {level} board within {SEARCH_KM} km of {name}")
            clat, clon, d, mines, start = chosen
            key = f"{slug}/{level}"
            boards[key], starts[key] = mines, start
            centres[key] = [round(clat, 4), round(clon, 4), round(d / 1000, 1)]

    data = {
        "data_as_of": meta["data_as_of"],
        "source_count": meta["source_count"],
        "country_km2": COUNTRY_SUSPECTED_KM2,
        "regions": [
            {"slug": slug, "name": name, "lat": lat, "lon": lon, "km2": km2}
            for slug, name, lat, lon, km2 in REGIONS
        ],
        "levels": LEVELS,
        "boards": boards,
        "starts": starts,
        "centres": centres,
    }
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(data, separators=(",", ":")) + "\n")
    counts = ", ".join(f"{k}={len(v)}/{LEVELS[k.split('/')[1]]['rows'] * LEVELS[k.split('/')[1]]['cols']}" for k, v in boards.items())
    print("centres:", centres)
    print(f"wrote {out.relative_to(site)} (snapshot {meta['data_as_of']}): {counts}")


if __name__ == "__main__":
    main()
