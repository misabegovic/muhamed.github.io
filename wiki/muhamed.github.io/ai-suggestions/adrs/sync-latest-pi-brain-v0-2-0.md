---
kind: decision
status: ai-suggested
confidence: low
sources:
  - /home/muhamed/projects/pi-brain/README.md
  - /home/muhamed/projects/pi-brain/extensions/pi-brain.ts
  - /home/muhamed/projects/pi-brain/skills/brain/SKILL.md
  - /home/muhamed/projects/pi-brain/skills/brain-shape/SKILL.md
  - /home/muhamed/projects/pi-brain/skills/brain-update/SKILL.md
---

# Sync latest upstream pi-brain changes (v0.2.0)

## Context

The upstream `pi-brain` template has moved from v0.1.0 to v0.2.0. The user asked to pull the latest upstream changes into this clone. A diff against `/home/muhamed/projects/pi-brain/` shows the following notable changes since the last sync:

1. **New `/brain:update` command** — a new skill `skills/brain-update/SKILL.md` that provides a safe way to pull upstream template updates into a clone.
2. **Extension updates** — `extensions/pi-brain.ts` has changes to support the new command and possibly other tooling.
3. **Skill updates** — `skills/brain/SKILL.md` and `skills/brain-shape/SKILL.md` have refinements.
4. **New upstream records** — `wiki/brain/records/version-0-2-0.md`, `wiki/brain/records/upstream-template-sync.md`, and `wiki/brain/records/plain-language-triggers-shape.md`.
5. **README and package metadata** — README now includes npm install instructions and badges; `package.json` version bumped.
6. **brain.config.yml** — upstream sample config may have changed.

## Decision

Pull the latest upstream changes into this clone, adapting them for the `muhamed.github.io` scope:

1. Copy new upstream files: `skills/brain-update/SKILL.md` and new `wiki/brain/records/*` pages.
2. Update existing upstream files where the changes are non-breaking improvements: `extensions/pi-brain.ts`, `skills/brain/SKILL.md`, `skills/brain-shape/SKILL.md`, `README.md`, `package.json`.
3. Snapshot the upstream `brain.config.yml` under `sources/upstream/` for comparison, but keep the local `brain.config.yml` unchanged unless a specific setting needs updating.
4. Regenerate `wiki/index.md` via `brain_views` after the sync.

## Alternatives considered

1. **Do not sync.**
   - *Trade-off:* The clone drifts from upstream and misses the `/brain:update` tooling and documentation improvements.

2. **Sync everything verbatim, overwriting local adaptations.**
   - *Trade-off:* Fast but would lose the `muhamed.github.io`-specific adaptations in `AGENTS.md`, `brain.config.yml`, and the site-specific wiki pages.

3. **Selective sync (chosen).**
   - *Trade-off:* More work but preserves project-specific adaptations while gaining upstream improvements. This is the same approach used in previous sync ADRs.

## Consequences

- The clone gains the `/brain:update` skill and command.
- Extension and skill documentation stay current with upstream v0.2.0.
- New upstream records are available in `wiki/brain/records/`.
- Local adaptations remain intact.

## Scope

- `extensions/pi-brain.ts`
- `skills/brain/SKILL.md`
- `skills/brain-shape/SKILL.md`
- `skills/brain-update/SKILL.md` (new)
- `README.md`
- `package.json`
- `wiki/brain/records/*` (new)
- `sources/upstream/brain.config.yml` (snapshot update)

## Related

- [ADR: Backfill missing upstream pi-brain files](../adrs/backfill-missing-upstream-pi-brain-files.md)
- [ADR: Sync latest upstream pi-brain updates](../adrs/sync-latest-upstream-pi-brain-updates.md)
- [State — muhamed.github.io](../../../org/state.md)
