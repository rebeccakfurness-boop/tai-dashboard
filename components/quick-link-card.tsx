import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { QuickLink } from "@/content/quickLinks";

export function QuickLinkCard({ link }: { link: QuickLink }) {
  const Icon = link.icon;
  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-foreground">{link.label}</h3>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-brand-300 text-brand-600 transition-colors group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
          <Icon className="size-4" />
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{link.description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-brand-600 group-hover:text-brand-700">
        View
        {link.external ? (
          <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        ) : (
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        )}
      </span>
    </>
  );

  const className =
    "group block rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-brand-300 focus-ring";

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
}
