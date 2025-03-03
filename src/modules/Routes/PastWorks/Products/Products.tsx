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
      "Integra códigos QR para rastreo, promociones o información interactiva. Conexión directa con el cliente.",
    image: boppPlata,
  },
  {
    title: "Bopp Blanco",
    description:
      "Perfectas para producción masiva. Fáciles de aplicar, adhesivo resistente y personalizables.",
    image: boppBlanco,
  },
  {
    title: "Bopp transparente",
    description:
      "Resistentes al frío extremo. Adhesión duradera en bajas temperaturas. Ideales para alimentos y logística.",
    image: boppTransparente,
  },
  {
    title: "Laminado mate",
    description:
      "Protección contra agua y humedad. Perfectas para bebidas, cosméticos y productos químicos.",
    image: laminadoMate,
  },
  {
    title: "Laminado Brillante",
    description:
      "Diseños únicos. Colores vibrantes, acabados metálicos y detalles premium para destacar tu marca.",
    image: laminadoBrillante,
  },
  {
    title: "Pelicula de polipropileno sellable",
    description:
      "Códigos de barras, resistentes y duraderas. Optimizan el manejo de inventarios y envíos.",
    image: PELICULA_DE_POLIPROPILENO_SELLABLE,
  },
  {
    title: "Bopp Holografico",
    description:
      "Códigos de barras, resistentes y duraderas. Optimizan el manejo de inventarios y envíos.",
    image: bopp_holografico,
  },
  {
    title: "Suajadas a Color",
    description:
      "Códigos de barras, resistentes y duraderas. Optimizan el manejo de inventarios y envíos.",
    image: suajadas_color,
  },
  {
    title: "Suajadas Termica",
    description:
      "Códigos de barras, resistentes y duraderas. Optimizan el manejo de inventarios y envíos.",
    image: suajada_termica,
  },
];
