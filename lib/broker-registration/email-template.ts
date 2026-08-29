export type EmailBrokerLine = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export function buildConfirmationEmail({
  brokingCompany,
  requesterName,
  newBrokers,
}: {
  brokingCompany: string;
  requesterName: string;
  newBrokers: EmailBrokerLine[];
}): { subject: string; body: string } {
  const subject = `RE: New users – ${brokingCompany}`;

  const bulletList = newBrokers
    .map((b) => {
      const name = [b.firstName, b.lastName].filter(Boolean).join(" ");
      const parts = [name, b.email, b.phone].filter(Boolean);
      return `- ${parts.join(" – ")}`;
    })
    .join("\n");

  const body = `Hi ${requesterName},

Many thanks for your email.

As requested, I have arranged log-in credentials for the Go leisure travel quote and bind portal.

The following staff will shortly receive log-in credentials directly from Go. Could you please advise your team accordingly?:

${bulletList}

Please refer to the attached videos on how to get started and how to process a quick quote.

If you have any questions or need more information, please do not hesitate to contact our team.

Kind regards,`;

  return { subject, body };
}

export function buildMailtoUrl({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}): string {
  // encodeURIComponent (not URLSearchParams) so spaces become %20 rather
  // than "+" — mailto: clients expect RFC 6068 percent-encoding, and some
  // treat a literal "+" in the body as a plus sign rather than a space.
  return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
