import type { FlowNode, FlowEdge } from "@/components/travel-flow-diagram";

export const travelFlowNodes: FlowNode[] = [
  // Top trigger row
  { id: "personalEmail", title: "Personal email", subtitle: "Email lands here — if sent to personal", type: "start", x: 1000, y: 16, w: 190, h: 56 },
  { id: "moveToInbox", title: "Move to travel inbox", subtitle: "Categorise accordingly", type: "admin", x: 760, y: 16, w: 190, h: 56 },
  { id: "inboundEmail", title: "Inbound email", subtitle: "In the Travel inbox", type: "start", x: 510, y: 16, w: 190, h: 56 },

  // Branch into Quote / Query
  { id: "quoteStart", title: "Quote", type: "start", x: 130, y: 130, w: 160, h: 50 },
  { id: "queryStart", title: "Query", type: "start", x: 760, y: 130, w: 160, h: 50 },

  // Quote column
  { id: "adminPickup", title: "Admin pick-up", subtitle: "Rebecca or Jen", type: "admin", x: 110, y: 222, w: 200, h: 56 },
  { id: "inputIHQ", title: "Input into IHQ", subtitle: "Include notes in submission", type: "admin", x: 110, y: 312, w: 200, h: 56 },
  { id: "uploadDocs", title: "Upload all documents", subtitle: "Into customer file", type: "admin", x: 110, y: 402, w: 200, h: 56 },
  { id: "notifyEmail", title: "Notification email", subtitle: "travel@tai.co.nz — tagged UW + IHQ", type: "admin", x: 110, y: 492, w: 200, h: 56 },
  { id: "uwReview", title: "Underwriter review", subtitle: "Quote sent via IHQ to customer", type: "uw", x: 110, y: 582, w: 200, h: 56 },

  // Query branch
  { id: "existingFile", title: "Existing client file", type: "start", x: 650, y: 222, w: 190, h: 50 },
  { id: "newFile", title: "New", type: "start", x: 900, y: 222, w: 150, h: 50 },
  { id: "answer", title: "Answer", type: "admin", x: 650, y: 312, w: 190, h: 50 },
  { id: "filedComplete1", title: "Filed in Complete", subtitle: "Once answered", type: "admin", x: 890, y: 312, w: 170, h: 56 },
  { id: "emailComplete", title: "Email goes into Complete", type: "admin", x: 550, y: 402, w: 200, h: 50 },
  { id: "emailFiledIHQ", title: "Email filed in client file", subtitle: "On IHQ", type: "admin", x: 800, y: 402, w: 200, h: 56 },

  // Shared closing sequence
  { id: "clientAccepts", title: "Client accepts quote", subtitle: "or broker sends closing without quote acceptance", type: "start", x: 30, y: 710, w: 210, h: 66 },
  { id: "brokerCloses", title: "Broker sends closing", type: "start", x: 270, y: 710, w: 190, h: 50 },
  { id: "adminReviews", title: "Admin reviews closing", type: "admin", x: 490, y: 710, w: 190, h: 50 },

  { id: "noMatch", title: "Closing does not match", subtitle: "Load to policy register", type: "admin", x: 390, y: 810, w: 200, h: 56 },
  { id: "matches", title: "Bound, closing match", subtitle: "File into IHQ", type: "admin", x: 670, y: 810, w: 200, h: 56 },
  { id: "uwActionsNotes", title: "UW actions notes", subtitle: "Confirms bound OK", type: "uw", x: 390, y: 900, w: 200, h: 56 },
  { id: "remittance", title: "Remittance received", subtitle: "Checked, filed into OneDrive", type: "admin", x: 670, y: 900, w: 200, h: 56 },

  // Standalone — not yet wired into the flow above; its own process isn't defined yet.
  { id: "inboundClaimsEmail", title: "Inbound claims email", subtitle: "Underwriter to action, specific process flow to be determined", type: "uw", x: 940, y: 888, w: 260, h: 86 },
];

export const travelFlowEdges: FlowEdge[] = [
  { from: "personalEmail", to: "moveToInbox", fromSide: "left", toSide: "right" },
  { from: "moveToInbox", to: "inboundEmail", fromSide: "left", toSide: "right" },
  { from: "inboundEmail", to: "quoteStart", fromSide: "bottom", toSide: "top" },
  { from: "inboundEmail", to: "queryStart", fromSide: "bottom", toSide: "top" },

  { from: "quoteStart", to: "adminPickup", fromSide: "bottom", toSide: "top" },
  { from: "adminPickup", to: "inputIHQ", fromSide: "bottom", toSide: "top" },
  { from: "inputIHQ", to: "uploadDocs", fromSide: "bottom", toSide: "top" },
  { from: "uploadDocs", to: "notifyEmail", fromSide: "bottom", toSide: "top" },
  { from: "notifyEmail", to: "uwReview", fromSide: "bottom", toSide: "top" },
  { from: "uwReview", to: "clientAccepts", fromSide: "bottom", toSide: "top" },

  { from: "clientAccepts", to: "brokerCloses", fromSide: "right", toSide: "left" },
  { from: "brokerCloses", to: "adminReviews", fromSide: "right", toSide: "left" },
  { from: "adminReviews", to: "noMatch", fromSide: "bottom", toSide: "top", label: "Does not match" },
  { from: "adminReviews", to: "matches", fromSide: "bottom", toSide: "top", label: "Matches" },
  { from: "noMatch", to: "uwActionsNotes", fromSide: "bottom", toSide: "top" },
  { from: "uwActionsNotes", to: "matches", fromSide: "right", toSide: "left" },
  { from: "matches", to: "remittance", fromSide: "bottom", toSide: "top" },

  { from: "queryStart", to: "existingFile", fromSide: "bottom", toSide: "top" },
  { from: "queryStart", to: "newFile", fromSide: "bottom", toSide: "top" },
  { from: "existingFile", to: "answer", fromSide: "bottom", toSide: "top" },
  { from: "newFile", to: "filedComplete1", fromSide: "bottom", toSide: "top" },
  { from: "answer", to: "emailComplete", fromSide: "bottom", toSide: "top" },
  { from: "answer", to: "emailFiledIHQ", fromSide: "bottom", toSide: "top" },
];
