"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { ArrowUpRight, CornerDownLeft, Search, X } from "lucide-react";
import { useCommandPalette } from "./command-palette-context";
import { search, searchIndex, type SearchRecord } from "@/lib/search";
import { cn } from "@/lib/utils";

const DEFAULT_SUGGESTIONS = [
  "Rotorua flood",
  "vacant property",
  "sum insured threshold",
  "naming convention",
  "postcode finder",
];

function groupRecords(records: SearchRecord[]) {
  const groups = new Map<string, SearchRecord[]>();
  for (const record of records) {
    const list = groups.get(record.group) ?? [];
    list.push(record);
    groups.set(record.group, list);
  }
  return Array.from(groups.entries());
}

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen]);

  useEffect(() => {
    if (!open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- clears search when the dialog closes, before it next opens
      setQuery("");
    }
  }, [open]);

  const results = useMemo(() => {
    if (!query.trim()) return searchIndex.slice(0, 8);
    return search(query, 20);
  }, [query]);

  const grouped = useMemo(() => groupRecords(results), [results]);

  function go(record: SearchRecord) {
    setOpen(false);
    if (record.external) {
      window.open(record.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(record.href);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-navy-950/60 px-4 pt-[12vh] backdrop-blur-sm animate-fade-in"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-border-strong bg-surface-raised shadow-2xl animate-rise"
        onClick={(e) => e.stopPropagation()}
      >
        <Command shouldFilter={false} className="flex flex-col">
          <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
            <Search className="size-4.5 shrink-0 text-muted" />
            <Command.Input
              autoFocus
              value={query}
              onValueChange={setQuery}
              placeholder="Search tools, regions, process steps…"
              className="w-full bg-transparent text-[15px] text-foreground outline-none placeholder:text-muted"
            />
            <button
              onClick={() => setOpen(false)}
              className="focus-ring rounded-md p-1 text-muted hover:bg-border/60"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
          </div>

          <Command.List className="max-h-[60vh] overflow-y-auto p-2">
            <Command.Empty className="px-4 py-10 text-center text-sm text-muted">
              No results for &ldquo;{query}&rdquo;. Try a region, a process step, or a
              tool name.
            </Command.Empty>

            {grouped.map(([group, items]) => (
              <Command.Group
                key={group}
                heading={group}
                className="px-2 py-1.5 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:pt-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-muted"
              >
                {items.map((item) => (
                  <Command.Item
                    key={item.id}
                    value={item.id}
                    onSelect={() => go(item)}
                    className={cn(
                      "group flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm",
                      "data-[selected=true]:bg-brand-100 data-[selected=true]:text-brand-700",
                    )}
                  >
                    <div className="flex min-w-0 flex-col">
                      <span className="truncate font-medium text-foreground group-data-[selected=true]:text-brand-700">
                        {item.title}
                      </span>
                      <span className="truncate text-xs text-muted">
                        {item.breadcrumb}
                      </span>
                    </div>
                    {item.external ? (
                      <ArrowUpRight className="size-4 shrink-0 text-muted group-data-[selected=true]:text-brand-600" />
                    ) : (
                      <CornerDownLeft className="size-4 shrink-0 text-muted opacity-0 group-data-[selected=true]:opacity-100" />
                    )}
                  </Command.Item>
                ))}
              </Command.Group>
            ))}
          </Command.List>

          {!query && (
            <div className="flex flex-wrap items-center gap-1.5 border-t border-border px-4 py-3">
              <span className="text-xs text-muted">Try:</span>
              {DEFAULT_SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="focus-ring rounded-full border border-border-strong px-2.5 py-1 text-xs text-muted transition-colors hover:border-brand-400 hover:text-brand-600"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </Command>
      </div>
    </div>
  );
}
