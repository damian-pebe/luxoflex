import { background } from "@/const";

export default function Hero() {
  return (
    <div className="relative h-[300px] rounded-b-3xl overflow-hidden">
      <img
        src={background}
        alt="Visión"
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 pt-16 to-transparent flex items-center justify-center ">
        <h1 className="text-5xl md:text-7xl font-light font-serif leading-loose tracking-widest text-white drop-shadow-lg border-b-2 border-purple-600 pb-4 mb-6">
          Nuestra Mision
        </h1>
      </div>
    </div>
  );
}
