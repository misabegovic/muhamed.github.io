---
kind: ai-suggestion
ai_suggestion: true
status: resolved
confidence: low
tags: [links, roadmap, muhamed.github.io, refinement]
---

# Link records and constraints to muhamed.github.io/roadmap

## Observation

Now that `wiki/muhamed.github.io/roadmap.md` exists, `brain-links` suggests connecting several pages to it:

- `brain/records/smarter-autonomy` → `muhamed.github.io/roadmap`
- `brain/records/upstream-template-sync` → `muhamed.github.io/roadmap`
- `muhamed.github.io/constraints/adr-before-structural-changes` → `muhamed.github.io/roadmap`
- `muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone` → `muhamed.github.io/roadmap`

## Why it matters

These pages are already linked to `org/roadmap`, but the new site-level roadmap is a more specific home for site-affecting decisions. Dual-linking them makes the site scope navigable on its own.

## Resolution

Added `## Related` links to `muhamed.github.io/roadmap.md` from:

- `wiki/brain/records/smarter-autonomy.md`
- `wiki/brain/records/upstream-template-sync.md`
- `wiki/muhamed.github.io/constraints/adr-before-structural-changes.md`
- `wiki/muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone.md`
