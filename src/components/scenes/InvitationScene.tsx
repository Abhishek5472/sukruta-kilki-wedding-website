import ganpatiIdol from "@/assets/ganpati-idol.png";
import { Ornament } from "@/components/motifs/Ornament";
import { MandalaBackground } from "@/components/motifs/MandalaPattern";
import { weddingConfig } from "@/lib/wedding-config";

export function InvitationScene() {
  return (
    <section className="scene invitation-scene" aria-labelledby="invitation-heading">
      {/* Restored Regal Courtyard "Bottleneck" Perspective with Symmetric Cusped Gateway & Sandstone Wings */}
      <div className="courtyard-perspective" aria-hidden="true">
        {/* Symmetric Cusped Palace Gateway Archway Header */}
        <div className="courtyard-arch-portal">
          <svg
            className="courtyard-arch-svg"
            viewBox="0 0 1000 240"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sandstoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a121d" />
                <stop offset="50%" stopColor="#631b28" />
                <stop offset="100%" stopColor="#3d0e17" />
              </linearGradient>
              <linearGradient id="goldFiligreeArch" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#f6e0a4" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#ffd700" stopOpacity="1" />
                <stop offset="75%" stopColor="#f6e0a4" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Sandstone gateway arch shape with cusped multi-foil lobes */}
            <path
              d="M0,0 L1000,0 L1000,120 Q860,115 790,145 Q730,175 660,140 Q590,105 500,165 Q410,105 340,140 Q270,175 210,145 Q140,115 0,120 Z"
              fill="url(#sandstoneGrad)"
            />
            {/* Outer gold decorative arch molding */}
            <path
              d="M0,120 Q140,115 210,145 Q270,175 340,140 Q410,105 500,165 Q590,105 660,140 Q730,175 790,145 Q860,115 1000,120"
              stroke="url(#goldFiligreeArch)"
              strokeWidth="3.5"
              fill="none"
            />
            {/* Inner dashed filigree line */}
            <path
              d="M20,110 Q150,105 218,135 Q276,165 344,130 Q414,95 500,152 Q586,95 656,130 Q724,165 782,135 Q850,105 980,110"
              stroke="#f6e0a4"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
              opacity="0.85"
            />
            {/* Central royal keystone motif */}
            <circle cx="500" cy="165" r="6" fill="#ffd700" />
            <circle cx="500" cy="165" r="12" stroke="#d4af37" strokeWidth="1.5" fill="none" opacity="0.6" />
          </svg>
        </div>

        {/* Symmetric Sandstone Colonnade Wings (Left & Right) */}
        <div className="courtyard-wing courtyard-wing-left">
          <div className="courtyard-pillar-fluting" />
          <div className="courtyard-balustrade-gold" />
          <div className="courtyard-wall-shadow" />
        </div>
        <div className="courtyard-wing courtyard-wing-right">
          <div className="courtyard-pillar-fluting" />
          <div className="courtyard-balustrade-gold" />
          <div className="courtyard-wall-shadow" />
        </div>

        {/* Golden Central Pool Reflection */}
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

      </div>
    </section>
  );
}