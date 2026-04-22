# useMutation Standard

This document defines the standard way to use `useMutation` from TanStack React Query in our codebase.

Mutations are used for creating, updating, or deleting data. They automatically invalidate related queries to keep the UI in sync.

---

## ✅ General Rules

- **Always import directly from `@tanstack/react-query`**
- **Never use a custom Axios instance** - Always use our built-in `useApiClient()` hook
- **Always handle errors with `useErrorHandler()`** - it triggers global snackbars
- **Always invalidate related queries** after successful mutations
- **Use `useQueryClient()` to access the query client** for invalidation
- **Follow a consistent structure** for readability and maintainability
- **Return mutation object and helper functions** for easy component usage

---

## 📂 Structure

Each `useMutation` hook should follow this format:

```typescript
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useApiClient from "@/hooks/useApiClient";
import useErrorHandler from "@/hooks/useErrorHandler";

export const useYourMutationName = () => {
  const { apiClient } = useApiClient();
  const { errorHandler } = useErrorHandler();
  const queryClient = useQueryClient();

  const mutationFn = async (payload: YourPayloadType) => {
    try {
      const { data } = await apiClient.post(`/your/endpoint`, payload);
      return data;
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  };

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: ["related-query-key"] });
    },
  });

  return {
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    data: mutation.data,
    reset: mutation.reset,
  };
};
```

### Call the hook

```typescript
const { mutate, isPending, isSuccess } = useYourMutationName();

// In your component
const handleSubmit = () => {
  mutate({
    /* your payload */
  });
};
```

---

## 💡 Example: Creating a Resource

```typescript
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useApiClient from "@/hooks/useApiClient";
import useErrorHandler from "@/hooks/useErrorHandler";

interface CreateUserPayload {
  email: string;
  name: string;
  role: string;
}

interface User {
  id: number;
  email: string;
  name: string;
  role: string;
}

export const useCreateUser = () => {
  const { apiClient } = useApiClient();
  const { errorHandler } = useErrorHandler();
  const queryClient = useQueryClient();

  const createUser = async (payload: CreateUserPayload): Promise<User> => {
    try {
      const { data } = await apiClient.post<User>("/users", payload);
      return data;
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  };

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate users list to refetch
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return {
    createUser: mutation.mutate,
    createUserAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    user: mutation.data,
    reset: mutation.reset,
  };
};
```

### Usage in Component

```typescript
const { createUser, isPending, isSuccess } = useCreateUser();

const handleSubmit = (formData: CreateUserPayload) => {
  createUser(formData);
};

// Or with async/await
const handleSubmitAsync = async (formData: CreateUserPayload) => {
  try {
    const newUser = await createUserAsync(formData);
    console.log("User created:", newUser);
  } catch (error) {
    // Error already handled by useErrorHandler
  }
};
```

---

## 💡 Example: Updating a Resource

```typescript
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useApiClient from "@/hooks/useApiClient";
import useErrorHandler from "@/hooks/useErrorHandler";

interface UpdateUserPayload {
  id: number;
  email?: string;
  name?: string;
  role?: string;
}

export const useUpdateUser = () => {
  const { apiClient } = useApiClient();
  const { errorHandler } = useErrorHandler();
  const queryClient = useQueryClient();

  const updateUser = async (payload: UpdateUserPayload) => {
    try {
      const { data } = await apiClient.put(`/users/${payload.id}`, payload);
      return data;
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  };

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (_, variables) => {
      // Invalidate both the list and the specific user
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user", variables.id] });
    },
  });

  return {
    updateUser: mutation.mutate,
    updateUserAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};
```

---

## 💡 Example: Deleting a Resource

```typescript
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useApiClient from "@/hooks/useApiClient";
import useErrorHandler from "@/hooks/useErrorHandler";

export const useDeleteUser = () => {
  const { apiClient } = useApiClient();
  const { errorHandler } = useErrorHandler();
  const queryClient = useQueryClient();

  const deleteUser = async (userId: number) => {
    try {
      await apiClient.delete(`/users/${userId}`);
      return userId;
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  };

  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: (deletedUserId) => {
      // Invalidate the list and remove the specific user from cache
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.removeQueries({ queryKey: ["user", deletedUserId] });
    },
  });

  return {
    deleteUser: mutation.mutate,
    deleteUserAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};
```

---

## 🔄 Query Invalidation Patterns

### Invalidate All Queries with a Prefix

```typescript
onSuccess: () => {
  queryClient.invalidateQueries({ queryKey: ["users"] });
  // This invalidates: ["users"], ["users", "active"], ["users", "inactive"], etc.
};
```

### Invalidate Specific Query

```typescript
onSuccess: (_, variables) => {
  queryClient.invalidateQueries({ queryKey: ["user", variables.id] });
};
```

### Invalidate Multiple Query Keys

```typescript
onSuccess: () => {
  queryClient.invalidateQueries({ queryKey: ["users"] });
  queryClient.invalidateQueries({ queryKey: ["dashboard", "stats"] });
};
```

### Remove Query from Cache (for deletions)

```typescript
onSuccess: (deletedId) => {
  queryClient.removeQueries({ queryKey: ["user", deletedId] });
};
```

---

## ⚙️ Notes

- **Always throw errors** in the mutation function so React Query can track error state
- **Use `mutate` for fire-and-forget** operations
- **Use `mutateAsync`** when you need to await the result or chain operations
- **Invalidate queries in `onSuccess`** to automatically refetch related data
- **Use descriptive mutation function names** that match the action (e.g., `createUser`, `updateUser`, `deleteUser`)
- **Return named properties** from the hook for better developer experience

---

## 🧠 Summary

| Rule                  | Description                                             |
| --------------------- | ------------------------------------------------------- |
| ✅ Direct import      | Always use `@tanstack/react-query`                      |
| 🚫 No custom Axios    | Use `useApiClient()`                                    |
| ⚠️ Handle errors      | Use `useErrorHandler()`                                 |
| 🔄 Invalidate queries | Always invalidate related queries in `onSuccess`        |
| 🎯 Type safety        | Define TypeScript interfaces for payloads and responses |
| 🧩 Consistency        | Follow the structure above for all useMutation hooks    |

Following this standard ensures mutations are predictable, automatically keep the UI in sync, and provide a consistent developer experience.

---

## 🧾 Typing Your Mutations

Always define TypeScript interfaces for payloads and return types:

```typescript
interface CreateUserPayload {
  email: string;
  name: string;
  role: string;
}

interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  createdAt: string;
}

export const useCreateUser = () => {
  // ... implementation
  const createUser = async (payload: CreateUserPayload): Promise<User> => {
    // ...
  };
  // ...
};
```

This provides better autocompletion, type safety, and makes the hook's contract clear to consumers.
