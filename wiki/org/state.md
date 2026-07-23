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
The clone was later synced to upstream pi-brain v0.2.0, gaining the
`/brain:update` skill, updated extension and skill docs, and new upstream
records; see
[ADR: Sync latest upstream pi-brain changes (v0.2.0)](../muhamed.github.io/adrs/sync-latest-pi-brain-v0-2-0.md).

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

- **2026-07-23 — Brain-card stream promoted to production home page and
deployed.** The card stream "Peek into my brain" now lives at `/`. Blog posts
moved to `/writing/`. Individual stream entries have permalink pages at
`/brain/:slug/`. Separate RSS feeds exist at `/feed.xml` (posts) and
`/brain.xml` (stream). Prototype routes `/brain/`, `/brain-cards/`,
`/brain-minimal/`, `/brain-book/`, and `/brain-window/` were removed.
Refinements added: "Load more" pagination, disclaimer that the stream is
AI-assisted, tags on existing posts, updated About page and career timeline,
empty-state message, and a footer link to the `/brain.xml` feed alongside the
existing `/feed.xml` link. Later implemented unified tag filtering and search:
clicking a tag on brain cards, stream entries, writing cards, or writing posts
filters the relevant page; `/writing/` gained search and "Load more"; the
standalone `/search/` page was removed. Later implemented multi-tag filtering
and a `/tags/` explorer page with per-section counts; Brain and Writing pages
support selecting multiple tags (OR logic) alongside text search. Deployed to
muhamed.at via GitHub Actions. See
[ADR: Make the brain-card stream the home page](../muhamed.github.io/adrs/make-brain-cards-the-home-page.md),
[PRD: Unified tag filtering and search](../prds/unified-tag-filtering-and-search.md),
and
[PRD: Multi-tag filtering and tag explorer](../prds/multi-tag-filtering-and-tag-explorer.md).
The implementation was later refined so Brain and Writing share a single search
input that accepts both text and `#tag` tokens, with tag chips toggling
`#tag` filters.

## What needs attention

- Replace sample stream entries with real content before publicizing.
- Monitor GitHub Pages build after next push.
