---
kind: ai-suggestion
ai_suggestion: true
status: suggested
confidence: medium
tags: [links, org, muhamed.github.io, state]
---

# Link muhamed.github.io decisions into org state/roadmap

## Observation

`brain-links` suggests connecting several `muhamed.github.io` ADRs and records to `org/roadmap` and `org/state`:

- `muhamed.github.io/constraints/adr-before-structural-changes` → `org/roadmap`
- `muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone` → `org/roadmap`, `org/state`

The `org` scope currently only lists upstream `brain/*` decisions. Site-level decisions (custom domain, brain cards as homepage, v0.4.0 update) are tracked in `muhamed.github.io/` but not surfaced in the org view.

## Why it matters

The org scope is supposed to be the high-level view of all committed work. If site-level ADRs live in a separate scope with no links, the org view is incomplete.

## Suggested action

Add explicit cross-scope links from `org/state.md` and `org/roadmap.md` to the delivered `muhamed.github.io` records and constraints. Since these pages are auto-generated, either:

1. Add the links inside the brain-state markers so they persist, or
2. Move the most org-relevant records (like the v0.4.0 update and the structural-changes constraint) into the org scope itself.
