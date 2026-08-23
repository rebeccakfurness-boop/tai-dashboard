"use client";

import { useState } from "react";
import { Search, Globe2, MapPin, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { EmbedPanel } from "./embed-panel";

type TabKey = "maps" | "postcode" | "homes";

const TABS: { key: TabKey; label: string }[] = [
  { key: "maps", label: "Google Maps" },
  { key: "postcode", label: "NZ Post Postcode Finder" },
  { key: "homes", label: "Property Info & Photos" },
];

function mapsEmbedUrl(address: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}
function mapsSearchUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
function earthSearchUrl(address: string) {
  return `https://earth.google.com/web/search/${encodeURIComponent(address)}`;
}
const POSTCODE_FINDER_URL = "https://www.nzpost.co.nz/tools/address-postcode-finder";
const HOMES_URL = "https://homes.co.nz";

function CopyAddressChip({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(address);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch {
          // clipboard unavailable — ignore
        }
      }}
      className={cn(
        "focus-ring inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold transition-colors",
        copied
          ? "border-emerald-400 text-emerald-600"
          : "border-brand-300 bg-brand-100 text-brand-700 hover:border-brand-400",
      )}
      title="Copy the address to paste into this tool's own search box"
    >
      {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
      {copied ? "Copied" : "Copy address to paste in"}
    </button>
  );
}

export function AddressLookup() {
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [tab, setTab] = useState<TabKey>("maps");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(address.trim());
  }

  return (
    <div id="address-lookup">
      <form
        onSubmit={handleSubmit}
        className="mb-4 flex items-center gap-2.5 rounded-xl border border-border-strong bg-surface px-4 py-2.5 shadow-sm focus-within:border-brand-400"
      >
        <Search className="size-4 shrink-0 text-muted" />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Type a risk address, e.g. 24 Queen St, Rotorua…"
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          disabled={!address.trim()}
          className="focus-ring shrink-0 rounded-lg bg-brand-500 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Look up
        </button>
      </form>

      {!submitted ? (
        <p className="rounded-xl border border-dashed border-border-strong bg-surface/60 px-4 py-3 text-sm text-muted">
          Type an address above to pull it up on Google Maps, and open it ready
          to paste into the Postcode Finder and homes.co.nz.
        </p>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={cn(
                    "focus-ring rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                    tab === t.key
                      ? "border-brand-500 bg-brand-500 text-white"
                      : "border-border-strong text-muted hover:border-brand-400 hover:text-brand-600",
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <a
              href={earthSearchUrl(submitted)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-border-strong px-3.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-brand-400 hover:text-brand-600"
            >
              <Globe2 className="size-3.5" />
              Open in Google Earth
            </a>
          </div>

          <p className="flex items-center gap-1.5 text-xs text-muted">
            <MapPin className="size-3.5 shrink-0" />
            Looking up:{" "}
            <span className="font-semibold text-foreground">{submitted}</span>
          </p>

          {tab === "maps" && (
            <EmbedPanel
              eyebrow="Google Maps"
              title={submitted}
              url={mapsEmbedUrl(submitted)}
              externalUrl={mapsSearchUrl(submitted)}
              note="This one auto-populates — the pin and results are already loaded for the exact address above."
            />
          )}

          {tab === "postcode" && (
            <EmbedPanel
              eyebrow="NZ Post"
              title="Address & Postcode Finder"
              url={POSTCODE_FINDER_URL}
              headerExtra={<CopyAddressChip address={submitted} />}
              note="This tool doesn't accept the address via link, so it opens fresh — use the copy button above, then paste into its search box."
            />
          )}

          {tab === "homes" && (
            <EmbedPanel
              eyebrow="homes.co.nz"
              title="Property Info & Photos"
              url={HOMES_URL}
              headerExtra={<CopyAddressChip address={submitted} />}
              note="Opens the homes.co.nz homepage — use the copy button above, then paste into its search box to pull up property details and photos."
            />
          )}
        </div>
      )}
    </div>
  );
}
