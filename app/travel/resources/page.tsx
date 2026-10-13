import { ArrowUpRight } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { CompaniesOfficeSearch } from "@/components/companies-office-search";
import { travelLinks } from "@/content/travelProcess";
import { travelGroup } from "@/lib/nav";

export default function TravelResourcesPage() {
  return (
    <div>
      <PageHeader
        icon={travelGroup.items[1].icon}
        eyebrow="Travel"
        title="Resources"
        description="IHQ, SafeTravel, airline contacts and a business lookup."
        search
      />
      <PageContainer>
        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
            Key links
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {travelLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group flex flex-col rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-brand-300"
              >
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-foreground">{link.label}</h3>
                  <ArrowUpRight className="size-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
            Verify a business
          </h2>
          <CompaniesOfficeSearch />
        </section>
      </PageContainer>
    </div>
  );
}
