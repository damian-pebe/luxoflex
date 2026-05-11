import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Home,
  Images,
  Mail,
  MessageCircle,
  SearchX,
  Sparkles,
} from "lucide-react";
import { logo } from "@/const";

const helpfulLinks = [
  {
    title: "Etiquetas personalizadas",
    subtitle: "Soluciones a medida para productos y marcas.",
    href: "/etiquetas-personalizadas",
    icon: Sparkles,
    cardClass:
      "border-emerald-300/18 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.18),transparent_32%),linear-gradient(135deg,rgba(16,185,129,0.1),rgba(255,255,255,0.025)_48%,rgba(0,0,0,0.22))] hover:border-emerald-300/34 hover:bg-emerald-300/[0.045]",
    iconClass: "border-emerald-300/22 bg-emerald-300/[0.1] text-emerald-200",
    arrowClass: "text-emerald-200/45 group-hover:text-emerald-100",
  },
  {
    title: "Flexografía",
    subtitle: "Impresión premium con color y detalle consistente.",
    href: "/flexografia",
    icon: SearchX,
    cardClass:
      "border-cyan-300/18 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.16),transparent_32%),linear-gradient(135deg,rgba(14,165,233,0.09),rgba(255,255,255,0.025)_48%,rgba(0,0,0,0.22))] hover:border-cyan-300/34 hover:bg-cyan-300/[0.045]",
    iconClass: "border-cyan-300/22 bg-cyan-300/[0.1] text-cyan-200",
    arrowClass: "text-cyan-200/45 group-hover:text-cyan-100",
  },
  {
    title: "Galería",
    subtitle: "Trabajos, materiales, acabados y aplicaciones.",
    href: "/galeria",
    icon: Images,
    cardClass:
      "border-fuchsia-300/18 bg-[radial-gradient(circle_at_18%_18%,rgba(217,70,239,0.15),transparent_32%),linear-gradient(135deg,rgba(236,72,153,0.09),rgba(255,255,255,0.025)_48%,rgba(0,0,0,0.22))] hover:border-fuchsia-300/34 hover:bg-fuchsia-300/[0.045]",
    iconClass: "border-fuchsia-300/22 bg-fuchsia-300/[0.1] text-fuchsia-200",
    arrowClass: "text-fuchsia-200/45 group-hover:text-fuchsia-100",
  },
  {
    title: "Contáctanos",
    subtitle: "Cotiza por WhatsApp, correo o llamada.",
    href: "/contacto",
    icon: MessageCircle,
    cardClass:
      "border-yellow-300/20 bg-[radial-gradient(circle_at_18%_18%,rgba(250,204,21,0.16),transparent_32%),linear-gradient(135deg,rgba(250,204,21,0.09),rgba(255,255,255,0.025)_48%,rgba(0,0,0,0.22))] hover:border-yellow-300/36 hover:bg-yellow-300/[0.05]",
    iconClass: "border-yellow-300/24 bg-yellow-300/[0.1] text-yellow-100",
    arrowClass: "text-yellow-100/50 group-hover:text-yellow-50",
  },
];

export default function NotFoundPage() {
  const navigate = useNavigate();
  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/");
  };

  return (
    <main className="relative isolate flex h-screen h-[100svh] overflow-hidden bg-[#050506] px-4 py-4 text-white sm:px-6 sm:py-5 md:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-35 [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_88%,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-linear-to-b from-yellow-400/10 via-blue-500/5 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[30rem] w-[58rem] -translate-x-1/2 rounded-full bg-white/[0.055] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-10rem] top-24 -z-10 h-80 w-80 rounded-full bg-yellow-400/12 blur-[110px]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[28vh] bg-linear-to-t from-black via-black/70 to-transparent" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[1.4vh] left-1/2 z-0 w-[110vw] -translate-x-1/2 select-none whitespace-nowrap text-center font-poppins text-[clamp(4rem,17vw,15rem)] font-black leading-[0.72] tracking-normal text-transparent opacity-75"
        style={{
          WebkitTextStroke: "1px rgba(255,255,255,0.11)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.1) 44%, transparent 82%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          filter: "drop-shadow(0 -18px 54px rgba(255,255,255,0.08))",
        }}
      >
        LUXOFLEX
      </div>

      <section className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center pb-[clamp(4.2rem,10vh,7.5rem)] text-center">
        <div className="mb-4 flex flex-col items-center gap-3 md:mb-5">
          <img
            src={logo}
            alt="Luxoflex impresiones"
            className="h-10 w-auto object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.65)] sm:h-12 md:h-14"
          />
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.055] px-3.5 py-1.5 font-rajdhani text-[10px] font-bold uppercase tracking-[0.28em] text-white/[0.62] backdrop-blur-xl sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-300 shadow-[0_0_18px_rgba(250,204,21,0.7)]" />
            404 error
          </span>
        </div>

        <h1 className="max-w-5xl font-poppins text-[clamp(2.5rem,7.2vw,5rem)] font-black leading-[0.92] tracking-normal text-white">
          No encontramos esta página
        </h1>
        <p className="mt-4 max-w-2xl font-poppins text-sm leading-relaxed text-zinc-500 sm:text-base md:mt-5 md:text-lg">
          La ruta que abriste no existe o fue movida. Puedes volver, ir al inicio o entrar directo a las páginas principales de Luxoflex.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 md:mt-6">
          <button
            type="button"
            onClick={goBack}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.055] px-4 py-2.5 font-poppins text-sm font-semibold text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl transition duration-300 hover:border-white/[0.24] hover:bg-white/[0.1] hover:text-white md:px-5"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Regresar
          </button>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 font-poppins text-sm font-bold text-black transition duration-300 hover:bg-zinc-200 md:px-5"
          >
            <Home className="h-4 w-4" />
            Inicio
          </Link>
          <a
            href="mailto:luxoflex1ventas@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full border border-yellow-300/18 bg-yellow-300/[0.08] px-4 py-2.5 font-poppins text-sm font-semibold text-yellow-100 transition duration-300 hover:border-yellow-300/34 hover:bg-yellow-300/[0.13] md:px-5"
          >
            <Mail className="h-4 w-4" />
            Correo
          </a>
        </div>

        <div className="mt-7 grid w-full max-w-6xl grid-cols-2 gap-2.5 border-y border-white/10 py-3 text-left lg:grid-cols-4">
          {helpfulLinks.map(({ title, subtitle, href, icon: Icon, cardClass, iconClass, arrowClass }) => (
            <Link
              key={href}
              to={href}
              className={`group flex min-h-[4.8rem] items-center gap-3 rounded-2xl border p-3 shadow-[0_18px_55px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur transition duration-300 ${cardClass}`}
            >
              <span className={`grid size-10 shrink-0 place-items-center rounded-xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition duration-300 group-hover:scale-[1.03] ${iconClass}`}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-poppins text-sm font-bold leading-tight text-white md:text-[15px]">
                  {title}
                </span>
                <span className="mt-1 block font-poppins text-xs leading-snug text-zinc-500">
                  {subtitle}
                </span>
              </span>
              <ArrowRight className={`h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-0.5 ${arrowClass}`} />
            </Link>
          ))}
        </div>

        <p className="relative z-10 mt-3 font-rajdhani text-[10px] font-bold uppercase tracking-[0.28em] text-white/[0.34] md:mt-4">
          © 2026 Luxoflex
        </p>
      </section>
    </main>
  );
}
