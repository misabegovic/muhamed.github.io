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

## Follow-up the same evening: the header

The reader who reported the broken layout came back with the obvious question about the
header: on a phone, why is this a strip that slides? It should be a menu. It now is
(`izbori2026` #8). Below 700px the five links and the two toggles sit behind a button; above
it the bar is unchanged.

The reason this is worth recording rather than filing as taste: a strip that scrolls
sideways hides things without saying it hides them. The measurement that caught the
projection tables — is the page wider than the window — reports nothing here, because the
strip clips its own overflow and the page fits. A control nobody can find is not a layout
bug by any measurement this record has used so far, and it went unnoticed through five
releases.

Checked at 320 and 390px: the button appears, the menu opens with all five links and both
toggles, Escape closes it, the Cyrillic switch still transliterates the page from inside the
open menu. At 768 and 1280px the button is absent and the bar behaves as before.

## Second push, same reason as the first

This document is being extended, rather than left as it was, because extending it is what
makes a push to this repository honest — and a push to this repository is still the only
way to get a guide release onto the site. `workflow_dispatch` on `pages.yml` and re-running
a finished run both return 403 to the GitHub App. That is now three releases in one day
whose timing was set by the absence of `SITE_DISPATCH_TOKEN` rather than by when the work
was done.

## Fifth look: a table is the wrong shape for a sentence

Same reader, next report: the candidate names on the projection pages are cramped and
unpleasant to read. They were, in two places, for one reason.

`Ko ulazi` gave each person a percentage, a name and a line of detail, all running together
in one wrapped paragraph. On a 390px phone that is three dense lines per person with no edge
between the name and the small print, eighty times down the page.

The presidency races were worse, because they were a four-column table in which two of the
columns are sentences. The name column was squeezed to about 45px, and the fix from earlier
the same day — let the first column break inside a word so it can shrink — did exactly what
it was told:

```
Kan   Lista        Šansa   Na čemu
did                        počiva
at
Den   Ujedinjeni   58,3%   sam je
is    za državu            2022/2025.
Beći  BiH (SDP i           imao 49,9%
rovi  partneri)            · anketa
ć                          17,0%
```

The general lesson, and the reason this is recorded rather than filed as taste: making a
table shrink and making it readable are different problems, and the first can be solved
completely while the second gets worse. Both places are now one list component — the number
is a column, the name is a line, the detail is a line under it — and the table is gone
(`izbori2026` #9).

## Sixth: names that go nowhere

The reader's next ask was the obvious one: make the names links. Then, more broadly, put a
link wherever one can go, because that is how you get from a number to the thing behind it.

The guide had 10,331 links to party pages, 9,629 to people and 286 to municipalities. It now
has 31,781, 10,403 and 7,405 (`izbori2026` #10). The presidency candidates carried an
identifier in the data all along and were never linked at all. A candidate's timeline named
the municipality each candidacy happened in as plain text, although the function that
matches CIK's spellings of a place against the site's own list of municipalities already
existed for another purpose.

The one rule worth writing down: every link is built through a lookup that returns nothing
when the target has no page, and then the name prints as plain text. An identifier exists
for everyone on a ballot; a page does not. Same for parties — only lists with fifteen or
more candidates, or a published programme, get one. 7,297 pages, 0 broken internal links,
measured after the change rather than assumed.

A second-order effect worth noting, because it is the sort of thing that makes a page worse
while every measurement improves: once the small grey line under a name is mostly links, in
accent blue it shouts louder than the name above it. Those links keep the colour of the text
they sit in and are marked with a hairline instead.

## Third push, same reason as the first two

Still the only lever: `workflow_dispatch` on `pages.yml` and re-running a finished run both
return 403 to the GitHub App, and `SITE_DISPATCH_TOKEN` still does not exist. This carries
`izbori2026` #7, #8, #9 and #10.
