import { WavyBackground } from "@/components/aceternity/wavy-background";
import { useNavigate } from "react-router-dom";
import { GlowButton } from "@/components/ui/glow-button";
import { useState } from "react";

// Logo URLs — replace with real client logos when ready
const teams = [
  { name: "Heineken",      img: "https://logo.clearbit.com/heineken.com" },
  { name: "Red Bull",      img: "https://logo.clearbit.com/redbull.com" },
  { name: "Bacardí",       img: "https://logo.clearbit.com/bacardi.com" },
  { name: "Jack Daniel's", img: "https://logo.clearbit.com/jackdaniels.com" },
  { name: "Absolut",       img: "https://logo.clearbit.com/absolut.com" },
  { name: "Smirnoff",      img: "https://logo.clearbit.com/smirnoff.com" },
  { name: "Patrón",        img: "https://logo.clearbit.com/patrontequila.com" },
  { name: "Don Julio",     img: "https://logo.clearbit.com/donjulio.com" },
  { name: "Budweiser",     img: "https://logo.clearbit.com/budweiser.com" },
  { name: "Corona",        img: "https://logo.clearbit.com/corona.com" },
  { name: "Modelo",        img: "https://logo.clearbit.com/modelousa.com" },
  { name: "José Cuervo",   img: "https://logo.clearbit.com/cuervo.com" },
];

// Triple-duplicate for seamless infinite loop
const loopedTeams = [...teams, ...teams, ...teams];

function LogoItem({ name, img }: { name: string; img: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="font-rajdhani font-bold text-sm text-white/35 uppercase tracking-[0.2em] whitespace-nowrap select-none">
        {name}
      </span>
    );
  }

  return (
    <img
      src={img}
      alt={name}
      title={name}
      className="h-9 w-auto max-w-28 object-contain select-none"
      style={{
        filter: "brightness(0) invert(1)",
        opacity: 0.45,
        transition: "opacity 0.3s",
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "0.45")}
      onError={() => setFailed(true)}
      draggable={false}
    />
  );
}

export const PoweringTeams = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black flex flex-col items-center justify-center overflow-hidden md:min-h-screen py-8 md:py-0">

      <WavyBackground
        className="max-w-4xl w-full mb-32 md:mb-48 overflow-hidden"
        blur={14}
        speed="fast"
        waveOpacity={0.5}
        waveWidth={60}
        colors={["#ec4899", "#8b5cf6", "#3b82f6", "#ec4899", "#6366f1"]}
        backgroundFill="black"
      >
        <div className="flex flex-col items-center justify-center pt-24 md:pt-32 px-6 text-center">
          <p className="text-4xl md:text-6xl font-bold uppercase text-center text-transparent bg-clip-text bg-linear-to-r from-stone-300 via-white to-stone-400 font-safira leading-tight">
            Impulsando las<br className="hidden md:block" /> mejores marcas
          </p>
          <p className="text-sm md:text-base mt-4 text-white/50 font-normal uppercase font-rajdhani tracking-widest text-center max-w-lg">
            Desde emprendimientos innovadores hasta grandes industrias
          </p>
        </div>
      </WavyBackground>

      {/* Infinite logo carousel */}
      <div className="-mt-24 md:-mt-36 relative w-full overflow-hidden py-8">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center gap-20 w-max"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {loopedTeams.map((team, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center">
              <LogoItem name={team.name} img={team.img} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 z-50 flex justify-center">
        <GlowButton onClick={() => navigate("/contactus")}>
          Quiero mi primera etiqueta
        </GlowButton>
      </div>
    </div>
  );
};
