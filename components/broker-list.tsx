"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Broker } from "@/content/types";

export function BrokerList({ brokers }: { brokers: Broker[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return brokers;
    return brokers.filter((b) => b.name.toLowerCase().includes(q));
  }, [brokers, query]);

  return (
    <div>
      <div className="mb-4 flex items-center gap-2.5 rounded-xl border border-border-strong bg-surface px-4 py-2.5 shadow-sm sm:max-w-sm">
        <Search className="size-4 shrink-0 text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter brokers…"
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((broker) => (
          <div
            key={broker.name}
            className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground"
          >
            {broker.name}
          </div>
        ))}
      </div>
    </div>
  );
}
