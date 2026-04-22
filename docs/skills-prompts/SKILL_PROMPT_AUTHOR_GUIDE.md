# Skill implementation prompt — author guide

This document tells **you** (or an AI assistant) how to **produce another markdown file**: a **skill-specific implementation prompt** that will be fed to a strong planner model (e.g. Opus) **together with** [`SKILL_PROMPT_AUTHOR_GUIDE.md`](./SKILL_PROMPT_AUTHOR_GUIDE.md) (this file) and [`SKILLS_PLATFORM_PLAYBOOK.md`](./SKILLS_PLATFORM_PLAYBOOK.md).

**Goal:** Any model with those three inputs can generate a **deep, actionable implementation plan** (DB, API, UI, security, webhooks, testing) without guessing your conventions.

---

## 1. When to use this guide

Use when someone says, for example:

- “Create an implementation prompt MD for a **Telegram** workspace chatbot that routes to agents instead of the web UI.”
- “Write the planning doc for **Slack** slash commands + our `workspace_messages` model.”

**You output:** one new file, e.g. `docs/skills-prompts/<INTEGRATION>_IMPLEMENTATION_PROMPT.md`, following §3 below.

---

## 2. Inputs you must assume are attached

The skill-specific prompt **does not repeat** the whole platform rules; it **references** them:

1. [`AGENT_OS_ARCHITECTURE_PROMPT.md`](./AGENT_OS_ARCHITECTURE_PROMPT.md) — workspaces, agents, messages, skills tables.
2. [`SKILLS_PLATFORM_PLAYBOOK.md`](./SKILLS_PLATFORM_PLAYBOOK.md) — migrations only, encryption for secrets, lifecycle status, `POST` catalog search, UX for non-experts.

The author of the skill prompt should **name these files** in an “Attached context” section so the planner opens them.

---

## 3. Template for the generated skill-specific MD

Copy this structure into the new file and fill every section for **one** integration or feature.

```markdown
# Implementation prompt: <Skill name> (e.g. Telegram workspace chatbot)

## Attached context (must be read first)

- ./docs/AGENT_OS_ARCHITECTURE_PROMPT.md
- ./docs/SKILLS_PLATFORM_PLAYBOOK.md

## 1. One-line outcome

<What the user can do when this is done.>

## 2. User stories

- As a workspace admin, I …
- As an end user chatting via <channel>, I …
- As the agent runtime, I …

## 3. Non-goals (this phase)

- …

## 4. Channel & provider specifics

- **Provider docs (official URLs):** …
- **Auth model:** API key / OAuth / bot token / etc.
- **Webhooks vs polling:** …
- **Rate limits / idempotency:** …

## 5. Data model (planner: propose exact columns & migrations)

- Catalog row in `skills_catalog` (slug, name, lifecycle starts as `development`).
- Workspace connection table(s): list tables, FKs to `workspaces`, link to `workspace_skill_connections`.
- Which fields are **encrypted at rest** vs public metadata.
- **Do not** edit `db.sql` or any schema snapshot; schema changes are managed through **Alembic** migrations (`alembic/versions/`). Use `uv run alembic revision --autogenerate -m "description"` to generate revisions from SQLAlchemy model changes, then review and apply with `uv run alembic upgrade head`. See [`agent-os-backend/docs/db/alembic.md`] for the full workflow and [`agent-os-backend/docs/db/database_conventions.md`] for naming conventions.

## 6. API surface

- Endpoints (paths, methods, auth): catalog search already covered globally; list **new** routes only.
- Request/response shapes (JSON examples).
- **POST** with JSON body for any list/search/filter endpoints if complex.

## 7. UI/UX (non-expert users)

- Screens: select skill → connect → test → status → disconnect.
- Step-by-step instructions with **full URLs** and **exact UI labels** from the provider.
- Error states and “what to do next.”

## 8. Agent & routing

- How messages enter `workspace_conversations` / `workspace_messages` (`source`, `agent_id`, `metadata`).
- How the workspace chooses **which agent** handles a thread (e.g. primary agent, explicit mapping, @mention).
- Tool definitions exposed to the model (names, parameters, when to call).

## 9. Security

- Secret storage (encryption, key rotation, redaction).
- Webhook signature verification.
- Workspace membership checks on every mutating call.

## 10. Observability & ops

- Logging (no secrets), metrics, alerts.
- Background jobs if any.

## 11. Test plan

- Unit, integration, manual checklist (include “connect test” and “send message round-trip”).

## 12. Rollout

- Feature flag / `lifecycle_status` progression `development` → `on_review` → `active`.
- Seed data and backwards compatibility.

## 13. Open questions for the product owner

- …
```

---

## 4. Quality bar for the generated prompt

Before you save the skill-specific MD, verify:

- **Links:** Every “go to developer console” step includes a **full HTTPS URL**.
- **No hand-waving:** “Configure webhook” is invalid; specify **our** callback URL pattern and **their** field names.
- **DB:** Explicit table names and **Alembic revisions** under `alembic/versions/`; **no** edits to snapshot SQL files as SSOT. Autogenerate from SQLAlchemy models when possible; always review generated code before applying.
- **Secrets:** Explicitly require **reversible encryption** for retrievable tokens (not bcrypt for API keys).
- **Architecture:** References `workspace_id`, `agent_id`, `source` on messages where relevant.

---

## 5. How the team runs planning

1. Create or update the skill-specific MD using this guide.
2. Open a planning session with Opus (or equivalent) and attach:
   - `AGENT_OS_ARCHITECTURE_PROMPT.md`
   - `SKILLS_PLATFORM_PLAYBOOK.md`
   - The new `docs/skills-prompts/<...>_IMPLEMENTATION_PROMPT.md`
3. Ask for: **ordered task list**, **migration DDL outline**, **API OpenAPI-style outline**, **UI wireframe notes**, **security review**, and **test matrix**.
4. Implement from the plan; keep the skill in `development` until QA signs off.

---

## 6. Example output file in this repo

See [`skills-prompts/META_WHATSAPP_MESSAGING_IMPLEMENTATION_PROMPT.md`](./skills-prompts/META_WHATSAPP_MESSAGING_IMPLEMENTATION_PROMPT.md) for a filled-in example you can compare against when authoring new prompts.
