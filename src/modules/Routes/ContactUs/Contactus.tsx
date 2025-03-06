import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { background } from "@/const";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Socials from "../LandingPageComponents/LandingPageComponents/Contactanos/components/Socials";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ContactIcon, LucideNotebookPen, MailPlus, User } from "lucide-react";
import MapComponent from "./Map";
import { PinContainer } from "@/components/ui/3d-pin";

import {
  Whatsapp,
  EnvelopeFill,
  TelephoneFill,
  Facebook,
  Instagram,
  Globe,
} from "react-bootstrap-icons";
import TrueFocus from "@/components/reactbits/true_focus";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  description: z
    .string()
    .min(10, { message: "La descripción es demasiado corta." }),
});

export default function ContactUs() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // })

  const enterpriseInfo = {
    address:
      "C. Pedro García Conde 282 Col. Villa Hermosa, Guadalajara, Jalisco, Mexico",
    phone: "+52 33 34626001",
    email: "luxoflex@gmail.com",
    schedule: "Lunes a Domingo: 08:00 - 20:00",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "¡Éxito!",
      description:
        "Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.",
    });
  }

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

        <Card className="backdrop-blur-sm bg-white/10 dark:bg-black/10 border-2 shadow-xl animate-flyinright overflow-hidden">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Envíanos un mensaje
            </CardTitle>
            <CardDescription className="text-lg">
              Completa el formulario y te responderemos lo antes posible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="font-vt323 text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Nombre del contacto o empresa
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Nombre..."
                            {...field}
                            className="pl-10 h-12 bg-white/5 backdrop-blur-sm border-2 focus-visible:ring-2 focus-visible:ring-blue-500"
                          />
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="font-vt323 text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Email
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Correo electronico..."
                            {...field}
                            className="pl-10 h-12 bg-white/5 backdrop-blur-sm border-2 focus-visible:ring-2 focus-visible:ring-blue-500"
                          />
                          <MailPlus className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="font-vt323 text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Teléfono
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Telefono..."
                            {...field}
                            className="pl-10 h-12 bg-white/5 backdrop-blur-sm border-2 focus-visible:ring-2 focus-visible:ring-blue-500"
                          />
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="font-vt323 text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Descripción
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea
                            placeholder="Descripcion..."
                            {...field}
                            className="pl-10 min-h-[150px] bg-white/5 backdrop-blur-sm border-2 focus-visible:ring-2 focus-visible:ring-blue-500"
                          />
                          <LucideNotebookPen className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold flex items-center justify-center gap-2 group transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ContactIcon className="w-5 h-5 group-hover:animate-bounce transition-all duration-1000" />
                  <span className="group-hover:animate-bounce transition-all duration-200">
                    Enviar Mensaje
                  </span>
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <div className=" md:block hidden flex-1  transition-all duration-1000">
        <div className="py-16 justify-center flex items-center scroll-m-20 text-4xl font-extralight font-raleway">
          <TrueFocus
            sentence="Redes sociales"
            manualMode={false}
            blurAmount={5}
            borderColor="rgba(29, 204, 206, 0.8)"
            animationDuration={2}
            pauseBetweenAnimations={0.5}
          />
        </div>

        <AnimatedPinDemo />
      </div>
    </div>
  );
}

function AnimatedPinDemo() {
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-10 justify-center">
          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem]">
              <h3 className="max-w-xs !pb-1 !m-0 font-extralight font-zilla text-base text-slate-100">
                Email
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-slate-500 text-sm">
                  LUXOFLEX tiene contacto por medio de Email
                </span>
              </div>
              <div className="flex flex-1 w-full bg-gray-800 hover:bg-purple-900 duration-1000 rounded-lg mt-2  justify-center items-center">
                <Globe className="h-12 w-12 text-purple-600" />
              </div>
            </div>
          </PinContainer>

          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem]">
              <h3 className="max-w-xs !pb-1 !m-0 font-extralight font-zilla text-base text-slate-100">
                Email
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-slate-500 text-sm">
                  LUXOFLEX tiene contacto por medio de Email
                </span>
              </div>
              <div className="flex flex-1 w-full bg-gray-800 hover:bg-red-900 duration-1000 rounded-lg mt-2  justify-center items-center">
                <EnvelopeFill className="h-12 w-12 text-red-600" />
              </div>
            </div>
          </PinContainer>

          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem]">
              <h3 className="max-w-xs !pb-1 !m-0 font-extralight font-zilla text-base text-slate-100">
                Llamadas
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-slate-500 text-sm">
                  LUXOFLEX tiene contacto por medio de telefono celular
                </span>
              </div>
              <div className="flex flex-1 w-full bg-gray-800 hover:bg-teal-900 duration-1000 rounded-lg mt-2  justify-center items-center">
                <TelephoneFill className="h-12 w-12 text-teal-600" />
              </div>
            </div>
          </PinContainer>

          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem]">
              <h3 className="max-w-xs !pb-1 !m-0 font-extralight font-zilla text-base text-slate-100">
                WhatsApp
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-slate-500 text-sm">
                  LUXOFLEX tiene contacto por medio de WhatsApp
                </span>
              </div>
              <div className="flex flex-1 w-full bg-gray-800 hover:bg-green-900 duration-1000 rounded-lg mt-2  justify-center items-center">
                <Whatsapp className="h-12 w-12 text-green-600" />
              </div>
            </div>
          </PinContainer>

          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem]">
              <h3 className="max-w-xs !pb-1 !m-0 font-extralight font-zilla text-base text-slate-100">
                Facebook
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-slate-500 text-sm">
                  LUXOFLEX tiene contacto por medio de Facebook
                </span>
              </div>
              <div className="flex flex-1 w-full bg-gray-800 hover:bg-blue-900 duration-1000 rounded-lg mt-2  justify-center items-center">
                <Facebook className="h-12 w-12 text-blue-600" />
              </div>
            </div>
          </PinContainer>

          <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
            <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 sm:basis-1/2 w-[10rem] h-[15rem]">
              <h3 className="max-w-xs !pb-1 !m-0 font-extralight font-zilla text-base text-slate-100">
                Instagram
              </h3>
              <div className="text-xs !m-0 !p-0 font-normal">
                <span className="text-slate-500 text-sm">
                  LUXOFLEX tiene contacto por medio de Instagram
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-2 bg-gray-800 hover:bg-pink-900 duration-1000 justify-center items-center">
                <Instagram className="h-12 w-12 text-pink-600" />
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}
