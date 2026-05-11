import { Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BadgeCheck, Layers3, MessageCircle, Sparkles } from "lucide-react";
import { useScrollToTop } from "@/hooks/scrollToTop";
import { absoluteUrl, seoData, serviceRoutes, type SeoRoute, type SeoService } from "@/seo/seo";

type ServiceRoute = SeoRoute & { service: SeoService };

type ServiceSeoPageProps = {
  path: string;
};

const findRoute = (path: string) =>
  serviceRoutes.find((route) => route.path === path) as ServiceRoute | undefined;

const getRouteLabel = (path: string) => {
  const route = seoData.routes.find((item) => item.path === path);
  const last = route?.breadcrumb[route.breadcrumb.length - 1];
  return last?.name || route?.title || path;
};

function ServicePill({ children, accent }: { children: string; accent: string }) {
  return (
    <span
      className="rounded-full border px-3 py-1.5 font-poppins text-xs font-semibold text-white/80"
      style={{
        borderColor: `${accent}40`,
        background: `${accent}14`,
      }}
    >
      {children}
    </span>
  );
}

export default function ServiceSeoPage({ path }: ServiceSeoPageProps) {
  useScrollToTop();
  const route = findRoute(path);

  if (!route) {
    return <Navigate to="/" replace />;
  }

  const { service } = route;

  return (
    <main className="min-h-screen overflow-hidden bg-[#050506] text-white">
      <section className="relative isolate overflow-hidden px-5 pb-16 pt-32 md:px-12 md:pb-24 md:pt-40">
        <div
          className="absolute inset-0 -z-10 opacity-26"
          style={{
            backgroundImage: `linear-gradient(110deg, rgba(0,0,0,0.9), rgba(0,0,0,0.34)), url(${service.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-24" />
        <div
          className="absolute left-1/2 top-24 -z-10 h-[24rem] w-[52rem] -translate-x-1/2 rounded-full blur-[130px]"
          style={{ background: `${service.accent}30` }}
        />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
          <div>
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 font-rajdhani text-xs font-bold uppercase tracking-[0.28em]"
              style={{
                borderColor: `${service.accent}35`,
                color: service.accent,
                background: `${service.accent}10`,
              }}
            >
              <Sparkles className="h-4 w-4" />
              {service.eyebrow}
            </div>

            <h1 className="max-w-5xl font-audiowide text-4xl font-extralight leading-[0.98] tracking-normal text-white md:text-6xl lg:text-7xl">
              {service.h1}
            </h1>

            <p className="mt-7 max-w-3xl font-poppins text-base leading-relaxed text-zinc-300 md:text-lg">
              {service.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="group inline-flex items-center gap-2 rounded-full px-5 py-3 font-poppins text-sm font-bold text-black transition-transform duration-300 hover:-translate-y-0.5"
                style={{
                  background: service.accent,
                  boxShadow: `0 18px 54px -28px ${service.accent}`,
                }}
              >
                Cotizar este servicio
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="https://wa.me/523334626001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-5 py-3 font-poppins text-sm font-semibold text-white backdrop-blur transition-colors duration-300 hover:border-white/24 hover:bg-white/[0.1]"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                WhatsApp
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/12 bg-white/[0.055] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl">
            <img
              src={service.image}
              alt={`${service.h1} por Luxoflex`}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              loading="eager"
            />
            <p className="mt-5 font-poppins text-sm leading-relaxed text-zinc-400">
              {service.summary}
            </p>
            <a
              href={absoluteUrl(route.path)}
              className="mt-5 block break-all font-rajdhani text-xs font-bold uppercase tracking-[0.18em] text-white/36"
            >
              {absoluteUrl(route.path)}
            </a>
          </aside>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-7xl gap-5 px-5 pb-20 md:grid-cols-3 md:px-12">
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
          <Layers3 className="mb-5 h-6 w-6" style={{ color: service.accent }} />
          <h2 className="font-poppins text-xl font-semibold text-white">Aplicaciones</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {service.applications.map((item) => (
              <ServicePill key={item} accent={service.accent}>
                {item}
              </ServicePill>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
          <BadgeCheck className="mb-5 h-6 w-6" style={{ color: service.accent }} />
          <h2 className="font-poppins text-xl font-semibold text-white">Materiales y proceso</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {service.materials.map((item) => (
              <ServicePill key={item} accent={service.accent}>
                {item}
              </ServicePill>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
          <Sparkles className="mb-5 h-6 w-6" style={{ color: service.accent }} />
          <h2 className="font-poppins text-xl font-semibold text-white">Beneficios</h2>
          <ul className="mt-5 space-y-3">
            {service.benefits.map((item) => (
              <li key={item} className="flex gap-3 font-poppins text-sm text-zinc-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: service.accent }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-12">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-rajdhani text-xs font-bold uppercase tracking-[0.28em] text-white/40">
                Tambien te puede interesar
              </p>
              <h2 className="mt-3 font-audiowide text-2xl font-extralight text-white md:text-4xl">
                Servicios relacionados
              </h2>
            </div>
            <Link to="/galeria" className="inline-flex items-center gap-2 font-poppins text-sm font-semibold text-white/70 hover:text-white">
              Ver galeria de trabajos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {service.related.map((relatedPath) => (
              <Link
                key={relatedPath}
                to={relatedPath}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-poppins text-sm font-semibold text-white transition-colors duration-300 hover:border-white/24 hover:bg-white/[0.08]"
              >
                {getRouteLabel(relatedPath)}
                <ArrowUpRight className="mt-4 h-4 w-4 text-white/36 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
