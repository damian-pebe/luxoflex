import { WavyTitle } from "./Components/WavyTitle";
// import background from "@/assets/background.jpg";
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
const img = "https://m.media-amazon.com/images/I/61ibwGNhNiL._AC_UF894,1000_QL80_.jpg"
const projects = [
    {
      title: "Etiquetas con QR",
      description: "Integra códigos QR para rastreo, promociones o información interactiva. Conexión directa con el cliente.",
      image: img},
    {
      title: "Etiquetas Inteligentes (NFC/RFID)",
      description: "Tecnología NFC o RFID para inventarios, autenticación y experiencias interactivas. Innovación en tus productos.",
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
      title: "Etiquetas de Seguridad",
      description: "Anti-manipulación. Garantizan autenticidad con adhesivos destructibles, hologramas o serialización.",
      image: img},
    {
      title: "Etiquetas Térmicas",
      description: "Resistentes a altas temperaturas. Ideales para procesos industriales y envasado.",
      image: img},
    {
      title: "Etiquetas Personalizadas",
      description: "Diseños únicos. Colores vibrantes, acabados metálicos y detalles premium para destacar tu marca.",
      image: img},
    {
      title: "Etiquetas Ecológicas",
      description: "Materiales reciclados y biodegradables. Sostenibilidad sin sacrificar calidad.",
      image: img},
    {
      title: "Etiquetas para Exteriores",
      description: "Resistentes a UV, clima y abrasión. Durabilidad en condiciones extremas.",
      image: img},
    {
      title: "Etiquetas para Vidrio",
      description: "Adhesivos fuertes para superficies lisas. Ideales para botellas y envases de vidrio.",
      image: img},
    {
      title: "Etiquetas para Logística",
      description: "Códigos de barras, resistentes y duraderas. Optimizan el manejo de inventarios y envíos.",
      image: img},
  ];