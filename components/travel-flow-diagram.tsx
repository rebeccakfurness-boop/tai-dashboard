"use client";

import { cn } from "@/lib/utils";

type NodeType = "start" | "admin" | "uw" | "decision" | "warning" | "highlight";
type NodeShape = "rect" | "diamond";

type FlowNode = {
  id: string;
  title: string;
  subtitle?: string;
  type: NodeType;
  shape?: NodeShape;
  x: number;
  y: number;
  w: number;
  h: number;
};

type FlowEdge = {
  from: string;
  to: string;
  fromSide: "top" | "bottom" | "left" | "right";
  toSide: "top" | "bottom" | "left" | "right";
  label?: string;
};

type LegendEntry = { type: NodeType; label: string };

const TYPE_CLASSES: Record<NodeType, string> = {
  start:
    "bg-zinc-100 border-zinc-300 text-zinc-800 dark:bg-zinc-800/60 dark:border-zinc-600 dark:text-zinc-100",
  admin:
    "bg-violet-100 border-violet-300 text-violet-900 dark:bg-violet-900/40 dark:border-violet-700 dark:text-violet-100",
  uw: "bg-emerald-100 border-emerald-300 text-emerald-900 dark:bg-emerald-900/40 dark:border-emerald-700 dark:text-emerald-100",
  decision:
    "bg-brand-100 border-brand-300 text-brand-900 dark:bg-brand-500/20 dark:border-brand-400 dark:text-brand-100",
  warning:
    "bg-amber-100 border-amber-300 text-amber-900 dark:bg-amber-900/30 dark:border-amber-700 dark:text-amber-100",
  highlight: "bg-foreground border-foreground text-background",
};

const DEFAULT_LEGEND: LegendEntry[] = [
  { type: "start", label: "Start / trigger" },
  { type: "admin", label: "Admin" },
  { type: "uw", label: "Underwriter (UW)" },
];

const STROKE_CLASS = "stroke-border-strong";

function anchor(node: FlowNode, side: FlowEdge["fromSide"]) {
  switch (side) {
    case "top":
      return { x: node.x + node.w / 2, y: node.y };
    case "bottom":
      return { x: node.x + node.w / 2, y: node.y + node.h };
    case "left":
      return { x: node.x, y: node.y + node.h / 2 };
    case "right":
      return { x: node.x + node.w, y: node.y + node.h / 2 };
  }
}

function edgePath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  // Mostly-vertical edges get a gentle S-curve; mostly-horizontal edges a gentle bow.
  if (Math.abs(dy) >= Math.abs(dx)) {
    const c = dy * 0.5;
    return `M${from.x},${from.y} C${from.x},${from.y + c} ${to.x},${to.y - c} ${to.x},${to.y}`;
  }
  const c = dx * 0.5;
  return `M${from.x},${from.y} C${from.x + c},${from.y} ${to.x - c},${to.y} ${to.x},${to.y}`;
}

export function TravelFlowDiagram({
  nodes,
  edges,
  legend = DEFAULT_LEGEND,
}: {
  nodes: FlowNode[];
  edges: FlowEdge[];
  legend?: LegendEntry[];
}) {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const maxX = Math.max(...nodes.map((n) => n.x + n.w)) + 20;
  const maxY = Math.max(...nodes.map((n) => n.y + n.h)) + 20;

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-surface p-4">
      <svg
        viewBox={`0 0 ${maxX} ${maxY}`}
        className="mx-auto block"
        style={{ width: "100%", minWidth: Math.min(maxX, 820), height: "auto" }}
      >
        <defs>
          <marker
            id="flow-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" className="fill-muted" />
          </marker>
        </defs>

        {edges.map((edge, i) => {
          const from = nodeMap.get(edge.from);
          const to = nodeMap.get(edge.to);
          if (!from || !to) return null;
          const a = anchor(from, edge.fromSide);
          const b = anchor(to, edge.toSide);
          const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
          return (
            <g key={i}>
              <path
                d={edgePath(a, b)}
                fill="none"
                strokeWidth={1.5}
                className={STROKE_CLASS}
                markerEnd="url(#flow-arrow)"
              />
              {edge.label && (
                <text
                  x={mid.x}
                  y={mid.y - 6}
                  textAnchor="middle"
                  className="fill-muted text-[11px] font-semibold italic"
                >
                  {edge.label}
                </text>
              )}
            </g>
          );
        })}

        {nodes.map((node) => {
          const diamond = node.shape === "diamond";
          return (
            <foreignObject key={node.id} x={node.x} y={node.y} width={node.w} height={node.h}>
              <div
                className={cn(
                  "flex h-full w-full flex-col items-center justify-center border px-2 text-center leading-tight",
                  diamond ? "px-6" : "rounded-xl",
                  TYPE_CLASSES[node.type],
                )}
                style={
                  diamond
                    ? { clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }
                    : undefined
                }
              >
                <span className="text-[12px] font-bold">{node.title}</span>
                {node.subtitle && (
                  <span className="mt-0.5 text-[10.5px] font-medium opacity-80">
                    {node.subtitle}
                  </span>
                )}
              </div>
            </foreignObject>
          );
        })}
      </svg>

      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-3 text-xs">
        <span className="font-semibold text-muted">Key:</span>
        {legend.map((entry) => (
          <span key={entry.type} className="flex items-center gap-1.5">
            <span className={cn("size-3 rounded border", TYPE_CLASSES[entry.type])} />
            {entry.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export type { FlowNode, FlowEdge };
