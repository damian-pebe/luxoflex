import { ThreeDotsWhite } from "@/components/ReusableIcons/ReusableIcons";
import { motion } from "framer-motion";

export default function LookingFor() {
  const steps = [
    "Convertimos tus ideas en realidad",
    "Diseñamos con precisión",
    "Imprimimos con calidad",
    "Entregamos excelencia",
  ];

  return (
    <section className="relative py-12 px-6 bg-[#f0e3e3] text-black">
      <ThreeDotsWhite top={true} />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center font-rajdhani text-4xl md:text-5xl font-bold tracking-wide uppercase pt-10"
      >
        Nuestro Enfoque
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.7 }}
            className="group bg-white rounded-2xl p-6 text-center hover:shadow-purple-600 hover:shadow-2xl border border-zinc-200 cursor-crosshair transition-shadow duration-700 "
          >
            <div className="text-xl font-semibold mb-2">{step}</div>
            <div className="w-6 h-1 mx-auto bg-purple-400 rounded-full mt-2 transition-all duration-500 group-hover:w-20" />
          </motion.div>
        ))}
      </div>

      <div className="mt-24">
        <ThreeDotsWhite />
      </div>
    </section>
  );
}
