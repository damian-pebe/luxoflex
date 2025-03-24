"use client";
import { useTypewriter } from "@/hooks/useTypewriter";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Cards } from "./Cards";
import { Brain, Rocket, Users } from "lucide-react";
import { background } from "@/const";
import { InfiniteMovingCardsDemo } from "./carousel-infinity";
import { IconMoodHappy } from "@tabler/icons-react";
import Skeleton from "antd/es/skeleton";
export default function Mission() {
  const [isLoading] = useState(false);
  const title = useTypewriter("  Nuestra Misión");
  const subtitle = useTypewriter(" Innovación en Etiquetas Autoadheribles");

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  return (
    <div className="min-h-screen bg-neutral-950 relative overflow-hidden  z-[0]">
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

      <div
        ref={statsRef}
        className="relative z-20 -mt-20 mb-20"
        style={{
          transform: isStatsInView ? "none" : "translateY(100px)",
          opacity: isStatsInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {[
            { icon: Brain, value: "1000+", label: "Diseños Personalizados" },
            { icon: Users, value: "500+", label: "Clientes Satisfechos" },
            { icon: IconMoodHappy, value: "99%", label: "Calidad Garantizada" },
            { icon: Rocket, value: "24/7", label: "Servicio al Cliente" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              className="group backdrop-blur-sm bg-white/10 dark:bg-black/10 p-6 rounded-xl border-2 border-blue-500/20 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex flex-col items-center text-center ">
                <div className="mb-4 text-blue-500 transition-transform duration-500 group-hover:rotate-[360deg]">
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2 group-hover:text-blue-400 transition-colors">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-5">
            {isLoading ? (
            <>
              <div className="space-y-4 w-full">
              <Skeleton className="h-12 w-3/4 mx-auto" />
              <Skeleton className="h-[200px] w-full" />
              </div>
            </>
            ) : (
            <>
              <h3 className="text-5xl text-center font-bungee font-extralight text-gray-200 mb-8">
              Lo que dicen nuestros clientes
              </h3>
              <InfiniteMovingCardsDemo />
            </>
            )}
          <h2 className="w-full font-russo pt-5 flex justify-center  text-5xl md:text-7xl font-bold text-center tracking-widest">
            Lo Que Nos Impulsa
          </h2>
        </div>
        <p className=" text-center text-gray-400 max-w-3xl font-orbitron mx-auto mb-16 animate-fadeIn tracking-wider">
          Nos dedicamos a revolucionar la industria de etiquetas autoadheribles,
          ofreciendo soluciones innovadoras y personalizadas que transforman la
          manera en que nuestros clientes presentan sus productos al mundo.
        </p>
        <Cards />
      </div>

      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute h-full w-full">
          {[...Array(150)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full dark:bg-neutral-400 bg-neutral-900"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                opacity: Math.random() * 0.3 + 0.2,
                animation: `float ${10 + Math.random() * 20}s linear infinite, 
                           pulse ${
                             3 + Math.random() * 2
                           }s ease-in-out infinite`,
                animationDelay: `${-Math.random() * 20}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
