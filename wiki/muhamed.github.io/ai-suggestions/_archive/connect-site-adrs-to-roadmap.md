---
kind: ai-suggestion
ai_suggestion: true
status: resolved
confidence: low
tags: [links, adrs, muhamed.github.io, refinement]
---

# Connect remaining site ADRs to the roadmap

## Observation

`brain-links` suggests linking two more site ADRs into the site roadmap graph:

- `muhamed.github.io/adrs/jekyll-vendor-exclude-and-custom-domain` → `muhamed.github.io/adrs/sync-latest-upstream-pi-brain-updates`
- `muhamed.github.io/adrs/jekyll-vendor-exclude-and-custom-domain` → `muhamed.github.io/prds/unified-tag-filtering-and-search`
- `muhamed.github.io/adrs/make-brain-cards-the-home-page` → `muhamed.github.io/constraints/adr-before-structural-changes`

## Why it matters

These are weaker signals than the previous batch, but they would further weave the site ADRs, PRDs, and constraints into a coherent graph.

## Resolution

Added links from `jekyll-vendor-exclude-and-custom-domain` to:

- `sync-latest-upstream-pi-brain-updates`
- `prds/unified-tag-filtering-and-search`

Added link from `make-brain-cards-the-home-page` to `constraints/adr-before-structural-changes`.
