import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MegaMenu } from "./MegaMenu";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoFotz from "@/assets/logo-fotz.png";

const navLinksData = [
  { name: "Realizacje", href: "/realizacje" },
  { name: "Dla kogo", href: "/dla-kogo" },
  { name: "Blog", href: "/blog" },
  { name: "O nas", href: "/o-nas" },
  { name: "Kontakt", href: "/kontakt" },
];

const mobileServicesData = [
  { name: "Kompleksowa obsługa", href: "/kompleksowa-obsluga-marketingowa" },
  { name: "Social Media", href: "/social-media" },
  { name: "Facebook Ads", href: "/facebook-ads" },
  { name: "Google Ads", href: "/google-ads" },
  { name: "Strony Internetowe", href: "/strony-internetowe" },
  { name: "Pozycjonowanie SEO", href: "/pozycjonowanie" },
  { name: "Google Maps", href: "/pozycjonowanie-google-maps" },
  { name: "Produkcja Filmów", href: "/produkcja-filmow-poznan" },
  { name: "Spoty Reklamowe", href: "/spoty-reklamowe" },
  { name: "Wizualizacje 3D", href: "/wizualizacje-3d" },
  { name: "Fotografia", href: "/fotograf-poznan" },
  { name: "Fotografia z drona", href: "/fotografia-z-drona" },
  { name: "Identyfikacja wizualna", href: "/identyfikacja-wizualna" },
  { name: "Obsługa graficzna", href: "/agencja-graficzna" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = navLinksData;

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
                className="h-12 sm:h-14 md:h-24 lg:h-32 xl:h-36 w-auto"
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
                Usługi
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

            {/* CTA Button + Theme Toggle */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt" className="group">
                  Bezpłatna konsultacja
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
            "lg:hidden fixed top-[72px] sm:top-[80px] left-0 right-0 bottom-0 bg-background border-t border-border overflow-hidden",
            isMobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          )}
          style={{ transition: 'opacity 0.15s ease-out, visibility 0.15s ease-out' }}
        >
          <div className="h-full overflow-y-auto overscroll-contain">
            <div className="container-wide px-4 sm:px-6 py-6 flex flex-col gap-3">
              {/* Mobile Services */}
              <div className="border-b border-border pb-4 mb-2">
                <Link 
                  to="/uslugi" 
                  className="text-xs sm:text-sm text-muted-foreground mb-3 block hover:text-foreground transition-colors"
                >
                  Wszystkie usługi →
                </Link>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 sm:gap-x-4 gap-y-1.5 sm:gap-y-2">
                  {mobileServicesData.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={cn(
                        "text-xs sm:text-sm font-medium py-1 sm:py-1.5 transition-colors truncate",
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
                    "text-base sm:text-lg font-medium py-1.5 sm:py-2 transition-colors",
                    location.pathname === link.href
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" size="default" className="mt-3 sm:mt-4 text-sm sm:text-base" asChild>
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </Button>
            </div>
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
