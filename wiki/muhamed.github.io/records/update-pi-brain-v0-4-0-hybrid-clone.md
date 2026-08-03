---
kind: record
status: current
confidence: high
implemented_in:
  - brain.config.yml
  - package.json
  - .github/workflows/validate.yml
  - package-lock.json
decided_by: wiki/muhamed.github.io/adrs/update-pi-brain-v0-4-0-hybrid-clone.md
---

# Record — Update pi-brain to v0.4.0 in this hybrid clone

## What this is

The clone is now running pi-brain v0.4.0 while keeping the Jekyll site deployment intact.

## Current truth

- `brain.config.yml` has `template_version: "v0.4.0"`.
- `package.json` lists `@misabegovic/pi-brain@0.4.0` as a dev dependency.
- `.github/workflows/validate.yml` installs and runs `@misabegovic/pi-brain@0.4.0`.
- The package-resolved resources (extension, skills, prompts, themes, tools, personas) are resolved from `node_modules/@misabegovic/pi-brain/`.
- `.github/workflows/pages.yml`, `README.md`, and `AGENTS.md` remain at the repository root as hybrid-site carve-outs.

## Origin

- Decision: [ADR — Update pi-brain to v0.4.0 in this hybrid clone](../adrs/update-pi-brain-v0-4-0-hybrid-clone.md)

## Consequences

- New 0.4.0 commands are available: `/brain:build`, `/brain:diff`, `/brain:sync-code`, `/brain:revise`, `/brain:collaborate`, `/brain:rfc-contribute`, `/brain:enqueue`, `/brain:run-tasks`, `/brain:tasks`, `/brain:bg-agent`.
- Optional Enola architecture-intelligence integration is available once `enola.enabled: true` is added to `brain.config.yml`.
- The clone's root-level workflows and onboarding docs are now local overrides that must be reviewed manually on each upstream bump.

## Related

- [ADR — Update pi-brain to v0.4.0 in this hybrid clone](../adrs/update-pi-brain-v0-4-0-hybrid-clone.md)
- [Record — Fix validate workflow to run package-resolved brain-sync](../adrs/fix-validate-workflow-package-resolved-brain-sync.md)
- [Constraint: ADR before structural changes](../constraints/adr-before-structural-changes.md)
- [Record — Upstream template sync](../../brain/records/upstream-template-sync.md)
- [Stream note: pi-brain 0.4.0 adds Enola architecture intelligence](https://muhamed.at/brain/pi-brain-0-4-0-enola-architecture-intelligence/)
- [Stream note: Agents in Durable Objects](https://muhamed.at/brain/agents-in-durable-objects-specialized-cheap-agents/)
- [Roadmap — org](../../org/roadmap.md)
- [Roadmap — muhamed.github.io](../roadmap.md)
