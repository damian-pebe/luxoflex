import Carousel from "./Carousel";
import { Layers, CheckCircle, Upload, ThumbsUp, Printer } from "lucide-react";
import { CarouselItem } from "./models/Models";
import recepcion_disenios from "@/assets/recepcion_disenios.jpg";
import revision_coreccion from "@/assets/revision_coreccion.jpg";
import final_preprensa from "@/assets/final_preprensa.png";
import happy_customer from "@/assets/happy_customer.jpg";
import grabados from "@/assets/rodillo1.webp";
import EffectScroll from "@/components/effectScroll";
import FlowingMenu from "@/components/reactbits/flowing_menu";

const PREPRINTER_BENEFITS: CarouselItem[] = [
  {
    title: "Recepción de Archivos de Diseño",
    description:
      "Nos aseguramos de recibir y gestionar tus archivos correctamente, evitando problemas desde el inicio del proceso.",
    id: 1,
    icon: <Upload className="h-6 w-6 text-white p-1" />,
    image: recepcion_disenios,
  },
  {
    title: "Revisión y Corrección de Errores",
    description:
      "Nuestro equipo detecta y corrige errores antes de la impresión, garantizando calidad y evitando costosos reprocesos.",
    id: 2,
    icon: <CheckCircle className="h-6 w-6 text-white p-1" />,
    image: revision_coreccion,
  },
  {
    title: "Preparación para Impresión",
    description:
      "Optimizamos la disposición y separación de colores, asegurando una impresión nítida y de alta calidad.",
    id: 3,
    icon: <Layers className="h-6 w-6 text-white p-1" />,
    image: final_preprensa,
  },
  {
    title: "Aprobación del Cliente",
    description:
      "Involucramos a nuestros clientes en cada paso, asegurándonos de que el producto final cumpla con sus expectativas.",
    id: 5,
    icon: <ThumbsUp className="h-6 w-6 text-white p-1" />,
    image: happy_customer,
  },
  {
    title: "Generación de Grabados para Impresion",
    description:
      "Utilizamos tecnología avanzada para la filmación y generación de grabados, garantizando una impresión precisa y profesional.",
    id: 6,
    icon: <Printer className="h-6 w-6 text-white p-1" />,
    image: grabados,
  },
];


const demoItems = [
  {
    text: "Optimización de Color",
    image: recepcion_disenios,
  },
  {
    text: "Ajuste de Resolución",
    image: revision_coreccion,
  },
  {
    text: "Control de Calidad",
    image: final_preprensa,
  },
  {
    text: "Generacion de Grabados",
    image: grabados,
  },
];

export default function Preprensa() {
  return (
    <div>
      <div className="w-full px-1 md:px-32 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <div className="container mx-auto py-20 px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 ">
                <h1 className="text-center text-6xl md:text-8xl font-dancing font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 mb-3">
                  Preprensa Digital
                </h1>
                <div className="h-1 w-full bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>

              <p className="text-xl md:text-2xl leading-relaxed font-rajdhani text-gray-200">
                En <span className="font-bold text-blue-400">LUXOFLEX</span>,
                nuestra preprensa digital garantiza que cada proyecto de
                impresión alcance su máximo potencial. Utilizamos tecnología
                avanzada para optimizar archivos, ajustar colores y asegurar que
                cada detalle esté perfectamente preparado antes de la impresión de grabados.
              </p>

              <ul className="space-y-4">
                {[
                  "Optimización de archivos y resolución",
                  "Ajuste profesional de color",
                  "Control de calidad exhaustivo",
                  "Pruebas digitales precisas",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-lg font-mono text-gray-300"
                  >
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-pink-400 rounded-lg opacity-30 blur-lg"></div>
              <img
                src={grabados}
                className="relative object-cover w-full h-full opacity-90 bg-black rounded-tl-3xl rounded-tr-sm rounded-bl-3xl rounded-br-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                alt="Preprensa Digital"
              />
            </div>
          </div>
        </div>

        <EffectScroll classname="animate-fadein duration-1000">
          <div className="py-16 ">
            <div className="container mx-auto px-4">
              <h2 className="text-center text-5xl md:text-7xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Beneficios de Nuestra Preprensa
              </h2>

              <div className="hidden lg:flex justify-center">
                <Carousel
                  baseWidth={1200}
                  autoplay={true}
                  autoplayDelay={2500}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                  items={PREPRINTER_BENEFITS}
                />
              </div>

              <div className="lg:hidden flex justify-center">
                <Carousel
                  baseWidth={450}
                  autoplay={true}
                  autoplayDelay={3000}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                  items={PREPRINTER_BENEFITS}
                />
              </div>
            </div>
          </div>
        </EffectScroll>

        <div className="pt-16 pb-5 container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Con LUXOFLEX transforma tu visión en realidad
            </h2>
            <p className="text-xl font-mono text-gray-300">
              No dejes al azar la calidad de tus impresiones
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
}
