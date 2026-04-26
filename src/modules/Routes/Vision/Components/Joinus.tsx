import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Particles from "@/components/Particles";

export default function Joinus() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#09090B]">
      {/* Dense golden particles for CTA climax */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles
          particleCount={60}
          particleSpread={6}
          speed={0.05}
          particleColors={["#F59E0B", "#FBBF24", "#F97316"]}
          alphaParticles
          particleBaseSize={100}
          sizeRandomness={0.6}
          cameraDistance={20}
          disableRotation={false}
          moveParticlesOnHover={false}
        />
      </div>

      {/* Centered amber glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-yellow-500/8 blur-[140px] pointer-events-none" />

      <div className="relative z-10 py-24 px-6 md:px-16 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-rajdhani uppercase tracking-widest text-yellow-500 text-sm mb-4">Construyamos juntos</p>
          <h2 className="font-audiowide font-extralight text-4xl md:text-5xl text-white leading-tight mb-6">
            Únete a nuestro{" "}
            <span style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24, #F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              viaje
            </span>
          </h2>
          <p className="font-poppins text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Sé parte del futuro que estamos construyendo. Juntos podemos transformar
            tu visión en una etiqueta que habla por tu marca.
          </p>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/contactus")}
            className="cursor-pointer group inline-flex items-center gap-2.5 bg-yellow-500 hover:bg-yellow-400 text-black font-poppins font-bold px-8 py-4 rounded-xl transition-colors duration-300 text-base shadow-[0_0_30px_rgba(234,179,8,0.35)] hover:shadow-[0_0_50px_rgba(234,179,8,0.55)]"
          >
            <MessageCircle className="h-4 w-4" />
            Contáctanos ahora
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
