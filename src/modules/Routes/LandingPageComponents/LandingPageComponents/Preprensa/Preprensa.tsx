import {
  ArrowRight,
  Clock,
  Shield,
  Award,
  Star,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { grabados } from "@/const";
import { Whatsapp, TelephoneFill } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import React from "react";
import CountUp from "@/components/reactbits/count_up";
import { useInView } from "react-intersection-observer";
import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";

type Stat = {
  value: number;
  value2: string;
  label: string;
  icon: React.ReactElement;
  color: string;
  glowColor: string;
  description: string;
  trend: string;
};

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden"
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${stat.glowColor}, transparent 70%)` }}
      />
      {/* Ambient glow */}
      <div
        className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
        style={{ background: `${stat.glowColor}30` }}
      />

      <div className="relative bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 rounded-2xl p-6 transition-colors duration-300">
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="font-rajdhani text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
              {stat.label}
            </div>
            <div className="flex items-end gap-1">
              <CountUp
                from={0}
                to={stat.value}
                separator=","
                direction="up"
                duration={2}
                className="count-up-text text-4xl font-bold text-white font-poppins"
                startWhen={inView}
              />
              <span
                className="text-3xl font-bold font-poppins pb-0.5"
                style={{ color: stat.glowColor }}
              >
                {stat.value2}
              </span>
            </div>
          </div>
          <div
            className="p-3 rounded-xl"
            style={{ background: `${stat.glowColor}20`, border: `1px solid ${stat.glowColor}30` }}
          >
            {React.cloneElement(stat.icon, {
              size: 20,
              style: { color: stat.glowColor },
              className: "transition-transform duration-700 group-hover:scale-110",
            })}
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-800">
          <div className="flex items-center justify-between">
            <span className="font-poppins text-zinc-500 text-xs">{stat.description}</span>
            {stat.trend === "up" && (
              <div className="flex items-center gap-1 text-emerald-400 text-xs font-poppins font-medium">
                <TrendingUp size={12} />
                +4.3%
              </div>
            )}
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${stat.glowColor}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function Preprensa() {
  const stats: Stat[] = [
    {
      value: 98, value2: "%",
      label: "Satisfacción del cliente",
      icon: <Star />,
      color: "from-yellow-500 to-yellow-700",
      glowColor: "#F59E0B",
      description: "Basado en encuestas a clientes",
      trend: "up",
    },
    {
      value: 24, value2: "h",
      label: "Tiempo de respuesta",
      icon: <Clock />,
      color: "from-blue-500 to-blue-700",
      glowColor: "#3B82F6",
      description: "Servicio disponible 24/7",
      trend: "up",
    },
    {
      value: 15, value2: "+",
      label: "Años de experiencia",
      icon: <Award />,
      color: "from-violet-500 to-violet-700",
      glowColor: "#8B5CF6",
      description: "En todos nuestros servicios",
      trend: "up",
    },
    {
      value: 999, value2: "+",
      label: "Proyectos completados",
      icon: <Shield />,
      color: "from-emerald-500 to-emerald-700",
      glowColor: "#10B981",
      description: "Clientes satisfechos",
      trend: "up",
    },
  ];

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

      <ThreeDotsBlack top={true} />

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

          {/* Right: image + glassmorphism contact card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Image glow */}
            <div className="absolute -inset-3 rounded-3xl bg-violet-500/10 blur-2xl" />
            <img
              src={grabados}
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl border border-zinc-800"
              alt="Preprensa Digital"
              loading="lazy"
            />

            {/* Glassmorphism contact card */}
            <div className="absolute bottom-5 right-5 p-5 rounded-2xl max-w-xs border border-white/10 shadow-2xl"
              style={{ background: "rgba(9,9,11,0.75)", backdropFilter: "blur(20px)" }}
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />

              <p className="relative font-poppins font-semibold text-white text-sm mb-3">
                ¿Necesitas ayuda con tu diseño?
              </p>
              <div className="relative flex items-center gap-3 mb-4">
                <div className="relative h-10 w-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white font-poppins">TP</span>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-zinc-900" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm font-poppins">Tomas Perez</p>
                  <p className="text-zinc-500 text-xs font-poppins">+15 años de experiencia</p>
                </div>
              </div>
              <div className="relative flex items-center gap-2">
                <button
                  onClick={() => window.open("tel:+523334626001", "_blank")}
                  className="cursor-pointer p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors duration-200"
                >
                  <TelephoneFill className="h-3.5 w-3.5 text-zinc-300" />
                </button>
                <button
                  onClick={() => window.open("https://wa.me/523334626001", "_blank")}
                  className="cursor-pointer p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors duration-200"
                >
                  <Whatsapp className="h-3.5 w-3.5 text-emerald-400" />
                </button>
                <button
                  onClick={() => window.open("tel:+523334626001", "_blank")}
                  className="cursor-pointer flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-poppins font-bold text-xs py-2.5 px-4 rounded-xl transition-all duration-200 shadow-[0_0_15px_rgba(234,179,8,0.2)]"
                >
                  Contactar ahora
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </section>

      <ThreeDotsBlack />
    </div>
  );
}
