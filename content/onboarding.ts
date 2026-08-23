import type { OnboardingSection } from "./types";

export const onboardingSections: OnboardingSection[] = [
  {
    title: "Get oriented",
    tasks: [
      { label: "Read the Overview tab", href: "/" },
      { label: "Read the Property Process end to end", href: "/property/process" },
      { label: "Read the Travel Process end to end", href: "/travel" },
    ],
  },
  {
    title: "Learn the tools",
    tasks: [
      { label: "Bookmark the Flood Mapping tab for your region", href: "/property/flood-mapping" },
      { label: "Try the Property Reference Tools", href: "/property/reference-tools" },
      { label: "Try the Cmd/Ctrl+K quick search", detail: "Press Cmd+K (or Ctrl+K) anywhere in the dashboard" },
    ],
  },
  {
    title: "Learn the standards",
    tasks: [
      { label: "Review the file naming conventions", href: "/resources" },
      { label: "Review the email inbox organisation guidelines", href: "/resources" },
      { label: "Review the underwriting guidance / troubleshooting scenarios", href: "/property/guidance" },
    ],
  },
  {
    title: "Know who's who",
    tasks: [
      { label: "Review the broker list", href: "/resources" },
      { label: "Confirm who to escalate referrals to", detail: "Check with your team lead" },
    ],
  },
];
