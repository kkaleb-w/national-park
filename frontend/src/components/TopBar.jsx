import { motion, useScroll, useTransform } from "framer-motion";
import { chapters } from "@/data/chapters";

export default function TopBar() {
  const { scrollYProgress } = useScroll();
  // After hero (~10% of page), show the bar
  const opacity = useTransform(scrollYProgress, [0.04, 0.08], [0, 1]);
  const y = useTransform(scrollYProgress, [0.04, 0.08], [-20, 0]);

  return (
    <motion.header
      style={{ opacity, y }}
      data-testid="top-bar"
      className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-10 py-5 flex items-center justify-between backdrop-blur-md bg-[#0a0b0a]/40 border-b border-white/5"
    >
      <div className="flex items-center gap-3" data-testid="brand">
        <div className="h-2 w-2 rounded-full bg-[#d4a373]" />
        <span className="font-['Cormorant_Garamond'] text-lg sm:text-xl tracking-tight text-white">
          Congaree <em className="italic text-[#d4a373]">·</em> A Timeline
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#9ca395]">
        <span>{chapters.length} Chapters</span>
        <span className="text-white/20">/</span>
      </nav>
    </motion.header>
  );
}
