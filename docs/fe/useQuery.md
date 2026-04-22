# useQuery Standard

This document defines the standard way to use `useQuery` from TanStack React Query in our codebase.

It ensures consistency, built-in error handling, and global cache/stale-time behavior.

---

## ✅ General Rules

- **Always import directly from `@tanstack/react-query`**
- **Never use a custom Axios instance** - Always use our built-in `useApiClient()` hook
- **Always handle errors with `useErrorHandler()`** - it triggers global snackbars
- **Always use POST with body** - All data is sent via POST request body (FastAPI pattern)
- **Never use query parameters** - Send all data in the request body instead
- **Default configuration (no staleTime, cacheTime, etc.) is preferred** - Only set them when required by special cases
- **Follow a consistent structure** for readability and maintainability

---

## 📂 Structure

Each `useQuery` hook should follow this format:

```typescript
import { useQuery } from "@tanstack/react-query";
import useApiClient from "@/hooks/useApiClient";
import useErrorHandler from "@/hooks/useErrorHandler";

interface YourRequestParams {
  // Define your request body structure
  page?: number;
  limit?: number;
  filters?: Record<string, unknown>;
}

export const useYourQueryName = (params: YourRequestParams = {}) => {
  const { apiClient } = useApiClient();
  const { errorHandler } = useErrorHandler();

  const fetchData = async () => {
    try {
      // All data sent via POST body (FastAPI pattern)
      const { data } = await apiClient.post(`/your/endpoint`, {
        page: params.page || 1,
        limit: params.limit || 10,
        filters: params.filters || {},
      });
      return data;
    } catch (error) {
      errorHandler(error);
    }
  };

  const query = useQuery({
    queryKey: ["your-query-key", params],
    queryFn: fetchData,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
};
```

### Call the hook

```typescript
const { data, isLoading, error, refetch } = useYourQueryName();
```

---

## 💡 Example

```typescript
import { useQuery } from "@tanstack/react-query";
import useApiClient from "@/hooks/useApiClient";
import useErrorHandler from "@/hooks/useErrorHandler";

interface ListInactiveProfessionalsRequest {
  page?: number;
  limit?: number;
  filters?: {
    status?: string;
    search?: string;
  };
}

export const useInactiveProfessionals = (
  request: ListInactiveProfessionalsRequest = {},
) => {
  const { apiClient } = useApiClient();
  const { errorHandler } = useErrorHandler();

  const getInactiveProfessionals = async () => {
    try {
      // All data sent via POST body (FastAPI pattern)
      const { data } = await apiClient.post(`/admin/inactive-professionals`, {
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
    queryKey: ["admin/inactive-professionals", request],
    queryFn: getInactiveProfessionals,
  });

  return {
    inactiveProfessionals: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
};
```

### Call the hook

```typescript
// Without parameters
const { inactiveProfessionals } = useInactiveProfessionals();

// With parameters
const { inactiveProfessionals } = useInactiveProfessionals({
  page: 1,
  limit: 20,
  filters: {
    status: "inactive",
    search: "john",
  },
});
```

---

## ⚙️ Notes

- Use clear and descriptive query keys (e.g., `["users", "inactive"]` instead of `["data"]`)
- When multiple components use the same data, React Query automatically shares and caches results
- Prefer returning a named object rather than the raw query for clarity
- Avoid unnecessary destructuring in the hook itself; keep it predictable

---

## 🧠 Summary

| Rule                | Description                                       |
| ------------------- | ------------------------------------------------- |
| ✅ Direct import    | Always use `@tanstack/react-query`                |
| 🚫 No custom Axios  | Use `useApiClient()`                              |
| ⚠️ Handle errors    | Use `useErrorHandler()`                           |
| 📮 POST with body   | Always use POST with request body (FastAPI)       |
| 🚫 No query params  | Never use query parameters, send data in body     |
| ⏳ Default behavior | Avoid setting staleTime unless needed             |
| 🧩 Consistency      | Follow the structure above for all useQuery hooks |

Following this standard keeps our data fetching predictable, globally consistent, and automatically integrated with our UI error handling.

---

## 🧾 Typing Your Queries

Always define TypeScript interfaces for both the data model and the query return type.

This improves readability, autocompletion, and helps maintain type safety across the app.

### Example

```typescript
export interface ProfessionalReview {
  id: number;
  photos: string[];
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  email: string;
  phone: string;
  address: AddressProfessional;
  professionalData: ProfessionalData;
  professions: string[];
}

export interface ProfessionalReviewQuery {
  inactiveProfessionals: ProfessionalReview[] | undefined;
  isLoading: boolean;
  error: unknown;
  refetch: () => void;
}
```

By returning typed values (like `ProfessionalReviewQuery`), you make the hook more self-explanatory and reduce the need to inspect the implementation every time it's used.
