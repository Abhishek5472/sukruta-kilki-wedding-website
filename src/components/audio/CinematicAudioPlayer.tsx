import React, { useEffect, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import weddingAudioUrl from "@/assets/audio/ek-din-aap.mp3";

const FALLBACK_AUDIO_SRC = "/Ek%20Din%20Aap%20Yes%20Boss%20128%20Kbps.mp3";
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
  private isIOS = false;

  constructor() {
    if (typeof window !== "undefined") {
      this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      this.initAudio();
      this.bindVisibility();
      this.bindFirstUserGesture();
    }
  }

  private initAudio() {
    if (this.audio) return;
    try {
      this.audio = new Audio(weddingAudioUrl || FALLBACK_AUDIO_SRC);
      this.audio.preload = "auto";
      this.audio.loop = false;
      
      // On iOS Safari volume is read-only (always 1.0). On other browsers, set initial default
      try {
        this.audio.volume = DEFAULT_TARGET_VOLUME;
      } catch {
        // Ignore iOS volume read-only exception
      }

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
        this.state.hasStarted = true;
        this.notify();
      });

      this.audio.addEventListener("error", () => {
        // Fallback to public audio path if Vite asset fails on any custom environment
        if (this.audio && this.audio.src !== FALLBACK_AUDIO_SRC) {
          this.audio.src = FALLBACK_AUDIO_SRC;
          this.audio.load();
        }
      });
    } catch {
      // Audio initialization fallback
    }
  }

  private bindFirstUserGesture() {
    const unlockOnFirstGesture = () => {
      // Only unlock if not explicitly muted or stopped
      if (!this.state.hasStarted) {
        this.startJourneyAudio();
      }
      window.removeEventListener("pointerdown", unlockOnFirstGesture);
      window.removeEventListener("touchstart", unlockOnFirstGesture);
      window.removeEventListener("click", unlockOnFirstGesture);
    };

    window.addEventListener("pointerdown", unlockOnFirstGesture, { once: true, passive: true });
    window.addEventListener("touchstart", unlockOnFirstGesture, { once: true, passive: true });
    window.addEventListener("click", unlockOnFirstGesture, { once: true, passive: true });
  }

  private bindVisibility() {
    document.addEventListener("visibilitychange", () => {
      if (!this.audio) return;
      if (document.hidden) {
        if (this.state.isPlaying) {
          this.wasPlayingBeforeHidden = true;
          this.fadeVolume(0, 300, () => {
            this.audio?.pause();
          });
        }
      } else {
        if (this.wasPlayingBeforeHidden && !this.state.isMuted) {
          this.wasPlayingBeforeHidden = false;
          this.audio.play().then(() => {
            this.fadeVolume(DEFAULT_TARGET_VOLUME, 600);
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

    // If iOS Safari, volume is read-only; perform completion immediately
    if (this.isIOS) {
      if (onComplete) onComplete();
      return;
    }

    try {
      const startVol = this.audio.volume;
      const diff = targetVol - startVol;
      if (Math.abs(diff) < 0.02) {
        this.audio.volume = Math.max(0, Math.min(1, targetVol));
        if (onComplete) onComplete();
        return;
      }

      const steps = 20;
      const stepInterval = durationMs / steps;
      const stepDiff = diff / steps;
      let currentStep = 0;

      this.fadeInterval = setInterval(() => {
        if (!this.audio) {
          if (this.fadeInterval) clearInterval(this.fadeInterval);
          return;
        }
        currentStep++;
        try {
          const nextVol = Math.max(0, Math.min(1, startVol + stepDiff * currentStep));
          this.audio.volume = nextVol;
        } catch {
          // Ignore volume errors
        }

        if (currentStep >= steps) {
          if (this.fadeInterval) clearInterval(this.fadeInterval);
          this.fadeInterval = null;
          try {
            this.audio.volume = Math.max(0, Math.min(1, targetVol));
          } catch {
            // Ignore
          }
          if (onComplete) onComplete();
        }
      }, stepInterval);
    } catch {
      if (onComplete) onComplete();
    }
  }

  public startJourneyAudio = async () => {
    if (!this.audio) this.initAudio();
    if (!this.audio) return;

    if (this.state.hasStarted && this.state.isPlaying) {
      return;
    }

    try {
      this.audio.muted = false;
      
      // On non-iOS devices, start at low volume and ramp up
      if (!this.isIOS) {
        try {
          this.audio.volume = 0.05;
        } catch {
          // Ignore
        }
      }

      const playPromise = this.audio.play();
      if (playPromise !== undefined) {
        await playPromise;
      }

      this.state.hasStarted = true;
      this.state.isPlaying = true;
      this.state.isMuted = false;
      this.notify();

      // Smooth fade-in over 1.2s on desktop/Android
      this.fadeVolume(DEFAULT_TARGET_VOLUME, 1200);
    } catch {
      // Autoplay policy prevented playback; will retry on next user tap
    }
  };

  public toggle = () => {
    if (!this.audio) this.initAudio();
    if (!this.audio) return;

    if (!this.state.hasStarted || !this.state.isPlaying) {
      // Start or Resume
      this.state.isMuted = false;
      this.state.isPlaying = true;
      this.state.hasStarted = true;
      this.notify();

      this.audio.muted = false;
      this.audio.play().then(() => {
        this.fadeVolume(DEFAULT_TARGET_VOLUME, 600);
      }).catch(() => {});
    } else {
      // Mute / Fade out and pause
      this.state.isMuted = true;
      this.state.isPlaying = false;
      this.notify();

      this.audio.muted = true;
      this.fadeVolume(0, 350, () => {
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
 * Always present, unobtrusive, zero layout shift, fixed in bottom-right corner.
 */
export function CinematicAudioToggle() {
  const { isPlaying, isMuted, hasStarted, toggle } = useCinematicAudio();

  const isCurrentlyPlaying = isPlaying && !isMuted;

  return (
    <aside
      className="cinematic-audio-widget is-visible"
      aria-label="Wedding background music controls"
    >
      <button
        type="button"
        onClick={toggle}
        className={`cinematic-audio-pill ${isCurrentlyPlaying ? "is-playing" : "is-paused"}`}
        aria-label={isCurrentlyPlaying ? "Mute wedding music" : "Play wedding music"}
        title={isCurrentlyPlaying ? "Mute wedding melody" : "Play wedding melody"}
      >
        <span className="audio-pill-ring" aria-hidden="true" />
        <span className="audio-pill-glow" aria-hidden="true" />
        
        {isCurrentlyPlaying ? (
          <div className="audio-visualizer-bars" aria-hidden="true">
            <span className="sound-bar bar-1" />
            <span className="sound-bar bar-2" />
            <span className="sound-bar bar-3" />
          </div>
        ) : hasStarted ? (
          <VolumeX size={14} className="audio-icon-muted" />
        ) : (
          <Music size={13} className="audio-icon-muted audio-pulse-icon" />
        )}

        <span className="audio-label-text">
          {isCurrentlyPlaying ? "Music On" : hasStarted ? "Music Off" : "Music"}
        </span>
      </button>
    </aside>
  );
}
