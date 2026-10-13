import { FileText } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { TrainingModuleViewer } from "@/components/training/module-viewer";
import { closingsLessons, trainingModules } from "@/content/travelTraining";
import { travelGroup } from "@/lib/nav";

const closingsModule = trainingModules.find((m) => m.id === "closings");

export default function ClosingsTrainingPage() {
  return (
    <div>
      <PageHeader
        icon={travelGroup.items[0].icon}
        eyebrow="Travel > Training"
        title="Closings"
        description="A beginner's guide to checking, logging and filing closings. No experience needed."
        search
        actions={
          closingsModule?.pdfUrl && (
            <a
              href={closingsModule.pdfUrl}
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
        <TrainingModuleViewer lessons={closingsLessons} />
      </PageContainer>
    </div>
  );
}
