import { PageHeader, PageContainer } from "@/components/page-header";
import { TrainingModuleViewer } from "@/components/training/module-viewer";
import { closingsLessons } from "@/content/travelTraining";
import { travelGroup } from "@/lib/nav";

export default function ClosingsTrainingPage() {
  return (
    <div>
      <PageHeader
        icon={travelGroup.items[2].icon}
        eyebrow="Travel > Training"
        title="Closings"
        description="A beginner's guide to checking, logging and filing closings. No experience needed."
      />
      <PageContainer>
        <TrainingModuleViewer lessons={closingsLessons} />
      </PageContainer>
    </div>
  );
}
