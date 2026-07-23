---
kind: rfc
status: ai-suggested
confidence: low
---

# RFC — Design directions for a public "brain stream" on muhamed.at

## Context

The user wants to upgrade `muhamed.at` from a static profile into a public window into what they find interesting. From the shaping conversation so far:

- **Content:** All of it — links, articles, books, podcasts, videos, quotes, tweets, own notes.
- **Organization:** Chronological stream plus topic collections, with full-text search.
- **Workflow:** Git-based; the user tells the agent to add items and the agent maintains the repo.
- **Audience:** Everyone — hiring managers, peers, friends, internet wanderers, specific communities, and the user's future self.

The design challenge is balancing professionalism with personality, and eclecticism with navigability.

## Design directions

### Option A — Minimal Reading Log

A single column of entries, newest first. Each item is a line or short paragraph: title, source, one-line note, date, tags. Lots of whitespace. Serif or clean sans-serif body. No images. Search and tag filters are small and unobtrusive.

**Best for:** Hiring managers and readers who want density and scanability. Feels like a well-kept notebook.

**Trade-offs:**
- **Pros:** Fast to implement, works well on all devices, easy to maintain, emphasizes the writing/thinking over visuals.
- **Cons:** Can look dry if the commentary is short; less visually distinctive.

**Implementation notes:**
- Add a `_data/stream.yml` or a collection `_stream/`.
- One Jekyll layout: `stream.html` with Liquid loops for entries, tags, and search via a small JS index.
- Search can use `lunr.js` or a pre-generated JSON index.

---

### Option B — Card Stream

A responsive grid of cards. Each card shows a title, source domain, optional thumbnail, short excerpt or note, date, and topic chips. Filters at the top. Clicking a card expands to the full entry or opens the original link.

**Best for:** Visual browsing and a broad internet audience. Feels like a curated Pinterest or Are.na board.

**Trade-offs:**
- **Pros:** Scales to many content types, visually engaging, easy to scan by topic.
- **Cons:** Thumbnails require fetching or manual adding; more CSS work; can feel cluttered if cards are inconsistent.

**Implementation notes:**
- Same data source as Option A, but render as grid cards.
- Thumbnails: optional `image:` frontmatter; fallback to a solid color or icon per content type.
- Search and filters via JS.

---

### Option C — Commonplace Book

Quote-forward, poetic layout. Large pull quotes mixed with short commentary. Entries grouped by theme or season. Generous margins, maybe a warm paper-like background. Feels like a physical journal left open on a desk.

**Best for:** Showing how the user thinks and what resonates with them. Strong personality.

**Trade-offs:**
- **Pros:** Highly memorable, surfaces the emotional/intellectual core of each item.
- **Cons:** Not every item has a quotable excerpt; harder to scan quickly; may feel too artistic for some hiring contexts.

**Implementation notes:**
- Entries need an optional `quote:` field in frontmatter.
- Layout alternates between quote-heavy and link-heavy entries.
- Typography is the main design tool.

---

### Option D — Curated Window (hybrid)

A landing page that feels like a room: a short intro, a "now" or "recently" section, topic-based collections, and a full stream behind a tab or scroll. Mixes Option A's density with Option C's quotability and Option B's topic filters. Professional by default, personal on closer inspection.

**Best for:** The stated audience of "all of it and more." Hiring managers see a tidy recent stream; friends can wander into topic collections.

**Trade-offs:**
- **Pros:** Flexible, grows with the content, gives every audience a front door.
- **Cons:** More pages and layouts to maintain; risk of being everything to everyone.

**Implementation notes:**
- New top-level section: `/brain/` or `/stream/`.
- Sub-pages: `/brain/stream/`, `/brain/topics/`, `/brain/quotes/`.
- Index page shows recent items + featured topics + a search box.

## Recommendation

**Option D — Curated Window** best fits the mixed audience and the "all content types" requirement. It can start simple (one stream page) and grow into topic pages and a quote garden.

## Open questions

1. What should the section URL be? `/brain/`, `/stream/`, `/links/`, `/garden/`, something else?
2. Should search be client-side only, or do we want a server-side search later?
3. How important are thumbnails and images?
4. Should there be an RSS or Atom feed?
5. Should each item have its own permalink page?

## Related

- [ADR: Convert repo to pi-brain clone and deploy site via GitHub Actions](../adrs/convert-repo-to-pi-brain-actions.md)
- [State — muhamed.github.io](../../../org/state.md)
