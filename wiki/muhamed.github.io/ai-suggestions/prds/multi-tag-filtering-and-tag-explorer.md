---
kind: prd
status: ai-suggested
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

Replace the single search input with a compact filter bar:

```
[Search text...]  [ruby ×] [career ×] [+ Add tag]
```

- **Text input:** Filters by title, excerpt/source, and tags as it does today.
- **Active tag pills:** Selected tags appear as pills with a remove button (×).
- **Add tag dropdown/button:** Opens a list of available tags for that section. On mobile, this could be a simple `<select>`; on desktop, a dropdown or inline list.
- **Clear filters:** A "Clear" link resets text and tags.

Tag chips on cards and entry pages become toggles: clicking a tag adds it to the active filters if not present, or removes it if already active.

### URL state

Use query parameters for shareable filter state:

- `/?tag=ruby&tag=career&q=cities`
- `/writing/?tag=ruby&tag=personal&q=euruko`

On page load, parse the URL and apply both tag and text filters.

### Filtering logic

- An item matches if it contains **all** selected tags (AND logic).
- Text search is case-insensitive and matches against title, source/excerpt, and tags.
- An item matches overall if it passes both the text search and the tag filter.

### Tag explorer page

Create `/tags/` (or `/topics/`):

- Page title: "Tags" or "Topics"
- Shows all tags used across the entire site (brain stream + writing posts), or split into two sections: "Brain tags" and "Writing tags".
- Each tag shows the count of items.
- Clicking a tag goes to `/` or `/writing/` with that tag pre-selected, depending on which section it belongs to. For shared tags, default to `/`.

Optionally render tags as a weighted list (larger font for more frequently used tags).

### Technical approach

- Keep filtering client-side.
- Generate a JSON data file at build time (`/assets/tags.json`) containing all tags and their counts, used by the tag explorer and the add-tag dropdown.
- Alternatively, generate the tag list inline in the filter bar markup to avoid an extra request.
- Update the existing `index.html` and `writing.md` JavaScript to manage an array of active tags instead of a single search string.
- Update `stream-entry.html` and `post.html` tag links to include multi-tag URLs when appropriate. For simplicity, tag links from entry/post pages add the clicked tag as the only active filter (users can add more once on the list page).

## Out of scope

- Cross-section search (searching both Brain and Writing at once from one input).
- Server-side filtering.
- Tag auto-suggest as you type.

## Success criteria

- [ ] Brain page supports filtering by multiple tags + text.
- [ ] Writing page supports filtering by multiple tags + text.
- [ ] Tag chips on cards and entry pages toggle or add tags correctly.
- [ ] `/tags/` page exists and lists all tags with counts.
- [ ] Filter state is reflected in the URL and shareable.
- [ ] A "Clear filters" control resets everything.

## Open questions

1. Should the tag explorer be at `/tags/` or `/topics/`?
2. Should tags be merged across Brain and Writing, or shown separately?
3. Should tag filtering use AND logic (all selected) or OR logic (any selected)?

## Related

- [PRD: Unified tag filtering and search](../prds/unified-tag-filtering-and-search.md)
- [ADR: Make the brain-card stream the home page](../adrs/make-brain-cards-the-home-page.md)
