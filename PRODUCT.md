# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences (first set equal by the owner, 2026-09-28; since 2026-10-21 the
site asks for collaboration, not a job):

- **Engineering leaders buying help**, first: deciding whether to bring him in
  for a build, a technical lead, an architecture review, AI-native help or
  Ruby on Rails consulting, contracted through his Austrian sole-trader
  company (e.U.). Their job: decide whether he can solve their team's problem
  and how to start.
- **Hiring managers and CTOs** filling a senior, staff or lead role through a
  contract with his company. They usually arrive from his CV or LinkedIn and
  check him out in a few minutes before or after an interview. Their job:
  decide whether he is credible and worth a conversation.

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

"I build products and lead the teams that ship them" (confirmed by the owner,
2026-09-29). Clients hire him to build and lead; AI is one of the things he
builds, not the pitch. His edge is making companies AI-native, in how they
build and in what they build, with open-source tools he builds and teaches.
Title, one form everywhere (owner, 2026-10-21, kept 2026-10-26): Senior Product
Engineer and Technical Lead, AI-native | AI Engineer. Five services: Build
(hands-on product engineering), Lead (fractional or interim technical lead),
Review (architecture review), AI-native (make your company AI-native), and
Rails (Ruby on Rails consulting, added 2026-10-26, for the owner to market
himself as a Rubyist). Rails has its own page, `/rails/`, and its own band on
the homepage, so the homepage does not read as Rails-only. Clients: product
companies of any size, from startups to enterprises. Talks are not sold as a
service; the conferences stay as proof.

What a neighbouring consultant or candidate could not truthfully copy: he
builds and ships the tooling that keeps agent-written software under control
(brain, pi-brain, tabula in private development, the enola constraints
program and four gems, three MCP servers), has led engineering teams in
production, stands in the European Ruby community as a conference founder and
organiser, and works in public.

## Operating Context

- Visitors come from a CV, a job application, LinkedIn, a conference, or a
  shared article or note.
- Contact is by email (info@muhamed.at). No booking link exists yet.
- He works with teams through his own company, Isabegovic Muhamed e.U., based
  in Vienna and working remotely across Europe. The site states no capacity:
  it always invites people to write, and if he is booked he says so and points
  them to someone good (owner, 2026-10-26).

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
- Copy lives in `files/_data/`: `home.yml` (homepage, work, projects),
  `services.yml`, `rails.yml` and `brand.yml`. Each claim traces to the
  owner's evidence store (`~/projects/hireable/files/hireable/profile/muhamed.yml`)
  or is marked as on the owner's word.
- All current redesign work is local only. Nothing is pushed or deployed
  without the owner's explicit ask.

## Brand Commitments

- Name: Muhamed Isabegovic. Domain: muhamed.at. The portrait on amber
  (2026-10-23): masters in `files/brand/`, rendered to `files/images/profile.jpg`
  and the rest by `.github/scripts/render-profile-images.py`; photos, banners,
  colours, typeface and bios in the brand kit at `/brand/`.
- Voice from the existing pages: plain, first person, specific, no hype. No em
  dashes in site text (recorded in the site log, 2026-08-30). No bragging: say
  what was done, not how big the client is; no client customer counts on the
  site (owner, 2026-10-26; the CV keeps an employer's size as context).
- Identities he organises: RubyConf Austria (founder), EuRuKo 2024, GoatConf
  2027 (founder).

## Evidence on Hand

- **Tools built and shipped:** his main tools are enola, tabula and taha
  (owner, 2026-10-22): core contributions to enola (the constraints program)
  and four Ruby gems for it; tabula (Rust) and taha, its harness, both in
  private development. Also pi-brain (published on npm, nine tagged
  releases), brain, and three MCP servers in Go, Rails and plain Ruby.
- **Teams led in production:** tech lead for the engineering team at Recrubo
  through its acquisition by Carv (2025 to 2026; no team size on the site,
  owner, 2026-10-22); engineering manager for around 30 engineers across 7
  time zones at Experfy (2019 to 2021), through a 150 percent scale-up; the
  AI candidate-prescreening architecture at Teamtailor (2026).
- **Ruby and Rails:** Ruby since 2016 and Rails in production at most roles
  since; Rails upgrades and performance work on the owner's word (2026-10-26),
  not yet in the evidence store.
- **Community standing:** founded and organised RubyConf Austria 2026 (with
  Dave Thomas, Chad Fowler, José Valim and Armin Ronacher on the programme);
  took full ownership of EuRuKo 2024 in Sarajevo; founding GoatConf 2027 in
  Tuzla.
- **Recommendations:** three, real and attributed: Zlatko Alomerovic
  (Recrubo/Carv), Hassan Akbar (Experfy) and Hans Schnedlitz (co-organiser of
  RubyConf Austria). None is from a client.
- **Working in public:** the blog (`files/_posts/`) and the brain stream
  (`files/_stream/`).
- **Company logos:** the seven on the homepage are shown with each company's
  agreement (owner, 2026-10-26).
- **Absent, and not to be fabricated:** client testimonials, outcome metrics
  beyond the evidence store, a booking link, pricing.

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
