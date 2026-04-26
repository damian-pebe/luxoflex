import { motion } from "framer-motion";
import { Eye, Lightbulb, Target, ShieldCheck, Brush, Sparkles } from "lucide-react";

const valores = [
  {
    title: "Calidad",
    icon: ShieldCheck,
    description: "Cuidamos cada detalle para entregar un producto impecable.",
    accent: "#F59E0B",
    num: "01",
    img: "https://images.pexels.com/photos/6620992/pexels-photo-6620992.jpeg?auto=compress&cs=tinysrgb&w=900",
    span: "lg:col-span-2",
    tall: true,
  },
  {
    title: "Innovación",
    icon: Lightbulb,
    description: "Aplicamos diseño y tecnología para mejorar continuamente.",
    accent: "#3B82F6",
    num: "02",
    img: "https://images.pexels.com/photos/5532716/pexels-photo-5532716.jpeg?auto=compress&cs=tinysrgb&w=600",
    span: "lg:col-span-1",
    tall: true,
  },
  {
    title: "Compromiso",
    icon: Target,
    description: "Cumplimos con tiempos, atención y expectativas.",
    accent: "#F59E0B",
    num: "03",
    img: "https://images.pexels.com/photos/5532718/pexels-photo-5532718.jpeg?auto=compress&cs=tinysrgb&w=600",
    span: "lg:col-span-1",
    tall: false,
  },
  {
    title: "Confianza",
    icon: Eye,
    description: "Creamos relaciones sólidas y transparentes con nuestros clientes.",
    accent: "#3B82F6",
    num: "04",
    img: "https://images.pexels.com/photos/19843566/pexels-photo-19843566/free-photo-of-man-looking-at-new-printed-papers.jpeg?auto=compress&cs=tinysrgb&w=600",
    span: "lg:col-span-1",
    tall: false,
  },
  {
    title: "Pasión por el diseño",
    icon: Brush,
    description: "Creemos en el poder visual para transformar una marca.",
    accent: "#F59E0B",
    num: "05",
    img: "https://images.pexels.com/photos/19316517/pexels-photo-19316517/free-photo-of-machinery-in-factory.png?auto=compress&cs=tinysrgb&w=600",
    span: "lg:col-span-1",
    tall: false,
  },
  {
    title: "Atención personalizada",
    icon: Sparkles,
    description: "Nos adaptamos a cada cliente para brindar soluciones únicas y efectivas.",
    accent: "#3B82F6",
    num: "06",
    img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900",
    span: "lg:col-span-2",
    tall: false,
  },
];

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
          className="mb-16"
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

        {/* Bento grid — row 1: 2+1, row 2: 1+1+2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {valores.map((item, i) => {
            const Icon = item.icon;
            const height = item.tall ? "360px" : "280px";
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-colors duration-500 ${item.span}`}
                style={{ minHeight: height }}
              >
                {/* Background image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-black/60" />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)`,
                  }}
                />

                {/* Hover accent tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${item.accent}18 0%, transparent 60%)` }}
                />

                {/* Corner squares on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="absolute -left-1.5 -top-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -right-1.5 -top-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -left-1.5 -bottom-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -right-1.5 -bottom-1.5 h-3 w-3" style={{ background: item.accent }} />
                </div>

                {/* Top: number + icon */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span
                    className="font-rajdhani font-bold text-xs tracking-widest"
                    style={{ color: `${item.accent}90` }}
                  >
                    {item.num}
                  </span>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-sm"
                    style={{ background: `${item.accent}20`, border: `1px solid ${item.accent}40` }}
                  >
                    <Icon className="h-4 w-4" style={{ color: item.accent }} />
                  </div>
                </div>

                {/* Bottom: title + description */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="font-rajdhani font-bold uppercase tracking-wider text-white mb-1.5 group-hover:text-yellow-100 transition-colors duration-200"
                    style={{ fontSize: item.tall ? "1.25rem" : "1rem" }}>
                    {item.title}
                  </h3>
                  <p className="font-poppins text-zinc-400 text-xs leading-relaxed group-hover:text-zinc-300 transition-colors duration-200">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
