# API Design Guidelines

This document provides detailed guidelines for designing and implementing API endpoints in this backend project.

## Request/Response Patterns

### GET Requests - Simple Public Endpoints Only

GET requests should **ONLY** be used for:

- Health checks
- Public information endpoints
- Simple status endpoints
- Static data that requires no parameters

**Characteristics of valid GET endpoints:**

- ✅ No parameters required
- ✅ No pagination needed
- ✅ No filtering or searching
- ✅ Publicly accessible (or simple auth check)
- ✅ Returns simple, static data

**Examples:**

```python
# ✅ Valid GET endpoints
@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.get("/public/info")
async def get_public_info():
    return {"version": "1.0.0", "name": "API"}

@app.get("/status")
async def get_status():
    return {"online": True}
```

---

### POST Requests - Everything Else

**ALL** endpoints that require any form of input **MUST** use POST with a request body.

**Use POST for:**

- ✅ Any endpoint with parameters
- ✅ Filtering or searching
- ✅ Pagination
- ✅ Complex queries
- ✅ Data retrieval with conditions
- ✅ Any endpoint that needs a request body

**Request Body Structure:**

```python
# schemas/interfaces.py
class AppointmentSearchRequest(BaseModel):
    # Pagination (required for lists)
    page: int = 1
    page_size: int = 20

    # Filters (optional)
    status: Optional[str] = None
    date_from: Optional[datetime] = None
    date_to: Optional[datetime] = None
    professional_id: Optional[int] = None

    # Search
    search_term: Optional[str] = None

class AppointmentSearchResponse(BaseModel):
    items: List[AppointmentResponse]
    total: int
    page: int
    page_size: int
    total_pages: int
```

**Router Implementation:**

```python
# appointment/appointment.py
@router.post("/search", response_model=AppointmentSearchResponse)
async def search_appointments(request: AppointmentSearchRequest):
    return search_appointments_service(request)
```

---

## Pagination Pattern

### Required for All List Endpoints

**Every endpoint that returns a list MUST include pagination.**

### Pagination Request Schema

```python
# schemas/interfaces.py
class PaginationParams(BaseModel):
    page: int = Field(default=1, ge=1, description="Page number (1-indexed)")
    page_size: int = Field(default=20, ge=1, le=100, description="Items per page")

# Include in all list request schemas
class AppointmentListRequest(PaginationParams):
    filters: Optional[AppointmentFilters] = None
```

### Pagination Response Schema

```python
# Can be in helpers or models
class PaginatedResponse(BaseModel):
    items: List[Any]
    total: int
    page: int
    page_size: int
    total_pages: int
    has_next: bool
    has_previous: bool
```

### Pagination Helper Function

```python
# src/helpers/pagination.py
from typing import List, TypeVar, Generic
from sqlalchemy.orm import Query

T = TypeVar('T')

def paginate_query(
    query: Query,
    page: int = 1,
    page_size: int = 20
) -> dict:
    """
    Paginate a SQLAlchemy query.

    Returns:
        dict with items, total, page, page_size, total_pages, has_next, has_previous
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

### Service Implementation

```python
# services/get_appointments.py
from src.helpers.pagination import paginate_query
from ..schemas.interfaces import AppointmentListRequest, PaginatedAppointmentResponse

def get_appointments_service(request: AppointmentListRequest) -> PaginatedAppointmentResponse:
    # Build query
    query = db.query(Appointment)

    # Apply filters
    if request.filters:
        if request.filters.status:
            query = query.filter(Appointment.status == request.filters.status)
        if request.filters.date_from:
            query = query.filter(Appointment.date >= request.filters.date_from)

    # Apply pagination
    result = paginate_query(
        query=query,
        page=request.page,
        page_size=request.page_size
    )

    return PaginatedAppointmentResponse(**result)
```

---

## Error Handling

### Error Response Schema

```python
# src/models.py or helpers
class ErrorResponse(BaseModel):
    error_code: str
    message: str  # Will be empty until lang is implemented
    details: Optional[dict] = None
```

### Language-Aware Error Messages

```python
# services/helpers/error_handler.py
def get_error_message(
    error_code: str,
    lang: Optional[str] = None,
    details: Optional[dict] = None
) -> ErrorResponse:
    """
    Get error message with language support.

    For now, returns empty message. Will be implemented with language service.
    """
    if lang:
        # TODO: Implement language service
        # return language_service.get_message(error_code, lang)
        pass

    # For now, return empty message
    # Will be implemented in the future
    return ErrorResponse(
        error_code=error_code,
        message="",  # Empty until lang service is implemented
        details=details
    )
```

---

## Endpoint Naming Conventions

### RESTful Patterns

- **POST `/resource`** - Create new resource
- **POST `/resource/search`** - Search/filter resources (with body)
- **POST `/resource/{id}/action`** - Perform action on resource
- **GET `/resource/{id}`** - Get single resource (if no params needed)
- **POST `/resource/{id}`** - Get single resource (if params needed)

### Examples

```python
# ✅ Correct patterns
@router.post("/")  # Create
@router.post("/search")  # List with filters
@router.post("/{id}/accept")  # Action
@router.post("/{id}/reject")  # Action
@router.post("/{id}")  # Get with params if needed
```

---

## Request Validation

### Pydantic Models for All Requests

**Every POST endpoint MUST have a Pydantic request model:**

```python
# schemas/interfaces.py
class CreateAppointmentRequest(BaseModel):
    professional_id: int
    date: datetime
    notes: Optional[str] = None
    duration_minutes: int = 30

class AppointmentResponse(BaseModel):
    appointment_id: int
    professional_id: int
    date: datetime
    status: str
    notes: Optional[str] = None
    created_at: datetime
```

### Validation Rules

- Use Pydantic validators for complex validation
- Use Field() for constraints (min, max, regex, etc.)
- Always use `snake_case` for field names
- Provide clear field descriptions

```python
from pydantic import BaseModel, Field, validator

class AppointmentRequest(BaseModel):
    professional_id: int = Field(..., gt=0, description="Professional ID")
    date: datetime = Field(..., description="Appointment date and time")
    duration_minutes: int = Field(default=30, ge=15, le=240, description="Duration in minutes")

    @validator('date')
    def validate_future_date(cls, v):
        if v < datetime.now():
            raise ValueError('Date must be in the future')
        return v
```

---

## Response Models

### Always Define Response Models

**Every endpoint MUST have a response_model:**

```python
@router.post("/", response_model=AppointmentResponse)
async def create_appointment(request: AppointmentRequest):
    return create_appointment_service(request)
```

### Response Consistency

- Use consistent response structures
- Include all relevant data
- Use `snake_case` for all fields
- Provide clear field descriptions

---

## Summary

### API Design Checklist

- [ ] GET only for simple, public, no-param endpoints
- [ ] POST for all endpoints with parameters
- [ ] All list endpoints have pagination
- [ ] Pagination uses helper function from `src/helpers/pagination.py`
- [ ] All requests have Pydantic models
- [ ] All responses have Pydantic models
- [ ] All field names in `snake_case`
- [ ] Error handling checks for language support
- [ ] No query parameters in URLs
- [ ] No inline parameters in GET requests
