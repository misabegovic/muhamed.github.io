---
layout: default
permalink: /tags/
title: Tags
---


<div class="wrap index-page tags-page">
  <header class="page-head">
    <h1 class="page-title">Tags</h1>
    <p class="page-intro">Every tag across the brain and the writing. The counts link to the matching section: first the <a href="/brain/">brain</a>, then <a href="/writing/">writing</a>.</p>
  </header>

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
          <span class="tag">
            <a href="/brain/?tag={{ tag | url_encode }}" title="{{ tag }}: {{ brain_count }} brain, {{ writing_count }} writing">{{ tag }}</a>
            <span class="tag-count"><a href="/brain/?tag={{ tag | url_encode }}" title="{{ brain_count }} in the brain stream">{{ brain_count }}</a> / <a href="/writing/?tag={{ tag | url_encode }}" title="{{ writing_count }} in writing">{{ writing_count }}</a></span>
          </span>
        {% elsif brain_count > 0 %}
          <span class="tag">
            <a href="/brain/?tag={{ tag | url_encode }}" title="{{ tag }}: {{ brain_count }} brain">{{ tag }}</a>
            <span class="tag-count"><a href="/brain/?tag={{ tag | url_encode }}">{{ brain_count }}</a></span>
          </span>
        {% else %}
          <span class="tag">
            <a href="/writing/?tag={{ tag | url_encode }}" title="{{ tag }}: {{ writing_count }} writing">{{ tag }}</a>
            <span class="tag-count"><a href="/writing/?tag={{ tag | url_encode }}">{{ writing_count }}</a></span>
          </span>
        {% endif %}
      {% endif %}
    {% endfor %}
  </div>

  {% if unique_tags.size == 0 %}
  <p class="empty">No tags yet.</p>
  {% endif %}
</div>
