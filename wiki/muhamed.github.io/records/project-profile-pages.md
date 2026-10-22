---
kind: record
status: current
confidence: medium
implemented_in:
  - files/_config.yml
  - files/_layouts/project.html
  - files/_includes/project-media.html
  - files/projects.html
  - files/_projects/enola.md
  - files/_projects/enola-guides.md
  - files/_projects/usput.md
  - files/_data/home.yml
  - files/_includes/home-page.html
  - files/work.html
  - files/_includes/site-footer.html
  - files/llms.txt
  - files/llms-full.txt
  - files/_stream/how-i-work-with-knowledge-bases.md
decided_by: wiki/muhamed.github.io/adrs/project-profile-pages.md
sources:
  - files/_projects/enola.md
  - files/_projects/enola-guides.md
  - files/_projects/usput.md
  - files/_projects/knowledge-bases.md
  - files/_projects/brain.md
  - files/_projects/pi-brain.md
---

# Record — Project profile pages

Delivered on 2026-10-22 in a831a16 and cd9513a, pushed with 6c9286f, deployed and checked live: `/projects/`, `/projects/enola/`, `/projects/enola-guides/` and `/projects/usput/` answer 200, as do the new brain entry and the Usput video (source: files/_projects/usput.md).

- A `projects` collection at `/projects/<slug>/` with one layout, and a `/projects/` index in two groups (source: files/projects.html).
- Three profiles: enola (real `enola check` output from the stock upstream binary; `plan` output from the owner's build), enola-guides (its intent-first hook and lint run on a copy of examples/rails-shop), and Usput.ba (screenshots of usput.ba, and a 29 s web cut of the usput-promo Remotion video without the unsourced "3.700+" scene) (source: files/_projects/enola.md, files/_projects/enola-guides.md, files/_projects/usput.md).
- brain and enola-guides joined the homepage tools list; the tool rows, /work/ and the footer link to the profiles; llms.txt and llms-full.txt list them.
- A brain entry, "How I work with knowledge bases", drawn from enola-guides guides 9 to 12.

First amendment delivered on 2026-10-22 in 1d5330b, deployed and checked live: `/projects/knowledge-bases/` (the practice, led by a 37 s Remotion video from ~/projects/knowledge-base-promo), `/projects/brain/` and `/projects/pi-brain/` answer 200 (source: files/_projects/knowledge-bases.md, files/_projects/brain.md, files/_projects/pi-brain.md). Nothing on them names or sizes a client's system.

Open: later profiles (hunt.rubyconf.at, the card game); desktop screenshots of usput.ba are 1440 px wide and should be retaken from a normal browser or a local server; Usput.ba's own minesweeper still has the boards Minolovac replaced on 2026-10-22.

## Related

- [ADR: A profile page for each project](../adrs/project-profile-pages.md)
- [ADR: A professional homepage, with the brain and writing one click away](../adrs/professional-homepage-with-brain-and-writing.md)
