"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { onboardingSections } from "@/content/onboarding";

const STORAGE_KEY = "tai-dashboard-onboarding-v1";

export function OnboardingChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage on mount
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // ignore
    }
  }, [checked, hydrated]);

  const total = onboardingSections.reduce((n, s) => n + s.tasks.length, 0);
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-brand-500 transition-all duration-500"
            style={{ width: `${total ? (done / total) * 100 : 0}%` }}
          />
        </div>
        <span className="shrink-0 text-sm font-semibold text-muted">
          {done} / {total}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {onboardingSections.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
          >
            <h3 className="mb-3 font-bold text-foreground">{section.title}</h3>
            <ul className="space-y-2">
              {section.tasks.map((task) => {
                const key = `${section.title}-${task.label}`;
                const isChecked = !!checked[key];
                return (
                  <li key={key}>
                    <label className="focus-ring group flex cursor-pointer items-start gap-2.5 rounded-lg px-1 py-1 hover:bg-border/40">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={isChecked}
                        onClick={() =>
                          setChecked((c) => ({ ...c, [key]: !c[key] }))
                        }
                        className={cn(
                          "mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded border transition-colors",
                          isChecked
                            ? "border-brand-500 bg-brand-500 text-white"
                            : "border-border-strong bg-surface",
                        )}
                      >
                        {isChecked && <Check className="size-3" strokeWidth={3} />}
                      </button>
                      <span
                        className={cn(
                          "text-sm text-foreground/90",
                          isChecked && "text-muted line-through",
                        )}
                      >
                        {task.href ? (
                          <Link
                            href={task.href}
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-brand-600 hover:underline"
                          >
                            {task.label}
                          </Link>
                        ) : (
                          task.label
                        )}
                        {task.detail && (
                          <span className="block text-xs text-muted">
                            {task.detail}
                          </span>
                        )}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
