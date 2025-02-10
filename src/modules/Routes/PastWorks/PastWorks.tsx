import background from "@/assets/background.jpg";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Materials } from "./Materials";
import Products from "./Products/Products";

export default function PastWorks() {
  const title = useTypewriter("  Nuestra Visión del Futuro");
    const subtitle = useTypewriter(" Construyendo el mañana, hoy");
  return (
    <div className="container pb-12 overflow-hidden">
    <div className="relative h-[300px] rounded-b-xl overflow-hidden opacity-0 animate-fadeinbouncedown hover:scale-105 transition-all duration-1000">
      <img
        src={background}
        alt="Imagen de visión"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-audiowide">
          {title}
          <span className="animate-pulse duration-800">|</span>
        </h1>
        <p className="text-xl text-gray-300 font-audiowide">
          {subtitle}
          <span className="animate-pulse duration-800">|</span>
        </p>
      </div>
    </div>
    
    <Materials />
    <Products />
    
    </div>
  )
}
