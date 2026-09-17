"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { nzRegionPins, type NzRegionPin } from "@/content/nzRegionMap";

const NORTH_ISLAND_PATH =
  "M140,10 C155,20 150,35 158,45 C168,60 162,80 172,98 C182,115 178,128 198,128 " +
  "C215,128 218,140 202,150 C190,158 195,170 212,178 C228,186 222,198 240,208 " +
  "C258,218 262,195 278,182 C288,175 282,208 268,228 C255,246 262,262 248,272 " +
  "C238,279 240,296 226,308 C216,315 220,328 204,340 C196,346 198,352 186,354 " +
  "C176,356 178,346 166,338 C154,330 158,320 142,312 C128,305 132,292 118,278 " +
  "C106,266 112,250 100,238 C90,228 98,214 104,198 C110,182 100,178 98,162 " +
  "C96,148 108,146 106,130 C104,116 116,112 116,96 C116,82 108,78 114,62 " +
  "C120,48 116,36 128,26 C134,20 132,14 140,10 Z";

const SOUTH_ISLAND_PATH =
  "M128,362 C145,366 152,360 168,368 C182,375 195,378 192,390 C188,400 172,398 178,412 " +
  "C184,426 194,438 188,452 C182,466 198,468 194,482 C190,496 178,500 182,516 " +
  "C186,532 172,536 174,552 C176,566 162,562 158,576 C154,590 142,584 132,594 " +
  "C122,602 112,592 104,582 C96,572 84,568 88,554 C92,540 78,534 82,518 " +
  "C86,502 76,494 82,478 C88,462 78,452 86,436 C94,420 90,406 102,394 " +
  "C112,384 108,372 122,368 C125,366 126,364 128,362 Z";

function RegionPin({
  pin,
  active,
  onSelect,
}: {
  pin: NzRegionPin;
  active: boolean;
  onSelect: (pin: NzRegionPin) => void;
}) {
  const hasData = pin.floodRegions.length > 0;
  return (
    <g
      onClick={() => onSelect(pin)}
      className={cn("cursor-pointer", !hasData && "cursor-not-allowed")}
      tabIndex={0}
      role="button"
      aria-label={
        hasData
          ? `Show flood mapping for ${pin.label}`
          : `${pin.label} — no flood mapping tool published yet`
      }
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(pin);
        }
      }}
    >
      <circle
        cx={pin.x}
        cy={pin.y}
        r={active ? 9 : 6.5}
        className={cn(
          "transition-all",
          hasData
            ? active
              ? "fill-brand-500 stroke-white"
              : "fill-brand-500/80 stroke-white hover:fill-brand-500"
            : "fill-border-strong stroke-white",
        )}
        strokeWidth={1.5}
      />
      <title>
        {hasData
          ? `${pin.label} — click to view`
          : `${pin.label} — no flood mapping tool published yet`}
      </title>
    </g>
  );
}

export function NzRegionMap({
  onSelect,
  activeFloodRegions,
}: {
  onSelect: (pin: NzRegionPin) => void;
  activeFloodRegions: string[];
}) {
  const [hovered, setHovered] = useState<NzRegionPin | null>(null);

  return (
    <div className="relative">
      <svg
        viewBox="0 0 300 610"
        className="mx-auto h-auto w-full max-w-[240px]"
        onMouseLeave={() => setHovered(null)}
      >
        <path
          d={NORTH_ISLAND_PATH}
          className="fill-brand-100 stroke-brand-300"
          strokeWidth={1.5}
        />
        <path
          d={SOUTH_ISLAND_PATH}
          className="fill-brand-100 stroke-brand-300"
          strokeWidth={1.5}
        />
        {nzRegionPins.map((pin) => (
          <g key={pin.key} onMouseEnter={() => setHovered(pin)}>
            <RegionPin
              pin={pin}
              active={pin.floodRegions.some((r) => activeFloodRegions.includes(r))}
              onSelect={onSelect}
            />
          </g>
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-x-0 top-1 flex justify-center">
        {hovered && (
          <span className="rounded-full border border-border-strong bg-surface px-2.5 py-1 text-xs font-semibold text-foreground shadow-md">
            {hovered.label}
            {hovered.floodRegions.length === 0 && (
              <span className="ml-1 font-normal text-muted">— no tool yet</span>
            )}
          </span>
        )}
      </div>
    </div>
  );
}
