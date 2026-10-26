---
# Profile (ADR: project-profile-pages). Facts from Ruby-Austria/treasure_hunt
# (README, Gemfile, config/conference.yml, git log, LICENSE), the evidence
# store (proj-treasurehunt, proj-treasurehunt-features) and the brain entry
# treasure-hunt-open-sourced. Screenshots and test output from a local run on
# demo data only, 2026-10-22: no real players, teams or treasure locations.
title: hunt.rubyconf.at
home_key: treasurehunt
# When this page was first published; without it, every build re-dates it.
date: 2026-10-22
description: hunt.rubyconf.at, the location-based treasure hunt Muhamed Isabegovic built for RubyConf Austria 2026 in Vienna, now open source for any conference to rebrand and self-host.
image: /images/social/project-treasure-hunt.png
thumb: /images/projects/treasure-hunt/thumb
lead: A treasure hunt across Vienna for RubyConf Austria 2026, where every clue unlocks only near its real place. Now open source, so any conference can run its own.
cta: { label: Visit hunt.rubyconf.at, url: "https://hunt.rubyconf.at" }
links:
  - { label: hunt.rubyconf.at, url: "https://hunt.rubyconf.at", note: "kept online as the reference" }
  - { label: Source on GitHub, url: "https://github.com/Ruby-Austria/treasure_hunt", note: "Ruby-Austria/treasure_hunt, MIT" }
  - { label: Why I open-sourced it, url: "/brain/treasure-hunt-open-sourced/", note: "a note in my brain" }
facts:
  - { label: Role, value: "I built it, for the conference I co-organised" }
  - { label: Event, value: "RubyConf Austria 2026, Vienna, 29 to 31 May 2026: two hunts, 39 clues" }
  - { label: Built with, value: "Rails 8.1, Hotwire, Tailwind, Solid Queue, PostgreSQL; Kamal or Railway" }
  - { label: Tests, value: "419 tests, 89% line coverage" }
  - { label: License, value: "MIT, Ruby Austria" }
hero:
  kind: phones
  caption: The landing page and a clue in progress, on demo data.
  items:
    - { src: /images/projects/treasure-hunt/landing, alt: "The landing page: Hunt for treasure across Vienna. Two hunts crafted for RubyConf Austria attendees; one ends at a 3,000 euro treasure chest." }
    - { src: /images/projects/treasure-hunt/clue, alt: "A clue in progress: The Hidden City, clue 8 of 19, The Drawn Curtains, with a hint button and a Check if I'm close button." }
problem:
  title: A conference that spills into the city.
  text: |
    At RubyConf Austria 2026, attendees explored Vienna in teams, solving clues that only make sense where they stand.

    The city is the board. Each clue is a riddle about a real place, and it unlocks only when the team is there. Two routes ran across the three days of the conference; one ended at a treasure chest.
features:
  - title: Clues that unlock where they stand.
    text: |
      A team checks its position, and the app answers cold, closer, warm or hot, until it is close enough to claim the clue. The check runs on the server, against the clue's own location.
    media:
      kind: phones
      caption: "Getting closer, then close enough to claim."
      items:
        - { src: /images/projects/treasure-hunt/closer, alt: "A clue screen with the message Getting closer! Keep going." }
        - { src: /images/projects/treasure-hunt/hot, alt: "A clue screen with the message You're very close! Time to claim! and a green Claim the clue button." }
  - title: Hints on a cooldown, teams on a leaderboard.
    text: |
      A stuck team can reveal a hint, and the next one waits thirty minutes. Teams share their progress, and a live leaderboard shows every route, so the hunt stays a race to the end.
    media:
      kind: phones
      caption: A revealed hint with its cooldown, and the standings.
      items:
        - { src: /images/projects/treasure-hunt/hint, alt: "A revealed hint and a countdown: next hint in 29 minutes 58 seconds." }
        - { src: /images/projects/treasure-hunt/leaderboard, alt: "The leaderboard: teams on two routes with their progress, the player's own team marked You." }
  - title: Rebrand it in one file.
    text: |
      Everything about the event, from its name and city to its dates, colour and logo, lives in one file. Hunts and clues are built in the admin or as seed files, and the RubyConf Austria hunts ship as a worked example. It deploys with Kamal or Railway; for a few hundred phones, a small box is enough.
    media:
      kind: code
      label: config/conference.yml
      code: |
        # Conference branding — the single place to rebrand the app for your event.
        # Everything here is safe to change; no code edits needed.
        conference:
          name: "RubyConf Austria 2026"
          short_name: "RubyConf Treasure Hunt"
          city: "Vienna"
          dates: "May 29–31, 2026"
          theme_color: "#e30818"
          logo_asset: "rubyconf_logo.svg"
          website_url: "https://rubyconf.at"
  - title: An admin for the organisers.
    text: |
      Hunts, clues, locations, attendees and teams are managed in one admin, with bulk entry for attendees.
  - title: A web app you install.
    text: |
      It installs to the home screen as a progressive web app, with an offline page when the signal drops in an old city centre. Clues are checked and claimed online.
  - title: Tested, and kept that way.
    text: |
      419 tests run with every change, alongside Brakeman, RuboCop and the ERB lint in CI. The public history starts from one fresh commit of the finished platform.
shows:
  title: What it shows about how I work.
  text: |
    I build the thing the event needs, run it live for the people in the room, and then make it useful for the next person: documented, configurable in one place, tested, and open. Organising a conference and shipping its software in the same months is the kind of ownership I bring to a team.
  link: { label: The community I bring together, url: "/#h-community" }
---
