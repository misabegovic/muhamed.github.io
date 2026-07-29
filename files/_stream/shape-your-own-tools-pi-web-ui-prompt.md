---
layout: stream-entry
title: "Shape your own tools: a prompt instead of a repo"
source: "Internal note"
type: note
date: 2026-07-25
created_at: 2026-07-25T23:55:00+02:00
tags: [ai, agents, pi, prompts, tools, tailscale, self-hosting, ideas]
---

Someone asked [@dodoreach](https://x.com/dodoreach) to open source their web UI for the [Pi](https://pi.dev/) coding agent. The answer stuck with me more than any repo could:

> the best thing @pidotdev taught me is that learning to shape your own tools is better than accepting someone elses finished product

So instead of a repo, they shared a **one-shot prompt**: paste it into your agent and it builds you your own "codex-style" dashboard for Pi — pick a project, create or resume native Pi sessions, watch text, thinking, and tool activity stream in, steer mid-run, queue follow-ups, stop, switch models — from desktop or your phone, privately over Tailscale Serve. The browser is only a control surface; Pi stays the agent and the source of truth.

What I find remarkable is how much engineering judgment is packed into the prompt itself. It doesn't just describe an app, it encodes discipline: verify the real environment before coding, pin the SDK to the installed CLI version, keep the integration behind a typed adapter with a deterministic fake so tests never burn tokens, bind to `127.0.0.1` as the security boundary, no telemetry, no public hosting. A prompt like that is a spec, a threat model, and a teaching document at once. Prompts might be the new way to open source.

The energy of the follow-up post sells it better than any feature list — using Pi to build a mobile companion for a Pi app: *"going camping now but you are coming with me buddy."*

Note to self: I need to do the same for myself. Run the prompt against my own Pi setup, shape the tool to my hands, and take my agent camping.
