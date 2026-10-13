/**
 * A map of NZ for quick visual navigation on the Flood Mapping page, traced
 * from real coastline data (Natural Earth 1:50m) and projected to fit a
 * 260x361 viewBox. Each pin sits at its region's main centre and links to one
 * or more entries in floodMapping.json — some official regions cover several
 * of our entries (e.g. Bay of Plenty covers Rotorua, Western BOP and
 * Tauranga), and two regions (Marlborough, West Coast) have no published tool
 * yet, shown muted on the map.
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
  { key: "northland", label: "Northland", x: 166, y: 44.3, floodRegions: ["Northland"] },
  { key: "auckland", label: "Auckland", x: 174.8, y: 74.4, floodRegions: ["Auckland"] },
  {
    key: "waikato",
    label: "Waikato",
    x: 185.1,
    y: 99.1,
    floodRegions: ["Waikato", "Hamilton"],
  },
  {
    key: "bay-of-plenty",
    label: "Bay of Plenty",
    x: 202.9,
    y: 96.7,
    floodRegions: ["Rotorua", "Western BOP", "Tauranga"],
  },
  { key: "gisborne", label: "Gisborne", x: 239.7, y: 122.5, floodRegions: ["Gisborne"] },
  {
    key: "hawkes-bay",
    label: "Hawke's Bay",
    x: 217.8,
    y: 144.6,
    floodRegions: ["Hawke's Bay"],
  },
  { key: "taranaki", label: "Taranaki", x: 161.2, y: 133.2, floodRegions: ["New Plymouth"] },
  {
    key: "manawatu-whanganui",
    label: "Manawatū-Whanganui",
    x: 191.7,
    y: 167.5,
    floodRegions: ["Whanganui", "Manawatu", "Palmerston North"],
  },
  {
    key: "wellington",
    label: "Wellington",
    x: 175.2,
    y: 192.5,
    floodRegions: ["Wellington", "Hutt City"],
  },
  { key: "tasman", label: "Tasman", x: 145.3, y: 192.0, floodRegions: ["Tasman"] },
  { key: "marlborough", label: "Marlborough", x: 158.8, y: 198.3, floodRegions: [] },
  { key: "west-coast", label: "West Coast", x: 104.1, y: 223.3, floodRegions: [] },
  {
    key: "canterbury",
    label: "Canterbury",
    x: 132.5,
    y: 252.1,
    floodRegions: ["Canterbury", "Christchurch"],
  },
  {
    key: "otago",
    label: "Otago",
    x: 89.9,
    y: 314.3,
    floodRegions: ["Otago", "Wanaka", "Dunedin"],
  },
  { key: "southland", label: "Southland", x: 47.1, y: 328.7, floodRegions: ["Invercargill"] },
];
