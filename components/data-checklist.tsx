import { CheckCircle2 } from "lucide-react";
import { dataChecklist } from "@/content/dataChecklist";

export function DataChecklist() {
  return (
    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
      {dataChecklist.map((item) => (
        <li
          key={item.label}
          className="flex items-start gap-2.5 rounded-lg border border-border bg-surface px-3.5 py-2.5"
        >
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
          <div>
            <p className="text-sm font-medium text-foreground">{item.label}</p>
            {item.detail && (
              <p className="text-xs text-muted">{item.detail}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
