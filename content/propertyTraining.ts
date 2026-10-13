import type { TrainingModule } from "./types";
import { propertyClosingLessons } from "./propertyClosingLessons";

export const propertyProcessModule: TrainingModule = {
  id: "process-overview",
  label: "Property Process",
  description: "The full step-by-step Property quotation process, from first receipt to the Quote Register.",
  status: "available",
  href: "/property/training/process",
};

export const propertyQuoteTypeModules: TrainingModule[] = [
  {
    id: "new-business",
    label: "New Business Quote",
    description: "Processing a New Business quote, including each sub-type below.",
    status: "coming-soon",
  },
  {
    id: "nb-standard",
    label: "NB",
    description: "Social housing, vacant property, rental property.",
    status: "coming-soon",
  },
  { id: "endorsement", label: "Endorsement", description: "Processing an endorsement.", status: "coming-soon" },
  { id: "airbnb", label: "AirBNB", description: "Processing an AirBNB risk.", status: "coming-soon" },
  {
    id: "body-corporate",
    label: "Body Corporate",
    description: "Processing a Body Corporate risk.",
    status: "coming-soon",
  },
  { id: "ll", label: "LL", description: "Processing an LL risk.", status: "coming-soon" },
  { id: "lle", label: "LLE", description: "Processing an LLE risk.", status: "coming-soon" },
  { id: "renewal", label: "Renewal Quote", description: "Processing a Renewal quote.", status: "coming-soon" },
  {
    id: "mortgagee-sale",
    label: "Mortgagee Sale Quote",
    description: "Processing a Mortgagee Sale quote.",
    status: "coming-soon",
  },
  {
    id: "closing",
    label: "Closing",
    tag: "Closing",
    description: "Checking a closing, then producing the schedule and COC.",
    status: "available",
    href: "/property/training/closing",
    pdfUrl: "/training/processing-closings-property.pdf",
    lessons: propertyClosingLessons,
  },
  {
    id: "referral-beazley",
    label: "Referral to Beazley",
    description: "How and when to refer a risk to Beazley.",
    status: "coming-soon",
  },
];

export const propertyExtraModules: TrainingModule[] = [
  {
    id: "all-good-diff",
    label: "Differences with All Good",
    description: "100 / 300.",
    status: "coming-soon",
  },
  {
    id: "naming-conventions-101",
    label: "Naming Conventions",
    description: "File and folder naming, step by step.",
    status: "coming-soon",
  },
  { id: "nhi-levies-101", label: "NHI Levies 101", description: "What NHI levies are and when they apply.", status: "coming-soon" },
  {
    id: "flood-mapping-101",
    label: "Flood Mapping 101",
    description: "How to run and record a flood mapping check.",
    status: "coming-soon",
  },
  {
    id: "mid-term-adjustments",
    label: "Mid-term Adjustments",
    description: "Adjustments that change the risk profile.",
    status: "coming-soon",
  },
  {
    id: "reinstatements",
    label: "Reinstatements After a Lapse",
    description: "Bringing a lapsed policy back on risk.",
    status: "coming-soon",
  },
  {
    id: "worksheet-field-guide",
    label: "Underwriting Worksheet: Field Guide",
    description: "What each field on the worksheet means and how to complete it.",
    status: "coming-soon",
  },
  {
    id: "data-checklist-101",
    label: "Data Checklist 101",
    description: "The minimum data required before a quote can be rated.",
    status: "coming-soon",
  },
  {
    id: "quote-register-101",
    label: "Quote Register 101",
    description: "Logging every quote issued, for audit and reporting.",
    status: "coming-soon",
  },
];
