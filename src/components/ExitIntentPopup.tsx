import { useState, useEffect, useCallback } from "react";
import { X, Gift, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger when leaving from the top of the viewport
    if (e.clientY <= 0) {
      const hasSeenExitPopup = sessionStorage.getItem("exit_popup_shown");
      if (!hasSeenExitPopup) {
        setIsOpen(true);
        sessionStorage.setItem("exit_popup_shown", "true");
      }
    }
  }, []);

  useEffect(() => {
    // Wait 5 seconds before enabling exit intent detection
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/90 backdrop-blur-md"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors z-10"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-yellow-500 to-primary" />

        <div className="p-6 sm:p-8">
          <div className="text-center">
            {/* Icon */}
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-pulse" />
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500" />
            </div>

            {/* Content */}
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
              Chwileczkę!
            </h3>
            <p className="text-lg text-muted-foreground mb-2">
              Zanim wyjdziesz...
            </p>
            <p className="text-foreground mb-6">
              Zamów <span className="font-bold text-primary">bezpłatną konsultację</span> i dowiedz się, 
              jak zwiększyć sprzedaż w Twojej firmie nawet o <span className="font-bold">40%</span>.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["30 min rozmowy", "Analiza Twojej marki", "Rekomendacje"].map((item) => (
                <span 
                  key={item}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt" onClick={handleClose} className="group">
                  Umów konsultację
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={handleClose}>
                Może później
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Bez zobowiązań • Odpowiadamy w 24h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}