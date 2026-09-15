import rajasthanLandscape from "@/assets/rajasthan-landscape.jpg";
import { Train } from "@/components/motifs/Train";
import { weddingConfig } from "@/lib/wedding-config";

export function JourneyScene() {
  return (
    <section className="scene journey-scene" aria-label="Journey to Jaipur">
      {/* Seamless Sunset Sky Gradient starting right at the top seam */}
      <div className="journey-sky-gradient" />
      <div className="journey-sun-glow" aria-hidden="true" />

      {/* 
        Panoramic Vintage Rajasthan Landscape Backdrop
        Starts right at the top boundary where previous theme stops,
        fades from faint to sharp upon scroll,
        and terminates exactly at the bottom of the train track level
      */}
      <div className="journey-panoramic-backdrop" aria-hidden="true">
        <img
          src={rajasthanLandscape}
          alt="Rajasthan landscape with Aravalli hills and Nahargarh fort"
          width={1920}
          height={1080}
          className="journey-landscape-img scroll-sharpen-landscape"
        />
        <div className="journey-landscape-top-gradient" />
        <div className="journey-landscape-haze" />
      </div>

      {/* Central Story Headline: वऱ्हाड निघालं जयपूरला */}
      <div className="journey-narrative-block">
        <p className="kicker journey-kicker">A Royal Family Expedition</p>
        <h2 className="journey-devanagari-title">{weddingConfig.journeyTagline}</h2>
      </div>

      {/* The Moving Heritage Train Set-Piece with voluminous steam clouds & rolling fog */}
      <Train />

      {/* Foreground fast pass silhouette elements */}
      <div className="journey-foreground-silhouette" aria-hidden="true" />
    </section>
  );
}