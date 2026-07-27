---
layout: stream-entry
title: "Rails reference apps: lessons from Campfire, Writebook, and Fizzy"
source: "Ruby on Rails reference apps"
url_external: "https://rubyonrails.org/docs/reference-apps"
type: note
date: 2026-07-27
created_at: 2026-07-27T10:00:00+02:00
tags: [rails, ruby, 37signals, best-practices, architecture, hotwire]
---

Spent more time inside the official [Rails reference apps](https://rubyonrails.org/docs/reference-apps) — Campfire, Writebook, and Fizzy — reading actual code, not just surface docs. Some deeper patterns worth keeping:

## Campfire — real-time chat

**Real-time layer**

- Multiple Action Cable channels: `RoomChannel` streams messages per room, `PresenceChannel` tracks who's online, `TypingNotificationsChannel`, `UnreadRoomsChannel`, `ReadRoomsChannel`.
- `Message::Broadcasts` handles Turbo append/remove plus a raw `ActionCable.server.broadcast("unread_rooms", ...)` for the sidebar.
- Messages broadcast themselves: `@message.broadcast_create` is called from the controller after create.

**Pagination**

- Uses `geared_pagination` with custom scopes: `page_before`, `page_after`, `last_page`. Good for chat-style "load more above/below".

**Search**

- `Message::Searchable` maintains a custom SQLite FTS index manually via `after_create_commit`/`after_update_commit`/`after_destroy_commit`. No Elasticsearch, no pgvector.

**Other**

- Web Push via VAPID keys and `web-push` gem.
- OpenGraph metadata fetching lives in `app/models/opengraph/` with `Fetch`, `Document`, `Location`, `Metadata::Fetching`.
- Bot webhooks delivered via `deliver_webhook_later`.

## Writebook — book publishing

**Delegated types for content shapes**

- A `Book` has many `Leaf` records. A `Leaf` is a container with position, status, slug.
- `Leaf` uses `delegated_type :leafable, types: %w[ Page Section Picture ]`. Each leafable type has its own table and logic, but shares ordering/search/status through `Leaf`.
- The `Leafable` concern gives each type the inverse `has_one :leaf` and delegates `title`.

**Ordering**

- `Positionable` concern implements gap-based ordering with parent-level locking and automatic rebalancing when gaps get too small.

**Content**

- Markdown-first with `redcarpet` + `rouge` for syntax highlighting, not Action Text.
- `Page`, `Section`, `Picture` each have their own controller inheriting from `LeafablesController`.

**Auth**

- Join codes for account access. Books can be public or private.

## Fizzy — kanban/issue tracking

**Multi-tenancy**

- URL-path based: `/{account_id}/boards/...`. Middleware `AccountSlug::Extractor` pulls the account slug, moves it from `PATH_INFO` to `SCRIPT_NAME`, and sets `Current.account`.
- Every model has `account_id`. Background jobs capture and restore `Current.account` automatically.

**Identity model**

- `Identity` is global (email). `User` is per-account membership. One identity can belong to many accounts. This lets a single person log in once and switch accounts.

**Domain**

- `Board` has `Column`s. `Card` has sequential numbers per account and a lifecycle: triage → columns → closed / not_now.
- `Event` is polymorphic (`eventable`) with JSON `particulars`. Events drive activity timeline, notifications, and webhooks.
- `Card::Eventable`, `Comment::Eventable`, etc. each include `Eventable` and hook into `track_event`.

**Entropy**

- Cards auto-postpone to "not now" after inactivity. Configurable at account and board level. A recurring Solid Queue job cleans stale cards hourly.

**Jobs**

- Uses Solid Queue (database-backed, no Redis). Shallow job classes delegate to model methods.
- `_later` methods enqueue, `_now` methods do the synchronous work.
- Recurring tasks configured in `config/recurring.yml`.

**Search**

- 16-shard MySQL full-text search, sharded by account ID hash. Models in `app/models/search/`.

**IDs**

- UUIDv7 primary keys, base36-encoded as 25-character strings. Fixtures use deterministic older UUIDs so `.first`/`.last` behave predictably in tests.

**Deployment**

- Kamal in production. OSS Docker image plus a private `fizzy-saas` gem for billing.

## Cross-cutting style and conventions

- **Vanilla Rails, rich models.** Controllers stay thin. Models expose intention-revealing methods like `@card.close`, `@board.cards.create!`, `@card.gild`.
- **REST resources over custom actions.** Closing a card is `Cards::ClosuresController#create`, not `post :close`.
- **Concerns for behavior slices.** `Card::Commentable`, `Card::Closeable`, `Card::Entropic`, `Message::Searchable`, `User::Mentionable`.
- **Expanded conditionals over guard clauses.** Guard clauses only at the very top or when the body is large.
- **Method ordering:** class methods, public methods with `initialize` first, private methods — all ordered by invocation order.
- **`!` only when there's a non-`!` counterpart.** Not just to signal mutation.
- **Test conventions:** use fixtures, `_path` helpers, `assert_in_body`, omit explicit `{ render }` in `respond_to`.

## What stands out

These apps don't avoid Rails features — they use delegated types, polymorphic associations, concerns, Action Cable, Turbo, Solid Queue. But they avoid adding architectural layers until the domain demands it. The result is code that reads like the product it builds.
