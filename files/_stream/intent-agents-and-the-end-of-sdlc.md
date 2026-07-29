---
layout: stream-entry
title: "Intent, agents, and the end of the SDLC"
source: "Buzz, Freeq, pi-brain, Boris Tane, Phoenix Architecture"
type: note
date: 2026-07-23
created_at: 2026-07-23T12:10:00+02:00
tags: [ai, agents, intent, workflow, sdlc, rubyconf, tools]
---

I've been obsessed with a single question: **how do you actually work with AI tools in a way that scales?**

The old software development lifecycle feels like it's collapsing. Boris Tane's ["The Software Development Lifecycle Is Dead"](https://boristane.com/blog/the-software-development-lifecycle-is-dead/) nails it: AI agents didn't make the SDLC faster, they killed it. The new loop is tighter — intent → agent → code + tests + deployment → does it work? → ship or iterate. Requirements, design, implementation, testing, review, and deployment are merging into one continuous conversation.

That shifts the bottleneck from execution to **intent management**. The skill becomes: can you articulate what you want, provide the right context, and steer the agent without micromanaging it?

I've been collecting signals around this:

- [Buzz](https://buzz.xyz/) — people, agents, and projects in one place.
- [Freeq](https://freeq.at/) — IRC with Bluesky identity, a different take on how identity and conversation flow.
- [pi-brain](https://github.com/misabegovic/pi-brain) — my own experiment in building a system that captures intent and context.
- [Ruby Native](https://rubynative.com/) — collapsing mobile delivery into a config file.

The pattern I keep seeing: **store intent, feed context, let agents execute.**

The Phoenix Architecture takes this even further. Its framing is that production truth should be a first-class input to software creation — requirements include operational constraints, telemetry gets canonicalized into evidence, and when evidence drifts, only the affected subgraph is invalidated and regenerated. A module isn't good because it once passed tests; it's good only as long as the evidence supports the claim that it satisfies the requirement. This is the intent-store idea in a different shape.

This is also a big part of why I organized [rubyconf.at](https://rubyconf.at) — I want to be closer to the people thinking seriously about what Ruby and Rails development looks like when agents are doing most of the typing.
