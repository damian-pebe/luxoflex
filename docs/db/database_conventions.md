# Database conventions

Conventions this project follows for schema and data in PostgreSQL. Apply them in models (SQLAlchemy) and migrations (Alembic).

---

## Quick reference

| Field / Rule         | Description                                                           | Example                    |
| -------------------- | --------------------------------------------------------------------- | -------------------------- |
| column names         | Use **snake_case** consistently                                       | `first_name`, `created_at` |
| foreign keys (FK)    | Name FKs with `<table>_<referenced_column>_fk` for clarity            | user_id_fk                 |
| data format          | Store text in **lowercase**; accents are allowed                      | `josé pérez`, `añó`        |
| charset / collation  | PostgreSQL `UTF8`; MySQL `utf8mb4`                                    | avoid `latin1`             |
| ids                  | Use `uuid` for external/public objects; `bigserial` for internal ones | `person_id uuid`           |
| auditing             | Include timestamps and user tracking fields                           | `created_at`, `updated_at` |
| uniqueness           | Use `lower()` for case-insensitive uniqueness                         | `unique(lower(email))`     |
| normalization        | Normalize text in the app layer: `trim + lowercase`                   | `trim(lower(name))`        |
| semi-structured data | Use `jsonb` in PostgreSQL for flexible data                           | `metadata jsonb`           |

---

## Detail by topic

### Names and types

- **Columns:** always `snake_case` (`first_name`, `created_at`, `is_active`).
- **IDs:**
  - `uuid` for entities exposed via APIs or integrations.
  - `bigserial` / `BIGINT` for internal or high-volume tables.
- **Charset:** PostgreSQL with **UTF8** encoding to support any language and accents.

### Foreign keys

- Name the FK **constraint** using the pattern `<source_table>_<column>_fk` so it’s easy to identify.
- Example: in table `orders`, column `user_id` referencing `users.id` → constraint `orders_user_id_fk`.

### Data and text

- Store text in **lowercase** when possible; accents are preserved (`josé pérez`, `añó`).
- **Case-insensitive uniqueness:** use `unique(lower(email))` (or equivalent in your engine).
- **Normalization** in the application layer: apply `trim()` and `lower()` before saving when appropriate.

### Auditing

- Include at least:
  - `created_at` (creation timestamp).
  - `updated_at` (last update timestamp).
- If the system requires it: “who” fields (`created_by`, `updated_by`).

### Flexible data

- For optional or variable-shaped attributes in PostgreSQL, use type **`jsonb`** (e.g. `metadata jsonb`).

---

## Relation to the project

- **Models** in `src/models/` must follow these conventions.
- **Migrations** in `alembic/versions/` apply schema changes; see [alembic.md](./alembic.md) for the workflow with Alembic.
