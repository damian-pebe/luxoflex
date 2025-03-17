import { Button } from "@/components/ui/button";
import { WavyTitle } from "./Components/WavyTitle";
import { HoverEffect } from "@/components/aceternity/card-hover-effect";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Products() {
  return (
    <div className="bg-black flex flex-col items-center justify-center overflow-hidden py-52">
      <WavyTitle />
      <div className="z-50 mt-[-150px] left-0 w-full h-full"></div>
      <CardHoverEffectDemo />
    </div>
  );
}

export function CardHoverEffectDemo() {
  
  const [sliceVariable, setSliceVariable] = useState(3);
  const [open, setOpen] = useState<boolean>(true);
  
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects.slice(0,sliceVariable)} />
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
    image: "https://ckohvdglovpgbuqwrkpd.supabase.co/storage/v1/object/public/luxoflex//bopp_plata.jpg",
  },
  {
    title: "Bopp Blanco",
    description:
      "Película de polipropileno biorientado de color blanco, proporciona una excelente base para impresión, es utilizada en etiquetas autoadhesivas.",
    image: "https://ckohvdglovpgbuqwrkpd.supabase.co/storage/v1/object/public/luxoflex//bopp_blanco.jpg",
  },
  {
    title: "Bopp transparente",
    description:
      "Película de polipropileno biorientado transparente, versátil para etiquetas que requieren mostrar el producto subyacente.",
    image: "https://ckohvdglovpgbuqwrkpd.supabase.co/storage/v1/object/public/luxoflex//bopp_transparente.jpg",
  },
  {
    title: "Laminado mate",
    description:
      "Acabado especial que proporciona una superficie no brillante y suave al tacto, ideal para etiquetas premium con aspecto sofisticado.",
    image: "https://ckohvdglovpgbuqwrkpd.supabase.co/storage/v1/object/public/luxoflex//laminadoMate.jpg",
  },
  {
    title: "Laminado Brillante",
    description:
      "Acabado que proporciona un alto brillo y claridad visual, mejorando la apariencia de las etiquetas y protegiéndolas contra la abrasión.",
    image: "https://ckohvdglovpgbuqwrkpd.supabase.co/storage/v1/object/public/luxoflex//laminadoBrillante.jpg",
  },
  {
    title: "Pelicula de polipropileno sellable",
    description:
      "Material especialmente diseñado para crear un sello hermético cuando se aplica calor.",
    image: "https://ckohvdglovpgbuqwrkpd.supabase.co/storage/v1/object/public/luxoflex//PELICULA_DE_POLIPROPILENO_SELLABLE.jpg",
  },
  {
    title: "Bopp Holografico",
    description:
      "Película de polipropileno biorientado con efectos holográficos que crean patrones visuales llamativos y efectos de luz únicos.",
    image: "https://ckohvdglovpgbuqwrkpd.supabase.co/storage/v1/object/public/luxoflex//bopp_holografico.jpg",
  },
  {
    title: "Suajadas a Color",
    description:
      "Etiquetas troqueladas con impresión a color, cortadas en formas específicas según los requerimientos del diseño.",
    image: "https://ckohvdglovpgbuqwrkpd.supabase.co/storage/v1/object/public/luxoflex//suajadas_color.jpeg",
  },
  {
    title: "Suajadas Termica",
    description:
      "Etiquetas troqueladas en papel térmico que cambian de color con la temperatura, ideales para sensibilidad térmica.",
    image: "https://ckohvdglovpgbuqwrkpd.supabase.co/storage/v1/object/public/luxoflex//suajada_termica.jpg",
  },
];
