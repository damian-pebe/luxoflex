import { background } from "@/const";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Printer, Award, Star, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const stats = [
  { icon: Star,    value: "98%",  label: "Satisfacción" },
  { icon: Award,   value: "15+",  label: "Años de exp." },
  { icon: Zap,     value: "999+", label: "Proyectos" },
  { icon: Printer, value: "3",    label: "Líneas de prod." },
];

const values = [
  {
    title: "Precisión",
    body: "Cada milímetro cuenta. Nuestros procesos garantizan resultados exactos en cada tirada.",
  },
  {
    title: "Innovación",
    body: "Adoptamos las últimas tecnologías de impresión para que tu producto siempre esté un paso adelante.",
  },
  {
    title: "Compromiso",
    body: "Tu marca es nuestra responsabilidad. Nos involucramos desde el diseño hasta la entrega.",
  },
];

export default function HeroLuxoflex() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <div ref={containerRef} className="relative h-screen overflow-hidden bg-[#050505]">
        {/* Parallax bg */}
        <motion.img
          style={{ y: bgY }}
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110"
          src={background}
          alt=""
          loading="eager"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-[#09090B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

        {/* Glow orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.07, 0.13, 0.07] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-500 blur-[140px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full bg-amber-600 blur-[120px] pointer-events-none"
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-20 max-w-6xl mx-auto left-0 right-0">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-poppins font-medium px-4 py-1.5 rounded-full backdrop-blur-sm mb-6"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-yellow-400"
            />
            Impresión premium desde 2009
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 48, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-audiowide font-extralight text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight max-w-3xl"
          >
            Somos{" "}
            <span
              className="font-zilla font-bold italic"
              style={{
                background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #F97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Luxoflex.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 text-lg md:text-xl text-zinc-400 font-poppins font-light max-w-xl leading-relaxed"
          >
            Transformamos ideas en etiquetas que marcan la diferencia.
            Precisión, innovación y compromiso en cada impresión.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 flex gap-3"
          >
            <button
              onClick={() => navigate("/contactus")}
              className="cursor-pointer group flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-poppins font-bold px-6 py-3 rounded-xl transition-colors duration-300 text-sm shadow-[0_0_30px_rgba(234,179,8,0.3)]"
            >
              Trabajar con nosotros
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => navigate("/pastworks")}
              className="cursor-pointer flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 font-poppins font-medium px-6 py-3 rounded-xl transition-all duration-300 text-sm"
            >
              Ver trabajos
            </button>
          </motion.div>
        </div>

        {/* Stats bar pinned at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 px-6"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5"
            >
              <Icon className="h-3.5 w-3.5 text-yellow-400" />
              <span className="font-poppins font-bold text-white text-sm">{value}</span>
              <span className="font-poppins text-zinc-500 text-xs hidden sm:inline">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── QUIÉNES SOMOS ────────────────────────────────────────────── */}
      <section className="bg-[#09090B] py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <motion.p {...fadeUp(0)} className="text-yellow-500 text-xs font-poppins font-semibold tracking-widest uppercase mb-4">
            Nuestra esencia
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <motion.h2 {...fadeUp(0.05)} className="font-audiowide text-4xl md:text-5xl text-white font-extralight leading-tight mb-8">
                Creamos etiquetas para{" "}
                <span
                  className="font-zilla font-bold italic"
                  style={{
                    background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  empresas sobresalientes.
                </span>
              </motion.h2>

              <motion.p {...fadeUp(0.1)} className="text-zinc-400 font-poppins text-base leading-relaxed mb-6">
                En Luxoflex nos dedicamos a transformar ideas en etiquetas que marcan la diferencia.
                Nos especializamos en impresión de alta calidad con un enfoque en innovación, precisión y eficiencia.
              </motion.p>
              <motion.p {...fadeUp(0.15)} className="text-zinc-400 font-poppins text-base leading-relaxed">
                Trabajamos con marcas que buscan sobresalir y sabemos cómo convertir cada detalle en valor visual.
                Nuestro compromiso es claro: entregar resultados que eleven la imagen de tu producto.
              </motion.p>
            </div>

            {/* Right: image card */}
            <motion.div
              {...fadeUp(0.1)}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] group"
            >
              <img
                src={background}
                alt="Equipo Luxoflex"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay glass card */}
              <div
                className="absolute bottom-4 left-4 right-4 rounded-xl p-4"
                style={{
                  background: "rgba(10,10,10,0.6)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p className="text-white font-poppins font-semibold text-sm">Nuestro equipo en planta</p>
                <p className="text-zinc-400 font-poppins text-xs mt-0.5">Guadalajara, México · Desde 2009</p>
              </div>
            </motion.div>
          </div>

          {/* Values row */}
          <div className="grid md:grid-cols-3 gap-4 mt-16">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp(i * 0.08)}
                className="rounded-2xl p-6 border border-white/8 hover:border-yellow-500/30 transition-colors duration-300 group"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="w-8 h-0.5 bg-yellow-500 mb-4 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-white font-poppins font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-zinc-500 font-poppins text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
