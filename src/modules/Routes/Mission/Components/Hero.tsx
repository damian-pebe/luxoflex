import { motion } from "framer-motion";
import LaserFlow from "@/components/LaserFlow";

export default function Hero() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0a0f1a", minHeight: "85vh" }}
    >
      <div className="absolute inset-0">
        <LaserFlow
          horizontalBeamOffset={-0.1}
          verticalBeamOffset={0.05}
          color="#3B82F6"
          horizontalSizing={0.5}
          verticalSizing={2}
          wispDensity={1}
          wispSpeed={15}
          wispIntensity={5}
          flowSpeed={0.35}
          flowStrength={0.25}
          fogIntensity={0.45}
          fogScale={0.3}
          fogFallSpeed={0.6}
          decay={1.1}
          falloffStart={1.2}
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#09090B] pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />

      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-20 pb-16 max-w-7xl mx-auto left-0 right-0">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-rajdhani uppercase tracking-[0.3em] text-blue-400 text-xs mb-5"
        >
          Luxoflex — Nuestra razón de ser
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-audiowide font-extralight leading-none mb-6"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
        >
          <span className="text-white block">Nuestra</span>
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-10 bg-blue-500/60" />
          <p className="font-poppins text-zinc-400 text-sm">
            El socio confiable detrás de cada etiqueta premium
          </p>
        </motion.div>
      </div>
    </div>
  );
}
