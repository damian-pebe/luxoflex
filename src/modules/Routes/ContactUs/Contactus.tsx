import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { background } from "@/const";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Socials from "../LandingPageComponents/LandingPageComponents/Contactanos/components/Socials";
import MapComponent from "./Map";
import {
  Whatsapp,
  EnvelopeFill,
  TelephoneFill,
  Facebook,
  Instagram,
  TwitterX,
} from "react-bootstrap-icons";
import TrueFocus from "@/components/reactbits/true_focus";
import FormContact from "../LandingPageComponents/LandingPageComponents/Contactanos/components/FormContact";
import EffectScroll from "@/components/effectScroll";
import GlassIcons from "@/components/reactbits/GlassIcons";
import { useScrollToTop } from "@/hooks/scrollToTop";

export default function ContactUs() {
  const enterpriseInfo = {
    address:
      "C. Pedro García Conde 282 Col. Villa Hermosa, Guadalajara, Jalisco, Mexico",
    phone: "+52 33 34626001",
    email: "luxoflex1ventas@gmail.com",
    schedule: "Lunes a Domingo: 08:00 - 20:00",
  };

  const words2 = [
    {
      text: "Estamos",
      className: "font-audiowide font-extralight",
    },
    {
      text: "aquí",
      className: "font-audiowide font-extralight",
    },
    {
      text: "para",
      className: "font-audiowide font-extralight",
    },
    {
      text: "ayudarte",
      className: "font-audiowide font-extralight",
    },
    {
      text: "con",
      className: "font-audiowide font-extralight",
    },
    {
      text: "tus",
      className: "font-audiowide font-extralight",
    },
    {
      text: "Proyectos.",
      className: "text-blue-500 dark:text-blue-500 font-zilla font-light",
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
  useScrollToTop();
  return (
    <div className="container pb-12 overflow-hidden">
      <div className="relative h-[300px] rounded-b-xl overflow-hidden opacity-0 animate-fadeinbouncedown hover:scale-105 transition-all duration-1000 ">
        <img
          src={background}
          alt="Imagen de contacto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <TypewriterEffect words={words2} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
        <div className="space-y-6">
          <Card className="animate-flyinleft">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Información de Contacto
              </CardTitle>
              <CardDescription>
                Encuentra todas las formas de conectarte con nosotros
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>{enterpriseInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p>{enterpriseInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Horario</h4>
                    <p>{enterpriseInfo.schedule}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Dirección</h4>
                    <p>{enterpriseInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 relative h-[200px] bg-white/10 rounded-lg overflow-hidden">
                <MapComponent />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fadeinbottomleft overflow-hidden">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">
                Síguenos en nuestras redes sociales
              </h3>
              <Socials />
            </CardContent>
          </Card>
        </div>

        <FormContact />
      </div>

      <div className="flex flex-col w-full transition-all duration-1000 pt-32">
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
          <div className="relative h-full">
            <GlassIcons items={items} className="custom-class" />
          </div>
        </EffectScroll>
      </div>
    </div>
  );
}
