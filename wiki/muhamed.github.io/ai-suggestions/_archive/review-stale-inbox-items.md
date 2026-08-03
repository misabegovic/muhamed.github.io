---
kind: ai-suggestion
ai_suggestion: true
status: resolved
confidence: low
tags: [inbox, grooming, refinement]
---

# ✅ Review stale inbox items

## Observation

`wiki/_state/inbox.md` currently holds 2 source-capture items that have been queued for a while:

1. `claude-as-contributor-ai-and-the-commons` (2026-07-29) — merged into the Matz-is-nice stream card; waiting for thread developments (Ruby contributor stats, Codeberg moderation cases, policy response).
2. `po-ru-matz-is-nice-ruby-governance` (2026-07-29) — stream card published; waiting for Rails fork or Ruby governance developments.

Both have explicit "wait for" conditions.

## Why it matters

Inbox items that are blocked on external events can sit indefinitely. Without periodic review, the inbox becomes a low-signal dumping ground.

## Resolution

Moved both items to a "Blocked on external developments" section in `wiki/_state/inbox.md` with `review_after: 2026-09-01`. No synthesis needed until the Rails fork / Ruby governance situation or the AI-commons policy thread develops.
