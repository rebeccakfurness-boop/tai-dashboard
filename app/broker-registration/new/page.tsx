import { PageHeader, PageContainer } from "@/components/page-header";
import { NewRegistrationForm } from "@/components/broker-registration/new-registration-form";
import { brokerRegistrationGroup } from "@/lib/nav";

export default function NewRegistrationPage() {
  return (
    <div>
      <PageHeader
        icon={brokerRegistrationGroup.items[0].icon}
        eyebrow="Broker Registration"
        title="New Registration"
        description="Paste a broker's request, review what the app reads out of it, then confirm to add them to the register."
      />
      <PageContainer>
        <NewRegistrationForm />
      </PageContainer>
    </div>
  );
}
