import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";
import { background } from "@/const";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Eye, CheckCircle2 } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { GlassChip } from "@/components/ui/glass-chip";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const highlights = [
  "Tecnología de impresión de última generación",
  "Más de 15 años de precisión y calidad",
  "Entrega rápida con atención personalizada",
];

export default function Banner() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#09090B] overflow-hidden py-8">
      {/* Blue glow orbs — brand consistent */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-125 h-125 rounded-full bg-blue-800/12 blur-[130px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-87.5 h-87.5 rounded-full bg-blue-600/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-62.5 h-62.5 rounded-full bg-amber-500/6 blur-[100px] pointer-events-none" />

      <ThreeDotsBlack top={true} />

      <section className="relative py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image col */}
          <motion.div {...fadeLeft(0)} className="relative order-2 lg:order-1">
            {/* Blue outer glow */}
            <div className="absolute -inset-5 rounded-3xl bg-blue-700/15 blur-2xl" />

            {/* Gradient border — blue to transparent */}
            <div
              className="absolute inset-[-1.5px] rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.6) 0%, rgba(30,64,175,0.3) 50%, rgba(99,102,241,0.15) 100%)",
              }}
            />

            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={background}
                alt="Etiquetas personalizadas Luxoflex"
                className="w-full h-72 md:h-115 object-cover"
                loading="lazy"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              {/* Subtle blue color grade */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-transparent to-transparent mix-blend-multiply" />

              {/* Floating chip */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 px-4 py-2.5 rounded-full"
                style={{
                  background: "rgba(37,99,235,0.55)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(96,165,250,0.35)",
                }}>
                <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
                <span className="font-poppins text-white text-xs font-medium">Clientes Destacados</span>
              </div>
            </div>
          </motion.div>

          {/* Content col */}
          <div className="order-1 lg:order-2 space-y-7">
            {/* Label */}
            <motion.p
              {...fadeRight(0)}
              className="font-rajdhani uppercase tracking-widest text-blue-400 text-sm"
            >
              Portafolio de trabajos
            </motion.p>

            {/* Headline */}
            <motion.h2
              {...fadeRight(0.1)}
              className="font-audiowide font-extralight text-4xl md:text-5xl lg:text-[3.25rem] text-white leading-[1.1]"
            >
              Etiquetas{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #93C5FD 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Premium
              </span>
              <br />
              <span className="text-zinc-500 font-extralight">Personalizadas</span>
            </motion.h2>

            {/* Body */}
            <motion.p
              {...fadeRight(0.2)}
              className="font-poppins text-zinc-400 text-base md:text-lg leading-relaxed max-w-md"
            >
              Cada etiqueta que creamos es el resultado de{" "}
              <span className="text-white font-medium">15 años de precisión</span>,
              tecnología avanzada y un compromiso absoluto con la calidad.
            </motion.p>

            {/* Highlight list */}
            <motion.ul {...fadeRight(0.28)} className="space-y-2.5">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                  <span className="font-poppins text-zinc-400 text-sm">{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* Stats row */}
            <motion.div
              {...fadeRight(0.35)}
              className="flex items-center gap-6 py-5 border-y border-zinc-800/70"
            >
              {[
                { value: "999+", label: "Proyectos", accent: "blue" },
                { value: "98%", label: "Satisfacción", accent: "blue" },
                { value: "24h", label: "Respuesta", accent: "amber" },
              ].map(({ value, label, accent }, i) => (
                <div key={i} className="text-center">
                  <div
                    className="font-poppins font-bold text-xl"
                    style={{
                      background: accent === "blue"
                        ? "linear-gradient(135deg, #3B82F6, #60A5FA)"
                        : "linear-gradient(135deg, #D97706, #FBBF24)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </div>
                  <div className="font-poppins text-zinc-600 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fadeRight(0.42)}
              className="flex flex-col sm:flex-row gap-3 pt-1"
            >
              <button
                onClick={() => navigate("/pastworks")}
                className="cursor-pointer group flex items-center justify-center gap-2.5 text-white font-poppins font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 text-sm hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]"
                style={{
                  background: "linear-gradient(135deg, #1E40AF 0%, #2563EB 60%, #3B82F6 100%)",
                }}
              >
                <Eye className="h-4 w-4" />
                Ver Portafolio
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <LiquidButton
                onClick={() => navigate("/contactus")}
                size="lg"
                className="font-poppins font-medium text-white/90 px-7"
              >
                <MessageCircle className="h-4 w-4" />
                Solicitar diseño
              </LiquidButton>
            </motion.div>
          </div>
        </div>
      </section>

      <ThreeDotsBlack />
    </div>
  );
}
