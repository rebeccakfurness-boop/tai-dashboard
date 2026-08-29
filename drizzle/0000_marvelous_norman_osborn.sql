CREATE TABLE "batch_brokers" (
	"batch_id" integer NOT NULL,
	"broker_id" integer NOT NULL,
	CONSTRAINT "batch_brokers_batch_id_broker_id_pk" PRIMARY KEY("batch_id","broker_id")
);
--> statement-breakpoint
CREATE TABLE "brokers" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"broking_company" text NOT NULL,
	"status" text DEFAULT 'Pending' NOT NULL,
	"date_added" date DEFAULT now() NOT NULL,
	CONSTRAINT "brokers_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "registration_batches" (
	"id" serial PRIMARY KEY NOT NULL,
	"processed_at" timestamp with time zone DEFAULT now() NOT NULL,
	"broking_company" text NOT NULL,
	"requester_name" text NOT NULL,
	"requester_email" text NOT NULL,
	"broker_count" integer NOT NULL,
	"spreadsheet_export_filename" text,
	"email_draft_generated" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "resource_assets" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" text NOT NULL,
	"file_url" text,
	"file_type" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "batch_brokers" ADD CONSTRAINT "batch_brokers_batch_id_registration_batches_id_fk" FOREIGN KEY ("batch_id") REFERENCES "public"."registration_batches"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "batch_brokers" ADD CONSTRAINT "batch_brokers_broker_id_brokers_id_fk" FOREIGN KEY ("broker_id") REFERENCES "public"."brokers"("id") ON DELETE cascade ON UPDATE no action;