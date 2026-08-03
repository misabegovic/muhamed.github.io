---
kind: ai-suggestion
ai_suggestion: true
status: suggested
confidence: medium
tags: [links, refinement]
---

# Batch-add the remaining natural cross-links

## Observation

`brain-links` still suggests 10 cross-links. The strongest ones are:

- `brain/records/smarter-autonomy` → `muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone`
- `brain/records/upstream-template-sync` → `muhamed.github.io/constraints/adr-before-structural-changes`
- `muhamed.github.io/adrs/sync-upstream-pi-brain-guardrails` → `muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone`
- `muhamed.github.io/adrs/backfill-missing-upstream-pi-brain-files` → `muhamed.github.io/adrs/jekyll-vendor-exclude-and-custom-domain`
- `muhamed.github.io/adrs/jekyll-vendor-exclude-and-custom-domain` → `muhamed.github.io/adrs/sync-latest-pi-brain-v0-2-0`

The RFC → roadmap suggestions should wait until the RFC is approved.

## Why it matters

These links connect upstream brain decisions to this clone's site-level guardrails and early setup ADRs. They make the relationship explicit without much noise.

## Suggested action

Add the top 5 links above in `## Related` sections. Skip the RFC and weaker ADR → PRD links for now.
