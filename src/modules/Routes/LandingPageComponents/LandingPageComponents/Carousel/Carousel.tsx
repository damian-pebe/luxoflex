"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle, Layers, ThumbsUp, Printer } from "lucide-react";
import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";
import {
  recepcion_disenios,
  revision_coreccion,
  final_preprensa,
  happy_customer,
  grabados,
} from "@/const";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    id: "recepcion",
    label: "Recepción de Archivos",
    step: "01",
    icon: Upload,
    image: recepcion_disenios,
    description: "Nos aseguramos de recibir y gestionar tus archivos correctamente, evitando problemas desde el inicio del proceso.",
  },
  {
    id: "revision",
    label: "Revisión y Corrección",
    step: "02",
    icon: CheckCircle,
    image: revision_coreccion,
    description: "Nuestro equipo detecta y corrige errores antes de la impresión, garantizando calidad y evitando costosos reprocesos.",
  },
  {
    id: "preparacion",
    label: "Preparación para Impresión",
    step: "03",
    icon: Layers,
    image: final_preprensa,
    description: "Optimizamos la disposición y separación de colores, asegurando una impresión nítida y de alta calidad.",
  },
  {
    id: "aprobacion",
    label: "Aprobación del Cliente",
    step: "04",
    icon: ThumbsUp,
    image: happy_customer,
    description: "Involucramos a nuestros clientes en cada paso, asegurándonos de que el producto final cumpla con sus expectativas.",
  },
  {
    id: "grabados",
    label: "Generación de Grabados",
    step: "05",
    icon: Printer,
    image: grabados,
    description: "Utilizamos tecnología avanzada para la filmación y generación de grabados, garantizando una impresión precisa y profesional.",
  },
];

const AUTO_PLAY_INTERVAL = 3500;
const ITEM_HEIGHT = 72;

// Luxoflex brand blue
const BRAND_BLUE = "#1E40AF";
const BRAND_BLUE_LIGHT = "#3B82F6";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dragStartX = useRef<number>(0);
  const isDragging = useRef(false);

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => setStep((prev) => prev + 1), []);
  const prevStep = useCallback(() => setStep((prev) => prev - 1), []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;
    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;
    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    dragStartX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
    setIsPaused(true);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const endX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? nextStep() : prevStep();
    }
    setIsPaused(false);
  };

  return (
    <div className="relative bg-[#09090B] overflow-hidden py-8">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-blue-600/8 blur-[100px] pointer-events-none" />

      <ThreeDotsBlack top={true} />

      <section className="relative py-10 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="font-rajdhani uppercase tracking-widest text-blue-400 text-sm mb-4">
            Nuestro proceso
          </p>
          <h2 className="font-audiowide font-extralight text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Garantizamos{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3B82F6, #60A5FA, #93C5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Excelencia
            </span>
          </h2>
          <p className="mt-4 font-poppins text-zinc-500 text-base max-w-xl mx-auto leading-relaxed">
            Cada paso diseñado para que tu producto final sea perfecto — desde el archivo hasta el grabado.
          </p>
        </motion.div>

        {/* Feature Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-6xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] flex flex-col lg:flex-row min-h-125 lg:aspect-16/7 border border-zinc-800">

            {/* Left panel — deep blue */}
            <div
              className="w-full lg:w-[42%] min-h-[320px] md:min-h-[420px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-14 lg:pl-14"
              style={{ background: `linear-gradient(160deg, #1E3A8A 0%, #1D4ED8 60%, #2563EB 100%)` }}
            >
              {/* Fade edges */}
              <div className="absolute inset-x-0 top-0 h-16 lg:h-20 bg-gradient-to-b from-[#1E3A8A] via-[#1E3A8A]/70 to-transparent z-40 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-16 lg:h-20 bg-gradient-to-t from-[#1D4ED8] via-[#1D4ED8]/70 to-transparent z-40 pointer-events-none" />

              {/* Subtle inner glow */}
              <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 30% 50%, #60A5FA 0%, transparent 60%)" }} />

              <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
                {FEATURES.map((feature, index) => {
                  const isActive = index === currentIndex;
                  const distance = index - currentIndex;
                  const wrappedDistance = wrap(
                    -(FEATURES.length / 2),
                    FEATURES.length / 2,
                    distance
                  );
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.id}
                      style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                      animate={{
                        y: wrappedDistance * ITEM_HEIGHT,
                        opacity: 1 - Math.abs(wrappedDistance) * 0.28,
                      }}
                      transition={{ type: "spring", stiffness: 90, damping: 22, mass: 1 }}
                      className="absolute flex items-center justify-start"
                    >
                      <button
                        onClick={() => handleChipClick(index)}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className={cn(
                          "relative flex items-center gap-3 px-5 md:px-8 lg:px-7 py-3.5 rounded-full transition-all duration-500 text-left border",
                          isActive
                            ? "bg-white text-blue-700 border-white/90 shadow-lg shadow-blue-900/30 z-10"
                            : "bg-white/10 text-white/60 border-white/15 hover:border-white/35 hover:text-white/90 hover:bg-white/15"
                        )}
                      >
                        <div className={cn(
                          "flex items-center justify-center flex-shrink-0 transition-colors duration-500",
                          isActive ? "text-blue-600" : "text-white/50"
                        )}>
                          <Icon size={17} strokeWidth={2} />
                        </div>
                        <span className={cn(
                          "font-poppins font-medium text-[13px] tracking-wide whitespace-nowrap uppercase",
                          isActive ? "text-blue-800" : "text-inherit"
                        )}>
                          {feature.step} · {feature.label}
                        </span>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right panel — image cards */}
            <div
              className="flex-1 min-h-[460px] md:min-h-[560px] lg:h-full relative bg-zinc-950 flex items-center justify-center py-14 md:py-20 lg:py-14 px-6 md:px-10 lg:px-8 overflow-hidden border-t lg:border-t-0 lg:border-l border-zinc-800 cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onMouseLeave={(e) => { if (isDragging.current) handleDragEnd(e); }}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
              onDragStart={(e) => e.preventDefault()}
            >
              <div className="relative w-full max-w-[400px] aspect-[4/5] flex items-center justify-center">
                {FEATURES.map((feature, index) => {
                  const status = getCardStatus(index);
                  const isActive = status === "active";
                  const isPrev = status === "prev";
                  const isNext = status === "next";

                  return (
                    <motion.div
                      key={feature.id}
                      initial={false}
                      animate={{
                        x: isActive ? 0 : isPrev ? -110 : isNext ? 110 : 0,
                        scale: isActive ? 1 : isPrev || isNext ? 0.82 : 0.65,
                        opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                        rotate: isPrev ? -4 : isNext ? 4 : 0,
                        zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                      transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.8 }}
                      className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-4 md:border-[6px] border-zinc-900 bg-zinc-900 origin-center"
                    >
                      <img
                        src={feature.image}
                        alt={feature.label}
                        draggable={false}
                        className={cn(
                          "w-full h-full object-cover transition-all duration-700 pointer-events-none",
                          isActive ? "grayscale-0" : "grayscale brightness-50"
                        )}
                      />

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute inset-x-0 bottom-0 p-8 pt-28 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end pointer-events-none"
                          >
                            <div
                              className="px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] w-fit mb-3 border"
                              style={{
                                background: "rgba(30,64,175,0.85)",
                                borderColor: "rgba(96,165,250,0.4)",
                                color: "#93C5FD",
                              }}
                            >
                              {feature.step} · {feature.label}
                            </div>
                            <p className="text-white font-normal text-lg md:text-xl leading-snug drop-shadow-md tracking-tight">
                              {feature.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className={cn(
                        "absolute top-6 left-6 flex items-center gap-2.5 transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0"
                      )}>
                        <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60A5FA]" />
                        <span className="text-white/70 text-[10px] font-normal uppercase tracking-[0.25em] font-mono">
                          En proceso
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Drag hint */}
          <p className="text-center text-zinc-600 text-xs mt-4 font-poppins tracking-wide">
            Arrastrá o hacé clic en un paso para navegar
          </p>
        </motion.div>
      </section>

      <ThreeDotsBlack />
    </div>
  );
}

export default FeatureCarousel;
