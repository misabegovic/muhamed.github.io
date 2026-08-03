---
kind: ai-suggestion
ai_suggestion: true
status: suggested
confidence: high
tags: [records, pi-brain, adr, refinement]
---

# Create a record for the accepted pi-brain v0.4.0 update

## Observation

The ADR `wiki/muhamed.github.io/adrs/update-pi-brain-v0-4-0-hybrid-clone.md` has been accepted and implemented (commit `3ad63b6`). There is no corresponding record page documenting that the update was delivered.

## Why it matters

The brain convention is to create or update a record after a decision lands. Records are the stable, post-delivery artifact; ADRs are the decision rationale. Without a record, the state of the system is split between the ADR and the git log.

## Suggested action

Create `wiki/muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone.md` summarizing:

- What version the clone is now on (`v0.4.0`).
- The hybrid-site carve-out (Pages workflow, README, AGENTS kept at root).
- The package-resolved consumer model (`@misabegovic/pi-brain` in `package.json`, validate workflow pin).
- Any known follow-ups (e.g., dead-link noise from package-resolved paths).

Link it from the ADR and from `wiki/org/state.md` under "What is stable" if appropriate.
