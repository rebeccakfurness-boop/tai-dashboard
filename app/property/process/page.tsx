import { PageHeader, PageContainer } from "@/components/page-header";
import { StepCard } from "@/components/step-card";
import { NamingConventionTable } from "@/components/naming-convention-table";
import { DataChecklist } from "@/components/data-checklist";
import { WorksheetFieldTable } from "@/components/worksheet-field-table";
import { DraftBadge } from "@/components/draft-badge";
import { propertyProcessSteps, propertyProcessStatus } from "@/content/propertyProcess";
import { propertyGroup } from "@/lib/nav";

const extras: Record<string, React.ReactNode> = {
  "naming-conventions": <NamingConventionTable />,
  "data-checklist": <DataChecklist />,
  "worksheet-guide": <WorksheetFieldTable />,
};

export default function ProcessPage() {
  return (
    <div>
      <PageHeader
        icon={propertyGroup.items[0].icon}
        eyebrow="Property"
        title="Property Product Quotation Process"
        description="The full step-by-step process, from first receipt to the Quote Register. Searchable inline — use ⌘K to jump straight to any step."
        actions={propertyProcessStatus === "draft" ? <DraftBadge /> : undefined}
      />
      <PageContainer>
        <div className="mb-8 flex flex-wrap gap-2">
          {propertyProcessSteps.map((step, i) => (
            <a
              key={step.id}
              href={`#${step.id}`}
              className="focus-ring rounded-full border border-border-strong px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-brand-400 hover:text-brand-600"
            >
              {i + 1}. {step.title.replace(/^\d+\.\s*/, "")}
            </a>
          ))}
        </div>

        <div className="space-y-6">
          {propertyProcessSteps.map((step) => (
            <StepCard key={step.id} step={step} extra={extras[step.id]} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
