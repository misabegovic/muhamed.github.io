---
kind: source
source_kind: conversation
ingested_at: 2026-11-25
summary: The fourth round on the CV the same day. The owner chose a shorter summary from four options, asked for a Word version and a fresh outside review, and added that he ships behind Flipper feature flags. The fresh review found that the bullet dots drawn in the forty-third change had broken the PDF's stored text order; he asked for the fix to be published at once. This records his answers.
---

# Conversation: the CV, fourth round, the owner's answers

Request (owner, 2026-11-25): "Let's continue iterating and finding ways to improve it. Offer options for the summary".

## Summary

Offered four new summaries built from facts on the CV (short and plain; hands-on leader; AI engineer; proof first), he chose "1. Short and plain":

"I make software and lead the teams that make it, and have for ten years. Lately that means AI features in hiring software and data pipelines with AI agents; before that, SaaS products in Ruby on Rails and trading systems in C++. I work with agents writing the code and engineers reviewing it, and I build open-source tools that keep that code reliable."

## What next

From four offers he ticked "Fresh outside review" and "Word version for upload forms".

## Flipper

"Also, shipping features behing flipper flags. Flipper feature flags". Asked where: "the ATS client, Meisterlabs, the recruiting startup, Usput.ba".

## The defect a fresh review found

Two reviewers who had not seen the earlier work read the draft. One ran several text extractors and found that, read in the file's stored order (pdftotext -raw, pypdf), every heading on a page came before every bullet on it, so a parser reading that way gives Meisterlabs, Experfy and Marvelsoft no bullets. The cause was the bullet dots of the forty-third change, drawn in positioned boxes, which Chromium writes to the PDF after everything else. It had been live since that change. The agent's check until then compared the words extracted, not their order.

Told this, the owner answered "Yes, publish now" to publishing the fix with the summary and the Flipper lines.

## Three judgment calls from the reviews

- Two labels inside the company block ("Client engagements", "Own product and events"): "No labels".
- "Retrieval (RAG) on pgvector" at the ATS client and the recruiting startup, which both reviewers read as bolted on: "Keep the lines as they are".
- Giving the Meisterlabs deployment split its own bullet again: "Keep it folded in".
