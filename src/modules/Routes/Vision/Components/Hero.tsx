import { background } from "@/const";

export default function Hero() {
  return (
    <div className="relative h-[300px] rounded-b-3xl overflow-hidden">
      <img
        src={background}
        alt="Visión"
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 pl-10  to-transparent flex items-end justify-start">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-serif text-white drop-shadow-lg border-b-2 border-blue-600">
          Nuestra Visión
        </h1>
      </div>
    </div>
  );
}
