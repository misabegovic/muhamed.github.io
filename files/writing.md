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
    <p class="result-count" id="result-count" aria-live="polite"></p>
  </div>

  <div class="grid" id="cards" data-noun="posts">
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    {% for post in sorted_posts %}
    <div class="card" data-text="{{ post.title | downcase }} {{ post.excerpt | strip_html | downcase }}" data-tags="{{ post.tags | join: ',' }}">
      <a class="card-link" href="{{ site.baseurl }}{{ post.url }}">
        <div class="card-date"><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%-d %b %Y" }}</time></div>
        <h2 class="card-title">{{ post.title }}</h2>
        <p class="card-excerpt">{{ post.excerpt | strip_html | truncatewords: 28 }}</p>
      </a>
      <div class="tags">{% for tag in post.tags %}<span class="tag" data-tag="{{ tag }}" tabindex="0" role="button" aria-pressed="false">{{ tag }}</span>{% endfor %}</div>
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

<script defer src="{{ site.baseurl }}/assets/index-filter.js?v={{ '/assets/index-filter.js' | asset_digest }}"></script>
