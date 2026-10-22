---
# Profile (ADR: project-profile-pages). Facts from ~/projects/usput.ba
# (README, PRODUCT.md, wiki/product/features.md, config/application.rb,
# Gemfile, config/deploy.yml, app/services/ai/audio_tour_generator.rb,
# lib/platform/dsl/content_validator.rb, docs/mine_checker/README.md) and
# the evidence store (proj-usput-web, proj-usput-ai-layer, proj-usput-mcp,
# proj-usput-live). Screenshots of usput.ba taken 2026-10-22. The video is a
# web cut of ~/projects/usput-promo (Remotion, rendered 2026-07-21), without
# the scene whose "3.700+" caption has no source.
title: Usput.ba
home_key: usput
description: Usput.ba, a travel guide to Bosnia and Herzegovina built and run by Muhamed Isabegovic, with audio tours, AI content checked against real places, and mine safety built in.
thumb: /images/projects/usput/home
lead: A travel guide to Bosnia and Herzegovina, from the Una to the Drina, built from real places, with audio tours and mine safety built in.
cta: { label: Visit usput.ba, url: "https://usput.ba" }
links:
  - { label: usput.ba, url: "https://usput.ba", note: "live, in 16 interface languages" }
  - { label: Source on GitHub, url: "https://github.com/misabegovic/usput.ba", note: "misabegovic/usput.ba" }
  - { label: Mine check, url: "https://usput.ba/mine-check", note: "is this point near a recorded mine-suspected area?" }
  - { label: Minesweeper, url: "https://usput.ba/minesweeper", note: "the game, on real map tiles" }
  - { label: Minolovac, url: "/igre/minolovac/", note: "a static, keyboard-friendly copy on this site" }
facts:
  - { label: Role, value: "My own product: I build it and run it on my own" }
  - { label: What, value: "Places, experiences, plans and audio tours across Bosnia and Herzegovina" }
  - { label: Built with, value: "Rails 8.1, Hotwire, Tailwind, Solid Queue, RubyLLM, PostgreSQL, Kamal" }
  - { label: Languages, value: "16 interface languages; content in Bosnian and English" }
hero:
  kind: image
  src: /images/projects/usput/home
  max: 1440
  width: 1440
  height: 900
  alt: "The Usput.ba home page: Discover the beauty of Bosnia and Herzegovina, with buttons to create a plan or explore, beside a collage of photos from across the country."
problem:
  title: Why I built it.
  text: |
    Usput means "along the way". It is a guide to the whole of Bosnia and Herzegovina, not only its best-known landmarks: find what to see near you or in a city, put it into a plan, walk it, and keep what you saw.

    It is also where I try AI features on real users first. Everything a model writes for Usput is about a real place, so every record has to stay true to that place.
features:
  - title: Every place has its story, read aloud.
    text: |
      A place gets its own page with its history, photos, reviews and the practical details, and many have an audio tour. An AI writes the script from the place's own record, and ElevenLabs reads it. Put places into a plan, walk it, and check in at each stop.
    media:
      kind: phones
      caption: Baščaršija in Sarajevo, on a phone, and its audio tour.
      items:
        - { src: /images/projects/usput/place-phone, alt: "The Baščaršija page on a phone: Sarajevo, rated 5.0 from four reviews, a photo of the Sebilj fountain." }
        - { src: /images/projects/usput/audio-phone, alt: "The Baščaršija audio tour on a phone: a five and a half minute player, then the description of the bazaar." }
  - title: Mine safety, built in.
    text: |
      Bosnia and Herzegovina still has recorded mine-suspected areas. Every place's coordinates are checked against them, and a place within 500 metres of one cannot be saved. The public [mine check](https://usput.ba/mine-check) takes your position, coordinates or a tap on the map, and answers in bands only: within 500 metres, within 2 kilometres, or nothing recorded, which it never calls safe. When its data is missing it fails closed and points to BHMAC, the only authoritative source.

      Usput's [minesweeper](https://usput.ba/minesweeper) teaches what the data means, on real map tiles. A static copy, [Minolovac](/igre/minolovac/), runs on this site and can be played with a keyboard.
    media:
      kind: image
      src: /images/projects/usput/minecheck
      max: 1440
      width: 1440
      height: 900
      alt: "The Usput.ba mine-area proximity check: a red warning box to read before use, coordinate fields, and a map of Bosnia and Herzegovina with mine-suspected areas in red."
  - title: AI that is checked before it is trusted.
    text: |
      Content is drafted through RubyLLM behind a wrapper with structured output enforced by a schema, layered retries, JSON repair and versioned prompts. Before a new place is created it is checked: that it exists, that it lies inside the country's border, that the name and the city make sense.
  - title: Agents welcome.
    text: |
      `bin/usput mcp` serves eighteen commands to an agent over MCP, and a read-only endpoint serves admins who hold a token. A validator catches records a model made up.
  - title: A small product, run by one person.
    text: |
      Rails 8.1 with Hotwire and Tailwind, Solid Queue for background work, Rails Event Store, Avo for the curators' admin, two PostgreSQL databases, deployed with Kamal. Curators, trusted volunteers, edit places, experiences, plans and audio tours.
video:
  kind: video
  title: The mine checks, launched in half a minute.
  text: "The launch video, made with Remotion from screenshots of the site. On-screen text in Bosnian; there is no sound."
  src: /videos/projects/usput/mine-safety.mp4
  poster: /videos/projects/usput/mine-safety-poster.webp
  width: 1280
  height: 720
shows:
  title: What it shows about how I work.
  text: |
    I build products end to end and run them: the product, the data, the AI and the deploys. Usput is where I try AI features on real users before I bring them to a team, which is why a model's output there passes checks that do not depend on the model being right.
  link: { label: AI in production, on my work page, url: "/work/#ai-in-production" }
---
