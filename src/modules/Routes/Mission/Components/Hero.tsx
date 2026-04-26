import { motion } from "framer-motion";
import FloatingLines from "@/components/FloatingLines";

export default function Hero() {
  return (
    <div
      className="relative h-72 md:h-96 overflow-hidden"
      style={{ backgroundColor: "#0a0a12" }}
    >
      {/* FloatingLines background from react-bits */}
      <div className="absolute inset-0">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={8}
          lineDistance={8}
          bendRadius={8}
          bendStrength={-2}
          interactive
          parallax={true}
          animationSpeed={1}
          gradientStart="#3B82F6"
          gradientMid="#6366f1"
          gradientEnd="#4f4f7a"
        />
      </div>

      {/* Bottom fade to page bg */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#09090B] pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

      <div className="absolute inset-0 flex flex-col items-start justify-end px-6 md:px-16 pb-10 max-w-7xl mx-auto left-0 right-0">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-rajdhani uppercase tracking-widest text-yellow-500 text-sm mb-3"
        >
          Luxoflex
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-audiowide font-extralight text-5xl md:text-7xl text-white leading-tight"
        >
          Nuestra{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3B82F6, #60A5FA, #93C5FD)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Misión
          </span>
        </motion.h1>
      </div>
    </div>
  );
}
