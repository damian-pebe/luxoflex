import background from "@/assets/background.jpg";
import ButtonShadow from "@/components/buttons_style/button_shadow";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function LandingPage() {
  const words = ["innovative", "stylish", "elegant", "trendy"];
  const words2 = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Luxoflex.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div>
      <div className="relative h-screen shadow-md bg-background ">
        <img
          className="w-full h-full object-cover md:object-cover opacity-50"
          src={background}
        />
        <div className="absolute inset-0 flex justify-center items-center px-4">
         
          <div className="flex flex-col items-center justify-center h-[40rem] ">
          <div className="text-4xl mx-auto font-normal text-foreground ">
            Build
            <FlipWords words={words} /> 
            websites with Luxoflex
          </div>
            {/* <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
              The road to freedom starts from here
            </p> */}
            <TypewriterEffect words={words2} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
              <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                Join now
              </button>
              <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                Signup
              </button>
              <ButtonShadow str="Contactanos">
                
              </ButtonShadow>
              <Button variant="ghost">Outline</Button>
            </div>
          </div>
        </div>
      </div>
      <div>HOLA</div>
    </div>
  );
}
