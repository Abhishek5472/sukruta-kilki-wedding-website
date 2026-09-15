import React from "react";

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Royal heritage central flourish */}
      <path
        d="M10 24h60c18 0 22-18 30-18s12 18 30 18h60"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M40 24c14 0 20 18 35 18s15-18 25-18 10 18 25 18 21-18 35-18"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeDasharray="2 3"
        opacity="0.8"
      />
      {/* Central diamond with radiating dots */}
      <circle cx="100" cy="24" r="4.5" fill="currentColor" />
      <circle cx="88" cy="24" r="2" fill="currentColor" opacity="0.75" />
      <circle cx="112" cy="24" r="2" fill="currentColor" opacity="0.75" />
      <circle cx="100" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="100" cy="36" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function FloralCorner({
  className = "",
  position = "top-right",
}: {
  className?: string;
  position?: "top-right" | "bottom-left" | "top-left" | "bottom-right";
}) {
  return (
    <svg
      className={`floral-corner floral-corner-${position} ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* Main Jasmine / Mogra Flower */}
        <circle cx="50" cy="50" r="7" fill="currentColor" fillOpacity="0.25" />
        {/* Petals */}
        <path d="M50 43 C46 32 54 32 50 43" fill="currentColor" fillOpacity="0.15" />
        <path d="M57 50 C68 46 68 54 57 50" fill="currentColor" fillOpacity="0.15" />
        <path d="M50 57 C54 68 46 68 50 57" fill="currentColor" fillOpacity="0.15" />
        <path d="M43 50 C32 54 32 46 43 50" fill="currentColor" fillOpacity="0.15" />
        {/* Corner tendril vines */}
        <path d="M30 65 Q 40 45 65 30" strokeWidth="0.8" />
        <path d="M65 30 Q 75 22 85 24" strokeWidth="0.8" />
        <path d="M30 65 Q 22 75 24 85" strokeWidth="0.8" />
        {/* Delicate buds */}
        <circle cx="85" cy="24" r="3" fill="currentColor" />
        <circle cx="24" cy="85" r="3" fill="currentColor" />
        <circle cx="68" cy="40" r="2" fill="currentColor" />
        <circle cx="40" cy="68" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}