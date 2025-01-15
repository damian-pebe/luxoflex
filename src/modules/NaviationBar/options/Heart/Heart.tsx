import bgImageNavBar from "@/assets/crochet7.jpg";
import heartCrochet from "@/assets/heartcrochet.jpg";
import Divider from "@/components/divider";

export default function HeartModule() {
  return (
    <div className="bg-[hsl(var(--background))]">
      <div className=" h-24 shadow-md">
        <img
          src={bgImageNavBar}
          alt="Crochet Art"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center pt-16 px-4 bg-[hsl(var(--background))] rounded-b-3xl">
        <img
          src={heartCrochet}
          alt="Empty Cart"
          className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] rounded-3xl shadow-lg animate-fadeintopleft"
        />

        <h1 className="text-4xl font-serif font-semibold tracking-tight mt-6 text-center text-forground animate-fadeinleft">
          Productos favoritos
        </h1>
        <h2 className="text-2xl font-serif font-medium tracking-tight mt-4 text-center text-forground animate-slideinright">
          No has agregado ningun producto favorito
        </h2>
        
      </div>
      <Divider />
    </div>
  );
}
