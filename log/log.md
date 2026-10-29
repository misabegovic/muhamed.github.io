# Log

- 2026-07-22T12:41:01.672Z — converted repo into pi-brain clone; project code moved to `files/`
- 2026-07-22T12:41:25.000Z — enabled auto_connect in brain.config.yml and turned autonomy ON
- 2026-07-22T12:44:00.000Z — added GitHub Actions workflow to deploy Jekyll site from files/; created root README.md explaining layout
- 2026-07-22T13:06:36Z — workflow failed: nokogiri 1.15.5 binary incompatible with Ruby 3.3; pinned workflow to Ruby 3.2
- 2026-07-22T13:19:51Z — resolved muhamed.at outage: configured custom domain muhamed.at in GitHub Pages settings, excluded vendor/ in files/_config.yml, aligned url/enforce_ssl to https://muhamed.at; site returns HTTP 200
- 2026-07-23T09:56:00Z — synced latest upstream pi-brain updates into AGENTS.md: added autonomy-mode section, expanded PR conventions, added repo conversion to structural-change examples; snapshotted upstream sources in sources/upstream/
- 2026-07-23T10:00:00Z — backfilled missing upstream pi-brain files: added tools/, skills/, personas/, prompts/, themes/, extensions/, tests/, package.json, .env.example, GETTING_STARTED.md, .github/pull_request_template.md, .github/workflows/validate.yml, sources/brain/, sources/repos/, wiki/brain/; snapshotted upstream brain.config.yml, .gitignore, README.md, and sources/README.md
- 2026-07-23T11:23:00Z — implemented production brain-card home page: replaced / with card stream, created /writing/ for posts, added /brain.xml feed, removed all prototype routes
- 2026-07-23T11:35:00Z — added Load more pagination to home page, tags on existing posts, updated About page
- 2026-07-23T11:47:00Z — fixed /brain-cards/ back link to /, removed sample stream entries, added empty-state message
- 2026-07-23T11:50:00Z — added AI-assisted disclaimer to home page and human-written note to /writing/
- 2026-07-23T11:55:00Z — updated site description and career timeline: Teamtailor since April 2025, Carv ended April 2025, self-employed since 2024
- 2026-07-23T12:05:00Z — deployed brain-card home page to muhamed.at via GitHub Actions run 29998234763; live site verified
- 2026-07-23T12:20:00Z — added brain.xml feed link to footer; deployed via GitHub Actions run 29998410600
- 2026-07-23T12:20:00Z — implemented unified tag filtering and search; removed /search/ page
- 2026-07-23T12:25:00Z — deployed unified tag filtering and search via GitHub Actions run 29998923568
- 2026-07-23T12:33:00Z — implemented multi-tag filtering and /tags/ explorer page
- 2026-07-23T12:40:00Z — deployed multi-tag filtering and tag explorer via GitHub Actions run 29999781279
- 2026-07-23T13:23:00Z — refined tag filtering to single search input with #tag tokens
- 2026-07-23T13:30:00Z — deployed #tag search refinement via GitHub Actions run 30002976732
- 2026-07-23T13:35:00Z — synced clone with upstream pi-brain v0.2.0
- 2026-07-23T13:40:00Z — pushed upstream sync; site deployment verified via run 30003733014
- 2026-07-25T21:40:00Z — ingested recruitment-agents idea (agent-to-agent hiring, candidate-facing MCP) into sources/conversation/; published stream card recruitment-agents-talk-it-out-first; queued synthesis in inbox
- 2026-07-25T22:00:00Z — ingested Ruby-vs-Go thoughts (is Ruby dead, cathedrals in Go, Rails-to-Go rebuild experiment for chat infrastructure) into sources/conversation/; published stream card is-ruby-dead-cathedrals-in-go; queued synthesis in inbox
- 2026-07-25T22:05:00Z — ingested @dodoreach's Pi web UI one-shot prompt (shape-your-own-tools philosophy, codex-style Pi dashboard over Tailscale Serve; note to self to build one) into sources/conversation/; published stream card shape-your-own-tools-pi-web-ui-prompt; queued synthesis in inbox
- 2026-07-25T22:15:00Z — ingested monotykamary.com article "I gave Pi one tool" (pi-fabric: single fabric_exec code-mode tool for Pi, QuickJS sandbox, self-built runtime) into sources/web/ as reading-queue item; published stream card i-gave-pi-one-tool; queued synthesis in inbox
- 2026-07-25T22:30:00Z — folded 'learn how Pi is built to evolve pi-brain and validate the idea' note-to-self into stream card i-gave-pi-one-tool; queued research task in inbox with pi.dev docs starting points
- 2026-07-27: Migrated clone to package-resolved resources.
- 2026-07-27T16:30:00Z — ingested pi.dev package gallery page for @misabegovic/pi-brain (v0.3.2, 257 downloads/month) into sources/web/; published stream card pi-brain-in-the-pi-package-gallery; queued synthesis in inbox
- 2026-07-27T18:20:00Z — fixed validate workflow broken by v0.3.0 migration: run brain-sync from @misabegovic/pi-brain@0.3.2 npm package instead of deleted tools/; ADR fix-validate-workflow-package-resolved-brain-sync accepted
- 2026-07-27T18:55:00Z — tempered pi-brain gallery stream card: 257 downloads in four days is registry mirrors/scanners, not adoption; updated inbox item to gate synthesis on a real adoption signal
- 2026-07-28T12:00:00Z — ingested Anthropic's open-weights position piece (2026-07-27) and the Nvidia-hosted "Open Weights and American AI Leadership" letter (2026-07-24, full PDF text) into sources/web/; captured the two-part close reading (control-spectrum lens) into sources/conversation/; published stream card who-holds-the-gate-anthropic-vs-the-open-weights-letter; queued synthesis in inbox
- 2026-07-29T10:00:00Z — ingested Paul Battley's po-ru.com piece "It doesn't matter whether Matz is nice" (MINASWAN as projection; DHH's far-right turn; Shopify/Lütke control over Ruby Central and RubyGems) into sources/web/; published stream card it-doesnt-matter-whether-matz-is-nice; queued synthesis in inbox
- 2026-07-29T20:00:00Z — ingested "Pacing the Frontier" statement (1,268 frontier-lab employees asking for deliberate pacing of automated AI R&D) and Codeberg's "Protecting our FLOSS commons from LLMs" (no LLM training on hosted data; ToU change discouraging vibe-coded projects) into sources/web/; published stream card claude-as-contributor-what-are-we-doing tracking the Claude-as-Ruby-contributor thread; queued synthesis in inbox
- 2026-07-29T22:30:00Z — merged the two 2026-07-29 stream cards (it-doesnt-matter-whether-matz-is-nice + claude-as-contributor-what-are-we-doing) into a single card; removed the identifying reference to the friend building cathedrals in Go
- 2026-07-28T10:00:00Z — ingested jackandjill.ai as a recruitment-agent reference; published stream card comparing its closed agent pair to the open MCP/agent-to-agent vision
- 2026-07-28T10:30:00Z — ingested Stapply Data and kalil0321/ats-scrapers as recruitment-agent data references; published stream card on open ATS-agnostic job datasets
- 2026-07-29T10:00:00Z — ingested Camel AI Durable Objects agent post; published stream card on hosting small specialized agents in Cloudflare Durable Objects
- 2026-07-28T11:49:00Z — updated Jekyll dependencies (github-pages 228 → 232) to resolve 35 dependabot alerts; bumped Pages workflow to Ruby 3.3
- 2026-08-03T10:00:00Z — drafted and accepted ADR update-pi-brain-v0-4-0-hybrid-clone; migrated clone to @misabegovic/pi-brain@0.4.0 with hybrid-site carve-out; created delivery record
- 2026-08-03T10:30:00Z — enabled Enola architecture tracking, pinned baseline; no regressions detected
- 2026-08-03T11:00:00Z — ran autonomous refinement passes: rewrote package-resolved dead links (90 → 0), archived resolved ai-suggestions, generated and customized muhamed.github.io/{state,roadmap,options}.md
- 2026-08-30T13:30:00Z - site maintenance on human request: fixed tag-selection and metadata bugs (tags page now links both sections, meta.html elsif/author fixes, single canonical), removed all em dashes from site text, added llms.txt + robots.txt + seo social config for AI-friendliness, added /services/ page and expanded About with enola contributions and the four maintained gems
- 2026-09-16T12:00:00Z — hosted the Izbori 2026 voter guide at muhamed.at/politika/analiza-izbora: Pages workflow now checks out misabegovic/izbori2026, renders it with render.py, and mounts the ~1,400 pages into files/_site via .github/scripts/build-analiza-izbora.sh; added a /politika/ landing page, a section sitemap in robots.txt, an llms.txt entry, a daily rebuild schedule, and an izbori-update repository_dispatch trigger sent from izbori2026; ADR host-izbori2026-under-politika accepted, record created
- 2026-09-16T15:30:00Z — izbori2026 guide expanded upstream from winners-only profiles to a page for every one of the 7028 candidates, with personal-vote history, a two-input seat-chance model calibrated on 2022, and a second "is my vote wasted" metric; site side unchanged except page counts, since the Pages workflow renders the guide from its own main branch on every build
- 2026-09-28T10:45:00Z - on human request, built a professional homepage on the local branch redesign-homepage (not pushed, not deployed): ADR professional-homepage-with-brain-and-writing accepted and supersedes make-brain-cards-the-home-page; homepage copy lives in files/_data/home.yml with every claim traced to the owner's evidence store; the brain stream moved to /brain/ unchanged; navigation is Services, Writing, Brain, Tags, About; the header tagline states the work; About and Services no longer present the ended Teamtailor contract as current; built with Jekyll in ruby:3.3 and checked at 1280px and at a true 390px width
- 2026-09-28T14:30:00Z - on human request, redesigned muhamed.at and published it: one design system across every page (Schibsted Grotesk self-hosted, near-black ink, one signal yellow) with shared header and footer; homepage rebuilt around real proof (portrait, company logos, two attributed recommendations, services, stack, guardrails, community, own-project highlights); new /work/ page organised by capability with no employer or date attached to any proof point; services page rebuilt; /contact/ page with prepared emails for roles, teams and speaking; the card game served at /igre/dejtonska-igra/ and a static port of the Usput.ba minesweeper at /igre/minolovac/ with its safety rules carried; a downloadable one-page CV without the phone number; ADR professional-homepage-with-brain-and-writing amended eleven times to record each change
- 2026-09-29T10:00:00Z - on human request, reworked the CV against a Staff role rejection and published it: the one-page CV is rebuilt from a new source at files/_cv/cv.html (unpublished) and groups 2024 to now under one founder entry for the owner's company, with no dates on individual engagements; Meisterlabs moves out of "earlier experience" with specific bullets; Recrubo is named with its acquisition by Carv; claims the owner corrected are narrowed (event system co-built, prescreening architecture designed, triggers shipped); About's career overview drops per-engagement dates; three work-page proofs are made specific. Facts captured in klosaer/hireable sources/conversations/2026-09-29--org--*.md
- 2026-09-29T10:30:00Z - on human request, restyled the CV to the site's design system as recorded in .impeccable (site.css tokens, 3px ink rules, hairline dividers, outlined pills with the first group in yellow tint, yellow kept to the title underline) and removed the side-stripe accent impeccable names as a tell; Izbori stays off the CV; still one page
- 2026-09-29T12:00:00Z - on human request, extended the CV to two pages: headline Product Engineer and Tech Lead, AI; four shipped Teamtailor features named; the Recrubo event system described as the integration layer; Usput.ba framed as the owner's own live product rather than a startup; Experfy retitled Lead Software Engineer (no formal title was held) on the CV and About; open-source lines rewritten in plain words; test counts, trivia and mentoring removed; Master's marked part-time
- 2026-09-29T11:00:00Z - on human request, the work page may name employers (ADR amendment thirteen); Leading teams names Recrubo/Carv and Experfy and matches the CV; the CV rework is recorded as amendment twelve; two work-page proofs that YAML read as hashes were quoted (#23)
- 2026-09-29T11:30:00Z - on human request, Usput.ba is described as a side project where the owner experiments on the homepage highlight, the work page and About, matching the CV; About's structured data no longer names Usput.ba as an employer
- 2026-09-29T13:00:00Z - on human request, the card game at /igre/dejtonska-igra/ has a Play button on its landing and the web edition is the whole game for free; rebuilt from klosaer/card-game 7e17954 with .github/scripts/build-dejtonska-igra.sh; ADR professional-homepage-with-brain-and-writing amended (fourteenth change)
- 2026-09-29T14:00:00Z - on human request, the CV carries both recommendations in full (Zlatko Alomerovic and Hassan Akbar, verbatim from files/_data/home.yml) instead of excerpts, in one Recommendations section on page 2's right column; Community moves to page 1 under Open Source, Education and Languages under Experience, continued; still two pages; PDF re-rendered with Chromium
- 2026-09-29T15:00:00Z - on human request, Usput.ba is titled AI Engineer (my own product) on the CV, the homepage highlight and project card, and About, with three evidence-backed bullets on the CV; the overall headline is unchanged; wording now comes from the presence of record in klosaer/hireable (profile/muhamed.presence.yml), whose test checks the CV and homepage; PDF re-rendered, still two pages
- 2026-09-29T16:00:00Z - on human request, About's description, intro and Specialties are rewritten from the presence of record in klosaer/hireable, and the summary on the CV and About opens with 10+ years in the industry; PDF re-rendered, still two pages
- 2026-09-29T17:00:00Z - on human request, the site icon is the owner's photo (favicon.ico, 32 and 512 PNGs, a 180 apple-touch icon), links shared from the site preview with images/social/share.png as a large Twitter card, and LinkedIn and X headers plus one post image per service (Assess, Enable, Build, Talks) sit under images/social/, rendered in the site's design system with impeccable's craft floor
- 2026-09-29T17:30:00Z - on human request, About's tech stack renders from the homepage's stack in _data/home.yml instead of its own outdated list; the share image becomes every page's default image, so jekyll-seo-tag emits the large Twitter card (the fallback in meta.html only ever produced a small one)
- 2026-09-29T18:00:00Z - on human request, the LinkedIn and X headers are reworked into one dark design for hiring managers and clients alike (title, 10+ years, AI features that hold up in production, leading teams, what I build, RubyConf Austria, muhamed.at); no client names on them
- 2026-09-29T18:30:00Z - on human request, the LinkedIn and X header is rethought around one line in the owner's words: I build products and lead the teams that ship them; ten years of taking software from an idea to production ("Ten years" in yellow); no roles, company names or AI terms
- 2026-09-29T19:30:00Z - on human request, the site is realigned to the offer the owner chose: the hero is "I build products and lead the teams that ship them" with an AI-native line, the title is Product Engineer and Tech Lead, AI-native (caption, About, CV), four services replace Assess/Enable/Build (Build, Lead, Review, AI-native), the talks section leaves the services page, the services grid is two by two, PRODUCT.md's positioning follows, and the share image and service post images are re-rendered
- 2026-09-29T19:45:00Z - on human request, founding RubyConf Austria is no longer emphasised: it leaves the portrait caption, the services page's Why me and About's description and intro; the conferences stay in the community section and the CV
- 2026-09-29T20:00:00Z - on human request, the title is Product Engineer and Technical Lead, AI-native everywhere (matching LinkedIn); the CV adds "| AI Engineer", as LinkedIn does, for AI engineer searches; images re-rendered
- 2026-09-29T20:30:00Z - on human request, the portrait caption adds a second line, AI Engineer, matching the LinkedIn headline
- 2026-09-29T21:00:00Z - on human request, the homepage drops the Diagnose/Prove/Hand over steps (the services page's How it works covers engagements, its last step reworded without them); stylesheets carry a build-time version so a new layout is not hidden by a cached site.css (the services grid showed three columns from cache)
2026-09-29 commit — 125c562: cv: sharpen the Teamtailor entry, add Langfuse and an architecture skills group
   diff: 2 files, +20/-13
   restricted-paths: false
   by: agent
2026-09-29 commit — 9923c0c: cv: drop the Flutter and User research chips
   diff: 2 files, +2/-2
   restricted-paths: false
   by: agent
2026-09-29 commit — ab7f5bb: deps: fix the Dependabot alerts (rubyzip, json, undici, brace-expansion)
   diff: 3 files, +813/-915
   restricted-paths: false
   by: agent
2026-09-29 commit — 9383ef0: cv, home: rewrite the Experfy entry around the product and the direction
   diff: 3 files, +7/-5
   restricted-paths: false
   by: agent
2026-09-29 commit — bb27826: site: side projects as a grid of cards, and About beside a contact card
   diff: 3 files, +60/-37
   restricted-paths: false
   by: agent
2026-09-29 commit — ce45519: site: make the site easy for agents to read and recommend
   diff: 4 files, +125/-6
   restricted-paths: false
   by: agent
2026-09-29 commit — c2196bd: services: Lead is part-time or full-time, and AI-native says what the work is
   diff: 10 files, +19/-18
   restricted-paths: true
   by: agent
2026-09-29 commit — 416eeeb: work: sell the work without naming employers, and show the recommendations
   diff: 5 files, +58/-36
   restricted-paths: false
   by: agent
2026-09-29 commit — 0af996e: work: say what a hiring company gets, in plain words
   diff: 2 files, +33/-52
   restricted-paths: false
   by: agent
2026-09-29 merge — PR #35: site: sell the work to hiring companies, full-width About, and easier for agents to recommend
   diff: 21 files, +299/-133
   restricted-paths: true
2026-09-29 commit — 81a8279: site: drop Politika from the footer
   diff: 1 files, +0/-1
   restricted-paths: false
   by: agent
2026-09-29 commit — 78b0d9b: site: fix the stale meta description, share alt text, twitter:creator and caption text
   diff: 7 files, +21/-6
   restricted-paths: false
   by: agent
2026-09-29 commit — 5a6d65d: cv, about: show the company ran alongside Meisterlabs in 2024
   diff: 3 files, +2/-2
   restricted-paths: false
   by: agent
2026-09-29 commit — 59e7389: site: list the roles he is open to, for agents
   diff: 2 files, +12/-1
   restricted-paths: false
   by: agent
2026-09-29 commit — 98789ac: site: title is Senior Product Engineer and Technical Lead, AI-native
   diff: 20 files, +13/-13
   restricted-paths: true
   by: agent
2026-09-29 commit — 0450442: cv: a one-column /cv/ page and /cv.json in JSON Resume, generated from the CV
   diff: 10 files, +873/-14
   restricted-paths: true
   by: agent
2026-09-29 commit — b72fcbb: site: CV links open the CV page instead of downloading the PDF
   diff: 5 files, +5/-5
   restricted-paths: false
   by: agent
2026-09-29 commit — 450c4fe: cv: roles done through the company carry no dates of their own
   diff: 4 files, +27/-35
   restricted-paths: true
   by: agent
2026-09-29 commit — 207f399: cv: contact details on /cv/ are links, profiles marked rel=me
   diff: 2 files, +2/-1
   restricted-paths: false
   by: agent
2026-09-29 commit — 5a92ac9: cv: contact details in the PDF are links
   diff: 2 files, +2/-1
   restricted-paths: false
   by: agent
2026-09-29 commit — d3b2d96: cv: explain Doctaphone, consulting done through the company
   diff: 5 files, +26/-
   restricted-paths: false
   by: agent
2026-09-29 commit — a541afc: site: align the skills with the CV; drop Svelte, C and Kimi
   diff: 4 files, +9/-11
   restricted-paths: false
   by: agent
2026-09-29 commit — 7f753c5: cv: add OpenAI SDK to the skills
   diff: 4 files, +3/-1
   restricted-paths: false
   by: agent
2026-09-29 commit — 43e0c5b: writing: give "I'm rich!" a description
   diff: 1 files, +2/-1
   restricted-paths: false
   by: agent
2026-09-29 commit — 92d30a4: home: drop "Every engagement runs the same way."
   diff: 1 files, +1/-1
   restricted-paths: false
   by: agent
2026-09-29 commit — c89c955: home: the title names the role, AI Engineer and Vienna
   diff: 3 files, +7/-2
   restricted-paths: false
   by: agent
2026-09-29 commit — ef219b2: about: list the Doctaphone consulting under the company
   diff: 1 files, +1/-0
   restricted-paths: false
   by: agent
2026-09-29 commit — 0741bb8: home: on phones the portrait caption sits below the photo
   diff: 2 files, +5/-1
   restricted-paths: false
   by: agent
2026-09-29 commit — 8ce339a: home: the portrait caption sits below the photo on every screen
   diff: 1 files, +5/-8
   restricted-paths: false
   by: agent
2026-09-30 commit — 5e186d1: cv, home: drop the conference speakers' names
   diff: 5 files, +4/-4
   restricted-paths: false
   by: agent
2026-09-30 commit — b6fba46: home: the EuRuKo line gives its size, like the RubyConf one
   diff: 1 files, +2/-2
   restricted-paths: false
   by: agent

## 2026-10-01

- site: add treasure_hunt to /work (home.yml side project, open-source note + repo link), llms.txt open-source list, both CVs (_data/cv.json open_source + static cv.json projects); new brain stream note 'Your conference can have a treasure hunt now'. Jekyll build verified locally (llms.txt, /work/, /brain/, cv.json all render the new content).
- site: add Hans Schnedlitz testimonial (RubyConf Austria co-organizer) to home testimonials + both CVs; photo is his published avatar from hansschnedlitz.com (512x512 PNG), pending his explicit consent confirmation
- site: Hans Schnedlitz confirmed consent for photo + recommendation (owner confirmed 2026-10-02); consent caveat closed

## 2026-10-18

- site: add GoatConf 2027 (goatconf.com) as the first community item. Home: new white-wordmark logo `images/logos/goatconf.svg` (built from goatconf's `site/brand/lockup-horizontal.svg`, text outlined), a lead line, and the heading drops "Ruby" ("I also bring the community together."). About, CV (source, `_data/cv.json`, `cv.json`) and llms.txt name it too; llms-full.txt picks it up from About. Facts from misabegovic/goatconf `files/PRODUCT.md`; not yet in the evidence store. Owner chose the wording, logo and scope in session.
- cv: the PDF is re-rendered with Chromium and becomes three pages (owner's choice): page 1's Open Source column overflowed since the 2026-10-02 treasure_hunt entry, so "brain and tabula" moves to page 2 with Education, Languages and Community, and Recommendations get page 3. This supersedes "two pages" in the twelfth change of the homepage ADR; the contact page now says three-page PDF. The PDF now also carries the Hans Schnedlitz recommendation and treasure_hunt.
- cv: known drift, left as is: running `.github/scripts/render-cv-data.js` would overwrite hand edits in both JSON files (the treasure_hunt URL and longer text, double quotes in the Hans quote), so the GoatConf lines were added to the JSON by hand.
- brain: new stream note "GoatConf: a free conference in Tuzla, built like Pi" (`files/_stream/goatconf-2027-tuzla.md`). Owner chose the angle (why and shape), naming the speakers, and publishing directly. Facts from misabegovic/goatconf (`files/wiki/org/goatconf-2027.md`, the goat story source, the speaker records). Names the six speakers live on goatconf.com; Jan Grodowski is left out while his record's `hold` line stands. No budget figures, per GoatConf's rule that the budget stays private.
- site: the GoatConf brain note gets its own share card, `images/social/goatconf-2027.png` (the share card's layout with the note's title and the GoatConf coin on brand blue), rendered by a new `goatconfNote` job in `.github/scripts/render-social-images.js`; `ONLY=<file>` now renders a single image so the others stay untouched. Owner chose a card in the site's style over goatconf.com's own image. goatconf itself is not changed.

## 2026-10-21

- repo: origin/main was history-rewritten upstream (no common ancestor; `files/_stream/it-doesnt-matter-whether-matz-is-nice.md` purged from every commit). Local main reset to origin/main (owner: "trust the upstream"); all other branches deleted locally and on GitHub (17 remote, plus `redesign-homepage` and its worktree), each checked as merged or superseded first.
- deps: Dependabot alert #89 (brace-expansion 5.0.9, GHSA-q2hr-2g5m-vwhr; `npm audit` also lists GHSA-qhr7-859c-m2p7 and GHSA-6j4f-fj2g-mc7p) dismissed as tolerable risk. It is dev-only and transitive (pi-brain 0.4.0 > pi-coding-agent 0.87.1 > minimatch 10.2.6), pinned by pi-coding-agent's `npm-shrinkwrap.json`, so neither `npm audit fix` nor package.json `overrides` can move it; the DoS needs untrusted glob input, which this repo never supplies. Follow-up: pi-coding-agent 1.3.0 drops the shrinkwrap and would resolve 5.0.12, but it is a major bump; take it with the next pi-brain upgrade through an ADR.
   by: agent
- site: performance pass, measured with Lighthouse before and after on a local production build (mobile). Home 76 → 98 (LCP 8.2 s → 2.2 s, 1450 → 227 KB), About 947 → 86 KB, `from-zero-to-one` 75 → 100 (2646 → 289 KB, LCP 15 s → 1.7 s), Minolovac accessibility 90 → 100. Portrait served as `images/profile-{480,800,1200}.webp` through `srcset` (`profile.jpg` stays full size for the CV PDF, share images and JSON-LD); company logos, the Usput logo and testimonial avatars re-encoded as WebP at about 3× their CSS size; the post's photos as 1400 px WebP with width/height. The Ruby webring script is deferred (it locates itself with `document.currentScript` and waits for DOMContentLoaded; was render-blocking ~770 ms). CSS and `minolovac.js` are cache-busted by content digest (`_plugins/asset_digest.rb`) instead of build time, so the daily rebuild no longer re-sends them. The Minolovac grid gets `role="row"` wrappers (each row its own CSS grid; the board looks and plays the same, checked by screenshot and a scripted game). Removed unreferenced files: the Reverie theme demo images, `fonts/` (EB Garamond, Aramisi), `testimonials/hassan.jpeg` and the replaced originals; the theme's README is replaced with one for this site. The social banner images stay (used off-site).
   by: agent
- igre: the web edition of Dejtonska igra no longer blocks pinch-zoom (`maximum-scale=1, user-scalable=no` dropped) and its manifest uses relative paths: the icons 404'd at the site root and `start_url: "/"` would have opened the homepage from an installed copy. Applied by `.github/scripts/build-dejtonska-igra.sh` to the temporary build copy only (klosaer/card-game keeps the zoom lock for its native apps), and patched into the committed build so it ships without a rebuild. Lighthouse locally: accessibility 92 → 100, best practices 96 → 100. Performance (78 live) is untouched: the game is a client-rendered SPA, so its first text waits on JavaScript; prerendering would have to come from the game repo.
- politika: the izbori2026 guide lacked a meta description (SEO 91); opened misabegovic/izbori2026#12 adding a default one in `templates/base.html` (all 7,297 pages; rendered locally to check). Merging it there triggers the site rebuild through `repository_dispatch`.
   by: agent
- igre: on human request, Dejtonska igra rebuilt from klosaer/card-game `c3aa816` (origin/main, 2026-10-08; was #114 of 2026-09-29), from a fresh clone so the owner's checkout (unpushed `e1dc109`, 9 behind) is untouched. The site now serves what Railway serves: v3 on `/play` with the fixes since (cycle 18 ballots, the election result in words) and v4 at `/play-v4` (the map, the 1991–1996 prologue with its warning and skip), unlinked from the landing until ADR-042 phase 5. Owner chose to include `/play-v4`. The build script gained one more base-path patch: the layout widened `/play-v4` only when the pathname started with `/play-v4`, so under `/igre/dejtonska-igra/` the map was squeezed into the phone column. Checked locally: landing, `/play` and `/play-v4` load with no failed requests or errors, and a scripted v4 career (form, prologue skip) reaches the map, laid out as on the game's own dev server.
   by: agent
- site: design pass from the 2026-10-21 critique (`.impeccable/critique/2026-10-21T12-57-56Z__files-index-html.md`, 24/36), recorded as the homepage ADR's fifteenth change; every decision the owner's, one at a time. Fixed first: the Usput and Izbori highlight lines were cut at their first comma (unquoted YAML flow mappings), live since the redesign; both quoted, and `_plugins/data_check.rb` now fails the build on any such value. Header: under 860 px a Menu button opens the links as 56 px rows with Get in touch; on every width the header hides on scroll down and returns on scroll up (`assets/site.js`; without the script the links wrap under the name). Homepage order: recommendations (Zlatko first, here and on /work/) move to right after the logos and the community band to right after services; stack pills only for the two AI groups; tools lead with an outcome line; the "A few things I have built" highlights section is removed from the homepage on the owner's ask (no Izbori promotion there; Izbori stays on /work/, /politika/ and llms.txt). 44 px targets in header, footer and text links on touch; the webring widget no longer overflows at 320 px. Checked at 320, 360, 390, 820 and 1440 px: no horizontal overflow, header one 61 px row on phones, menu focus and Esc, hide and reveal, the no-script fallback.
   by: agent
- site: second design pass from the re-run critique (`.impeccable/critique/2026-10-21T13-26-54Z__files-index-html.md`, 25/36), recorded as the homepage ADR's sixteenth change, every decision the owner's. Two-path closing band (`_includes/closing.html`: Hiring? / Need help? / the address) on Home, Services, Work, About, CV, posts and brain entries; header nav Brain to CV; one role line everywhere ("Senior Product Engineer and Technical Lead, AI-native | AI Engineer", from `home.yml` person.role); About trimmed to the story, open source and the personal list, pointing to the CV; dates "23 Jul 2026" site-wide; brain cards without the "note" label; GoatConf and treasure-hunt entries name their source; tag filters with aria-pressed, a live count and no tag-concatenation on typing; on-palette search clear; menu locks page scroll and gets a 3px bottom rule; 44 px touch targets for the closing email, CV button, About links, tool and side-project titles; tablets keep two columns to 700 px; homepage Writing list shows a post's description when it has one. Checked at 390, 820, 861 and 1440 on nine page types: no overflow, header one row at 861, menu and filters as described. The services offer is left for its own rework.
   by: agent
- site: services rework, the homepage ADR's seventeenth change, shaped with the owner (presentation only; email as the first step; no prices; nothing agency-like). Homepage service cards: name, "When you..." line, format, linking to `/services/#<offer>`. `/services/`: an email button per offer with a prefilled subject and prompts (`_data/services.yml` details.*.email; drafts); Review shows "What the review delivers" as four ordered parts from its earlier lines ("What holds: The parts that will carry you as you grow." is new wording); "Why me" becomes "Why teams bring me in." with one line and the three recommendations; the AI-native outcome loses the yellow side stripe. Checked at 390 and 1440: no overflow, anchors land clear of the header, mailto links encode spaces as %20. `/services/` on a phone grows from ~8.1 to ~9.8 screens.
   by: agent
- cv, site: on the owner's ask, the CV's founder entry names the company as "Isabegovic Muhamed e.U." (as the JSON-LD already did) in `files/_cv/cv.html`, `files/_data/cv.json` and `files/cv.json` (both JSON files edited by hand, per the known render drift), and the PDF is re-rendered with headless Chrome from `_cv/cv.html`: still three A4 pages, text identical except "e.U.". Zlatko Alomerovic's recommendation links to his LinkedIn (owner supplied the URL), like the other two.
   by: agent
- site: collaboration over hiring, the homepage ADR's eighteenth change, on the owner's ask ("I don't want to promote myself as someone desperate to work as a full time hire"). Availability line now "I work with teams through my own company, Isabegovic Muhamed e.U." (hero, About, `_config.yml` description, Person JSON-LD, llms.txt); the homepage hiring line and its CSS removed; the closing band's paths are "Building something?" and "Want a second opinion?" (the architecture review); `/contact/` swaps "Hiring for a role" for "A second opinion" with the review's prefilled email; Lead's format "Fractional or interim"; `/work/` heading "What teams bring me in for."; llms.txt "Ways teams bring him in" replaces the roles list; JSON-LD occupations drop Staff Engineer, Engineering Manager and VP of Engineering. Checked at 390 and 1440. Not mirrored to klosaer/hireable's presence record.
   by: agent
- site: phone menu fix, on the owner's report that Close "looks weird" (a fix to the homepage ADR's fifteenth change). The toggle keeps its outline when open (no filled black; hover fill only on devices that hover) and gains a three-bar / cross icon. The wordmark sets the first header line to 3.75rem, so the row no longer shifts up and pins Close to the top edge when the menu wraps in. Scroll lock moves to the root only (overflow on body unstuck the sticky header), and the first link takes focus with preventScroll (it jumped the page to the top). Checked at 390: opened at the top and mid-page, header at 0, scroll position restored on close.
   by: agent
- site: on the owner's ask (the services heading "sounds a bit restricting"), the offers read as where teams usually start, not a closed list: the homepage heading "Four ways to work together." / "Pick the one that fits..." becomes "How I can help." / "Where teams usually start with me. Something else in mind? Tell me about it."; the /services/ intro says the offers often overlap and that work fitting none of them is welcome; /work/ drops "Four"; llms.txt says "not a closed list". Refines the homepage ADR's seventeenth change.
   by: agent
- wiki: drafted the AI-suggested ADR `ai-suggestions/adrs/project-profile-pages.md` on the owner's ask: a `projects` collection published at `/work/<slug>/`, one layout, real screenshots and terminal captures (no video yet), the homepage and /work/ lists linking to the profiles, starting with enola and Usput.ba. Proposed, awaiting approval; nothing built.
   by: agent
- wiki: revised the project-profile ADR draft on the owner's input: addresses `/projects/<slug>/` with a `/projects/` index (owner's choice); optional Remotion videos, click to play, size-capped, sources in their own repositories (owner: "Remotion can be a good option for videos on those pages too"); brain and enola-guides join the homepage tools list (brain was never in it since 4a4497a); enola-guides becomes a first profile, plus a brain stream entry on working with knowledge bases. Still proposed.
   by: agent
- wiki: project-profile ADR draft takes the owner's answers: the pages promote the owner; enola-guides points to `misabegovic/enola-guides` ("Mine, it's the original one"); enola points to `enola-labs/enola`, leading with the owner's part. Still proposed.
   by: agent
- site: removed four check screenshots the agent committed by mistake into `files/` (in 28bceaa and 12db719: menu-close-*.png, svc-head-*.png), which were also published at the site root. Cause: the check scripts wrote relative paths from the working directory; they now write to /tmp/impl only.
   by: agent
- adr: `project-profile-pages` approved by the owner ("Approved.", 2026-10-22) and graduated from `ai-suggestions/adrs/` to `adrs/`, with the owner's answers (no enola-labs review; Usput screens and promo cut left to the agent; homepage tool rows link to the profiles).
   by: agent
- site: project profiles built locally per the ADR, as drafts for the owner's edit before they ship: `projects` collection at `/projects/<slug>/`, `_layouts/project.html` and `_includes/project-media.html` (framed screenshots, phone pairs, real code and terminal output, click-to-play video), a `/projects/` index in two groups, and three profiles: enola (stock upstream enola 0.4.15 `check` output; `plan` output from the owner's 0.4.32 build), enola-guides (its intent-first hook and lint run on a copy of examples/rails-shop with the owner's build), and Usput.ba (screenshots of usput.ba taken by a research agent on 2026-10-22, and a 29 s, 1.35 MB web cut of the usput-promo Remotion video without the scene captioned "3.700+", which has no source; the repo's docs say 11,068 polygons). brain and enola-guides join the homepage tools list; tool rows, /work/ and the footer link to the profiles; llms.txt and llms-full.txt list them. New brain entry `how-i-work-with-knowledge-bases` (draft, from enola-guides guides 9 to 12). Note: the research agent took the usput.ba screenshots with a browser disguised past Cloudflare's bot check; the agent did not repeat it, and future captures should come from a normal browser or a local server.
   by: agent
- site: on the owner's question which minesweeper to show, a comparison of Usput.ba's /minesweeper and /mine-check with muhamed.at's Minolovac (same 2024-07-31 data and board rule; Usput has map tiles, any location and the proximity check; Minolovac is a static port with keyboard and screen-reader play, the exact snapshot date and emergency numbers). The Usput profile now leads with the live mine check and minesweeper and names Minolovac as the static copy; it no longer says Minolovac has map tiles (it does not). The Minolovac card says a cell is a mine when it touches a recorded area, not that mines sit exactly on them. Unused Usput screenshots removed.
   by: agent
- igre: Minolovac never ends on the first click, the homepage ADR's nineteenth change, on the owner's ask. build-minolovac.py moves each board (never a mine) to the nearest real ground within 12 km of its preset with 15 to 36% mines and safe ground in pockets; `boards.json` gains `starts` and `centres`; the game reveals the largest safe pocket before the first move (timer starts on the player's move), at least 25% of the safe ground stays hidden, the start cell is outlined, the density line states the board's share instead of "mirrors real statistics", and the OSM link points at the board. Every board checked in the browser: opens safely, stays in play. The owner's zoom-out idea was measured (Sarajevo stays at 25%+ mines even at 30x30 cells of 600 m) and not used. Wording no longer says which game came first ("Actually the one in usput is built from minolovac"). Usput.ba's minesweeper still has the old boards.
   by: agent
- igre: Minolovac layout, on the owner's note ("nije centrirano. Toliko prostora na stranici nije iskorišteno"). From 1000 px the intro and the warning sit side by side, and the game is two areas: controls, notes and help in a 19rem column, the board centred in the rest, its cells sized to that width and to the screen height (up to 3.5rem; the hard board fits one screen at 1440x900). Phones keep one column, with a tighter game bar so it stays on one line. No overflow at 1440, 1024 or 390.
   by: agent
- igre: Minolovac opens in English, like the rest of the site, on the owner's ask ("Why not have it in English?"); Bosnian when the browser lists Bosnian, Croatian, Serbian or Montenegrin, and a saved choice from the toggle still wins. Checked with en-US, bs-BA, de-AT+hr and bs with a saved English choice.
   by: agent
- wiki: record `records/project-profile-pages.md` after delivery (pushed 6c9286f, deploy and validate green, all profile URLs 200 live; the four stray screenshots now 404). brain_sync run.
   by: agent
- projects: the project-profile ADR's first amendment, on the owner's ask ("its own projects entry with promo stuff... span across enola, brain"): a hub page `/projects/knowledge-bases/` ("How I work with knowledge bases") that walks the practice step by step and links every tool, led by a 37 s Remotion video (source in its own local repo, ~/projects/knowledge-base-promo; every terminal and file line real; 534 KB web cut, click to play), featured first on /projects/ and linked from the homepage tools section; new profiles for brain (screenshots of a clean clone run offline: onboarding, an ADR page, the link graph; real `validate` and `check` output) and pi-brain (this site's own history and constraint, and pi-brain's tools run on a copy of this site). brain and pi-brain rows link to their profiles. On the owner's "Make sure nothing client specific leaks": "twenty repositories" (a client's knowledge base, though stated in the public enola-guides gem) is gone from the enola-guides profile, the brain entry and the hub, and the "1.7-million-fact monolith" from the enola profile. Not changed: the owner's own August entry `enola-gems-and-contributions-august-2026` still mentions measurements on a monolith.
   by: agent
- site: tags redesigned across the site, on the owner's ask ("these tags across the site... can be improved"): posts and brain entries show a quiet "Filed under" line of #tag links instead of grey pills; the writing and brain index cards use small outlined filter tags, ink and yellow when active; 32 px touch height on phones.
   by: agent
- usput.ba (sibling): Minolovac's safe start ported to Usput.ba's minesweeper on a local branch `minesweeper-safe-start` (621c050, not pushed), under Usput's own decision `wiki/decisions/minesweeper-safe-start.md` and the homepage ADR's nineteenth change: preset boards take Minolovac's playable centres (`BOARDS`), `MineChecker::SafeStart` opens the largest safe pocket before the first move (custom boards too), the hint changes in all 16 locales (bs and en checked; the other 14 are agent translations to review), the stale routes.rb comment is fixed, features.md updated. Checks run: 44 mine tests pass, including one over the real snapshot that every preset board opens safely and leaves at least a fifth of the safe ground hidden; RuboCop, the ERB lint, Brakeman, the enola gate and tabula validate pass; the full suite runs 2,366 tests with 6 errors, all from libvips missing on this machine. Not run: bin/setup, the network audits, exhale, qualm, system tests, gh signoff. Side effect: `db:test:prepare` dropped `klosaer_test` and could not recreate it (Postgres template1 collation mismatch, 2.39 vs 2.43); the agent recreated it from template0 and loaded the schema.
   by: agent
- projects: two more profiles under the project-profile ADR: `/projects/treasure-hunt/` (hunt.rubyconf.at; screenshots and a 419-test run from a local run on demo data only, no real players, teams or treasure locations; "offline fallback", not "works offline"; no player numbers, as no source states them) and `/projects/post-dayton/` (the card game; mechanics only, no party characterisations or card text about real people, the unlinked v4 not shown; the card's stale numbers corrected to about 110 engine modules, 4,161 tests and 42 decision records, and the hook described as keeping accepted decisions implemented). On the owner's note ("inconsistencies in how and where we show these improvements... On the work page... these improvements need to show"): one shared component, `_includes/project-cards.html`, renders the hub and both groups on /projects/ and /work/; every project now has a thumbnail (Minolovac's board, Izbori's live guide, a typographic card for the private tabula); on phones the cards are compact rows (the /work/ section from about 6,400 to 2,900 px). On the owner's mobile note: a profile's link list puts each note under its link instead of beside or below depending on width. Flagged to the owner, not changed: the public treasure_hunt seeds hold the real parcel-locker addresses and codes of both treasures.
   by: agent
- igre: Minolovac opens in English for everyone, on the owner's ask ("let's default to english"); the browser-language switch is gone, only a click on the language toggle is remembered, under a new key (`minolovac-lang-choice`), so the "bs" earlier versions saved on every first visit no longer applies. Checked: Bosnian browser with an old saved "bs" opens in English; clicking Bosnian or English persists across a reload.
   by: agent
- site: on the owner's go ("do 1. And 2."): (1) a "Copy address" button beside the email in the band that ends every page, under the contact options ("No mail app on this device? Write to info@muhamed.at from any inbox.") and in the contact facts, for visitors whose device has no mail app; hidden without JavaScript, clipboard API with a fallback, "Copied" announced to screen readers; checked in Chrome that it copies the address. No reply-time line: that is the owner's promise to make. (2) a share preview per project page (1200x630 PNG, `images/social/project-<slug>.png`, set as each profile's `image:`; the hub's WebP replaced, as LinkedIn does not reliably show WebP), rendered by `.github/scripts/render-social-images.js`, which now reads each profile and its thumbnail and runs on playwright-core or puppeteer-core; the Lead service post images re-rendered with "Fractional or interim".
   by: agent
- cv, site: on the owner's ask ("Can we not mention 10 engineers? Can we avoid mentioning how many engineers at Carv?"), no page states the size of the Recrubo/Carv team or company: About ("tech lead for the engineering team at Recrubo"), the /work/ proof ("Led a startup's engineering team through its acquisition"), the CV in `_cv/cv.html`, `_data/cv.json` and `cv.json` ("Tech lead for the engineering team"; Recrubo described without "around 10 people"), and llms.txt. The PDF is re-rendered with headless Chrome from `_cv/cv.html`: still three A4 pages, text unchanged except those lines. Experfy's "around 30 engineers" stays.
   by: agent
- projects: the project-profile ADR's second amendment, on the owner's ask ("refresh the tabula entry from claude-brain intent... leave space for coming soon. Also introduce tabula harness (taha) the same way"): coming-soon profiles `/projects/tabula/` and `/projects/taha/`, drawn by a research agent from the intent in the owner's private brain (misabegovic/claude-brain) and the tabula-harness README, product-level only (no client, employer or third-party names, private test cases, commercial plans or dates; the agent listed what it left out by category). Layout: a `coming_soon` page gets a badge on the page and its card, a section that keeps room for screens and real runs, and an early-access email. tabula's homepage line becomes "Understand a system you inherited, write down what it should become, and hold every agent to it."; taha joins the tools list; typographic thumbnails and share cards for both; the knowledge-bases page and its video now count six tools (knowledge-base-promo 6d8ee37).
   by: agent
- projects: the project-profile ADR's third amendment, on the owner's asks ("Promise what's planned, the full extent of it, both for tabula and taha"; "These will be my main tools also. Together with enola."). The tabula and taha pages carry their full plans, ten themes each, every theme tagged working today, in progress or planned from the intent (misabegovic/claude-brain) and the code, by a research agent under the same publication rules (no client, employer, side-project or person names, no codenames: the docs' "cardo"/"mu-enola" read "enola", no commercial plans, figures or dates). taha's page no longer says it never merges: a mandate can grant merging on the owner's own private repositories (its code since 2026-10-22). enola, tabula and taha lead the tools on the homepage, /projects/, /work/, llms.txt, the knowledge-bases page and its video (knowledge-base-promo 169043b, 2fffa47); the AI-native offer sets up "enola and its gems today, tabula and taha as they ship". Caught and fixed before commit: the video's and hub's "I build them all" / "all built by me" overclaimed enola, which is enola-labs' with the owner as core contributor.
   by: agent
- brain: new entry `tabula-taha-and-enola` on the owner's ask ("Process tabula, taha and cardo/enola combo as a brain stream card"): enola sees the code, tabula holds the intent and judges, taha does the work inside a mandate, and the loop between them, with the not-yet-built step (working a gap until it closes on its own) and taha's granted merges stated as they are. Written as "enola", not the codename, as on the rest of the site. Draft in the owner's voice, for his read before it ships.
   by: agent
- site: the Ruby Webring widget in the footer loads with its layout styles only and takes the footer's look (Schibsted Grotesk, the muted title, outlined buttons that turn yellow on hover, a yellow focus ring, 44px targets on touch), instead of the white box with a system font it drew on the dark footer. One row on desktop; on phones the title sits above the buttons. Follows the homepage ADR's design system.
   by: agent

## 2026-10-26

- site: the homepage ADR's twenty-first change, shaped with the owner from browser previews. Rails becomes a fifth service: its own band under the four services on the homepage, and a new page `/rails/` ("For Rails apps that outgrew their first design."), with six buyer problems and their proof, four Rubyist facts, Zlatko's recommendation, three formats (a call, a day, a few hours a month) and the owner's line on availability: write anyway; if booked, he says so and points to someone good. Words in `files/_data/rails.yml`; linked from `/services/`, the footer and llms.txt. Upgrades and performance are on the owner's word. "8,500+ companies" is gone from `/work/`, `/rails/` and llms.txt on the owner's ask, kept on the CV. A shorter title caption was previewed and declined; the role is unchanged. Not done: a Rails option on the contact page, a Rails service image for social posts.
   by: agent
- site: `/rails/` gets its own share card (`images/social/rails.png`: "For Rails apps that outgrew their first design.", the portrait, "Rubyist since 2016 · RubyConf Austria founder · muhamed.at/rails"), and Rails a LinkedIn and X service post beside the other four, pointing to muhamed.at/rails. Rendered with `render-social-images.js` (ONLY= each new file; the other images untouched). On the owner's go.
   by: agent
- site: a fourth card on the contact page, "Your Rails app", second in a 2×2 grid (was three in a row); its prefilled email is read from `services.yml` (details: Rails), the same as on /rails/ and /services/, and it links to /rails/. Phones keep one column. On the owner's go.
   by: agent
- site: leftovers from the Jekyll Now theme removed on the owner's go: `/archive/` and `/categories/` (nothing linked to them; /writing/ and /tags/ cover them; no redirect plugin, so they now 404), and the Constructocat 404 page, rewritten in the site's voice with links to Home, Services, Rails consulting, Projects, Writing, the brain and the CV, kept out of the sitemap. The brain feed's title reads "Muhamed Isabegovic: brain" instead of "Muhamed's - Peek into my brain". `_config.yml`'s unused `name:` and `version:` left for the owner.
   by: agent
- product: `PRODUCT.md` brought up to date on the owner's go: teams buying help first and hiring through a contract with his company second (since the eighteenth change); five services with Rails and its own page; the full title kept; no capacity stated (write anyway; if booked, he refers someone); the amber portrait and brand kit; GoatConf 2027; no client customer counts; no Recrubo/Carv team size; Ruby and Rails evidence, upgrades and performance on the owner's word; three recommendations; the seven homepage logos shown with each company's agreement (owner, 2026-10-26). A pending client engagement is left out until the contract is signed.
   by: agent
- writing: the unpublished draft `_drafts/ai-augmented-development-how-i-actually-work.md` deleted on the owner's ask ("lets delete it"). It was agent-written (e1e6621, 2026-08-30), so it did not fit /writing/'s "written by me", and its tooling and day-job lines were out of date. Recoverable from git history.
   by: agent
- site: /rails/ proofs in plain words on the owner's note ("some of these sound too specific... might weird them out"). Upgrades: "I keep my own Rails apps on current Ruby and Rails, Ruby 4.0 and Rails 8.1 today" (usput.ba 57858a5, treasure_hunt 583cb56). Performance: "Fixed pages that got slower as the data grew, by letting the database do the filtering and paging, and taking the queries out of loops" (usput.ba 14c2829, 0937f81; timings and query counts left out). The enola query-loops line is dropped, and the acquisition proof loses its stack detail. Searched first: the hireable evidence store holds no upgrade or performance story.
   by: agent
- site: /rails/ rebuilt around the work, on the owner's notes ("the things you mention dont sell that well"; "done before could also maybe even go"). It opens on "Rails apps, from the first release to the tenth year." and a menu of eight: maintenance and upgrades, refactoring (with Rails conventions, the owner's "best practices"), rewrites, performance, CI/CD and continuous delivery (trunk-based development and feature flags on the owner's word), team processes, end to end, AI features. The problem-and-proof groups and the proof list are gone; the facts and Zlatko's quote carry the proof. The homepage band lists the menu. The Rails summary on the homepage and /services/, the /services/ details, the contact card, llms.txt, the 404 link, the share card and the Rails post images now say the same.
   by: agent
- site: tidy-up of what the Jekyll Now theme left behind, on the owner's go. Removed four Sass partials nothing imports (`_highlights`, `_reset`, `_svg-icons` at 57 KB, `_variables`; `_darcula` stays for code), the unused `pullquote.html` and `svg-icons.html` includes, and the `_config.yml` keys nothing reads (`name`, `avatar`, `footer-links`, `enforce_ssl`, `version`); `description` stays for jekyll-seo-tag, and the off Disqus and analytics switches stay. A build before and after differs only in build timestamps. The search and tag filter that /writing/ and /brain/ each carried inline is one file, `assets/index-filter.js`, with the result noun from `data-noun`; checked in Chrome on both pages (tag from the URL, typing, clear, load more, chip click, no results), no console errors.
   by: agent
- projects: every profile in `_projects/` gets `date: 2026-10-22`, the day the pages were added (git). Without one, Jekyll dated each page at build time, so the daily rebuild told search engines and link previews (`article:published_time`, `dateModified`) that all ten were published that day. URLs, card order and llms.txt are unchanged. On the owner's go; found while diffing the tidy-up's builds. A new profile needs its own `date:`.
   by: agent
- site: the Rails lead loses its last line, "Bring me the part of your app that slows your team down.", on the owner's note ("Sounds weird. Remove?"). It now ends on the experience: mature products with many teams on one codebase, and his own products on Rails 8. Changes /rails/ and the homepage band, which share `files/_data/rails.yml`; the share card and post images never carried it.
   by: agent
- site: the /rails/ card "End to end" becomes "New features, idea to production", on the owner's note ("also sounds wrong without context"). Its text is otherwise unchanged. The homepage band lists it under the same name; the /rails/ meta description and llms.txt say "new features from idea to production" instead of "end-to-end ownership". "Features owned end to end" stays in the Rails summaries (homepage, /services/, the post image), where the context carries it. Checked in Chrome: the name wraps to two lines like its neighbours.
   by: agent

## 2026-10-29

- site, cv: the homepage ADR's twenty-second change, on the owner's ask: the contract with Symphony is signed, so "Staff Engineer" is the title everywhere (was "Senior Product Engineer and Technical Lead, AI-native | AI Engineer"): homepage caption, footer, About, the CV page and PDF, page titles, link previews, JSON-LD, the `/brand/` bios, llms.txt and `_config.yml`. The CV lists "Staff Engineer · Symphony" first under the company ("AI-native engineering company building software and AI for enterprises, high-growth startups and private equity portfolio companies", from symphony.is), and the company's line says "engineering roles for startups and engineering companies". About, the long bio and llms.txt name Symphony as the current engagement. Symphony is left out of "Worked with" for now (owner). PDF re-rendered with headless Chromium from `_cv/cv.html` (three pages, tagged), both CV JSON files from `render-cv-data.js`, and `share.png` plus the ten service post images from `render-social-images.js`. The now-unused nowrap filters on the old title are removed. Previewed in Chrome before shipping. The LinkedIn headline is the owner's to change.
   by: agent
- brand: the LinkedIn and X headers go dark (#111, the site's footer), the amber portrait ADR's second change. The amber banner was lighter and yellower than the photo's backdrop (#ffb93f to #e8920c against about #ed9a16 to #f3a626), so they almost matched and read as off; the owner chose dark from four mockups in LinkedIn's and X's profile layouts. The line is the hero lead's, "Ten years of taking software from an idea to production.", with "Ten years" in yellow, over "Staff Engineer · muhamed.at"; the site headline stays on the site and the share card. Rendered with `render-social-images.js` (ONLY= each header). `/brand/` and its zip pick them up on the next build. The owner uploads them to LinkedIn and X.
   by: agent
- brand: the three bios on `/brand/` and in its zip rewritten from scratch with the owner, the amber portrait ADR's third change: plain sentences, no clients or employer named, nothing that dates them. Short (9 words): "Muhamed Isabegovic is a Staff Engineer, based in Vienna." Medium (33) adds open-source tools for teams that write code with AI agents, EuRuKo 2024 organised in Sarajevo, RubyConf Austria and GoatConf founded; Long (45) adds that GoatConf is a free conference in Tuzla for people who build and sell software. Drafts that listed stacks, "ten years" and past clients were declined. Checked on a local build in Chrome.
   by: agent
