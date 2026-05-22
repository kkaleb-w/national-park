import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Chapter({ chapter, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax background image
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.0, 1.05]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.85, 0.55, 0.55, 0.85]
  );

  // Text panel animation
  const textOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.35, 0.7, 0.9],
    [0, 1, 1, 0]
  );
  const textY = useTransform(scrollYProgress, [0.15, 0.5], [60, 0]);

  const isLeft = chapter.align === "left";

  return (
    <section
      ref={ref}
      data-testid={`chapter-${chapter.id}`}
      className="relative h-[140vh] w-full overflow-hidden bg-[#0a0b0a]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{
            y: bgY,
            scale: bgScale,
            backgroundImage: `url(${chapter.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-[-10%] will-change-transform"
          data-testid={`chapter-bg-${chapter.id}`}
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0a]/30 via-transparent to-[#0a0b0a]/60" />

        {/* Side rail */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-3 ${
            isLeft ? "right-10" : "left-10"
          }`}
          aria-hidden
        >
          <div className="h-16 w-px bg-[#d4a373]/40" />
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#d4a373] [writing-mode:vertical-rl]">
            {chapter.marker}
          </span>
          <div className="h-16 w-px bg-[#d4a373]/40" />
        </div>

        <div
          className={`relative z-10 flex h-full w-full items-center px-6 sm:px-12 lg:px-24 ${
            isLeft ? "justify-start" : "justify-end"
          }`}
        >
          <motion.article
            style={{ opacity: textOpacity, y: textY }}
            className="max-w-xl backdrop-blur-xl bg-[#0a0b0a]/55 border border-white/10 p-8 md:p-12 rounded-lg shadow-2xl"
            data-testid={`chapter-panel-${chapter.id}`}
          >
            <span
              className="block font-sans text-xs uppercase tracking-[0.35em] text-[#d4a373] font-semibold mb-3"
              data-testid={`chapter-marker-${chapter.id}`}
            >
              {chapter.marker} · {chapter.era}
            </span>
            <h2
              className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.02] text-white mb-6"
              data-testid={`chapter-title-${chapter.id}`}
            >
              {chapter.title}
            </h2>
            <div className="h-px w-16 bg-[#d4a373] mb-6" />
            <p
              className="font-sans text-base sm:text-lg leading-relaxed text-[#c8c2b6] font-light"
              data-testid={`chapter-body-${chapter.id}`}
            >
              {chapter.body}
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
