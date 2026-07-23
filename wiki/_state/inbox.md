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
### pitch-upgrade-muhamed-at-to-serve-as-a-public-wi (2026-07-23)

- **kind:** discussion
- **scope:** muhamed.github.io
- **summary:** Pitch: Upgrade muhamed.at to serve as a public window into the user's brain/thinking. The user wants to dump links, articles, and interesting finds and share them in a nice way on the site so visitors can peek into what they find interesting. This is a new product initiative for the Jekyll site and pi-brain clone. Needs shaping: content types, organization, section design, curation workflow, automation vs manual.
### user-prefers-to-answer-shaping-questions-one-at (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** User prefers to answer shaping questions one at a time rather than all at once. Starting with content-type question.
### user-wants-to-share-all-content-types-on-muhamed (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** User wants to share all content types on muhamed.at: links to articles/blog posts, books, podcasts/videos, quotes/excerpts, own reactions/notes, tweets/social posts.
### user-wants-both-chronological-stream-and-topic-c (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** User wants both chronological stream and topic collections for sharing interesting finds on muhamed.at, plus full-text search if possible.
### user-wants-a-git-based-workflow-for-adding-conte (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** User wants a git-based workflow for adding content to muhamed.at: they tell the agent (me) to add links/articles/etc., and the agent maintains it as part of the repository. This is the primary interaction model.
### user-wants-to-explore-multiple-design-options-fo (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** User wants to explore multiple design options for the muhamed.at sharing section before choosing. Will prepare an RFC with 3-4 visual/UX directions.
### audience-for-muhamed-at-sharing-section-all-of-t (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** Audience for muhamed.at sharing section: all of the above and more — hiring managers, peers, friends, internet wanderers, specific communities, and future self. Design needs to balance professionalism with personality, eclecticism with navigability.

