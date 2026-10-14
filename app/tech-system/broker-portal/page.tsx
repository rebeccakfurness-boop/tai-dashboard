import { FileText } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { TrainingModuleViewer } from "@/components/training/module-viewer";
import { techTrainingModules, brokerPortalLessons } from "@/content/techTraining";
import { techSystemNav } from "@/lib/nav";

const brokerPortalModule = techTrainingModules.find((m) => m.id === "broker-portal");

export default function TechBrokerPortalTrainingPage() {
  return (
    <div>
      <PageHeader
        icon={techSystemNav.icon}
        eyebrow="Tech System"
        title="The Broker Portal"
        description="A tour of the portal brokers use to apply, track quotes and manage policies."
        search
        actions={
          brokerPortalModule?.pdfUrl && (
            <a
              href={brokerPortalModule.pdfUrl}
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
        <TrainingModuleViewer lessons={brokerPortalLessons} />
      </PageContainer>
    </div>
  );
}
