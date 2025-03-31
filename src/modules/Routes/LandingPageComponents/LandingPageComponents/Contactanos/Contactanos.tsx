// "use client";
// import "./Contactanos.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import FormContact from "./components/FormContact";
// import {
//   Whatsapp,
//   EnvelopeFill,
//   TelephoneFill,
//   Facebook,
//   Instagram,
//   TwitterX,
// } from "react-bootstrap-icons";
// import TrueFocus from "@/components/reactbits/true_focus";
// import SpotlightCard from "@/components/reactbits/spotlight_card";
// import { Button } from "@/components/ui/button";
// import GlassIcons from "@/components/reactbits/GlassIcons";

// const items = [
//   { icon: <Whatsapp />, color: "whatsapp", label: "WhatsApp" },
//   { icon: <Facebook />, color: "facebook", label: "Facebook" },
//   { icon: <Instagram />, color: "instagram", label: "Instagram" },
//   { icon: <TwitterX />, color: "twitter", label: "X" },
//   { icon: <EnvelopeFill />, color: "gmail", label: "Gmail" },
//   { icon: <TelephoneFill />, color: "whatsapp", label: "Phone Call" },
// ];

// export default function Contactanos() {
//   return (
//     <div className="lg:px-24 bg-gradient-to-b space-y-6 from-black via-gray-950 to-black p-6 rounded-lg shadow-lg">
//       <div className="animate-fadein duration-1000">
//         <TitleSolidGradiant />
//       </div>
//       <div className="group justify-evenly flex flex-col lg:flex-row gap-10 ">
//         <div className="w-full flex justify-center items-center transition-all duration-1000">
//           <div className="animate-fadeinleft duration-1000">
//             <FormContact />
//           </div>
//         </div>
//         <div className="flex flex-col w-full transition-all duration-1000 pt-32">
//           <div className="pb-8 justify-center flex items-center  text-4xl font-extralight font-raleway">
//             <div className="animate-fadein duration-1000">
//               <TrueFocus
//                 sentence="Redes sociales"
//                 manualMode={false}
//                 blurAmount={5}
//                 borderColor="rgba(29, 204, 206, 0.8)"
//                 animationDuration={2}
//                 pauseBetweenAnimations={0.5}
//               />
//             </div>
//           </div>
//           <div className="animate-fadein duration-1000">
//             <div className="relative h-full">
//               <GlassIcons items={items} className="custom-class" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <ContactData />
//     </div>
//   );
// }

// // function AnimatedPinDemo() {
// //   return (
// //     <div>
// //       <div className="">
// //         <div className="grid grid-cols-3 gap-10 justify-center">
// //           <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
// //             <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 text-center sm:basis-1/2 w-[10rem] h-[15rem]">
// //               <h3 className="text-lg max-w-xs !pb-1 !m-0 font-extralight font-zilla text-slate-100">
// //                 PaginaWeb
// //               </h3>
// //               <div className="text-xs !m-0 !p-0 font-normal">
// //                 <span className="text-gray-500 text-xs">
// //                   LUXOFLEX tiene contacto por medio de Email
// //                 </span>
// //               </div>
// //               <div className="flex flex-1 w-full bg-gray-800 hover:bg-purple-900 duration-300 rounded-lg mt-2  justify-center items-center">
// //                 <Globe className="h-12 w-12 text-purple-600" />
// //               </div>
// //             </div>
// //           </PinContainer>

// //           <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
// //             <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 text-center sm:basis-1/2 w-[10rem] h-[15rem]">
// //               <h3 className="text-lg max-w-xs !pb-1 !m-0 font-extralight font-zilla text-slate-100">
// //                 Email
// //               </h3>
// //               <div className="text-xs !m-0 !p-0 font-normal">
// //                 <span className="text-gray-500 text-xs">
// //                   LUXOFLEX tiene contacto por medio de Email
// //                 </span>
// //               </div>
// //               <div className="flex flex-1 w-full bg-gray-800 hover:bg-red-900 duration-300 rounded-lg mt-2  justify-center items-center">
// //                 <EnvelopeFill className="h-12 w-12 text-red-600" />
// //               </div>
// //             </div>
// //           </PinContainer>

// //           <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
// //             <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 text-center sm:basis-1/2 w-[10rem] h-[15rem]">
// //               <h3 className="text-lg max-w-xs !pb-1 !m-0 font-extralight font-zilla text-slate-100">
// //                 Llamadas
// //               </h3>
// //               <div className="text-xs !m-0 !p-0 font-normal">
// //                 <span className="text-gray-500 text-xs">
// //                   LUXOFLEX tiene contacto por medio de telefono celular
// //                 </span>
// //               </div>
// //               <div className="flex flex-1 w-full bg-gray-800 hover:bg-teal-900 duration-300 rounded-lg mt-2  justify-center items-center">
// //                 <TelephoneFill className="h-12 w-12 text-teal-600" />
// //               </div>
// //             </div>
// //           </PinContainer>

// //           <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
// //             <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 text-center sm:basis-1/2 w-[10rem] h-[15rem]">
// //               <h3 className="text-lg max-w-xs !pb-1 !m-0 font-extralight font-zilla text-slate-100">
// //                 WhatsApp
// //               </h3>
// //               <div className="text-xs !m-0 !p-0 font-normal">
// //                 <span className="text-gray-500 text-xs">
// //                   LUXOFLEX tiene contacto por medio de WhatsApp
// //                 </span>
// //               </div>
// //               <div className="flex flex-1 w-full bg-gray-800 hover:bg-green-900 duration-300 rounded-lg mt-2  justify-center items-center">
// //                 <Whatsapp className="h-12 w-12 text-green-600" />
// //               </div>
// //             </div>
// //           </PinContainer>

// //           <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
// //             <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 text-center sm:basis-1/2 w-[10rem] h-[15rem]">
// //               <h3 className="text-lg max-w-xs !pb-1 !m-0 font-extralight font-zilla text-slate-100">
// //                 Facebook
// //               </h3>
// //               <div className="text-xs !m-0 !p-0 font-normal">
// //                 <span className="text-gray-500 text-xs">
// //                   LUXOFLEX tiene contacto por medio de Facebook
// //                 </span>
// //               </div>
// //               <div className="flex flex-1 w-full bg-gray-800 hover:bg-blue-900 duration-300 rounded-lg mt-2  justify-center items-center">
// //                 <Facebook className="h-12 w-12 text-blue-600" />
// //               </div>
// //             </div>
// //           </PinContainer>

// //           <PinContainer title="/luxoflex.vercel.app" href="luxoflex.vercel.app">
// //             <div className="flex basis-full flex-col p-2 tracking-tighter text-slate-100/50 text-center sm:basis-1/2 w-[10rem] h-[15rem]">
// //               <h3 className="text-lg max-w-xs !pb-1 !m-0 font-extralight font-zilla text-slate-100">
// //                 Instagram
// //               </h3>
// //               <div className="text-xs !m-0 !p-0 font-normal">
// //                 <span className="text-gray-500 text-xs">
// //                   LUXOFLEX tiene contacto por medio de Instagram
// //                 </span>
// //               </div>
// //               <div className="flex flex-1 w-full rounded-lg mt-2 bg-gray-800 hover:bg-pink-900 duration-300 justify-center items-center">
// //                 <Instagram className="h-12 w-12 text-pink-600" />
// //               </div>
// //             </div>
// //           </PinContainer>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// function TitleSolidGradiant() {
//   return (
//     <div className="flex items-center justify-center w-full flex-col px-4 pt-10">
//       <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-7xl lg:text-9xl  relative z-20 font-bold font-dancing tracking-tight transition-transform duration-1000 hover:cursor-grab">
//         Contáctanos Personalmente
//       </h2>
//       <p className=" mx-auto text-sm md:text-2xl text-neutral-700 dark:text-neutral-400 text-center pb-5">
//         ¡Cuéntanos tu idea, nosotros la haremos realidad!
//       </p>
//     </div>
//   );
// }
// function ContactData() {
//   const data = [
//     {
//       name: "Martin Ojeda",
//       hrefEmail: "mailto:martin@gmail.com",
//       hrefPhone: "3311940001",
//       hrefWhatsapp: "3311940001",
//       hrefFacebook: "https://facebook.com/martin",
//       hrefInstagram: "https://instagram.com/martin",
//       description:
//         "CEO y Fundador de LUXOFLEX\nCon más de 15 años de experiencia en la industria de etiquetas autoadheribles",
//     },
//     {
//       name: "Mayra Becerril",
//       hrefEmail: "mailto:mayra@gmail.com",
//       hrefPhone: "3334626001",
//       hrefWhatsapp: "3334626001",
//       hrefFacebook: "https://facebook.com/mayra",
//       hrefInstagram: "https://instagram.com/mayra",
//       description:
//         "CEO y Fundadora de LUXOFLEX\nCon más de 8 años de experiencia en etiquetas autoadheribles.",
//     },
//   ];
//   return (
//     <div className="pb-32">
//       <div>
//         <a className=" pt-16 md:pt-28 bg-clip-text text-transparent text-center bg-gradient-to-r  from-neutral-600 to-white text-4xl md:text-6xl py-2 relative z-20 font-bold font-sigmar tracking-tight flex justify-center">
//           CONTACTANOS PERSONALMENTE
//         </a>
//       </div>
//       <div className=" pt-20 flex flex-col lg:flex-row justify-center gap-6  ">
//         {data.map((user) => (
//           <div className="flex justify-center items-center animate-fadein duration-1000">
//             <SpotlightCard
//               className="custom-spotlight-card w-96 h-72"
//               spotlightColor="rgba(255, 255, 255, 0.3)"
//             >
//               <div className="flex flex-col justify-between gap-5">
//                 <span className="text-2xl font-audiowide">{user.name}</span>
//                 <div className=" text-lg font-serif  overflow-hidden">
//                   {user.description}
//                 </div>

//                 <div className="space-y-1 pb-1">
//                   <div className="flex flex-wrap justify-center gap-2">
//                     <i
//                       onClick={() =>
//                         (window.location.href = `tel:+52${user.hrefPhone}`)
//                       }
//                       className="hover:cursor-pointer bi bi-telephone-outbound text-lg  transition-all duration-700 text-white hover:text-teal-600"
//                     ></i>

//                     <i
//                       onClick={() =>
//                         (window.location.href = `https://wa.me/+52${user.hrefWhatsapp}`)
//                       }
//                       className="hover:cursor-pointer bi bi-whatsapp text-lg  transition-all duration-700 text-white hover:text-green-600"
//                     ></i>

//                     <i
//                       onClick={() => (window.location.href = user.hrefFacebook)}
//                       className="hover:cursor-pointer bi bi-facebook text-lg  transition-all duration-700 text-white hover:text-blue-600"
//                     ></i>

//                     <i
//                       onClick={() =>
//                         (window.location.href = user.hrefInstagram)
//                       }
//                       className="hover:cursor-pointer bi bi-instagram text-lg  transition-all duration-700 text-white hover:text-pink-600"
//                     ></i>
//                   </div>
//                   <Button
//                     variant="default"
//                     className="w-full hover:bg-black hover:text-white font-poppins font-light  transition-colors duration-700"
//                     onClick={() =>
//                       (window.location.href = `tel:+52${user.hrefPhone}`)
//                     }
//                   >
//                     Contactame
//                   </Button>
//                 </div>
//               </div>
//             </SpotlightCard>{" "}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { logo } from "@/const";
import { ThreeDotsWhite } from "@/components/ReusableIcons/ReusableIcons";

interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  message: string;
  company?: string;
}

const Contactanos = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "¡Mensaje Enviado!",
      description:
        "Gracias por contactar a Luxoflex. Nos pondremos en contacto pronto.",
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] font-poppins py-8">
      <ThreeDotsWhite />

      <main className="flex-grow">
        <div className="text-center relative bg-[#FAFAFA] text-black placeholder:text-gray-700 py-16 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.8"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-6xl md:text-8xl mb-4 animate-fadeInUp font-dancing text-black">
              Contáctanos
            </h1>
            <p className="text-xl md:text-2xl w-full animate-fadeInUp animate-delay-100 font- text-black">
              ¿Tienes preguntas sobre nuestras etiquetas premium? Nos encantaría
              escucharte.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-20 py-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="p-6 shadow-2xl animate-fadeInUp animate-delay-200 bg-[#FAFAFA] ">
              <div className="w-full flex flex-row justify-between items-center gap-4">
                <h2 className=" text-4xl font-dancing text-black">
                  Envíanos un Mensaje
                </h2>
                <img
                  className="h-16 flex flex-col justify-center items-center"
                  src={logo}
                />
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-black">
                    Nombre <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Nombre..."
                    className={`${
                      errors.name ? "border-red-500" : ""
                    } bg-[#FAFAFA] text-black placeholder:text-gray-700`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Email..."
                    className={`${
                      errors.email ? "border-red-500" : ""
                    } bg-[#FAFAFA] text-black placeholder:text-gray-700`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-black">
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="Phone..."
                    className="bg-[#FAFAFA] text-black placeholder:text-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-black">
                    Nombre de la Empresa
                  </Label>
                  <Input
                    id="company"
                    {...register("company")}
                    placeholder="Empresa..."
                    className="bg-[#FAFAFA] text-black placeholder:text-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-black">
                    Mensaje <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    className={`${
                      errors.message ? "border-red-500" : ""
                    } bg-[#FAFAFA] text-black placeholder:text-gray-700`}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-black/90 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <div className="animate-fadeInUp animate-delay-300">
                <h2 className="text-2xl font-bold mb-6 text-black border-b pb-2">
                  Información de Contacto
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-black mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-black">Teléfono</h3>
                      <p className="text-gray-600">+52 (555) 123-4567</p>
                      <p className="text-gray-500 text-sm">Lun-Vie, 9am-5pm</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-black mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-black">Correo</h3>
                      <p className="text-gray-600">contacto@luxoflex.com</p>
                      <p className="text-gray-500 text-sm">
                        Responderemos en 24 horas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-black mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-black">
                        Ubicación de la Oficina
                      </h3>
                      <p className="text-gray-600">
                        Calle Etiquetas 123, Interior 101
                      </p>
                      <p className="text-gray-600">Guadalajara, Jalisco</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white p-6 rounded-lg shadow-2xl animate-fadeInUp animate-delay-400">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-xl font-bold text-black">
                    Frequently Asked Questions
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-black">
                      What types of labels do you offer?
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      We offer a wide range of premium labels including
                      waterproof, thermal, adhesive, removable, and
                      custom-shaped labels for various applications.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-black">
                      What is your minimum order quantity?
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Our minimum order quantities vary depending on the type of
                      label. Please contact us for specific details.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-black">
                      Do you offer rush services?
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Yes, we offer expedited production and shipping for urgent
                      orders at an additional cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ThreeDotsWhite />
    </div>
  );
};

export default Contactanos;
