# Agent OS — product & data model prompt (authoritative spec)

Use this document as the **single source of truth** when implementing the backend API, migrations, and the Agent Hub UI. It describes how **workspaces**, **agents**, **skills** (optional today), **drafts / autosave**, and **workspace-scoped messaging** must behave.

---

## 1. Core concepts

### 1.1 Workspace

A **workspace** is the top-level container for collaboration and configuration.

- Every **agent belongs to exactly one workspace** (`agents.workspace_id` → `workspaces.id`).
- **Workspace members** (`workspace_members`) control who can see and edit the workspace.
- **Skill connections** are configured **per workspace** (`workspace_skill_connections`): OAuth tokens, API keys, and “connected / not_connected” state live here. The skills **catalog** (`skills_catalog`) can be empty or sparse at launch; `agent_skill_links` may reference catalog rows that you add later.
- **Conversations** (`workspace_conversations`) are threads **inside** a workspace. They optionally point at a **primary agent** (`primary_agent_id`) for default routing in the UI.

### 1.2 Agent

An **agent** is a configured model + instructions + context, scoped to one workspace.

- **Model and behavior** live in `agents`: `model_config`, `context_config`, `instructions`, `description`, `name`, `status`.
- **Status / lifecycle** (same column, string codes):
  - `draft` — created or edited in the builder; autosaved; may be incomplete.
  - `active` — ready to run and appear as “live” in the fleet.
  - `inactive` — paused; no runs unless explicitly allowed by product rules.
  - `error` — last health or connection check failed (optional future use).
- **Skills** attached to the agent are rows in `agent_skill_links` (skill_id + optional `workspace_skill_connection_id` + `tool_config`). **Empty links are valid** until you seed `skills_catalog` and wire connections.

### 1.3 Drafts and autosave

Two layers:

1. **Client autosave (immediate UX)**  
   The hub debounces form state (name, model, skills selection, URLs draft text, etc.) to **localStorage** so refresh/crash does not lose work. PDF blobs are not serialized; only metadata counts until upload pipelines exist.

2. **Server autosave (durable)**  
   Table **`agent_builder_autosave`** stores debounced JSON per `(workspace_id, user_id, session_key)` with optional `agent_id` once a row exists in `agents`. Upsert on each debounced tick from the API. When the user clicks “Continue to chat” or “Publish”, create or update the `agents` row and clear or repoint the autosave row.

**Rule:** Prefer one **`agents` row with `status = 'draft'`** once the user commits the first server-side create; use `agent_builder_autosave` only before that ID exists or for anonymous sessions if you allow them.

### 1.4 Workspace messaging (connected to agents)

All persisted chat that is “about this workspace” uses:

- **`workspace_conversations`** — thread metadata, `workspace_id`, optional `primary_agent_id`.
- **`workspace_messages`** — each message row includes:
  - `workspace_id` (denormalized for efficient listing),
  - `conversation_id`,
  - `role` — `user` | `assistant` | `system` | `tool`,
  - `content` (plain text) and optional `content_parts` (JSON for tool calls, citations, attachments metadata),
  - **`agent_id`** — for `assistant` / `tool` turns, the agent that produced or executed the step; for `user`, usually null with `author_user_id` set,
  - `author_user_id` for human senders — **`bigint` → `users.id`** (same type as `workspace_members.user_id`),
  - `source` (e.g. `web`, `api`, `slack`) and `metadata` for tracing.

**Invariant:** When the user sends a message in the context of a specific agent (e.g. agent chat page), the API should still store the message under a **workspace conversation** and set **`agent_id`** on assistant replies so history, analytics, and “which agent answered” stay consistent.

### 1.5 Plan sessions (existing)

`agent_plan_sessions` holds ephemeral planner state (`state` JSON) per workspace and user. Keep it separate from `workspace_messages` unless you explicitly merge planner steps into message `content_parts`.

---

## 2. API shape (recommended, not yet implemented in repo)

Implement REST or RPC that mirrors the tables:

| Area          | Suggested endpoints                                                                      |
| ------------- | ---------------------------------------------------------------------------------------- |
| Workspaces    | `GET/POST /workspaces`, `GET/PATCH /workspaces/:id`, members CRUD                        |
| Agents        | `GET/POST /workspaces/:id/agents`, `GET/PATCH/DELETE /agents/:id`, filter by `status`    |
| Autosave      | `PUT /workspaces/:id/agent-builder-autosave?session_key=` body: `{ payload, agent_id? }` |
| Conversations | `GET/POST /workspaces/:id/conversations`                                                 |
| Messages      | `GET/POST /conversations/:id/messages` with `agent_id` on assistant/tool                 |
| Skills        | `GET /skills-catalog`, `GET/PATCH /workspaces/:id/skill-connections`, link from agents   |

Use the authenticated user’s **`users.id` (`bigint`)** for `user_id` / `author_user_id` / `created_by_user_id` everywhere in these tables.

---

## 3. Frontend (Agent Hub) expectations

- **Workspaces** screen: list workspaces; show **status chips** (e.g. connection readiness); navigate to a workspace **detail** where admins **assign agents** (changing `agents.workspace_id` or a future join table if you split “library” from “deployment”).
- **Create agent** flow: **workspace selector required**; show autosave indicator; on submit, create `draft` or `active` agent per rules above.
- **Manage agents** table: columns for **workspace**, **model**, **skills count**; **status chips** open a menu to set `draft` / `active` / `inactive` / `error` (until API exists, local state mirrors this intent).

---

## 4. Future-proofing

- **Drafts everywhere:** conversation titles, unsent composer text, and builder wizards can reuse the same debounce + `metadata` / `agent_builder_autosave` pattern.
- **Skills:** empty catalog is OK; UI shows placeholders. When `skills_catalog` fills, `workspace_skill_connections` becomes the source of truth for “can this agent use skill X in this workspace?”
- **Multi-agent workspaces:** route messages by `primary_agent_id` on the conversation or explicit `agent_id` per message; orchestration can be a separate service reading `workspace_messages`.

---

## 5. Schema reference (tables touched)

- `workspaces`, `workspace_members`, `workspace_skill_connections`
- `skills_catalog`, `agent_skill_links`
- `agents` (includes `workspace_id`, `status` with `draft` allowed)
- `workspace_conversations`, `workspace_messages`
- `agent_builder_autosave`
- `agent_plan_sessions` (planner)

Full schema (from your current `users`-only baseline) is in `db/migrations/` as ordered files **`001` … `010`**. Run all `*.up.sql` in order (PostgreSQL 13+ for `gen_random_uuid()`). Roll back with `010.down` through `001.down`. Keep this prompt in sync when you add migrations.
