"use client";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/aceternity/3d-card";
import background from "@/assets/background.jpg";

export function Materials() {
  return (
    <div>
      <TitleSolidGradiant />
      <MaterialsCards />
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

 function TitleSolidGradiant() {
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


