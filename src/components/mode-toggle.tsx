import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";
import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

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
    <div className=" flex flex-col select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground animate-zoomin"
>
      <div className="text-sm font-medium leading-none  ">Cambiar modo</div>

      <div className="flex items-center justify-between w-full px-4 py-2 bg-muted rounded-lg shadow ">
      <Moon
          className={`h-5 w-5  ${
            theme === "dark" ? "text-foreground" : "text-muted-foreground"
          }`}
        />

        <div className="relative flex items-center w-full max-w-[120px] ">
          <Switch
            id="theme-toggle"
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
            className="relative w-full h-8 rounded-full bg-background border border-muted"
          />
        </div>
        <Sun
          className={`h-5 w-5  ${
            theme === "dark" ? "text-muted-foreground" : "text-foreground"
          }`}
        />
        
      </div>
    </div>
  );
}
