import background from "@/assets/background.jpg";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import "./StartPage.css";
import ButtonStyle1 from "@/components/buttons_style/style1/button_style1";
import { useNavigate } from "react-router-dom";
export default function StartPage() {
  const words = ["color", "arte", "magia", "diseño", "pasion"];
  const words2 = [
    {
      text: "Transformamos",
      className: "font-audiowide font-extralight",
    },
    {
      text: "tus",
      className: "font-audiowide font-extralight",
    },
    {
      text: "ideas",
      className: "font-audiowide font-extralight",
    },
    {
      text: "en",
      className: "font-audiowide font-extralight",
    },
    {
      text: "etiquetas",
      className: "font-audiowide font-extralight",
    },
    {
      text: "Inolvidables.",
      className: "text-blue-500 dark:text-blue-500 font-zilla font-light",
    },
  ];
const navigate = useNavigate();
  return (
    <div>
      <div className="relative h-screen shadow-md bg- ">
        <img
          className="w-full h-full object-cover md:object-cover opacity-40"
          src={background}
        />
        <div className="absolute inset-0 flex justify-center items-center px-4">
          <div className="flex flex-col items-center gap-10 justify-center h-[40rem]">
            <TypewriterEffect words={words2} />
            <div className="text-5xl mx-auto font-wire font-extrabold  text-foreground animate-slideinleft">
              Ponemos alma y <FlipWords words={words} /> en cada etiqueta.
            </div>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl  font-alfa tracking-widest first:mt-2 border-white animate-flyinup">
              Tu marca hablará por sí sola.
            </h2>
            <div className="flex flex-col gap-5 items-center md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 ">
              <div className="animate-slideindown">
                <ButtonStyle1 str="Contactanos ahora" onClick={() => navigate("/contactus")} />
              </div>
              <div className="animate-slideinup">
                <ButtonStyle1 str="Trabajos pasados" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
