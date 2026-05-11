import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Eye,
  Handshake,
  Leaf,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  final_preprensa,
  flexo_img,
  grabados,
  happy_customer,
  manga_img,
  preprensa_img,
  recepcion_disenios,
  revision_coreccion,
} from "@/const";
import { InfiniteMovingCardsDemo } from "./carousel-infinity";

const featuredPillars = [
  {
    title: "Diseño que vende",
    description:
      "Aterrizamos tu idea en una etiqueta lista para anaquel: legible, memorable y pensada para el material correcto.",
    icon: Eye,
    accent: "#F59E0B",
    img: recepcion_disenios,
    imgAlt: "Revisión de diseños personalizados para etiquetas Luxoflex",
  },
  {
    title: "Producción confiable",
    description:
      "Preprensa, flexografía, mangas y acabados especiales unidos en un proceso claro de principio a fin.",
    icon: Target,
    accent: "#3B82F6",
    img: flexo_img,
    imgAlt: "Proceso flexográfico de Luxoflex para etiquetas premium",
  },
];

const pillars = [
  {
    title: "Preprensa exacta",
    description:
      "Archivos, color y suajes revisados antes de imprimir para reducir errores y acelerar aprobaciones.",
    icon: ShieldCheck,
    accent: "#F59E0B",
  },
  {
    title: "Material correcto",
    description: "Elegimos película, adhesivo y acabado según el uso real del producto.",
    icon: ShieldCheck,
    accent: "#3B82F6",
  },
  {
    title: "Innovación continua",
    description:
      "Probamos acabados, tintas y soluciones visuales para que cada marca tenga una presencia distinta.",
    icon: Lightbulb,
    accent: "#F59E0B",
  },
  {
    title: "Producción responsable",
    description: "Cuidamos merma, tiempos y materiales para producir con mejor control operativo.",
    icon: Leaf,
    accent: "#3B82F6",
  },
  {
    title: "Relación cercana",
    description: "Acompañamos el proyecto con comunicación clara desde la primera muestra.",
    icon: Handshake,
    accent: "#F59E0B",
  },
  {
    title: "Cotización guiada",
    description: "Te ayudamos a definir medida, material, acabado y volumen sin vueltas innecesarias.",
    icon: MessageCircle,
    accent: "#3B82F6",
  },
];

const processImages = [
  preprensa_img,
  revision_coreccion,
  final_preprensa,
  manga_img,
  happy_customer,
  grabados,
];

export default function Impulsa() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-[#09090B]">
      <div className="absolute left-0 right-0 top-0 h-px bg-zinc-800 pointer-events-none" />
      <div
        className="pointer-events-none absolute right-[-18rem] top-40 h-[38rem] w-[38rem] rounded-full border border-yellow-400/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-20 left-[-16rem] h-[34rem] w-[34rem] rounded-full border border-blue-400/10"
        aria-hidden="true"
      />

      <section aria-labelledby="testimonios-heading" className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="font-rajdhani text-sm uppercase tracking-widest text-yellow-500">
            Confianza en producción
          </p>
          <h2
            id="testimonios-heading"
            className="mt-3 font-audiowide text-4xl font-extralight leading-tight text-white md:text-5xl"
          >
            Marcas que vuelven{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #FBBF24, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              por el resultado
            </span>
          </h2>
        </motion.div>
        <InfiniteMovingCardsDemo />
      </section>

      <section aria-labelledby="impulsa-heading" className="relative z-10 px-6 py-16 md:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <p className="font-rajdhani text-sm uppercase tracking-widest text-yellow-500">
              Cómo cumplimos la misión
            </p>
            <h2
              id="impulsa-heading"
              className="mt-3 font-audiowide text-4xl font-extralight leading-tight text-white md:text-5xl"
            >
              Sistema de{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F59E0B, #FBBF24, #60A5FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                trabajo
              </span>
            </h2>
          </motion.div>

          <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            {featuredPillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative flex min-h-80 flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/70 backdrop-blur-sm transition-colors duration-300 hover:border-zinc-600"
              >
                <div className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -left-1.5 -top-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -right-1.5 -top-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3" style={{ background: item.accent }} />
                </div>

                <div className="relative h-52 shrink-0 overflow-hidden">
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      background: `linear-gradient(to bottom, ${item.accent}20, transparent 40%, rgba(24,24,27,0.95) 100%)`,
                    }}
                  />
                  <img
                    src={item.img}
                    alt={item.imgAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute right-4 top-4 z-20">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 backdrop-blur-sm"
                      style={{ background: `${item.accent}25` }}
                    >
                      <item.icon className="h-4 w-4" style={{ color: item.accent }} />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex-1 p-6">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-b-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `linear-gradient(135deg, ${item.accent}06, transparent 60%)` }}
                  />
                  <h3 className="relative z-10 mb-2 font-rajdhani text-lg font-bold uppercase tracking-wider text-white transition-colors duration-200 group-hover:text-yellow-100">
                    {item.title}
                  </h3>
                  <p className="relative z-10 font-poppins text-sm leading-relaxed text-zinc-500">
                    {item.description}
                  </p>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative overflow-visible rounded-lg border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-zinc-600"
              >
                <img
                  src={processImages[i]}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-16 w-full rounded-t-lg object-cover opacity-20 grayscale transition-opacity duration-300 group-hover:opacity-35"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -left-1.5 -top-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -right-1.5 -top-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3" style={{ background: item.accent }} />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(135deg, ${item.accent}08, transparent 60%)` }}
                />

                <div className="relative z-10 pt-10">
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 transition-colors duration-300 group-hover:border-zinc-500"
                    style={{ background: `${item.accent}12` }}
                  >
                    <item.icon className="h-5 w-5" style={{ color: item.accent }} />
                  </div>
                  <h3 className="mb-2 font-rajdhani text-base font-bold uppercase tracking-wide text-white transition-colors duration-200 group-hover:text-yellow-100">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-sm leading-relaxed text-zinc-500">{item.description}</p>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-px rounded-b-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14 flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contacto")}
              className="group flex cursor-pointer items-center gap-2.5 rounded-full bg-yellow-500 px-8 py-4 font-poppins text-base font-bold text-black shadow-[0_0_30px_rgba(234,179,8,0.35)] transition-colors duration-300 hover:bg-yellow-400 hover:shadow-[0_0_50px_rgba(234,179,8,0.55)]"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar cotización
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
