import { WavyBackground } from "@/components/aceternity/wavy-background";
import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";
import { Link, useNavigate } from "react-router-dom";
import { GlowButton } from "@/components/ui/glow-button";

const teams = [
  { img: "/LOGO-CON-FRANJA-BLANCA.png", link: "https://lacoculence.com" },
  { img: "/LOGO-CON-FRANJA-BLANCA.png", link: "https://lacoculence.com" },
  { img: "/LOGO-CON-FRANJA-BLANCA.png", link: "https://lacoculence.com" },
  { img: "/LOGO-CON-FRANJA-BLANCA.png", link: "https://lacoculence.com" },
  { img: "/LOGO-CON-FRANJA-BLANCA.png", link: "https://lacoculence.com" },
  { img: "/LOGO-CON-FRANJA-BLANCA.png", link: "https://lacoculence.com" },
];

// Duplicate for seamless loop
const loopedTeams = [...teams, ...teams];

export const PoweringTeams = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black flex flex-col items-center justify-center overflow-hidden py-8 -z-20">
      <ThreeDotsBlack top={true} />

      <WavyBackground
        className="max-w-4xl mb-40 overflow-hidden"
        blur={20}
        speed="fast"
      >
        <div className="flex flex-col items-center justify-center pt-28">
          <p className="text-4xl md:text-6xl font-bold inter-var uppercase text-center text-transparent bg-clip-text bg-linear-to-r from-stone-300 via-white to-stone-400 font-safira">
            Impulsando las mejores marcas
          </p>
          <p className="text-sm md:text-base mt-3 text-white/60 font-normal uppercase font-rajdhani tracking-widest inter-var text-center max-w-lg">
            Desde emprendimientos innovadores hasta grandes industrias
          </p>
        </div>
      </WavyBackground>

      {/* Infinity logo carousel */}
      <div className="-mt-30 relative w-full overflow-hidden py-6">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-12 items-center w-max">
          {loopedTeams.map((team, index) => (
            <Link
              to={team.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <img
                src={team.img}
                alt={`client-${index}`}
                className="h-9 opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-10 z-50 flex justify-center">
        <GlowButton onClick={() => navigate("/contactus")}>
          Quiero mi primera etiqueta
        </GlowButton>
      </div>

      <ThreeDotsBlack />
    </div>
  );
};
