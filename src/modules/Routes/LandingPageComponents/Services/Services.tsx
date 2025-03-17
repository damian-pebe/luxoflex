import { Divider } from "antd";
import { ChevronRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { logo } from "@/const";
import { ThreeDotsWhite } from "@/components/ReusableIcons/ReusableIcons";
export default function Services() {
  return (
    <div className="bg-[#FAFAFA] h-full flex flex-col space-y-14 py-5">
<ThreeDotsWhite/>
      <h1 className="uppercase text-black text-5xl flex justify-center w-full italic font-dancing font-semibold pt-10">
        Nuestros Servicios
      </h1>

      <div className=" flex flex-row justify-center gap-20 items-center text-black px-5 ">
        <div className="font-poppins font-normal italic text-5xl">
          <div className="flex gap-2">
            CREAMOS ETIQUETAS{" "}
            <div className="font-extralight font-flamenco">para</div>
          </div>
          <div className="flex gap-2">
            EMPRESAS
            <div className="font-black">SOBRESALIENTES</div>
          </div>
        </div>
        <Link
          to="/luxoflex"
          className="group flex flex-row justify-center items-center w-72 font-raleway"
        >
          <div className="text-xs">
            LUXOFLEX está impulsado por la innovación y la excelencia en
            impresión. Nos enfocamos en precisión, rapidez y calidad para
            ofrecer etiquetas que destacan.{" "}
            <div className="text-center font-black">¡Haz el cambio!</div>
          </div>
          <ChevronRight className="w-56 group-hover:rotate-180 transition-all duration-1000" />
        </Link>
      </div>

      <div className="flex justify-center gap-12 px-5">
        <div className="h-[330px] w-[300px] bg-white rounded-lg drop-shadow-xl flex flex-col justify-center items-center gap-6 text-black">
          <img className="h-[250px] w-[200px] rounded-md" src="" />
          <div className="flex flex-roe justify-between items-center w-full">
            <div className="w-full font-serif font-light italic text-xs uppercase pl-5">
            Etiquetas autohaderibles de flexografia
            </div>
            <Plus className="w-36 text-black font-black hover:cursor-pointer hover:rotate-180 transition-all duration-1000" />
          </div>
        </div>
        <div className="h-[330px] w-[300px] bg-white rounded-lg drop-shadow-xl flex flex-col justify-center items-center gap-6 text-black">
          <img className="h-[250px] w-[200px] rounded-md" src="" />
          <div className="flex flex-roe justify-between items-center w-full">
            <div className="w-full font-serif font-light italic text-xs uppercase pl-5">
            Mangas para tequilas y vinos
            </div>
            <Plus className="w-36 text-black font-black hover:cursor-pointer hover:rotate-180 transition-all duration-1000" />
          </div>
        </div>
        <div className="h-[330px] w-[300px] bg-white rounded-lg drop-shadow-xl flex flex-col justify-center items-center gap-6 text-black">
          <img className="h-[250px] w-[200px] rounded-md" src="" />
          <div className="flex flex-roe justify-between items-center w-full">
            <div className="w-full font-serif font-light italic text-xs uppercase pl-5">
            Armado de preprensa profesional
            </div>
            <Plus className="w-36 text-black font-black hover:cursor-pointer hover:rotate-180 transition-all duration-1000" />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-start space-x-8 items-center text-black px-14 pb-10">
        <div className="w-48 h-full">
          <Divider className="bg-black h-[3px]" />
        </div>
        <img src={logo} className="h-16" />
        <div className="text-xs flex flex-row justify-center items-center w-96 font-rajdhani">
          Al elegir nuestros servicios, tus diseños serán desarrollados por
          profesionales con más de 15 años de experiencia, garantizando calidad,
          precisión e innovación.
        </div>
      </div>

      <ThreeDotsWhite/>

    </div>
  );
}
