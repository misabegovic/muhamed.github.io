---
kind: ai-suggestion
ai_suggestion: true
status: resolved
confidence: medium
tags: [state, roadmap, muhamed.github.io, refinement]
---

# Create state/roadmap/options pages for the muhamed.github.io scope

## Observation

The `muhamed.github.io` scope has ADRs, PRDs, constraints, records, and RFCs, but no `wiki/muhamed.github.io/state.md`, `roadmap.md`, or `options.md`. They are currently surfaced only through the org scope (`wiki/org/{state,roadmap,options}.md`).

## Why it matters

Site-level decisions (custom domain, brain cards as homepage, v0.4.0 update) compete for attention with upstream pi-brain product decisions in the org view. A dedicated `muhamed.github.io` state/roadmap would separate site concerns from product concerns.

## Resolution

Ran `brain-state muhamed.github.io`. Generated:

- `wiki/muhamed.github.io/state.md`
- `wiki/muhamed.github.io/roadmap.md`
- `wiki/muhamed.github.io/options.md`

The state pages now separate site-level decisions from upstream pi-brain product decisions in the org scope.
