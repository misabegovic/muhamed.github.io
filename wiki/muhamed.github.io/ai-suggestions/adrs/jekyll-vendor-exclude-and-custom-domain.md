---
kind: decision
status: ai-suggested
confidence: low
sources:
  - sources/doc/2026-07-22--pages-yml.md
  - sources/web/2026-07-22--github-com-misabegovic-muhamed-github-io-actions-runs-2992245505.md
  - sources/doc/2026-07-22--gemfile-lock.md
  - files/_config.yml
  - files/CNAME
---

# Post-incident fix: exclude vendor/ and configure custom domain for GitHub Pages

## Context

On 2026-07-22, `muhamed.at` returned GitHub Pages' "Site not found" page (HTTP 404). An investigation showed two independent root causes:

1. **Custom domain not configured in GitHub Pages settings.** The repo's Pages API showed `cname: null` and `html_url: https://misabegovic.github.io/muhamed.github.io/`, so GitHub was serving the project-site URL rather than the apex domain. DNS for `muhamed.at` already pointed to the correct GitHub Pages A records, but GitHub had not been told to associate the domain with the site.
2. **Jekyll build failures.** Recent workflow runs were failing because Jekyll was scanning `files/vendor/bundle/ruby/.../gems/jekyll-3.9.3/lib/site_template/_posts/0000-00-00-welcome-to-jekyll.markdown.erb` and rejecting the ERB date placeholder as an invalid date. The `vendor/` directory had been created inside the Jekyll source by `bundle install` but was not listed in `_config.yml`'s `exclude` block.

## Decision

To restore the site, we:

1. Added `vendor` to the Jekyll `exclude` list in `files/_config.yml` so bundled gems are not treated as site content.
2. Changed `url` and `enforce_ssl` in `files/_config.yml` from `www.muhamed.at` to `muhamed.at` to match the existing `files/CNAME` value.
3. Set the GitHub Pages custom domain to `muhamed.at` in the repository settings.
4. Let the existing `.github/workflows/pages.yml` workflow deploy the fixed build.

## Alternatives considered

1. **Move `vendor/` outside `files/`.**
   - *Trade-off:* Would avoid the Jekyll exclude issue entirely, but it changes the working directory convention for local development and the GitHub Actions `working-directory: files` setup. Keeping `vendor` inside `files/` and excluding it is the standard Bundler + Jekyll pattern.

2. **Keep `www.muhamed.at` as canonical and update CNAME instead.**
   - *Trade-off:* The `CNAME` file already contained `muhamed.at`, and the apex domain is the one the user expects. Aligning `_config.yml` to the existing CNAME is the smaller, more consistent change.

3. **Hardcode an empty `baseurl` in the workflow.**
   - *Trade-off:* The workflow currently uses `${{ steps.pages.outputs.base_path }}`. Once the custom domain is configured, `configure-pages` returns an empty base path, so no workflow change was needed. Hardcoding `baseurl: ""` would couple the workflow to the custom-domain case and break project-site fallback behavior.

## Consequences

- `muhamed.at` now serves the Jekyll site over HTTPS with HSTS.
- Build `29923282719` succeeded after the `vendor` exclusion.
- Future `bundle install` runs inside `files/` will not break the Jekyll build.
- The canonical URL is now consistently `https://muhamed.at` across CNAME, `_config.yml`, and GitHub Pages settings.

## Process note

This ADR was written after the fix was already deployed. In future incidents, the investigation protocol should be followed before implementing: load relevant personas, capture the question, search the corpus, synthesize findings, decide the artifact, and close the loop with `brain_sync` and a log entry.

## Related

- [ADR: Convert repo to pi-brain clone and deploy site via GitHub Actions](../../adrs/convert-repo-to-pi-brain-actions.md)
- [State — muhamed.github.io](../../../org/state.md)
- `files/_config.yml`
- `files/CNAME`
- `.github/workflows/pages.yml`
