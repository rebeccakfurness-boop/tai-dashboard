import { NextResponse } from "next/server";
import { getDb, schema } from "@/db";
import { handleApiError } from "@/lib/broker-registration/api-helpers";

export async function POST(request: Request) {
  try {
    const { emails } = await request.json();
    if (!Array.isArray(emails) || emails.length === 0) {
      return NextResponse.json({ error: "No emails to check." }, { status: 400 });
    }

    const db = getDb();
    const allBrokers = await db
      .select({ email: schema.brokers.email, status: schema.brokers.status })
      .from(schema.brokers);

    const existingMap = new Map(
      allBrokers.map((b) => [b.email.toLowerCase(), b.status]),
    );

    const results = (emails as string[]).map((rawEmail) => {
      const email = rawEmail.trim().toLowerCase();
      const existingStatus = existingMap.get(email);
      return existingStatus
        ? { email, status: "existing" as const, existingStatus }
        : { email, status: "new" as const };
    });

    return NextResponse.json({ results });
  } catch (err) {
    return handleApiError(err);
  }
}
