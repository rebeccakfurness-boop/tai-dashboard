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
        description={`Direct links to every regional flood mapping tool — ${regions.length} regions covered. Every link opens in a new tab.`}
      />
      <PageContainer>
        <FloodMappingExplorer regions={regions} />
      </PageContainer>
    </div>
  );
}
