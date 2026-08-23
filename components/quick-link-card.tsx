import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import type { QuickLink } from "@/content/quickLinks";

export function QuickLinkCard({ link }: { link: QuickLink }) {
  const Icon = link.icon;
  const content = (
    <>
      <span className="flex size-11 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
        <Icon className="size-5" />
      </span>
      <div className="mt-4 flex items-center gap-1.5">
        <h3 className="font-semibold text-foreground">{link.label}</h3>
        {link.external ? (
          <ArrowUpRight className="size-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
        ) : (
          <ChevronRight className="size-3.5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
        )}
      </div>
      <p className="mt-1 text-sm text-muted">{link.description}</p>
    </>
  );

  const className =
    "group block rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md focus-ring";

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
