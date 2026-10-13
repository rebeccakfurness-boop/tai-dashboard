import { FileText } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { TrainingModuleViewer } from "@/components/training/module-viewer";
import { propertyClosingLessons } from "@/content/propertyClosingLessons";
import { propertyQuoteTypeModules } from "@/content/propertyTraining";
import { propertyGroup } from "@/lib/nav";

const closingModule = propertyQuoteTypeModules.find((m) => m.id === "closing");

export default function PropertyClosingTrainingPage() {
  return (
    <div>
      <PageHeader
        icon={propertyGroup.items[0].icon}
        eyebrow="Property > Process & Training"
        title="Closing"
        description="What to do when a closing arrives from a broker, with a flow for each pathway."
        search
        actions={
          closingModule?.pdfUrl && (
            <a
              href={closingModule.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 border border-border-strong bg-surface-raised px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-foreground/80 transition-colors hover:border-brand-400 hover:text-brand-600"
            >
              <FileText className="size-4" />
              View the PDF presentation slides
            </a>
          )
        }
      />
      <PageContainer>
        <TrainingModuleViewer lessons={propertyClosingLessons} />
      </PageContainer>
    </div>
  );
}
