---
kind: decision
status: suggested
confidence: low
ai_suggestion: true
---

> **AI-suggested ADR.** Does not reflect a human-approved decision and does not record current product state or upcoming product changes. Agent-authored synthesis from observed patterns; for a human to review, iterate on, and decide whether to graduate.

# Convert repo to pi-brain clone and deploy site via GitHub Actions

## Observation

The repository `muhamed.github.io` was a Jekyll-based personal site whose source lived at the repository root. The user asked to convert the repository into a pi-brain clone (so the repo would hold both the knowledge base and the codebase) while keeping the site publishable as a GitHub Pages user site.

The repo state after the change is consistent with the following structural decisions:

- Existing project files were moved into `files/`.
- A pi-brain skeleton was created at the repository root: `wiki/`, `sources/`, `log/`, `brain.config.yml`, and `AGENTS.md`.
- `auto_connect` was enabled in `brain.config.yml` and autonomy was turned ON.
- A GitHub Actions workflow (`.github/workflows/pages.yml`) was added to build and deploy the Jekyll site from `files/` to GitHub Pages.
- A root `README.md` explains the new layout.

## Hypothesis

The team intends to:

1. Treat `muhamed.github.io` as a single repository that is both the pi-brain knowledge base and the project codebase.
2. Keep the Jekyll site source in `files/` so pi-brain files can live at the repository root.
3. Preserve GitHub Pages publishing for the user site by delegating the build and deploy to GitHub Actions instead of GitHub's native root-based Jekyll build.

## Alternatives considered

1. **Convert and keep source at root, move pi-brain files elsewhere**
   - *Trade-off:* Violates the pi-brain convention that the brain lives at the repository root. Would require a non-standard layout and might confuse the pi-brain tooling.

2. **Move Jekyll source to `files/` and deploy via GitHub Actions**
   - *Trade-off:* Matches the pi-brain convention and keeps the site publishable, but requires enabling GitHub Actions as the Pages source and maintaining the workflow. This is the path the agent implemented.

3. **Move Jekyll source to `files/` and add a root `index.html` redirect**
   - *Trade-off:* Would not actually build the Jekyll site; GitHub Pages would serve only a static redirect. SEO, RSS, and asset paths would break.

4. **Do nothing — keep the site at root and maintain a separate pi-brain clone**
   - *Trade-off:* Preserves the simplest GitHub Pages setup, but requires maintaining a second repository for the brain and does not satisfy the user's request to convert this repository.

## Consequences if adopted

- The repository root becomes the pi-brain home, which aligns with the pi-brain convention.
- GitHub Pages publishing depends on the Actions workflow being enabled and passing.
- The custom domain (`www.muhamed.at`) configured in `files/CNAME` continues to work as long as the workflow deploys successfully.
- Build-time dependencies in `files/Gemfile.lock` are now on the critical path for publishing; Dependabot warnings should be reviewed.
- The user must select **GitHub Actions** as the Pages source in the repository settings for deployments to begin.

## Open questions for the human reviewer

- Is the `files/` subdirectory name acceptable, or would you prefer `site/`, `www/`, or another name?
- Should `auto_connect` remain enabled, and which connectors (if any) should be configured in `brain.config.yml`?
- Should autonomy stay ON, or would you prefer to manage brain maintenance manually?
- Do you want a separate, more detailed PRD for future site/brain work, or is this single decision record sufficient?

## Related

- [State — muhamed.github.io](../../org/state.md)
- [Roadmap — muhamed.github.io](../../org/roadmap.md)
- [pi-brain home](../../../index.md)
- `files/README.md` (project README moved into the site source)
- `.github/workflows/pages.yml`
- `brain.config.yml`
