import { FileUpload } from "@/components/aceternity/file_upload";
import RotatingText from "@/components/reactbits/rotating_text";
import ShinyText from "@/components/reactbits/shiny_text";
import Stepper, { Step } from "@/components/reactbits/stepper";
import { useState } from "react";
import background from "@/assets/background.jpg";
import { Input } from "@/components/ui/input";
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
          <h2>Nosotros diseñaremos tu logo</h2>
          <p>Check out the next step!</p>

          <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload />
          </div>
        </Step>
        <Step>
          <h2>Paso 2</h2>
          <p>Custom step content!</p>

          <img
            style={{
              height: "100px",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center -70px",
              borderRadius: "15px",
              marginTop: "1em",
            }}
            src={background}
          />
        </Step>
        <Step>
          <h2>Give us feedback about the logo</h2>
          <Input
            className="my-5"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your feedback"
          />
          <h2>we'll make the logo get 100x better</h2>
        </Step>
        <Step>
          <h2>Final Step</h2>
          <p>We repeat step 2 n 3 untill u ove ur design</p>
        </Step>
      </Stepper>
    </div>
  );
}
