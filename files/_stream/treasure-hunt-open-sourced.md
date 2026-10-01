---
layout: stream-entry
title: "Your conference can have a treasure hunt now"
source: "shipped 1 October 2026"
url_external: "https://github.com/Ruby-Austria/treasure_hunt"
type: note
date: 2026-10-01
created_at: 2026-10-01T18:00:00+02:00
tags: [ruby, rails, conferences, open-source, treasure-hunt, pwa, rubyconf]
---

The app that sent RubyConf Austria 2026 attendees hunting across Vienna is open source: [treasure_hunt](https://github.com/Ruby-Austria/treasure_hunt), MIT-licensed, under the Ruby Austria org.

**What organizers get.** A Rails 8.1 PWA with GPS proximity checks per clue, team play, hints on cooldowns, live leaderboards, and offline support for shaky venue WiFi. Rebranding is one file (`config/conference.yml`: name, city, dates, theme color, logo). Deploy with the included Railway config or Kamal. The two actual Vienna hunts ship under `examples/rubyconf-austria/` — 34 hand-walked stops with tuned radii and playtested hints — as living documentation of what a good hunt looks like.

**Two details from the extraction I enjoyed.**

- *The privacy gate.* The production repo carried real attendee emails in migrations and a CSV of ticket references used as passwords. Instead of scrubbing 138 commits, the public repo starts from one fresh commit: you cannot leak what never entered the tree. Every claim got verified on-device before the flip — 419 tests green, plus a rebrand smoke test that turned the app into "GoatConf 2027" from config alone.
- *The seeds came from replaying history.* Without production database access, I replayed all 71 migrations into a scratch Postgres and dumped the final hunt state. The migration log was the backup.

**One honest caveat.** The system tests need a browser, so they only ran in CI, not during the on-device verification. Everything else — models, controllers, integration, mailers — ran green twice: once mid-extraction, once after the security updates (Rails 8.1.4, Puma 8) that the first CI run demanded.

If you run a hunt at your conference, tell me about it — and consider contributing your hunt as another example.
