import type { ParsedBrokerRow } from "@/lib/broker-registration/parser";

export type MatchStatus = "unchecked" | "checking" | "new" | "existing";

export type RowState = ParsedBrokerRow & {
  section: "ok" | "check";
  matchStatus: MatchStatus;
  existingStatus?: string;
};
