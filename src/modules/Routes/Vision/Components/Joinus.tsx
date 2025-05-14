import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Joinus() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-5">
      <ThreeDotsBlack top={true} />
      <h2 className="text-3xl font-semibold mb-6 font-serif text-white pt-10">
        Únete a Nuestro Viaje
      </h2>
      <p className="mb-8 text-xl text-gray-400">
        Sé parte del futuro que estamos creando. Juntos, podemos convertir esta
        visión en realidad.
      </p>
      <div className="flex justify-center pb-10">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button
            className="px-6 py-3 text-lg text-white rounded-lg tracking-wider font-bold uppercase transition-all duration-1000 bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-[0_0_5px_rgb(0,140,255),0_0_25px_rgb(0,140,255),0_0_50px_rgb(0,140,255),0_0_100px_rgb(0,140,255)] flex items-center gap-2"
            onClick={() => navigate("/contactus")}
          >
            Participa con Nosotros
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Rocket className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>{" "}
      <ThreeDotsBlack />
    </div>
  );
}
