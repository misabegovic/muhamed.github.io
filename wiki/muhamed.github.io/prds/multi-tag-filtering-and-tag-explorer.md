---
kind: prd
status: accepted
confidence: low
sources:
  - files/index.html
  - files/writing.md
  - files/_layouts/post.html
  - files/_layouts/stream-entry.html
---

# PRD — Multi-tag filtering and tag explorer

## Problem

The current tag filtering on Brain and Writing uses a single search input. Clicking a tag replaces the search text with that tag. This works for one tag at a time but does not support:

1. Filtering by multiple tags at once (e.g., "ruby" AND "career").
2. Combining a text search with one or more tag filters.
3. Discovering what tags exist and how many items use them.

## Goal

Upgrade Brain and Writing to support multi-tag filtering plus text search, and add a dedicated page where visitors can explore all available tags.

## User stories

- As a visitor, I can select multiple tags on `/` to narrow the brain stream.
- As a visitor, I can select multiple tags on `/writing/` to narrow the writing list.
- As a visitor, I can combine tag selection with free-text search.
- As a visitor, I can see a tag overview page (`/tags/` or `/topics/`) that lists every tag with item counts.
- As a visitor, clicking a tag on the overview page takes me to the relevant filtered view.

## Solution

### UI on Brain and Writing pages

Use a single search input that handles both text search and tag filtering:

```
[Search or type #tag to filter...]
```

- **Text tokens:** Filter by title, excerpt/source, and tags.
- **Tag tokens:** Words prefixed with `#` (e.g., `#ruby`, `#career`) filter by tag.
- **OR logic:** Multiple `#tag` tokens are combined with OR.
- **Combined filtering:** Text tokens narrow the tag-filtered results.
- **Tag chips:** Clicking a tag chip on a card toggles the corresponding `#tag` in the search input.
- **Clear filters:** A "Clear" link resets the input.

This keeps the UI minimal and keyboard-friendly.

### URL state

Use query parameters for shareable filter state:

- `/?tag=ruby&tag=career&q=cities`
- `/writing/?tag=ruby&tag=personal&q=euruko`

On page load, parse the URL and apply both tag and text filters.

### Filtering logic

- Tags are combined with **OR**: an item matches if it contains any of the selected tags.
- Text search is case-insensitive and matches against title, source/excerpt, and tags.
- When both text and tags are active, text search narrows the tag-filtered results (AND between text and the tag OR group).
- Example: selecting `ruby` and `career` shows items tagged `ruby` OR `career`. Typing `euruko` on top of that shows only items matching `euruko` among those.

### Tag explorer page

Create `/tags/`:

- Page title: "Tags"
- Shows all tags used across the entire site (brain stream + writing posts).
- Each tag shows two counts: how many brain entries use it and how many writing posts use it.
- Clicking a tag goes to `/` or `/writing/` with that tag pre-selected. If a tag exists in both sections, show two links or default to `/` and let the user switch sections.

Optionally render tags as a weighted list (larger font for more frequently used tags).

### Technical approach

- Keep filtering client-side.
- Parse the search input: tokens starting with `#` are tags, all other tokens are text.
- Store filter state in URL query parameters (`tag=` for each tag, `q=` for text).
- On page load, reconstruct the search input from URL params.
- Update the existing `index.html` and `writing.md` JavaScript to extract tags and text from the input.
- Tag chips on cards toggle the corresponding `#tag` token in the input.
- Tag links from entry/post pages use `?tag=<tag>`; the list page converts this into `#tag` in the input.

## Out of scope

- Cross-section search (searching both Brain and Writing at once from one input).
- Server-side filtering.
- Tag auto-suggest as you type.

## Success criteria

- [ ] Brain page supports filtering by multiple `#tag` tokens + text in one input.
- [ ] Writing page supports filtering by multiple `#tag` tokens + text in one input.
- [ ] Tag chips on cards and entry pages toggle `#tag` tokens correctly.
- [ ] `/tags/` page exists and lists all tags with counts.
- [ ] Filter state is reflected in the URL and shareable.
- [ ] A "Clear filters" control resets everything.

## Decisions

1. URL and naming: `/tags/` (keep "tags"; do not switch to "topics").
2. Tag scope: merged across Brain and Writing.
3. Filtering logic: OR — an item is shown if it matches the text search or any selected tag.
4. Tag explorer: show per-section counts so users know where a tag leads.

## Open questions

None remaining.

## Related

- [PRD: Unified tag filtering and search](../prds/unified-tag-filtering-and-search.md)
- [ADR: Make the brain-card stream the home page](../adrs/make-brain-cards-the-home-page.md)
