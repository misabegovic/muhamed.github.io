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
  1,415 pages for that subtree.
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

## Open items

- `SITE_DISPATCH_TOKEN` is not yet created on `izbori2026`. Until it is, guide
  updates reach the site on the daily schedule rather than immediately.
- The Railway deploy still serves the same content at a second public URL, and
  no canonical URL is declared. Retiring it, or adding canonical tags, is a
  separate decision.

## Related

- [ADR — Host the Izbori 2026 voter guide at muhamed.at/politika/analiza-izbora](../adrs/host-izbori2026-under-politika.md)
- [Constraint: ADR before structural changes](../constraints/adr-before-structural-changes.md)
- [State — muhamed.github.io](../state.md)
