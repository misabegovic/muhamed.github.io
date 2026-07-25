---
layout: stream-entry
title: "Is Ruby dead? Cathedrals in Go, and a rebuild experiment"
source: "Internal note"
type: note
date: 2026-07-25
created_at: 2026-07-25T22:00:00+02:00
tags: [ruby, go, rails, distributed-systems, chat, infrastructure, learning, ideas]
---

Is Ruby dead? Is it time to build cathedrals in Go and other languages?

The question has been sitting with me since talking to Paul from Tito — he's building cathedrals, not in Ruby anymore, now in Go, with principles like [11factor.org](https://11factor.org) behind them. Maybe I need to actually learn Go, and learn how to build distributed infrastructures for things like chat systems, instead of theorizing about it from the Rails side.

So, note to myself — an experiment:

- **Rebuild a Rails project in Go**, and rebuild the infrastructure around it too, not just the app code.
- **Compare cost, speed, and complexity** between the two versions — what does the Go cathedral actually buy, and what does it charge for it?
- **Identify the guard rails** — what keeps you safe in Go where Rails conventions used to?
- **Figure out ways to test** it all — what does a good testing story look like on the other side?

Not a verdict on Ruby. A way to find out for myself.
