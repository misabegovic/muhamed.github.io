---
# Profile (ADR: project-profile-pages). Facts from enola-labs/enola (README,
# its Acknowledgements, CHANGELOG, releases), the merged pull requests by
# misabegovic (gh pr list, 2026-10-22), rubygems.org, the brain entry
# enola-gems-and-contributions-august-2026, and the evidence store
# (oss-enola-constraints, oss-enola-collaboration, oss-enola-gems). The
# terminal output is a real run with the stock upstream enola 0.4.15 on a
# small Rails-shaped repository, 2026-10-22.
title: enola
home_key: enola
# When this page was first published; without it, every build re-dates it.
date: 2026-10-22
description: Muhamed Isabegovic's work on enola, the architecture graph that catches what a change broke in CI, including the constraints program, laws written in Ruby, and the gems that bring it to Rails teams.
image: /images/social/project-enola.png
thumb: /images/projects/enola/thumb
cta: { label: Set this up in your team, url: /services/#ai-native }
links:
  - { label: enola on GitHub, url: "https://github.com/enola-labs/enola", note: "enola-labs/enola, Apache-2.0" }
  - { label: enola.tech, url: "https://enola.tech", note: "the project's site" }
  - { label: enola-rb, url: "https://github.com/misabegovic/enola-rb", note: "my Rails and Bundler gems for enola" }
  - { label: enola-guides, url: "/projects/enola-guides/", note: "my guides for working this way" }
  - { label: How I work with knowledge bases, url: "/projects/knowledge-bases/", note: "the practice enola is part of" }
facts:
  - { label: Role, value: Core contributor }
  - { label: Project, value: "enola-labs/enola, Apache-2.0" }
  - { label: My part, value: "44 merged pull requests, August to October 2026: the constraints program, laws in Ruby, Rails and Ember support" }
  - { label: Gems, value: "enola, enola-rb, enola-guides and munola, which I maintain" }
hero:
  kind: code
  label: "$ enola check --fail-on=constraints ."
  caption: "Real output: in a small Rails app, a background job was changed to call a controller, against a law from enola-guides. enola reports what the change introduced, with the file and the line."
  code: |
    FAIL — 2 structural regressions introduced.
    could not see: 0 files and 1 directory excluded by ignore globs
    law: 1 rule · 2 breaches · none excused

    Regressions (fail):
      - [constraints] 1.00 — Constraint background-jobs-never-invoke-controller-code violated: OrderReportJob#perform -> OrdersController via calls
          forbidden calls edge
          app/jobs/order_report_job.rb:2
            def perform(order_id)
            ^^^^^^^^^^^^^^^^^^^^^
      - [constraints] 1.00 — Constraint background-jobs-never-invoke-controller-code violated: OrderReportJob#perform -> OrdersController.summary_for via calls
          forbidden calls edge
problem:
  title: Agent-written code drifts from the architecture you agreed on.
  text: |
    A coding agent can write a change that looks right and still crosses a boundary nobody wrote down: a job that calls a controller, one module writing another's tables. Review catches some of it, late. Linters judge one file at a time and know nothing about your architecture.

    enola builds one graph of the whole system from the code, on your machine, with no AI model and no upload. Pin a baseline, and `enola check` reports only what a change introduced since then, so the problems a repository already had stay out of the report. Agents ask the same graph over MCP before they touch code, and a hook runs the check before they say they are done.
features_title: What I built in it.
features:
  - title: Architectural law, declared over the graph.
    text: |
      The constraints program is mine: a team declares the rules of its architecture, and enola checks them against the graph, the same way every time, in CI and before an edit. `enola plan` tells an agent what governs a file before it writes there, `constraints mine` proposes laws from the code a team already has, and a shareable history store powers `blame` and `diff`. It landed as a stack of five pull requests and shipped in v0.4.0, "Declared architectural law".
    media:
      kind: code
      label: "$ enola plan -paths app/billing/charge.rb ."
      caption: "Real output, on a copy of the rails-shop example from enola-guides, before the file exists."
      code: |
        Plan report for shop
        Target app/billing/charge.rb (path)
          No measured fact lives at this path — governance below covers code about to be written.
          Component billing (declared in enola/constraints/billing-is-documented.rb)
            rule billing-is-documented [ratchet]: every file of billing must be governed by a compiled page
              because: code under a decision needs the page that decided it
            rule billing-keeps-to-its-own-tables [ratchet]: billing must reach only the tables it owns
              because: a part that writes another part's table owns a bug it cannot see

        A report, never a gate: these verdicts are for the caller to weigh before editing.
  - title: Laws written as Ruby sentences.
    text: |
      A law reads like the rule a team would say out loud, with the reason next to it. Twenty-one rule forms, laws over the whole graph, a date a law starts from, and a ratchet mode that reports the breaches already there and fails only new ones. It was measured on a hundred-repository corpus before it shipped in v0.4.4.
    media:
      kind: code
      label: enola/constraints/background-jobs-never-invoke-controller-code.rb
      code: |
        Enola.architecture "shop" do
          rails

          law "background jobs never invoke controller code" do
            jobs.must_not_call controllers
            why "rendering from a job goes through ApplicationController.renderer"
            mode :ratchet
          end
        end
  - title: Findings where CI reads them, and what enola could not see.
    text: |
      Verdicts come out as text, JSON, SARIF or CI annotations, so a breach shows up where CI and reviewers already look. Every report also says what it could not see, like the excluded directory in the run above, so silence is never mistaken for a pass.
  - title: Rails, Ember and Ruby, read faithfully.
    text: |
      Ember and Glimmer extraction, so an Ember app has a route graph and resolver joins. Rails extraction with the `dead-methods` and `query-loops` explainers. The fact-provider seam that lets Prism and Rubydex read Ruby beside enola's own extractors, and in October a wave of fixes to how Ruby is resolved. Declared intent compiles into the graph, so what a team decided is checked against what the code does.
  - title: The gems that bring it to Rails teams.
    text: |
      I maintain the Ruby side: **enola**, a Ruby wrapper around the binary; **enola-rb**, the Rails layer, with `rails generate enola:install` and rake tasks to snapshot and check; **[enola-guides](/projects/enola-guides/)**, the guides, laws, skills and hooks; and **munola**, my own channel with a recipe catalogue bound by detection. From a fresh `rails new` to a caught breach takes about five seconds.
shows:
  title: How I work in open source.
  text: |
    Spec- and ADR-first, in direct collaboration with the project's maintainer. Big features arrive as stacks of pull requests a reviewer can follow one at a time, measured before they ship, and the work keeps going after the release: 44 pull requests merged between August and October 2026.

    The project's README credits me as **"the author of a large part of what this repository does."**
  link: { label: Bring this to your team, url: /services/#ai-native }
closing:
  title: Want this in your CI?
  text: I set enola up in your repositories, write the first laws with your team, and wire it into CI and your agents' hooks.
  url: /contact/#team
---
