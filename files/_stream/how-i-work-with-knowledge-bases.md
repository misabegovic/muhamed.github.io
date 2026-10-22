---
layout: stream-entry
title: "How I work with knowledge bases: decisions anchored to code, read before the edit"
source: "enola-guides, guides 9 to 12"
url_external: "https://github.com/misabegovic/enola-guides"
type: note
date: 2026-10-22
created_at: 2026-10-22T10:00:00+02:00
tags: [knowledge-base, agents, enola, enola-guides, adr, architecture, hooks, ai-native]
---

This is how I work with coding agents day to day: a knowledge base that the code and the agents both answer to. I wrote the method down in [enola-guides](/projects/enola-guides/), guides 9 to 12; this is the version without the YAML.

**Decisions live next to the code they govern.** A decision page names the files it governs. So any file can answer "which decision applies to me?", and a law can require that code under a decision has its page. When the code moves and the decision does not, that is visible, not a surprise three months later.

**Numbers carry their receipt.** When a page says "`Order` has 41 dependents", it cites the receipt the number was read from: the commit, the enola version, a fingerprint. A script can check it again. A claim nobody can re-check is a sentence, not a fact.

**Findings are judged once.** What the graph reports is a candidate. I check it against the code and record it in a ledger as accepted, rejected or noise, so the next session does not argue about it again.

**Four moments, four hooks.** The intent-first gate holds the agent's first edit in a repository once and shows what governs the file. The turn record notes what moved. Stop-time debt holds once when code under a decision changed and the decision did not. Session refresh rebuilds the graph when the code has moved on. Each one forces a reading, never a verdict: the retry goes through, and people decide.

**Skills ask at a fixed moment.** A deep dive before planning, a claim check while taking in a new source, drift on a schedule, citation hygiene, and the blast radius before a change. The value is the moment, not the prompt.

**When the tool is missing, say so.** The wrapper under the skills prints one line and exits cleanly when enola or its config is not there. "The graph was not asked" stays different from "the graph agreed".

I run my own work this way, across twenty repositories, and this site runs on the same idea through [pi-brain](https://github.com/misabegovic/pi-brain). If you want it in your team, that is [what I set up](/services/#ai-native).
