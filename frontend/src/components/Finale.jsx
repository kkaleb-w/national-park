import { motion } from "framer-motion";
import { Leaf, MapPin, Calendar } from "lucide-react";

export default function Finale() {
  return (
    <section
      data-testid="finale-section"
      className="relative w-full bg-[#0a0b0a] text-[#e6e0d4] overflow-hidden"
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e6e0d4 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-12 py-32 sm:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <Leaf
            className="h-6 w-6 text-[#d4a373] mb-8"
            strokeWidth={1.2}
            data-testid="finale-icon"
          />
          <span className="block font-sans text-xs uppercase tracking-[0.4em] text-[#d4a373] mb-6">
            Epilogue
          </span>
          <h2
            className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-7xl font-light tracking-tighter leading-[0.98] text-white max-w-4xl"
            data-testid="finale-title"
          >
            The river writes the
            <br />
            <em className="italic text-[#d4a373]">next chapter.</em>
          </h2>
          <p
            className="mt-10 max-w-2xl font-sans text-base sm:text-lg leading-relaxed text-[#c8c2b6]"
            data-testid="finale-body"
          >
            Congaree National Park is one of the last great old‑growth bottomland
            hardwood forests in North America. It survives because people fought
            for it, and because each generation has chosen to keep fighting.
            What we have walked through is a record. What we do next becomes the
            story.
          </p>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden"
          data-testid="finale-stats"
        >
          <Stat label="Acres Protected" value="26,276" />
          <Stat label="Year Established" value="1976" />
          <Stat label="Canopy Height" value="160 ft+" />
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 text-[#9ca395] font-sans text-sm"
          data-testid="finale-meta"
        >
          <div className="flex items-center gap-3">
            <Calendar className="h-4 w-4 text-[#d4a373]" strokeWidth={1.5} />
            <span>Designated National Park, 2003</span>
          </div>
        </motion.div>
      </div>

      <footer
        className="relative border-t border-white/5 py-10 px-6 sm:px-12 max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs uppercase tracking-[0.25em] text-[#6c7165] font-sans"
        data-testid="footer"
      >
        <span>A Science Project · Documentary Edition</span>
      </footer>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-[#0a0b0a] p-8 sm:p-10">
      <div className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-light text-white tracking-tight">
        {value}
      </div>
      <div className="mt-3 font-sans text-[10px] uppercase tracking-[0.35em] text-[#9ca395]">
        {label}
      </div>
    </div>
  );
}
