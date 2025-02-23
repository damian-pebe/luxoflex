import BlurText from "@/components/reactbits/blur_text";
import ShinyText from "@/components/reactbits/shiny_text";
import { Link } from "react-router-dom";

export const PoweringTeams = () => {
  return (
    <div className=" text-white text-center px-2 md:px-28 pt-40 pb-20 bg-gradient-to-b from-black via-zinc-800 to-black">
      <BlurText
        text="Impulsando las mejores empresas!!"
        delay={250}
        animateBy="words"
        direction="bottom"
        className="text-8xl mb-8 font-dancing  text- drop-shadow-2xl shadow-white text-center justify-center"
      />

      <ShinyText
        text="Desde startups de nueva generación hasta empresas consolidadas."
        disabled={false}
        speed={1}
        className="custom-class text-2xl mb-8 text-muted-foreground font-playfair animate-pulse duration-1000"
      />

      <div className="flex justify-center gap-2 items-center flex-wrap">
        {teams.map((team, index) => (
          <Link
            to={team.link}
            className="group rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-white p-4"
          >
            <img
              src={team.img}
              alt={index.toString()}
              className="h-8 mx-4 group-hover:scale-125 transition-transform duration-1000"
            />
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
