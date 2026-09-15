import React from "react";

interface MandalaPatternProps {
  className?: string;
  variant?: "corner-tr" | "corner-bl" | "corner-tl" | "corner-br" | "center" | "both-corners";
  color?: string; // CSS color string e.g. "var(--gold-primary)"
  opacity?: number;
  size?: number | string;
}

export function DetailedMandalaSvg({
  color = "currentColor",
  size = "100%",
  className = "",
}: {
  color?: string;
  size?: number | string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={`mandala-svg ${className}`}
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeWidth="1.2" opacity="0.9">
        {/* Outer Fine Dots Ring */}
        <circle cx="250" cy="250" r="238" strokeDasharray="3 5" strokeWidth="1.5" />
        <circle cx="250" cy="250" r="230" strokeWidth="0.8" />
        
        {/* Outermost Scalloped Petals (32 petals) */}
        {Array.from({ length: 32 }).map((_, i) => {
          const angle = (i * 360) / 32;
          return (
            <path
              key={`petal-out-${i}`}
              d="M250 20 C242 28, 240 40, 250 52 C260 40, 258 28, 250 20 Z"
              transform={`rotate(${angle} 250 250)`}
              strokeWidth="0.9"
            />
          );
        })}

        {/* Outer Intermediate Concentric Rings */}
        <circle cx="250" cy="250" r="200" strokeWidth="1.2" />
        <circle cx="250" cy="250" r="192" strokeDasharray="4 4" strokeWidth="1" />
        <circle cx="250" cy="250" r="185" strokeWidth="0.8" />

        {/* Second Petal Band (24 lotus petals with internal ribbing) */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <g key={`lotus-${i}`} transform={`rotate(${angle} 250 250)`}>
              <path
                d="M250 65 C235 85, 235 110, 250 128 C265 110, 265 85, 250 65 Z"
                strokeWidth="1.1"
              />
              <path d="M250 72 L250 120" strokeWidth="0.7" strokeDasharray="2 2" />
              <circle cx="250" cy="95" r="2" fill={color} />
            </g>
          );
        })}

        {/* Middle Chevron / Diamond Band */}
        <circle cx="250" cy="250" r="145" strokeWidth="1.2" />
        <circle cx="250" cy="250" r="138" strokeDasharray="3 3" strokeWidth="0.8" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <path
              key={`diamond-${i}`}
              d="M250 105 L255 115 L250 125 L245 115 Z"
              transform={`rotate(${angle} 250 250)`}
              strokeWidth="0.8"
            />
          );
        })}

        {/* Inner Floral Rosette (16 petals) */}
        <circle cx="250" cy="250" r="105" strokeWidth="1.2" />
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          return (
            <g key={`inner-petal-${i}`} transform={`rotate(${angle} 250 250)`}>
              <path
                d="M250 145 C240 160, 240 180, 250 195 C260 180, 260 160, 250 145 Z"
                strokeWidth="1"
              />
              <circle cx="250" cy="170" r="1.8" fill={color} />
            </g>
          );
        })}

        {/* Heart of Mandala */}
        <circle cx="250" cy="250" r="55" strokeWidth="1.4" />
        <circle cx="250" cy="250" r="48" strokeDasharray="2 3" strokeWidth="0.9" />
        <circle cx="250" cy="250" r="32" strokeWidth="1" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <circle
              key={`core-dot-${i}`}
              cx="250"
              cy="218"
              r="2.5"
              fill={color}
              transform={`rotate(${angle} 250 250)`}
            />
          );
        })}
        <circle cx="250" cy="250" r="12" fill={color} opacity="0.35" />
        <circle cx="250" cy="250" r="4" fill={color} />
      </g>
    </svg>
  );
}

export function MandalaBackground({
  className = "",
  variant = "both-corners",
  color = "rgba(212, 175, 55, 0.28)",
  opacity = 1,
}: MandalaPatternProps) {
  return (
    <div
      className={`mandala-background-rig ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Repeating fine jaali watermark texture */}
      <div className="mandala-repeating-texture" />

      {/* Prominent Corner Mandalas exactly matching user reference screenshot 2 */}
      {(variant === "corner-tr" || variant === "both-corners") && (
        <div className="mandala-corner mandala-corner-top-right">
          <DetailedMandalaSvg color={color} size="100%" />
        </div>
      )}

      {(variant === "corner-bl" || variant === "both-corners") && (
        <div className="mandala-corner mandala-corner-bottom-left">
          <DetailedMandalaSvg color={color} size="100%" />
        </div>
      )}

      {variant === "corner-tl" && (
        <div className="mandala-corner mandala-corner-top-left">
          <DetailedMandalaSvg color={color} size="100%" />
        </div>
      )}

      {variant === "corner-br" && (
        <div className="mandala-corner mandala-corner-bottom-right">
          <DetailedMandalaSvg color={color} size="100%" />
        </div>
      )}

      {variant === "center" && (
        <div className="mandala-center-watermark">
          <DetailedMandalaSvg color={color} size="100%" />
        </div>
      )}
    </div>
  );
}
