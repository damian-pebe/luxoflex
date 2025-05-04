// import { background } from "@/const";
// import { Check, Award, Users, TrendingUp, Heart } from "lucide-react";

// export default function VisionModule() {
//   return (
//     <div className="bg-[#0f0f0f] text-[#d4d4d4] font-sans">
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src={background}
//             alt="Luxoflex Vision"
//             className="object-cover w-full h-full opacity-30"
//           />
//           <div className="absolute inset-0 bg-black/40"></div>
//         </div>
//         <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
//           <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-6">
//             Nuestra Visión
//           </h1>
//           <p className="text-lg md:text-xl text-[#aaa] leading-relaxed">
//             Redefiniendo la excelencia en etiquetas desde 2015
//           </p>
//         </div>
//       </section>

//       <section className="max-w-6xl mx-auto px-4 py-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
//               Nuestra Historia
//             </h2>
//             <p className="mb-4 text-[#aaa] leading-relaxed">
//               Fundada en 2018, nuestra empresa nació con la visión de crear
//               productos que respetan tanto a las personas como al planeta. Lo
//               que comenzó como un pequeño taller artesanal se ha convertido en
//               una marca reconocida por su compromiso con la calidad y la
//               sostenibilidad.
//             </p>
//             <p className="text-[#aaa] leading-relaxed">
//               Cada producto que creamos cuenta una historia de dedicación,
//               investigación y pasión por los ingredientes naturales. Nuestra
//               filosofía se basa en la transparencia y en ofrecer alternativas
//               que mejoran la vida cotidiana sin comprometer el futuro.
//             </p>
//           </div>
//           <div className="relative aspect-square">
//             <img
//               src={background}
//               alt="Nuestra historia"
//               width={600}
//               height={600}
//               className="object-cover rounded-lg shadow-md shadow-black/20"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#1c1c1c] py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center tracking-wide">
//             Nuestro Camino
//           </h2>
//           <div className="space-y-20">
//             {["2018", "2019", "2020", "2021", "2022", "2023"].map((year, i) => (
//               <div key={year} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
//                 <div className="md:col-span-3 text-right md:pr-8">
//                   <h3 className="text-2xl font-serif text-[#bfa888]">{year}</h3>
//                 </div>
//                 <div className="md:col-span-1 flex justify-center">
//                   <div className="h-full w-px bg-[#444] relative">
//                     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#bfa888]"></div>
//                   </div>
//                 </div>
//                 <div className="md:col-span-8 space-y-2">
//                   <h4 className="text-xl font-medium text-[#f0f0f0]">
//                     {[
//                       "Fundación",
//                       "Expansión",
//                       "Innovación",
//                       "Reconocimiento",
//                       "Crecimiento",
//                       "Presente"
//                     ][i]}
//                   </h4>
//                   <p className="text-[#bbb] leading-relaxed">
//                     {[
//                       "Comenzamos nuestro viaje con una pequeña colección de productos artesanales, enfocados en ingredientes locales y procesos sostenibles.",
//                       "Ampliamos nuestra línea de productos y comenzamos a colaborar con agricultores locales para asegurar ingredientes de la más alta calidad.",
//                       "A pesar de los desafíos globales, desarrollamos nuevas fórmulas y mejoramos nuestros procesos de producción para reducir nuestra huella ambiental.",
//                       "Recibimos nuestro primer premio de sostenibilidad y ampliamos nuestra presencia en el mercado internacional.",
//                       "Inauguramos nuestro nuevo centro de producción con certificación ecológica y lanzamos nuestra línea premium de productos.",
//                       "Hoy, continuamos innovando y expandiendo nuestra visión de un mundo más natural y sostenible, con presencia en más de 15 países."
//                     ][i]}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="max-w-6xl mx-auto px-4 py-24">
//         <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center tracking-wide">
//           Nuestros Valores
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {[{ icon: <Heart size={24} />, title: "Pasión", desc: "Amamos lo que hacemos y ponemos nuestro corazón en cada producto que creamos." }, { icon: <Check size={24} />, title: "Calidad", desc: "No comprometemos la calidad. Cada producto cumple con los más altos estándares." }, { icon: <Users size={24} />, title: "Comunidad", desc: "Creemos en construir relaciones duraderas con nuestros clientes y proveedores." }, { icon: <TrendingUp size={24} />, title: "Innovación", desc: "Constantemente buscamos nuevas formas de mejorar nuestros productos y procesos." }].map((value, index) => (
//             <div key={index} className="bg-[#1f1f1f] p-10 rounded-xl text-center shadow-md shadow-black/20">
//               <div className="w-12 h-12 rounded-full bg-[#bfa888] text-black flex items-center justify-center mb-4">
//                 {value.icon}
//               </div>
//               <h3 className="text-xl font-serif mb-3 text-[#f0f0f0]">{value.title}</h3>
//               <p className="text-[#bbb] leading-relaxed">{value.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="bg-[#2a3821] text-white py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center tracking-wide">
//             Reconocimientos
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {["Premio Sostenibilidad 2021", "Mejor Producto Natural 2022", "Empresa del Año 2023"].map((title, index) => (
//               <div key={index} className="flex flex-col items-center text-center">
//                 <Award size={48} className="mb-4 text-[#bfa888]" />
//                 <h3 className="text-xl font-serif mb-2">{title}</h3>
//                 <p className="text-[#ddd] max-w-xs">
//                   {[
//                     "Reconocidos por nuestro compromiso con prácticas sostenibles y comercio justo.",
//                     "Nuestra línea de cuidado personal fue reconocida por su calidad e innovación.",
//                     "Destacados por nuestro crecimiento y contribución a la economía local."
//                   ][index]}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="max-w-6xl mx-auto px-4 py-24">
//         <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center tracking-wide">
//           Lo Que Dicen de Nosotros
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {[{
//             quote: "Sus productos han transformado mi rutina diaria. La calidad es incomparable y el compromiso con el medio ambiente es evidente en cada detalle.",
//             name: "María González",
//             title: "Cliente desde 2019"
//           }, {
//             quote: "Como distribuidor, valoro enormemente la consistencia y profesionalismo de esta empresa. Sus productos son siempre los más solicitados por nuestros clientes.",
//             name: "Carlos Rodríguez",
//             title: "Distribuidor Oficial"
//           }].map((t, i) => (
//             <div key={i} className="bg-[#1f1f1f] p-10 rounded-xl shadow-md shadow-black/20">
//               <p className="italic text-[#ccc] mb-4 leading-relaxed">"{t.quote}"</p>
//               <div className="flex items-center">
//                 <div className="w-12 h-12 rounded-full bg-[#dcd8d0] mr-4"></div>
//                 <div>
//                   <h4 className="font-medium text-white">{t.name}</h4>
//                   <p className="text-sm text-[#aaa]">{t.title}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="bg-[#1c1c1c] py-24">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-wide">
//             Sé Parte de Nuestra Historia
//           </h2>
//           <p className="mb-10 text-lg text-[#bbb] leading-relaxed">
//             Descubre nuestros productos y únete a nuestra comunidad comprometida con un futuro más sostenible.
//           </p>
//           <a
//             href="#"
//             className="inline-block bg-[#bfa888] text-black px-10 py-3 rounded-full hover:bg-opacity-90 transition-all"
//           >
//             Explorar Productos
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }
  // 

"use client";
import "../../../index.css";
import { useTypewriter } from "@/hooks/useTypewriter";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Lightbulb, Target, Rocket } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { background } from "@/const";
import { useNavigate } from "react-router-dom";

export default function VisionPage() {
  const title = useTypewriter(" Nuestra Visión del Futuro");
  const subtitle = useTypewriter(" Construyendo el mañana, hoy");
  const navigate = useNavigate();

  const principlesRef = useRef(null);
  const roadmapRef = useRef(null);
  const joinRef = useRef(null);

  const isPrinciplesInView = useInView(principlesRef, { once: true });
  const isRoadmapInView = useInView(roadmapRef, { once: true });
  const isJoinInView = useInView(joinRef, { once: true });

  return (
    <div className="container pb-12 overflow-hidden">
      <div className="relative h-[300px] rounded-b-xl overflow-hidden opacity-0 animate-fadeinbouncedown hover:scale-105 transition-all duration-1000">
        <img
          src={background}
          alt="Imagen de visión"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-audiowide">
            {title}
            <span className="animate-pulse duration-800">|</span>
          </h1>
          <p className="text-xl text-gray-300 font-audiowide">
            {subtitle}
            <span className="animate-pulse duration-800">|</span>
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto mt-12">
        <section
          ref={principlesRef}
          style={{
            transform: isPrinciplesInView ? "none" : "translateX(-200px)",
            opacity: isPrinciplesInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 font-vt323 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Nuestros Principios Fundamentales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovación",
                icon: Lightbulb,
                description:
                  "Impulsando los límites y explorando nuevas fronteras tecnológicas.",
              },
              {
                title: "Impacto",
                icon: Target,
                description:
                  "Creando cambios significativos en el mundo digital.",
              },
              {
                title: "Visión",
                icon: Eye,
                description:
                  "Comprensión profunda de los desafíos tecnológicos actuales.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="animate-flyinleft"
              >
                <Card className="backdrop-blur-sm bg-white/10 dark:bg-black/10 border-2 shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="mr-2 text-blue-500" />
                      </motion.div>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          ref={roadmapRef}
          style={{
            transform: isRoadmapInView ? "none" : "translateX(200px)",
            opacity: isRoadmapInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 font-vt323 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Nuestro Camino
          </h2>
          <div className="space-y-8">
            {[
              {
                year: "2022",
                milestone: "Iniciamos nuestros servicios innovadores",
              },
              {
                year: "2023",
                milestone:
                  "Continuamos con la expansión a nuevos mercados latinoamericanos",
              },
              {
                year: "2024",
                milestone: "Seguimos innovando con nuevos servicios",
              },
              {
                year: "2025",
                milestone:
                  "Esperamos continuar expandiéndonos a nuevos mercados latinoamericanos",
              },
              {
                year: "2026",
                milestone:
                  "Aspiramos a consolidarnos como líderes en soluciones tecnológicas",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.3 }}
                className="animate-flyinright backdrop-blur-sm bg-white/5 dark:bg-black/5 p-6 rounded-lg border-2 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-2xl font-bold mr-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                  >
                    {item.year}
                  </motion.div>
                  <div className="flex-grow border-t border-blue-500/20"></div>
                  <div className="ml-4 text-lg text-gray-300">
                    {item.milestone}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          ref={joinRef}
          style={{
            transform: isJoinInView ? "none" : "translateY(100px)",
            opacity: isJoinInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-8 font-vt323 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Únete a Nuestro Viaje
          </h2>
          <p className="mb-8 text-xl text-gray-400">
            Sé parte del futuro que estamos creando. Juntos, podemos convertir
            esta visión en realidad.
          </p>
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                className="px-5 py-3 border-none text-lg text-white rounded-lg tracking-[4px] font-bold uppercase transition-all duration-500 bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-[0_0_5px_rgb(0,140,255),0_0_25px_rgb(0,140,255),0_0_50px_rgb(0,140,255),0_0_100px_rgb(0,140,255)] flex items-center gap-2"
                onClick={() => navigate("/contactus")}
              >
                Participa con Nosotros
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Rocket className="w-5 h-5" />
                </motion.div>
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
