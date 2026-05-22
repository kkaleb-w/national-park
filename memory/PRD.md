# The Living Congaree — Documentary Scroll Site

## Original Problem Statement
> Build me a site for a science project. It is for the Congaree National Park, as you scroll it will go through a timeline like a documentary with large scale images and a description.

## User Choices
- Theme: Geology + Indigenous heritage + Wildlife/ecosystem (comprehensive)
- Audience: High school
- Visual style: Cinematic & immersive
- Interaction: Scroll storytelling only
- Imagery: Unsplash

## Architecture
- **Stack**: React (CRA) + framer-motion + Lenis (smooth scroll). Backend template untouched (no API needed).
- **Single-page scrollytelling**: Hero → 8 sticky-parallax chapter sections → Finale → Footer.
- **Components**: `Hero`, `Chapter` (reused), `Finale`, `TopBar`, `ScrollProgress`, `useSmoothScroll` hook.
- **Data**: `/app/frontend/src/data/chapters.js` (8 chapters).
- **Design**: Cinematic dark earthy palette (#0a0b0a / #d4a373 / #e6e0d4), Cormorant Garamond (serif headings) + Outfit (body), film-grain overlay, parallax backgrounds, glass text panels alternating left/right.

## Implemented (Dec 2025)
- Hero with parallax zoom + fade
- 8 chapters: Born of a River, Cathedral of Giants, People of the Congaree, The Saw and the Swamp, A Forest Defended, A Sanctuary of Wings & Shadow, When the Forest Awakens, A Canopy Worth Keeping
- Sticky parallax backgrounds with framer-motion useScroll/useTransform
- Glass-morphic text panels with alternating alignment
- Top scroll progress bar + reveal-on-scroll TopBar
- Finale with stats (26,276 acres / 1976 / 160 ft+) and footer
- Lenis smooth scrolling, custom selection color, scrollbar styling
- 100% testing_agent_v3 pass (14/14 checks)

## Backlog
- P1: Respect `prefers-reduced-motion` (disable Lenis + reduce parallax)
- P2: Audio narration toggle per chapter
- P2: Mini chapter index / jump-to navigation
- P2: Subtle ambient soundscape (cicadas, river, owls) with mute control
