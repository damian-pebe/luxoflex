# Skills platform playbook — how we build, store, and scale skills

Use this document **together with** [`AGENT_OS_ARCHITECTURE_PROMPT.md`](./AGENT_OS_ARCHITECTURE_PROMPT.md) whenever you add or change skills, integrations, or backend APIs that agents consume.

It answers: where skills live in the data model, how we migrate the database, how we protect secrets, how the catalog is exposed to the UI, and how third parties (or future agents) can plug in consistently.

---

## 1. Relationship to the product model

From the architecture spec:

- **`skills_catalog`** — global registry of available skills (id, name, description, metadata). Can start empty; grows as you ship integrations.
- **`workspace_skill_connections`** — per-workspace credentials and connection state (OAuth tokens, API keys, `connected` / `not_connected`, etc.). This is the **source of truth** for “this workspace can use skill X.”
- **`agent_skill_links`** — which skills an agent may use, optionally tied to a specific `workspace_skill_connection_id` and `tool_config`.

**Playbook rule:** Every new integration skill should have:

1. A **catalog row** (or seed) so it appears in pickers when **lifecycle status** allows (see §4).
2. A **connection/configuration surface** in the hub (wizard, test, status).
3. **Persisted secrets and instance config** in workspace-scoped tables (see §5–6), never only in the client.

---

## 2. Schema changes: migrations only (plain SQL + `psql`)

- **Do not treat any static SQL dump (e.g. `db.sql`) as the place to edit schema.** If the repo keeps a `db.sql` (or similar) as a **read-only mirror** of production/staging, refresh it from the database or from applied migration files when needed; **do not** apply product changes by editing that file.
- **All PostgreSQL schema changes** ship as **versioned `.sql` files** you run yourself (e.g. **`psql`** or any PostgreSQL client). **Do not use Alembic** for this workflow—avoid generating Python revision sprawl. **New change = one new migration file** (and optional paired rollback SQL), never in-place edits to a snapshot.

**Workflow (typical):**

1. Add a new file in the repo’s SQL migrations folder (e.g. `db/migrations/` — use whatever path the team standardizes on) with a clear order prefix, e.g. `012_whatsapp_skill.up.sql` and optionally `012_whatsapp_skill.down.sql`.
2. Write plain **DDL** (`CREATE TABLE`, `ALTER TABLE`, indexes, FK constraints) following [`docs/db/database_conventions.md`](../db/database_conventions.md).
3. Apply in the target database, for example from `psql`:  
   `\i /absolute/or/relative/path/to/012_whatsapp_skill.up.sql`  
   or non-interactively:  
   `psql "$DATABASE_URL" -f path/to/012_whatsapp_skill.up.sql`
4. Track which files ran in each environment (simple checklist, table, or deploy notes) if you are not using an automated schema version table.

---

## 3. Secrets and tokens (critical)

**API keys, access tokens, app secrets, and refresh tokens must be retrievable** by the backend to call Meta, Telegram, etc. **bcrypt is one-way** — it is for **password verification**, not for storing values you later decrypt.

| Kind of secret                                           | Recommended approach                                                                                                                                                                                                                                 |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User password                                            | bcrypt / Argon2 (verify only; never “decrypt”)                                                                                                                                                                                                       |
| OAuth access / refresh token, Meta permanent token, etc. | **Encrypt at rest** with **authenticated encryption** (e.g. AES-256-GCM). Key material from **KMS** or a **long random `SECRETS_ENCRYPTION_KEY`** in a secrets manager (never commit). Store **ciphertext + IV** (and optional key id for rotation). |
| Webhook verify token (random shared secret)              | Same as tokens if you must echo it to Meta; if you only compare incoming requests, you can store a **hash** (similar to passwords) **or** encrypt if you need to display it once in UI.                                                              |

**Playbook rule:** Application code **encrypts on write**, **decrypts on read**, inside the service layer — not in raw SQL. Logs and error payloads must **redact** secrets.

---

## 4. Skill lifecycle and catalog visibility

Introduce (or extend) a **skills management** layer so the team can ship skills without exposing unfinished work:

- **Identifier:** `uuid` primary key for catalog rows (aligns with architecture: UUIDs for externally exposed entities).
- **Lifecycle / visibility** (example codes — adjust to your enum in DB):

  | Status        | Meaning               | Shown in end-user “add skill” UI?                  |
  | ------------- | --------------------- | -------------------------------------------------- |
  | `development` | Internal only         | No                                                 |
  | `on_review`   | QA / staging          | No (or only for staff workspaces — product choice) |
  | `active`      | Production-ready      | **Yes**                                            |
  | `inactive`    | Deprecated / disabled | No                                                 |

Implementation options (pick one and document in migrations):

- **Option A:** Columns on `skills_catalog` (`lifecycle_status`, `sort_order`, `slug`, etc.).
- **Option B:** Separate `skill_definitions` / `skills_management` table keyed by `skill_id` → `skills_catalog`, if you want admin-only metadata without bloating the catalog.

**Playbook rule:** Only **`active`** skills appear in the default user-facing skill picker (unless you explicitly add a “beta” flag for selected workspaces).

---

## 5. Listing skills for the UI (search + filter)

Product requirement: the client needs discoverable skills for selection.

- **Endpoint shape (as agreed):** `POST` (not `GET`) so filters and search live in the **body** (consistent with complex filters and future pagination).

**Suggested contract:**

- **Route:** `POST /skills/catalog/search` (or `POST /workspaces/:workspaceId/skills/catalog/search` if availability is workspace-specific later).
- **Body (JSON):**

  ```json
  {
    "query": "whatsapp",
    "limit": 50,
    "offset": 0
  }
  ```

- **Response:** List of **active** catalog entries (id, name, description, icon, category, `slug`, etc.) — no secrets.

**Playbook rule:** This endpoint returns **catalog metadata only**. Connection state and credentials come from workspace connection APIs (`GET/PATCH .../skill-connections` per architecture).

---

## 6. Per-integration tables (example: WhatsApp)

For **Meta WhatsApp Cloud API**, store **workspace-scoped** configuration in a dedicated table (names are illustrative — align FKs to your actual `workspaces.id` type):

- **Table** (example): `workspace_whatsapp_api_connections`
  - `id` (uuid, PK)
  - `workspace_id` (FK)
  - `skills_catalog_id` or `skill_slug` (FK / text link to catalog)
  - **Non-secret fields:** `phone_number_id`, `business_account_id` (WABA), `display_phone_number`, webhook URL we expose, `connection_status` (`not_configured` | `pending_verify` | `connected` | `error`), `last_test_at`, `last_error_message` (sanitized)
  - **Secret fields (encrypted):** `access_token_ciphertext`, `app_secret_ciphertext`, optional `webhook_verify_token_ciphertext`
  - `metadata` (jsonb) for provider payloads
  - `created_at`, `updated_at`

Link this row from **`workspace_skill_connections`** (or duplicate only what the generic connection row needs and keep WhatsApp-specific columns here — prefer a single place for Meta-specific fields).

**Playbook rule:** The **agent runtime** loads decrypted credentials only inside the tool/skill executor for that workspace, after authorization checks.

---

## 7. UX expectations for “non-expert” users

Skills that require developer consoles (Meta, Telegram, etc.) must ship with:

- **Primary actions:** Connect · Test connection · Status (and Disconnect where relevant).
- **Instructions:** Step-by-step, with **clickable URLs**, exact labels (“Click **API Setup** in the left sidebar”), and what to paste **where** in your product.
- **No jargon** in user-facing copy; optional “Advanced” collapse for technical users.

The **implementation prompt** for each skill (see [`SKILL_PROMPT_AUTHOR_GUIDE.md`](./SKILL_PROMPT_AUTHOR_GUIDE.md)) should force this level of detail so Opus / any model can implement the full flow.

---

## 8. Scaling: adding many skills

1. **Author** a skill-specific prompt MD using the author guide → run **deep planning** (e.g. Opus) with **playbook + prompt** attached.
2. **Migrate** catalog + any new tables; seed catalog row with `lifecycle_status = development` until QA passes.
3. **API:** catalog search + workspace connection CRUD + test webhook endpoints.
4. **Agent tool layer:** map `agent_skill_links` to callable tools that read `workspace_skill_connections` + integration table.
5. **Flip** catalog status to `active` when ready.

External contributors can follow the same **prompt MD → plan → migrations → API → tools** pipeline; the playbook stays the stable contract.

---

## 9. Checklist for each new skill

- [ ] Architecture alignment: `skills_catalog`, `workspace_skill_connections`, `agent_skill_links`.
- [ ] New migration(s) only — no editing schema snapshot files as source of truth.
- [ ] Secrets: encrypt/decrypt in app; no plaintext in DB; redact logs.
- [ ] Lifecycle status on catalog; user picker shows **`active`** only (by default).
- [ ] `POST` body API for catalog search (or documented successor).
- [ ] User-facing setup: connect, test, status, step-by-step with links.
- [ ] [`AGENT_OS_ARCHITECTURE_PROMPT.md`](./AGENT_OS_ARCHITECTURE_PROMPT.md) updated if global invariants change.

---

## 10. Documents you use together

| Document                                                               | Role                                                                    |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [`AGENT_OS_ARCHITECTURE_PROMPT.md`](./AGENT_OS_ARCHITECTURE_PROMPT.md) | Product + data model SSOT                                               |
| This playbook                                                          | How skills are implemented and scaled on the backend                    |
| [`SKILL_PROMPT_AUTHOR_GUIDE.md`](./SKILL_PROMPT_AUTHOR_GUIDE.md)       | How to write a **skill-specific** implementation prompt MD for planning |
| Skill-specific prompt MD (e.g. WhatsApp)                               | Input to Opus / planner for a single integration                        |
