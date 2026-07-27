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

Spent time with the official [Rails reference apps](https://rubyonrails.org/docs/reference-apps) — Campfire, Writebook, and Fizzy — plus their agent guidelines and style guides. A few patterns worth keeping:

**Architecture**

- Vanilla Rails is plenty. Thin controllers, rich domain models. Don't reach for services or form objects as a default.
- RESTful CRUD. When an action doesn't fit a standard verb, introduce a new resource instead of adding custom actions.
- Method ordering matters: class methods, then public (with `initialize` first), then private — and order by invocation order so the flow reads top to bottom.

**Code style**

- Expanded conditionals over guard clauses, generally. Guard clauses only when the return is at the very top or the main body is non-trivial.
- Use `!` only when there's a non-bang counterpart. Don't mark destructive methods with `!` just because they're destructive.
- No newline under `private`/`protected`; indent what follows.

**Testing**

- Use existing fixtures over creating records in tests.
- Prefer `_path` helpers over `_url` unless you explicitly need the full URL.
- Use `assert_in_body` / `assert_not_in_body` instead of checking `response.body` directly.
- Omit explicit `{ render }` blocks in `respond_to` when rendering is implied.

**Async work**

- Shallow job classes that delegate to domain models.
- Use `_later` for methods that enqueue jobs, `_now` for the synchronous counterpart the job calls.

**Deployment and self-hosting**

- All three apps ship as Docker images and support self-hosting via ONCE.
- Fizzy also documents Kamal deployment.
- `bin/setup`, `bin/dev`, `bin/ci` are the standard interface.

**Fizzy-specific ideas**

- URL-path-based multi-tenancy instead of subdomains or separate databases.
- Passwordless magic-link authentication with a global `Identity` and per-account `User`.
- Events as the backbone for activity timelines, notifications, and webhooks.
- "Entropy" — cards automatically postpone after inactivity so todo lists don't rot.

Good reference material for tightening up how I build Rails apps.
