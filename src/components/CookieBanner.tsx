import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50"
        >
          <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl">
            <button
              onClick={handleReject}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Zamknij"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Szanujemy Twoją prywatność
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Używamy plików cookies, aby zapewnić najlepsze doświadczenia na naszej stronie. 
                  Klikając "Akceptuję", zgadzasz się na ich użycie.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button onClick={handleAccept} size="sm" className="flex-1">
                    Akceptuję
                  </Button>
                  <Button onClick={handleReject} variant="outline" size="sm" className="flex-1">
                    Tylko niezbędne
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
