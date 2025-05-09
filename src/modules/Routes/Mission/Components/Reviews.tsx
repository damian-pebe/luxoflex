import { motion } from "framer-motion";
import { Brain, Rocket, Users } from "lucide-react";
import { IconMoodHappy } from "@tabler/icons-react";
import { ThreeDotsBlack } from "@/components/ReusableIcons/ReusableIcons";
export default function Reviews() {
  return (
    <div
      className="relative z-20 -mt-20 mb-20"
      style={{
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="max-w-7xl py-5 mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {[
          { icon: Brain, value: "1000+", label: "Diseños Personalizados" },
          { icon: Users, value: "500+", label: "Clientes Satisfechos" },
          { icon: IconMoodHappy, value: "99%", label: "Calidad Garantizada" },
          { icon: Rocket, value: "24/7", label: "Servicio al Cliente" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
            className="group backdrop-blur-sm bg-white/10 dark:bg-black/10 p-6 rounded-xl border-2 border-blue-500/20 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="flex flex-col items-center text-center ">
              <div className="mb-4 text-blue-500 transition-transform duration-500 group-hover:rotate-[360deg]">
                <stat.icon size={32} />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                {stat.value}
              </div>
              <div className="text-gray-400 mt-2 group-hover:text-blue-400 transition-colors">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <ThreeDotsBlack top={true} />
    </div>
  );
}
