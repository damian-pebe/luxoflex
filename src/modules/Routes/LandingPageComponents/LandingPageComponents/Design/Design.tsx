import RotatingText from "@/components/reactbits/rotating_text";

export function Design() {
  return (
    <div className="items-center justify-center flex flex-col min-h-screen bg-gradient-to-b from-black via-neutral-900">
      <div className=" mt-10 text-3xl md:text-5xl font-alfa font-light flex gap-2   text-white">
        Realizamos <br className="md:hidden" /> Diseños
        <RotatingText
          texts={["Profesionales!", "Elegantes!", "Relevantes!", "Formales!"]}
          mainClassName="p-7 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-2 justify-center rounded-lg"
          staggerFrom={"first"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <div className="text-white text-center text-lg md:text-2xl font-alfa font-light">
          Nuestros diseños son únicos y personalizados para cada cliente
        </div>
        <div className="text-white text-center text-lg md:text-2xl font-alfa font-light">
          Contamos con un equipo de diseñadores profesionales
        </div>
      </div>
    </div>
  );
}
