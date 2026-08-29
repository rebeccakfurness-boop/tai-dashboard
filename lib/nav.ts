import type { LucideIcon } from "lucide-react";
import {
  Home,
  ClipboardList,
  Waves,
  MapPinned,
  LifeBuoy,
  Plane,
  BookOpen,
  UserPlus,
  History,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  description: string;
};

export type NavGroup = {
  label: string;
  href: string;
  icon: LucideIcon;
  items: NavItem[];
};

export const overviewNav: NavItem = {
  label: "Overview",
  href: "/",
  icon: Home,
  description: "Start here — a guided tour of the dashboard.",
};

export const propertyGroup: NavGroup = {
  label: "Property",
  href: "/property",
  icon: ClipboardList,
  items: [
    {
      label: "Process",
      href: "/property/process",
      icon: ClipboardList,
      description: "The full Property quotation process, step by step.",
    },
    {
      label: "Flood Mapping",
      href: "/property/flood-mapping",
      icon: Waves,
      description: "Every regional flood mapping tool in one table.",
    },
    {
      label: "Reference Tools",
      href: "/property/reference-tools",
      icon: MapPinned,
      description: "Postcode finder, maps and property lookups.",
    },
    {
      label: "Guidance",
      href: "/property/guidance",
      icon: LifeBuoy,
      description: "Troubleshooting and threshold-based guidance.",
    },
  ],
};

export const travelNav: NavItem = {
  label: "Travel",
  href: "/travel",
  icon: Plane,
  description: "IHQ, SafeTravel and the Travel quotation process.",
};

export const resourcesNav: NavItem = {
  label: "Resources",
  href: "/resources",
  icon: BookOpen,
  description: "Naming conventions, brokers and onboarding.",
};

export const brokerRegistrationGroup: NavGroup = {
  label: "Broker Registration",
  href: "/broker-registration/new",
  icon: UserPlus,
  items: [
    {
      label: "New Registration",
      href: "/broker-registration/new",
      icon: UserPlus,
      description: "Register new brokers from a pasted request.",
    },
    {
      label: "History",
      href: "/broker-registration/history",
      icon: History,
      description: "Past registration batches.",
    },
  ],
};

export const allNavItems: NavItem[] = [
  overviewNav,
  ...propertyGroup.items,
  travelNav,
  resourcesNav,
  ...brokerRegistrationGroup.items,
];
