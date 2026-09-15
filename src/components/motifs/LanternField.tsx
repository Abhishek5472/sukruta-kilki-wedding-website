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
  desktopOnly?: boolean;
};

// Curated lanterns with variety (small far, middle, large near) & multi-directional drift
export const openingLanterns: LanternData[] = [
  // 3D Foreground Lanterns (large, near camera with scale up to 2.1x)
  { id: 1, left: 4, top: 22, scale: 1.85, depth: "fg", delay: 0.2, duration: 8.5, driftX: 45, driftY: -120, direction: "float-scale-3d", opacity: 0.98 },
  { id: 2, left: 86, top: 26, scale: 1.95, depth: "fg", delay: 1.4, duration: 9.0, driftX: -40, driftY: -110, direction: "float-scale-3d", opacity: 0.96 },
  { id: 3, left: 12, top: 68, scale: 1.7, depth: "fg", delay: 2.5, duration: 9.5, driftX: 55, driftY: -95, direction: "float-right", opacity: 0.94 },
  { id: 4, left: 84, top: 72, scale: 1.8, depth: "fg", delay: 0.8, duration: 8.8, driftX: -50, driftY: -105, direction: "float-left", opacity: 0.96 },
  { id: 5, left: 48, top: 8, scale: 2.1, depth: "fg", delay: 1.8, duration: 10.0, driftX: -30, driftY: 70, direction: "float-down", opacity: 0.92, desktopOnly: true },

  // Midground Lanterns (balanced size, floating from varied directions)
  { id: 6, left: 8, top: 8, scale: 1.3, depth: "mg", delay: 0.5, duration: 10.2, driftX: 35, driftY: -130, direction: "float-up", opacity: 0.9 },
  { id: 7, left: 30, top: 6, scale: 1.15, depth: "mg", delay: 2.0, duration: 10.6, driftX: -35, driftY: 65, direction: "float-down", opacity: 0.88, desktopOnly: true },
  { id: 8, left: 85, top: 10, scale: 1.25, depth: "mg", delay: 1.0, duration: 9.8, driftX: -45, driftY: -115, direction: "float-left", opacity: 0.9 },
  { id: 9, left: 88, top: 16, scale: 1.2, depth: "mg", delay: 2.8, duration: 10.4, driftX: -35, driftY: -95, direction: "float-left", opacity: 0.88, desktopOnly: true },
  { id: 10, left: 14, top: 46, scale: 1.35, depth: "mg", delay: 1.6, duration: 10.0, driftX: 40, driftY: 60, direction: "float-down", opacity: 0.9 },
  { id: 11, left: 82, top: 48, scale: 1.28, depth: "mg", delay: 0.4, duration: 10.5, driftX: -38, driftY: -110, direction: "float-up", opacity: 0.89, desktopOnly: true },
  { id: 12, left: 6, top: 86, scale: 1.22, depth: "mg", delay: 2.7, duration: 10.1, driftX: 35, driftY: -125, direction: "float-up", opacity: 0.86 },
  { id: 13, left: 92, top: 54, scale: 1.2, depth: "mg", delay: 1.3, duration: 10.8, driftX: -42, driftY: -85, direction: "float-left", opacity: 0.88, desktopOnly: true },
  { id: 14, left: 24, top: 82, scale: 1.25, depth: "mg", delay: 3.2, duration: 9.8, driftX: -30, driftY: -110, direction: "float-up", opacity: 0.89, desktopOnly: true },
  { id: 15, left: 78, top: 86, scale: 1.25, depth: "mg", delay: 0.7, duration: 10.3, driftX: 45, driftY: -120, direction: "float-up", opacity: 0.87 },

  // Distant Background Lanterns (small, subtle, giving far depth)
  { id: 16, left: 22, top: 14, scale: 0.75, depth: "bg", delay: 0.8, duration: 12.0, driftX: -25, driftY: -100, direction: "float-up", opacity: 0.72 },
  { id: 17, left: 20, top: 24, scale: 0.8, depth: "bg", delay: 2.4, duration: 12.2, driftX: -20, driftY: 60, direction: "float-down", opacity: 0.74, desktopOnly: true },
  { id: 18, left: 40, top: 18, scale: 0.85, depth: "bg", delay: 1.9, duration: 11.8, driftX: 25, driftY: -85, direction: "float-up", opacity: 0.76, desktopOnly: true },
  { id: 19, left: 60, top: 16, scale: 0.78, depth: "bg", delay: 3.1, duration: 12.5, driftX: -24, driftY: 70, direction: "float-down", opacity: 0.72, desktopOnly: true },
  { id: 20, left: 74, top: 16, scale: 0.78, depth: "bg", delay: 0.5, duration: 11.5, driftX: 30, driftY: -105, direction: "float-up", opacity: 0.75 },
  { id: 21, left: 94, top: 38, scale: 0.72, depth: "bg", delay: 2.1, duration: 12.0, driftX: -20, driftY: -80, direction: "float-left", opacity: 0.7, desktopOnly: true },
  { id: 22, left: 18, top: 62, scale: 0.8, depth: "bg", delay: 3.6, duration: 11.7, driftX: 25, driftY: 65, direction: "float-down", opacity: 0.73 },
  { id: 23, left: 86, top: 62, scale: 0.74, depth: "bg", delay: 1.2, duration: 12.4, driftX: -28, driftY: -95, direction: "float-up", opacity: 0.71, desktopOnly: true },
  { id: 24, left: 34, top: 72, scale: 0.82, depth: "bg", delay: 2.6, duration: 11.5, driftX: 28, driftY: -110, direction: "float-up", opacity: 0.74, desktopOnly: true },
  { id: 25, left: 66, top: 74, scale: 0.78, depth: "bg", delay: 0.3, duration: 12.0, driftX: -24, driftY: 65, direction: "float-down", opacity: 0.72, desktopOnly: true },
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
          className={`lantern lantern-${l.depth} ${l.direction || "float-up"} ${l.desktopOnly ? "lantern-desktop-only" : ""}`}
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

// Dynamic 3D ambient lanterns with near/far scaling and multi-directional drift for EventsScene
export function CardAmbientLanterns() {
  const cardLanterns: LanternData[] = [
    { id: 101, left: -3, top: 16, scale: 1.35, depth: "fg", delay: 0.3, duration: 7.2, driftX: 35, driftY: -30, direction: "float-scale-3d", opacity: 0.95 },
    { id: 102, left: 34, top: 4, scale: 0.95, depth: "mg", delay: 1.5, duration: 8.4, driftX: -28, driftY: 35, direction: "float-scale-3d", opacity: 0.88 },
    { id: 103, left: 68, top: 10, scale: 1.45, depth: "fg", delay: 0.8, duration: 7.8, driftX: 30, driftY: -25, direction: "float-scale-3d", opacity: 0.94 },
    { id: 104, left: 96, top: 20, scale: 1.1, depth: "fg", delay: 2.1, duration: 7.5, driftX: -32, driftY: -35, direction: "float-scale-3d", opacity: 0.92 },
    { id: 105, left: 14, top: 75, scale: 1.05, depth: "mg", delay: 1.1, duration: 8.6, driftX: 25, driftY: -30, direction: "float-scale-3d", opacity: 0.88 },
    { id: 106, left: 84, top: 80, scale: 1.3, depth: "mg", delay: 2.7, duration: 8.0, driftX: -26, driftY: 28, direction: "float-scale-3d", opacity: 0.9 },
  ];

  return <LanternField customLanterns={cardLanterns} className="card-ambient-lanterns" />;
}

// Dedicated 3D ambient lanterns floating sideways, up/down, scaling smaller & bigger for Things to Know
export function DetailsAmbientLanterns() {
  const detailsLanterns: LanternData[] = [
    { id: 201, left: -2, top: 12, scale: 1.4, depth: "fg", delay: 0.2, duration: 7.0, driftX: 40, driftY: -28, direction: "float-scale-3d", opacity: 0.95 },
    { id: 202, left: 94, top: 15, scale: 0.9, depth: "mg", delay: 1.6, duration: 8.2, driftX: -36, driftY: 32, direction: "float-scale-3d", opacity: 0.88 },
    { id: 203, left: 4, top: 48, scale: 1.15, depth: "mg", delay: 2.4, duration: 7.6, driftX: 32, driftY: 24, direction: "float-scale-3d", opacity: 0.9 },
    { id: 204, left: 92, top: 52, scale: 1.5, depth: "fg", delay: 0.7, duration: 8.0, driftX: -38, driftY: -32, direction: "float-scale-3d", opacity: 0.96 },
    { id: 205, left: 20, top: 85, scale: 0.85, depth: "bg", delay: 3.1, duration: 9.0, driftX: 28, driftY: -24, direction: "float-scale-3d", opacity: 0.82 },
    { id: 206, left: 78, top: 88, scale: 1.3, depth: "mg", delay: 1.3, duration: 7.4, driftX: -30, driftY: 26, direction: "float-scale-3d", opacity: 0.92 },
  ];

  return <LanternField customLanterns={detailsLanterns} className="details-ambient-lanterns" />;
}