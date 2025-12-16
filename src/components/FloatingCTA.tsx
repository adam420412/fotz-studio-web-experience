import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Expanded options */}
          <AnimatePresence>
            {isExpanded && (
              <>
                <motion.a
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  href="tel:+48790814814"
                  className="flex items-center gap-3 rounded-full bg-card/95 backdrop-blur-sm px-4 py-3 shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
                    +48 790 814 814
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/kontakt"
                    className="flex items-center gap-3 rounded-full bg-card/95 backdrop-blur-sm px-4 py-3 shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
                      Napisz do nas
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                  </Link>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Main toggle button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-14 h-14 rounded-full bg-gradient-brand shadow-lg shadow-primary/30 flex items-center justify-center hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: isExpanded ? 45 : 0 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-white"
            >
              {isExpanded ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </>
              )}
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
