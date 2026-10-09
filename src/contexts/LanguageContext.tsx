import { createContext, useContext, useEffect, useState, startTransition, ReactNode } from "react";

type Language = "pl" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (pl: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pl");
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("language");
      if (saved === "pl" || saved === "en") {
        // Let lazy sections finish hydrating before applying a saved language.
        startTransition(() => setLanguage(saved));
      }
    } catch {
      // The page remains usable when browser storage is unavailable.
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    try { localStorage.setItem("language", lang); } catch { /* Storage is optional. */ }
  };

  const t = (pl: string, en: string) => {
    return language === "pl" ? pl : en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
