import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-background/20 backdrop-blur-sm rounded-full p-1 border border-border/30">
      <button
        onClick={() => setLanguage("pl")}
        className={cn(
          "px-3 py-1 text-xs font-medium rounded-full transition-all duration-300",
          language === "pl"
            ? "bg-primary text-primary-foreground"
            : "text-foreground/70 hover:text-foreground"
        )}
      >
        PL
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-3 py-1 text-xs font-medium rounded-full transition-all duration-300",
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-foreground/70 hover:text-foreground"
        )}
      >
        EN
      </button>
    </div>
  );
}
