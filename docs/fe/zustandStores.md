# Zustand Stores Standard

This document defines the standard way to create and use Zustand stores in our codebase.

Zustand is used for client-side state management (UI state, form state, preferences, etc.), while TanStack Query handles server state.

---

## ✅ General Rules

- **Use Zustand for client-side state only** - UI state, form state, preferences, modals, etc.
- **Use TanStack Query for server state** - Data fetched from APIs
- **Keep stores focused and small** - One store per domain/feature
- **Use TypeScript interfaces** for store state and actions
- **Follow a consistent structure** for readability and maintainability
- **Use `create` from Zustand** - The modern API
- **Export typed hooks** for better developer experience

---

## 📂 Structure

Each Zustand store should follow this format:

```typescript
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface YourStoreState {
  // State properties
  property1: string;
  property2: number;
  property3: boolean;
}

interface YourStoreActions {
  // Action methods
  setProperty1: (value: string) => void;
  setProperty2: (value: number) => void;
  toggleProperty3: () => void;
  reset: () => void;
}

interface YourStore extends YourStoreState, YourStoreActions {}

const initialState: YourStoreState = {
  property1: "",
  property2: 0,
  property3: false,
};

export const useYourStore = create<YourStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        // Actions
        setProperty1: (value) => set({ property1: value }),
        setProperty2: (value) => set({ property2: value }),
        toggleProperty3: () =>
          set((state) => ({ property3: !state.property3 })),
        reset: () => set(initialState),
      }),
      {
        name: "your-store-storage", // localStorage key
      },
    ),
    { name: "YourStore" }, // DevTools name
  ),
);
```

### Using the Store

```typescript
// In a component
const { property1, setProperty1, toggleProperty3 } = useYourStore();

// Or select specific properties to avoid unnecessary re-renders
const property1 = useYourStore((state) => state.property1);
const setProperty1 = useYourStore((state) => state.setProperty1);
```

---

## 💡 Example: UI State Store

```typescript
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UIState {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  activeTab: string;
}

interface UIActions {
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
  openModal: () => void;
  closeModal: () => void;
  setActiveTab: (tab: string) => void;
  reset: () => void;
}

interface UIStore extends UIState, UIActions {}

const initialState: UIState = {
  isSidebarOpen: false,
  isModalOpen: false,
  activeTab: "dashboard",
};

export const useUIStore = create<UIStore>()(
  devtools(
    (set) => ({
      ...initialState,
      toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      openSidebar: () => set({ isSidebarOpen: true }),
      closeSidebar: () => set({ isSidebarOpen: false }),
      openModal: () => set({ isModalOpen: true }),
      closeModal: () => set({ isModalOpen: false }),
      setActiveTab: (tab) => set({ activeTab: tab }),
      reset: () => set(initialState),
    }),
    { name: "UIStore" },
  ),
);
```

### Usage

```typescript
// In a component
const { isSidebarOpen, toggleSidebar, setActiveTab } = useUIStore();

// Or with selectors for performance
const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
const toggleSidebar = useUIStore((state) => state.toggleSidebar);
```

---

## 💡 Example: Form State Store (with Persist)

```typescript
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface FormData {
  name: string;
  email: string;
  preferences: {
    theme: "light" | "dark" | "system";
    notifications: boolean;
  };
}

interface FormActions {
  updateName: (name: string) => void;
  updateEmail: (email: string) => void;
  updateTheme: (theme: "light" | "dark" | "system") => void;
  toggleNotifications: () => void;
  reset: () => void;
}

interface FormStore extends FormData, FormActions {}

const initialState: FormData = {
  name: "",
  email: "",
  preferences: {
    theme: "system",
    notifications: true,
  },
};

export const useFormStore = create<FormStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        updateName: (name) => set({ name }),
        updateEmail: (email) => set({ email }),
        updateTheme: (theme) =>
          set((state) => ({
            preferences: { ...state.preferences, theme },
          })),
        toggleNotifications: () =>
          set((state) => ({
            preferences: {
              ...state.preferences,
              notifications: !state.preferences.notifications,
            },
          })),
        reset: () => set(initialState),
      }),
      {
        name: "form-storage", // localStorage key
      },
    ),
    { name: "FormStore" },
  ),
);
```

---

## 💡 Example: Cart Store (Complex State)

```typescript
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

interface CartActions {
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

interface CartStore extends CartState, CartActions {}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        addItem: (item) =>
          set((state) => {
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
              return {
                items: state.items.map((i) =>
                  i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
                ),
              };
            }
            return {
              items: [...state.items, { ...item, quantity: 1 }],
            };
          }),
        removeItem: (id) =>
          set((state) => ({
            items: state.items.filter((item) => item.id !== id),
          })),
        updateQuantity: (id, quantity) =>
          set((state) => ({
            items: state.items.map((item) =>
              item.id === id ? { ...item, quantity } : item,
            ),
          })),
        clearCart: () => set({ items: [] }),
        openCart: () => set({ isOpen: true }),
        closeCart: () => set({ isOpen: false }),
        getTotal: () => {
          const { items } = get();
          return items.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
          );
        },
        getItemCount: () => {
          const { items } = get();
          return items.reduce((count, item) => count + item.quantity, 0);
        },
      }),
      {
        name: "cart-storage",
      },
    ),
    { name: "CartStore" },
  ),
);
```

### Usage with Computed Values

```typescript
// In a component
const { items, getTotal, getItemCount } = useCartStore();
const total = getTotal();
const itemCount = getItemCount();

// Or create a selector for computed values
const total = useCartStore((state) => {
  return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
});
```

---

## 🎯 Middleware Usage

### DevTools (Development Only)

Always wrap stores with `devtools` for Redux DevTools integration:

```typescript
devtools(
  (set) => ({
    /* store */
  }),
  { name: "StoreName" },
);
```

### Persist (Optional)

Use `persist` middleware when you want to save state to localStorage:

```typescript
persist(
  (set) => ({
    /* store */
  }),
  {
    name: "storage-key", // localStorage key
    // Optional: only persist specific fields
    partialize: (state) => ({ property1: state.property1 }),
  },
);
```

### Combining Middleware

```typescript
devtools(
  persist(
    (set) => ({
      /* store */
    }),
    { name: "storage-key" },
  ),
  { name: "StoreName" },
);
```

---

## ⚙️ Best Practices

1. **Separate State and Actions** - Use TypeScript interfaces to clearly define state and actions
2. **Use Initial State** - Define `initialState` for easy resets
3. **Selective Subscriptions** - Use selectors to prevent unnecessary re-renders
4. **Immutable Updates** - Always return new objects/arrays, never mutate state directly
5. **Computed Values** - Use getters or selectors for derived state
6. **Store Location** - Place stores in `src/stores/` directory
7. **Naming Convention** - Use `use` prefix for store hooks (e.g., `useCartStore`)

---

## 🧠 Summary

| Rule                       | Description                                    |
| -------------------------- | ---------------------------------------------- |
| ✅ Client state only       | Use for UI state, not server data              |
| 🎯 Focused stores          | One store per domain/feature                   |
| 📝 TypeScript              | Always define interfaces for state and actions |
| 🔧 DevTools                | Always wrap with `devtools` middleware         |
| 💾 Persist when needed     | Use `persist` for localStorage persistence     |
| 🎨 Consistent structure    | Follow the pattern above                       |
| 🔍 Selective subscriptions | Use selectors to optimize re-renders           |

---

## 📁 Store Organization

Organize stores in a `src/stores/` directory:

```
src/
└── stores/
    ├── ui-store.ts
    ├── cart-store.ts
    ├── form-store.ts
```

### Example `index.ts`

```typescript
export { useUIStore } from "./ui-store";
export { useCartStore } from "./cart-store";
export { useFormStore } from "./form-store";
```

---

## 🧾 Typing Best Practices

Always define clear interfaces:

```typescript
// State interface
interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

// Actions interface
interface CartActions {
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

// Combined store interface
interface CartStore extends CartState, CartActions {}
```

This provides excellent autocompletion and type safety throughout your application.
