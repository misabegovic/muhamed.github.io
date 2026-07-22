---
kind: state
status: living
confidence: low
---

# State — muhamed.github.io

## Where we are

This repo was just converted into a pi-brain clone. Project code now lives in
[files/](../../files/). To preserve GitHub Pages publishing for this user site,
`.github/workflows/pages.yml` builds and deploys the Jekyll site from `files/`
using GitHub Actions.

The conversion decision is recorded in
[ADR: Convert repo to pi-brain clone and deploy site via GitHub Actions](../muhamed.github.io/adrs/convert-repo-to-pi-brain-actions.md).

The clone has been synced with upstream pi-brain guardrails; see
[ADR: Sync clone with upstream pi-brain guardrails](../muhamed.github.io/adrs/sync-upstream-pi-brain-guardrails.md).

The Pages workflow is pinned to Ruby 3.2 because the locked `nokogiri` 1.15.5
precompiled binary requires Ruby `< 3.3.dev`.

## Recent incidents

- **2026-07-22 — `muhamed.at` returned GitHub Pages 404.** Root causes: custom
domain not set in GitHub Pages settings, and Jekyll failing because `vendor/`
was not excluded in `_config.yml`. Resolved by setting the custom domain to
`muhamed.at`, adding `vendor` to `exclude`, and aligning `url`/`enforce_ssl`
to `https://muhamed.at`. See the AI-suggested post-incident ADR at
[ADR: Jekyll vendor exclude and custom domain](../muhamed.github.io/ai-suggestions/adrs/jekyll-vendor-exclude-and-custom-domain.md).

## What needs attention

- Capture the project's purpose and constraints.
- Shape the first initiative.
