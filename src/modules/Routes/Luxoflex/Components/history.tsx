import { background } from "@/const";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

const milestones = [
  {
    year: "2009",
    title: "Los primeros pasos",
    description: "Fundamos Luxoflex con una sola máquina y mucho sueño. Desde el primer día, la calidad fue nuestra obsesión.",
  },
  {
    year: "2012",
    title: "Primera expansión",
    description: "Incorporamos tecnología de flexografía de alta resolución y duplicamos nuestra capacidad de producción.",
  },
  {
    year: "2015",
    title: "Mangas envolventes",
    description: "Lanzamos nuestra línea para tequilas y vinos. Un nuevo mercado premium que hoy es parte clave de lo que somos.",
  },
  {
    year: "2018",
    title: "Preprensa interna",
    description: "Integramos el departamento de preprensa, logrando control total del proceso desde el diseño hasta la impresión.",
  },
  {
    year: "2021",
    title: "Certificación de calidad",
    description: "Obtuvimos certificaciones que consolidaron la confianza de marcas nacionales e internacionales.",
  },
  {
    year: "2025",
    title: "El futuro es ahora",
    description: "999+ proyectos, 15+ años y un equipo apasionado que sigue empujando los límites de la impresión premium.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

function MilestoneCarousel() {
  return (
    <div className="w-full px-6 pb-10 overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 min-w-max pb-2 px-4 md:px-16">
        {milestones.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-shrink-0 w-64 rounded-2xl p-5 border border-white/10 hover:border-yellow-500/30 transition-colors duration-300 group"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <span className="inline-block text-yellow-400 font-poppins text-xs font-bold tracking-widest uppercase mb-3">
              {m.year}
            </span>
            <div className="w-6 h-0.5 bg-yellow-500 mb-3 group-hover:w-10 transition-all duration-300" />
            <h3 className="text-white font-poppins font-semibold text-base leading-snug mb-2 group-hover:text-yellow-50 transition-colors duration-300">
              {m.title}
            </h3>
            <p className="text-zinc-500 font-poppins text-xs leading-relaxed">
              {m.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function History() {
  const navigate = useNavigate();

  return (
    <section className="border-t border-white/5">
      <ScrollExpandMedia
        mediaSrc={background}
        bgImageSrc={background}
        title="Nuestra Historia"
        subtitle="Más de 15 años construyendo excelencia"
      >
        {/* Shown after image fully expands — pinned at bottom of sticky viewport */}
        <div className="w-full bg-gradient-to-t from-[#09090B] via-[#09090B]/95 to-transparent pt-16">
          <MilestoneCarousel />
        </div>
      </ScrollExpandMedia>

      {/* CTA after scroll section */}
      <div className="bg-[#09090B] py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...fadeUp(0)}
            className="text-center rounded-2xl px-10 py-12 border border-white/8"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <p className="text-yellow-500 text-xs font-poppins font-semibold tracking-widest uppercase mb-3">
              ¿Listo para el siguiente capítulo?
            </p>
            <h3 className="text-white font-audiowide text-2xl md:text-3xl font-extralight mb-5">
              Hagamos algo{" "}
              <span
                className="font-zilla font-bold italic"
                style={{
                  background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                extraordinario.
              </span>
            </h3>
            <button
              onClick={() => navigate("/contactus")}
              className="cursor-pointer group inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-poppins font-bold px-7 py-3 rounded-xl transition-colors duration-300 text-sm shadow-[0_0_30px_rgba(234,179,8,0.25)]"
            >
              Contactanos
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
