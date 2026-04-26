import { motion } from "framer-motion";
import { Layers, Paintbrush, Printer, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Layers,
    title: "Convertimos tus ideas en realidad",
    description: "Partimos de tu concepto y lo llevamos a un diseño listo para producción.",
    number: "01",
    img: "https://images.pexels.com/photos/19843566/pexels-photo-19843566/free-photo-of-man-looking-at-new-printed-papers.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgAlt: "Persona revisando materiales impresos en taller",
  },
  {
    icon: Paintbrush,
    title: "Diseñamos con precisión",
    description: "Cada trazo, color y tipografía es cuidadosamente calibrado para tu marca.",
    number: "02",
    img: "https://images.pexels.com/photos/6620992/pexels-photo-6620992.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgAlt: "Aplicación de tinta en prensa de impresión profesional",
  },
  {
    icon: Printer,
    title: "Imprimimos con calidad",
    description: "Tecnología flexográfica de última generación para resultados impecables.",
    number: "03",
    img: "https://images.pexels.com/photos/19316517/pexels-photo-19316517/free-photo-of-machinery-in-factory.png?auto=compress&cs=tinysrgb&w=800",
    imgAlt: "Maquinaria industrial de impresión flexográfica",
  },
  {
    icon: ThumbsUp,
    title: "Entregamos excelencia",
    description: "Revisamos cada lote antes de entregarlo. Sin errores, sin compromisos.",
    number: "04",
    img: "https://images.pexels.com/photos/5532718/pexels-photo-5532718.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgAlt: "Sistema automatizado de etiquetado de productos en planta",
  },
];

export default function LookingFor() {
  return (
    <section aria-labelledby="enfoque-heading" className="bg-[#09090B] py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header — left aligned for editorial feel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-t border-zinc-800 pt-16"
        >
          <p className="font-rajdhani uppercase tracking-[0.3em] text-yellow-500 text-xs mb-4">
            Cómo trabajamos
          </p>
          <h2
            id="enfoque-heading"
            className="font-audiowide font-extralight text-white leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Nuestro{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #FBBF24, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Enfoque
            </span>
          </h2>
        </motion.div>

        {/* Step cards — 4 cols, tall image area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:border-zinc-600 transition-colors duration-500 overflow-hidden flex flex-col"
            >
              {/* Corner squares */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-yellow-500" />
                <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-yellow-500" />
                <div className="absolute -left-1.5 -bottom-1.5 h-3 w-3 bg-yellow-500" />
                <div className="absolute -right-1.5 -bottom-1.5 h-3 w-3 bg-yellow-500" />
              </div>

              {/* Image — taller */}
              <div className="relative overflow-hidden shrink-0" style={{ height: "260px" }}>
                <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-zinc-900 z-10" />
                <img
                  src={step.img}
                  alt={step.imgAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Step number — large editorial */}
                <div className="absolute bottom-4 left-5 z-20">
                  <span
                    className="font-audiowide font-bold text-5xl leading-none select-none"
                    style={{ color: "rgba(245,158,11,0.25)" }}
                  >
                    {step.number}
                  </span>
                </div>
                {/* Icon */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="w-9 h-9 rounded-xl bg-yellow-500/15 border border-yellow-500/25 backdrop-blur-sm flex items-center justify-center">
                    <step.icon className="h-4 w-4 text-yellow-400" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 flex flex-col flex-1">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.04), transparent 60%)" }}
                />
                <h3 className="font-rajdhani font-bold uppercase tracking-wider text-white text-sm mb-2 group-hover:text-yellow-100 transition-colors duration-200 relative z-10">
                  {step.title}
                </h3>
                <p className="font-poppins text-zinc-500 text-xs leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #F59E0B, transparent)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
