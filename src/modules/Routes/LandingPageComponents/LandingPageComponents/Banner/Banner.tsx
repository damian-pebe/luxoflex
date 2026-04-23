import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";
import { background } from "@/const";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Eye } from "lucide-react";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#09090B] overflow-hidden py-8">
      {/* Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-500/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-violet-600/8 blur-[100px] pointer-events-none" />

      <ThreeDotsBlack top={true} />

      <section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Image col */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-1"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-3xl bg-yellow-500/8 blur-2xl" />

            {/* Gradient border frame */}
            <div
              className="absolute -inset-[1px] rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(234,179,8,0.4) 0%, rgba(139,92,246,0.2) 50%, transparent 100%)",
              }}
            />

            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={background}
                alt="Etiquetas personalizadas Luxoflex"
                className="w-full h-72 md:h-[480px] object-cover"
                loading="lazy"
              />
              {/* Dark overlay on image bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating badge on image */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3">
                <div
                  className="rounded-xl px-4 py-2.5 border border-white/10"
                  style={{ background: "rgba(9,9,11,0.85)", backdropFilter: "blur(16px)" }}
                >
                  <p className="font-poppins text-zinc-400 text-xs mb-0.5">Cliente destacado</p>
                  <p className="font-poppins font-semibold text-white text-sm">La Coculence</p>
                </div>
                {/* Live dot */}
                <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-poppins text-emerald-400 text-xs font-medium">En producción</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content col */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 space-y-6"
          >
            <p className="font-rajdhani uppercase tracking-widest text-yellow-500 text-sm">
              Portafolio de trabajos
            </p>

            <h2 className="font-audiowide font-extralight text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]">
              Etiquetas{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 40%, #F97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Premium
              </span>
              <br />
              <span className="text-zinc-400 font-extralight">Personalizadas</span>
            </h2>

            <p className="font-poppins text-zinc-500 text-base md:text-lg leading-relaxed max-w-md">
              Cada etiqueta que creamos es el resultado de{" "}
              <span className="text-zinc-300">15 años de precisión</span>,
              tecnología avanzada y un compromiso absoluto con la calidad.
            </p>

            {/* Mini stats row */}
            <div className="flex items-center gap-6 py-4 border-y border-zinc-800/60">
              {[
                { value: "999+", label: "Proyectos" },
                { value: "98%", label: "Satisfacción" },
                { value: "24h", label: "Respuesta" },
              ].map(({ value, label }, i) => (
                <div key={i} className="text-center">
                  <div
                    className="font-poppins font-bold text-xl"
                    style={{
                      background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </div>
                  <div className="font-poppins text-zinc-600 text-xs">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => navigate("/pastworks")}
                className="cursor-pointer group flex items-center justify-center gap-2.5 bg-yellow-500 hover:bg-yellow-400 text-black font-poppins font-bold px-8 py-4 rounded-xl transition-all duration-300 text-base shadow-[0_0_30px_rgba(234,179,8,0.25)] hover:shadow-[0_0_50px_rgba(234,179,8,0.4)] hover:-translate-y-0.5"
              >
                <Eye className="h-4 w-4" />
                Ver Portafolio
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => navigate("/contactus")}
                className="cursor-pointer flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-poppins font-medium px-8 py-4 rounded-xl transition-all duration-300 text-base backdrop-blur-sm"
              >
                <MessageCircle className="h-4 w-4" />
                Solicitar diseño
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <ThreeDotsBlack />
    </div>
  );
}
