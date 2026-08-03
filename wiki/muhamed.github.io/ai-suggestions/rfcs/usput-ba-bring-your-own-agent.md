---
kind: rfc
status: suggested
confidence: low
ai_suggestion: true
sources:
  - sources/conversation/2026-07-25--recruitment-agents-idea.md
  - sources/doc/2026-07-27--vision-md.md
  - files/_stream/recruitment-agents-talk-it-out-first.md
---

> ⚠️ AI-suggested draft. This is not an approved RFC. Review, edit, and graduate it before treating it as a project decision.

# RFC — Bring-your-own-agent travel planning for Usput.ba

## Problem

The future of human communication may not be app-to-human, but **agent-to-agent**: every person brings their own AI agent that negotiates, books, asks the nagging questions, and coordinates on their behalf (source: `sources/conversation/2026-07-25--recruitment-agents-idea.md`).

Usput.ba is building an autonomous "Platform" agent that already manages content, code, and infrastructure (source: `sources/doc/2026-07-27--vision-md.md`). The open question is how that internal agent capability can be turned outward so travelers, local providers, and even external AI assistants can interact with Usput.ba without opening a browser.

What would it mean for Usput.ba to support "bring your own agent"? And what does an MCP actually unlock beyond a nicer API?

## Proposed solution

Expose Usput.ba as an **MCP server** (and eventually a set of structured agent-to-agent protocols) so agents on both sides of a trip — travelers and anyone offering something to travelers — can query, plan, negotiate, and transact through the platform.

The Platform agent becomes the host and matchmaker: it represents Usput.ba's knowledge, the local providers, and the booking rules. Demand-side agents (travelers) and supply-side agents (providers, agencies, individuals) connect through a standard protocol instead of scraping the website or calling a bespoke REST API.

### What an MCP enables for travelers

1. **Natural-language trip planning**
   - "Plan a 4-day Bosnia trip in October for a family with a toddler."
   - The user's agent queries Usput.ba for kid-friendly locations, accessible hikes, family restaurants, and driving times, then builds an itinerary.

2. **Preference-driven discovery**
   - "Find me quiet mountain towns with good coffee and no crowds."
   - "I need a wheelchair-accessible day trip from Mostar."
   - UI search forms are bad at this; an agent can iterate and combine filters that the platform exposes.

3. **Cross-service planning**
   - A personal agent can combine Usput.ba data with flights, weather, hotel APIs, and calendar availability in one conversation.

4. **Negotiation and customization**
   - "Can we get a private Una rafting trip for 8 people on July 14th?"
   - The user's agent and Platform negotiate time, price, inclusions, and cancellation terms before the human sees a final proposal.

5. **Ongoing trip support**
   - "We're running late; reschedule the Blagaj visit and find a closer lunch spot."
   - The agent handles changes, cancellations, and rebookings without the traveler touching the app.

### What it enables for anyone offering something to travelers

This is not limited to traditional travel suppliers. Any person or business with something to offer can plug in an agent:

1. **Accommodation** — hotels, guesthouses, apartments, rooms for rent.
2. **Food and drink** — restaurants, cafés, bars, group menus, dietary options.
3. **Activities and guides** — tour guides, rafting operators, hiking guides, cooking classes, transfers, rentals.
4. **Travel agencies and DMCs** — packaged itineraries, negotiated rates, bundled multi-provider trips.
5. **Individuals** — someone renting a spare room, offering a local experience, or driving a shuttle.

Concrete benefits:

- **Provider-side agents** answer availability, pricing, and special requests without a dashboard.
- **Agent-to-agent deal making** assembles group bookings, custom tours, and dynamic packages across multiple providers.
- **Reduced support load** — repeated questions ("Do you allow pets?", "Is there parking?", "Can you accommodate 12 people?") are answered by structured data or the provider's agent.
- **Travel agencies and DMCs** can build complex itineraries by orchestrating provider agents instead of manual phone calls and emails.

### What it enables for Usput.ba

1. **Become the canonical Bosnian tourism data source**
   - External agents come to Usput.ba because it has the best structured, verified local data.

2. **Content-gap feedback loop**
   - User agents asking for things the platform cannot answer ("Which restaurants are vegan?") surface exactly what content to add next.

3. **Distribution without building every UI**
   - New features can ship as MCP tools first; the web UI follows once the behavior is proven.

4. **Defense against generic travel AIs**
   - Generic models will hallucinate hotels and tours. A verified MCP connection to Usput.ba grounds them in real inventory.

## Perspectives

### PM

- **User impact:** High for power travelers and early-adopter locals; low for casual visitors who still prefer a website.
- **Appetite:** Small to start. An MCP read-only layer is a contained bet. Agent-to-agent negotiation is a much bigger bet.
- **No-gos:** Do not try to replace the web app; do not require providers to run their own agents; do not build a payment flow until the read layer is proven.

### Tech Lead

- **Alternatives:**
  - Custom REST API — familiar but requires every consumer to learn Usput.ba specifics.
  - GraphQL — more flexible for agents but still bespoke.
  - MCP — standard protocol, Claude Desktop and other clients already speak it; lower integration friction for AI-native users.
- **Consequences:** MCP becomes a public contract. Tool names, schemas, and auth semantics are hard to change once external agents depend on them.
- **Pattern fit:** Strong. The Platform vision already defines atomic content tools (`search_content`, `get_content`, `create_plan`) that map directly to MCP tools.

### Developer

- **Smallest safe step:** Ship a read-only MCP server with two tools: `search_locations` and `get_plan`. Connect it to Claude Desktop and dog-food it.
- **Risks:**
  - Authentication and rate limiting for unverified agents.
  - MCP clients may issue many small queries; performance matters.
  - Need to sanitize outputs so agents do not expose draft or unpublished content.
- **Pattern reuse:** Most of the work is exposing existing Platform tools through MCP; the Rails app and content model stay unchanged.

### Security Reviewer

- **Trust boundary:** The MCP server sits between external agents and Usput.ba's data/actions. Treat it as a semi-trusted boundary.
- **Blast radius:** Read-only MCP is low risk. Write/booking tools must require user OAuth and scoped permissions.
- **Mitigations:**
  - Separate read and write MCP scopes.
  - Audit every agent action in a conversation log.
  - Require explicit human confirmation for destructive or financial actions.
  - Rate-limit per agent identity, not just per IP.

## Open questions for the human reviewer

1. Should the first MCP target travelers, providers, or both?
2. Do we use the Platform's existing Ruby tools, or build a thin MCP wrapper around the REST API?
3. What authentication model makes sense for personal agents — API keys, OAuth, or something else?
4. Which actions, if any, should an agent be allowed to perform without explicit human confirmation?
5. How do we avoid turning Usput.ba into a free data backend for generic travel AIs while still encouraging ecosystem use?
6. Is there a near-term business model, or is this primarily a distribution/data-moat play?

## Recommendation

Start with a **read-only MCP server for travelers**.

- It validates the "bring your own agent" hypothesis with minimal risk.
- It reuses the Platform tool definitions already being built.
- It surfaces real content gaps that improve the main product even if agent adoption is slow.

Keep agent-to-agent negotiation and provider-facing agents as later phases, gated by usage and a follow-up ADR.

## Related

- Stream note: [Recruitment agents: let the agents talk it out first](https://muhamed.at/brain/recruitment-agents-talk-it-out-first/)
- Stream note: [Jack & Jill AI: a recruitment-agent reference](https://muhamed.at/brain/jack-and-jill-ai-recruitment-agent-reference/)
- Stream note: [Stapply Data: open job-market datasets](https://muhamed.at/brain/stapply-data-open-job-market-datasets/)
- Stream note: [Agents in Durable Objects](https://muhamed.at/brain/agents-in-durable-objects-specialized-cheap-agents/)
- Source: Recruitment agents idea conversation (source: `sources/conversation/2026-07-25--recruitment-agents-idea.md`)
- Source: Usput.ba Platform vision (source: `sources/doc/2026-07-27--vision-md.md`)
- Inbox item: "User's idea: personal agents as the future of human communication..."
