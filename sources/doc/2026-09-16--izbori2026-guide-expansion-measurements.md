---
kind: source
source_kind: doc
ingested_at: 2026-09-16
summary: Second measurement pass after the voter guide grew from winners-only profiles to a page for every candidate
---

# Hosting measurements, second pass — izbori2026 after the profile expansion

Taken on 2026-09-16, same container as the first pass.

## What changed upstream

The guide used to fetch candidacy history one person at a time and only for people who
had already won or hold office, so it rendered 1,161 profiles out of 7,028 people on the
2026 ballots. It now pulls the whole `/candidacies` collection in bulk and renders a page
for everyone.

## Rendering

```
$ python3 render.py
rendered: 47 listića, 143 općina, 7028 kandidata, 56 stranaka
```

| measure | before | after |
| --- | --- | --- |
| candidate pages | 1,161 | 7,028 |
| files in `dist/` | 1,417 | 7,330 |
| `dist/` size | 39 MB | 74 MB |
| render time | 9 s | 18 s |

Two changes kept the size down while the page count grew six-fold.

- The shared CSS and JS were inlined into every page, 12.7 KB each. Across 7,028 pages
  that is 87 MB of duplication. They are now `style.css` and `app.js`, fingerprinted for
  cache busting.
- The per-ballot comparison data was inlined too. On the Tuzla canton ballot that is 519
  candidates in every profile on that paper. Inlining it took `dist/` to 661 MB. It now
  lives in one `kandidati-<race>-<area>.json` per ballot, 2.4 MB in total, fetched only
  when the reader opens the chart.

## Composed site

```
$ cd files && bundle exec jekyll build --baseurl ""
$ ./.github/scripts/build-analiza-izbora.sh ../izbori2026 files/_site
sitemap.xml: 7282 pages
mounted 7499 files at /politika/analiza-izbora/
```

`files/_site` is 79 MB, against 45 MB in the first pass. The grafting step takes about 20
seconds including the render.

## Link check

A scan of every `href` and `src` in the mounted tree:

```
html: 7282   relative refs: 110067   broken: 0
data-url targets: 43   missing: 0
```

Nine page types were also loaded in Chromium at 390 px wide: all returned 200, none
produced horizontal overflow, and the console was clean.
