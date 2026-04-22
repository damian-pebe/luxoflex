# Folder Structure

This document explains the standard folder structure we follow in our codebase. This structure ensures consistency, maintainability, and clear separation of concerns.

---

## 📁 Overview

```
src/
├── hooks/           # Global hooks used across the entire app
├── stores/          # Global Zustand stores used across the entire app
├── components/      # Global reusable components (shadcn, etc.)
├── features/        # Shared features used across multiple pages
├── types/           # Global TypeScript types and interfaces
│   └── index.ts     # Central export for all global types
├── utils/           # Helper functions and utilities
└── pages/           # Feature-specific pages and their implementations
    └── feature-name/
        ├── components/  # Feature-specific components
        ├── hooks/       # Feature-specific hooks
        ├── types/       # Feature-specific types
        ├── utils/       # Feature-specific utilities
        └── ...
```

---

## 📂 Directory Details

### `src/hooks/`

**Purpose**: Global hooks used across the entire application.

**Contains**:

- API client hooks (`useApiClient`, `usePublicApiClient`)
- Error handling hooks (`useErrorHandler`)
- UI utility hooks (`useMobile`, `useCustomSnackbar`)
- Any hook that is used in multiple features/pages

**Rules**:

- ✅ Only hooks that are used globally
- ✅ Should be reusable across different features
- ❌ Don't put feature-specific hooks here

**Example**:

```
src/hooks/
├── useApiClient.ts
├── usePublicApiClient.ts
├── useErrorHandler.tsx
├── useCustomSnackbar.ts
└── useMobile.ts
```

---

### `src/stores/`

**Purpose**: Global Zustand stores used across the entire application.

**Contains**:

- UI state stores (sidebar, modals, theme preferences)
- Global user preferences
- Application-wide state that multiple features need

**Rules**:

- ✅ Only stores that are used globally
- ✅ Should be accessible from any feature/page
- ❌ Don't put feature-specific state here

**Example**:

```
src/stores/
├── ui-store.ts
├── user-preferences-store.ts
└── index.ts  # Re-export all stores
```

**Usage**:

```typescript
// src/stores/ui-store.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useUIStore = create<UIStore>()(
  devtools((set) => ({
    isSidebarOpen: false,
    toggleSidebar: () =>
      set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  })),
);
```

---

### `src/components/`

**Purpose**: Global reusable components used across the entire application.

**Contains**:

- UI component library (shadcn components)
- Global layout components
- Shared UI primitives
- Components used in multiple features

**Rules**:

- ✅ Only components that are reusable globally
- ✅ Should be generic and configurable
- ❌ Don't put feature-specific components here

**Example**:

```
src/components/
├── ui/              # shadcn components
│   ├── button.tsx
│   ├── dropdown-menu.tsx
│   └── ...
├── global/          # Global app components
│   ├── GlobalLoader.tsx
│   ├── PageTransitionWrapper.tsx
│   └── ToggleTheme.tsx
└── layout/          # Layout components
    └── ...
```

---

### `src/features/`

**Purpose**: Shared features that are used across multiple pages/features.

**Contains**:

- Reusable feature modules
- Shared business logic
- Components that are part of a feature but used in multiple places

**Rules**:

- ✅ Features that are shared across multiple pages
- ✅ Should be self-contained with its own components, hooks, types
- ❌ Don't put page-specific features here

**Example**:

```
src/features/
├── authentication/
│   ├── components/
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   ├── hooks/
│   │   └── useAuth.ts
│   ├── types/
│   │   └── index.ts
│   └── index.ts
├── notifications/
│   ├── components/
│   │   └── NotificationCenter.tsx
│   └── hooks/
│       └── useNotifications.ts
└── search/
    ├── components/
    │   └── SearchBar.tsx
    └── hooks/
        └── useSearch.ts
```

**Usage**:

```typescript
// Import from features
import { LoginForm } from "@/features/authentication";
import { SearchBar } from "@/features/search";
```

---

### `src/types/`

**Purpose**: Global TypeScript types and interfaces used across the entire application.

**Contains**:

- Global type definitions
- Shared interfaces
- Common type utilities

**Rules**:

- ✅ Only types used in multiple features/pages
- ✅ Export everything from `index.ts`
- ❌ Don't put feature-specific types here

**Example**:

```
src/types/
└── index.ts
```

**Content**:

```typescript
// src/types/index.ts

// User types
export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "user";
}

// API response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

// Common utility types
export type Status = "idle" | "loading" | "success" | "error";
```

**Usage**:

```typescript
import type { User, ApiResponse, Status } from "@/types";
```

---

### `src/utils/`

**Purpose**: Helper functions and utilities used across the entire application.

**Contains**:

- Utility functions
- Helper methods
- Common calculations
- Formatting functions

**Rules**:

- ✅ Only utilities used in multiple features/pages
- ✅ Should be pure functions when possible
- ❌ Don't put feature-specific utilities here

**Example**:

```
src/utils/
├── format.ts        # Date, currency formatting
├── validation.ts    # Validation helpers
├── api.ts           # API utilities
└── index.ts         # Re-export all utilities
```

**Content**:

```typescript
// src/utils/format.ts
export const formatDate = (date: Date): string => {
  // ...
};

export const formatCurrency = (amount: number): string => {
  // ...
};

// src/utils/index.ts
export * from "./format";
export * from "./validation";
export * from "./api";
```

**Usage**:

```typescript
import { formatDate, formatCurrency } from "@/utils";
```

---

### `src/pages/`

**Purpose**: Feature-specific pages and their complete implementations.

**Contains**:

- Page components
- Feature-specific components
- Feature-specific hooks
- Feature-specific types
- Feature-specific utilities
- Everything needed for that specific feature/page

**Rules**:

- ✅ Each feature/page has its own folder
- ✅ Can contain its own `components/`, `hooks/`, `types/`, `utils/` subfolders
- ✅ Should be self-contained
- ✅ Can import from global folders (`@/hooks`, `@/components`, etc.)

**Example**:

```
src/pages/
├── dashboard/
│   ├── components/
│   │   ├── DashboardStats.tsx
│   │   ├── RecentActivity.tsx
│   │   └── QuickActions.tsx
│   ├── hooks/
│   │   ├── useDashboardData.ts
│   │   └── useDashboardStats.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── calculateStats.ts
│   └── Dashboard.tsx
├── users/
│   ├── components/
│   │   ├── UserList.tsx
│   │   ├── UserCard.tsx
│   │   └── UserFilters.tsx
│   ├── hooks/
│   │   ├── useUsers.ts
│   │   └── useUserActions.ts
│   ├── types/
│   │   └── index.ts
│   └── Users.tsx
└── landing/
    ├── components/
    │   ├── Hero.tsx
    │   ├── Features.tsx
    │   └── CTA.tsx
    └── Landing.tsx
```

**Page Structure Example**:

```
src/pages/dashboard/
├── components/          # Dashboard-specific components
│   ├── DashboardStats.tsx
│   └── RecentActivity.tsx
├── hooks/               # Dashboard-specific hooks
│   ├── useDashboardData.ts
│   └── useDashboardStats.ts
├── types/               # Dashboard-specific types
│   └── index.ts
├── utils/               # Dashboard-specific utilities
│   └── calculateStats.ts
└── Dashboard.tsx        # Main page component
```

---

## 🔄 Import Patterns

### Global Imports

```typescript
// From global hooks
import useApiClient from "@/hooks/useApiClient";
import useErrorHandler from "@/hooks/useErrorHandler";

// From global stores
import { useUIStore } from "@/stores";

// From global components
import { Button } from "@/components/ui/button";
import { GlobalLoader } from "@/components/global/GlobalLoader";

// From global types
import type { User, ApiResponse } from "@/types";

// From global utils
import { formatDate, formatCurrency } from "@/utils";

// From shared features
import { LoginForm } from "@/features/authentication";
```

### Feature/Page Imports

```typescript
// Within a page/feature, import from relative paths
// src/pages/dashboard/Dashboard.tsx
import { DashboardStats } from "./components/DashboardStats";
import { useDashboardData } from "./hooks/useDashboardData";
import type { DashboardData } from "./types";
import { calculateStats } from "./utils/calculateStats";

// Or use absolute paths with @/pages
import { DashboardStats } from "@/pages/dashboard/components/DashboardStats";
```

---

## 📋 Best Practices

### 1. When to Use Global vs Feature-Specific

**Use Global (`src/hooks/`, `src/components/`, etc.)**:

- Used in 3+ different features/pages
- Generic and reusable
- Part of the core application infrastructure

**Use Feature-Specific (`src/pages/feature-name/`)**:

- Only used within that specific feature/page
- Contains business logic specific to that feature
- Part of the feature's implementation

### 2. Naming Conventions

- **Folders**: Use kebab-case (`user-profile`, `dashboard-stats`)
- **Files**: Use PascalCase for components (`UserCard.tsx`), camelCase for utilities (`formatDate.ts`)
- **Types**: Use PascalCase (`User`, `ApiResponse`)

### 3. File Organization

- **One component per file** - Each component should have its own file
- **Index files** - Use `index.ts` to re-export for cleaner imports
- **Co-location** - Keep related files close together

### 4. Type Organization

```typescript
// src/pages/users/types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserListRequest {
  page: number;
  limit: number;
  filters?: {
    status?: string;
    search?: string;
  };
}

// If this type is used globally, move it to src/types/index.ts
```

### 5. Component Organization

```typescript
// src/pages/users/components/UserCard.tsx
import type { User } from "../types";

interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
}

export function UserCard({ user, onEdit }: UserCardProps) {
  // Component implementation
}
```

---

## 🎯 Quick Reference

| Location                        | Purpose                | When to Use                       |
| ------------------------------- | ---------------------- | --------------------------------- |
| `src/hooks/`                    | Global hooks           | Used in 3+ features               |
| `src/stores/`                   | Global stores          | Application-wide state            |
| `src/components/`               | Global components      | Reusable UI components            |
| `src/features/`                 | Shared features        | Features used in multiple pages   |
| `src/types/`                    | Global types           | Types used across the app         |
| `src/utils/`                    | Global utilities       | Helper functions used everywhere  |
| `src/pages/feature/`            | Feature implementation | Everything for a specific feature |
| `src/pages/feature/components/` | Feature components     | Components only for this feature  |
| `src/pages/feature/hooks/`      | Feature hooks          | Hooks only for this feature       |
| `src/pages/feature/types/`      | Feature types          | Types only for this feature       |
| `src/pages/feature/utils/`      | Feature utilities      | Utilities only for this feature   |

---

## 📝 Example: Complete Feature Structure

```
src/pages/users/
├── components/
│   ├── UserList.tsx           # User list component
│   ├── UserCard.tsx           # Individual user card
│   ├── UserFilters.tsx        # Filter component
│   ├── UserForm.tsx           # Create/edit form
│   └── index.ts               # Re-export components
├── hooks/
│   ├── useUsers.ts            # Fetch users hook
│   ├── useUserActions.ts      # User actions hook
│   ├── useUserFilters.ts      # Filter logic hook
│   └── index.ts               # Re-export hooks
├── types/
│   └── index.ts               # User-related types
├── utils/
│   ├── formatUserData.ts      # User data formatting
│   └── validateUser.ts        # User validation
└── Users.tsx                  # Main page component
```

**Users.tsx**:

```typescript
// src/pages/users/Users.tsx
import { useUsers } from "./hooks/useUsers";
import { UserList, UserFilters } from "./components";
import type { UserListRequest } from "./types";

export default function Users() {
  const { users, isLoading } = useUsers({ page: 1, limit: 10 });

  return (
    <div>
      <UserFilters />
      <UserList users={users} isLoading={isLoading} />
    </div>
  );
}
```

---

## 🧠 Summary

This folder structure provides:

- ✅ **Clear separation** between global and feature-specific code
- ✅ **Scalability** - Easy to add new features without cluttering
- ✅ **Maintainability** - Related code is grouped together
- ✅ **Reusability** - Global code is easily accessible
- ✅ **Consistency** - Same structure across all features

Following this structure ensures your codebase remains organized and maintainable as it grows.
