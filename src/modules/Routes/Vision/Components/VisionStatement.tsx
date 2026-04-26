import { motion } from "framer-motion";
import { Star, Award, Zap } from "lucide-react";

const BANNER_IMG =
  "https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&w=1400";

const stats = [
  { icon: Award, value: "15+",  label: "Años de experiencia" },
  { icon: Zap,   value: "999+", label: "Proyectos entregados" },
  { icon: Star,  value: "98%",  label: "Clientes satisfechos" },
];

export default function VisionStatement() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "400px" }}>
      {/* Background image */}
      <img
        src={BANNER_IMG}
        alt="Maquinaria de impresión industrial Luxoflex"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/80" />
      {/* Amber tint */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.12) 0%, transparent 60%)" }} />

      {/* Animated glow orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-yellow-500 blur-[130px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-rajdhani uppercase tracking-widest text-yellow-500 text-sm mb-6"
        >
          Nuestra declaración
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-audiowide font-extralight text-2xl md:text-4xl text-white leading-snug mb-4"
        >
          "Ser la empresa{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #F59E0B, #FBBF24, #F97316)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            referente
          </span>{" "}
          en fabricación de etiquetas premium en México."
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-poppins text-zinc-400 text-base max-w-xl leading-relaxed mb-12"
        >
          Desde 2009 transformamos ideas en etiquetas que construyen marcas.
          Calidad, precisión y pasión en cada impresión.
        </motion.p>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-3 flex-wrap justify-center"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl px-5 py-3"
            >
              <Icon className="h-4 w-4 text-yellow-400 shrink-0" />
              <span className="font-poppins font-bold text-white text-sm">{value}</span>
              <span className="font-poppins text-zinc-500 text-xs hidden sm:inline">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#09090B] to-transparent pointer-events-none" />
    </section>
  );
}
