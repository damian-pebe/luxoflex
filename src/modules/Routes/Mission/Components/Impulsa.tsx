import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, Target, Eye, Leaf, Handshake, ArrowUpRight, MessageCircle } from "lucide-react";
import { InfiniteMovingCardsDemo } from "./carousel-infinity";
import { useNavigate } from "react-router-dom";

// Two hero/bento feature cards with real images
const featuredPillars = [
  {
    title: "Nuestra Visión",
    description: "Ser líderes en la industria de etiquetas autoadheribles, con soluciones innovadoras que superen las expectativas de nuestros clientes en cada proyecto.",
    icon: Eye,
    accent: "#F59E0B",
    img: "https://images.pexels.com/photos/13741245/pexels-photo-13741245.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgAlt: "Empaque premium con etiquetas vibrantes de Luxoflex",
  },
  {
    title: "Nuestros Servicios",
    description: "Etiquetas flexográficas, mangas termocontraíbles para tequila y vino, y preprensa profesional con tecnología de punta.",
    icon: Target,
    accent: "#3B82F6",
    img: "https://images.pexels.com/photos/5532716/pexels-photo-5532716.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgAlt: "Sistema automatizado de etiquetado industrial",
  },
];

// Regular 6 info cards
const pillars = [
  { title: "Quiénes Somos",         description: "Empresa especializada en fabricación de etiquetas de alta calidad con más de 15 años sirviendo a diversas industrias.",      icon: ShieldCheck, accent: "#F59E0B" },
  { title: "Calidad Garantizada",    description: "Materiales premium y tecnología de vanguardia para garantizar etiquetas duraderas con excelente acabado.",                   icon: ShieldCheck, accent: "#3B82F6" },
  { title: "Innovación Continua",    description: "Actualizamos procesos y materiales constantemente para ofrecer soluciones modernas al mercado.",                             icon: Lightbulb,   accent: "#F59E0B" },
  { title: "Sustentabilidad",        description: "Comprometidos con el medio ambiente, ofrecemos opciones eco-amigables y procesos de producción responsables.",               icon: Leaf,        accent: "#3B82F6" },
  { title: "Alianzas Estratégicas",  description: "Desarrollamos relaciones comerciales duraderas, siendo el socio confiable que tu empresa necesita.",                         icon: Handshake,   accent: "#F59E0B" },
  { title: "Contáctanos",            description: "Permítenos asesorarte para encontrar la mejor solución en etiquetas para tu negocio. ¡Solicita una cotización hoy!",        icon: MessageCircle, accent: "#3B82F6" },
];

export default function Impulsa() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#09090B] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-zinc-800 pointer-events-none" />

      {/* Testimonials */}
      <section aria-labelledby="testimonios-heading" className="relative z-10 py-16 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="font-rajdhani uppercase tracking-widest text-yellow-500 text-sm mb-3">Nuestros clientes hablan</p>
          <h2 id="testimonios-heading" className="font-audiowide font-extralight text-4xl md:text-5xl text-white leading-tight">
            Lo que dicen{" "}
            <span style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24, #F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              nuestros clientes
            </span>
          </h2>
        </motion.div>
        <InfiniteMovingCardsDemo />
      </section>

      {/* Mission pillars */}
      <section aria-labelledby="impulsa-heading" className="relative z-10 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <p className="font-rajdhani uppercase tracking-widest text-yellow-500 text-sm mb-3">Por qué existimos</p>
            <h2 id="impulsa-heading" className="font-audiowide font-extralight text-4xl md:text-5xl text-white leading-tight">
              Lo que nos{" "}
              <span style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24, #F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                impulsa
              </span>
            </h2>
          </motion.div>

          {/* Bento row — 2 large feature cards with images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {featuredPillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-sm hover:border-zinc-600 transition-colors duration-300 overflow-hidden flex flex-col"
                style={{ minHeight: "320px" }}
              >
                {/* Corner squares */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="absolute -left-1.5 -top-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -right-1.5 -top-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -left-1.5 -bottom-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -right-1.5 -bottom-1.5 h-3 w-3" style={{ background: item.accent }} />
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, ${item.accent}20, transparent 40%, rgba(24,24,27,0.95) 100%)` }} />
                  <img
                    src={item.img}
                    alt={item.imgAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-sm" style={{ background: `${item.accent}25` }}>
                      <item.icon className="h-4 w-4" style={{ color: item.accent }} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex-1">
                  <div className="pointer-events-none absolute inset-0 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${item.accent}06, transparent 60%)` }} />
                  <h3 className="font-rajdhani font-bold uppercase tracking-wider text-white text-lg mb-2 group-hover:text-yellow-100 transition-colors duration-200 relative z-10">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-zinc-500 text-sm leading-relaxed relative z-10">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }} />
              </motion.div>
            ))}
          </div>

          {/* Regular 6 info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-600 transition-colors duration-300 overflow-visible"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -left-1.5 -top-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -right-1.5 -top-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -left-1.5 -bottom-1.5 h-3 w-3" style={{ background: item.accent }} />
                  <div className="absolute -right-1.5 -bottom-1.5 h-3 w-3" style={{ background: item.accent }} />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${item.accent}08, transparent 60%)` }} />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-zinc-700 group-hover:border-zinc-500 transition-colors duration-300 mb-4"
                    style={{ background: `${item.accent}12` }}>
                    <item.icon className="h-5 w-5" style={{ color: item.accent }} />
                  </div>
                  <h3 className="font-rajdhani font-bold uppercase tracking-wide text-white text-base mb-2 group-hover:text-yellow-100 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }} />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
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
              onClick={() => navigate("/contactus")}
              className="cursor-pointer group flex items-center gap-2.5 bg-yellow-500 hover:bg-yellow-400 text-black font-poppins font-bold px-8 py-4 rounded-xl transition-colors duration-300 text-base shadow-[0_0_30px_rgba(234,179,8,0.35)] hover:shadow-[0_0_50px_rgba(234,179,8,0.55)]"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar cotización
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
