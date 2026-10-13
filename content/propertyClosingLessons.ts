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
        type: "steps",
        items: [
          { label: "1", text: "Open UW WS for the file." },
          { label: "2", text: "Go to the TAI tab." },
          { label: "3", text: "In cells D44 to D53, enter the closing amounts into the blue cells." },
          { label: "4", text: "Also check the dates and the insured name match." },
        ],
      },
      {
        type: "definitionList",
        items: [
          { term: "FSL", definition: "May also be called FENZ, Fire & Emergency Levy, or Fire Service Levy." },
          { term: "NHI", definition: "May also be called the Natural disaster levy." },
        ],
      },
      {
        type: "callout",
        tone: "success",
        title: "Everything matches?",
        text: "Brilliant. Carry on with the pathway.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Something does not match?",
        text: "Notify the UW to contact the broker.",
      },
    ],
  },
  {
    id: "schedule-and-coc",
    title: "Schedule and COC",
    summary: "Check these have been issued, especially for an interested party.",
    body: [
      {
        type: "paragraph",
        text: "Check these have been issued. Look especially if there is an interested party, or if the broker has requested them.",
      },
      {
        type: "cards",
        items: [
          { title: "Schedule", text: "Must be issued. If one has not been issued, issue it." },
          {
            title: "COC",
            text: "Not mandatory, but good practice. Issue it while you are downloading documents, so you do not have to go back later.",
          },
        ],
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
        type: "steps",
        items: [
          {
            label: "Step 1: Generate the policy number",
            text: "On the policy register, tab 'Social Housing 2025 - 26'. Follow the policy number generation workflow.",
          },
          {
            label: "Step 2: Enter it in the TAI tab",
            text: "Put the policy number in cell C19. It fills in on the Schedules and the COCs.",
          },
          {
            label: "Step 3: Print and send",
            text: "Print the Schedules and COC. Send them to the UW to send to the client.",
          },
          {
            label: "Step 4: Check the BDX tab",
            text: "The certificate reference has the policy number, and cells E3 to AE3 are all filled in.",
          },
          { label: "Step 5: Move the files to bound", text: "Both the OneDrive files and the emails." },
          {
            label: "Step 6: Upload the closing file",
            text: "To the correct email folder and the correct OneDrive folder.",
          },
        ],
      },
      {
        type: "callout",
        tone: "info",
        text: "Do this whether or not the closing matched. It has not been bound yet.",
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
        type: "steps",
        items: [
          {
            label: "Step 1: Generate the policy number",
            text: "On the policy register, tab 'Social Housing 2025 - 26'. Follow the policy number generation workflow.",
          },
          {
            label: "Step 2: Enter it in the TAI tab",
            text: "Put the policy number in cell D19. It fills in on the Schedule. No COC is issued for LL policies.",
          },
          {
            label: "Step 3: Print and send",
            text: "Print the Schedule. Send it to the UW to send to the client.",
          },
          {
            label: "Step 4: BDX tab, by hand",
            text: "For LL policies the BDX is entered manually. See the next lesson for the fields.",
          },
          { label: "Step 5: Move the files to bound", text: "Both the OneDrive files and the emails." },
          {
            label: "Step 6: Upload the closing file",
            text: "To the correct email folder and the correct OneDrive folder.",
          },
        ],
      },
      {
        type: "callout",
        tone: "info",
        text: "Do this whether or not the closing matched. It has not been bound yet.",
      },
    ],
  },
  {
    id: "ll-bdx-by-hand",
    title: "LL: entering the BDX by hand",
    summary: "Use a new line, and watch the IWL fee and NHI exception.",
    body: [
      {
        type: "callout",
        tone: "warning",
        title: "Use a new line",
        text: "The lines above are pre-populated, and a house policy added afterwards would mess up the formatting.",
      },
      {
        type: "checklist",
        items: [
          "Gross premium (see the table)",
          "Address, insured name, risk type and so on",
          "SI (see the table)",
          "IWL fee: $100 for LL",
          "FSL: matching the quote",
          "NHI: does not apply to LL",
        ],
      },
      {
        type: "table",
        headers: ["Policy type", "Gross premium", "SI"],
        rows: [
          ["Protect", "$397.18", "$25,000"],
          ["Protect+", "$470.00", "$50,000"],
          ["Protect Prime", "$765.66", "$75,000"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "IWL fee: $100",
        text: "The UW fee for LL is $100.",
      },
    ],
  },
  {
    id: "things-to-watch-for",
    title: "Things to watch for",
    summary: "Rothbury closings, and the LL NHI exception.",
    body: [
      {
        type: "cards",
        items: [
          {
            title: "Rothbury closings",
            text: "Rothbury put the UW fee in a different spot on the PDF. The main summary at the top is missing $120 + $18. The rest is a couple of pages below.",
          },
          {
            title: "LL policies",
            text: "An LL policy does not have NHI cover, so there is no NHI fee. No COC is issued for LL policies either.",
          },
        ],
      },
    ],
  },
  {
    id: "pathways-side-by-side",
    title: "The three pathways side by side",
    summary: "A quick-reference comparison of all three pathways.",
    body: [
      {
        type: "table",
        headers: ["", "A: Already bound", "B: Not bound, NB / RN", "C: Not bound, LL"],
        rows: [
          [
            "Check on",
            "UW WS, TAI tab, D44 to D53",
            "UW WS, TAI tab, D44 to D53",
            "UW WS, LL Quote page, E61 to E69",
          ],
          [
            "Policy number",
            "Already issued",
            "Generate on the policy register, enter in TAI tab C19",
            "Generate on the policy register, enter in TAI tab D19",
          ],
          [
            "Documents",
            "Issue a schedule if missing. COC is good practice",
            "Print Schedules and COC, send to the UW",
            "Print the Schedule, send to the UW. No COC",
          ],
          [
            "BDX tab",
            "Not part of this flow",
            "Check the certificate reference and cells E3 to AE3",
            "Enter by hand on a new line",
          ],
          ["Levies", "FSL and NHI", "FSL and NHI", "FSL only, no NHI for LL"],
          ["No match?", "Notify the UW", "Notify the UW", "Notify the UW"],
        ],
      },
    ],
  },
];
