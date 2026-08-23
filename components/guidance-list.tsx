"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Info, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GuidanceItem } from "@/content/types";

const severityMeta = {
  critical: {
    label: "Critical",
    icon: ShieldAlert,
    classes: "border-red-300/60 bg-red-500/5",
    badge: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
  caution: {
    label: "Caution",
    icon: AlertTriangle,
    classes: "border-amber-300/60 bg-amber-500/5",
    badge: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  },
  info: {
    label: "Good to know",
    icon: Info,
    classes: "border-brand-300/60 bg-brand-100/40",
    badge: "bg-brand-100 text-brand-700",
  },
} as const;

const filters = ["all", "critical", "caution", "info"] as const;

export function GuidanceList({ items }: { items: GuidanceItem[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");

  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.severity === filter)),
    [items, filter],
  );

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "focus-ring rounded-full border px-3.5 py-1.5 text-xs font-semibold capitalize transition-colors",
              filter === f
                ? "border-brand-500 bg-brand-500 text-white"
                : "border-border-strong text-muted hover:border-brand-400 hover:text-brand-600",
            )}
          >
            {f === "all" ? "All scenarios" : severityMeta[f].label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {visible.map((item) => {
          const meta = severityMeta[item.severity];
          const Icon = meta.icon;
          return (
            <div
              key={item.id}
              id={item.id}
              className={cn(
                "scroll-mt-24 rounded-2xl border p-5 shadow-sm",
                meta.classes,
              )}
            >
              <div className="flex items-start gap-3">
                <span
                  className={cn(
                    "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg",
                    meta.badge,
                  )}
                >
                  <Icon className="size-4" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-foreground">
                      If {item.trigger.charAt(0).toLowerCase() + item.trigger.slice(1)}…
                    </h3>
                    <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-semibold", meta.badge)}>
                      {meta.label}
                    </span>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground/90">
                    {item.guidance}
                  </p>
                  {item.refersTo && (
                    <div className="mt-3">
                      {item.refersToHref ? (
                        <Link
                          href={item.refersToHref}
                          className="focus-ring group inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                        >
                          {item.refersTo}
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      ) : (
                        <span className="text-sm font-medium text-muted">
                          See: {item.refersTo}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
