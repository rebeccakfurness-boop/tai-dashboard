"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { EmbedPanel } from "./embed-panel";
import { CopyButton } from "./copy-button";

const BASE_URL =
  "https://app.companiesoffice.govt.nz/companies/app/ui/pages/companies/search";

function companiesOfficeUrl(query: string) {
  if (!query) return `${BASE_URL}?type=entities`;
  return `${BASE_URL}?q=${encodeURIComponent(query)}&type=entities`;
}

export function CompaniesOfficeSearch() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(name.trim());
  }

  return (
    <div id="companies-office-search">
      <form
        onSubmit={handleSubmit}
        className="mb-4 flex items-center gap-2.5 rounded-xl border border-border-strong bg-surface px-4 py-2.5 shadow-sm focus-within:border-brand-400"
      >
        <Search className="size-4 shrink-0 text-muted" />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type a business or company name…"
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          disabled={!name.trim()}
          className="focus-ring shrink-0 rounded-lg bg-brand-500 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Search
        </button>
      </form>

      <EmbedPanel
        eyebrow="Companies Office"
        title={submitted || "NZ Companies Register"}
        url={companiesOfficeUrl(submitted)}
        headerExtra={submitted ? <CopyButton value={submitted} label="business name" /> : undefined}
        note={
          submitted ? (
            <>
              This should search automatically — if the register opens without
              results for &ldquo;{submitted}&rdquo;, use the copy button above
              and paste it into the register&apos;s own search box.
            </>
          ) : (
            "Search above, or browse the register directly below."
          )
        }
      />
    </div>
  );
}
