# AGENTS

This is a pi-brain clone for `muhamed.github.io`.

## Core rules

- Sources are immutable; wiki is synthesized.
- Cite sources for every claim.
- Autonomous mode may only produce AI-suggested drafts.
- Manual work wins over auto maintenance.

## Process guardrails

1. **Start with `brain_status`.** Call it at the beginning of every session to orient.
2. **No structural repo changes without an approved ADR.** Moving project files, adding CI/CD workflows, or changing the repository layout requires a drafted and human-approved ADR *before* implementation.
3. **Capture decisions in the inbox.** Use `brain_capture` for decisions, observations, and open questions; do not rely only on `log/log.md`.
4. **Check constraints before shaping.** Read `wiki/muhamed.github.io/constraints/*.md` before proposing or implementing any commitment-class change.
5. **Shape before building.** Pitches and structural changes must go through `/brain:shape` and obtain explicit human approval before Phase 4 (implementation).
6. **Run `brain_sync` after wiki changes.** Always validate frontmatter and regenerate views.
