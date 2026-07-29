---
kind: decision
status: accepted
confidence: low
sources:
  - sources/web/2026-07-27--pi-dev-docs-latest-packages.md
---

# Fix validate workflow to run package-resolved brain-sync (pinned to 0.3.2)

## Context

The `validate` GitHub Actions check has failed on every run since commit `9c0abab` ("brain: migrate to pi-brain v0.3.0 package-resolved resources") — five consecutive failures on `main` and again on PR #5. The migration deleted the vendored `tools/` directory (resources are now resolved from the installed `@misabegovic/pi-brain` package), but `.github/workflows/validate.yml` still ran `node tools/brain-sync.mjs`, which no longer exists in the clone, so CI failed with `MODULE_NOT_FOUND` before validating anything.

The npm package `@misabegovic/pi-brain@0.3.2` ships `tools/brain-sync.mjs` (see the Pi packages docs on package-resolved resources: `sources/web/2026-07-27--pi-dev-docs-latest-packages.md`). Running the packaged tool from the clone root against the current corpus exits 0.

## Decision

Install `@misabegovic/pi-brain` **pinned to `0.3.2`** in the validate workflow and run the packaged `tools/brain-sync.mjs`:

```yaml
- run: npm install --no-save @misabegovic/pi-brain@0.3.2
- run: node node_modules/@misabegovic/pi-brain/tools/brain-sync.mjs
```

The pin matches `template_version: v0.3.0`-era tooling actually installed in this clone and keeps CI deterministic. The pin must be bumped alongside `template_version` on every `/brain:update`.

## Alternatives considered

1. **Track latest** (`npm install @misabegovic/pi-brain`) — zero maintenance, but CI could break when the published package drifts ahead of the clone's migrated state.
2. **Re-vendor `tools/brain-sync.mjs`** — no npm install in CI, but reintroduces exactly the template-owned drift the v0.3.0 migration removed.
3. **Do nothing / delete the workflow** — leaves the clone without corpus validation; broken citations would land silently.

## Consequences

- `validate` returns green on `main` and open PRs; corpus validation is restored.
- CI now depends on the npm registry.
- Every future template migration must bump the pinned version in `.github/workflows/validate.yml` (candidate responsibility for `/brain:update`).

## Related

- `wiki/muhamed.github.io/adrs/sync-latest-pi-brain-v0-2-0.md`
- `wiki/muhamed.github.io/constraints/adr-before-structural-changes.md`
- Migration commit `9c0abab` (log: 2026-07-27 "Migrated clone to package-resolved resources")
