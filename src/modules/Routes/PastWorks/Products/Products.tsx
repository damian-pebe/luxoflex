import { WavyTitle } from "./Components/WavyTitle";
import boppPlata from "@/assets/bopp_plata.jpg";
import boppBlanco from "@/assets/bopp_blanco.jpg";
import boppTransparente from "@/assets/bopp_transparente.jpg";
import laminadoMate from "@/assets/laminadoMate.jpg";
import laminadoBrillante from "@/assets/laminadoBrillante.jpg";
import PELICULA_DE_POLIPROPILENO_SELLABLE from "@/assets/PELICULA_DE_POLIPROPILENO_SELLABLE.jpg";
import bopp_holografico from "@/assets/bopp_holografico.jpg";
import suajadas_color from "@/assets/suajadas_color.jpeg";
import suajada_termica from "@/assets/suajada_termica.jpg";
import { HoverEffect } from "@/components/aceternity/card-hover-effect";

export default function Products() {
  return (
    <div className="bg-black flex flex-col items-center justify-center overflow-hidden pb-52">
      <WavyTitle />
      <div className="z-50 mt-[-250px] left-0 w-full h-full"></div>
      <CardHoverEffectDemo />
    </div>
  );
}

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
const projects = [
  {
    title: "Bopp Plata",
    description:
      "Película de polipropileno biorientado metalizado que ofrece un acabado plateado brillante, ideal para etiquetas decorativas y empaques premium.",
    image: boppPlata,
  },
  {
    title: "Bopp Blanco",
    description:
      "Película de polipropileno biorientado de color blanco, proporciona una excelente base para impresión y es ampliamente utilizada en etiquetas autoadhesivas.",
    image: boppBlanco,
  },
  {
    title: "Bopp transparente",
    description:
      "Película de polipropileno biorientado transparente, versátil para etiquetas que requieren mostrar el producto subyacente.",
    image: boppTransparente,
  },
  {
    title: "Laminado mate",
    description:
      "Acabado especial que proporciona una superficie no brillante y suave al tacto, ideal para etiquetas premium con aspecto sofisticado.",
    image: laminadoMate,
  },
  {
    title: "Laminado Brillante",
    description:
      "Acabado que proporciona un alto brillo y claridad visual, mejorando la apariencia de las etiquetas y protegiéndolas contra la abrasión.",
    image: laminadoBrillante,
  },
  {
    title: "Pelicula de polipropileno sellable",
    description:
      "Material especialmente diseñado para crear un sello hermético cuando se aplica calor, ideal para envases y empaques que requieren cierre.",
    image: PELICULA_DE_POLIPROPILENO_SELLABLE,
  },
  {
    title: "Bopp Holografico",
    description:
      "Película de polipropileno biorientado con efectos holográficos que crean patrones visuales llamativos y efectos de luz únicos.",
    image: bopp_holografico,
  },
  {
    title: "Suajadas a Color",
    description:
      "Etiquetas troqueladas con impresión a color, cortadas en formas específicas según los requerimientos del diseño.",
    image: suajadas_color,
  },
  {
    title: "Suajadas Termica",
    description:
      "Etiquetas troqueladas en papel térmico que cambian de color con la temperatura, ideales para aplicaciones que requieren sensibilidad térmica.",
    image: suajada_termica,
  },
];
