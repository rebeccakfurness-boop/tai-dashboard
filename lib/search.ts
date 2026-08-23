import Fuse from "fuse.js";
import { allNavItems } from "./nav";
import { propertyProcessSteps } from "@/content/propertyProcess";
import floodMappingData from "@/content/floodMapping.json";
import { propertyReferenceTools } from "@/content/referenceTools";
import { guidanceItems } from "@/content/guidance";
import { travelLinks, travelProcessSteps } from "@/content/travelProcess";
import type { FloodRegion } from "@/content/types";

export type SearchRecord = {
  id: string;
  title: string;
  breadcrumb: string;
  description: string;
  href: string;
  group: string;
  external?: boolean;
};

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildIndex(): SearchRecord[] {
  const records: SearchRecord[] = [];

  for (const item of allNavItems) {
    records.push({
      id: `nav-${item.href}`,
      title: item.label,
      breadcrumb: item.label,
      description: item.description,
      href: item.href,
      group: "Navigation",
    });
  }

  for (const step of propertyProcessSteps) {
    records.push({
      id: `property-process-${step.id}`,
      title: step.title,
      breadcrumb: `Property > Process > ${step.title}`,
      description: step.summary,
      href: `/property/process#${step.id}`,
      group: "Property Process",
    });
  }

  const regions = (floodMappingData as { floodMappingRegions: FloodRegion[] })
    .floodMappingRegions;
  for (const region of regions) {
    const slug = slugify(region.region);
    records.push({
      id: `flood-${slug}`,
      title: region.region,
      breadcrumb: `Property > Flood Mapping > ${region.region}`,
      description:
        region.links.length > 0
          ? region.links.map((l) => l.label).join(", ")
          : region.notes || "No mapping tool published",
      href: `/property/flood-mapping#${slug}`,
      group: "Flood Mapping",
    });
    for (const link of region.links) {
      records.push({
        id: `flood-link-${slug}-${slugify(link.label)}`,
        title: link.label,
        breadcrumb: `Property > Flood Mapping > ${region.region}`,
        description: link.url,
        href: link.url,
        group: "Flood Mapping",
        external: true,
      });
    }
  }

  for (const tool of propertyReferenceTools) {
    records.push({
      id: `ref-tool-${slugify(tool.name)}`,
      title: tool.name,
      breadcrumb: `Property > Reference Tools > ${tool.name}`,
      description: tool.description,
      href: tool.url,
      group: "Reference Tools",
      external: true,
    });
  }

  for (const item of guidanceItems) {
    records.push({
      id: `guidance-${item.id}`,
      title: item.trigger,
      breadcrumb: `Property > Guidance > ${item.trigger}`,
      description: item.guidance,
      href: `/property/guidance#${item.id}`,
      group: "Guidance",
    });
  }

  for (const step of travelProcessSteps) {
    records.push({
      id: `travel-process-${step.id}`,
      title: step.title,
      breadcrumb: `Travel > ${step.title}`,
      description: step.summary,
      href: `/travel#${step.id}`,
      group: "Travel",
    });
  }

  for (const link of travelLinks) {
    records.push({
      id: `travel-link-${slugify(link.label)}`,
      title: link.label,
      breadcrumb: `Travel > ${link.label}`,
      description: link.description,
      href: link.url,
      group: "Travel",
      external: true,
    });
  }

  records.push(
    {
      id: "resources-naming",
      title: "File & Folder Naming Conventions",
      breadcrumb: "Resources > Naming Conventions",
      description: "Quote Type / Client Name / Address / Broker structure",
      href: "/resources#naming-conventions",
      group: "Resources",
    },
    {
      id: "resources-email",
      title: "Email Inbox Organisation",
      breadcrumb: "Resources > Email Inbox Organisation",
      description: "Folder structure and inbox management guidelines",
      href: "/resources#email",
      group: "Resources",
    },
    {
      id: "resources-brokers",
      title: "Broker List",
      breadcrumb: "Resources > Broker List",
      description: "Alphabetical list of authorized broker partners",
      href: "/resources#brokers",
      group: "Resources",
    },
    {
      id: "resources-onboarding",
      title: "New Starter Onboarding Checklist",
      breadcrumb: "Resources > Onboarding Checklist",
      description: "Guided path through every part of the dashboard",
      href: "/resources#onboarding",
      group: "Resources",
    },
  );

  return records;
}

export const searchIndex = buildIndex();

export const fuse = new Fuse(searchIndex, {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "breadcrumb", weight: 0.3 },
    { name: "description", weight: 0.2 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
});

export function search(query: string, limit = 8): SearchRecord[] {
  if (!query.trim()) return [];
  return fuse
    .search(query)
    .slice(0, limit)
    .map((r) => r.item);
}
