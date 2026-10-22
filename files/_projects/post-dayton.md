---
# Profile (ADR: project-profile-pages). Facts from klosaer/card-game, the
# owner's own organisation's private repository, at c3aa816 (README, wiki
# ADRs, .husky/pre-push, scripts, git log; tests run 2026-10-22), and the
# evidence store (proj-card-game*). Screenshots of the game as this site
# serves it. Copy stays on the mechanics: no party characterisations and no
# card text about real people. The v4 is not shown, as it is not yet linked
# from the game's landing.
title: Post-Dayton BiH
home_key: card-game
description: Post-Dayton BiH, a political strategy card game by Muhamed Isabegovic about a career in Bosnia and Herzegovina's politics, on a pure TypeScript engine with 4,161 tests and 42 decision records.
thumb: /images/projects/post-dayton/thumb
lead: A card game where you build a political career in the most complex country in the world. You see what each decision costs; the consequences stay hidden until after you decide.
cta: { label: Play it, url: /igre/dejtonska-igra/ }
links:
  - { label: Play it, url: "/igre/dejtonska-igra/", note: "free on the web, on this site" }
facts:
  - { label: Role, value: "My own game: I design and build it" }
  - { label: Engine, value: "Pure TypeScript, about 110 modules" }
  - { label: Tests, value: "4,161 tests in 193 files, all passing" }
  - { label: Decisions, value: "42 decision records, kept honest by a pre-push hook" }
  - { label: Languages, value: "Bosnian, Croatian, Serbian (Latin and Cyrillic) and English" }
hero:
  kind: phones
  caption: The landing page and a turn on the municipal council.
  items:
    - { src: /images/projects/post-dayton/landing, alt: "The landing page of Post-Dayton BiH: a seal, the line Be the politician: your past follows you, your dossier gives you away, and a Play button." }
    - { src: /images/projects/post-dayton/card, alt: "A turn: the card Tender for school renovation, with four choices around it and the instruction Drag the card toward your decision." }
problem:
  title: A career, one card at a time.
  text: |
    You start on a municipal council and climb, through the canton and the entity, to the state. Each turn is one card and four choices; you see what a choice costs, not what it causes. Press, coalitions, crises and campaigns interrupt the deck, and elections run from the platform to the morning after.

    The dossier remembers everything. A choice from years ago can come back at the worst moment, which is the point.
features:
  - title: It starts before the first election.
    text: |
      A five-card prologue covers 1991 to 1996, so the career begins with a past. The game is free on the web, here on this site; the phone apps are on the way.
    media:
      kind: phones
      caption: The prologue, and the desk where a career is kept.
      items:
        - { src: /images/projects/post-dayton/prologue, alt: "The prologue card Summer 1991: a graduation dance in the house of culture, smoke from the power station, and the question what do you do when war is rumoured." }
        - { src: /images/projects/post-dayton/desk, alt: "The desk: a new dossier, load dossier, archive, badges and office settings." }
  - title: An engine held by tests.
    text: |
      The rules live in a pure TypeScript engine of about 110 modules, apart from the interface, so every rule is tested on its own. The suite runs 4,161 tests in 193 files.
    media:
      kind: code
      label: "The engine's test suite (Vitest), at c3aa816, 22 Oct 2026"
      code: |
        Test Files  193 passed (193)
             Tests  4161 passed (4161)
  - title: Decisions that block a push.
    text: |
      Every rule of the game's design is a decision record, 42 of them. A pre-push hook refuses a push while an accepted decision is not yet implemented, and enola refuses one that breaks the layers of the code, from the screens down to the engine and the data. The decision check has no way around it, by design.
    media:
      kind: code
      label: ".husky/pre-push · the refusal it prints"
      caption: The hook's own message, from its script.
      code: |
        [husky/adr-check] BLOCKED: accepted ADRs without completed implementation:
  - title: Four languages, one engine.
    text: |
      Bosnian, Croatian, Serbian in Latin and Cyrillic, and English, chosen on the landing page.
shows:
  title: What it shows about how I work.
  text: |
    I hold a side project to the standards of production: the rules apart from the screens, thousands of tests, decisions written down, and a hook that will not let the code and the decisions drift apart. It is the same discipline I bring to a team's codebase, with agents or without them.
  link: { label: How I work with knowledge bases, url: /projects/knowledge-bases/ }
---
