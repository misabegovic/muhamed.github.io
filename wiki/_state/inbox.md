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
### issue-discovered-after-backfilling-tools-brain-s (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** Issue discovered: after backfilling tools/brain-state.mjs from upstream, running brain_sync now overwrites project-specific content in wiki/org/state.md, wiki/org/roadmap.md, and wiki/org/options.md with generic templates. Workaround: use brain_validate + brain_views separately. Need to decide whether to patch tools/brain-state.mjs to preserve existing content or adjust workflow.
### built-four-local-jekyll-prototype-pages-for-the (2026-07-23)

- **kind:** experiment
- **scope:** muhamed.github.io
- **summary:** Built four local Jekyll prototype pages for the muhamed.at sharing section: /brain/ (index), /brain-minimal/ (reading log), /brain-cards/ (card stream), /brain-book/ (commonplace book), /brain-window/ (curated window). Serving locally on port 4000 with sample data in files/_data/stream.yml. Not pushed to remote.
### user-chose-option-b-card-stream-with-title-peek (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** User chose Option B (Card Stream) with title 'Peek into my brain' for the muhamed.at sharing section. Also requested each item have its own personal page for longer thoughts, with references and links to sources. Implemented: created _stream Jekyll collection with individual entry pages, updated brain-cards.md to link to them and use the new title. Serving locally.
### user-wants-to-prepare-the-brain-card-stream-for (2026-07-23)

- **kind:** discussion
- **scope:** muhamed.github.io
- **summary:** User wants to prepare the brain-card stream for production: make it the home page, retire /brain/ prototype index, preserve posts discovery on a separate page, and remove prototype routes. This is a structural change to the Jekyll site routing and home page. Drafting ADR per brain contract.
### user-approved-the-adr-in-principle-with-modifica (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** User approved the ADR in principle with modification: remove all prototype alternatives entirely, only keep what is used. Open questions remain: blog post discovery URL, and whether RSS includes stream entries. Asking one by one.
### user-chose-writing-as-the-url-for-the-blog-post (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** User chose /writing/ as the URL for the blog post discovery page.
### user-wants-separate-rss-feeds-one-for-blog-posts (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** User wants separate RSS feeds: one for blog posts and one for stream entries. All open questions now answered. Ready to finalize ADR and implement.
### implemented-production-version-of-brain-card-hom (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** Implemented production version of brain-card home page. Committed locally as fe73c04. Build verified: / shows card stream, /writing/ shows posts, /brain.xml is stream RSS, /brain/:slug/ entry pages work, prototype routes return 404. Sample entries still need replacement with real content. Ready to push upon user approval.
### implemented-refinements-under-the-accepted-brain (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** Implemented refinements under the accepted 'brain-card home page' ADR: added 'Load more' pagination to home page (6 cards at a time), added tags to existing 3 blog posts, updated About page with current career info and brain stream description. Build verified locally.
### user-asked-why-i-don-t-run-the-local-server-in-t (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** User asked why I don't run the local server in the background while working. Explaining environment limitation: background processes launched via the bash tool do not persist across separate tool calls. Each bash invocation appears to clean up its process group, killing nohup/disown/setsid background servers. Need to start server when user wants to view, with long timeout during that session.
### tried-tmux-to-keep-local-server-running-persiste (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** Tried tmux to keep local server running persistently, but tmux sessions also do not survive across bash tool invocations. Confirmed environment limitation: no background processes persist. Will start server on-demand when user wants to view, and continue other work in between.
### user-will-serve-the-jekyll-site-themselves-in-a (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** User will serve the Jekyll site themselves in a separate terminal. Providing exact commands to use the correct Ruby version and start the server from files/.
### user-found-broken-brain-cards-link-in-stream-ent (2026-07-23)

- **kind:** task
- **scope:** muhamed.github.io
- **summary:** User found broken /brain-cards/ link in stream entry pages while serving locally. Also wants fake sample content removed from stream. Need to fix back link to point to / and remove sample _stream entries.
### fixed-broken-brain-cards-back-link-in-stream-ent (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** Fixed broken /brain-cards/ back link in stream entry layout to point to /. Removed all sample stream entries from files/_stream/. Added empty-state message on home page for when no stream entries exist. Rebuilt site.
### user-wants-a-disclaimer-on-the-home-page-stating (2026-07-23)

- **kind:** insight
- **scope:** muhamed.github.io
- **summary:** User wants a disclaimer on the home page stating that AI is used to process thoughts and display them, and that Writing page contains human-written posts. This is a content refinement under the accepted brain-card home page ADR.

