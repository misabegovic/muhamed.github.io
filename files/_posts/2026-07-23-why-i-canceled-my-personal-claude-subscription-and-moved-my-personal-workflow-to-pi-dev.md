---
layout: post
title: Why I canceled my personal Claude subscription and moved my personal workflow to Pi.dev
categories: [AI, Workflow]
tags: [ai, claude, pi, workflow, tools, local-first]
excerpt: After months of paying for Claude Pro, I realized the personal assistant model was solving the wrong problem for me. Here's why I switched to Pi.dev.
---

I canceled my personal Claude subscription last month.

Not because Claude got worse. If anything, it keeps getting better. I canceled it because I finally understood what I actually needed from an AI assistant — and a chatbot, even a very good one, wasn't it.

## What I was actually paying for

For a while, Claude felt like the perfect tool. I could drop in a messy thought, paste some code, ask for a rewrite, get a decent answer. It was fast, polite, and often useful.

But over time I noticed a pattern: the sessions were disposable. Every conversation started from zero. The good outputs lived in my clipboard or got copied into random notes. The bad outputs were forgotten. Nothing accumulated. Nothing connected.

I was paying $20 a month for a brilliant intern who forgot everything the moment I closed the tab.

## The problem with chat-as-workflow

Chat is a great interface for exploration. It's a terrible interface for work that spans days, projects, and contexts.

My work doesn't fit into one window. I'm juggling Usput.ba, this site, RubyConf.at, random ideas, research, and whatever else catches my attention. Each of those has history: decisions made, code written, sources ingested, dead ends explored. With Claude, that history was either scattered across transcripts or lost entirely.

I found myself repeating context. Re-explaining projects. Re-pasting code. Re-asking questions I'd already asked. The tool was helping me execute tasks, but it wasn't helping me think across time.

## What Pi.dev does differently

Pi.dev is not a chatbot. It's a coding agent harness that operates on top of a project — in my case, a pi-brain clone that holds my wiki, sources, log, and state.

The difference is structural. Instead of starting each conversation empty, Pi.dev starts with the project context: the files, the decisions, the ingested sources, the open questions. It can read, edit, run commands, and commit changes. It maintains state between sessions because the state lives in the repo, not in a chat thread.

For me, this flips the relationship. I'm not prompting an assistant and hoping it remembers. I'm working inside a system that knows what I'm building.

## What actually improved

**My notes have a home.** When I ingest a source or capture an idea, it goes into the brain. It gets tagged, validated, and connected to other pages. I don't have to remember where I put it.

**My decisions are recorded.** ADRs and PRDs live in the wiki. If I change my mind later, the reasoning is there.

**My workflow is local-first.** I can run everything on my machine. I own the data. I can commit, branch, and revert. This matters more to me than I expected.

**I build in public by default.** The stream on this site is a side effect of the brain workflow. I'm not maintaining a separate blog and a separate notebook. They're the same system.

## What I miss

Claude's voice mode was genuinely nice for thinking out loud. Pi.dev doesn't have that yet. There are also moments where a quick, stateless chat is exactly what I want, and for that I now use the free tier or other tools.

But for the work I care about — building things over weeks and months — the trade-off is clear.

## The bottom line

I didn't cancel Claude because it failed. I canceled it because I outgrew the chatbot model. The interesting AI tools right now aren't the ones that give better answers. They're the ones that stay with the work.

Pi.dev is still early, rough around the edges, and occasionally frustrating. But it's the first tool that feels like it's building with me, not just answering me.
