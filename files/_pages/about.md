---
layout: about
title: About
permalink: /about/
description: Muhamed Isabegovic is a Staff Engineer, based in Vienna. He builds open-source tools for teams that write code with AI agents, and works with teams through his own company.
---

I have spent 10+ years in the industry taking ownership of products and the teams that build them, from deciding what to build to running it in production, anywhere in the stack. I have built trading systems in C++, SaaS products in Rails and AI features in hiring software.

I currently work as a Staff Engineer at Symphony, through my company. Before that I built AI screening features for Teamtailor's Co-pilot team, and was tech lead for the engineering team at Recrubo, through its acquisition by Carv.

On [Usput.ba](https://usput.ba), my own travel guide to Bosnia and Herzegovina, I work as an AI engineer. Descriptions, audio tours and itineraries are generated from real place data rather than from the model's memory, and it is where I try new AI features on real users first.

Lately I also work one layer up, with agents writing the code. I build open-source tools that keep that reliable. [pi-brain](https://github.com/misabegovic/pi-brain) holds the specs and decisions the code is regenerated from, and runs this site. [enola](https://github.com/enola-labs/enola) checks code against architecture rules; I am a core contributor and maintain four gems that bring it to Ruby and Rails teams.

I also help companies become AI-native, in how they build and in what they build; see [Services](/services/).

My career, education, languages and full skill set are on [my CV](/cv/).

## Open source

- [pi-brain](https://github.com/misabegovic/pi-brain): a cloneable, agent-maintained knowledge base. This site runs on a clone of it.
- Core contributor to [enola](https://github.com/enola-labs/enola): architectural regression testing for AI-assisted development. My contributions include the constraints program and its verdict vocabulary, `plan` and `constraints mine`, the fact-provider seam and its providers, the history store behind `blame` and `diff`, declared intent compiling into the graph, Ember support, the Rails extraction work (`dead-methods`, `query-loops`), the Ruby DSL for writing laws as sentences, and the verdict writers that put findings where CI reads them (see the project's [acknowledgements](https://github.com/enola-labs/enola#acknowledgements)).
- Maintainer of four enola gems:
  - [enola](https://rubygems.org/gems/enola): pure-Ruby wrapper over the released enola binary, with the Ruby providers (Prism, Rubydex) on by default.
  - [enola-rb](https://rubygems.org/gems/enola-rb): the Rails layer. A generator plus `enola:init`, `enola:snapshot`, and `enola:check`; a fresh `rails new` goes from nothing to a caught architecture breach in seconds.
  - [enola-guides](https://rubygems.org/gems/enola-guides): the content layer. Guides for Rails, Ember, Python, TypeScript, Go and Rust, a catalogue of architectural laws, worked examples, agent skills, and CI tooling; also one command on npm, PyPI, crates.io, Go and Homebrew.
  - [munola](https://rubygems.org/gems/munola): my own channel on top of enola, with a built-in recipe catalogue bound by detection.

## Things I love

- My family
- Committing to a good cause
- Good people & good stories
- Movies (since I was very little)
- Coffee
- Ruby (Community)


