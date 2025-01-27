import { WavyTitle } from "./Components/WavyTitle";
import background from "@/assets/background.jpg";
import { HoverEffect } from "@/components/aceternity/card-hover-effect";

export default function Products() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden pb-52">
      <WavyTitle />
      <div className="z-50 mt-[-150px] left-0 w-full h-full">
      </div>
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
      title: "EcoLuxe",
      description: "Materiales reciclados y biodegradables. Elegancia eco-amigable.",
      image: background,
    },
    {
      title: "DuraLuxe",
      description: "Resistencia extrema. Clima, sol o frío. Diseño duradero.",
      image: background,
    },
    {
      title: "CustomLuxe",
      description: "Personalización total. Colores, metálicos y detalles premium. Refleja tu marca.",
      image: background,
    },
    {
      title: "SecureLuxe",
      description: "Anti-fraude. Autenticidad garantizada: adhesivos destructibles y hologramas.",
      image: background,
    },
    {
      title: "ThermoLuxe",
      description: "Resistencia térmica. Ideal para industria. Adhesión en altas temperaturas.",
      image: background,
    },
    {
      title: "AquaLuxe",
      description: "Impermeables premium. Brillantes en ambientes húmedos. Perfectas para cosméticos y bebidas.",
      image: background,
    },
  ];