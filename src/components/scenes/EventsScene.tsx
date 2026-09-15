import React from "react";
import floralCornerTr from "@/assets/floral-corner-tr.png";
import floralCornerBl from "@/assets/floral-corner-bl.png";
import { Ornament } from "@/components/motifs/Ornament";
import { MandalaBackground } from "@/components/motifs/MandalaPattern";
import { CardAmbientLanterns } from "@/components/motifs/LanternField";
import { weddingConfig, type WeddingEvent } from "@/lib/wedding-config";
import { MapPin, Navigation, Sparkles } from "lucide-react";

function EventCard({
  event,
  index,
}: {
  event: WeddingEvent;
  index: number;
}) {
  return (
    <article
      className="event-card-plaque jharokha-arch-card"
      data-event={event.id}
      style={{ "--card-index": index } as React.CSSProperties}
    >
      {/* Dynamic Candlelight Flame Illumination Overlay that brightens the card & text */}
      <div className="card-flame-glow-overlay" aria-hidden="true" />
      <div className="card-candle-flame-light" aria-hidden="true" />
      
      {/* Decorative Jharokha Cusped Multi-foil Arch Crest */}
      <div className="jharokha-arch-crest" aria-hidden="true">
        <svg viewBox="0 0 200 45" className="arch-crest-svg" fill="none">
          <path
            d="M 10 45 C 25 15, 60 10, 80 18 C 92 10, 108 10, 120 18 C 140 10, 175 15, 190 45"
            stroke="var(--gold-primary)"
            strokeWidth="1.5"
          />
          <circle cx="100" cy="8" r="3.5" fill="var(--gold-primary)" />
          <path d="M 90 14 Q 100 4 110 14" stroke="var(--gold-primary)" strokeWidth="1.2" fill="none" />
        </svg>
      </div>

      {/* Authentic Magnolia/Jasmine floral corner bouquets */}
      <img
        src={floralCornerTr}
        alt=""
        aria-hidden="true"
        className="card-floral-img card-floral-tr"
      />
      <img
        src={floralCornerBl}
        alt=""
        aria-hidden="true"
        className="card-floral-img card-floral-bl"
      />

      <div className="card-inner-frame">
        {/* Double Gold Inlay Border Line */}
        <div className="card-inlay-gold-border" aria-hidden="true" />

        <div className="event-index-badge">
          <Sparkles size={11} className="index-sparkle" />
          <span className="event-index-pill">0{index + 1}</span>
          <Sparkles size={11} className="index-sparkle" />
        </div>

        {/* Intact, perfectly sized Title with graceful wrap */}
        <h3 className="event-name event-title-balanced">{event.name}</h3>
        <p className="event-marathi-tagline">{event.tagline}</p>

        <Ornament className="ornament card-divider" />

        <div className="event-meta-grid">
          <div className="event-meta-row">
            <span className="event-meta-label">DATE</span>
            <span className="event-meta-value">{event.date}</span>
          </div>
          <div className="event-meta-row">
            <span className="event-meta-label">TIME</span>
            <span className="event-meta-value">{event.time}</span>
          </div>
          <div className="event-meta-row">
            <span className="event-meta-label">VENUE</span>
            <span className="event-meta-value event-venue-name">{event.venue}</span>
          </div>
          <div className="event-meta-row event-itinerary-brief">
            <span className="event-meta-label">PROGRAM</span>
            <span className="event-meta-desc">{event.itinerary}</span>
          </div>
        </div>

        <a
          href={event.routeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-route-link"
          aria-label={`Directions to ${event.name} venue`}
        >
          <Navigation className="inline-icon" size={13} />
          <span>See the route</span>
        </a>
      </div>
    </article>
  );
}

export function EventsScene() {
  return (
    <section className="scene events-scene" aria-labelledby="events-heading">
      {/* Intricate Royal Indian Mandala Pattern Background from Reference (Screenshot 2) */}
      <MandalaBackground
        variant="both-corners"
        color="rgba(246, 224, 164, 0.22)"
        opacity={0.9}
        className="events-mandala-overlay"
      />
      <div className="events-vignette-overlay" aria-hidden="true" />

      {/* Floating lanterns gently placed near cards casting candlelight glow */}
      <CardAmbientLanterns />

      <div className="scene-content events-content">
        {/* Header Continuation */}
        <div className="events-header-continuation reveal-group">
          <p className="kicker events-lead-kicker">Together With Family</p>
          <h2 id="events-heading" className="events-continuation-title">
            On The Following Events
          </h2>
          <Ornament className="ornament events-header-ornament" />
        </div>

        {/* The Three Enhanced Arched Jharokha Cards */}
        <div className="event-cards-grid">
          {weddingConfig.events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* "SEE THE ROUTE" Concentric Target Button Set-Piece */}
        <div className="see-the-route-setpiece reveal-group">
          <p className="route-kicker">Wedding Destination</p>
          <h3 className="route-title">SEE THE ROUTE</h3>
          <p className="route-venue-name">{weddingConfig.routeVenue.name}</p>
          <p className="route-address">{weddingConfig.routeVenue.address}</p>

          <a
            href={weddingConfig.routeVenue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="target-route-button"
            aria-label="Click to open wedding venue on Google Maps"
          >
            <div className="target-ring-outer" />
            <div className="target-ring-mid" />
            <div className="target-ring-inner">
              <MapPin size={24} className="target-center-icon" />
            </div>
            <span className="target-pulse-wave" />
            <span className="target-button-label">Click to open map</span>
          </a>
        </div>
      </div>
    </section>
  );
}