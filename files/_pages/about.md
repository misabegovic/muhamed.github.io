---
layout: about
title: About
permalink: /about/
description: Muhamed Isabegovic is a product engineer and technical lead, AI-native, based in Vienna. He builds products, leads the teams that ship them, and helps companies become AI-native. Author of pi-brain and core contributor to enola.
---

I have spent 10+ years in the industry taking ownership of products and the teams that build them, from deciding what to build to running it in production, anywhere in the stack. I have built trading systems in C++, SaaS products in Rails and AI features in hiring software.

Most recently I built AI screening features for Teamtailor's Co-pilot team. Before that I was tech lead for a team of 10 engineers at Recrubo, through its acquisition by Carv.

On [Usput.ba](https://usput.ba), my own travel guide to Bosnia and Herzegovina, I work as an AI engineer. Descriptions, audio tours and itineraries are generated from real place data rather than from the model's memory, and it is where I try new AI features on real users first.

Lately I also work one layer up, with agents writing the code. I build open-source tools that keep that reliable. [pi-brain](https://github.com/misabegovic/pi-brain) holds the specs and decisions the code is regenerated from, and runs this site. [enola](https://github.com/enola-labs/enola) checks code against architecture rules; I am a core contributor and maintain four gems that bring it to Ruby and Rails teams.

I also help companies become AI-native, in how they build and in what they build; see [Services](/services/).

## Career Overview

- (2024 - present) Founder, own company (Isabegovic Muhamed), Vienna: alongside Meisterlabs in 2024, my main work since 2025
  - Technical Lead @ [Recrubo](https://recrubo.ai), acquired by [Carv](https://www.carv.com/)
  - AI Product Developer @ [Teamtailor](https://www.teamtailor.com/), Co-pilot team
  - Founder and organiser @ [EuRuKo 2024](https://2024.euruko.org) and [RubyConf Austria](https://www.rubyconf.at/)
  - AI Engineer @ [Usput.ba](https://usput.ba), my own product
- (2021 - 2024) Senior Software Engineer @ [Meisterlabs](https://www.meisterlabs.com/)
- (2019 - 2021) Lead Software Engineer @ [Experfy](https://www.experfy.com/)
- (2018 - 2019) Software Engineer @ [Marvelsoft](https://marvelsoft.net/)
- (2016 - 2017) Junior Software Engineer @ [Experfy](https://www.experfy.com/)

## Education and languages

- Master's studies in Software Engineering and Internet Computing, and Business Informatics, at [TU Wien](https://www.tuwien.ac.at/), part-time alongside work, since 2022
- BSc in Information Technology, IPI Akademija Tuzla
- Bosnian (native), English (full professional), German (limited working), Spanish (elementary)

## Specialties

- AI product engineering (RAG, LLM pipelines, evals, structured outputs)
- AI agents and MCP, with guardrails for agent-written code
- Spec-driven development
- Software architecture and design
- Technical leadership and engineering management
- Community building and conference organising

## Open source

- [pi-brain](https://github.com/misabegovic/pi-brain): a cloneable, agent-maintained knowledge base. This site runs on a clone of it.
- Core contributor to [enola](https://github.com/enola-labs/enola): architectural regression testing for AI-assisted development. My contributions include the constraints program and its verdict vocabulary, `plan` and `constraints mine`, the fact-provider seam and its providers, the history store behind `blame` and `diff`, declared intent compiling into the graph, Ember support, the Rails extraction work (`dead-methods`, `query-loops`), the Ruby DSL for writing laws as sentences, and the verdict writers that put findings where CI reads them (see the project's [acknowledgements](https://github.com/enola-labs/enola#acknowledgements)).
- Maintainer of four enola gems:
  - [enola](https://rubygems.org/gems/enola): pure-Ruby wrapper over the released enola binary, with the Ruby providers (Prism, Rubydex) on by default.
  - [enola-rb](https://rubygems.org/gems/enola-rb): the Rails layer. A generator plus `enola:init`, `enola:snapshot`, and `enola:check`; a fresh `rails new` goes from nothing to a caught architecture breach in seconds.
  - [enola-guides](https://rubygems.org/gems/enola-guides): the content layer. Guides, a catalogue of architectural laws, worked examples, agent skills, and CI tooling.
  - [munola](https://rubygems.org/gems/munola): my own channel on top of enola, with a built-in recipe catalogue bound by detection.

## Tech stack

{% for group in site.data.home.stack %}- **{{ group.group }}:** {{ group.items | map: "name" | join: ", " }}
{% endfor %}

## Things I love

- My family
- Committing to a good cause
- Good people & good stories
- Movies (since I was very little)
- Coffee
- Ruby (Community)


