import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

const PHONE_NUMBER = "48790814814";
const DEFAULT_MESSAGE = "Cześć! Chciałbym dowiedzieć się więcej o usługach Fotz Studio.";

export function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [hasShownTooltip, setHasShownTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Show tooltip after 20 seconds if visible
    if (isVisible && !hasShownTooltip) {
      const timer = setTimeout(() => {
        setIsTooltipOpen(true);
        setHasShownTooltip(true);
        
        // Auto-hide tooltip after 5 seconds
        setTimeout(() => setIsTooltipOpen(false), 5000);
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, hasShownTooltip]);

  const handleClick = () => {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div 
      className={cn(
        "fixed left-4 sm:left-6 bottom-4 sm:bottom-6 z-50 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      {/* Tooltip */}
      <div 
        className={cn(
          "absolute bottom-full left-0 mb-3 bg-card border border-border rounded-xl shadow-xl p-4 w-56 transition-all duration-300",
          isTooltipOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <button 
          onClick={() => setIsTooltipOpen(false)}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-secondary"
        >
          <X className="w-3 h-3 text-muted-foreground" />
        </button>
        <p className="text-sm font-medium mb-1">Masz pytanie?</p>
        <p className="text-xs text-muted-foreground">
          Napisz do nas na WhatsApp - odpowiadamy błyskawicznie!
        </p>
        {/* Triangle */}
        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-card border-r border-b border-border transform rotate-45" />
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Napisz na WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </button>
    </div>
  );
}