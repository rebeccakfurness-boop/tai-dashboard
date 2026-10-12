import type { FlowNode, FlowEdge } from "@/components/travel-flow-diagram";

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

export type TrainingLessonBlock =
  | { type: "paragraph"; text: string }
  | {
      type: "callout";
      tone: "info" | "success" | "warning";
      title?: string;
      text: string;
    }
  | { type: "definitionList"; items: { term: string; definition: string }[] }
  | {
      type: "cards";
      items: { title: string; text: string; tag?: string }[];
    }
  | { type: "steps"; items: { label: string; text: string }[] }
  | { type: "checklist"; items: string[] }
  | { type: "formula"; title: string; formula: string; note?: string }
  | {
      type: "flowchart";
      nodes: FlowNode[];
      edges: FlowEdge[];
      legend?: { type: FlowNode["type"]; label: string }[];
    };

export type TrainingLesson = {
  id: string;
  title: string;
  summary: string;
  body: TrainingLessonBlock[];
};

export type TrainingModule = {
  id: string;
  label: string;
  tag?: string;
  description: string;
  status: "available" | "coming-soon";
  href?: string;
  pdfUrl?: string;
  lessons?: TrainingLesson[];
};
