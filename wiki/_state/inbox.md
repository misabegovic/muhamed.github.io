# Inbox

## Archived 2026-07-23

The following items were captured during the session and have been acted upon. They are preserved here as a digest rather than as pending work.

### Brain contract and process

- Reflection on brain-contract compliance → resulted in accepted ADR `convert-repo-to-pi-brain-actions.md`.
- User prefers answering shaping questions one at a time.
- User feedback that the clone should preserve full upstream pi-brain structure → implemented via backfill ADR.

### muhamed.at outage

- `muhamed.at` returned GitHub Pages 404.
- Findings: custom domain not set, Jekyll build failing on `vendor/`.
- Resolution: set custom domain, excluded `vendor/`, aligned URL config.
- Recorded in accepted ADR `jekyll-vendor-exclude-and-custom-domain.md`.

### Brain stream feature

- Pitch to upgrade `muhamed.at` into a public brain window.
- Content types: all of them (links, books, podcasts, quotes, notes, tweets).
- Organization: chronological stream + topics + search.
- Workflow: git-based with agent maintenance.
- Audience: all of the above and more.
- Design RFC drafted; card stream selected.
- Implemented: home page card stream, `/writing/`, individual entry pages, RSS feeds, tag filtering, multi-tag `#tag` search, `/tags/` explorer.

### Site content

- Updated site description, About page intro, career timeline, specialties, tech stack.
- Added Usput.ba, Teamtailor, self-employed entries.
- Standardized career link format.
- Added pi-brain and AI tools mention.

### Infrastructure

- Backfilled full upstream pi-brain structure (tools, skills, personas, prompts, themes, extensions, tests).
- Synced to upstream pi-brain v0.2.0, gaining `/brain:update` skill.
- Discovered `brain_sync` overwrites project-specific org pages via upstream state runner; workaround: use `brain_validate` + `brain_views`.
- Session-start auto-ingest snapshots persisted in `sources/doc/` and `sources/web/`.

### Open questions / future work

- None currently pending. Next content step is replacing sample stream entries with real items as the user adds them.
