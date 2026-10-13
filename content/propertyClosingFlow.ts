import type { FlowNode, FlowEdge } from "@/components/travel-flow-diagram";

const STEP_LEGEND = [
  { type: "highlight" as const, label: "Trigger / key info" },
  { type: "decision" as const, label: "Decision" },
  { type: "uw" as const, label: "Continue" },
  { type: "start" as const, label: "Pathway (see next lessons)" },
];

export const closingArrivalFlowNodes: FlowNode[] = [
  {
    id: "arrival",
    title: "Closing received from the broker",
    subtitle: "A closing or a placing slip",
    type: "highlight",
    x: 20,
    y: 70,
    w: 240,
    h: 70,
  },
  { id: "decision", title: "Already bound?", type: "decision", shape: "diamond", x: 300, y: 50, w: 170, h: 110 },
  {
    id: "pathway-a",
    title: "Pathway A: already bound",
    subtitle: "Check, issue schedule and COC, then file",
    type: "uw",
    x: 510,
    y: 60,
    w: 280,
    h: 90,
  },
  {
    id: "pathway-b",
    title: "Pathway B: not bound",
    subtitle: "New business or renewal (NB / RN)",
    type: "start",
    x: 300,
    y: 210,
    w: 240,
    h: 80,
  },
  {
    id: "pathway-c",
    title: "Pathway C: not bound",
    subtitle: "Landlord policy (LL)",
    type: "start",
    x: 560,
    y: 210,
    w: 240,
    h: 80,
  },
  {
    id: "how-to-tell",
    title: "How to tell a policy is bound",
    subtitle: "It has a policy number, or its documents have been issued.",
    type: "highlight",
    x: 820,
    y: 210,
    w: 280,
    h: 80,
  },
];

export const closingArrivalFlowEdges: FlowEdge[] = [
  { from: "arrival", to: "decision", fromSide: "right", toSide: "left" },
  { from: "decision", to: "pathway-a", fromSide: "right", toSide: "left", label: "Yes" },
  { from: "decision", to: "pathway-b", fromSide: "bottom", toSide: "top", label: "No" },
  { from: "decision", to: "pathway-c", fromSide: "bottom", toSide: "top" },
];

export const closingArrivalFlowLegend = STEP_LEGEND;

export const pathwayACheckFlowNodes: FlowNode[] = [
  {
    id: "step1",
    title: "1. Upload and sort the email",
    subtitle: "Placing doc into OneDrive, email into its folder",
    type: "start",
    x: 20,
    y: 20,
    w: 260,
    h: 80,
  },
  { id: "step2", title: "2. Check the closing", subtitle: "On UW WS, TAI tab", type: "start", x: 20, y: 130, w: 260, h: 70 },
  {
    id: "decision",
    title: "Closing, dates, name match?",
    type: "decision",
    shape: "diamond",
    x: 320,
    y: 90,
    w: 180,
    h: 130,
  },
  {
    id: "step3",
    title: "3. Schedule and COC issued?",
    subtitle: "If not, issue them now",
    type: "uw",
    x: 560,
    y: 20,
    w: 260,
    h: 80,
  },
  {
    id: "step4",
    title: "4. File everything",
    subtitle: "Into the email folders and OneDrive",
    type: "uw",
    x: 560,
    y: 130,
    w: 260,
    h: 70,
  },
  {
    id: "notify-uw",
    title: "Notify the UW",
    subtitle: "They contact the broker",
    type: "warning",
    x: 320,
    y: 270,
    w: 260,
    h: 70,
  },
  {
    id: "already-bound-means",
    title: "Already bound means",
    subtitle: "A policy number, or the docs have been issued.",
    type: "highlight",
    x: 20,
    y: 270,
    w: 260,
    h: 70,
  },
];

export const pathwayACheckFlowEdges: FlowEdge[] = [
  { from: "step1", to: "step2", fromSide: "bottom", toSide: "top" },
  { from: "step2", to: "decision", fromSide: "right", toSide: "left" },
  { from: "decision", to: "step3", fromSide: "right", toSide: "left", label: "Yes" },
  { from: "step3", to: "step4", fromSide: "bottom", toSide: "top" },
  { from: "decision", to: "notify-uw", fromSide: "bottom", toSide: "top", label: "No" },
];

export const pathwayACheckFlowLegend = [
  { type: "start" as const, label: "Step" },
  { type: "decision" as const, label: "Decision" },
  { type: "uw" as const, label: "Continue" },
  { type: "warning" as const, label: "Stop, notify UW" },
  { type: "highlight" as const, label: "Key info" },
];

function pathwayCheckFlow(opts: {
  step2Title: string;
  step2Subtitle: string;
  step3Title: string;
  step3Subtitle: string;
  alsoCheckSubtitle: string;
}): { nodes: FlowNode[]; edges: FlowEdge[] } {
  return {
    nodes: [
      { id: "step1", title: "1. Open UW WS", subtitle: "Open the file", type: "start", x: 20, y: 20, w: 200, h: 70 },
      { id: "step2", title: opts.step2Title, subtitle: opts.step2Subtitle, type: "start", x: 240, y: 20, w: 220, h: 70 },
      { id: "step3", title: opts.step3Title, subtitle: opts.step3Subtitle, type: "start", x: 480, y: 20, w: 240, h: 70 },
      {
        id: "decision",
        title: "Closing, dates, name match?",
        type: "decision",
        shape: "diamond",
        x: 740,
        y: 0,
        w: 180,
        h: 120,
      },
      { id: "matches", title: "The closing matches", subtitle: "Brilliant", type: "uw", x: 960, y: 10, w: 220, h: 70 },
      {
        id: "also-check",
        title: "Also check",
        subtitle: opts.alsoCheckSubtitle,
        type: "highlight",
        x: 480,
        y: 120,
        w: 240,
        h: 80,
      },
      {
        id: "notify-uw",
        title: "Notify the UW",
        subtitle: "They contact the broker",
        type: "warning",
        x: 960,
        y: 120,
        w: 220,
        h: 80,
      },
      {
        id: "not-bound-yet",
        title: "Either way, it is not bound yet",
        subtitle: "Next: generate the policy number and bind it",
        type: "highlight",
        x: 20,
        y: 230,
        w: 420,
        h: 80,
      },
    ],
    edges: [
      { from: "step1", to: "step2", fromSide: "right", toSide: "left" },
      { from: "step2", to: "step3", fromSide: "right", toSide: "left" },
      { from: "step3", to: "decision", fromSide: "right", toSide: "left" },
      { from: "decision", to: "matches", fromSide: "right", toSide: "left", label: "Yes" },
      { from: "decision", to: "notify-uw", fromSide: "bottom", toSide: "top", label: "No" },
    ],
  };
}

export const pathwayBCheckFlow = pathwayCheckFlow({
  step2Title: "2. TAI tab",
  step2Subtitle: "Go to the TAI tab",
  step3Title: "3. Enter the closing amounts",
  step3Subtitle: "Cells D44 to D53",
  alsoCheckSubtitle: "The dates match, and the insured name is the same.",
});

export const pathwayCCheckFlow = pathwayCheckFlow({
  step2Title: "2. LL Quote page",
  step2Subtitle: "Same policy type as bound: Protect, Protect+ or Protect Prime",
  step3Title: "3. Check the closings match",
  step3Subtitle: "Cells E61 to E69",
  alsoCheckSubtitle: "The dates align, and the insured name is the same on both documents.",
});

export const pathwayCheckFlowLegend = [
  { type: "start" as const, label: "Step" },
  { type: "decision" as const, label: "Decision" },
  { type: "uw" as const, label: "Matches" },
  { type: "warning" as const, label: "Doesn't match, notify UW" },
  { type: "highlight" as const, label: "Key info" },
];
