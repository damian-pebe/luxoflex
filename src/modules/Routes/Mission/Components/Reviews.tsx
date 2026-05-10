import { motion } from "framer-motion";
import { Brain, Rocket, Users, Star } from "lucide-react";

const stats = [
  { icon: Brain,  value: "1,000+", label: "Diseños personalizados", desc: "Proyectos únicos entregados" },
  { icon: Users,  value: "500+",   label: "Clientes satisfechos",   desc: "Marcas que confían en nosotros" },
  { icon: Star,   value: "99%",    label: "Calidad garantizada",    desc: "En cada lote de producción" },
  { icon: Rocket, value: "24h",    label: "Tiempo de respuesta",    desc: "Atención y cotización express" },
];

export default function Reviews() {
  return (
    <section
      aria-label="Estadísticas de Luxoflex"
      className="relative overflow-hidden bg-[#09090B] px-6 py-20 md:px-20"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-0 h-48 w-[72rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_62%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 grid gap-5 md:grid-cols-[0.72fr_1fr] md:items-end"
        >
          <div>
            <p className="font-rajdhani uppercase tracking-[0.3em] text-blue-300 text-xs mb-3">
              La misión en números
            </p>
            <h2 className="font-audiowide font-extralight text-3xl md:text-5xl text-white leading-tight">
              Resultados que sostienen la promesa.
            </h2>
          </div>
          <p className="font-poppins text-sm md:text-base leading-relaxed text-zinc-500 md:max-w-2xl md:justify-self-end">
            Cada métrica representa un flujo real de trabajo: escucha, diseño,
            corrección, impresión y entrega con el mismo estándar en cada lote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex min-h-56 flex-col justify-between border-white/10 px-5 py-7 sm:border-r sm:even:border-r-0 lg:even:border-r lg:last:border-r-0"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(245,158,11,0.05) 44%, transparent 72%)",
                  }}
                />
                <div className="relative flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-300/25 bg-blue-400/10">
                    <Icon className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="font-rajdhani text-xs font-bold tracking-[0.22em] text-zinc-700">
                    0{i + 1}
                  </span>
                </div>
                <div
                  className="relative font-audiowide font-bold leading-none"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    background: "linear-gradient(135deg, #F59E0B, #FBBF24, #60A5FA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="relative">
                  <div className="font-rajdhani font-bold uppercase tracking-wider text-white text-sm">
                    {stat.label}
                  </div>
                  <div className="mt-2 font-poppins text-zinc-600 text-xs leading-snug">
                    {stat.desc}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
