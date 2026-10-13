import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col leading-none", className)}>
      <span className="font-logo text-[26px] font-extrabold tracking-tight text-brand-500">
        otta
      </span>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
        Underwriting Desk
      </span>
    </div>
  );
}
