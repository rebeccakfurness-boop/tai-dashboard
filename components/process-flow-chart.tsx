import { ChevronDown, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export type FlowStep = {
  label: string;
  actor?: string;
};

export function ProcessFlowChart({ steps }: { steps: FlowStep[] }) {
  return (
    <Card className="overflow-x-auto p-5">
      <div className="flex min-w-max flex-col items-stretch gap-0 sm:min-w-0 sm:flex-row sm:items-center sm:justify-between">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center sm:flex-1 sm:flex-row">
            <div className="flex w-full flex-col items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-3.5 text-center transition-colors hover:border-brand-300">
              {step.actor && (
                <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-700">
                  {step.actor}
                </span>
              )}
              <span className="text-sm font-semibold leading-snug text-foreground">
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex shrink-0 items-center justify-center py-1.5 sm:px-1.5">
                <ChevronDown className="size-5 text-brand-400 sm:hidden" />
                <ChevronRight className="hidden size-5 text-brand-400 sm:block" />
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
