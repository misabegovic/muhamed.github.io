---
layout: stream-entry
title: "Agents in Durable Objects: host small, cheap, specialized agents"
source: "Miguel Salinas / @Vercantez"
url_external: "https://x.com/Vercantez/status/2082138839888589200"
type: note
date: 2026-07-29
created_at: 2026-07-29T10:00:00+02:00
tags: [ai, agents, pi, cloudflare, durable-objects, code-mode, hosting]
---

[Miguel Salinas](https://x.com/Vercantez) shared that [Camel AI](https://x.com/useCamelAI) rewrote their agent to run **entirely in a Cloudflare Durable Object**, using Pi, the Agents SDK, and Code Mode. The shift: instead of generating bash, the agent writes JavaScript that gets executed through Code Mode and Cloudflare's dynamic Worker loaders.

That framing feels like a bigger deal than one product rewrite.

**Host agents as small, long-lived workers.** A Durable Object gives you state, coordination, and a single-threaded execution context close to the edge. An agent that lives there isn't a chat window — it's a persistent process that can think, act, and remember cheaply.

**Specialize and split.** Rather than one expensive generalist model doing everything, you could run a fleet of narrow agents:

- One agent that only scrapes and normalizes job postings.
- One that only drafts outreach messages.
- One that only negotiates calendar slots.
- One that only reviews code diffs.

Each can be small, fast, and cheap because it doesn't need world knowledge — just the right tools and a tight prompt. A thin orchestrator routes tasks to the right specialist.

**Code Mode as the runtime.** If the agent writes JS/TS instead of shell, execution becomes sandboxed, portable, and observable. It also maps nicely to "shape your own tools" — the agent isn't calling fixed functions, it's generating the function that solves this specific task.

The open question is where the line between orchestrator and worker should sit. Too much central planning and you recreate a monolithic model; too little and you have a hard-to-debug swarm. But the pieces — Durable Objects, Code Mode, cheap small models — are there to make narrow agents practical now.

(source: [X post](https://x.com/Vercantez/status/2082138839888589200) + [article](https://x.com/i/article/2082137754788646912))
