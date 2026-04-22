# useMobile Hook

This hook detects if the current viewport is mobile-sized. It uses a media query listener to reactively update when the window is resized.

---

## ✅ When to Use

- **Responsive design** - Conditionally render mobile/desktop components
- **Layout adjustments** - Change layouts based on screen size
- **Feature toggling** - Show/hide features on mobile
- **Navigation** - Switch between mobile and desktop navigation

---

## 📂 Usage

```typescript
import { useIsMobile } from "@/hooks/useMobile";

const MyComponent = () => {
  const isMobile = useIsMobile();

  return <div>{isMobile ? <MobileNavigation /> : <DesktopNavigation />}</div>;
};
```

---

## 🔧 API

### useIsMobile

```typescript
const isMobile: boolean = useIsMobile();
```

### Return Value

- **boolean** - `true` if viewport width is less than 768px, `false` otherwise

---

## 💡 Example: Conditional Rendering

```typescript
import { useIsMobile } from "@/hooks/useMobile";

const Dashboard = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      {isMobile ? <MobileDashboardLayout /> : <DesktopDashboardLayout />}
    </div>
  );
};
```

---

## 💡 Example: Responsive Styles

```typescript
import { useIsMobile } from "@/hooks/useMobile";

const Card = () => {
  const isMobile = useIsMobile();

  return (
    <div className={cn("p-4 rounded-lg", isMobile ? "w-full" : "w-1/2")}>
      Card content
    </div>
  );
};
```

---

## 💡 Example: Feature Toggling

```typescript
import { useIsMobile } from "@/hooks/useMobile";

const Sidebar = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileDrawer />;
  }

  return <DesktopSidebar />;
};
```

---

## ⚙️ Configuration

The breakpoint is set to **768px** (standard tablet/mobile breakpoint).

To change the breakpoint, modify the `MOBILE_BREAKPOINT` constant in the hook:

```typescript
const MOBILE_BREAKPOINT = 768; // Change this value
```

---

## 🎯 Best Practices

1. **Use for layout decisions** - Perfect for switching between mobile/desktop layouts
2. **Combine with Tailwind** - Use with Tailwind's responsive classes for best results
3. **Avoid overuse** - Prefer CSS media queries when possible
4. **Test both states** - Always test your component in both mobile and desktop views

---

## 🔍 How It Works

1. **Initial check** - Checks viewport width on mount
2. **Media query listener** - Listens for window resize events
3. **Reactive updates** - Updates state when crossing the breakpoint
4. **Cleanup** - Removes event listener on unmount

---

## 🧠 Summary

| Feature        | Description                        |
| -------------- | ---------------------------------- |
| ✅ Reactive    | Updates on window resize           |
| 📱 Breakpoint  | 768px (standard mobile breakpoint) |
| 🎯 Simple API  | Returns boolean                    |
| ⚡ Performance | Uses media query listener          |
| 🧹 Cleanup     | Automatically removes listeners    |

---

## 💡 Alternative: CSS Media Queries

For styling, prefer Tailwind's responsive classes:

```typescript
// Instead of:
const isMobile = useIsMobile();
<div className={isMobile ? "w-full" : "w-1/2"} />

// Prefer:
<div className="w-full md:w-1/2" />
```

Use `useIsMobile()` when you need to conditionally render different components or change logic based on screen size.
