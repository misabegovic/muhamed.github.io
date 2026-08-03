---
kind: ai-suggestion
ai_suggestion: true
status: suggested
confidence: medium
tags: [links, pi-brain, hybrid-clone, refinement]
---

# Suppress dead links to package-resolved resources

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

## Suggested action

Either:

1. **Add an ignore list to `brain-links`** so package-resolved paths don't count as dead in hybrid clones. The ignore patterns could be driven by `brain.config.yml` or a `.brain/dead-link-ignore` file.
2. **Rewrite the links** in `wiki/brain/*` pages to point to the upstream pi-brain repository on GitHub (e.g., `https://github.com/misabegovic/pi-brain/blob/main/skills/brain/SKILL.md`). This makes them clickable and valid, but creates local divergence from upstream template pages.

## Trade-offs

- Ignore list: clean, low maintenance, but requires a tool change.
- Rewrite links: no tool change, but every upstream wiki page with package-resolved links becomes a local override.
