import type { ProcessStep } from "./types";

/**
 * Starter/template content. Replace with the text of the finalized
 * "Property Product Quotation Process" document once supplied —
 * this file is the single source of truth for the Process page.
 */
export const propertyProcessStatus: "final" | "draft" = "draft";

export const propertyProcessSteps: ProcessStep[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    summary:
      "Purpose and scope of the Property Product Quotation Process.",
    body: [
      "This process sets out the standard steps for handling a Property quotation request from first receipt through to the quote being issued and logged. It exists to keep quoting consistent, auditable, and fast — regardless of who on the team picks up the file.",
      "It applies to every new business Property quote, and to any renewal or mid-term adjustment that is referred back to underwriting for re-rating.",
    ],
  },
  {
    id: "products",
    title: "2. Products",
    summary: "The Specialist Property products this process covers.",
    body: [
      "TAI's Specialist Property line provides cover placed through Lloyd's of London, distributed exclusively through broker partners. This process applies to all Specialist Property quotations issued under that facility.",
    ],
    bullets: [
      "Commercial property — material damage and business interruption",
      "Residential / lifestyle property outside standard market appetite",
      "Vacant and unoccupied property",
      "Property in transition (renovation, construction, change of use)",
    ],
  },
  {
    id: "when-used",
    title: "3. When Used",
    summary: "The triggers that put a submission on this process.",
    body: [
      "Follow this process whenever a broker submits a new Property risk for quotation, and whenever an existing policy needs underwriting input beyond a straightforward renewal — for example a material change in sum insured, occupancy, or construction.",
    ],
    bullets: [
      "New business submissions from broker partners",
      "Renewals referred for re-underwriting",
      "Mid-term adjustments that change the risk profile",
      "Reinstatements after a lapse",
    ],
  },
  {
    id: "process-summary",
    title: "4. Process Summary",
    summary: "The end-to-end flow, at a glance.",
    body: [
      "The steps below are the backbone of every Property quote. Each is expanded later in this document — use the sidebar or search to jump straight to a step.",
    ],
    bullets: [
      "Receive the submission and confirm broker authority",
      "Log the file using the standard naming convention",
      "Work through the data checklist and flag any gaps with the broker",
      "Run the flood mapping check for the risk address",
      "Complete the underwriting worksheet",
      "Prepare the quotation and supporting documents",
      "Issue the quote to the broker",
      "Record the quote in the Quote Register",
    ],
  },
  {
    id: "naming-conventions",
    title: "5. Naming Conventions",
    summary: "How files and folders should be named — see the reference table below.",
    body: [
      "Every quote file and folder is named using the same four-part structure so any team member can locate it instantly. The full breakdown with copy-paste examples is available here and on the Resources tab.",
    ],
  },
  {
    id: "data-checklist",
    title: "6. Data Checklist",
    summary: "The minimum data required before a quote can be rated.",
    body: [
      "Do not proceed to the underwriting worksheet until every item below is confirmed. Missing data is the single biggest cause of re-work later in the process — chase it from the broker up front.",
    ],
  },
  {
    id: "worksheet-guide",
    title: "7. Underwriting Worksheet — Field Guide",
    summary: "What each field on the worksheet means and how to complete it.",
    body: [
      "The underwriting worksheet is the system of record for how a risk was rated. Complete every field — an incomplete worksheet cannot be signed off.",
    ],
  },
  {
    id: "flood-mapping-guide",
    title: "8. Flood Mapping — Completion Guide",
    summary: "How to run and record the flood mapping check for a risk address.",
    body: [
      "Every Property risk address must be checked against the relevant regional flood mapping tool before a quote is issued. Use the Flood Mapping tab to find the correct regional tool.",
    ],
    bullets: [
      "Identify the region the risk address falls in using the Flood Mapping tab",
      "Search the address in the regional tool and record the result (including a screenshot where the tool supports it)",
      "Note the flood hazard classification returned and any model settings used",
      "Where the result is unclear or the address sits near a hazard boundary, refer to a senior underwriter before quoting",
      "Where no regional tool is available (e.g. Palmerston North, Dunedin), record this and refer to the Underwriting Guidance tab for the fallback approach",
      "Attach the flood mapping result to the file using the standard naming convention",
    ],
  },
  {
    id: "quote-preparation",
    title: "9. Quote Preparation",
    summary: "Drafting and issuing the quotation to the broker.",
    body: [
      "Once the worksheet is complete and signed off, prepare the quotation using the current quote template. Double-check sums insured, excesses, endorsements and subjectivities against the worksheet before sending.",
    ],
    bullets: [
      "Use the current quote template — do not amend an old quote in place",
      "Cross-check terms against the completed underwriting worksheet",
      "Set the quote validity period per current underwriting guidelines",
      "Save the final quote to the file using the standard naming convention",
      "Send to the broker and log the date issued",
    ],
  },
  {
    id: "quote-register",
    title: "10. Quote Register",
    summary: "Recording every quote issued for audit and reporting.",
    body: [
      "Every quotation issued — whether it converts to a bound policy or not — is logged in the Quote Register. This is the team's audit trail and the source for management information reporting, so accuracy matters.",
    ],
    bullets: [
      "Log the quote reference, broker, insured, sum insured and premium",
      "Record the date issued and the quote validity expiry",
      "Update the register when a quote is bound, declined or lapses",
      "Reconcile the register against issued quotes periodically",
    ],
  },
];
