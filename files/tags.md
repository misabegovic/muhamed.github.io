---
layout: default
permalink: /tags/
title: Tags
---

<style>
.tags-page { max-width: 900px; margin: 0 auto; padding: 2rem 1rem; }
.tags-page h1 { font-size: 1.8rem; margin-bottom: 0.5rem; }
.tags-page .subtitle { color: #666; margin-bottom: 2rem; }
.tags-page .section { margin-bottom: 2.5rem; }
.tags-page .section h2 { font-size: 1.2rem; margin-bottom: 1rem; border-bottom: 1px solid #eee; padding-bottom: 0.4rem; }
.tags-page .tag-list { display: flex; flex-wrap: wrap; gap: 0.7rem; }
.tags-page .tag { display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.4rem 0.8rem; background: #f4f4f4; border-radius: 4px; text-decoration: none; color: #333; font-size: 0.95rem; }
.tags-page .tag:hover { background: #e8e8e8; }
.tags-page .tag-count { font-size: 0.75rem; color: #888; }
.tags-page .empty { color: #888; font-style: italic; }
</style>

<div class="tags-page">
  <h1>Tags</h1>
  <p class="subtitle">Explore tags across the brain stream and writing.</p>

  {% assign brain_tags = site.stream | map: 'tags' | join: ',' | split: ',' | sort %}
  {% assign writing_tags = site.posts | map: 'tags' | join: ',' | split: ',' | sort %}
  {% assign all_tags = brain_tags | concat: writing_tags | sort %}
  {% assign unique_tags = all_tags | uniq %}

  <div class="tag-list">
    {% for tag in unique_tags %}
      {% if tag != '' %}
        {% assign brain_count = 0 %}
        {% assign writing_count = 0 %}
        {% for entry in site.stream %}{% if entry.tags contains tag %}{% assign brain_count = brain_count | plus: 1 %}{% endif %}{% endfor %}
        {% for post in site.posts %}{% if post.tags contains tag %}{% assign writing_count = writing_count | plus: 1 %}{% endif %}{% endfor %}

        {% if brain_count > 0 and writing_count > 0 %}
          <a href="/?tag={{ tag | url_encode }}" class="tag" title="{{ tag }} — {{ brain_count }} brain, {{ writing_count }} writing">
            {{ tag }}
            <span class="tag-count">{{ brain_count }} / {{ writing_count }}</span>
          </a>
        {% elsif brain_count > 0 %}
          <a href="/?tag={{ tag | url_encode }}" class="tag" title="{{ tag }} — {{ brain_count }} brain">
            {{ tag }}
            <span class="tag-count">{{ brain_count }}</span>
          </a>
        {% else %}
          <a href="/writing/?tag={{ tag | url_encode }}" class="tag" title="{{ tag }} — {{ writing_count }} writing">
            {{ tag }}
            <span class="tag-count">{{ writing_count }}</span>
          </a>
        {% endif %}
      {% endif %}
    {% endfor %}
  </div>

  {% if unique_tags.size == 0 %}
  <p class="empty">No tags yet.</p>
  {% endif %}
</div>
