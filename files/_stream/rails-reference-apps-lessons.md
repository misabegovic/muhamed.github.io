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

Spent time with the official [Rails reference apps](https://rubyonrails.org/docs/reference-apps) — Campfire, Writebook, and Fizzy — reading code, not just READMEs. A few patterns worth keeping:

**Architecture and domain modeling**

- **Vanilla Rails, rich domain.** Thin controllers invoke plain model methods. Services or form objects appear, but they’re not a default layer — they’re used when justified and treated as ordinary objects.
- **Concerns for focused behavior.** Fizzy splits `Card` into `Card::Eventable`, `Card::Commentable`, `Card::Closeable`, `Card::Entropic`, etc. Each concern owns one slice of behavior. Same pattern in Campfire: `Message::Broadcasts`, `Message::Searchable`, `User::Mentionable`.
- **Polymorphic event stream.** Fizzy’s `Eventable` concern gives any model `has_many :events, as: :eventable`. `track_event` builds action names from the model class. Events drive timelines, notifications, webhooks, and even activity-spike detection.
- **Delegated types for shared containers.** Writebook uses a `Leaf` container with `delegated_type :leafable, types: [Page, Section, Picture]`. One table for ordering/search/status, separate tables for each content shape.
- **Request-scoped identity with `Current`.** `Current.user`, `Current.account` are used everywhere — controllers, models, background jobs — so context doesn't have to be threaded through every method call.

**Controllers and routing**

- **Resources over custom actions.** Fizzy has `Cards::ClosuresController`, `Cards::Comments::ReactionsController`, `Boards::PublicationsController`. A state change becomes a new resource with `create`/`destroy`, not a custom `post :close`.
- **Nested RESTful resources.** `cards/1/comments/2/reactions`, `boards/1/columns/2/cards`. The URL structure mirrors the domain.
- **Turbo Stream as a first-class format.** Controllers routinely respond with `format.turbo_stream` and `format.json`, treating server-rendered partial updates as normal.

**Code style and conventions**

- **Expanded conditionals over guard clauses.** Fizzy’s style guide prefers `if/else` unless the guard is at the very top or the main body is large.
- **Method ordering by invocation order.** Public methods are ordered so the code reads top-to-bottom. Private methods follow the same rule.
- **`!` only with a non-bang counterpart.** Don’t mark destructive methods with `!` just because they mutate.
- **Visibility modifiers indented, no blank line underneath.**

**Testing**

- Use existing fixtures over creating records in tests.
- Prefer `_path` helpers unless you need the full URL.
- Use `assert_in_body` / `assert_not_in_body` instead of `assert_includes response.body`.
- Omit explicit `{ render }` in `respond_to` when rendering is implied.

**Async work**

- Shallow job classes that delegate to domain models.
- `_later` methods enqueue jobs; `_now` methods do the synchronous work the job calls.

**Deployment and self-hosting**

- All three apps ship as Docker images and support self-hosting via ONCE.
- Fizzy also documents Kamal deployment.
- `bin/setup`, `bin/dev`, `bin/ci` are the standard interface.

**Specific tricks worth stealing**

- **Writebook’s `Positionable` concern** — gap-based ordering with automatic rebalancing, using parent-level locking.
- **Campfire’s `Message::Searchable`** — talks directly to a SQLite FTS index instead of adding a search dependency.
- **Fizzy’s URL-path multi-tenancy** — `/{account_id}/boards/...` with middleware extracting the slug into `Current.account`.
- **Fizzy’s entropy system** — cards automatically postpone after inactivity so boards don't rot.

Good reference material for tightening up how I build Rails apps.
