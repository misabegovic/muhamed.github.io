---
# Profile, coming soon (ADR: project-profile-pages, eighth amendment). From
# the owner's private empty-shell repository (README, its rules and its rule
# register, the default mandate) and the README of his private build of
# enola, read 2026-11-22. Product-level only, on the owner's word: what the
# family is and does, in prose, with no file contents and no command output
# until it is public. No client, employer or third-party names, no commercial
# plans and no release date (none is stated). "How I start a project now" and
# "open source soon" are on the owner's word (2026-11-22). The engine is
# called enola here, with its author named, and never by the name of the
# owner's build, to credit the project (owner, 2026-11-22).
title: empty-shell
home_key: empty-shell
# When this page was first published; without it, every build re-dates it.
date: 2026-11-22
coming_soon:
  title: Open source, soon.
  text: |
    empty-shell and the three tools inside it are in private development, and I run my own projects on them today. They open soon. Until then this page says what the family is in words; real runs and screens come with the release, as on the other tools' pages.

    If you want to start a project this way before then, write to me.
  email:
    label: Ask about early access
    subject: empty-shell, early access
    body: "What we are building:\nHow we work with agents today:\n"
description: empty-shell, Muhamed Isabegovic's family of tools for running a project with coding agents, is a starting repository with the rules, the checks and an empty wiki, and enola, tabula and taha inside, built to work together. Coming soon.
image: /images/social/project-empty-shell.png
thumb: /images/projects/empty-shell/thumb
lead: "One repository to start a project with an agent: the rules, the checks and an empty wiki, with enola, tabula and taha inside, built to work as one."
cta: { label: Ask about early access, url: "#p-soon" }
links:
  - { label: tabula, url: "/projects/tabula/", note: "holds the pages, the checks and the judge; coming soon too" }
  - { label: taha, url: "/projects/taha/", note: "runs an agent inside a mandate; coming soon too" }
  - { label: enola, url: "/projects/enola/", note: "the open-source engine of the family, which I help build" }
  - { label: How I work with knowledge bases, url: "/projects/knowledge-bases/", note: "the practice the family carries" }
  - { label: pi-brain, url: "/projects/pi-brain/", note: "an earlier tool, for the pi coding agent; public today" }
facts:
  - { label: Role, value: Author }
  - { label: What, value: "A starting repository for a project run with an agent, with three tools inside" }
  - { label: The family, value: "enola, the open-source engine, with tabula and taha" }
  - { label: For, value: "A person or a team that lets agents do the work and wants to stay in charge of what is decided" }
  - { label: Status, value: "In private development, open source soon" }
hero:
  kind: image
  src: /images/projects/empty-shell/thumb
  width: 1600
  height: 1000
  alt: "empty-shell, a family of tools, coming soon: start a project with an agent from one repository, with the rules, the checks, and three tools that work together."
problem:
  title: Three good tools are not yet a way of working.
  text: |
    A map of the code, a place for decisions and a harness that runs agents are each useful alone. The weeks go into wiring them together: which rule is held by which check, what an agent may do without asking, what counts as done, and where a decision lives so the next agent finds it.

    empty-shell is that wiring, done once. It is a repository with nothing of yours in it yet: the rules an agent works by, the checks that hold them, and an empty wiki for what the project learns and decides. Three tools ship inside it, set up to work together. It is how I start a project now.
features_title: The family.
features:
  - title: The shell.
    text: |
      A repository you make your own: the rules an agent works by, the skills and commands it uses, the hooks and checks that hold those rules, and an empty wiki. You name your project and its repositories, and start working.
  - title: enola sees the code.
    text: |
      [enola](/projects/enola/) is the open-source architecture graph by Dejan Menges, which I help build. It reads every repository of a project into one graph, with no model in the loop, so "what breaks if this changes" has an exact answer and a team's laws are graded on every change. The shell carries my own build of it: before a change goes into that build, it is measured against upstream enola on a corpus of 90 repositories, and every difference has to carry a reason.
  - title: tabula holds the intent.
    text: |
      [tabula](/projects/tabula/) keeps the pages: what the system is, what it should become, and which decision governs which file. It validates and indexes them, runs the checks, and judges finished work against what was asked, without asking the agent that did it.
  - title: taha does the work.
    text: |
      [taha](/projects/taha/) runs a coding agent on a piece of work inside a mandate: which repositories, which acts, what budget, until when. A killed run resumes without repeating anything, and every outward act is journaled before it runs.
  - title: Each does one job.
    text: |
      Dependencies point one way. taha uses tabula, and tabula never knows taha. enola is the engine under both: when tabula needs something the engine lacks, it is built into the engine, never worked around.
plan_title: What the shell holds.
plan_intro: "Theme by theme. Working today means built and in use on my own projects, though not yet released."
plan:
  - title: Every rule says where it is carried.
    status: built
    text: |
      The rules are one file an agent reads first. A register beside it names, for each rule, the hook, the check or the test that holds it. A rule held only by words is counted as words, so I can see which ones an agent could still talk its way past.
  - title: Intent before code.
    status: built
    text: |
      Work starts as a pitch, becomes a plan with acceptance a tool can measure, then a decision, then code. The first edit into a file that a decision governs is held once, with that decision shown. At the end the work is judged against its acceptance lines, and the verdict is written beside the decision.
  - title: What reaches other people stays mine.
    status: built
    text: |
      An agent commits on my machine and reports. Promoting work is my call, made each time. Anything public (a push to a public repository, a comment others read, a published site, package or release) is never done by an agent: it prepares the act, and a hook refuses the act itself.
  - title: Four roles, and a bet before any code.
    status: built
    text: |
      Gambler, PM, Tech Lead and Developer ask whether, what, how, and then build. Before code is written, a pitch meets the cheapest measurement that could kill its premise, and where the roles disagree, the disagreement is recorded with the outcome.
  - title: A mandate for unattended work.
    status: built
    text: |
      The shell starts with the narrowest mandate that lets a first piece of work run: branch work is allowed, a push and a draft pull request are asked, a comment is never made, and the run has a budget and an end date. I widen it by editing one page.
  - title: Checks that run where the work is.
    status: built
    text: |
      One gate on my own machine validates every page, checks that every cited source and link is there, grades the architecture laws through enola, and reads again the plans a change touched. Nothing is promoted past a failing gate.
  - title: An empty wiki with a shape.
    status: built
    text: |
      Three levels (the knowledge base itself, the organisation, each repository) and three layers for each repository: what it is, where it is going, and how it got here. Sources go in unchanged and are never edited, and every claim cites one.
  - title: One step to set up.
    status: in progress
    text: |
      The three tools ship inside the shell as ready programs with checksums, and one script unpacks them, links the hooks and runs a first check. The setup downloads nothing and publishes nothing. The Linux build for Intel is run, and the shell's own checks pass with it; the Mac and ARM builds are made and wait for their first run.
shows:
  title: What it shows about how I work.
  text: |
    I let agents do the work and keep people in charge of what is decided and what is published. empty-shell is that way of working with nothing in it yet: every rule written down, each held by something that can refuse, and three tools that each do one job. I build it for my own projects first.
  link: { label: How I work with knowledge bases, url: /projects/knowledge-bases/ }
closing:
  title: Starting a project with agents?
  text: Tell me what you are building and how your team works with agents today, and I will tell you honestly what I would set up first.
  url: /contact/#team
---
