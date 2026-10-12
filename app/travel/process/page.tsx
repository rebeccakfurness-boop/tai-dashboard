import { Info, TriangleAlert } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { StepCard } from "@/components/step-card";
import { DraftBadge } from "@/components/draft-badge";
import { Card } from "@/components/ui/card";
import { TagChip } from "@/components/tag-chip";
import { TravelFlowDiagram } from "@/components/travel-flow-diagram";
import { travelProcessSteps, travelProcessStatus } from "@/content/travelProcess";
import { travelFlowNodes, travelFlowEdges } from "@/content/travelFlow";
import {
  keyNote,
  categoryTags,
  actorTags,
  actorTagsNote,
  unconfirmedTags,
} from "@/content/travelInboxTags";
import { travelGroup } from "@/lib/nav";

export default function TravelProcessPage() {
  return (
    <div>
      <PageHeader
        icon={travelGroup.items[0].icon}
        eyebrow="Travel"
        title="Process"
        description="Inbox category tags, who actions what, and the step-by-step Travel quotation process."
      />
      <PageContainer>
        <section className="mb-10">
          <Card className="border-brand-300 bg-brand-100/40 p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-white">
                <Info className="size-4" />
              </span>
              <div>
                <h2 className="font-bold text-foreground">Key note</h2>
                <p className="mt-1 text-sm leading-relaxed text-foreground/90">{keyNote}</p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
            Process Flow
          </h2>
          <TravelFlowDiagram nodes={travelFlowNodes} edges={travelFlowEdges} />
        </section>

        <section id="category-tags" className="mb-10 scroll-mt-24">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">
            Travel Inbox Category Tags
          </h2>
          <p className="mb-4 text-sm text-muted">
            The general category of what the email needs — pick one per email.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categoryTags.map((tag) => (
              <Card key={tag.label} className="flex items-center gap-3 p-4">
                <TagChip label={tag.label} />
                <span className="text-sm text-foreground/90">{tag.description}</span>
              </Card>
            ))}
          </div>
        </section>

        <section id="actor-tags" className="mb-10 scroll-mt-24">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">
            Who Actions It
          </h2>
          <p className="mb-4 text-sm text-muted">{actorTagsNote}</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {actorTags.map((tag) => (
              <Card key={tag.label} className="flex items-center gap-3 p-4">
                <TagChip label={tag.label} />
                <span className="text-sm text-foreground/90">{tag.description}</span>
              </Card>
            ))}
          </div>

          {unconfirmedTags.length > 0 && (
            <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-border-strong bg-surface/60 px-4 py-3 text-xs text-muted">
              <TriangleAlert className="mt-0.5 size-3.5 shrink-0" />
              <span>
                Also seen in the inbox but not documented yet:{" "}
                {unconfirmedTags.map((t, i) => (
                  <span key={t}>
                    <span className="font-medium text-foreground">{t}</span>
                    {i < unconfirmedTags.length - 1 ? ", " : ""}
                  </span>
                ))}
                . Add these to{" "}
                <code className="rounded bg-border/60 px-1 py-0.5">
                  content/travelInboxTags.ts
                </code>{" "}
                once there&apos;s a definition for them.
              </span>
            </div>
          )}
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
            Travel Quotation Process
          </h2>
          {travelProcessStatus === "draft" && (
            <div className="mb-4">
              <DraftBadge />
            </div>
          )}
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
