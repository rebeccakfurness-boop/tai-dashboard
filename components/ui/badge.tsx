import { cn } from "@/lib/utils";

const variants = {
  neutral: "bg-border/60 text-muted",
  brand: "bg-brand-100 text-brand-700",
  draft: "bg-accent-coral/15 text-accent-coral-strong",
  critical: "bg-red-500/10 text-red-600 dark:text-red-400",
  caution: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  info: "bg-brand-100 text-brand-700",
};

export function Badge({
  children,
  variant = "neutral",
  className,
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
