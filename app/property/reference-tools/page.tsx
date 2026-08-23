import { ArrowUpRight } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { propertyReferenceTools } from "@/content/referenceTools";
import { propertyGroup } from "@/lib/nav";

export default function ReferenceToolsPage() {
  return (
    <div>
      <PageHeader
        icon={propertyGroup.items[2].icon}
        eyebrow="Property"
        title="Property Reference Tools"
        description="Quick access to the lookups the team uses every day — postcodes, maps, and property information."
      />
      <PageContainer>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {propertyReferenceTools.map((tool) => (
            <a
              key={tool.url}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
            >
              <span className="inline-flex w-fit rounded-full bg-brand-100 px-2.5 py-0.5 text-[11px] font-semibold text-brand-700">
                {tool.tag}
              </span>
              <div className="mt-3 flex items-center gap-1.5">
                <h3 className="font-bold text-foreground">{tool.name}</h3>
                <ArrowUpRight className="size-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {tool.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-border-strong bg-surface/60 p-5 text-sm text-muted">
          <span className="font-semibold text-foreground">Coming later: </span>
          an embedded property photo search is planned as a phase 2 enhancement
          once the tool is selected.
        </div>
      </PageContainer>
    </div>
  );
}
