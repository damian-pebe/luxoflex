import bgImageNavBar from "@/assets/crochet7.jpg";
import emptyCart from "@/assets/emptycart.jpg";
import Divider from "@/components/divider";

export default function CartModule() {
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
          src={emptyCart}
          alt="Empty Cart"
          className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] rounded-3xl shadow-lg animate-fadeinbounceright"
        />

        <h1 className="text-4xl font-serif font-semibold tracking-tight mt-6 text-center text-forground animate-slideinup">
          Carrito de compras
        </h1>
        <h2 className="text-2xl font-serif font-medium tracking-tight mt-4 text-center text-forground animate-fadeinbouncedown">
          Tu carrito está vacío
        </h2>
        <h3 className="text-xl font-serif font-medium tracking-tight mt-2 text-center text-forground animate-fadeintopleft">
          ¡Agrega productos para comenzar!
        </h3>
      </div>
      <Divider />
    </div>
  );
}
