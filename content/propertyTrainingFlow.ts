import type { FlowNode, FlowEdge } from "@/components/travel-flow-diagram";

export const propertyTrainingFlowNodes: FlowNode[] = [
  {
    id: "process-overview",
    title: "Property Process",
    subtitle: "The full process document",
    type: "decision",
    href: "/property/training/process",
    x: 530,
    y: 20,
    w: 220,
    h: 70,
  },

  { id: "renewal", title: "Renewal Quote", type: "start", pending: true, x: 20, y: 150, w: 190, h: 70 },
  { id: "mortgagee-sale", title: "Mortgagee Sale Quote", type: "start", pending: true, x: 230, y: 150, w: 190, h: 70 },
  { id: "new-business", title: "New Business Quote", type: "start", pending: true, x: 440, y: 150, w: 190, h: 70 },
  {
    id: "closing",
    title: "Closing",
    subtitle: "Checking, then schedule and COC",
    type: "start",
    pending: true,
    x: 650,
    y: 150,
    w: 190,
    h: 70,
  },
  {
    id: "referral-beazley",
    title: "Referral to Beazley",
    subtitle: "How and when",
    type: "start",
    pending: true,
    x: 860,
    y: 150,
    w: 190,
    h: 70,
  },

  {
    id: "nb-standard",
    title: "NB",
    subtitle: "Social housing, vacant, rental property",
    type: "admin",
    pending: true,
    x: 20,
    y: 280,
    w: 150,
    h: 70,
  },
  { id: "endorsement", title: "Endorsement", type: "admin", pending: true, x: 185, y: 280, w: 150, h: 70 },
  { id: "airbnb", title: "AirBNB", type: "admin", pending: true, x: 350, y: 280, w: 150, h: 70 },
  { id: "body-corporate", title: "Body Corporate", type: "admin", pending: true, x: 515, y: 280, w: 150, h: 70 },
  { id: "ll", title: "LL", type: "admin", pending: true, x: 680, y: 280, w: 150, h: 70 },
  { id: "lle", title: "LLE", type: "admin", pending: true, x: 845, y: 280, w: 150, h: 70 },
];

export const propertyTrainingFlowEdges: FlowEdge[] = [
  { from: "process-overview", to: "new-business", fromSide: "bottom", toSide: "top" },
  { from: "process-overview", to: "renewal", fromSide: "bottom", toSide: "top" },
  { from: "process-overview", to: "mortgagee-sale", fromSide: "bottom", toSide: "top" },
  { from: "process-overview", to: "closing", fromSide: "bottom", toSide: "top" },
  { from: "process-overview", to: "referral-beazley", fromSide: "bottom", toSide: "top" },

  { from: "new-business", to: "nb-standard", fromSide: "bottom", toSide: "top" },
  { from: "new-business", to: "endorsement", fromSide: "bottom", toSide: "top" },
  { from: "new-business", to: "airbnb", fromSide: "bottom", toSide: "top" },
  { from: "new-business", to: "body-corporate", fromSide: "bottom", toSide: "top" },
  { from: "new-business", to: "ll", fromSide: "bottom", toSide: "top" },
  { from: "new-business", to: "lle", fromSide: "bottom", toSide: "top" },
];

export const propertyTrainingFlowLegend = [
  { type: "decision" as const, label: "Available now, click to open" },
  { type: "start" as const, label: "Coming soon", pending: true },
];
