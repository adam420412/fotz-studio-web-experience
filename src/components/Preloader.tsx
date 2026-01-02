import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

const PRELOADER_SHOWN_KEY = "fotz_preloader_shown";
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

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
