---
layout: stream-entry
title: "Four gems, one upstream merge, ten pull requests: the enola week"
source: "brain record, 22 and 23 August 2026"
url_external: "https://rubygems.org/gems/munola"
type: note
date: 2026-08-23
created_at: 2026-08-23T12:30:00+02:00
tags: [enola, ruby, rails, architecture, gems, open-source, archspec, rubydex, prism]
---

A peek into the brain's record of the last two days, because it was a lot.

**What I released.**

- [enola-guides](https://rubygems.org/gems/enola-guides) 0.1.0 to 0.3.1: the content layer for enola, Rubyists first. Twelve guides, a catalogue of 26 laws one directory each, worked examples (a Rails shop in the Ruby DSL with Prism and Rubydex as providers, an Ember app bound to a conventions recipe, a knowledge base with anchored pages and receipts), nine agent skills, four hook templates, the CI check script with its comment renderer, and five recipes a team binds with one command. Every law in the catalogue carries the number it held at on a real Rails monolith.
- [enola](https://rubygems.org/gems/enola) 0.4.4: a pure-Ruby wrapper over the released enola. Fetches the binary for your platform on first use, verifies it against the release's checksums, caches it, forwards every command and exit code, and turns both Ruby providers (Prism, Rubydex) on by default. Nothing compiles at install; offline with an empty cache it refuses by name.
- [enola-rb](https://rubygems.org/gems/enola-rb) 0.4.4: the Rails layer. A generator that writes a first architecture declaration from the guides' starter laws and binds the recipes whose roles resolve, plus `enola:init`, `enola:snapshot`, `enola:check`. A fresh `rails new` goes from nothing to a caught breach in about five seconds.
- [munola](https://rubygems.org/gems/munola) 0.4.4.1: my own channel on top of enola. The same wrapper pointed at my fork's releases, with the recipe catalogue built in and bound by detection (an Ember build, a schema and models, routes and policies, maintenance tasks, a tenant column most tables share). It is my taste on top of enola, offered upstream where it fits. Not a competitor.

**What landed upstream.** [enola-labs/enola#247](https://github.com/enola-labs/enola/pull/247) merged on the 22nd and shipped in v0.4.4 the next morning: a Ruby DSL where a law reads as a sentence, 21 rule forms including the ones only a graph can state (one owner per table, storage stays home, mutations reach a policy, laws across repositories, intent pages compiled into the graph), recipes with role defaults, `since` and `growth` as a time dimension, the smallest cut suggested beside every breach, Rubydex built into the binary beside Prism, and "declared" meaning untouched by the change, read from git. Measured before it shipped on a hundred-repository corpus and a 1.7-million-fact monolith.

**What is waiting for review.** Ten pull requests on [crmne/archspec](https://github.com/crmne/archspec/pulls), #10 to #19, a reviewed stack where each builds on the last: `except:` on components and class-side protocols (the maintainer's own counter-proposal), torture expectations as judged per-diagnostic verdicts, a facts directory with `reflect` and a static association producer that resolves `belongs_to` without booting and without an inflector (100% precision against a booted app), the graph persisted as a snapshot with a baseline so a change is graded instead of the whole tree failed, a reason, a date and a cut on every finding, constants resolving through ancestry in Ruby's own order, facts format 2 and a Rubydex producer, GitHub annotations and SARIF output, an `explain` that answers incoming edges and blast radius, a second resolver converging with the parser inside `check` (on Discourse 21,144 references converge and one disagrees, where Rubydex is right), and constraints on top of Rubydex: gem code a component can own, receiver-typed calls, the engine's ancestry for protocols, signatures, aliases. Every level passes the project's own tests, its architecture self-check on Ruby 3.1 to 4.0, and its torture suite over Discourse, Fizzy and Mastodon.

The thread through all of it: a graph taught a linter, and the linter taught the graph back. Ten bets for enola came out of grading archspec with it, each falsified with a number before anyone bet.
