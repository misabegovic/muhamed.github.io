---
layout: stream-entry
title: "Herdr: an agent multiplexer"
source: "Herdr"
url_external: "https://herdr.dev/"
type: note
date: 2026-07-23
created_at: 2026-07-23T12:20:00+02:00
tags: [ai, agents, tools, terminal, workflow]
---

[Herdr](https://herdr.dev/) looks interesting: "one terminal for the whole herd." It's pitched as what tmux is to terminals, but for coding agents.

The idea is to run all your agents from one terminal, on any machine, over SSH. Each agent gets its own real terminal on a server that keeps it alive when you close your laptop. You can see states like blocked, working, and done at a glance, and reattach from another device.

This could be a useful piece of the "intent + context + agents" workflow I'm thinking about — a persistent place where long-running agent work lives, instead of losing state every time a local session ends.
