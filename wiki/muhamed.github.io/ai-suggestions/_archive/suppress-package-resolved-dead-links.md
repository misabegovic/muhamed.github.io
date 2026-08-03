---
kind: ai-suggestion
ai_suggestion: true
status: resolved
confidence: low
tags: [links, pi-brain, hybrid-clone, refinement]
---

# ✅ Suppress dead links to package-resolved resources

## Observation

`brain-links` reports **90 dead links**. Almost all of them are in `wiki/brain/*` pages that link to package-resolved paths:

- `../../../../skills/brain/SKILL.md`
- `../../../../skills/brain-shape/SKILL.md`
- `../../../../skills/brain-auto/SKILL.md`
- `../../../../prompts/brain-home.md`
- `../../../../AGENTS.md`

These files are no longer in the clone after the v0.3.0/v0.4.0 migration to package-resolved resources; they live inside `node_modules/@misabegovic/pi-brain/`.

## Why it matters

The noise drowns out any real dead links. It also makes `brain-links` less useful as a quality signal.

## Resolution

Rewrote the links. Dead links dropped from **90 to 3**:

- Package-resolved paths (`skills/`, `prompts/`, `AGENTS.md`, `sources/brain/`) now point to the upstream pi-brain GitHub repo.
- Wrong-depth relative links in `wiki/brain/records/*` and `wiki/muhamed.github.io/adrs/*` were corrected.
- `wiki/org/{state,roadmap,options}.md` were regenerated with brain-state markers.

The remaining 3 dead links are intentional source citations in `wiki/muhamed.github.io/ai-suggestions/rfcs/usput-ba-bring-your-own-agent.md`; they were converted to parenthetical `(source: ...)` citations.

## Trade-offs

Rewriting links creates local divergence from upstream template pages, but avoids waiting for a `brain-links` ignore-list feature.
