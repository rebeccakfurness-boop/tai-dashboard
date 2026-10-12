import type { FlowNode, FlowEdge } from "@/components/travel-flow-diagram";

export const quoteProcessFlowNodes: FlowNode[] = [
  {
    id: "step1",
    title: "Steps 1 and 2",
    subtitle: "Read and sort. UW or you?",
    type: "highlight",
    x: 20,
    y: 20,
    w: 190,
    h: 90,
  },
  {
    id: "step2",
    title: "Step 3",
    subtitle: "Log in. Go to IHQ.",
    type: "decision",
    x: 230,
    y: 20,
    w: 190,
    h: 90,
  },
  {
    id: "step3",
    title: "Steps 4 and 5",
    subtitle: "Onboarding Portal. Create Quote.",
    type: "decision",
    x: 440,
    y: 20,
    w: 190,
    h: 90,
  },
  {
    id: "step4",
    title: "Steps 6 to 14",
    subtitle: "Enter the quote. Broker, policy holder, travel days.",
    type: "decision",
    x: 650,
    y: 20,
    w: 190,
    h: 90,
  },
  {
    id: "step5",
    title: "Steps 15 and 16",
    subtitle: "Notes, then submit. Claims and notes box.",
    type: "decision",
    x: 860,
    y: 20,
    w: 190,
    h: 90,
  },
  {
    id: "step6",
    title: "Steps 17 and 18",
    subtitle: "Upload and hand over. UW is emailed.",
    type: "highlight",
    x: 1070,
    y: 20,
    w: 190,
    h: 90,
  },
];

export const quoteProcessFlowEdges: FlowEdge[] = [
  { from: "step1", to: "step2", fromSide: "right", toSide: "left" },
  { from: "step2", to: "step3", fromSide: "right", toSide: "left" },
  { from: "step3", to: "step4", fromSide: "right", toSide: "left" },
  { from: "step4", to: "step5", fromSide: "right", toSide: "left" },
  { from: "step5", to: "step6", fromSide: "right", toSide: "left" },
];

export const quoteProcessFlowLegend = [
  { type: "highlight" as const, label: "Start and finish" },
  { type: "decision" as const, label: "In between" },
];

export const quoteClaimsFlowNodes: FlowNode[] = [
  { id: "oneDrive", title: "OneDrive", type: "highlight", x: 20, y: 20, w: 150, h: 60 },
  { id: "workingFiles", title: "Working files", type: "decision", x: 190, y: 20, w: 150, h: 60 },
  { id: "ah", title: "A&H", type: "decision", x: 360, y: 20, w: 150, h: 60 },
  { id: "claimReport", title: "Claim report", type: "decision", x: 530, y: 20, w: 150, h: 60 },
  {
    id: "latest",
    title: "GB Claim Report - Date",
    type: "uw",
    x: 700,
    y: 20,
    w: 190,
    h: 60,
  },
];

export const quoteClaimsFlowEdges: FlowEdge[] = [
  { from: "oneDrive", to: "workingFiles", fromSide: "right", toSide: "left" },
  { from: "workingFiles", to: "ah", fromSide: "right", toSide: "left" },
  { from: "ah", to: "claimReport", fromSide: "right", toSide: "left" },
  { from: "claimReport", to: "latest", fromSide: "right", toSide: "left" },
];

export const quoteClaimsFlowLegend = [
  { type: "highlight" as const, label: "Folder path" },
  { type: "uw" as const, label: "Open this one" },
];
