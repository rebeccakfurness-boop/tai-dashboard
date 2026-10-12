import Link from "next/link";
import { ChevronRight, Clock, FileText } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { TagChip } from "@/components/tag-chip";
import { Badge } from "@/components/ui/badge";
import { trainingModules } from "@/content/travelTraining";
import { travelGroup } from "@/lib/nav";

export default function TravelTrainingPage() {
  return (
    <div>
      <PageHeader
        icon={travelGroup.items[0].icon}
        eyebrow="Travel"
        title="Process & Training"
        description="Inbox tags, the quotation process, and step-by-step training modules. Pick a card below."
      />
      <PageContainer>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {trainingModules.map((module) => {
            const available = module.status === "available" && module.href;
            const content = (
              <>
                <div className="flex items-center gap-2">
                  {module.tag && <TagChip label={module.tag} />}
                  <h2 className="text-lg font-bold text-foreground">{module.label}</h2>
                  {available && (
                    <ChevronRight className="size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
                  )}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {module.description}
                </p>
                {!available && (
                  <Badge variant="neutral" className="mt-3">
                    <Clock className="size-3" />
                    Coming soon
                  </Badge>
                )}
                {available && module.lessons && (
                  <p className="mt-3 text-xs font-medium text-brand-600">
                    {module.lessons.length} lessons
                  </p>
                )}
              </>
            );

            return (
              <div key={module.id} className="flex flex-col gap-2">
                {available ? (
                  <Link
                    href={module.href!}
                    className="focus-ring group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="rounded-2xl border border-dashed border-border bg-surface/60 p-6 opacity-70">
                    {content}
                  </div>
                )}
                {module.pdfUrl && (
                  <a
                    href={module.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex w-fit items-center gap-1.5 self-end rounded-lg px-2 py-1 text-xs font-medium text-muted transition-colors hover:text-brand-600"
                  >
                    <FileText className="size-3.5" />
                    View the original PDF slides
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </PageContainer>
    </div>
  );
}
