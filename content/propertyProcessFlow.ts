import type { FlowStep } from "@/components/process-flow-chart";

export const propertyProcessFlow: FlowStep[] = [
  { actor: "UW Support", label: "Receives quote" },
  { actor: "UW Support", label: "Prepares" },
  { actor: "UW Support", label: "Sends to Policy Reg" },
  { actor: "Underwriter", label: "Reviews & sends quote" },
  { actor: "Broker", label: "Receives & sends closing" },
  { actor: "UW Support", label: "Sends schedule + COC" },
];
