"use client";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/aceternity/3d-card";
import background from "@/assets/background.jpg";
import Divider from "@/components/divider";

export function Materials() {
  return (
    <div>
      <BackgroundLinesDemo />
      <MaterialsCards />
      <Divider />
      <PoweringTeams />
    </div>
  );
}
function MaterialsCards() {
  const materials = [
    { name: "Material 1", image: background, info: "Info about Material 1" },
    { name: "Material 2", image: background, info: "Info about Material 2" },
    { name: "Material 3", image: background, info: "Info about Material 3" },
    { name: "Material 4", image: background, info: "Info about Material 4" },
    { name: "Material 5", image: background, info: "Info about Material 5" },
    { name: "Material 6", image: background, info: "Info about Material 6" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-gradient-to-b  from-black via-zinc-900 to-black    p-6 rounded-lg shadow-lg">
      {materials.map((material, index) => (
        <CardContainer className="inter-var cursor-pointer" key={index}>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white font-sigmar text-center"
            >
              {material.name}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300 font-playfair text-center"
            >
              {material.info}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={material.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

export function BackgroundLinesDemo() {
  return (
    <div className="flex items-center justify-center w-full flex-col px-4 ">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b  from-neutral-600 to-white text-5xl md:text-6xl lg:text-8xl font-sans py-2 relative z-20 font-bold tracking-tight">
        Eleva tu experiencia <br /> con <br />
        LUXOFLEX.
      </h2>
      <p className=" mx-auto text-lg md:text-xl text-neutral-700 dark:text-neutral-400 text-center pb-5">
        Conoce los materiales que usamos para crear las mejores etiquetas.
      </p>
    </div>
  );
}

const PoweringTeams = () => {
  return (
    <div className=" text-white text-center py-10 from-black to-zinc-900">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Impulsando los mejores productos.
      </h2>
      <p className="text-lg md:text-xl mb-8">
        Desde startups de nueva generación hasta empresas consolidadas.
      </p>
      <div className="flex justify-center flex-wrap">
        <img
          src="https://static.wixstatic.com/media/770576_efbe706aeee34b17933cc0c3ee802407~mv2.png/v1/fill/w_540,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-CON-FRANJA-BLANCA.png"
          alt="La Coculence"
          className="h-12 mx-4"
        />
        <img
          src="/path/to/vercel-logo.png"
          alt="Vercel"
          className="h-12 mx-4"
        />
        <img src="/path/to/scale-logo.png" alt="Scale" className="h-12 mx-4" />
        <img src="/path/to/arc-logo.png" alt="ARC" className="h-12 mx-4" />
        <img
          src="/path/to/cashapp-logo.png"
          alt="Cash App"
          className="h-12 mx-4"
        />
        <img
          src="/path/to/retool-logo.png"
          alt="Retool"
          className="h-12 mx-4"
        />
      </div>
    </div>
  );
};
