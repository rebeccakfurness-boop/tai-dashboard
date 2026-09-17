/**
 * A stylized (not survey-accurate) map of NZ for quick visual navigation on
 * the Flood Mapping page. Each pin sits at an approximate position within a
 * 300x600 viewBox and links to one or more entries in floodMapping.json —
 * some official regions cover several of our entries (e.g. Bay of Plenty
 * covers Rotorua, Western BOP and Tauranga), and three regions (Marlborough,
 * West Coast) have no published tool yet, shown muted on the map.
 */
export type NzRegionPin = {
  key: string;
  label: string;
  x: number;
  y: number;
  /** Matches the `region` field in floodMapping.json. Empty = no tool published yet. */
  floodRegions: string[];
};

export const nzRegionPins: NzRegionPin[] = [
  { key: "northland", label: "Northland", x: 140, y: 55, floodRegions: ["Northland"] },
  { key: "auckland", label: "Auckland", x: 148, y: 112, floodRegions: ["Auckland"] },
  { key: "waikato", label: "Waikato", x: 152, y: 168, floodRegions: ["Waikato", "Hamilton"] },
  {
    key: "bay-of-plenty",
    label: "Bay of Plenty",
    x: 213,
    y: 193,
    floodRegions: ["Rotorua", "Western BOP", "Tauranga"],
  },
  { key: "gisborne", label: "Gisborne", x: 253, y: 233, floodRegions: ["Gisborne"] },
  { key: "hawkes-bay", label: "Hawke's Bay", x: 236, y: 278, floodRegions: ["Hawke's Bay"] },
  { key: "taranaki", label: "Taranaki", x: 113, y: 233, floodRegions: ["New Plymouth"] },
  {
    key: "manawatu-whanganui",
    label: "Manawatū-Whanganui",
    x: 168,
    y: 300,
    floodRegions: ["Whanganui", "Manawatu", "Palmerston North"],
  },
  {
    key: "wellington",
    label: "Wellington",
    x: 183,
    y: 338,
    floodRegions: ["Wellington", "Hutt City"],
  },
  { key: "tasman", label: "Tasman", x: 112, y: 380, floodRegions: ["Tasman"] },
  { key: "marlborough", label: "Marlborough", x: 173, y: 392, floodRegions: [] },
  { key: "west-coast", label: "West Coast", x: 92, y: 460, floodRegions: [] },
  {
    key: "canterbury",
    label: "Canterbury",
    x: 163,
    y: 468,
    floodRegions: ["Canterbury", "Christchurch"],
  },
  { key: "otago", label: "Otago", x: 140, y: 543, floodRegions: ["Otago", "Wanaka", "Dunedin"] },
  { key: "southland", label: "Southland", x: 116, y: 574, floodRegions: ["Invercargill"] },
];
