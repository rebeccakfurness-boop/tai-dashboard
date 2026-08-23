"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { Sidebar } from "./sidebar";
import { Logo } from "./logo";
import { CommandPalette } from "./command-palette";
import { CommandPaletteProvider, useCommandPalette } from "./command-palette-context";

function MobileTopBar({ onMenu }: { onMenu: () => void }) {
  const { setOpen } = useCommandPalette();
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-surface/90 px-4 py-3 backdrop-blur-md lg:hidden">
      <button
        onClick={onMenu}
        className="focus-ring rounded-lg p-2 text-foreground hover:bg-border/50"
        aria-label="Open navigation"
      >
        <Menu className="size-5" />
      </button>
      <Link href="/" className="focus-ring rounded-lg">
        <Logo />
      </Link>
      <button
        onClick={() => setOpen(true)}
        className="focus-ring rounded-lg p-2 text-foreground hover:bg-border/50"
        aria-label="Search"
      >
        <Search className="size-5" />
      </button>
    </header>
  );
}

function ShellContent({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-border lg:block">
        <Sidebar />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-72 border-r border-border bg-surface shadow-2xl animate-rise">
            <button
              onClick={() => setMobileOpen(false)}
              className="focus-ring absolute right-3 top-4 rounded-lg p-1.5 text-muted hover:bg-border/50"
              aria-label="Close navigation"
            >
              <X className="size-4.5" />
            </button>
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex min-h-screen w-full flex-1 flex-col lg:pl-64">
        <MobileTopBar onMenu={() => setMobileOpen(true)} />
        <main className="flex-1">{children}</main>
      </div>

      <CommandPalette />
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <CommandPaletteProvider>
      <ShellContent>{children}</ShellContent>
    </CommandPaletteProvider>
  );
}
