import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Gauge, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import ColorBends from "@/components/ColorBends";

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
          "radial-gradient(circle at 14% 74%, rgba(0,255,209,0.14), transparent 29%), radial-gradient(circle at 84% 22%, rgba(138,92,255,0.24), transparent 33%), linear-gradient(180deg, #080A0F 0%, #09090B 100%)",
      }}
    >
      <div className="absolute inset-0 z-0 opacity-100" aria-hidden="true">
        <ColorBends
          colors={["#FF5C7A", "#8A5CFF", "#00FFD1"]}
          rotation={90}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.45}
          noise={0.15}
          parallax={0.45}
          iterations={1}
          intensity={1.55}
          bandWidth={6}
          transparent
          autoRotate={0}
        />
      </div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_58%_42%,transparent_0%,rgba(8,10,15,0.06)_44%,rgba(9,9,11,0.58)_100%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-linear-to-b from-[#080A0F]/10 via-[#080A0F]/24 to-[#09090B] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-linear-to-r from-black/82 via-black/30 to-black/32 pointer-events-none" />
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
                to="/contacto"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-poppins text-sm font-bold text-black transition-colors duration-200 hover:bg-blue-100"
              >
                Cotizar proyecto
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/proyectos"
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
