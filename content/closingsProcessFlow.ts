import type { FlowNode, FlowEdge } from "@/components/travel-flow-diagram";

export const closingsProcessFlowNodes: FlowNode[] = [
  {
    id: "banner",
    title: "If the closing does not match, try to identify why.",
    subtitle: "The Underwriter then contacts the broker to solve it.",
    type: "warning",
    x: 20,
    y: 20,
    w: 940,
    h: 60,
  },

  { id: "step1", title: "1. A closing email arrives, tagged Closing", type: "start", x: 20, y: 110, w: 260, h: 60 },
  { id: "step2", title: "2. Open the placing or closing document", type: "start", x: 20, y: 200, w: 260, h: 60 },
  { id: "step3", title: "3. Check the dates, insured name and $$ amounts", type: "start", x: 20, y: 290, w: 260, h: 60 },
  { id: "step4", title: "4. Check the quote is accepted in IHQ", type: "start", x: 20, y: 380, w: 260, h: 60 },

  {
    id: "decision",
    title: "Everything matches?",
    type: "decision",
    shape: "diamond",
    x: 340,
    y: 360,
    w: 180,
    h: 110,
  },

  {
    id: "logIt",
    title: "Log it on the policy register under Travel Actions",
    type: "warning",
    x: 340,
    y: 210,
    w: 280,
    h: 60,
  },
  {
    id: "uwBinds",
    title: "If the quote is not accepted, an Underwriter binds it through IHQ",
    type: "admin",
    x: 680,
    y: 210,
    w: 280,
    h: 60,
  },

  {
    id: "fileIt",
    title: "File the placing doc into Documents under the client on IHQ",
    type: "uw",
    x: 600,
    y: 380,
    w: 320,
    h: 70,
  },
];

export const closingsProcessFlowEdges: FlowEdge[] = [
  { from: "step1", to: "step2", fromSide: "bottom", toSide: "top" },
  { from: "step2", to: "step3", fromSide: "bottom", toSide: "top" },
  { from: "step3", to: "step4", fromSide: "bottom", toSide: "top" },
  { from: "step4", to: "decision", fromSide: "right", toSide: "left" },

  { from: "decision", to: "fileIt", fromSide: "right", toSide: "left", label: "Yes" },
  { from: "decision", to: "logIt", fromSide: "top", toSide: "bottom", label: "No" },
  { from: "logIt", to: "uwBinds", fromSide: "right", toSide: "left" },
  { from: "logIt", to: "banner", fromSide: "top", toSide: "bottom" },
];

export const closingsProcessFlowLegend = [
  { type: "start" as const, label: "Process step" },
  { type: "decision" as const, label: "Decision" },
  { type: "uw" as const, label: "Matches, file it" },
  { type: "warning" as const, label: "Doesn't match, flag it" },
  { type: "admin" as const, label: "Follow-up action" },
];
