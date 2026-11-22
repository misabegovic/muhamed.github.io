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
  - files/_data/rails.yml
  - files/rails.html
  - files/_includes/home-page.html
  - files/_includes/site-header.html
  - files/assets/site.js
  - files/assets/home.css
  - files/assets/fonts/
  - ~/projects/usput.ba/wiki/decisions/minesweeper-safe-start.md
  - ~/projects/usput.ba/app/controllers/minesweeper_controller.rb
  - ~/projects/usput.ba/app/services/mine_checker
  - ~/projects/usput.ba/app/javascript/controllers/minesweeper_controller.js
  - ~/projects/usput.ba/app/views/minesweeper
  - ~/projects/usput.ba/config/locales
  - ~/projects/usput.ba/config/routes.rb
  - ~/projects/usput.ba/test/services/mine_checker
  - ~/projects/usput.ba/test/controllers/minesweeper_controller_test.rb
  - ~/projects/usput.ba/wiki/decisions
  - ~/projects/usput.ba/wiki/product/features.md
  - files/_cv/cv.html
  - files/_data/cv.json
  - files/cv.json
  - files/llms.txt
  - files/_includes/person-jsonld.html
  - files/assets/site.css
  - files/_includes/meta.html
  - files/brand.html
  - .github/scripts/render-social-images.js
  - files/_config.yml
  - files/_data/services.yml
  - files/cv/Muhamed_Isabegovic_CV.pdf
  - files/_includes/site-head.html
  - files/_layouts/post.html
  - files/_layouts/stream-entry.html
  - files/_projects/taha.md
  - files/images/projects/taha/thumb-1600.webp
  - files/images/social/project-taha.png
  - files/_pages/contact.md
  - files/services.html
  - files/cv/index.html
  - files/brain.html
  - files/writing.md
  - files/_layouts/project.html
  - files/_includes/project-cards.html
  - files/_data/brand.yml
  - files/images/projects/enola/thumb-320.webp
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

**2026-09-29, twelfth change: the CV is reworked and rendered from its own
source.** A rejection for a Staff role named what the CV failed to show:
tenure, ownership outside consulting, early-stage pace, specific personal
contributions and breadth. The CV is now two pages rendered with Chromium from
`files/_cv/cv.html` (not published by Jekyll) in the site's design system,
instead of by hireable. Since 2024 it shows one founder entry for the owner's
company with no dates on individual engagements; the headline is Product
Engineer and Tech Lead, AI, and the homepage caption and About metadata match
it. Experfy is shown as Lead Software Engineer, since no formal title was held.
The facts behind it are captured in the owner's private hireable repository.

**2026-09-29, thirteenth change: the work page may name employers.** With no
employer on any proof point, "Leading teams" could link only to RubyConf
Austria, which read as if leading teams meant the conference. The CV already
names every employer, so hiding them on the work page no longer protected
anything. Proof points may now name the employer they come from, and link to
it. Only "Leading teams" is rewritten this way so far; the other themes keep
their anonymous wording until they are revisited.

**2026-09-29, fourteenth change: the card game can be played from its own
page.** The game's landing at `/igre/dejtonska-igra/` showed only two store
placeholders marked "soon", so a visitor had no way into the game. The game
repository now puts a Play button on that landing, and on the web the whole
game is free (the game's ADR-030 is amended to say so; the store apps keep
their one purchase). The site copy is rebuilt from that commit with the
existing build script; nothing else on the site changes.

**2026-10-21, fifteenth change: the proof comes earlier, and the header works
on phones.** A design critique of every page at 390, 820 and 1440 px
(`.impeccable/critique/2026-10-21T12-57-56Z__files-index-html.md`, 24/36)
found the evidence arriving late on a phone (the recommendations around screen
8 of 15), a phone header that broke into three rows at 360 px with "About"
clipped and 26 px tap targets, and two homepage cards cut short by unquoted
commas in `home.yml`. The homepage order becomes hero, logos,
recommendations (Zlatko first), services, community, stack, tools, latest,
closing. The "A few things I have built" highlights leave the homepage: the
owner did not want the Izbori voter guide promoted there, and chose to drop
the section rather than swap the card. Izbori and the other side projects stay
on the work page, and the guide stays at /politika/. The community heading drops "I also" and its
items share one brightness, with the numbers in bold. The stack shows pills
only for "What I build" and "AI and agents", without the yellow tint, and
names the rest in one line linking to the full stack on About. Each tool
leads with a one-line outcome above its paragraph. Under 860 px the header is
the name and a Menu button that opens the links as full-width rows; on every
width it slides away while scrolling down and returns on scroll up. Header,
footer and text-link targets are at least 44 px. The work page stays
anonymous and the CV engagements stay undated (twelfth change); the CV says
once that they ran through the company, and its PDF link is a button.

**2026-10-21, sixteenth change: every page ends with two paths, and About
becomes the story.** The re-run critique
(`.impeccable/critique/2026-10-21T13-26-54Z__files-index-html.md`, 25/36) found
the hiring manager without a final ask on most pages, the role written three
ways, About duplicating the CV in older styling, and the CV missing from the
header. The yellow band becomes one shared include with two paths, "Hiring?"
(Talk about a role) and "Need help?" (Get in touch), then the address, on Home,
Services, Work, About, the CV, posts and brain entries; Services keeps its own
text for the second path. The header swaps Brain for CV (Brain stays in the
footer and the homepage list). The role is written one way everywhere, as on
the CV and LinkedIn: "Senior Product Engineer and Technical Lead, AI-native |
AI Engineer". About keeps the story, the open-source detail and the personal
list, and points to the CV for career, education, languages and skills; the
homepage's stack link now points to the CV's skills. Dates read "23 Jul 2026"
everywhere; brain cards drop the "note" label; two brain entries name their
source instead of an event; the tag filters show a pressed state and a count,
and typing after a tag click no longer extends the tag. Tablets keep the
two-column hero and services down to 700 px. The homepage keeps all three
recommendations on phones.

**2026-10-21, seventeenth change: the services are presented as a choice,
then an offer with its own email.** The offers, their names, formats and the
absence of prices stay; only the presentation changes. The homepage's four
cards show the name, the "When you..." line and the format, and each card
links to its offer on /services/. On /services/ every offer ends with its own
email button, prefilled like the contact page's cards. Review lists what the
review delivers as four parts in reading order (where you stand, what holds,
what will break, what to fix first), from its earlier "What you get" lines.
"Why me" becomes "Why teams bring me in.": one line ("I build and I lead, and
the tools I teach are ones I wrote.") and the three recommendations, instead
of three self-claims and a single quote. The AI-native outcome line loses its
yellow side stripe.

**2026-10-21, eighteenth change: the site asks for collaboration, not a job.**
Teams bring the owner in through his company; the site no longer advertises
him as a candidate. The hero's availability line becomes "I work with teams
through my own company, Isabegovic Muhamed e.U." instead of "Available now for
a senior role or contract work", and the same wording replaces it in the site
description, the Person JSON-LD and llms.txt. The homepage's "Hiring rather
than contracting?" line is gone. The band that ends every page keeps two
paths, now both ways to start working together: "Building something?" (to the
contact page) and "Want a second opinion?" (the fixed-scope architecture
review, as the small first step). The contact page drops "Hiring for a role"
for "A second opinion", with the review's prefilled email, and its
Availability row becomes "How I work: Through my own company". Lead's format
reads "Fractional or interim" instead of "Part-time or full-time". /work/'s
heading becomes "What teams bring me in for." llms.txt lists the ways teams
bring him in instead of the roles he is open to, and the JSON-LD occupations
drop Staff Engineer, Engineering Manager and VP of Engineering. The CV, its
nav link and the role line are unchanged.

**2026-10-22, nineteenth change: Minolovac opens with a safe start and never
ends on the first click.** Each preset was centred on the largest recorded
area near its town, so most boards were 63 to 100% mines and Sarajevo/easy
was 81 of 81: the first click always lost (source: files/igre/minolovac/boards.json
before the change). Mines still sit only where the data puts them; the
boards move instead. The build (.github/scripts/build-minolovac.py) searches
real ground within 12 km of each preset for the nearest board, per level,
with 15 to 36% mines whose safe ground is broken into pockets: the game
reveals the largest pocket before the first move, and at least a quarter of
the safe ground stays hidden, to be read across the edges of the areas.
Below about a quarter mines, real areas cluster so that one opening clears
the board, so classic densities (12 to 21%) are not used. Zooming out
instead (larger boards or cells at the preset) was measured and rejected:
Sarajevo stays at 25% or more even at 30 by 30 cells of 600 m. The density
line no longer says the count "mirrors real statistics"; it gives the
board's own share. The map link points at each board's centre.
The same change goes to Usput.ba's minesweeper, the same game on real map
tiles, under Usput's own decision (usput.ba wiki/decisions/minesweeper-safe-start.md):
its preset boards take these centres, and `MineChecker::SafeStart` opens
the largest safe pocket before the first move, on custom boards too. It is
built on a local branch, `minesweeper-safe-start`, for the owner to review
and ship with Usput's own checks.

**2026-10-23, twentieth change: the CV is one column, for parsers.** Text
pulled from the two-column PDF interleaved the columns ("Experience / Skills /
Founder · Isabegovic Muhamed e.U. / Product and AI"), which is how an
applicant tracking system reads it (source: files/cv/Muhamed_Isabegovic_CV.pdf
before the change). `files/_cv/cv.html` now flows in one column in reading
order: header, experience, skills, open source, education, languages,
community, recommendations. The page-sized blocks, running headers and
"continued" sections are gone; Usput.ba sits with the other roles under the
company; skills are comma-separated lists, and contacts one line. Every word
is kept, and `render-cv-data.js` reads the same data from it. Still three
pages, tagged. Roles under the company stay undated, as the owner chose
again.

**2026-10-26, twenty-first change: a Rails offer, and no client customer
counts.** Rails becomes a fifth service, "Ruby on Rails consulting", for the
owner to market himself as a Rubyist. On the homepage it is its own band under
the grid of four, so the grid keeps its 2×2 and the page does not read as
Rails-only; the full offer is a new page, `/rails/`, linked from the band, the
Rails entry on `/services/`, the contact page and the footer. The page opens
on "Rails apps, from the first release to the tenth year.", with four
checkable Rubyist facts (Ruby since 2016, RubyConf Austria founded, EuRuKo 2024
organised, four gems) and Zlatko's recommendation word for word, then a menu
of the work in the owner's terms: maintenance and upgrades, refactoring (back
to Rails conventions), rewrites, performance, CI/CD and continuous delivery
(trunk-based development, feature flags), team processes, end-to-end
ownership and AI features; then three formats: a call, a day in the code, a
few hours a month. The homepage band lists the same menu. A problem-and-proof
layout, then a "Done before" proof list, were previewed first and dropped:
the owner found the proof too specific and weak, and the menu is what buyers
look for. No capacity promise: the page invites everyone to write and says
that, if he is booked, he will say so and point to someone good. Upgrades,
performance, trunk-based development and feature flags are on the owner's
word, not yet in the evidence store. The words live in `files/_data/rails.yml`; the name,
format and summary stay in `home.yml` (services:) and the email in
`services.yml`. In the same change, the site stops quoting a client's customer
count: "8,500+ companies" is gone from `/work/`, `/rails/` and llms.txt, kept
on the CV. The role title is unchanged: a shorter caption ("Senior product
engineer, tech lead and Rubyist") was previewed and declined. The same day,
`/rails/` got its own share card (`images/social/rails.png`) and Rails a
LinkedIn and X post image beside the other four services, rendered by
`render-social-images.js`.

**2026-10-29, twenty-second change: Staff Engineer at Symphony.** The
owner's contract with Symphony is signed, a B2B engagement through his
company, and it is his latest role. The title, one form everywhere, becomes
"Staff Engineer" (was "Senior Product Engineer and Technical Lead, AI-native |
AI Engineer"): the homepage caption, the footer, About, the CV page and PDF,
page titles and link previews, the JSON-LD, the bios on `/brand/`, llms.txt
and `_config.yml`'s description. The CV lists "Staff Engineer · Symphony"
first under the company, described from symphony.is as an AI-native
engineering company building software and AI for enterprises, high-growth
startups and private equity portfolio companies; the company's line says
"engineering roles for startups and engineering companies" (was "inside
startups"). About, the long bio and llms.txt name Symphony as the current
engagement, before Teamtailor. Symphony is not in the homepage "Worked with"
row for now. The share card and the ten service post images are re-rendered
with the new title.

**2026-10-29, twenty-third change: plain descriptions.** The four
descriptions that only search engines, link previews and AI assistants read
follow the brand kit's plain bios (amber portrait ADR, third change): About's
meta description, `_config.yml`'s site description (first person), the
Person JSON-LD and the summary at the top of llms.txt now say "a Staff
Engineer, based in Vienna", that he builds open-source tools for teams that
write code with AI agents, and that he works with teams through his own
company. The About page and llms.txt's role list keep their client names,
like the CV.

**2026-10-29, twenty-fourth change: ten years from idea to production.** The
hero headline becomes "Ten years of taking software from idea to production."
(was "I build products and lead the teams that ship them."), the same line as
the LinkedIn and X banners, with "Ten years" highlighted (source:
files/_data/home.yml). The lead takes the About page's words: "From deciding
what to build to running it in production, anywhere in the stack. Lately I
also work one layer up, with agents writing the code, and build open-source
tools that keep that reliable." (source: files/_pages/about.md). The owner
chose each line from options, one question at a time; a lead spoken to the
visitor ("I join your team to build, to lead, or both") read as a pitch and
was replaced. The highlighter, site-wide and in every generated image, is now
a hand-drawn stroke, tilted and uneven, chosen from five mockups; it is an SVG
background, so each line of a wrapped mark gets its own stroke (source:
files/assets/site.css, .github/scripts/render-social-images.js). The share
card, the Rails and GoatConf cards, the ten service posts and the ten project
cards are re-rendered.

**2026-10-29, twenty-fifth change: Europe and beyond.** The line under the
hero's buttons becomes one sentence, "Based in Vienna, I work remotely with
teams in Europe and beyond, through my company Isabegovic Muhamed e.U." (was
"I work with teams through my own company, Isabegovic Muhamed e.U. Based in
Vienna, working remotely across Europe."), since the owner works with teams
outside Europe too (source: files/_data/home.yml). The footer and the Contact
page say the same (source: files/_includes/site-footer.html,
files/_pages/contact.md); the structured data keeps areaServed Europe and
Remote. The green dot stays, as an open door. On-site work is only in and
around Vienna (was the DACH region), on the Contact page and the services
page (source: files/_data/services.yml). On a second look the owner dropped
the company's name and "teams" from the line: it now reads "Open to B2B
contracts. Based in Vienna, working remotely in Europe and beyond.", since
B2B says how clients hire him and the name is on Contact, the CV and the
imprint; the footer drops "with teams", and the services page says what Contact
says. On a third look the owner dropped "Open to B2B contracts." too: the line
is "Based in Vienna, working remotely in Europe and beyond."

**2026-10-29, twenty-sixth change: About, people first.** The About page is
rewritten for people, not buyers; Services, Work and the CV do the selling. It
is built around what he cares about, with Bosnia as the thread: a short Work
section with no employers named (they stay on Work and the CV), Community in
his own words (why he organises conferences, EuRuKo 2024 pitched for Tuzla and
moved to Sarajevo out of inexperience, RubyConf Austria built around Vienna's
music, GoatConf in Tuzla, run like open source, the goat that feeds the
community), Open source (the same instinct as the conferences: the
treasure hunt app, GoatConf's public repository, enola and its four gems,
tended; pi-brain left out), and Outside work (family, ćejf, the video store, football
and swimming, travel) (source: files/_pages/about.md; facts from
files/_data/cv.json, files/_stream/goatconf-2027-tuzla.md,
files/_posts/2025-03-12-from-zero-to-one.md). The heading is "Hi, I’m
Muhamed" while the nav and tab keep "About" (source: files/_layouts/about.html).
The meta description and the llms.txt line for About follow (source:
files/llms.txt). The detailed open-source list and "Things I love" are gone.

**2026-11-21, twenty-seventh change: the Symphony work, and data skills.**
After a few weeks at Symphony the owner adds what he works with there,
described by technology and role only: no client, no industry, no numbers.
On the CV, "Staff Engineer · Symphony" gains four bullets: a proof of concept
taken over with his team and brought to a stable production environment, with
observability for the pipelines and the agents, working inside the client's
team and helping set the technical direction; data pipelines on Azure and
Microsoft Fabric in a medallion architecture, integrating multiple sources
with PySpark notebooks, with knowledge graphs in FalkorDB on top; agents that
enrich and classify the data, on OpenAI models in Microsoft Foundry, with
OpenAI's Decisions API for fast, typed decisions, and MCP servers that give
agents the graph and the data as tools; and AI-native delivery in his team,
with the client's engineers helped to bring AI into their own development
lifecycle (source: files/_cv/cv.html). Skills gain a seventh group, Data
(Data engineering, Knowledge graphs, Data integration, Medallion architecture,
Microsoft Fabric, PySpark, Notebooks, FalkorDB), and Decision models and
Microsoft Foundry under Product and AI, Azure and Observability under
Infrastructure and DevEx, AI-native delivery and AI SDLC transformation under
Ways of working. The PDF stays at three pages (owner's choice): the "Founder
and organiser" entry is the one entry allowed to run over a page end
(`.role.splits`), from page 1 to page 2. Both CV data files are re-rendered
(source: files/_data/cv.json, files/cv.json). The homepage's "What I work
with" gains the pills Knowledge graphs, Data pipelines, Microsoft Foundry and
FalkorDB, its intro names data pipelines and knowledge graphs, and its last
line Python and Azure; the Work page gains three proof points, one each under
AI features, coding agents and systems, naming no employer or client (source:
files/_data/home.yml). llms.txt says what the Symphony engagement covers and
gains a line on when to recommend him, and the JSON-LD knows about knowledge
graphs, data engineering, Microsoft Azure and Microsoft Fabric (source:
files/llms.txt, files/_includes/person-jsonld.html). Every new claim is on the
owner's word, not yet in the evidence store. About, Services and the brand
kit's bios are unchanged.

**2026-11-21, twenty-eighth change: a greeting.** The hero headline becomes
"Hi, I’m Muhamed." (was "Ten years of taking software from idea to
production."), with "Muhamed" on the highlighter, and the lead says who he is
and how he helps, spoken to the visitor: "I’m a Staff Engineer in Vienna. If
your team needs someone to build a product, lead its engineering, or get
started with AI agents, I can help." (source: files/_data/home.yml). The
three kinds of help follow the services below it: Build, Lead and AI-native.
This reverses one point of the twenty-fourth change, where a lead spoken to
the visitor read as a pitch and was cut; the owner chose it this time over
three drafts that spoke about him. The greeting was the About page's heading
since the twenty-sixth change, so About's heading becomes "About me"; its
text is unchanged (source: files/_pages/about.md). The share card and the
LinkedIn and X headers carry the greeting over one sentence, "I help teams
build products, lead engineering, and get started with AI agents.", with its
line breaks set by hand (source: .github/scripts/render-social-images.js);
the three images are re-rendered, and the share image's alt text and the
banners' alt text on `/brand/` say the same (source:
files/_includes/meta.html, files/brand.html). "Ten years" leaves the first
screen; it stays in About's Work section, the Work page's intro and the
stack's intro. The caption under the portrait, the buttons and the line under
them are unchanged. On a second look the same day the owner found the result
"a step in the right direction" but missed the earlier lead, so the lead is
his own paragraph again, with a subject now that it follows a greeting and
not the ten-years headline: "I work on software from deciding what to build
to running it in production, anywhere in the stack. Lately I also work one
layer up, with agents writing the code, and build open-source tools that keep
that reliable." (was "From deciding what to build ..."). The lead no longer
names the role, the city or the three kinds of help: the caption says Staff
Engineer, the line under the buttons says Vienna, and how he helps is the
"See how I can help" link and the services section. So the twenty-fourth
change's point stands again: no lead spoken to the visitor. The share card
and the headers carry the greeting over the lead's first sentence, and the
alt texts follow. On a third look, still the same day, the owner asked for
the greeting and the paragraph to be warmer, more welcoming and "less AI
generic". The greeting stays "Hi, I’m Muhamed." with no second line. The
lead is now made of things only he can say, with his "from deciding what to
build ..." in the middle: "I grew up in Tuzla, I live in Vienna, and I write
software for a living. For ten years that has meant everything from deciding
what to build to running it in production, anywhere in the stack. Lately I
also work one layer up, with agents writing the code, and build open-source
tools that keep that reliable. And I organise conferences, to get people who
build software into one room." (source: files/_data/home.yml). Its last
sentence first ended "mostly to spend a few days with people I can learn
from", which said little about the conferences; the owner chose this one,
close to what the About page says of GoatConf. Its
third sentence is his own, from the ten-years hero: the draft's "Lately it
also means AI features, and open-source tools that keep coding agents in
line." seemed too shallow to him. Tuzla, Vienna and why he
organises conferences are the About page's (source: files/_pages/about.md).
It names no stack: a draft that said "For ten years that meant products in
Rails" left out his other work. The share card and the headers carry "I grew
up in Tuzla, I live in Vienna, and I write software for a living." under the
greeting. The order of the homepage's sections is unchanged: quotes, then
services. On a fourth look the hero was reviewed from four perspectives, an
engineering leader buying help, a hiring manager, a copy editor and a
designer, each reading it fresh. All four found the content and its order
right. The owner took every wording fix and one layout change. The text now
reads: "I grew up in Tuzla, I live in Vienna, and I write software for a
living." and, under it, "For ten years that has meant everything from
deciding what to build to running it in production, anywhere in the stack,
and leading teams along the way. These days I also work one layer up, with
agents writing the code, and build open-source tools that keep it reliable.
And I organise conferences to get people who build software into one room."
(source: files/_data/home.yml). "and leading teams along the way" is new,
in the About page's words (source: files/_pages/about.md): to the buyer and
the hiring manager the paragraph read as a strong developer working alone,
not a Staff Engineer. "These days" replaces "Lately", which with "I also
work" read as a slip; "keep it reliable" replaces "keep that reliable", two
"that" three words apart; and the last sentence loses its comma. The first
sentence is the lead, in ink at the lead's size, and the rest is a second
paragraph, smaller and grey (`hero.lead` and `hero.more`; `.hero-lead` and
`.hero-more`), since one even grey block of eight lines was being skipped
between the headline and the button (source: files/_includes/home-page.html,
files/assets/site.css). The images are unchanged: they carry the first
sentence. Found by the designer and not taken up: a small round photo above
the headline on phones, the two text links kept together on tablets, the
columns aligned at the top on tablets, and the name dropped from the
portrait's caption. Last, on the owner's word, the first sentence says
"make": "I grew up in Tuzla, I live in Vienna, and I make software for a
living." (was "write software"), on the page, the share card and the
headers. "Make" covers deciding what to build, leading and directing agents,
where "write" named only the typing, which the next lines say agents now do.
After the review of the whole branch the owner shortened that sentence to
"I make software for a living.": Tuzla and Vienna leave the hero, since the
About page opens with them and the line under the buttons says Vienna.

**2026-11-21, the hero as it stands after the twenty-eighth change.** The
paragraph above keeps every step in the order it happened; where it and this
one differ, this one holds. The headline is "Hi, I’m Muhamed.", with
"Muhamed" on the highlighter. The lead, in ink, is "I make software for a
living." Under it, smaller and grey: "For ten years that has meant everything from deciding what to build
to running it in production, anywhere in the stack, and leading teams along
the way. These days I also work one layer up, with agents writing the code,
and build open-source tools that keep it reliable. And I organise
conferences to get people who build software into one room." (source:
files/_data/home.yml, files/_includes/home-page.html, files/assets/site.css).
One statement above no longer holds: "ten years" is on the first screen
again. Where the owner is from and where he lives are not in the hero: the
line under the buttons says Vienna, and the About page says both. The
share card and the LinkedIn and X headers show the greeting over the lead,
re-rendered with "make" (source: .github/scripts/render-social-images.js);
the line "I help teams build products ..." they first carried was the
agent's draft, not a sentence of the lead. The share image's alt text and
the banners' alt texts on `/brand/` are the greeting and the lead (source:
files/_includes/meta.html, files/brand.html). The About page's heading is
"About me" and its text is unchanged, so it still says "I write software"
(source: files/_pages/about.md). Unchanged: the caption under the portrait,
the three buttons, the line under them and the order of the sections. Left
to the owner: uploading the new headers to LinkedIn and X.

**2026-11-21, twenty-ninth change: the rest of the site follows the first
screen.** A review of the whole site against the new hero found places that
disagreed with it, and the owner asked for all of them to be fixed. About
says "I make software" (was "write"), as the hero does, and its Work section
opens "I have spent ten years making software" (was "taking software from
idea to production", the retired headline) (source: files/_pages/about.md).
The description that search results and link previews show, the Person
JSON-LD's and the summary of llms.txt say what the hero says before they
name the tooling: "Staff Engineer, based in Vienna. I make software and lead
teams, build open-source tools for teams that write code with AI agents, and
work with teams through my own company." (source: files/_config.yml,
files/_includes/person-jsonld.html, files/llms.txt). This extends the
twenty-third change's wording; the brand kit's bios, which the owner chose
for organisers and press, are unchanged. The JSON-LD's occupations gain
Staff Engineer and lose "Fractional CTO", and llms.txt offers "a fractional
or interim technical lead" (was "technical lead or CTO"): no page a visitor
sees offers a CTO, and the Lead service is a technical lead. The services
page says "the tools I teach are ones I work on myself" (was "ones I
wrote"), since he is a core contributor to enola, not its author (source:
files/_data/services.yml, files/_data/home.yml). "organizer" and "organized"
become "organiser" and "organised" on the homepage, the CV and llms.txt; his
posts and notes keep his own spelling. The CV's lead says "ten years" (was
"10+ years"), "These days" (was "Lately") and "keep it reliable" (was "keep
that reliable"), as the hero does; the PDF is re-rendered with the same
Chromium and stays at three pages with the same page breaks, and both CV
data files are regenerated (source: files/_cv/cv.html, files/_data/cv.json,
files/cv.json, files/cv/Muhamed_Isabegovic_CV.pdf). In the hero the two text
links are kept together, so "View my CV" no longer wraps alone; the portrait
starts level with the headline between 701 and 960 px, where the text column
is much taller than the photo; and the greeting stays on one line down to
320 px (source: files/_includes/home-page.html, files/assets/site.css).
Still open from the review: the homepage shows no proof of "leading teams"
beyond the Lead card (the numbers are on Work and the CV), and it mentions
the conferences four times.

**2026-11-21, thirtieth change: a dark scheme.** The site had one
appearance, light, whatever the visitor's system was set to. It now follows
the system setting (`prefers-color-scheme`), with no switch in the header:
the owner chose that over a toggle, which would add a control and a script
to every page. Nearly all of it is the colour tokens redefined in one block
at the end of the stylesheet: the page is #141414 (the brand's ink), panels
#1e1e1c, text #f2f2f0 with #c6c6c1 and #a3a39e for secondary text, hairlines
#32322f, and the dark band and the footer a step darker at #0b0b0b. The
yellow is unchanged (source: files/assets/site.css). Three tokens are new
in both schemes, so that no rule assumes ink is dark: `--on-yellow` for text
on yellow, `--accent-on-ink` for the accent on an ink surface (a pressed
tag, a hovered button), and `--line-soft` for hairlines on tinted panels;
their light values are what was written there before. The highlighter is the
one design decision: light letters cannot sit on yellow, so in the dark
scheme the same hand-drawn stroke is drawn under the word. It was the
owner's pick from three mockups (a yellow block with dark letters; the
stroke underneath; yellow letters and no stroke). The yellow closing band
and the minesweeper's bar and board keep their light colours, and the
stack's brand icons, black on transparent, are inverted. Shadows do not show
on a dark page, so the portrait's caption, the dark band and the footer get
a hairline edge; screenshots, thumbnails and the white banners, which are
mostly white, are toned down to 88 percent brightness, and photographs are
left alone. In Windows contrast themes the highlighted word takes the
system's highlight colours, since the drawn stroke is removed there. The
head declares
`color-scheme: light dark` and a theme colour for each scheme (source:
files/_includes/site-head.html). Not dark, by their nature: the CV's PDF,
the share card and the profile headers, and the voter guide and the card
game, which are separate apps with their own styles. Checked in Chromium:
in light mode 19 page types at 1440 and 390 px are pixel for pixel what
they were, one video frame aside; in dark mode no text on 20 page types
falls below WCAG AA contrast, measured in the browser at both widths with
the phone menu open.

**2026-11-22, thirty-first change: the defects a site-wide review found.**
Four independent reviews of the whole site (the pages that sell, the pages
that are read, the project pages, and accessibility) were listed for the
owner as ten items; he asked for all of them, and chose three where the
answer was his to give. What changed:

- *The taha card.* Its thumbnail had been a screenshot of the site's 404
  page since the third amendment of the project profiles decision; it is a
  poster again, in the style of tabula's, with taha's current line (source:
  files/images/projects/taha/thumb-1600.webp, files/_projects/taha.md). Its
  share card is re-rendered from it (source:
  files/images/social/project-taha.png).
- *Code in notes.* A fenced block lost its padding and inline code its tint,
  because two rules meant for the highlighter's wrappers also matched the
  `pre` and the inline `code`; they now name the wrappers. Numbered lists no
  longer show a gap before the full stop (source: files/assets/site.css).
- *Alignment.* The footer's first block sits at the top of its column, the
  three recommendations end on one line, the steps on the services page
  start level, and the sticky side headings and the About card stop below
  the header (source: files/assets/site.css).
- *Keyboard and touch.* The skip link shows above the header; anchors and
  focused elements stop below it; tabbing out of the open phone menu closes
  it; and on touch screens every link on the Tags page is at least 44 px
  tall (source: files/assets/site.css, files/assets/site.js).
- *Reading.* On a wide screen a post or a note is one centred column of
  44rem with text at 20 px (owner's pick over the column on the left), and
  it ends with the newer and the older piece (source:
  files/_layouts/post.html, files/_layouts/stream-entry.html).
- *The menu.* Work is marked on the project pages and Writing on a post
  (owner's pick over a sixth menu item, Projects); the exact page carries
  `aria-current="page"`, a page under it `aria-current="true"` (source:
  files/_includes/site-header.html).
- *Project pages on a phone.* The product comes before the facts table, and
  terminal output wraps (source: files/assets/site.css).
- *Print.* A print stylesheet leaves out the header, the footer, the closing
  band and the controls; the CV page prints on 7 pages (it was 10), and the
  PDF stays the CV to send (source: files/assets/site.css).
- *Links in running text.* The yellow underline alone is 1.45:1 on white.
  In the light scheme a link in running text now has a thin grey line on a
  short yellow stroke, like the one under the name (owner's pick from four
  mockups, over a darker amber and over semibold link text); in the dark
  scheme, where yellow is plain to see, the line itself is yellow. Buttons,
  cards, the menu and the standalone text links keep their yellow (source:
  files/assets/site.css).

The dark scheme is now `screen` only, so a page printed from a dark system
prints light. Checked in Chromium: no text below WCAG AA contrast in either
scheme on 20 page types at 1440 and 390 px; no sideways scroll on 20 page
types at five widths from 320 to 1440 px; the phone menu and the skip link
by keyboard. Found by the reviews and not done here: the homepage's tools
section is long on a phone; the contact page shows the address and its copy
button twice; the services page's first screen shows only the first offer;
the CV page's dates are hard to scan; a few images have no width and height;
and tags sit above a post's first sentence.

**2026-11-22, thirty-second change: the items left over.** The owner asked
for the rest of that list. On a phone a tool on the homepage is its name,
its role and its one line, with the longer text left to its page; the
section is 1,739 px tall at 390 px, from about 2,700 (source:
files/assets/site.css). The contact page shows the address and its copy
button once (the Email row of the facts is gone), and its longest button
stays on one line on a phone (source: files/_pages/contact.md). The services
page names its five offers under the intro, as links to each, so all five
are on the first screen, and an offer's name is no larger than the page's
title (source: files/services.html). On a wide screen the CV page puts each
role's dates and place in their own column (source: files/cv/index.html). A
post's tags move from under its title to its end, as on a note (source:
files/_layouts/post.html). Posts and notes also get their own link preview
cards; that is the brand decision's
[sixth change](amber-portrait-and-brand-kit.md). Still open: a few images
without width and height.

**2026-11-22, thirty-third change: a second round of review.** Three fresh
independent reviews (the pages that sell; the pages that are read and the
project pages; consistency across the site, by measurement) were grouped for
the owner, who took all four groups and two of three calls of taste. All in
the stylesheet unless a file is named (source: files/assets/site.css).

- *Tablets and small laptops.* Project cards sit two to a row from 641 to
  960 px (the fluid grid gave one 706 px card per row, and a page 14,000 px
  tall at 768). Recommendations stack below 1100 px instead of three columns
  of 21 characters; the Rails page's cards and facts keep two columns up to
  about 1100 px; the three conference logos stay on one line. A project
  page's copy starts at the top beside its facts. Terminal output wraps up
  to 960 px and shows a soft edge when there is more to scroll to. Long
  lines in the one-column layouts are capped.
- *Alignment and rhythm.* The two paths of the yellow closing band share
  their rows, so their buttons line up at every width. A card's "Read more"
  sits at its foot. The Rails page no longer has a double gap above its dark
  band; a step list sits the same distance under its title on both pages
  that have one; the homepage's services section starts with a rule, like
  its neighbours (source: files/_includes/home-page.html). Paragraphs and
  list items avoid a stranded last word where the browser supports it. An
  opened recommendation no longer stretches its neighbours. On the dark band
  and the footer a hovered link or button turns light, where it used to turn
  the band's own colour and vanish. An anchor lands at one offset.
- *Reading and indexes.* A Brain card shows its date first, as a Writing
  card does (source: files/brain.html); a card shows four tags, and one being
  filtered on always shows; four posts sit two by two; the count of results
  comes before the tip (source: files/writing.md). A post's section headings
  are a clear step above its text (32 and 25 px over 20). Titles are set
  with typographic apostrophes (source: files/_layouts/post.html,
  files/_layouts/stream-entry.html, files/_layouts/project.html,
  files/_includes/project-cards.html). The CV page's section rule is above
  its heading, as everywhere else, and its recommendations use typographic
  quotation marks (source: files/cv/index.html). Links in running text have
  one look: the About card's links, the CV's contact line, the project pages,
  the contact page and the brand kit's facts now match posts.
- *Dark scheme.* Code panels and dark thumbnails get an edge; the brand
  kit's size note reads on a hovered pill; its banner previews are no longer
  dimmed, since they are the files on offer.
- *Page titles.* A page's title is a step above its section titles (56 px on
  a wide screen, 34 on a phone, the size posts already used); it used to
  equal them. The Rails page's title, a sentence, keeps the section size.
- *Coming-soon project pages* no longer show their poster under the heading
  it repeats; that is the project profiles decision's
  [seventh amendment](project-profile-pages.md).

X joins LinkedIn and GitHub in the contact page's Elsewhere row and in
llms.txt (owner, with a screenshot; source: files/_pages/contact.md,
files/llms.txt). Not taken: a "Show less" label on an opened recommendation.
Found and left: Writing and Brain end without the closing band; about 38
unused rules in the stylesheet; small differences between card types
(padding under the rule, title sizes and weights); outlined buttons with two
border widths. Checked in Chromium after the changes: the closing band's
buttons 0 px apart on five pages at three widths; no text below WCAG AA
contrast in either scheme; no sideways scroll from 320 to 1440 px.

Afterwards, two things with nothing to see. The three conference logos and
the two banner previews carry their width and height, so the page keeps its
place while they load; every image on the 21 page types checked now does
(source: files/_data/home.yml, files/_data/brand.yml, files/brand.html).
And the stylesheet lost 45 rules and selectors for classes that no page,
template or script uses (the old tools, cases, talks and side-project lists
among them): 80 full-page captures, light and dark, at 1440 and 390 px, are
pixel for pixel the same before and after, one frame of the Usput video
aside (source: files/assets/site.css).

**2026-11-22, thirty-fourth change: loading, and one family of cards.** Two
of the four directions the owner picked for the next round; the other two
(the homepage's story, the first screen on a phone) wait on mockups.

*Loading.* Measured in Chromium on a throttled phone (1.6 Mbit/s, 150 ms,
4x slower CPU). Pages were already light, 170 to 360 KB with no layout
shift locally, but the live homepage scored a layout shift of 0.107 on a
phone: the menu's links showed under the name until site.js arrived and
folded them. A one-line script in the head now sets the `js` class before
the first paint; with site.js held back 1.5 s the shift is 0 (source:
files/_includes/site-head.html). On a phone the hero's portrait, which
sits below the first screen there, loads the 800 px file instead of the
1200 px one (source: files/_includes/home-page.html), and a project card's
thumbnail has a 320 px copy for the phone's small rows (source:
files/_includes/project-cards.html, files/images/projects/enola/thumb-320.webp).
The homepage went from 324 to 273 KB on a phone and the projects page from
359 to 256 KB.

*Cards.* Wherever a 3px rule sits above a name, the space under the rule is
1.5rem (it was 1.25, 1.5 or 1.75) and the name is one size, `--t-card`, on
the homepage's tools, the Work page's rows and every project card (the Work
page showed 33.6 px beside 31.5 px); index cards' titles are weight 800 like
the others (source: files/assets/site.css). Writing and Brain end with the
yellow closing band, as the other menu pages do (source: files/writing.md,
files/brain.html).

## Approval

The fifteenth change was chosen by the owner in session on 2026-10-21, one
decision at a time from the critique's findings: the Menu toggle and the
header that returns on scroll up, moving the recommendations up rather than
adding a numbers strip, the community after services, the AI groups only in
the stack, outcome lines first for the tools, keeping /work/ anonymous and the
CV undated; then "yes" to the summary. Dropping the highlights section came after ("I
don't think I should brag about that on my homepage", then "remove this from
the homepage completely as a section"), with Izbori kept everywhere else.

The sixteenth change was chosen by the owner in session on 2026-10-21 from the
re-run critique: keep all three recommendations on phones, replace Brain with
CV in the header, one date format, About as the story page, the two-path band
everywhere, "AI Engineer" kept visible and written one way, and post
descriptions in the homepage list. The services offer was left for a separate
rework ("we should probably completely rework that section").

The seventeenth change was shaped with the owner in session on 2026-10-21:
the problem is the presentation, not the offers; email stays the first step;
nothing about price; "home chooses, page explains"; a Review deliverable
outline; nothing that reads like an agency. The owner then asked for "Why me"
to be improved and chose "let others say it" while keeping Zlatko, and asked
for it to be delivered ("nice, lets deliver it to remote").

The eighteenth change was asked for by the owner in session on 2026-10-21:
optimise for contract work and consulting, not a full-time hire ("I want to
make it so folks want to reach out to collaborate with me, to help them with
something, provide a service etc."). The wording and the review as the second
path are the agent's drafts, for the owner to adjust.

The nineteenth change was asked for by the owner in session on 2026-10-22
("needs better ux, can't have games end on one click", then "Could also be
achieved with zoom out and more squares", which was measured).

The fourteenth change was asked for by the owner in session on 2026-09-29
("needs to have a play button on its homepage, so folks can actually play
it"), choosing the game repository over a site-only patch and the whole game
over the free part.

The thirteenth change was chosen by the owner in session on 2026-09-29
("B I guess", when offered keeping the rule, naming employers, or dropping the
section).

Approved by the owner in session on 2026-09-28 ("start building a new site"),
with the instruction not to push or deploy. Built on the local branch
`redesign-homepage`, taken from the published `origin/main`.

The twentieth change was chosen by the owner in session on 2026-10-23: "One
single-column PDF" over a second ATS copy, after comparing the current PDF
with a one-column prototype, and keeping the roles under the company undated.

The twenty-first change was shaped with the owner in session on 2026-10-26
from previews in the browser: "I also want to market myself as a Rubyist and
offer Ruby on Rails consultations", then "evaluate it from perspective of
someone who would consider hiring me", "The site should always invite folks to
reach out... I can also recommend someone if I am not available", upgrades and
performance confirmed as his work, "Keep the full old title", "idk if I want to
brag too much about teamtailor facts like the 8500 companies", and "keep it on
the CV, commit the rest". Then, on the page itself: "some of these sound too
specific... might weird them out", "shipping behind feature flags,
refactoring, rewrites, maintenance of old Ruby/Rails projects... managing the
entire lifecycle end to end... the things you mention dont sell that well",
"done before could also maybe even go", "introducing and optimizing
processes... improving CI/CD practices... continous delivery with trunk based
deployments", "Rails best practices", and "ok, sounds good" to the wider
headline and the shorter copy brought in line; later, of the lead's last line
("Bring me the part of your app that slows your team down."): "Sounds weird.
Remove?", so the lead ends on the experience; and, of the card "End to end": "also
sounds wrong without context", so that card is "New features, idea to production".
The formats and the wording are
the agent's drafts, for the owner to adjust.

The twenty-second change was asked for by the owner in session on
2026-10-29: "I've signed a contract with Symphony.is. the role will be Staff
Engineer", to list it as the latest engagement on the site and the CV and to
make "Staff Engineer" the title; then "remove Symphony from Worked with for
now", the CV line "With clients" from drafts taken from symphony.is, "for
startups and engineering companies", the images re-rendered, each previewed
in Chrome, and "ok, ship it".

The twenty-third change was chosen by the owner in session on 2026-10-29:
"Descriptions only", then "Bio plus one line", so the descriptions say he
can be hired through his company.

The twenty-sixth change was shaped with the owner in session on 2026-10-29,
one question at a time: "Community / people first", "What I care about", the
themes, and each paragraph redrafted until it sounded like him (Symphony,
Teamtailor, the company, Usput.ba and the EuRuKo 2023 gong story were cut on
his word); then "Ok" to the full draft.

The twenty-seventh change was asked for by the owner in session on
2026-11-21: "have been working with Symphony for a while now, a few weeks and
we can add more skills and some generic info not revealing client specific
info to enrich the site". He chose the CV skills list, bullets under the
Symphony role, and the homepage and Work page; "Technology and role only";
and one draft to review. He supplied the list of technologies and practices
and his role: a proof of concept inherited with his team and taken "to a
stable productionized environment", helping set technical direction,
"integrating within the client's team and shaping a way forward together",
hands-on building, and changing how his own team and the client's engineers
build. Decision models are, in his words, the "Decisions api through gpt luna
6", a system one model; he built MCP servers and used existing ones, with
observability of both agents and pipelines. On the full draft: "Assumptions
are correct, keep three pages."

The twenty-eighth change was asked for by the owner in session on
2026-11-21: "The title 'Ten years of taking software from idea to
production.' Is nice... But I have a feeling so many people use it since AI
suggests it... Let's keep it simple and personal, who I am and how I could
help". From options he chose "Just a greeting" for the headline, with no
preference on which help to lead with, and "Everything" for how far the line
travels (hero, share card and both headers). From previews of the built page
and the three images he chose the lead "Spoken to the visitor" and "About me"
for the About page's heading. The wording of the lead and of the images' one
line is the agent's draft, for the owner to adjust. Later in the same
session: "this was just a step in the right direction, I still thing we need
to improve", and of the earlier lead, "I liked this also... review and find
ways to improve". The agent's review: the new lead listed three services any
consultant could list and had lost what was specific in his paragraph. From
three mockups of the built hero (his paragraph alone; with one sentence of
help, "If that’s what your team needs, I can help."; with a row of links to
the four services) he chose "A: paragraph only", and for its opening
"Without the ten years" over "For ten years I’ve worked on software ..." and
"I’m a Staff Engineer. I work on software ...". Then: "mock up services
above the quotes... Also, maybe rewrite the paragraph and the greeting ? To
be more warm and welcoming and less AI generic". From mockups of two orders
with services above the quotes he chose "Keep the current order". Of three
warmer drafts with a second line in the headline ("Welcome.", "Nice to meet
you.", "Glad you’re here.") he chose none, then "No second line" and, for
what was off, "Still sounds generic". Of three paragraphs built from facts
about him (his path from C++ trading systems; from Tuzla; what he does these
days) he said: "B version is closest, I don't like Rails mention excluding
other stuff". The sentence that replaced the Rails one is the agent's
draft, for the owner to adjust. Of the result: "Sounds better. Lately it
means also AI features seens too shallow", and from options "Tuzla, with a
deeper AI line", which is his own "one layer up" sentence. (A message of
his about earlier mockups, "Horrible. Why are you extending the title?",
arrived late and was first read as about this paragraph; it was reverted and
restored within the session.) Then "Better, can we improve the last
line?", and from four options (back home in Bosnia; the three conferences
by name; bringing people together; "the least qualified person in the room")
he chose "Bring people together". Then: "I have a hunch we can still
improve it. The right stuff is there... Review from different perspectives".
Of the four wording fixes the reviews proposed he took all four, and for the
layout "2: first sentence set apart", over the same with a small photo first
on phones and over keeping the layout. Then: "Instead of write software,
maybe say make software?" Then "Ok, review it all deeply", and after the
findings: "maybe remove Tuzla and Vienna from the first sentence and just
say 'I make software for a living' ?"

The twenty-ninth change was asked for by the owner in session on
2026-11-21: after the review's findings were listed, "Ok, improve all".
Removing "Fractional CTO", the wording of the description and "ones I work
on myself" are the agent's calls, for the owner to adjust.

The thirtieth change was asked for by the owner in session on 2026-11-21:
"How does it render in light vs dark mode?", and, after a prototype, "Ok,
build dark mode support", then "B: stroke underneath" for the highlighter
and "Follow the system only". The palette is the agent's draft, for the
owner to adjust.

The thirty-first change was asked for by the owner in session on
2026-11-22: after the ten findings were listed, "Ok, fix and ship", then
three picks from mockups: "D: grey line on yellow stroke", "B: centred,
larger text" and 'Mark "Work"'. The taha poster's last line ("pi + Pi
Durable · a mandate per run · tabula as the judge") is the agent's draft
from the page's own facts, for the owner to adjust.

The thirty-second change was asked for by the owner in session on
2026-11-22: "let's continue iterating and finding ways to improve the
overall design", then all four of the offered next steps: a fresh review,
"Homepage on a phone", "Contact and Services" and "CV page and posts".

The thirty-third change was chosen by the owner in session on 2026-11-22
from the reviews' findings: "Tablets and small laptops", "Alignment and
rhythm", "Reading and indexes" and "Dark mode polish", and of the calls of
taste "Bigger page titles" and "Drop the repeated poster". X on the contact
page is on his word: "When we list social media platforms, we don't mention
X". The owner also asked whether the light scheme should use the portrait on
the dark backdrop; mockups of both photos in both schemes were shown with a
recommendation to keep the amber one everywhere, and no change was asked for.

The thirty-fourth change was chosen by the owner in session on 2026-11-22
from four offered directions, all of which he took: "Homepage story",
"First screen on a phone", "One card style" and "Speed and loading".

## Related

- [ADR: Make the brain-card stream the home page](make-brain-cards-the-home-page.md) (superseded)
- [Constraint: ADR before structural changes](../constraints/adr-before-structural-changes.md)
