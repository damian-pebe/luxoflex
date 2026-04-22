# useErrorHandler Hook

This hook provides a standardized way to handle errors throughout the application. It automatically displays user-friendly error messages via snackbar notifications.

---

## ✅ When to Use

- **In useQuery hooks** - Handle errors from data fetching
- **In useMutation hooks** - Handle errors from mutations
- **In try-catch blocks** - Any async operation that might fail
- **Consistent error UX** - Ensures all errors are displayed consistently

---

## 📂 Usage

```typescript
import useErrorHandler from "@/hooks/useErrorHandler";

const MyComponent = () => {
  const { errorHandler } = useErrorHandler();

  const fetchData = async () => {
    try {
      // Your API call
      const response = await apiClient.get("/api/data");
    } catch (error) {
      errorHandler(error); // Shows error snackbar automatically
    }
  };

  return (
    // Your component JSX
  );
};
```

---

## 🔧 How It Works

The hook automatically:

1. **Detects error type** - Handles Axios errors, Error objects, and unknown errors
2. **Extracts message** - Gets the most relevant error message
3. **Shows snackbar** - Displays a beautiful error notification
4. **Logs error** - Ready for integration with error tracking services (e.g., Sentry)

---

## 💡 Error Type Handling

### Axios Errors

```typescript
// Extracts from error.response.data.message or error.message
errorHandler(axiosError);
```

### Generic Error Objects

```typescript
// Extracts from error.message
errorHandler(new Error("Something went wrong"));
```

### Unknown Errors

```typescript
// Falls back to "Something went wrong"
errorHandler(unknownError);
```

---

## 💡 Example: In useQuery Hook

```typescript
import { useQuery } from "@tanstack/react-query";
import useApiClient from "@/hooks/useApiClient";
import useErrorHandler from "@/hooks/useErrorHandler";

export const useUsers = () => {
  const { apiClient } = useApiClient();
  const { errorHandler } = useErrorHandler();

  const fetchUsers = async () => {
    try {
      const { data } = await apiClient.get("/api/users");
      return data;
    } catch (error) {
      errorHandler(error); // Shows error snackbar
    }
  };

  const query = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return {
    users: query.data,
    isLoading: query.isLoading,
    error: query.error,
  };
};
```

---

## 💡 Example: In useMutation Hook

```typescript
import { useMutation } from "@tanstack/react-query";
import useApiClient from "@/hooks/useApiClient";
import useErrorHandler from "@/hooks/useErrorHandler";

export const useCreateUser = () => {
  const { apiClient } = useApiClient();
  const { errorHandler } = useErrorHandler();

  const createUser = async (payload: CreateUserPayload) => {
    try {
      const { data } = await apiClient.post("/api/users", payload);
      return data;
    } catch (error) {
      errorHandler(error); // Shows error snackbar
      throw error; // Re-throw for React Query to track error state
    }
  };

  const mutation = useMutation({
    mutationFn: createUser,
  });

  return {
    createUser: mutation.mutate,
    isPending: mutation.isPending,
    error: mutation.error,
  };
};
```

---

## 💡 Example: Manual Error Handling

```typescript
import useErrorHandler from "@/hooks/useErrorHandler";

const MyComponent = () => {
  const { errorHandler } = useErrorHandler();

  const handleAction = async () => {
    try {
      await someAsyncOperation();
    } catch (error) {
      errorHandler(error);
      // Additional error handling if needed
      console.error("Operation failed:", error);
    }
  };

  return <button onClick={handleAction}>Action</button>;
};
```

---

## 🎯 Best Practices

1. **Always use in hooks** - Use `useErrorHandler()` in custom hooks and components
2. **Don't duplicate error handling** - The hook handles display, you handle logic
3. **Re-throw in mutations** - Re-throw errors so React Query can track error state
4. **Consistent UX** - All errors will be displayed consistently

---

## 🔍 Error Message Priority

The hook extracts error messages in this order:

1. `error.response.data.message` (Axios response)
2. `error.message` (Error object)
3. `"Something went wrong"` (Fallback)

---

## 🧠 Summary

| Feature                 | Description                              |
| ----------------------- | ---------------------------------------- |
| ✅ Automatic display    | Shows error snackbars automatically      |
| 🎯 Multiple error types | Handles Axios, Error, and unknown errors |
| 📝 Message extraction   | Intelligently extracts error messages    |
| 🔍 Error logging        | Ready for error tracking integration     |
| 🎨 Consistent UX        | All errors displayed consistently        |

---

## ⚙️ Integration with Error Tracking

The hook is ready for integration with error tracking services:

```typescript
// In useErrorHandler.tsx (future enhancement)
const errorHandler = (error: unknown) => {
  // ... existing code ...
  // Log to error tracking service
  // Sentry.captureException(error);
  // LogRocket.captureException(error);
};
```

This ensures all errors are tracked for debugging and monitoring.
