---
kind: ai-suggestion
ai_suggestion: true
status: resolved
confidence: low
tags: [links, org, roadmap, refinement]
---

# Add cross-links surfaced by the link graph

## Observation

`brain-links` currently suggests 8 potential links based on shared neighbors:

- `brain/records/smarter-autonomy` → `org/roadmap`
- `brain/records/upstream-template-sync` → `org/roadmap`
- `muhamed.github.io/adrs/jekyll-vendor-exclude-and-custom-domain` → `muhamed.github.io/adrs/sync-upstream-pi-brain-guardrails`
- `muhamed.github.io/adrs/jekyll-vendor-exclude-and-custom-domain` → `muhamed.github.io/ai-suggestions/rfcs/muhamed-at-sharing-section-design`
- `muhamed.github.io/adrs/sync-upstream-pi-brain-guardrails` → `muhamed.github.io/ai-suggestions/rfcs/muhamed-at-sharing-section-design`
- `muhamed.github.io/ai-suggestions/rfcs/muhamed-at-sharing-section-design` → `org/roadmap`
- `muhamed.github.io/constraints/adr-before-structural-changes` → `org/roadmap`
- `muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone` → `org/roadmap`

## Why it matters

These links would strengthen the graph: upstream product records would point to the org roadmap, and site-level ADRs/RFCs would be connected to each other.

## Resolution

Added cross-links:

- `wiki/brain/records/smarter-autonomy.md` → `org/roadmap`
- `wiki/brain/records/upstream-template-sync.md` → `org/roadmap`
- `wiki/muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone.md` → `org/roadmap`
- `wiki/muhamed.github.io/constraints/adr-before-structural-changes.md` → `org/roadmap`
- `wiki/muhamed.github.io/adrs/jekyll-vendor-exclude-and-custom-domain.md` → `sync-upstream-pi-brain-guardrails`, sharing-section RFC
- `wiki/muhamed.github.io/adrs/sync-upstream-pi-brain-guardrails.md` → `jekyll-vendor-exclude-and-custom-domain`, sharing-section RFC
