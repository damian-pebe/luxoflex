# usePublicApiClient Hook

This hook provides a public Axios instance for unauthenticated API calls. It includes error handling but does not include token refresh logic.

---

## ✅ When to Use

- **Public endpoints** - Use `usePublicApiClient()` for endpoints that don't require authentication
- **Login/Register** - Authentication endpoints
- **Public data** - Publicly accessible resources
- **No token refresh** - Endpoints that shouldn't trigger token refresh

---

## 📂 Usage

```typescript
import usePublicApiClient from "@/hooks/usePublicApiClient";

const LoginComponent = () => {
  const { apiClient } = usePublicApiClient();

  const handleLogin = async (email: string, password: string) => {
    try {
      const { data } = await apiClient.post("/auth/login", {
        email,
        password,
      });
      console.log("Login successful:", data);
    } catch (error) {
      // Error is already handled by the interceptor
      // Shows snackbar notification automatically
    }
  };

  return (
    // Your component JSX
  );
};
```

---

## 🔧 API Methods

The hook returns an `apiClient` object with the same methods as `useApiClient()`. **All data is sent via POST with a request body** (FastAPI pattern).

### POST Request (Primary Method)

All API calls use POST with a request body, even for fetching data:

```typescript
const { apiClient } = usePublicApiClient();

// Fetching public data with POST body
const { data } = await apiClient.post("/api/public/posts/list", {
  page: 1,
  limit: 10,
  category: "news",
});

// Authentication - Login
const { data } = await apiClient.post("/auth/login", {
  email: "user@example.com",
  password: "password123",
});

// Authentication - Register
const { data } = await apiClient.post("/auth/register", {
  email: "user@example.com",
  password: "password123",
  name: "John Doe",
});

// POST with TypeScript
interface LoginRequest {
  email: string;
  password: string;
}

const { data } = await apiClient.post<AuthResponse>("/auth/login", {
  email: "user@example.com",
  password: "password123",
} as LoginRequest);
```

### PUT, PATCH, DELETE

Same as `useApiClient()` - all HTTP methods are supported, but prefer POST with body for data operations.

---

## 🐍 FastAPI Integration

This client is optimized for FastAPI backends. FastAPI automatically parses request bodies from POST requests.

### FastAPI Request Body Pattern

```typescript
// Frontend: Send data in POST body
const { data } = await apiClient.post("/auth/login", {
  email: "user@example.com",
  password: "password123",
});

// FastAPI Backend receives as Pydantic model:
// @app.post("/auth/login")
// async def login(credentials: LoginRequest):
//     # credentials.email, credentials.password are available
//     ...
```

### Type-Safe Request Bodies

Always define TypeScript interfaces that match your FastAPI Pydantic models:

```typescript
// Frontend TypeScript interface
interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  terms_accepted: boolean;
}

// FastAPI Pydantic model (for reference)
// class RegisterRequest(BaseModel):
//     email: str
//     password: str
//     name: str
//     terms_accepted: bool

const { data } = await apiClient.post<AuthResponse>("/auth/register", {
  email: "user@example.com",
  password: "password123",
  name: "John Doe",
  terms_accepted: true,
} as RegisterRequest);
```

---

## 🔄 Differences from useApiClient

| Feature        | useApiClient | usePublicApiClient |
| -------------- | ------------ | ------------------ |
| Token Refresh  | ✅ Automatic | ❌ None            |
| Authentication | ✅ Required  | ❌ Not required    |
| Error Handling | ✅ Yes       | ✅ Yes             |
| Credentials    | ✅ Yes       | ✅ Yes             |

---

## ⚠️ Error Handling

Errors are automatically handled by the interceptor:

- **Shows snackbar notification** - User-friendly error messages
- **Extracts error messages** - From `response.data.detail` (FastAPI default) or `response.data.message`
- **Fallback messages** - Default messages for common HTTP status codes
- **Network errors** - Handles connection issues gracefully

### FastAPI Error Response Format

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

## 💡 Example: Login Flow

```typescript
import usePublicApiClient from "@/hooks/usePublicApiClient";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { apiClient } = usePublicApiClient();

  const login = async (credentials: { email: string; password: string }) => {
    const { data } = await apiClient.post("/auth/login", credentials);
    return data;
  };

  const mutation = useMutation({
    mutationFn: login,
  });

  return {
    login: mutation.mutate,
    loginAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};
```

---

## 💡 Example: Public Data Fetching

```typescript
import { useQuery } from "@tanstack/react-query";
import usePublicApiClient from "@/hooks/usePublicApiClient";
import useErrorHandler from "@/hooks/useErrorHandler";

interface ListPostsRequest {
  page?: number;
  limit?: number;
  category?: string;
}

export const usePublicPosts = (request: ListPostsRequest = {}) => {
  const { apiClient } = usePublicApiClient();
  const { errorHandler } = useErrorHandler();

  const fetchPosts = async () => {
    try {
      // All data sent via POST body (FastAPI pattern)
      const { data } = await apiClient.post("/api/public/posts/list", {
        page: request.page || 1,
        limit: request.limit || 10,
        category: request.category,
      });
      return data;
    } catch (error) {
      errorHandler(error);
    }
  };

  const query = useQuery({
    queryKey: ["public-posts", request],
    queryFn: fetchPosts,
  });

  return {
    posts: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
};
```

---

## 🎯 Best Practices

1. **Always use POST with body** - All data is sent via POST request body (FastAPI pattern)
2. **Never use query parameters** - Send all data in the request body instead
3. **Use for public endpoints** - Login, register, public data
4. **Don't use for protected routes** - Use `useApiClient()` instead
5. **Type your request bodies** - Define TypeScript interfaces that match FastAPI Pydantic models
6. **Type your responses** - Use TypeScript generics for response type safety
7. **Handle errors appropriately** - Errors are shown automatically

---

## 🧠 Summary

| Feature               | Description                   |
| --------------------- | ----------------------------- |
| 🌐 Public endpoints   | For unauthenticated requests  |
| ⚠️ Error handling     | Shows snackbars automatically |
| 🎯 TypeScript support | Full type safety              |
| 🔐 No token refresh   | Won't trigger auth refresh    |
| ⏱️ Timeout            | 30 second default timeout     |

Use `usePublicApiClient()` when you need to make API calls that don't require authentication or shouldn't trigger token refresh logic.
