---
kind: ai-suggestion
ai_suggestion: true
status: resolved
confidence: low
tags: [links, refinement]
---

# Add the remaining low-confidence cross-links

## Observation

`brain-links` still suggests 4 links:

- `muhamed.github.io/adrs/jekyll-vendor-exclude-and-custom-domain` → `muhamed.github.io/adrs/make-brain-cards-the-home-page`
- `muhamed.github.io/adrs/jekyll-vendor-exclude-and-custom-domain` → `muhamed.github.io/constraints/adr-before-structural-changes`
- `muhamed.github.io/adrs/make-brain-cards-the-home-page` → `muhamed.github.io/adrs/sync-upstream-pi-brain-guardrails`
- `muhamed.github.io/ai-suggestions/rfcs/muhamed-at-sharing-section-design` → `org/roadmap`

## Why it matters

These are weaker signals than the previous batch, but they connect site-level deployment ADRs to each other and to the structural constraint. The RFC → org/roadmap link is only worth adding if the RFC graduates.

## Resolution

Added cross-links:

- `jekyll-vendor-exclude-and-custom-domain` → `make-brain-cards-the-home-page`
- `jekyll-vendor-exclude-and-custom-domain` → `constraints/adr-before-structural-changes`
- `make-brain-cards-the-home-page` → `sync-upstream-pi-brain-guardrails`

Skipped the RFC → org/roadmap link because the RFC is still suggested, not approved.
