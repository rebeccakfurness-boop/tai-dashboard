import { worksheetFields } from "@/content/worksheetFields";

export function WorksheetFieldTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-background">
          <tr>
            <th className="px-4 py-2.5 font-semibold text-foreground">Field</th>
            <th className="px-4 py-2.5 font-semibold text-foreground">
              What to record
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {worksheetFields.map((f) => (
            <tr key={f.field}>
              <td className="whitespace-nowrap px-4 py-3 font-medium text-foreground">
                {f.field}
              </td>
              <td className="px-4 py-3 text-muted">{f.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
