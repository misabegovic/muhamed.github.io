---
kind: ai-suggestion
ai_suggestion: true
status: resolved
confidence: low
tags: [stream, links, wiki, refinement]
---

# Link recent stream cards into the wiki

## Observation

Several recent stream cards in `files/_stream/` explore themes that also have wiki artifacts, but the cards are not cited from wiki pages:

- Recruitment agents (`recruitment-agents-talk-it-out-first.md`, `jack-and-jill-ai-...`, `stapply-data-...`) — related to the Usput.ba RFC's agent-to-agent thread.
- `agents-in-durable-objects-...` — related to pi-brain 0.4.0 background-task/agent discussions.
- `pi-brain-0-4-0-enola-...` — related to the v0.4.0 record.

## Why it matters

Stream cards are published on the site but not integrated into the brain's permanent layer. Adding wiki citations would make the stream cards discoverable from the relevant decisions and records.

## Resolution

Added external stream-card links:

- `wiki/muhamed.github.io/ai-suggestions/rfcs/usput-ba-bring-your-own-agent.md` → recruitment agents, Jack & Jill, Stapply Data, Agents in Durable Objects.
- `wiki/muhamed.github.io/records/update-pi-brain-v0-4-0-hybrid-clone.md` → pi-brain 0.4.0 Enola card, Agents in Durable Objects.
