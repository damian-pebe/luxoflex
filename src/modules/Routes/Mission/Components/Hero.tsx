import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Gauge, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import LaserFlow from "@/components/LaserFlow";

const proofPoints = [
  { icon: Layers3, label: "Etiquetas a medida", value: "Diseño + producción" },
  { icon: Gauge, label: "Respuesta ágil", value: "Cotización express" },
  { icon: CheckCircle2, label: "Calidad controlada", value: "Lote por lote" },
];

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#080A0F]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 12% 76%, rgba(245,158,11,0.14), transparent 27%), radial-gradient(circle at 82% 24%, rgba(59,130,246,0.18), transparent 30%), linear-gradient(180deg, #080A0F 0%, #09090B 100%)",
      }}
    >
      <div
        className="absolute inset-x-[-14vw] -top-16 h-[330px] md:-top-20 md:h-[470px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="luxoflex-laserflow-fallback luxoflex-laserflow-fallback--blue" />
        <LaserFlow
          className="relative z-10"
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

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#080A0F]/20 to-[#09090B] pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-transparent to-black/70 pointer-events-none" />
      <div className="absolute inset-x-6 md:inset-x-16 top-0 h-px bg-linear-to-r from-transparent via-blue-400/50 to-transparent" />

      <div className="relative z-10 flex min-h-[520px] md:min-h-[620px] flex-col justify-end px-6 md:px-16 pb-14 md:pb-20 pt-36 max-w-7xl mx-auto">
        <motion.p
          initial={{ x: -8 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
          className="font-rajdhani uppercase tracking-[0.32em] text-blue-300 text-xs mb-4"
        >
          Luxoflex — Nuestra razón de ser
        </motion.p>

        <motion.h1
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="font-audiowide font-extralight text-white leading-[0.95]"
          style={{ fontSize: "clamp(3.25rem, 8vw, 7.5rem)" }}
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

        <motion.div
          initial={{ y: 8 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.24 }}
          className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.62fr)] lg:items-end"
        >
          <div>
            <p className="max-w-2xl font-poppins text-base md:text-lg leading-relaxed text-zinc-300">
              Diseñar, imprimir y entregar etiquetas autoadheribles que eleven la
              presentación de cada marca, con precisión técnica, atención cercana
              y producción confiable desde la primera prueba hasta el lote final.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/contactus"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-poppins text-sm font-bold text-black transition-colors duration-200 hover:bg-blue-100"
              >
                Cotizar proyecto
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/pastworks"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-poppins text-sm font-semibold text-white backdrop-blur transition-colors duration-200 hover:border-blue-300/60 hover:bg-blue-400/10"
              >
                Ver trabajos
              </Link>
            </div>
          </div>

          <div className="grid gap-0 border-y border-white/10 bg-black/10 backdrop-blur-sm sm:grid-cols-3 lg:grid-cols-1">
            {proofPoints.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 border-white/10 px-4 py-4 sm:border-r sm:last:border-r-0 lg:border-b lg:border-r-0 lg:last:border-b-0"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-300/30 bg-blue-400/10">
                  <Icon className="h-5 w-5 text-blue-300" />
                </span>
                <span>
                  <span className="block font-rajdhani text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                    {label}
                  </span>
                  <span className="block font-poppins text-sm font-semibold text-white">
                    {value}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
