import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function PageHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
  actions,
}: {
  icon?: LucideIcon;
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl animate-rise">
            {eyebrow && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
                {eyebrow}
              </p>
            )}
            <div className="flex items-center gap-3">
              {Icon && (
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <Icon className="size-5" />
                </span>
              )}
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {title}
              </h1>
            </div>
            {description && (
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {description}
              </p>
            )}
          </div>
          {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
        </div>
      </div>
    </div>
  );
}

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8">{children}</div>
  );
}
