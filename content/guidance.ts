import type { GuidanceItem } from "./types";

export const guidanceStatus: "final" | "draft" = "draft";

export const guidanceItems: GuidanceItem[] = [
  {
    id: "sum-insured-threshold",
    trigger: "Sum insured is over $3.5M",
    guidance:
      "Refer the risk to a senior underwriter before quoting. Large sum insured risks fall outside standard delegated authority and need a second set of eyes on rating and terms.",
    refersTo: "Underwriting Guide — Section 4, Referral Thresholds",
    severity: "critical",
  },
  {
    id: "vacant-property",
    trigger: "Property is vacant or unoccupied",
    guidance:
      "Confirm how long the property has been vacant and why. Vacant property carries higher fire, malicious damage and water damage risk — apply the vacant property loading and consider a maximum vacancy period condition.",
    refersTo: "Underwriting Guide — Section 6, Occupancy Risk",
    severity: "caution",
  },
  {
    id: "flood-boundary",
    trigger: "Address sits near a flood hazard boundary on the mapping tool",
    guidance:
      "Don't rely on the map alone when a property sits right on a hazard line. Zoom in, check the address point precisely, and if there's still doubt, refer to a senior underwriter rather than guessing.",
    refersTo: "Property Process — Step 8, Flood Mapping Completion Guide",
    refersToHref: "/property/process#flood-mapping-guide",
    severity: "caution",
  },
  {
    id: "no-flood-tool",
    trigger: "Region has no published flood mapping tool (e.g. Palmerston North, Dunedin)",
    guidance:
      "Use the closest available regional council hazard information or LIM data as a fallback, and note in the worksheet that no live mapping tool was available. Consider a specific flood exclusion or referral if hazard information can't be confirmed.",
    refersTo: "Property Process — Step 8, Flood Mapping Completion Guide",
    refersToHref: "/property/process#flood-mapping-guide",
    severity: "caution",
  },
  {
    id: "construction-non-standard",
    trigger: "Non-standard construction (e.g. concrete tilt, tin/timber, non-consented additions)",
    guidance:
      "Non-standard or non-consented construction should be referred before quoting. Ask the broker for consent documentation where renovations are recent.",
    refersTo: "Underwriting Guide — Section 3, Construction Risk",
    severity: "caution",
  },
  {
    id: "claims-history",
    trigger: "Two or more claims in the last 5 years",
    guidance:
      "Request full claims details from the broker (cause, amount, whether repairs were completed) before rating. Consider a claims loading or excess adjustment.",
    refersTo: "Underwriting Guide — Section 7, Claims Experience",
    severity: "caution",
  },
  {
    id: "missing-broker-authority",
    trigger: "Broker is not on the current list of authorized broker partners",
    guidance:
      "Do not quote. Check the broker against the current broker list on the Resources tab and escalate to management if the broker isn't recognised.",
    refersTo: "Resources — Broker List",
    refersToHref: "/resources#brokers",
    severity: "critical",
  },
  {
    id: "renewal-material-change",
    trigger: "Renewal shows a material change since last term (occupancy, sum insured, construction)",
    guidance:
      "Treat as a full re-underwrite rather than a straight renewal — re-run the data checklist and flood mapping check as if it were new business.",
    refersTo: "Property Process — Step 3, When Used",
    refersToHref: "/property/process#when-used",
    severity: "info",
  },
];
