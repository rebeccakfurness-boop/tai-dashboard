import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="34" height="34" rx="8" fill="#2ea3f2" />
        <path
          d="M9 12.5C9 11.1193 10.1193 10 11.5 10H22.5C23.8807 10 25 11.1193 25 12.5V21.5C25 22.8807 23.8807 24 22.5 24H11.5C10.1193 24 9 22.8807 9 21.5V12.5Z"
          fill="white"
          fillOpacity="0.14"
        />
        <path
          d="M13 22V15.2L17 12L21 15.2V22"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15.4 22V18h3.2v4" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-extrabold tracking-tight text-[17px] text-foreground">
          TAI
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
          Underwriting Desk
        </span>
      </span>
    </div>
  );
}
