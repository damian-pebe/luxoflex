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
    <section aria-label="Estadísticas de Luxoflex" className="bg-[#09090B] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Horizontal stat strip with dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center px-6 py-8 gap-3"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-yellow-500/10 border border-yellow-500/20 mb-1">
                  <Icon className="h-5 w-5 text-yellow-500" />
                </div>
                <div
                  className="font-audiowide font-bold leading-none"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="font-rajdhani font-bold uppercase tracking-wider text-white text-sm">
                  {stat.label}
                </div>
                <div className="font-poppins text-zinc-600 text-xs leading-snug">
                  {stat.desc}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom separator */}
        <div className="mt-0 h-px bg-zinc-800" />
      </div>
    </section>
  );
}
