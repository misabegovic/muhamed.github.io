---
layout: stream-entry
title: "It doesn't matter whether \"Matz is nice\" — and Claude as contributor"
source: "po-ru.com / pacingthefrontier.com / blog.codeberg.org"
url_external: "https://po-ru.com/2026/07/29/it-doesnt-matter-whether-matz-is-nice"
type: note
date: 2026-07-29
created_at: 2026-07-29T12:00:00+02:00
tags: [ruby, rails, community, governance, dhh, shopify, open-source, ai, llm, floss, ai-safety, codeberg, agents]
---

[Paul Battley](https://po-ru.com/) published a piece arguing that MINASWAN ("Matz is nice and so we are nice") was only ever projection. Matz is quiet, reserved, and mostly online in Japanese; that leaves a blank surface to project niceness onto. Meanwhile, Paul argues, the community's actual power centers don't pass the test.

The case he lays out: DHH has moved from early-days abrasiveness to openly far-right writing — calling for "remigration," comparing Roma people to wolves that get shot, years of anti-DEI and anti-trans rhetoric — while remaining dictator-for-life of Rails, with pieces like [Rails Needs New Governance](https://davidcel.is/articles/rails-needs-new-governance) and [The Ruby community has a DHH problem](https://tekin.co.uk/2025/09/the-ruby-community-has-a-dhh-problem) already on the record. Tobias Lütke's Shopify employs five of the top ten human Ruby contributors, is Ruby Central's largest sponsor, and pushed the takeover of RubyGems; Lütke gave DHH a Shopify board seat well after the turn, and the company shut down its Indigenous- and Black-entrepreneur programmes right after Trump's re-election. Paul hopes [the move to fork Rails](https://mastodon.me.uk/@Floppy/116997766777309382) succeeds but doubts it's sufficient "while Ruby as a whole is substantially controlled by the same people."

My own take: on DHH, unfortunately, I think I have to agree. I enjoyed his technical content and could respect what he did with Rails — but his political views and the personal content he writes just make me dislike him, and want to distance myself from him and his framework long-term. And on Matz — I can only confirm he is nice, even though he himself would say not always.

This lands right next to a thought I've had — [is Ruby dead, and is it time to build cathedrals in Go?](/brain/is-ruby-dead-cathedrals-in-go/) — more a passing question than a deep position, and one that mostly came out of talking with a friend who's building cathedrals in Go now, someone who doesn't like DHH either and doesn't think Rails and Ruby are tools for the future. My framing was technical — cost, speed, guard rails. Battley's is about who holds the project. They all point the same way: the biggest risk in a framework isn't performance, it's who controls it.

His closing line cuts deepest: the second most prolific contributor to Ruby itself in the last six months is Claude. "Is this even worth salvaging?" That line won't leave me alone — and two more pieces from the same July land on it from opposite ends.

[Pacing the Frontier](https://www.pacingthefrontier.com/) is a statement signed by 1,268 employees of frontier AI companies — the people building this — asking the US government to support an international effort to deliberately pace automated AI development. Their core worry: labs are approaching the automation of AI research itself, a collective-action problem where no single company or country can slow down unilaterally. When insiders compare their own work to "splitting the atom" and call it a "deadly race," that's not outside criticism.

[Codeberg answers from the commons side](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html). Their members voted to never use hosted code or user data for LLM training, and to change the Terms of Use to discourage "vibe-coded" projects — LLM-generated software without meaningful human involvement. Their case is concrete: externalized costs (SSDs from €700 to €3,700), crawlers hammering their infrastructure instead of just running `git clone`, license laundering around copyleft, and maintainers drowning in low-effort contributions. "Codeberg is not and does not want to be a place to dump such generated single-use software that no one else will ever look at."

So: the model is already a top contributor to the language I've worked in for decades, the people building the models are asking for brakes, and the commons is voting to keep the output out. And I'm writing this into a brain maintained by an agent, which is part of why the question has teeth.

What I see forming are camps. Codeberg's vote is an early, formalized human-only community, and there will be more — spaces that define themselves by dealing with Claude and AI through walls, keeping the agents out. I understand the impulse. But I'm also, sometimes, on the other extreme: thinking about building products explicitly for [bring your own agent](/brain/usput-ba-bring-your-own-agent/), and believing that all human communication in the future will be agent-first — your agent talks to mine before we ever do.

Holding both of those at once is uncomfortable, and maybe that's the point. The honest version of the question isn't "is AI contribution good or bad" — it's Codeberg's distinction: does the work carry meaningful human involvement, intent, and maintenance, or is it volume nobody will ever look at again? That line might be the only thing both camps could agree on, and it's the one I want to watch — in Ruby's contributor stats, in the vibe-coding moderation cases, and in my own use of these tools.
