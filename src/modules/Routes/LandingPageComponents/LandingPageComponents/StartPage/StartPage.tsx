import { background } from "@/const";

import { logo } from "@/const";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import "./StartPage.css";
import ButtonStyle1 from "@/components/buttons_style/style1/button_style1";
import { useNavigate } from "react-router-dom";
import EffectScroll from "@/components/effectScroll";

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
            <EffectScroll classname="[mask-image:radial-gradient(ellipse_at_center,white,transparent)] border-white/30 rounded-lg border-4 p-1 w-32 md:w-48 animate-fadeinbouncedown min-w min-h flex justify-center">
              <img
                className=" h-20 md:h-36 transition-transform duration-1000 hover:cursor-crosshair"
                src={logo}
                style={{
                  transform: "perspective(5000px) rotateY(0deg)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(5000px) rotateY(40deg) rotateX(40deg) scale(1.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(5000px) rotateY(0deg)";
                }}
              />
            </EffectScroll>
            <EffectScroll classname="animate-fadeinbounceup ">
              <TypewriterEffect words={words2} />
            </EffectScroll>

            <EffectScroll classname="animate-fadeinbounceleft">
              <div className="text-center text-4xl md:text-5xl mx-auto font-wire font-extrabold  text-foreground animate-fadeinbounceleft">
                Ponemos alma y <FlipWords words={words} /> en cada etiqueta.
              </div>
            </EffectScroll>

            <h2 className="text-center scroll-m-20 border-b pb-2 text-lg md:text-3xl  font-alfa tracking-widest first:mt-2 border-white animate-fadeinbounceright">
              <EffectScroll classname="animate-fadeinbounceright">
                Tu marca hablará por sí sola.
              </EffectScroll>
            </h2>

            <div className="flex flex-col gap-5 items-center md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 ">
              <div className="animate-slideindown">
                <EffectScroll>
                  <ButtonStyle1
                    str="Contactanos ahora"
                    onClick={() => navigate("/contactus")}
                  />
                </EffectScroll>
              </div>
              <div className="animate-slideinup">
                <EffectScroll>
                  <ButtonStyle1
                    str="Trabajos pasados"
                    onClick={() => navigate("/pastworks")}
                  />
                </EffectScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
