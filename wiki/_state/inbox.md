### reflection-on-brain-contract-compliance-for-the (2026-07-22)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** Reflection on brain-contract compliance for the repo conversion and Pages deployment: I did not call brain_status at session start (autonomy instruction). I used log/wiki updates instead of brain_capture for decisions. I did not load personas or check constraints before the structural change, and I did not draft an AI-suggested RFC/ADR before implementing. I have now created an AI-suggested ADR at wiki/muhamed.github.io/ai-suggestions/adrs/convert-repo-to-pi-brain-actions.md to surface the decision for human review. brain_sync was run after wiki changes.

### incident-muhamed-at-down-and-resolved (2026-07-22)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** Incident: muhamed.at returned GitHub Pages "Site not found" (HTTP 404). Root causes were (1) custom domain not configured in GitHub Pages settings (cname:null) and (2) Jekyll build failing because vendor/ was not excluded in _config.yml. Fixed by adding vendor to excludes and aligning url/enforce_ssl to https://muhamed.at, then setting the custom domain in GitHub Pages settings. Build 29923282719 succeeded and site now returns HTTP/2 200 with HSTS.

### ingest-session-start-snapshots (2026-07-22)

- **kind:** ingest
- **scope:** brain
- **summary:** Auto-connect ingested the following sources at session start. Most are already covered by existing wiki ADRs/constraints; no further synthesis needed unless the underlying files change.
  - sources/web/2026-07-22--github-com-misabegovic-muhamed-github-io-actions-runs-2992245505.md
  - sources/doc/2026-07-22--pages-yml.md
  - sources/doc/2026-07-22--gemfile-lock.md
  - sources/doc/2026-07-22--log-md.md
  - sources/doc/2026-07-22--state-md.md
  - sources/doc/2026-07-22--convert-repo-to-pi-brain-actions-md.md
  - sources/doc/2026-07-22--sync-upstream-pi-brain-guardrails-md.md
  - sources/doc/2026-07-22--adr-before-structural-changes-md.md
  - sources/doc/2026-07-22--agents-md.md
  - sources/doc/2026-07-22--gemfile.md
### user-requested-to-pull-latest-updates-from-upstr (2026-07-23)

- **kind:** discussion
- **scope:** muhamed.github.io
- **summary:** User requested to pull latest updates from upstream pi-brain into the muhamed.github.io clone. This is a structural change affecting AGENTS.md and possibly constraints/skills. Drafting AI-suggested ADR for approval.

