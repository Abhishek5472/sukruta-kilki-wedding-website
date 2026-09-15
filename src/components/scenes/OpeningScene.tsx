import palaceDusk from "@/assets/palace-dusk.jpg";
import { LanternField } from "@/components/motifs/LanternField";
import { Ornament } from "@/components/motifs/Ornament";
import { MandalaBackground } from "@/components/motifs/MandalaPattern";
import { weddingConfig } from "@/lib/wedding-config";
import { ChevronDown } from "lucide-react";

export function OpeningScene({
  onBeginJourney,
}: {
  onBeginJourney?: () => void;
}) {
  return (
    <section className="scene opening-scene" aria-labelledby="opening-title">
      {/* Royal Indian Mandala Pattern Background */}
      <MandalaBackground
        variant="both-corners"
        color="rgba(246, 224, 164, 0.20)"
        opacity={0.85}
        className="opening-mandala-overlay"
      />
      {/* Background Heritage Palace with dusk illumination */}
      <div className="opening-palace-wrap">
        <img
          src={palaceDusk}
          alt="Jaipur Heritage Palace at dusk"
          width={1024}
          height={1536}
          priority-hint="high"
          className="opening-palace"
        />
        <div className="opening-sky-overlay" />
        <div className="opening-ambient-glow" />
      </div>

      {/* Enlarged Floating Lantern Field with 3D depth and multi-directional motion */}
      <LanternField />

      {/* Editorial Hero Typography */}
      <div className="opening-copy">
        <p className="kicker hero-kicker">A Royal Celebration of Love</p>
        <h1 id="opening-title" className="hero-names-composition">
          <span className="hero-name-part hero-name-top">{weddingConfig.bride}</span>
          <span className="hero-weds-flourish" aria-label="weds">
            <span className="weds-flourish-line weds-line-left" />
            <span className="weds-word">Weds</span>
            <span className="weds-flourish-line weds-line-right" />
          </span>
          <span className="hero-name-part hero-name-bottom">{weddingConfig.groom}</span>
        </h1>
        <Ornament className="ornament hero-ornament" />
      </div>

      {/* Prominent High-Visibility Scroll Indicator with Luxury Micro-Animation */}
      <div
        className="scroll-prompt scroll-prompt-enhanced"
        onClick={onBeginJourney}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onBeginJourney?.();
          }
        }}
        aria-label="Click or scroll down to begin the journey"
      >
        <div className="scroll-prompt-badge">
          <span className="scroll-prompt-heading">Begin The Journey</span>
          <span className="scroll-prompt-sub">Scroll Down to Enter</span>
        </div>
        <div className="scroll-glow-beacon">
          <div className="scroll-beacon-ring" />
          <ChevronDown className="scroll-beacon-arrow" size={20} />
        </div>
      </div>
    </section>
  );
}