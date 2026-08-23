import type { ReactNode } from "react";
import type { ProcessStep } from "@/content/types";

export function StepCard({
  step,
  extra,
}: {
  step: ProcessStep;
  extra?: ReactNode;
}) {
  return (
    <section
      id={step.id}
      className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-7"
    >
      <h2 className="text-lg font-bold text-foreground sm:text-xl">
        {step.title}
      </h2>
      <p className="mt-1 text-sm font-medium text-brand-600">{step.summary}</p>

      <div className="mt-4 space-y-3">
        {step.body.map((p, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </div>

      {step.bullets && (
        <ul className="mt-4 space-y-2">
          {step.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[15px] text-foreground/90">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
              {b}
            </li>
          ))}
        </ul>
      )}

      {extra && <div className="mt-5">{extra}</div>}
    </section>
  );
}
