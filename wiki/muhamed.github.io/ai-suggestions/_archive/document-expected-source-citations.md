---
kind: ai-suggestion
ai_suggestion: true
status: resolved
confidence: low
tags: [links, citations, sources, refinement]
---

# ✅ Document expected dead links from internal source citations

## Observation

`brain-links` consistently reports 3 dead links:

- `muhamed.github.io/ai-suggestions/rfcs/usput-ba-bring-your-own-agent -> files/_stream/recruitment-agents-talk-it-out-first`
- `muhamed.github.io/ai-suggestions/rfcs/usput-ba-bring-your-own-agent -> sources/conversation/2026-07-25--recruitment-agents-idea`
- `muhamed.github.io/ai-suggestions/rfcs/usput-ba-bring-your-own-agent -> sources/doc/2026-07-27--vision-md`

These are intentional inline citations to source files in the pi-brain corpus. They are correct per the citation convention but will always appear as dead links because `sources/` and `files/_stream/` are not published wiki pages.

## Why it matters

Persistent "dead links" reduce trust in the link graph. A reader running `brain-links` sees 3 failures that are not actually failures.

## Resolution

Converted the 3 markdown source links in `wiki/muhamed.github.io/ai-suggestions/rfcs/usput-ba-bring-your-own-agent.md` to parenthetical `(source: ...)` citations. `brain-links` now reports **0 dead links** from citations.
