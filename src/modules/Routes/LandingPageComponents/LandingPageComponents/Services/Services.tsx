import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "@/const";
import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";
import { flexo_img, manga_img, preprensa_img } from "@/const";
import { useRef, MouseEvent } from "react";

const services = [
  {
    number: "01",
    img: flexo_img,
    title: "Etiquetas Autoadheribles de Flexografía",
    description: "Alta definición, colores vibrantes y adhesión duradera para cualquier superficie.",
    tag: "Más popular",
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
    glowColor: "rgba(234,179,8,0.15)",
  },
  {
    number: "02",
    img: manga_img,
    title: "Mangas para Tequilas y Vinos",
    description: "Envolventes termocontraíbles que elevan la presentación de tu producto al siguiente nivel.",
    tag: "Premium",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    glowColor: "rgba(139,92,246,0.15)",
  },
  {
    number: "03",
    img: preprensa_img,
    title: "Armado de Preprensa Profesional",
    description: "Preparación técnica impecable para garantizar que cada impresión sea perfecta.",
    tag: "Técnico",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    glowColor: "rgba(59,130,246,0.15)",
  },
];

function TiltCard({ item, index }: { item: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onClick={() => navigate("/contactus")}
        className="cursor-pointer group relative"
      >
        {/* Gradient border wrapper */}
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${item.glowColor.replace("0.15", "0.8")}, transparent 60%)`,
          }}
        />

        {/* Ambient glow */}
        <div
          className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
          style={{ background: item.glowColor }}
        />

        {/* Card */}
        <div className="relative bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 rounded-2xl overflow-hidden transition-colors duration-300">
          {/* Number */}
          <div className="absolute top-4 left-4 z-10">
            <span className="font-poppins font-bold text-xs text-zinc-600 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-md px-2 py-1">
              {item.number}
            </span>
          </div>

          {/* Tag */}
          <div className="absolute top-4 right-4 z-10">
            <span className="font-poppins font-medium text-xs text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-3 py-1">
              {item.tag}
            </span>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden h-56">
            <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient} z-10`} />
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={item.img}
              alt={item.title}
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-rajdhani uppercase font-bold text-white text-lg leading-snug mb-2 group-hover:text-yellow-100 transition-colors duration-200">
              {item.title}
            </h3>
            <p className="font-poppins text-zinc-500 text-sm leading-relaxed">
              {item.description}
            </p>
            <div className="mt-5 flex items-center gap-2 text-yellow-500 text-sm font-poppins font-semibold">
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                Solicitar cotización
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <div className="relative bg-[#09090B] py-8 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-yellow-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />

      <ThreeDotsBlack top={true} />

      <section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-rajdhani uppercase tracking-widest text-yellow-500 text-sm mb-3">
              Lo que hacemos
            </p>
            <h2 className="font-audiowide font-extralight text-4xl md:text-6xl text-white leading-tight">
              Nuestros{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F59E0B, #FBBF24, #F97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Servicios
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/luxoflex"
              className="group inline-flex items-center gap-2 text-zinc-500 hover:text-yellow-400 font-poppins text-sm transition-colors duration-200 cursor-pointer border border-zinc-800 hover:border-yellow-500/30 rounded-lg px-4 py-2.5"
            >
              Conoce nuestra historia
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <TiltCard key={index} item={item} index={index} />
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
          <div className="flex items-center gap-3">
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-yellow-500 to-transparent" />
            <img src={logo} className="h-10 opacity-80" alt="Luxoflex" />
          </div>
          <p className="font-poppins text-zinc-600 text-sm text-center md:text-left max-w-xl">
            Diseños desarrollados por profesionales con más de{" "}
            <span className="text-zinc-300 font-medium">15 años de experiencia</span>{" "}
            — calidad, precisión e innovación en cada etiqueta.
          </p>

          <div className="md:ml-auto flex items-center gap-3 shrink-0">
            {["98%", "15+", "999+"].map((v, i) => (
              <div key={i} className="text-center">
                <div className="font-poppins font-bold text-white text-lg">{v}</div>
                <div className="font-poppins text-zinc-600 text-xs">{["satisfacción", "años", "proyectos"][i]}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <ThreeDotsBlack />
    </div>
  );
}
