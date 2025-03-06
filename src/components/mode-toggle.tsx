import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import { Moon } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [the, setThe] = useState<boolean>(true);

  useEffect(() => {
    if (!theme) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
    }
  }, [setTheme, theme]);

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <button
      onClick={() => {
        toggleTheme(!the);
        setThe(!the);
      }}
    >
      <Moon className="h-5 w-5 text-white" />
    </button>
  );
}
