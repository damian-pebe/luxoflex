import { background } from "@/const";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const milestones = [
  {
    year: "2009",
    title: "Los primeros pasos",
    description: "Fundamos Luxoflex con una visión clara: llevar la impresión de etiquetas a otro nivel. Comenzamos con una sola máquina y mucho sueño.",
  },
  {
    year: "2012",
    title: "Primera gran expansión",
    description: "Incorporamos tecnología de flexografía de alta resolución y duplicamos nuestra capacidad de producción para atender a clientes de toda la región.",
  },
  {
    year: "2015",
    title: "Mangas envolventes",
    description: "Lanzamos nuestra línea de mangas para tequilas y vinos, abriendo un nuevo mercado premium que hoy representa una parte clave de nuestro negocio.",
  },
  {
    year: "2018",
    title: "Preprensa profesional",
    description: "Integramos el departamento de preprensa interno, ofreciendo control total del proceso desde el diseño hasta la impresión final.",
  },
  {
    year: "2021",
    title: "Certificación de calidad",
    description: "Obtuvimos certificaciones que avalan nuestros estándares de producción, consolidando la confianza de marcas nacionales e internacionales.",
  },
  {
    year: "2025",
    title: "El futuro es ahora",
    description: "Con más de 999 proyectos completados y un equipo apasionado, seguimos creciendo para convertirnos en el referente de impresión premium en México.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function History() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#09090B] py-24 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.p {...fadeUp(0)} className="text-yellow-500 text-xs font-poppins font-semibold tracking-widest uppercase mb-3">
            Nuestra trayectoria
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="font-audiowide text-4xl md:text-5xl text-white font-extralight leading-tight">
            Nuestra{" "}
            <span
              className="font-zilla font-bold italic"
              style={{
                background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Historia
            </span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-zinc-500 font-poppins text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Más de 15 años construyendo excelencia en impresión, una etiqueta a la vez.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/8 hidden md:block" />

          <div className="flex flex-col gap-16">
            {milestones.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={item.year} className="relative md:grid md:grid-cols-2 md:gap-12 items-center">

                  {/* Year dot on center line */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center z-10">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-poppins font-bold text-yellow-400"
                      style={{
                        background: "rgba(245,158,11,0.15)",
                        border: "2px solid rgba(245,158,11,0.4)",
                      }}
                    >
                      {item.year.slice(2)}
                    </div>
                  </div>

                  {/* Left slot */}
                  <div className={isLeft ? "md:text-right md:pr-8" : "md:order-2 md:pl-8"}>
                    <motion.div
                      {...fadeUp(0.05)}
                      className={`rounded-2xl p-6 border border-white/8 hover:border-yellow-500/20 transition-colors duration-300 group ${isLeft ? "" : ""}`}
                      style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                      {/* Mobile year badge */}
                      <span className="inline-flex md:hidden items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-poppins font-semibold px-3 py-1 rounded-full mb-3">
                        {item.year}
                      </span>
                      <p className="text-yellow-500 text-xs font-poppins font-semibold tracking-widest uppercase mb-2 hidden md:block">
                        {item.year}
                      </p>
                      <h3 className="text-white font-poppins font-semibold text-lg mb-2 leading-snug group-hover:text-yellow-50 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 font-poppins text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Right slot: image (alternating sides) */}
                  <motion.div
                    {...fadeUp(0.1)}
                    className={`hidden md:block rounded-2xl overflow-hidden h-48 ${isLeft ? "md:pl-8" : "md:order-1 md:pr-8"}`}
                  >
                    <img
                      src={background}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-50 hover:opacity-70 transition-opacity duration-500"
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA bottom */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-24 text-center"
        >
          <div
            className="inline-block rounded-2xl px-10 py-10 border border-white/8"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <p className="text-yellow-500 text-xs font-poppins font-semibold tracking-widest uppercase mb-3">¿Listo para el siguiente capítulo?</p>
            <h3 className="text-white font-audiowide text-2xl font-extralight mb-4">
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
          </div>
        </motion.div>

      </div>
    </section>
  );
}
