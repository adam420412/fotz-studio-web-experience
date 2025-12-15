import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Lottie Animation */}
        <div className="w-80 h-80 md:w-[500px] md:h-[500px] relative z-10 flex items-center justify-center">
          <DotLottieReact
            src="/preloader.lottie"
            autoplay
            loop={false}
            className="w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
