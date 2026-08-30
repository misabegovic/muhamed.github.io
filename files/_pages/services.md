---
layout: page
title: Services
permalink: /services/
description: Consulting, workshops, and fractional AI product engineering for Rails and product engineering teams adopting AI-augmented development.
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI-augmented development consulting and training",
  "url": "https://muhamed.at/services/",
  "description": "Workshops, consulting, and fractional AI product engineering leadership for Rails and product engineering teams adopting AI-augmented development.",
  "serviceType": [
    "Team workshop: AI-augmented development for Rails teams",
    "Consulting and advisory",
    "Fractional AI product engineering lead"
  ],
  "provider": {
    "@type": "Person",
    "@id": "https://muhamed.at/#person",
    "name": "Muhamed Isabegovic",
    "email": "mailto:info@muhamed.at",
    "url": "https://muhamed.at/about/"
  },
  "areaServed": ["Remote", "Austria", "Germany", "Switzerland"]
}
</script>

I help Rails and product engineering teams adopt AI-augmented development that holds up in production.

Most teams already have the tools. What's usually missing is a working method: how to get from intent to shipped code when agents do most of the typing, without the architecture, the review culture, or the team's understanding of its own system quietly falling apart. That method is what I teach and help set up.

## Why me

- I build AI products for a living. Right now as an AI Product Developer at [Teamtailor](https://www.teamtailor.com/), before that as Technical Lead at [Carv](https://www.carv.com/), both in recruitment and HR.
- My way of working is public and documented: spec-driven development, decision records, agent workflows. This site is literally maintained by an agent running [pi-brain](https://github.com/misabegovic/pi-brain), an open source knowledge base I built for that purpose.
- I'm a core contributor to [enola](https://github.com/enola-labs/enola), an architectural regression testing tool built for AI-assisted development. Among other things I contributed the constraints program that keeps agent-written code inside the architecture you declared, and I maintain the [four gems](/about/#open-source) that bring it to Ruby and Rails teams.
- I organize [RubyConf Austria](https://www.rubyconf.at/) and organized [EuRuKo 2024](https://2024.euruko.org). I spend a lot of time with the people thinking hardest about what Rails development looks like when agents write most of the code.

## Workshop: AI-augmented development for Rails teams

A hands-on workshop for your engineering team, one or two days, run on your codebase where possible.

What we cover:

- A working loop from intent to shipped code, with specs and decision records (MADR) as the contract between humans and agents.
- Setting up coding agents for a Rails codebase: the context, skills, guardrails, and repository conventions that make agents productive instead of chaotic.
- Keeping the architecture intact by declaring architectural laws and checking them in CI, so agent-written code can't quietly erode it.
- Evaluating the AI features you ship: prompt management, datasets, scoring, observability.
- What to automate, what to keep human, and how to review agent output without rubber-stamping it.

You leave with a working setup in your own repository, not slideware.

## Consulting and advisory

Shorter engagements when you need targeted help:

- A look at how your team uses AI today, and a concrete plan for what to change.
- Setting up spec-driven workflows, decision records, and agent guardrails in your repositories.
- Architecture reviews for AI-heavy features: agent orchestration, LLM pipelines, evaluation, observability.

## Fractional AI product engineering lead

For teams shipping AI features who want senior ownership of them without a full-time hire. One to two days per week, embedded with your team. I take the AI product engineering practice end to end, from feature architecture and evaluation to how the team works with agents day to day.

## How it works

Email [info@muhamed.at](mailto:info@muhamed.at) with a few lines about your team and what you're trying to do. We start with a short call, and you'll get a scoped proposal with clear deliverables. I work remotely from Austria and on site in the DACH region.
