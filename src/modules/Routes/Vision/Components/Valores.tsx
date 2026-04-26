import { motion } from "framer-motion";
import { Eye, Lightbulb, Target, ShieldCheck, Brush, Sparkles } from "lucide-react";

const valores = [
  { title: "Calidad",                icon: ShieldCheck, description: "Cuidamos cada detalle para entregar un producto impecable.",                         accent: "#F59E0B", num: "01" },
  { title: "Innovación",             icon: Lightbulb,   description: "Aplicamos diseño y tecnología para mejorar continuamente.",                         accent: "#3B82F6", num: "02" },
  { title: "Compromiso",             icon: Target,       description: "Cumplimos con tiempos, atención y expectativas.",                                   accent: "#F59E0B", num: "03" },
  { title: "Confianza",              icon: Eye,          description: "Creamos relaciones sólidas y transparentes con nuestros clientes.",                 accent: "#3B82F6", num: "04" },
  { title: "Pasión por el diseño",   icon: Brush,        description: "Creemos en el poder visual para transformar una marca.",                           accent: "#F59E0B", num: "05" },
  { title: "Atención personalizada", icon: Sparkles,     description: "Nos adaptamos a cada cliente para brindar soluciones únicas y efectivas.",         accent: "#3B82F6", num: "06" },
];

const FeaturedIcon = valores[0].icon;
const featured = valores[0];

export default function Valores() {
  return (
    <section aria-labelledby="valores-heading" className="bg-[#09090B] py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-rajdhani uppercase tracking-[0.3em] text-yellow-500 text-xs mb-4">
            En qué creemos
          </p>
          <h2
            id="valores-heading"
            className="font-audiowide font-extralight text-white leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Nuestros{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #FBBF24, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Valores
            </span>
          </h2>
        </motion.div>

        {/* Featured first value — image card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-2xl border border-zinc-800 overflow-hidden mb-4 hover:border-zinc-600 transition-colors duration-500"
          style={{ minHeight: "260px" }}
        >
          {/* Background image */}
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Equipo Luxoflex garantizando calidad"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.18) 0%, transparent 60%)" }} />
          <div className="absolute top-0 left-8 right-8 h-px" style={{ background: "linear-gradient(90deg, transparent, #F59E0B44, transparent)" }} />

          <div className="relative z-10 p-8 flex flex-col md:flex-row md:items-end gap-6 h-full" style={{ minHeight: "260px" }}>
            <div className="flex-1 flex flex-col justify-end">
              <span className="font-rajdhani text-yellow-500/50 text-xs font-bold tracking-widest mb-4">{featured.num}</span>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${featured.accent}20`, border: `1px solid ${featured.accent}40` }}
              >
                <FeaturedIcon className="h-7 w-7" style={{ color: featured.accent }} />
              </div>
              <h3 className="font-rajdhani font-bold uppercase tracking-widest text-white text-2xl md:text-3xl mb-3 group-hover:text-yellow-100 transition-colors duration-300">
                {featured.title}
              </h3>
              <p className="font-poppins text-zinc-400 text-base leading-relaxed max-w-lg">
                {featured.description}
              </p>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(90deg, transparent, ${featured.accent}, transparent)` }}
          />
        </motion.div>

        {/* Remaining 5 values — 2-col divider list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {valores.slice(1).map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-5 border-t border-zinc-800 py-8 hover:border-zinc-600 transition-colors duration-300 cursor-default"
              >
                <div className="shrink-0 pt-0.5">
                  <span className="font-rajdhani text-zinc-700 text-xs font-bold group-hover:text-zinc-500 transition-colors duration-300 block mb-3">
                    {item.num}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                    style={{ background: `${item.accent}12`, border: `1px solid ${item.accent}25` }}
                  >
                    <ItemIcon className="h-5 w-5" style={{ color: item.accent }} />
                  </div>
                </div>
                <div>
                  <h3 className="font-rajdhani font-bold uppercase tracking-wider text-white text-base mb-2 group-hover:text-yellow-100 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-zinc-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
