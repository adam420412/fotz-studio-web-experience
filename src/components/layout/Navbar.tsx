import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
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
  { name: "Social Media", href: "/social-media/obsluga" },
  { name: "Facebook Ads", href: "/performance-marketing/facebook-ads" },
  { name: "Google Ads", href: "/performance-marketing/google-ads" },
  { name: "Strony Internetowe", href: "/uslugi/strony-internetowe" },
  { name: "Pozycjonowanie SEO", href: "/seo/pozycjonowanie" },
  { name: "Google Maps", href: "/seo/google-maps" },
  { name: "Produkcja Filmów", href: "/uslugi/produkcja-filmow" },
  { name: "Spoty Reklamowe", href: "/uslugi/produkcja-video" },
  { name: "Wizualizacje 3D", href: "/wizualizacje-3d" },
  { name: "Fotografia", href: "/uslugi/fotografia" },
  { name: "Fotografia z drona", href: "/uslugi/fotografia-z-drona" },
  { name: "Identyfikacja wizualna", href: "/uslugi/branding" },
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

  const pillBase =
    "px-4 py-2.5 rounded-full font-geist-mono text-[12px] tracking-[0.14em] uppercase transition-colors duration-200";
  const pillIdle = "text-foreground/60 hover:text-foreground hover:bg-white/[0.06]";
  const pillActive = "text-foreground bg-white/[0.08]";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "backdrop-blur-xl border-b",
          isScrolled
            ? "bg-background/80 border-[color:var(--dv-hair)] py-3"
            : "bg-background/50 border-transparent py-4"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={logoFotz}
                alt="Fotz Studio"
                className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto"
              />
            </Link>

            {/* Desktop Navigation - pill style */}
            <div className="hidden lg:flex items-center gap-1">
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className={cn(
                  pillBase,
                  "flex items-center gap-1.5 outline-none",
                  isMegaMenuOpen || location.pathname.includes("/uslugi")
                    ? pillActive
                    : pillIdle
                )}
              >
                Usługi
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    isMegaMenuOpen && "rotate-180"
                  )}
                  strokeWidth={1.5}
                />
              </button>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    pillBase,
                    location.pathname === link.href ? pillActive : pillIdle
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA + Theme */}
            <div className="hidden lg:flex items-center gap-2">
              <ThemeToggle />
              <Link to="/kontakt" className="dv-btn dv-btn-primary group">
                Bezpłatna konsultacja
                <ArrowUpRight
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground z-[60]"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-background"
          style={{ paddingTop: isScrolled ? "72px" : "90px" }}
        >
          <div className="h-full overflow-y-auto overscroll-contain">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-3">
              <div className="border-b border-[color:var(--dv-hair)] pb-4 mb-2">
                <Link
                  to="/uslugi"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="dv-eyebrow-muted mb-3 block hover:text-foreground transition-colors"
                >
                  Wszystkie usługi →
                </Link>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 sm:gap-x-4 gap-y-1.5 sm:gap-y-2">
                  {mobileServicesData.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-sm font-medium py-1.5 transition-colors truncate",
                        location.pathname === link.href
                          ? "text-[color:var(--dv-accent-pink)]"
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
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-geist py-2 transition-colors",
                    "text-xl tracking-[-0.02em]",
                    location.pathname === link.href
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="dv-btn dv-btn-primary mt-4 justify-center"
              >
                Bezpłatna konsultacja
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mega Menu */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
      />
    </>
  );
}
