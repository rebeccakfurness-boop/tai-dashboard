import { cn } from "@/lib/utils";

const TAG_COLORS: Record<string, string> = {
  Quote: "bg-pink-500/15 text-pink-700 dark:text-pink-300",
  Closing: "bg-green-500/15 text-green-700 dark:text-green-300",
  Remittance: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300",
  Query: "bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300",
  Claim: "bg-amber-700/15 text-amber-800 dark:text-amber-300",
  Sam: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
  Underwriter: "bg-gray-500/15 text-gray-700 dark:text-gray-300",
  "Underwriter Support": "bg-violet-500/15 text-violet-700 dark:text-violet-300",
};

export function TagChip({ label }: { label: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        TAG_COLORS[label] ?? "bg-border/60 text-muted",
      )}
    >
      {label}
    </span>
  );
}
