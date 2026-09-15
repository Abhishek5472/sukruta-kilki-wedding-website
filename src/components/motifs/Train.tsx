import trainImage from "@/assets/heritage-wedding-train.png";

export function Train() {
  return (
    <div className="train-scene-rig" aria-hidden="true">
      {/* Expansive Billowing Fog & Steam Cloud System Covering Screen */}
      <div className="train-steam-atmosphere">
        {/* Giant dense rolling fog clouds that envelop screen */}
        <div className="steam-billow steam-billow-huge-1" />
        <div className="steam-billow steam-billow-huge-2" />
        <div className="steam-billow steam-billow-huge-3" />
        <div className="steam-billow steam-billow-huge-4" />

        {/* Engine Chimney Voluminous Steam Puffs */}
        <div className="steam-puff puff-plume-1" />
        <div className="steam-puff puff-plume-2" />
        <div className="steam-puff puff-plume-3" />
        <div className="steam-puff puff-plume-4" />
        <div className="steam-puff puff-plume-5" />
        <div className="steam-puff puff-plume-6" />

        {/* Low-lying track fog running across the railway ballast */}
        <div className="track-rolling-fog track-fog-1" />
        <div className="track-rolling-fog track-fog-2" />
      </div>

      {/* Train Locomotive & Coaches with mounted banner */}
      <div className="train-image-container">
        <img
          src={trainImage}
          alt="Royal Wedding Special Heritage Train — वऱ्हाड निघालं जयपूरला"
          width={1536}
          height={768}
          loading="lazy"
          className="train-vehicle-asset"
        />
        {/* Crisp Devanagari destination board physically attached to carriage */}
        <div className="carriage-board-overlay">
          <span className="carriage-marathi-text">वऱ्हाड निघालं जयपूरला</span>
        </div>
        {/* Warm carriage interior ambient glow overlay */}
        <div className="train-carriage-glow" />

        {/* Front Headlight Beam piercing through the steam */}
        <div className="train-headlight-cone" />
      </div>

      {/* Track Ballast & Rail line */}
      <div className="rail-track">
        <div className="rail-steel rail-steel-top" />
        <div className="rail-ties" />
        <div className="rail-steel rail-steel-bottom" />
      </div>
    </div>
  );
}