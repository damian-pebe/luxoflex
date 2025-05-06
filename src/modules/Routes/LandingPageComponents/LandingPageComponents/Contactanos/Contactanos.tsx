import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { backendUrl, logo } from "@/const";
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
    const sendData = {
      subject: `Nuevo mensaje de contacto - Luxoflex - Empresa: ${data.company} - Nombre: ${data.name}`,
      text: `Nombre: ${data.name} \n
  Email: ${data.email}\n
  Teléfono: ${data.phone || "No proporcionado"}\n
  Empresa: ${data.company || "No proporcionada"}\n\n
  Mensaje: ${data.message}`,
    };

    try {
      const response = await axios.post(`${backendUrl}formSubmit`, sendData);
      console.log("Response:", response.data);
      toast({
        title: "¡Mensaje Enviado!",
        description:
          "Gracias por contactar a Luxoflex. Nos pondremos en contacto pronto.",
        variant: "default",
      });
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error al enviar mensaje",
        description:
          "Ha ocurrido un error. Por favor, intente nuevamente más tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] font-poppins py-8">
      <ThreeDotsWhite top={true} />

      <main className="flex-grow pt-8">
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

        <div className="container mx-auto px-6 md:px-10 lg:px-20 py-16">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {" "}
            <Card className="p-6 shadow-2xl animate-fadeInUp animate-delay-200 bg-[#FAFAFA] ">
              <div className="w-full flex justify-between items-start sm:items-center gap-4">
                {" "}
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
                >
                  Enviar Mensaje
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
                      <p className="text-gray-600">+52 33 3462 6001</p>
                      <p className="text-gray-500 text-sm">Lun-Dom, 8am-10pm</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-black mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-black">Correo</h3>
                      <p className="text-gray-600">luxoflex1ventas@gmail.com</p>
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
                        Calle Pedro Garcia Conde, Numero 282, Colonia
                        Villahermosa
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
                    Preguntas Frecuentes
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-black">
                      ¿Qué tipos de etiquetas ofrecen?
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Ofrecemos una amplia gama de etiquetas premium incluyendo
                      impermeables, térmicas, adhesivas, removibles y etiquetas
                      con formas personalizadas para diversas aplicaciones.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-black">
                      ¿Cuál es la cantidad mínima de pedido?
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Nuestras cantidades mínimas de pedido varían según el tipo
                      de etiqueta. Por favor contáctenos para detalles
                      específicos.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-black">
                      ¿Ofrecen servicios urgentes?
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Sí, ofrecemos producción y envío acelerados para pedidos
                      urgentes con un costo adicional.
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
