---
# Profile (ADR: project-profile-pages). Facts from misabegovic/enola-guides
# (README, CHANGELOG, guides/, examples/, templates/), rubygems.org
# (versions), and the evidence store (oss-enola-gems). The terminal output is
# a real run on a copy of examples/rails-shop, 2026-10-22.
title: enola-guides
home_key: enola-guides
description: enola-guides, a Ruby gem by Muhamed Isabegovic for working with coding agents in a codebase that has decisions, with architecture laws checked in CI, decisions anchored to code, and hooks that make agents read before they write.
image: /images/social/project-enola-guides.png
thumb: /images/projects/enola-guides/thumb
cta: { label: Set this up in your team, url: /services/#ai-native }
links:
  - { label: Source on GitHub, url: "https://github.com/misabegovic/enola-guides", note: "misabegovic/enola-guides, the original" }
  - { label: rubygems.org, url: "https://rubygems.org/gems/enola-guides", note: "gem install enola-guides" }
  - { label: enola, url: "/projects/enola/", note: "the tool the guides are for" }
  - { label: How I work with knowledge bases, url: "/projects/knowledge-bases/", note: "the practice, across all my tools" }
facts:
  - { label: Role, value: Author and maintainer }
  - { label: What, value: "A Ruby gem: 12 guides, 26 laws to copy, worked examples, 9 agent skills, 4 hooks" }
  - { label: For, value: Ruby and Rails teams adopting enola, and the agents that work in their code }
  - { label: Releases, value: "8 on rubygems.org since August 2026; 0.3.1 is the latest" }
  - { label: License, value: Apache-2.0 }
hero:
  kind: code
  label: "templates/hooks/intent-first-gate.sh · an agent's first edit in app/billing"
  caption: "Real output from the gem's intent-first hook, run on a copy of its rails-shop example. The agent's first write is held once, with the laws that govern the file; the retry goes through."
  code: |
    intent-first gate (shop): first write for this piece of work.

    Before app/billing/charge.rb moves, read what governs it and check the intended change
    against it. If the change deviates from what the governing page records,
    amend the page first; if nothing governs this work, say so and ask
    whether it should be shaped.

    Plan report for shop
    Snapshot: no snapshot at /tmp/shop/.enola — governance answers from the declarations alone; blast radius is unmeasured

    Target app/billing/charge.rb (path)
      No measured fact lives at this path — governance below covers code about to be written.
      Component billing (declared in enola/constraints/billing-is-documented.rb)
        rule billing-is-documented [ratchet]: every file of billing must be governed by a compiled page
          because: code under a decision needs the page that decided it
        rule billing-keeps-to-its-own-tables [ratchet]: billing must reach only the tables it owns
          because: a part that writes another part's table owns a bug it cannot see

    A report, never a gate: these verdicts are for the caller to weigh before editing.

    Retrying proceeds. This gate re-arms on every user message; within one
    piece of work it will not fire again for shop.
problem:
  title: Agents write fast. They don't know what you decided.
  text: |
    A coding agent sees the files in front of it, not the decisions behind them. Nothing in the code tells it that billing must not write another part's tables, or that a background job never calls a controller. So teams write longer prompts and longer reviews, and the knowledge that matters stays in people's heads.

    enola-guides is how I close that gap with [enola](/projects/enola/): write the decisions down, anchor them to the code they govern, check them in CI, and have the agent read them at the moment it is about to change that code.
features:
  - title: Architecture rules your team can read, checked in CI.
    text: |
      Each rule is a law, written as a sentence in a Ruby DSL, one file each, with the reason beside it. The gem ships a catalogue of 26 laws to copy, from foreign keys on a tenant column to parts that may not cycle. The CI check reports first and only fails the build once the team decides it should.
    media:
      kind: code
      label: examples/rails-shop/enola/constraints/billing-is-documented.rb
      code: |
        Enola.architecture "shop" do
          part :billing, files: ["app/billing/**", "app/models/invoice.rb"]

          law "billing is documented" do
            billing.must_be_governed
            since "2026-09-01"
            why "code under a decision needs the page that decided it"
            mode :ratchet
          end
        end
  - title: Decisions anchored to the code they govern.
    text: |
      A decision page in the knowledge base names the files it governs, so any file can answer which decision applies to it, and a law can require that code under a decision has its page. A number in the prose cites a receipt (the commit, the enola version, a fingerprint), so a script can check it again. As guide 9 puts it: *"A claim nobody can re-check is a sentence, not a fact."*
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

        # Shop architecture

        Orders are written by `OrderService` only; the two other writers the
        graph reported in 2026-08 were folded into it. `Order` has 41 dependents
        (receipt shop@3f2a9c1, fingerprint 8d1e…c40a).
  - title: Hooks and skills that fire at the right moment.
    text: |
      Four hooks for agent sessions. The **intent-first gate** holds the first edit in a repository once and shows what governs the file, as above. The **turn record** notes what moved. **Stop-time debt** holds once when code under a decision changed and the decision did not. **Session refresh** rebuilds the graph when the code has moved on.

      Nine skills ask the graph at a fixed moment: before planning, while taking in a new source, on a schedule, before a push. They report; the people decide.
    media:
      kind: code
      label: "templates/ · what a team copies into its repository"
      code: |
        hooks/
          intent-first-gate.sh   record.sh
          stop-debt.sh           session-refresh.sh
        skills/
          enola                  enola-laws
          enola-intent-first     enola-grade-before-push
          enola-deepdive         enola-ingest-check
          enola-drift            enola-citation-hygiene
          enola-zoom-out
        enola-check.sh           enola-findings.rb
        enola-cluster.yaml       constraints-starter/
  - title: From install to a first law in ten minutes.
    text: |
      Twelve guides, in reading order: start here, a Rails app, an Ember app, writing laws, constraints in CI, hooks and agents, providers, beyond one repository, and four on running a knowledge base with enola. The rails-shop example declares thirteen laws, and one command validates them all.
    media:
      kind: code
      label: "$ enola constraints lint .   (shortened)"
      code: |
        enola constraints lint: repo /tmp/shop (built-in default config)

        shop: declared by constraints files under enola/constraints/.
          enola/constraints/a-mutating-action-is-authorized.rb: 11 component(s), 1 rule(s), 0 exemption(s)
          enola/constraints/background-jobs-never-invoke-controller-code.rb: 10 component(s), 1 rule(s), 0 exemption(s)
          enola/constraints/billing-is-documented.rb: 1 component(s), 1 rule(s), 0 exemption(s)
          enola/constraints/billing-keeps-to-its-own-tables.rb: 1 component(s), 1 rule(s), 0 exemption(s)
          enola/constraints/the-public-api-stays-small.rb: 1 component(s), 1 rule(s), 0 exemption(s)
          … eight more laws, and enola's built-in recipes

        OK — every declaration is valid.
shows:
  title: How I work with knowledge bases.
  text: |
    This is the method I run my own work on: one knowledge base across all the repositories of a system, decisions written down before structural changes, and agents that read them before they write. This site runs the same way, on [pi-brain](https://github.com/misabegovic/pi-brain), and [brain](https://github.com/misabegovic/brain) is where it started.

    The guides are that practice written down, so a team can adopt it, pin it as a gem, and keep it after I leave. When I help a team become AI-native, this is what I set up.
  link: { label: The AI-native offer, url: /services/#ai-native }
closing:
  title: Want this in your team?
  text: I set it up in your repositories, with your laws and your decisions, and teach your team to run it.
  url: /contact/#team
---
