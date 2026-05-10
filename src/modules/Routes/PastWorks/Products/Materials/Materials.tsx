import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Images,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
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
              Showcase visual
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
              Fotos protagonistas, etiquetas de cliente discretas y movimiento
              suave para que el portafolio se sienta como galeria, no como
              inventario.
            </p>
          </motion.div>
        </div>

        <PhotoShowcase />
      </div>
    </section>
  );
}

function PhotoShowcase() {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<PortfolioCase | null>(null);
  const visibleCases = expanded ? portfolioCases : portfolioCases.slice(0, 10);

  return (
    <>
      <div className="grid auto-rows-[300px] grid-cols-1 gap-5 md:auto-rows-[250px] md:grid-cols-6">
        {visibleCases.map((item, index) => (
          <ShowcaseTile
            key={item.id}
            item={item}
            index={index}
            onSelect={() => setSelected(item)}
          />
        ))}
      </div>

      {portfolioCases.length > 10 && (
        <div className="mt-9 flex justify-center">
          <Button
            variant="ghost"
            onClick={() => setExpanded((value) => !value)}
            className="h-12 rounded-full border border-white/10 bg-white/[0.04] px-6 font-poppins text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
          >
            {expanded ? "Ver menos fotos" : "Ver mas fotos"}
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}

      <AnimatePresence>
        {selected && (
          <GalleryLightbox item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
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
  const titleClass =
    index === 0
      ? "text-[1.65rem] md:text-[2.05rem]"
      : "text-[1.45rem] md:text-[1.8rem]";
  const sizeClass =
    index === 0
      ? "md:col-span-4 md:row-span-2"
      : index === 1
        ? "md:col-span-2 md:row-span-2"
        : index === 4
          ? "md:col-span-3"
          : "md:col-span-3";

  return (
    <motion.div
      {...fadeUp(index * 0.05)}
      className={cn("min-h-0", sizeClass)}
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
          {index < 3 && (
            <span className="rounded-full border border-white/12 bg-white/[0.08] px-3 py-1.5 font-poppins text-xs text-zinc-200 backdrop-blur-md transition duration-500 group-hover:bg-white/[0.12]">
              {item.material}
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-6">
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
                  titleClass
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
