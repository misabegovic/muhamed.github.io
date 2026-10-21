---
target: muhamed.at, all sections, mobile and desktop
total_score: 24
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 3
target_identity: "file:/home/muhamed/projects/muhamed.github.io/files/index.html"
target_fingerprint: "sha256:24c50863c88dfdbaa28f6fc6d83823c3d5a9a10d2a21ea9408f5f0f8d605df71"
target_path: /home/muhamed/projects/muhamed.github.io/files/index.html
timestamp: 2026-10-21T12-57-56Z
slug: files-index-html
---
Method: dual-agent (A: design-review subagent, B: detector + browser subagent). Scope: whole site, section by section, at 390 / 820 / 1440.

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Static header; no sense of place on a 14.7-screen mobile home |
| 2 | Match System / Real World | 3 | Brain, enola, pi-brain, tabula, "AI-native" unexplained |
| 3 | User Control and Freedom | 3 | Mailto-only buttons; no back-to-top |
| 4 | Consistency and Standards | 2 | Three date formats; About on an old template; closing band only on home/services |
| 5 | Error Prevention | 2 | Unquoted YAML truncates homepage copy |
| 6 | Recognition Rather Than Recall | 3 | No persistent nav/CTA on mobile |
| 7 | Flexibility and Efficiency | 3 | PDF link 24px tall |
| 8 | Aesthetic and Minimalist Design | 2 | 10 home sections, 37 pills, 14 footer links, up to 9 tags per card |
| 9 | Error Recovery | 3 | Good brain empty state; duplicated "Clear filters" |
| 10 | Help and Documentation | n/a | Nothing complex enough to need help |
| Total | | 24/36 | Acceptable (67%) |

## Priority Issues
1. [P1] Truncated homepage copy from unquoted YAML flow mappings, files/_data/home.yml:33-35 ("covering all 7", Usput line cut). Fix: quote values, add a build check. Command: harden.
2. [P1] Evidence deep, anonymous, undated: testimonials at mobile screen ~8; logos not tied to claims; /work/ bullets do not name companies; nested CV roles (Teamtailor, Doctaphone, Recrubo, Usput) undated. Fix: quote + 3-number proof strip under the logos; name companies in /work/ with CV anchors; date every role. Command: layout, then clarify.
3. [P1] Mobile header: no menu, 26px nav targets, 3-row 137px header at 360 with About clipped, 4px overflow at 320, no sticky nav/CTA. Fix: one-row header + Menu toggle, reveal on scroll-up with Get in touch, 44px targets. Command: adapt.
4. [P2] Closing band speaks only to AI buyers; /work/, /cv/, /about/, posts end without an ask; no reply-time promise. Fix: two-path band on every evidence page + reply-time line. Command: clarify.
5. [P2] Mobile density and tablet one-column fallback: stack wall ~1.7 screens, tools jargon, footer ~1.1 screens; 820px hero 45% void, services single column. Fix: shorten stack on home, two columns down to ~720-760, two footer columns on mobile. Command: distill.

## Detector
CLI on sources: 19 tight-leading (cv.html, false positive: pt units), 1 undersized-ui-text (svg-icons.html, dead code). CLI on build: 65 cramped-padding (false positive: hairline lists; overlay found none), 2 flat-type-hierarchy (footer labels, false positive), 1 side-tab (.offer-outcome, on-system), 8 advisory repeating-stripes (placeholder only). Overlay: side-tab on /services/, about-grid column overflow (sticky aside, false positive), 10 line-length on /cv/ desktop (86-97 chars, real). Mobile: no overflow at 390, min contrast 5.17:1, small tap targets on nav (26px), footer (23px, X 12x23), text CTAs (29px), CV links (24px).

## Persona Red Flags
Jordan: unexplained Brain/enola/pi-brain/tabula/AI-native. Casey: no sticky nav/CTA, proof at screen 8, 26px nav. Riley: 360 header clip, 320 overflow, mailto without client, truncated YAML, "From announced" label, native blue search clear. Hiring manager: undated CV roles, tiny PDF link, anonymous work claims, "I'm rich!" on home, AI-only closing ask. CTO booking a review: no price range, no sample report, no reply-time promise.

## Minor Observations
Yellow-tinted pills dilute the single signal; Get in touch x4 on home; From zero to one excerpt repeats title; weak yellow focus on brain search; webring box off-system on dark footer; svg-icons.html dead.

## Questions
1. Why are the conferences, the most checkable proof, the 7th section framed as "I also"?
2. Should home fork after the hero into "Hiring me" / "Bringing me in"?
3. Would a redacted review excerpt sell Review better than 37 pills?
