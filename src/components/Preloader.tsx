import { motion } from "framer-motion";
import sygnetFotz from "@/assets/sygnet-fotz.png";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
    >
      <div className="relative">
        {/* Glow effect behind logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.5, 0.3], scale: [0.5, 1.2, 1] }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 -m-20 rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(336, 71%, 27%, 0.4) 0%, transparent 70%)",
          }}
        />
        
        {/* Logo animation */}
        <motion.img
          src={sygnetFotz}
          alt="Fotz Studio"
          className="w-32 h-32 md:w-40 md:h-40 relative z-10"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />

        {/* Loading bar */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full overflow-hidden bg-muted"
        >
          <motion.div
            className="h-full bg-gradient-brand rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}