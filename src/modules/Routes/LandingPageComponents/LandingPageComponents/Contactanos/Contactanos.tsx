"use client";
import { DividerNoSpacing } from "@/components/divider";
import "./Contactanos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FormContact from "./components/FormContact";
import { PinContainer } from "@/components/ui/3d-pin";

import Socials from "./components/Socials";
import {
  Whatsapp,
  EnvelopeFill,
  TelephoneFill,
  Facebook,
  Instagram,
  Globe,
} from "react-bootstrap-icons";
import TrueFocus from "@/components/reactbits/true_focus";
import SpotlightCard from "@/components/reactbits/spotlight_card";
import { Button } from "@/components/ui/button";
import EffectScroll from "@/components/effectScroll";

export default function Contactanos() {
  return (
    <div className=" bg-gradient-to-b from-black via-gray-950 to-black p-6 rounded-lg shadow-lg">
      <EffectScroll classname="animate-fadein duration-1000">
        <TitleSolidGradiant />
      </EffectScroll>
      <div className="group justify-evenly flex flex-col md:flex-row gap-10 ">
          
       

        <div className=" md:block hidden flex-1  transition-all duration-1000">
          <div className="pb-8 justify-center flex items-center  text-4xl font-extralight font-raleway">
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
            <AnimatedPinDemo />
          </EffectScroll>
        </div>
        <div className="sm:block md:hidden py-2 flex flex-col justify-center w-full ">
          <div className="pb-8 justify-center flex items-center  text-4xl font-extralight font-raleway">
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
          <EffectScroll classname="animate-fadeinbouncedown">
            <Socials />
          </EffectScroll>
        </div>

        {/* <EffectScroll classname="animate-fadeinleft duration-1000">
            <FormContact />
          </EffectScroll> */}
      </div>
      <div className="md:hidden block">
        <DividerNoSpacing />
      </div>
      <ContactData />
      <EffectScroll classname="animate-fadeinleft duration-1000">
            <FormContact />
          </EffectScroll>
    </div>
  );
}

function TitleSolidGradiant() {
  return (
    <div className="flex items-center justify-center w-full flex-col px-4 ">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-t  from-neutral-600 to-white text-7xl lg:text-8xl py-2 relative z-20 font-bold font-poppins tracking-tight">
        Eleve su marca <br /> con <br />
        LUXOFLEX.
      </h2>
      <p className=" mx-auto text-lg md:text-xl text-neutral-700 dark:text-neutral-400 text-center pb-5">
        ¡Cuéntanos tu idea, nosotros la haremos realidad!
      </p>
    </div>
  );
}

function AnimatedPinDemo() {
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-3 gap-10 justify-center">
          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem]">
              <h3 className="text-lg max-w-xs !pb-1 !m-0 font-extralight font-zilla text-slate-100">
                PaginaWeb
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-gray-500 text-xs">
                  LUXOFLEX tiene contacto por medio de Email
                </span>
              </div>
              <div className="flex flex-1 w-full bg-gray-800 hover:bg-purple-900 duration-300 rounded-lg mt-2  justify-center items-center">
                <Globe className="h-12 w-12 text-purple-600" />
              </div>
            </div>
          </PinContainer>

          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem]">
              <h3 className="text-lg max-w-xs !pb-1 !m-0 font-extralight font-zilla text-slate-100">
                Email
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-gray-500 text-xs">
                  LUXOFLEX tiene contacto por medio de Email
                </span>
              </div>
              <div className="flex flex-1 w-full bg-gray-800 hover:bg-red-900 duration-300 rounded-lg mt-2  justify-center items-center">
                <EnvelopeFill className="h-12 w-12 text-red-600" />
              </div>
            </div>
          </PinContainer>

          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem]">
              <h3 className="text-lg max-w-xs !pb-1 !m-0 font-extralight font-zilla text-slate-100">
                Llamadas
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-gray-500 text-xs">
                  LUXOFLEX tiene contacto por medio de telefono celular
                </span>
              </div>
              <div className="flex flex-1 w-full bg-gray-800 hover:bg-teal-900 duration-300 rounded-lg mt-2  justify-center items-center">
                <TelephoneFill className="h-12 w-12 text-teal-600" />
              </div>
            </div>
          </PinContainer>

          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem]">
              <h3 className="text-lg max-w-xs !pb-1 !m-0 font-extralight font-zilla text-slate-100">
                WhatsApp
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-gray-500 text-xs">
                  LUXOFLEX tiene contacto por medio de WhatsApp
                </span>
              </div>
              <div className="flex flex-1 w-full bg-gray-800 hover:bg-green-900 duration-300 rounded-lg mt-2  justify-center items-center">
                <Whatsapp className="h-12 w-12 text-green-600" />
              </div>
            </div>
          </PinContainer>

          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem]">
              <h3 className="text-lg max-w-xs !pb-1 !m-0 font-extralight font-zilla text-slate-100">
                Facebook
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-gray-500 text-xs">
                  LUXOFLEX tiene contacto por medio de Facebook
                </span>
              </div>
              <div className="flex flex-1 w-full bg-gray-800 hover:bg-blue-900 duration-300 rounded-lg mt-2  justify-center items-center">
                <Facebook className="h-12 w-12 text-blue-600" />
              </div>
            </div>
          </PinContainer>

          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem]">
              <h3 className="text-lg max-w-xs !pb-1 !m-0 font-extralight font-zilla text-slate-100">
                Instagram
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-gray-500 text-xs">
                  LUXOFLEX tiene contacto por medio de Instagram
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-2 bg-gray-800 hover:bg-pink-900 duration-300 justify-center items-center">
                <Instagram className="h-12 w-12 text-pink-600" />
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}

function ContactData() {
  const data = [
    {
      name: "Martin Ojeda",
      hrefEmail: "mailto:martin@gmail.com",
      hrefPhone: "3311940001",
      hrefWhatsapp: "3311940001",
      hrefFacebook: "https://facebook.com/martin",
      hrefInstagram: "https://instagram.com/martin",
      description:
        "CEO y Fundador de LUXOFLEX\nCon más de 15 años de experiencia en la industria de etiquetas autoadheribles",
    },
    {
      name: "Mayra Becerril",
      hrefEmail: "mailto:mayra@gmail.com",
      hrefPhone: "3334626001",
      hrefWhatsapp: "3334626001",
      hrefFacebook: "https://facebook.com/mayra",
      hrefInstagram: "https://instagram.com/mayra",
      description:
        "CEO y Fundadora de LUXOFLEX\nCon más de 8 años de experiencia en etiquetas autoadheribles.",
    },
  ];
  return (
    <div>
      <EffectScroll>
        <a className=" pt-36 bg-clip-text text-transparent text-center bg-gradient-to-r  from-neutral-600 to-white text-2xl md:text-4xl py-2 relative z-20 font-bold font-sigmar tracking-tight flex justify-center">
          CONTACTANOS PERSONALMENTE
        </a>
      </EffectScroll>
      <div className=" pt-20 flex flex-col lg:flex-row justify-center gap-6  ">
        {data.map((user) => (
          <EffectScroll classname="flex justify-center items-center animate-fadein duration-1000">
            <SpotlightCard
              className="custom-spotlight-card w-96 h-72"
              spotlightColor="rgba(255, 255, 255, 0.3)"
            >
              <div className="flex flex-col justify-between gap-5">
                <span className="text-2xl font-audiowide">{user.name}</span>
                <div className=" text-lg font-serif  overflow-hidden">
                  {user.description}
                </div>

                <div className="space-y-1 pb-1">
                  <div className="flex flex-wrap justify-center gap-2">
                    <i
                      onClick={() =>
                        (window.location.href = `tel:+52${user.hrefPhone}`)
                      }
                      className="hover:cursor-pointer bi bi-telephone-outbound text-lg  transition-all duration-1000 text-white hover:text-teal-600 hover:scale-150"
                    ></i>

                    <i
                      onClick={() =>
                        (window.location.href = `https://wa.me/+52${user.hrefWhatsapp}`)
                      }
                      className="hover:cursor-pointer bi bi-whatsapp text-lg  transition-all duration-1000 text-white hover:text-green-600 hover:scale-150"
                    ></i>

                    <i
                      onClick={() => (window.location.href = user.hrefFacebook)}
                      className="hover:cursor-pointer bi bi-facebook text-lg  transition-all duration-1000 text-white hover:text-blue-600 hover:scale-150"
                    ></i>

                    <i
                      onClick={() =>
                        (window.location.href = user.hrefInstagram)
                      }
                      className="hover:cursor-pointer bi bi-instagram text-lg  transition-all duration-1000 text-white hover:text-pink-600 hover:scale-150"
                    ></i>
                  </div>
                  <Button
                    variant="default"
                    className="w-full hover:bg-black hover:text-white font-poppins font-light  transition-colors duration-1000"
                    onClick={() =>
                      (window.location.href = `tel:+52${user.hrefPhone}`)
                    }
                  >
                    Contactame
                  </Button>
                </div>
              </div>
            </SpotlightCard>{" "}
          </EffectScroll>
        ))}
      </div>
    </div>
  );
}
