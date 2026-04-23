"use client";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/aceternity/3d-card";
import { Button } from "@/components/ui/button";
import { background } from "@/const";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
export function Materials() {
  return (
    <div className="bg-gradient-to-b  from-black via-zinc-900 to-black py-8">

      <h2 className=" pt-20 bg-clip-text text-transparent text-center bg-gradient-to-b  from-neutral-600 to-white text-7xl md:text-8xl font-sans md:py-2 relative z-20 font-bold tracking-tight">
        Galeria <br />
        LUXOFLEX
      </h2>
      <MaterialsCards />
    </div>
  );
}
function MaterialsCards() {
  const materials = [
    { name: "Bopp Plata", image: background, info: "Info about Material 1" },
    { name: "Material 2", image: background, info: "Info about Material 2" },
    { name: "Material 3", image: background, info: "Info about Material 3" },
    { name: "Material 4", image: background, info: "Info about Material 4" },
    { name: "Material 5", image: background, info: "Info about Material 5" },
    { name: "Material 6", image: background, info: "Info about Material 6" },
  ];
  const [sliceVariable, setSliceVariable] = useState(2);
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div className="w-full flex flex-col justify-center transition-transform duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center     p-6 rounded-lg shadow-lg">
        {materials.slice(0, sliceVariable).map((material, index) => (
          <CardContainer className="inter-var cursor-pointer" key={index}>
            <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.2]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
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
      {open && (
        <div className="group flex justify-center transition-all duration-1000  ">
          <Button
            className="font-poppins text-3xl text-center"
            variant="link"
            onClick={() => {
              setOpen((prev) => !prev);
              setSliceVariable(materials.length);
            }}
          >
            View More
          </Button>
          <ChevronDown
            className="group-hover:rotate-180 transition-all duration-1000"
            width={40}
            height={40}
          />
        </div>
      )}
      {!open && (
        <div className="group flex justify-center transition-all duration-1000  ">
          <Button
            className="font-poppins text-3xl text-center"
            variant="link"
            onClick={() => {
              setOpen((prev) => !prev);
              setSliceVariable(2);
            }}
          >
            View Less
          </Button>
          <ChevronDown
            className="group-hover:rotate-0 rotate-180 transition-all duration-1000"
            width={40}
            height={40}
          />
        </div>
      )}
    </div>
  );
}
