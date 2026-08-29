import { ChevronDown } from "lucide-react";
import { PageHeader, PageContainer } from "@/components/page-header";
import { brokerRegistrationGroup } from "@/lib/nav";
import { getDb, schema, DatabaseNotConfiguredError } from "@/db";
import { desc } from "drizzle-orm";

// Always hit the database fresh — this must never be statically frozen at
// build time (e.g. showing "database not connected" forever after it's
// actually been connected).
export const dynamic = "force-dynamic";

async function loadHistory() {
  try {
    const db = getDb();
    const batches = await db.query.registrationBatches.findMany({
      orderBy: [desc(schema.registrationBatches.processedAt)],
      with: {
        batchBrokers: {
          with: { broker: true },
        },
      },
    });
    return { batches, error: null as string | null };
  } catch (err) {
    if (err instanceof DatabaseNotConfiguredError) {
      return {
        batches: [],
        error:
          "The broker database isn't connected yet — ask your admin to finish setup (see README).",
      };
    }
    console.error(err);
    return {
      batches: [],
      error: "Something went wrong loading history — try refreshing.",
    };
  }
}

type Batch = Awaited<ReturnType<typeof loadHistory>>["batches"][number];

function BatchCard({ batch }: { batch: Batch }) {
  const brokers = batch.batchBrokers.map((bb) => bb.broker);
  return (
    <details className="group scroll-mt-24 rounded-2xl border border-border bg-surface shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4">
        <div className="min-w-0">
          <p className="truncate font-bold text-foreground">{batch.brokingCompany}</p>
          <p className="text-xs text-muted">
            {new Date(batch.processedAt).toLocaleDateString("en-NZ", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}{" "}
            · Requested by {batch.requesterName}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
            {batch.brokerCount} broker{batch.brokerCount === 1 ? "" : "s"}
          </span>
          <ChevronDown className="size-4 text-muted transition-transform group-open:rotate-180" />
        </div>
      </summary>
      <div className="border-t border-border px-5 py-4">
        <ul className="space-y-1.5 text-sm">
          {brokers.map((b) => (
            <li key={b.id} className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-foreground">
                {b.firstName} {b.lastName}
              </span>
              <span className="text-muted">{b.email}</span>
              {b.phone && <span className="text-muted">· {b.phone}</span>}
              <span className="rounded-full bg-border/60 px-2 py-0.5 text-[11px] font-semibold text-muted">
                {b.status}
              </span>
            </li>
          ))}
        </ul>
        {batch.spreadsheetExportFilename && (
          <p className="mt-3 text-xs text-muted">
            Exported as {batch.spreadsheetExportFilename}
          </p>
        )}
      </div>
    </details>
  );
}

export default async function HistoryPage() {
  const { batches, error } = await loadHistory();

  return (
    <div>
      <PageHeader
        icon={brokerRegistrationGroup.items[1].icon}
        eyebrow="Broker Registration"
        title="History"
        description="Every batch of brokers registered through this tool, most recent first."
      />
      <PageContainer>
        {error && (
          <p className="mb-6 rounded-lg border border-accent-coral/40 bg-accent-coral/10 px-4 py-3 text-sm text-accent-coral-strong">
            {error}
          </p>
        )}
        {!error && batches.length === 0 && (
          <p className="rounded-xl border border-dashed border-border-strong px-4 py-8 text-center text-sm text-muted">
            No registrations yet — batches will show up here once you save one from New
            Registration.
          </p>
        )}
        <div className="space-y-4">
          {batches.map((batch) => (
            <BatchCard key={batch.id} batch={batch} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
