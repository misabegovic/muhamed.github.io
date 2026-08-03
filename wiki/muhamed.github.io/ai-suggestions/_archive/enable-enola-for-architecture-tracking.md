---
kind: ai-suggestion
ai_suggestion: true
status: resolved
confidence: low
tags: [enola, architecture, pi-brain, refinement]
---

# Enable Enola architecture tracking

## Observation

pi-brain v0.4.0 added optional Enola integration. The skill is available (`skills/brain-enola/SKILL.md`) and the commands/tools are registered, but `brain.config.yml` does not set `enola.enabled: true`.

## Why it matters

Without enabling Enola, the clone misses architecture regression checks, impact analysis, and citation verification for code-affecting decisions. The user has explicitly mentioned Enola twice in recent sessions.

## Resolution

Added to `brain.config.yml`:

```yaml
enola.enabled: true
enola.target_repo: ./
```

Ran `/brain:enola-baseline` — architecture baseline pinned. `brain_enola_capture` reported no structural regressions.

## Trade-offs

- Requires the `enola` binary to be installed and available on the PATH.
- The Enola CI workflow (`.github/workflows/enola.yml`) will only run when the binary is present.
- If this repo's architecture is not stable, the baseline may need frequent updates; consider `enola.auto_baseline: true` if the churn is acceptable.
