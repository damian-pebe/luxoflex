import { motion } from "framer-motion";
import { Layers, Paintbrush, Printer, ThumbsUp } from "lucide-react";
import Particles from "@/components/Particles";

const steps = [
  {
    icon: Layers,
    title: "Convertimos tus ideas en realidad",
    description: "Partimos de tu concepto y lo llevamos a un diseño listo para producción.",
    number: "01",
    img: "https://images.pexels.com/photos/19843566/pexels-photo-19843566/free-photo-of-man-looking-at-new-printed-papers.jpeg?auto=compress&cs=tinysrgb&w=600",
    imgAlt: "Persona revisando materiales impresos en taller",
  },
  {
    icon: Paintbrush,
    title: "Diseñamos con precisión",
    description: "Cada trazo, color y tipografía es cuidadosamente calibrado para tu marca.",
    number: "02",
    img: "https://images.pexels.com/photos/6620992/pexels-photo-6620992.jpeg?auto=compress&cs=tinysrgb&w=600",
    imgAlt: "Aplicación de tinta en prensa de impresión profesional",
  },
  {
    icon: Printer,
    title: "Imprimimos con calidad",
    description: "Tecnología flexográfica de última generación para resultados impecables.",
    number: "03",
    img: "https://images.pexels.com/photos/19316517/pexels-photo-19316517/free-photo-of-machinery-in-factory.png?auto=compress&cs=tinysrgb&w=600",
    imgAlt: "Maquinaria industrial de impresión flexográfica",
  },
  {
    icon: ThumbsUp,
    title: "Entregamos excelencia",
    description: "Revisamos cada lote antes de entregarlo. Sin errores, sin compromisos.",
    number: "04",
    img: "https://images.pexels.com/photos/5532718/pexels-photo-5532718.jpeg?auto=compress&cs=tinysrgb&w=600",
    imgAlt: "Sistema automatizado de etiquetado de productos en planta",
  },
];

export default function LookingFor() {
  return (
    <section aria-labelledby="enfoque-heading" className="relative overflow-hidden bg-[#09090B]">
      <div className="absolute inset-0 pointer-events-none">
        <Particles
          particleCount={80}
          particleSpread={10}
          speed={0.04}
          particleColors={["#3B82F6", "#60A5FA", "#F59E0B", "#ffffff"]}
          alphaParticles
          particleBaseSize={70}
          sizeRandomness={0.9}
          cameraDistance={25}
          disableRotation
          moveParticlesOnHover={false}
        />
      </div>

      <div className="relative z-10 py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-rajdhani uppercase tracking-widest text-yellow-500 text-sm mb-3">
            Cómo trabajamos
          </p>
          <h2
            id="enfoque-heading"
            className="font-audiowide font-extralight text-4xl md:text-5xl text-white leading-tight"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-sm hover:border-zinc-600 transition-colors duration-300 overflow-hidden flex flex-col"
            >
              {/* Corner squares — 21st.dev Dark Grid pattern */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-yellow-500" />
                <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-yellow-500" />
                <div className="absolute -left-1.5 -bottom-1.5 h-3 w-3 bg-yellow-500" />
                <div className="absolute -right-1.5 -bottom-1.5 h-3 w-3 bg-yellow-500" />
              </div>

              {/* Image top */}
              <div className="relative h-44 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-linear-to-b from-yellow-500/20 via-transparent to-zinc-900/90 z-10" />
                <img
                  src={step.img}
                  alt={step.imgAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Number badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="font-poppins font-bold text-xs text-zinc-300 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1">
                    {step.number}
                  </span>
                </div>
                {/* Icon badge */}
                <div className="absolute top-3 right-3 z-20">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-sm flex items-center justify-center">
                    <step.icon className="h-4 w-4 text-yellow-400" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 flex flex-col flex-1">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.05), transparent 60%)" }}
                />
                <h3 className="font-rajdhani font-bold uppercase tracking-wide text-white text-sm mb-2 group-hover:text-yellow-100 transition-colors duration-200 relative z-10">
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
