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
  - files/brand.html
  - .github/scripts/render-social-images.js
  - files/_plugins/share_cards.rb
  - files/_includes/meta.html
  - files/images/social/cards/post-im-rich.jpg
created: 2026-10-23
updated: 2026-11-22
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

## First change: amber banners (2026-10-23)

The LinkedIn and X headers were black. The owner found that too aggressive
and chose, from five mockups (black, white, light grey, site yellow, amber),
the amber backdrop with ink type and the highlight in ink. That was against
the agent's advice: the amber avatar stands out least on it. Only those two
images change (source: .github/scripts/render-social-images.js).

The site's accent stays yellow: after a mockup with amber as the accent on
every page, the owner chose to keep it (2026-10-23). Amber stays the
portrait's and the banners' backdrop, not a UI colour.

## Second change: dark banners, a new line (2026-10-29)

This reverses the first change for the banners. The owner found the amber
banner "way off" next to the profile photo: its gradient (#ffb93f to
#e8920c) is lighter and yellower than the portrait's backdrop (sampled at
#ed9a16 to #f3a626), so the two almost match and read as a mistake. From
mockups in LinkedIn's and X's profile layouts (dark, paper, amber matched to
the photo, dark with an amber panel), the owner chose dark, the site's
`--dark` #111, where the amber photo stands out. The site headline is no
longer on the banners, since it is already the hero and the share card: the
line is the hero lead's, "Ten years of taking software from an idea to
production.", with "Ten years" in the site's yellow (white type on the yellow
highlighter was unreadable, and yellow on "production" made no sense to the
owner), over "Staff Engineer · muhamed.at". The earlier black header
differed: the site headline, a yellow block highlight, and a longer subline
(source: .github/scripts/render-social-images.js).

## Third change: plain bios (2026-10-29)

The three bios on `/brand/` are rewritten from scratch with the owner, one
question at a time. The old ones listed stacks, clients and tools, which the
owner found "too complicated and not natural language". The rules now: plain
sentences, no clients or employer named, and nothing that dates them ("dont
put starting... make it last"). Short is the role and the city. Medium adds
the open-source tools for teams that write code with AI agents and the
conferences: EuRuKo 2024 organised, RubyConf Austria and GoatConf founded.
Long adds what GoatConf is: a free conference in Tuzla for people who build
and sell software (source: files/_data/brand.yml).

## Fourth change: white banners with the site headline (2026-10-29)

The site headline is now the banners' line, "Ten years of taking software
from idea to production." (homepage ADR, twenty-fourth change), so the
banners repeat the hero on purpose: visitors from LinkedIn or X read the same
line first on the site. From mockups in a LinkedIn profile card (dark with
yellow words, dark with the stroke, white, the site's tint), the owner chose
white, like the site, with "Ten years" on the site's new hand-drawn
highlighter in ink (source: .github/scripts/render-social-images.js). The
mockups showed that white has no edge against LinkedIn's white profile card;
the owner chose it knowing that. On `/brand/` the banners get a hairline so
they keep their edge on the white page (source: files/assets/site.css).

## Fifth change: banners with the greeting (2026-11-21)

The site's headline is now a greeting, "Hi, I’m Muhamed." (homepage ADR,
twenty-eighth change), and the owner chose to carry it everywhere, so the
LinkedIn and X headers follow: the greeting with "Muhamed" on the
highlighter, over one sentence the agent drafted from the hero's lead, "I
help teams build products, lead engineering, and get started with AI
agents.", over "Staff
Engineer · muhamed.at" (source: .github/scripts/render-social-images.js).
They stay white, in the same safe area right of the profile photo. The
banners' alt text on `/brand/` says the new words (source: files/brand.html).
The owner uploads the new headers to both profiles himself; until then the
profiles show the ten-years line. On a second look the same day the hero's
lead became the owner's own paragraph again (homepage ADR, twenty-eighth
change), so the sentence under the greeting is its first: "I work on
software from deciding what to build to running it in production, anywhere
in the stack." On a third look the lead was rewritten to be warmer, and the
sentence under the greeting is again its first: "I grew up in Tuzla, I live
in Vienna, and I write software for a living." Later that day "write"
became "make", on the owner's word: "I grew up in Tuzla, I live in Vienna,
and I make software for a living." Last, the owner shortened it to "I make
software for a living." That is what both headers and the share card say
now, under the greeting and over "Staff Engineer · muhamed.at"
(source: .github/scripts/render-social-images.js), and what the banners'
alt texts say (source: files/brand.html). The upload to both profiles is
still the owner's to do.

## Sixth change: a card for every post and note (2026-11-22)

The owner's pinned post on X linked to his post "I'm rich!" and showed the
share card with the old headline, a day after the card was redrawn. Two
things were behind it. X, like LinkedIn and others, keeps its own copy of a
preview image by its address, and the address had not changed. And every
post and note previewed with the homepage's card, so even a fresh copy would
have shown the greeting instead of the post's title.

Now each post and each note has its own card, in the share card's layout
with the portrait on the right (the owner's pick over a layout with the
title across the full width): the name, "Writing" or "Brain" with the date,
the title, on the highlighter when it is short, the post's description or
the note's source, and its address. They are rendered by the same script as
the other images, as JPEG, since the portrait makes a PNG about five times
the size: 27 cards, 2.7 MB (source: .github/scripts/render-social-images.js,
files/images/social/cards/post-im-rich.jpg). A small build plugin points a
post or note at its card when the file exists, so one without a card keeps
the share card; it also gives every local preview image `?v=` and a digest of
the file, so the address changes when the picture does, and adds the size
and alt text that the head include used to add for the share card only
(source: files/_plugins/share_cards.rb, files/_includes/meta.html). The
GoatConf note keeps its own image.

After adding a post or a note, render its card:
`ONLY=cards/ node .github/scripts/render-social-images.js`.

A network that already holds a copy for a link refreshes it in its own
time; for X that is usually within a week, and LinkedIn's Post Inspector
refreshes a link on request.

Asked for by the owner in session on 2026-11-22 with a screenshot of the
pinned post ("the link builder should have new images"), then "Own card,
layout A". Showing the note's source as its second line, and leaving it out
when it is "Internal note", are the agent's calls, for the owner to adjust.

## Seventh change: the stroke under the word (2026-11-22)

The highlighter on the share card, the LinkedIn and X headers and every
other generated image was a stroke behind the highlighted word. The site now
draws it under the word in both colour schemes (the homepage decision's
thirty-eighth change), and the owner chose for the images to follow, so a
card and the page it leads to look alike. The renderer's highlighter is the
same stroke, 0.3em tall, at the foot of the word (source:
.github/scripts/render-social-images.js). 29 images are re-rendered: the
share card, both headers, the Rails and GoatConf cards, the ten service
images, the eleven project cards, and the three post and note cards whose
short titles are highlighted (source: files/images/social/cards/post-im-rich.jpg).
Two spacings changed with it, so the stroke does not touch the line under
it: a service image's subtitle sits a little lower, and a highlighted title
that runs over two lines has more room between them.

The headers need uploading to LinkedIn and X again; the brand kit's zip
picks them up on the next build. Preview images change their address with
their content, so networks fetch the new ones.

Asked for by the owner in session on 2026-11-22: "Yes, change them too".

## Related

- [Record: amber portrait and brand kit](../records/amber-portrait-and-brand-kit.md)
- [ADR: Professional homepage with brain and writing](professional-homepage-with-brain-and-writing.md)
- [Constraint: ADR before structural changes](../constraints/adr-before-structural-changes.md)
