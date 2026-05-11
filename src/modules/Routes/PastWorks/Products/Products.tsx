import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers3, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { materialLibrary, type MaterialCardData } from "../pastWorksData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
});

const materialShapes = [
  "rounded-[1.35rem] rounded-tr-[3rem] md:rounded-[1.65rem] md:rounded-tr-[4rem]",
  "rounded-[1.35rem] rounded-bl-[3rem] md:rounded-[1.65rem] md:rounded-bl-[4rem]",
  "rounded-[1.3rem] rounded-br-[2.75rem] md:rounded-[1.55rem] md:rounded-br-[3.5rem]",
  "rounded-[1.3rem] rounded-tl-[2.75rem] md:rounded-[1.55rem] md:rounded-tl-[3.5rem]",
  "rounded-[1.35rem] rounded-br-[3rem] md:rounded-[1.65rem] md:rounded-br-[4rem]",
  "rounded-[1.3rem] rounded-tl-[3rem] md:rounded-[1.6rem] md:rounded-tl-[4rem]",
];

const getPatternClass = (classes: string[], index: number) =>
  classes[index % classes.length];

const materialLayouts = [
  "sm:col-span-1 md:col-span-3",
  "sm:col-span-1 md:col-span-3",
  "sm:col-span-1 md:col-span-2",
  "sm:col-span-1 md:col-span-2",
  "sm:col-span-1 md:col-span-2",
  "sm:col-span-2 md:col-span-4",
  "sm:col-span-1 md:col-span-2",
  "sm:col-span-1 md:col-span-3",
  "sm:col-span-1 md:col-span-3",
];

const clampIndex = (index: number, length: number) =>
  Math.max(0, Math.min(length - 1, index));

function useMobileCarouselMetrics(maxWidth: number) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(maxWidth);

  useEffect(() => {
    const updateWidth = () => {
      const viewportWidth =
        viewportRef.current?.clientWidth || window.innerWidth || maxWidth;
      setCardWidth(Math.min(viewportWidth * 0.84, maxWidth));
    };

    updateWidth();
    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateWidth)
        : null;

    if (viewportRef.current) {
      resizeObserver?.observe(viewportRef.current);
    }

    window.addEventListener("resize", updateWidth);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, [maxWidth]);

  return {
    viewportRef,
    cardWidth,
    peekOffset: cardWidth * 0.72,
  };
}

export default function Products() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 pb-24 text-white md:px-10">
      <div className="relative mx-auto max-w-7xl border-t border-white/10 pt-20">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p
              {...fadeUp(0)}
              className="mb-3 inline-flex items-center gap-2 font-rajdhani text-sm font-semibold uppercase tracking-[0.32em] text-blue-300"
            >
              <Layers3 className="h-4 w-4" />
              Materiales
            </motion.p>
            <motion.h2
              {...fadeUp(0.05)}
              className="max-w-3xl font-audiowide text-4xl font-extralight leading-tight text-white md:text-6xl"
            >
              Texturas, bases y acabados
            </motion.h2>
          </div>
          <motion.p
            {...fadeUp(0.1)}
            className="max-w-sm font-poppins text-sm leading-relaxed text-zinc-500 md:text-right"
          >
            Una vista rapida de los materiales que sostienen cada etiqueta.
          </motion.p>
        </div>

        <MobileMaterialsCarousel />

        <div className="hidden auto-rows-[240px] grid-cols-2 gap-5 sm:grid md:grid-cols-6">
          {materialLibrary.map((material, index) => (
            <MaterialTile
              key={material.title}
              material={material}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileMaterialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { viewportRef, cardWidth, peekOffset } = useMobileCarouselMetrics(380);

  const scrollToIndex = (index: number) => {
    setActiveIndex(clampIndex(index, materialLibrary.length));
  };

  return (
    <div className="sm:hidden">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="font-rajdhani text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">
            Biblioteca completa
          </p>
          <p className="mt-1 font-poppins text-sm font-semibold text-white/80">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(materialLibrary.length).padStart(2, "0")}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:bg-white/10 hover:text-white disabled:opacity-35"
            aria-label="Material anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === materialLibrary.length - 1}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:bg-white/10 hover:text-white disabled:opacity-35"
            aria-label="Siguiente material"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <motion.div
        ref={viewportRef}
        className="-mx-5 overflow-hidden px-5 pb-5"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.16}
        onDragEnd={(_, info) => {
          if (info.offset.x < -54) scrollToIndex(activeIndex + 1);
          if (info.offset.x > 54) scrollToIndex(activeIndex - 1);
        }}
      >
        <div className="relative h-[390px] max-h-[70vh]">
          {materialLibrary.map((material, index) => {
            const offset = index - activeIndex;
            const distance = Math.abs(offset);
            const isActive = offset === 0;

            return (
              <motion.div
                key={material.title}
                className="absolute left-1/2 top-0 h-full"
                onClick={() => {
                  if (!isActive) scrollToIndex(index);
                }}
                style={{
                  width: cardWidth,
                  zIndex: 30 - distance,
                  transformStyle: "preserve-3d",
                  transformOrigin:
                    offset < 0 ? "right center" : "left center",
                }}
                animate={{
                  x: -cardWidth / 2 + offset * peekOffset,
                  y: isActive ? 0 : 12,
                  scale: isActive ? 1 : 0.88,
                  rotateZ: isActive ? 0 : offset < 0 ? -3.5 : 3.5,
                  rotateY: isActive ? 0 : offset < 0 ? 10 : -10,
                  opacity: distance <= 1 ? 1 : distance === 2 ? 0.18 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: isActive ? 520 : 420,
                  damping: isActive ? 32 : 36,
                  mass: 0.74,
                }}
              >
                <MobileMaterialCard material={material} index={index} />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <div className="mt-1 flex justify-center gap-1.5">
        {materialLibrary.map((material, index) => (
          <button
            key={`${material.title}-dot`}
            type="button"
            onClick={() => scrollToIndex(index)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              activeIndex === index
                ? "w-6 bg-white"
                : "w-1.5 bg-white/20 hover:bg-white/45"
            )}
            aria-label={`Ir al material ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function MobileMaterialCard({
  material,
  index,
}: {
  material: MaterialCardData;
  index: number;
}) {
  return (
    <motion.article
      {...fadeUp(index * 0.03)}
      className="group relative isolate h-full overflow-hidden rounded-[1.55rem] rounded-tr-[3.5rem] border border-white/12 bg-zinc-950 shadow-[0_24px_80px_rgba(0,0,0,0.48)]"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <img
          src={material.image}
          alt={material.title}
          className="absolute inset-0 h-full w-full rounded-[inherit] object-cover transition duration-700 group-active:scale-[1.02]"
          loading={index < 2 ? "eager" : "lazy"}
          width="760"
          height="900"
        />
        <div className="absolute inset-0 rounded-[inherit] bg-linear-to-t from-black/88 via-black/24 to-black/8" />
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-80"
          style={{
            boxShadow: `inset 0 -122px 84px -92px ${material.accent}88`,
          }}
        />
        <div className="absolute inset-[1px] rounded-[inherit] border border-white/[0.06]" />
      </div>

      <div className="absolute left-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/42 shadow-lg shadow-black/20 backdrop-blur-md">
        <Sparkles
          className="h-4.5 w-4.5"
          style={{
            color: material.accent,
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        <p className="font-rajdhani text-xs font-semibold uppercase tracking-[0.28em] text-zinc-300">
          {material.subtitle}
        </p>
        <h3 className="mt-2 font-poppins text-[2rem] font-semibold leading-[1.02] text-white">
          {material.title}
        </h3>
        <p className="mt-3 line-clamp-2 font-poppins text-sm leading-relaxed text-zinc-300">
          {material.bestFor}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {material.tags.slice(0, 3).map((tag) => (
            <span
              key={`${material.title}-mobile-${tag}`}
              className="rounded-full border border-white/12 bg-black/34 px-3 py-1.5 font-poppins text-xs text-zinc-200 backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function MaterialTile({
  material,
  index,
}: {
  material: MaterialCardData;
  index: number;
}) {
  const shapeClass = getPatternClass(materialShapes, index);
  const sizeClass = materialLayouts[index % materialLayouts.length];

  return (
    <motion.article {...fadeUp(index * 0.04)} className={cn("min-h-0", sizeClass)}>
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        className={cn(
          "group relative isolate h-full overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_18px_70px_rgba(0,0,0,0.38)] transition-[border-color,box-shadow] duration-500 hover:border-white/20 hover:shadow-[0_26px_96px_rgba(0,0,0,0.56)]",
          shapeClass
        )}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <motion.img
          src={material.image}
          alt={material.title}
          className="absolute inset-0 h-full w-full rounded-[inherit] object-cover"
          variants={{
            rest: {
              scale: 1,
              filter: "saturate(0.96) brightness(0.88)",
              opacity: 0.92,
            },
            hover: {
              scale: 1.025,
              filter: "saturate(1.08) brightness(1.03)",
              opacity: 1,
              transition: { duration: 0.5 },
            },
          }}
          loading="lazy"
          width="760"
          height="460"
        />
        <motion.div
          className="absolute inset-0 bg-linear-to-t from-black/80 via-black/16 to-transparent"
          variants={{
            rest: { opacity: 1 },
            hover: { opacity: 0.74, transition: { duration: 0.45 } },
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-[1px] rounded-[inherit] border border-white/[0.06]"
          variants={{
            rest: { opacity: 0.68 },
            hover: { opacity: 1, transition: { duration: 0.45 } },
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            boxShadow: `inset 0 0 0 1px ${material.accent}55, inset 0 -108px 84px -86px ${material.accent}75`,
          }}
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1, transition: { duration: 0.45 } },
          }}
        />
        <motion.div
          className="absolute inset-x-7 top-0 h-px opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(90deg, transparent, ${material.accent}, transparent)`,
          }}
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1, transition: { duration: 0.45 } },
          }}
        />
        </div>

        <div className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/38 shadow-lg shadow-black/20 backdrop-blur-md transition duration-500 group-hover:bg-black/50">
          <Sparkles
            className="h-4 w-4"
            style={{
              color: material.accent,
            }}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
          <motion.div
            variants={{
              rest: { y: 0 },
              hover: { y: -4, transition: { duration: 0.35 } },
            }}
          >
            <p className="font-rajdhani text-xs font-semibold uppercase tracking-[0.28em] text-zinc-300">
              {material.subtitle}
            </p>
            <h3 className="mt-2 font-poppins text-[1.45rem] font-semibold leading-tight text-white md:text-[1.65rem]">
              {material.title}
            </h3>
          </motion.div>
          <motion.div
            className="mt-3 flex flex-wrap gap-2"
            variants={{
              rest: { opacity: 0, y: 8 },
              hover: { opacity: 1, y: 0, transition: { duration: 0.35 } },
            }}
          >
            {material.tags.slice(0, 3).map((tag) => (
              <span
                key={`${material.title}-${tag}`}
                className="rounded-full border border-white/12 bg-black/30 px-3 py-1.5 font-poppins text-xs text-zinc-200 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  );
}
