import { motion } from "framer-motion";
import {
  Eye,
  Lightbulb,
  Target,
  ShieldCheck,
  Brush,
  Sparkles,
} from "lucide-react";
export default function Valores() {
  const valores = [
    {
      title: "Calidad",
      icon: ShieldCheck,
      description: "Cuidamos cada detalle para entregar un producto impecable.",
    },
    {
      title: "Innovación",
      icon: Lightbulb,
      description: "Aplicamos diseño y tecnología para mejorar continuamente.",
    },
    {
      title: "Compromiso",
      icon: Target,
      description: "Cumplimos con tiempos, atención y expectativas.",
    },
    {
      title: "Confianza",
      icon: Eye,
      description:
        "Creamos relaciones sólidas y transparentes con nuestros clientes.",
    },
    {
      title: "Pasión por el diseño",
      icon: Brush,
      description: "Creemos en el poder visual para transformar una marca.",
    },
    {
      title: "Atención personalizada",
      icon: Sparkles,
      description:
        "Nos adaptamos a cada cliente para brindar soluciones únicas y efectivas.",
    },
  ];

  return (
    <div className="py-5">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl md:text-4xl font-semibold font-serif uppercase tracking-widest text-white/90 my-10"
      >
        Nuestros Valores
      </motion.h2>

      <div className="space-y-16 border-l border-white/20 pl-6">
        {valores.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-9 top-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
              <item.icon className="w-4 h-4 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-white/70">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
