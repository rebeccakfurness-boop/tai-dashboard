import type { Broker } from "./types";

/**
 * Starter/template content. Replace with the actual broker list once supplied.
 */
export const brokersStatus: "final" | "draft" = "draft";

export const brokers: Broker[] = [
  { name: "Aon New Zealand" },
  { name: "Marsh" },
  { name: "Willis Towers Watson" },
  { name: "Crombie Lockwood" },
  { name: "Rothbury Insurance Brokers" },
  { name: "NZbrokers" },
  { name: "Cove Insurance" },
  { name: "Coversure" },
  { name: "Insurance Advisernet NZ" },
].sort((a, b) => a.name.localeCompare(b.name));
