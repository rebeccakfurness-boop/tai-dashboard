import { CopyButton } from "./copy-button";
import {
  namingSegments,
  namingExample,
  namingConventionExamples,
} from "@/content/namingConventions";

export function NamingConventionTable() {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-background">
            <tr>
              <th className="px-4 py-2.5 font-semibold text-foreground">Segment</th>
              <th className="px-4 py-2.5 font-semibold text-foreground">Description</th>
              <th className="px-4 py-2.5 font-semibold text-foreground">Example</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {namingSegments.map((seg) => (
              <tr key={seg.label}>
                <td className="px-4 py-3 font-medium text-foreground">{seg.label}</td>
                <td className="px-4 py-3 text-muted">{seg.description}</td>
                <td className="px-4 py-3 font-mono text-xs text-brand-600">
                  {seg.example}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-brand-300 bg-brand-100 px-4 py-3">
        <span className="font-mono text-sm font-semibold text-brand-700">
          {namingExample}
        </span>
        <CopyButton value={namingExample} label="naming convention example" />
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-foreground">
          Ready-to-copy examples
        </p>
        <div className="space-y-2">
          {namingConventionExamples.map((ex) => (
            <div
              key={ex.value}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-surface px-4 py-2.5"
            >
              <div>
                <p className="text-xs text-muted">{ex.label}</p>
                <p className="font-mono text-sm text-foreground">{ex.value}</p>
              </div>
              <CopyButton value={ex.value} label={ex.label} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
