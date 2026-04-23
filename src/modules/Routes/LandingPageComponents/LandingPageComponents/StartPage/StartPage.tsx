import { logo, background } from "@/const";
import { FlipWords } from "@/components/ui/flip-words";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, Zap, Award } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const stats = [
  { icon: Star, value: "98%", label: "Satisfacción" },
  { icon: Award, value: "15+", label: "Años de exp." },
  { icon: Zap, value: "999+", label: "Proyectos" },
];

export default function StartPage() {
  const words = ["color", "arte", "magia", "diseño", "pasión"];
  const navigate = useNavigate();

  return (
    <div className="relative h-screen overflow-hidden bg-[#050505]">
      {/* Background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        src={background}
        alt=""
        loading="eager"
      />

      {/* Gradient overlay - vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

      {/* Glow orb — gold center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-yellow-500/10 blur-[120px] pointer-events-none" />
      {/* Glow orb — amber top-right */}
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-600/10 blur-[100px] pointer-events-none" />
      {/* Glow orb — purple bottom-left */}
      <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-violet-700/10 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

        {/* Logo */}
        <motion.img {...fadeUp(0)} className="h-14 md:h-20 mb-8" src={logo} alt="Luxoflex" />

        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <span className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-poppins font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Impresión premium desde 2009
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-audiowide font-extralight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-5xl tracking-tight"
        >
          Transformamos ideas en{" "}
          <span className="relative inline-block">
            <span
              className="font-zilla font-bold italic"
              style={{
                background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 40%, #F97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              etiquetas
            </span>
          </span>
          {" "}
          <span
            className="font-zilla font-bold italic"
            style={{
              background: "linear-gradient(135deg, #FBBF24 0%, #F59E0B 60%, #D97706 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            inolvidables.
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-5 text-lg md:text-2xl text-zinc-400 font-poppins font-light"
        >
          Ponemos alma y{" "}
          <span className="text-yellow-400 font-medium">
            <FlipWords words={words} />
          </span>{" "}
          en cada etiqueta.
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            onClick={() => navigate("/contactus")}
            className="cursor-pointer group relative flex items-center gap-2.5 bg-yellow-500 hover:bg-yellow-400 text-black font-poppins font-bold px-8 py-4 rounded-xl transition-all duration-300 text-base shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_50px_rgba(234,179,8,0.5)] hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Contáctanos ahora
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() => navigate("/pastworks")}
            className="cursor-pointer flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-poppins font-medium px-8 py-4 rounded-xl transition-all duration-300 text-base backdrop-blur-sm"
          >
            Ver trabajos
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          {...fadeUp(0.65)}
          className="mt-12 flex items-center gap-1 md:gap-2"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5">
                <Icon className="h-3.5 w-3.5 text-yellow-400" />
                <span className="font-poppins font-bold text-white text-sm">{value}</span>
                <span className="font-poppins text-zinc-500 text-xs hidden sm:inline">{label}</span>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-4 bg-white/10 mx-1" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090B] to-transparent pointer-events-none" />
    </div>
  );
}
