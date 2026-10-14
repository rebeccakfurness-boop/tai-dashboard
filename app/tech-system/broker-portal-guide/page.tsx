import { FileText } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { TrainingModuleViewer } from "@/components/training/module-viewer";
import { techTrainingModules, brokerPortalGuideLessons } from "@/content/techTraining";
import { techSystemNav } from "@/lib/nav";

const brokerPortalGuideModule = techTrainingModules.find((m) => m.id === "broker-portal-guide");

export default function TechBrokerPortalGuideTrainingPage() {
  return (
    <div>
      <PageHeader
        icon={techSystemNav.icon}
        eyebrow="Tech System"
        title="Broker Portal Guide"
        description="The getting-started guide we send brokers when their account is approved."
        search
        actions={
          brokerPortalGuideModule?.pdfUrl && (
            <a
              href={brokerPortalGuideModule.pdfUrl}
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
        <TrainingModuleViewer lessons={brokerPortalGuideLessons} />
      </PageContainer>
    </div>
  );
}
