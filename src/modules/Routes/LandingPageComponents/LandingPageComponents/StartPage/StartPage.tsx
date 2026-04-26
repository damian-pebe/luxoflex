import { logo, background } from "@/const";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Star, Zap, Award } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { useRef } from "react";

// Stagger container for headline words
const headlineContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.4 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 48, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const stats = [
  { icon: Star,  value: "98%",  label: "Satisfacción" },
  { icon: Award, value: "15+",  label: "Años de exp." },
  { icon: Zap,   value: "999+", label: "Proyectos" },
];

// Headline split: line 1 words, line 2 accented words
const line1 = ["Transformamos", "ideas", "en"];
const line2 = ["etiquetas", "inolvidables."];

export default function StartPage() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLElement>(null);

  // Parallax on background image
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <main ref={containerRef} className="relative h-screen overflow-hidden bg-[#050505]">

      {/* Parallax background image */}
      <motion.img
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full object-cover opacity-25 scale-110"
        src={background}
        alt="Etiquetas premium fabricadas por Luxoflex en Guadalajara"
        loading="eager"
        fetchPriority="high"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-black/90" />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60" />

      {/* Breathing glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-yellow-500 blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.07, 0.12, 0.07] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -top-20 right-0 w-100 h-100 rounded-full bg-amber-600 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.11, 0.06] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-20 -left-20 w-87.5 h-87.5 rounded-full bg-violet-700 blur-[100px] pointer-events-none"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

        {/* Logo — floats gently */}
        <motion.img
          initial={{ opacity: 0, y: -16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-14 md:h-20 mb-8 drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]"
          src={logo}
          alt="Luxoflex"
        />

        {/* Badge — floats up and down */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-poppins font-medium px-4 py-1.5 rounded-full backdrop-blur-sm"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-yellow-400"
            />
            Impresión premium desde 2009
          </motion.span>
        </motion.div>

        {/* Headline — word-by-word stagger with blur */}
        <motion.h1
          variants={headlineContainer}
          initial="hidden"
          animate="show"
          className="font-audiowide font-extralight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.15] max-w-5xl tracking-tight"
        >
          {/* Line 1 */}
          <span className="flex flex-wrap justify-center gap-x-4 mb-1">
            {line1.map((w) => (
              <motion.span key={w} variants={wordVariant}>
                {w}
              </motion.span>
            ))}
          </span>

          {/* Line 2 — gradient accent */}
          <span className="flex flex-wrap justify-center gap-x-4">
            {line2.map((w) => (
              <motion.span
                key={w}
                variants={wordVariant}
                className="font-zilla font-bold italic"
                style={{
                  background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 45%, #F97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {w}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Tagline — static, clean, no typewriter */}
        <motion.p
          {...fadeUp(0.9)}
          className="mt-6 text-lg md:text-xl text-zinc-400 font-poppins font-light"
        >
          Ponemos alma y{" "}
          <motion.span
            className="font-zilla font-bold italic"
            style={{
              background: "linear-gradient(90deg, #F59E0B, #FBBF24, #F97316, #F59E0B)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{ backgroundPosition: ["0% center", "200% center"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            magia
          </motion.span>{" "}
          en cada etiqueta.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/contactus")}
            aria-label="Contáctanos para solicitar cotización de etiquetas"
            className="cursor-pointer group relative flex items-center gap-2.5 bg-yellow-500 hover:bg-yellow-400 text-black font-poppins font-bold px-8 py-4 rounded-xl transition-colors duration-300 text-base shadow-[0_0_30px_rgba(234,179,8,0.35)] hover:shadow-[0_0_50px_rgba(234,179,8,0.55)]"
          >
            <MessageCircle className="h-4 w-4" />
            Contáctanos ahora
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <LiquidButton
              onClick={() => navigate("/pastworks")}
              size="xl"
              className="font-poppins font-medium text-white/90 px-8"
            >
              Ver trabajos
              <ArrowRight className="h-4 w-4" />
            </LiquidButton>
          </motion.div>
        </motion.div>

        {/* Stats bar — staggered chips */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 1.3 } },
          }}
          className="mt-12 flex items-center gap-2"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
              className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5"
            >
              <Icon className="h-3.5 w-3.5 text-yellow-400" />
              <span className="font-poppins font-bold text-white text-sm">{value}</span>
              <span className="font-poppins text-zinc-500 text-xs hidden sm:inline">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#09090B] to-transparent pointer-events-none" />
    </main>
  );
}
