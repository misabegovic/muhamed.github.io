---
# Profile (ADR: project-profile-pages, first amendment). Facts from
# misabegovic/pi-brain (README, AGENTS.md, CHANGELOG, extensions/), npm
# (versions), and this site, which is a pi-brain clone (AGENTS.md, wiki/,
# log/). Terminal output: this site's history (git log) and pi-brain's tools
# run on a copy of this site on 2026-10-22.
title: pi-brain
home_key: pi-brain
description: pi-brain, Muhamed Isabegovic's knowledge home for the pi coding agent, where decisions go through a person, agents draft but cannot promote what they write, and structural changes wait for an approved ADR.
thumb: /images/projects/pi-brain/thumb
cta: { label: Set this up in your team, url: /services/#ai-native }
links:
  - { label: Source on GitHub, url: "https://github.com/misabegovic/pi-brain", note: "misabegovic/pi-brain, MIT" }
  - { label: npm, url: "https://www.npmjs.com/package/@misabegovic/pi-brain", note: "pi install @misabegovic/pi-brain" }
  - { label: This site's wiki, url: "https://github.com/misabegovic/muhamed.github.io/tree/main/wiki", note: "a pi-brain clone, in the open" }
  - { label: How I work with knowledge bases, url: "/projects/knowledge-bases/", note: "the practice it belongs to" }
facts:
  - { label: Role, value: Author and maintainer }
  - { label: What, value: "A package for pi: a knowledge base per project or client, in its own clone" }
  - { label: Releases, value: "9 on npm, July to September 2026; 0.5.1 is the latest" }
  - { label: License, value: MIT }
hero:
  kind: code
  label: "$ git log --follow -- wiki/muhamed.github.io/adrs/project-profile-pages.md"
  caption: "The decision behind the project pages on this site: drafted by the agent as a suggestion, revised with my answers, approved by me, and built in the same commit that moved it to the approved shelf."
  code: |
    a831a16 projects: profile pages for enola, enola-guides and Usput.ba
    41eceaa wiki: project profile ADR draft takes the owner's answers on repositories
    d1293af wiki: revise project profile ADR draft (projects URLs, video, brain, enola-guides)
    01b5101 wiki: draft ADR for project profile pages
problem:
  title: Agents implement first. For some decisions, that is wrong.
  text: |
    Ask a coding agent to change the layout of a repository and it starts moving files. Nobody wrote down why, nobody agreed to it, and the next agent cannot tell a decision from an accident.

    pi-brain keeps a project's decisions, architecture and product reasoning next to the code, as a clone of its own, and makes the agent ask before the changes that matter. Raw drafts never become truth without human approval.
features:
  - title: Stop and shape.
    text: |
      A structural change waits for an approved decision record. The agent drafts it, says "this looks structural", and stops. Only after a person approves it does the agent move the record to the approved shelf, build, and write a record of what shipped.
    media:
      kind: code
      label: wiki/muhamed.github.io/constraints/adr-before-structural-changes.md
      code: |
        ---
        kind: constraint
        status: active
        severity: must
        ---

        # Constraint — ADR before structural changes

        Any structural change to this pi-brain home or the maintained project
        repository MUST have an approved ADR before implementation begins.
  - title: Agents draft. People promote.
    text: |
      Knowledge moves from the inbox to a suggestion, a draft, an accepted decision, its implementation and a record. Agents may only write suggestions. What an agent writes starts at `confidence: low` and cannot promote itself to `high` in the same change.
  - title: Checked, every commit.
    text: |
      `brain_sync` validates every page and rebuilds the index, before each commit. Links are graphed for orphans and dead ends. Nothing runs a model on a schedule.
    media:
      kind: code
      label: "$ node tools/brain-sync.mjs && node tools/brain-links.mjs   (on a copy of this site)"
      code: |
        Regenerated wiki/index.md with 70 pages across 16 kinds.
        Link graph: 70 nodes, 389 edges
        Orphans: 0, Hubs: 63, Dead links: 3, Suggestions: 21
  - title: Forty-four commands, enola built in.
    text: |
      `/brain:shape`, `/brain:continue`, `/brain:investigate`, `/brain:tend` and forty more, plus nineteen tools for the agent. With [enola](/projects/enola/) switched on, fifteen `/brain:enola-*` commands check changes, keep receipts, and record verdicts on findings; since 0.5.0 the first write into a repository is held once to show the decisions that govern it.
  - title: This site runs on it.
    text: |
      muhamed.at is a pi-brain clone: twelve decision records, records of what shipped, a must-constraint on structural changes, and a log line for every change. The wiki is public, so you can read how every page on this site was decided.
shows:
  title: What it shows about how I work.
  text: |
    I let agents do the work and keep people in charge of what is true. pi-brain is that rule made into a tool: it slows the agent down exactly where a decision is being made, and nowhere else.
  link: { label: How I work with knowledge bases, url: /projects/knowledge-bases/ }
closing:
  title: Want this in your team?
  text: I set up a knowledge base per project or client, with the gates your team wants, and teach your people and agents to work from it.
  url: /contact/#team
---
