---
layout: default
permalink: /writing/
title: Writing
---

<style>
.writing-page { max-width: 1100px; margin: 0 auto; padding: 2rem 1rem; }
.writing-page h1 { font-size: 1.8rem; margin-bottom: 0.5rem; }
.writing-page .subtitle { color: #666; margin-bottom: 0.5rem; }
.writing-page .disclaimer { font-size: 0.9rem; color: #777; line-height: 1.5; margin-bottom: 1.5rem; max-width: 640px; }
.writing-page .disclaimer a { color: #555; }
.writing-page .controls { margin-bottom: 1.5rem; }
.writing-page input { width: 100%; max-width: 500px; padding: 0.6rem; font-size: 1rem; border: 1px solid #ddd; border-radius: 4px; }
.writing-page .search-hint { font-size: 0.8rem; color: #888; margin-top: 0.4rem; }
.writing-page .clear-filters { display: inline-block; margin-left: 0.5rem; font-size: 0.85rem; color: #666; cursor: pointer; }
.writing-page .clear-filters:hover { text-decoration: underline; }
.writing-page .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.2rem; }
.writing-page .card { border: 1px solid #e5e5e5; border-radius: 8px; padding: 1.2rem; background: #fff; transition: box-shadow 0.15s; text-decoration: none; color: inherit; display: block; }
.writing-page .card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
.writing-page .card-link { text-decoration: none; color: inherit; display: block; }
.writing-page .card-date { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #888; margin-bottom: 0.5rem; }
.writing-page .card-title { font-size: 1.1rem; font-weight: 600; margin: 0 0 0.6rem; line-height: 1.3; color: #333; }
.writing-page .card-excerpt { font-size: 0.95rem; color: #444; line-height: 1.45; margin-bottom: 0.8rem; }
.writing-page .tag { display: inline-block; font-size: 0.7rem; color: #555; background: #f4f4f4; padding: 0.1rem 0.4rem; border-radius: 3px; margin-right: 0.3rem; cursor: pointer; text-decoration: none; }
.writing-page .tag:hover { background: #e8e8e8; }
.writing-page .tag.active { background: #333; color: #fff; }
.writing-page .hidden { display: none; }
.writing-page .page-hidden { display: none; }
.writing-page .load-more-wrap { text-align: center; margin-top: 2rem; }
.writing-page .load-more { padding: 0.6rem 1.4rem; font-size: 0.95rem; border: 1px solid #333; background: #fff; color: #333; border-radius: 4px; cursor: pointer; }
.writing-page .load-more:hover { background: #333; color: #fff; }
</style>

<div class="writing-page">
  <h1>Writing</h1>
  <p class="subtitle">Longer posts and essays, written by me.</p>
  <p class="disclaimer">For the raw, AI-assisted stream of things I find interesting, see <a href="/">Peek into my brain</a>.</p>

  <div class="controls">
    <input type="text" id="search" placeholder="Search or type #tag to filter...">
    <span id="clear-filters" class="clear-filters hidden">Clear filters</span>
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
