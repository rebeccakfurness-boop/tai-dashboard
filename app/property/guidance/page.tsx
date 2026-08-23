import { PageHeader, PageContainer } from "@/components/page-header";
import { GuidanceList } from "@/components/guidance-list";
import { DraftBadge } from "@/components/draft-badge";
import { guidanceItems, guidanceStatus } from "@/content/guidance";
import { propertyGroup } from "@/lib/nav";

export default function GuidancePage() {
  return (
    <div>
      <PageHeader
        icon={propertyGroup.items[3].icon}
        eyebrow="Property"
        title="Underwriting Guidance & Troubleshooting"
        description="“If this happens, look here.” Practical, threshold-based guidance for the scenarios that come up most — with a pointer to where to go next."
        actions={guidanceStatus === "draft" ? <DraftBadge /> : undefined}
      />
      <PageContainer>
        <GuidanceList items={guidanceItems} />

        <div className="mt-8 rounded-2xl border border-dashed border-border-strong bg-surface/60 p-5 text-sm text-muted">
          <span className="font-semibold text-foreground">Coming later: </span>
          a natural-language assistant that answers underwriting questions directly
          from the guide and policy documents is planned as a phase 2 enhancement.
        </div>
      </PageContainer>
    </div>
  );
}
