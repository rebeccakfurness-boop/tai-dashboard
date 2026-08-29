import { drizzle, type NeonDatabase } from "drizzle-orm/neon-serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import * as schema from "./schema";

// Node.js runtime only (not Edge) — the serverless driver's Pool/transaction
// support needs a real WebSocket implementation, which `ws` provides here.
neonConfig.webSocketConstructor = ws;

export class DatabaseNotConfiguredError extends Error {
  constructor() {
    super(
      "DATABASE_URL is not set — the broker database hasn't been connected yet.",
    );
    this.name = "DatabaseNotConfiguredError";
  }
}

let cachedPool: Pool | null = null;
let cachedDb: NeonDatabase<typeof schema> | null = null;

/**
 * Lazily creates the DB client on first use, never at module import time —
 * this keeps `next build` and every unrelated page working even before
 * DATABASE_URL is set.
 */
export function getDb(): NeonDatabase<typeof schema> {
  if (cachedDb) return cachedDb;
  const url = process.env.DATABASE_URL;
  if (!url) throw new DatabaseNotConfiguredError();
  cachedPool = new Pool({ connectionString: url });
  cachedDb = drizzle(cachedPool, { schema });
  return cachedDb;
}

export { schema };
