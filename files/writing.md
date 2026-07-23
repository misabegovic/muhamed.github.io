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
.writing-page .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.2rem; }
.writing-page .card { border: 1px solid #e5e5e5; border-radius: 8px; padding: 1.2rem; background: #fff; transition: box-shadow 0.15s; text-decoration: none; color: inherit; }
.writing-page .card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
.writing-page .card-date { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #888; margin-bottom: 0.5rem; }
.writing-page .card-title { font-size: 1.1rem; font-weight: 600; margin: 0 0 0.6rem; line-height: 1.3; color: #333; }
.writing-page .card-excerpt { font-size: 0.95rem; color: #444; line-height: 1.45; margin-bottom: 0.8rem; }
.writing-page .tag { display: inline-block; font-size: 0.7rem; color: #555; background: #f4f4f4; padding: 0.1rem 0.4rem; border-radius: 3px; margin-right: 0.3rem; }
</style>

<div class="writing-page">
  <h1>Writing</h1>
  <p class="subtitle">Longer posts and essays, written by me.</p>
  <p class="disclaimer">For the raw, AI-assisted stream of things I find interesting, see <a href="/">Peek into my brain</a>.</p>

  <div class="grid">
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    {% for post in sorted_posts %}
    <a class="card" href="{{ site.baseurl }}{{ post.url }}">
      <div class="card-date">{{ post.date | date: "%Y-%m-%d" }}</div>
      <h2 class="card-title">{{ post.title }}</h2>
      <p class="card-excerpt">{{ post.excerpt | strip_html | truncatewords: 28 }}</p>
      <div class="tags">{% for tag in post.tags %}<span class="tag">{{ tag }}</span>{% endfor %}</div>
    </a>
    {% endfor %}
  </div>
</div>
