---
layout: post
title: "AI-augmented development: how I actually work"
categories: [AI, Workflow]
tags: [ai, agents, workflow, adr, spec-driven, pi-brain, enola, methodology, rails, ruby]
excerpt: The first in a series documenting my methodology for building with AI agents. Intent before code, decisions as contracts, agents that draft but don't decide, and architecture checked as law in CI. With real artifacts, not slideware.
---

For the past year or so I've been obsessed with a single question: how do you actually work with AI tools in a way that scales?

Not "which model is best this month." Not "look at this demo where an agent builds a todo app." The boring version of the question: you, a real codebase, a team, deadlines, and agents that can now do most of the typing. What does the work look like so that six months in, the codebase is still yours?

I've been answering this question the only way I know how: by building the tooling for it ([pi-brain](https://github.com/misabegovic/pi-brain), my contributions to [enola](https://github.com/enola-labs/enola)), using it daily at work and on my own projects, and letting it fail on me until the rules that survived were the ones worth keeping. This post is the overview of what survived. The next posts in this series will go deep on the individual pieces.

Fair warning before we start: none of this is a framework you install. It's a set of working agreements between me and my agents. Some of them are enforced by tools, some by files the agent reads, some by me saying "no" a lot in the beginning.

## The problem isn't the code

Agents made code cheap. That part worked. What broke is everything around the code.

The old software development lifecycle assumed code was expensive, so we built ceremony around producing it: requirements, design docs, implementation, review, QA. Boris Tane [called it](https://boristane.com/blog/the-software-development-lifecycle-is-dead/): agents didn't make the SDLC faster, they killed it. The loop is now tight and continuous: intent goes in, code plus tests come out, you check if it works, you ship or iterate.

Here's what I noticed living inside that loop: the scarce artifact is no longer code. It's intent. Why does this module exist? What did we decide last month, and what did we reject? What must never happen in this codebase? When the agent writes most of the code, those answers are the only thing separating "my system" from "a pile of plausible diffs I approved while tired."

And I have approved plausible diffs while tired. Everyone using these tools has. The agent produces something reasonable-looking, the tests pass, you merge. Repeat that fifty times and one day you open the project and realize nobody, human or machine, remembers why anything is the way it is. The code is fine. The plot is lost.

So my whole methodology comes down to one move: treat intent, decisions, and constraints as first-class artifacts that live in the repository, in a form agents can read and be governed by. Everything else follows from that.

## The four working agreements

### 1. Stop and shape

Agents default to "implement first." For everyday changes that default is fine, even great. For structural decisions it is exactly wrong, and the agent cannot reliably tell the difference on its own, so you have to draw the line for it.

In my repos the line is drawn in the agent's instructions, and it's blunt. From the actual file:

> Agents default to "implement first." In pi-brain that default is wrong for structural decisions. Treat every structural ask as a shape request until proven otherwise.

Before touching files, the agent walks a checklist: is this structural? Is there an accepted decision record covering it? Does it violate an active constraint? Did the human approve it in this session? Any "no" means stop, draft a proposal, and wait.

"Structural" is defined concretely, not vibes: repository layout, CI configuration, the agent's own instructions, onboarding or removing repositories. It's written as a constraint file with `severity: must`, and the agent reads constraints before accepting any piece of work. A must violation blocks the work until a human resolves it.

### 2. Decisions are written down, or they didn't happen

When something structural does need deciding, it becomes an ADR: context, the decision, alternatives considered, consequences. Nothing exotic, this is [MADR](https://adr.github.io/madr/)-style decision records, a practice older than the current AI wave. What's new is who they're for. I used to write ADRs for future colleagues. Now I write them for future agents too, and the agents write drafts of them for me.

Two rules make this work with agents in the loop:

**Confidence floors.** Anything an agent authors on its own starts at `confidence: low`, and it cannot promote its own work to high confidence in the same change. A human touch is what raises confidence. This one rule kills the failure mode where an agent's guess quietly hardens into "established fact" because it was written down somewhere.

**Citations or it's fiction.** Every claim in the knowledge base has to trace to an immutable source: a snapshot of a changelog, a saved conversation, a repo state. Sources never get rewritten to match the story; if reality changed, you snapshot the new reality and update the page. Tooling checks that cited sources exist and links resolve. Agents are confident writers with flexible memories. Citations are how you keep them honest, and honestly, how you keep yourself honest too.

### 3. Agents draft, humans promote

My agents are allowed to be proactive. They scan, synthesize, notice things, propose. But everything they produce on their own initiative lands on a designated shelf (`ai-suggestions/` in my setup) and stays there until I promote it. The approved shelves are write-protected by convention: an agent cannot move its own suggestion to "accepted," start implementing an unapproved idea, or edit an approved decision.

This sounds bureaucratic until you see what it buys you: you can crank the autonomy way up without losing control of what's true. The agent maintaining this website runs autonomous maintenance passes, ingests sources, and drafts syntheses while I do other things. I review a shelf, not a stream of interruptions. The ratchet only turns when I turn it.

The same principle applies to shipping: every commit cites the decision it implements, one bet per pull request, and after something lands, the agent writes the delivery record. The paper trail isn't overhead on top of the work. With agents doing the typing, the paper trail is the work I actually do.

### 4. Architecture is law, and CI is the judge

Everything above governs what agents decide. This last agreement governs what they build, because review alone doesn't scale to agent-volume output. An agent can respect every decision record and still, diff by plausible diff, dissolve your architecture: a new dependency cycle here, a skipped layer there, a model reaching into another module's tables because that was the shortest path to green tests.

So the architecture itself gets declared as law, in code, checked in CI. That's what [enola](https://github.com/enola-labs/enola) does: it parses the codebase into a fact graph and checks declared rules against this change. One owner per table. Mutations go through a policy. This layer never imports that one. The laws read as sentences (writing them that way in Ruby is one of the parts I contributed), agents read the graph before they edit, and the verdict lands where CI reads it. A breach isn't a review comment somebody may or may not make. It's a red build with the smallest suggested cut sitting next to it.

The mental shift here matters more than the tool: with agents writing most of the code, "the architecture" can't live in senior engineers' heads anymore. Heads don't review four hundred diffs a week. Laws do.

## A real example, receipts included

Abstract methodology posts are cheap, so here's the workflow catching a real mistake in this very repository.

This site runs on a clone of pi-brain, and when upstream v0.4.0 shipped, the obvious move was to run the upstream migration script. The agent doing the upgrade flagged it as structural instead of just running it, which triggered stop-and-shape. Drafting the ADR forced the "context" section, and writing the context surfaced the problem: the migration script assumes a pure pi-brain clone and relocates `.github/`. This repo is a hybrid, both a knowledge base and a published Jekyll site, and that relocation would have silently killed the site's deploy workflow.

The [ADR](https://github.com/misabegovic/muhamed.github.io/blob/main/wiki/muhamed.github.io/adrs/update-pi-brain-v0-4-0-hybrid-clone.md) weighs five alternatives, from "run the script as-is" (rejected: kills the deploy) to "split into two repositories" (rejected: a much bigger project than the upgrade itself). The decision was a hybrid carve-out: adopt the new version, keep the site-critical paths in place, and write down that these paths are now clone-local overrides that every future upgrade has to review by hand. Approved, implemented, delivery record written, done.

Without the workflow, that upgrade is a confident agent running a migration script, a broken deploy discovered two days later, and an afternoon of archaeology. With it, the failure got caught at the cheapest possible moment: before anything happened, by the act of writing down what was about to happen. That's the whole trick, honestly. Most of the value is in what the writing forces you to notice.

## Honesty clause

Before anyone (me included) treats this as a solved problem: it isn't.

The ceremony has a cost, and scoping it is an ongoing negotiation. That's why the must-constraint applies to structural changes only; if every one-line fix needed an ADR, I'd have abandoned this in a week. The confidence floors and citation rules depend on tooling that I mostly had to build myself, which is a real adoption barrier for a normal team. And the evidence base is me, my projects, and my day job building AI products, not a hundred teams. Some of these rules will turn out to be scar tissue specific to my scars.

But the core bet I'll defend anywhere: agents amplify whatever process you actually have. If your intent lives in chat scrollback and your architecture lives in someone's head, agents will amplify that into chaos, fast, and it will feel productive the entire time. If intent, decisions, and constraints live in the repo where agents can read them and CI can enforce them, agents amplify that instead. Then delegation gets to be boring, which is the goal.

The site you're reading is the working demo: maintained by an agent, under these exact rules, with the decision records [in the open](https://github.com/misabegovic/muhamed.github.io/tree/main/wiki/muhamed.github.io/adrs).

Next in this series: a deep dive on shaping and decision records with agents (the templates, the failure modes, what the agent drafts versus what I write). After that, declaring architectural law with enola on a Rails codebase, from zero to a caught breach in CI.

If you're trying to get a Rails or product engineering team working this way and want help, that's literally [what I do](/services/).
