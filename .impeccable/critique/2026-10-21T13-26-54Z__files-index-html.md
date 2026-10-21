---
target: muhamed.at, all sections, mobile and desktop
total_score: 25
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 2
target_identity: "file:/home/muhamed/projects/muhamed.github.io/files/index.html"
target_fingerprint: "sha256:24c50863c88dfdbaa28f6fc6d83823c3d5a9a10d2a21ea9408f5f0f8d605df71"
target_path: /home/muhamed/projects/muhamed.github.io/files/index.html
timestamp: 2026-10-21T13-26-54Z
slug: files-index-html
---
Method: dual-agent (A: design-review subagent, B: detector + browser subagent). Scope: whole site at 320/360/390/820/1440, after the fifteenth change (assessed before the highlights section was removed).

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Tag filters show no count or pressed state |
| 2 | Match System / Real World | 3 | Jargon ("harness extensions"), "Brain" label, "From announced" meta bug |
| 3 | User Control and Freedom | 3 | Menu closes on Esc; contact is mailto-only with no copy fallback |
| 4 | Consistency and Standards | 2 | About/CV in Markdown styling; two date formats; closing band only on some pages |
| 5 | Error Prevention | 3 | Tag tap then typing concatenates the query |
| 6 | Recognition Rather Than Recall | 3 | CV missing from the top nav and menu |
| 7 | Flexibility and Efficiency | 3 | Search, tags, feeds, PDF, JSON Resume |
| 8 | Aesthetic and Minimalist Design | 2 | ~14 mobile screens; Zlatko quoted three times; chip walls |
| 9 | Error Recovery | 3 | Good empty state |
| 10 | Help and Documentation | n/a | Persuade/content site |
| Total | | 25/36 | Acceptable (69%) |

## Priority Issues
1. [P1] Mobile home too long, Services around screen 5 (testimonials-first costs ~2.5 screens). Fix: one quote + "2 more" on mobile, close double gaps, cut the chip wall. Command: distill.
2. [P1] No concrete next step for a Review buyer: no price anchor, no sample deliverable, no per-offer button. Command: clarify.
3. [P2] Evidence pages off-system: About in Markdown styling, About/CV duplication, inconsistent page endings. Command: polish.
4. [P2] Fragile states: mailto without copy fallback, 29px closing email link, filter chips without aria-pressed/count, query concatenation, no scroll lock under the open menu. Command: harden.
5. [P2] Tablet 700-960: hero void beside the portrait, services and logos in one column. Command: adapt.

## Detector
Sources: 19 tight-leading (cv.html pt units, false positive), 1 undersized-ui-text (svg-icons.html, dead include). Build: 62 cramped-padding (hairline lists, false positive), 8 advisory stripes (placeholder only), 2 flat-type-hierarchy (footer label h2s), 1 side-tab (.offer-outcome, real). Overlay: side-tab on /services/, about-grid sticky aside (false positive), 10 line-length on /cv/ desktop (real, minor). Mobile: no overflow at 320/360/390, min contrast ~5.7:1, remaining small targets: footer link widths (X 12px), webring widget, row-name links 29px, closing email 29px, /about/ inline links 19px, CV PDF button 37px, brain chips 28px.

## Persona Red Flags
Jordan: Brain/AI-native/pi harness/tabula unexplained; three role labels. Casey: 14 screens, offer at screen 5, small closing email link. Riley: filter query concatenation, no pressed state, scroll under the menu, blue native clear. Hiring manager: CV not in nav, "Isabegovic Muhamed" reads as a typo, "I'm rich!" without context. CTO: no price, sample, per-offer button, reply-time promise.

## Questions
1. On mobile, may testimonials collapse to one quote so Services moves up?
2. Can Review carry a public "from" price or a sample-report outline?
3. Should About become the story page that hands every fact to /cv/?
