"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Search, TriangleAlert, X, Maximize2 } from "lucide-react";
import { slugify } from "@/lib/search";
import { cn } from "@/lib/utils";
import type { FloodRegion } from "@/content/types";

type Selection = { region: string; linkIndex: number };

function findRegionBySlug(regions: FloodRegion[], slug: string) {
  return regions.find((r) => slugify(r.region) === slug);
}

export function FloodMappingExplorer({ regions }: { regions: FloodRegion[] }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Selection | null>(null);

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

  function selectFromHash() {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const match = findRegionBySlug(regions, hash);
    if (match && match.links.length > 0) {
      setSelected({ region: match.region, linkIndex: 0 });
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time deep-link selection from the URL hash on mount
    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function selectRegion(region: FloodRegion, linkIndex = 0) {
    if (region.links.length === 0) return;
    setSelected({ region: region.region, linkIndex });
    requestAnimationFrame(() => {
      document
        .getElementById("flood-embed-panel")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const selectedRegion = selected
    ? regions.find((r) => r.region === selected.region)
    : null;
  const selectedLink = selectedRegion?.links[selected!.linkIndex];

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

      {selectedRegion && selectedLink && (
        <div
          id="flood-embed-panel"
          className="mb-8 scroll-mt-24 overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-lg animate-rise"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-background px-5 py-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                {selectedRegion.region}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="truncate font-bold text-foreground">
                  {selectedLink.label}
                </h3>
                {selectedRegion.links.length > 1 && (
                  <div className="flex gap-1">
                    {selectedRegion.links.map((l, i) => (
                      <button
                        key={l.url}
                        onClick={() =>
                          setSelected({ region: selectedRegion.region, linkIndex: i })
                        }
                        className={cn(
                          "focus-ring rounded-full px-2.5 py-0.5 text-[11px] font-semibold transition-colors",
                          i === selected!.linkIndex
                            ? "bg-brand-500 text-white"
                            : "bg-border/60 text-muted hover:text-brand-600",
                        )}
                      >
                        Tool {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <a
                href={selectedLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-border-strong px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-brand-400 hover:text-brand-600"
              >
                <Maximize2 className="size-3.5" />
                Open in new tab
              </a>
              <button
                onClick={() => setSelected(null)}
                className="focus-ring rounded-lg p-1.5 text-muted hover:bg-border/50"
                aria-label="Close embedded map"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          <div className="relative h-[70vh] max-h-[780px] min-h-[420px] w-full bg-background">
            <iframe
              key={selectedLink.url}
              src={selectedLink.url}
              title={`${selectedRegion.region} — ${selectedLink.label}`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="border-t border-border bg-background/60 px-5 py-2.5 text-xs text-muted">
            Blank or not loading? Some councils block their maps from being
            embedded elsewhere —{" "}
            <a
              href={selectedLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              open it in a new tab
            </a>{" "}
            instead. Once loaded, use the tool&apos;s own search box to look up
            an address.
          </p>
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted">
          No regions match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((region) => {
            const unavailable = region.links.length === 0;
            const isActive = selected?.region === region.region;
            return (
              <div
                key={region.region}
                id={slugify(region.region)}
                className={cn(
                  "scroll-mt-24 flex flex-col rounded-2xl border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
                  isActive
                    ? "border-brand-500 ring-1 ring-brand-500"
                    : "border-border hover:border-brand-300",
                )}
              >
                <h3 className="font-bold text-foreground">{region.region}</h3>

                {unavailable ? (
                  <div className="mt-3 flex items-start gap-2 rounded-lg bg-accent-coral/10 px-3 py-2.5 text-xs text-accent-coral-strong">
                    <TriangleAlert className="mt-0.5 size-3.5 shrink-0" />
                    <span>{region.notes}</span>
                  </div>
                ) : (
                  <div className="mt-3 flex flex-1 flex-col gap-2">
                    {region.links.map((link, i) => {
                      const isLinkActive = isActive && selected?.linkIndex === i;
                      return (
                        <div
                          key={link.url}
                          className={cn(
                            "flex items-center gap-1.5 rounded-lg border px-1.5 py-1.5 transition-colors",
                            isLinkActive
                              ? "border-brand-400 bg-brand-100"
                              : "border-border bg-background",
                          )}
                        >
                          <button
                            onClick={() => selectRegion(region, i)}
                            className={cn(
                              "focus-ring flex-1 truncate rounded-md px-2 py-1 text-left text-sm font-medium",
                              isLinkActive
                                ? "text-brand-700"
                                : "text-foreground hover:text-brand-600",
                            )}
                          >
                            {link.label}
                          </button>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="focus-ring shrink-0 rounded-md p-1.5 text-muted transition-colors hover:bg-border/60 hover:text-brand-600"
                            aria-label={`Open ${link.label} in a new tab`}
                            title="Open in new tab"
                          >
                            <ArrowUpRight className="size-3.5" />
                          </a>
                        </div>
                      );
                    })}
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
