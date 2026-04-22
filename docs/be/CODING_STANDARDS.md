# Coding Standards

This document defines the coding standards and conventions that must be followed throughout the backend project.

## Python Code Style

### General Principles

- Follow PEP 8 style guide
- Use type hints for all function parameters and return types
- Write clear, descriptive variable and function names
- Keep functions focused and single-purpose
- Write docstrings for all public functions

---

## Naming Conventions

### Variables and Functions

- **snake_case** for all variables and functions
- Descriptive names that explain purpose
- Avoid abbreviations unless widely understood

```python
# ✅ Correct
user_id: int
appointment_date: datetime
get_appointments_by_status: Callable

# ❌ Incorrect
userId: int  # camelCase
apptDate: datetime  # Abbreviation
getApps: Callable  # Unclear abbreviation
```

### Classes

- **PascalCase** for class names
- Descriptive names

```python
# ✅ Correct
class AppointmentResponse(BaseModel):
    pass

class UserService:
    pass

# ❌ Incorrect
class appointment_response(BaseModel):  # Should be PascalCase
    pass
```

### Constants

- **UPPER_SNAKE_CASE** for constants

```python
# ✅ Correct
MAX_PAGE_SIZE = 100
DEFAULT_TIMEOUT = 30
API_VERSION = "1.0.0"
```

---

## Pydantic Models

### Field Naming - Snake Case Only

**CRITICAL**: All Pydantic model fields **MUST** use `snake_case`.

```python
# ✅ Correct
class UserResponse(BaseModel):
    user_id: int
    first_name: str
    last_name: str
    email_address: str
    created_at: datetime
    is_active: bool

class AppointmentRequest(BaseModel):
    professional_id: int
    appointment_date: datetime
    duration_minutes: int
    patient_notes: Optional[str] = None

# ❌ Incorrect - DO NOT USE
class UserResponse(BaseModel):
    userId: int  # ❌ camelCase
    firstName: str  # ❌ camelCase
    emailAddress: str  # ❌ camelCase
    createdAt: datetime  # ❌ camelCase
    isActive: bool  # ❌ camelCase
```

### Model Structure

```python
from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

class AppointmentRequest(BaseModel):
    """Request model for creating an appointment."""

    professional_id: int = Field(..., gt=0, description="ID of the professional")
    appointment_date: datetime = Field(..., description="Date and time of appointment")
    duration_minutes: int = Field(default=30, ge=15, le=240, description="Duration in minutes")
    patient_notes: Optional[str] = Field(None, max_length=1000, description="Optional notes from patient")

    class Config:
        json_schema_extra = {
            "example": {
                "professional_id": 1,
                "appointment_date": "2024-01-15T10:00:00",
                "duration_minutes": 30,
                "patient_notes": "Please arrive 10 minutes early"
            }
        }
```

### Best Practices for Pydantic Models

1. **Always provide Field descriptions**
2. **Use Field constraints** (ge, le, gt, lt, min_length, max_length)
3. **Use Optional for nullable fields**
4. **Provide example values in Config**
5. **Group related models in the same file**

---

## File Organization

### `__init__.py` Files

**RULE**: Only create `__init__.py` files when absolutely necessary.

**When to create:**

- Need to export specific items from a module
- Need package-level initialization
- Python requires it for package recognition

**When NOT to create:**

- Empty files "just in case"
- Files with only comments
- Files that don't export anything

**Example of valid `__init__.py`:**

```python
# src/helpers/__init__.py
# Only if we need to export specific functions
from .pagination import paginate_query
from .datetime_utils import format_datetime

__all__ = ["paginate_query", "format_datetime"]
```

---

## Function Structure

### Service Functions

Each service function should:

- Be in its own file
- Have a clear, descriptive name
- Accept typed parameters
- Return typed responses
- Handle errors appropriately

```python
# services/create_appointment.py
from typing import Optional
from ..schemas.interfaces import AppointmentRequest, AppointmentResponse

def create_appointment_service(request: AppointmentRequest) -> AppointmentResponse:
    """
    Create a new appointment.

    Args:
        request: Appointment creation request with all required fields

    Returns:
        AppointmentResponse with created appointment details

    Raises:
        ValueError: If appointment cannot be created
    """
    # Validation
    if not is_professional_available(request.professional_id, request.appointment_date):
        raise ValueError("Professional is not available at this time")

    # Business logic
    appointment = create_appointment_in_db(request)

    # Return response
    return AppointmentResponse(
        appointment_id=appointment.id,
        professional_id=appointment.professional_id,
        appointment_date=appointment.date,
        status=appointment.status,
        created_at=appointment.created_at
    )
```

### Helper Functions

Helper functions in `src/helpers/` should be:

- Pure functions when possible (no side effects)
- Well-documented
- Reusable across domains
- Tested independently

```python
# src/helpers/pagination.py
from typing import List, Dict, Any
from sqlalchemy.orm import Query

def paginate_query(
    query: Query,
    page: int = 1,
    page_size: int = 20
) -> Dict[str, Any]:
    """
    Paginate a SQLAlchemy query.

    Args:
        query: SQLAlchemy query object
        page: Page number (1-indexed)
        page_size: Number of items per page

    Returns:
        Dictionary with paginated results and metadata
    """
    total = query.count()
    total_pages = (total + page_size - 1) // page_size

    items = query.offset((page - 1) * page_size).limit(page_size).all()

    return {
        "items": items,
        "total": total,
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "has_next": page < total_pages,
        "has_previous": page > 1
    }
```

---

## Type Hints

### Always Use Type Hints

**Every function MUST have type hints:**

```python
# ✅ Correct
def get_user_by_id(user_id: int) -> Optional[User]:
    pass

def create_appointment(
    request: AppointmentRequest,
    user_id: int
) -> AppointmentResponse:
    pass

# ❌ Incorrect
def get_user_by_id(user_id):  # Missing type hints
    pass

def create_appointment(request, user_id):  # Missing type hints
    pass
```

### Import Types Properly

```python
from typing import Optional, List, Dict, Any, Union
from datetime import datetime
from pydantic import BaseModel

# Use Optional for nullable types
def find_user(user_id: int) -> Optional[User]:
    pass

# Use List for lists
def get_all_appointments() -> List[Appointment]:
    pass

# Use Dict for dictionaries
def get_user_stats() -> Dict[str, Any]:
    pass
```

---

## Comments and Documentation

### Docstrings

**All public functions MUST have docstrings:**

```python
def create_appointment_service(request: AppointmentRequest) -> AppointmentResponse:
    """
    Create a new appointment for a patient with a professional.

    This function validates the request, checks professional availability,
    creates the appointment in the database, and returns the created appointment.

    Args:
        request: AppointmentRequest containing appointment details

    Returns:
        AppointmentResponse with the created appointment information

    Raises:
        ValueError: If professional is not available
        ValueError: If appointment date is in the past
    """
    pass
```

### Inline Comments

- Use comments to explain **why**, not **what**
- Keep comments up-to-date with code
- Remove commented-out code before committing

```python
# ✅ Good comment
# Check availability before creating to prevent double-booking
if not is_available(professional_id, date):
    raise ValueError("Professional not available")

# ❌ Bad comment (obvious from code)
# Increment the counter
counter += 1
```

---

## Language and Internationalization

### Code Language - English Only

**ALL code MUST be in English:**

- Variable names
- Function names
- Class names
- Comments
- Docstrings
- Error messages (for now - see i18n section)

```python
# ✅ Correct - English
def get_user_appointments(user_id: int) -> List[Appointment]:
    """Get all appointments for a user."""
    pass

# ❌ Incorrect - Other languages
def obtener_citas_usuario(user_id: int):  # Spanish
    """Obtener todas las citas de un usuario."""
    pass
```

### Language Support Pattern

**When implementing language support:**

1. **Never hardcode messages**
2. **Always check for language parameter**
3. **If language service exists, use it**
4. **If language service doesn't exist yet, return empty/placeholder**

```python
def get_error_message(error_code: str, lang: Optional[str] = None) -> str:
    """
    Get error message with language support.

    Args:
        error_code: Error code identifier
        lang: Optional language code (e.g., 'en', 'es')

    Returns:
        Error message in requested language, or empty if not implemented
    """
    if lang:
        # TODO: Implement language service
        # return language_service.get_message(error_code, lang)
        pass

    # For now, return empty
    # Will be implemented in the future
    return ""

# ❌ DO NOT DO THIS
def get_error_message(error_code: str) -> str:
    return "User not found"  # ❌ Hardcoded English message
```

---

## Error Handling

### Exception Handling

```python
# ✅ Good error handling
def get_appointment(appointment_id: int) -> AppointmentResponse:
    appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()

    if not appointment:
        raise ValueError(f"Appointment {appointment_id} not found")

    return AppointmentResponse.from_orm(appointment)

# ❌ Bad error handling
def get_appointment(appointment_id: int):
    appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()
    return appointment  # Returns None if not found - unclear
```

### Custom Exceptions

Create custom exceptions when needed:

```python
# src/exceptions.py
class AppointmentNotFoundError(Exception):
    """Raised when appointment is not found."""
    pass

class ProfessionalNotAvailableError(Exception):
    """Raised when professional is not available."""
    pass
```

---

## Summary Checklist

Before submitting code, verify:

- [ ] All variables and functions use `snake_case`
- [ ] All Pydantic fields use `snake_case`
- [ ] All classes use `PascalCase`
- [ ] All constants use `UPPER_SNAKE_CASE`
- [ ] All functions have type hints
- [ ] All public functions have docstrings
- [ ] No unnecessary `__init__.py` files
- [ ] All code is in English
- [ ] No hardcoded messages (check for lang support)
- [ ] Comments explain "why", not "what"
- [ ] Error handling is appropriate
