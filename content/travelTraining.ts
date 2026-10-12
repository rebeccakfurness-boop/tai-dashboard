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
    summary: "The glossary: IHQ, broker, bound, closing document, and more.",
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
        text: "Client tab, Policies: the status sits under Transaction Type, and the $$ breakdown is under Manage. Click the eye icon to see it.",
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
          { label: "Step 1: Wait for closings", text: "Do not pro-rata until the closings are in." },
          { label: "Step 2: Count the days", text: "End date minus start date, plus 1." },
          { label: "Step 3: Work out the %", text: "Travel days divided by 365." },
          { label: "Step 4: Apply it", text: "% × premium. Brokerage is commission × %." },
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

export const quoteLessons: TrainingLesson[] = [
  {
    id: "sort-the-request",
    title: "Sort the request",
    summary: "Read it, then choose one of three routes.",
    body: [
      {
        type: "paragraph",
        text: "A quote request lands in the inbox. Read it, then choose one of three routes.",
      },
      {
        type: "cards",
        items: [
          { title: "Complicated", text: "Tag the email for the Underwriter (UW)." },
          { title: "Leisure", text: "Tag the email for the UW." },
          {
            title: "General corporate travel",
            text: "This one is yours. Input it on IHQ. The next lessons show you how.",
          },
        ],
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
            text: "Broker company or contact not in the list? See the 'Broker or contact not in the list' lesson.",
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
    id: "log-in-and-create",
    title: "Log in and create the quote",
    summary: "IHQ, then the Onboarding Portal, then Create Quote.",
    body: [
      {
        type: "steps",
        items: [
          { label: "Step 3: Log in to IHQ", text: "tai-core.insuredhq.com" },
          {
            label: "Step 4: Select Onboarding Portal",
            text: "It is in the left sidebar, at the top of the menu.",
          },
          { label: "Step 5: Create a quote", text: "In the Onboarding Portal, click Create Quote." },
        ],
      },
    ],
  },
  {
    id: "broker-and-product",
    title: "Broker and product",
    summary: "Pick the broker, then the product.",
    body: [
      {
        type: "steps",
        items: [
          { label: "Step 6", text: "Pick the Broker Company from the dropdown." },
          { label: "Step 7", text: "Product required: Corporate Travel." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Not in the list?",
        text: "A missing broker company or contact is covered in the 'Broker or contact not in the list' lesson.",
      },
    ],
  },
  {
    id: "policy-holder-details",
    title: "Policy holder details",
    summary: "Cover type, policy type, NZBN, address, and travel activities.",
    body: [
      {
        type: "steps",
        items: [
          {
            label: "Step 8: Cover type",
            text: "Individual, Business, Group/Team or Other Organisation. Most are Business.",
          },
          { label: "Step 9: Policy type", text: "Annual or Single Trip, then enter the dates." },
          {
            label: "Step 10: NZBN",
            text: "Look it up on the Companies Register: companies-register.companiesoffice.govt.nz",
          },
          { label: "Step 11: Insured contact address", text: "Enter the address." },
          { label: "Step 12: Travel activities", text: "Keep it brief, about 5 words." },
        ],
      },
    ],
  },
  {
    id: "travel-days-and-extras",
    title: "Travel days and extras",
    summary: "Enter the travel days, then answer the risk questions.",
    body: [
      {
        type: "steps",
        items: [
          {
            label: "Step 13: Enter the travel days",
            text: "Brokers all have different forms, so use your judgement. If it is not clear which countries to put, use Rest of World.",
          },
          {
            label: "Step 14: Enter the additional information",
            text: "Answer the questions at the bottom: high risk activities and non-scheduled flights.",
          },
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Answered Yes?",
        text: "Note any extra information you received about a high risk or flagged event. See the 'What to put in the notes' lesson.",
      },
    ],
  },
  {
    id: "notes-then-submit",
    title: "Notes, then submit",
    summary: "Write the notes, then click Next and submit.",
    body: [
      {
        type: "steps",
        items: [
          {
            label: "Step 15",
            text: "Select Yes, then write all additional information in the box. Start with your name and the date, then your notes.",
          },
          { label: "Step 16", text: "Click Next, then submit." },
        ],
      },
    ],
  },
  {
    id: "what-to-put-in-the-notes",
    title: "What to put in the notes",
    summary: "Start with your name and the date, then add whichever of these apply.",
    body: [
      {
        type: "cards",
        items: [
          { title: "Travellers over 75", text: "Note it if there are any." },
          { title: "A claim", text: "Date of loss, cause of loss and amount of loss." },
          { title: "A renewal", text: "Last year's policy number." },
          {
            title: "High risk or flagged events",
            text: "If any answer is Yes, note any additional information received.",
          },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Anything else the UW should know",
        text: "Any information which may impact the underwriting process, or anything the UW may need to know.",
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
        type: "steps",
        items: [
          { label: "Step 17: Upload the files", text: "Upload all the files from the emails to the new client file." },
          {
            label: "Step 18: The UW is told",
            text: "An email is now sent to travel@tai.co.nz, so the UW can pick it up and knows there is a quote to review.",
          },
        ],
      },
      {
        type: "callout",
        tone: "success",
        text: "That is the quote done. The Underwriter takes it from here.",
      },
    ],
  },
  {
    id: "broker-or-contact-not-listed",
    title: "Extra: broker or contact not in the list",
    summary: "Add the broker company, or add a new broker contact.",
    body: [
      {
        type: "paragraph",
        text: "On the Broker Details step, click Add Broker, then fill in the fields.",
      },
      {
        type: "steps",
        items: [
          { label: "1. Legal Name and Last Name", text: "The company name." },
          { label: "2. Email", text: "travel@tai.co.nz, always, not the organisation's email." },
          { label: "3. Client Type", text: "Broker." },
          { label: "4. Is Net Broker", text: "Yes." },
        ],
      },
      {
        type: "callout",
        tone: "success",
        text: "The broker company is now added.",
      },
      {
        type: "paragraph",
        text: "To add a contact instead, open the broker's client file, then the Contacts tab, then click + Contact.",
      },
      {
        type: "steps",
        items: [
          { label: "1. First Name", text: "Enter the contact's first name." },
          { label: "2. Last Name", text: "Enter the contact's last name." },
          { label: "3. Email", text: "Enter the contact's email." },
          { label: "4. Contact Relationships", text: "Select the relationship." },
          { label: "5. Enable Portal Access", text: "Leave the box unticked. Do not enable portal access." },
          { label: "6. Click Add", text: "Saves the new contact." },
        ],
      },
      {
        type: "callout",
        tone: "success",
        text: "Back on the quote page, click Reset. The contact will now be there.",
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
