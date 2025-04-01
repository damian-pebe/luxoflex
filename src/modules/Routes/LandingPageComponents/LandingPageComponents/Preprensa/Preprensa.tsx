import {
  CheckCircle,
  Phone,
  ArrowRight,
  Clock,
  Shield,
  Award,
  Star,
  TrendingUp,
} from "lucide-react";
import { grabados } from "@/const";
import { Button } from "@/components/ui/button";
import { Whatsapp } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import React from "react";
import CountUp from "@/components/reactbits/count_up";
import { useInView } from "react-intersection-observer";
import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";
export default function Preprensa() {
  const stats = [
    {
      value: 98,
      value2: "%",
      label: "Satisfacción del cliente",
      icon: <Star className="h-8 w-8 text-yellow-400" />,
      color: "from-yellow-400 to-yellow-600",
      description: "YoY Growth +12.4%",
      trend: "up",
    },
    {
      value: 24,
      value2: "h",
      label: "Tiempo de respuesta",
      icon: <Clock className="h-8 w-8 text-blue-400" />,
      color: "from-blue-400 to-blue-600",
      description: "Last 30 days",
      trend: "up",
    },
    {
      value: 15,
      value2: "+",
      label: "Años de experiencia",
      icon: <Award className="h-8 w-8 text-purple-400" />,
      color: "from-purple-400 to-purple-600",
      description: "Q1 2025",
      trend: "up",
    },
    {
      value: 1000,
      value2: "+",
      label: "Proyectos completados",
      icon: <Shield className="h-8 w-8 text-green-400" />,
      color: "from-green-400 to-green-600",
      description: "Daily average",
      trend: "up",
    },
  ];

  return (
    <div className="bg-black py-8">
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-black/95 text-white overflow-hidden ">
        <ThreeDotsBlack top={true}/>

        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-blue-500/20"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${
                    Math.random() * 10 + 10
                  }s linear infinite`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto py-16 px-6 lg:px-8 relative">
          {/* Header with animated gradient text */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-dancing  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 pb-3 tracking-widest"
            >
              Preprensa Digital
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl pt- leading-relaxed font-poppins text-gray-200 max-w-4xl mx-auto"
            >
              <span className=" text-blue-400">LUXOFLEX</span> lleva tu visión
              al siguiente nivel con nuestra tecnología de preprensa digital de
              vanguardia.
            </motion.p>
          </div>

          {/* Main content with animation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-8 pb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl leading-relaxed font-poppins text-gray-300">
                En <span className="font-bold text-white">LUXOFLEX</span>,
                nuestra preprensa digital garantiza que cada proyecto de
                impresión alcance su{" "}
                <span className=" text-gray-200">máximo potencial</span>.
                Utilizamos tecnología avanzada para optimizar archivos, ajustar
                colores y asegurar que cada detalle esté perfectamente preparado
                antes de la impresión de grabados.
              </p>

              <ul className="space-y-6">
                {[
                  "Optimización de archivos y resolución perfecta",
                  "Ajuste profesional de color para resultados vibrantes",
                  "Control de calidad exhaustivo en cada etapa",
                  "Pruebas digitales precisas antes de producción",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center text-lg font-mono text-gray-300"
                  >
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-800 mr-4 shadow-lg">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center space-x-4 pt-6"
              >
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 text-lg  py-6 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1"
                  onClick={() => (window.location.href = "tel:+52")}
                >
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg  py-6 px-8 rounded-xl transition-all duration-300 hover:-translate-y-1"
                  onClick={() => (window.location.href = "https://wa.me/+52")}
                >
                  <Whatsapp className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-2 bg-white/10 rounded-lg opacity-30 blur-xl"></div>
              <div className="relative">
                <img
                  src={grabados}
                  className="w-full h-full object-cover rounded-tl-3xl rounded-tr-sm rounded-bl-3xl rounded-br-3xl shadow-2xl transform hover:-translate-y-2 transition-all duration-500 z-10"
                  alt="Preprensa Digital de Alta Calidad"
                />
                <div className="hidden sm:block absolute bottom-6 right-6 p-6 bg-black/70 rounded-2xl text-white backdrop-blur-md shadow-xl border border-gray-800 transform transition-all duration-300 max-w-sm z-20 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-white">
                    ¿Necesitas ayuda con tu diseño?
                  </h3>
                  <div className="flex items-center space-x-3 mt-3">
                    <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
                      <span className="text-xl font-bold">TP</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">
                        Tomas Perez
                      </p>
                      <p className="text-gray-400">+15 años de experiencia</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-4">
                    <div className="flex space-x-4">
                      <div
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                        onClick={() => (window.location.href = "tel:+52")}
                      >
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                        onClick={() =>
                          (window.location.href = "https://wa.me/+52")
                        }
                      >
                        <Whatsapp className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <Button
                      variant="default"
                      className="bg-white hover:bg-gray-200 rounded-xl text-black font-medium px-5 py-3 transition-all duration-300 hover:-translate-y-1"
                      onClick={() => (window.location.href = "tel:+52")}
                    >
                      Contactar Ahora
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-zinc-900 rounded-xl"
          >
            {stats.map((stat, index) => {
              const { ref, inView } = useInView({
                threshold: 0.1,
                triggerOnce: false,
              });
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group relative bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
                >
                  {/* Subtle gradient glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}
                  ></div>

                  <div className="relative z-10 p-6">
                    {/* Top section with label and icon */}
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                          {stat.label}
                        </div>

                        <div className="flex flex-row items-center gap-2">
                          <CountUp
                            from={0}
                            to={stat.value}
                            separator=","
                            direction="up"
                            duration={2}
                            className="count-up-text text-3xl font-bold text-white"
                            startWhen={inView}
                          />
                          <div className="text-3xl font-bold text-white">
                            {stat.value2}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}
                      >
                        {React.cloneElement(stat.icon, {
                          className:
                            "transition-transform duration-700 group-hover:rotate-[360deg]",
                          size: 28,
                          color: "white",
                        })}
                      </div>
                    </div>

                    {/* Description with accent border */}
                    <div className="flex flex-col mt-4 pt-4">
                      <motion.div
                        className="w-full border-t border-gray-700"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "100%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                      <div className="flex items-center mt-4">
                        <div className="text-sm text-gray-300 font-medium">
                          {stat.description}
                        </div>
                        {stat.trend === "up" && (
                          <div className="ml-auto flex items-center text-emerald-400 text-sm font-medium">
                            <TrendingUp size={16} className="mr-1" />
                            <span>+4.3%</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line with gradient */}
                  <div
                    className={`h-1 w-full bg-gradient-to-r group-hover:bg-gradient-to-l group-hover:animate-fadeinleft1s transition-all duration-1000 ${stat.color}`}
                  ></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <ThreeDotsBlack />
    </div>
  );
}
