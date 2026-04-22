# useApiClient Hook

This hook provides an authenticated Axios instance with automatic token refresh, error handling, and request/response interceptors.

---

## ✅ When to Use

- **Authenticated API calls** - Use `useApiClient()` for endpoints that require authentication
- **Automatic token refresh** - Handles 401 errors and refreshes tokens automatically
- **Global error handling** - Shows snackbar notifications for errors automatically

---

## 📂 Usage

```typescript
import useApiClient from "@/hooks/useApiClient";

const MyComponent = () => {
  const { apiClient } = useApiClient();

  const fetchData = async () => {
    try {
      // All data is sent via POST with a body (FastAPI pattern)
      const { data } = await apiClient.post("/api/users/list", {
        page: 1,
        limit: 10,
        filters: {
          status: "active",
        },
      });
      console.log(data);
    } catch (error) {
      // Error is already handled by the interceptor
      // Shows snackbar notification automatically
    }
  };

  const createData = async () => {
    try {
      const { data } = await apiClient.post("/api/users", {
        name: "John",
        email: "john@example.com",
      });
      console.log(data);
    } catch (error) {
      // Error is already handled
    }
  };

  return (
    // Your component JSX
  );
};
```

---

## 🔧 API Methods

The hook returns an `apiClient` object with the following methods. **All data is sent via POST with a request body** (FastAPI pattern).

### POST Request (Primary Method)

All API calls use POST with a request body, even for fetching data:

```typescript
const { apiClient } = useApiClient();

// Fetching data with POST body
const { data } = await apiClient.post("/api/users/list", {
  page: 1,
  limit: 10,
  filters: {
    status: "active",
    search: "john",
  },
  sort: {
    field: "created_at",
    order: "desc",
  },
});

// POST with TypeScript
interface ListUsersRequest {
  page: number;
  limit: number;
  filters?: {
    status?: string;
    search?: string;
  };
  sort?: {
    field: string;
    order: "asc" | "desc";
  };
}

const { data } = await apiClient.post<User[]>("/api/users/list", {
  page: 1,
  limit: 10,
} as ListUsersRequest);

// Creating resources
const { data } = await apiClient.post<User>("/api/users", {
  name: "John Doe",
  email: "john@example.com",
  role: "admin",
});

// POST with custom headers (if needed)
const { data } = await apiClient.post("/api/users", payload, {
  headers: { "Custom-Header": "value" },
});
```

### PUT Request

```typescript
const { apiClient } = useApiClient();

// Update with full resource
const { data } = await apiClient.put(`/api/users/${id}`, {
  name: "Updated Name",
  email: "updated@example.com",
  role: "user",
});
```

### PATCH Request

```typescript
const { apiClient } = useApiClient();

// Partial update
const { data } = await apiClient.patch(`/api/users/${id}`, {
  name: "Updated Name",
  // Only send fields that need updating
});
```

### DELETE Request

```typescript
const { apiClient } = useApiClient();

// Delete with optional body for additional data
await apiClient.delete(`/api/users/${id}`, {
  data: {
    reason: "User requested deletion",
  },
});
```

---

## 🐍 FastAPI Integration

This client is optimized for FastAPI backends. FastAPI automatically parses request bodies from POST/PUT/PATCH requests.

### FastAPI Request Body Pattern

```typescript
// Frontend: Send data in POST body
const { data } = await apiClient.post("/api/users/list", {
  page: 1,
  limit: 10,
  filters: {
    status: "active",
  },
});

// FastAPI Backend receives as Pydantic model:
// @app.post("/api/users/list")
// async def list_users(request: ListUsersRequest):
//     # request.page, request.limit, request.filters are available
//     ...
```

### Type-Safe Request Bodies

Always define TypeScript interfaces that match your FastAPI Pydantic models:

```typescript
// Frontend TypeScript interface
interface CreateUserRequest {
  name: string;
  email: string;
  role: "admin" | "user";
  metadata?: Record<string, unknown>;
}

// FastAPI Pydantic model (for reference)
// class CreateUserRequest(BaseModel):
//     name: str
//     email: str
//     role: Literal["admin", "user"]
//     metadata: Optional[Dict[str, Any]] = None

const { data } = await apiClient.post<User>("/api/users", {
  name: "John",
  email: "john@example.com",
  role: "admin",
} as CreateUserRequest);
```

---

## 🔄 Automatic Token Refresh

The hook automatically handles token refresh:

1. **401 Error Detected** - When a request returns 401
2. **Token Refresh** - Automatically calls `/auth/refresh`
3. **Request Retry** - Retries the original request with new token
4. **Queue Management** - Queues multiple requests during refresh

**You don't need to handle this manually** - it's all automatic!

---

## ⚠️ Error Handling

Errors are automatically handled by the interceptor:

- **Shows snackbar notification** - User-friendly error messages
- **Extracts error messages** - From `response.data.message` or `response.data.detail`
- **Fallback messages** - Default messages for common HTTP status codes
- **Network errors** - Handles connection issues gracefully

### Error Response Format

FastAPI returns errors in this format (automatically handled):

```json
{
  "detail": "Error message here"
}
```

Or with custom error format:

```json
{
  "message": "Error message here",
  "detail": "Detailed error description"
}
```

The interceptor automatically extracts `detail` or `message` from the response.

---

## 🎯 Best Practices

1. **Always use POST with body** - All data is sent via POST request body (FastAPI pattern)
2. **Never use query parameters** - Send all data in the request body instead
3. **Always use in hooks** - Use `useApiClient()` inside React components or custom hooks
4. **Don't create instances manually** - Always use the hook
5. **Type your request bodies** - Define TypeScript interfaces that match FastAPI Pydantic models
6. **Type your responses** - Use TypeScript generics for response type safety
7. **Handle errors appropriately** - Errors are shown automatically, but you can add custom handling

---

## 💡 Example: In a Custom Hook

```typescript
import { useQuery } from "@tanstack/react-query";
import useApiClient from "@/hooks/useApiClient";
import useErrorHandler from "@/hooks/useErrorHandler";

interface ListUsersRequest {
  page?: number;
  limit?: number;
  filters?: {
    status?: string;
    search?: string;
  };
}

export const useUsers = (request: ListUsersRequest = {}) => {
  const { apiClient } = useApiClient();
  const { errorHandler } = useErrorHandler();

  const fetchUsers = async () => {
    try {
      // All data sent via POST body (FastAPI pattern)
      const { data } = await apiClient.post<User[]>("/api/users/list", {
        page: request.page || 1,
        limit: request.limit || 10,
        filters: request.filters || {},
      });
      return data;
    } catch (error) {
      errorHandler(error);
    }
  };

  const query = useQuery({
    queryKey: ["users", request],
    queryFn: fetchUsers,
  });

  return {
    users: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
};
```

---

## 🔐 Authentication

The hook automatically:

- **Sends credentials** - `withCredentials: true` for cookie-based auth
- **Includes tokens** - If using header-based auth, configure in interceptors
- **Refreshes tokens** - Automatically on 401 errors

---

## ⚙️ Configuration

The base URL is configured via environment variables:

- `VITE_PROD_API_URL` - Production API URL
- `VITE_DEV_API_URL` - Development API URL

Default timeout: **30 seconds**

---

## 🧠 Summary

| Feature                   | Description                      |
| ------------------------- | -------------------------------- |
| ✅ Authenticated requests | Automatic token handling         |
| 🔄 Auto token refresh     | Handles 401 errors automatically |
| ⚠️ Error handling         | Shows snackbars automatically    |
| 🎯 TypeScript support     | Full type safety                 |
| 🔐 Credentials            | Cookie-based auth support        |
| ⏱️ Timeout                | 30 second default timeout        |
