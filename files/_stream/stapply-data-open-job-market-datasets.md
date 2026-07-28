---
layout: stream-entry
title: "Stapply Data: open job-market datasets across 15 ATS platforms"
source: "sources/web/2026-07-28--data-stapply-ai.md,sources/repo/2026-07-28--github-com-kalil0321-ats-scrapers.md"
type: note
date: 2026-07-28
created_at: 2026-07-28T10:30:00+02:00
tags: [ai, agents, recruitment, data, ats, open-data]
---

[Stapply Data](https://data.stapply.ai/) publishes **open snapshots of jobs and companies aggregated across 15 ATS platforms** — Ashby, Greenhouse, Lever, Workday, and others — as free CSV or Parquet downloads. The dataset is produced by [`ats-scrapers`](https://github.com/kalil0321/ats-scrapers), an open-source Python toolkit: **4.2M+ live jobs from 63,000+ companies across 49 sources**, with more than 50 reusable scraper adapters.

Why this matters for the recruitment-agent thread:

- **Raw signal, not LinkedIn noise.** Most job discovery today is either keyword search on aggregators or recruiter spam. A clean, downloadable dataset of actual open roles is the kind of structured input an agent can reason over without scraping.
- **ATS-agnostic view.** Because it spans 15+ platforms, it avoids the trap of building against just one vendor's API. An agent could normalize location, salary, seniority, and skills across Greenhouse, Ashby, Lever, Workday, SmartRecruiters, SuccessFactors, etc.
- **Toolkit, not just data.** `ats-scrapers` provides `search()`, `find_company()`, and per-ATS scraper classes with a normalized `Job` schema. You can query the hosted dataset with no API key or run the scrapers yourself.
- **Perfect fuel for a "Jack"-style candidate agent.** Drop the dataset into a local vector store or feed it to an agent that ranks roles by fit, flags stale postings, and surfaces roles that never reach LinkedIn.
- **Complements the MCP idea.** A hiring platform with an MCP could expose its *own* live openings; Stapply provides the aggregated baseline for discovery when no such interface exists yet.

The Stapply site is a JS-rendered SPA, so the ingestion only captured its shell and meta description. The GitHub repo fills in the actual scale, architecture, and API surface.

(sources: [Stapply Data](../sources/web/2026-07-28--data-stapply-ai.md), [`kalil0321/ats-scrapers`](../sources/repo/2026-07-28--github-com-kalil0321-ats-scrapers.md))
