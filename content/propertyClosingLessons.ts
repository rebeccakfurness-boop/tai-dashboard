import type { TrainingLesson } from "./types";
import {
  closingArrivalFlowNodes,
  closingArrivalFlowEdges,
  closingArrivalFlowLegend,
  pathwayACheckFlowNodes,
  pathwayACheckFlowEdges,
  pathwayACheckFlowLegend,
  pathwayBCheckFlow,
  pathwayCCheckFlow,
  pathwayCheckFlowLegend,
} from "./propertyClosingFlow";

const SLIDES = "/training/images/property-closing";

export const propertyClosingLessons: TrainingLesson[] = [
  {
    id: "closing-arrives",
    title: "Step 1: A closing arrives",
    summary: "Already bound, or not? That decides the pathway.",
    body: [
      {
        type: "flowchart",
        nodes: closingArrivalFlowNodes,
        edges: closingArrivalFlowEdges,
        legend: closingArrivalFlowLegend,
      },
    ],
  },
  {
    id: "pathway-a-check",
    title: "Pathway A: already bound",
    summary: "Upload, check the closing, confirm the schedule and COC, then file.",
    body: [
      {
        type: "flowchart",
        nodes: pathwayACheckFlowNodes,
        edges: pathwayACheckFlowEdges,
        legend: pathwayACheckFlowLegend,
      },
    ],
  },
  {
    id: "checking-on-uw-ws",
    title: "Checking the closing on UW WS",
    summary: "Open UW WS, the TAI tab, and enter the closing amounts.",
    body: [
      {
        type: "image",
        src: `${SLIDES}/slide-04.jpg`,
        alt: "Checking the closing on UW WS: open the TAI tab, enter amounts in D44 to D53, and the FSL/NHI levy name lookup.",
      },
    ],
  },
  {
    id: "schedule-and-coc",
    title: "Schedule and COC",
    summary: "Check these have been issued, especially for an interested party.",
    body: [
      {
        type: "image",
        src: `${SLIDES}/slide-05.jpg`,
        alt: "Schedule and COC: schedule must be issued, COC is not mandatory but good practice.",
      },
    ],
  },
  {
    id: "pathway-b-check",
    title: "Pathway B: NB / RN, check the closing",
    summary: "Open UW WS, the TAI tab, enter the amounts, then check they match.",
    body: [
      {
        type: "flowchart",
        nodes: pathwayBCheckFlow.nodes,
        edges: pathwayBCheckFlow.edges,
        legend: pathwayCheckFlowLegend,
      },
    ],
  },
  {
    id: "pathway-b-bind",
    title: "Pathway B: NB / RN, bind it",
    summary: "Generate the policy number, enter it, print, and file.",
    body: [
      {
        type: "image",
        src: `${SLIDES}/slide-07.jpg`,
        alt: "Pathway B bind steps: generate the policy number, enter it in the TAI tab, print and send, check the BDX tab, move the files, upload the closing file.",
      },
    ],
  },
  {
    id: "pathway-c-check",
    title: "Pathway C: LL, check the closing",
    summary: "Open UW WS, the LL Quote page, then check the closing matches.",
    body: [
      {
        type: "flowchart",
        nodes: pathwayCCheckFlow.nodes,
        edges: pathwayCCheckFlow.edges,
        legend: pathwayCheckFlowLegend,
      },
    ],
  },
  {
    id: "pathway-c-bind",
    title: "Pathway C: LL, bind it",
    summary: "Generate the policy number, enter it, print, and file. BDX is manual.",
    body: [
      {
        type: "image",
        src: `${SLIDES}/slide-09.jpg`,
        alt: "Pathway C bind steps: generate the policy number, enter it in the TAI tab, print and send, enter the BDX by hand, move the files, upload the closing file.",
      },
    ],
  },
  {
    id: "ll-bdx-by-hand",
    title: "LL: entering the BDX by hand",
    summary: "Use a new line, and watch the IWL fee and NHI exception.",
    body: [
      {
        type: "image",
        src: `${SLIDES}/slide-10.jpg`,
        alt: "LL BDX fields to enter by hand, and the Protect/Protect+/Protect Prime premium and SI table.",
      },
    ],
  },
  {
    id: "things-to-watch-for",
    title: "Things to watch for",
    summary: "Rothbury closings, and the LL NHI exception.",
    body: [
      {
        type: "image",
        src: `${SLIDES}/slide-11.jpg`,
        alt: "Things to watch for: Rothbury closings put the UW fee in a different spot, and LL policies have no NHI fee or COC.",
      },
    ],
  },
  {
    id: "pathways-side-by-side",
    title: "The three pathways side by side",
    summary: "A quick-reference comparison of all three pathways.",
    body: [
      {
        type: "image",
        src: `${SLIDES}/slide-12.jpg`,
        alt: "Comparison table of pathways A, B and C across check location, policy number, documents, BDX tab, levies, and no-match handling.",
      },
    ],
  },
];
