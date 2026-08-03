---
kind: ai-suggestion
ai_suggestion: true
status: suggested
confidence: high
tags: [enola, records, adrs, refinement]
---

# Update v0.4.0 ADR and record to reflect enabled Enola

## Observation

Both the ADR and the record for the pi-brain v0.4.0 update state that Enola is "available once `enola.enabled: true` is added to `brain.config.yml`". That condition has now been met: `enola.enabled: true` and `enola.target_repo: ./` are in `brain.config.yml`, the baseline is pinned, and `brain_enola_capture` reports no regressions.

## Why it matters

Living documents should describe current truth, not future conditions. Leaving the placeholder language makes the artifacts look stale.

## Suggested action

1. Update `wiki/muhamed.github.io/adrs/update-pi-brain-v0-4-0-hybrid-clone.md` Consequences section to say Enola is enabled and baseline is pinned.
2. Update `wiki/muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone.md` Current truth and Consequences sections to reflect the same.
3. Optionally add an Enola receipt citation to the record or a related wiki page.
