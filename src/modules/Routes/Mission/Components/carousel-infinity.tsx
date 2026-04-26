"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { customer1, customer2, customer3, customer4, customer5 } from "@/const";

const AUTOPLAY_MS = 5000;

const testimonials = [
  {
    quote: "LUXOFLEX superó nuestras expectativas con sus etiquetas premium. La calidad de impresión y los acabados metalizados han elevado significativamente la imagen de nuestra marca en el anaquel.",
    name: "Carlos Ramírez",
    title: "Director de Producción",
    company: "Industria de Lujo",
    image: customer1,
  },
  {
    quote: "La tecnología de impresión digital de LUXOFLEX nos permitió crear etiquetas con datos variables y acabados de lujo que nuestros clientes adoran. El sistema de gestión de color es impecable.",
    name: "Ana María González",
    title: "Gerente de Operaciones",
    company: "Sector Cosmético Premium",
    image: customer2,
  },
  {
    quote: "Los acabados holográficos y metalizados de LUXOFLEX han transformado nuestro empaque. La durabilidad es excepcional y el efecto visual que logran con sus técnicas especializadas realmente destaca.",
    name: "Roberto Méndez",
    title: "Gerente de Marca",
    company: "Industria Vinícola Premium",
    image: customer3,
  },
  {
    quote: "La capacidad de LUXOFLEX para combinar efectos táctiles con acabados metalizados nos dio exactamente lo que buscábamos. Su equipo técnico encontró la manera perfecta de materializar nuestra visión.",
    name: "Laura Sánchez",
    title: "Directora de Marketing",
    company: "Sector de Perfumería",
    image: customer4,
  },
  {
    quote: "La línea premium de LUXOFLEX revolucionó nuestra presentación. Sus etiquetas con acabados especiales y efectos visuales únicos nos posicionaron en el segmento de lujo. Calidad consistente en cada pedido.",
    name: "Miguel Ángel Torres",
    title: "Gerente General",
    company: "Bebidas Premium",
    image: customer5,
  },
];

export function InfiniteMovingCardsDemo() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const total = testimonials.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    setActive(idx);
    setProgress(0);
  };
  const prev = () => goTo((active - 1 + total) % total);
  const next = () => goTo((active + 1) % total);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % total);
      setProgress(0);
    }, AUTOPLAY_MS);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [active, paused, total]);

  // Progress bar tick — 60fps smooth
  useEffect(() => {
    if (paused) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      setProgress(Math.min((elapsed / AUTOPLAY_MS) * 100, 100));
      if (elapsed < AUTOPLAY_MS) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, paused]);

  const featured = testimonials[active];
  const side = [
    testimonials[(active + 1) % total],
    testimonials[(active + 2) % total],
  ];

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch">

        {/* Featured testimonial — 3 cols */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:col-span-3 relative rounded-2xl border border-zinc-700 bg-zinc-900/80 p-8 flex flex-col justify-between overflow-hidden"
          >
            {/* Accent line top */}
            <div
              className="absolute top-0 left-8 right-8 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #F59E0B, transparent)" }}
            />

            {/* Large quote mark */}
            <div
              className="font-serif text-8xl leading-none select-none mb-2"
              style={{ color: "rgba(245,158,11,0.12)" }}
            >
              &ldquo;
            </div>

            <blockquote className="flex-1">
              <p className="font-poppins text-white/90 text-lg leading-relaxed mb-8">
                {featured.quote}
              </p>
            </blockquote>

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-4">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500/40 shrink-0"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center shrink-0">
                    <span className="font-rajdhani font-bold text-yellow-400 text-lg">{featured.name.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <p className="font-rajdhani font-bold uppercase tracking-wider text-white text-base">
                    {featured.name}
                  </p>
                  <p className="font-poppins text-zinc-400 text-xs mt-0.5">{featured.title}</p>
                  <p className="font-poppins text-yellow-500/70 text-xs mt-0.5">{featured.company}</p>
                </div>
              </div>

              {/* Nav buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-xl border border-zinc-700 hover:border-yellow-500/50 flex items-center justify-center transition-colors duration-200 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4 text-zinc-400" />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-xl border border-zinc-700 hover:border-yellow-500/50 flex items-center justify-center transition-colors duration-200 cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4 text-zinc-400" />
                </button>
              </div>
            </div>

            {/* Progress bar + dots row */}
            <div className="flex items-center gap-3">
              {/* Progress bar */}
              <div className="flex-1 h-0.5 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-none"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #F59E0B, #FBBF24)",
                  }}
                />
              </div>
              {/* Dot indicators */}
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="cursor-pointer transition-all duration-300"
                    style={{
                      width: i === active ? "20px" : "5px",
                      height: "5px",
                      borderRadius: "3px",
                      background: i === active ? "#F59E0B" : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Side testimonials — 2 cols */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {side.map((t, i) => (
            <motion.div
              key={`${active}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              onClick={() => goTo(testimonials.indexOf(t))}
              className="group flex-1 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 cursor-pointer hover:border-zinc-600 transition-colors duration-300 flex flex-col justify-between"
            >
              <p className="font-poppins text-zinc-400 text-sm leading-relaxed line-clamp-4 mb-5 group-hover:text-zinc-300 transition-colors duration-200">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-zinc-600 shrink-0"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
                    <span className="font-rajdhani text-zinc-400 text-sm">{t.name.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <p className="font-rajdhani font-bold uppercase tracking-wide text-white text-xs">
                    {t.name}
                  </p>
                  <p className="font-poppins text-zinc-500 text-xs">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
