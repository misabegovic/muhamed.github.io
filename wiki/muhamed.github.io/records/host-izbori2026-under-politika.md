---
kind: record
status: current
confidence: medium
implemented_in:
  - .github/workflows/pages.yml
  - .github/scripts/build-analiza-izbora.sh
  - files/_pages/politika.md
  - files/robots.txt
  - files/llms.txt
  - README.md
decided_by: wiki/muhamed.github.io/adrs/host-izbori2026-under-politika.md
sources:
  - sources/doc/2026-09-16--izbori2026-hosting-measurements.md
  - sources/doc/2026-09-16--izbori2026-guide-expansion-measurements.md
  - sources/doc/2026-09-16--izbori2026-projection-measurements.md
---

# Record — Host the Izbori 2026 voter guide on muhamed.at

## What this is

`muhamed.at` is now a composite build. The Jekyll site is built from `files/` as
before, and the Izbori 2026 voter guide is rendered from
`misabegovic/izbori2026` during the same workflow run and mounted at
`/politika/analiza-izbora/`.

## Current truth

- `.github/workflows/pages.yml` checks out `misabegovic/izbori2026` at `main`,
  sets up Python 3.11, and runs the grafting step after the Jekyll build.
- `.github/scripts/build-analiza-izbora.sh` renders the guide and copies
  `dist/` into `files/_site/politika/analiza-izbora/`, then writes a sitemap of
  7,282 pages for that subtree.
- The workflow triggers on push to `main`, on `workflow_dispatch`, on a
  `repository_dispatch` of type `izbori-update`, and daily at 04:00 UTC.
- `izbori2026` sends that dispatch from `.github/workflows/notify-site.yml` on
  every push to its `main`, when `SITE_DISPATCH_TOKEN` is present.
- `/politika/` is a Jekyll page introducing the section.
- `files/robots.txt` lists both sitemaps; `files/llms.txt` lists the section.
- No guide content is committed in this repository.

## Origin

- Decision: [ADR — Host the Izbori 2026 voter guide at muhamed.at/politika/analiza-izbora](../adrs/host-izbori2026-under-politika.md)

## Verification

Run locally on 2026-09-16 against a composed `files/_site`: the site root,
`/politika/`, `/politika/analiza-izbora/`, three interior pages, `viz.js`, the
section sitemap and a portrait asset all returned 200. A scan of all 21,793
internal references in the mounted tree found no broken or root-absolute link.

Re-run the same day after the guide grew from 1,161 candidate profiles to 7,028
(source: sources/doc/2026-09-16--izbori2026-guide-expansion-measurements.md).
110,067 relative references, none broken. Nine page types loaded in Chromium at
phone width with no horizontal overflow and a clean console. The mounted tree is
now 7,499 files and the composed `files/_site` is 79 MB, up from 45 MB.

Re-run again the same day after the guide gained a seat projection and a page
publishing that projection's own error (source:
sources/doc/2026-09-16--izbori2026-projection-measurements.md). Fifteen new pages:
a projection hub, thirteen per-chamber pages including the ten cantonal
assemblies, and `provjera-modela.html`. A clean shallow clone of the merged
branch renders in 24 seconds with no broken internal links, the grafting script
needed no change, and the section sitemap now carries 7,297 pages against 7,282.
The mounted tree is 7,515 files and 94 MB. The deploy contract is unchanged:
`requirements.txt` is still jinja2 only, the render reads committed JSON and calls
no API, and the new pages are guarded so the build survives their data being
absent.

## Open items

- `SITE_DISPATCH_TOKEN` is not yet created on `izbori2026`. Until it is, guide
  updates reach the site on the daily schedule rather than immediately. This has
  now cost two releases. The guide's v5 landed on `izbori2026` main on 2026-09-16
  at 16:41 UTC and v6 at 20:47 UTC; both notify runs completed green with their
  dispatch step **skipped** for want of the token, and the site kept serving the
  previous render each time. A green run that did nothing is the worst shape for
  this to fail in, because nothing looks wrong. Until the token exists, a guide
  release has to be followed by a `workflow_dispatch` on `pages.yml` here, or by
  a push to this repository — a poor reason to touch it.
- The Railway deploy still serves the same content at a second public URL, and
  no canonical URL is declared. Retiring it, or adding canonical tags, is a
  separate decision.

## Related

- [ADR — Host the Izbori 2026 voter guide at muhamed.at/politika/analiza-izbora](../adrs/host-izbori2026-under-politika.md)
- [Constraint: ADR before structural changes](../constraints/adr-before-structural-changes.md)
- [State — muhamed.github.io](../state.md)
