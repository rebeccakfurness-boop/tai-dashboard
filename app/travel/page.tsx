import { ArrowUpRight } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { StepCard } from "@/components/step-card";
import { DraftBadge } from "@/components/draft-badge";
import { travelLinks, travelProcessSteps, travelProcessStatus } from "@/content/travelProcess";
import { travelNav } from "@/lib/nav";

export default function TravelPage() {
  return (
    <div>
      <PageHeader
        icon={travelNav.icon}
        eyebrow="Travel"
        title="Travel Quotation Toolkit"
        description="IHQ, SafeTravel and airline contacts alongside the Travel quotation process. Full content will expand once the Travel process document is supplied."
        actions={travelProcessStatus === "draft" ? <DraftBadge /> : undefined}
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
                className="focus-ring group flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
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
            Travel Process
          </h2>
          <div className="space-y-6">
            {travelProcessSteps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
        </section>
      </PageContainer>
    </div>
  );
}
