---
kind: prd
status: accepted
confidence: low
sources:
  - files/index.html
  - files/writing.md
  - files/_layouts/post.html
  - files/_layouts/default.html
---

# PRD — Unified tag filtering and search

## Problem

The site currently has inconsistent tag and search behavior:

1. **Brain cards** show tags, but clicking them does nothing useful (they populate the search box, which filters cards, but this is hidden behavior).
2. **Writing post pages** show tags that link to Jekyll's default category/tag archive pages, which is not the desired experience.
3. **Writing page** has no search, while the brain stream does.
4. **Search page** (`/search/`) exists separately but duplicates what search + tag filters on each section could provide.

## Goal

Make tags and search work consistently across Brain and Writing:

- Clicking a tag on any brain card or entry page filters the Brain stream to that tag.
- Clicking a tag on any writing post card or post page filters the Writing page to that tag.
- Both Brain and Writing pages have the same search input and "Load more" pagination behavior.
- Remove the standalone `/search/` page and its nav link.

## User stories

- As a visitor, when I click a tag on a brain card, I land on `/` with the stream filtered to that tag.
- As a visitor, when I click a tag on a writing post, I land on `/writing/` with the writing list filtered to that tag.
- As a visitor, I can type in a search box on `/writing/` to filter posts by title, excerpt, or tag.
- As a visitor, I no longer see a standalone Search link in the nav.

## Solution

### Brain stream (`/`)

- Keep existing search box and "Load more" pagination.
- Make tag clicks set the search input to the tag value and filter cards. Currently this behavior exists but is implicit; ensure it is robust and visible.
- Pass a `tag` query parameter when navigating from an entry page or external link, e.g., `/?tag=cities`. On page load, pre-populate the search input with the tag and apply the filter.

### Writing page (`/writing/`)

- Add a search input identical to the brain stream.
- Render each post card with `data-text` containing title, excerpt, and tags (lowercased).
- Add "Load more" pagination with the same batch size (6) as the brain stream.
- Pre-populate search from a `?tag=...` query parameter.

### Post page (`_layouts/post.html`)

- Replace tag links that point to category/tag archives with links to `/writing/?tag=<tag>`.
- Tags render as plain clickable chips.

### Stream entry page (`_layouts/stream-entry.html`)

- Tags already render as plain chips. Ensure they link to `/?tag=<tag>`.

### Navigation (`_layouts/default.html` and `_layouts/stream-entry.html`)

- Remove the `Search` nav link.

### Search page

- Delete `files/search.md` (or equivalent search page file).

## Technical approach

- Use URL query parameters (`?tag=...`) for tag-driven filtering so filter state is shareable and bookmarkable.
- Use JavaScript to read the query parameter, set the search input, and trigger the existing filter function.
- Keep all filtering client-side to avoid build-time complexity.
- Maintain Jekyll's static output; no server-side changes needed.

## Out of scope

- Server-side search.
- Separate tag index/archive pages.
- Cross-section search (searching both Brain and Writing at once).

## Success criteria

- [ ] Clicking a tag on a brain card filters `/` to that tag.
- [ ] Clicking a tag on a stream entry page filters `/` to that tag.
- [ ] Clicking a tag on a writing post card filters `/writing/` to that tag.
- [ ] Clicking a tag inside a writing post filters `/writing/` to that tag.
- [ ] `/writing/` has a working search input.
- [ ] Both `/` and `/writing/` have "Load more" pagination.
- [ ] Search nav link is removed.
- [ ] `/search/` page is removed or returns 404.

## Related

- [ADR: Make the brain-card stream the home page](../adrs/make-brain-cards-the-home-page.md)
- [State — muhamed.github.io](../../../org/state.md)
