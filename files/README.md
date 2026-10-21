# muhamed.at

The Jekyll source of [muhamed.at](https://muhamed.at). GitHub Actions builds and deploys it on every push to `main` (`.github/workflows/pages.yml`); `/politika/analiza-izbora/` is mounted at build time from misabegovic/izbori2026, so it is missing from a local build.

## Build locally

Use Ruby 3.3, as CI does. Gems install into the git-ignored `vendor/bundle`.

```
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

## Images

Ship images at the size they are shown, as WebP: about 3× the CSS size for logos and avatars, and 1400 px wide for photos in posts. `images/profile.jpg` stays full size because the CV PDF, the share images and the JSON-LD use it; pages show `images/profile-{480,800,1200}.webp` through `srcset`.

## Credits

Started from the [Reverie](https://github.com/amitmerchant1990/reverie) theme by Amit Merchant (MIT, see `LICENSE`), itself a fork of [Jekyll Now](https://github.com/barryclark/jekyll-now).
