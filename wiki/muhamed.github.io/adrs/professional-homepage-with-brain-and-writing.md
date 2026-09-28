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
  - files/_data/home.yml
  - files/_includes/home-page.html
  - files/assets/home.css
  - files/assets/fonts/
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

## Amendments

**2026-09-28: the homepage is styled as a solo expert's practice, carried by
real proof.** The owner rejected four comparison styles as reading
machine-made, then a technical-drawing system built from a decision round, and
chose instead to follow the sites of solo Rails consultants and Rails
consultancies (Speedshop, thoughtbot, Test Double). What those sites share is
not a style but proof: a real face, real client names, real credentials and
plain services. The direction and structure of this decision are unchanged;
the rendering is:

- the first screen pairs the positioning line, one call to action and the
  availability line with the owner's portrait;
- the companies worked at follow as plain names; the proof numbers are written
  into the copy rather than shown as a statistics bar;
- services, how an engagement runs, selected work, open source, the
  conferences, the latest writing and notes, and a closing call to action
  follow, with the conference work in its own dark section because it is the
  strongest single credential;
- the palette is white and near-black with one signal yellow for the primary
  action, the headline highlight and the closing band; type is Schibsted
  Grotesk, hosted on the site rather than loaded from Google, so no visitor
  data reaches a third party.

The system is recorded in `DESIGN.md` at the repository root.

**2026-09-28, later the same day: every page follows the system, contact gets
its own page, and logos and testimonials get marked placeholders.** The owner
approved the look and asked for it everywhere, which takes up the follow-up
named under Alternatives. Every layout (pages, posts, brain entries, the
writing, brain and tags indexes) shares one header, one footer and one
stylesheet; the old theme stylesheet is retired except for code highlighting.
The grafted voter guide under `/politika/analiza-izbora/` keeps its own look,
since it is a separate product in Bosnian; the `/politika/` landing page
follows the system.

"Get in touch" leads to a `/contact/` page rather than straight to a mail
client. The two audiences arrive with different questions, so the page offers
two prepared emails (a role, or help for a team), says what to include, and
states availability and location; the address is shown as text so it can be
copied. A form was rejected: the site is static on GitHub Pages, and a form
service would send visitor data to a third party.

Company logos and testimonials still depend on permission and consent
(decision point 6). Until they exist, the homepage shows marked placeholders
for them, and only while the `show_placeholders` switch in
`files/_data/home.yml` is on. A placeholder never carries an invented quote or
a real logo; it shows where real material will go. The switch is turned off
before anything is published.

**2026-09-28, third change: selected work names no clients, links what can be
opened, and speaking joins contact.** The owner asked that "What I have built
and led" stop naming specific clients and link to work wherever a visitor can
open it. The section now leads with Usput.ba, which the owner founded and
runs, linked, followed by client and employer work described by the kind of company rather than its name, with no
link. The companies worked at are still named in their own strip, as decision
point 1 records. The contact page gains a third prepared email, for conference
and meetup organisers inviting a talk or workshop; it claims no past talks,
since none are on record, and leans on the owner's standing as a conference
organiser instead. The services page is aligned with the homepage's three
services (Assess, Enable, Build) and ends on the contact page rather than a bare
address.

**2026-09-28, fourth change: side projects get their own section.** The owner
asked that side projects such as the Politika work stand apart from paid and
founded work. The homepage gains a side projects section after the tools: the
Izbori 2026 guide (linked), TreasureHunt.io built for RubyConf Austria 2026,
and a political strategy card game, the last two marked as private
repositories rather than linked. (TreasureHunt.io lives on as
hunt.rubyconf.at, which is public, so it is listed under that name and linked;
the owner confirmed the rename the same day.)

**2026-09-28, fifth change: the middle of the homepage makes claims instead
of labelling sections, and speaks to hiring managers too.** The owner found
the services, work, tools and side-project sections read as a list of lists:
headings described the section, and four sections in a row shared one layout.
Each heading now states something the section proves ("Three ways I can help
your team", "Selected work", "I build the guardrails I teach", "On the side"),
the headings and framing live in `files/_data/home.yml` with the rest of the
copy, and the layouts vary: services with when each fits and its format, work
as rows, tools as a claim beside a list, side projects as a compact list. The
services section ends with a line for hiring managers pointing to the role
option on the contact page, because both audiences are weighted equally and
the middle of the page otherwise addressed only clients.

**2026-09-28, sixth change: AI-native first, Rails as depth, and proof
before the case list.** The owner is moving toward AI-native engineering and
does not want the site to read as Rails-only. The framing lines stop naming
Rails as the audience ("product teams" rather than "Rails and product teams"),
and the homepage gains a "What I work with" section listing the stack by
group, AI and model tooling first, with monochrome marks from the open Simple
Icons set hosted on the site and plain labels where no mark exists. Every
entry is backed by the owner's code or evidence store, except C, which is
listed on the owner's word. The order of the middle changes so that the
quotes and the conference work sit higher and selected work lower: services,
the stack, the guardrails-and-tools claim, what people say, the community,
then selected work and side projects. (The stack moved above the tools claim
later the same day, at the owner's request, so the claim reads as the proof
of what the stack lists.)

**2026-09-28, seventh change: work gets its own page.** Selected work and the
side projects read as an appendix at the bottom of the homepage: the densest
text on the page, after its natural high point, in a layout the tools section
already uses. They move to a `/work/` page, where each entry has room, and the
"Work" navigation link points there. The homepage keeps a compact strip of three
highlights (Usput.ba, the AI candidate screening design, Izbori 2026), one line
each, linking to their entries on the work page, followed by a link to all work.

**2026-09-28, eighth change: work is organised by capability, not by
employer or date.** Describing client work by the kind of company, with its
years, still made each entry easy to attribute once the companies worked at are
shown by name. The owner asked that the work page stop reading as a timeline of
engagements. It now groups what the owner can do into themes (AI features in
production, guardrails for agent-written code, many systems into one model,
leading teams), each a claim followed by proof points that carry no employer,
no client and no date, with links only to public work. The owner's own
projects follow as a separate list, linked where public. The homepage
highlights show only the owner's own projects, so nothing on the homepage ties
a piece of work to an employer.

**2026-09-28, ninth change: the services page is rebuilt in the system.** The
services page was the last page still reading as a long markdown document, and
its "Why me" named employers. It is rebuilt on the homepage's components: one
block per service (when it fits, what you get, the format), talks at events,
how an engagement runs from the first email to the handover, proof points that
name no employer and link to the work page, one recommendation, and a closing
call to action. The service names and summaries stay in `files/_data/home.yml`
so the homepage and the services page cannot drift; the longer detail lives in
`files/_data/services.yml`.

**2026-09-28, tenth change: the owner's games are played on the site.** The
political strategy card game (Dejtonska igra) is served at
`/igre/dejtonska-igra/`. It is a client-only SvelteKit app, so it is built as
static files for that base path and committed into the site under
`files/igre/dejtonska-igra/`, because its repository (`klosaer/card-game`) is
private and the Pages workflow cannot check it out without a token the owner
would have to create. `.github/scripts/build-dejtonska-igra.sh` rebuilds it
from a local checkout into a temporary copy, so the game's own repository is
never modified; rebuilding is a manual step whenever the game changes. The
minesweeper across Bosnia and Herzegovina, which lives inside Usput.ba and
builds its boards on the server from recorded mine-suspected areas, is ported
to a static page at `/igre/minolovac/`. `.github/scripts/build-minolovac.py`
reads the snapshot from a local Usput.ba checkout and applies Usput.ba's own
board rule (a cell is a mine when any 50 m cell of the "inside" mask falls in
it), writing only per-board cell lists to `files/igre/minolovac/boards.json`:
no geometry and no mask leave the build. The output matches Usput.ba's engine
cell for cell. Only the six preset regions and three difficulties are offered,
since a custom location would need the whole mask at runtime. The page carries
Usput.ba's safety rules for that data: never a safety statement, an empty cell
means only that no area is recorded there, the snapshot date and its age are
shown, it is not for navigation, and BHMAC, the official app and the emergency
numbers are named. The board is drawn without map tiles, because live
OpenStreetMap tiles would send every visitor's address to a third party; a
link lets a visitor open the area on OpenStreetMap by choice. Usput.ba's own
notes recommend coordinating with BHMAC before a public launch, and that
recommendation stands here too before the site is published.

**2026-09-28, eleventh change: the CV can be downloaded, and the redesign
goes live.** A one-page PDF of the owner's CV is served at
`/cv/Muhamed_Isabegovic_CV.pdf`, linked from the first screen, the contact page
and the footer. It is rendered by hireable, the owner's evidence-checked CV tool,
from the same layout as the private copy but without the phone number, since a
public PDF is scraped; email, site and profiles stay. It is regenerated by
rendering again whenever the CV changes. With the owner's ask to promote the
work, the redesign is published from `main`; the placeholder switch is off, as
this decision requires before publishing.

## Approval

Approved by the owner in session on 2026-09-28 ("start building a new site"),
with the instruction not to push or deploy. Built on the local branch
`redesign-homepage`, taken from the published `origin/main`.

## Related

- [ADR: Make the brain-card stream the home page](make-brain-cards-the-home-page.md) (superseded)
- [Constraint: ADR before structural changes](../constraints/adr-before-structural-changes.md)
