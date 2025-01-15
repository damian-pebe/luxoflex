import background from "@/assets/background.jpg";
import { FlipWords } from "@/components/ui/flip-words";

export default function LandingPage() {
  const words = ["innovative", "stylish", "elegant", "trendy"];

  return (
    <div>
      <div className="relative h-screen shadow-md bg-background ">
        <img
          className="w-full h-full object-cover md:object-cover opacity-50"
          src={background}
        />
        <div className="absolute inset-0 flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-normal text-foreground ">
            Build
            <FlipWords words={words} /> <br />
            websites with Luxoflex
          </div>
        </div>
      </div>
      <div>HOLA</div>
    </div>
  );
}
