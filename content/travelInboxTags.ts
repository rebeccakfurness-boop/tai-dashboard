export type InboxTag = {
  label: string;
  description: string;
};

export const keyNote =
  "Everyone to please upload the email as a document onto IHQ, so all correspondence for a case is in one place, and if information needs to be found, it is all there. This solves the problem of searching through emails to find information.";

export const categoryTags: InboxTag[] = [
  { label: "Quote", description: "Quote to be processed" },
  { label: "Closing", description: "Closing to be checked & filed" },
  { label: "Remittance", description: "Remittance to be filed" },
  { label: "Query", description: "General query" },
  { label: "Claim", description: "For anything related to claims" },
];

export const actorTags: InboxTag[] = [
  { label: "Sam", description: "Action specific to Sam" },
  { label: "Underwriter", description: "Underwriter action required" },
  { label: "Underwriter Support", description: "Rebecca / Jen to action" },
];

export const actorTagsNote =
  "Alongside the category, every email also gets tagged with who needs to action it — so there's clarity on ownership and no double handling.";

/**
 * Two tags seen in the inbox screenshot that aren't in the documented
 * category list above — "Action with Closing" and "IHQ Action Needed".
 * Left out here since there's no description to go with them yet; add
 * them to categoryTags above once confirmed.
 */
export const unconfirmedTags = ["Action with Closing", "IHQ Action Needed"];
