# Log

- 2026-07-22T12:41:01.672Z — converted repo into pi-brain clone; project code moved to `files/`
- 2026-07-22T12:41:25.000Z — enabled auto_connect in brain.config.yml and turned autonomy ON
- 2026-07-22T12:44:00.000Z — added GitHub Actions workflow to deploy Jekyll site from files/; created root README.md explaining layout
- 2026-07-22T13:06:36Z — workflow failed: nokogiri 1.15.5 binary incompatible with Ruby 3.3; pinned workflow to Ruby 3.2
- 2026-07-22T13:19:51Z — resolved muhamed.at outage: configured custom domain muhamed.at in GitHub Pages settings, excluded vendor/ in files/_config.yml, aligned url/enforce_ssl to https://muhamed.at; site returns HTTP 200
- 2026-07-23T09:56:00Z — synced latest upstream pi-brain updates into AGENTS.md: added autonomy-mode section, expanded PR conventions, added repo conversion to structural-change examples; snapshotted upstream sources in sources/upstream/
- 2026-07-23T10:00:00Z — backfilled missing upstream pi-brain files: added tools/, skills/, personas/, prompts/, themes/, extensions/, tests/, package.json, .env.example, GETTING_STARTED.md, .github/pull_request_template.md, .github/workflows/validate.yml, sources/brain/, sources/repos/, wiki/brain/; snapshotted upstream brain.config.yml, .gitignore, README.md, and sources/README.md
- 2026-07-23T11:23:00Z — implemented production brain-card home page: replaced / with card stream, created /writing/ for posts, added /brain.xml feed, removed all prototype routes
- 2026-07-23T11:35:00Z — added Load more pagination to home page, tags on existing posts, updated About page
