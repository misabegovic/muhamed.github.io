---
kind: ai-suggestion
ai_suggestion: true
status: suggested
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

## Suggested action

Add the links that feel natural. The custom-domain → PRD link is probably the most useful, as it connects a delivered infrastructure ADR to an open product question (site navigation/discovery).
