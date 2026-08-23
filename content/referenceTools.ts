import type { ReferenceTool } from "./types";

export const propertyReferenceTools: ReferenceTool[] = [
  {
    name: "NZ Post Postcode Finder",
    description: "Look up the correct postcode for any NZ address.",
    url: "https://www.nzpost.co.nz/tools/address-postcode-finder",
    tag: "Address",
  },
  {
    name: "Google Maps",
    description: "Street view, satellite imagery and surrounding area context.",
    url: "https://maps.google.com",
    tag: "Mapping",
  },
  {
    name: "Google Earth",
    description: "Historical satellite imagery for construction and land use checks.",
    url: "https://earth.google.com/web/",
    tag: "Mapping",
  },
  {
    name: "homes.co.nz",
    description: "Property estimates, land info, rating valuation and sales history.",
    url: "https://homes.co.nz",
    tag: "Property Lookup",
  },
  {
    name: "LINZ Data Service",
    description: "Property title, parcel and LiDAR data for New Zealand.",
    url: "https://data.linz.govt.nz/",
    tag: "Property Lookup",
  },
];
