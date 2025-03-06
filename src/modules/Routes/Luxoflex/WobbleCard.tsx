"use client";
import { WobbleCard } from "@/components/ui/wobble-card";
import { background } from "@/const";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full pb-10">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-slate-900 to-blue-950 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            LUXOFLEX: Elegancia en Cada Detalle
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            En LUXOFLEX, transformamos espacios con diseños exclusivos de cortinas y persianas. Nuestra pasión por la excelencia nos ha convertido en referentes del diseño interior en México.
          </p>
        </div>
        <img
          src={background}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-gray-900 to-slate-800">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Expertos en Soluciones LUXOFLEX
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Especialistas en cortinas motorizadas, persianas de diseño y sistemas de control solar inteligente que combinan funcionalidad y estilo.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-indigo-950 to-slate-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            La Experiencia LUXOFLEX
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Desde nuestra sede en Guadalajara, brindamos soluciones personalizadas con la más alta tecnología en automatización y diseño. LUXOFLEX: donde el lujo encuentra la funcionalidad.
          </p>
        </div>
        <img
          src={background}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
