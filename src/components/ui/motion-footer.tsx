"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUp,
  ArrowUpRight,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
.cinematic-footer-wrapper {
  font-family: var(--font-poppins), Inter, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  --footer-pill-bg: rgba(255, 255, 255, 0.055);
  --footer-pill-bg-hover: rgba(255, 255, 255, 0.095);
  --footer-pill-border: rgba(255, 255, 255, 0.14);
  --footer-pill-border-hover: rgba(255, 255, 255, 0.28);
  --footer-glow-blue: rgba(37, 99, 235, 0.34);
  --footer-glow-gold: rgba(234, 179, 8, 0.22);
  --footer-glow-pink: rgba(236, 72, 153, 0.22);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(0.96); opacity: 0.55; }
  100% { transform: translate(-50%, -50%) scale(1.08); opacity: 0.9; }
}

@keyframes footer-signal {
  0%, 100% { transform: scale(1); opacity: 0.64; }
  50% { transform: scale(1.18); opacity: 1; }
}

.footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.footer-signal {
  animation: footer-signal 2.6s ease-in-out infinite;
}

.footer-bg-grid {
  background-size: 64px 64px;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 24%, black 78%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 24%, black 78%, transparent);
}

.footer-aurora {
  background:
    radial-gradient(circle at 22% 44%, var(--footer-glow-gold) 0%, transparent 34%),
    radial-gradient(circle at 54% 48%, var(--footer-glow-blue) 0%, transparent 42%),
    radial-gradient(circle at 78% 38%, var(--footer-glow-pink) 0%, transparent 34%);
}

.footer-glass-pill {
  background: linear-gradient(145deg, var(--footer-pill-bg) 0%, rgba(255, 255, 255, 0.025) 100%);
  border: 1px solid var(--footer-pill-border);
  box-shadow:
    0 18px 52px -22px rgba(0, 0, 0, 0.8),
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    inset 0 -1px 0 rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
  transition:
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.45s ease,
    background 0.45s ease,
    color 0.45s ease;
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--footer-pill-bg-hover) 0%, rgba(255, 255, 255, 0.045) 100%);
  border-color: var(--footer-pill-border-hover);
}

.footer-social-pill {
  --social-color: #ffffff;
  --social-glow: rgba(255, 255, 255, 0.18);
}

.footer-social-pill::before {
  content: "";
  position: absolute;
  inset: -30px -18px auto auto;
  width: 84px;
  height: 84px;
  border-radius: 999px;
  background: var(--social-glow);
  filter: blur(28px);
  opacity: 0.68;
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.footer-social-pill:hover::before {
  opacity: 1;
  transform: scale(1.18);
}

.footer-giant-bg-text {
  font-size: clamp(6rem, 25vw, 21rem);
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: 0;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.075);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, transparent 70%);
  -webkit-background-clip: text;
  background-clip: text;
}

.footer-text-glow {
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.52) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 22px rgba(255, 255, 255, 0.12));
}
`;

type MagneticButtonProps = React.HTMLAttributes<HTMLElement> & {
  as?: "a" | "button";
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
};

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (event: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;

          gsap.to(element, {
            x: x * 0.18,
            y: y * 0.18,
            scale: 1.035,
            ease: "power2.out",
            duration: 0.35,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            scale: 1,
            ease: "elastic.out(1, 0.32)",
            duration: 1,
          });
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    const setRefs = (node: HTMLElement | null) => {
      localRef.current = node;
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    };

    return React.createElement(
      as,
      {
        ...props,
        ref: setRefs,
        className: cn("cursor-pointer", className),
      },
      children
    );
  }
);

MagneticButton.displayName = "MagneticButton";

type FooterSocialLink = {
  label: string;
  detail: string;
  href: string;
  icon: LucideIcon;
  color: string;
  glow: string;
};

const socialLinks: FooterSocialLink[] = [
  {
    label: "WhatsApp",
    detail: "Cotiza directo",
    href: "https://wa.me/523334626001",
    icon: MessageCircle,
    color: "#22c55e",
    glow: "rgba(34, 197, 94, 0.28)",
  },
  {
    label: "Instagram",
    detail: "Trabajos recientes",
    href: "https://www.instagram.com/luxoflex?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: Instagram,
    color: "#ec4899",
    glow: "rgba(236, 72, 153, 0.3)",
  },
  {
    label: "Facebook",
    detail: "Comunidad",
    href: "https://facebook.com/luxoflex",
    icon: Facebook,
    color: "#60a5fa",
    glow: "rgba(96, 165, 250, 0.28)",
  },
  {
    label: "Correo",
    detail: "Ventas",
    href: "mailto:luxoflex1ventas@gmail.com",
    icon: Mail,
    color: "#fb7185",
    glow: "rgba(251, 113, 133, 0.28)",
  },
  {
    label: "Llamar",
    detail: "+52 33 3462 6001",
    href: "tel:+523334626001",
    icon: Phone,
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.28)",
  },
  {
    label: "Web",
    detail: "luxoflex.mx",
    href: "https://www.luxoflex.mx",
    icon: Globe,
    color: "#facc15",
    glow: "rgba(250, 204, 21, 0.22)",
  },
];

type CinematicFooterProps = {
  legalLinks?: React.ReactNode;
};

export function CinematicFooter({ legalLinks }: CinematicFooterProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const socialDockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      if (giantTextRef.current) {
        gsap.fromTo(
          giantTextRef.current,
          { y: "4vh", scale: 0.96 },
          {
            y: "0vh",
            scale: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top 82%",
              end: "bottom bottom",
              scrub: 1,
            },
          }
        );
      }

      const revealTargets: HTMLElement[] = [];
      if (headingRef.current) revealTargets.push(headingRef.current);
      if (linksRef.current) revealTargets.push(linksRef.current);
      if (socialDockRef.current) revealTargets.push(socialDockRef.current);

      gsap.fromTo(
        revealTargets,
        { y: 24 },
        {
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform",
        }
      );

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <footer className="cinematic-footer-wrapper fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-[#050506] text-white">
          <div className="footer-aurora footer-breathe pointer-events-none absolute left-1/2 top-1/2 z-0 h-[64vh] w-[86vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[92px]" />
          <div className="footer-bg-grid pointer-events-none absolute inset-0 z-0" />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-linear-to-b from-[#09090b] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-56 bg-linear-to-t from-black via-black/70 to-transparent" />

          <div
            ref={giantTextRef}
            className="footer-giant-bg-text pointer-events-none absolute -bottom-[3vh] left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap"
          >
            LUXOFLEX
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 pb-14 pt-14 text-center md:px-10">
            <div className="mb-5 flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl">
              <img
                src="/luxoflex.webp"
                alt="Luxoflex"
                className="h-8 w-8 rounded-full border border-white/15 object-cover"
              />
              <span className="font-rajdhani text-xs font-bold uppercase tracking-[0.24em] text-white/72">
                Flexografia y etiquetas premium
              </span>
            </div>

            <h2
              ref={headingRef}
              className="footer-text-glow max-w-5xl font-poppins text-5xl font-black leading-[0.95] tracking-normal md:text-8xl"
            >
              Listos para imprimir?
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-6 text-zinc-500 md:text-base">
              Cotiza, revisa trabajos recientes o habla directo con ventas desde los canales oficiales.
            </p>

            <div ref={linksRef} className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {socialLinks.slice(0, 3).map((item) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith("http");

                return (
                  <MagneticButton
                    key={item.label}
                    as="a"
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="footer-glass-pill footer-social-pill relative isolate inline-flex min-w-[210px] items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-5 text-sm font-bold text-white hover:text-white"
                    style={
                      {
                        "--social-color": item.color,
                        "--social-glow": item.glow,
                      } as React.CSSProperties
                    }
                  >
                    <Icon className="relative z-10 h-5 w-5" style={{ color: item.color }} />
                    <span className="relative z-10">{item.label}</span>
                    <ArrowUpRight className="relative z-10 h-4 w-4 text-white/45" />
                  </MagneticButton>
                );
              })}
            </div>

            <div
              ref={socialDockRef}
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
            >
              {socialLinks.slice(3).map((item) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith("http");

                return (
                  <MagneticButton
                    key={item.label}
                    as="a"
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="footer-glass-pill inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white/62 hover:text-white"
                    style={
                      {
                        "--social-color": item.color,
                        "--social-glow": item.glow,
                      } as React.CSSProperties
                    }
                  >
                    <Icon className="h-4 w-4" style={{ color: item.color }} />
                    {item.label}
                  </MagneticButton>
                );
              })}
            </div>
          </div>

          <div className="relative z-20 flex w-full flex-col items-center gap-5 px-5 pb-6 md:flex-row md:justify-between md:px-10">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/46">
              <MapPin className="h-3.5 w-3.5 text-yellow-300/80" />
              Guadalajara, Mexico
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-white/70">
              {legalLinks}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/46">
                © 2026 Luxoflex
              </span>
              <MagneticButton
                as="button"
                type="button"
                onClick={scrollToTop}
                aria-label="Volver arriba"
                className="footer-glass-pill grid size-11 place-items-center rounded-full text-white/62 hover:text-white"
              >
                <ArrowUp className="h-4.5 w-4.5" />
              </MagneticButton>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
