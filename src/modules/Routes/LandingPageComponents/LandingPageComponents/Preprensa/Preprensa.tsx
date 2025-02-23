import TextPressure from "./title";
import Carousel from "./Carousel";
import { User } from "lucide-react";
import { CarouselItem } from "./models/Models";
import background from "@/assets/background.jpg";
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
    <div className="md:px-32 w-full flex flex-col bg-gradient-to-b  text-white">
      <EffectScroll classname="duration-1000 animate-fadein">
        <div className="py-5 relative ">
          <TextPressure
            text="Preprensa"
            flex={true}
            alpha={false}
            stroke={true}
            width={true}
            weight={true}
            italic={true}
            textColor="#f0f0f0"
            strokeColor="#2563eb"
            minFontSize={36}
          />
        </div>
      </EffectScroll>
      <div className="px-5 h-full md:px-14 flex  items-center justify-center">
        <div className="gap-6 flex h-full flex-col lg:flex-row w-full items-center text-center text-lg font-bold">
          <EffectScroll>

          <div className="relative flex flex-col justify-center items-start w-full ">
            <img
              src={background}
              className="object-cover opacity-30 rounded-2xl w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white">
              <h2 className="font-unica text-4xl font-extrabold mb-3">
                ¡Descubre las Ventajas de la{" "}
                <span className="text-blue-600">Preprensa en LUXOFLEX</span>!
              </h2>
              <p className="text-2xl mb-4">
                Lleva tus diseños al siguiente nivel con nuestro servicio de
                preprensa de calidad superior.
              </p>
            </div>
          </div>
          </EffectScroll>

         <EffectScroll>
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
                - Colores Vibrantes: Ajustamos los colores y la resolución para
                que tu diseño destaque y atraiga miradas.
              </li>
              <li className="font-bold">
                - Pruebas Digitales: Realizamos pruebas exhaustivas para
                asegurar que todo esté en orden antes de la impresión.
              </li>
              <li className="font-bold">
                - Experiencia y Profesionalismo: Nuestro equipo experto te
                brinda un servicio confiable, asegurando que tu proyecto esté en
                las mejores manos.
              </li>
            </ul>
          </div>
          </EffectScroll>
        </div>
      </div>
      <div className="px-5">
        <EffectScroll classname="animate-fadeinbouncedown">

        <p className="text-center font-flamenco text-6xl bg-gradient-to-tl from-white via-zinc-300  bg-clip-text text-transparent">
          Con LUXOFLEX transforma tu visión en realidad
        </p>
        </EffectScroll>
        <EffectScroll >

        <p className="text-center font-mono text-2xl bg-gradient-to-br from-white via-zinc-400  bg-clip-text text-transparent">
          No dejes al azar la calidad de tus impresiones.
        </p>
        </EffectScroll>
      </div>
      <EffectScroll classname="animate-fadeinbounceup">

      <div className="hidden lg:block sm:flex flex-col lg:flex-row items-center justify-center ">
        <div className="py-10 flex flex-row w-full text-center text-lg font-bold ">
          <div className="flex justify-center w-full h-full">
            <Carousel
              baseWidth={1200}
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
      <EffectScroll classname="animate-fadeinbounceup">

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
