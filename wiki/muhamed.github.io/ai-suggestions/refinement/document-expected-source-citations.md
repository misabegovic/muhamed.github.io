---
kind: ai-suggestion
ai_suggestion: true
status: suggested
confidence: medium
tags: [links, citations, sources, refinement]
---

# Document expected dead links from internal source citations

## Observation

`brain-links` consistently reports 3 dead links:

- `muhamed.github.io/ai-suggestions/rfcs/usput-ba-bring-your-own-agent -> files/_stream/recruitment-agents-talk-it-out-first`
- `muhamed.github.io/ai-suggestions/rfcs/usput-ba-bring-your-own-agent -> sources/conversation/2026-07-25--recruitment-agents-idea`
- `muhamed.github.io/ai-suggestions/rfcs/usput-ba-bring-your-own-agent -> sources/doc/2026-07-27--vision-md`

These are intentional inline citations to source files in the pi-brain corpus. They are correct per the citation convention but will always appear as dead links because `sources/` and `files/_stream/` are not published wiki pages.

## Why it matters

Persistent "dead links" reduce trust in the link graph. A reader running `brain-links` sees 3 failures that are not actually failures.

## Suggested action

Either:

1. **Add a dead-link ignore list to `brain-links`** for citation-style links to `sources/` and `files/_stream/` (e.g., a `citation_paths` config in `brain.config.yml`).
2. **Add a comment/note** in the RFC explaining that the 3 source links are citations and expected to show as dead, with a link to this suggestion.
3. **Convert the citations** to `(source: <path>)` parenthetical style instead of markdown links, since the brain convention supports both.
