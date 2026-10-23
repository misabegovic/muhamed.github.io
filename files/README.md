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

## The portrait and the brand kit

The portrait has two masters in `brand/`: `muhamed-isabegovic-amber.jpg` (in use) and `muhamed-isabegovic-original.jpg` (the dark studio original). Every other copy is made from them; to switch, run from the repository root:

```
python3 .github/scripts/render-profile-images.py original   # or amber
```

It writes `images/profile.jpg`, the `srcset` WebPs, the favicons and the brand kit's sizes. Then re-render the images that embed the photo: the share and service images (`render-social-images.js`; keep only the files whose photo changed) and the CV PDF (print `_cv/cv.html` with Chromium, A4, tagged).

`/brand/` (`brand.html`) reads `_data/brand.yml`. Its zip is built with the site by `_plugins/brand_kit.rb`, which also fails the build if a colour there no longer matches `assets/site.css`.

## Credits

Started from the [Reverie](https://github.com/amitmerchant1990/reverie) theme by Amit Merchant (MIT, see `LICENSE`), itself a fork of [Jekyll Now](https://github.com/barryclark/jekyll-now).
