import { WavyTitle } from "./Components/WavyTitle";
// import background from "@/assets/background.jpg";
import { HoverEffect } from "@/components/aceternity/card-hover-effect";

export default function Products() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden pb-52">
      <WavyTitle />
      <div className="z-50 mt-[-250px] left-0 w-full h-full">
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
const img = "https://m.media-amazon.com/images/I/61ibwGNhNiL._AC_UF894,1000_QL80_.jpg"
const projects = [
    {
      title: "Etiquetas con QR",
      description: "Integra códigos QR para rastreo, promociones o información interactiva. Conexión directa con el cliente.",
      image: img},
    {
      title: "Etiquetas en Rollo",
      description: "Perfectas para producción masiva. Fáciles de aplicar, adhesivo resistente y personalizables.",
      image: img},
    {
      title: "Etiquetas para Congeladores",
      description: "Resistentes al frío extremo. Adhesión duradera en bajas temperaturas. Ideales para alimentos y logística.",
      image: img},
    {
      title: "Etiquetas Impermeables",
      description: "Protección contra agua y humedad. Perfectas para bebidas, cosméticos y productos químicos.",
      image: img},
    {
      title: "Etiquetas Personalizadas",
      description: "Diseños únicos. Colores vibrantes, acabados metálicos y detalles premium para destacar tu marca.",
      image: img},
    {
      title: "Etiquetas para Logística",
      description: "Códigos de barras, resistentes y duraderas. Optimizan el manejo de inventarios y envíos.",
      image: img},
  ];