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
  - sources/doc/2026-09-16--izbori2026-responsive-measurements.md
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

Deploy confirmed live rather than merely green, on 2026-09-16 after the Pages run
triggered by merging #14: `/politika/analiza-izbora/` and each of its new pages —
`projekcije.html`, `provjera-modela.html`, the per-chamber `projekcija-*.html`,
`stranke.html` and the section sitemap — answer 200 from `muhamed.at`, and the
served HTML carries the new content rather than an earlier cached render. Worth
the extra step: a green Pages run only proves the artifact was uploaded, and the
failure this section keeps recording is precisely one where everything is green
and the site still serves the previous version.

Live is not the same as readable. A reader opened `projekcije.html` on a phone the
same day and reported the layout broken, and it was: the new projection tables
reused the calibration grid's styling, which forbids wrapping, without the box
that scrolls it sideways. On a 390px phone the projection hub laid itself out
901px wide (source:
sources/doc/2026-09-16--izbori2026-responsive-measurements.md). Fixed in
`izbori2026` #6 and measured the way the earlier passes should have been: 271
distinct page shapes at 320, 390, 768 and 1280px, none now wider than the window
it is given. Two things worth carrying forward. First, every check this section
had until now — HTTP status, served content, link scan, page and byte counts —
passes cleanly on a page that is unreadable on the device most people will open
it on; viewport width belongs in the same list. Second, the same pass found that
the site's Cyrillic and larger-text buttons had been falling off the right edge
of the nav strip at every width, from before this release, because the strip
scrolls sideways and nothing on screen says so. Replaced the same evening with a
menu behind a button below 700px (`izbori2026` #8), which is the honest fix: a
strip that scrolls sideways hides things without saying it hides them, and no
check this record uses reports it, because the strip clips its own overflow and
the page fits.

Two more rounds the same evening, from the same reader, both worth the record
because neither is caught by anything measured here. First, the projection pages
put a person's percentage, name and detail in one wrapped paragraph, and the
presidency races in a four-column table where two columns are sentences — which
the earlier fix made narrow and unreadable at the same time (`izbori2026` #9).
Making a table shrink and making it readable are different problems, and solving
the first completely can make the second worse. Second, names went nowhere: links
to party pages went from 10,331 to 31,781, to municipalities from 286 to 7,405,
and the presidency candidates, who carried an identifier in the data all along,
were never linked at all (`izbori2026` #10). Every link is now built through a
lookup that returns nothing when the target has no page — an identifier exists
for everyone on a ballot, a page does not — and the tree still measures 0 broken
internal links across 7,297 pages.

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

  Both of those are closed to an automation acting through the GitHub App:
  `workflow_dispatch` and re-running a finished run each return 403, so a push to
  this repository is the only lever left. The commit carrying this paragraph is
  that push, made to bring `izbori2026` 03f041a live rather than let it sit until
  the 04:00 UTC schedule. It is a workaround, and worth writing down: the site's
  release cadence currently depends on finding something true to say in this
  repository at the moment the guide changes.
- The Railway deploy still serves the same content at a second public URL, and
  no canonical URL is declared. Retiring it, or adding canonical tags, is a
  separate decision.

## Related

- [ADR — Host the Izbori 2026 voter guide at muhamed.at/politika/analiza-izbora](../adrs/host-izbori2026-under-politika.md)
- [Constraint: ADR before structural changes](../constraints/adr-before-structural-changes.md)
- [State — muhamed.github.io](../state.md)
