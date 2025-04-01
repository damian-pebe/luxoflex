import { Carousel } from "@/components/aceternity/carousel";
import { ThreeDotsWhite } from "@/components/ReusableIcons/ReusableIcons";
import {
  recepcion_disenios,
  revision_coreccion,
  final_preprensa,
  happy_customer,
  grabados,
} from "@/const";
import { Upload, CheckCircle, Layers, ThumbsUp, Printer } from "lucide-react";

export default function CarouselComponent() {
  const slideData = [
    {
      title: "Recepción de Archivos de Diseño",
      description:
        "Nos aseguramos de recibir y gestionar tus archivos correctamente, evitando problemas desde el inicio del proceso.",
      icon: <Upload className="h-6 w-6 text-white p-1" />,
      src: recepcion_disenios,
    },
    {
      title: "Revisión y Corrección de Errores",
      description:
        "Nuestro equipo detecta y corrige errores antes de la impresión, garantizando calidad y evitando costosos reprocesos.",
      icon: <CheckCircle className="h-6 w-6 text-white p-1" />,
      src: revision_coreccion,
    },
    {
      title: "Preparación para Impresión",
      description:
        "Optimizamos la disposición y separación de colores, asegurando una impresión nítida y de alta calidad.",
      icon: <Layers className="h-6 w-6 text-white p-1" />,
      src: final_preprensa,
    },
    {
      title: "Aprobación del Cliente",
      description:
        "Involucramos a nuestros clientes en cada paso, asegurándonos de que el producto final cumpla con sus expectativas.",
      icon: <ThumbsUp className="h-6 w-6 text-white p-1" />,
      src: happy_customer,
    },
    {
      title: "Generación de Grabados para Impresión",
      description:
        "Utilizamos tecnología avanzada para la filmación y generación de grabados, garantizando una impresión precisa y profesional.",
      icon: <Printer className="h-6 w-6 text-white p-1" />,
      src: grabados,
    },
  ];
  return (
    <div className="py-8 bg-[#FAFAFA]">
      <ThreeDotsWhite/>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bungee uppercase mb-16 text-black">
          Nuestro Proceso Garantiza Excelencia
        </h2>

        <div className="flex justify-center">
          <div className="relative overflow-hidden w-full h-full pb-20">
            <Carousel slides={slideData} />
          </div>
        </div>
      </div>
      <ThreeDotsWhite/>
    </div>
  );
}
