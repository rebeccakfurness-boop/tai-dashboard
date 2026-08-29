"use client";

import { useEffect, useState } from "react";
import { FileText, Video, ExternalLink, Paperclip } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

type ResourceAsset = {
  id: number;
  label: string;
  fileUrl: string | null;
  fileType: string;
};

function typeIcon(fileType: string) {
  return fileType === "video" ? Video : FileText;
}

export function AttachmentReminder() {
  const [assets, setAssets] = useState<ResourceAsset[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/broker-registration/resource-assets")
      .then(async (res) => {
        const data = await res.json();
        if (cancelled) return;
        if (!res.ok) {
          setError(data.error || "Couldn't load the onboarding attachments.");
          return;
        }
        setAssets(data.assets);
      })
      .catch(() => {
        if (!cancelled) {
          setError("Couldn't reach the server to load the onboarding attachments.");
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <p className="text-xs text-muted">
        Couldn&apos;t load the attachment list ({error}) — attach the onboarding
        files to the email yourself before sending.
      </p>
    );
  }

  if (!assets) return null;

  return (
    <Card className="border-accent-coral/40 bg-accent-coral/5 p-4">
      <div className="flex items-start gap-2.5">
        <Paperclip className="mt-0.5 size-4 shrink-0 text-accent-coral-strong" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">
            Remember to attach
          </p>
          <p className="mt-0.5 text-xs text-muted">
            A mailto: link can&apos;t carry file attachments — download these
            yourself and attach them before sending.
          </p>
          <ul className="mt-3 space-y-2">
            {assets.map((asset) => {
              const Icon = typeIcon(asset.fileType);
              return (
                <li
                  key={asset.id}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-surface px-3 py-2"
                >
                  <span className="flex items-center gap-2 text-sm text-foreground">
                    <Icon className="size-3.5 shrink-0 text-muted" />
                    {asset.label}
                  </span>
                  {asset.fileUrl ? (
                    <span className="flex items-center gap-1.5">
                      <a
                        href={asset.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700"
                      >
                        Open <ExternalLink className="size-3" />
                      </a>
                      <CopyButton value={asset.fileUrl} label={asset.label} />
                    </span>
                  ) : (
                    <span className="rounded-full bg-border/60 px-2 py-0.5 text-[11px] font-semibold text-muted">
                      Not uploaded yet
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Card>
  );
}
