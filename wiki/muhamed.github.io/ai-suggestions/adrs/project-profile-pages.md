---
title: "A profile page for each project, starting with enola, enola-guides and Usput.ba"
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
  - ~/projects/hireable/files/hireable/profile/muhamed.yml
  - ~/projects/usput-promo/package.json
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
  AI-native offer, the service closest to consulting work. Two of the
  owner's public tools are missing from that list, though the AI-native
  offer names both (source: files/_data/services.yml): **brain**, the
  spec-driven knowledge base that pi-brain grew out of (evidence: oss-brain),
  absent since the list was created on 2026-09-28 (commit 4a4497a); and
  **enola-guides**, the gem of guides, laws, worked examples and agent
  skills for working with enola and a knowledge base anchored to code
  (evidence: oss-enola-gems), mentioned only as one of "four gems" in
  enola's row.
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
agreed to start with enola and Usput.ba, then added enola-guides ("it
describes how I work with knowledge bases"), asked why brain is not listed,
chose `/projects/<slug>/` for the addresses, and asked for Remotion videos on
the pages ("Remotion can be a good option for videos on those pages too").
A Remotion project for Usput.ba already exists in `~/projects/usput-promo`: a
35-second 1920×1080 promo with sound, 17 MB.

## Decision (proposed)

1. **A `projects` collection.** Each project gets one Markdown file in
   `files/_projects/<slug>.md`, published at `/projects/<slug>/`.
   `_config.yml` gains the collection next to `stream`. A `/projects/` index
   lists every profile in two groups (the tools, the things built for fun),
   so the parent address never 404s. The header nav does not change; the
   index is linked from the footer, the homepage tools section and /work/.
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
   image, so it stays readable, searchable and light.
4. **Short videos made with Remotion, where motion shows something.** Each
   video's Remotion source lives in its own repository, as
   `usput-promo` does today, not in this one; the site commits only the
   rendered files, under `files/videos/projects/<slug>/`. On the page a video
   is click to play: a WebP poster, `preload="none"`, controls, no autoplay,
   and an MP4 encoded for the web at 1280 px wide, kept under about 5 MB.
   A video with speech or sound gets captions (a WebVTT track). Everything
   the video shows is also said in the text, so the page stands without it,
   and the video is optional for each profile. The first one is a web cut of
   the existing Usput.ba promo.
5. **The existing lists link to the profiles.** An entry in `open_source` or
   `side_projects` gains `profile: /projects/<slug>/`; where it is set, the
   homepage row and the /work/ entry link there, and the outbound links move
   onto the profile. Entries without a profile keep their current links.
   The one-liners stay in `home.yml`, and the profile reads them from there,
   so the list and the page cannot drift.
6. **brain and enola-guides join the homepage tools list**, with the same
   role, outcome and text fields as the other rows, from their evidence
   records. enola's row stops counting "four gems" and points to
   enola-guides instead.
7. **Claims follow the evidence rule of `home.yml`.** Every claim on a profile
   names its evidence record or source in a comment, as `home.yml` does today.
   The text is drafted by the agent from the repositories and the existing
   evidence, then edited by the owner into his own voice before it ships.
8. **The first three profiles.**
   - **enola** (`/projects/enola/`): what the owner built in it (the
     constraints program, the Ruby DSL, the gems), what it catches in CI, and
     a real run against a small Rails app. It is framed as the owner's part
     of a project he contributes to, not as his product.
   - **enola-guides** (`/projects/enola-guides/`): how the owner works with
     knowledge bases and architecture rules, as the gem teaches it: the
     guides, the catalogue of laws, the worked examples (a Rails shop with
     thirteen laws, a knowledge base anchored to code), and the agent skills
     and hooks. The page ends in the AI-native offer.
   - **Usput.ba** (`/projects/usput/`): the owner's own product. The travel
     guide, the audio tours, and AI content grounded in real places, with
     screenshots from usput.ba and the web cut of the promo.
9. **A brain stream entry on how the owner works with knowledge bases**,
   drawn from enola-guides (the guides on a knowledge base with enola, the
   hooks and the skills as they run), linking to the enola-guides profile.
   It is a normal stream entry, written through the usual workflow.
10. **llms.txt and llms-full.txt** list the profiles under Key pages, and
    the sitemap picks them up as it does any page.

Later candidates, each a small change once the layout exists: brain,
pi-brain, hunt.rubyconf.at, the card game. Izbori 2026 keeps its own site and
gets no profile, in line with the owner's wish not to promote it (fifteenth
change of the homepage ADR).

## Alternatives considered

1. **Keep the outbound links.** No work, but the visitor leaves the site to
   judge the work, and nothing connects a tool to the offer it backs.
2. **Longer cards on the homepage and /work/, no new pages.** No new
   structure, but the homepage grows again, and screenshots do not fit in a
   list.
3. **No video, screenshots only.** Lighter and cheaper to keep current, but
   the owner wants motion where it helps, and the Usput.ba promo already
   exists. Taken instead with the limits in point 4: optional per profile,
   click to play, size-capped, the text standing on its own.
4. **Autoplaying muted loops.** Catch the eye, but cost data on every view,
   fight `prefers-reduced-motion`, and undo the performance pass. Rejected.
5. **Remotion sources inside this repository.** One place for everything,
   but it brings a Node and React project into the site's repository and
   its layout. Rejected; one repository per video project, as now.
6. **Pages under `/work/<slug>/`.** Keeps them under Work, but the owner
   chose `/projects/<slug>/`.
7. **A Projects item in the header.** Rejected; the header has been cut
   down, and the index is reachable from the footer and the sections that
   list projects.

## Consequences

- One new collection and one new layout; every later profile is one Markdown
  file plus its images.
- Screenshots go stale as the apps change; the capture script makes a
  refresh one command, but someone has to run it. Videos go stale too, and
  cost more to redo; that is why each is optional.
- Rendered videos add a few MB each to the repository and the Pages
  artifact; the size cap keeps that small.
- The homepage tools section grows from three rows to five.
- More text to keep true. The evidence comments make that checkable, and the
  owner's edit pass is a gate before each profile ships.
- The enola page describes a project owned by enola-labs; it must make the
  owner's part clear and use enola's name and any logo the way the project
  allows.

## Open questions for the human reviewer

1. For enola: should the page show only your part (constraints, DSL, gems),
   or enola as a whole with your part highlighted? Should anyone at
   enola-labs see it before it goes live?
2. For Usput.ba: which screens best show it (a place page, an audio tour, the
   map)? Is anything on the site not ready to be shown? Is the July promo
   still current enough to cut for the web, and does its sound need
   captions (speech) or none (music only)?
3. For enola-guides: should the profile live under enola-labs's name (the
   `enola-labs/enola-guides` fork) or yours (`misabegovic/enola-guides`,
   which the gem's source link points to)?
4. Should the homepage tool rows link to the profile instead of the
   repository (the proposal), or keep the repository link and add the
   profile?

## Related

- [ADR: A professional homepage, with the brain and writing one click away](../../adrs/professional-homepage-with-brain-and-writing.md)
- [Constraint: ADR before structural changes](../../constraints/adr-before-structural-changes.md)
