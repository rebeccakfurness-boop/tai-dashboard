import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  date,
  timestamp,
  primaryKey,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const brokers = pgTable("brokers", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone"),
  brokingCompany: text("broking_company").notNull(),
  // Free text rather than a fixed enum ("Active" / "Pending" today) so new
  // statuses can be introduced later without a schema migration.
  status: text("status").notNull().default("Pending"),
  dateAdded: date("date_added").notNull().defaultNow(),
});

export const registrationBatches = pgTable("registration_batches", {
  id: serial("id").primaryKey(),
  processedAt: timestamp("processed_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  brokingCompany: text("broking_company").notNull(),
  requesterName: text("requester_name").notNull(),
  requesterEmail: text("requester_email").notNull(),
  brokerCount: integer("broker_count").notNull(),
  // Set once someone actually downloads the spreadsheet for this batch —
  // null until then, see /api/broker-registration/export.
  spreadsheetExportFilename: text("spreadsheet_export_filename"),
  emailDraftGenerated: boolean("email_draft_generated").notNull().default(false),
  // TODO (Phase 2): add a `delivery_status` ("sent" | "failed" | "pending")
  // column once real server-side sending (e.g. Resend) replaces the mailto
  // draft, and surface it in the History table.
});

export const batchBrokers = pgTable(
  "batch_brokers",
  {
    batchId: integer("batch_id")
      .notNull()
      .references(() => registrationBatches.id, { onDelete: "cascade" }),
    brokerId: integer("broker_id")
      .notNull()
      .references(() => brokers.id, { onDelete: "cascade" }),
  },
  (table) => [primaryKey({ columns: [table.batchId, table.brokerId] })],
);

// Standard onboarding attachments (Quick Start Guide, Quick Quote video, CFYR
// Fact Sheet PDF, etc). Seeded with placeholder rows — file_url is populated
// once the files are hosted somewhere (see db/seed.ts).
// TODO (Phase 2): once populated, auto-attach these to registration emails
// sent via the planned "Send now" server-side email flow.
export const resourceAssets = pgTable("resource_assets", {
  id: serial("id").primaryKey(),
  label: text("label").notNull(),
  fileUrl: text("file_url"),
  fileType: text("file_type").notNull(),
});

export const registrationBatchesRelations = relations(
  registrationBatches,
  ({ many }) => ({
    batchBrokers: many(batchBrokers),
  }),
);

export const brokersRelations = relations(brokers, ({ many }) => ({
  batchBrokers: many(batchBrokers),
}));

export const batchBrokersRelations = relations(batchBrokers, ({ one }) => ({
  batch: one(registrationBatches, {
    fields: [batchBrokers.batchId],
    references: [registrationBatches.id],
  }),
  broker: one(brokers, {
    fields: [batchBrokers.brokerId],
    references: [brokers.id],
  }),
}));
