import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { PageContainer } from "@/components/page-header";
import { QuickLinkCard } from "@/components/quick-link-card";
import { StaggerGrid, StaggerItem } from "@/components/stagger-grid";
import { quickLinks } from "@/content/quickLinks";
import { propertyGroup, travelNav, resourcesNav } from "@/lib/nav";

const sections = [
  {
    ...propertyGroup,
    blurb:
      "Everything for a Property quotation: the full process, every regional flood mapping tool, reference lookups, and troubleshooting guidance.",
  },
  {
    label: travelNav.label,
    href: travelNav.href,
    icon: travelNav.icon,
    blurb:
      "IHQ, SafeTravel, airline contacts and the Travel quotation process, in one place.",
    items: [],
  },
  {
    label: resourcesNav.label,
    href: resourcesNav.href,
    icon: resourcesNav.icon,
    blurb:
      "Naming conventions, inbox organisation, the broker list, and a guided checklist for new starters.",
    items: [],
  },
];

export default function Home() {
  return (
    <div>
      <div className="border-b border-border bg-gradient-to-b from-brand-100/70 to-surface">
        <PageContainer>
          <div className="max-w-2xl animate-rise">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-brand-300 bg-surface px-3 py-1 text-xs font-semibold text-brand-700">
              <Sparkles className="size-3.5" />
              The underwriting team&apos;s one-stop shop
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to quote, in one place.
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              Process guides, flood mapping for every region, reference tools and
              troubleshooting guidance — all searchable from anywhere with{" "}
              <kbd className="rounded border border-border-strong bg-surface px-1.5 py-0.5 text-[12px] font-semibold text-foreground">
                ⌘K
              </kbd>
              . New here? Start with the{" "}
              <Link
                href="/resources#onboarding"
                className="font-semibold text-brand-600 underline decoration-brand-300 underline-offset-2 hover:text-brand-700"
              >
                onboarding checklist
              </Link>
              .
            </p>
          </div>
        </PageContainer>
      </div>

      <PageContainer>
        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
            Jump back in
          </h2>
          <StaggerGrid className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <StaggerItem key={link.label}>
                <QuickLinkCard link={link} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
            Explore the dashboard
          </h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.href}
                  className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-navy-500 text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {section.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {section.blurb}
                  </p>

                  {"items" in section && section.items.length > 0 && (
                    <ul className="mt-4 space-y-1.5">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="focus-ring group flex items-center gap-1.5 rounded-md py-0.5 text-sm text-foreground/80 hover:text-brand-600"
                          >
                            <ChevronRight className="size-3.5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href={section.href}
                    className="focus-ring group mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Open {section.label}
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </PageContainer>
    </div>
  );
}
