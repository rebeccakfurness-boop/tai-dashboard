import type { TrainingLesson, TrainingModule } from "./types";

const WEBSITE_IMG = "/training/images/website";
const ADMIN_PORTAL_IMG = "/training/images/admin-portal";
const BROKER_PORTAL_IMG = "/training/images/broker-portal";
const BROKER_PORTAL_GUIDE_IMG = "/training/images/broker-portal-guide";

export const websiteLessons: TrainingLesson[] = [
  {
    id: "module-overview",
    title: "What this module covers",
    summary: "Getting in, finding your way, product pages, and resources, claims and contact.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-02.jpg`,
        alt: "Getting in, finding your way, product pages, and resources, claims and contact.",
      },
    ],
  },
  {
    id: "getting-in",
    title: "Getting in",
    summary: "While the site is being prepared, every visitor sees a Coming Soon page first.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-03.jpg`,
        alt: "While the site is being prepared, every visitor sees a Coming Soon page first.",
      },
    ],
  },
  {
    id: "coming-soon-page",
    title: "The Coming Soon page",
    summary: "Type the preview password, then select Enter to open the full site.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-04.jpg`,
        alt: "Type the preview password, then select Enter to open the full site.",
      },
    ],
  },
  {
    id: "finding-your-way",
    title: "Finding your way",
    summary: "Every page shares the same header, so you can always get back to where you need to be.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-05.jpg`,
        alt: "Every page shares the same header, so you can always get back to where you need to be.",
      },
    ],
  },
  {
    id: "home-page-and-header",
    title: "The home page and header",
    summary: "The logo, main menu, search, Account login, Discover Otta Solutions, and the website chat.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-06.jpg`,
        alt: "The logo, main menu, search, Account login, Discover Otta Solutions, and the website chat.",
      },
    ],
  },
  {
    id: "opening-a-product",
    title: "Opening a product from the Solutions menu",
    summary: "Hover over Solutions, then choose a product to open its page.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-07.jpg`,
        alt: "Hover over Solutions, then choose a product to open its page.",
      },
    ],
  },
  {
    id: "product-pages",
    title: "Product pages",
    summary: "Each product has its own page with an overview, the key covers and the documents behind it.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-08.jpg`,
        alt: "Each product has its own page with an overview, the key covers and the documents behind it.",
      },
    ],
  },
  {
    id: "a-product-page",
    title: "A product page",
    summary: "The overview, Apply now, View policy documents, and Download fact sheet.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-09.jpg`,
        alt: "The overview, Apply now, View policy documents, and Download fact sheet.",
      },
    ],
  },
  {
    id: "policy-at-a-glance",
    title: "This policy at a glance",
    summary: "A quick summary of the main covers and features, with a link to the full wording.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-10.jpg`,
        alt: "A quick summary of the main covers and features, with a link to the full wording.",
      },
    ],
  },
  {
    id: "apply-now",
    title: "Apply now: only brokers can apply",
    summary: "Visitors confirm they're a broker, then apply online in the portal or download the PDF form.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-11.jpg`,
        alt: "Visitors confirm they're a broker, then apply online in the portal or download the PDF form.",
      },
    ],
  },
  {
    id: "resources-claims-contact",
    title: "Resources, claims and contact",
    summary: "Where visitors find documents, make a claim, or get in touch with the team.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-12.jpg`,
        alt: "Where visitors find documents, make a claim, or get in touch with the team.",
      },
    ],
  },
  {
    id: "resources-forms-wordings",
    title: "Resources: forms and policy wordings",
    summary: "Open Resources, choose a product, and download the form or wording.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-13.jpg`,
        alt: "Open Resources, choose a product, and download the form or wording.",
      },
    ],
  },
  {
    id: "making-a-claim",
    title: "Making a claim",
    summary: "Who to call in an emergency, the non-emergency steps, and claim forms for each product.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-14.jpg`,
        alt: "Who to call in an emergency, the non-emergency steps, and claim forms for each product.",
      },
    ],
  },
  {
    id: "contact-us-enquiries",
    title: "Contact us and enquiries",
    summary: "Send enquiry posts the message to the admin portal under Enquiries, and emails the team.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-15.jpg`,
        alt: "Send enquiry posts the message to the admin portal under Enquiries, and emails the team.",
      },
    ],
  },
  {
    id: "searching-the-site",
    title: "Searching the site",
    summary: "Select the magnifying glass, start typing, and choose a result.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-16.jpg`,
        alt: "Select the magnifying glass, start typing, and choose a result.",
      },
    ],
  },
  {
    id: "website-chat",
    title: "The website chat",
    summary: "Brad answers insurance, claims and contact questions. Steve is just for fun.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-17.jpg`,
        alt: "Brad answers insurance, claims and contact questions. Steve is just for fun.",
      },
    ],
  },
  {
    id: "key-points",
    title: "Key points",
    summary: "The header is the same everywhere, products live under Solutions, only brokers can apply, and enquiries arrive in the admin portal.",
    body: [
      {
        type: "image",
        src: `${WEBSITE_IMG}/slide-18.jpg`,
        alt: "The header is the same everywhere, products live under Solutions, only brokers can apply, and enquiries arrive in the admin portal.",
      },
    ],
  },
];

export const adminPortalLessons: TrainingLesson[] = [
  {
    id: "module-overview",
    title: "What this module covers",
    summary: "Signing in and the overview, applications and underwriting, enquiries and brokers, and quotes, policies and email.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-02.jpg`,
        alt: "Signing in and the overview, applications and underwriting, enquiries and brokers, and quotes, policies and email.",
      },
    ],
  },
  {
    id: "signing-in-overview-section",
    title: "Signing in and the overview",
    summary: "The overview shows the whole book across every brokerage, and what needs action today.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-03.jpg`,
        alt: "The overview shows the whole book across every brokerage, and what needs action today.",
      },
    ],
  },
  {
    id: "signing-in",
    title: "Signing in",
    summary: "Your Otta email and password, or sign in with Microsoft or Google.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-04.jpg`,
        alt: "Your Otta email and password, or sign in with Microsoft or Google.",
      },
    ],
  },
  {
    id: "the-overview",
    title: "The overview",
    summary: "The menu, what's waiting on you, Live activity as things arrive, and the celebration pop.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-05.jpg`,
        alt: "The menu, what's waiting on you, Live activity as things arrive, and the celebration pop.",
      },
    ],
  },
  {
    id: "when-something-new-arrives",
    title: "When something new arrives",
    summary: "A confetti pop and a card say what has arrived, and it's added to Live activity.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-06.jpg`,
        alt: "A confetti pop and a card say what has arrived, and it's added to Live activity.",
      },
    ],
  },
  {
    id: "book-at-a-glance",
    title: "The book at a glance",
    summary: "Headline numbers for active policies, premium and renewals, broken down by product.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-07.jpg`,
        alt: "Headline numbers for active policies, premium and renewals, broken down by product.",
      },
    ],
  },
  {
    id: "applications-underwriting-section",
    title: "Applications and underwriting",
    summary: "Every online application and claim lands here, with a first read from the underwriting assistant.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-08.jpg`,
        alt: "Every online application and claim lands here, with a first read from the underwriting assistant.",
      },
    ],
  },
  {
    id: "applications-list",
    title: "The applications list",
    summary: "Each application or claim, newest first, with its status.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-09.jpg`,
        alt: "Each application or claim, newest first, with its status.",
      },
    ],
  },
  {
    id: "opening-an-application",
    title: "Opening an application",
    summary: "The insured and reference, the V13 worksheet download, and Download PDF of what was submitted.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-10.jpg`,
        alt: "The insured and reference, the V13 worksheet download, and Download PDF of what was submitted.",
      },
    ],
  },
  {
    id: "underwriting-assistant",
    title: "The underwriting assistant",
    summary: "Accept, refer or decline, red flags against the Underwriting Guide, and suggested terms.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-11.jpg`,
        alt: "Accept, refer or decline, red flags against the Underwriting Guide, and suggested terms.",
      },
    ],
  },
  {
    id: "following-up-broker",
    title: "Following up with the broker",
    summary: "A draft email asking for anything missing, which you can copy or open straight in your email.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-12.jpg`,
        alt: "A draft email asking for anything missing, which you can copy or open straight in your email.",
      },
    ],
  },
  {
    id: "copying-into-v13",
    title: "Copying into the V13 worksheet",
    summary: "Choose the rating region, then copy each block into the matching yellow boxes in V13.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-13.jpg`,
        alt: "Choose the rating region, then copy each block into the matching yellow boxes in V13.",
      },
    ],
  },
  {
    id: "enquiries-brokers-section",
    title: "Enquiries and brokers",
    summary: "Website enquiries, new broker sign ups and the brokerages we work with.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-14.jpg`,
        alt: "Website enquiries, new broker sign ups and the brokerages we work with.",
      },
    ],
  },
  {
    id: "website-enquiries",
    title: "Website enquiries",
    summary: "Each enquiry from the Contact Us page, marked handled once you've replied.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-15.jpg`,
        alt: "Each enquiry from the Contact Us page, marked handled once you've replied.",
      },
    ],
  },
  {
    id: "approving-broker-access",
    title: "Approving broker portal access",
    summary: "Choose or create their brokerage, then Approve and send invite, or invite a broker yourself.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-16.jpg`,
        alt: "Choose or create their brokerage, then Approve and send invite, or invite a broker yourself.",
      },
    ],
  },
  {
    id: "brokers",
    title: "Brokers",
    summary: "Search brokerages and brokers, Broker view shows the portal as they see it, and open a brokerage for its people, quotes and policies.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-17.jpg`,
        alt: "Search brokerages and brokers, Broker view shows the portal as they see it, and open a brokerage for its people, quotes and policies.",
      },
    ],
  },
  {
    id: "quotes-policies-email-section",
    title: "Quotes, policies and email",
    summary: "From quote to bound policy, and making sure our emails arrive.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-18.jpg`,
        alt: "From quote to bound policy, and making sure our emails arrive.",
      },
    ],
  },
  {
    id: "bind-instruction",
    title: "A bind instruction",
    summary: "The broker's instruction to bind, with the inception date, notes and the original request.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-19.jpg`,
        alt: "The broker's instruction to bind, with the inception date, notes and the original request.",
      },
    ],
  },
  {
    id: "policies",
    title: "Policies",
    summary: "Search by insured, policy number, broker or InsuredHQ reference, and filter by product.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-20.jpg`,
        alt: "Search by insured, policy number, broker or InsuredHQ reference, and filter by product.",
      },
    ],
  },
  {
    id: "email-check",
    title: "Email check",
    summary: "Whether email sending is switched on, a test send, and the senders verified in Brevo.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-21.jpg`,
        alt: "Whether email sending is switched on, a test send, and the senders verified in Brevo.",
      },
    ],
  },
  {
    id: "key-points",
    title: "Key points",
    summary: "Start on the overview, let the assistant give a first read, copy into V13, and approve access from Access requests.",
    body: [
      {
        type: "image",
        src: `${ADMIN_PORTAL_IMG}/slide-22.jpg`,
        alt: "Start on the overview, let the assistant give a first read, copy into V13, and approve access from Access requests.",
      },
    ],
  },
];

export const brokerPortalLessons: TrainingLesson[] = [
  {
    id: "module-overview",
    title: "What this module covers",
    summary: "Getting access, the dashboard, forms and applications, and quotes, policies and help.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-02.jpg`,
        alt: "Getting access, the dashboard, forms and applications, and quotes, policies and help.",
      },
    ],
  },
  {
    id: "getting-access-section",
    title: "Getting access",
    summary: "Brokers sign in with a password, an emailed link or their work account.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-03.jpg`,
        alt: "Brokers sign in with a password, an emailed link or their work account.",
      },
    ],
  },
  {
    id: "signing-in",
    title: "Signing in",
    summary: "Work email and password, or sign in with Microsoft or Google.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-04.jpg`,
        alt: "Work email and password, or sign in with Microsoft or Google.",
      },
    ],
  },
  {
    id: "requesting-access",
    title: "Requesting access",
    summary: "Name, work email, brokerage and FSP number. The Otta team checks it, usually within one working day.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-05.jpg`,
        alt: "Name, work email, brokerage and FSP number. The Otta team checks it, usually within one working day.",
      },
    ],
  },
  {
    id: "welcome-link",
    title: "The welcome link",
    summary: "The broker's new account: choose and confirm a password, then go straight into the portal.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-06.jpg`,
        alt: "The broker's new account: choose and confirm a password, then go straight into the portal.",
      },
    ],
  },
  {
    id: "emailed-sign-in-links",
    title: "Emailed sign-in links",
    summary: "Enter the work email on the account, and the link works once, for 20 minutes.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-07.jpg`,
        alt: "Enter the work email on the account, and the link works once, for 20 minutes.",
      },
    ],
  },
  {
    id: "dashboard",
    title: "The dashboard",
    summary: "Everything a broker has with Otta, on one page: the menu, open items, and shortcuts to every form.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-09.jpg`,
        alt: "Everything a broker has with Otta, on one page: the menu, open items, and shortcuts to every form.",
      },
    ],
  },
  {
    id: "forms-applications-section",
    title: "Forms and applications",
    summary: "Brokers can complete a form themselves or send a secure link to their client.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-10.jpg`,
        alt: "Brokers can complete a form themselves or send a secure link to their client.",
      },
    ],
  },
  {
    id: "forms",
    title: "Forms",
    summary: "Choose the type, search or filter by product, and select a form to complete it or send it to a client.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-11.jpg`,
        alt: "Choose the type, search or filter by product, and select a form to complete it or send it to a client.",
      },
    ],
  },
  {
    id: "completing-form-online",
    title: "Completing a form online",
    summary: "Jump to any section, fill in the answers as progress is kept, download a PDF, or submit.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-12.jpg`,
        alt: "Jump to any section, fill in the answers as progress is kept, download a PDF, or submit.",
      },
    ],
  },
  {
    id: "help-with-cover-options",
    title: "Help with cover options",
    summary: "Select the question mark beside a cover option for a short explanation and a link to the wording.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-13.jpg`,
        alt: "Select the question mark beside a cover option for a short explanation and a link to the wording.",
      },
    ],
  },
  {
    id: "sending-form-to-client",
    title: "Sending a form to a client",
    summary: "Choose which form to send.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-14.jpg`,
        alt: "Choose which form to send.",
      },
    ],
  },
  {
    id: "sending-form-to-client-2",
    title: "Sending a form to a client (continued)",
    summary: "The client's name and email, an optional note, then Create link to email it to them.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-15.jpg`,
        alt: "The client's name and email, an optional note, then Create link to email it to them.",
      },
    ],
  },
  {
    id: "tracking-applications",
    title: "Tracking applications",
    summary: "Everything sent to Otta, links sent to clients and whether they're done, and send another or fill one in.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-16.jpg`,
        alt: "Everything sent to Otta, links sent to clients and whether they're done, and send another or fill one in.",
      },
    ],
  },
  {
    id: "quotes-policies-help-section",
    title: "Quotes, policies and help",
    summary: "From quote to bound policy, and where to get help.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-17.jpg`,
        alt: "From quote to bound policy, and where to get help.",
      },
    ],
  },
  {
    id: "quote-requests",
    title: "Quote requests",
    summary: "Search quote requests, then select one to see its status and details.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-18.jpg`,
        alt: "Search quote requests, then select one to see its status and details.",
      },
    ],
  },
  {
    id: "binding-a-quote",
    title: "Binding a quote",
    summary: "Bind this quote once the client accepts, set the inception date, confirm, and instruct Otta to bind.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-19.jpg`,
        alt: "Bind this quote once the client accepts, set the inception date, confirm, and instruct Otta to bind.",
      },
    ],
  },
  {
    id: "policies",
    title: "Policies",
    summary: "Search policies, then select one for its details and documents.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-20.jpg`,
        alt: "Search policies, then select one for its details and documents.",
      },
    ],
  },
  {
    id: "documents",
    title: "Documents",
    summary: "Policy documents for the brokerage, available to download.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-21.jpg`,
        alt: "Policy documents for the brokerage, available to download.",
      },
    ],
  },
  {
    id: "help-and-contact",
    title: "Help and contact",
    summary: "Email the right underwriting team directly, and how colleagues get access or reset a password.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-22.jpg`,
        alt: "Email the right underwriting team directly, and how colleagues get access or reset a password.",
      },
    ],
  },
  {
    id: "your-account",
    title: "Your account",
    summary: "Your details, and choosing a new password.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-23.jpg`,
        alt: "Your details, and choosing a new password.",
      },
    ],
  },
  {
    id: "key-points",
    title: "Key points",
    summary: "Brokers request access and get a welcome email, forms can be sent or completed online, everything shows in Applications, and accepted quotes bind with one instruction.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_IMG}/slide-24.jpg`,
        alt: "Brokers request access and get a welcome email, forms can be sent or completed online, everything shows in Applications, and accepted quotes bind with one instruction.",
      },
    ],
  },
];

export const brokerPortalGuideLessons: TrainingLesson[] = [
  {
    id: "getting-started-five-steps",
    title: "Getting started in five steps",
    summary: "Set your password, find your way around, complete or send a form, track it, and ask us anything.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-02.jpg`,
        alt: "Set your password, find your way around, complete or send a form, track it, and ask us anything.",
      },
    ],
  },
  {
    id: "signing-in-section",
    title: "Signing in",
    summary: "Your account is ready. Here's how to get in, now and next time.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-03.jpg`,
        alt: "Your account is ready. Here's how to get in, now and next time.",
      },
    ],
  },
  {
    id: "set-your-password",
    title: "Set your password",
    summary: "Open the link in your welcome email, choose and confirm a password, then select Set password.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-04.jpg`,
        alt: "Open the link in your welcome email, choose and confirm a password, then select Set password.",
      },
    ],
  },
  {
    id: "signing-in-next-time",
    title: "Signing in next time",
    summary: "Your work email and password, or your Microsoft or Google work account.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-05.jpg`,
        alt: "Your work email and password, or your Microsoft or Google work account.",
      },
    ],
  },
  {
    id: "your-dashboard",
    title: "Your dashboard",
    summary: "Everything you have with Otta, on one page: the menu, your open items, and shortcuts to every form.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-07.jpg`,
        alt: "Everything you have with Otta, on one page: the menu, your open items, and shortcuts to every form.",
      },
    ],
  },
  {
    id: "applying-for-cover-section",
    title: "Applying for cover",
    summary: "Complete a form yourself, or send it to your client to fill in.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-08.jpg`,
        alt: "Complete a form yourself, or send it to your client to fill in.",
      },
    ],
  },
  {
    id: "finding-the-right-form",
    title: "Finding the right form",
    summary: "Choose the type, search or filter by product. Forms are grouped by product.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-09.jpg`,
        alt: "Choose the type, search or filter by product. Forms are grouped by product.",
      },
    ],
  },
  {
    id: "completing-form-online",
    title: "Completing a form online",
    summary: "Jump to any section, fill in the answers, download a PDF copy, or submit.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-10.jpg`,
        alt: "Jump to any section, fill in the answers, download a PDF copy, or submit.",
      },
    ],
  },
  {
    id: "not-sure-which-cover",
    title: "Not sure which cover?",
    summary: "Select the question mark beside an option for a short explanation and a link to the wording.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-11.jpg`,
        alt: "Select the question mark beside an option for a short explanation and a link to the wording.",
      },
    ],
  },
  {
    id: "sending-form-to-client",
    title: "Sending a form to your client",
    summary: "Your client's name and email, an optional note, then Create link. Replies come back to you.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-12.jpg`,
        alt: "Your client's name and email, an optional note, then Create link. Replies come back to you.",
      },
    ],
  },
  {
    id: "tracking-applications",
    title: "Tracking applications",
    summary: "Everything sent to Otta, links you've sent and whether they're done, or send another form.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-13.jpg`,
        alt: "Everything sent to Otta, links you've sent and whether they're done, or send another form.",
      },
    ],
  },
  {
    id: "quotes-and-policies-section",
    title: "Quotes and policies",
    summary: "From quote to bound policy.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-14.jpg`,
        alt: "From quote to bound policy.",
      },
    ],
  },
  {
    id: "binding-a-quote",
    title: "Binding a quote",
    summary: "Open the quote, bind once your client accepts, choose the inception date, confirm, and instruct Otta to bind.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-15.jpg`,
        alt: "Open the quote, bind once your client accepts, choose the inception date, confirm, and instruct Otta to bind.",
      },
    ],
  },
  {
    id: "your-policies",
    title: "Your policies",
    summary: "Search your policies, then open one for its details and documents.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-16.jpg`,
        alt: "Search your policies, then open one for its details and documents.",
      },
    ],
  },
  {
    id: "help-when-you-need-it-section",
    title: "Help when you need it",
    summary: "You talk directly to the underwriters who make the decisions.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-17.jpg`,
        alt: "You talk directly to the underwriters who make the decisions.",
      },
    ],
  },
  {
    id: "help-and-contact",
    title: "Help and contact",
    summary: "Email the right team directly, request access for colleagues, or get password help.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-18.jpg`,
        alt: "Email the right team directly, request access for colleagues, or get password help.",
      },
    ],
  },
  {
    id: "were-here-to-help",
    title: "We're here to help",
    summary: "Call 0800 003 545, email hello@ottainsurance.co.nz, or claims@ottainsurance.co.nz.",
    body: [
      {
        type: "image",
        src: `${BROKER_PORTAL_GUIDE_IMG}/slide-19.jpg`,
        alt: "Call 0800 003 545, email hello@ottainsurance.co.nz, or claims@ottainsurance.co.nz.",
      },
    ],
  },
];

export const techTrainingModules: TrainingModule[] = [
  {
    id: "website",
    label: "The Otta Website",
    tag: "Website",
    description: "A tour of ottainsurance.co.nz: getting in while it's in preview, finding your way around, product pages, and where visitors go for resources, claims and contact.",
    status: "available",
    href: "/tech-system/website",
    pdfUrl: "/training/otta-website-101.pdf",
    lessons: websiteLessons,
  },
  {
    id: "admin-portal",
    label: "The Admin Portal",
    tag: "Admin Portal",
    description: "How the Otta team runs the book: the overview and Live activity, reading an application with the underwriting assistant, enquiries and brokers, and quotes, policies and email.",
    status: "available",
    href: "/tech-system/admin-portal",
    pdfUrl: "/training/otta-admin-portal-101.pdf",
    lessons: adminPortalLessons,
  },
  {
    id: "broker-portal",
    label: "The Broker Portal",
    tag: "Broker Portal",
    description: "A tour of the portal brokers use day to day: getting access, their dashboard, completing or sending forms, tracking applications, and quotes, policies and help.",
    status: "available",
    href: "/tech-system/broker-portal",
    pdfUrl: "/training/otta-broker-portal-101.pdf",
    lessons: brokerPortalLessons,
  },
  {
    id: "broker-portal-guide",
    label: "Broker Portal Guide",
    tag: "Guide",
    description: "The getting-started guide we send brokers when their account is approved, worth knowing since it's what they see first.",
    status: "available",
    href: "/tech-system/broker-portal-guide",
    pdfUrl: "/training/otta-broker-portal-guide.pdf",
    lessons: brokerPortalGuideLessons,
  },
];
