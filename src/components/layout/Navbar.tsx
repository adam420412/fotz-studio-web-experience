import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoFotz from "@/assets/logo-fotz.png";
import { industries } from "@/data/industries.mjs";

const MegaMenu = lazy(() => import("./MegaMenu").then(module => ({ default: module.MegaMenu })));

const navLinksData = [
  { name: "Realizacje", href: "/realizacje" },
  { name: "Blog", href: "/blog" },
  { name: "O nas", href: "/o-nas" },
  { name: "Kontakt", href: "/kontakt" },
];

const mobileServicesData = [
  { name: "Kompleksowa obsługa", href: "/kompleksowa-obsluga-marketingowa" },
  { name: "Agencja Social Media", href: "/agencja-social-media" },
  { name: "Prowadzenie social media", href: "/social-media/obsluga" },
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
  const [loadMegaMenu, setLoadMegaMenu] = useState(false);
  const [isIndustryMenuOpen, setIsIndustryMenuOpen] = useState(false);
  const location = useLocation();
  const menuButton = useRef<HTMLButtonElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);
  const industryButton = useRef<HTMLButtonElement>(null);
  const industryMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen && !isMegaMenuOpen && !isIndustryMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsMegaMenuOpen(false);
        setIsIndustryMenuOpen(false);
        (isMobileMenuOpen ? menuButton : isIndustryMenuOpen ? industryButton : servicesButton).current?.focus();
      }
    };
    const previousOverflow = document.body.style.overflow;
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen, isMegaMenuOpen, isIndustryMenuOpen]);

  useEffect(() => {
    if (!isIndustryMenuOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (!industryMenu.current?.contains(event.target as Node)) setIsIndustryMenuOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [isIndustryMenuOpen]);

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
    setIsIndustryMenuOpen(false);
  }, [location.pathname, location.hash]);

  const pillBase =
    "px-4 py-2.5 rounded-full font-geist-mono text-[12px] tracking-[0.14em] uppercase transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2";
  const pillIdle = "text-foreground/60 hover:text-foreground hover:bg-white/[0.06]";
  const pillActive = "text-foreground bg-white/[0.08]";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] h-20 transition-colors duration-300",
          "backdrop-blur-xl border-b",
          isScrolled
            ? "bg-background/95 border-[color:var(--dv-hair)]"
            : "bg-background/95 border-transparent"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-full">
          <nav aria-label="Nawigacja główna" className="flex h-full items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <svg className="site-logo h-10 w-[168px]" viewBox="450 550 1010 230" role="img" aria-label="Fotz Studio">
                <image href={logoFotz} width="1920" height="1356" />
              </svg>
            </Link>

            {/* Desktop Navigation - pill style */}
            <div className="hidden xl:flex items-center gap-1">
              <button
                ref={servicesButton}
                aria-expanded={isMegaMenuOpen}
                aria-controls="services-menu"
                onClick={() => { setLoadMegaMenu(true); setIsMegaMenuOpen(!isMegaMenuOpen); setIsIndustryMenuOpen(false); }}
                className={cn(
                  pillBase,
                  "flex items-center gap-1.5",
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

              <div ref={industryMenu} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsIndustryMenuOpen(false); }}>
                <button ref={industryButton} type="button" aria-expanded={isIndustryMenuOpen} aria-controls="industries-menu" onClick={() => { setIsIndustryMenuOpen(open => !open); setIsMegaMenuOpen(false); }} className={cn(pillBase, "flex items-center gap-1.5", isIndustryMenuOpen || location.pathname.startsWith('/dla-kogo') ? pillActive : pillIdle)}>
                  Branże <ChevronDown aria-hidden="true" className={cn("w-3.5 h-3.5 transition-transform", isIndustryMenuOpen && "rotate-180")} />
                </button>
                <div id="industries-menu" hidden={!isIndustryMenuOpen} className="absolute top-20 left-1/2 -translate-x-1/2 w-[min(960px,calc(100vw-48px))] rounded-b-2xl border border-border bg-background shadow-xl p-8">
                  <Link to="/dla-kogo#branze" onClick={() => setIsIndustryMenuOpen(false)} className="inline-flex items-center gap-2 text-lg font-heading mb-5 underline underline-offset-4">Oferta dla Twojej branży <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
                  <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                    {industries.map(industry => <Link key={industry.slug} to={industry.href} onClick={() => setIsIndustryMenuOpen(false)} aria-current={location.pathname === industry.href ? 'page' : undefined} className="rounded-lg p-3 text-sm hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary aria-[current=page]:text-primary">{industry.name}</Link>)}
                  </div>
                </div>
              </div>

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
            <div className="hidden xl:flex items-center gap-2">
              <ThemeToggle />
              <Link to="/konsultacja" className="dv-btn dv-btn-primary group">
                Bezpłatna konsultacja
                <ArrowUpRight
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setIsIndustryMenuOpen(false); setIsMegaMenuOpen(false); }}
                className="p-2 text-foreground z-[60]"
                ref={menuButton}
                aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
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
          id="mobile-menu"
          className="xl:hidden fixed inset-x-0 top-20 bottom-0 z-[55] bg-background"
        >
          <div className="h-full overflow-y-auto overscroll-contain">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-3">
              <div className="border-b border-border pb-4 mb-2">
                <Link to="/dla-kogo#branze" onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-xl mb-3 block">Branże — zobacz ofertę <span aria-hidden="true">→</span></Link>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1">
                  {industries.map(industry => <Link key={industry.slug} to={industry.href} onClick={() => setIsMobileMenuOpen(false)} aria-current={location.pathname === industry.href ? 'page' : undefined} className="py-3 text-sm leading-relaxed hover:text-primary aria-[current=page]:text-primary">{industry.name}</Link>)}
                </div>
              </div>
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
                        "text-sm font-medium py-2 transition-colors break-words leading-relaxed",
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
                to="/konsultacja"
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
      {loadMegaMenu && <Suspense fallback={isMegaMenuOpen ? <div role="status" className="fixed top-20 inset-x-0 z-50 bg-background border-b border-border px-12 py-6">Ładowanie usług… <Link to="/uslugi" className="underline">Wszystkie usługi</Link></div> : null}>
        <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
      </Suspense>}
    </>
  );
}
