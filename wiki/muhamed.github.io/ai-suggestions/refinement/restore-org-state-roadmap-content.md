---
kind: ai-suggestion
ai_suggestion: true
status: suggested
confidence: high
tags: [state, roadmap, org, refinement]
---

# Restore custom content in org state/roadmap/options pages

## Observation

`wiki/org/state.md`, `wiki/org/roadmap.md`, and `wiki/org/options.md` were regenerated during the v0.4.0 link cleanup. The new files use `<!-- brain-state: ... -->` markers, which is correct, but they now contain placeholder text instead of the previous custom content:

- **state.md** lost: "What changed recently" (pointing to `log/log.md`) and "What needs attention" (pointing to inbox and links).
- **roadmap.md** lost: "Candidate", "Parked", and the explicit note about `ai-suggestions/` awaiting graduation.
- **options.md** lost: "What we are not doing" and "Triggers for revisiting".

## Why it matters

The auto-generated scaffold is less useful than the previous living document. The placeholders don't guide a reader to the actual state of the org scope.

## Suggested action

1. Add the custom sections back inside the brain-state markers.
2. Keep the marker-based format so future `brain-state` runs preserve the content.
3. Include the new `muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone.md` in the stable/committed section of `org/state.md` and `org/roadmap.md` now that the update is delivered.
