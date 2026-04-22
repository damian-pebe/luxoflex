# useCustomSnackbar Hook

This hook provides a customized snackbar notification system built on top of Notistack. It displays beautiful, gradient-styled notifications with consistent styling.

---

## ✅ When to Use

- **Success messages** - Show success notifications
- **Error messages** - Show error notifications (usually via `useErrorHandler`)
- **Info messages** - Show informational notifications
- **Warning messages** - Show warning notifications

---

## 📂 Usage

```typescript
import useCustomSnackbar from "@/hooks/useCustomSnackbar";

const MyComponent = () => {
  const { enqueueSnackbar } = useCustomSnackbar();

  const handleSuccess = () => {
    enqueueSnackbar({
      message: "Operation completed successfully!",
      variant: "success",
    });
  };

  const handleError = () => {
    enqueueSnackbar({
      message: "Something went wrong",
      variant: "error",
    });
  };

  return (
    // Your component JSX
  );
};
```

---

## 🔧 API

### enqueueSnackbar

```typescript
enqueueSnackbar({
  message: string;
  variant?: "default" | "success" | "error" | "warning" | "info";
})
```

### Parameters

- **message** (required) - The message to display
- **variant** (optional) - The notification type, defaults to `"default"`

### Return Value

Returns a snackbar key that can be used to close the notification programmatically.

---

## 💡 Variants

### Success

```typescript
enqueueSnackbar({
  message: "User created successfully!",
  variant: "success",
});
```

### Error

```typescript
enqueueSnackbar({
  message: "Failed to create user",
  variant: "error",
});
```

### Warning

```typescript
enqueueSnackbar({
  message: "Please check your input",
  variant: "warning",
});
```

### Info

```typescript
enqueueSnackbar({
  message: "Processing your request...",
  variant: "info",
});
```

### Default

```typescript
enqueueSnackbar({
  message: "Default notification",
  variant: "default", // or omit variant
});
```

---

## 💡 Example: After Successful Mutation

```typescript
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useApiClient from "@/hooks/useApiClient";
import useCustomSnackbar from "@/hooks/useCustomSnackbar";

export const useCreateUser = () => {
  const { apiClient } = useApiClient();
  const { enqueueSnackbar } = useCustomSnackbar();
  const queryClient = useQueryClient();

  const createUser = async (payload: CreateUserPayload) => {
    const { data } = await apiClient.post("/api/users", payload);
    return data;
  };

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      enqueueSnackbar({
        message: "User created successfully!",
        variant: "success",
      });
    },
  });

  return {
    createUser: mutation.mutate,
    isPending: mutation.isPending,
  };
};
```

---

## 💡 Example: Manual Notifications

```typescript
import useCustomSnackbar from "@/hooks/useCustomSnackbar";

const MyComponent = () => {
  const { enqueueSnackbar } = useCustomSnackbar();

  const handleSave = async () => {
    try {
      await saveData();
      enqueueSnackbar({
        message: "Data saved successfully!",
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar({
        message: "Failed to save data",
        variant: "error",
      });
    }
  };

  return <button onClick={handleSave}>Save</button>;
};
```

---

## 🎯 Best Practices

1. **Use useErrorHandler for errors** - Prefer `useErrorHandler()` for automatic error notifications
2. **Show success messages** - Use this hook to show success notifications after mutations
3. **Keep messages concise** - Short, clear messages work best
4. **Use appropriate variants** - Match the variant to the message type

---

## ⚙️ Configuration

The snackbar is configured globally in `main.tsx`:

- **Max snacks**: 3 notifications at a time
- **Position**: Bottom right
- **Auto-hide**: 5 seconds
- **Custom styling**: Gradient backgrounds per variant

---

## 🧠 Summary

| Feature              | Description                            |
| -------------------- | -------------------------------------- |
| ✅ Custom styling    | Beautiful gradient notifications       |
| 🎨 Multiple variants | Success, error, warning, info, default |
| ⏱️ Auto-hide         | 5 second default duration              |
| 📍 Position          | Bottom right corner                    |
| 🎯 Type-safe         | TypeScript support for variants        |

---

## 🔍 Note

This hook is typically used indirectly through `useErrorHandler()` for errors. Use it directly for success messages and other custom notifications.
