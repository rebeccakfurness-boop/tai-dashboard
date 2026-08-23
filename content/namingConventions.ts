import type { NamingSegment } from "./types";

export const namingConventionsStatus: "final" | "draft" = "draft";

export const namingSegments: NamingSegment[] = [
  {
    label: "Quote Type",
    description: "NB (New Business), REN (Renewal), MTA (Mid-Term Adjustment)",
    example: "NB",
  },
  {
    label: "Client Name",
    description: "The insured's name, no spaces, Title Case",
    example: "SmithFamilyTrust",
  },
  {
    label: "Address",
    description: "Street number and street name, no spaces",
    example: "24QueenSt",
  },
  {
    label: "Broker",
    description: "Brokerage short name or code",
    example: "Aon",
  },
];

export const namingExample = namingSegments.map((s) => s.example).join("_");

export const namingConventionExamples = [
  {
    label: "New business quote folder",
    value: "NB_SmithFamilyTrust_24QueenSt_Aon",
  },
  {
    label: "Renewal file",
    value: "REN_HarbourviewLtd_8ShoreRd_Marsh",
  },
  {
    label: "Mid-term adjustment",
    value: "MTA_CoastalHoldings_15BeachRd_WillisTowers",
  },
  {
    label: "Flood mapping attachment",
    value: "NB_SmithFamilyTrust_24QueenSt_Aon_FloodMap",
  },
];
