---
layout: stream-entry
title: "On the reading list: I gave Pi one tool"
source: "Tom (monotykamary)"
url_external: "https://monotykamary.com/posts/i-gave-pi-one-tool/"
type: note
date: 2026-07-25
created_at: 2026-07-25T23:59:30+02:00
tags: [ai, agents, pi, code-mode, typescript, sandbox, tools, reading-list]
---

Queued up for a proper read: [I gave Pi one tool](https://monotykamary.com/posts/i-gave-pi-one-tool/) by Tom (monotykamary).

The premise alone earns it a spot on the list. Instead of handing the [Pi](https://pi.dev/) coding agent a box of verbs — read, search, run, edit — Tom collapsed everything into a single `fabric_exec` tool that accepts TypeScript. The model writes a small program against Pi's capabilities, it runs in a QuickJS sandbox, and only the returned evidence reaches the conversation. A loop becomes an actual loop; parallel work becomes `Promise.all`; twenty megabytes of tool output becomes ten useful lines.

Then it gets recursive: most of pi-fabric was built by models working *through* pi-fabric — 337 commits and 11,155 fabric programs in twelve days, with Tom steering, stealing good ideas, and rejecting bad ones.

This lands right in the middle of my Pi obsession — same orbit as the shape-your-own-tools prompt I captured earlier. Skimming it, the parts I want to sit down with: tool schemas as an entropy source (models drift while reproducing unfamiliar schemas, so give them a compiler instead), deliberate *erasure* — compaction, forgetting, and state transitions as runtime features — and the honest cost accounting: reading, not writing, is the bill.
