import React from "react";
import { weddingConfig } from "@/lib/wedding-config";
import qrWedding from "@/assets/qr-wedding-location.png";
import qrStay from "@/assets/qr-stay-location.png";
import { CloudSun, Home, MapPin, Bus, PhoneCall, ShieldAlert, ExternalLink } from "lucide-react";

export function DetailsScene() {
  const getIcon = (id: string) => {
    switch (id) {
      case "weather":
        return <CloudSun size={24} className="guide-icon" />;
      case "stay":
        return <Home size={24} className="guide-icon" />;
      case "venue":
        return <MapPin size={24} className="guide-icon" />;
      case "travel":
        return <Bus size={24} className="guide-icon" />;
      case "contacts":
        return <PhoneCall size={24} className="guide-icon" />;
      default:
        return <ShieldAlert size={24} className="guide-icon" />;
    }
  };

  return (
    <section className="scene details-scene" aria-labelledby="details-heading">
      {/* Subtle Botanical watermark background */}
      <div className="botanical-foliage-left" aria-hidden="true" />
      <div className="botanical-foliage-right" aria-hidden="true" />

      <div className="scene-content details-content reveal-group">
        <p className="kicker">For When You Need Us</p>
        <h2 id="details-heading" className="details-main-title">
          Things to Know
        </h2>
        <p className="details-subtitle">
          Essential information for our family and guests travelling to Jaipur
        </p>

        <div className="details-cards-grid">
          {weddingConfig.guestGuide.map((item, index) => (
            <article key={item.id} className="guide-card" data-guide={item.id}>
              <div className="guide-card-header">
                <span className="guide-card-index">0{index + 1}</span>
                <span className="guide-card-badge">{item.category}</span>
              </div>

              <div className="guide-card-body">
                <div className="guide-icon-wrap">{getIcon(item.id)}</div>
                <h3 className="guide-card-title">{item.title}</h3>
                <p className="guide-card-text">{item.description}</p>

                {/* QR Code Embed for Stay Venue */}
                {item.id === "stay" && (
                  <div className="guide-qr-block">
                    <div className="qr-image-frame">
                      <img
                        src={qrStay}
                        alt="Scan QR code for Shri Bhawani Farm map location"
                        width={130}
                        height={130}
                        className="qr-code-img"
                      />
                    </div>
                    <a
                      href={weddingConfig.stayVenue.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="qr-direct-link"
                    >
                      <ExternalLink size={13} />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                )}

                {/* QR Code Embed for Wedding Venue */}
                {item.id === "venue" && (
                  <div className="guide-qr-block">
                    <div className="qr-image-frame">
                      <img
                        src={qrWedding}
                        alt="Scan QR code for Bandhan Paradise map location"
                        width={130}
                        height={130}
                        className="qr-code-img"
                      />
                    </div>
                    <a
                      href={weddingConfig.routeVenue.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="qr-direct-link"
                    >
                      <ExternalLink size={13} />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                )}

                {/* Click to Call actions for Family Emergency Contacts */}
                {item.id === "contacts" && (
                  <div className="contacts-action-grid">
                    <a href="tel:+917756981053" className="contact-tel-btn">
                      <PhoneCall size={13} />
                      <span>Abhishek Kulkarni: 7756981053</span>
                    </a>
                    <a href="tel:+919509621605" className="contact-tel-btn">
                      <PhoneCall size={13} />
                      <span>Trayambak Pareek: 9509621605</span>
                    </a>
                    <a href="tel:+919762019227" className="contact-tel-btn">
                      <PhoneCall size={13} />
                      <span>Ajit Kulkarni: 9762019227</span>
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}