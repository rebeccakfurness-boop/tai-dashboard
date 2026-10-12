import type { TrainingLesson, TrainingModule } from "./types";
import {
  closingsProcessFlowNodes,
  closingsProcessFlowEdges,
  closingsProcessFlowLegend,
} from "./closingsProcessFlow";
import {
  quoteProcessFlowNodes,
  quoteProcessFlowEdges,
  quoteProcessFlowLegend,
  quoteClaimsFlowNodes,
  quoteClaimsFlowEdges,
  quoteClaimsFlowLegend,
} from "./quoteProcessFlow";

const CLOSINGS_IMG = "/training/images/closings";
const QUOTE_IMG = "/training/images/quote";

export const closingsLessons: TrainingLesson[] = [
  {
    id: "job-in-one-line",
    title: "Your job in one line",
    summary: "Check that what the broker sent matches IHQ. Then file it, or flag it.",
    body: [
      {
        type: "image",
        src: `${CLOSINGS_IMG}/slide-02.jpg`,
        alt: "Your job in one line: check that what the broker sent matches IHQ, then file it or flag it.",
      },
    ],
  },
  {
    id: "words-you-will-hear",
    title: "Words you'll hear",
    summary: "The glossary: IHQ, broker, bound, closing document, and more.",
    body: [
      {
        type: "image",
        src: `${CLOSINGS_IMG}/slide-03.jpg`,
        alt: "Glossary table: IHQ, broker, quote, bound, closing document, underwriter, policy register, Travel Actions.",
      },
    ],
  },
  {
    id: "what-to-look-at",
    title: "What to look at",
    summary: "Quote and Closing tags matter. Everything else, ignore.",
    body: [
      {
        type: "image",
        src: `${CLOSINGS_IMG}/slide-04.jpg`,
        alt: "What to look at: Quote tagged pink, Closing tagged green, everything else ignored.",
      },
    ],
  },
  {
    id: "what-a-closing-email-is",
    title: "What a Closing email is",
    summary: "A broker has sent a placing document or a closing document.",
    body: [
      {
        type: "image",
        src: `${CLOSINGS_IMG}/slide-05.jpg`,
        alt: "What a Closing email is: a broker has sent a placing document or closing document.",
      },
    ],
  },
  {
    id: "the-process-step-by-step",
    title: "The process, step by step",
    summary: "Four checks, then file it or flag it.",
    body: [
      {
        type: "flowchart",
        nodes: closingsProcessFlowNodes,
        edges: closingsProcessFlowEdges,
        legend: closingsProcessFlowLegend,
      },
    ],
  },
  {
    id: "what-to-check",
    title: "What to check",
    summary: "Dates, insured name, dollar amounts, and quote acceptance.",
    body: [
      {
        type: "image",
        src: `${CLOSINGS_IMG}/slide-07.jpg`,
        alt: "What to check: dates, insured name, the dollar amounts, and quote accepted.",
      },
    ],
  },
  {
    id: "the-policy-register",
    title: "The policy register",
    summary: "Quote Referred, Quote Reviewed, or Quote Accepted.",
    body: [
      {
        type: "image",
        src: `${CLOSINGS_IMG}/slide-08.jpg`,
        alt: "The policy register: Quote Referred, Quote Reviewed, or Quote Accepted statuses.",
      },
    ],
  },
  {
    id: "see-the-dollar-breakdown",
    title: "See the $$ breakdown",
    summary: "Click the eye under Manage to see the breakdown.",
    body: [
      {
        type: "image",
        src: `${CLOSINGS_IMG}/slide-09.jpg`,
        alt: "Policy List screenshot showing the eye icon under Manage, circled, to open the dollar breakdown.",
      },
    ],
  },
  {
    id: "checking-the-dollars",
    title: "Checking the $$",
    summary: "The net-amount formula, and when GST applies.",
    body: [
      {
        type: "image",
        src: `${CLOSINGS_IMG}/slide-10.jpg`,
        alt: "Checking the dollars: 20 percent broker commission, 15 percent GST, and the net amount formula.",
      },
    ],
  },
  {
    id: "filing-the-placing-document",
    title: "Filing the placing document",
    summary: "Client file, Documents History tab, drop it in.",
    body: [
      {
        type: "image",
        src: `${CLOSINGS_IMG}/slide-11.jpg`,
        alt: "Screenshot of the IHQ Documents History tab where the placing document is uploaded.",
      },
    ],
  },
  {
    id: "pro-rata",
    title: "Pro-rata: the common due date",
    summary: "Wait for closings, count the days, work out the %, apply it.",
    body: [
      {
        type: "image",
        src: `${CLOSINGS_IMG}/slide-12.jpg`,
        alt: "Pro-rata steps: wait for closings, count the days, work out the percentage, apply it.",
      },
    ],
  },
  {
    id: "quick-checklist",
    title: "Your quick checklist",
    summary: "Five checks, then file it or flag it.",
    body: [
      {
        type: "image",
        src: `${CLOSINGS_IMG}/slide-13.jpg`,
        alt: "Quick checklist: email tagged Closing, dates match, insured name matches, dollar amounts match, quote accepted.",
      },
      {
        type: "checklist",
        items: [
          "Email tagged Closing? Open the document",
          "Dates match",
          "Insured name matches",
          "$$ amounts match",
          "Quote accepted",
        ],
      },
    ],
  },
];

export const quoteLessons: TrainingLesson[] = [
  {
    id: "sort-the-request",
    title: "Sort the request",
    summary: "Read it, then choose one of three routes.",
    body: [
      {
        type: "image",
        src: `${QUOTE_IMG}/slide-02.jpg`,
        alt: "Sort the request: Complicated and Leisure go to the Underwriter, General corporate travel is yours.",
      },
    ],
  },
  {
    id: "process-at-a-glance",
    title: "The quote process at a glance",
    summary: "Six stages, from reading the request to the Underwriter being emailed.",
    body: [
      {
        type: "flowchart",
        nodes: quoteProcessFlowNodes,
        edges: quoteProcessFlowEdges,
        legend: quoteProcessFlowLegend,
      },
      {
        type: "cards",
        items: [
          {
            title: "Something missing?",
            text: "Broker company or contact not in the list? See the 'Extra: broker company not in the list' lesson.",
          },
          {
            title: "Notes and claims check",
            text: "What to write in the notes and how to check for claims: see the 'What to put in the notes' and 'How to do a claims check' lessons.",
          },
        ],
      },
    ],
  },
  {
    id: "log-in-to-ihq",
    title: "Log in to IHQ",
    summary: "tai-core.insuredhq.com, then select Onboarding Portal.",
    body: [
      {
        type: "image",
        src: `${QUOTE_IMG}/slide-04.jpg`,
        alt: "Screenshot of IHQ with the Onboarding Portal link circled in the left sidebar.",
      },
    ],
  },
  {
    id: "create-a-quote",
    title: "Create a quote",
    summary: "In the Onboarding Portal, click Create Quote.",
    body: [
      {
        type: "image",
        src: `${QUOTE_IMG}/slide-05.jpg`,
        alt: "Screenshot of the Onboarding Portal with the Create Quote button highlighted.",
      },
    ],
  },
  {
    id: "broker-and-product",
    title: "Broker and product",
    summary: "Pick the broker, then the product.",
    body: [
      {
        type: "image",
        src: `${QUOTE_IMG}/slide-06.jpg`,
        alt: "Screenshot of the Broker Details form with the Broker Company dropdown and product field highlighted.",
      },
    ],
  },
  {
    id: "policy-holder-details",
    title: "Policy holder details",
    summary: "Cover type, policy type, NZBN, address, and travel activities.",
    body: [
      {
        type: "image",
        src: `${QUOTE_IMG}/slide-07.jpg`,
        alt: "Screenshot of the Policy Holder Details form: cover type, policy type, NZBN, address, travel activities.",
      },
    ],
  },
  {
    id: "travel-days-and-extras",
    title: "Travel days and extras",
    summary: "Enter the travel days, then answer the risk questions.",
    body: [
      {
        type: "image",
        src: `${QUOTE_IMG}/slide-08.jpg`,
        alt: "Screenshot of the Travel Information table and the high risk activity and non-scheduled flight questions.",
      },
    ],
  },
  {
    id: "notes-then-submit",
    title: "Notes, then submit",
    summary: "Write the notes, then click Next and submit.",
    body: [
      {
        type: "image",
        src: `${QUOTE_IMG}/slide-09.jpg`,
        alt: "Screenshot of the Claims Details and Declaration step with the notes box and Next button highlighted.",
      },
    ],
  },
  {
    id: "what-to-put-in-the-notes",
    title: "What to put in the notes",
    summary: "Start with your name and the date, then add whichever of these apply.",
    body: [
      {
        type: "image",
        src: `${QUOTE_IMG}/slide-10.jpg`,
        alt: "What to put in the notes: travellers over 75, a claim, a renewal, high risk or flagged events, anything else the UW should know.",
      },
    ],
  },
  {
    id: "claims-check",
    title: "How to do a claims check",
    summary: "OneDrive, Working files, A&H, Claim report, then the latest GB Claim Report.",
    body: [
      {
        type: "flowchart",
        nodes: quoteClaimsFlowNodes,
        edges: quoteClaimsFlowEdges,
        legend: quoteClaimsFlowLegend,
      },
      {
        type: "cards",
        items: [
          {
            title: "Open the most recent report",
            text: "These reports are downloaded frequently, so pick the latest date. It is called GB Claim Report - Date.",
          },
          {
            title: "Found a claim?",
            text: "Add the date of loss, cause of loss and amount of loss to the notes.",
          },
        ],
      },
    ],
  },
  {
    id: "upload-and-hand-over",
    title: "Upload and hand over",
    summary: "Upload the files, and the Underwriter is told.",
    body: [
      {
        type: "image",
        src: `${QUOTE_IMG}/slide-12.jpg`,
        alt: "Upload and hand over: upload the files, then the Underwriter is emailed. That is the quote done.",
      },
    ],
  },
  {
    id: "broker-not-listed",
    title: "Extra: broker company not in the list",
    summary: "Click Add Broker, then fill in the fields.",
    body: [
      {
        type: "image",
        src: `${QUOTE_IMG}/slide-13.jpg`,
        alt: "Screenshot of the Add Client form for adding a broker company not in the list.",
      },
    ],
  },
  {
    id: "broker-contact-not-listed",
    title: "Extra: broker contact not in the list",
    summary: "Open the Contacts tab, then click + Contact.",
    body: [
      {
        type: "image",
        src: `${QUOTE_IMG}/slide-14.jpg`,
        alt: "Screenshot of the broker's Contacts tab with the + Contact button circled.",
      },
    ],
  },
  {
    id: "add-the-contact",
    title: "Extra: add the contact",
    summary: "Fill in the new contact's details, then click Add.",
    body: [
      {
        type: "image",
        src: `${QUOTE_IMG}/slide-15.jpg`,
        alt: "Screenshot of the Add Contact form: first name, last name, email, contact relationship, and the Add button.",
      },
    ],
  },
];

export const trainingModules: TrainingModule[] = [
  {
    id: "process-overview",
    label: "Travel Process",
    description: "Inbox tags, the full branching process flow, and the Travel quotation process document.",
    status: "available",
    href: "/travel/training/process",
  },
  {
    id: "closings",
    label: "Closings",
    tag: "Closing",
    description: "A beginner's guide to checking, logging and filing closings. No experience needed.",
    status: "available",
    href: "/travel/training/closings",
    pdfUrl: "/training/travel-closings-101.pdf",
    lessons: closingsLessons,
  },
  {
    id: "quote",
    label: "Quote",
    tag: "Quote",
    description: "A step by step guide, from a request in the inbox to a quote on IHQ. No experience needed.",
    status: "available",
    href: "/travel/training/quote",
    pdfUrl: "/training/processing-a-quote.pdf",
    lessons: quoteLessons,
  },
  {
    id: "remittance",
    label: "Remittance",
    tag: "Remittance",
    description: "Checking and filing remittances.",
    status: "coming-soon",
  },
  {
    id: "welcome-to-travel",
    label: "Welcome to Travel",
    description: "An overview of the inbox, the processes, and how it all works.",
    status: "coming-soon",
  },
];
