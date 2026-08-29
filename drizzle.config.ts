import { config as loadEnv } from "dotenv";
import type { Config } from "drizzle-kit";

// drizzle-kit is a standalone CLI, not Next.js — it doesn't auto-load
// .env.local the way `next dev`/`next build` do, so load it explicitly.
loadEnv({ path: ".env.local" });
loadEnv({ path: ".env" });

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
} satisfies Config;
