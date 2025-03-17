import { WavyBackground } from "@/components/aceternity/wavy-background";
import EffectScroll from "@/components/effectScroll";
import Orb from "@/components/reactbits/Orb";
import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";
// import { Button } from "@/components/ui/button";
// import { ChevronRight, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

export const PoweringTeams = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center overflow-hidden py-8 -z-20">
      <ThreeDotsBlack />

        <WavyBackground
          className="max-w-4xl mb-72  overflow-hidden"
          blur={20}
          speed="fast"
        >
          <div className="flex flex-col items-center justify-center pt-40">
            <p className="text-xl md:text-5xl font-bold inter-var uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-stone-300 via-white to-stone-400 font-safira">
              Impulsando las mejores marcas
            </p>
            <p className="text-sm mt-4 text-white font-normal uppercase font-rajdhani tracking-widest inter-var text-center">
              Desde emprendimientos innovadores hasta grandes industrias
            </p>
          </div>
        </WavyBackground>
      <div className="z-10 mt-[-180px] w-full h-full mb-32">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-32 px-10 items-center">
          {teams.map((team, index) => (
            <Link to={team.link}>
              <EffectScroll classname="animate-fadeinbouncedown">
                <img
                  src={team.img}
                  alt={index.toString()}
                  className="h-9 hover:animate-wiggle"
                />
              </EffectScroll>
            </Link>
          ))}
        </div>
        {/* <Button variant="secondary" className="relative z-50 flex justify-center items-center">
          <Lightbulb className="text-white"/>
          Unete a LUXOFLEX
          <ChevronRight className="text-white"/>
        </Button> */}

        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
</div>
       
      </div>

      <ThreeDotsBlack />
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
  
  }
];
