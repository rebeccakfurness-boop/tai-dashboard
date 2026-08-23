"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { useCommandPalette } from "./command-palette-context";
import { overviewNav, propertyGroup, travelNav, resourcesNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  label,
  icon: Icon,
  active,
  indent,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active: boolean;
  indent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring group relative flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        indent && "ml-3.5 py-1.5 text-[13px]",
        active
          ? "bg-brand-100 text-brand-700"
          : "text-foreground/80 hover:bg-border/50 hover:text-foreground",
      )}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-full bg-brand-500" />
      )}
      <Icon
        className={cn(
          "shrink-0 transition-transform group-hover:scale-105",
          indent ? "size-3.5" : "size-4.5",
          active ? "text-brand-600" : "text-muted",
        )}
      />
      <span className="truncate">{label}</span>
    </Link>
  );
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { setOpen } = useCommandPalette();
  const isMac =
    typeof navigator !== "undefined" && /Mac/.test(navigator.platform);

  return (
    <div className="flex h-full flex-col bg-surface" onClick={onNavigate}>
      <div className="px-4 pb-3 pt-5">
        <Link href="/" className="focus-ring inline-flex rounded-lg">
          <Logo />
        </Link>
      </div>

      <div className="px-3 pb-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="focus-ring flex w-full items-center gap-2.5 rounded-lg border border-border-strong bg-background px-3 py-2 text-sm text-muted transition-colors hover:border-brand-400"
        >
          <Search className="size-4 shrink-0" />
          <span className="flex-1 text-left">Search…</span>
          <kbd className="rounded border border-border-strong bg-surface px-1.5 py-0.5 text-[10px] font-semibold text-muted">
            {isMac ? "⌘K" : "Ctrl K"}
          </kbd>
        </button>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
        <NavLink
          href={overviewNav.href}
          label={overviewNav.label}
          icon={overviewNav.icon}
          active={pathname === "/"}
        />

        <div className="pt-3">
          <NavLink
            href={propertyGroup.href}
            label={propertyGroup.label}
            icon={propertyGroup.icon}
            active={pathname === propertyGroup.href}
          />
          <div className="mt-1 space-y-0.5 border-l border-border pl-0.5">
            {propertyGroup.items.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={pathname === item.href}
                indent
              />
            ))}
          </div>
        </div>

        <div className="pt-3">
          <NavLink
            href={travelNav.href}
            label={travelNav.label}
            icon={travelNav.icon}
            active={pathname === travelNav.href}
          />
        </div>

        <div className="pt-3">
          <NavLink
            href={resourcesNav.href}
            label={resourcesNav.label}
            icon={resourcesNav.icon}
            active={pathname === resourcesNav.href}
          />
        </div>
      </nav>

      <div className="flex items-center justify-between border-t border-border px-4 py-3.5">
        <span className="text-xs text-muted">Light / Dark</span>
        <ThemeToggle />
      </div>
    </div>
  );
}
