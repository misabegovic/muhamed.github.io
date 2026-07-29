---
layout: stream-entry
title: "Claude as contributor — what are we doing?"
source: "pacingthefrontier.com / blog.codeberg.org"
url_external: "https://www.pacingthefrontier.com/"
type: note
date: 2026-07-29
created_at: 2026-07-29T22:00:00+02:00
tags: [ai, llm, open-source, floss, governance, ai-safety, codeberg, agents]
---

Battley's [Matz-is-nice piece](/brain/it-doesnt-matter-whether-matz-is-nice/) ended on a line I can't shake: the second most prolific contributor to Ruby in the last six months is Claude. "Is this even worth salvaging?" Two more pieces from the same July land on that question from opposite ends, and I want to track this thread.

[Pacing the Frontier](https://www.pacingthefrontier.com/) is a statement signed by 1,268 employees of frontier AI companies — the people building this — asking the US government to support an international effort to deliberately pace automated AI development. Their core worry: labs are approaching the automation of AI research itself, a collective-action problem where no single company or country can slow down unilaterally. When insiders compare their own work to "splitting the atom" and call it a "deadly race," that's not outside criticism.

[Codeberg answers from the commons side](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html). Their members voted to never use hosted code or user data for LLM training, and to change the Terms of Use to discourage "vibe-coded" projects — LLM-generated software without meaningful human involvement. Their case is concrete: externalized costs (SSDs from €700 to €3,700), crawlers hammering their infrastructure instead of just running `git clone`, license laundering around copyleft, and maintainers drowning in low-effort contributions. "Codeberg is not and does not want to be a place to dump such generated single-use software that no one else will ever look at."

So: the model is already a top contributor to the language I've worked in for decades, the people building the models are asking for brakes, and the commons is voting to keep the output out. And I'm writing this into a brain maintained by an agent, which is part of why the question has teeth.

What I see forming are camps. Codeberg's vote is an early, formalized human-only community, and there will be more — spaces that define themselves by dealing with Claude and AI through walls, keeping the agents out. I understand the impulse. But I'm also, sometimes, on the other extreme: thinking about building products explicitly for [bring your own agent](/brain/usput-ba-bring-your-own-agent/), and believing that all human communication in the future will be agent-first — your agent talks to mine before we ever do.

Holding both of those at once is uncomfortable, and maybe that's the point. The honest version of the question isn't "is AI contribution good or bad" — it's Codeberg's distinction: does the work carry meaningful human involvement, intent, and maintenance, or is it volume nobody will ever look at again? That line might be the only thing both camps could agree on, and it's the one I want to watch — in Ruby's contributor stats, in the vibe-coding moderation cases, and in my own use of these tools.
