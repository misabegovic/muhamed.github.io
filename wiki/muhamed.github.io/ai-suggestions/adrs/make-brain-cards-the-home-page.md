---
kind: decision
status: ai-suggested
confidence: low
sources:
  - files/index.html
  - files/brain-cards.md
  - files/brain-index.md
---

# Make the brain-card stream the home page

## Context

After prototyping four design directions for a public "brain stream" on `muhamed.at`, the user selected the card-based design titled **"Peek into my brain."** The next step is to promote it from a local prototype to the production home page while preserving the existing blog posts and site navigation.

Current state:
- Home page (`/`) shows paginated blog posts from `files/index.html`.
- Prototype pages exist at `/brain/`, `/brain-cards/`, `/brain-minimal/`, `/brain-book/`, and `/brain-window/`.
- A `_stream` Jekyll collection holds individual entry pages at `/brain/:slug/`.

## Decision

Promote the card stream to production as follows:

1. **Replace the home page** (`files/index.html`) with the card-stream layout. Title: "Peek into my brain." The home page now surfaces the `_stream` collection as the primary content.
2. **Move blog post discovery** to a dedicated page at `/posts/` (or `/writing/`), using a similar card-based layout for consistency. Update the site navigation to link to `/posts/` instead of showing posts on the home page.
3. **Retire prototype routes:**
   - Remove `/brain/` prototype index page (`files/brain-index.md`).
   - Remove `/brain-cards/` prototype page (`files/brain-cards.md`).
   - Optionally remove `/brain-minimal/`, `/brain-book/`, and `/brain-window/` prototype pages, or keep them temporarily under a hidden `/prototypes/` path for reference.
4. **Keep individual entry pages** at `/brain/:slug/` from the `_stream` collection. These are the permalink destinations for each card.
5. **Update site navigation** in the default layout to include a link to the new `/posts/` page and remove any prototype-only links.
6. **Production checklist:**
   - Ensure all pages build without errors.
   - Ensure search and tag filtering still works on the home page.
   - Update RSS/feed configuration if needed (currently `jekyll-feed` generates from posts; decide whether to include stream entries).
   - Remove or update the sample data in `_stream/` and replace with real content before publishing.

## Alternatives considered

1. **Keep the home page as blog posts and add `/brain/` as a separate section.**
   - *Trade-off:* Less disruptive, but does not match the user's intent to make the brain stream the primary landing experience.

2. **Show both streams on the home page (posts + brain cards).**
   - *Trade-off:* Keeps everything on one page, but risks visual clutter and dilutes the "peek into my brain" focus.

3. **Make `/brain-cards/` the home page via redirect or canonical, keep `/brain/` as index.**
   - *Trade-off:* Preserves prototype URLs, but adds unnecessary indirection. Retiring the prototypes keeps the URL space clean.

## Consequences

- The home page becomes a living, curated window into what the user finds interesting.
- Blog posts remain discoverable on a dedicated page with consistent card styling.
- The URL space is cleaned up by removing prototype routes.
- The `_stream` collection becomes a first-class content type alongside posts.

## Scope

- `files/index.html` — replace content.
- `files/_layouts/default.html` — update navigation.
- New `files/posts.md` (or `files/writing.md`) — blog post discovery page.
- Remove `files/brain-index.md` and `files/brain-cards.md`.
- Optionally remove `files/brain-minimal.md`, `files/brain-book.md`, `files/brain-window.md`.
- `files/_config.yml` — already includes the `stream` collection.

## Open questions

1. What should the blog post discovery page URL be? `/posts/`, `/writing/`, `/blog/`, or `/notes/`?
2. Should the RSS feed include stream entries, or only blog posts?
3. Should we keep the prototype pages under `/prototypes/` temporarily, or delete them entirely?

## Related

- [RFC: Design directions for muhamed.at sharing section](../rfcs/muhamed-at-sharing-section-design.md)
- [ADR: Convert repo to pi-brain clone and deploy site via GitHub Actions](../adrs/convert-repo-to-pi-brain-actions.md)
