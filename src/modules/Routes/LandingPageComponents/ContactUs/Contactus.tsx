import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import background from "@/assets/background.jpg";
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import Socials from "../LandingPageComponents/Contactanos/components/Socials"

// import locationMap from "@/assets/location-map.jpg";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const enterpriseInfo = {
    address: "Calle Principal #123, Ciudad de México",
    phone: "+52 (555) 123-4567",
    email: "contacto@empresa.com",
    schedule: "Lunes a Viernes: 9:00 - 18:00"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
     
      
      toast({
        title: "¡Éxito!",
        description: "Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.",
      })
      
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "Algo salió mal. Por favor, intenta nuevamente.",
        variant: "destructive",
      })
    }
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
    <div className="container pb-12">
      <div className="relative h-[300px] rounded-b-xl overflow-hidden">
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
          <Card>
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
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Dirección</h4>
                    <p>{enterpriseInfo.address}</p>
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
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>{enterpriseInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Horario</h4>
                    <p>{enterpriseInfo.schedule}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 relative h-[200px] rounded-lg overflow-hidden">
                {/* <img
                  src={locationMap}
                  alt="Ubicación en el mapa"
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Síguenos en nuestras redes sociales</h3>
              <Socials />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Envíanos un mensaje</CardTitle>
            <CardDescription>
              Completa el formulario y te responderemos lo antes posible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@correo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input
                  id="subject"
                  placeholder="¿Sobre qué nos quieres contactar?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="Tu mensaje..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
