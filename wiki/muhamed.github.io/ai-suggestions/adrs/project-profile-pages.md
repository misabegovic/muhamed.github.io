---
title: "A profile page for each project, starting with enola and Usput.ba"
scope: muhamed.github.io
kind: adr
status: proposed
confidence: low
ai_suggestion: true
sources:
  - files/_data/home.yml
  - files/_includes/home-page.html
  - files/work.html
  - files/_config.yml
  - wiki/muhamed.github.io/adrs/professional-homepage-with-brain-and-writing.md
created: 2026-10-22
updated: 2026-10-22
author: pi-brain-agent
---

> **This is an AI-suggested draft.** It has not been approved. Treat every
> statement as a proposal awaiting human review, not as a decision.

## Context

The site shows two kinds of projects, each as a name, a line or two of text
and an outbound link (source: files/_data/home.yml):

- **The tools** (`open_source`: enola, pi-brain, tabula), on the homepage
  under "I build the guardrails I teach." They are the proof behind the
  AI-native offer, the service closest to consulting work.
- **The things built for fun** (`side_projects`: Usput.ba, Izbori 2026,
  hunt.rubyconf.at, the Post-Dayton card game, Minolovac), on /work/ (source:
  files/work.html).

A visitor has to leave the site to judge any of them, and the repository or
the live app does not say why it was built, what it shows about the owner, or
what a team could get from it. Since the eighteenth change of the homepage
ADR, the site asks visitors to work with the owner rather than hire him
(source: wiki/muhamed.github.io/adrs/professional-homepage-with-brain-and-writing.md);
a page per project that shows the work and ends in a way to work together
serves that directly.

The owner asked on 2026-10-22 for "specialized profiles with screenshots or
like marketing pages talking about the stuff, not just link to it randomly",
with Remotion as a possible tool, and agreed to start with enola and Usput.ba.

## Decision (proposed)

1. **A `projects` collection.** Each project gets one Markdown file in
   `files/_projects/<slug>.md`, published at `/work/<slug>/`, so the pages sit
   under Work and the header nav does not change. `_config.yml` gains the
   collection next to `stream`.
2. **One layout, `files/_layouts/project.html`, in this order:**
   1. Name, a one-line "what it is and who it is for", the owner's role on it,
      and a lead image.
   2. The problem it solves, in a short paragraph.
   3. What it does: three or four points, each with a screenshot or a real
      terminal capture.
   4. What it shows about how the owner works: one short paragraph, linked to
      the matching /work/ capability where there is one.
   5. Links: the live app, the repository, the package registry, as they
      apply.
   6. The ending: for the tools, a path to the AI-native service ("Set this up
      in your team"); for the things built for fun, the link to visit or play,
      then the site's usual closing band.
3. **Images are real, and cheap to refresh.** Screenshots are taken from the
   live apps by a Puppeteer script kept in the repository and run by hand
   (not in CI, so no workflow changes), saved as WebP at display sizes with a
   srcset, like the portrait. Terminal output for command-line tools is real
   output from a real run, shown as text in a styled `<pre>`, not as an
   image, so it stays readable, searchable and light. No video in this
   change.
4. **The existing lists link to the profiles.** An entry in `open_source` or
   `side_projects` gains `profile: /work/<slug>/`; where it is set, the
   homepage row and the /work/ entry link there, and the outbound links move
   onto the profile. Entries without a profile keep their current links.
   The one-liners stay in `home.yml`, and the profile reads them from there,
   so the list and the page cannot drift.
5. **Claims follow the evidence rule of `home.yml`.** Every claim on a profile
   names its evidence record or source in a comment, as `home.yml` does today.
   The text is drafted by the agent from the repositories and the existing
   evidence, then edited by the owner into his own voice before it ships.
6. **The first two profiles.**
   - **enola**: what the owner built in it (the constraints program, the Ruby
     DSL, the four gems), what it catches in CI, and a real run against a
     small Rails app. It is framed as the owner's part of a project he
     contributes to, not as his product.
   - **Usput.ba**: the owner's own product. The travel guide, the audio tours,
     and AI content grounded in real places, with screenshots from usput.ba.
7. **llms.txt and llms-full.txt** list the profiles under Key pages, and
   the sitemap picks them up as it does any page.

Later candidates, each a small change once the layout exists:
hunt.rubyconf.at, pi-brain, the card game. Izbori 2026 keeps its own site and
gets no profile, in line with the owner's wish not to promote it (fifteenth
change of the homepage ADR).

## Alternatives considered

1. **Keep the outbound links.** No work, but the visitor leaves the site to
   judge the work, and nothing connects a tool to the offer it backs.
2. **Longer cards on the homepage and /work/, no new pages.** No new
   structure, but the homepage grows again, and screenshots do not fit in a
   list.
3. **Video made with Remotion.** Strong on social media, but costly to make
   and to keep current, heavy for the page right after the performance pass,
   and skipped by most visitors. Deferred: it fits a later change about
   LinkedIn clips, which can reuse the same screenshots.
4. **Pages under `/projects/<slug>/` with a new nav item.** A cleaner URL, but
   it adds a header link the site has been cutting down, and splits "Work"
   in two.

## Consequences

- One new collection and one new layout; every later profile is one Markdown
  file plus its images.
- Screenshots go stale as the apps change; the capture script makes a
  refresh one command, but someone has to run it.
- More text to keep true. The evidence comments make that checkable, and the
  owner's edit pass is a gate before each profile ships.
- The enola page describes a project owned by enola-labs; it must make the
  owner's part clear and use enola's name and any logo the way the project
  allows.

## Open questions for the human reviewer

1. Is `/work/<slug>/` right, or do you prefer `/projects/<slug>/`?
2. For enola: should the page show only your part (constraints, DSL, gems),
   or enola as a whole with your part highlighted? Should anyone at
   enola-labs see it before it goes live?
3. For Usput.ba: which screens best show it (a place page, an audio tour, the
   map)? Is anything on the site not ready to be shown?
4. Should the homepage tool rows link to the profile instead of the
   repository (the proposal), or keep the repository link and add the
   profile?

## Related

- [ADR: A professional homepage, with the brain and writing one click away](../../adrs/professional-homepage-with-brain-and-writing.md)
- [Constraint: ADR before structural changes](../../constraints/adr-before-structural-changes.md)
