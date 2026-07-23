---
kind: decision
status: accepted
confidence: low
sources:
  - AGENTS.md
  - wiki/muhamed.github.io/constraints/adr-before-structural-changes.md
  - /home/muhamed/projects/pi-brain/AGENTS.md
  - /home/muhamed/projects/pi-brain/wiki/brain/constraints/adr-before-structural-changes.md
---

# Sync latest upstream pi-brain updates

## Context

The upstream `pi-brain` template has evolved since this clone was last synced. The user asked to pull the latest upstream updates into `muhamed.github.io`. A diff against `/home/muhamed/projects/pi-brain/` shows that this clone is already adapted for its scope (e.g., `muhamed.github.io` instead of `pi-brain`, `files/` instead of `extensions/skills/prompts/themes`), but some useful governance sections are missing from the local `AGENTS.md`.

## Decision

Adopt the following upstream updates, adapted to this clone:

1. **Add an "Autonomy mode" section to `AGENTS.md`.** Clarify that autonomy ON permits low-risk maintenance (batching auto-connect ingestions, running `brain_sync`, auto-grooming stale batches, synthesizing low-risk observations into `ai-suggestions/`), while commitment-class work (ADRs, approved wiki edits, structural changes, expensive `/brain:tend` on high-risk items) remains human-gated.
2. **Expand the "PR cadence and local-first mode" section.** Keep `LOCAL_FIRST=true` as the default for this solo-operated clone, but add the PR conventions subsection (title format, description template, linking intent, decision records first, one bet per PR, update brain after merge) adapted for same-repo converted clones.
3. **Strengthen the structural-change examples in `AGENTS.md`.** The current local list is shorter than upstream; align it while omitting product-only artifacts (`skills/`, `prompts/`, `extension code`) that do not exist in this clone.
4. **Update the constraint.** If upstream has changed `wiki/brain/constraints/adr-before-structural-changes.md`, apply the same adaptations to `wiki/muhamed.github.io/constraints/adr-before-structural-changes.md` (currently only scope and related links differ).
5. **Ingest the upstream source snapshots** into `sources/upstream/` so the diff is preserved as an immutable input.

## Alternatives considered

1. **Replace `AGENTS.md` verbatim with upstream.**
   - *Trade-off:* Fast, but would insert references to `extensions/pi-brain.ts`, `skills/`, `prompts/`, and `themes/` that do not exist here, confusing future agents.

2. ** cherry-pick only the autonomy section.**
   - *Trade-off:* Minimal risk, but misses the PR conventions and stronger structural-change examples that make the contract clearer.

3. **Do nothing.**
   - *Trade-off:* Leaves the clone out of sync with upstream guardrails; the autonomy and PR conventions remain implicit rather than explicit.

## Consequences

- `AGENTS.md` will more closely match upstream while remaining accurate for this converted clone.
- The agent's autonomy boundary will be explicit.
- PR conventions will be documented for future team-mode use or external contributions.
- The constraint will stay aligned with the adapted `AGENTS.md`.

## Scope

- `AGENTS.md`
- `wiki/muhamed.github.io/constraints/adr-before-structural-changes.md`
- `sources/upstream/` (new snapshots)

## Related

- [ADR: Sync clone with upstream pi-brain guardrails](../adrs/sync-upstream-pi-brain-guardrails.md)
- [Constraint: ADR before structural changes](../constraints/adr-before-structural-changes.md)
- [AGENTS.md](../../../../AGENTS.md)
