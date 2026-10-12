import type { TrainingLesson, TrainingModule } from "./types";

export const closingsLessons: TrainingLesson[] = [
  {
    id: "job-in-one-line",
    title: "Your job in one line",
    summary: "Check that what the broker sent matches IHQ. Then file it, or flag it.",
    body: [
      {
        type: "paragraph",
        text: "Check that what the broker sent matches IHQ. Then file it, or flag it.",
      },
      {
        type: "cards",
        items: [
          {
            title: "It matches",
            text: "File the placing document under the client on IHQ.",
          },
          {
            title: "It does not match",
            text: "Flag it on the policy register under Travel Actions.",
          },
        ],
      },
    ],
  },
  {
    id: "words-you-will-hear",
    title: "Words you'll hear",
    summary: "The glossary — IHQ, broker, bound, closing document, and more.",
    body: [
      {
        type: "definitionList",
        items: [
          { term: "IHQ", definition: "Our policy system. Clients, policies and documents live here." },
          { term: "Broker", definition: "The intermediary who sends us the business." },
          { term: "Quote", definition: "The price we offer a client for cover." },
          { term: "Bound", definition: "The quote is accepted and the policy is in force." },
          {
            term: "Closing document",
            definition: "Broker paperwork confirming the cover, also called a placing document.",
          },
          { term: "Underwriter (UW)", definition: "The person who assesses the risk and binds the policy." },
          { term: "Policy register", definition: "The list of policies on the client tab in IHQ." },
          { term: "Travel Actions", definition: "Where we log any issue on the policy register." },
        ],
      },
    ],
  },
  {
    id: "what-to-look-at",
    title: "What to look at",
    summary: "Quote and Closing tags matter. Everything else, ignore.",
    body: [
      {
        type: "cards",
        items: [
          { title: "Quote", tag: "Quote", text: "Tagged pink. Look at it." },
          { title: "Closing", tag: "Closing", text: "Tagged green. Look at it." },
          { title: "Everything else", text: "Ignore the rest." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Triage",
        text: "I can triage them. If you triage and you are not sure, tag it Underwriter and they will pick it up.",
      },
    ],
  },
  {
    id: "what-a-closing-email-is",
    title: "What a Closing email is",
    summary: "A broker has sent a placing document or a closing document.",
    body: [
      {
        type: "cards",
        items: [
          {
            title: "Closing",
            tag: "Closing",
            text: "A broker has sent a placing document or a closing document. Any email tagged Closing is one of these.",
          },
          {
            title: "New process",
            text: "Closing documents are uploaded to the client file on IHQ.",
          },
        ],
      },
    ],
  },
  {
    id: "the-process-step-by-step",
    title: "The process, step by step",
    summary: "Four checks, then file it or flag it.",
    body: [
      {
        type: "steps",
        items: [
          { label: "1", text: "A closing email arrives, tagged Closing" },
          { label: "2", text: "Open the placing or closing document" },
          { label: "3", text: "Check the dates, insured name and $$ amounts" },
          { label: "4", text: "Check the quote is accepted in IHQ" },
        ],
      },
      {
        type: "callout",
        tone: "success",
        title: "Everything matches",
        text: "File the placing doc into Documents under the client on IHQ.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Something doesn't match",
        text: "Log it on the policy register under Travel Actions. If the quote is not accepted, an Underwriter binds it through IHQ. If the closing does not match, try to identify why — the Underwriter then contacts the broker to solve it.",
      },
    ],
  },
  {
    id: "what-to-check",
    title: "What to check",
    summary: "Dates, insured name, dollar amounts, and quote acceptance.",
    body: [
      {
        type: "cards",
        items: [
          { title: "1. Dates", text: "Do the dates on the closing match the policy on IHQ?" },
          { title: "2. Insured name", text: "Does the insured name match the client on IHQ?" },
          {
            title: "3. The $$ amounts",
            text: "Do the amounts match the breakdown on IHQ? The gross premium, including GST, should match.",
          },
          {
            title: "4. Quote accepted",
            text: "Is it Quote Accepted on the policy register? If not, an Underwriter needs to bind it through IHQ.",
          },
        ],
      },
    ],
  },
  {
    id: "the-policy-register",
    title: "The policy register",
    summary: "Quote Referred, Quote Reviewed, or Quote Accepted.",
    body: [
      {
        type: "paragraph",
        text: "On the client tab, under Policies, each policy shows one of three statuses.",
      },
      {
        type: "cards",
        items: [
          { title: "Quote Referred", text: "We have done our part. An Underwriter needs to action it." },
          { title: "Quote Reviewed", text: "The quote has been sent to the client and is not accepted yet." },
          { title: "Quote Accepted", text: "The policy is bound." },
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Something wrong?",
        text: "A closing that does not match, or a quote that is not accepted, goes on the policy register under Travel Actions.",
      },
      {
        type: "paragraph",
        text: "Client tab, Policies: the status sits under Transaction Type, and the $$ breakdown is under Manage — click the eye icon to see it.",
      },
    ],
  },
  {
    id: "checking-the-dollars",
    title: "Checking the $$",
    summary: "The net-amount formula, and when GST applies.",
    body: [
      {
        type: "cards",
        items: [
          { title: "20%", text: "Broker commission" },
          { title: "15%", text: "GST, on NZ travel days only" },
          {
            title: "Internal or international?",
            text: "Internal cover has GST. International does not.",
          },
        ],
      },
      {
        type: "formula",
        title: "The net amount on a closing",
        formula: "(Premium × 0.8) + GST − Broker GST",
        note: "Broker GST is the GST on the broker commission, which is 20% of the GST.",
      },
    ],
  },
  {
    id: "filing-the-placing-document",
    title: "Filing the placing document",
    summary: "Client file → Documents History tab → drop it in.",
    body: [
      {
        type: "steps",
        items: [
          { label: "Step 1", text: "Open the client file on IHQ." },
          { label: "Step 2", text: "Go to the Documents History tab." },
          { label: "Step 3", text: "Drop in the placing document and submit." },
        ],
      },
    ],
  },
  {
    id: "pro-rata",
    title: "Pro-rata: the common due date",
    summary: "Wait for closings, count the days, work out the %, apply it.",
    body: [
      {
        type: "steps",
        items: [
          { label: "Step 1 — Wait for closings", text: "Do not pro-rata until the closings are in." },
          { label: "Step 2 — Count the days", text: "End date minus start date, plus 1." },
          { label: "Step 3 — Work out the %", text: "Travel days divided by 365." },
          { label: "Step 4 — Apply it", text: "% × premium. Brokerage is commission × %." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        text: "Period limits: 6 month minimum, 18 month maximum.",
      },
    ],
  },
  {
    id: "quick-checklist",
    title: "Your quick checklist",
    summary: "Five checks, then file it or flag it.",
    body: [
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
      {
        type: "cards",
        items: [
          { title: "All good", text: "File the placing doc into Documents under the client on IHQ." },
          { title: "Anything off", text: "Log it on the policy register under Travel Actions." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        text: "Not sure? Tag it Underwriter and they will pick it up.",
      },
    ],
  },
];

export const trainingModules: TrainingModule[] = [
  {
    id: "closings",
    label: "Closings",
    tag: "Closing",
    description: "A beginner's guide to checking, logging and filing closings. No experience needed.",
    status: "available",
    href: "/travel/training/closings",
    lessons: closingsLessons,
  },
  {
    id: "quote",
    label: "Quote",
    tag: "Quote",
    description: "How to process a Travel quote, step by step.",
    status: "coming-soon",
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
