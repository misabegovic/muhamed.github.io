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
