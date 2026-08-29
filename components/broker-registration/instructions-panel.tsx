"use client";

import { useEffect, useState } from "react";
import { Info, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const STORAGE_KEY = "tai-broker-registration-instructions-dismissed-v1";

const STEPS = [
  "Paste the broker's request into the box below",
  "Check the list the app pulls out — fix anything that looks wrong",
  "Confirm — this adds new people to the register and skips anyone already registered",
  "Click \"Open email\" to send the confirmation back to the requester",
];

export function InstructionsPanel() {
  const [dismissed, setDismissed] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage on mount
      setDismissed(localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  function dismiss() {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }

  function reopen() {
    setDismissed(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  if (!hydrated) return null;

  if (dismissed) {
    return (
      <button
        onClick={reopen}
        className="focus-ring mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700"
      >
        <Info className="size-3.5" />
        Show instructions
      </button>
    );
  }

  return (
    <Card className="mb-6 border-brand-300 bg-brand-100/40 p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-white">
            <Info className="size-4" />
          </span>
          <div>
            <h2 className="font-bold text-foreground">How this works</h2>
            <ol className="mt-2 space-y-1.5">
              {STEPS.map((step, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground/90">
                  <span className="font-semibold text-brand-700">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <button
          onClick={dismiss}
          className="focus-ring shrink-0 rounded-lg p-1.5 text-muted hover:bg-border/50"
          aria-label="Dismiss instructions"
        >
          <X className="size-4" />
        </button>
      </div>
    </Card>
  );
}
