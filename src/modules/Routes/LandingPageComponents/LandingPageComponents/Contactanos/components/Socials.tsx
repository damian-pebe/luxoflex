import {
  Whatsapp,
  EnvelopeFill,
  TelephoneFill,
  Facebook,
  Instagram,
  Tiktok,
} from "react-bootstrap-icons";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    label: "WhatsApp",
    detail: "Cotiza por chat",
    href: "https://wa.me/523334626001",
    icon: Whatsapp,
    tint: "#22c55e",
    glow: "rgba(34, 197, 94, 0.28)",
  },
  {
    label: "Facebook",
    detail: "Síguenos",
    href: "https://facebook.com/luxoflex",
    icon: Facebook,
    tint: "#60a5fa",
    glow: "rgba(59, 130, 246, 0.28)",
  },
  {
    label: "Instagram",
    detail: "Trabajos recientes",
    href: "https://www.instagram.com/luxofleximpresiones",
    icon: Instagram,
    tint: "#ec4899",
    glow: "rgba(236, 72, 153, 0.3)",
  },
  {
    label: "TikTok",
    detail: "Procesos y videos",
    href: "https://www.tiktok.com/@luxoflex",
    icon: Tiktok,
    tint: "#ffffff",
    glow: "linear-gradient(135deg, rgba(37, 244, 238, 0.28), rgba(254, 44, 85, 0.28))",
  },
  {
    label: "Correo",
    detail: "luxoflex1ventas@gmail.com",
    href: "mailto:luxoflex1ventas@gmail.com",
    icon: EnvelopeFill,
    tint: "#fb7185",
    glow: "rgba(251, 113, 133, 0.28)",
  },
  {
    label: "Llámanos",
    detail: "+52 33 3462 6001",
    href: "tel:+523334626001",
    icon: TelephoneFill,
    tint: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.28)",
  },
];

export default function Socials() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050506] px-4 py-16 sm:px-6 sm:py-24 md:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_84%_24%,rgba(236,72,153,0.15),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_35%)]" />
      <div className="absolute left-1/2 top-10 -z-10 h-48 w-[38rem] -translate-x-1/2 rounded-full bg-white/[0.08] blur-[110px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-rajdhani text-sm uppercase tracking-[0.35em] text-cyan-300/80">
              Canales oficiales
            </p>
            <h2 className="mt-3 font-audiowide text-3xl font-extralight text-white md:text-5xl">
              Conecta con Luxoflex
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/50 md:text-right">
            Elige el canal que prefieras para cotizaciones, dudas o seguimiento de tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative min-h-[116px] overflow-hidden rounded-2xl border border-white/[0.14] bg-white/[0.055] p-3.5 text-white shadow-[0_18px_56px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-1px_0_rgba(0,0,0,0.28)] backdrop-blur-[34px] transition duration-500 hover:-translate-y-1 hover:border-white/[0.24] hover:bg-white/[0.085] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:min-h-[148px] sm:rounded-[28px] sm:p-5 sm:shadow-[0_24px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-1px_0_rgba(0,0,0,0.28)]"
                style={{
                  WebkitBackdropFilter: "blur(34px) saturate(190%)",
                }}
              >
                <span
                  className="absolute -right-12 -top-16 h-40 w-40 rounded-full opacity-70 blur-3xl transition duration-500 group-hover:opacity-100"
                  style={{ background: item.glow }}
                />
                <span className="absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent via-white/[0.45] to-transparent" />
                <span className="absolute inset-0 bg-linear-to-br from-white/[0.12] via-transparent to-white/[0.025] opacity-80" />

                <span className="relative flex h-full flex-col justify-between gap-5 sm:gap-7">
                  <span className="flex items-start justify-between gap-4">
                    <span
                      className="grid size-11 place-items-center rounded-xl border border-white/[0.18] bg-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_14px_34px_rgba(0,0,0,0.34)] transition duration-500 group-hover:scale-105 sm:size-14 sm:rounded-2xl"
                      style={{ color: item.tint }}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <span className="grid size-8 place-items-center rounded-full border border-white/[0.12] bg-white/[0.08] text-white/50 backdrop-blur-xl transition duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white sm:size-9">
                      <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>
                  </span>

                  <span>
                    <span className="block text-base font-semibold tracking-[-0.01em] text-white sm:text-xl">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-white/50 sm:text-sm">
                      {item.detail}
                    </span>
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
