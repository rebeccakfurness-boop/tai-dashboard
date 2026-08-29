import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { eq } from "drizzle-orm";
import { getDb, schema } from "@/db";
import { handleApiError } from "@/lib/broker-registration/api-helpers";

function todayFilename(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `Current_IWL_Brokers_-_${y}${m}${d}.xlsx`;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const batchId = searchParams.get("batchId");

    const db = getDb();
    const allBrokers = await db
      .select()
      .from(schema.brokers)
      .orderBy(schema.brokers.brokingCompany, schema.brokers.lastName);

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Brokers");
    sheet.columns = [
      { header: "First Name", key: "firstName", width: 18 },
      { header: "Last Name", key: "lastName", width: 18 },
      { header: "Email", key: "email", width: 32 },
      { header: "Phone", key: "phone", width: 18 },
      { header: "Broking Company", key: "brokingCompany", width: 28 },
      { header: "Status", key: "status", width: 14 },
      { header: "Date Added", key: "dateAdded", width: 14 },
    ];
    sheet.getRow(1).font = { bold: true };

    for (const b of allBrokers) {
      sheet.addRow({
        firstName: b.firstName,
        lastName: b.lastName,
        email: b.email,
        phone: b.phone ?? "",
        brokingCompany: b.brokingCompany,
        status: b.status,
        dateAdded: b.dateAdded,
      });
    }

    const filename = todayFilename();
    const buffer = await workbook.xlsx.writeBuffer();

    if (batchId) {
      const id = Number(batchId);
      if (Number.isFinite(id)) {
        await db
          .update(schema.registrationBatches)
          .set({ spreadsheetExportFilename: filename })
          .where(eq(schema.registrationBatches.id, id));
      }
    }

    return new NextResponse(Buffer.from(buffer), {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (err) {
    return handleApiError(err);
  }
}
