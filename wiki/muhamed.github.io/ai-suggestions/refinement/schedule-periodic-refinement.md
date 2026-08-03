---
kind: ai-suggestion
ai_suggestion: true
status: suggested
confidence: low
tags: [process, autonomy, refinement]
---

# Schedule periodic refinement instead of continuous micro-linking

## Observation

The autonomous refinement protocol has been run many times in rapid succession. Each pass produces a smaller set of cross-link suggestions. The corpus is now healthy: 0 dead links, 61 pages, 361 edges. The remaining suggestions are mostly optional cross-links with diminishing informational value.

## Why it matters

Continuously acting on weak cross-link suggestions creates churn without meaningfully improving the corpus. A scheduled review (e.g., weekly or after a batch of changes) would catch real issues without adding noise.

## Suggested action

1. Record an ADR or note establishing a refinement cadence: run the protocol after significant changes or on a schedule, not every session.
2. Keep the threshold for action high: dead links, missing records, and stale content are worth fixing; weak cross-link suggestions can be left until they cluster or a page is actively being edited.
3. Let the remaining 10 link suggestions sit unless another edit touches one of the involved pages.
