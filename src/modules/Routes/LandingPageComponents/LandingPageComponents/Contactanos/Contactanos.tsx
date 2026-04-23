import { useForm } from "react-hook-form";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle, Send } from "lucide-react";
import { Whatsapp } from "react-bootstrap-icons";
import { useToast } from "@/hooks/use-toast";
import { backendUrl } from "@/const";
import { motion } from "framer-motion";

interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  message: string;
  company?: string;
}

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    lines: ["+52 33 3462 6001", "+52 33 1363 5333"],
    sub: "Lun–Dom, 8am–10pm",
    glowColor: "#F59E0B",
  },
  {
    icon: Mail,
    label: "Correo",
    lines: ["luxoflex1ventas@gmail.com"],
    sub: "Responderemos en 24 horas",
    glowColor: "#8B5CF6",
  },
  {
    icon: MapPin,
    label: "Oficina",
    lines: ["Calle Pedro García Conde 282", "Col. Villahermosa, Guadalajara, Jal."],
    sub: "",
    glowColor: "#3B82F6",
  },
];

const faqs = [
  {
    q: "¿Qué tipos de etiquetas ofrecen?",
    a: "Impermeables, térmicas, adhesivas, removibles y formas personalizadas para diversas aplicaciones.",
  },
  {
    q: "¿Cuál es la cantidad mínima de pedido?",
    a: "Varía según el tipo de etiqueta. Contáctenos para detalles específicos de su proyecto.",
  },
  {
    q: "¿Ofrecen servicios urgentes?",
    a: "Sí, producción y envío acelerados para pedidos urgentes con un costo adicional.",
  },
];

const Contactanos = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: { name: "", email: "", phone: "", company: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const sendData = {
      subject: `Nuevo mensaje - Luxoflex - ${data.company} - ${data.name}`,
      text: `Nombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.phone || "N/A"}\nEmpresa: ${data.company || "N/A"}\n\nMensaje: ${data.message}`,
    };
    try {
      await axios.post(`${backendUrl}formSubmit`, sendData);
      toast({ title: "¡Mensaje Enviado!", description: "Nos pondremos en contacto pronto." });
      reset();
    } catch {
      toast({ title: "Error al enviar", description: "Intente nuevamente más tarde.", variant: "destructive" });
    }
  };

  return (
    <div className="relative bg-[#09090B] py-8 overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-yellow-500/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-violet-600/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-3/4 left-1/2 w-72 h-72 rounded-full bg-blue-500/5 blur-[90px] pointer-events-none" />


      <section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-rajdhani uppercase tracking-widest text-yellow-500 text-sm mb-4">
            Hablemos
          </p>
          <h2 className="font-audiowide font-extralight text-4xl md:text-6xl text-white leading-tight">
            Contá
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #FBBF24, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ctanos
            </span>
          </h2>
          <p className="mt-4 font-poppins text-zinc-500 text-base max-w-lg mx-auto leading-relaxed">
            ¿Tienes preguntas sobre nuestras etiquetas premium? Nos encantaría escucharte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {/* Glassmorphism form card */}
            <div
              className="relative rounded-2xl p-8 border border-white/8"
              style={{ background: "rgba(24,24,27,0.8)", backdropFilter: "blur(20px)" }}
            >
              {/* Inner top gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent pointer-events-none" />

              <div className="relative flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <MessageCircle className="h-4 w-4 text-yellow-400" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-xl">
                  Envíanos un Mensaje
                </h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-zinc-400 font-poppins text-xs uppercase tracking-wide">
                      Nombre <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="name"
                      {...register("name", { required: true })}
                      placeholder="Tu nombre"
                      className={`bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-600 focus-visible:border-yellow-500 focus-visible:ring-yellow-500/20 h-11 ${errors.name ? "border-red-500" : ""}`}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-zinc-400 font-poppins text-xs uppercase tracking-wide">
                      Correo <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="tu@empresa.com"
                      className={`bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-600 focus-visible:border-yellow-500 focus-visible:ring-yellow-500/20 h-11 ${errors.email ? "border-red-500" : ""}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-zinc-400 font-poppins text-xs uppercase tracking-wide">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="+52 33 0000 0000"
                      className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-600 focus-visible:border-yellow-500 h-11"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-zinc-400 font-poppins text-xs uppercase tracking-wide">
                      Empresa
                    </Label>
                    <Input
                      id="company"
                      {...register("company")}
                      placeholder="Nombre de tu empresa"
                      className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-600 focus-visible:border-yellow-500 h-11"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-zinc-400 font-poppins text-xs uppercase tracking-wide">
                    Mensaje <span className="text-red-400">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message", { required: true })}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    className={`bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-600 focus-visible:border-yellow-500 resize-none ${errors.message ? "border-red-500" : ""}`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer w-full flex items-center justify-center gap-2.5 bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-poppins font-bold py-3.5 rounded-xl transition-all duration-300 text-sm shadow-[0_0_25px_rgba(234,179,8,0.2)] hover:shadow-[0_0_40px_rgba(234,179,8,0.35)] hover:-translate-y-0.5"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  {!isSubmitting && <Send className="h-4 w-4" />}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right col — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact info cards */}
            {contactInfo.map(({ icon: Icon, label, lines, sub, glowColor }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative rounded-xl p-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300"
              >
                {/* Left color bar */}
                <div
                  className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: glowColor }}
                />
                <div className="pl-4 flex items-start gap-3">
                  <div
                    className="p-2 rounded-lg shrink-0 mt-0.5"
                    style={{ background: `${glowColor}15`, border: `1px solid ${glowColor}25` }}
                  >
                    <Icon className="h-3.5 w-3.5" style={{ color: glowColor }} />
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-white text-sm mb-1">{label}</p>
                    {lines.map((l, j) => (
                      <p key={j} className="font-poppins text-zinc-400 text-sm">{l}</p>
                    ))}
                    {sub && <p className="font-poppins text-zinc-600 text-xs mt-1">{sub}</p>}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <button
              onClick={() => window.open("https://wa.me/523334626001", "_blank")}
              className="cursor-pointer w-full flex items-center justify-center gap-2.5 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400 font-poppins font-medium py-3.5 px-5 rounded-xl transition-all duration-300 text-sm hover:-translate-y-0.5"
            >
              <Whatsapp className="h-4 w-4" />
              Escríbenos por WhatsApp
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            {/* FAQ */}
            <div
              className="relative rounded-xl p-6 border border-white/8"
              style={{ background: "rgba(24,24,27,0.8)", backdropFilter: "blur(12px)" }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none" />
              <h4 className="relative font-poppins font-semibold text-white text-sm mb-5 flex items-center gap-2">
                <MessageCircle className="h-3.5 w-3.5 text-violet-400" />
                Preguntas Frecuentes
              </h4>
              {faqs.map((faq, i) => (
                <div key={i} className="relative border-t border-zinc-800 pt-4 mt-4 first:border-0 first:pt-0 first:mt-0">
                  <p className="font-poppins font-medium text-zinc-300 text-xs mb-1.5">{faq.q}</p>
                  <p className="font-poppins text-zinc-600 text-xs leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contactanos;
