---
# Profile, coming soon (ADR: project-profile-pages). From the tabula
# harness's intent in the owner's private brain (wiki/tabula-harness) and its
# README, 2026-10-22. Product-level intent only: no client, employer or
# third-party names, no private test cases, no commercial plans, no release
# date (none is stated). pi and Pi Durable are public projects.
title: taha
home_key: taha
# When this page was first published; without it, every build re-dates it.
date: 2026-10-22
coming_soon:
  title: Real runs, soon.
  text: |
    taha, the tabula harness, is in private development and runs my own work today, one person at a time. This page will show real runs once it has earned them: finished mandates, a crash recovered, and work that passed tabula's gates.

    If you want an agent that works unattended inside limits you set, write to me.
  email:
    label: Ask about early access
    subject: taha, early access
    body: "What we would hand to an agent:\nWhat it must never do:\n"
description: taha, the tabula harness by Muhamed Isabegovic, runs a coding agent durably inside a mandate, with tabula holding the intent and the gates, and comes back with checked work. Coming soon.
image: /images/social/project-taha.png
thumb: /images/projects/taha/thumb
lead: Lets a coding agent work unattended inside a mandate you set, and come back with finished, checked work you can trust.
cta: { label: Ask about early access, url: "#p-soon" }
links:
  - { label: tabula, url: "/projects/tabula/", note: "holds the intent, the journal and the gates; coming soon too" }
  - { label: pi, url: "https://pi.dev", note: "the open-source coding agent taha runs on" }
facts:
  - { label: Role, value: Author }
  - { label: What, value: "A durable host for a coding agent: the tabula harness" }
  - { label: Built on, value: "pi and Pi Durable, with tabula's commands as the agent's tools" }
  - { label: Bounds, value: "A mandate per run: which repositories, which acts, what budget, until when" }
  - { label: Status, value: "In private development" }
hero:
  kind: image
  src: /images/projects/taha/thumb
  width: 1600
  height: 1000
  alt: "taha, the tabula harness, in private development: lets a coding agent work unattended inside a mandate and come back with finished, checked work you can trust."
problem:
  title: An agent you can leave alone needs limits it cannot argue with.
  text: |
    Handing a coding agent a task and walking away means trusting it with your repositories, your credentials and your time. taha makes the limits part of the run instead.

    The host decides nothing tabula can decide. A bug in the host can at worst stop a run, never pass a gate.
plan_title: Everything taha will do.
plan_intro: "The full plan, theme by theme. Working today means built and in use on my own work, though not yet released."
plan:
  - title: Runs that survive a crash.
    status: built
    text: |
      Each piece of work is one durable conversation on Pi Durable, kept in a local database. Kill the process and it resumes where it stopped, with nothing run twice; every run a dead process left behind can be picked up again, and every step is mirrored into tabula's journal.
  - title: A mandate bounds every run.
    status: built
    text: |
      You write one mandate: the repositories in scope, the acts allowed, an expiry, and budgets in tokens, minutes, steps and, if you like, money. A mandate can only tighten, and changing its file halts the run. A halt ends with its reason and a report. A queue is worked to the end, follow-ups included, and workflow pages run as flows with subagents and fan-out.
  - title: Every act recorded before it happens.
    status: built
    text: |
      Each tool says what happens if a crash cuts it off: safe to run again, check whether it already happened, or wait for a person. Every outward write is recorded in the journal as an intent before it runs.
  - title: One GitHub connector, with firm rules.
    status: built
    text: |
      It creates branches, pushes, opens draft pull requests and comments. It never pushes to the default branch, never force-pushes, and refuses AI attribution. Anything public or someone else's waits for the person in charge. Pull requests stay drafts unless a mandate grants merging for your own private repository, and then only after local CI, evaluation, a clean merge and a reviewer's yes; the first bad merge takes the grant away.
  - title: No credentials, and a sandbox.
    status: built
    text: |
      The agent's shell holds no tokens, keys or SSH, and a guard reads every command word by word. Each piece of work can run in its own KVM guest with no network, and the host reviews the diff before taking it. Without KVM the run stops; it never falls back to your machine.
  - title: tabula is the judge.
    status: built
    text: |
      No file changes until the work is aligned with its intent in tabula. A piece is done, or opens its draft, only when `tabula evaluate` reads every line as met; tabula decides which decisions go into the brief and which steps are open. The host decides nothing tabula can decide.
  - title: Review that converges, and a council.
    status: built
    text: |
      A reviewer with fresh eyes finds defects, independent verifiers confirm them, and review runs for a bounded number of rounds. A council of three, on worth, fit for the user and technical soundness, must quote what it read and agree unanimously or escalate; it never takes a person's place. How often it agrees with the person in charge is measured.
  - title: Models per role, cheapest first.
    status: built
    text: |
      Each role has a ladder of models: a retry climbs a rung, a clean step comes back down. The finish report gives tokens and cost per step. taha also runs inside pi's own interface.
  - title: Earning the name Tabula Agent.
    status: in progress
    text: |
      tabula, taha and a model working under a mandate become Tabula Agent only when the journal shows it was earned: real mandates worked to the end unattended, every finished piece evaluated as met, drafts reviewed, a crash recovered on real work, and each claim measured against a single-call baseline.
  - title: Beyond GitHub.
    status: planned
    text: |
      More connectors, each only for a workspace the person in charge names as their own, every write through an intent. Then the rest of the development cycle, including watching checks and errors after release.
shows:
  title: What it shows about how I work.
  text: |
    I let agents do real work and keep people in charge of what they may do. taha is that rule as a runtime: the limits are files, the record cannot be rewritten, and the person decides what leaves the sandbox.
  link: { label: How I work with knowledge bases, url: /projects/knowledge-bases/ }
closing:
  title: Want agents that work within limits?
  text: Tell me what you would hand to an agent and what it must never do, and I will tell you honestly how I would set it up.
  url: /contact/#team
---
