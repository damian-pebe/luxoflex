import { motion } from "framer-motion";
import { Eye, Lightbulb, Target, ShieldCheck, Brush, Sparkles } from "lucide-react";
import Particles from "@/components/Particles";

const valores = [
  { title: "Calidad",               icon: ShieldCheck, description: "Cuidamos cada detalle para entregar un producto impecable.",                                    accent: "#F59E0B" },
  { title: "Innovación",            icon: Lightbulb,   description: "Aplicamos diseño y tecnología para mejorar continuamente.",                                    accent: "#3B82F6" },
  { title: "Compromiso",            icon: Target,       description: "Cumplimos con tiempos, atención y expectativas.",                                              accent: "#F59E0B" },
  { title: "Confianza",             icon: Eye,          description: "Creamos relaciones sólidas y transparentes con nuestros clientes.",                            accent: "#3B82F6" },
  { title: "Pasión por el diseño",  icon: Brush,        description: "Creemos en el poder visual para transformar una marca.",                                      accent: "#F59E0B" },
  { title: "Atención personalizada",icon: Sparkles,     description: "Nos adaptamos a cada cliente para brindar soluciones únicas y efectivas.",                    accent: "#3B82F6" },
];

export default function Valores() {
  return (
    <section aria-labelledby="valores-heading" className="relative overflow-hidden bg-[#09090B]">
      {/* Particles background */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles
          particleCount={120}
          particleSpread={8}
          speed={0.06}
          particleColors={["#F59E0B", "#FBBF24", "#F97316", "#ffffff"]}
          alphaParticles
          particleBaseSize={80}
          sizeRandomness={0.8}
          cameraDistance={22}
          disableRotation={false}
          moveParticlesOnHover={false}
        />
      </div>

      <div className="relative z-10 py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-rajdhani uppercase tracking-widest text-yellow-500 text-sm mb-3">
            En qué creemos
          </p>
          <h2
            id="valores-heading"
            className="font-audiowide font-extralight text-4xl md:text-5xl text-white leading-tight"
          >
            Nuestros{" "}
            <span style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24, #F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Valores
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {valores.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-sm p-6 hover:border-zinc-600 transition-colors duration-300 overflow-visible"
            >
              {/* Corner squares — 21st.dev Dark Grid pattern */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -left-1.5 -top-1.5 h-3 w-3" style={{ background: item.accent }} />
                <div className="absolute -right-1.5 -top-1.5 h-3 w-3" style={{ background: item.accent }} />
                <div className="absolute -left-1.5 -bottom-1.5 h-3 w-3" style={{ background: item.accent }} />
                <div className="absolute -right-1.5 -bottom-1.5 h-3 w-3" style={{ background: item.accent }} />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${item.accent}08, transparent 60%)` }} />

              <div className="relative z-10 flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border border-zinc-700 group-hover:border-zinc-500 transition-colors duration-300"
                  style={{ background: `${item.accent}12` }}>
                  <item.icon className="h-5 w-5" style={{ color: item.accent }} />
                </div>
                <div>
                  <h3 className="font-rajdhani font-bold uppercase tracking-wider text-white text-base mb-1 group-hover:text-yellow-100 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
