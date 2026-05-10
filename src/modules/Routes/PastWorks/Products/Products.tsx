import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Layers3, Sparkles } from "lucide-react";
import { useState } from "react";
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

export default function Products() {
  const [expanded, setExpanded] = useState(false);
  const visibleMaterials = expanded
    ? materialLibrary
    : materialLibrary.slice(0, 6);

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

        <div className="grid auto-rows-[240px] grid-cols-1 gap-5 md:grid-cols-6">
          {visibleMaterials.map((material, index) => (
            <MaterialTile
              key={material.title}
              material={material}
              index={index}
            />
          ))}
        </div>

        {materialLibrary.length > 6 && (
          <div className="mt-9 flex justify-center">
            <Button
              variant="ghost"
              onClick={() => setExpanded((value) => !value)}
              className="h-12 rounded-full border border-white/10 bg-white/[0.04] px-6 font-poppins text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              {expanded ? "Ver menos materiales" : "Ver mas materiales"}
              {expanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
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
  const sizeClass =
    index === 0 || index === 4
      ? "md:col-span-3"
      : index === 1
        ? "md:col-span-3"
        : "md:col-span-2";

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
