import { WavyBackground } from "@/components/aceternity/wavy-background";
import EffectScroll from "@/components/effectScroll";
import { Link } from "react-router-dom";

export const PoweringTeams = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center overflow-hidden pb-52">
      <WavyBackground className="max-w-4xl pb-40 overflow-x-hidden">
        <p className="text-xl md:text-4xl font-bold inter-var uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-stone-300 via-white to-stone-400 font-safira">
        Impulsando las mejores marcas con etiquetas de calidad
        </p>
        <p className="text-sm mt-4 text-white font-normal uppercase font-rajdhani tracking-widest inter-var text-center">
        Desde emprendimientos innovadores hasta grandes industrias
        </p>
      </WavyBackground>
      <div className="z-50 mt-[-250px] left-0 w-full h-full"></div>

      <div className="flex justify-center gap-2 items-center flex-wrap">
        {teams.map((team, index) => (
          <Link
            to={team.link}
            className="rounded-xl duration-1000 transition-all [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border-white/10 border p-4"
          >
            <EffectScroll classname="animate-fadeinbouncedown">
              <img
                src={team.img}
                alt={index.toString()}
                className="h-9 mx-4 hover:animate-wiggle"
              />
            </EffectScroll>
          </Link>
        ))}
      </div>
    </div>
  );
};
interface Team {
  img: string;
  link: string;
}
const teams: Team[] = [
  {
    img: "https://static.wixstatic.com/media/770576_efbe706aeee34b17933cc0c3ee802407~mv2.png/v1/fill/w_540,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-CON-FRANJA-BLANCA.png",
    link: "https://lacoculence.com",
  },
  {
    img: "https://static.wixstatic.com/media/770576_efbe706aeee34b17933cc0c3ee802407~mv2.png/v1/fill/w_540,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-CON-FRANJA-BLANCA.png",
    link: "https://lacoculence.com",
  },
  {
    img: "https://static.wixstatic.com/media/770576_efbe706aeee34b17933cc0c3ee802407~mv2.png/v1/fill/w_540,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-CON-FRANJA-BLANCA.png",
    link: "https://lacoculence.com",
  },
  {
    img: "https://static.wixstatic.com/media/770576_efbe706aeee34b17933cc0c3ee802407~mv2.png/v1/fill/w_540,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-CON-FRANJA-BLANCA.png",
    link: "https://lacoculence.com",
  },
  {
    img: "https://static.wixstatic.com/media/770576_efbe706aeee34b17933cc0c3ee802407~mv2.png/v1/fill/w_540,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-CON-FRANJA-BLANCA.png",
    link: "https://lacoculence.com",
  },
  {
    img: "https://static.wixstatic.com/media/770576_efbe706aeee34b17933cc0c3ee802407~mv2.png/v1/fill/w_540,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-CON-FRANJA-BLANCA.png",
    link: "https://lacoculence.com",
  },
];
