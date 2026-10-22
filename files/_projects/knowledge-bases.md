---
# The practice behind the tools (ADR: project-profile-pages, first
# amendment). Every output shown is real and appears on the tool's own
# profile; nothing here names or sizes a client's system. The video is
# rendered from ~/projects/knowledge-base-promo (Remotion), 2026-10-22.
title: How I work with knowledge bases
description: How Muhamed Isabegovic works with coding agents, with decisions written down, anchored to the code they govern, checked in CI and read by agents before they write, across brain, pi-brain, enola, enola-guides, tabula and taha.
thumb: /images/projects/knowledge-bases/thumb
image: /images/social/project-knowledge-bases.png
lead: Decisions written down, anchored to the code they govern, checked in CI, and read by agents before they write. The method I run my own work on, and what I set up for teams.
cta: { label: Set this up in your team, url: /services/#ai-native }
links:
  - { label: brain, url: "/projects/brain/", note: "the knowledge base an agent maintains" }
  - { label: pi-brain, url: "/projects/pi-brain/", note: "decisions agents must read, on pi" }
  - { label: enola, url: "/projects/enola/", note: "one graph of the code, laws in CI" }
  - { label: enola-guides, url: "/projects/enola-guides/", note: "the method written down" }
  - { label: tabula, url: "/projects/tabula/", note: "hold every agent to what you wrote; coming soon" }
  - { label: taha, url: "/projects/taha/", note: "agents that work unattended inside a mandate; coming soon" }
  - { label: The method in plain words, url: "/brain/how-i-work-with-knowledge-bases/", note: "a note in my brain" }
facts:
  - { label: Tools, value: "brain, pi-brain, enola, enola-guides, tabula and taha, all built by me" }
  - { label: Scale, value: "One knowledge base across all the repositories of a system" }
  - { label: In the open, value: "Four of the six tools, and this site's own wiki" }
  - { label: For, value: "Teams that build with coding agents" }
hero:
  kind: video
  src: /videos/projects/knowledge-bases/promo.mp4
  poster: /videos/projects/knowledge-bases/promo-poster.webp
  width: 1280
  height: 720
  caption: "37 seconds, no sound. Every terminal and file line in it is real output, shown in full on the tools' pages."
problem:
  title: Agents write fast. They don't know what you decided.
  text: |
    A coding agent sees the files in front of it, not the decisions behind them. It will have a background job call a controller, or let billing write another part's tables, because nothing in the code says why not. Longer prompts and longer reviews only move the problem.

    So I give the agent what a good engineer joining the team would get: the decisions, written down, next to the code they govern, and checks that catch the moment a change crosses one.
features_title: The practice, step by step.
features:
  - title: Write it down, where agents read it.
    text: |
      Sources go in unchanged; the wiki is the synthesis, and every claim cites its source. Decisions are records with a status and a confidence, and an agent may draft one but not approve it. That is [brain](/projects/brain/), and [pi-brain](/projects/pi-brain/) for the pi coding agent.
    media:
      kind: image
      src: /images/projects/brain/adr
      width: 1600
      height: 1000
      alt: "A decision page in brain: decision, accepted, confidence high, six pages rely on this."
  - title: Anchor it to the code.
    text: |
      A decision page names the files it governs, so any file can answer which decision applies to it, and numbers cite the receipt they were read from. The method is written down in [enola-guides](/projects/enola-guides/).
    media:
      kind: code
      label: examples/knowledge-base/wiki/shop/permanent/architecture.md
      code: |
        ---
        title: Shop architecture
        enola_intent:
          governs:
            - app/jobs/**
            - app/models/**
          decisions:
            - jobs enqueue, models decide; a job never calls back into a job
        ---
  - title: Check every change.
    text: |
      [enola](/projects/enola/) builds one graph of the system from the code and reports only what a change introduced, against laws the team wrote as sentences. It runs in CI, and before an agent says it is done.
    media:
      kind: code
      label: "$ enola check --fail-on=constraints ."
      code: |
        FAIL — 2 structural regressions introduced.
        law: 1 rule · 2 breaches · none excused

        Regressions (fail):
          - [constraints] 1.00 — Constraint background-jobs-never-invoke-controller-code violated: OrderReportJob#perform -> OrdersController via calls
              app/jobs/order_report_job.rb:2
  - title: Hold the first edit.
    text: |
      Before an agent's first write into a repository, a hook shows it the decisions and laws that govern the file. It holds once and the retry goes through: it forces a reading, never a verdict. People decide.
    media:
      kind: code
      label: "intent-first-gate.sh · an agent's first edit in app/billing"
      code: |
        intent-first gate (shop): first write for this piece of work.

        Target app/billing/charge.rb (path)
          Component billing (declared in enola/constraints/billing-is-documented.rb)
            rule billing-is-documented [ratchet]: every file of billing must be governed by a compiled page
              because: code under a decision needs the page that decided it

        A report, never a gate: these verdicts are for the caller to weigh before editing.
  - title: Keep people in charge.
    text: |
      A structural change waits for an approved decision. The agent drafts, a person approves, and the record of what shipped follows. This site works that way; its wiki is public.
    media:
      kind: code
      label: "$ git log --follow -- wiki/muhamed.github.io/adrs/project-profile-pages.md"
      code: |
        a831a16 projects: profile pages for enola, enola-guides and Usput.ba
        41eceaa wiki: project profile ADR draft takes the owner's answers on repositories
        d1293af wiki: revise project profile ADR draft (projects URLs, video, brain, enola-guides)
        01b5101 wiki: draft ADR for project profile pages
  - title: One tool for all of it, and agents you can leave alone.
    text: |
      [tabula](/projects/tabula/) brings the practice into one tool: understand a system you inherited, write down what it should become, and hold every agent to it, with claims as leases and a journal no command rewrites. [taha](/projects/taha/) runs an agent unattended inside a mandate, with tabula holding the gates. Both are coming soon.
shows:
  title: What I set up for a team.
  text: |
    A knowledge base your people and agents both work from, across your whole development lifecycle. Coding agents set up for your codebase, with guardrails they cannot bypass and architecture rules checked in CI. All of it with open-source tools I build, in your own repositories, and taught to your team so it keeps running after I leave.
  link: { label: The AI-native offer, url: /services/#ai-native }
closing:
  title: Want this in your team?
  text: Tell me how your team works with agents today, and I will tell you honestly what I would set up first.
  url: /contact/#team
---
