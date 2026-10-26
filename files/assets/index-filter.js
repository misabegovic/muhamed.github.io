// Search and #tag filtering for the card indexes, /writing/ and /brain/.
// Each page keeps its markup (#search, #cards with data-noun, #load-more,
// #clear-filters, #result-count, #no-results); this script is shared.
(() => {
  const search = document.getElementById('search');
  const clearFilters = document.getElementById('clear-filters');
  const resultCount = document.getElementById('result-count');
  const cards = Array.from(document.querySelectorAll('.card'));
  const loadMoreBtn = document.getElementById('load-more');
  const PAGE_SIZE = 6;
  // What the cards are, for the result count ("3 of 12 posts").
  const noun = document.getElementById('cards').dataset.noun || 'items';
  let visibleCount = PAGE_SIZE;

  function parseQuery(input) {
    const tokens = input.trim().split(/\s+/).filter(Boolean);
    const tags = tokens.filter(t => t.startsWith('#')).map(t => t.slice(1).toLowerCase());
    const textTokens = tokens.filter(t => !t.startsWith('#'));
    return { tags, text: textTokens.join(' ').toLowerCase() };
  }

  // Tags first, then a space, so typing after a tag click starts a new word
  // instead of extending the tag ("#ruby" + "x" used to become "#rubyx").
  function buildInput(tags, text) {
    const parts = tags.map(t => '#' + t);
    if (text) parts.push(text);
    return parts.join(' ') + (parts.length && !text ? ' ' : '');
  }

  function setUrlParams(tags, text) {
    const url = new URL(window.location.href);
    url.searchParams.delete('tag');
    tags.forEach(t => url.searchParams.append('tag', t));
    if (text) {
      url.searchParams.set('q', text);
    } else {
      url.searchParams.delete('q');
    }
    window.history.replaceState({}, '', url);
  }

  function updateTagHighlights(tags) {
    document.querySelectorAll('.card .tag').forEach(tagEl => {
      const on = tags.includes(tagEl.dataset.tag.toLowerCase());
      tagEl.classList.toggle('active', on);
      tagEl.setAttribute('aria-pressed', String(on));
    });
  }

  function updateVisibility() {
    const { tags, text } = parseQuery(search.value);
    let matched = 0;
    cards.forEach(c => {
      const textMatch = !text || c.dataset.text.includes(text);
      const cardTags = c.dataset.tags.split(',').map(t => t.trim().toLowerCase()).filter(Boolean);
      const tagMatch = tags.length === 0 || tags.some(t => cardTags.includes(t));
      const matches = textMatch && tagMatch;
      c.classList.toggle('hidden', !matches);
      if (matches) {
        matched++;
        c.classList.toggle('page-hidden', matched > visibleCount);
      }
    });
    const anyHidden = cards.some(c => !c.classList.contains('hidden') && c.classList.contains('page-hidden'));
    loadMoreBtn.style.display = (anyHidden ? 'inline-block' : 'none');
    clearFilters.classList.toggle('hidden', !search.value);
    document.getElementById('no-results').hidden = !(matched === 0 && cards.length > 0);
    updateTagHighlights(tags);
    resultCount.textContent = search.value.trim() ? `${matched} of ${cards.length} ${noun}` : '';
  }

  function toggleTag(tag) {
    const { tags, text } = parseQuery(search.value);
    const lowerTag = tag.toLowerCase();
    const newTags = tags.includes(lowerTag) ? tags.filter(t => t !== lowerTag) : [...tags, lowerTag];
    search.value = buildInput(newTags, text);
    setUrlParams(newTags, text);
    visibleCount = PAGE_SIZE;
    updateVisibility();
  }

  search.addEventListener('input', () => {
    const { tags, text } = parseQuery(search.value);
    setUrlParams(tags, text);
    visibleCount = PAGE_SIZE;
    updateVisibility();
  });

  clearFilters.addEventListener('click', () => {
    search.value = '';
    setUrlParams([], '');
    visibleCount = PAGE_SIZE;
    updateVisibility();
  });

  document.getElementById('no-results-clear').addEventListener('click', (e) => {
    e.preventDefault();
    search.value = '';
    setUrlParams([], '');
    visibleCount = PAGE_SIZE;
    updateVisibility();
  });

  document.querySelectorAll('.card .tag').forEach(tagEl => {
    tagEl.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleTag(tagEl.dataset.tag);
    });
    tagEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTag(tagEl.dataset.tag);
      }
    });
  });

  loadMoreBtn.addEventListener('click', () => {
    visibleCount += PAGE_SIZE;
    updateVisibility();
  });

  const urlParams = new URLSearchParams(window.location.search);
  const initialTags = urlParams.getAll('tag');
  const initialText = urlParams.get('q') || '';
  search.value = buildInput(initialTags, initialText);

  updateVisibility();
})();
