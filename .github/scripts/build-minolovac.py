#!/usr/bin/env python3
"""Build the Minolovac boards for /igre/minolovac/ from Usput.ba's snapshot.

The game is ported from Usput.ba (app/controllers/minesweeper_controller.rb).
A board is a geographic grid around a preset region; a cell holds a mine iff
any cell of the 50 m "inside" mask (cells that intersect a recorded
mine-suspected area, dilated at build time so quantization only ever errs
toward danger) falls inside the board cell's rectangle. This is the same rule
as MineChecker::StaticIndex#mine_cells, reimplemented here so the site can be
fully static.

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

    def any_bit(south, west, north, east):
        r_min, r_max = max(row_for(south), 0), min(row_for(north), grid["rows"] - 1)
        c_min, c_max = max(col_for(west), 0), min(col_for(east), grid["cols"] - 1)
        return any(bit(r, c) for r in range(r_min, r_max + 1) for c in range(c_min, c_max + 1))

    boards = {}
    for slug, _name, lat, lon, _km2 in REGIONS:
        for level, spec in LEVELS.items():
            rows, cols, cell_m = spec["rows"], spec["cols"], spec["cell_m"]
            dlat = cell_m / 111_320.0
            dlon = cell_m / (111_320.0 * math.cos(lat * math.pi / 180))
            south = lat - rows * dlat / 2
            west = lon - cols * dlon / 2
            mines = [
                r * cols + c
                for r in range(rows)
                for c in range(cols)
                if any_bit(south + r * dlat, west + c * dlon, south + (r + 1) * dlat, west + (c + 1) * dlon)
            ]
            boards[f"{slug}/{level}"] = mines

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
    }
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(data, separators=(",", ":")) + "\n")
    counts = ", ".join(f"{k}={len(v)}" for k, v in boards.items())
    print(f"wrote {out.relative_to(site)} (snapshot {meta['data_as_of']}): {counts}")


if __name__ == "__main__":
    main()
