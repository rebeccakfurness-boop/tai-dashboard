"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { ArrowUpRight, CornerDownLeft, Search } from "lucide-react";
import { search, searchIndex, groupRecords, type SearchRecord } from "@/lib/search";
import { cn } from "@/lib/utils";

export function SearchBox({
  placeholder = "Search the whole dashboard…",
  className,
}: {
  placeholder?: string;
  className?: string;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    if (!query.trim()) return searchIndex.slice(0, 6);
    return search(query, 20);
  }, [query]);

  const grouped = useMemo(() => groupRecords(results), [results]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function go(record: SearchRecord) {
    setOpen(false);
    setQuery("");
    if (record.external) {
      window.open(record.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(record.href);
    }
  }

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <Command shouldFilter={false}>
        <div className="flex items-center gap-3 rounded-xl border border-border-strong bg-surface px-4 py-3 transition-colors focus-within:border-brand-400">
          <Search className="size-4.5 shrink-0 text-muted" />
          <Command.Input
            value={query}
            onValueChange={setQuery}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className="w-full bg-transparent text-[15px] text-foreground outline-none placeholder:text-muted"
          />
        </div>

        {open && (
          <Command.List className="absolute left-0 right-0 top-full z-40 mt-2 max-h-[60vh] overflow-y-auto rounded-xl border border-border-strong bg-surface-raised p-2 shadow-2xl animate-fade-in">
            <Command.Empty className="px-4 py-8 text-center text-sm text-muted">
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
        )}
      </Command>
    </div>
  );
}
