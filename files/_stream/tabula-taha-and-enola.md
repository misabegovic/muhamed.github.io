---
layout: stream-entry
title: "tabula, taha and enola: memory, hands and eyes for coding agents"
source: "My main tools, how they fit, October 2026"
type: note
date: 2026-10-22
created_at: 2026-10-22T12:00:00+02:00
tags: [tabula, taha, enola, agents, architecture, knowledge-base, ai-native]
---

These three are my main tools now, and they only make full sense together. Each does one job and refuses the others' jobs.

**enola sees the code.** It builds one graph of the whole system from the source, on my machine, with no model in the loop. Laws a team writes as sentences are checked against that graph in CI, and a change is graded only on what it introduced since the pinned baseline. It is the eyes: it does not decide anything, it measures. ([enola](/projects/enola/))

**tabula holds the intent.** It is where a system's decisions live, as plain files in git: what it is, what it should become, which decision governs which file. An agent's first edit is held until the work is aligned with the decision it comes from. Finished work is judged against its stated outcomes by something other than the agent that did it. And when I draw the architecture on its canvas, a "never" arrow compiles into an enola law, so the drawing becomes a rule the code is checked against. It is the memory and the judge. ([tabula](/projects/tabula/), coming soon)

**taha does the work.** It runs a coding agent durably, inside a mandate I write: which repositories, which acts, what budget, until when. Every outward act is journaled before it runs, the agent's shell holds no credentials, and done is tabula's call, not the agent's. It is the hands, and they are tied exactly as tightly as the mandate says. ([taha](/projects/taha/), coming soon)

The loop, end to end. Most of it works today on my own projects; the step that works a gap until it closes on its own is the next piece.

1. I write down what the system should become, in tabula, and draw the parts that must never touch.
2. tabula compiles those lines into enola laws; enola names where the code breaks them today, by file and line.
3. taha takes the gap as a queue, inside a mandate, and works it.
4. Each piece is aligned with its decision before code moves, checked by enola in CI, and evaluated by tabula before it counts as done.
5. What is left is a draft for me to read (or a merge, where I granted one on my own private repository), or a halt with the reason.

No step trusts the agent's own word. The agent is fast and tireless; the files, the graph and the judge are what make it safe to leave alone.

enola is open source and I help build it. tabula and taha are in private development, and their pages say [everything they will do](/projects/tabula/#p-plan). The practice they come from is [how I work with knowledge bases](/projects/knowledge-bases/).
