---
layout: stream-entry
title: "Rails reference apps: lessons from Campfire, Writebook, and Fizzy"
source: "Ruby on Rails reference apps"
url_external: "https://rubyonrails.org/docs/reference-apps"
type: note
date: 2026-07-27
created_at: 2026-07-27T10:00:00+02:00
tags: [rails, ruby, 37signals, best-practices, architecture, hotwire, active-storage, sqlite, notifications, filters]
---

Spent more time inside the official [Rails reference apps](https://rubyonrails.org/docs/reference-apps) — Campfire, Writebook, and Fizzy — reading actual code, not just surface docs. Some deeper patterns worth keeping:

## Campfire — real-time chat

### Auth & sessions
- `Authentication` concern in `app/controllers/concerns/authentication.rb` restores a session from a signed permanent `:session_token` cookie, falls back to bot auth via `params[:bot_key]`, and stores a `return_to` URL for post-login redirects.
- `Session` uses `has_secure_token` and only refreshes `user_agent`/`ip_address`/`last_active_at` once per hour (`ACTIVITY_REFRESH_RATE = 1.hour`).
- `User::Role` is a tiny enum (`member`/`administrator`/`bot`); `can_administer?(record)` returns true for admins, the record's creator, or new records.

### Rooms & access
- `Room` uses STI: `Rooms::Open`, `Rooms::Closed`, `Rooms::Direct`.
- `Membership` has an `involvement` enum (`invisible` / `nothing` / `mentions` / `everything`) and `unread_at` for unread state.
- `Room.memberships` exposes `grant_to`, `revoke_from`, and `revise(granted:, revoked:)` wrapped in a transaction.
- `RoomScoped` loads `Current.user.memberships.find_by!(room_id: ...)` first, so room access is enforced by the association itself.

### Real-time layer
- Multiple Action Cable channels: `RoomChannel` streams messages per room, `PresenceChannel` tracks who's online, `TypingNotificationsChannel`, `UnreadRoomsChannel`, `ReadRoomsChannel`.
- `Message::Broadcasts` handles Turbo append/remove plus a raw `ActionCable.server.broadcast("unread_rooms", ...)` for the sidebar.
- Messages broadcast themselves: `@message.broadcast_create` is called from the controller after create.

### Attachments
- `Message::Attachment` gives `Message` `has_one_attached :attachment` with a `:thumb` variant.
- `Message.create_with_attachment!(...)` calls `process_attachment`, which analyzes the blob and builds a preview/representation (webp for video, `:thumb` for images).

### Bots & webhooks
- `User::Bot` treats bots as users with `role: :bot` and a `bot_token`; `User.create_bot!` creates the bot and an optional `Webhook`.
- `Webhook#deliver` POSTs a JSON payload (user, room, message) with a 7-second timeout, then posts the bot's text or attachment reply back into the room.
- Async via `Bot::WebhookJob`; bot replies go through `Messages::ByBotsController` with CSRF skipped for bot-key auth.

### Pagination & search
- Uses `geared_pagination` with custom scopes: `page_before`, `page_after`, `last_page`. Good for chat-style "load more above/below".
- `Message::Searchable` maintains a custom SQLite FTS index manually via `after_create_commit`/`after_update_commit`/`after_destroy_commit`. No Elasticsearch, no pgvector.

### Other
- Web Push via VAPID keys and the `web-push` gem.
- OpenGraph metadata fetching lives in `app/models/opengraph/` with `Fetch`, `Document`, `Location`, `Metadata::Fetching`.

## Writebook — book publishing

### Auth & access
- Same cookie/session pattern as Campfire; `User::Role` is `member`/`administrator`.
- `Book::Accessable` uses an `Access` join model with levels `reader`/`editor`.
- `Book` has an `everyone_access` flag; `Book.accessable_or_published` shows published books or books the current user can access.
- `Book#update_access(editors:, readers:)` uses `upsert_all` and deletes any access not in the new set.
- Join codes for account access. Books can be public or private.

### Publishing flow
- `Book` has a `published` boolean and `has_one_attached :cover`.
- `BooksController#ensure_editable` checks `Book#editable?` (editor access or admin).
- Books render HTML or Markdown (`format.md`).

### Delegated types for content shapes
- A `Book` has many `Leaf` records. A `Leaf` is a container with position, status, slug.
- `Leaf` uses `delegated_type :leafable, types: %w[ Page Section Picture ]`. Each leafable type has its own table and logic, but shares ordering/search/status through `Leaf`.
- The `Leafable` concern gives each type the inverse `has_one :leaf` and delegates `title`.

### Leaf lifecycle
- `Book#press(leafable, leaf_params)` creates a new leaf.
- `Leaf::Editable` records a new version only when the leafable body changes and the last edit is older than 10 minutes; it duplicates the leafable and re-attaches blobs.
- Leaves can be trashed (`status: trashed`) rather than deleted.

### Ordering
- `Positionable` concern implements gap-based ordering with parent-level locking and automatic rebalancing when gaps get too small.

### Markdown rendering
- Custom `ActionText::Markdown` model in `lib/rails_ext/action_text_markdown.rb` wraps Redcarpet with extensions for autolink, fenced code, tables, strikethrough, etc.
- `has_markdown :body` macro in `lib/rails_ext/action_text_has_markdown.rb` adds a polymorphic `markdown_body` association and reader/writer methods.
- `MarkdownRenderer` adds Rouge syntax highlighting, header anchor links, and lightbox-wrapped images.
- Markdown attachments use `ActionText::Markdown::Uploads` (`has_many_attached :uploads`).

### Search
- SQLite FTS `leaf_search_index` with `title` and `content` columns, maintained manually and ordered by `bm25(leaf_search_index, 2.0)`.

## Fizzy — kanban/issue tracking

### Multi-tenancy & auth
- URL-path based tenancy: `/{account_id}/boards/...`. Middleware `AccountSlug::Extractor` pulls the account slug, moves it from `PATH_INFO` to `SCRIPT_NAME`, and sets `Current.account`.
- Every model has `account_id`. Background jobs capture and restore `Current.account` automatically.
- `Identity` is global (email). `User` is per-account membership. One identity can belong to many accounts.
- `User::Role` enum: `owner`/`admin`/`member`/`system`; admin scope includes owners.
- `User::Accessor` auto-grants access to `all_access` boards and exposes `accessible_cards`/`accessible_comments` through board access.

### Board / column / card domain
- `Board` is heavy on concerns: `Accessible`, `AutoPostponing`, `Cards`, `Entropic`, `Filterable`, `Publishable`, `Triageable`.
- `Column` belongs to board, has color/position, and `cards` are `nullify` on column delete.
- `Card` status enum `drafted`/`published`; sequential `number` scoped to the account, assigned inside `account.with_lock`.
- `Card` scopes: `indexed_by` (all/closed/not_now/stalled/postponing_soon/golden) and `sorted_by` (newest/oldest/latest).
- `Card::Eventable` creates an `Event` on publish/title change and writes a system comment.
- `Event` is polymorphic (`eventable`) with JSON `particulars`. Events drive activity timeline, notifications, and webhooks.

### Notifications
- `Notifier.for(source)` dispatches by source type (`Event`, `Mention`).
- `Notifier::CardEventNotifier` picks recipients per action:
  - `card_assigned` → assignees except creator
  - `card_published` → board watchers + assignees, excluding creator/mentionees
  - `comment_created` → card watchers excluding creator/mentionees
- `Notification` is linked to a `card` and a polymorphic `source`; it calls `user.bundle(self)` when the user has email bundling enabled.
- `Notification::Bundle` aggregates unread notifications into a time window and is delivered by a recurring Solid Queue job every 30 minutes.

### Filter system
- `Filter` is a persisted query object with `Fields`, `Params`, `Resources`, `Summarized`.
- `Filter::Params` normalizes params and stores an MD5 `params_digest` for deduplication.
- `Filter::Resources` uses HABTM for tags, boards, assignees, creators, and closers.
- `Filter#cards` builds the query by chaining scopes: index/sort, assignees, creators, boards, tags, creation/closure windows, terms (mentions), and columns.
- `User::Filtering` is a presenter that prepares the UI state (boards, tags, users, saved filters).

### Import / export
- `Export` base model attaches a zip and runs `DataExportJob`.
- `Account::Export#populate_zip` iterates `Account::DataTransfer::Manifest`, which defines an ordered list of `RecordSet`s (account, users, boards, columns, cards, comments, events, notifications, Active Storage blobs/attachments/files, etc.).
- `Account::DataTransfer::RecordSet` writes one JSON file per record under `data/{table_name}/{id}.json`, imports in batches of 100, checks ID integrity, and rejects imports that would conflict with existing records.
- `Account::Import` checks or processes the zip, then reconciles `cards_count`, all-access board membership for the importer, and storage totals.
- `ZipFile` abstracts disk vs S3 streaming with `ZipKit`; exports can stream directly to S3 via multipart upload.

### Entropy & jobs
- Cards auto-postpone to "not now" after inactivity. Configurable at account and board level. A recurring Solid Queue job cleans stale cards hourly.
- Uses Solid Queue (database-backed, no Redis). Shallow job classes delegate to model methods.
- `_later` methods enqueue, `_now` methods do the synchronous work.
- Recurring tasks configured in `config/recurring.yml`.

### Search & IDs
- 16-shard MySQL full-text search, sharded by account ID hash. Models in `app/models/search/`.
- UUIDv7 primary keys, base36-encoded as 25-character strings. Fixtures use deterministic older UUIDs so `.first`/`.last` behave predictably in tests.

### Deployment
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
