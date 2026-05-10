import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Images,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { portfolioCases, type PortfolioCase } from "../../pastWorksData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.65,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
});

const showcaseShapes = [
  "rounded-[1.45rem] rounded-tr-[3.5rem] md:rounded-[1.75rem] md:rounded-tr-[4.5rem]",
  "rounded-[1.45rem] rounded-bl-[3.5rem] md:rounded-[1.75rem] md:rounded-bl-[4.5rem]",
  "rounded-[1.35rem] rounded-br-[3rem] md:rounded-[1.65rem] md:rounded-br-[4rem]",
  "rounded-[1.35rem] rounded-tl-[3rem] md:rounded-[1.65rem] md:rounded-tl-[4rem]",
  "rounded-[1.45rem] rounded-tr-[3rem] md:rounded-[1.75rem] md:rounded-tr-[4rem]",
  "rounded-[1.45rem] rounded-bl-[3rem] md:rounded-[1.75rem] md:rounded-bl-[4rem]",
];

const getPatternClass = (classes: string[], index: number) =>
  classes[index % classes.length];

const showcaseLayouts = [
  {
    size: "sm:col-span-2 sm:row-span-2 lg:col-span-7 lg:row-span-2",
    title: "text-[1.7rem] sm:text-[2.1rem] lg:text-[2.45rem]",
    pad: "p-5 sm:p-7",
    showMaterial: true,
  },
  {
    size: "sm:col-span-1 lg:col-span-5 lg:row-span-2",
    title: "text-[1.55rem] sm:text-[1.8rem] lg:text-[2.1rem]",
    pad: "p-5 sm:p-6",
    showMaterial: true,
  },
  {
    size: "sm:col-span-1 lg:col-span-4",
    title: "text-[1.35rem] sm:text-[1.5rem]",
    pad: "p-5",
    showMaterial: false,
  },
  {
    size: "sm:col-span-2 lg:col-span-4",
    title: "text-[1.5rem] sm:text-[1.75rem]",
    pad: "p-5 sm:p-6",
    showMaterial: true,
  },
  {
    size: "sm:col-span-1 lg:col-span-4",
    title: "text-[1.35rem] sm:text-[1.5rem]",
    pad: "p-5",
    showMaterial: false,
  },
  {
    size: "sm:col-span-2 lg:col-span-8 lg:row-span-2",
    title: "text-[1.65rem] sm:text-[2rem] lg:text-[2.35rem]",
    pad: "p-5 sm:p-7",
    showMaterial: true,
  },
  {
    size: "sm:col-span-1 lg:col-span-4 lg:row-span-2",
    title: "text-[1.5rem] sm:text-[1.8rem]",
    pad: "p-5 sm:p-6",
    showMaterial: true,
  },
  {
    size: "sm:col-span-1 lg:col-span-5",
    title: "text-[1.35rem] sm:text-[1.55rem]",
    pad: "p-5",
    showMaterial: false,
  },
  {
    size: "sm:col-span-2 lg:col-span-3",
    title: "text-[1.45rem] sm:text-[1.65rem]",
    pad: "p-5 sm:p-6",
    showMaterial: true,
  },
  {
    size: "sm:col-span-1 lg:col-span-4",
    title: "text-[1.35rem] sm:text-[1.55rem]",
    pad: "p-5",
    showMaterial: false,
  },
  {
    size: "sm:col-span-1 lg:col-span-6",
    title: "text-[1.45rem] sm:text-[1.75rem]",
    pad: "p-5 sm:p-6",
    showMaterial: true,
  },
  {
    size: "sm:col-span-2 lg:col-span-6",
    title: "text-[1.45rem] sm:text-[1.75rem]",
    pad: "p-5 sm:p-6",
    showMaterial: true,
  },
];

const getShowcaseLayout = (index: number) =>
  showcaseLayouts[index % showcaseLayouts.length];

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

export function Materials() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 pt-32 pb-12 text-white md:px-10 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-linear-to-b from-amber-500/10 via-blue-500/5 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_48%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p
              {...fadeUp(0)}
              className="mb-4 inline-flex items-center gap-2 font-rajdhani text-sm font-semibold uppercase tracking-[0.32em] text-amber-300"
            >
              <Sparkles className="h-4 w-4" />
              Trabajos realizados
            </motion.p>
            <motion.h1
              {...fadeUp(0.05)}
              className="max-w-5xl font-audiowide text-5xl font-extralight leading-[0.96] tracking-normal text-white md:text-7xl lg:text-8xl"
            >
              Galeria{" "}
              <span className="bg-linear-to-r from-amber-300 via-white to-blue-300 bg-clip-text text-transparent">
                Luxoflex
              </span>
            </motion.h1>
          </div>

          <motion.div
            {...fadeUp(0.12)}
            className="max-w-md border-l border-white/10 pl-5"
          >
            <p className="font-poppins text-sm leading-relaxed text-zinc-400">
              Proyectos impresos en flexografia, mangas, laminados y materiales
              para revisar acabados, color y aplicacion antes de cotizar.
            </p>
          </motion.div>
        </div>

        <PhotoShowcase />
      </div>
    </section>
  );
}

function PhotoShowcase() {
  const [selected, setSelected] = useState<PortfolioCase | null>(null);

  return (
    <>
      <MobileShowcaseCarousel onSelect={setSelected} />

      <div className="hidden grid-flow-dense auto-rows-[220px] grid-cols-2 gap-4 sm:grid md:gap-5 lg:auto-rows-[180px] lg:grid-cols-12 xl:auto-rows-[198px]">
        {portfolioCases.map((item, index) => (
          <ShowcaseTile
            key={item.id}
            item={item}
            index={index}
            onSelect={() => setSelected(item)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <GalleryLightbox item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

function MobileShowcaseCarousel({
  onSelect,
}: {
  onSelect: (item: PortfolioCase) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { viewportRef, cardWidth, peekOffset } = useMobileCarouselMetrics(390);

  const scrollToIndex = (index: number) => {
    setActiveIndex(clampIndex(index, portfolioCases.length));
  };

  return (
    <div className="sm:hidden">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="font-rajdhani text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">
            Galeria completa
          </p>
          <p className="mt-1 font-poppins text-sm font-semibold text-white/80">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(portfolioCases.length).padStart(2, "0")}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:bg-white/10 hover:text-white disabled:opacity-35"
            aria-label="Trabajo anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === portfolioCases.length - 1}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:bg-white/10 hover:text-white disabled:opacity-35"
            aria-label="Siguiente trabajo"
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
        <div className="relative h-[430px] max-h-[72vh]">
          {portfolioCases.map((item, index) => {
            const offset = index - activeIndex;
            const distance = Math.abs(offset);
            const isActive = offset === 0;

            return (
              <motion.div
                key={item.id}
                className="absolute left-1/2 top-0 h-full"
                style={{
                  width: cardWidth,
                  zIndex: 30 - distance,
                }}
                animate={{
                  x: -cardWidth / 2 + offset * peekOffset,
                  scale: isActive ? 1 : 0.9,
                  opacity: distance <= 1 ? 1 : distance === 2 ? 0.28 : 0,
                  filter: isActive ? "blur(0px)" : "blur(0.4px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 34,
                  mass: 0.85,
                }}
              >
                <MobileShowcaseCard
                  item={item}
                  index={index}
                  onSelect={() =>
                    isActive ? onSelect(item) : scrollToIndex(index)
                  }
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <div className="mt-1 flex justify-center gap-1.5">
        {portfolioCases.map((item, index) => (
          <button
            key={`${item.id}-dot`}
            type="button"
            onClick={() => scrollToIndex(index)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              activeIndex === index
                ? "w-6 bg-white"
                : "w-1.5 bg-white/20 hover:bg-white/45"
            )}
            aria-label={`Ir al trabajo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function MobileShowcaseCard({
  item,
  index,
  onSelect,
}: {
  item: PortfolioCase;
  index: number;
  onSelect: () => void;
}) {
  return (
    <motion.button
      {...fadeUp(index * 0.03)}
      type="button"
      onClick={onSelect}
      className="group relative isolate h-full w-full overflow-hidden rounded-[1.6rem] rounded-tr-[3.5rem] border border-white/12 bg-zinc-950 text-left shadow-[0_24px_80px_rgba(0,0,0,0.48)] outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full rounded-[inherit] object-cover transition duration-700 group-active:scale-[1.02]"
          style={{ objectPosition: item.imagePosition ?? "center" }}
          loading={index < 2 ? "eager" : "lazy"}
          width="760"
          height="960"
        />
        <div className="absolute inset-0 rounded-[inherit] bg-linear-to-t from-black/88 via-black/28 to-black/10" />
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-80"
          style={{
            boxShadow: `inset 0 -130px 90px -95px ${item.accent}90`,
          }}
        />
        <div className="absolute inset-[1px] rounded-[inherit] border border-white/[0.06]" />
      </div>

      <div className="absolute left-4 top-4 z-10 flex max-w-[calc(100%-2rem)] flex-wrap gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-black/42 px-3 py-1.5 font-poppins text-xs font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-md">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: item.accent,
              boxShadow: `0 0 16px ${item.accent}`,
            }}
          />
          {item.clientTag}
        </span>
        <span className="rounded-full border border-white/12 bg-white/[0.1] px-3 py-1.5 font-poppins text-xs text-zinc-100 backdrop-blur-md">
          {item.material}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        <p className="mb-2 font-rajdhani text-xs font-semibold uppercase tracking-[0.28em] text-zinc-300">
          {item.application}
        </p>
        <h2 className="font-poppins text-[1.85rem] font-semibold leading-[1.02] text-white">
          {item.title}
        </h2>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div className="flex min-w-0 flex-wrap gap-2">
            {item.tags.slice(0, 2).map((tag) => (
              <span
                key={`${item.id}-mobile-${tag}`}
                className="rounded-full border border-white/12 bg-black/34 px-3 py-1.5 font-poppins text-xs text-zinc-200 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/14 bg-white/90 text-black shadow-lg shadow-black/20">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

function ShowcaseTile({
  item,
  index,
  onSelect,
}: {
  item: PortfolioCase;
  index: number;
  onSelect: () => void;
}) {
  const shapeClass = getPatternClass(showcaseShapes, index);
  const layout = getShowcaseLayout(index);

  return (
    <motion.div
      {...fadeUp(index * 0.05)}
      className={cn("min-h-0", layout.size)}
    >
      <motion.button
        type="button"
        layoutId={`case-card-${item.id}`}
        onClick={onSelect}
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileFocus="hover"
        whileTap="press"
        className={cn(
          "group relative isolate h-full w-full overflow-hidden border border-white/10 bg-zinc-950 text-left shadow-[0_24px_90px_rgba(0,0,0,0.45)] outline-none transition-[border-color,box-shadow] duration-500 hover:border-white/20 hover:shadow-[0_32px_110px_rgba(0,0,0,0.62)] focus-visible:ring-2 focus-visible:ring-amber-300/70",
          shapeClass
        )}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <motion.img
          layoutId={`case-image-${item.id}`}
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full rounded-[inherit] object-cover"
          style={{ objectPosition: item.imagePosition ?? "center" }}
          variants={{
            rest: {
              scale: 1,
              filter: "saturate(0.96) brightness(0.9)",
            },
            hover: {
              scale: 1.025,
              filter: "saturate(1.08) brightness(1.03)",
              transition: { duration: 0.55 },
            },
            press: {
              scale: 1.01,
              filter: "saturate(1.02) brightness(0.98)",
              transition: { duration: 0.2 },
            },
          }}
          loading="lazy"
          width="980"
          height="720"
        />
        <motion.div
          className="absolute inset-0 bg-linear-to-t from-black/80 via-black/18 to-black/6"
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
            boxShadow: `inset 0 0 0 1px ${item.accent}66, inset 0 -130px 92px -98px ${item.accent}90`,
          }}
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1, transition: { duration: 0.45 } },
          }}
        />
        <motion.div
          className="absolute inset-x-7 top-0 h-px opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
          }}
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1, transition: { duration: 0.45 } },
          }}
        />
        </div>

        <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-black/38 px-3 py-1.5 font-poppins text-xs font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-md transition duration-500 group-hover:bg-black/50">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: item.accent,
                boxShadow: `0 0 16px ${item.accent}`,
              }}
            />
            {item.clientTag}
          </span>
          {layout.showMaterial && (
            <span className="rounded-full border border-white/12 bg-white/[0.08] px-3 py-1.5 font-poppins text-xs text-zinc-200 backdrop-blur-md transition duration-500 group-hover:bg-white/[0.12]">
              {item.material}
            </span>
          )}
        </div>

        <div className={cn("absolute bottom-0 left-0 right-0 z-10", layout.pad)}>
          <div className="flex items-end justify-between gap-4">
            <motion.div
              variants={{
                rest: { y: 0 },
                hover: { y: -4, transition: { duration: 0.35 } },
              }}
            >
              <p className="mb-2 font-rajdhani text-xs font-semibold uppercase tracking-[0.3em] text-zinc-300">
                {item.application}
              </p>
              <h2
                className={cn(
                  "max-w-2xl font-poppins font-semibold leading-tight text-white",
                  layout.title
                )}
              >
                {item.title}
              </h2>
              <motion.div
                className="mt-3 flex max-w-full flex-wrap gap-2"
                variants={{
                  rest: { opacity: 0, y: 8 },
                  hover: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
              >
                {[item.material, item.finish].map((tag) => (
                  <span
                    key={`${item.id}-${tag}`}
                    className="rounded-full border border-white/12 bg-black/30 px-3 py-1.5 font-poppins text-xs text-zinc-200 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            <motion.span
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/14 bg-black/28 text-white shadow-lg shadow-black/20 backdrop-blur-md md:flex"
              variants={{
                rest: { opacity: 0.78, rotate: 0 },
                hover: {
                  opacity: 1,
                  rotate: 45,
                  backgroundColor: "rgba(255,255,255,0.92)",
                  color: "#000",
                  borderColor: "rgba(255,255,255,0.72)",
                  transition: { duration: 0.35 },
                },
              }}
            >
              <ArrowUpRight className="h-5 w-5" />
            </motion.span>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}

function GalleryLightbox({
  item,
  onClose,
}: {
  item: PortfolioCase;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/82 p-4 backdrop-blur-xl md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        layoutId={`case-card-${item.id}`}
        className="relative grid max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-[2rem] rounded-tr-[5rem] border border-white/15 bg-[#08080A] shadow-2xl shadow-black md:grid-cols-[minmax(0,1fr)_320px] md:rounded-[2.5rem] md:rounded-tr-[8rem]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition hover:bg-white hover:text-black"
          aria-label="Cerrar galeria"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative min-h-[420px] md:min-h-[680px]">
          <motion.img
            layoutId={`case-image-${item.id}`}
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: item.imagePosition ?? "center" }}
            width="1280"
            height="900"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/20 md:hidden" />
        </div>

        <div className="flex flex-col justify-end p-6 md:p-7">
          <div
            className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border"
            style={{
              background: `${item.accent}18`,
              borderColor: `${item.accent}40`,
            }}
          >
            <Images
              className="h-5 w-5"
              style={{
                color: item.accent,
              }}
            />
          </div>
          <p className="font-rajdhani text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            {item.clientTag}
          </p>
          <h3 className="mt-3 font-poppins text-3xl font-semibold leading-tight text-white">
            {item.title}
          </h3>
          <p className="mt-4 font-poppins text-sm leading-relaxed text-zinc-400">
            {item.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[item.material, item.finish, ...item.tags.slice(0, 2)].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-poppins text-xs text-zinc-300"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
