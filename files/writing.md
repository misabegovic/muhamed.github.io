---
layout: default
permalink: /writing/
title: Writing
---


<div class="wrap index-page writing-page">
  <header class="page-head">
    <h1 class="page-title">Writing</h1>
    <p class="page-intro">Longer posts and essays, written by me. For the raw, AI-assisted stream of things I find interesting, see <a href="/brain/">Peek into my brain</a>.</p>
  </header>

  <div class="controls">
    <label class="visually-hidden" for="search">Search the writing</label><input type="search" id="search" placeholder="Search, or type #tag to filter">
    <button type="button" id="clear-filters" class="clear-filters hidden">Clear filters</button>
    <div class="search-hint">Tip: type <code>#ruby</code> or <code>#career</code> to filter by tag. Click a tag chip to toggle it.</div>
  </div>

  <div class="grid" id="cards">
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    {% for post in sorted_posts %}
    <div class="card" data-text="{{ post.title | downcase }} {{ post.excerpt | strip_html | downcase }}" data-tags="{{ post.tags | join: ',' }}">
      <a class="card-link" href="{{ site.baseurl }}{{ post.url }}">
        <div class="card-date">{{ post.date | date: "%Y-%m-%d" }}</div>
        <h2 class="card-title">{{ post.title }}</h2>
        <p class="card-excerpt">{{ post.excerpt | strip_html | truncatewords: 28 }}</p>
      </a>
      <div class="tags">{% for tag in post.tags %}<span class="tag" data-tag="{{ tag }}" tabindex="0" role="button">{{ tag }}</span>{% endfor %}</div>
    </div>
    {% endfor %}
  </div>

  <div class="empty-state" id="no-results" hidden>
    <p>No posts match your filters. <a href="#" id="no-results-clear">Clear filters</a> or browse <a href="/tags/">all tags</a>.</p>
  </div>

  <div class="load-more-wrap">
    <button id="load-more" class="load-more">Load more</button>
  </div>
</div>

<script>
const search = document.getElementById('search');
const clearFilters = document.getElementById('clear-filters');
const cards = Array.from(document.querySelectorAll('.card'));
const loadMoreBtn = document.getElementById('load-more');
const PAGE_SIZE = 6;
let visibleCount = PAGE_SIZE;

function parseQuery(input) {
  const tokens = input.trim().split(/\s+/).filter(Boolean);
  const tags = tokens.filter(t => t.startsWith('#')).map(t => t.slice(1).toLowerCase());
  const textTokens = tokens.filter(t => !t.startsWith('#'));
  return { tags, text: textTokens.join(' ').toLowerCase() };
}

function buildInput(tags, text) {
  const parts = [];
  if (text) parts.push(text);
  tags.forEach(t => parts.push('#' + t));
  return parts.join(' ');
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
    tagEl.classList.toggle('active', tags.includes(tagEl.dataset.tag.toLowerCase()));
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
</script>
