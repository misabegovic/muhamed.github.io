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
  - files/_cv/cv.html
  - files/images/social/linkedin-header.png
  - files/images/social/x-header.png
decided_by: wiki/muhamed.github.io/adrs/amber-portrait-and-brand-kit.md
sources:
  - files/brand/muhamed-isabegovic-amber.jpg
  - files/brand/muhamed-isabegovic-original.jpg
  - files/_data/brand.yml
  - files/images/social/linkedin-header.png
  - files/images/social/x-header.png
---

# Record: amber portrait and brand kit

Delivered on 2026-10-23 in #66 (squash-merged as ea6448c), deployed and
checked live: `/brand/`, its zip, the photos, the LinkedIn header, About,
llms.txt and the CV PDF answer 200, and the live `images/profile.jpg` and CV
PDF are byte-identical to the built ones.

- Both masters are in `files/brand/`. The render script reproduces the old
  `profile.jpg` byte for byte and the old Apple touch icon pixel for pixel
  from the original, then switches everything to amber (source:
  files/brand/muhamed-isabegovic-original.jpg).
- Re-rendered with the new photo: `share.png`, the eight service images and
  the three-page CV PDF, which stays tagged. Only page 1 changed, at the
  photo. The project cards carry no photo
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
- In the same PR: the LinkedIn and X headers moved from black to the amber
  gradient (the ADR's first change); the site keeps its yellow accent. The CV
  became one column for parsers, with the photo as a full 30 mm square and
  its projects and events linked (15 links in all), under the homepage ADR's
  twentieth change (source: files/_cv/cv.html).
- Later on 2026-10-23, on the owner's ask: a Banners section on `/brand/`
  with the LinkedIn and X headers, linked where the render script writes
  them, and a `banners/` folder in the zip (now 4.0 MB) (source:
  files/_data/brand.yml).

## Related

- [ADR: amber portrait and brand kit](../adrs/amber-portrait-and-brand-kit.md)
