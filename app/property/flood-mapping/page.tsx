import { PageHeader, PageContainer } from "@/components/page-header";
import { FloodMappingExplorer } from "@/components/flood-mapping-explorer";
import floodMappingData from "@/content/floodMapping.json";
import { propertyGroup } from "@/lib/nav";
import type { FloodRegion } from "@/content/types";

const regions = floodMappingData.floodMappingRegions as FloodRegion[];

export default function FloodMappingPage() {
  return (
    <div>
      <PageHeader
        icon={propertyGroup.items[1].icon}
        eyebrow="Property"
        title="Flood Mapping"
        description={`Select a region to view its flood mapping tool right here — ${regions.length} regions covered. Every tool can also be opened in a new tab if it won't embed.`}
      />
      <PageContainer>
        <FloodMappingExplorer regions={regions} />
      </PageContainer>
    </div>
  );
}
