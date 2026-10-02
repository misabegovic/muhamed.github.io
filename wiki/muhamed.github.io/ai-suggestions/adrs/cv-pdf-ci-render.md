---
title: "Render the CV PDF in CI with Chromium"
scope: muhamed.github.io
kind: adr
status: proposed
confidence: low
ai_suggestion: true
sources:
  - files/_cv/cv.html
  - wiki/muhamed.github.io/adrs/professional-homepage-with-brain-and-writing.md
created: 2026-10-02
updated: 2026-10-02
author: pi-brain-agent
---

> **This is an AI-suggested draft.** It has not been approved. Treat every
> statement as a proposal awaiting human review, not as a decision.

## Context

The CV PDF (`files/cv/Muhamed_Isabegovic_CV.pdf`) is rendered with Chromium from `files/_cv/cv.html` (source: wiki/muhamed.github.io/adrs/professional-homepage-with-brain-and-writing.md, twelfth change). It must be re-rendered whenever the CV source changes.

On 2026-10-02 the CV source gained a recommendation and an open-source entry, but the PDF could not be regenerated on the owner's Termux device: Chromium is not installable there (GUI dependencies), and WeasyPrint ignores the variable-font weight range (`font-weight: 400 900`) that the design depends on, producing visibly degraded typography.

The rendered PDF is therefore stale relative to its source, and every future CV edit on this device hits the same wall.

## Decision (proposed)

Add a GitHub Actions workflow `.github/workflows/cv-pdf.yml` that:

1. Triggers on pushes to `main` touching `files/_cv/**`.
2. Renders `files/_cv/cv.html` to PDF with headless Chromium (`--print-to-pdf`, A4) on `ubuntu-latest`, where Chromium runs natively.
3. Commits the result back to `files/cv/Muhamed_Isabegovic_CV.pdf` with a `cv pdf: re-render` message (skip-ci guard against loops).

## Alternatives considered

1. **Render locally with WeasyPrint** — works on-device but drops the variable-font range; typography visibly diverges from the site design. Rejected for quality.
2. **Render on the owner's desktop manually** — the status quo; fails every time the CV is edited from the phone, which is now the primary environment. Rejected for reliability.
3. **Keep hireable as the renderer** — superseded by the twelfth change in the homepage ADR (Chromium from `_cv/cv.html` is the current truth).

## Consequences

- The PDF can never silently go stale again: source change → fresh PDF on the next deploy.
- A bot commit lands on `main` after CV edits (with skip-ci to avoid loops).
- First workflow addition beyond the existing pages/validate setup; follows the same Actions-based deployment model the repo already adopted.

## Open questions for the human reviewer

1. Is a bot commit on `main` acceptable, or should the workflow open a PR with the refreshed PDF instead?
2. Should the workflow also verify the PDF is two pages and fail loudly otherwise (layout regressions)?

## Related

- [ADR: professional-homepage-with-brain-and-writing](wiki/muhamed.github.io/adrs/professional-homepage-with-brain-and-writing.md) (twelfth change — current rendering process)
