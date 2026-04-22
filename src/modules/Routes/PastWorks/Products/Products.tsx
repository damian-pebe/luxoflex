import { Button } from "@/components/ui/button";
import { WavyTitle } from "./Components/WavyTitle";
import { HoverEffect } from "@/components/aceternity/card-hover-effect";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";

export default function Products() {
  return (
    <div className="pb-8 bg-black">

    <div className="bg-black flex flex-col items-center justify-center overflow-hidden py-52">
      <WavyTitle />
      <div className="z-50 mt-[-150px] left-0 w-full h-full"></div>
      <CardHoverEffectDemo />

    </div>
      <ThreeDotsBlack />
    </div>
  );
}

export function CardHoverEffectDemo() {
  const [sliceVariable, setSliceVariable] = useState(3);
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects.slice(0, sliceVariable)} />
      {open && (
        <div className="group flex justify-center transition-all duration-1000  ">
          <Button
            className="font-poppins text-3xl text-center"
            variant="link"
            onClick={() => {
              setOpen((prev) => !prev);
              setSliceVariable(projects.length);
            }}
          >
            View More
          </Button>
          <ChevronDown
            className="group-hover:rotate-180 transition-all duration-1000"
            width={40}
            height={40}
          />
        </div>
      )}
      {!open && (
        <div className="group flex justify-center transition-all duration-1000  ">
          <Button
            className="font-poppins text-3xl text-center"
            variant="link"
            onClick={() => {
              setOpen((prev) => !prev);
              setSliceVariable(3);
            }}
          >
            View Less
          </Button>
          <ChevronDown
            className="group-hover:rotate-0 rotate-180 transition-all duration-1000"
            width={40}
            height={40}
          />
        </div>
      )}
    </div>
  );
}
const projects = [
  {
    title: "Bopp Plata",
    description:
      "Película de polipropileno biorientado metalizado que ofrece un acabado plateado brillante, ideal para etiquetas decorativas y empaques premium.",
    image:
      "/bopp_plata.webp",
  },
  {
    title: "Bopp Blanco",
    description:
      "Película de polipropileno biorientado de color blanco, proporciona una excelente base para impresión, es utilizada en etiquetas autoadhesivas.",
    image:
      "/bopp_blanco.webp",
  },
  {
    title: "Bopp transparente",
    description:
      "Película de polipropileno biorientado transparente, versátil para etiquetas que requieren mostrar el producto subyacente.",
    image:
      "/bopp_transparente.webp",
  },
  {
    title: "Laminado mate",
    description:
      "Acabado especial que proporciona una superficie no brillante y suave al tacto, ideal para etiquetas premium con aspecto sofisticado.",
    image:
      "/laminadoMate.webp",
  },
  {
    title: "Laminado Brillante",
    description:
      "Acabado que proporciona un alto brillo y claridad visual, mejorando la apariencia de las etiquetas y protegiéndolas contra la abrasión.",
    image:
      "/laminadoBrillante.webp",
  },
  {
    title: "Pelicula de polipropileno sellable",
    description:
      "Material especialmente diseñado para crear un sello hermético cuando se aplica calor.",
    image:
      "/PELICULA_DE_POLIPROPILENO_SELLABLE.webp",
  },
  {
    title: "Bopp Holografico",
    description:
      "Película de polipropileno biorientado con efectos holográficos que crean patrones visuales llamativos y efectos de luz únicos.",
    image:
      "/bopp_holografico.webp",
  },
  {
    title: "Suajadas a Color",
    description:
      "Etiquetas troqueladas con impresión a color, cortadas en formas específicas según los requerimientos del diseño.",
    image:
      "/suajadas_color.webp",
  },
  {
    title: "Suajadas Termica",
    description:
      "Etiquetas troqueladas en papel térmico que cambian de color con la temperatura, ideales para sensibilidad térmica.",
    image:
      "/suajada_termica.webp",
  },
];
