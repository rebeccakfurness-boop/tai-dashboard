/**
 * Common NZ town/suburb names mapped to the matching `region` value(s) in
 * floodMapping.json, so searching "Dannevirke" surfaces "Manawatu" even
 * though the word "Manawatu" never appears in the query. Based on regional
 * council boundaries (e.g. Dannevirke sits in Tararua District, part of the
 * Manawatū-Whanganui/Horizons region) — not a claim about which tool has
 * the best data for that exact town, just which region it's in.
 *
 * An empty array means the town is recognized but sits in a region with no
 * published flood mapping tool yet (Marlborough, West Coast).
 *
 * Not exhaustive — add more towns here as they come up, no code changes needed.
 */
export const townAliases: Record<string, string[]> = {
  whangarei: ["Northland"],
  kerikeri: ["Northland"],
  kaitaia: ["Northland"],
  dargaville: ["Northland"],
  paihia: ["Northland"],

  manukau: ["Auckland"],
  "north shore": ["Auckland"],
  waitakere: ["Auckland"],
  pukekohe: ["Auckland"],
  waiheke: ["Auckland"],

  cambridge: ["Waikato"],
  "te awamutu": ["Waikato"],
  huntly: ["Waikato"],
  taupo: ["Waikato"],
  tokoroa: ["Waikato"],
  matamata: ["Waikato"],
  morrinsville: ["Waikato"],
  ngaruawahia: ["Waikato"],
  thames: ["Waikato"],
  whitianga: ["Waikato"],

  whakatane: ["Western BOP"],
  "te puke": ["Tauranga", "Western BOP"],
  "mount maunganui": ["Tauranga"],
  katikati: ["Western BOP"],

  ruatoria: ["Gisborne"],
  "tolaga bay": ["Gisborne"],

  napier: ["Hawke's Bay"],
  hastings: ["Hawke's Bay"],
  "havelock north": ["Hawke's Bay"],
  waipukurau: ["Hawke's Bay"],
  waipawa: ["Hawke's Bay"],
  wairoa: ["Hawke's Bay"],

  stratford: ["New Plymouth"],
  hawera: ["New Plymouth"],
  inglewood: ["New Plymouth"],
  opunake: ["New Plymouth"],

  feilding: ["Manawatu"],
  levin: ["Manawatu"],
  dannevirke: ["Manawatu"],
  woodville: ["Manawatu"],
  pahiatua: ["Manawatu"],
  horowhenua: ["Manawatu"],
  marton: ["Whanganui"],
  taihape: ["Whanganui"],

  porirua: ["Wellington"],
  "upper hutt": ["Wellington"],
  kapiti: ["Wellington"],
  paraparaumu: ["Wellington"],
  "lower hutt": ["Hutt City"],
  petone: ["Hutt City"],

  nelson: ["Tasman"],
  richmond: ["Tasman"],
  motueka: ["Tasman"],
  takaka: ["Tasman"],
  "golden bay": ["Tasman"],

  blenheim: [],
  picton: [],
  renwick: [],
  greymouth: [],
  westport: [],
  hokitika: [],

  ashburton: ["Canterbury"],
  timaru: ["Canterbury"],
  rangiora: ["Canterbury"],
  kaiapoi: ["Canterbury"],
  rolleston: ["Canterbury"],

  queenstown: ["Otago", "Wanaka"],
  alexandra: ["Otago"],
  cromwell: ["Otago"],
  oamaru: ["Otago"],

  gore: ["Invercargill"],
  "te anau": ["Invercargill"],
  bluff: ["Invercargill"],
};
