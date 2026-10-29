import React from "react";

/**
 * Custom Antique-Gold Line-Art Emblems for Event Cards
 * Art direction: Fine, clean antique-gold linework commissioned for luxury Indian wedding stationery.
 */

export function SangeetEmblem({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Central Classical Veena / Tanpura Motif */}
        {/* Resonant Gourd (Tumba) */}
        <ellipse cx="80" cy="33" rx="8" ry="7" strokeWidth="1" />
        {/* Base Lotus Petal Inlay on Gourd */}
        <path d="M 74.5 35 C 76.5 38 83.5 38 85.5 35" strokeWidth="0.8" />
        {/* Bridge (Jawari) */}
        <path d="M 76 30.5 H 84" strokeWidth="1.2" />

        {/* Slender Neck (Dandi) */}
        <path d="M 78.5 26 V 9.5" strokeWidth="0.8" />
        <path d="M 81.5 26 V 9.5" strokeWidth="0.8" />
        {/* Frets (Sarika) */}
        <path d="M 77.5 13.5 H 82.5" strokeWidth="0.75" />
        <path d="M 77.5 17.5 H 82.5" strokeWidth="0.75" />
        <path d="M 77.5 21.5 H 82.5" strokeWidth="0.75" />
        {/* Central Strings */}
        <path d="M 80 30.5 V 9.5" strokeWidth="0.6" strokeDasharray="1.5 1" opacity="0.8" />

        {/* Pegbox Head & Tuning Pegs */}
        <path d="M 77.5 9.5 C 77.5 6 82.5 6 82.5 9.5 Z" strokeWidth="0.9" />
        <path d="M 74 8 H 77.5 M 82.5 8 H 86" strokeWidth="0.85" />
        <path d="M 74 11 H 77.5 M 82.5 11 H 86" strokeWidth="0.85" />

        {/* Symmetrical Classical Swirl Flourishes (Sound Waves & Floral Vines) */}
        {/* Left Flourish */}
        <path
          d="M 72 33 C 58 34 45 28 35 21 C 28 15 19 18 16 23 C 13 28 19 33 25 31 C 30 29 31 23 27 20"
          strokeWidth="0.95"
        />
        {/* Right Flourish */}
        <path
          d="M 88 33 C 102 34 115 28 125 21 C 132 15 141 18 144 23 C 147 28 141 33 135 31 C 130 29 129 23 133 20"
          strokeWidth="0.95"
        />

        {/* Lower Harmonic Tendril Arcs */}
        <path
          d="M 44 29 C 54 36 65 37 72 35"
          strokeWidth="0.75"
          strokeDasharray="2 2.5"
          opacity="0.75"
        />
        <path
          d="M 116 29 C 106 36 95 37 88 35"
          strokeWidth="0.75"
          strokeDasharray="2 2.5"
          opacity="0.75"
        />
      </g>

      {/* Decorative Antique Gold Beads / Pearls */}
      <circle cx="80" cy="4.5" r="1.5" fill="currentColor" />
      <circle cx="73.5" cy="8" r="0.8" fill="currentColor" />
      <circle cx="86.5" cy="8" r="0.8" fill="currentColor" />
      <circle cx="73.5" cy="11" r="0.8" fill="currentColor" />
      <circle cx="86.5" cy="11" r="0.8" fill="currentColor" />
      <circle cx="15.5" cy="23" r="1.8" fill="currentColor" />
      <circle cx="144.5" cy="23" r="1.8" fill="currentColor" />
      <circle cx="27" cy="20" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="133" cy="20" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="48" cy="23" r="1.2" fill="currentColor" opacity="0.7" />
      <circle cx="112" cy="23" r="1.2" fill="currentColor" opacity="0.7" />
      <circle cx="61" cy="19" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="99" cy="19" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function MehendiEmblem({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Central Heritage Floral Rosette / Buti */}
        <circle cx="80" cy="24" r="4.5" strokeWidth="0.85" />
        {/* Top & Bottom Petals */}
        <path d="M 77 19.5 C 77 14 83 14 83 19.5" strokeWidth="0.9" />
        <path d="M 77 16 Q 80 10.5 83 16" strokeWidth="0.8" />
        <path d="M 77 28.5 C 77 34 83 34 83 28.5" strokeWidth="0.9" />
        <path d="M 77 32 Q 80 37.5 83 32" strokeWidth="0.8" />
        {/* Left & Right Petals */}
        <path d="M 75.5 21 C 70 21 70 27 75.5 27" strokeWidth="0.9" />
        <path d="M 84.5 21 C 90 21 90 27 84.5 27" strokeWidth="0.9" />

        {/* Flanking Botanical Henna & Foliage Vines */}
        {/* Left Stem */}
        <path
          d="M 69.5 24 C 57 24 46 17 34 21 C 25 24 18 20 16 16"
          strokeWidth="1"
        />
        <path d="M 16 16 C 14 11 20 10 22 14" strokeWidth="0.8" />
        {/* Left Foliage Leaves */}
        <path d="M 53 21 C 53 14 44 14 47 20 Z" strokeWidth="0.8" />
        <path d="M 40 23.5 C 38 29.5 31 28.5 34 22.5 Z" strokeWidth="0.8" />
        <path d="M 28 19 C 26 13 19 15 23 19 Z" strokeWidth="0.8" />
        {/* Left Lower Tendril */}
        <path
          d="M 57 25 C 50 32 38 33 28 29"
          strokeWidth="0.75"
          strokeDasharray="2 2.5"
          opacity="0.75"
        />

        {/* Right Stem (Symmetrical) */}
        <path
          d="M 90.5 24 C 103 24 114 17 126 21 C 135 24 142 20 144 16"
          strokeWidth="1"
        />
        <path d="M 144 16 C 146 11 140 10 138 14" strokeWidth="0.8" />
        {/* Right Foliage Leaves */}
        <path d="M 107 21 C 107 14 116 14 113 20 Z" strokeWidth="0.8" />
        <path d="M 120 23.5 C 122 29.5 129 28.5 126 22.5 Z" strokeWidth="0.8" />
        <path d="M 132 19 C 134 13 141 15 137 19 Z" strokeWidth="0.8" />
        {/* Right Lower Tendril */}
        <path
          d="M 103 25 C 110 32 122 33 132 29"
          strokeWidth="0.75"
          strokeDasharray="2 2.5"
          opacity="0.75"
        />
      </g>

      {/* Heritage Accent Beads */}
      <circle cx="80" cy="24" r="2.2" fill="currentColor" />
      <circle cx="80" cy="8.5" r="1.3" fill="currentColor" />
      <circle cx="80" cy="39.5" r="1.3" fill="currentColor" />
      <circle cx="74.5" cy="18.5" r="0.9" fill="currentColor" opacity="0.75" />
      <circle cx="85.5" cy="18.5" r="0.9" fill="currentColor" opacity="0.75" />
      <circle cx="74.5" cy="29.5" r="0.9" fill="currentColor" opacity="0.75" />
      <circle cx="85.5" cy="29.5" r="0.9" fill="currentColor" opacity="0.75" />
      <circle cx="15.5" cy="16" r="1.6" fill="currentColor" />
      <circle cx="144.5" cy="16" r="1.6" fill="currentColor" />
      <circle cx="28" cy="29" r="1.2" fill="currentColor" opacity="0.75" />
      <circle cx="132" cy="29" r="1.2" fill="currentColor" opacity="0.75" />
      <circle cx="48" cy="13" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="112" cy="13" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function ShaadiEmblem({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Two Subtly Intertwined Floral Branches */}
        {/* Branch A (originating left, weaving through center to upper right) */}
        <path
          d="M 18 27 C 32 28 44 20 58 22 C 67 23 72 28 78 28 C 84 28 88 22 98 22 C 106 22 114 26 124 25"
          strokeWidth="1"
        />
        {/* Branch B (originating right, weaving through center to upper left) */}
        <path
          d="M 142 27 C 128 28 116 20 102 22 C 93 23 88 18 82 18 C 76 18 72 24 62 24 C 54 24 46 20 36 21"
          strokeWidth="1"
        />

        {/* Central Crown Blossom / Sacred Knot Flourish */}
        <path
          d="M 76 15 C 75 11 80 8.5 80 12 C 80 8.5 85 11 84 15"
          strokeWidth="0.85"
        />
        <path d="M 77 15.5 Q 80 18.5 83 15.5" strokeWidth="0.8" />

        {/* Branch Foliage Leaves - Delicate Interspersed Leaflets */}
        {/* Left Side Leaves */}
        <path d="M 30 25 C 29 19 36 19 35 24 Z" strokeWidth="0.8" />
        <path d="M 46 22 C 45 16 52 16 50 21 Z" strokeWidth="0.8" />
        <path d="M 39 24 C 40 29 46 28 44 24 Z" strokeWidth="0.8" />
        <path d="M 57 23 C 58 29 64 28 62 24 Z" strokeWidth="0.8" />

        {/* Right Side Leaves */}
        <path d="M 130 25 C 131 19 124 19 125 24 Z" strokeWidth="0.8" />
        <path d="M 114 22 C 115 16 108 16 110 21 Z" strokeWidth="0.8" />
        <path d="M 121 24 C 120 29 114 28 116 24 Z" strokeWidth="0.8" />
        <path d="M 103 23 C 102 29 96 28 98 24 Z" strokeWidth="0.8" />

        {/* Delicate Tendril Flourishes at Outer Ends */}
        <path
          d="M 23 27 C 20 32 14 31 16 27"
          strokeWidth="0.8"
        />
        <path
          d="M 137 27 C 140 32 146 31 144 27"
          strokeWidth="0.8"
        />
      </g>

      {/* Sacred Union Wedding Pearls & Blossom Centers */}
      <circle cx="80" cy="13.5" r="2.2" fill="currentColor" />
      <circle cx="80" cy="7" r="1.2" fill="currentColor" opacity="0.75" />
      <circle cx="80" cy="23" r="1.5" fill="currentColor" />
      <circle cx="73" cy="24" r="1.1" fill="currentColor" opacity="0.8" />
      <circle cx="87" cy="21" r="1.1" fill="currentColor" opacity="0.8" />
      <circle cx="16" cy="27" r="1.6" fill="currentColor" />
      <circle cx="144" cy="27" r="1.6" fill="currentColor" />
      <circle cx="124" cy="25" r="1.3" fill="currentColor" opacity="0.8" />
      <circle cx="36" cy="21" r="1.3" fill="currentColor" opacity="0.8" />
      <circle cx="50" cy="15" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="110" cy="15" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function EventEmblem({
  eventId,
  className = "",
}: {
  eventId: "sangeet" | "mehendi" | "shaadi";
  className?: string;
}) {
  switch (eventId) {
    case "sangeet":
      return <SangeetEmblem className={className} />;
    case "mehendi":
      return <MehendiEmblem className={className} />;
    case "shaadi":
      return <ShaadiEmblem className={className} />;
    default:
      return null;
  }
}
