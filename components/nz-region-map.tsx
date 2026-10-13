"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { nzRegionPins, type NzRegionPin } from "@/content/nzRegionMap";

// Traced from Natural Earth 1:50m admin-0 country boundaries (public domain),
// simplified and projected to fit the viewBox below.
const NORTH_ISLAND_PATH =
  "M145.1,23.4 L145.4,24.7 L148.6,21.0 L149.1,23.8 L155.4,27.0 L156.5,25.9 L161.7,29.0 L162.5,33.2 L166.0,31.7 L170.5,40.7 L169.8,42.9 L171.2,46.1 L167.5,46.4 L175.6,60.0 L174.6,64.8 L176.0,68.1 L174.0,74.2 L177.4,76.0 L178.6,74.5 L185.5,78.2 L187.2,83.9 L190.4,83.7 L189.3,70.1 L187.2,66.6 L188.7,64.4 L193.1,71.6 L194.9,71.3 L197.0,77.3 L199.3,90.0 L201.8,92.7 L202.0,94.0 L200.5,93.3 L200.2,94.4 L201.6,95.5 L205.3,96.5 L214.8,102.0 L224.9,104.8 L230.5,102.2 L233.9,97.1 L239.5,93.1 L244.7,93.5 L250.0,96.8 L247.2,103.9 L244.7,119.6 L241.0,123.4 L238.8,124.2 L237.5,132.2 L238.6,135.4 L237.5,137.9 L235.1,134.5 L229.8,133.5 L225.3,134.7 L220.9,137.5 L218.5,141.4 L218.2,146.3 L221.6,149.5 L216.3,162.4 L213.2,166.0 L199.1,190.4 L185.7,201.0 L184.0,200.0 L182.9,195.9 L180.6,195.2 L177.2,196.0 L176.9,190.7 L176.4,192.5 L174.7,193.4 L172.3,192.5 L182.8,174.7 L184.6,165.9 L182.7,161.2 L179.7,156.9 L175.8,154.5 L170.9,153.2 L166.6,148.7 L158.3,145.1 L155.9,142.9 L154.9,140.1 L156.5,135.3 L161.1,132.4 L167.6,130.6 L171.5,125.9 L173.9,111.0 L176.4,105.6 L175.6,102.2 L178.1,99.8 L174.2,90.3 L174.9,87.4 L173.7,87.0 L171.3,81.0 L172.8,80.7 L174.3,84.1 L175.6,81.3 L178.1,80.6 L175.2,76.9 L171.6,78.0 L169.1,76.8 L167.2,71.1 L163.4,64.9 L164.5,64.7 L167.6,67.8 L168.7,65.4 L166.7,61.8 L167.5,58.2 L165.0,56.1 L164.7,58.4 L160.4,55.0 L157.9,49.4 L158.0,52.3 L163.0,60.5 L161.6,62.2 L160.7,61.4 L147.9,39.6 L152.2,33.7 L149.6,34.8 L147.2,38.5 L142.0,30.6 L143.5,28.5 L143.5,25.6 L133.9,10.7 L140.6,10.0 L139.0,12.8 L145.1,23.4 Z";

const SOUTH_ISLAND_PATH =
  "M142.0,192.2 L144.3,192.3 L154.4,184.5 L158.6,182.8 L159.7,182.6 L157.4,185.0 L157.9,186.6 L155.6,192.0 L157.6,191.1 L158.8,187.4 L160.1,186.7 L159.6,184.6 L163.9,184.4 L164.1,185.4 L165.7,185.3 L163.6,189.0 L160.4,191.2 L162.4,191.4 L167.0,187.5 L167.0,189.8 L164.4,193.1 L161.7,194.5 L161.0,196.2 L162.8,199.7 L161.3,202.6 L163.0,202.3 L165.3,204.5 L163.9,207.4 L157.4,214.8 L156.4,218.6 L150.6,225.1 L144.1,237.3 L137.5,241.3 L134.1,244.8 L132.2,245.2 L134.4,247.4 L130.3,250.3 L133.6,249.8 L135.9,254.5 L141.2,255.9 L142.0,259.2 L141.0,261.2 L138.1,261.7 L134.7,259.6 L129.8,260.4 L131.4,258.5 L129.4,257.3 L125.7,261.0 L120.5,256.6 L123.4,261.8 L113.0,267.7 L108.7,268.2 L107.1,271.3 L104.7,271.6 L106.1,272.6 L102.8,288.8 L99.9,288.8 L102.5,290.6 L102.1,292.2 L98.7,296.9 L93.9,309.4 L95.7,312.2 L95.4,314.3 L88.3,316.2 L73.7,332.4 L66.9,334.3 L62.0,334.5 L55.4,332.8 L47.7,333.9 L46.5,329.7 L43.9,327.4 L37.0,327.5 L33.8,322.9 L30.9,321.7 L27.5,324.2 L22.2,324.4 L14.8,323.0 L14.5,321.3 L18.5,316.6 L14.8,319.2 L13.2,318.9 L14.8,316.8 L14.6,314.8 L12.5,316.6 L10.1,316.8 L10.0,313.3 L19.2,311.1 L20.3,310.1 L16.4,309.8 L16.2,308.3 L20.0,305.3 L14.9,305.6 L15.1,303.6 L15.8,302.1 L18.6,302.0 L17.6,299.4 L23.3,302.1 L22.5,299.6 L24.8,298.9 L20.8,297.1 L20.7,294.4 L22.7,292.5 L23.9,293.7 L25.4,293.3 L23.6,291.1 L24.1,290.2 L28.4,286.6 L29.5,290.1 L29.9,285.1 L35.9,280.4 L38.3,282.2 L37.3,277.9 L49.2,265.4 L53.1,263.8 L56.2,264.3 L61.4,260.9 L63.6,262.3 L62.7,259.8 L63.4,258.6 L70.3,254.6 L76.6,252.2 L76.7,250.2 L78.1,249.8 L77.1,249.3 L84.7,242.3 L85.9,241.8 L87.8,242.8 L86.0,240.8 L89.1,239.0 L92.1,240.4 L90.4,238.2 L93.2,236.9 L94.6,238.8 L94.7,236.0 L99.3,230.5 L100.1,234.9 L100.6,234.3 L100.4,229.9 L103.7,224.7 L106.1,223.6 L104.9,222.1 L109.6,205.9 L114.4,203.9 L118.8,199.1 L121.7,190.1 L122.6,183.4 L125.2,178.4 L132.6,172.0 L136.3,171.2 L138.6,172.0 L134.4,172.6 L133.8,175.9 L135.1,178.7 L139.5,180.7 L142.0,192.2 Z";

const STEWART_ISLAND_PATH =
  "M43.0,340.7 L43.0,341.8 L40.9,341.4 L41.0,342.6 L43.2,344.0 L44.9,343.8 L44.9,346.2 L43.8,347.1 L40.4,347.5 L38.2,349.1 L35.8,349.0 L33.7,350.8 L30.6,351.2 L30.9,349.6 L32.7,348.1 L33.2,345.5 L35.0,344.7 L35.0,343.2 L36.1,341.9 L35.4,339.0 L35.8,336.4 L39.2,336.2 L43.0,340.7 Z";

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
        viewBox="0 0 260 361"
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
        <path
          d={STEWART_ISLAND_PATH}
          className="fill-brand-100 stroke-brand-300"
          strokeWidth={1}
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
          <span className="rounded-full border border-border-strong bg-surface px-2.5 py-1 text-xs font-semibold text-foreground">
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
