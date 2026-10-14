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
  GraduationCap,
  Monitor,
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
      label: "Process & Training",
      href: "/property/training",
      icon: GraduationCap,
      description: "The full quotation process, and step-by-step training modules by quote type.",
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

export const travelGroup: NavGroup = {
  label: "Travel",
  href: "/travel",
  icon: Plane,
  items: [
    {
      label: "Process & Training",
      href: "/travel/training",
      icon: GraduationCap,
      description: "Inbox tags, the quotation process, and step-by-step training modules.",
    },
    {
      label: "Resources",
      href: "/travel/resources",
      icon: BookOpen,
      description: "IHQ, SafeTravel, airline contacts and business lookup.",
    },
  ],
};

export const techSystemNav: NavItem = {
  label: "Tech System",
  href: "/tech-system",
  icon: Monitor,
  description: "Step-by-step training for the Otta website, admin portal and broker portal.",
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
  ...travelGroup.items,
  techSystemNav,
  resourcesNav,
  ...brokerRegistrationGroup.items,
];
