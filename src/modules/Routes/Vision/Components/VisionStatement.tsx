import { motion } from "framer-motion";
import { Award, CircuitBoard, Leaf, Star, Zap } from "lucide-react";
import { background, grabados, luxoImage5 } from "@/const";

const stats = [
  { icon: Award, value: "15+", label: "Años de experiencia" },
  { icon: Zap, value: "999+", label: "Proyectos entregados" },
  { icon: Star, value: "98%", label: "Clientes satisfechos" },
];

const horizons = [
  {
    icon: CircuitBoard,
    title: "Tecnología aplicada",
    copy: "Mejor control de color, acabados y procesos para etiquetas más consistentes.",
  },
  {
    icon: Star,
    title: "Presencia de marca",
    copy: "Diseños que ayudan a competir en anaquel sin perder claridad ni función.",
  },
  {
    icon: Leaf,
    title: "Producción responsable",
    copy: "Materiales y decisiones de fabricación con mejor uso de recursos.",
  },
];

export default function VisionStatement() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#09090B]">
      <img
        src={background}
        alt="Interior productivo de Luxoflex"
        className="absolute inset-0 h-full w-full object-cover opacity-28"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/78" />
      <div className="absolute inset-0 bg-linear-to-r from-[#09090B] via-[#09090B]/82 to-[#09090B]/55" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 24% 42%, rgba(245,158,11,0.18), transparent 28%), radial-gradient(circle at 76% 66%, rgba(59,130,246,0.14), transparent 30%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.7fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-5 font-rajdhani text-xs uppercase tracking-[0.32em] text-yellow-400">
            Declaración de futuro
          </p>
          <blockquote className="max-w-4xl font-audiowide text-3xl font-extralight leading-tight text-white md:text-5xl">
            Ser el referente en etiquetas premium en México, donde cada marca
            encuentre una solución visual{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #FBBF24, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              precisa y memorable
            </span>
            .
          </blockquote>
          <p className="mt-7 max-w-2xl font-poppins text-base leading-relaxed text-zinc-400">
            Desde 2009 transformamos ideas en etiquetas que construyen marca.
            Nuestra visión no es crecer por volumen: es crecer con proyectos
            mejor resueltos, mejores materiales y relaciones más duraderas.
          </p>

          <div className="mt-10 grid grid-cols-1 border-y border-white/10 sm:grid-cols-3">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 border-white/10 py-4 sm:border-r sm:px-4 sm:last:border-r-0"
              >
                <Icon className="h-4 w-4 shrink-0 text-yellow-400" />
                <span>
                  <span className="block font-audiowide text-lg font-bold text-white">{value}</span>
                  <span className="block font-poppins text-xs text-zinc-500">{label}</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
            <div className="grid grid-cols-[0.72fr_1fr]">
              <img src={luxoImage5} alt="Etiquetas y materiales Luxoflex" className="h-full min-h-72 object-cover" loading="lazy" />
              <img src={grabados} alt="Rodillo de producción para etiquetas" className="h-full min-h-72 object-cover" loading="lazy" />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-rajdhani text-xs font-bold uppercase tracking-[0.26em] text-yellow-300">
                Horizonte Luxoflex
              </p>
              <p className="mt-2 font-poppins text-sm leading-relaxed text-zinc-300">
                Diseño, técnica y fabricación conectados para que la etiqueta se
                sienta como parte natural del producto.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            {horizons.map(({ icon: Icon, title, copy }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="grid grid-cols-[auto_1fr] gap-4 border-l border-yellow-400/30 bg-white/[0.03] px-4 py-3"
              >
                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg border border-yellow-300/25 bg-yellow-400/10">
                  <Icon className="h-4 w-4 text-yellow-300" />
                </span>
                <span>
                  <span className="block font-rajdhani text-sm font-bold uppercase tracking-[0.18em] text-white">
                    {title}
                  </span>
                  <span className="mt-1 block font-poppins text-xs leading-relaxed text-zinc-500">
                    {copy}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#09090B] to-transparent pointer-events-none" />
    </section>
  );
}
