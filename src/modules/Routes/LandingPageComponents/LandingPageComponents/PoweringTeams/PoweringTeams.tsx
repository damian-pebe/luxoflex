import { WavyBackground } from "@/components/aceternity/wavy-background";
import { useNavigate } from "react-router-dom";
import { GlowButton } from "@/components/ui/glow-button";

const teams = [
  { name: "Heineken",      tone: "from-emerald-300/16 via-white/[0.06] to-emerald-500/10" },
  { name: "Red Bull",      tone: "from-red-400/18 via-white/[0.06] to-blue-500/12" },
  { name: "Bacardí",       tone: "from-rose-400/18 via-white/[0.06] to-red-700/10" },
  { name: "Jack Daniel's", tone: "from-zinc-200/14 via-white/[0.07] to-zinc-500/10" },
  { name: "Absolut",       tone: "from-sky-300/16 via-white/[0.06] to-blue-500/10" },
  { name: "Smirnoff",      tone: "from-red-300/16 via-white/[0.06] to-cyan-400/10" },
  { name: "Patrón",        tone: "from-yellow-300/18 via-white/[0.06] to-amber-700/10" },
  { name: "Don Julio",     tone: "from-amber-200/18 via-white/[0.06] to-stone-500/10" },
  { name: "Budweiser",     tone: "from-red-400/18 via-white/[0.06] to-blue-700/10" },
  { name: "Corona",        tone: "from-yellow-200/18 via-white/[0.06] to-sky-400/10" },
  { name: "Modelo",        tone: "from-amber-300/18 via-white/[0.06] to-blue-800/10" },
  { name: "José Cuervo",   tone: "from-yellow-300/18 via-white/[0.06] to-green-700/10" },
];

// Double for seamless loop (BlurredInfiniteSlider pattern from 21st.dev)
const loopedTeams = [...teams, ...teams];

export const PoweringTeams = () => {
  const navigate = useNavigate();

  return (
    <section
      aria-label="Marcas que confían en Luxoflex"
      className="bg-black flex flex-col items-center justify-center overflow-hidden md:min-h-screen py-8 md:py-0"
    >
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
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-center text-transparent bg-clip-text bg-linear-to-r from-stone-300 via-white to-stone-400 font-safira leading-tight">
            Impulsando las<br className="hidden md:block" /> mejores marcas
          </h2>
          <p className="text-sm md:text-base mt-4 text-white/50 font-normal uppercase font-rajdhani tracking-widest text-center max-w-lg">
            Desde emprendimientos innovadores hasta grandes industrias
          </p>
        </div>
      </WavyBackground>

      {/*
        Infinite brand carousel — BlurredInfiniteSlider pattern from 21st.dev:
        CSS mask for edge fade + [animation-play-state:paused] on hover
      */}
      <div className="-mt-24 md:-mt-36 relative w-full py-8">
        {/* CSS mask fade at edges — 21st.dev BlurredInfiniteSlider technique */}
        <div
          className="w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            className="flex items-center gap-20 w-max hover:paused transition-all duration-300"
            style={{ animation: "marquee 30s linear infinite" }}
          >
            {loopedTeams.map((team, i) => (
              <div
                key={`${team.name}-${i}`}
                className={`shrink-0 rounded-full border border-white/10 bg-linear-to-r ${team.tone} px-7 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-sm`}
              >
                <span className="font-rajdhani text-sm font-bold uppercase tracking-[0.18em] text-white/62 transition-colors duration-300 hover:text-white whitespace-nowrap select-none">
                  {team.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 z-50 flex justify-center">
        <GlowButton onClick={() => navigate("/contacto")}>
          Quiero mi primera etiqueta
        </GlowButton>
      </div>
    </section>
  );
};
