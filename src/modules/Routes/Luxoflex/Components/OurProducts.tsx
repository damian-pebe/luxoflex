import { flexo_img, manga_img, preprensa_img } from "@/const";
import { motion } from "framer-motion";
import { Layers, Wine, ScanLine, ArrowUpRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const products = [
  {
    icon: Layers,
    title: "Etiquetas autoadheribles",
    subtitle: "Flexografía de alta resolución",
    body: "Impresión de alta calidad para todo tipo de productos. Materiales premium, adhesivos de larga duración y colores vibrantes que no se desvanecen.",
    image: flexo_img,
    span: "",
    large: true,
  },
  {
    icon: Wine,
    title: "Mangas envolventes",
    subtitle: "Tequilas, vinos y licores",
    body: "Diseños que abrazan cada botella y elevan la percepción de tu marca al siguiente nivel.",
    image: manga_img,
    span: "",
    large: false,
  },
  {
    icon: ScanLine,
    title: "Preprensa profesional",
    subtitle: "Armado y separación de color",
    body: "Optimización técnica para resultados impecables en producción.",
    image: preprensa_img,
    span: "",
    large: false,
  },
];

export default function OurProducts() {
  return (
    <section className="bg-[#09090B] py-24 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.p {...fadeUp(0)} className="text-yellow-500 text-xs font-poppins font-semibold tracking-widest uppercase mb-3">
              Lo que hacemos
            </motion.p>
            <motion.h2 {...fadeUp(0.05)} className="font-audiowide text-4xl md:text-5xl text-white font-extralight leading-tight">
              Nuestros{" "}
              <span
                className="font-zilla font-bold italic"
                style={{
                  background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Productos
              </span>
            </motion.h2>
          </div>
          <motion.p {...fadeUp(0.08)} className="text-zinc-500 font-poppins text-sm max-w-sm leading-relaxed md:text-right">
            Una selección de soluciones de impresión que han ayudado a destacar marcas sobresalientes.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "280px 280px",
          }}
        >
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                {...fadeUp(i * 0.08)}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  gridColumn: p.large ? "span 2" : "span 1",
                  gridRow: p.large ? "span 2" : "span 1",
                }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                {/* Background image */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Top: icon + arrow */}
                  <div className="flex items-start justify-between">
                    <div
                      className="flex items-center justify-center w-9 h-9 rounded-xl"
                      style={{
                        background: "rgba(245,158,11,0.15)",
                        border: "1px solid rgba(245,158,11,0.3)",
                      }}
                    >
                      <Icon className="h-4 w-4 text-yellow-400" />
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                    >
                      <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                    </div>
                  </div>

                  {/* Bottom: text */}
                  <div>
                    <p className="text-yellow-400/70 font-poppins text-xs font-medium tracking-wide uppercase mb-1.5">
                      {p.subtitle}
                    </p>
                    <h3 className={`text-white font-poppins font-semibold leading-snug mb-2 ${p.large ? "text-2xl" : "text-lg"}`}>
                      {p.title}
                    </h3>
                    <p className={`text-zinc-400 font-poppins leading-relaxed ${p.large ? "text-base max-w-sm" : "text-sm"}`}>
                      {p.body}
                    </p>
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
