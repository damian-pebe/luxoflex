import { Cards } from "./Cards";
import { useState } from "react";
import { InfiniteMovingCardsDemo } from "./carousel-infinity";
import Skeleton from "antd/es/skeleton";
import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";
export default function Impulsa() {
  const [isLoading] = useState(false);

  return (
    <div className="w-full pb-5">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {isLoading ? (
          <>
            <div className="space-y-4 w-full">
              <Skeleton className="h-12 w-3/4 mx-auto" />
              <Skeleton className="h-[200px] w-full" />
            </div>
          </>
        ) : (
          <>
            <h3 className="text-5xl text-center font-bungee font-extralight text-gray-200 mb-8">
              Lo que dicen nuestros clientes
            </h3>
            <InfiniteMovingCardsDemo />
          </>
        )}
        <h2 className="w-full font-serif pt-5 flex justify-center  text-5xl md:text-7xl font-bold text-center tracking-widest">
          Lo que nos Impulsa
        </h2>
      </div>
      <p className=" text-center text-gray-200 max-w-3xl font-orbitron mx-auto mb-6 animate-fadeIn tracking-wider">
        Nos dedicamos a revolucionar la industria de etiquetas autoadheribles
      </p>
      <Cards />
      <ThreeDotsBlack />
    </div>
  );
}
