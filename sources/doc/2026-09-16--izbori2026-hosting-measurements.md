---
kind: source
source_kind: doc
ingested_at: 2026-09-16
summary: Measurements taken while deciding how to host the izbori2026 voter guide on muhamed.at
---

# Hosting measurements — izbori2026 at commit db1f6fd, muhamed.github.io at commit e1e6621

Taken on 2026-09-16 in a Linux container with Python 3.11.15 and Ruby 3.3.

## Rendering the guide

```
$ pip install -r requirements.txt && time python3 render.py
rendered: 47 listića, 143 općina, 1161 kandidata, 56 stranaka
real	0m8.666s
```

- Output tree: `dist/`, flat, 1417 files, 39 MB.
- 1415 of those are `.html`; the rest are `viz.js` and `lica/` (169 WebP portraits, 736 KB).
- Runtime dependency is `jinja2>=3.1` only. All input data is committed under `data/` (17 MB), so rendering needs no network access.

## Link shape

A scan of every `href` and `src` in the rendered tree:

```
checked relative refs: 21793
missing/absolute: 0
```

The only apparent exception, `src="cands"`, is a false positive: it matches the
`data-src="cands"` attribute that `static/viz.js` reads, not an asset reference.
No emitted link starts with `/`, so the whole `dist/` tree can be mounted under
an arbitrary path prefix without rewriting.

## Jekyll site

```
$ cd files && bundle exec jekyll build --baseurl ""
done in 0.952 seconds.
```

- `files/_site` before grafting: 6 MB. After grafting the guide: 45 MB.
- `files/.gitignore` already ignores `_site` and `vendor`.

## Composed site served locally

```
/                                                    200
/politika/                                           200
/politika/analiza-izbora/                            200
/politika/analiza-izbora/stranke.html                200
/politika/analiza-izbora/metoda.html                 200
/politika/analiza-izbora/viz.js                      200
/politika/analiza-izbora/sitemap.xml                 200
/politika/analiza-izbora/lica/o-11458570425.webp     200
```

## Repository facts

- `misabegovic/izbori2026` is public, so the Pages workflow can check it out with the default token.
- Its `railway.json` still describes a Nixpacks deploy that builds with `render.py` and serves `dist/` with `serve.py`.
