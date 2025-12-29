import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { MegaMenu } from "./MegaMenu";
import logoFotz from "@/assets/logo-fotz.png";

const navLinksData = [
  { name: { pl: "Realizacje", en: "Portfolio" }, href: "/realizacje" },
  { name: { pl: "Dla kogo", en: "For whom" }, href: "/dla-kogo" },
  { name: { pl: "Blog", en: "Blog" }, href: "/blog" },
  { name: { pl: "O nas", en: "About us" }, href: "/o-nas" },
  { name: { pl: "Kontakt", en: "Contact" }, href: "/kontakt" },
];

const mobileServicesData = [
  { name: "Kompleksowa obsługa", href: "/kompleksowa-obsluga-marketingowa" },
  { name: "Social Media", href: "/social-media" },
  { name: "Facebook Ads", href: "/facebook-ads" },
  { name: "Google Ads", href: "/google-ads" },
  { name: "Strony Internetowe", href: "/strony-internetowe" },
  { name: "Pozycjonowanie SEO", href: "/pozycjonowanie" },
  { name: "Google Maps", href: "/pozycjonowanie-google-maps" },
  { name: "Produkcja Filmów", href: "/produkcja-filmow" },
  { name: "Spoty Reklamowe", href: "/spoty-reklamowe" },
  { name: "Wizualizacje 3D", href: "/wizualizacje-3d" },
  { name: "Fotografia", href: "/fotografia" },
  { name: "Identyfikacja wizualna", href: "/identyfikacja-wizualna" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();
  const { language, t } = useLanguage();

  const navLinks = navLinksData.map(link => ({
    name: link.name[language],
    href: link.href
  }));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-wide px-6 md:px-12">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center"
            >
              <img 
                src={logoFotz} 
                alt="Fotz Studio" 
                className="h-12 sm:h-16 md:h-20 lg:h-32 xl:h-40 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Services Mega Menu Trigger */}
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className={cn(
                  "text-sm font-medium transition-colors relative group flex items-center gap-1 outline-none",
                  isMegaMenuOpen || location.pathname.includes("/uslugi")
                    ? "text-foreground"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                {t("Usługi", "Services")}
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isMegaMenuOpen && "rotate-180"
                )} />
              </button>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    location.pathname === link.href
                      ? "text-foreground"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-gradient-brand transition-all duration-300",
                      location.pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Language Switcher & CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt" className="group">
                  {t("Bezpłatna konsultacja", "Free consultation")}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 max-h-[80vh] overflow-y-auto",
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="container-wide px-6 py-8 flex flex-col gap-4">
            {/* Mobile Services */}
            <div className="border-b border-border pb-4 mb-2">
              <Link 
                to="/uslugi" 
                className="text-sm text-muted-foreground mb-3 block hover:text-foreground transition-colors"
              >
                {t("Wszystkie usługi", "All services")} →
              </Link>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {mobileServicesData.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "text-sm font-medium py-1.5 transition-colors",
                      location.pathname === link.href
                        ? "text-[#75143F]"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-lg font-medium py-2 transition-colors",
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <LanguageSwitcher />
            </div>
            <Button variant="hero" size="lg" className="mt-4" asChild>
              <Link to="/kontakt">
                {t("Bezpłatna konsultacja", "Free consultation")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Mega Menu */}
      <MegaMenu 
        isOpen={isMegaMenuOpen} 
        onClose={() => setIsMegaMenuOpen(false)} 
      />
    </>
  );
}
