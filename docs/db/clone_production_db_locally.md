# Clone production database locally (Windows & macOS)

Guide to make an exact copy of the production database and use it on your machine for development.

## Requirements

- **PostgreSQL** installed locally (includes `pg_dump`, `pg_restore`, and `psql`).
- Ability to connect to the production server (host and port 5432 reachable from your network).
- Or **Docker** with the `postgres` image (see optional section at the end).

---

## Step 1: Have PostgreSQL installed locally

### Windows

1. Install from https://www.postgresql.org/download/windows/ (e.g. PostgreSQL 16).
2. During setup, note the **user** and **password** you set for the `postgres` user (default is often `postgres` / whatever you choose).
3. Add the PostgreSQL `bin` folder to your PATH (e.g. `C:\Program Files\PostgreSQL\16\bin`) so you can run `pg_dump` and `psql` from any terminal.

### macOS

1. **Option A — Homebrew:**  
   `brew install postgresql@16`  
   (or another version). Add to PATH if needed, e.g.  
   `echo 'export PATH="/opt/homebrew/opt/postgresql@16/bin:$PATH"' >> ~/.zshrc`  
   (on Intel Macs it may be `/usr/local/opt/postgresql@16/bin`).
2. **Option B — Postgres.app:**  
   Download from https://postgresapp.com/ and open the app; it provides `psql`, `pg_dump`, and `pg_restore` from its menu or by adding its bin folder to your PATH.
3. Note the **user** and **password** for the default `postgres` user (Homebrew often uses your macOS user with trust auth locally; Postgres.app may prompt you to set a password).

Verify (Windows PowerShell or macOS Terminal):

```bash
pg_dump --version
psql --version
```

**Starting/stopping PostgreSQL:**

- **Windows:** Services (Win + R → `services.msc`) → find `postgresql-x64-16` → Start/Stop. Or PowerShell (as Administrator): `Start-Service postgresql-x64-16` / `Stop-Service postgresql-x64-16`.
- **macOS (Homebrew):** `brew services start postgresql@16` / `brew services stop postgresql@16`.
- **macOS (Postgres.app):** Start or stop from the app.

---

## Step 2: Create an empty local database

Open a terminal (PowerShell or CMD on Windows, Terminal or iTerm on macOS) and connect to your local PostgreSQL:

```bash
psql -U postgres -h localhost -p 5432
```

(Replace `postgres` with your user if different. Use the `postgres` user’s password if prompted.)

Inside `psql`:

```sql
CREATE DATABASE omnicube_development;
\q
```

Exit with `\q`. You now have an empty local database (e.g. `omnicube_development`).

---

## Step 3: Export (dump) the production database

From your **production URL** in `.env`:

```env
# Example (yours is commented under PRODUCTION):
# DATABASE_URL=postgresql+asyncpg://omnicube:PASSWORD@HOST/omnicube_production
```

The standard connection string (without `+asyncpg`) for `pg_dump` is:

- **Host:** your production host from `DATABASE_URL` in `.env` (IP or hostname)
- **User:** `omnicube`
- **Password:** the one in the URL
- **Database:** `omnicube_production`
- **Port:** 5432 (unless you use another)

From any folder (e.g. your project or desktop).

**Windows (PowerShell):**

```powershell
$env:PGPASSWORD = "YOUR_PRODUCTION_PASSWORD"
pg_dump -h PRODUCTION_HOST -p 5432 -U omnicube -d omnicube_production -F c -f omnicube_production.dump
```

Replace `PRODUCTION_HOST` with your production DB host (IP or hostname from `.env`).

**macOS (bash/zsh):**

```bash
export PGPASSWORD="YOUR_PRODUCTION_PASSWORD"
pg_dump -h PRODUCTION_HOST -p 5432 -U omnicube -d omnicube_production -F c -f omnicube_production.dump
```

Replace `PRODUCTION_HOST` with your production DB host (IP or hostname from `.env`).

- Replace `YOUR_PRODUCTION_PASSWORD` with the real password for user `omnicube` on production.
- Replace `PRODUCTION_HOST` with the host (IP or hostname) from your production `DATABASE_URL` in `.env`.
- `-F c` = custom format (recommended for restoring with `pg_restore`).
- The file `omnicube_production.dump` is created in the current directory.

For a single SQL file (plain format) instead, use the same `pg_dump` command with `-F p -f omnicube_production.sql` (and the same `PRODUCTION_HOST`).

Keep the `.dump` or `.sql` in a safe place (e.g. project folder; add `*.dump` / `*.sql` to `.gitignore` if you don’t want to commit it).

---

## Step 4: Restore the dump into the local database

### If you used custom format (`.dump`)

**Windows (PowerShell):**

```powershell
pg_restore -h localhost -p 5432 -U postgres -d omnicube_development --no-owner --no-acl omnicube_production.dump
```

**macOS (bash/zsh):**  
Same command; use Terminal from the directory where the dump file is:

```bash
pg_restore -h localhost -p 5432 -U postgres -d omnicube_development --no-owner --no-acl omnicube_production.dump
```

- `--no-owner --no-acl` avoids errors when production objects have owners/permissions that don’t exist on your local install.
- If prompted for a password, use the local `postgres` user’s password.

You may see warnings about “role does not exist” or “already exists”; if there are no fatal errors, the database is usually restored correctly.

### If you used plain format (`.sql`)

```bash
psql -h localhost -p 5432 -U postgres -d omnicube_development -f omnicube_production.sql
```

(Same on Windows and macOS.)

---

## Step 5: Point the backend at the local copy

In your `.env`, leave the **production** URL commented and set the **development** URL to the database you created:

```env
#------------------------------ PRODUCTION --------------------------------
#DATABASE_URL=postgresql+asyncpg://omnicube:PASSWORD@HOST/omnicube_production

#------------------------------ DEVELOPMENT --------------------------------
DATABASE_URL=postgresql+asyncpg://postgres:YOUR_LOCAL_PASSWORD@localhost:5432/omnicube_development
```

- Replace `YOUR_LOCAL_PASSWORD` with the password of the `postgres` user on your local PostgreSQL (or the user you used in Step 2).
- If you use a different user or port, adjust the URL accordingly.

Save `.env` and restart the backend. From then on, locally you’ll be using the production copy.

---

## Quick summary

| Step | Action                                                                                                                                                                                                                                          |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Have PostgreSQL installed (Windows: installer; macOS: Homebrew or Postgres.app).                                                                                                                                                                |
| 2    | Create empty database: `CREATE DATABASE omnicube_development;` in `psql -U postgres`.                                                                                                                                                           |
| 3    | Dump production: `pg_dump -h PRODUCTION_HOST -U omnicube -d omnicube_production -F c -f omnicube_production.dump` (replace `PRODUCTION_HOST` with host from `.env`; use `$env:PGPASSWORD` on Windows PowerShell, `export PGPASSWORD` on macOS). |
| 4    | Restore locally: `pg_restore -U postgres -d omnicube_development --no-owner --no-acl omnicube_production.dump`.                                                                                                                                 |
| 5    | In `.env` (development): `DATABASE_URL=postgresql+asyncpg://postgres:PASSWORD@localhost:5432/omnicube_development`.                                                                                                                             |

---

## Optional: use Docker (Windows or macOS)

If you prefer not to install PostgreSQL locally but have Docker:

1. **Dump from a container** (replace `YOUR_PASSWORD` and `PRODUCTION_HOST` with your production DB host from `.env`):

**Windows (PowerShell):**

```powershell
docker run --rm -v ${PWD}:/out postgres:16 pg_dump -h PRODUCTION_HOST -p 5432 -U omnicube -d omnicube_production -F c -f /out/omnicube_production.dump
```

(In PowerShell you may need `$PWD` or an absolute path instead of `${PWD}`.)

**macOS (bash/zsh):**  
Same command; `${PWD}` usually works in Terminal.

2. **Run PostgreSQL locally with Docker** and restore there:

```bash
docker run -d --name postgres-dev -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=omnicube_development -p 5432:5432 postgres:16
```

When the container is up:

```bash
# Adjust the path to the .dump file if it’s not in the current directory
docker exec -i postgres-dev pg_restore -U postgres -d omnicube_development --no-owner --no-acl < omnicube_production.dump
```

On Windows, if the dump is on a different path, it may be easier to copy it into the container and run `pg_restore` inside the container.

For development, in `.env`:

```env
DATABASE_URL=postgresql+asyncpg://postgres:postgres@localhost:5432/omnicube_development
```

---

## Security

- Do not commit the `.dump` file or `.env` to the repo (`.env` is usually in `.gitignore`).
- Add `*.dump` and `*_production*.sql` to `.gitignore` if you keep dumps in the project folder.
