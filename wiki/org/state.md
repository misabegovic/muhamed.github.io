---
kind: state
status: living
confidence: low
---

# State — muhamed.github.io

## Where we are

This repo was just converted into a pi-brain clone. Project code now lives in
[files/](../../files/). To preserve GitHub Pages publishing for this user site,
`.github/workflows/pages.yml` builds and deploys the Jekyll site from `files/`
using GitHub Actions.

The conversion decision is recorded in
[ADR: Convert repo to pi-brain clone and deploy site via GitHub Actions](../muhamed.github.io/adrs/convert-repo-to-pi-brain-actions.md).

The clone has been synced with upstream pi-brain guardrails; see
[ADR: Sync clone with upstream pi-brain guardrails](../muhamed.github.io/adrs/sync-upstream-pi-brain-guardrails.md).
A later update pulled in the autonomy-mode and PR-convention changes; see
[ADR: Sync latest upstream pi-brain updates](../muhamed.github.io/adrs/sync-latest-upstream-pi-brain-updates.md).
The full upstream file structure was then backfilled so the clone is no longer
missing `tools/`, `skills/`, `personas/`, `prompts/`, `themes/`, `extensions/`,
`tests/`, or the remaining template files; see
[ADR: Backfill missing upstream pi-brain files](../muhamed.github.io/adrs/backfill-missing-upstream-pi-brain-files.md).

The Pages workflow is pinned to Ruby 3.2 because the locked `nokogiri` 1.15.5
precompiled binary requires Ruby `< 3.3.dev`.

## Recent incidents

- **2026-07-22 — `muhamed.at` returned GitHub Pages 404.** Root causes: custom
domain not set in GitHub Pages settings, and Jekyll failing because `vendor/`
was not excluded in `_config.yml`. Resolved by setting the custom domain to
`muhamed.at`, adding `vendor` to `exclude`, and aligning `url`/`enforce_ssl`
to `https://muhamed.at`. See
[ADR: Jekyll vendor exclude and custom domain](../muhamed.github.io/adrs/jekyll-vendor-exclude-and-custom-domain.md).

## Recent changes

- **2026-07-23 — Brain-card stream promoted to production home page.** The card
stream "Peek into my brain" now lives at `/`. Blog posts moved to `/writing/`.
Individual stream entries have permalink pages at `/brain/:slug/`. Separate RSS
feeds exist at `/feed.xml` (posts) and `/brain.xml` (stream). Prototype routes
`/brain/`, `/brain-cards/`, `/brain-minimal/`, `/brain-book/`, and
`/brain-window/` were removed. Refinements added: "Load more" pagination on the
home page, tags on existing posts, updated About page, and an empty-state
message when no stream entries exist. See
[ADR: Make the brain-card stream the home page](../muhamed.github.io/adrs/make-brain-cards-the-home-page.md).

## What needs attention

- Replace sample stream entries with real content before publicizing.
- Monitor GitHub Pages build after next push.
