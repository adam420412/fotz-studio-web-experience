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
      transition={{ duration: 0.6, delay: 2.2 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Glow effect behind logo - brand colors */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.6, 0.4], scale: [0.5, 1.3, 1.1] }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 -m-32 rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(336, 71%, 27%, 0.5) 0%, hsla(209, 69%, 19%, 0.3) 50%, transparent 70%)",
          }}
        />
        
        {/* Logo animation - much bigger */}
        <motion.img
          src={sygnetFotz}
          alt="Fotz Studio"
          className="w-48 h-48 md:w-64 md:h-64 relative z-10"
          initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
          }}
          transition={{ 
            duration: 1, 
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />

        {/* Brand name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 text-2xl md:text-3xl font-heading font-bold text-foreground"
        >
          FOTZ STUDIO
        </motion.div>

        {/* Loading bar - brand gradient */}
        <motion.div
          className="mt-8 w-32 h-1 rounded-full overflow-hidden bg-muted"
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, hsl(336, 71%, 27%) 0%, hsl(209, 69%, 19%) 100%)" }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}