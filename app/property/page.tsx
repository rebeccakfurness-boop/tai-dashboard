import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { propertyGroup } from "@/lib/nav";

export default function PropertyPage() {
  return (
    <div>
      <PageHeader
        icon={propertyGroup.icon}
        eyebrow="Property"
        title="Property Quotation Toolkit"
        description="Everything the team needs to process a Property quote from first submission to issue — the process document, every regional flood mapping tool, reference lookups, and troubleshooting guidance."
      />
      <PageContainer>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {propertyGroup.items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring group flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-lg font-bold text-foreground">
                      {item.label}
                    </h2>
                    <ChevronRight className="size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </PageContainer>
    </div>
  );
}
