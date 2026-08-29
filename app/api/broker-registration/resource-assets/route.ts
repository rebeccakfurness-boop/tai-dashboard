import { NextResponse } from "next/server";
import { getDb, schema } from "@/db";
import { handleApiError } from "@/lib/broker-registration/api-helpers";

export async function GET() {
  try {
    const db = getDb();
    const assets = await db.select().from(schema.resourceAssets);
    return NextResponse.json({ assets });
  } catch (err) {
    return handleApiError(err);
  }
}
