import { PageHeader, PageContainer } from "@/components/page-header";
import { NamingConventionTable } from "@/components/naming-convention-table";
import { BrokerList } from "@/components/broker-list";
import { OnboardingChecklist } from "@/components/onboarding-checklist";
import { DraftBadge } from "@/components/draft-badge";
import { emailFolderStructure, emailTips, emailGuidelinesStatus } from "@/content/emailGuidelines";
import { brokers, brokersStatus } from "@/content/brokers";
import { namingConventionsStatus } from "@/content/namingConventions";
import { resourcesNav } from "@/lib/nav";

function SectionHeading({
  id,
  title,
  status,
}: {
  id: string;
  title: string;
  status?: "final" | "draft";
}) {
  return (
    <div className="mb-4 flex scroll-mt-24 flex-wrap items-center justify-between gap-3" id={id}>
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      {status === "draft" && <DraftBadge />}
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <div>
      <PageHeader
        icon={resourcesNav.icon}
        eyebrow="Resources"
        title="Shared Resources"
        description="Naming conventions, inbox organisation, the broker list, and a guided checklist that ties everything together for new starters."
      />
      <PageContainer>
        <div className="space-y-14">
          <section>
            <SectionHeading
              id="naming-conventions"
              title="File & Folder Naming Conventions"
              status={namingConventionsStatus}
            />
            <p className="mb-5 max-w-2xl text-[15px] leading-relaxed text-muted">
              Every quote file and folder follows the same structure, so any team
              member can find it instantly. Use the copy buttons to paste straight
              into Outlook or OneDrive.
            </p>
            <NamingConventionTable />
          </section>

          <section id="email" className="scroll-mt-24">
            <SectionHeading
              id="email-heading"
              title="Email Inbox Organisation"
              status={emailGuidelinesStatus}
            />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-background">
                    <tr>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Folder</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Use for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {emailFolderStructure.map((f) => (
                      <tr key={f.folder}>
                        <td className="whitespace-nowrap px-4 py-3 font-mono text-xs font-medium text-brand-600">
                          {f.folder}
                        </td>
                        <td className="px-4 py-3 text-muted">{f.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="space-y-2.5">
                {emailTips.map((tip, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground/90"
                  >
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="brokers" className="scroll-mt-24">
            <SectionHeading id="brokers-heading" title="Broker List" status={brokersStatus} />
            <BrokerList brokers={brokers} />
          </section>

          <section id="onboarding" className="scroll-mt-24">
            <SectionHeading id="onboarding-heading" title="New Starter Onboarding Checklist" />
            <p className="mb-5 max-w-2xl text-[15px] leading-relaxed text-muted">
              A guided path through everything in this dashboard. Progress is saved
              in your browser, so it&apos;s here whenever you come back.
            </p>
            <OnboardingChecklist />
          </section>
        </div>
      </PageContainer>
    </div>
  );
}
