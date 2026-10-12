import { FileText } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { TrainingModuleViewer } from "@/components/training/module-viewer";
import { quoteLessons, trainingModules } from "@/content/travelTraining";
import { travelGroup } from "@/lib/nav";

const quoteModule = trainingModules.find((m) => m.id === "quote");

export default function QuoteTrainingPage() {
  return (
    <div>
      <PageHeader
        icon={travelGroup.items[0].icon}
        eyebrow="Travel > Training"
        title="Quote"
        description="A step by step guide, from a request in the inbox to a quote on IHQ. No experience needed."
        actions={
          quoteModule?.pdfUrl && (
            <a
              href={quoteModule.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-background px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-brand-400 hover:text-brand-600"
            >
              <FileText className="size-4" />
              View the PDF presentation slides
            </a>
          )
        }
      />
      <PageContainer>
        <TrainingModuleViewer lessons={quoteLessons} />
      </PageContainer>
    </div>
  );
}
