"use client";

import type { ReactNode } from "react";
import { Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmbedPanel({
  id,
  eyebrow,
  title,
  url,
  externalUrl,
  onClose,
  heightClassName = "h-[70vh] max-h-[780px] min-h-[420px]",
  note,
  headerExtra,
  actions,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  /** URL loaded in the iframe. */
  url: string;
  /** URL used for "Open in new tab", if different from the iframe URL (e.g. an embed-only URL variant). Defaults to `url`. */
  externalUrl?: string;
  onClose?: () => void;
  heightClassName?: string;
  note?: ReactNode;
  headerExtra?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div
      id={id}
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-lg animate-rise"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-background px-5 py-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {eyebrow}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate font-bold text-foreground">{title}</h3>
            {headerExtra}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {actions}
          <a
            href={externalUrl ?? url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-border-strong px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-brand-400 hover:text-brand-600"
          >
            <Maximize2 className="size-3.5" />
            Open in new tab
          </a>
          {onClose && (
            <button
              onClick={onClose}
              className="focus-ring rounded-lg p-1.5 text-muted hover:bg-border/50"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      <div className={cn("relative w-full bg-background", heightClassName)}>
        <iframe
          key={url}
          src={url}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {note && (
        <p className="border-t border-border bg-background/60 px-5 py-2.5 text-xs text-muted">
          {note}
        </p>
      )}
    </div>
  );
}
