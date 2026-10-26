---
# Profile, coming soon (ADR: project-profile-pages). From tabula's intent in
# the owner's private brain (wiki/tabula: index, what-it-is-and-is-not,
# goals) and the tabula README and docs, 2026-10-22. Product-level intent
# only: no client, employer or third-party names, no figures that need
# private context, nothing about commercial plans, no release date (none is
# stated).
title: tabula
home_key: tabula
# When this page was first published; without it, every build re-dates it.
date: 2026-10-22
coming_soon:
  title: Screens and real runs, soon.
  text: |
    tabula is in private development, and much of the plan above already works on my own projects. Before it opens, its documentation goes online, the binary ships with checksums, and a first reader works through the homepage and a tutorial. This page will then show the canvas and real runs, as the other tools' pages do.

    If you look after a system you inherited and want to try it early, write to me.
  email:
    label: Ask about early access
    subject: tabula, early access
    body: "What we look after:\nHow we work with agents today:\n"
description: tabula, Muhamed Isabegovic's tool for understanding a system you inherited, writing down what it should become, and holding every agent to it. Coming soon.
image: /images/social/project-tabula.png
thumb: /images/projects/tabula/thumb
cta: { label: Ask about early access, url: "#p-soon" }
links:
  - { label: taha, url: "/projects/taha/", note: "the harness that runs agents on tabula; coming soon too" }
  - { label: How I work with knowledge bases, url: "/projects/knowledge-bases/", note: "the practice tabula grows out of" }
facts:
  - { label: Role, value: Author }
  - { label: What, value: "One Rust binary that keeps a project's memory, contract and judge as plain files" }
  - { label: For, value: "Menders: people who look after code they did not design, and the agents beside them" }
  - { label: Works with, value: "Any agent harness: the command line, MCP, the canvas or your editor; small models included" }
  - { label: Status, value: "In private development" }
hero:
  kind: image
  src: /images/projects/tabula/thumb
  width: 1600
  height: 1000
  alt: "tabula, in private development: understand a system you inherited, write down what it should become, and hold every agent to it."
problem:
  title: Most tools are built for the architect. Most of us inherit.
  text: |
    Most tools are built for the person who draws a system before it exists. Most of us look after one someone else built, full of decisions nobody wrote down, and agents will happily change it without knowing any of them.

    tabula helps you understand the system you inherited, write down what it should become, and hold every agent that works on the code to what you wrote.
plan_title: Everything tabula will do.
plan_intro: "The full plan, theme by theme. Working today means built and in use, though not yet released."
plan:
  - title: Your files are the truth, shared by many agents.
    status: built
    text: |
      Pages are Markdown in git. Sync commits, fetches and merges, and on a conflict it names the page and pushes nothing. Several agents share one brain without a server: each claims work on a lease, and none can release another's claim. What an agent reports goes into a journal no command rewrites, and findings wait in an inbox for a person's verdict. One level above every repository covers work that spans them.
  - title: Intent before any code moves.
    status: built
    text: |
      An entry gate refuses an edit until the work is aligned with the plan or decision it comes from, and work no page governs asks for new intent a person accepts. Effects record their intent before they run. Next: every sentence carries its standing, proposed, accepted or contested, and any file can answer why it is the way it is.
  - title: Judged by something other than the author.
    status: built
    text: |
      `evaluate` settles each acceptance line, and each premise of a proposal, without asking the agent that did the work. Every verdict carries a receipt that can be checked again, and a run's whole story can be rebuilt from the journal. Mutation runs show which tests catch nothing. Next: every judge proves it rejects answers known to be wrong.
  - title: Draw your architecture on a canvas.
    status: built
    text: |
      `tabula ui` is a canvas served by the tabula binary on your machine: typed parts (module, service, database, table, endpoint, queue, job, external) and arrows, zoom through the C4 levels from context to code, a part expanded in place. The same picture prints in the terminal, renders as SVG, and exports to Mermaid, draw.io or picjs. A change is drawn on the picture: what it did since the baseline.
  - title: Drawings that compile into enforced rules.
    status: built
    text: |
      A "never" arrow, or a law written as a sentence, compiles into enola constraints the repository's own CI checks, with your reason beside each rule. `distance` names exactly where the code breaks a rule today, by file and line, and writes a step-by-step brief to build what is planned. Exceptions are signed, never silent. Planned: a loop that works the gap until it closes.
  - title: Explain a codebase you inherited.
    status: built
    text: |
      A tour walks a newcomer through it one step at a time. `explain` writes a page a newcomer can read, from facts the engine measured; `ask` answers with file and line; `trace` follows a path between two functions with the tests and decisions on each step. Where a decision came from, the likely causes of a symptom, and the files both complex and always changing, each one command away.
  - title: A library of every known architecture.
    status: in progress
    text: |
      Styles, patterns and practices, with their sources and licences, kept as pages. tabula says whether your code keeps the style it claims and what that style trades, in measured numbers; adopting one turns it into the laws agents are held to, and answers cite the library rather than a model's memory. The aim is the whole history of the field.
  - title: Every door, every verb naming the next.
    status: built
    text: |
      The same verbs from the command line, over MCP, on the canvas and in your editor through a language server. tabula installs into Claude Code, pi, Codex, Amp, Goose and OpenCode, and every gesture on the canvas is also a verb an agent can call. Every answer ends with the command to run next and why.
  - title: Built for small and local models.
    status: in progress
    text: |
      Handles, outlines and single sections instead of whole pages, a compact profile, and a cap on every result. Self-hosted models are first-class, and tabula scores how well a model uses its tools. A small model is the measure of its efficiency, never a requirement. Planned: context chosen by relevance, ranked on your machine with nothing sent anywhere.
  - title: Workflows, schedules, CI and docs that run.
    status: built
    text: |
      Workflows are pages: each step goes to its owner, a run keeps the checkpoints it started under, and runs are drawn from the journal. Scheduled jobs, `tabula ci` and sketches through whatever harness you use. The documentation is a tabula brain whose commands run in the test suite. Planned: the documentation published as its own site.
shows:
  title: What it shows about how I work.
  text: |
    tabula is what my knowledge-base practice becomes when it is one tool: the decisions written down, the code held to them, and the people kept in charge of what is true. I build it the way I want teams to work with agents, and I run my own work on it.
  link: { label: How I work with knowledge bases, url: /projects/knowledge-bases/ }
closing:
  title: Inherited a system?
  text: Tell me what you look after and how your team works with agents, and I will tell you honestly what I would set up first.
  url: /contact/#team
---
