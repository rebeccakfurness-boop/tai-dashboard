"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Search, TriangleAlert } from "lucide-react";
import { slugify } from "@/lib/search";
import type { FloodRegion } from "@/content/types";

export function FloodMappingExplorer({ regions }: { regions: FloodRegion[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return regions;
    return regions.filter(
      (r) =>
        r.region.toLowerCase().includes(q) ||
        r.links.some((l) => l.label.toLowerCase().includes(q)) ||
        r.notes.toLowerCase().includes(q),
    );
  }, [regions, query]);

  return (
    <div>
      <div className="mb-6 flex items-center gap-2.5 rounded-xl border border-border-strong bg-surface px-4 py-2.5 shadow-sm">
        <Search className="size-4 shrink-0 text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by region…"
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted">
          No regions match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((region) => {
            const unavailable = region.links.length === 0;
            return (
              <div
                key={region.region}
                id={slugify(region.region)}
                className="scroll-mt-24 flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
              >
                <h3 className="font-bold text-foreground">{region.region}</h3>

                {unavailable ? (
                  <div className="mt-3 flex items-start gap-2 rounded-lg bg-accent-coral/10 px-3 py-2.5 text-xs text-accent-coral-strong">
                    <TriangleAlert className="mt-0.5 size-3.5 shrink-0" />
                    <span>{region.notes}</span>
                  </div>
                ) : (
                  <div className="mt-3 flex flex-1 flex-col gap-2">
                    {region.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring group flex items-center justify-between gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand-400 hover:bg-brand-100 hover:text-brand-700"
                      >
                        <span className="truncate">{link.label}</span>
                        <ArrowUpRight className="size-3.5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
                      </a>
                    ))}
                  </div>
                )}

                {!unavailable && region.notes && (
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    <span className="font-semibold text-foreground">Tip: </span>
                    {region.notes}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
