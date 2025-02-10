import { FileUpload } from "@/components/aceternity/file_upload";
import RotatingText from "@/components/reactbits/rotating_text";
import ShinyText from "@/components/reactbits/shiny_text";
import Stepper, { Step } from "@/components/reactbits/stepper";
import { useState } from "react";
import background from "@/assets/background.jpg";
import { Textarea } from "@/components/ui/textarea";
import { Users } from "lucide-react";
export function Design() {
  const [feedback, setFeedback] = useState("");
  return (
    <div className="items-center justify-center flex flex-col min-h-screen bg-gradient-to-b from-black via-neutral-900">
      <div className=" mt-10 text-3xl md:text-5xl font-alfa font-light flex gap-2   text-white">
        Realizamos <br className="md:hidden" /> Diseños
        <RotatingText
          texts={["Profesionales!", "Elegantes!", "Relevantes!", "Formales!"]}
          mainClassName="p-7 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-2 justify-center rounded-lg"
          staggerFrom={"first"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      <ShinyText
        text="Realizamos todos los diseños personalizados en 4 simples pasos."
        disabled={true}
        speed={2}
        className="items-center flex justify-center p-10 custom-class text-2xl mb-8 text-muted-foreground font-playfair animate-pulse duration-1000"
      />

      <Stepper
        className="w-full"
        initialStep={1}
        backButtonText="Anterior"
        nextButtonText="Siguiente"
      >
        <Step>
          <h2 className="font-rajdhani font-bold text-2xl">
            Nosotros diseñaremos tu logo
          </h2>
          <p className="font-rajdhani font-bold text-lg">
            ¡Sube tu logo o una idea!
          </p>

          <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload />
          </div>
        </Step>
        <Step>
          <h2 className="font-rajdhani font-bold text-2xl">Paso 2</h2>
          <p className="font-rajdhani font-bold text-lg">
            Te enviaremos el avance del diseño!
          </p>

          <img
            className="object-cover h-full w-full rounded-lg mt-4"
            src={background}
          />
        </Step>
        <Step>
          <h2 className="font-rajdhani font-bold text-2xl">
            Por favor, proporciona tus recomendaciones o cambios deseados
          </h2>

          <Textarea
            className="my-5 font-rajdhani font-bold text-md"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tus recomendaciones"
          />

          <h2 className="font-rajdhani font-bold text-lg">
            Mejoraremos tu diseño al máximo
          </h2>
        </Step>
        <Step>
          <div className="flex fex-wrap gap-3">
            <Users size={36} />
            <h2 className="font-rajdhani font-bold text-3xl">Ultimo paso!</h2>
          </div>
          <p className="font-rajdhani font-bold text-lg">
            Repetiremos el paso 2 y 3 hasta que ames tu diseño
          </p>
        </Step>
      </Stepper>
    </div>
  );
}
