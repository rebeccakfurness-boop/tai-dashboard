"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RowState } from "./types";

const inputClass =
  "w-full min-w-0 rounded-md border border-transparent bg-transparent px-2 py-1 text-sm text-foreground outline-none transition-colors focus:border-brand-400 focus:bg-background";

function StatusBadge({ row }: { row: RowState }) {
  if (!row.email) {
    return (
      <span className="rounded-full bg-border/60 px-2 py-0.5 text-[11px] font-semibold text-muted">
        No email yet
      </span>
    );
  }
  if (row.matchStatus === "checking") {
    return (
      <span className="rounded-full bg-border/60 px-2 py-0.5 text-[11px] font-semibold text-muted">
        Checking…
      </span>
    );
  }
  if (row.matchStatus === "existing") {
    return (
      <span className="rounded-full bg-accent-coral/15 px-2 py-0.5 text-[11px] font-semibold text-accent-coral-strong">
        Already registered{row.existingStatus ? ` (Status: ${row.existingStatus})` : ""}
      </span>
    );
  }
  if (row.matchStatus === "new") {
    return (
      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
        New
      </span>
    );
  }
  return (
    <span className="rounded-full bg-border/60 px-2 py-0.5 text-[11px] font-semibold text-muted">
      Not checked yet
    </span>
  );
}

export function RowTable({
  rows,
  onChange,
  onRemove,
  onBlurEmail,
  emptyLabel,
}: {
  rows: RowState[];
  onChange: (id: string, patch: Partial<RowState>) => void;
  onRemove: (id: string) => void;
  onBlurEmail: (id: string) => void;
  emptyLabel: string;
}) {
  if (rows.length === 0) {
    return <p className="rounded-lg border border-dashed border-border-strong px-4 py-3 text-sm text-muted">{emptyLabel}</p>;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-background">
          <tr>
            <th className="px-3 py-2 font-semibold text-foreground">First name</th>
            <th className="px-3 py-2 font-semibold text-foreground">Last name</th>
            <th className="px-3 py-2 font-semibold text-foreground">Email</th>
            <th className="px-3 py-2 font-semibold text-foreground">Phone</th>
            <th className="px-3 py-2 font-semibold text-foreground">Status</th>
            <th className="w-8 px-2 py-2" />
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={row.id} className={cn(row.needsCheck && "bg-accent-coral/5")}>
              <td className="px-1 py-1">
                <input
                  className={inputClass}
                  value={row.firstName}
                  onChange={(e) => onChange(row.id, { firstName: e.target.value })}
                  placeholder="First name"
                />
              </td>
              <td className="px-1 py-1">
                <input
                  className={inputClass}
                  value={row.lastName}
                  onChange={(e) => onChange(row.id, { lastName: e.target.value })}
                  placeholder="Last name"
                />
              </td>
              <td className="px-1 py-1">
                <input
                  className={inputClass}
                  value={row.email}
                  onChange={(e) => onChange(row.id, { email: e.target.value, matchStatus: "unchecked" })}
                  onBlur={() => onBlurEmail(row.id)}
                  placeholder="name@broker.co.nz"
                />
              </td>
              <td className="px-1 py-1">
                <input
                  className={inputClass}
                  value={row.phone}
                  onChange={(e) => onChange(row.id, { phone: e.target.value })}
                  placeholder="Optional"
                />
              </td>
              <td className="px-2 py-1 whitespace-nowrap">
                <StatusBadge row={row} />
              </td>
              <td className="px-1 py-1 text-right">
                <button
                  onClick={() => onRemove(row.id)}
                  className="focus-ring rounded-md p-1 text-muted hover:bg-border/60 hover:text-red-600"
                  aria-label="Remove this row"
                  title="Remove"
                >
                  <X className="size-3.5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
