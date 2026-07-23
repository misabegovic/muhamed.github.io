### inbox-cleared-2026-07-23

- **kind:** meta
- **scope:** muhamed.github.io
- **summary:** Inbox cleared on 2026-07-23. Four pending items were all resolved:
  1. Reflection on brain-contract compliance → resulted in accepted ADR `convert-repo-to-pi-brain-actions.md`.
  2. `muhamed.at` outage → resolved and recorded in accepted ADR `jekyll-vendor-exclude-and-custom-domain.md`.
  3. Session-start auto-ingest snapshots → persisted in `sources/doc/` and `sources/web/`; no synthesis needed.
  4. Request to pull latest upstream pi-brain updates → implemented and recorded in accepted ADR `sync-latest-upstream-pi-brain-updates.md`.
### user-asked-why-there-is-no-state-runner-tools-br (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** User asked why there is no state runner (tools/brain-state.mjs) in the muhamed.github.io clone. The upstream pi-brain extension expects this Node script to regenerate state/roadmap/options pages, but this converted Jekyll clone never had a tools/ directory scaffolded. The brain_state tool available in this session handles regeneration internally. Adding the upstream state runner would be a structural change.
### user-feedback-the-conversion-of-muhamed-github-i (2026-07-23)

- **kind:** feedback
- **scope:** muhamed.github.io
- **summary:** User feedback: the conversion of muhamed.github.io into a pi-brain clone should have preserved the full upstream pi-brain structure instead of picking and choosing files. Missing upstream pieces include extensions/, tools/, skills/, prompts/, themes/, personas/, tests/, package.json, .env.example, GETTING_STARTED.md, .github/pull_request_template.md, .github/workflows/validate.yml, sources/brain/, sources/repos/, and wiki/brain/. The user wants the clone to match upstream rather than be selectively adapted.

