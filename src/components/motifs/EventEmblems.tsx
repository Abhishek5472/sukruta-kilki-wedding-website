import React from "react";

/**
 * Custom Luxury Indian Wedding Stationery Emblems
 * Commissioned line-art motifs for Sukruta & Kilki's Wedding Invitation
 *
 * 1. Sangeet: Classical Indian Sitar & Tabla pair in an elegant musical ensemble.
 * 2. Mehendi & Haldi: Two graceful henna leaves with a subtle symmetrical floral element.
 * 3. Shaadi: A pair of traditional Indian Shehnais in a balanced, symmetrical wedding arrangement.
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
        {/* Classical Sitar (angled diagonally across left-to-center) */}
        {/* Sitar Gourd (Tumba) */}
        <ellipse cx="54" cy="33" rx="7.5" ry="6.2" strokeWidth="0.95" />
        {/* Sitar Base Lotus Petal Binding */}
        <path d="M 48.5 34.5 C 50.5 37.2 57.5 37.2 59.5 34.5" strokeWidth="0.75" />
        {/* Sitar Bridge (Jawari) */}
        <path d="M 50.5 31 H 57.5" strokeWidth="1.15" />

        {/* Sitar Slender Neck (Dand) angled toward upper-right */}
        <path d="M 57 28.5 L 89 12" strokeWidth="0.85" />
        <path d="M 59 31.5 L 91 15" strokeWidth="0.85" />

        {/* Sitar Curved Frets (Sarika) */}
        <path d="M 64 25 L 66 28" strokeWidth="0.7" />
        <path d="M 70 21.8 L 72 24.8" strokeWidth="0.7" />
        <path d="M 76 18.5 L 78 21.5" strokeWidth="0.7" />
        <path d="M 82 15.2 L 84 18.2" strokeWidth="0.7" />

        {/* Fine Resonance String along Neck */}
        <path d="M 54 31 L 87 13.5" strokeWidth="0.6" strokeDasharray="1.5 1" opacity="0.85" />

        {/* Sitar Pegbox Headstock & Tuning Pegs (Kunti) */}
        <path d="M 89 12 C 92 10 96 11.5 93 15.5 Z" strokeWidth="0.85" />
        <path d="M 88 9 L 91 13 M 92 7.5 L 95 11.5 M 91 15.5 L 94 19.5" strokeWidth="0.8" />

        {/* Indian Tabla Pair: Bayan (left bass) & Dayan (right treble) */}
        {/* Bayan (Left rounded kettle drum) */}
        {/* Drumhead Rim (Gajra) */}
        <ellipse cx="74" cy="27" rx="6.2" ry="2.2" strokeWidth="0.85" />
        {/* Dark Circular Syahi (off-center black paste tuning patch) */}
        <circle cx="73" cy="27" r="1.75" fill="currentColor" stroke="none" />
        {/* Bayan Metallic / Clay Curved Belly */}
        <path
          d="M 67.8 27.5 C 66.8 33.5 69.5 38.5 74 38.5 C 78.5 38.5 81.2 33.5 80.2 27.5"
          strokeWidth="0.85"
        />
        {/* Tension Braided Straps (Baddhi) */}
        <path d="M 70 29 L 72 38 M 74 29.2 V 38.5 M 78 29 L 76 38" strokeWidth="0.6" opacity="0.75" />
        {/* Base Ring (Bira) */}
        <ellipse cx="74" cy="38.5" rx="4.2" ry="1.1" strokeWidth="0.75" />

        {/* Dayan (Right straight-grain wood treble drum) */}
        {/* Drumhead Rim (Gajra) */}
        <ellipse cx="91" cy="27.5" rx="5" ry="1.8" strokeWidth="0.85" />
        {/* Dark Circular Syahi (centered) */}
        <circle cx="91" cy="27.5" r="1.55" fill="currentColor" stroke="none" />
        {/* Dayan Tapered Wooden Body */}
        <path d="M 86 28 L 87.5 38 M 96 28 L 94.5 38" strokeWidth="0.85" />
        {/* Wooden Tuning Blocks (Gatta) */}
        <rect x="85.2" y="32" width="1.5" height="2.8" rx="0.4" strokeWidth="0.6" />
        <rect x="95.3" y="32" width="1.5" height="2.8" rx="0.4" strokeWidth="0.6" />
        {/* Tension Straps */}
        <path d="M 88.5 29.3 L 89.5 38 M 93.5 29.3 L 92.5 38" strokeWidth="0.6" opacity="0.75" />
        {/* Base Ring (Bira) */}
        <ellipse cx="91" cy="38" rx="3.6" ry="1" strokeWidth="0.75" />

        {/* Balanced Stationery Swags (Acoustic Resonance Tendrils) */}
        {/* Left Swag */}
        <path
          d="M 46 33 C 35 34 26 28 17 23 C 14 20 18 16 23 18 C 28 20 27 26 23 27"
          strokeWidth="0.9"
        />
        {/* Right Swag */}
        <path
          d="M 98 33 C 108 34 118 28 127 23 C 134 19 141 22 143 25 C 145 29 139 32 135 29"
          strokeWidth="0.9"
        />
        {/* Subtle Harmonic Dash Arcs */}
        <path
          d="M 32 30 C 40 36 47 37 52 36"
          strokeWidth="0.7"
          strokeDasharray="2 2"
          opacity="0.7"
        />
        <path
          d="M 128 30 C 120 36 112 37 106 36"
          strokeWidth="0.7"
          strokeDasharray="2 2"
          opacity="0.7"
        />
      </g>

      {/* Decorative Antique Gold Tuning & Resonance Pearls */}
      <circle cx="87.5" cy="8.5" r="0.8" fill="currentColor" />
      <circle cx="95.5" cy="11.5" r="0.8" fill="currentColor" />
      <circle cx="91.5" cy="7" r="0.8" fill="currentColor" />
      <circle cx="94.5" cy="19.5" r="0.8" fill="currentColor" />
      <circle cx="16.5" cy="23" r="1.6" fill="currentColor" />
      <circle cx="143.5" cy="25" r="1.6" fill="currentColor" />
      <circle cx="23" cy="27" r="1.1" fill="currentColor" opacity="0.8" />
      <circle cx="135" cy="29" r="1.1" fill="currentColor" opacity="0.8" />
      <circle cx="36" cy="22" r="1" fill="currentColor" opacity="0.65" />
      <circle cx="124" cy="22" r="1" fill="currentColor" opacity="0.65" />
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
        {/* Subtle Central Symmetrical Floral Mogra / Jasmine Element */}
        <circle cx="80" cy="24" r="4.2" strokeWidth="0.85" />
        {/* Top & Bottom Delicate Flower Petals */}
        <path d="M 77 19.5 C 77 14 83 14 83 19.5" strokeWidth="0.85" />
        <path d="M 77 16 Q 80 11 83 16" strokeWidth="0.75" />
        <path d="M 77 28.5 C 77 34 83 34 83 28.5" strokeWidth="0.85" />
        <path d="M 77 32 Q 80 37 83 32" strokeWidth="0.75" />

        {/* Two Graceful Henna (Mehendi) Botanical Leaves */}
        {/* Left Graceful Henna Leaf */}
        {/* Upper Leaf Contour */}
        <path d="M 74 22 C 60 13 44 14 32 23" strokeWidth="0.95" />
        {/* Lower Leaf Contour */}
        <path d="M 74 26 C 60 35 44 34 32 23" strokeWidth="0.95" />
        {/* Leaf Central Rib / Vein */}
        <path d="M 74 24 C 58 23 44 23 32 23" strokeWidth="0.8" />
        {/* Fine Henna Venation (Diagonal Vein Pairs) */}
        <path
          d="M 64 23.5 C 60 18.5 55 17.5 53 19 M 52 23.2 C 48 19 43 19 41 21 M 64 24.5 C 60 29.5 55 30.5 53 29 M 52 24.8 C 48 29 43 29 41 27"
          strokeWidth="0.65"
        />
        {/* Left Terminal Organic Tendril & Bud */}
        <path d="M 32 23 C 24 23 18 19 16 17" strokeWidth="0.9" />
        <path d="M 16 17 C 14 12 20 11 22 15" strokeWidth="0.75" />
        {/* Left Lower Trailing Tendril */}
        <path
          d="M 60 27 C 52 35 38 36 28 32"
          strokeWidth="0.75"
          strokeDasharray="2 2.5"
          opacity="0.75"
        />

        {/* Right Graceful Henna Leaf (Symmetrical Counterpart) */}
        {/* Upper Leaf Contour */}
        <path d="M 86 22 C 100 13 116 14 128 23" strokeWidth="0.95" />
        {/* Lower Leaf Contour */}
        <path d="M 86 26 C 100 35 116 34 128 23" strokeWidth="0.95" />
        {/* Leaf Central Rib / Vein */}
        <path d="M 86 24 C 102 23 116 23 128 23" strokeWidth="0.8" />
        {/* Fine Henna Venation */}
        <path
          d="M 96 23.5 C 100 18.5 105 17.5 107 19 M 108 23.2 C 112 19 117 19 119 21 M 96 24.5 C 100 29.5 105 30.5 107 29 M 108 24.8 C 112 29 117 29 119 27"
          strokeWidth="0.65"
        />
        {/* Right Terminal Organic Tendril & Bud */}
        <path d="M 128 23 C 136 23 142 19 144 17" strokeWidth="0.9" />
        <path d="M 144 17 C 146 12 140 11 138 15" strokeWidth="0.75" />
        {/* Right Lower Trailing Tendril */}
        <path
          d="M 100 27 C 108 35 122 36 132 32"
          strokeWidth="0.75"
          strokeDasharray="2 2.5"
          opacity="0.75"
        />
      </g>

      {/* Heritage Gold Accent Beads & Floral Centers */}
      <circle cx="80" cy="24" r="2.2" fill="currentColor" />
      <circle cx="80" cy="9.5" r="1.3" fill="currentColor" />
      <circle cx="80" cy="38.5" r="1.3" fill="currentColor" />
      <circle cx="74.5" cy="18.5" r="0.9" fill="currentColor" opacity="0.8" />
      <circle cx="85.5" cy="18.5" r="0.9" fill="currentColor" opacity="0.8" />
      <circle cx="74.5" cy="29.5" r="0.9" fill="currentColor" opacity="0.8" />
      <circle cx="85.5" cy="29.5" r="0.9" fill="currentColor" opacity="0.8" />
      <circle cx="15.5" cy="17" r="1.6" fill="currentColor" />
      <circle cx="144.5" cy="17" r="1.6" fill="currentColor" />
      <circle cx="28" cy="32" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="132" cy="32" r="1.2" fill="currentColor" opacity="0.8" />
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
        {/* Pair of Traditional Indian Shehnais in Auspicious Symmetrical Arrangement */}
        {/* Left Shehnai (Crosses from upper-left down to bottom-right flared bell) */}
        {/* Double-Reed Mouthpiece (Nali/Patti) */}
        <path d="M 59 7.5 H 61.5 M 60.2 7.5 V 10" strokeWidth="0.85" />
        <ellipse cx="60.2" cy="10" rx="1.2" ry="0.6" strokeWidth="0.7" />
        {/* Slender Conical Body (Wooden Tube) */}
        <path d="M 60 10.5 L 94 33" strokeWidth="0.8" />
        <path d="M 61 10.8 L 96 34.5" strokeWidth="0.8" />
        {/* Flared Brass Bell (Pyala) at Bottom-Right */}
        <path
          d="M 94 33 C 97 33.5 101 32 105 34 C 107 35.5 107.5 38 105 39 C 101 40.5 97 38 96 34.5"
          strokeWidth="0.95"
        />
        {/* Bell Flared Rim */}
        <ellipse
          cx="104.5"
          cy="36.5"
          rx="3.5"
          ry="1.8"
          transform="rotate(30 104.5 36.5)"
          strokeWidth="0.8"
        />
        <path d="M 96.5 33.5 L 98 35.5" strokeWidth="0.75" />

        {/* Right Shehnai (Crosses from upper-right down to bottom-left flared bell) */}
        {/* Double-Reed Mouthpiece */}
        <path d="M 98.5 7.5 H 101 M 99.8 7.5 V 10" strokeWidth="0.85" />
        <ellipse cx="99.8" cy="10" rx="1.2" ry="0.6" strokeWidth="0.7" />
        {/* Slender Conical Body */}
        <path d="M 100 10.5 L 66 33" strokeWidth="0.8" />
        <path d="M 99 10.8 L 64 34.5" strokeWidth="0.8" />
        {/* Flared Brass Bell at Bottom-Left */}
        <path
          d="M 66 33 C 63 33.5 59 32 55 34 C 53 35.5 52.5 38 55 39 C 59 40.5 63 38 64 34.5"
          strokeWidth="0.95"
        />
        {/* Bell Flared Rim */}
        <ellipse
          cx="55.5"
          cy="36.5"
          rx="3.5"
          ry="1.8"
          transform="rotate(-30 55.5 36.5)"
          strokeWidth="0.8"
        />
        <path d="M 63.5 33.5 L 62 35.5" strokeWidth="0.75" />

        {/* Auspicious Central Wedding Medallion & Flourish */}
        <path
          d="M 77 19.5 C 75.5 17 80 14 80 17.5 C 80 14 84.5 17 83 19.5"
          strokeWidth="0.8"
        />
        <path
          d="M 77 24.5 C 75.5 27 80 30 80 26.5 C 80 30 84.5 27 83 24.5"
          strokeWidth="0.8"
        />
        {/* Sacred Tassel Swags (Reshmi Lachha) */}
        <path d="M 78 25 C 77 29 74 32 72 34" strokeWidth="0.65" opacity="0.7" />
        <path d="M 82 25 C 83 29 86 32 88 34" strokeWidth="0.65" opacity="0.7" />

        {/* Auspicious Wedding Stationery Garlands (Mangal Varmala Swags) */}
        {/* Left Garland Swag */}
        <path d="M 52 35 C 38 37 26 31 16 23" strokeWidth="0.9" />
        <path d="M 16 23 C 14 18 20 17 22 21" strokeWidth="0.75" />
        <path
          d="M 58 14 C 44 14 30 19 22 23"
          strokeWidth="0.7"
          strokeDasharray="2 2.5"
          opacity="0.75"
        />

        {/* Right Garland Swag */}
        <path d="M 108 35 C 122 37 134 31 144 23" strokeWidth="0.9" />
        <path d="M 144 23 C 146 18 140 17 138 21" strokeWidth="0.75" />
        <path
          d="M 102 14 C 116 14 130 19 138 23"
          strokeWidth="0.7"
          strokeDasharray="2 2.5"
          opacity="0.75"
        />
      </g>

      {/* Shehnai Tone Holes (Fine Acoustic Apertures) */}
      <circle cx="69" cy="16.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="74" cy="20" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="86" cy="28" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="91" cy="31.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="91" cy="16.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="86" cy="20" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="74" cy="28" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="69" cy="31.5" r="0.75" fill="currentColor" stroke="none" />

      {/* Auspicious Central Union Pearls */}
      <circle cx="80" cy="22" r="2.2" fill="currentColor" />
      <circle cx="80" cy="11.5" r="1.3" fill="currentColor" />
      <circle cx="80" cy="32.5" r="1.3" fill="currentColor" />
      <circle cx="72" cy="34" r="0.9" fill="currentColor" opacity="0.8" />
      <circle cx="88" cy="34" r="0.9" fill="currentColor" opacity="0.8" />
      <circle cx="15.5" cy="23" r="1.6" fill="currentColor" />
      <circle cx="144.5" cy="23" r="1.6" fill="currentColor" />
      <circle cx="28" cy="26" r="1.1" fill="currentColor" opacity="0.8" />
      <circle cx="132" cy="26" r="1.1" fill="currentColor" opacity="0.8" />
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
