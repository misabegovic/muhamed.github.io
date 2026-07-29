---
layout: stream-entry
title: "Langfuse for prompt experiments and scoring"
source: "Langfuse GitHub"
url_external: "https://github.com/langfuse/langfuse"
type: note
date: 2026-07-23
created_at: 2026-07-23T12:15:00+02:00
tags: [ai, llm, langfuse, prompts, evaluation, observability]
---

Been diving into [Langfuse](https://github.com/langfuse/langfuse) as the likely backbone for managing Usput's AI workflows.

The parts I care most about:

- **Prompt Management** — version-controlled prompts with client/server caching, so we can iterate without adding latency.
- **Datasets & Experiments** — structured test sets and benchmarks for continuous improvement before deployment.
- **Evaluations** — LLM-as-a-judge, code evaluators, user feedback, manual labels, and custom pipelines.
- **Scoring** — deterministic checks mixed with model-based judges, so we can measure output quality automatically.

This is exactly what we need for the AI-generated content pipeline: trace every generation, score it, run challengers against current prompts, and only promote versions that beat the baseline. The goal is to move from "AI generated and hopefully good" to "measured, compared, and released with confidence."

Self-hosting is also an option, which matters for keeping content and prompts inside our own infrastructure.
