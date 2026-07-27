---
layout: stream-entry
title: "Bring your own agent to Usput.ba"
source: "Internal note"
type: note
date: 2026-07-27
created_at: 2026-07-27T13:00:00+02:00
tags: [usput, agents, mcp, travel, ai, ideas, platform]
---

Been thinking about the "bring your own agent" idea and how it could apply to [Usput.ba](https://usput.ba).

The future of human communication feels less like app-to-human and more like **agent-to-agent**: you have your own AI that handles the tedious parts — asking questions, comparing options, negotiating, rescheduling. Why shouldn't travel work the same way?

For Usput.ba, that means exposing the platform through an **MCP server** so a traveler's personal agent can talk to our Platform agent directly. The agent asks, plans, and negotiates; the human just approves the final proposal.

What changes:

- **Travelers** can plan in natural language across destinations, experiences, and constraints ("4 days in October, family with a toddler, wheelchair accessible").
- **Preferences** that search forms suck at — "quiet mountain towns with good coffee," "no crowds," "pet-friendly" — become queryable because an agent can iterate.
- **Cross-service trips** get easier: the agent combines Usput.ba data with flights, weather, calendar, and hotels in one conversation.
- **Custom deals** like "private Una rafting for 8 people on July 14th" can be negotiated agent-to-agent before a human sees the final offer.
- **Local providers** can answer repeat questions and manage availability through an agent instead of a dashboard.
- **Usput.ba** becomes the canonical structured data source for Bosnian tourism; generic travel AIs ground themselves here instead of hallucinating.

The smallest safe step is a read-only MCP for travelers. Agent-to-agent negotiation and provider-facing agents come later.

Draft RFC saved at `wiki/muhamed.github.io/ai-suggestions/rfcs/usput-ba-bring-your-own-agent.md`.
