---
kind: note
status: archived
confidence: low
saved_at: 2026-07-27
sources:
  - sources/web/2026-07-23--usput-ba.md
  - sources/web/2026-07-23--rubynative-com.md
  - sources/web/2026-07-23--boristane-com-blog-the-software-development-lifecycle-is-dead.md
  - sources/web/2026-07-23--buzz-xyz.md
  - sources/web/2026-07-23--freeq-at.md
  - sources/repo/2026-07-23--github-com-misabegovic-pi-brain.md
  - sources/web/2026-07-23--aicoding-leaflet-pub.md
  - sources/web/2026-07-23--aicoding-leaflet-pub-rss.md
  - sources/web/2026-07-23--langfuse-com.md
  - sources/repo/2026-07-23--github-com-langfuse-langfuse.md
  - sources/web/2026-07-23--herdr-dev.md
  - sources/web/2026-07-23--developers-openai-com-api-docs-guides-flex-processing.md
  - sources/web/2026-07-23--11factor-org.md
  - sources/web/2026-07-23--elevenmessenger-com-unfiltered.md
  - sources/web/2026-07-23--home-elevenmessenger-com.md
  - sources/web/2026-07-23--ti-to-home.md
  - sources/web/2026-07-27--rubyonrails-org-docs-reference-apps.md
  - sources/repo/2026-07-27--github-com-basecamp-writebook.md
  - sources/repo/2026-07-27--github-com-basecamp-fizzy.md
  - sources/repo/2026-07-27--github-com-basecamp-once-campfire.md
  - sources/doc/2026-07-27--vision-md.md
---

# Auto-ingest batch 2026-07-23 — synthesis

This batch of 22 sources was auto-ingested during the first big capture pass. Most of it has already been turned into stream entries, decisions, or RFC drafts. This note records where each source landed so the batch can be archived.

## Usput.ba product direction

- `sources/web/2026-07-23--usput-ba.md`
- `sources/doc/2026-07-27--vision-md.md`

Landed as the decision **"fix the app first, then generate content"** and the stream note **"Usput.ba next phase"** (`files/_stream/usput-next-phase.md`). The Platform vision doc became the source for the "bring your own agent" RFC draft.

## Ruby Native / mobile

- `sources/web/2026-07-23--rubynative-com.md`

Folded into the Usput next-phase note: Ruby Native is the planned path to iOS/Android apps without writing Swift or Kotlin.

## Intent agents and the end of the SDLC

- `sources/web/2026-07-23--boristane-com-blog-the-software-development-lifecycle-is-dead.md`
- `sources/web/2026-07-23--buzz-xyz.md`
- `sources/web/2026-07-23--freeq-at.md`
- `sources/web/2026-07-23--aicoding-leaflet-pub.md`
- `sources/web/2026-07-23--aicoding-leaflet-pub-rss.md`

Landed as **"Intent agents and the end of the SDLC"** (`files/_stream/intent-agents-and-the-end-of-sdlc.md`) and the broader "shape your own tools" thread.

## pi-brain / Pi workflow

- `sources/repo/2026-07-23--github-com-misabegovic-pi-brain.md`

Drove the migration of this clone to the v0.3.0 package-resolved model and the open task **"learn how Pi is built to evolve pi-brain."**

## Observability and prompt experiments

- `sources/web/2026-07-23--langfuse-com.md`
- `sources/repo/2026-07-23--github-com-langfuse-langfuse.md`

Landed as **"Langfuse for prompt experiments and scoring"** (`files/_stream/langfuse-for-prompt-experiments-and-scoring.md`).

## AI infrastructure / agent multiplexing

- `sources/web/2026-07-23--herdr-dev.md`

Landed as **"Herdr agent multiplexer"** (`files/_stream/herdr-agent-multiplexer.md`).

## Cost and API strategy

- `sources/web/2026-07-23--developers-openai-com-api-docs-guides-flex-processing.md`

Landed as **"OpenAI Flex Processing and webhook gaps"** (`files/_stream/openai-flex-processing-and-webhook-gaps.md`).

## Cathedral-building / 11factor / Go

- `sources/web/2026-07-23--11factor-org.md`
- `sources/web/2026-07-23--ti-to-home.md`
- `sources/web/2026-07-23--home-elevenmessenger-com.md`
- `sources/web/2026-07-23--elevenmessenger-com-unfiltered.md`

Landed as the draft note **"Paul from Tito — cathedrals, Go, and the 11 factors"** (`wiki/muhamed.github.io/notes/paul-from-tito-cathedrals-go-and-11-factors.md`) and the stream note **"Is Ruby dead? Cathedrals in Go"** (`files/_stream/is-ruby-dead-cathedrals-in-go.md`).

## Rails reference apps

- `sources/web/2026-07-27--rubyonrails-org-docs-reference-apps.md`
- `sources/repo/2026-07-27--github-com-basecamp-once-campfire.md`
- `sources/repo/2026-07-27--github-com-basecamp-writebook.md`
- `sources/repo/2026-07-27--github-com-basecamp-fizzy.md`

Landed as **"Rails reference apps: lessons from Campfire, Writebook, and Fizzy"** (`files/_stream/rails-reference-apps-lessons.md`).

## What's still open

- The Langfuse ideas still need to be connected to Usput's Platform workflow.
- The OpenAI Flex / webhook gap analysis should be revisited when Usput starts running high-volume AI workloads.
- The Paul/Tito conversation is saved as a draft for future publication.

---

*Archived. The auto-ingest batch can be cleared.*
