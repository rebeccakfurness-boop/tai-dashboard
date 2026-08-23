"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount-detection flag to avoid hydration mismatch, per next-themes docs
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "focus-ring relative inline-flex h-8 w-14 items-center rounded-full border border-border-strong bg-surface transition-colors",
        className,
      )}
      aria-label="Toggle dark mode"
    >
      <span
        className={cn(
          "absolute left-0.5 flex size-6 items-center justify-center rounded-full bg-navy-500 text-white shadow-sm transition-transform duration-300",
          isDark && "translate-x-6 bg-brand-500",
        )}
      >
        {isDark ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
      </span>
    </button>
  );
}
