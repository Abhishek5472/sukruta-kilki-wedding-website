import React, { useEffect, useState } from "react";
import { VolumeX } from "lucide-react";

const AUDIO_SRC = "/Ek%20Din%20Aap%20Yes%20Boss%20128%20Kbps.mp3";
const DEFAULT_TARGET_VOLUME = 0.82;
const FINALE_TARGET_VOLUME = 0.95;

type AudioState = {
  isPlaying: boolean;
  isMuted: boolean;
  hasStarted: boolean;
};

type Listener = (state: AudioState) => void;

class CinematicAudioController {
  private audio: HTMLAudioElement | null = null;
  private state: AudioState = {
    isPlaying: false,
    isMuted: false,
    hasStarted: false,
  };
  private listeners = new Set<Listener>();
  private fadeInterval: ReturnType<typeof setInterval> | null = null;
  private wasPlayingBeforeHidden = false;

  constructor() {
    if (typeof window !== "undefined") {
      this.initAudio();
      this.bindVisibility();
    }
  }

  private initAudio() {
    if (this.audio) return;
    this.audio = new Audio(AUDIO_SRC);
    this.audio.preload = "auto";
    this.audio.volume = 0;
    this.audio.loop = false;

    this.audio.addEventListener("ended", () => {
      this.state.isPlaying = false;
      this.notify();
    });

    this.audio.addEventListener("pause", () => {
      if (this.state.isPlaying && !this.wasPlayingBeforeHidden) {
        this.state.isPlaying = false;
        this.notify();
      }
    });

    this.audio.addEventListener("play", () => {
      this.state.isPlaying = true;
      this.notify();
    });
  }

  private bindVisibility() {
    document.addEventListener("visibilitychange", () => {
      if (!this.audio) return;
      if (document.hidden) {
        if (this.state.isPlaying) {
          this.wasPlayingBeforeHidden = true;
          this.fadeVolume(0, 400, () => {
            this.audio?.pause();
          });
        }
      } else {
        if (this.wasPlayingBeforeHidden && !this.state.isMuted) {
          this.wasPlayingBeforeHidden = false;
          this.audio.play().then(() => {
            this.fadeVolume(DEFAULT_TARGET_VOLUME, 800);
          }).catch(() => {});
        }
      }
    });
  }

  public subscribe(listener: Listener) {
    this.listeners.add(listener);
    listener(this.state);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((l) => l({ ...this.state }));
  }

  public fadeVolume(targetVol: number, durationMs = 1000, onComplete?: () => void) {
    if (!this.audio) return;
    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    const startVol = this.audio.volume;
    const diff = targetVol - startVol;
    if (Math.abs(diff) < 0.01) {
      this.audio.volume = Math.max(0, Math.min(1, targetVol));
      if (onComplete) onComplete();
      return;
    }

    const steps = 25;
    const stepInterval = durationMs / steps;
    const stepDiff = diff / steps;
    let currentStep = 0;

    this.fadeInterval = setInterval(() => {
      if (!this.audio) {
        if (this.fadeInterval) clearInterval(this.fadeInterval);
        return;
      }
      currentStep++;
      const nextVol = Math.max(0, Math.min(1, startVol + stepDiff * currentStep));
      this.audio.volume = nextVol;

      if (currentStep >= steps) {
        if (this.fadeInterval) clearInterval(this.fadeInterval);
        this.fadeInterval = null;
        this.audio.volume = Math.max(0, Math.min(1, targetVol));
        if (onComplete) onComplete();
      }
    }, stepInterval);
  }

  public startJourneyAudio = async () => {
    if (!this.audio) this.initAudio();
    if (!this.audio) return;

    if (this.state.hasStarted && this.state.isPlaying) {
      return;
    }

    try {
      this.audio.currentTime = 0;
      this.audio.volume = 0;
      const playPromise = this.audio.play();
      if (playPromise !== undefined) {
        await playPromise;
      }
      this.state.hasStarted = true;
      this.state.isPlaying = true;
      this.state.isMuted = false;
      this.notify();

      // Smooth, elegant fade-in over 1.2s
      this.fadeVolume(DEFAULT_TARGET_VOLUME, 1200);
    } catch {
      // Browser autoplay policy prevented playback; will retry on next user tap
    }
  };

  public toggle = () => {
    if (!this.audio) return;

    if (!this.state.hasStarted) {
      this.startJourneyAudio();
      return;
    }

    if (this.state.isMuted || !this.state.isPlaying) {
      // Unmute & Resume
      this.state.isMuted = false;
      this.state.isPlaying = true;
      this.notify();
      this.audio.play().then(() => {
        this.fadeVolume(DEFAULT_TARGET_VOLUME, 600);
      }).catch(() => {});
    } else {
      // Mute / Fade out and pause
      this.state.isMuted = true;
      this.state.isPlaying = false;
      this.notify();
      this.fadeVolume(0, 400, () => {
        this.audio?.pause();
      });
    }
  };

  public setProminence(isFinale: boolean) {
    if (!this.audio || !this.state.isPlaying || this.state.isMuted) return;
    const target = isFinale ? FINALE_TARGET_VOLUME : DEFAULT_TARGET_VOLUME;
    this.fadeVolume(target, 1200);
  }

  public endGracefully = () => {
    if (!this.audio || !this.state.isPlaying) return;
    this.fadeVolume(0, 2500, () => {
      this.audio?.pause();
      this.state.isPlaying = false;
      this.notify();
    });
  };

  public getState(): AudioState {
    return { ...this.state };
  }
}

export const cinematicAudio = new CinematicAudioController();

if (typeof window !== "undefined") {
  (window as unknown as { __cinematicAudio: CinematicAudioController }).__cinematicAudio = cinematicAudio;
}

export function useCinematicAudio() {
  const [audioState, setAudioState] = useState<AudioState>(cinematicAudio.getState());

  useEffect(() => {
    const unsubscribe = cinematicAudio.subscribe(setAudioState);
    return unsubscribe;
  }, []);

  return {
    ...audioState,
    startJourneyAudio: cinematicAudio.startJourneyAudio,
    toggle: cinematicAudio.toggle,
    setProminence: cinematicAudio.setProminence.bind(cinematicAudio),
    endGracefully: cinematicAudio.endGracefully,
  };
}

/**
 * Discreet, luxury floating audio toggle button.
 * Unobtrusive, zero layout shift, fixed in corner with subtle soundwave pulse.
 */
export function CinematicAudioToggle() {
  const { isPlaying, isMuted, hasStarted, toggle } = useCinematicAudio();

  // If user hasn't initiated, don't show or show very discreetly
  const isVisible = hasStarted;

  return (
    <aside
      className={`cinematic-audio-widget ${isVisible ? "is-visible" : "is-hidden"}`}
      aria-label="Background music controls"
    >
      <button
        type="button"
        onClick={toggle}
        className={`cinematic-audio-pill ${isPlaying && !isMuted ? "is-playing" : "is-paused"}`}
        aria-label={isPlaying && !isMuted ? "Mute background music" : "Play background music"}
        title={isPlaying && !isMuted ? "Mute wedding melody" : "Play wedding melody"}
      >
        <span className="audio-pill-ring" aria-hidden="true" />
        <span className="audio-pill-glow" aria-hidden="true" />
        
        {isPlaying && !isMuted ? (
          <div className="audio-visualizer-bars" aria-hidden="true">
            <span className="sound-bar bar-1" />
            <span className="sound-bar bar-2" />
            <span className="sound-bar bar-3" />
          </div>
        ) : (
          <VolumeX size={14} className="audio-icon-muted" />
        )}

        <span className="audio-label-text">
          {isPlaying && !isMuted ? "Music On" : "Music Off"}
        </span>
      </button>
    </aside>
  );
}
