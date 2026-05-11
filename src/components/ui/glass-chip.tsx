import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassChipProps extends React.HTMLAttributes<HTMLDivElement> {
  dot?: boolean;
  dotColor?: string;
  icon?: React.ReactNode;
  label?: string;
  sublabel?: string;
}

/**
 * Liquid-glass pill chip — ideal for badges overlaid on dark backgrounds/images.
 * Uses the same SVG displacement filter as LiquidButton for the glass distortion effect.
 */
export function GlassChip({
  dot,
  dotColor = "bg-blue-400",
  icon,
  label,
  sublabel,
  className,
  children,
  ...props
}: GlassChipProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-poppins font-medium select-none overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Glass distortion layer */}
      <div
        className="absolute inset-0 -z-10 rounded-full"
        style={{ backdropFilter: 'url("#chip-glass") blur(12px)' }}
      />

      {/* Glass surface */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "rgba(255,255,255,0.06)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.25), 0 1px 4px rgba(0,0,0,0.1)",
          border: "1px solid rgba(255,255,255,0.13)",
        }}
      />

      {/* Content */}
      {dot && (
        <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse shrink-0", dotColor)} />
      )}
      {icon && <span className="shrink-0 flex items-center">{icon}</span>}

      {sublabel ? (
        <div className="flex flex-col leading-tight">
          <span className="text-white/50 text-[10px] font-normal">{sublabel}</span>
          <span className="text-white font-semibold text-xs">{label}</span>
        </div>
      ) : (
        <span>{label ?? children}</span>
      )}

      {/* SVG glass filter — unique id so it doesn't clash with LiquidButton */}
      <svg className="hidden absolute">
        <defs>
          <filter
            id="chip-glass"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.06 0.06"
              numOctaves="1"
              seed="3"
              result="turbulence"
            />
            <feGaussianBlur in="turbulence" stdDeviation="1.5" result="blurredNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurredNoise"
              scale="40"
              xChannelSelector="R"
              yChannelSelector="B"
              result="displaced"
            />
            <feGaussianBlur in="displaced" stdDeviation="2.5" result="finalBlur" />
            <feComposite in="finalBlur" in2="finalBlur" operator="over" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
