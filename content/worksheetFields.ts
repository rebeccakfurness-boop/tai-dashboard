import type { WorksheetField } from "./types";

export const worksheetFields: WorksheetField[] = [
  {
    field: "Risk Address",
    description: "Full physical address exactly as it appears on the title or rating information.",
  },
  {
    field: "Construction",
    description: "Primary wall and roof material — drives the base rate and any construction loading.",
  },
  {
    field: "Year Built",
    description: "Used to assess condition, wiring/plumbing age, and seismic performance expectations.",
  },
  {
    field: "Occupancy Status",
    description: "Owner-occupied, tenanted, unoccupied or vacant — vacant risks require additional referral.",
  },
  {
    field: "Sum Insured",
    description: "Confirm basis (replacement vs indemnity) and check against the sum insured threshold guidance.",
  },
  {
    field: "Flood Hazard Result",
    description: "Outcome from the regional flood mapping tool — paste the classification and date checked.",
  },
  {
    field: "Claims History",
    description: "Number and value of claims in the last 5 years, and whether any remain open.",
  },
  {
    field: "Rating and Loadings Applied",
    description: "Base rate plus any loadings (construction, occupancy, claims, flood) with a one-line rationale for each.",
  },
  {
    field: "Underwriter Sign-off",
    description: "Name and date — required before a quote can be prepared and issued.",
  },
];
