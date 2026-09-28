---
kind: decision
status: accepted
confidence: low
supersedes: make-brain-cards-the-home-page.md
sources:
  - files/index.html
  - files/_layouts/default.html
  - files/_pages/services.md
  - files/_pages/about.md
---

# A professional homepage, with the brain and writing one click away

## Context

`muhamed.at` opens on the brain-card stream ("Peek into my brain"), per
[the previous homepage decision](make-brain-cards-the-home-page.md). The stream
is a good record of what the owner reads and thinks, but a first-time visitor,
a recruiter or a prospective client, lands on notes about other people's work
and has to find the Services page to learn what the owner offers.

The owner's situation changed on 2026-09-14, when a client contract ended. The
site is now also the front door for finding the next role or client. Three
facts on the published site no longer hold: About lists the Teamtailor
contract as "(2026 - present)", the structured data names Teamtailor as the
current employer, and the header tagline ("Father since 2025. Rubyist since
2016.") says nothing about the work.

The owner asked, on 2026-09-28, for a professional homepage presenting who they
are and what they offer, in the manner of consultancy sites such as end.game,
while keeping a blog and a place to share thoughts.

## Decision

1. **The homepage becomes a professional landing page.** It carries, in order:
   the positioning line and a call to action; a short proof bar of numbers
   drawn only from the owner's evidence; the companies worked at, as names;
   three services (assess, enable, build); how an engagement runs; three pieces
   of selected work; open source; testimonials; the latest writing and notes;
   and a closing call to action.
2. **All homepage copy lives in `files/_data/home.yml`**, so wording changes
   without touching markup, and a section with no entries renders nothing.
3. **The brain stream moves to `/brain/`**, where its entry pages already live
   (`/brain/:slug/`), unchanged in behaviour: search, tag filtering and the
   `/brain.xml` feed stay as they are. Writing stays at `/writing/`.
4. **Navigation becomes** Services, Writing, Brain, About, with the homepage on
   the name. The header tagline states the work instead of the biography.
5. **About is corrected**: the Teamtailor contract is shown as ended in 2026, in
   the visible career list and in the structured data.
6. **Only true, checkable claims appear.** Every number traces to a record in
   the owner's evidence store. Testimonials appear only when real, attributed
   and permitted, and the section stays hidden until then. Former employers
   appear as names rather than logos until the owner confirms each may be shown.
7. **The structure borrows from consultancy sites; the words do not.** No copy
   is taken from end.game or any other site.

## Alternatives considered

- **Keep the brain stream as the homepage and improve Services.** The least
  change, but the first screen would still not say what the owner does.
- **A separate site for services, leaving `muhamed.at` as the brain.** Two
  places to maintain and a split audience, for one person's practice.
- **A full redesign of every page now.** Consistent, but a large change before
  the homepage itself is validated. The other pages keep the existing styling
  for now; restyling them is a follow-up.

## Consequences

- A first-time visitor learns what the owner offers in the first screen, and
  can still reach every note and post in one click.
- The previous homepage decision is superseded; its routes other than `/` are
  unchanged.
- Homepage claims now have a maintenance cost: when the evidence changes, so
  must `home.yml`.
- Company logos and testimonials depend on the owner's permissions and on
  people's consent, and cannot be generated.

## Approval

Approved by the owner in session on 2026-09-28 ("start building a new site"),
with the instruction not to push or deploy. Built on the local branch
`redesign-homepage`, taken from the published `origin/main`.

## Related

- [ADR: Make the brain-card stream the home page](make-brain-cards-the-home-page.md) (superseded)
- [Constraint: ADR before structural changes](../constraints/adr-before-structural-changes.md)
