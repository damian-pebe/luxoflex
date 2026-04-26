import { motion } from "framer-motion";
import { Layers, Paintbrush, Printer, ThumbsUp } from "lucide-react";
import Particles from "@/components/Particles";

const steps = [
  { icon: Layers,     title: "Convertimos tus ideas en realidad", description: "Partimos de tu concepto y lo llevamos a un diseño listo para producción.", number: "01" },
  { icon: Paintbrush, title: "Diseñamos con precisión",            description: "Cada trazo, color y tipografía es cuidadosamente calibrado para tu marca.",    number: "02" },
  { icon: Printer,    title: "Imprimimos con calidad",             description: "Tecnología flexográfica de última generación para resultados impecables.",       number: "03" },
  { icon: ThumbsUp,   title: "Entregamos excelencia",              description: "Revisamos cada lote antes de entregarlo. Sin errores, sin compromisos.",         number: "04" },
];

export default function LookingFor() {
  return (
    <section aria-labelledby="enfoque-heading" className="relative overflow-hidden bg-[#09090B]">
      {/* Particles — shifted amber+blue palette for variety */}
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
          <p className="font-rajdhani uppercase tracking-widest text-yellow-500 text-sm mb-3">Cómo trabajamos</p>
          <h2 id="enfoque-heading" className="font-audiowide font-extralight text-4xl md:text-5xl text-white leading-tight">
            Nuestro{" "}
            <span style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24, #F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Enfoque
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-sm p-6 hover:border-zinc-600 transition-colors duration-300 overflow-visible"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-yellow-500" />
                <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-yellow-500" />
                <div className="absolute -left-1.5 -bottom-1.5 h-3 w-3 bg-yellow-500" />
                <div className="absolute -right-1.5 -bottom-1.5 h-3 w-3 bg-yellow-500" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.06), transparent 60%)" }} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-zinc-700 bg-yellow-500/10 group-hover:border-zinc-500 transition-colors duration-300">
                    <step.icon className="h-5 w-5 text-yellow-500" />
                  </div>
                  <span className="font-poppins font-bold text-xs text-zinc-700 bg-zinc-800/80 border border-zinc-700 rounded-md px-2 py-1">{step.number}</span>
                </div>
                <h3 className="font-rajdhani font-bold uppercase tracking-wide text-white text-base mb-2 group-hover:text-yellow-100 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="font-poppins text-zinc-500 text-sm leading-relaxed">{step.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #F59E0B, transparent)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
