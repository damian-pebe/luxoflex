# Router Architecture Guidelines

This document explains the router architecture pattern that must be followed throughout the backend project.

## Core Principle

**Routers are thin layers that only define routes and delegate to services. All business logic lives in service functions.**

---

## Main Router (`main.py`)

### Structure

The main router file (`main.py` or `src/main.py`) **MUST** contain **ONLY**:

- FastAPI app initialization
- Router registrations
- Middleware setup (if needed)
- Global exception handlers (if needed)

**MUST NOT contain:**

- Business logic
- Database queries
- Complex functions
- Route handlers with implementation

### Example

```python
# main.py or src/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import routers
from src.appointment.appointment import router as appointment_router
from src.auth.auth import router as auth_router
from src.user.user import router as user_router

# Initialize FastAPI app
app = FastAPI(
    title="Backend API",
    version="0.1.0",
    description="API documentation"
)

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(
    appointment_router,
    prefix="/appointment",
    tags=["appointment"]
)

app.include_router(
    auth_router,
    prefix="/auth",
    tags=["auth"]
)

app.include_router(
    user_router,
    prefix="/user",
    tags=["user"]
)
```

### What NOT to Do

```python
# ❌ WRONG - Business logic in main.py
@app.post("/appointments")
async def create_appointment(request: AppointmentRequest):
    # Database query - WRONG LOCATION!
    appointment = db.query(Appointment).filter(...).first()
    # Business logic - WRONG LOCATION!
    if appointment.status == "pending":
        # ... more logic
    return appointment

# ❌ WRONG - Complex functions in main.py
def process_appointment_data(data):
    # Complex processing - WRONG LOCATION!
    pass
```

---

## Domain Routers

### Structure

Each domain router (e.g., `appointment/appointment.py`) **MUST**:

- Define routes only
- Call service functions from `services/` directory
- Handle HTTP-specific concerns (status codes, responses)
- Use dependency injection for auth, DB sessions, etc.

**MUST NOT contain:**

- Business logic
- Database queries directly
- Complex data processing
- Validation logic (use Pydantic models)

### Example

```python
# appointment/appointment.py
from fastapi import APIRouter, Depends, HTTPException, status
from typing import List

from .schemas.interfaces import (
    AppointmentRequest,
    AppointmentResponse,
    AppointmentSearchRequest,
    AppointmentSearchResponse,
    AcceptAppointmentRequest
)
from .services.create_appointment import create_appointment_service
from .services.get_appointments import get_appointments_service
from .services.accept_appointment import accept_appointment_service
from .services.get_appointment_details import get_appointment_details_service

router = APIRouter()

@router.post("/", response_model=AppointmentResponse, status_code=status.HTTP_201_CREATED)
async def create_appointment(request: AppointmentRequest):
    """
    Create a new appointment.
    """
    return create_appointment_service(request)

@router.post("/search", response_model=AppointmentSearchResponse)
async def search_appointments(request: AppointmentSearchRequest):
    """
    Search appointments with filters and pagination.
    """
    return get_appointments_service(request)

@router.post("/{appointment_id}", response_model=AppointmentResponse)
async def get_appointment_details(
    appointment_id: int,
    request: Optional[GetAppointmentRequest] = None
):
    """
    Get details of a specific appointment.
    """
    return get_appointment_details_service(appointment_id, request)

@router.post("/{appointment_id}/accept", response_model=AppointmentResponse)
async def accept_appointment(
    appointment_id: int,
    request: AcceptAppointmentRequest
):
    """
    Accept an appointment.
    """
    return accept_appointment_service(appointment_id, request)
```

### Router Responsibilities

1. **Route Definition**: Define the endpoint path, method, and response model
2. **Request Validation**: Use Pydantic models (automatic with FastAPI)
3. **Service Delegation**: Call the appropriate service function
4. **HTTP Concerns**: Handle status codes, exceptions, responses
5. **Dependency Injection**: Use Depends() for auth, DB sessions, etc.

---

## Service Functions

### Structure

Each service function **MUST**:

- Be in its own file within `services/`
- Have a descriptive name ending with `_service`
- Accept typed parameters
- Return typed responses
- Contain all business logic
- Handle database operations
- Perform validation
- Process data

### File Naming

Service files follow the pattern: `[action]_[entity].py`

Examples:

- `create_appointment.py` → `create_appointment_service()`
- `get_appointments.py` → `get_appointments_service()`
- `accept_appointment.py` → `accept_appointment_service()`
- `update_appointment_status.py` → `update_appointment_status_service()`

### Example Service Function

```python
# appointment/services/create_appointment.py
from typing import Optional
from datetime import datetime

from ..schemas.interfaces import AppointmentRequest, AppointmentResponse
from src.models import Appointment, Professional
from src.database import get_db

def create_appointment_service(request: AppointmentRequest) -> AppointmentResponse:
    """
    Create a new appointment.

    Business logic:
    1. Validate professional exists
    2. Check professional availability
    3. Create appointment in database
    4. Return created appointment
    """
    db = next(get_db())

    # Validate professional exists
    professional = db.query(Professional).filter(
        Professional.id == request.professional_id
    ).first()

    if not professional:
        raise ValueError(f"Professional {request.professional_id} not found")

    # Check availability
    if not is_professional_available(
        professional_id=request.professional_id,
        date=request.appointment_date,
        duration=request.duration_minutes
    ):
        raise ValueError("Professional is not available at this time")

    # Create appointment
    appointment = Appointment(
        professional_id=request.professional_id,
        date=request.appointment_date,
        duration_minutes=request.duration_minutes,
        notes=request.patient_notes,
        status="pending",
        created_at=datetime.now()
    )

    db.add(appointment)
    db.commit()
    db.refresh(appointment)

    # Return response
    return AppointmentResponse(
        appointment_id=appointment.id,
        professional_id=appointment.professional_id,
        appointment_date=appointment.date,
        status=appointment.status,
        duration_minutes=appointment.duration_minutes,
        patient_notes=appointment.notes,
        created_at=appointment.created_at
    )
```

### Service Function Responsibilities

1. **Business Logic**: All domain-specific logic
2. **Database Operations**: Queries, inserts, updates, deletes
3. **Validation**: Business rule validation
4. **Data Processing**: Transform, calculate, aggregate
5. **Error Handling**: Raise appropriate exceptions
6. **Response Building**: Create response models

---

## Request Flow

### Complete Flow Example

```
1. Client Request
   POST /appointment
   Body: { "professional_id": 1, "appointment_date": "2024-01-15T10:00:00" }

2. Main Router (main.py)
   → Routes to appointment_router

3. Domain Router (appointment/appointment.py)
   → Validates request with Pydantic (AppointmentRequest)
   → Calls create_appointment_service(request)

4. Service Function (appointment/services/create_appointment.py)
   → Validates business rules
   → Queries database
   → Creates appointment
   → Returns AppointmentResponse

5. Domain Router
   → Returns HTTP response with status code

6. Client Response
   201 Created
   Body: { "appointment_id": 123, "status": "pending", ... }
```

---

## Dependency Injection

### Using Depends() in Routers

```python
from fastapi import Depends
from src.auth.dependencies import get_current_user
from src.database import get_db

@router.post("/", response_model=AppointmentResponse)
async def create_appointment(
    request: AppointmentRequest,
    current_user: User = Depends(get_current_user),
    db = Depends(get_db)
):
    """
    Create appointment with authenticated user.
    """
    return create_appointment_service(request, current_user.id, db)
```

### Passing Dependencies to Services

```python
# services/create_appointment.py
def create_appointment_service(
    request: AppointmentRequest,
    user_id: int,
    db: Session
) -> AppointmentResponse:
    # Use db and user_id in service
    pass
```

---

## Error Handling in Routers

### HTTP Exceptions

```python
from fastapi import HTTPException, status

@router.post("/{appointment_id}/accept")
async def accept_appointment(
    appointment_id: int,
    request: AcceptAppointmentRequest
):
    try:
        return accept_appointment_service(appointment_id, request)
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        )
```

### Or Handle in Service

```python
# Better: Handle in service, raise HTTPException in router
# services/accept_appointment.py
def accept_appointment_service(...):
    if appointment.status != "pending":
        raise ValueError("Appointment is not pending")
    # ...

# Router
@router.post("/{appointment_id}/accept")
async def accept_appointment(...):
    try:
        return accept_appointment_service(...)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
```

---

## Summary

### Router Architecture Checklist

- [ ] `main.py` contains only router registrations
- [ ] Domain routers contain only route definitions
- [ ] All business logic is in service functions
- [ ] Each service function is in its own file
- [ ] Service files follow `[action]_[entity].py` pattern
- [ ] Service functions are named `[action]_[entity]_service`
- [ ] Routers use Pydantic models for validation
- [ ] Routers handle HTTP concerns (status codes, exceptions)
- [ ] Services handle business logic and database operations
- [ ] Dependencies are injected using Depends()

### File Organization

```
appointment/
├── appointment.py              # Router - routes only
├── schemas/
│   └── interfaces.py           # Pydantic models
└── services/
    ├── create_appointment.py   # create_appointment_service()
    ├── get_appointments.py     # get_appointments_service()
    ├── accept_appointment.py   # accept_appointment_service()
    └── get_appointment_details.py  # get_appointment_details_service()
```

---

## Benefits of This Architecture

1. **Separation of Concerns**: Clear boundaries between HTTP and business logic
2. **Testability**: Services can be tested independently
3. **Reusability**: Services can be called from multiple places
4. **Maintainability**: Easy to locate and modify specific functionality
5. **Scalability**: Easy to add new routes and services
6. **Consistency**: Same pattern across all domains
