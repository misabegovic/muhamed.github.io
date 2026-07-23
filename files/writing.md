---
layout: default
permalink: /writing/
title: Writing
---

<style>
.writing-page { max-width: 1100px; margin: 0 auto; padding: 2rem 1rem; }
.writing-page h1 { font-size: 1.8rem; margin-bottom: 0.5rem; }
.writing-page .subtitle { color: #666; margin-bottom: 1.5rem; }
.writing-page .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.2rem; }
.writing-page .card { border: 1px solid #e5e5e5; border-radius: 8px; padding: 1.2rem; background: #fff; transition: box-shadow 0.15s; text-decoration: none; color: inherit; }
.writing-page .card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
.writing-page .card-date { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #888; margin-bottom: 0.5rem; }
.writing-page .card-title { font-size: 1.1rem; font-weight: 600; margin: 0 0 0.6rem; line-height: 1.3; color: #333; }
.writing-page .card-excerpt { font-size: 0.95rem; color: #444; line-height: 1.45; }
</style>

<div class="writing-page">
  <h1>Writing</h1>
  <p class="subtitle">Longer posts and essays.</p>

  <div class="grid">
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    {% for post in sorted_posts %}
    <a class="card" href="{{ site.baseurl }}{{ post.url }}">
      <div class="card-date">{{ post.date | date: "%Y-%m-%d" }}</div>
      <h2 class="card-title">{{ post.title }}</h2>
      <p class="card-excerpt">{{ post.excerpt | strip_html | truncatewords: 28 }}</p>
    </a>
    {% endfor %}
  </div>
</div>
