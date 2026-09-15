import React from "react";

export type LanternData = {
  id: number;
  left: number; // percentage
  top: number; // percentage
  scale: number;
  depth: "fg" | "mg" | "bg";
  delay: number;
  duration: number;
  driftX: number;
  driftY?: number;
  direction?: "float-up" | "float-down" | "float-left" | "float-right" | "float-scale-3d";
  opacity: number;
};

// Enlarged, multi-directional lanterns with 3D depth-scaling effect
export const openingLanterns: LanternData[] = [
  // 3D Foreground Lanterns (large, close to camera with scale up to 2.2x and rich warm bloom)
  { id: 1, left: 5, top: 22, scale: 1.85, depth: "fg", delay: 0.2, duration: 6.8, driftX: 25, driftY: -35, direction: "float-scale-3d", opacity: 0.98 },
  { id: 2, left: 88, top: 26, scale: 1.95, depth: "fg", delay: 1.2, duration: 7.2, driftX: -22, driftY: -30, direction: "float-scale-3d", opacity: 0.96 },
  { id: 3, left: 14, top: 66, scale: 1.7, depth: "fg", delay: 2.5, duration: 7.6, driftX: 30, driftY: -25, direction: "float-right", opacity: 0.94 },
  { id: 4, left: 82, top: 72, scale: 1.8, depth: "fg", delay: 0.8, duration: 6.9, driftX: -28, driftY: -32, direction: "float-left", opacity: 0.96 },
  { id: 5, left: 48, top: 12, scale: 2.1, depth: "fg", delay: 1.8, duration: 8.0, driftX: -15, driftY: 20, direction: "float-down", opacity: 0.92 },

  // Midground Lanterns (balanced size, distinct details, floating from varied directions)
  { id: 6, left: 12, top: 10, scale: 1.3, depth: "mg", delay: 0.5, duration: 8.2, driftX: 18, driftY: -22, direction: "float-up", opacity: 0.9 },
  { id: 7, left: 30, top: 6, scale: 1.15, depth: "mg", delay: 2.0, duration: 8.6, driftX: -16, driftY: 18, direction: "float-down", opacity: 0.88 },
  { id: 8, left: 70, top: 8, scale: 1.25, depth: "mg", delay: 1.0, duration: 7.9, driftX: 20, driftY: -20, direction: "float-right", opacity: 0.9 },
  { id: 9, left: 85, top: 14, scale: 1.2, depth: "mg", delay: 2.8, duration: 8.4, driftX: -18, driftY: -24, direction: "float-left", opacity: 0.88 },
  { id: 10, left: 22, top: 38, scale: 1.35, depth: "mg", delay: 1.6, duration: 8.0, driftX: -22, driftY: 15, direction: "float-scale-3d", opacity: 0.9 },
  { id: 11, left: 76, top: 40, scale: 1.28, depth: "mg", delay: 0.4, duration: 8.5, driftX: 18, driftY: -20, direction: "float-up", opacity: 0.89 },
  { id: 12, left: 8, top: 52, scale: 1.1, depth: "mg", delay: 2.7, duration: 8.1, driftX: 15, driftY: 16, direction: "float-down", opacity: 0.86 },
  { id: 13, left: 92, top: 54, scale: 1.2, depth: "mg", delay: 1.3, duration: 8.8, driftX: -22, driftY: -18, direction: "float-left", opacity: 0.88 },
  { id: 14, left: 26, top: 82, scale: 1.25, depth: "mg", delay: 3.2, duration: 7.8, driftX: -14, driftY: -26, direction: "float-up", opacity: 0.89 },
  { id: 15, left: 68, top: 84, scale: 1.2, depth: "mg", delay: 0.7, duration: 8.3, driftX: 20, driftY: -22, direction: "float-up", opacity: 0.87 },

  // Background Lanterns (atmospheric depth layer with gentle soft focus)
  { id: 16, left: 8, top: 34, scale: 0.75, depth: "bg", delay: 0.8, duration: 9.6, driftX: 12, driftY: -15, direction: "float-up", opacity: 0.72 },
  { id: 17, left: 20, top: 22, scale: 0.8, depth: "bg", delay: 2.4, duration: 10.2, driftX: -10, driftY: 12, direction: "float-down", opacity: 0.74 },
  { id: 18, left: 40, top: 18, scale: 0.85, depth: "bg", delay: 1.9, duration: 9.8, driftX: 14, driftY: -14, direction: "float-up", opacity: 0.76 },
  { id: 19, left: 60, top: 16, scale: 0.78, depth: "bg", delay: 3.1, duration: 10.5, driftX: -12, driftY: 14, direction: "float-down", opacity: 0.72 },
  { id: 20, left: 78, top: 24, scale: 0.82, depth: "bg", delay: 0.5, duration: 9.3, driftX: 14, driftY: -16, direction: "float-up", opacity: 0.75 },
  { id: 21, left: 94, top: 38, scale: 0.72, depth: "bg", delay: 2.1, duration: 10.0, driftX: -10, driftY: -12, direction: "float-left", opacity: 0.7 },
  { id: 22, left: 16, top: 60, scale: 0.8, depth: "bg", delay: 3.6, duration: 9.7, driftX: 12, driftY: 15, direction: "float-down", opacity: 0.73 },
  { id: 23, left: 84, top: 64, scale: 0.74, depth: "bg", delay: 1.2, duration: 10.4, driftX: -14, driftY: -16, direction: "float-up", opacity: 0.71 },
  { id: 24, left: 36, top: 72, scale: 0.82, depth: "bg", delay: 2.6, duration: 9.5, driftX: 14, driftY: -18, direction: "float-up", opacity: 0.74 },
  { id: 25, left: 62, top: 76, scale: 0.78, depth: "bg", delay: 0.3, duration: 10.0, driftX: -12, driftY: 16, direction: "float-down", opacity: 0.72 },
];

export function LanternField({
  customLanterns,
  className = "",
  soft = false,
}: {
  customLanterns?: LanternData[];
  className?: string;
  soft?: boolean;
}) {
  const items = customLanterns || openingLanterns;

  return (
    <div
      className={`lantern-field ${soft ? "lantern-field-soft" : ""} ${className}`}
      aria-hidden="true"
    >
      {items.map((l) => (
        <span
          key={l.id}
          className={`lantern lantern-${l.depth} ${l.direction || "float-up"}`}
          style={
            {
              left: `${l.left}%`,
              top: `${l.top}%`,
              "--lantern-scale": l.scale,
              "--lantern-delay": `${l.delay}s`,
              "--lantern-duration": `${l.duration}s`,
              "--lantern-drift-x": `${l.driftX}px`,
              "--lantern-drift-y": `${l.driftY ?? -28}px`,
              "--lantern-opacity": l.opacity,
            } as React.CSSProperties
          }
        >
          <span className="lantern-glow" />
          <span className="lantern-halo-bloom" />
          <span className="lantern-body">
            <i className="lantern-inner-light" />
            <i className="lantern-wick" />
            <i className="lantern-tassel" />
          </span>
        </span>
      ))}
    </div>
  );
}

// Few elegant warm lanterns floating alongside event cards
export function CardAmbientLanterns() {
  const cardLanterns: LanternData[] = [
    { id: 101, left: -4, top: 18, scale: 1.4, depth: "fg", delay: 0.4, duration: 7.2, driftX: 16, driftY: -20, direction: "float-right", opacity: 0.95 },
    { id: 102, left: 32, top: 6, scale: 1.25, depth: "mg", delay: 1.8, duration: 8.0, driftX: -12, driftY: 15, direction: "float-down", opacity: 0.9 },
    { id: 103, left: 66, top: 12, scale: 1.35, depth: "fg", delay: 0.9, duration: 7.5, driftX: 18, driftY: -18, direction: "float-scale-3d", opacity: 0.92 },
    { id: 104, left: 98, top: 22, scale: 1.45, depth: "fg", delay: 2.2, duration: 7.0, driftX: -20, driftY: -24, direction: "float-left", opacity: 0.95 },
    { id: 105, left: 18, top: 78, scale: 1.2, depth: "mg", delay: 1.2, duration: 8.5, driftX: 14, driftY: -20, direction: "float-up", opacity: 0.88 },
    { id: 106, left: 82, top: 82, scale: 1.28, depth: "mg", delay: 2.9, duration: 8.1, driftX: -15, driftY: 18, direction: "float-down", opacity: 0.89 },
  ];

  return <LanternField customLanterns={cardLanterns} className="card-ambient-lanterns" />;
}