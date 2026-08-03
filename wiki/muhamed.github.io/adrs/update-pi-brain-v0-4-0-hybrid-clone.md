---
kind: decision
status: accepted
confidence: low
sources:
  - sources/doc/2026-08-03--raw-githubusercontent-com-misabegovic-pi-brain-main-changelog-md.md
  - sources/repo/2026-08-03--github-com-misabegovic-pi-brain.md
  - sources/web/2026-08-03--www-npmjs-com-package-misabegovic-pi-brain.md
---

# Update pi-brain to v0.4.0 in this hybrid clone

## Context

`@misabegovic/pi-brain@0.4.0` was published on 2026-08-01. The release adds optional Enola architecture-intelligence integration, regenerative-intent commands (`/brain:build`, `/brain:diff`, `/brain:sync-code`, `/brain:revise`), multi-agent collaboration, background task runners, and a package-resolved resource model where the installed npm package owns `extensions/`, `skills/`, `prompts/`, `themes/`, `tools/`, `personas/`, `AGENTS.md`, `README.md`, and `.github/`. (source: [CHANGELOG](https://github.com/misabegovic/pi-brain/blob/main/CHANGELOG.md))

This clone was on the v0.3.0-era template (`brain.config.yml` said `template_version: "v0.3.0"`; the validate workflow pinned `@misabegovic/pi-brain@0.3.2`). The upstream `migrate-clone.mjs` script in 0.4.0 assumes a pure pi-brain clone and would move `.github/` into `.brain/overrides/`. That breaks this repository because it is a hybrid: it is both a pi-brain clone and a published Jekyll site (`files/` is the site source; `.github/workflows/pages.yml` deploys to GitHub Pages).

`brain_update` also failed: the tool could not resolve the 0.4.0 package path locally and could not find a `0.4.0` git branch in the upstream repository.

## Decision

Adopt `@misabegovic/pi-brain@0.4.0` for this clone with a **hybrid-site carve-out**:

1. Keep `.github/workflows/pages.yml` in place at the repository root so the Jekyll site continues to deploy.
2. Keep `README.md` and `AGENTS.md` at the repository root because they serve human visitors of the GitHub repo and are part of the site's onboarding.
3. Install `@misabegovic/pi-brain@0.4.0` as a dev dependency so the packaged extension, skills, prompts, themes, and tools are resolved from `node_modules/`.
4. Bump `template_version` in `brain.config.yml` from `"v0.3.0"` to `"v0.4.0"`.
5. Update `.github/workflows/validate.yml` to install and run the packaged tools at `0.4.0` instead of `0.3.2`.
6. Do not run the upstream `migrate-clone.mjs` blindly; instead, selectively sync only the template-owned paths this clone actually uses and can safely absorb (e.g., update `package.json` scripts and devDependencies, refresh `tools/` only if the clone has vendored copies).

## Alternatives considered

1. **Run the upstream `migrate-clone.mjs` as-is** — cleanest for a pure clone, but it moves `.github/` to `.brain/overrides/`, which disables the Pages deploy workflow. Rejected because this repo is a live site.
2. **Keep the v0.3.2 pin and skip 0.4.0** — no work, but misses Enola integration, regenerative intent, multi-agent collaboration, and background-task support. Over time the clone drifts from upstream and bug fixes/security patches become harder to apply.
3. **Re-vendor the 0.4.0 resources** — copy `extensions/`, `skills/`, etc. back into the repo. Gives full control, but reintroduces the exact template drift the package-resolved model was designed to eliminate.
4. **Split the Jekyll site and the pi-brain clone into two repositories** — clean separation, but a much larger structural project with its own migration risk (DNS, GitHub Pages settings, content cross-links).
5. **Do nothing** — simplest, but leaves the clone on an aging template with known gaps.

## Consequences

- We get 0.4.0 features (Enola, `/brain:build`, background tasks, collaboration) while preserving site deployment.
- The root `README.md`, `AGENTS.md`, and `.github/workflows/pages.yml` become clone-local overrides that won't be updated automatically by future `/brain:update` runs; we must review them manually on each upstream bump.
- CI now depends on `@misabegovic/pi-brain@0.4.0` from npm, pinned for determinism.
- The next `/brain:update` should be tested with the same hybrid-site checklist.

## Related

- `wiki/muhamed.github.io/adrs/fix-validate-workflow-package-resolved-brain-sync.md`
- `wiki/muhamed.github.io/constraints/adr-before-structural-changes.md`
- `brain.config.yml`
- `.github/workflows/validate.yml`
