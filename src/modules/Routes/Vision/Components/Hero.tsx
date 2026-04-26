import { motion } from "framer-motion";
import LaserFlow from "@/components/LaserFlow";

export default function Hero() {
  return (
    <div
      className="relative overflow-hidden h-72 md:h-96"
      style={{ backgroundColor: "#120F17" }}
    >
      <div className="absolute inset-0">
        <LaserFlow
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0.0}
          color="#F59E0B"
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
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-10 max-w-7xl mx-auto left-0 right-0">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="font-rajdhani uppercase tracking-[0.3em] text-yellow-500 text-xs mb-3"
        >
          Luxoflex — Quiénes somos
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-audiowide font-extralight text-5xl md:text-7xl text-white leading-tight"
        >
          Nuestra{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #F59E0B, #FBBF24, #F97316)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Visión
          </span>
        </motion.h1>
      </div>
    </div>
  );
}
