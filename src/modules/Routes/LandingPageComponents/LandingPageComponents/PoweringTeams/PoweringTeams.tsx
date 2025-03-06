import EffectScroll from "@/components/effectScroll";
import BlurText from "@/components/reactbits/blur_text";
import ShinyText from "@/components/reactbits/shiny_text";
import { Link } from "react-router-dom";
import background from "@/assets/luxoflex.png";

export const PoweringTeams = () => {
  return (
    <div className="bg-gradient-to-b from-black via-white/20 to-black text-white h-screen flex flex-col justify-center items-center text-center px-2 md:px-28 py-14 ">
      <EffectScroll classname="animate-fadeinbouncedown min-w min-h flex justify-center">
                    <img src={background} className="h-20 md:h-36"/>
                  </EffectScroll>
      <BlurText
        text="Impulsando las mejores empresas!!"
        delay={250}
        animateBy="words"
        direction="bottom"
        className="text-6xl mb-8 font-vt323 text-[#FAFAFA] font-light  text-center justify-center"
      />
      <EffectScroll>
        <ShinyText
          text="Desde startups de nueva generación hasta empresas consolidadas."
          disabled={false}
          speed={1}
          className="custom-class text-2xl mb-8 text-muted-foreground font-playfair animate-pulse"
        />
      </EffectScroll>

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
