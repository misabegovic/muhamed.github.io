---
layout: stream-entry
title: "Pi has way more extension surface than pi-brain uses"
source: "Pi docs"
type: note
date: 2026-07-27
created_at: 2026-07-27T14:00:00+02:00
tags: [pi, pi-brain, extensions, agents, architecture]
---

I ingested the Pi extension docs to understand what else pi-brain could tap into. The short answer: a lot.

Right now pi-brain is mainly using `registerTool`, `registerCommand`, `sendUserMessage`, `session_start`, `session_tree`, and `before_agent_start`. After reading the docs, the most interesting untapped pieces for a knowledge-base extension are:

**Compaction harvest** — `session_before_compact` lets you inspect the messages about to be dropped and write a batched summary back into the session. This is the obvious place to extract decisions, constraints, and open questions before they vanish from context. The docs describe the exact entry format and how to return a custom compaction summary.

**Context injection** — the `context` event fires before every LLM call and can inject extra messages. That means pi-brain could pull relevant records from the corpus and prepend them without waiting for the user to ask. Risky if overused, but powerful for grounding the agent.

**Tool result interception** — `tool_result` can modify what the model sees after a tool runs. pi-brain could use this to attach citations, warn when a tool output is large, or enrich a result with related wiki links.

**Entry renderers** — `registerEntryRenderer` lets an extension control how custom entries appear in the TUI. pi-brain could render status cards, inbox summaries, or brain widgets inline instead of just printing text.

**Shortcuts and flags** — `registerShortcut` and `registerFlag` could give brain commands real keybindings and CLI options, not just `/brain:*` slash commands.

**Event bus** — `pi.events` lets extensions communicate. That matters if pi-brain ever splits into smaller extensions or wants other extensions to react to brain state changes.

**Session shutdown** — `session_shutdown` is the right place to flush any in-memory state or close resources. Right now pi-brain does cleanup opportunistically; this would make it explicit.

The biggest opportunity is probably **compaction harvest** because it turns the session's own forgetting into a capture mechanism. The risk is noise: a bad harvest floods the inbox and trains the user to ignore it. The docs suggest starting with a heuristic and measuring signal-to-noise before making it automatic.

Next step is probably a small experiment: hook `session_before_compact`, extract anything that looks like a decision or open question, and write it to a draft inbox item for review.
