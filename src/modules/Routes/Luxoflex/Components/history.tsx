import { ThreeDotsWhite } from "@/components/ReusableIcons/ReusableIcons";
import { background } from "@/const";

export default function OurProducts() {
  return (
    <div className="bg-[#e5e5e5] text-neutral-900 py-5 px-6 flex flex-col items-center">
      <ThreeDotsWhite top={true} />
      <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 tracking-tight">
        Nuestra Historia
      </h2>
      <div className="w-full px-10 flex justify-between">
        <img src={background} className="object-cover w-[400px] h-[500px]" />
      hola
      </div>

      <div className="mt-16">
        <ThreeDotsWhite />
      </div>
    </div>
  );
}
