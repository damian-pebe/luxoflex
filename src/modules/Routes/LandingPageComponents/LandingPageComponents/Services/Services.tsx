import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, X, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { flexo_img, manga_img, preprensa_img } from "@/const";
import { useState } from "react";
import { Whatsapp } from "react-bootstrap-icons";

const services = [
  {
    number: "01",
    img: flexo_img,
    title: "Etiquetas Autoadheribles de Flexografía",
    shortTitle: "Etiquetas Flexográficas",
    description:
      "Alta definición, colores vibrantes y adhesión duradera para cualquier superficie. Ideal para bebidas, alimentos, cosméticos y más.",
    tag: "Más popular",
    accent: "#F59E0B",
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
    features: [
      "Resolución hasta 2400 dpi",
      "Tintas UV y a base de agua",
      "Adhesivos permanentes y removibles",
      "Resistencia a humedad y temperatura",
      "Formas y tamaños personalizados",
      "Certificación de materiales alimentarios",
    ],
  },
  {
    number: "02",
    img: manga_img,
    title: "Mangas para Tequilas y Vinos",
    shortTitle: "Mangas Termocontraíbles",
    description:
      "Envolventes termocontraíbles que elevan la presentación de tu producto al siguiente nivel. Cobertura total del envase con impresión 360°.",
    tag: "Premium",
    accent: "#8B5CF6",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    features: [
      "Impresión 360° sin costuras",
      "Material PVC o PETG premium",
      "Contracción precisa por calor",
      "Colores Pantone exactos",
      "Diseño adaptable al envase",
      "Alta resistencia a humedad",
    ],
  },
  {
    number: "03",
    img: preprensa_img,
    title: "Armado de Preprensa Profesional",
    shortTitle: "Preprensa Digital",
    description:
      "Preparación técnica impecable para garantizar que cada impresión sea perfecta. Desde el archivo hasta la plancha, sin errores.",
    tag: "Técnico",
    accent: "#3B82F6",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    features: [
      "Separación de colores CMYK",
      "Pruebas digitales calibradas",
      "Preflight y corrección de archivos",
      "Gestión de perfiles ICC",
      "Trapping y sangrado profesional",
      "Validación antes de producción",
    ],
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);
  const navigate = useNavigate();
  const active = open !== null ? services[open] : null;

  return (
    <div className="relative bg-[#09090B] overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-yellow-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />

      <section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-rajdhani uppercase tracking-widest text-yellow-500 text-sm mb-3">
              Lo que hacemos
            </p>
            <h2 className="font-audiowide font-extralight text-4xl md:text-6xl text-white leading-tight">
              Nuestros{" "}
              <span style={{
                background: "linear-gradient(135deg, #F59E0B, #FBBF24, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Servicios
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <Link to="/luxoflex" className="group relative inline-flex items-center gap-2.5 cursor-pointer">
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                style={{ background: "linear-gradient(135deg, #F59E0B30, #F9731630)" }} />
              <span className="relative inline-flex items-center gap-2.5 font-poppins font-semibold text-sm px-5 py-3 rounded-xl border transition-all duration-300"
                style={{
                  background: "rgba(245,158,11,0.07)",
                  borderColor: "rgba(245,158,11,0.22)",
                  color: "#FBBF24",
                }}>
                Conoce nuestra historia
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-full"
            >
              <button
                onClick={() => setOpen(i)}
                className="cursor-pointer group relative w-full h-full text-left rounded-2xl overflow-hidden focus:outline-none"
              >
                {/* Hover glow border */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${svc.accent}70, transparent 60%)` }}
                />
                {/* Ambient glow */}
                <div
                  className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 blur-xl -z-10"
                  style={{ background: `${svc.accent}18` }}
                />

                <div className="relative h-full bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 rounded-2xl overflow-hidden transition-colors duration-300 flex flex-col">
                  {/* Number */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-poppins font-bold text-xs text-zinc-600 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-md px-2 py-1">
                      {svc.number}
                    </span>
                  </div>

                  {/* Tag */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className="font-poppins font-medium text-xs rounded-full px-3 py-1"
                      style={{
                        background: `${svc.accent}18`,
                        color: svc.accent,
                        border: `1px solid ${svc.accent}35`,
                      }}
                    >
                      {svc.tag}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden h-56">
                    <div className={`absolute inset-0 bg-linear-to-b ${svc.gradient} z-10`} />
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={svc.img}
                      alt={svc.title}
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-rajdhani uppercase font-bold text-white text-lg leading-snug mb-2 group-hover:text-yellow-100 transition-colors duration-200">
                      {svc.title}
                    </h3>
                    <p className="font-poppins text-zinc-500 text-sm leading-relaxed mb-5 flex-1">
                      {svc.description}
                    </p>
                    <div
                      className="inline-flex items-center gap-2 text-sm font-poppins font-semibold transition-all duration-200 group-hover:gap-3"
                      style={{ color: svc.accent }}
                    >
                      Ver detalles
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${svc.accent}, transparent)` }}
                  />
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col md:flex-row items-center gap-6 border-t border-zinc-800/60 pt-10"
        >
          <p className="font-poppins text-zinc-600 text-sm text-center md:text-left max-w-xl">
            Diseños por profesionales con más de{" "}
            <span className="text-zinc-300 font-medium">15 años de experiencia</span>{" "}
            — calidad, precisión e innovación en cada etiqueta.
          </p>
          <div className="md:ml-auto flex items-center gap-4 shrink-0">
            {[["98%", "satisfacción"], ["15+", "años"], ["999+", "proyectos"]].map(([v, l], i) => (
              <div key={i} className="text-center">
                <div className="font-poppins font-bold text-white text-lg">{v}</div>
                <div className="font-poppins text-zinc-600 text-xs">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sidebar drawer */}
      <AnimatePresence>
        {active && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(null)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Sidebar panel */}
            <motion.aside
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md flex flex-col overflow-hidden"
              style={{
                background: "rgba(9,9,11,0.92)",
                backdropFilter: "blur(32px) saturate(180%)",
                borderLeft: `1px solid ${active.accent}25`,
                boxShadow: `-8px 0 60px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.04)`,
              }}
            >
              {/* Accent top bar */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${active.accent}80, transparent)` }}
              />

              {/* Image hero */}
              <div className="relative h-44 shrink-0 overflow-hidden">
                <div
                  className="absolute inset-0 z-10"
                  style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(9,9,11,0.95) 100%)" }}
                />
                <div
                  className="absolute inset-0 z-10 opacity-30"
                  style={{ background: `linear-gradient(135deg, ${active.accent}50, transparent)` }}
                />
                <img src={active.img} alt={active.title} className="w-full h-full object-cover" />

                {/* Close button */}
                <button
                  onClick={() => setOpen(null)}
                  className="cursor-pointer absolute top-4 right-4 z-20 w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-zinc-400 hover:text-white transition-colors duration-200"
                  style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Tag */}
                <div className="absolute bottom-4 left-6 z-20">
                  <span
                    className="font-poppins font-semibold text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: `${active.accent}25`,
                      color: active.accent,
                      border: `1px solid ${active.accent}40`,
                    }}
                  >
                    {active.tag}
                  </span>
                </div>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
                {/* Title */}
                <div>
                  <p
                    className="font-rajdhani text-[10px] uppercase tracking-widest mb-1 font-semibold"
                    style={{ color: `${active.accent}80` }}
                  >
                    Servicio {active.number}
                  </p>
                  <h3 className="font-audiowide font-extralight text-white text-lg leading-snug">
                    {active.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-poppins text-zinc-400 text-sm leading-relaxed">
                  {active.description}
                </p>

                {/* Divider */}
                <div
                  className="h-px"
                  style={{ background: `linear-gradient(90deg, ${active.accent}25, transparent)` }}
                />

                {/* Features */}
                <div>
                  <p className="font-rajdhani text-[10px] uppercase tracking-widest text-zinc-600 mb-3">
                    Características
                  </p>
                  <div className="space-y-2.5">
                    {active.features.map((f, i) => (
                      <motion.div
                        key={f}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.28, delay: 0.08 + i * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            background: active.accent,
                            boxShadow: `0 0 6px ${active.accent}`,
                          }}
                        />
                        <span className="font-poppins text-zinc-300 text-sm">{f}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sticky CTA footer */}
              <div
                className="shrink-0 px-6 pt-5 pb-7 border-t border-white/6 flex flex-col gap-4"
                style={{ background: "rgba(0,0,0,0.3)" }}
              >
                {/* Primary CTA — springs in with glow pulse */}
                <motion.button
                  onClick={() => { setOpen(null); navigate("/contactus"); }}
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer w-full flex items-center justify-center gap-2 font-poppins font-bold text-sm py-4 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${active.accent}, ${active.accent}bb)`,
                    color: "#000",
                    boxShadow: `0 4px 24px ${active.accent}45, 0 0 0 1px ${active.accent}30`,
                  }}
                >
                  Solicitar cotización
                  <ArrowUpRight className="h-4 w-4" />
                </motion.button>

                {/* Secondary CTAs */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => window.open("https://wa.me/523334626001", "_blank")}
                    className="cursor-pointer flex items-center justify-center gap-2 font-poppins font-medium text-sm py-3 rounded-xl border border-white/8 text-zinc-300 hover:text-white hover:border-white/20 transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <Whatsapp className="h-4 w-4 text-emerald-400" />
                    WhatsApp
                  </button>
                  <button
                    onClick={() => window.open("mailto:luxoflex1ventas@gmail.com", "_blank")}
                    className="cursor-pointer flex items-center justify-center gap-2 font-poppins font-medium text-sm py-3 rounded-xl border border-white/8 text-zinc-300 hover:text-white hover:border-white/20 transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <Mail className="h-4 w-4" />
                    Correo
                  </button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
