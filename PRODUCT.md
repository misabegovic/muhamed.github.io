# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two primary audiences, weighted equally (confirmed by the owner, 2026-09-28):

- **Hiring managers and CTOs** deciding whether to hire Muhamed Isabegovic into
  a senior, lead or advisory engineering role. They usually arrive from his CV,
  a job application or LinkedIn, and check him out in a few minutes before or
  after an interview. Their job: decide whether he is credible and worth a
  conversation.
- **Engineering leaders buying help** deciding whether to book him for an
  assessment, a workshop or fractional AI product engineering, contracted
  through his Austrian sole-trader company (e.U.). Their job: decide whether he
  can solve their team's problem and how to start.

Secondary: engineers and the Ruby and AI-engineering community, who read the
writing and the brain stream.

## Product Purpose

muhamed.at is the personal site of Muhamed Isabegovic, a Vienna-based
AI-native engineer and former technical lead, with ten years of Ruby on Rails
underneath. The owner is moving toward AI-native engineering and does not want
the site to read as Rails-only (confirmed 2026-09-28). It exists to be the
place where both primary audiences can verify who he is and what he offers, and
to keep his thinking public through a blog and a stream of notes.

Success: a hiring manager or a prospective client leaves knowing what he does,
believing it from evidence they could check, and knowing how to reach him.

## Positioning

"I help engineering teams ship with AI agents, without losing control of their
code." Specs, guardrails and evals, set up in the team's own repository.

What a neighbouring consultant or candidate could not truthfully copy: he
builds and ships the tooling that keeps agent-written software under control
(the tabula agent memory, pi-brain, the enola constraints program, three MCP
servers), has led engineering teams in production, stands in the European Ruby
community as a conference founder and organiser, and works in public.

## Operating Context

- Visitors come from a CV, a job application, LinkedIn, a conference, or a
  shared article or note.
- Contact is by email (info@muhamed.at). No booking link exists yet.
- He is available immediately, open to both a senior role and contract work,
  based in Vienna and working remotely across Europe.

## Capabilities and Constraints

- Jekyll site built from `files/`, deployed by GitHub Pages from `main` through
  `.github/workflows/pages.yml`. Plain CSS; no Tailwind.
- The repository is also a pi-brain knowledge base (`wiki/`, `sources/`,
  `log/`), and its `AGENTS.md` requires an approved ADR before structural
  changes (`wiki/muhamed.github.io/constraints/adr-before-structural-changes.md`).
- Must keep, first-class: the blog at `/writing/`, the brain stream at
  `/brain/` (collection `_stream`, feed `/brain.xml`), and the Izbori 2026 voter
  guide under `/politika/`, grafted in at build time from
  `misabegovic/izbori2026`.
- Homepage copy lives in `files/_data/home.yml`; each claim traces to the
  owner's evidence store (`~/projects/hireable/files/hireable/profile/muhamed.yml`).
- All current redesign work is local only. Nothing is pushed or deployed
  without the owner's explicit ask.

## Brand Commitments

- Name: Muhamed Isabegovic. Domain: muhamed.at. The profile photograph at
  `files/images/profile.jpg`.
- Voice from the existing pages: plain, first person, specific, no hype. No em
  dashes in site text (recorded in the site log, 2026-08-30).
- Existing identities he organises: RubyConf Austria, EuRuKo 2024.

## Evidence on Hand

- **Tools built and shipped:** pi-brain (published on npm, nine tagged
  releases), core contributions to enola (the constraints program and four
  Ruby gems), tabula (Rust, in private development), three MCP servers in Go,
  Rails and plain Ruby.
- **Teams led in production:** technical lead for 10 engineers at Carv
  (2025 to 2026); engineering manager for around 30 engineers across 7 time
  zones at Experfy (2019 to 2021), through a 150 percent scale-up; the AI
  candidate-prescreening architecture at Teamtailor (2026).
- **Community standing:** founded and organised RubyConf Austria 2026 (with
  Dave Thomas, Chad Fowler, José Valim and Armin Ronacher on the programme);
  took full ownership of EuRuKo 2024 in Sarajevo.
- **Working in public:** the blog (`files/_posts/`) and the brain stream
  (`files/_stream/`, 20 entries).
- **Absent, and not to be fabricated:** testimonials (none collected yet),
  client logos (no permission recorded), outcome metrics beyond the evidence
  store, a booking link, pricing.

## Product Principles

1. **Verifiable over asserted.** Every claim points at something a visitor can
   check: a repository, a package, a talk, a role, a post.
2. **Two decisions, one site.** A hiring decision and a buying decision are
   served by the same evidence; neither audience should feel the site is for
   someone else.
3. **Show the work, not the pitch.** The tools, the teams and the public
   thinking carry the persuasion; claims about himself stay few and plain.
4. **The writing stays alive.** The blog and the brain are part of the proof
   that the thinking is current, not an archive behind the sales page.
