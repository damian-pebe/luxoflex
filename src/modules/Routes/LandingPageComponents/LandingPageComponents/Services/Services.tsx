import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { flexo_img, manga_img, preprensa_img } from "@/const";

const services = [
  {
    number: "01",
    href: "/flexografia",
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
    href: "/mangas-termocontraibles",
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
    href: "/preprensa",
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

const serviceLinks = [
  { label: "Etiquetas personalizadas", href: "/etiquetas-personalizadas" },
  { label: "Flexografía", href: "/flexografia" },
  { label: "Etiquetas autoadheribles", href: "/etiquetas-autoadheribles" },
  { label: "Mangas termocontraíbles", href: "/mangas-termocontraibles" },
  { label: "Preprensa", href: "/preprensa" },
];

export default function Services() {
  return (
    <div className="relative bg-[#09090B] overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-yellow-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />

      <section
        aria-labelledby="services-heading"
        className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto"
      >
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
            <h2
              id="services-heading"
              className="font-audiowide font-extralight text-4xl md:text-6xl text-white leading-tight"
            >
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
            <Link to="/nosotros" className="group relative inline-flex items-center gap-2.5 cursor-pointer">
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

        {/* Cards grid — Dark Grid pattern from 21st.dev: corner squares reveal on hover */}
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
              <Link
                to={svc.href}
                aria-label={`Ver detalles de ${svc.title}`}
                className="cursor-pointer group relative w-full h-full text-left rounded-2xl overflow-visible focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
              >
                {/* Corner squares — 21st.dev Dark Grid pattern */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="absolute -left-1.5 -top-1.5 h-3 w-3" style={{ background: svc.accent }} />
                  <div className="absolute -right-1.5 -top-1.5 h-3 w-3" style={{ background: svc.accent }} />
                  <div className="absolute -left-1.5 -bottom-1.5 h-3 w-3" style={{ background: svc.accent }} />
                  <div className="absolute -right-1.5 -bottom-1.5 h-3 w-3" style={{ background: svc.accent }} />
                </div>

                {/* Ambient glow */}
                <div
                  className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 blur-xl -z-10"
                  style={{ background: `${svc.accent}18` }}
                />

                <div className="relative h-full bg-zinc-900/60 border border-zinc-800 group-hover:border-zinc-600 rounded-2xl overflow-hidden transition-colors duration-300 flex flex-col">
                  {/* Inner gradient on hover — 21st.dev Dark Grid pattern */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{ background: `linear-gradient(135deg, ${svc.accent}08, transparent 60%)` }} />

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
                      alt={`${svc.title} — Luxoflex`}
                      loading="lazy"
                      width="400"
                      height="224"
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
                      Ver servicio
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${svc.accent}, transparent)` }}
                  />
                </div>
              </Link>
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

        <nav
          aria-label="Servicios de impresion Luxoflex"
          className="mt-7 flex flex-wrap items-center justify-center gap-2 md:justify-start"
        >
          {serviceLinks.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-poppins text-xs font-semibold text-white/56 transition-colors duration-300 hover:border-yellow-300/30 hover:bg-yellow-400/10 hover:text-yellow-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </section>

    </div>
  );
}
