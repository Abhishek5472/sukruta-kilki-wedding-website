import ganpatiIdol from "@/assets/ganpati-idol.png";
import { Ornament } from "@/components/motifs/Ornament";
import { MandalaBackground } from "@/components/motifs/MandalaPattern";
import { weddingConfig } from "@/lib/wedding-config";

export function InvitationScene() {
  return (
    <section className="scene invitation-scene" aria-labelledby="invitation-heading">
      {/* Restored Regal Courtyard "Bottleneck" Perspective with Red Sandstone Wings & Reflection */}
      <div className="courtyard-perspective" aria-hidden="true">
        <div className="courtyard-wing courtyard-wing-left">
          <div className="courtyard-balustrade-gold" />
          <div className="courtyard-wall-shadow" />
        </div>
        <div className="courtyard-wing courtyard-wing-right">
          <div className="courtyard-balustrade-gold" />
          <div className="courtyard-wall-shadow" />
        </div>
        <div className="courtyard-water-reflection" />
        <div className="courtyard-gateway-line" />
      </div>

      {/* Intricate Royal Indian Mandala Pattern Background from Reference (Screenshot 2) */}
      <MandalaBackground
        variant="both-corners"
        color="rgba(246, 224, 164, 0.22)"
        opacity={0.9}
        className="invitation-mandala-overlay"
      />
      <div className="invitation-vignette-overlay" aria-hidden="true" />

      {/* Cinematic Transition Seam from Palace Scene */}
      <div className="scene-transition-seam palace-to-invitation-seam" aria-hidden="true">
        <div className="transition-gold-filigree" />
      </div>

      <div className="scene-content invitation-content">
        {/* Sacred Ganpati Darshan */}
        <div className="ganpati-presentation darshan-container reveal-text-flow">
          <div className="ganpati-divine-aura" aria-hidden="true" />
          <div className="ganpati-halo-rays" aria-hidden="true" />
          <img
            src={ganpatiIdol}
            alt="Sacred Lord Ganesha idol with rose garland"
            width={340}
            height={450}
            className="ganpati-image darshan-idol"
          />
          <p className="sacred-shloka">{weddingConfig.deities.shreeGanesh}</p>
          <div className="kuldaivat-row">
            {weddingConfig.deities.blessings.map((b, i) => (
              <span key={b} className="kuldaivat-item">
                {b}
                {i < weddingConfig.deities.blessings.length - 1 && <i className="kuldaivat-dot">❦</i>}
              </span>
            ))}
          </div>
        </div>

        {/* Grandparents' Heavenly Blessings */}
        <div className="blessings-block reveal-text-flow">
          <p className="blessings-prefix">With the heavenly blessings of</p>
          <h3 className="elders-names">Smt. Sudha &amp; Shri Arvind Kulkarni</h3>
        </div>

        <Ornament className="ornament invitation-ornament" />

        {/* Parents / Hosts Invitation */}
        <div className="hosts-block reveal-text-flow">
          <h2 id="invitation-heading" className="hosts-names">
            <span>Mrs. Seema</span>
            <span className="hosts-ampersand">&amp;</span>
            <span>Mr. Ajit Kulkarni</span>
          </h2>
          <p className="hosts-residence">Pune, Maharashtra</p>
          <p className="invitation-lead-text">
            {weddingConfig.invitationLead}
          </p>
        </div>

        {/* The Couple Reveal - Royal Editorial */}
        <div className="couple-editorial-spotlight reveal-text-flow">
          <span className="couple-prefix-label">Chi. Sou. Kan.</span>
          <h3 className="couple-bride-name">{weddingConfig.bride}</h3>
          <div className="couple-interlude-connector">
            <span className="connector-line" />
            <span className="connector-word">with</span>
            <span className="connector-line" />
          </div>
          <span className="couple-prefix-label">Chi.</span>
          <h3 className="couple-groom-name">{weddingConfig.groom}</h3>
          <p className="groom-lineage-note">
            (Elder son of {weddingConfig.family.groomParents} of {weddingConfig.family.groomOrigin})
          </p>
        </div>

        {/* Remaining Sacred Invitation Prose */}
        <div className="invitation-closing-block reveal-text-flow">
          <p className="invitation-closing-text">{weddingConfig.invitationClosing}</p>
        </div>

        {/* Natural Transition into the Events */}
        <div className="invitation-to-events-bridge">
          <Ornament className="ornament ornament-compact" />
          <p className="events-bridge-kicker">ON THE FOLLOWING EVENTS</p>
        </div>
      </div>
    </section>
  );
}