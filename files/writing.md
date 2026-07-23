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
.writing-page input { width: 100%; max-width: 300px; padding: 0.6rem; font-size: 1rem; border: 1px solid #ddd; border-radius: 4px; }
.writing-page .tag-select { padding: 0.6rem; font-size: 1rem; border: 1px solid #ddd; border-radius: 4px; margin-left: 0.5rem; }
.writing-page .active-tags { margin-top: 0.8rem; }
.writing-page .active-tag { display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.25rem 0.6rem; background: #333; color: #fff; border-radius: 4px; font-size: 0.85rem; margin-right: 0.4rem; cursor: pointer; }
.writing-page .active-tag:hover { background: #555; }
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
    <input type="text" id="search" placeholder="Search text...">
    <select id="tag-select" class="tag-select">
      <option value="">+ Add tag</option>
      {% assign all_tags = site.posts | map: 'tags' | join: ',' | split: ',' | sort %}
      {% assign unique_tags = all_tags | uniq %}
      {% for tag in unique_tags %}{% if tag != '' %}<option value="{{ tag }}">{{ tag }}</option>{% endif %}{% endfor %}
    </select>
    <span id="clear-filters" class="clear-filters hidden">Clear filters</span>
    <div id="active-tags" class="active-tags"></div>
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
const tagSelect = document.getElementById('tag-select');
const activeTagsEl = document.getElementById('active-tags');
const clearFilters = document.getElementById('clear-filters');
const cards = Array.from(document.querySelectorAll('.card'));
const loadMoreBtn = document.getElementById('load-more');
const PAGE_SIZE = 6;
let visibleCount = PAGE_SIZE;
let activeTags = [];

function setUrlParams() {
  const url = new URL(window.location.href);
  url.searchParams.delete('tag');
  activeTags.forEach(t => url.searchParams.append('tag', t));
  if (search.value) {
    url.searchParams.set('q', search.value);
  } else {
    url.searchParams.delete('q');
  }
  window.history.replaceState({}, '', url);
}

function updateActiveTagsUI() {
  activeTagsEl.innerHTML = '';
  activeTags.forEach(tag => {
    const pill = document.createElement('span');
    pill.className = 'active-tag';
    pill.textContent = tag + ' ×';
    pill.addEventListener('click', () => removeTag(tag));
    activeTagsEl.appendChild(pill);
  });
  clearFilters.classList.toggle('hidden', activeTags.length === 0 && !search.value);
}

function addTag(tag) {
  if (!tag || activeTags.includes(tag)) return;
  activeTags.push(tag);
  tagSelect.value = '';
  visibleCount = PAGE_SIZE;
  setUrlParams();
  updateActiveTagsUI();
  updateVisibility();
}

function removeTag(tag) {
  activeTags = activeTags.filter(t => t !== tag);
  visibleCount = PAGE_SIZE;
  setUrlParams();
  updateActiveTagsUI();
  updateVisibility();
}

function updateVisibility() {
  const q = search.value.toLowerCase();
  let matched = 0;
  cards.forEach(c => {
    const textMatch = !q || c.dataset.text.includes(q);
    const cardTags = c.dataset.tags.split(',').map(t => t.trim()).filter(Boolean);
    const tagMatch = activeTags.length === 0 || activeTags.some(t => cardTags.includes(t));
    const matches = textMatch && tagMatch;
    c.classList.toggle('hidden', !matches);
    if (matches) {
      matched++;
      c.classList.toggle('page-hidden', matched > visibleCount);
    }
  });
  const anyHidden = cards.some(c => !c.classList.contains('hidden') && c.classList.contains('page-hidden'));
  loadMoreBtn.style.display = (anyHidden ? 'inline-block' : 'none');
}

search.addEventListener('input', () => {
  visibleCount = PAGE_SIZE;
  setUrlParams();
  updateVisibility();
});

tagSelect.addEventListener('change', () => addTag(tagSelect.value));

clearFilters.addEventListener('click', () => {
  search.value = '';
  activeTags = [];
  visibleCount = PAGE_SIZE;
  setUrlParams();
  updateActiveTagsUI();
  updateVisibility();
});

document.querySelectorAll('.card .tag').forEach(tagEl => {
  tagEl.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    addTag(tagEl.dataset.tag);
  });
  tagEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      addTag(tagEl.dataset.tag);
    }
  });
});

loadMoreBtn.addEventListener('click', () => {
  visibleCount += PAGE_SIZE;
  updateVisibility();
});

const urlParams = new URLSearchParams(window.location.search);
activeTags = urlParams.getAll('tag');
const initialQ = urlParams.get('q');
if (initialQ) search.value = initialQ;

updateActiveTagsUI();
updateVisibility();
</script>
