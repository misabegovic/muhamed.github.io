---
kind: record
status: current
confidence: low
implemented_in:
  - .github/scripts/render-profile-images.py
  - files/brand/
  - files/brand.html
  - files/_data/brand.yml
  - files/_plugins/brand_kit.rb
  - files/assets/site.css
  - files/assets/site.js
  - files/_includes/site-footer.html
  - files/_layouts/about.html
  - files/llms.txt
  - files/README.md
  - files/images/profile.jpg
  - files/images/social/share.png
  - files/cv/Muhamed_Isabegovic_CV.pdf
decided_by: wiki/muhamed.github.io/adrs/amber-portrait-and-brand-kit.md
sources:
  - files/brand/muhamed-isabegovic-amber.jpg
  - files/brand/muhamed-isabegovic-original.jpg
  - files/_data/brand.yml
---

# Record: amber portrait and brand kit

Delivered on 2026-10-23 on branch `ccr-1b4fabe3-wdd1mj`. Checked in a local
build, not yet live.

- Both masters are in `files/brand/`. The render script reproduces the old
  `profile.jpg` byte for byte and the old Apple touch icon pixel for pixel
  from the original, then switches everything to amber (source:
  files/brand/muhamed-isabegovic-original.jpg).
- Re-rendered with the new photo: `share.png`, the eight service images and
  the three-page CV PDF, which stays tagged. Only page 1 changed, at the
  photo. The project cards and the LinkedIn and X headers carry no photo
  and were left as they were.
- `/brand/`: photos with four downloads each, terms, name, title and
  contacts, eight colour swatches with copy buttons, the typeface, and
  three bios with copy buttons (source: files/_data/brand.yml). The page
  works at 320 px with no horizontal scroll.
- The zip (`/brand/muhamed-isabegovic-brand-kit.zip`, 3.4 MB: README, bios,
  `colors.css`, eight photos) passes `unzip -t`. Two builds give identical
  bytes, and a changed colour stops the build.
- The copy buttons in `site.js` now restore their own label after copying,
  and announce long text by name to screen readers.

## Related

- [ADR: amber portrait and brand kit](../adrs/amber-portrait-and-brand-kit.md)
