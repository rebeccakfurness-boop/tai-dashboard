import type { ProcessStep, TravelLink } from "./types";

/**
 * Starter/template content. Replace once the Travel process document
 * is supplied — structure mirrors the Property process.
 */
export const travelProcessStatus: "final" | "draft" = "draft";

export const travelLinks: TravelLink[] = [
  {
    label: "IHQ",
    url: "https://www.ihq.co.nz/",
    description: "Travel assistance and emergency medical coordination.",
  },
  {
    label: "SafeTravel",
    url: "https://www.safetravel.govt.nz/",
    description: "NZ Government travel advisories by destination.",
  },
  {
    label: "IATA Airline Search",
    url: "https://www.iata.org/en/about/members/airline-list/",
    description: "Find an airline's official contact and office details.",
  },
];

export const travelProcessSteps: ProcessStep[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    summary: "Purpose and scope of the Travel quotation process.",
    body: [
      "This section will mirror the Property Product Quotation Process once the Travel process document is supplied. It covers how Travel Insurance quotations are handled from request through to issue.",
    ],
  },
  {
    id: "process-summary",
    title: "2. Process Summary",
    summary: "The end-to-end flow for a Travel quote.",
    body: [
      "Pending the finalized document — outline below is a placeholder based on standard Travel underwriting practice and should be replaced with TAI's actual process.",
    ],
    bullets: [
      "Receive the request and confirm broker authority",
      "Confirm traveller details, destination(s) and trip dates",
      "Check SafeTravel advisories for the destination",
      "Rate the risk and prepare the quotation",
      "Issue the quote to the broker",
    ],
  },
  {
    id: "quote-register",
    title: "3. Quote Register",
    summary: "Recording every Travel quote issued.",
    body: [
      "Travel quotes should be logged using the same Quote Register principles as Property — see the Property Process tab, Step 10.",
    ],
  },
];
