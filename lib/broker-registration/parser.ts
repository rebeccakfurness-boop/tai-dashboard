export type ParsedBrokerRow = {
  id: string;
  raw: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  needsCheck: boolean;
  reason?: string;
};

const EMAIL_REGEX = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
const MARKDOWN_MAILTO_REGEX = /\[([^\]]+)\]\(mailto:([^)\s]+)\)/i;
const PHONE_REGEX = /(\+?\d[\d\s().-]{6,}\d)/;

function cleanPhone(raw: string): string {
  return raw.replace(/\s+/g, " ").trim();
}

function splitName(full: string): { firstName: string; lastName: string } {
  const parts = full.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

function makeId(index: number): string {
  return `row-${index}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Reads a pasted, line-per-person broker list into structured rows. Handles
 * plain "Name  email  phone" lines (space or tab separated) and markdown
 * mailto links like "[Name](mailto:email) – phone". Never drops a line —
 * anything it can't confidently read is flagged with needsCheck so it shows
 * up for manual review instead of disappearing.
 */
export function parseBrokerList(raw: string): ParsedBrokerRow[] {
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  return lines.map((line, index) => {
    let working = line;
    let name = "";
    let email = "";
    let phone = "";

    const mdMatch = working.match(MARKDOWN_MAILTO_REGEX);
    if (mdMatch) {
      name = mdMatch[1].trim();
      email = mdMatch[2].trim();
      working = working.replace(mdMatch[0], " ");
    } else {
      const emailMatch = working.match(EMAIL_REGEX);
      if (emailMatch) {
        email = emailMatch[0];
        working = working.replace(emailMatch[0], " ");
      }
    }

    const phoneMatch = working.match(PHONE_REGEX);
    if (phoneMatch) {
      phone = cleanPhone(phoneMatch[0]);
      working = working.replace(phoneMatch[0], " ");
    }

    if (!name) {
      name = working
        .replace(/[-–—|,;:]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }

    const reasons: string[] = [];
    if (!email) reasons.push("no email address found");
    if (!name) reasons.push("no name found");

    const { firstName, lastName } = splitName(name);

    return {
      id: makeId(index),
      raw: line,
      firstName,
      lastName,
      email,
      phone,
      needsCheck: reasons.length > 0,
      reason: reasons.length > 0 ? reasons.join("; ") : undefined,
    };
  });
}
