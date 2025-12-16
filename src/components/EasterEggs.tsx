import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

// Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "KeyB", "KeyA"
];

export function EasterEggs() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.code === KONAMI_CODE[konamiIndex]) {
      const nextIndex = konamiIndex + 1;
      setKonamiIndex(nextIndex);

      if (nextIndex === KONAMI_CODE.length) {
        // Konami code completed!
        setShowEasterEgg(true);
        setKonamiIndex(0);
        
        // Create particle explosion
        const newParticles = Array.from({ length: 30 }, (_, i) => ({
          id: Date.now() + i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }));
        setParticles(newParticles);

        setTimeout(() => {
          setShowEasterEgg(false);
          setParticles([]);
        }, 4000);
      }
    } else {
      setKonamiIndex(0);
    }
  }, [konamiIndex]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <>
          {/* Particle explosion */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ 
                opacity: 1, 
                scale: 0,
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
              }}
              animate={{ 
                opacity: 0, 
                scale: 1,
                x: particle.x,
                y: particle.y,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="fixed z-[200] pointer-events-none"
            >
              <Sparkles className="w-6 h-6 text-primary" />
            </motion.div>
          ))}

          {/* Easter egg message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 z-[150] flex items-center justify-center pointer-events-none"
          >
            <div className="bg-card/95 backdrop-blur-xl border border-primary/50 rounded-2xl p-8 shadow-2xl shadow-primary/20 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
              >
                <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-heading font-bold text-gradient-premium mb-2">
                🎮 Konami Code Activated!
              </h3>
              <p className="text-foreground/70">
                Gratulacje! Znalazłeś sekretną funkcję 🎉
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
