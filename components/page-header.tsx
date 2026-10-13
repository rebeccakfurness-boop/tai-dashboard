import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { SearchBox } from "./search-box";

export function PageHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
  actions,
  search,
  searchPlaceholder,
}: {
  icon?: LucideIcon;
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  search?: boolean;
  searchPlaceholder?: string;
}) {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1366px] px-6 py-12 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl animate-rise">
            {eyebrow && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
                {eyebrow}
              </p>
            )}
            <div className="flex items-center gap-3">
              {Icon && (
                <span className="flex size-10 items-center justify-center bg-brand-100 text-brand-600">
                  <Icon className="size-5" />
                </span>
              )}
              <h1 className="text-2xl text-foreground sm:text-3xl">{title}</h1>
            </div>
            <span className="heading-rule mt-3" aria-hidden="true" />
            {description && (
              <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                {description}
              </p>
            )}
          </div>
          {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
        </div>
        {search && (
          <div className="mt-5 max-w-xl">
            <SearchBox placeholder={searchPlaceholder} />
          </div>
        )}
      </div>
    </div>
  );
}

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1366px] px-6 py-12 sm:px-8">{children}</div>
  );
}
