import { FileEdit } from "lucide-react";
import { Badge } from "./ui/badge";

export function DraftBadge() {
  return (
    <Badge variant="draft" className="shrink-0">
      <FileEdit className="size-3" />
      Draft content — pending final document
    </Badge>
  );
}
