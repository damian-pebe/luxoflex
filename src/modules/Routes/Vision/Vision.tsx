"use client"
import '../../../index.css'
import { useTypewriter } from "@/hooks/useTypewriter"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {  Eye, Lightbulb, Target, Rocket } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import background from "@/assets/background.jpg"
import { useNavigate } from 'react-router-dom'

export default function VisionPage() {
  const title = useTypewriter(" Nuestra Visión del Futuro");
  const subtitle = useTypewriter(" Construyendo el mañana, hoy");
const navigate = useNavigate()

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
            <span className="animate-blink">|</span>
          </h1>
          <p className="text-xl text-gray-300 font-audiowide">
            {subtitle}
            <span className="animate-blink">|</span>
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto mt-12">
        <section 
          ref={principlesRef}
          style={{
            transform: isPrinciplesInView ? "none" : "translateX(-200px)",
            opacity: isPrinciplesInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 font-vt323 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Nuestros Principios Fundamentales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovación", icon: Lightbulb, description: "Impulsando los límites y explorando nuevas fronteras tecnológicas." },
              { title: "Impacto", icon: Target, description: "Creando cambios significativos en el mundo digital." },
              { title: "Visión", icon: Eye, description: "Comprensión profunda de los desafíos tecnológicos actuales." },
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
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 font-vt323 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Nuestro Camino
          </h2>
          <div className="space-y-8">
            {[
              { year: "2024", milestone: "Lanzamiento de nuestros servicios innovadores" },
              { year: "2025", milestone: "Expansión a nuevos mercados latinoamericanos" },
              { year: "2026", milestone: "Consolidación como líder en soluciones tecnológicas" },
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
                  <div className="ml-4 text-lg text-gray-300">{item.milestone}</div>
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
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-8 font-vt323 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Únete a Nuestro Viaje
          </h2>
          <p className="mb-8 text-xl text-gray-400">
            Sé parte del futuro que estamos creando. Juntos, podemos convertir esta visión en realidad.
          </p>
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className="px-5 py-3 border-none text-lg text-white rounded-lg tracking-[4px] font-bold uppercase transition-all duration-500 bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-[0_0_5px_rgb(0,140,255),0_0_25px_rgb(0,140,255),0_0_50px_rgb(0,140,255),0_0_100px_rgb(0,140,255)] flex items-center gap-2"
              onClick={() => navigate('/contactus')}
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
  )
}

