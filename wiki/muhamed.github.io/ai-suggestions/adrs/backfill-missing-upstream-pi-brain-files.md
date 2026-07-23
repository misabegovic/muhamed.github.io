---
kind: decision
status: ai-suggested
confidence: low
sources:
  - /home/muhamed/projects/pi-brain/AGENTS.md
  - /home/muhamed/projects/pi-brain/brain.config.yml
---

# Backfill missing upstream pi-brain files

## Context

When this repository was converted into a pi-brain clone, the agent selectively copied files from the upstream `pi-brain` template and adapted them for the `muhamed.github.io` scope. The user has since pointed out that the clone should have preserved the full upstream structure rather than picking and choosing.

A diff against `/home/muhamed/projects/pi-brain/` shows the following upstream files and directories are missing from this clone:

- `.env.example`
- `.github/pull_request_template.md`
- `.github/workflows/validate.yml`
- `extensions/`
- `GETTING_STARTED.md`
- `package.json`
- `personas/`
- `prompts/`
- `skills/`
- `sources/brain/`
- `sources/repos/`
- `tests/`
- `themes/`
- `tools/`
- `wiki/brain/`

## Decision

Backfill all missing upstream files into this clone, preserving the upstream directory layout and contents. Where a file already exists with a project-specific adaptation, keep the local version and add a source snapshot of the upstream file under `sources/upstream/` for comparison.

Specifically:

1. Copy `.env.example`, `.github/pull_request_template.md`, `.github/workflows/validate.yml`, `GETTING_STARTED.md`, `package.json`, `personas/`, `prompts/`, `skills/`, `themes/`, and `tools/` from upstream.
2. Copy `extensions/` and `tests/` from upstream.
3. Copy `sources/brain/` and `sources/repos/` sample directories from upstream.
4. Copy `wiki/brain/` from upstream.
5. Snapshot the upstream versions of `AGENTS.md` and `brain.config.yml` under `sources/upstream/` (already partially done).
6. Keep the project-specific additions unchanged: `files/`, `.github/workflows/pages.yml`, `wiki/muhamed.github.io/`, `wiki/org/`, `sources/doc/`, `sources/web/`.

## Alternatives considered

1. **Add only the runtime infrastructure (tools, skills, personas, prompts) and exclude product-only files (extensions, tests, wiki/brain).**
   - *Trade-off:* Keeps the clone lean, but still "picks and chooses" — exactly what the user objected to.

2. **Backfill everything verbatim and then retire/adapt files that do not fit.**
   - *Trade-off:* Creates a complete mirror of upstream, which may include product-template content that is not relevant to a customer clone. However, it honors the user's instruction to stop picking and choosing, and future ADRs can retire what is not needed.

3. **Leave the clone as-is.**
   - *Trade-off:* Perpetuates the incomplete conversion and means the upstream extension, state runner, and other tools are not available in this clone.

## Consequences

- The clone will match the upstream template structure.
- `tools/brain-state.mjs` will be available, so `/brain:state` works via the upstream extension.
- `skills/`, `personas/`, `prompts/`, and `themes/` will be present for agent use.
- `extensions/` and `tests/` will be present, even though this is a project clone rather than the product repo.
- `wiki/brain/` will contain the upstream template's own wiki pages; these can be retired later if they are not useful here.
- The risk of future "missing file" errors from the upstream extension is reduced.

## Scope

- New directories: `extensions/`, `personas/`, `prompts/`, `skills/`, `sources/brain/`, `sources/repos/`, `tests/`, `themes/`, `tools/`, `wiki/brain/`
- New files: `.env.example`, `.github/pull_request_template.md`, `.github/workflows/validate.yml`, `GETTING_STARTED.md`, `package.json`
- Existing files preserved: `files/`, `.github/workflows/pages.yml`, `wiki/muhamed.github.io/`, `wiki/org/`, `sources/doc/`, `sources/web/`

## Related

- [ADR: Convert repo to pi-brain clone and deploy site via GitHub Actions](../adrs/convert-repo-to-pi-brain-actions.md)
- [ADR: Sync latest upstream pi-brain updates](../adrs/sync-latest-upstream-pi-brain-updates.md)
- [AGENTS.md](../../../../AGENTS.md)
- [brain.config.yml](../../../../brain.config.yml)
