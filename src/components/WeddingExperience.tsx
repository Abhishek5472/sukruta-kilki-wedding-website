import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OpeningScene } from "@/components/scenes/OpeningScene";
import { InvitationScene } from "@/components/scenes/InvitationScene";
import { EventsScene } from "@/components/scenes/EventsScene";
import { JourneyScene } from "@/components/scenes/JourneyScene";
import { GalleryScene } from "@/components/scenes/GalleryScene";
import { RsvpScene } from "@/components/scenes/RsvpScene";
import { DetailsScene } from "@/components/scenes/DetailsScene";
import { FinaleScene } from "@/components/scenes/FinaleScene";

gsap.registerPlugin(ScrollTrigger);

export function WeddingExperience() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const update = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // 1. Opening Palace camera descent & hero copy
      gsap.to(".opening-palace", {
        yPercent: -14,
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: ".opening-scene",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".opening-copy", {
        yPercent: -35,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".opening-scene",
          start: "20% top",
          end: "70% top",
          scrub: 1,
        },
      });

      // 2. Parallax Lantern Drift with 3D Depth Scaling (User request 2 & 6)
      // Foreground lanterns scale up to 2.2x to simulate passing right in front of camera
      gsap.to(".opening-scene .lantern-fg", {
        y: -380,
        x: "+=40",
        scale: 2.2,
        ease: "none",
        scrollTrigger: {
          trigger: ".opening-scene",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".opening-scene .lantern-mg", {
        y: -240,
        x: "-=25",
        scale: 1.35,
        ease: "none",
        scrollTrigger: {
          trigger: ".opening-scene",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".opening-scene .lantern-bg", {
        y: -140,
        ease: "none",
        scrollTrigger: {
          trigger: ".opening-scene",
          start: "top top",
          end: "bottom top",
          scrub: 1.6,
        },
      });

      // Scroll Down Prompt fade out
      gsap.to(".scroll-prompt-enhanced", {
        opacity: 0,
        y: 20,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".opening-scene",
          start: "10% top",
          end: "30% top",
          scrub: 0.5,
        },
      });

      // 3. Invitation Scene elements with elegant staggered reveals (User request 7)
      gsap.from(".invitation-content .reveal-text-flow", {
        y: 50,
        opacity: 0,
        stagger: 0.18,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".invitation-content",
          start: "top 75%",
          end: "bottom 85%",
          scrub: 1,
        },
      });

      // Courtyard sandstone bottleneck perspective descent (User request 5)
      gsap.to(".courtyard-wing-left", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".invitation-scene",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(".courtyard-wing-right", {
        xPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".invitation-scene",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // 4. Sequential Event Cards Entry with Candle Flame Glow (User request 9)
      gsap.from(".event-card-plaque", {
        y: 130,
        opacity: 0,
        scale: 0.92,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".event-cards-grid",
          start: "top 82%",
          end: "bottom 78%",
          scrub: 1,
        },
      });

      // Card ambient lanterns drifting across cards
      gsap.to(".card-ambient-lanterns .lantern", {
        y: -120,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".events-scene",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // 5. Journey Scene: Landscape fade-in from faint to sharp & ending at train bottom (User request 10)
      gsap.fromTo(
        ".scroll-sharpen-landscape",
        {
          opacity: 0.2,
          filter: "blur(6px) saturate(0.6)",
        },
        {
          opacity: 1,
          filter: "blur(0px) saturate(1.08)",
          ease: "none",
          scrollTrigger: {
            trigger: ".journey-scene",
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );

      // Journey Train crossing with Parallax (User request 10 & 11)
      gsap.fromTo(
        ".train-image-container",
        { xPercent: -40 },
        {
          xPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: ".journey-scene",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.85,
          },
        }
      );

      // Screen-covering fog billows expanding as the train moves (User request 11)
      gsap.fromTo(
        ".steam-billow",
        { xPercent: -15, scale: 0.8, opacity: 0.3 },
        {
          xPercent: 25,
          scale: 1.3,
          opacity: 0.85,
          ease: "none",
          scrollTrigger: {
            trigger: ".journey-scene",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );

      gsap.to(".track-rolling-fog", {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".journey-scene",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // 6. Scroll-linked RSVP Typography Motion
      gsap.fromTo(
        ".rsvp-typography-rig",
        { y: 60, scale: 0.95 },
        {
          y: -30,
          scale: 1.02,
          ease: "none",
          scrollTrigger: {
            trigger: ".rsvp-scene",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // 7. General Reveal Groups with refined typography motion (User request 7)
      gsap.utils.toArray<HTMLElement>(".reveal-group").forEach((group) => {
        gsap.from(group, {
          y: 45,
          opacity: 0,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
            end: "top 62%",
            scrub: 1,
          },
        });
      });

      // 8. Finale Night Palace camera tilt & illumination
      gsap.fromTo(
        ".finale-palace-image",
        { yPercent: 10, scale: 1.05 },
        {
          yPercent: -5,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".finale-scene",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1.2,
          },
        }
      );
    }, root);

    return () => {
      ctx.revert();
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={root} className="wedding-experience">
      <OpeningScene />
      <InvitationScene />
      <EventsScene />
      <JourneyScene />
      <GalleryScene />
      <RsvpScene />
      <DetailsScene />
      <FinaleScene />
    </main>
  );
}