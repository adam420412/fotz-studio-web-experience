import { motion } from "framer-motion";
import Lottie from "lottie-react";
import fotzAnimation from "@/assets/fotz-lottie.json";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 3 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Glow effect behind animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.5, 0.3], scale: [0.5, 1.2, 1] }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 -m-40 rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(336, 71%, 27%, 0.4) 0%, hsla(209, 69%, 19%, 0.2) 50%, transparent 70%)",
          }}
        />
        
        {/* Lottie Animation */}
        <div className="w-80 h-80 md:w-[450px] md:h-[450px] relative z-10">
          <Lottie 
            animationData={fotzAnimation} 
            loop={false}
            className="w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
}