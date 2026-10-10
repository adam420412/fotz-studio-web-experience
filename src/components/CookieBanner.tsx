import { consentEvent, consentVersion } from "@/lib/analytics.mjs";
import { revokeAnalytics } from "@/lib/google-analytics";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let saved = false;
    try { saved = !!localStorage.getItem('cookie-consent') && localStorage.getItem('cookie-consent-version') === consentVersion; } catch { /* ask without storage */ }
    const timer = saved ? undefined : setTimeout(() => setIsVisible(true), 1500);
    const open = () => setIsVisible(true);
    window.addEventListener('fotz:cookie-settings', open);
    return () => { clearTimeout(timer); window.removeEventListener('fotz:cookie-settings', open); };
  }, []);
  const choose = (value: 'accepted' | 'rejected') => {
    try { localStorage.setItem('cookie-consent', value); localStorage.setItem('cookie-consent-version', consentVersion); } catch { /* optional analytics stay disabled */ }
    setIsVisible(false);
    if (value === 'rejected') revokeAnalytics();
    window.dispatchEvent(new Event(consentEvent));
  };
  const handleAccept = () => choose('accepted');
  const handleReject = () => choose('rejected');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[70] max-h-[calc(100dvh-1rem)] overflow-y-auto"
        >
          <div className="bg-card/95 backdrop-blur-xl border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl">
            <button
              onClick={handleReject}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Zamknij"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 shrink-0">
                <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base pr-4">
                  Szanujemy Twoją prywatność
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  Za Twoją zgodą uruchomimy Google Analytics, aby mierzyć wizyty i kontakt z ofertą. Formularz działa także bez zgody. Ustawienia zmienisz w stopce. <a href="/polityka-prywatnosci" className="underline">Więcej o prywatności</a>.
                </p>
                <div className="flex gap-2">
                  <Button onClick={handleAccept} size="sm" className="flex-1 text-xs sm:text-sm min-h-11 h-auto py-2">
                    Akceptuję
                  </Button>
                  <Button onClick={handleReject} variant="outline" size="sm" className="flex-1 text-xs sm:text-sm min-h-11 h-auto py-2">
                    Niezbędne
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
