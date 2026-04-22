# Development Rules and Guidelines

This document outlines the core development rules and standards that **must** be followed when working on this backend project. These rules ensure consistency, maintainability, and scalability across the entire codebase.

## Table of Contents

1. [Coding Standards](#coding-standards)
2. [API Design Guidelines](#api-design-guidelines)
3. [Project Structure](#project-structure)
4. [Internationalization](#internationalization)
5. [Router and Service Architecture](#router-and-service-architecture)

---

## Coding Standards

### Pydantic Models - Snake Case Only

**CRITICAL RULE**: All Pydantic models **MUST** use `snake_case` for all field names.

✅ **Correct:**

```python
class UserResponse(BaseModel):
    user_id: int
    first_name: str
    last_name: str
    created_at: datetime
    email_address: str
```

❌ **Incorrect:**

```python
class UserResponse(BaseModel):
    userId: int  # ❌ camelCase
    firstName: str  # ❌ camelCase
    CreatedAt: datetime  # ❌ PascalCase
```

**Why**: Consistency across the codebase and alignment with Python conventions.

---

### `__init__.py` Files - Only When Needed

**RULE**: Do **NOT** create `__init__.py` files unless they are absolutely necessary.

- Only create `__init__.py` when:
  - You need to export specific items from a module
  - You need to initialize package-level variables
  - Python requires it for package recognition (rare in our structure)

- Do **NOT** create empty `__init__.py` files "just in case"

**Why**: Reduces unnecessary files and keeps the codebase clean.

---

## Project Structure

### Strict Folder Structure Adherence

**RULE**: The folder structure defined in `FOLDER_STRUCTURE.md` **MUST** be followed exactly, no exceptions.

- Each domain/feature follows the exact pattern:

  ```
  [domain_name]/
  ├── [domain_name].py        # Router only
  ├── schemas/
  │   └── interfaces.py       # All Pydantic models
  └── services/
      └── [action]_[entity].py # Business logic
  ```

- Do **NOT** deviate from this structure
- Do **NOT** create alternative folder patterns
- Do **NOT** mix concerns (routers with business logic, etc.)

**Why**: Consistency enables team members to navigate and understand any part of the codebase quickly.

---

### Helper Functions - Reusable Code Location

**RULE**: Any function that can be reused across multiple domains **MUST** be placed in `src/helpers/`.

- Create the `src/helpers/` folder if it doesn't exist
- All reusable utility functions go here
- Examples:
  - Pagination helpers
  - Date/time utilities
  - String manipulation
  - Common validation functions
  - Response formatting utilities

**Structure:**

```
src/
└── helpers/
    ├── __init__.py           # Only if needed for exports
    ├── pagination.py          # Pagination utilities
    ├── datetime_utils.py      # Date/time helpers
    └── response_utils.py      # Response formatting
```

**Why**: Prevents code duplication and ensures consistency across features.

---

## API Design Guidelines

### GET vs POST - Parameter Handling

**CRITICAL RULE**:

- **GET requests**:
  - ✅ Use **ONLY** for simple, public endpoints that:
    - Don't require parameters
    - Don't need pagination
    - Return static or simple data
    - Examples: `/health`, `/public/info`, `/public/status`
  - ❌ **NEVER** use GET with:
    - Query parameters
    - Inline parameters
    - Filtering/searching
    - Pagination

- **POST requests**:
  - ✅ Use for **ALL** endpoints that require:
    - Parameters (filters, search, IDs, etc.)
    - Pagination
    - Request body data
    - Any form of input beyond the URL path

**Examples:**

✅ **Correct:**

```python
# Simple public GET - no params needed
@app.get("/health")
async def health():
    return {"status": "healthy"}

# POST with body for filtered/search results
@router.post("/appointments/search")
async def search_appointments(request: AppointmentSearchRequest):
    # request contains filters, pagination, etc.
    pass
```

❌ **Incorrect:**

```python
# ❌ GET with query params - FORBIDDEN
@app.get("/appointments?status=pending&page=1")
async def get_appointments(status: str, page: int):
    pass

# ❌ GET with inline params - FORBIDDEN
@app.get("/appointments/{status}/{page}")
async def get_appointments(status: str, page: int):
    pass
```

**Why**:

- POST with body provides better structure for complex requests
- Avoids URL length limitations
- Better security (sensitive data not in URL)
- Consistent API design pattern

---

### Pagination - Required for All Lists

**RULE**: **ALL** endpoints that return lists **MUST** implement pagination.

- Every list endpoint requires pagination parameters
- Use helper functions from `src/helpers/pagination.py` for consistency
- Pagination should be part of the POST request body

**Example:**

```python
# In schemas/interfaces.py
class AppointmentListRequest(BaseModel):
    page: int = 1
    page_size: int = 20
    filters: Optional[AppointmentFilters] = None

class PaginatedResponse(BaseModel):
    items: List[Any]
    total: int
    page: int
    page_size: int
    total_pages: int

# In services/get_appointments.py
def get_appointments(request: AppointmentListRequest) -> PaginatedResponse:
    # Use pagination helper
    paginated_data = paginate_query(
        query=appointments_query,
        page=request.page,
        page_size=request.page_size
    )
    return paginated_data
```

**Why**: Prevents performance issues with large datasets and provides consistent user experience.

---

## Router and Service Architecture

### Main Router (`main.py`) - Routes Only

**RULE**: `main.py` (or the main router file) **MUST** contain **ONLY** route registrations, nothing else.

✅ **Correct:**

```python
from fastapi import FastAPI
from src.appointment.appointment import router as appointment_router
from src.auth.auth import router as auth_router

app = FastAPI(title="Backend API", version="0.1.0")

app.include_router(appointment_router, prefix="/appointment", tags=["appointment"])
app.include_router(auth_router, prefix="/auth", tags=["auth"])
```

❌ **Incorrect:**

```python
# ❌ Business logic in main.py
@app.get("/appointments")
async def get_appointments():
    # Database queries here - WRONG!
    appointments = db.query(Appointment).all()
    return appointments

# ❌ Complex functions in main.py
def process_appointment_data(data):
    # Complex logic - WRONG LOCATION!
    pass
```

**Why**: Keeps the entry point clean and makes the application structure immediately clear.

---

### Domain Routers - Call Services Only

**RULE**: Domain router files (e.g., `appointment.py`) **MUST**:

- Define routes only
- Call service functions from `services/` directory
- **NOT** contain business logic
- **NOT** contain database queries
- **NOT** contain complex processing

✅ **Correct:**

```python
# appointment/appointment.py
from fastapi import APIRouter, Depends
from .schemas.interfaces import AppointmentRequest, AppointmentResponse
from .services.create_appointment import create_appointment_service

router = APIRouter()

@router.post("/", response_model=AppointmentResponse)
async def create_appointment(request: AppointmentRequest):
    return create_appointment_service(request)
```

❌ **Incorrect:**

```python
# ❌ Business logic in router
@router.post("/")
async def create_appointment(request: AppointmentRequest):
    # Database query in router - WRONG!
    appointment = db.query(Appointment).filter(...).first()
    # Complex logic - WRONG!
    if appointment.status == "pending":
        # ... more logic
    return appointment
```

---

### Service Functions - One File Per Function

**RULE**: Each service function **MUST** be in its own file within `services/`.

**Structure:**

```
appointment/
└── services/
    ├── create_appointment.py      # Contains: create_appointment_service()
    ├── get_appointments.py        # Contains: get_appointments_service()
    ├── accept_appointment.py      # Contains: accept_appointment_service()
    └── update_appointment.py      # Contains: update_appointment_service()
```

**Example:**

```python
# services/create_appointment.py
from ..schemas.interfaces import AppointmentRequest, AppointmentResponse

def create_appointment_service(request: AppointmentRequest) -> AppointmentResponse:
    # All business logic here
    # Database operations
    # Validation
    # Processing
    return response
```

**Why**:

- Single Responsibility Principle
- Easy to locate and test specific functionality
- Clear separation of concerns

---

## Internationalization

### Language Support - English First, Future-Ready

**CRITICAL RULE**:

1. **Always write code in English**:
   - Variable names
   - Function names
   - Comments
   - Documentation
   - Error messages (for now)

2. **Never set fallbacks or hardcoded words**:
   - ❌ Don't hardcode error messages like `"User not found"`
   - ❌ Don't set default language fallbacks
   - ✅ Always check if language parameter is available
   - ✅ If language is implemented, use it
   - ✅ If language is NOT implemented yet, pass/return for now (we'll implement in the future)

3. **Language Implementation Pattern** (when ready):
   ```python
   # Always check for lang parameter
   def get_error_message(error_code: str, lang: Optional[str] = None) -> str:
       if lang:
           # Use language service when implemented
           return language_service.get_message(error_code, lang)
       # For now, return empty or placeholder
       # Will be implemented in the future
       return ""
   ```

**Why**:

- Prepares the codebase for multi-language support
- Prevents refactoring when i18n is implemented
- Maintains consistency

---

## Summary Checklist

Before submitting any code, ensure:

- [ ] All Pydantic models use `snake_case`
- [ ] No unnecessary `__init__.py` files created
- [ ] Folder structure matches `FOLDER_STRUCTURE.md` exactly
- [ ] Reusable functions are in `src/helpers/`
- [ ] GET requests only for simple, public, no-param endpoints
- [ ] POST requests for anything with parameters or pagination
- [ ] All list endpoints have pagination
- [ ] `main.py` contains only route registrations
- [ ] Routers call service functions, no business logic
- [ ] Each service function in its own file
- [ ] All code in English
- [ ] No hardcoded fallbacks or words (check for lang support)
- [ ] Language support checked (even if not implemented yet)

---

## Questions or Clarifications

If you're unsure about any rule, **ask before implementing**. It's better to clarify than to create technical debt.

**Remember**: These rules exist to maintain code quality and team productivity. Following them strictly ensures the codebase remains maintainable and scalable.
