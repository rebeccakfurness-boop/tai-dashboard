"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyButton({
  value,
  label,
  className,
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "focus-ring group inline-flex items-center gap-1.5 rounded-md border border-border-strong bg-surface px-2.5 py-1 text-xs font-medium text-muted transition-all hover:border-brand-400 hover:text-brand-600 active:scale-95",
        copied && "border-emerald-400 text-emerald-600",
        className,
      )}
      aria-label={label ? `Copy ${label}` : "Copy to clipboard"}
    >
      {copied ? (
        <>
          <Check className="size-3.5" />
          Copied
        </>
      ) : (
        <>
          <Copy className="size-3.5 transition-transform group-hover:scale-110" />
          Copy
        </>
      )}
    </button>
  );
}
