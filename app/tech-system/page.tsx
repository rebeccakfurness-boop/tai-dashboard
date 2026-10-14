import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { TagChip } from "@/components/tag-chip";
import { techTrainingModules } from "@/content/techTraining";
import { techSystemNav } from "@/lib/nav";

export default function TechSystemPage() {
  return (
    <div>
      <PageHeader
        icon={techSystemNav.icon}
        eyebrow="Tech System"
        title="Tech System Training"
        description="Step-by-step training for the Otta platform itself: the public website, the admin portal underwriters use, and the broker portal. Pick a card below."
        search
      />
      <PageContainer>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {techTrainingModules.map((module) => (
            <div key={module.id} className="flex flex-col gap-2">
              <Link
                href={module.href!}
                className="focus-ring group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300"
              >
                <div className="flex items-center gap-2">
                  {module.tag && <TagChip label={module.tag} />}
                  <h2 className="text-lg font-bold text-foreground">{module.label}</h2>
                  <ChevronRight className="size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {module.description}
                </p>
                {module.lessons && (
                  <p className="mt-3 text-xs font-medium text-brand-600">
                    {module.lessons.length} lessons
                  </p>
                )}
              </Link>
              {module.pdfUrl && (
                <a
                  href={module.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex w-fit items-center gap-1.5 self-end px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted transition-colors hover:text-brand-600"
                >
                  <FileText className="size-3.5" />
                  View the PDF presentation slides
                </a>
              )}
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
