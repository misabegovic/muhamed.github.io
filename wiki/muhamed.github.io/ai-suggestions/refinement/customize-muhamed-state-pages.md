---
kind: ai-suggestion
ai_suggestion: true
status: suggested
confidence: medium
tags: [state, roadmap, muhamed.github.io, refinement]
---

# Customize the new muhamed.github.io state/roadmap/options pages

## Observation

`wiki/muhamed.github.io/{state,roadmap,options}.md` were auto-generated and currently contain only the scaffold and auto-populated lists. They lack the human-written summary sections that make `org/state.md` useful (e.g., "Where we are", "What changed recently", "What needs attention").

## Why it matters

Without custom content, the site scope pages are just indexes. A short human summary would make them useful standalone artifacts for reviewing the site's direction.

## Suggested action

1. In `state.md`, add a "Where we are" paragraph summarizing the site's current state: Jekyll site on GitHub Pages, custom domain, brain stream as homepage, pi-brain v0.4.0, Enola enabled.
2. In `roadmap.md`, add notes under "Committed" and "In shaping" explaining what is actively being driven.
3. In `options.md`, add "What we are not doing" and "Triggers for revisiting" sections with site-specific content.

Keep the brain-state markers so future regeneration preserves the lists.
