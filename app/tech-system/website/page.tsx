import { FileText } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { TrainingModuleViewer } from "@/components/training/module-viewer";
import { techTrainingModules, websiteLessons } from "@/content/techTraining";
import { techSystemNav } from "@/lib/nav";

const websiteModule = techTrainingModules.find((m) => m.id === "website");

export default function TechWebsiteTrainingPage() {
  return (
    <div>
      <PageHeader
        icon={techSystemNav.icon}
        eyebrow="Tech System"
        title="The Otta Website"
        description="A tour of ottainsurance.co.nz and how to find your way around."
        search
        actions={
          websiteModule?.pdfUrl && (
            <a
              href={websiteModule.pdfUrl}
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
        <TrainingModuleViewer lessons={websiteLessons} />
      </PageContainer>
    </div>
  );
}
