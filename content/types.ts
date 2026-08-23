export type FloodLink = {
  label: string;
  url: string;
};

export type FloodRegion = {
  region: string;
  links: FloodLink[];
  notes: string;
};

export type ProcessStep = {
  id: string;
  title: string;
  summary: string;
  body: string[];
  bullets?: string[];
};

export type ChecklistItem = {
  label: string;
  detail?: string;
};

export type NamingSegment = {
  label: string;
  description: string;
  example: string;
};

export type WorksheetField = {
  field: string;
  description: string;
};

export type GuidanceItem = {
  id: string;
  trigger: string;
  guidance: string;
  refersTo?: string;
  refersToHref?: string;
  severity: "info" | "caution" | "critical";
};

export type ReferenceTool = {
  name: string;
  description: string;
  url: string;
  tag: string;
};

export type Broker = {
  name: string;
  brokerage?: string;
};

export type OnboardingTask = {
  label: string;
  href?: string;
  detail?: string;
};

export type OnboardingSection = {
  title: string;
  tasks: OnboardingTask[];
};

export type TravelLink = {
  label: string;
  url: string;
  description: string;
};
