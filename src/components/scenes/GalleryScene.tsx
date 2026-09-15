import React, { useState, useEffect } from "react";
import royalElephant from "@/assets/royal-procession-elephant.png";
import ovalCameoFrame from "@/assets/oval-cameo-frame.png";
import { Ornament } from "@/components/motifs/Ornament";
import { MandalaBackground } from "@/components/motifs/MandalaPattern";
import { weddingConfig } from "@/lib/wedding-config";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function GalleryScene() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = weddingConfig.photos;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [photos.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section className="scene gallery-scene cameo-tone-page" aria-labelledby="gallery-title">
      {/* Subtle Tone-on-Tone Mandala watermark matching the cameo background */}
      <MandalaBackground
        variant="both-corners"
        color="rgba(92, 22, 34, 0.13)"
        opacity={0.95}
        className="gallery-mandala-overlay"
      />

      {/* Royal Wedding Elephant Transition Seam */}
      <div className="procession-boundary-break" aria-hidden="true">
        <div className="royal-procession-elephant-wrap">
          <img
            src={royalElephant}
            alt="Ceremonial Royal Wedding Elephant with golden howdah"
            className="royal-elephant-img"
          />
        </div>
        <div className="procession-seam-line" />
      </div>

      <div className="scene-content gallery-content reveal-group">
        <p className="kicker gallery-kicker">A Royal Union</p>
        <h2 id="gallery-title" className="gallery-main-title">
          Meet The Bride &amp; Groom
        </h2>
        <p className="gallery-intro-prose">
          Two souls, rooted in culture and bound by destiny. From early shared dreams in Maharashtra to a royal beginning in the Pink City of Jaipur — together with family, every step of the journey is a celebration of love.
        </p>

        {/* Embossed Lace Oval Cameo Photo Frame */}
        <div className="cameo-frame-wrapper">
          <div className="cameo-stage-box">
            {/* The Couple Photographs Layer */}
            <div className="cameo-photos-viewport">
              {photos.map((photo, index) => (
                <div
                  key={photo.caption}
                  className={`cameo-slide-item ${index === currentIndex ? "is-active" : ""}`}
                  aria-hidden={index !== currentIndex}
                >
                  <img
                    src={photo.src}
                    alt={`Sukruta & Kilki - ${photo.caption}`}
                    width={600}
                    height={750}
                    className="cameo-portrait-img"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>

            {/* The Lace Oval Cameo Paper-cut Overlay */}
            <img
              src={ovalCameoFrame}
              alt=""
              aria-hidden="true"
              className="cameo-lace-frame-asset"
            />

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="cameo-nav-btn cameo-nav-prev"
              aria-label="Previous photograph"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="cameo-nav-btn cameo-nav-next"
              aria-label="Next photograph"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Photo Caption */}
          <p className="cameo-current-caption">{photos[currentIndex]?.caption}</p>

          {/* Dots Indicator & Live Counter (01 / 04) */}
          <div className="cameo-counter-bar">
            <div className="counter-dots">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`counter-dot ${i === currentIndex ? "is-active" : ""}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <span className="counter-digits">
              0{currentIndex + 1} <small>/</small> 0{photos.length}
            </span>
          </div>
        </div>

        <Ornament className="ornament gallery-divider" />
      </div>
    </section>
  );
}