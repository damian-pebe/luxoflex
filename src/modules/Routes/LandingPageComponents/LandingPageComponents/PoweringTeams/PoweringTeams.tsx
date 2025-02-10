import BlurText from "@/components/reactbits/blur_text";
import ShinyText from "@/components/reactbits/shiny_text";

export const PoweringTeams = () => {
  return (
    <div className=" text-white text-center px-10 md:px-30 py-40 bg-gradient-to-b from-black via-zinc-800 to-black">
      <BlurText
        text="Impulsando los mejores productos!!"
        delay={250}
        animateBy="words"
        direction="bottom"
        className="text-8xl mb-8 font-wire  text- drop-shadow-2xl shadow-white text-center justify-center"
      />

      <ShinyText
        text="        Desde startups de nueva generación hasta empresas consolidadas.
"
        disabled={false}
        speed={1}
        className="custom-class text-2xl mb-8 text-muted-foreground font-playfair"
      />

      <p className="text-2xl mb-8 text-muted-foreground font-playfair">
        Desde startups de nueva generación hasta empresas consolidadas.
      </p>
      <div className="grid grid-cols-2 gap-4 md:flex md:justify-center md:items-center md:flex-wrap">
        <img
          src="https://static.wixstatic.com/media/770576_efbe706aeee34b17933cc0c3ee802407~mv2.png/v1/fill/w_540,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-CON-FRANJA-BLANCA.png"
          alt="La Coculence"
          className="h-12 mx-4"
        />
        <img
          src="https://static.wixstatic.com/media/770576_efbe706aeee34b17933cc0c3ee802407~mv2.png/v1/fill/w_540,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-CON-FRANJA-BLANCA.png"
          alt="La Coculence"
          className="h-12 mx-4"
        />
        <img
          src="https://static.wixstatic.com/media/770576_efbe706aeee34b17933cc0c3ee802407~mv2.png/v1/fill/w_540,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-CON-FRANJA-BLANCA.png"
          alt="La Coculence"
          className="h-12 mx-4"
        />
        <img
          src="https://static.wixstatic.com/media/770576_efbe706aeee34b17933cc0c3ee802407~mv2.png/v1/fill/w_540,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-CON-FRANJA-BLANCA.png"
          alt="La Coculence"
          className="h-12 mx-4"
        />
        <img
          src="https://static.wixstatic.com/media/770576_efbe706aeee34b17933cc0c3ee802407~mv2.png/v1/fill/w_540,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-CON-FRANJA-BLANCA.png"
          alt="La Coculence"
          className="h-12 mx-4"
        />
        <img
          src="https://static.wixstatic.com/media/770576_efbe706aeee34b17933cc0c3ee802407~mv2.png/v1/fill/w_540,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-CON-FRANJA-BLANCA.png"
          alt="La Coculence"
          className="h-12 mx-4"
        />
      </div>
    </div>
  );
};
