import { Divider } from "antd";
import { ChevronRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { logo } from "@/const";
import { ThreeDotsWhite } from "@/components/ReusableIcons/ReusableIcons";
import { flexo_img, manga_img, preprensa_img } from "@/const";

export default function Services() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col space-y-14 py-8 px-3 md:px-10">
      <ThreeDotsWhite top={true} />

      <h1 className="uppercase text-black text-5xl md:text-7xl flex justify-center w-full font-lobster font-light pt-10 text-center">
        Nuestros Servicios
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-center text-black">
        <div className="font-poppins font-normal italic text-3xl md:text-5xl text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-center md:items-start justify-center md:justify-start">
            CREAMOS ETIQUETAS{" "}
            <div className="font-extralight font-flamenco">para</div>
          </div>
          <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-center md:items-start justify-center md:justify-start">
            EMPRESAS <div className="font-black">SOBRESALIENTES</div>
          </div>
        </div>

        <Link
          to="/luxoflex"
          className="group md:flex flex-col hidden md:flex-row justify-center items-center w-full md:w-72 text-center md:text-left font-raleway"
        >
          <div className="text-xs md:text-sm px-4 md:px-0">
            LUXOFLEX está impulsado por la innovación y la excelencia en
            impresión.
            <div className="font-black mt-1">¡Haz el cambio!</div>
          </div>
          <ChevronRight className="w-10 md:w-56 group-hover:rotate-180 transition-all duration-1000 mt-4 md:mt-0" />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-12 px-2 md:px-5 items-center">
        {[
          { img: flexo_img, text: "Etiquetas autohaderibles de flexografia" },
          { img: manga_img, text: "Mangas para tequilas y vinos" },
          { img: preprensa_img, text: "Armado de preprensa profesional" },
        ].map((item, index) => (
          <div
            key={index}
            className="h-[370px] w-full md:w-[300px] bg-white rounded-lg drop-shadow-xl flex flex-col justify-center items-center gap-4 text-black px-4 transform hover:cursor-pointer hover:-translate-y-[10px] transition-transform duration-700"
          >
            <img
              className="h-[200px] w-[200px] rounded-md object-cover"
              src={item.img}
              alt={`service-${index}`}
            />
            <div className="flex justify-between items-center w-full">
              <div className="w-full font-rajdhani text-lg uppercase">
                {item.text}
              </div>
              <Plus className="w-6 md:w-36 text-black font-black hover:cursor-pointer hover:rotate-180 transition-all duration-1000" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-start md:justify-center gap-6 md:gap-8 items-center text-black px-4 md:px-14 pb-10 text-center md:text-left">
        <div className="w-full md:w-48">
          <Divider className="bg-black h-[3px]" />
        </div>
        <img src={logo} className="h-16" alt="logo" />
        <div className="text-sm md:text-base w-full md:w-96 font-rajdhani">
          Al elegir nuestros servicios, tus diseños serán desarrollados por
          profesionales con más de 15 años de experiencia, garantizando calidad,
          precisión e innovación.
        </div>
      </div>

      <ThreeDotsWhite />
    </div>
  );
}
