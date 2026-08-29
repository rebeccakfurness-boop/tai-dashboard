import { NextResponse } from "next/server";
import { getDb, schema } from "@/db";
import { handleApiError } from "@/lib/broker-registration/api-helpers";

type IncomingBroker = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { brokingCompany, requesterName, requesterEmail, newBrokers } = body as {
      brokingCompany?: string;
      requesterName?: string;
      requesterEmail?: string;
      newBrokers?: IncomingBroker[];
    };

    if (!brokingCompany?.trim() || !requesterName?.trim() || !requesterEmail?.trim()) {
      return NextResponse.json(
        {
          error:
            "Broking company, requester name and requester email are all required before saving.",
        },
        { status: 400 },
      );
    }
    if (!Array.isArray(newBrokers) || newBrokers.length === 0) {
      return NextResponse.json(
        { error: "There's nothing new to add — check the list above." },
        { status: 400 },
      );
    }
    for (const b of newBrokers) {
      if (!b.email?.trim() || !b.firstName?.trim()) {
        return NextResponse.json(
          {
            error:
              "Every row needs at least a first name and an email before saving — fix or remove the incomplete row.",
          },
          { status: 400 },
        );
      }
    }

    const db = getDb();

    const result = await db.transaction(async (tx) => {
      // Re-check for duplicates inside the transaction, in case someone
      // else registered one of these emails between the review step and
      // this save.
      const existing = await tx
        .select({ email: schema.brokers.email })
        .from(schema.brokers);
      const existingSet = new Set(existing.map((r) => r.email.toLowerCase()));

      const trulyNew = newBrokers.filter(
        (b) => !existingSet.has(b.email.trim().toLowerCase()),
      );
      const skipped = newBrokers
        .filter((b) => existingSet.has(b.email.trim().toLowerCase()))
        .map((b) => b.email);

      if (trulyNew.length === 0) {
        return { batchId: null, insertedBrokers: [], skipped };
      }

      const insertedBrokers = await tx
        .insert(schema.brokers)
        .values(
          trulyNew.map((b) => ({
            firstName: b.firstName.trim(),
            lastName: b.lastName.trim(),
            email: b.email.trim().toLowerCase(),
            phone: b.phone?.trim() || null,
            brokingCompany: brokingCompany.trim(),
            status: "Pending",
          })),
        )
        .returning();

      const [batch] = await tx
        .insert(schema.registrationBatches)
        .values({
          brokingCompany: brokingCompany.trim(),
          requesterName: requesterName.trim(),
          requesterEmail: requesterEmail.trim(),
          brokerCount: insertedBrokers.length,
          emailDraftGenerated: true,
        })
        .returning();

      await tx.insert(schema.batchBrokers).values(
        insertedBrokers.map((b) => ({
          batchId: batch.id,
          brokerId: b.id,
        })),
      );

      return { batchId: batch.id, insertedBrokers, skipped };
    });

    return NextResponse.json(result);
  } catch (err) {
    return handleApiError(err);
  }
}
