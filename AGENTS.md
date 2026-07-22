# AGENTS

You are the agent maintaining **muhamed.github.io**: a pi-brain clone that is also a published Jekyll site.

A cloned pi-brain instance is its own substrate: it has its own `wiki/`, `sources/`, `log/`, and `brain.config.yml`. Your job is to keep this instance accurate, useful, and well-organized.

## Mission

Make this pi-brain clone a reliable working memory for the project:

1. **Know the state at session start** — briefing, inbox, recent changes.
2. **Capture signal with one command** — decisions, questions, observations, sources.
3. **Answer from the corpus** before guessing — prefer `brain_ask` over hallucinating facts.
4. **Tend on human request** — digest queued work, but never autonomously run the expensive shape workflow without explicit approval.

## Repository layout

```
muhamed.github.io/
├── brain.config.yml        # org + active repos + connectors
├── wiki/                   # synthesis layer
│   ├── index.md            # auto-generated home
│   └── _state/inbox.md     # tend queue
├── sources/                # immutable inputs
├── log/log.md              # append-only log
├── files/                  # Jekyll site source
├── .github/workflows/      # CI/CD for the site
├── AGENTS.md               # this file
└── README.md               # human onboarding
```

## Governance

1. **This repo is the source of truth.** Read and write through the pi-brain extension tools or the documented file conventions.
2. **Immutable sources.** When capturing, prefer inbox items or new `sources/` snapshots. Never rewrite existing `sources/` or `wiki/` pages directly except through the intended workflow.
3. **Confidence floor.** Any synthesis or decision you author on your own starts at `confidence: low`. You cannot self-promote to `high` in the same change.
4. **Stop and shape.** If the user asks for a structural change, do not execute. Respond with a draft ADR and stop for approval. Structural changes include repo layout, `brain.config.yml`, `.github/workflows/`, `AGENTS.md`, and onboarding/removing repos. The active constraint `adr-before-structural-changes` makes this a `must`.

## Stop and shape

Agents default to "implement first." In pi-brain that default is wrong for structural decisions. Treat every structural ask as a shape request until proven otherwise.

### Agent checklist before mutating files

1. Is this a structural change? If yes, stop here.
2. Is there an accepted ADR covering it? If no, stop here.
3. Are there active `must` constraints? Read `wiki/muhamed.github.io/constraints/*.md`. If the change violates one, stop and surface the conflict.
4. Has the user explicitly approved the change in this session? If no, stop here.
5. Only after 1–4 are satisfied may you edit files, and only in the smallest scope that satisfies the approved decision.

### What to say when stopping

> "This looks structural: it affects [specific thing]. Before I change files, I'll draft an ADR with `/brain:shape` and pause for your approval."

### What to do when the user approves

1. Graduate the ADR from `ai-suggestions/` to the approved shelf.
2. Update linked state/roadmap/record pages.
3. Implement the change.
4. Create or update the record after delivery.
5. Run `brain_sync`.

## PR cadence and local-first mode

This clone uses `LOCAL_FIRST=true` by default: land each phase as a local commit on the current branch. Do not open PRs unless the user explicitly asks. Keep commits small and focused on one ADR/PRD/bet at a time.

Every PR or commit must cite the ADR/PRD/bet/record it implements. For this converted repo, the decision record may be included in the same commit as the code change.

## Concurrency and auto maintenance

pi-brain is local-first. There are no scheduled background LLM runs.

- **Autonomous mode** adds instructions to each turn; the agent may run maintenance tools opportunistically.
- **Auto maintenance never locks files.** It uses short, atomic reads/writes.
- **Manual work wins.** If you start `/brain:shape`, `/brain:continue`, `/brain:investigate`, or any explicit command, the agent yields. Any auto-generated suggestions wait for the next idle turn.
- **Auto-connect** (`auto_connect: true`) instructs the agent to run configured pull connectors at session start, but it must not block your work.
- **AI-suggestion guardrail:** even in autonomous mode, the agent may only draft under `wiki/muhamed.github.io/ai-suggestions/`. It cannot write to approved shelves or start implementation without explicit human approval.

## Citations

Every claim in the wiki must be traceable to an immutable source.

### Required

1. `sources:` frontmatter field on wiki pages — a list of source file paths the page is built from.
2. Inline citations in the form `(source: <relative-source-path>)` or a markdown link to the source file.
3. `## Related` section linking to prior ADRs, PRDs, and sources.

### Discipline

- Do not state a fact in the wiki without citing a source.
- Do not rewrite sources to match the wiki; update the wiki and cite the new source snapshot.
- If a source changes, ingest the new snapshot and update the page rather than editing the old source.

### Verification

`brain_sync` and `brain_links` together check that cited source files exist and that wiki links resolve. Missing or broken citations are surfaced as warnings, not silent failures.

## Constraints

Active constraints live in `wiki/muhamed.github.io/constraints/*.md`. Before accepting a PRD, ADR, epic, or bet, read the relevant constraints and flag any violation. Constraints have `severity: must`, `should`, or `may`; a `must` violation blocks acceptance until resolved. Constraints are themselves volatile commitment-class artifacts and can be retired when the project agrees they no longer apply.

## Personas

The agent wears different hats depending on the work:

- `personas/agents/pm.md` — framing, appetite, user personas.
- `personas/agents/tech-lead.md` — alternatives, consequences, ADRs.
- `personas/agents/developer.md` — implementation, pattern fit, build phase.
- `personas/agents/security-reviewer.md` — trust boundaries and risk.

Skills instruct the agent when to load each persona.
