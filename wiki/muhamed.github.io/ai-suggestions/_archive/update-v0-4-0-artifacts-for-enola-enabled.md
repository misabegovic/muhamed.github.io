---
kind: ai-suggestion
ai_suggestion: true
status: resolved
confidence: high
tags: [enola, records, adrs, refinement]
---

# Update v0.4.0 ADR and record to reflect enabled Enola

## Observation

Both the ADR and the record for the pi-brain v0.4.0 update state that Enola is "available once `enola.enabled: true` is added to `brain.config.yml`". That condition has now been met: `enola.enabled: true` and `enola.target_repo: ./` are in `brain.config.yml`, the baseline is pinned, and `brain_enola_capture` reports no regressions.

## Why it matters

Living documents should describe current truth, not future conditions. Leaving the placeholder language makes the artifacts look stale.

## Resolution

- The ADR already stated Enola was part of the delivered 0.4.0 features; no change needed.
- Updated the record's "Current truth" and "Consequences" sections to say Enola is enabled, the baseline is pinned, and `brain_enola_capture` reports no regressions.
