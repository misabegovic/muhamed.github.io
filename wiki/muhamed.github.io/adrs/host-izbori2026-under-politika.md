---
kind: decision
status: accepted
confidence: low
sources:
  - sources/repo/2026-09-16--izbori2026-readme.md
  - sources/doc/2026-09-16--izbori2026-hosting-measurements.md
  - sources/doc/2026-07-22--pages-yml.md
  - files/_config.yml
  - files/robots.txt
---

# Host the Izbori 2026 voter guide at muhamed.at/politika/analiza-izbora

## Context

`misabegovic/izbori2026` is a plain-language guide to the 4 October 2026 general
election in Bosnia and Herzegovina (source: sources/repo/2026-09-16--izbori2026-readme.md).
It is a Python generator: `render.py` turns committed JSON under `data/` into a
flat static tree of about 1,400 pages in roughly nine seconds, with `jinja2` as
its only runtime dependency. Until now its only deploy target was Railway.

The user asked for it to be served from the personal site at
`muhamed.at/politika/analiza-izbora`. That path did not exist, and `muhamed.at`
is a Jekyll site built from `files/` and deployed by `.github/workflows/pages.yml`
(source: sources/doc/2026-07-22--pages-yml.md).

Two measured facts shaped the decision
(source: sources/doc/2026-09-16--izbori2026-hosting-measurements.md):

1. Every one of the 21,793 internal references the generator emits is relative.
   None begins with `/`. The tree is therefore mountable under any path prefix
   without rewriting links or teaching the generator about a base URL.
2. The rendered tree is 39 MB across 1,417 files.

This touches `.github/workflows/`, so the `adr-before-structural-changes`
constraint applies and this ADR precedes the change.

## Decision

Mount the guide into the Pages artifact at build time rather than committing it.

1. `.github/workflows/pages.yml` gains a second `actions/checkout` step for
   `misabegovic/izbori2026` at `main`, a Python 3.11 setup step, and a grafting
   step that runs after the Jekyll build and before the artifact upload.
2. The grafting logic lives in `.github/scripts/build-analiza-izbora.sh`, not
   inline in YAML, so it can be run and tested locally. It installs the
   generator's requirements, runs `render.py`, copies `dist/` to
   `files/_site/politika/analiza-izbora/`, and writes a sitemap for that
   subtree.
3. `files/robots.txt` advertises the section sitemap alongside the Jekyll one,
   because `jekyll-sitemap` only indexes pages Jekyll itself built.
4. A new Jekyll page at `/politika/` introduces the section, so the parent path
   is not a 404 and the guide has an inbound link from the site.
5. `files/llms.txt` lists the section under "Key pages".
6. Freshness has two independent paths. `izbori2026` gains
   `.github/workflows/notify-site.yml`, which sends a `repository_dispatch` of
   type `izbori-update` on every push to its `main`; `pages.yml` accepts that
   event type. Because cross-repository dispatch cannot use `GITHUB_TOKEN`, that
   workflow needs a `SITE_DISPATCH_TOKEN` secret and is a no-op without one. A
   daily `schedule` on `pages.yml` covers the case where the secret is never
   configured.

## Alternatives considered

1. **Commit the rendered `dist/` into `files/politika/analiza-izbora/`.**
   - *Trade-off:* No cross-repository coupling and no build-time dependency on
     Python. But it adds 39 MB of generated HTML to this repository on every
     data refresh, permanently, and makes the site repository the second home of
     content it does not own. It also puts 1,400 files through the Jekyll
     pipeline for no benefit. Rejected on repository weight and ownership.

2. **Keep the guide on Railway and put a redirect at `/politika/analiza-izbora`.**
   - *Trade-off:* Smallest change here, but the content would not actually live
     on `muhamed.at`, the address bar would leave the domain, and the site would
     inherit Railway's availability. The request was to host it, not to point at
     it.

3. **Make `izbori2026` a git submodule of this repository.**
   - *Trade-off:* Pins an exact commit, which is a real advantage for
     reproducibility. But it requires a commit here for every guide update,
     which defeats the point of the dispatch trigger, and submodules are a
     standing maintenance cost in a repository that has none today.

4. **Teach `render.py` a base-URL option and emit absolute links.**
   - *Trade-off:* Unnecessary. The generator already emits only relative links,
     which is the property that makes mounting work. Adding a base URL would
     create a coupling between the two repositories that does not need to exist.

5. **Rebuild on a `schedule` only, with no dispatch.**
   - *Trade-off:* No secret to configure, but up to 24 hours of lag on a guide
     that is being corrected in the weeks before an election. The dispatch is
     kept as the fast path and the schedule as the fallback.

## Consequences

- `muhamed.at/politika/analiza-izbora/` serves the guide; `muhamed.at/politika/`
  introduces it. Verified locally against a composed `_site`.
- Nothing from `izbori2026` is committed here. The two repositories stay
  independent and the guide is rendered fresh on every site build.
- The site build now depends on `misabegovic/izbori2026` remaining public and on
  `render.py` succeeding. If the render fails, the Pages deploy fails rather
  than publishing a site with a missing section. That is the intended trade: a
  visible failure over a silent one.
- Site build time grows by roughly ten seconds of rendering plus the checkout
  and a `pip install`. The uploaded artifact grows from about 6 MB to about 45 MB.
- The Pages workflow now runs daily. Every run republishes the whole site, not
  just the guide.
- Until `SITE_DISPATCH_TOKEN` is created on `izbori2026`, guide updates reach
  `muhamed.at` on the daily schedule rather than immediately. This is the one
  manual step the decision leaves open.
- The Railway deploy is untouched and still serves the same content. Two public
  copies of the guide now exist and neither declares a canonical URL. If the
  Railway copy is meant to be retired, that is a separate decision.
- `llms-full.txt` deliberately does not inline the guide. 1,400 pages of
  candidate records would swamp a file meant to summarise the site.

## Related

- [ADR: Post-incident fix: exclude vendor/ and configure custom domain for GitHub Pages](jekyll-vendor-exclude-and-custom-domain.md)
- [ADR: Convert repo to pi-brain clone and deploy site via GitHub Actions](convert-repo-to-pi-brain-actions.md)
- [Constraint: ADR before structural changes](../constraints/adr-before-structural-changes.md)
- [Record — Host the Izbori 2026 voter guide on muhamed.at](../records/host-izbori2026-under-politika.md)
- [State — muhamed.github.io](../state.md)
- [Roadmap — muhamed.github.io](../roadmap.md)
- `.github/workflows/pages.yml`
- `.github/scripts/build-analiza-izbora.sh`
- `files/_pages/politika.md`
- `files/robots.txt`
- `files/llms.txt`
