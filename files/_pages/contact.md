---
layout: page
title: Get in touch
permalink: /contact/
intro: Email is the best way to reach me. Pick what fits and your mail app opens a short draft; a few lines is plenty to start.
description: How to reach Muhamed Isabegovic about building something with your team, your Rails app, an architecture review, or a talk at your event.
---
{%- comment -%} The Rails card's email comes from _data/services.yml (details: Rails), as on /services/ and /rails/. {%- endcomment -%}
{%- assign rd = site.data.services.details.Rails -%}
{%- capture rmail %}mailto:info@muhamed.at?subject={{ rd.email.subject | url_encode | replace: '+', '%20' }}&amp;body={% for line in rd.email.body %}{{ line | url_encode | replace: '+', '%20' }}%0D%0A{% endfor %}{% endcapture -%}

<div class="contact-options">
  <section class="contact-option" id="team">
    <h2>Help for your team</h2>
    <p>You want a product or feature built, a technical lead for your team, or help making your company AI-native.</p>
    <p class="contact-hint">Useful to include: what your team builds, how it uses AI today, and what you would like to change.</p>
    <a class="button" href="mailto:info@muhamed.at?subject=Help%20for%20our%20team&amp;body=What%20we%20build%3A%0D%0AHow%20we%20use%20AI%20today%3A%0D%0AWhat%20we%20would%20like%20to%20change%3A%0D%0A">Email about your team<svg class="arr" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 6h13M9 1.5 14 6l-5 4.5"/></svg></a>
  </section>
  <section class="contact-option" id="rails">
    <h2>Your Rails app</h2>
    <p>Your Rails app outgrew its first design: a tangled monolith, a stuck upgrade, slow pages, or AI features you want without a rewrite.</p>
    <p class="contact-hint">Useful to include: your app and its Rails and Ruby versions, what slows you down, and whether a call, a day or ongoing help fits. More on <a href="/rails/">Rails consulting</a>.</p>
    <a class="button" href="{{ rmail | strip }}">{{ rd.email.label }}<svg class="arr" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 6h13M9 1.5 14 6l-5 4.5"/></svg></a>
  </section>
  <section class="contact-option" id="review">
    <h2>A second opinion</h2>
    <p>You want an outside look at your codebase and architecture before a big change: fixed scope, one to two weeks.</p>
    <p class="contact-hint">Useful to include: your product and stack, what worries you about it, and any deadline.</p>
    <a class="button" href="mailto:info@muhamed.at?subject=An%20architecture%20review&amp;body=Our%20product%20and%20stack%3A%0D%0AWhat%20worries%20us%20about%20it%3A%0D%0AAny%20deadline%3A%0D%0A">Email about a review<svg class="arr" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 6h13M9 1.5 14 6l-5 4.5"/></svg></a>
  </section>
  <section class="contact-option" id="speaking">
    <h2>Speaking at your event</h2>
    <p>You are organising a conference or meetup and want a talk or a workshop on AI-native engineering, guardrails for coding agents, or Ruby.</p>
    <p class="contact-hint">Useful to include: the event, the date and place, the audience, and the format you have in mind.</p>
    <a class="button" href="mailto:info@muhamed.at?subject=Speaking%20at%20our%20event&amp;body=The%20event%3A%0D%0ADate%20and%20place%3A%0D%0AThe%20audience%3A%0D%0ATalk%20or%20workshop%3A%0D%0A">Email about your event<svg class="arr" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 6h13M9 1.5 14 6l-5 4.5"/></svg></a>
  </section>
</div>

<p class="contact-nomail">No mail app on this device? Write to <a href="mailto:info@muhamed.at">info@muhamed.at</a> from any inbox. {% include copy-email.html %}</p>

<dl class="contact-facts">
  <div><dt>Email</dt><dd><a href="mailto:info@muhamed.at">info@muhamed.at</a> {% include copy-email.html %}</dd></div>
  <div><dt>How I work</dt><dd>Through my own company, Isabegovic Muhamed e.U.</dd></div>
  <div><dt>Location</dt><dd>Vienna, Austria. Remote across Europe, on site in the DACH region.</dd></div>
  <div><dt>CV</dt><dd><a href="/cv/">View my CV</a>, also as a <a href="/cv/Muhamed_Isabegovic_CV.pdf" download>three-page PDF</a></dd></div>
  <div><dt>Elsewhere</dt><dd><a href="https://www.linkedin.com/in/muhamed-isabegovic/">LinkedIn</a>, <a href="https://github.com/misabegovic">GitHub</a></dd></div>
</dl>
