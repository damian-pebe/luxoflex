# How to Run the Project

This guide explains how to set up and run the Medadvisor Backend project in different environments.

## Prerequisites

Before running the project, ensure you have:

- **Python 3.11+** (check with `python --version`)
- **uv** (recommended) or **pip** for dependency management
- **PostgreSQL 15+** (for local development) or access to Supabase/PostgreSQL database
- **Redis** (optional, for caching and session management)
- **Docker** (optional, for containerized development)

## Environment Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd dx-plus-backend
```

### 2. Environment Variables

Create a `.env` file in the root directory (or `.env.local`):

```bash
# Database
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# Redis (optional)
REDIS_URL=redis://localhost:6379

# JWT/Auth
JWT_SECRET_KEY=your_secret_key
JWT_ALGORITHM=HS256

# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key

# AWS (for file uploads, if used)
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your_bucket_name

# FaceID (optional)
FACEID_MODEL_PATH=/path/to/model

# Chatbot (optional)
API_DEFAULT_BACKEND=gemini
API_DEFAULT_MODEL=gemini-2.5-flash
```

## Installation Methods

### Method 1: Using uv (Recommended)

`uv` is the recommended package manager for this project.

```bash
# Install uv if you don't have it
pip install uv  # or follow the official installation docs

# Install dependencies (including dev tools)
uv sync --group dev

# Run commands inside the managed environment
uv run python main.py
```

### Method 2: Using pip

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
# Or if using pyproject.toml:
pip install -e .
```

### Method 3: Using Docker

```bash
# Build the Docker image
docker build -t medadvisor-backend .

# Run the container
docker run -p 8000:8000 --env-file .env medadvisor-backend
```

## Running the Server

### Development Mode (Hot Reload)

**Using uv (recommended):**

```bash
uv run dev
# Or, if you prefer to call the script directly:
uv run python scripts.py dev
# Or run uvicorn directly:
uv run uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Using pip:**

```bash
python scripts.py dev
# Or
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Production Mode

**Using uv (recommended):**

```bash
uv run prod
# Or
uv run python scripts.py prod
# Or
uv run uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
```

**Using pip:**

```bash
python scripts.py prod
# Or
uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
```

### Simple Start (No Reload)

**Using uv (recommended):**

```bash
uv run start
# Or
uv run python scripts.py start
# Or
uv run uvicorn main:app --host 0.0.0.0 --port 8000
```

**Using pip:**

```bash
python scripts.py start
# Or
uvicorn main:app --host 0.0.0.0 --port 8000
```

## Verification

Once the server is running, verify it's working:

1. **Health Check:**

   ```bash
   curl http://localhost:8000/healthz
   ```

2. **API Documentation:**
   - Swagger UI: http://localhost:8000/docs
   - ReDoc: http://localhost:8000/redoc

3. **Root Endpoint:**
   ```bash
   curl http://localhost:8000/
   ```

## Docker Compose (Local Development)

If you have a `docker-compose.dev.yml` file:

```bash
# Start all services (backend + database + Redis)
docker-compose -f docker-compose.dev.yml up

# Run in background
docker-compose -f docker-compose.dev.yml up -d

# Stop services
docker-compose -f docker-compose.dev.yml down

# View logs
docker-compose -f docker-compose.dev.yml logs -f
```

## Common Issues and Solutions

### Issue: Port Already in Use

**Error:** `Address already in use`

**Solution:**

```bash
# Find process using port 8000
lsof -i :8000  # macOS/Linux
netstat -ano | findstr :8000  # Windows

# Kill the process or use a different port
uvicorn main:app --port 8001
```

### Issue: Database Connection Error

**Error:** `Connection refused` or `database does not exist`

**Solution:**

1. Verify database is running
2. Check `DATABASE_URL` or `SUPABASE_URL` in `.env`
3. Ensure database credentials are correct
4. Test connection:
   ```bash
   psql $DATABASE_URL
   ```

### Issue: Missing Dependencies

**Error:** `ModuleNotFoundError`

**Solution:**

```bash
# Reinstall dependencies
uv sync --group dev
# Or
pip install -r requirements.txt
```

### Issue: Redis Connection Error

**Error:** `Redis connection error`

**Solution:**

- Redis is optional; the app will continue without it
- To use Redis, ensure it's running:

  ```bash
  # Install and start Redis
  # macOS:
  brew install redis
  brew services start redis

  # Linux:
  sudo apt-get install redis-server
  sudo systemctl start redis

  # Docker:
  docker run -d -p 6379:6379 redis
  ```

### Issue: Import Errors

**Error:** `ImportError: cannot import name 'X' from 'src'`

**Solution:**

```bash
# Ensure you're in the project root
cd /path/to/dx-plus-backend

# Verify Python path
export PYTHONPATH="${PYTHONPATH}:$(pwd)"

# Or run commands via uv
uv run python main.py
```

## Development Workflow

### 1. Start Development Server

```bash
uv run dev
```

### 2. Make Changes

- Edit files in `src/`
- Server auto-reloads on file changes (in dev mode)

### 3. Test Changes

- Use Swagger UI: http://localhost:8000/docs
- Or use curl/Postman/HTTPie

### 4. Run Linters/Formatters

```bash
# Format code
uv run ruff format .

# Lint code
uv run ruff check .

# Type checking
uv run mypy src/
```

### 5. Run Tests (if available)

```bash
uv run pytest
```

## Production Deployment

### Using Docker

```bash
# Build production image
docker build -t medadvisor-backend:latest .

# Run with production settings
docker run -d \
  -p 8000:8000 \
  --env-file .env.production \
  --name medadvisor-backend \
  medadvisor-backend:latest
```

### Using AWS ECS

See deployment script:

```bash
./deploy.sh
```

Or follow AWS deployment guide in `aws-setup/MANUAL-WEB-GUIDE.md`

## Environment-Specific Configurations

### Local Development

- Port: `8000`
- Reload: Enabled
- Workers: 1
- Logging: Debug level

### Staging

- Port: `8000`
- Reload: Disabled
- Workers: 2-4
- Logging: Info level

### Production

- Port: `8000`
- Reload: Disabled
- Workers: 4+
- Logging: Warning/Error level
- HTTPS: Required
- CORS: Restricted origins

## Scripts Reference

The `scripts.py` file provides convenient commands:

| Command                   | Description                  |
| ------------------------- | ---------------------------- |
| `python scripts.py start` | Start server (no reload)     |
| `python scripts.py dev`   | Start server with hot reload |
| `python scripts.py prod`  | Start server with 4 workers  |

Or use uv scripts:

- `uv run start`
- `uv run dev`
- `uv run prod`

## Additional Resources

- **API Documentation**: http://localhost:8000/docs
- **Project README**: `README.md`
- **Folder Structure**: `docs/FOLDER_STRUCTURE.md`
- **AWS Setup**: `aws-setup/MANUAL-WEB-GUIDE.md`

## Getting Help

If you encounter issues:

1. Check the logs for error messages
2. Verify environment variables are set correctly
3. Ensure all dependencies are installed
4. Check database/Redis connectivity
5. Review the main README.md for additional setup instructions
