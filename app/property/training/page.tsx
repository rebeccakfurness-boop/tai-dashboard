import { Clock } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TravelFlowDiagram } from "@/components/travel-flow-diagram";
import {
  propertyTrainingFlowNodes,
  propertyTrainingFlowEdges,
  propertyTrainingFlowLegend,
} from "@/content/propertyTrainingFlow";
import { propertyExtraModules } from "@/content/propertyTraining";
import { propertyGroup } from "@/lib/nav";

export default function PropertyTrainingPage() {
  return (
    <div>
      <PageHeader
        icon={propertyGroup.items[0].icon}
        eyebrow="Property"
        title="Process & Training"
        description="The full quotation process, and step-by-step training modules by quote type. Click a box to open it."
      />
      <PageContainer>
        <section className="mb-12">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
            The process
          </h2>
          <TravelFlowDiagram
            nodes={propertyTrainingFlowNodes}
            edges={propertyTrainingFlowEdges}
            legend={propertyTrainingFlowLegend}
          />
        </section>

        <section>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">
            Extras &amp; reference
          </h2>
          <p className="mb-4 text-sm text-muted">
            Standalone topics that come up alongside the main process.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {propertyExtraModules.map((module) => (
              <Card
                key={module.id}
                className="border-dashed bg-surface/60 p-5 opacity-70"
              >
                <h3 className="font-bold text-foreground">{module.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {module.description}
                </p>
                <Badge variant="neutral" className="mt-3">
                  <Clock className="size-3" />
                  Coming soon
                </Badge>
              </Card>
            ))}
          </div>
        </section>
      </PageContainer>
    </div>
  );
}
