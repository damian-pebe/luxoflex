import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";
import { background } from "@/const";
import {  ThreeDotsVertical } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  return (
    <div className="h-full bg-black text-white relative overflow-hidden py-5">
      <ThreeDotsBlack top={true} />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-black/50 z-0" />
      <div className="relative z-10 flex flex-col md:flex-row gap-14 py-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="w-full flex flex-col justify-center font-rajdhani text-2xl font-light text-white/90 text-center hover:font-bold transition-all duration-700 hover:translate-y-[5px]">
          <img
            src={background}
            alt="Etiquetas personalizadas"
            className="object-cover w-full max-w-[400px] md:max-w-[600px] h-[300px] md:h-[600px] rounded-lg shadow-2xl transform hover:cursor-crosshair hover:-rotate-1 hover:-translate-y-[10px] transition-transform duration-700 opacity-80"
          />
          La coculence
        </div>

        <div className="w-full flex flex-col justify-center space-y-6 md:space-y-8 py-4 md:py-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-rajdhani leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Etiquetas Premium Personalizadas
          </h1>

          <p className="text-lg md:text-xl font-light font-poppins text-gray-300">
            Descubre nuestro portafolio de trabajos anteriores y diseños
            exclusivos.
          </p>

          <div className="animate-slideinup duration-1000 flex">
            <button
              onClick={() => navigate("/pastworks")}
              className="group flex items-center gap-x-3 font-poppins border font-semibold hover:bg-white hover:text-black text-white px-14 py-4 rounded-full transform hover:-translate-y-[5px] transition-all duration-700 shadow-xl hover:shadow-white/20"
            >
              Ver Portafolio
              <ThreeDotsVertical className="group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
      
      <ThreeDotsBlack />
    </div>
  );
}
