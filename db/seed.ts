/**
 * One-off seed for resource_assets. The actual files (Quick Start Guide
 * video, Quick Quote video, CFYR Fact Sheet PDF) haven't been hosted
 * anywhere yet, so file_url is left null — update these rows once they
 * have a home (e.g. Vercel Blob) rather than re-seeding.
 *
 * Run manually once DATABASE_URL is set:
 *   npx tsx db/seed.ts
 */
import { getDb, schema } from "./index";

async function seed() {
  const db = getDb();

  await db.insert(schema.resourceAssets).values([
    { label: "Quick Start Guide", fileUrl: null, fileType: "pdf" },
    { label: "Quick Quote video", fileUrl: null, fileType: "video" },
    { label: "CFYR Fact Sheet", fileUrl: null, fileType: "pdf" },
  ]);

  console.log("Seeded resource_assets with 3 placeholder rows.");
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
