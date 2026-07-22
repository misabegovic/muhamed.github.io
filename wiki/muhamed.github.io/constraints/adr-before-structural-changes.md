---
kind: constraint
status: active
severity: must
confidence: high
---

# Structural repo changes require an approved ADR first

Any change that alters the repository layout, build/deployment pipeline, or the boundary between the pi-brain knowledge base and the project codebase must have an accepted ADR in `wiki/muhamed.github.io/adrs/` before implementation begins.

## Applies to

- Moving project files into or out of `files/`.
- Adding, removing, or substantially changing GitHub Actions workflows.
- Changing `brain.config.yml` in ways that affect connector behavior or active repos.
- Adding or removing top-level pi-brain directories (`wiki/`, `sources/`, `log/`).

## Rationale

This repository is both a pi-brain clone and a published GitHub Pages site. Structural changes have immediate production consequences (e.g., breaking the site) and are hard to undo cleanly. Recording the decision first prevents agent-led restructures from outrunning human review.

## Exception

Purely cosmetic changes to existing files (typos, formatting, content updates) do not require an ADR.
