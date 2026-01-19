import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logoFotz from "@/assets/logo-fotz.png";

interface PreloaderProps {
  onComplete: () => void;
}

const PRELOADER_SHOWN_KEY = "fotz_preloader_shown";
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
const PRELOADER_DURATION = 1.2; // Reduced to 1.2s for faster load

export function Preloader({ onComplete }: PreloaderProps) {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem(PRELOADER_SHOWN_KEY);
    const now = Date.now();
    
    // Show preloader only if never shown or session expired (30 min)
    if (!lastShown || (now - parseInt(lastShown)) > SESSION_TIMEOUT) {
      setShouldShow(true);
      localStorage.setItem(PRELOADER_SHOWN_KEY, now.toString());
    } else {
      // Skip preloader for returning visitors within session
      onComplete();
    }
  }, [onComplete]);

  if (!shouldShow) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: PRELOADER_DURATION }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Simple logo with scale animation - NO Lottie/WASM */}
        <motion.div 
          className="w-48 h-48 md:w-64 md:h-64 relative z-10 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src={logoFotz}
            alt="Fotz Studio"
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        {/* Simple loading bar */}
        <motion.div 
          className="mt-8 w-32 h-1 bg-muted rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: PRELOADER_DURATION, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
