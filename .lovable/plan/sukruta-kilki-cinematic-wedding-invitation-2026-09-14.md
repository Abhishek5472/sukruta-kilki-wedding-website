# Sukruta & Kilki Cinematic Wedding Invitation

## Reference map

The 75-second reference uses one continuous vertical camera path rather than ordinary page sections:

1. **Sky and palace approach** — dusk-blue sky, drifting lanterns at several depths, editorial couple names, then a slow downward push toward a sandstone palace. A balcony couple portrait remains centered while the architecture grows around it.
2. **Palace-to-courtyard handoff** — the palace facade expands past the frame and reveals a turquoise ceremonial aisle with red sandstone wings. Lanterns continue across the boundary, making both spaces feel connected.
3. **Invitation reveal** — an ivory monogram and centered invitation copy rise through a teal textured field. The typography appears in delayed groups while the virtual camera keeps descending.
4. **Event archive** — ornate ivory cards emerge in staggered rows and drift upward. The reference has six cards; this build will preserve the physical-card choreography with exactly three larger cards: Mehendi, Sangeet, and Shaadi.
5. **Route cue and vehicle wipe** — “See the route” leads into a large frontal vehicle that rises from below, fills the viewport, then crosses the color boundary into the next world. This build replaces the car with a detailed heritage Indian steam train.
6. **Portrait album** — a mauve handmade-paper field carries restrained headings and a tall carved ivory frame. Couple photographs move through the frame as a physical album strip; the frame stays visually dominant.
7. **Information passage** — concise information appears over a botanical chartreuse paper field. A second vehicle bridges this scene into the finale.
8. **Night palace finale** — the ground darkens to midnight blue, the palace rises from below with warm windows and depth haze, and the real countdown rests in the sky above it.

Across the sequence, backgrounds have paper grain, dominant objects cross scene boundaries, typography is sparse and centered, and ambient movement is slower than scroll-linked camera motion. Commercial controls and all reference branding are excluded.

## Build plan

### 1. Establish the visual system and content model
- Create one typed wedding configuration containing names, Jaipur location, timezone, countdown target, invitation copy, photo slots, and exactly three event records.
- Keep unknown dates, times, and venues as explicit “to be confirmed” values in that configuration.
- Define an original Royal Rajasthan palette, editorial serif/sans typography, paper textures, depth shadows, and reduced-motion behavior as reusable semantic tokens.

### 2. Create original illustrated scene assets
- Generate cohesive palace artwork for the dusk opening and illuminated night finale.
- Generate a detailed side-profile vintage Indian steam train with coaches, warm windows, mechanical wheel detail, and transparent background.
- Build reusable original motifs for lanterns, carved arches, floral ornaments, haze, stars, tracks, and Rajasthan landscape depth layers.
- Use graceful illustrated couple silhouettes inside the balcony and album frame until real couple photographs are supplied; no fake photographs or invented personal details.

### 3. Build the connected scene architecture
- Implement focused scene components for Opening, Invitation, Events, Journey, Gallery, Information, Countdown, and Finale.
- Use overlapping scene boundaries, masks, and foreground elements so each visual world physically hands off to the next.
- Keep the experience as one page because its primary interaction is a continuous cinematic scroll narrative.

### 4. Implement cinematic motion
- Add GSAP ScrollTrigger and Lenis with synchronized refresh/update handling.
- Use pinned timelines for the palace camera push, event-card reveal, train journey, album passage, and night-palace arrival.
- Separate scroll-scrubbed motion from low-cost ambient lantern, steam, star, and haze loops.
- Fade lantern density naturally through the journey and stop nonessential movement for reduced-motion users.

### 5. Build the key scenes
- Opening: multi-plane palace, balcony silhouettes, depth-scaled lantern field, masked name reveal.
- Invitation: connected courtyard/aisle perspective, monogram, editable invitation wording.
- Events: three ornate physical cards with editable date/time/venue and accessible route actions that remain inactive while venues are unconfirmed.
- Journey: believable train, rotating wheels, steam, parallax Rajasthan landscape, track and fast foreground passes.
- Gallery: carved heritage frame with an automatically moving image strip; display an elegant illustrated placeholder state until real photos exist.
- Information: flexible configured details without invented RSVP, contacts, addresses, or family names.
- Finale: timezone-correct live countdown to 5 December 2026, completion state, and illuminated Jaipur palace conclusion.

### 6. Mobile-first art direction and quality pass
- Compose specifically for 390–430px WhatsApp viewports, then adapt framing and scene timing for desktop widths.
- Preserve readable type, stable scene proportions, safe crops, and no horizontal overflow.
- Lazy-load heavy media, keep animated properties transform/opacity based, and limit atmospheric DOM count.
- Verify the full scroll, countdown, three-event limit, reduced motion, browser console, and final visual composition on representative mobile and desktop sizes.

## Technical details

- TanStack Start and React remain the project framework; the requested Next.js folder layout is translated to the project’s existing route architecture.
- GSAP, ScrollTrigger, and Lenis will be added for the required motion behavior.
- Original generated imagery will be stored through the project asset flow; decorative linework and moving mechanical parts will use SVG/CSS where it provides cleaner animation.
- The home route will include invitation-specific search and social metadata.
- Future real photographs and music can be inserted through configuration without changing scene animation code; audio will never autoplay.
