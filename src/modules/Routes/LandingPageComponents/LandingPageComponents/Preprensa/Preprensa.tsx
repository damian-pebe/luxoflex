import {
  Layers,
  CheckCircle,
  Upload,
  ThumbsUp,
  Printer,
  Phone,
} from "lucide-react";
import {
  recepcion_disenios,
  revision_coreccion,
  final_preprensa,
  happy_customer,
  grabados,
  logo,
} from "@/const";
import EffectScroll from "@/components/effectScroll";
import { Button } from "@/components/ui/button";
import { Whatsapp } from "react-bootstrap-icons";
import FlowingMenu from "@/components/reactbits/flowing_menu";
import { Carousel } from "@/components/aceternity/carousel";

export default function Preprensa() {

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
      title: "Generación de Grabados para Impresion",
      description:
        "Utilizamos tecnología avanzada para la filmación y generación de grabados, garantizando una impresión precisa y profesional.",
      icon: <Printer className="h-6 w-6 text-white p-1" />,
      src: grabados,
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
  return (
    <div>
      <div className="w-full px-1 md:px-32 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <div className="container mx-auto py-20 px-6 lg:px-8">
          <div className="pb-10 flex flex-col lg:flex-row items-center gap-12">
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
                cada detalle esté perfectamente preparado antes de la impresión
                de grabados.
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

            <div className=" flex-1 relative gap-6">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-pink-400 rounded-lg opacity-30 blur-lg"></div>

              <div>
                <img
                  src={grabados}
                  className="relative object-cover w-full h-full opacity-90 bg-black rounded-tl-3xl rounded-tr-sm rounded-bl-3xl rounded-br-3xl shadow-2xl transform transition-all duration-1000"
                  alt="Preprensa Digital"
                />
                <div className="hidden sm:block absolute bottom-0 right-0 p-4 bg-gradient-to-r from-blue-900/90 to-purple-900/90 rounded-2xl text-white backdrop-blur-md shadow-lg border border-white/10 transform transition-all duration-300">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    ¿Necesitas ayuda con tu diseño?
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-lg font-bold">TP</span>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-200">Tomas Perez</p>
                      <p className="text-sm text-blue-100/80">
                        +15 años de experiencia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <div className="flex space-x-4">
                      <i
                        onClick={() => (window.location.href = "tel:+52")}
                        className="hover:cursor-pointer bi bi-telephone-outbound text-xl transition-all duration-300 text-white/90 hover:text-teal-400 hover:scale-110"
                      />
                      <i
                        onClick={() =>
                          (window.location.href = "https://wa.me/+52")
                        }
                        className="hover:cursor-pointer bi bi-whatsapp text-xl transition-all duration-300 text-white/90 hover:text-green-400 hover:scale-110"
                      />
                      <i
                        onClick={() =>
                          (window.location.href = "user.hrefFacebook")
                        }
                        className="hover:cursor-pointer bi bi-facebook text-xl transition-all duration-300 text-white/90 hover:text-blue-400 hover:scale-110"
                      />
                      <i
                        onClick={() =>
                          (window.location.href = "user.hrefInstagram")
                        }
                        className="hover:cursor-pointer bi bi-instagram text-xl transition-all duration-300 text-white/90 hover:text-pink-400 hover:scale-110"
                      />
                    </div>
                    <Button
                      variant="default"
                      className=" hover:bg-black bg-white rounded-[8px] hover:text-white text-black font-medium px-4 py-2 transition-all duration-300 shadow-md hover:shadow-lg"
                      onClick={() => (window.location.href = "tel:+52")}
                    >
                      Contactame
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Card />
        </div>

        <EffectScroll classname="animate-fadein duration-1000">
          <div className="py-16 ">
            <div className="container mx-auto px-4">
              <h2 className="text-center text-5xl md:text-7xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Beneficios de Nuestra Preprensa
              </h2>

              <div className=" flex justify-center">
               

    <div className="relative overflow-hidden w-full h-full pb-20">
      <Carousel slides={slideData} />
    </div>
  

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
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <div className="font-poppins sm:hidden flex flex-col w-full md:w-min justify-center items-center gap-5 p-5 bg-gray-800 rounded-lg">
      <div className="flex justify-center w-52 h-52S items-center rounded-lg  duration-700">
        <img
          className=" w-44 h-44 hover:scale-105 duration-300 fill-white cursor-pointer"
          src={logo}
        />
      </div>
      <div className=" max-w-sm h-auto space-y-3">
        <div className="flex justify-center items-center">
          <h2 className="text-white text-2xl text-center justify-center items-center font-bold tracking-widest">
            Tomas Perez
          </h2>
        </div>
        <div className="flex justify-end items-start space-x-2">
          <div className="hover:cursor-pointer h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-2xl font-bold">TP</span>
          </div>
          <div className="text-right">
            <p className="font-semibold text-right text-blue-200">
              Necesitas ayuda con tus diseños?
            </p>
            <p className="text-sm text-blue-100/80">+15 años de experiencia</p>
          </div>
        </div>
        <div className="flex justify-between flex-row items-center gap-2 my-2 font-poppins">
          <Button className="w-full">Contactanos</Button>
          <Button
            variant="secondary"
            className="w-min bg-blue-500 hover:bg-blue-600"
          >
            <Phone />
          </Button>
          <Button
            variant="secondary"
            className="w-min bg-green-500 hover:bg-green-600"
          >
            <Whatsapp />
          </Button>
        </div>
      </div>
    </div>
  );
};
