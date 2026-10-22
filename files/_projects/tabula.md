---
# Profile, coming soon (ADR: project-profile-pages). From tabula's intent in
# the owner's private brain (wiki/tabula: index, what-it-is-and-is-not,
# goals) and the tabula README and docs, 2026-10-22. Product-level intent
# only: no client, employer or third-party names, no figures that need
# private context, nothing about commercial plans, no release date (none is
# stated).
title: tabula
home_key: tabula
coming_soon:
  title: Screens and real runs, soon.
  text: |
    tabula is in private development. Before it opens, its documentation goes online, the binary ships with checksums, and a first reader works through the homepage and a tutorial. This page will then show real runs, as the other tools' pages do.

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
  - { label: Works with, value: "Any agent harness, over the command line or MCP, small models included" }
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
features_title: What it will do.
features:
  - title: Files are the truth.
    text: |
      Pages, sources and the journal are plain files, and git carries them. Nothing runs as a server unless you start one, and a sync that meets a conflict stops and names the page instead of guessing.
  - title: Intent first.
    text: |
      Before code moves, the work is aligned with the decision or plan it comes from. Ask any file which decisions govern it, and when they entered.
  - title: Claims are leases.
    text: |
      An agent claims a piece of work on a lease. When the lease runs out, another agent can take it over and is shown what the last one wrote, so two agents never do the same task twice.
  - title: A journal that never changes.
    text: |
      Every act that has an effect is journaled as an intent before it runs, one file per entry, and no command rewrites or deletes one.
  - title: Judged by something other than the author.
    text: |
      Finished work is checked against its stated outcomes, never by the agent that did it. Architecture laws compile into rules checked in CI.
  - title: Some steps belong to a person.
    text: |
      Trust, promotion, a verdict, lifting a hold: tabula refuses them to agents, says so, and names the step for the person to take. Every command ends by naming the next one and why.
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
