---
# Profile (ADR: project-profile-pages, first amendment). Facts from
# misabegovic/brain (README, CHANGELOG, VERSION, git log, gh repo view) and
# the evidence store (oss-brain). Screenshots and terminal output from a clean
# clone run offline on 2026-10-22, with no private content.
title: brain
home_key: brain
description: brain, Muhamed Isabegovic's open-source knowledge base that a coding agent maintains, with immutable sources, a wiki where every claim cites its source, and no scheduled LLM runs.
image: /images/social/project-brain.png
thumb: /images/projects/brain/onboarding
cta: { label: Set this up in your team, url: /services/#ai-native }
links:
  - { label: Source on GitHub, url: "https://github.com/misabegovic/brain", note: "misabegovic/brain, MIT" }
  - { label: pi-brain, url: "/projects/pi-brain/", note: "the same idea for the pi harness" }
  - { label: How I work with knowledge bases, url: "/projects/knowledge-bases/", note: "the practice it belongs to" }
facts:
  - { label: Role, value: Author }
  - { label: What, value: "A markdown wiki an agent maintains, with a local web app to read it" }
  - { label: Built with, value: "Python, Astro; local-first, MIT" }
  - { label: Releases, value: "v0.20.0 to v0.31.0, July and August 2026" }
hero:
  kind: image
  src: /images/projects/brain/onboarding
  width: 1600
  height: 1000
  alt: "brain's onboarding, slide one of sixteen: A knowledge base your agent maintains. A markdown wiki an AI agent maintains under a schema, governance gates and an audit trail; humans read the briefing, agents read the verbose pages; local-first."
problem:
  title: Agents need a memory that does not drift.
  text: |
    A coding agent starts every session knowing nothing about why the code is the way it is. Notes in chat are gone the next day, and a wiki nobody tends goes stale within weeks.

    brain is the pattern of a wiki an LLM maintains, made into a product: governance, health checks, and a queue that collects the work while you are away. The agent keeps it current; you talk to the agent. And no LLM ever runs on a schedule.
features:
  - title: Sources in, unchanged. The wiki is the synthesis.
    text: |
      Repositories, documents and conversations land under `sources/` and are never rewritten. The agent keeps the wiki: decisions, discussions, state, one shelf per repository, and every claim cites the source it came from. The rulebook is `AGENTS.md`. You don't read it; your agent does.
    media:
      kind: image
      src: /images/projects/brain/adr
      width: 1600
      height: 1000
      alt: "A decision page in brain: decision, accepted, confidence high, six pages rely on this. Self-maintenance is queue-and-tend: deterministic producers accumulate a per-item inbox; synthesis digests in-session, never on a schedule."
      caption: "A decision page, with its status, its confidence and how many pages rely on it."
  - title: A graph of what relies on what.
    text: |
      Every link between pages is in a graph: solid where a person wrote it, dashed where the agent suggested it, and a flag on low-confidence pages the rest leans on. Orphans, hubs and dead ends are listed, so the wiki can be tended, not just written.
    media:
      kind: image
      src: /images/projects/brain/graph
      width: 1600
      height: 1000
      alt: "brain's link graph: 75 pages and 313 links, grouped by shelf and ordered by inbound links, with flagged low-confidence nodes."
  - title: Checks that run without a model.
    text: |
      The deterministic half runs on a local timer for free: changes in sibling repositories, pages getting old, link health. Everything that needs a model waits in a queue for the operator's next session. Validation and source checks are one command each.
    media:
      kind: code
      label: "$ python3 tools/brain.py validate && python3 tools/brain.py check"
      caption: "Real output from a clean clone, offline."
      code: |
        OK  74 page(s) valid
        197 sources checked across 74 pages
          10 skipped (sibling repos not on this machine; use --verbose to list)
  - title: An optional tier for many agents.
    text: |
      Off by default: brain can be the hub for many agents, each signing what it writes with its own key, on an append-only event stream, woken when a matching event lands. The brain is never the harness and never runs a model itself.
shows:
  title: What it shows about how I work.
  text: |
    brain holds specifications, decisions and handoffs ADR-first, as a versioned repository. It is the working method behind my AI-native work, and where [pi-brain](/projects/pi-brain/) started. It is how I think a team should keep its knowledge: written once, cited always, tended in the open.
  link: { label: How I work with knowledge bases, url: /projects/knowledge-bases/ }
closing:
  title: Want this in your team?
  text: I set up a knowledge base your people and agents both work from, in your repositories, and teach your team to tend it.
  url: /contact/#team
---
