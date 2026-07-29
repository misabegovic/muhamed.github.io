---
kind: decision
status: accepted
confidence: medium
---

# Sync clone with upstream pi-brain guardrails

## Context

The upstream `pi-brain` template added stronger default guardrails against eager implementation. The user asked to update this clone (`muhamed.github.io`) with those changes so future sessions follow the same stop-and-shape discipline.

## Decision

Apply the upstream guardrails to this clone:

1. Update `AGENTS.md` with the upstream governance language, adapted for the `muhamed.github.io` scope.
2. Strengthen `wiki/muhamed.github.io/constraints/adr-before-structural-changes.md` to match the upstream constraint format and scope.
3. Record this sync decision in the ADR shelf.

## Alternatives considered

1. **Keep the locally-written guardrails as-is**
   - *Trade-off:* They already cover the basic rule, but they lack the explicit stop-and-shape checklist, rationale, and examples from upstream. Future agents might still miss the nuance.

2. **Replace `AGENTS.md` verbatim with the upstream version**
   - *Trade-off:* The upstream version references product-repo files (`extensions/`, `skills/`, `prompts/`, `themes/`) that do not exist in this clone. It would be confusing and inaccurate.

3. **Adapt upstream guardrails to this clone**
   - *Trade-off:* More work than a verbatim copy, but keeps the contract accurate and relevant. This is the accepted path.

## Consequences

- This clone now has the same stop-and-shape discipline as the upstream template.
- Structural changes must have an accepted ADR before implementation.
- The agent must call `brain_status` at session start and check constraints before shaping.
- The user can hold the agent accountable by pointing to `AGENTS.md` or the constraint.

## Related

- [AGENTS.md](../../../../AGENTS.md)
- [Constraint: ADR before structural changes](../constraints/adr-before-structural-changes.md)
- [ADR: Convert repo to pi-brain clone and deploy site via GitHub Actions](convert-repo-to-pi-brain-actions.md)
- [State — muhamed.github.io](../../org/state.md)
- [Roadmap — muhamed.github.io](../../org/roadmap.md)
