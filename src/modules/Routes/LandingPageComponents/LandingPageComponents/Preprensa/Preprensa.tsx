import {
  ArrowRight,
  Clock,
  Shield,
  Award,
  Star,
  TrendingUp,
  CheckSquareIcon,
} from "lucide-react";
import { grabados } from "@/const";
import { TelephoneFill, Whatsapp } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import React from "react";
import CountUp from "@/components/reactbits/count_up";
import { useInView } from "react-intersection-observer";
import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";
type Stat = {
  value: number;
  value2: string;
  label: string;
  icon: React.ReactElement;
  color: string;
  description: string;
  trend: string;
};

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  return (
    <motion.div
      key={index}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}></div>
      <div className="relative z-10 p-6">
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
              <div className="text-3xl font-bold text-white">{stat.value2}</div>
            </div>
          </div>
          <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
            {React.cloneElement(stat.icon, {
              className: "transition-transform duration-700 group-hover:rotate-[360deg]",
              size: 28,
              color: "white",
            })}
          </div>
        </div>
        <div className="flex flex-col mt-4 pt-4">
          <motion.div
            className="w-full border-t border-gray-700"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <div className="flex items-center mt-4">
            <div className="text-sm text-gray-300 font-medium">{stat.description}</div>
            {stat.trend === "up" && (
              <div className="ml-auto flex items-center text-emerald-400 text-sm font-medium">
                <TrendingUp size={16} className="mr-1" />
                <span>+4.3%</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`h-1 w-full bg-gradient-to-r group-hover:bg-gradient-to-l group-hover:animate-fadeinleft1s transition-all duration-1000 ${stat.color}`}></div>
    </motion.div>
  );
}

export default function Preprensa() {
  const stats = [
    {
      value: 98,
      value2: "%",
      label: "Satisfacción del cliente",
      icon: <Star className="h-8 w-8 text-yellow-400" />,
      color: "from-yellow-400 to-yellow-600",
      description: "Basado en encuestas a clientes",
      trend: "up",
    },
    {
      value: 24,
      value2: "h",
      label: "Tiempo de respuesta",
      icon: <Clock className="h-8 w-8 text-blue-400" />,
      color: "from-blue-400 to-blue-600",
      description: "Servicio disponible 24/7",
      trend: "up",
    },
    {
      value: 15,
      value2: "+",
      label: "Años de experiencia",
      icon: <Award className="h-8 w-8 text-purple-400" />,
      color: "from-purple-400 to-purple-600",
      description: "En todos nuestros servicios",
      trend: "up",
    },
    {
      value: 999,
      value2: "+",
      label: "Proyectos completados",
      icon: <Shield className="h-8 w-8 text-green-400" />,
      color: "from-green-400 to-green-600",
      description: "Clientes satisfechos",
      trend: "up",
    },
  ];

  return (
    <div className="bg-black py-8">
      <div className="w-full min-h-screen bg-black text-white overflow-hidden ">
        <ThreeDotsBlack top={true} />

        <div className="container mx-auto py-16 px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-lobster  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 pb-3 duration-1000 hover:tracking-widest tracking-wide hover:cursor-crosshair"
            >
              Preprensa Digital
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl pt- leading-relaxed font-poppins text-gray-200 max-w-4xl mx-auto"
            >
              <span className=" text-blue-400 font-bold">LUXOFLEX</span> Lleva
              tu Visión al Siguiente Nivel con Nuestra Tecnología de PREPRENSA
              DIGITAL
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
              <p className="text-xl md:text-2xl leading-relaxed font-poppins font-light text-gray-300">
                En <span className="font-black text-blue-500">LUXOFLEX</span>,
                Nuestra Preprensa Digital Garantiza que Cada Proyecto de
                Impresión Alcance su{" "}
                <span className="uppercase">máximo potencial</span>
                {" \n"}
                Utilizamos Tecnología Avanzada para Optimizar Archivos, Ajustar
                Colores y Asegurar que Cada Detalle esté Perfectamente Preparado
                Antes de su Producción.
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
                    <div className="flex items-center justify-center h-8 w-8 rounded-full mr-4 shadow-lg">
                      <CheckSquareIcon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl duration-1000 hover:tracking-wider hover:cursor-pointer">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center space-x-4 pt-6"
              >
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <div className="animate-slideinup duration-1000 flex w-full">
                    <button
                      onClick={() =>
                        window.open("mailto:ventasluxoflex@gmail.com", "_blank")
                      }
                      className="group w-full flex items-center justify-center gap-x-3 font-poppins bg-white text-black hover:bg-gray-200 text-lg py-4 px-8 rounded-xl shadow-lg transform transition-all duration-700 hover:-translate-y-[5px]"
                    >
                      Solicitar Cotización
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>

                  <div className="animate-slideinup duration-1000 flex w-full">
                    <button
                      onClick={() =>
                        window.open("https://wa.me/523334626001", "_blank")
                      }
                      className="group w-full flex items-center justify-center gap-x-3 font-poppins border-2 border-green-600 font-semibold bg-green-600 text-white px-8 py-4 rounded-full transform hover:-translate-y-[5px] transition-all duration-700 shadow-xl hover:bg-green-700"
                    >
                      <Whatsapp className="h-5 w-5 transition-all duration-500 ease-in-out group-hover:text-white" />
                      <span className="transition-all duration-500 ease-in-out group-hover:text-white">
                        WhatsApp
                      </span>
                    </button>
                  </div>
                </div>
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
                <div className=" absolute bottom-6 right-6 p-6 bg-black/70 rounded-2xl text-white backdrop-blur-md shadow-xl border border-gray-800 transform transition-all duration-300 max-w-sm z-20 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold font-safira text-white">
                    ¿Necesitas ayuda con tu diseño?
                  </h3>
                  <div className="flex items-center space-x-3 mt-3 font-poppins">
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
                        onClick={() =>
                          window.open("tel:+523334626001", "_blank")
                        }
                        className=" hover:cursor-pointer p-3 rounded-full bg-gray-100 hover:bg-teal-100 dark:bg-gray-800 dark:hover:bg-teal-900 transition-all duration-700 transform hover:scale-110"
                      >
                        <TelephoneFill className="h-6 w-6 text-teal-600" />
                      </div>
                      <div
                        onClick={() =>
                          window.open("https://wa.me/523334626001", "_blank")
                        }
                        className="hover:cursor-pointer p-3 rounded-full bg-gray-100 hover:bg-green-100 dark:bg-gray-800 dark:hover:bg-green-900 transition-all duration-700 transform hover:scale-110"
                      >
                        <Whatsapp className="h-6 w-6 text-green-600" />
                      </div>
                    </div>

                    <div className="animate-slideinup duration-1000 flex">
                      <button
                        onClick={() =>
                          window.open("tel:+523334626001", "_blank")
                        }
                        className="group flex items-center gap-x-3 font-poppins bg-white text-black hover:bg-gray-200 text-sm py-2 px-8 rounded-xl shadow-lg transform transition-all duration-700 hover:-translate-y-[5px]"
                      >
                        Contactar Ahora
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-zinc-900 rounded-xl"
          >
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </div>

      <ThreeDotsBlack />
    </div>
  );
}
