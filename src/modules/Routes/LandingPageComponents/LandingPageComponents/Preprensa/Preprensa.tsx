import TextPressure from "./title";
import Carousel from "./Carousel";
import { User } from "lucide-react";
import { CarouselItem } from "./models/Models";
import background from "@/assets/luxoflexImage5.jpeg";
import EffectScroll from "@/components/effectScroll";

const PREPRINTER_BENEFITS: CarouselItem[] = [
  {
    title: "Calidad Visual Mejorada",
    description:
      "La preprensa optimiza imágenes y colores, haciendo que tu diseño se vea más profesional y atractivo.",
    id: 1,
    icon: <User className="h-[16px] w-[16px] text-white" />,
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    title: "Colores Vibrantes",
    description:
      "Los ajustes de color garantizan que tus colores sean precisos y llamativos, captando la atención de los usuarios.",
    id: 2,
    icon: <User className="h-[16px] w-[16px] text-white" />,
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    title: "Diseño Pulido",
    description:
      "La revisión en la preprensa asegura que cada elemento del diseño sea perfecto, generando confianza en los usuarios.",
    id: 3,
    icon: <User className="h-[16px] w-[16px] text-white" />,
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    title: "Impacto Visual Inmediato",
    description:
      "Un diseño atractivo y bien trabajado logra captar la atención de inmediato, mejorando la retención del usuario.",
    id: 4,
    icon: <User className="h-[16px] w-[16px] text-white" />,
    image: "https://picsum.photos/600/400?random=4",
  },
  {
    title: "Prevención de Errores",
    description:
      "Detectar y corregir problemas antes de imprimir ahorra tiempo y costos, asegurando un producto final exitoso.",
    id: 5,
    icon: <User className="h-[16px] w-[16px] text-white" />,
    image: "https://picsum.photos/600/400?random=5",
  },
];

// const demoItems = [
//   {
//     text: "Mojave",
//     image: "https://picsum.photos/600/400?random=1",
//   },
//   {
//     text: "Sonoma",
//     image: "https://picsum.photos/600/400?random=2",
//   },
//   {
//     text: "Monterey",
//     image: "https://picsum.photos/600/400?random=3",
//   },
//   {
//     text: "Sequoia",
//     image: "https://picsum.photos/600/400?random=4",
//   },
// ];

export default function Preprensa() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-20 bg-gradient-to-t from-[#FAFAFA] to-[#09090B]"></div>
      <div className="md:px-32 w-full flex flex-col bg-[#FAFAFA]  text-[#09090B]">
        <EffectScroll classname="duration-1000 animate-jiggle">
          <div className="py-5 relative ">
            <TextPressure
              text="Preprensa"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#09090B"
              strokeColor="#FAFAFA"
              minFontSize={36}
            />
          </div>
        </EffectScroll>
        <div className="px-5 h-full md:px-14 flex  items-center justify-center">
          <div className="gap-6 flex h-full flex-col lg:flex-row w-full items-center text-center text-lg font-bold">
            <EffectScroll classname="animate-fadeinleft duration-1000">
              <div className="relative flex flex-col justify-center items-start w-full ">
                <img
                  src={background}
                  className="object-cover opacity-80 rounded-2xl bg-black w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-[#09090B]">
                  <h2 className="font-unica text-4xl font-extrabold mb-3">
                    ¡Descubre las Ventajas de la{" "}
                    <span className="text-blue-600">Preprensa en LUXOFLEX</span>
                    !
                  </h2>
                  <p className="text-2xl mb-4">
                    Lleva tus diseños al siguiente nivel con nuestro servicio de
                    preprensa de calidad superior.
                  </p>
                </div>
              </div>
            </EffectScroll>

            <EffectScroll classname="animate-fadeinright duration-1000">
              <div className="flex flex-col justify-center items-start w-full  p-6">
                <h3 className="font-unica text-3xl font-semibold mb-4 text-blue-600">
                  Ventajas Clave
                </h3>
                <ul className="font-raleway text-xl text-left space-y-2 mx-auto w-fit">
                  <li className="font-bold">
                    - Calidad Impecable: Cada detalle se corrige y optimiza para
                    garantizar un resultado final perfecto.
                  </li>
                  <li className="font-bold">
                    - Colores Vibrantes: Ajustamos los colores y la resolución
                    para que tu diseño destaque y atraiga miradas.
                  </li>
                  <li className="font-bold">
                    - Pruebas Digitales: Realizamos pruebas exhaustivas para
                    asegurar que todo esté en orden antes de la impresión.
                  </li>
                  <li className="font-bold">
                    - Experiencia y Profesionalismo: Nuestro equipo experto te
                    brinda un servicio confiable, asegurando que tu proyecto
                    esté en las mejores manos.
                  </li>
                </ul>
              </div>
            </EffectScroll>
          </div>
        </div>
        <div className="px-5">
          <EffectScroll classname="animate-fadeinbouncedown">
            <p className="text-center font-flamenco text-6xl bg-gradient-to-tl from-black via-zinc-900  bg-clip-text text-transparent">
              Con LUXOFLEX transforma tu visión en realidad
            </p>
          </EffectScroll>
          <EffectScroll>
            <p className="text-center font-mono text-2xl bg-gradient-to-br from-black via-zinc-900  bg-clip-text text-transparent">
              No dejes al azar la calidad de tus impresiones.
            </p>
          </EffectScroll>
        </div>
        <EffectScroll classname="animate-fadeinbounceup duration-1000">
          <div className="hidden lg:block sm:flex flex-col lg:flex-row items-center justify-center ">
            <div className="py-10 flex flex-row w-full text-center text-lg font-bold ">
              <div className="flex justify-center w-full h-full">
                <Carousel
                  baseWidth={1200}
                  autoplay={true}
                  autoplayDelay={1500}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                  items={PREPRINTER_BENEFITS}
                />
              </div>
            </div>
          </div>
        </EffectScroll>
        <EffectScroll classname="animate-fadeinbounceup duration-1000">
          <div className="md:hidden flex flex-col lg:flex-row items-center justify-center ">
            <div className="py-10 flex flex-row w-full text-center text-lg font-bold ">
              <div className="flex justify-center w-full h-full">
                <Carousel
                  baseWidth={500}
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
      </div>
      <div className="h-20 bg-gradient-to-b from-[#FAFAFA] to-[#09090B]"></div>

    </div>
  );
}

{
  /* <div
          className=" w-full relative h-[600px]"
          style={{ height: "600px", position: "relative" }}
        >
          <FlowingMenu items={demoItems} />
        </div> */
}

// import { useState } from "react";
// import { User, Check, Printer, PaintBucket, Zap, Shield } from "lucide-react";
// import EffectScroll from "@/components/effectScroll";

// export default function Preprensa() {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   const processSteps = [
//     {
//       id: 1,
//       title: "Análisis",
//       icon: <User className="h-6 w-6" />,
//       description: "Revisamos tu diseño para identificar oportunidades de mejora",
//       color: "bg-purple-100",
//       iconBg: "bg-purple-500",
//       hoverColor: "bg-purple-200"
//     },
//     {
//       id: 2,
//       title: "Optimización",
//       icon: <PaintBucket className="h-6 w-6" />,
//       description: "Ajustamos colores, resolución y elementos para máxima calidad",
//       color: "bg-pink-100",
//       iconBg: "bg-pink-500",
//       hoverColor: "bg-pink-200"
//     },
//     {
//       id: 3,
//       title: "Pruebas",
//       icon: <Check className="h-6 w-6" />,
//       description: "Realizamos pruebas digitales para garantizar resultados perfectos",
//       color: "bg-green-100",
//       iconBg: "bg-green-500",
//       hoverColor: "bg-green-200"
//     },
//     {
//       id: 4,
//       title: "Pre-producción",
//       icon: <Printer className="h-6 w-6" />,
//       description: "Preparamos archivos finales optimizados para impresión",
//       color: "bg-yellow-100",
//       iconBg: "bg-yellow-500",
//       hoverColor: "bg-yellow-200"
//     }
//   ];

//   const benefits = [
//     {
//       id: 1,
//       title: "Calidad Excepcional",
//       icon: <Zap className="h-5 w-5 text-white" />,
//       description: "Impresiones nítidas y vibrantes que destacan tu marca",
//       color: "bg-blue-600"
//     },
//     {
//       id: 2,
//       title: "Ahorro de Costos",
//       icon: <Shield className="h-5 w-5 text-white" />,
//       description: "Evita errores costosos y reimpresiones innecesarias",
//       color: "bg-indigo-600"
//     }
//   ];

//   return (
//     <div className="w-full bg-[#fcfcfc] py-16 overflow-hidden">
//       {/* Header Section */}
//       <EffectScroll classname="animate-fadein duration-1000">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
//           <h1 className="text-center text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4">
//             Explora el poder de la <span className="text-blue-600">Preprensa</span>
//           </h1>
//           <p className="text-center text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
//             Optimiza tus proyectos de impresión con nuestro servicio profesional de preprensa
//           </p>
//         </div>
//       </EffectScroll>

//       {/* Main Content Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Column - Explanation */}
//         <EffectScroll classname="animate-fadeinleft duration-1000 lg:col-span-1">
//           <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-sm h-full">
//             <h2 className="text-3xl font-semibold text-gray-900 mb-6">¿Por qué elegir nuestro servicio?</h2>
//             <div className="space-y-6">
//               {benefits.map((benefit) => (
//                 <div key={benefit.id} className="flex items-start space-x-4">
//                   <div className={`${benefit.color} p-3 rounded-full flex-shrink-0`}>
//                     {benefit.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
//                     <p className="text-gray-600 mt-1">{benefit.description}</p>
//                   </div>
//                 </div>
//               ))}
//               <div className="mt-8 pt-6 border-t border-gray-200">
//                 <p className="text-lg text-gray-800">
//                   Con <span className="font-bold">LUXOFLEX</span>, cada detalle importa. Nuestro equipo experto
//                   garantiza que tu visión se convierta en realidad con precisión y excelencia.
//                 </p>
//                 <button className="mt-6 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 px-6 rounded-lg font-medium">
//                   Solicitar asesoría gratuita
//                 </button>
//               </div>
//             </div>
//           </div>
//         </EffectScroll>

//         {/* Right Column - Process Cards */}
//         <EffectScroll classname="animate-fadeinright duration-1000 lg:col-span-2">
//           <div className="lg:pl-8">
//             <h2 className="text-3xl font-semibold text-gray-900 mb-6">Nuestro proceso</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {processSteps.map((step) => (
//                 <div
//                   key={step.id}
//                   className={`${
//                     hoveredCard === step.id ? step.hoverColor : step.color
//                   } p-6 rounded-2xl transition-all duration-300 transform ${
//                     hoveredCard === step.id ? "scale-105" : ""
//                   } cursor-pointer h-full`}
//                   onMouseEnter={() => setHoveredCard(step.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                 >
//                   <div className="flex items-center space-x-4 mb-4">
//                     <div className={`${step.iconBg} p-3 rounded-full text-white`}>
//                       {step.icon}
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
//                   </div>
//                   <p className="text-gray-700">{step.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Results Section */}
//             <div className="mt-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
//               <h3 className="text-2xl font-bold mb-4">Resultados que impresionan</h3>
//               <p className="text-lg opacity-90 mb-6">
//                 Nuestro servicio de preprensa garantiza impresiones de calidad superior que
//                 elevan la percepción de tu marca y capturan la atención de tu audiencia.
//               </p>
//               <div className="grid grid-cols-2 gap-4 text-center">
//                 <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
//                   <p className="text-4xl font-bold">99%</p>
//                   <p className="text-sm mt-1">de clientes satisfechos</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
//                   <p className="text-4xl font-bold">+40%</p>
//                   <p className="text-sm mt-1">calidad visual mejorada</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </EffectScroll>
//       </div>

//       {/* Bottom CTA */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
//           <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
//             Transforma tu visión en realidad con LUXOFLEX
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//             No dejes al azar la calidad de tus impresiones. Nuestro equipo experto está listo para
//             llevar tus proyectos al siguiente nivel.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300">
//               Comenzar proyecto
//             </button>
//             <button className="border border-gray-300 hover:border-gray-400 bg-white text-gray-800 py-3 px-8 rounded-lg font-medium transition-all duration-300">
//               Ver ejemplos
//             </button>
//           </div>
//         </div>
//     </div>
//   );
// }
