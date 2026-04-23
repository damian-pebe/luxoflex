import {
  ArrowRight,
  Shield,
  Award,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Whatsapp } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import React from "react";

export default function Preprensa() {
  const benefits = [
    "Optimización de archivos y resolución perfecta",
    "Ajuste profesional de color para resultados vibrantes",
    "Control de calidad exhaustivo en cada etapa",
    "Pruebas digitales precisas antes de producción",
  ];

  return (
    <div className="relative bg-[#09090B] py-8 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 rounded-full bg-yellow-500/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-blue-600/6 blur-[80px] pointer-events-none" />


      <section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="font-rajdhani uppercase tracking-widest text-yellow-500 text-sm mb-4">
            Tecnología de impresión
          </p>
          <h2 className="font-audiowide font-extralight text-4xl md:text-6xl text-white leading-tight">
            Preprensa{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8B5CF6, #A78BFA, #C4B5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital
            </span>
          </h2>
          <p className="mt-5 font-poppins text-zinc-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Llevamos tu visión al siguiente nivel. Cada archivo optimizado,
            cada color ajustado — antes de que llegue a producción.
          </p>
        </motion.div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="text-base md:text-lg font-poppins font-light text-zinc-400 leading-relaxed">
              En{" "}
              <span className="font-semibold text-white">LUXOFLEX</span>,
              nuestra preprensa digital garantiza que cada proyecto de impresión
              alcance su{" "}
              <span className="text-yellow-400 font-medium">máximo potencial</span>.
              Tecnología avanzada para optimizar archivos, ajustar colores y
              asegurar que cada detalle esté perfectamente preparado.
            </p>

            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                  className="group flex items-center gap-3 font-poppins text-zinc-400 text-base cursor-default hover:text-zinc-200 transition-colors duration-200"
                >
                  <div className="w-5 h-5 shrink-0 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors duration-200">
                    <CheckCircle2 className="h-3 w-3 text-yellow-500" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => window.open("mailto:ventasluxoflex@gmail.com", "_blank")}
                className="cursor-pointer flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-poppins font-bold px-6 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-[0_0_20px_rgba(234,179,8,0.25)] hover:shadow-[0_0_35px_rgba(234,179,8,0.4)] hover:-translate-y-0.5"
              >
                Solicitar Cotización
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => window.open("https://wa.me/523334626001", "_blank")}
                className="cursor-pointer flex items-center justify-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400 font-poppins font-medium px-6 py-3.5 rounded-xl transition-all duration-300 text-sm hover:-translate-y-0.5"
              >
                <Whatsapp className="h-4 w-4" />
                WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Right: image + subtle process badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Violet glow behind image */}
            <div className="absolute -inset-3 rounded-3xl bg-violet-500/10 blur-2xl" />

            {/* Pantone / color proofing image — represents preprensa visually */}
            <img
              src="https://images.pexels.com/photos/9421350/pexels-photo-9421350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="relative w-full h-105 object-cover rounded-2xl shadow-2xl border border-white/8"
              alt="Guías de color Pantone para preprensa digital"
              loading="lazy"
            />

            {/* Subtle color-process badge — top-left, non-competing */}
            <div
              className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10"
              style={{ background: "rgba(9,9,11,0.72)", backdropFilter: "blur(16px)" }}
            >
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shrink-0" />
              <span className="font-poppins text-xs font-medium text-zinc-300">
                Gestión de color profesional
              </span>
            </div>

            {/* Process steps — bottom overlay */}
            <div
              className="absolute bottom-0 inset-x-0 rounded-b-2xl px-5 py-4 flex items-center gap-4 border-t border-white/8"
              style={{ background: "linear-gradient(to top, rgba(9,9,11,0.9) 0%, rgba(9,9,11,0.5) 100%)", backdropFilter: "blur(8px)" }}
            >
              {["Digitalización", "Separación CMYK", "Prueba de color", "Preflight"].map((step, i) => (
                <div key={i} className="flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400/70" />
                  <span className="font-poppins text-[11px] text-zinc-400">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process steps — bento editorial */}
        <div className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              num: "01",
              title: "Recepción",
              desc: "Analizamos tus archivos y revisamos resolución, perfiles de color y formato antes de cualquier proceso.",
              icon: <CheckCircle2 className="h-5 w-5" />,
              accent: "#8B5CF6",
            },
            {
              num: "02",
              title: "Separación CMYK",
              desc: "Convertimos y optimizamos cada canal de color para garantizar fidelidad exacta en la impresión final.",
              icon: <Star className="h-5 w-5" />,
              accent: "#3B82F6",
            },
            {
              num: "03",
              title: "Prueba de color",
              desc: "Generamos una prueba digital calibrada para validar colores y composición antes de ir a prensa.",
              icon: <Award className="h-5 w-5" />,
              accent: "#EC4899",
            },
            {
              num: "04",
              title: "Preflight",
              desc: "Verificación final: trapping, marcas de corte, sangrado y resolución — cero errores en producción.",
              icon: <Shield className="h-5 w-5" />,
              accent: "#10B981",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative rounded-2xl overflow-hidden cursor-default"
            >
              {/* Gradient border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-70 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${step.accent}50, transparent 60%)` }}
              />
              {/* Glow on hover */}
              <div
                className="absolute -inset-4 opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-2xl pointer-events-none"
                style={{ background: step.accent }}
              />

              <div
                className="relative h-full rounded-2xl p-5 border border-white/6 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Giant watermark number */}
                <span
                  className="absolute -bottom-3 -right-1 font-poppins font-black text-8xl leading-none select-none pointer-events-none transition-opacity duration-500"
                  style={{ color: `${step.accent}12`, opacity: 1 }}
                >
                  {step.num}
                </span>
                <span
                  className="absolute -bottom-3 -right-1 font-poppins font-black text-8xl leading-none select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ color: `${step.accent}25` }}
                >
                  {step.num}
                </span>

                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${step.accent}30, ${step.accent}10)`,
                    border: `1px solid ${step.accent}35`,
                    color: step.accent,
                  }}
                >
                  {step.icon}
                </div>

                {/* Step label */}
                <p className="font-rajdhani text-[10px] uppercase tracking-widest mb-1" style={{ color: `${step.accent}99` }}>
                  Paso {step.num}
                </p>

                {/* Title */}
                <h3 className="font-poppins font-semibold text-white text-base mb-2 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-poppins text-zinc-500 text-xs leading-relaxed relative z-10">
                  {step.desc}
                </p>

                {/* Top accent line */}
                <div
                  className="absolute top-0 inset-x-0 h-px opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </section>

    </div>
  );
}
