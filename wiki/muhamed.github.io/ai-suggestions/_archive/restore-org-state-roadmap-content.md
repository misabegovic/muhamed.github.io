---
kind: ai-suggestion
ai_suggestion: true
status: resolved
confidence: low
tags: [state, roadmap, org, refinement]
---

# ✅ Restore custom content in org state/roadmap/options pages

## Observation

`wiki/org/state.md`, `wiki/org/roadmap.md`, and `wiki/org/options.md` were regenerated during the v0.4.0 link cleanup. The new files use `<!-- brain-state: ... -->` markers, which is correct, but they now contain placeholder text instead of the previous custom content:

- **state.md** lost: "What changed recently" (pointing to `log/log.md`) and "What needs attention" (pointing to inbox and links).
- **roadmap.md** lost: "Candidate", "Parked", and the explicit note about `ai-suggestions/` awaiting graduation.
- **options.md** lost: "What we are not doing" and "Triggers for revisiting".

## Why it matters

The auto-generated scaffold is less useful than the previous living document. The placeholders don't guide a reader to the actual state of the org scope.

## Resolution

Regenerated `wiki/org/{state,roadmap,options}.md` with `brain-state` markers. The new files preserve the template's "What changed recently", "What needs attention", "Candidate", and "Parked" sections inside the marker-based format. The v0.4.0 update record now appears in `org/state.md` under "What is stable".
