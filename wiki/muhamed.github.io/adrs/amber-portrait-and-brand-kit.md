---
title: "The amber portrait everywhere, the original kept, and a brand kit at /brand/"
scope: muhamed.github.io
kind: decision
status: accepted
confidence: low
sources:
  - files/brand/muhamed-isabegovic-original.jpg
  - files/brand/muhamed-isabegovic-amber.jpg
  - files/assets/site.css
  - files/_pages/about.md
  - files/_data/home.yml
  - files/README.md
created: 2026-10-23
updated: 2026-10-23
author: pi-brain-agent
---

# The amber portrait everywhere, the original kept, and a brand kit at /brand/

## Context

The site, its icons, the share images and the CV PDF all used one portrait on
a dark studio backdrop (source: files/brand/muhamed-isabegovic-original.jpg).
The owner wanted a photo that stands out more on social media. Six backdrops
were tried in the session: the site yellow `#ffd21f` and five warmer
ones. The owner, with his wife's input, chose amber: a gradient from
`#ffb93f` to `#e8920c` behind the subject, cut from the original with a
background-removal model (source: files/brand/muhamed-isabegovic-amber.jpg).

The owner also asked for a place on the site where he or anyone else can
download his branding.

## Decision

Approved by the owner in the session on 2026-10-23, with these answers:

1. **The amber portrait everywhere.** It replaces the photo on the pages, in
   the favicons and app icons, in the share and service images and in the
   CV PDF. `images/profile.jpg` keeps its path, so the JSON-LD and
   `cv.json` stay as they are.
2. **The original is kept.** Both masters live in `files/brand/`, and one
   script (`.github/scripts/render-profile-images.py amber|original`) writes
   every derived image from the chosen master, so switching back is one
   command plus re-rendering the images that embed the photo (source:
   files/README.md).
3. **A brand kit at `/brand/`**, linked from the footer and the About card,
   not from the main menu. It holds both photos (2048, 1080 and 400 px, and a
   round 800 px PNG avatar), the colours, the typeface (Schibsted Grotesk,
   SIL OFL, linked rather than bundled), name, title and contacts, and
   short, medium and long bios. A "Download everything" zip is built with
   the site.
4. **Terms: free use, no credit asked.** Crop and resize freely, no other
   edits, no implied endorsement.

The bios restate facts already on the site, in the third person (source:
files/_pages/about.md, files/_data/home.yml). The colours are the site.css
tokens plus the amber backdrop (source: files/assets/site.css).

## Consequences

- **One source each.** The page and the zip read `_data/brand.yml`. The
  build fails if a colour there drifts from `site.css`, and the zip is
  rebuilt on every build with a fixed date, so it never goes stale and an
  unchanged kit gives the same bytes. It is written with Zlib, not rubyzip,
  which the Gemfile keeps out.
- **A bio changes in two places.** When About or the homepage facts change,
  update the bios in `_data/brand.yml` too.
- **About 3.5 MB more in the repository**, for the masters and kit sizes. The
  zip is built at deploy time, not committed.
- **Rendering differences.** The share and service images and the CV PDF were
  re-rendered with a different Chromium build. Text differs from the old
  render only by anti-aliasing. Images without the photo were left
  untouched.

## Related

- [Record: amber portrait and brand kit](../records/amber-portrait-and-brand-kit.md)
- [ADR: Professional homepage with brain and writing](professional-homepage-with-brain-and-writing.md)
- [Constraint: ADR before structural changes](../constraints/adr-before-structural-changes.md)
