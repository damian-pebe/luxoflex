import { WavyBackground } from "@/components/aceternity/wavy-background";
import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";
import { Link, useNavigate } from "react-router-dom";

export const PoweringTeams = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-black flex flex-col items-center justify-center overflow-hidden py-8 -z-20">
      <ThreeDotsBlack top={true} />

      <WavyBackground
        className="max-w-4xl mb-72  overflow-hidden"
        blur={20}
        speed="fast"
      >
        <div className="flex flex-col items-center justify-center pt-40">
          <p className="text-5xl md:text-7xl font-bold inter-var uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-stone-300 via-white to-stone-400 font-safira">
            Impulsando las mejores marcas
          </p>
          <p className="text-lg md:text-3xl mt-4 text-white font-normal uppercase font-rajdhani tracking-widest inter-var text-center">
            Desde emprendimientos innovadores hasta grandes industrias
          </p>
        </div>
      </WavyBackground>

      <div className="mt-[-180px] relative w-full h-full  group flex flex-col items-center justify-center transition-all duration-700  py-5 ">
        <div className="transition-all duration-700 z-0 flex flex-wrap justify-center gap-x-5 gap-y-16 px-20 items-center relative py-5">
          {teams.map((team, index) => (
            <Link to={team.link} key={index}>
              <div className="animate-fadeinbouncedown">
                <img
                  src={team.img}
                  alt={index.toString()}
                  className="h-9 transform hover:-translate-y-[5px] transition-all duration-700 "
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="py-10 scale-95 hover:scale-100 z-50 justify-center items-center transition-all duration-700">
        <button
          onClick={() => navigate("/contactus")}
          className="font-rajdhani hover:before:duration-500 hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
        >
          Unete a LUXOFLEX
        </button>
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
  },
];
