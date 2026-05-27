import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroImage } from "@/data/chapters";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      data-testid="hero-section"
      className="relative h-screen w-full overflow-hidden bg-[#0a0b0a]"
    >
      <motion.div
        style={{
          scale,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 will-change-transform"
        data-testid="hero-background"
      />
      {/* Vignette + gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#0a0b0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.7)_100%)]" />

      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 text-xs uppercase tracking-[0.5em] text-[#d4a373] font-sans"
          data-testid="hero-eyebrow"
        >
          A Scrollable Documentary
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl lg:text-8xl font-light tracking-tighter leading-[0.95] text-white max-w-5xl"
          data-testid="hero-title"
        >
          The Living
          <br />
          <em className="italic text-[#e6e0d4]">Congaree</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-[#c8c2b6]"
          data-testid="hero-subtitle"
        >
          A timeline of America&apos;s tallest deciduous forest, from glacial floods
          and ancient peoples to a national park born of citizen courage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          data-testid="hero-scroll-cue"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#9ca395] font-sans">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-[#d4a373]" strokeWidth={1.2} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
