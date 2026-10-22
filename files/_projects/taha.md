---
# Profile, coming soon (ADR: project-profile-pages). From the tabula
# harness's intent in the owner's private brain (wiki/tabula-harness) and its
# README, 2026-10-22. Product-level intent only: no client, employer or
# third-party names, no private test cases, no commercial plans, no release
# date (none is stated). pi and Pi Durable are public projects.
title: taha
home_key: taha
coming_soon:
  title: Real runs, soon.
  text: |
    taha, the tabula harness, is in private development and runs a single operator's work today. This page will show real runs once it has earned them: finished mandates, a crash recovered, and work that passed tabula's gates.

    If you want an agent that works unattended inside limits you set, write to me.
  email:
    label: Ask about early access
    subject: taha, early access
    body: "What we would hand to an agent:\nWhat it must never do:\n"
description: taha, the tabula harness by Muhamed Isabegovic, runs a coding agent durably inside a mandate, with tabula holding the intent and the gates, and comes back with draft pull requests. Coming soon.
image: /images/social/project-taha.png
thumb: /images/projects/taha/thumb
lead: Lets a coding agent work unattended inside a mandate you set, and come back with draft pull requests you can trust.
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
  alt: "taha, the tabula harness, in private development: lets a coding agent work unattended inside a mandate and come back with draft pull requests you can trust."
problem:
  title: An agent you can leave alone needs limits it cannot argue with.
  text: |
    Handing a coding agent a task and walking away means trusting it with your repositories, your credentials and your time. taha makes the limits part of the run instead.

    The host decides nothing tabula can decide. A bug in the host can at worst stop a run, never pass a gate.
features_title: What it will do.
features:
  - title: Durable runs.
    text: |
      Each piece of work is one durable conversation on pi and Pi Durable. Kill the process mid-task and it resumes where it was, without running anything twice.
  - title: A mandate bounds every run.
    text: |
      A file says which repositories are in scope, which acts are allowed, the budget in tokens and minutes, when it expires, and whether a person watches. A mandate can only tighten, and changing it halts the run.
  - title: Halts end with a report.
    text: |
      A spent budget, an expired mandate, an act reserved for the operator, a review that does not agree: the run stops and says why, instead of pushing on.
  - title: Every outward act is journaled first.
    text: |
      Before the agent touches anything outside its sandbox, the intent goes into tabula's journal. Each tool says what happens if a crash cuts it off halfway.
  - title: Drafts, never merges.
    text: |
      Pull requests are always drafts. It never merges, never pushes to the default branch, and the agent's shell holds no credentials, so it has nothing to act outward with.
  - title: Done is tabula's call.
    text: |
      Whether work is finished, which decisions govern it and what comes next are answered by tabula, not by the agent or the host.
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
