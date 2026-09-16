---
kind: source
source_kind: doc
ingested_at: 2026-09-16
summary: Fourth measurement pass after a reader reported the projection page's layout broken on a phone
---

# Hosting measurements, fourth pass — izbori2026 on a narrow screen

Taken on 2026-09-16, same container as the first three passes, against
`misabegovic/izbori2026` at `e34da65` (PR #6, merged). This pass measures one thing the
earlier three never did: whether a page fits the screen it is read on.

## Why it was taken

A reader opened `/politika/analiza-izbora/projekcije.html` on a phone and reported the CSS
broken. It was. The projection tables introduced in the third pass reuse `table.cal`, which
is the calibration grid from `metoda.html`: columns of numbers that must not wrap, which is
why every other use of it sits inside a `.calwrap` that scrolls sideways. The projection
tables inherited the `nowrap` and the 150px first-column floor without the scroll box.

## What was measured

Chromium 1194 headless, against the rendered `dist/` served locally, at four viewport
widths. One page per distinct page shape — 271 of them — plus every projection, ballot,
party and presidency page individually. The test is `documentElement.scrollWidth >
clientWidth`, i.e. the page is wider than the window it was given.

| page | before | after |
| --- | --- | --- |
| `projekcije.html` at 390px | 901px | fits |
| `projekcija-<dom>.html` at 390px | 607px | fits |
| `listic-<jedinica>.html` at 390px | 458px | fits |
| all 271 shapes at 320 / 390 / 768 / 1280px | 5 pages over | none over |

## What the measuring turned up besides the overflow

Three defects that no link check or byte count would have caught, because all three render
as valid HTML at full width:

- In the "Ko ulazi" list the name ran into the party: `Srđan MazalicaSNSD, 17. na listi`.
  Jinja's `trim_blocks` ate the newline after an `{% endif %}`, and with it the only space
  between the anchor and the span that follows it.
- The Cyrillic and larger-text buttons sat inside the nav strip, which scrolls sideways when
  its links do not fit. They had been falling off the right edge at every viewport width —
  before this release as well, and more so after a sixth link was added. A control a reader
  cannot see is a control that does not exist.
- A one-word heading longer than the screen (`Bosanskohercegovački`) pushed its own page
  wider than the viewport at 320px.

## Note on what a fix costs here

The narrow-screen work is CSS and template classes only. `render.py` gained one filter —
a table cell writes `<0,1` where a sentence writes "manje od 0,1", because inside a
`nowrap` column that phrase is a 100px floor no number can get under. No data changed, no
projection number changed, and `python seatlaw.py` still reproduces 231 of 231 seat-winning
lists and 518 mandates per year exactly.
