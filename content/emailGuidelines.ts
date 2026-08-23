export const emailGuidelinesStatus: "final" | "draft" = "draft";

export const emailFolderStructure = [
  { folder: "01 - Action Required", detail: "New submissions and anything awaiting a response from you." },
  { folder: "02 - Awaiting Broker", detail: "Sent to the broker, waiting on their reply." },
  { folder: "03 - Quoted", detail: "Quote issued, awaiting bind instruction." },
  { folder: "04 - Bound", detail: "Confirmed on risk — archived for the file." },
  { folder: "05 - Declined / No Further Action", detail: "Closed out, kept for audit trail." },
];

export const emailTips = [
  "Use the standard file naming convention in the subject line so quotes are searchable at a glance.",
  "Move actioned emails out of the inbox daily — the inbox itself should only ever contain items still awaiting action.",
  "Attach the underwriting worksheet and flood mapping result to the file, not just the email thread.",
  "Flag anything referred to a senior underwriter so it doesn't get lost in a folder.",
];
