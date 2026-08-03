---
kind: ai-suggestion
ai_suggestion: true
status: suggested
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

## Suggested action

Add the most valuable links manually:

1. In `wiki/brain/records/smarter-autonomy.md` and `wiki/brain/records/upstream-template-sync.md`, add a `## Related` link to `../org/roadmap.md`.
2. In `wiki/muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone.md` and `wiki/muhamed.github.io/constraints/adr-before-structural-changes.md`, add a `## Related` link to `../org/roadmap.md`.
3. In `wiki/muhamed.github.io/adrs/jekyll-vendor-exclude-and-custom-domain.md` and `wiki/muhamed.github.io/adrs/sync-upstream-pi-brain-guardrails.md`, add `## Related` links to each other and to the sharing-section RFC.

Lower-confidence suggestions (e.g., RFC → org/roadmap) can be skipped until the RFC is approved.
