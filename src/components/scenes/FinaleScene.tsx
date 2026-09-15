import React, { useEffect, useState } from "react";
import palaceNight from "@/assets/palace-night.jpg";
import { Ornament } from "@/components/motifs/Ornament";
import { MandalaBackground } from "@/components/motifs/MandalaPattern";
import { weddingConfig } from "@/lib/wedding-config";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  complete: boolean;
};

// Exact wedding target: 5 December 2026, 19:00:00 IST (UTC+05:30 -> 13:30 UTC)
const WEDDING_TARGET_MS = Date.UTC(2026, 11, 5, 13, 30, 0);

function remainingTime(): Remaining {
  let targetMs = WEDDING_TARGET_MS;
  try {
    const parsed = new Date(weddingConfig.countdownTarget).getTime();
    if (!Number.isNaN(parsed) && parsed > 0) {
      targetMs = parsed;
    }
  } catch {
    targetMs = WEDDING_TARGET_MS;
  }

  const now = Date.now();
  const delta = targetMs - now;

  if (Number.isNaN(delta) || delta <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, complete: true };
  }

  const totalSeconds = Math.max(0, Math.floor(delta / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    complete: false,
  };
}

export function FinaleScene() {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(remainingTime());
    const timer = window.setInterval(() => setRemaining(remainingTime()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: remaining?.days },
    { label: "HOURS", value: remaining?.hours },
    { label: "MINUTES", value: remaining?.minutes },
    { label: "SECONDS", value: remaining?.seconds },
  ] as const;

  return (
    <section className="scene finale-scene" aria-labelledby="finale-heading">
      {/* Royal Indian Mandala Pattern Background */}
      <MandalaBackground
        variant="both-corners"
        color="rgba(246, 224, 164, 0.16)"
        opacity={0.82}
        className="finale-mandala-overlay"
      />

      {/* Background Illuminated Night Palace */}
      <div className="finale-palace-container">
        <img
          src={palaceNight}
          alt="Jaipur Palace illuminated at night under starry skies"
          loading="lazy"
          width={1024}
          height={1536}
          className="finale-palace-image"
        />
        <div className="finale-night-overlay" />
        <div className="finale-water-glow" aria-hidden="true" />
      </div>

      {/* Night Sky Floating Lanterns */}
      <div className="finale-night-lanterns" aria-hidden="true">
        <span className="night-lantern night-lantern-1" />
        <span className="night-lantern night-lantern-2" />
        <span className="night-lantern night-lantern-3" />
        <span className="night-lantern night-lantern-4" />
        <span className="night-lantern night-lantern-5" />
      </div>

      <div className="scene-content finale-content reveal-group">
        <p className="kicker finale-kicker">
          {remaining?.complete ? "A Sacred Celebration" : "A Royal Journey Ahead"}
        </p>
        <h2 id="finale-heading" className="finale-countdown-title">
          The Countdown Begins
        </h2>

        {/* Live Editorial Countdown floating in the night sky (No dashboard boxes) */}
        {!remaining?.complete && (
          <div className="countdown-floating-display" aria-live="polite">
            {timeUnits.map(({ label, value }) => (
              <div key={label} className="countdown-column">
                <span className="countdown-digits">
                  {value === undefined ? "00" : String(value).padStart(2, "0")}
                </span>
                <span className="countdown-label">{label}</span>
              </div>
            ))}
          </div>
        )}

        <p className="finale-emotional-message">{weddingConfig.closingMessage}</p>

        <Ornament className="ornament finale-ornament" />

        <div className="finale-signature-block">
          <p className="finale-couple-names">
            <span>{weddingConfig.bride}</span>
            <small>&amp;</small>
            <span>{weddingConfig.groom}</span>
          </p>
          <p className="finale-date-city">
            {weddingConfig.dateDisplay} • Jaipur, Rajasthan
          </p>
          <p className="finale-tagline-footer">वऱ्हाड निघालं जयपूरला</p>
        </div>
      </div>
    </section>
  );
}