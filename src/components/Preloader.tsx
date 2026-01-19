import { motion } from "framer-motion";
import { useEffect, useState, lazy, Suspense } from "react";

// Lazy load Lottie - it's heavy (~200KB WASM)
const DotLottieReact = lazy(() => 
  import("@lottiefiles/dotlottie-react").then(m => ({ default: m.DotLottieReact }))
);

interface PreloaderProps {
  onComplete: () => void;
}

const PRELOADER_SHOWN_KEY = "fotz_preloader_shown";
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
const PRELOADER_DURATION = 1.5; // Reduced from 3s to 1.5s

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
      transition={{ duration: 0.4, delay: PRELOADER_DURATION }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Simple CSS logo with fallback while Lottie loads */}
        <div className="w-64 h-64 md:w-80 md:h-80 relative z-10 flex items-center justify-center">
          <Suspense fallback={
            <div className="w-32 h-32 rounded-full bg-gradient-to-b from-primary to-secondary animate-pulse" />
          }>
            <DotLottieReact
              src="/preloader.lottie"
              autoplay
              loop={false}
              className="w-full h-full"
            />
          </Suspense>
        </div>
      </div>
    </motion.div>
  );
}
