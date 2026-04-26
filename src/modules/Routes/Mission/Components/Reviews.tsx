import { motion } from "framer-motion";
import { Brain, Rocket, Users, Star } from "lucide-react";
import Aurora from "@/components/Aurora";

const stats = [
  { icon: Brain,  value: "1,000+", label: "Diseños personalizados" },
  { icon: Users,  value: "500+",   label: "Clientes satisfechos"   },
  { icon: Star,   value: "99%",    label: "Calidad garantizada"    },
  { icon: Rocket, value: "24h",    label: "Tiempo de respuesta"    },
];

export default function Reviews() {
  return (
    <section aria-label="Estadísticas de Luxoflex" className="relative overflow-hidden bg-[#09090B]">
      {/* Aurora background — blue/indigo matching mission floating lines hero */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <Aurora
          colorStops={["#1E3A8A", "#3B82F6", "#1E3A8A"]}
          amplitude={0.8}
          blend={0.4}
          speed={0.6}
        />
      </div>

      <div className="relative z-10 py-16 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-sm p-6 text-center hover:border-zinc-600 transition-colors duration-300 overflow-visible"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-yellow-500" />
              <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-yellow-500" />
              <div className="absolute -left-1.5 -bottom-1.5 h-3 w-3 bg-yellow-500" />
              <div className="absolute -right-1.5 -bottom-1.5 h-3 w-3 bg-yellow-500" />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.06), transparent 60%)" }} />

            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-zinc-700 bg-yellow-500/10 group-hover:border-zinc-500 transition-colors duration-300">
                <stat.icon className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="font-audiowide font-bold text-2xl md:text-3xl"
                style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {stat.value}
              </div>
              <div className="font-poppins text-zinc-500 text-xs leading-tight">{stat.label}</div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg, transparent, #F59E0B, transparent)" }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
