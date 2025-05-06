import { background } from "@/const";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  Whatsapp,
  EnvelopeFill,
  TelephoneFill,
  Facebook,
  Instagram,
  TwitterX,
} from "react-bootstrap-icons";
import TrueFocus from "@/components/reactbits/true_focus";
import EffectScroll from "@/components/effectScroll";
import GlassIcons from "@/components/reactbits/GlassIcons";
import { useScrollToTop } from "@/hooks/scrollToTop";
import Contactanos from "../LandingPageComponents/LandingPageComponents/Contactanos/Contactanos";
import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";

export default function ContactUs() {
  const words2 = [
       {
      text: "Estamos",
      className: "font-audiowide font-extralight text-white",
    },
    {
      text: "Aquí",
      className: "font-audiowide font-bold text-white",
    },
    {
      text: "para",
      className: "font-audiowide font-extralight text-white",
    },
    {
      text: "Impulsar",
      className: "font-zilla font-bold italic dark:text-blue-500",
    },
    {
      text: "tus",
      className: "font-audiowide font-light text-white",
    },
    {
      text: "Proyectos.",
      className: "font-zilla font-semibold dark:text-blue-400",
    },
  ];
  

  const items = [
    { icon: <Whatsapp />, color: "whatsapp", label: "WhatsApp" },
    { icon: <Facebook />, color: "facebook", label: "Facebook" },
    { icon: <Instagram />, color: "instagram", label: "Instagram" },
    { icon: <TwitterX />, color: "twitter", label: "X" },
    { icon: <EnvelopeFill />, color: "gmail", label: "Gmail" },
    { icon: <TelephoneFill />, color: "whatsapp", label: "Phone Call" },
  ];
  useScrollToTop(236);
  return (
    <div className="container overflow-hidden">
      <div className="relative h-[200px] rounded-b-xl overflow-hidden opacity-0 animate-fadeinbouncedown hover:scale-105 transition-all duration-1000 ">
        <img
          src={background}
          alt="Imagen de contacto"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <TypewriterEffect words={words2} />
        </div>
      </div>

      <Contactanos />

      <div className="flex flex-col w-full py-5">
        <ThreeDotsBlack top={true} />

        <div className="flex flex-col w-full transition-all duration-1000 py-20">
          <div className="pb-20 justify-center flex items-center text-4xl font-extralight font-raleway">
            <EffectScroll classname="animate-fadein duration-1000">
              <TrueFocus
                sentence="Redes sociales"
                manualMode={false}
                blurAmount={5}
                borderColor="rgba(29, 204, 206, 0.8)"
                animationDuration={2}
                pauseBetweenAnimations={0.5}
              />
            </EffectScroll>
          </div>
          <EffectScroll classname="animate-fadein duration-1000">
            <div className="relative h-full">
              <GlassIcons items={items} className="custom-class" />
            </div>
          </EffectScroll>
        </div>
        <ThreeDotsBlack />
      </div>
    </div>
  );
}
