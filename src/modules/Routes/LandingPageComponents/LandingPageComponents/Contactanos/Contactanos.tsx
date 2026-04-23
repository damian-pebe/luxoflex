import { useForm } from "react-hook-form";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { backendUrl } from "@/const";
import { motion } from "framer-motion";
import { useState } from "react";
import ColorBends from "@/components/ColorBends";

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
    title: "Teléfono",
    lines: ["+52 33 3462 6001", "+52 33 1363 5333"],
    sub: "Lun-Dom, 8am–10pm",
    gradient: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
    iconBg: "from-blue-600/30 to-blue-500/10",
  },
  {
    icon: Mail,
    title: "Correo",
    lines: ["luxoflex1ventas@gmail.com"],
    sub: "Respuesta en menos de 24h",
    gradient: "from-pink-500/20 to-pink-600/10",
    iconColor: "text-pink-400",
    iconBg: "from-pink-600/30 to-pink-500/10",
  },
  {
    icon: MapPin,
    title: "Oficina",
    lines: ["Pedro Garcia Conde #282", "Col. Villahermosa, Gdl."],
    sub: "Visítanos con cita previa",
    gradient: "from-indigo-500/20 to-indigo-600/10",
    iconColor: "text-indigo-400",
    iconBg: "from-indigo-600/30 to-indigo-500/10",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const Contactanos = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: { name: "", email: "", phone: "", company: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    const sendData = {
      subject: `Nuevo mensaje de contacto - Luxoflex - Empresa: ${data.company} - Nombre: ${data.name}`,
      text: `Nombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.phone || "No proporcionado"}\nEmpresa: ${data.company || "No proporcionada"}\n\nMensaje: ${data.message}`,
    };
    try {
      await axios.post(`${backendUrl}formSubmit`, sendData);
      toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto pronto." });
      reset();
    } catch {
      toast({ title: "Error al enviar", description: "Intente nuevamente más tarde.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (hasError?: boolean) =>
    `bg-white/5 border text-white placeholder:text-zinc-600 text-sm rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500/60 transition-colors duration-200 ${
      hasError ? "border-red-500/60" : "border-white/10"
    }`;

  return (
    <div className="min-h-screen bg-[#09090B] font-poppins relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <ColorBends
          colors={["#ec4899", "#3b82f6", "#6366f1"]}
          rotation={90}
          speed={0.15}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.3}
          noise={0.15}
          parallax={0.3}
          iterations={1}
          intensity={1.2}
          bandWidth={6}
          transparent
          autoRotate={0}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[#09090B]/70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="font-rajdhani uppercase tracking-widest text-blue-400 text-sm mb-3">
            Contáctanos
          </p>
          <h1 className="font-audiowide font-extralight text-4xl md:text-5xl text-white leading-tight">
            Hablemos de tu{" "}
            <span style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              próximo proyecto
            </span>
          </h1>
          <p className="mt-3 text-zinc-500 text-base max-w-lg">
            ¿Tienes preguntas sobre nuestras etiquetas premium? Nos encantaría escucharte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Form — 3/5 — true glassmorphism */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-3">
            <div
              className="rounded-3xl p-8 border border-white/10 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(32px) saturate(180%)",
                WebkitBackdropFilter: "blur(32px) saturate(180%)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              {/* Subtle inner gradient highlight at top */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
              />
              <h2 className="font-poppins font-semibold text-white text-xl mb-6">
                Envíanos un mensaje
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-zinc-400 text-xs uppercase tracking-wider">
                      Nombre <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="name"
                      {...register("name", { required: true })}
                      placeholder="Tu nombre"
                      className={inputClass(!!errors.name)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-zinc-400 text-xs uppercase tracking-wider">
                      Correo <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="tu@email.com"
                      className={inputClass(!!errors.email)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-zinc-400 text-xs uppercase tracking-wider">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="+52 33 ..."
                      className={inputClass()}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-zinc-400 text-xs uppercase tracking-wider">
                      Empresa
                    </Label>
                    <Input
                      id="company"
                      {...register("company")}
                      placeholder="Tu empresa"
                      className={inputClass()}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-zinc-400 text-xs uppercase tracking-wider">
                    Mensaje <span className="text-red-400">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message", { required: true })}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    className={inputClass(!!errors.message)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full flex items-center justify-center gap-2 text-white font-semibold text-sm py-3.5 rounded-xl transition-all duration-300 disabled:opacity-50 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                  style={{ background: "linear-gradient(135deg, #1E40AF 0%, #2563EB 60%, #3B82F6 100%)" }}
                >
                  <Send className="h-4 w-4" />
                  {loading ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right col — 2/5 — unified contact panel */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-2">
            <div
              className="rounded-3xl border border-white/10 overflow-hidden relative"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(32px) saturate(180%)",
                WebkitBackdropFilter: "blur(32px) saturate(180%)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }}
              />

              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className={`relative px-6 py-6 flex gap-5 items-start ${i < contactInfo.length - 1 ? "border-b border-white/6" : ""}`}
                >
                  {/* Colored glow blob behind icon */}
                  <div className="relative shrink-0">
                    <div
                      className={`absolute inset-0 rounded-2xl blur-xl opacity-50 bg-linear-to-br ${item.iconBg}`}
                    />
                    <div
                      className={`relative w-12 h-12 rounded-2xl flex items-center justify-center bg-linear-to-br ${item.iconBg} border border-white/10`}
                    >
                      <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1.5 font-medium">
                      {item.title}
                    </p>
                    {item.lines.map((l, j) => (
                      <p key={j} className="text-white text-sm font-medium leading-snug truncate">{l}</p>
                    ))}
                    <p className="text-zinc-600 text-xs mt-2 flex items-center gap-1.5">
                      <Clock className="h-3 w-3 shrink-0" />
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;
