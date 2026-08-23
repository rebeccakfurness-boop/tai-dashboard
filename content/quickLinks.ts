import type { LucideIcon } from "lucide-react";
import { Waves, MapPin, ClipboardCheck, LifeBuoy } from "lucide-react";

export type QuickLink = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

export const quickLinks: QuickLink[] = [
  {
    label: "Flood Mapping",
    description: "Jump straight to your region's flood tool",
    href: "/property/flood-mapping",
    icon: Waves,
  },
  {
    label: "Postcode Finder",
    description: "NZ Post address & postcode lookup",
    href: "https://www.nzpost.co.nz/tools/address-postcode-finder",
    icon: MapPin,
    external: true,
  },
  {
    label: "Underwriting Worksheet Guide",
    description: "Field-by-field completion guide",
    href: "/property/process#worksheet-guide",
    icon: ClipboardCheck,
  },
  {
    label: "Guidance & Troubleshooting",
    description: "\"If this happens, look here\"",
    href: "/property/guidance",
    icon: LifeBuoy,
  },
];
