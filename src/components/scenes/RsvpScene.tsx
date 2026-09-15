import React from "react";
import { weddingConfig } from "@/lib/wedding-config";
import { MessageCircle } from "lucide-react";

export function RsvpScene() {
  return (
    <section className="scene rsvp-scene" aria-labelledby="rsvp-heading">
      <div className="rsvp-texture-overlay" aria-hidden="true" />

      <div className="scene-content rsvp-content">
        <div className="rsvp-typography-rig">
          <p className="kicker rsvp-kicker">Join Our Celebration</p>
          <h2 id="rsvp-heading" className="rsvp-main-title">
            PLEASE
            <br />
            <span className="rsvp-accent">RSVP</span>
          </h2>

          <p className="rsvp-lead-message">
            We would be honored by your presence. Kindly confirm your travel and attendance to help us prepare for your gracious hospitality in Jaipur.
          </p>

          <p className="rsvp-whatsapp-prompt">{weddingConfig.whatsappRsvp.subtitle}</p>

          {/* Interactive Target WhatsApp Button */}
          <a
            href={weddingConfig.whatsappRsvp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="target-rsvp-button"
            aria-label="Click to message wedding coordinators on WhatsApp"
          >
            <div className="target-rsvp-ring-outer" />
            <div className="target-rsvp-ring-mid" />
            <div className="target-rsvp-ring-inner">
              <MessageCircle size={26} className="target-wa-icon" />
            </div>
            <span className="target-rsvp-pulse" />
            <span className="rsvp-button-label">
              Join WhatsApp Group • {weddingConfig.whatsappRsvp.groupName}
            </span>
          </a>
        </div>

        {/* Boundary Transition element leading into Things to Know */}
        <div className="rsvp-exit-car-bridge" aria-hidden="true">
          <svg viewBox="0 0 200 60" fill="none" className="bridge-chariot-svg">
            {/* Heritage Royal Procession Motif */}
            <path
              d="M10 50 Q 100 10 190 50"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.6"
            />
            <circle cx="100" cy="28" r="6" fill="currentColor" />
            <circle cx="100" cy="28" r="12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
