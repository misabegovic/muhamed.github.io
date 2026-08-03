---
layout: stream-entry
title: "pi-brain 0.4.0 adds Enola architecture intelligence"
source: "pi-brain 0.4.0 changelog"
url_external: "https://github.com/misabegovic/pi-brain/blob/main/CHANGELOG.md"
type: note
date: 2026-08-03
created_at: 2026-08-03T10:00:00+02:00
tags: [pi-brain, enola, architecture, agents, update]
---

Updated this brain to [pi-brain 0.4.0](https://github.com/misabegovic/pi-brain/blob/main/CHANGELOG.md). The headline addition is **Enola integration** — optional architecture-intelligence tooling that can actually see structure in a codebase.

What Enola adds here:

- **`/brain:enola-check`** — run an architecture regression test against the configured target repo.
- **`/brain:enola-generate`** — snapshot the current structure and record a receipt in `wiki/_state/enola/receipts.json`.
- **`/brain:enola-diff`** — compare the current snapshot to recorded receipts and report drift.
- **`/brain:enola-impact <symbol>`** — show what depends on a module or symbol and how far changes might ripple.
- **`/brain:enola-citations`** — verify `enola receipt ...` citations in wiki prose.

The idea is to stop guessing about architecture. Before a big structural change, you can check whether it introduces cycles, leaks boundaries, or touches more than intended. After a `/brain:build` or `/brain:sync-code`, you can re-baseline automatically so the corpus stays tied to real code structure.

**We are already using it here.** Enola is enabled in this clone (`enola.enabled: true` in `brain.config.yml`), the baseline is pinned, and `brain_enola_capture` runs during autonomous refinement. That means shaping sessions for code-affecting decisions can now be grounded in the actual structure of the repo, not just prose.

Other 0.4.0 additions worth noting:

- Regenerative-intent commands: `/brain:build`, `/brain:diff`, `/brain:sync-code`, `/brain:revise`.
- Multi-agent collaboration: `/brain:collaborate`, `/brain:rfc-contribute`.
- Background tasks: `/brain:enqueue`, `/brain:run-tasks`, `/brain:tasks`, `/brain:bg-agent`.
- JSON-schema constrained sampling for all pi-brain tools.

This clone is now running the 0.4.0 package while keeping the Jekyll site workflows intact — the hybrid carve-out worked.

(sources: [pi-brain CHANGELOG](https://github.com/misabegovic/pi-brain/blob/main/CHANGELOG.md), [Enola skill docs](https://github.com/misabegovic/pi-brain/blob/main/skills/brain-enola/SKILL.md))
