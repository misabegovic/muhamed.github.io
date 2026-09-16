---
kind: source
source_kind: doc
ingested_at: 2026-09-16
summary: Third measurement pass after the voter guide gained a seat projection and a page publishing the projection's own error
---

# Hosting measurements, third pass — izbori2026 after the projection

Taken on 2026-09-16, same container as the first two passes, against
`misabegovic/izbori2026` at `d3742d2` (PR #4, merged).

## What changed upstream

The guide used to answer one question about a candidate: what share of people in the
same position on a list, with the same personal record, actually won in 2022. It now also
answers the other one — how often this person ends up with a seat when the 2026 election
is simulated ten thousand times. Both numbers sit side by side on every profile.

Three new page types come with it: `projekcije.html`, one `projekcija-<dom>.html` per
chamber including the ten cantonal assemblies, and `provjera-modela.html`, which publishes
how far the same model was off when it was replayed on 2022 while being fed only what was
knowable before that election.

Nothing about the deploy contract changed. `requirements.txt` is untouched (jinja2 only),
`render.py` reads committed JSON and never calls an API, and every new page sits behind a
guard so the build still succeeds if the projection data is absent.

## Rendering

From a clean shallow clone of the merged branch:

```
$ python3 render.py
rendered: 47 listića, 143 općina, 7028 kandidata, 56 stranaka

real    0m23.668s
```

| measure | second pass | third pass |
| --- | --- | --- |
| html pages | 7,282 | 7,297 |
| files in `dist/` | 7,330 | 7,346 |
| `dist/` size | 74 MB | 80 MB |
| render time | 18 s | 24 s |

The fifteen new pages are one projection hub, thirteen per-chamber pages and one page of
model error. The six megabytes are mostly the projection block added to each of the 7,028
candidate pages and the per-ballot projection tables.

## Composed site

```
$ ./.github/scripts/build-analiza-izbora.sh <checkout> <site>
rendered: 47 listića, 143 općina, 7028 kandidata, 56 stranaka
sitemap.xml: 7297 pages
mounted 7515 files at /politika/analiza-izbora/
```

94 MB mounted, against 79 MB in the second pass. The grafting step needed no change: it
copies `dist/` wholesale and the sitemap picks the new pages up by itself — fourteen of the
URLs in it are now projection pages.

## Link check

A scan of every `href` in the rendered tree:

```
html: 7297   broken internal links: 0
```

The one apparent miss is a JavaScript template string in the name-search code
(`kandidat-' + r[1] + '.html'`), not a link.

## Note on the guide's own error reporting

Worth recording because it is the part a reader is most likely to test: the projection
publishes its measured error rather than a confidence claim. On the 2022 replay it was off
by 1.65 percentage points per list per constituency and 1.45 seats per party, with a Brier
score of 0.0374 and a calibration miss of 0.54 points. It also states, on the page, that
its seat ranges still cover the real answer 98 percent of the time instead of the 90 they
advertise, and that one correction was tried and dropped for making the result worse.
