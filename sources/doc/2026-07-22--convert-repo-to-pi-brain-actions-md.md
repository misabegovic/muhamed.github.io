---
kind: source
source_kind: doc
source_path: /home/muhamed/projects/muhamed.github.io/wiki/muhamed.github.io/adrs/convert-repo-to-pi-brain-actions.md
ingested_at: 2026-07-22
summary: Accepted ADR for conversion and Pages deployment
---

# convert-repo-to-pi-brain-actions.md

```
---
kind: decision
status: accepted
confidence: medium
---

# Convert repo to pi-brain clone and deploy site via GitHub Actions

## Context

The repository `muhamed.github.io` was a Jekyll-based personal site whose source lived at the repository root. The user asked to convert the repository into a pi-brain clone (so the repo would hold both the knowledge base and the codebase) while keeping the site publishable as a GitHub Pages user site.

Because this is a **user site**, GitHub Pages normally requires the Jekyll source at the repository root. Moving the source into a subdirectory risked breaking publishing.

## Decision

We accepted the following structural decisions:

1. Move existing project files into `files/`.
2. Create a pi-brain skeleton at the repository root: `wiki/`, `sources/`, `log/`, `brain.config.yml`, and `AGENTS.md`.
3. Enable `auto_connect` in `brain.config.yml` and keep autonomy ON.
4. Add a GitHub Actions workflow (`.github/workflows/pages.yml`) to build and deploy the Jekyll site from `files/` to GitHub Pages.
5. Add a root `README.md` explaining the new layout.

## Alternatives considered

1. **Convert and keep source at root, move pi-brain files elsewhere**
   - *Trade-off:* Violates the pi-brain convention that the brain lives at the repository root. Would require a non-standard layout and might confuse the pi-brain tooling.

2. **Move Jekyll source to `files/` and deploy via GitHub Actions**
   - *Trade-off:* Matches the pi-brain convention and keeps the site publishable, but requires enabling GitHub Actions as the Pages source and maintaining the workflow. This is the accepted path.

3. **Move Jekyll source to `files/` and add a root `index.html` redirect**
   - *Trade-off:* Would not actually build the Jekyll site; GitHub Pages would serve only a static redirect. SEO, RSS, and asset paths would break.

4. **Do nothing — keep the site at root and maintain a separate pi-brain clone**
   - *Trade-off:* Preserves the simplest GitHub Pages setup, but requires maintaining a second repository for the brain and does not satisfy the request to convert this repository.

## Consequences

- The repository root is now the pi-brain home, aligning with the pi-brain convention.
- GitHub Pages publishing depends on the Actions workflow being enabled and passing.
- The custom domain (`www.muhamed.at`) configured in `files/CNAME` continues to work as long as the workflow deploys successfully.
- Build-time dependencies in `files/Gemfile.lock` are now on the critical path for publishing; Dependabot warnings should be reviewed.
- The user must select **GitHub Actions** as the Pages source in the repository settings for deployments to begin.

## Notes on process

This ADR was written after the implementation was already pushed. Future structural changes must follow the shape flow: draft an AI-suggested ADR first, obtain human approval, and only then implement.

## Related

- [State — muhamed.github.io](../../org/state.md)
- [Roadmap — muhamed.github.io](../../org/roadmap.md)
- [pi-brain home](../../../index.md)
- `files/README.md`
- `.github/workflows/pages.yml`
- `brain.config.yml`

```
