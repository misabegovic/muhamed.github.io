# muhamed.github.io

This repository is both a **pi-brain knowledge base** and the source for my personal site at [muhamed.at](https://www.muhamed.at).

## Repository layout

```
├── files/              # Jekyll site source (the actual website)
├── wiki/               # pi-brain synthesis layer
├── sources/            # Immutable inputs and snapshots
├── log/                # Append-only operations log
├── brain.config.yml    # pi-brain configuration
└── AGENTS.md           # Rules for the maintaining agent
```

## GitHub Pages

Because this is a **user site** (`muhamed.github.io`), GitHub Pages normally requires the Jekyll source at the repository root. To keep the pi-brain files at root while still publishing the site, we use the GitHub Actions workflow in `.github/workflows/pages.yml` to build from `files/` and deploy to Pages.

### Enable the Actions-based deployment

1. Go to **Settings → Pages → Build and deployment**.
2. Under **Source**, select **GitHub Actions**.
3. Push to `main` to trigger the workflow.

The site will be published from the `files/` directory via the workflow, not from the repository root.

## Composite build: /politika/analiza-izbora/

The site is not only Jekyll. The Pages workflow also checks out
[misabegovic/izbori2026](https://github.com/misabegovic/izbori2026), runs its
`render.py`, and mounts the roughly 7,300 generated pages at
`/politika/analiza-izbora/` before the artifact is uploaded. The grafting logic
lives in `.github/scripts/build-analiza-izbora.sh`, which also writes a sitemap
for that section, since `jekyll-sitemap` only indexes pages Jekyll built itself.

Nothing from the guide is committed here. It is rendered fresh on every build
from the data committed in `izbori2026`, so the two repositories stay
independent. The workflow rebuilds on a push to `main`, on a daily schedule, and
on a `repository_dispatch` of type `izbori-update` that `izbori2026` sends when
the guide changes.

To run the same composition locally:

```bash
cd files && bundle exec jekyll build --baseurl "" && cd ..
./.github/scripts/build-analiza-izbora.sh ../izbori2026 files/_site
(cd files/_site && python3 -m http.server 8000)
```
