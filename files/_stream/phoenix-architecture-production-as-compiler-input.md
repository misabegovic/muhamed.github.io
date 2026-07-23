---
layout: stream-entry
title: "The Phoenix Architecture: production as compiler input"
source: "The Phoenix Architecture"
url_external: "https://aicoding.leaflet.pub/"
type: note
date: 2026-07-23
tags: [ai, agents, architecture, observability, intent, systems]
---

Reading through [The Phoenix Architecture](https://aicoding.leaflet.pub/) RSS feed and it's hitting exactly the thing I've been circling around.

The core idea: **production truth should be a first-class input to software creation**, not just a source of incident alerts. Requirements include operational constraints (latency, cost, reliability). Production telemetry gets canonicalized into evidence statements attached to those requirements. When the evidence drifts, only the affected subgraph gets invalidated and regenerated.

A few lines that stuck:

> "A module is not good because it once passed tests. It is good only as long as the evidence still supports the claim that it satisfies the requirement."

> "Clean code that forgets why it exists is just a more elegant way to fail."

> "The implementation remembers. The organization forgets."

This is the intent-store idea in a different shape. The spec layer, the evidence layer, and the implementation graph are all connected. AI doesn't just write code — it regenerates code when the relationship between intent and reality breaks.

This is the direction I want pi-brain and my own workflows to move toward.
