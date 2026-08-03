---
kind: ai-suggestion
ai_suggestion: true
status: suggested
confidence: low
tags: [links, refinement]
---

# Add the top remaining cross-links from brain-links suggestions

## Observation

`brain-links` currently suggests 13 new links. The highest-value ones connect the core upstream brain records to site-level decisions:

- `brain/records/smarter-autonomy` ↔ `brain/records/upstream-template-sync`
- `brain/records/smarter-autonomy` → `muhamed.github.io/constraints/adr-before-structural-changes`
- `brain/records/smarter-autonomy` → `muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone`
- `brain/records/upstream-template-sync` → `muhamed.github.io/constraints/adr-before-structural-changes`
- `brain/records/upstream-template-sync` → `muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone`
- `muhamed.github.io/constraints/adr-before-structural-changes` → `muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone`

## Why it matters

These links would make the relationship between upstream pi-brain decisions and this clone's site-level guardrails explicit. They are optional; the graph is already healthy.

## Suggested action

Add the natural bidirectional links in `## Related` sections. Skip any that feel forced. This is low priority.
