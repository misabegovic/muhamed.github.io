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
.writing-page input { width: 100%; max-width: 400px; padding: 0.6rem; font-size: 1rem; border: 1px solid #ddd; border-radius: 4px; }
.writing-page .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.2rem; }
.writing-page .card { border: 1px solid #e5e5e5; border-radius: 8px; padding: 1.2rem; background: #fff; transition: box-shadow 0.15s; text-decoration: none; color: inherit; display: block; }
.writing-page .card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
.writing-page .card-link { text-decoration: none; color: inherit; display: block; }
.writing-page .card-date { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #888; margin-bottom: 0.5rem; }
.writing-page .card-title { font-size: 1.1rem; font-weight: 600; margin: 0 0 0.6rem; line-height: 1.3; color: #333; }
.writing-page .card-excerpt { font-size: 0.95rem; color: #444; line-height: 1.45; margin-bottom: 0.8rem; }
.writing-page .tag { display: inline-block; font-size: 0.7rem; color: #555; background: #f4f4f4; padding: 0.1rem 0.4rem; border-radius: 3px; margin-right: 0.3rem; cursor: pointer; text-decoration: none; }
.writing-page .tag:hover { background: #e8e8e8; }
.writing-page .hidden { display: none; }
.writing-page .page-hidden { display: none; }
.writing-page .load-more-wrap { text-align: center; margin-top: 2rem; }
.writing-page .load-more { padding: 0.6rem 1.4rem; font-size: 0.95rem; border: 1px solid #333; background: #fff; color: #333; border-radius: 4px; cursor: pointer; }
.writing-page .load-more:hover { background: #333; color: #fff; }
.writing-page .clear-filter { display: inline-block; margin-left: 1rem; font-size: 0.85rem; color: #666; cursor: pointer; }
.writing-page .clear-filter:hover { text-decoration: underline; }
</style>

<div class="writing-page">
  <h1>Writing</h1>
  <p class="subtitle">Longer posts and essays, written by me.</p>
  <p class="disclaimer">For the raw, AI-assisted stream of things I find interesting, see <a href="/">Peek into my brain</a>.</p>

  <div class="controls">
    <input type="text" id="search" placeholder="Search or filter by tag...">
    <span id="clear-filter" class="clear-filter hidden">Clear filter</span>
  </div>

  <div class="grid" id="cards">
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    {% for post in sorted_posts %}
    <div class="card" data-text="{{ post.title | downcase }} {{ post.excerpt | strip_html | downcase }} {{ post.tags | join: ' ' | downcase }} {{ post.categories | join: ' ' | downcase }}">
      <a class="card-link" href="{{ site.baseurl }}{{ post.url }}">
        <div class="card-date">{{ post.date | date: "%Y-%m-%d" }}</div>
        <h2 class="card-title">{{ post.title }}</h2>
        <p class="card-excerpt">{{ post.excerpt | strip_html | truncatewords: 28 }}</p>
      </a>
      <div class="tags">{% for tag in post.tags %}<a href="/writing/?tag={{ tag | url_encode }}" class="tag" data-tag="{{ tag }}" onclick="event.preventDefault(); event.stopPropagation(); filterByTag('{{ tag | escape }}');">{{ tag }}</a>{% endfor %}</div>
    </div>
    {% endfor %}
  </div>

  <div class="load-more-wrap">
    <button id="load-more" class="load-more">Load more</button>
  </div>
</div>

<script>
const search = document.getElementById('search');
const clearFilter = document.getElementById('clear-filter');
const cards = Array.from(document.querySelectorAll('.card'));
const loadMoreBtn = document.getElementById('load-more');
const PAGE_SIZE = 6;
let visibleCount = PAGE_SIZE;

function setUrlParam(tag) {
  const url = new URL(window.location.href);
  if (tag) {
    url.searchParams.set('tag', tag);
  } else {
    url.searchParams.delete('tag');
  }
  window.history.replaceState({}, '', url);
}

function updateVisibility() {
  const q = search.value.toLowerCase();
  let matched = 0;
  cards.forEach(c => {
    const matches = c.dataset.text.includes(q);
    c.classList.toggle('hidden', !matches);
    if (matches) {
      matched++;
      c.classList.toggle('page-hidden', matched > visibleCount);
    }
  });
  const anyHidden = cards.some(c => !c.classList.contains('hidden') && c.classList.contains('page-hidden'));
  loadMoreBtn.style.display = (anyHidden ? 'inline-block' : 'none');
  clearFilter.classList.toggle('hidden', !q);
}

function filterByTag(tag) {
  search.value = tag;
  setUrlParam(tag);
  visibleCount = PAGE_SIZE;
  updateVisibility();
}

search.addEventListener('input', () => {
  visibleCount = PAGE_SIZE;
  setUrlParam(search.value);
  updateVisibility();
});

clearFilter.addEventListener('click', () => {
  search.value = '';
  setUrlParam('');
  visibleCount = PAGE_SIZE;
  updateVisibility();
});

loadMoreBtn.addEventListener('click', () => {
  visibleCount += PAGE_SIZE;
  updateVisibility();
});

const urlParams = new URLSearchParams(window.location.search);
const initialTag = urlParams.get('tag');
if (initialTag) {
  search.value = initialTag;
}

updateVisibility();
</script>
