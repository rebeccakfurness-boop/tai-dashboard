import type { ChecklistItem } from "./types";

export const dataChecklist: ChecklistItem[] = [
  { label: "Full risk address", detail: "Street address, suburb, city and postcode" },
  { label: "Client / insured legal name" },
  { label: "Broker and brokerage name" },
  { label: "Sum insured (building, contents, business interruption as applicable)" },
  { label: "Construction type and roof/wall cladding" },
  { label: "Year built and any significant renovations" },
  { label: "Occupancy / use of the property" },
  { label: "Occupied, unoccupied or vacant status" },
  { label: "Claims history (last 5 years)" },
  { label: "Current insurer and expiring terms, if a renewal or replacement" },
  { label: "Any known hazards", detail: "Flood, slip, coastal erosion, seismic" },
  { label: "Requested policy start date" },
];
