import Image from "next/image";
import { Info, CircleCheck, TriangleAlert, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TagChip } from "@/components/tag-chip";
import { TravelFlowDiagram } from "@/components/travel-flow-diagram";
import { cn } from "@/lib/utils";
import type { TrainingLessonBlock } from "@/content/types";

const CALLOUT_CLASSES = {
  info: "border-brand-300 bg-brand-100/40",
  success: "border-emerald-300 bg-emerald-100/40 dark:border-emerald-700 dark:bg-emerald-900/20",
  warning: "border-amber-300 bg-amber-100/40 dark:border-amber-700 dark:bg-amber-900/20",
};

const CALLOUT_ICON_CLASSES = {
  info: "bg-brand-500 text-white",
  success: "bg-emerald-500 text-white",
  warning: "bg-amber-500 text-white",
};

const CALLOUT_ICONS = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
};

export function LessonBlocks({ blocks }: { blocks: TrainingLessonBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => (
        <LessonBlockView key={i} block={block} />
      ))}
    </div>
  );
}

function LessonBlockView({ block }: { block: TrainingLessonBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-[15px] leading-relaxed text-foreground/90">{block.text}</p>
      );

    case "callout": {
      const Icon = CALLOUT_ICONS[block.tone];
      return (
        <Card className={cn("p-5", CALLOUT_CLASSES[block.tone])}>
          <div className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg",
                CALLOUT_ICON_CLASSES[block.tone],
              )}
            >
              <Icon className="size-4" />
            </span>
            <div>
              {block.title && (
                <h3 className="font-bold text-foreground">{block.title}</h3>
              )}
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">{block.text}</p>
            </div>
          </div>
        </Card>
      );
    }

    case "definitionList":
      return (
        <Card className="divide-y divide-border overflow-hidden">
          {block.items.map((item) => (
            <div key={item.term} className="grid grid-cols-1 gap-1 p-4 sm:grid-cols-[180px_1fr] sm:gap-4">
              <span className="text-sm font-bold text-foreground">{item.term}</span>
              <span className="text-sm leading-relaxed text-muted">{item.definition}</span>
            </div>
          ))}
        </Card>
      );

    case "cards":
      return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {block.items.map((item) => (
            <Card key={item.title} className="p-4">
              <div className="flex items-center gap-2">
                {item.tag && <TagChip label={item.tag} />}
                <h3 className="font-bold text-foreground">{item.title}</h3>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
            </Card>
          ))}
        </div>
      );

    case "steps":
      return (
        <ol className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">{item.label}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "checklist":
      return (
        <Card className="p-5">
          <ul className="space-y-2.5">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-foreground/90">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                  <Check className="size-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      );

    case "flowchart":
      return (
        <TravelFlowDiagram nodes={block.nodes} edges={block.edges} legend={block.legend} />
      );

    case "image":
      return (
        <figure className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <Image
            src={block.src}
            alt={block.alt}
            width={1600}
            height={900}
            className="block h-auto w-full"
            sizes="(min-width: 1024px) 740px, 100vw"
          />
          {block.caption && (
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "formula":
      return (
        <Card className="border-border-strong bg-foreground p-5 text-background">
          <p className="text-xs font-semibold uppercase tracking-wide text-background/70">
            {block.title}
          </p>
          <p className="mt-1.5 font-mono text-base font-bold">{block.formula}</p>
          {block.note && (
            <p className="mt-2 text-sm leading-relaxed text-background/80">{block.note}</p>
          )}
        </Card>
      );

    default:
      return null;
  }
}
