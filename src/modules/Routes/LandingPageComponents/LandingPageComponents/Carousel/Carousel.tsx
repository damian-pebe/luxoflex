import { Carousel } from "@/components/aceternity/carousel";
import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";
import {
  recepcion_disenios,
  revision_coreccion,
  final_preprensa,
  happy_customer,
  grabados,
} from "@/const";
import { Upload, CheckCircle, Layers, ThumbsUp, Printer } from "lucide-react";
import { motion } from "framer-motion";

const slideData = [
  {
    title: "Recepción de Archivos de Diseño",
    description: "Nos aseguramos de recibir y gestionar tus archivos correctamente, evitando problemas desde el inicio del proceso.",
    icon: <Upload className="h-5 w-5 text-white" />,
    src: recepcion_disenios,
    step: "01",
  },
  {
    title: "Revisión y Corrección de Errores",
    description: "Nuestro equipo detecta y corrige errores antes de la impresión, garantizando calidad y evitando costosos reprocesos.",
    icon: <CheckCircle className="h-5 w-5 text-white" />,
    src: revision_coreccion,
    step: "02",
  },
  {
    title: "Preparación para Impresión",
    description: "Optimizamos la disposición y separación de colores, asegurando una impresión nítida y de alta calidad.",
    icon: <Layers className="h-5 w-5 text-white" />,
    src: final_preprensa,
    step: "03",
  },
  {
    title: "Aprobación del Cliente",
    description: "Involucramos a nuestros clientes en cada paso, asegurándonos de que el producto final cumpla con sus expectativas.",
    icon: <ThumbsUp className="h-5 w-5 text-white" />,
    src: happy_customer,
    step: "04",
  },
  {
    title: "Generación de Grabados para Impresión",
    description: "Utilizamos tecnología avanzada para la filmación y generación de grabados, garantizando una impresión precisa y profesional.",
    icon: <Printer className="h-5 w-5 text-white" />,
    src: grabados,
    step: "05",
  },
];

export default function CarouselComponent() {
  return (
    <div className="relative bg-[#09090B] overflow-hidden py-8">
      {/* Subtle orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-yellow-500/5 blur-[90px] pointer-events-none" />

      <ThreeDotsBlack top={true} />

      <section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-rajdhani uppercase tracking-widest text-yellow-500 text-sm mb-4">
            Nuestro proceso
          </p>
          <h2 className="font-audiowide font-extralight text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Garantizamos{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3B82F6, #60A5FA, #93C5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Excelencia
            </span>
          </h2>
          <p className="mt-4 font-poppins text-zinc-500 text-base max-w-xl mx-auto leading-relaxed">
            Cada paso diseñado para que tu producto final sea perfecto — desde el archivo hasta el grabado.
          </p>
        </motion.div>

        {/* Step indicators */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden md:flex items-center justify-center gap-3 mb-10"
        >
          {slideData.map((slide, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                  <span className="font-poppins font-bold text-zinc-500 text-xs">{slide.step}</span>
                </div>
                <span className="font-poppins text-zinc-600 text-xs hidden lg:inline">{slide.title.split(" ").slice(0, 2).join(" ")}</span>
              </div>
              {i < slideData.length - 1 && (
                <div className="w-6 h-px bg-zinc-800" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative overflow-hidden w-full pb-20"
        >
          <Carousel slides={slideData} />
        </motion.div>
      </section>

      <ThreeDotsBlack />
    </div>
  );
}
