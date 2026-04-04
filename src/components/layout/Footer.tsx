import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Youtube, Building2, Send, Loader2, CheckCircle } from "lucide-react";
import logoFotz from "@/assets/logo-fotz.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";

const emailSchema = z.string().trim().email("Nieprawidłowy email");

const footerLinks = {
  uslugi: [
    { name: "Wszystkie usługi", href: "/uslugi" },
    { name: "Strony internetowe", href: "/uslugi/strony-internetowe" },
    { name: "E-commerce & Sklepy", href: "/uslugi/ecommerce" },
    { name: "Branding", href: "/uslugi/branding" },
    { name: "Fotografia & Wideo", href: "/uslugi/produkcja-filmow" },
    { name: "Wizualizacje 3D", href: "/uslugi/wizualizacje-3d" },
    { name: "Grafika", href: "/uslugi/grafika" },
    { name: "Studio Podcastowe", href: "/uslugi/studio-podcastowe" },
  ],
  marketing: [
    { name: "Performance Marketing", href: "/performance-marketing" },
    { name: "Google Ads", href: "/performance-marketing/google-ads" },
    { name: "Facebook Ads", href: "/performance-marketing/facebook-ads" },
    { name: "Instagram Ads", href: "/performance-marketing/instagram-ads" },
    { name: "TikTok Ads", href: "/performance-marketing/tiktok-ads" },
    { name: "LinkedIn Ads", href: "/performance-marketing/linkedin-ads" },
    { name: "YouTube Ads", href: "/performance-marketing/youtube-ads" },
    { name: "Meta Ads (FB + IG)", href: "/performance-marketing/facebook-instagram-ads" },
  ],
  kampanie: [
    { name: "SEO", href: "/seo" },
    { name: "Audyt SEO", href: "/seo/audyt" },
    { name: "Pozycjonowanie", href: "/seo/pozycjonowanie" },
    { name: "SEO Lokalne", href: "/seo/lokalne-poznan" },
    { name: "Google Maps", href: "/seo/google-maps" },
    { name: "Social Media", href: "/social-media" },
    { name: "Content Marketing", href: "/content-marketing" },
    { name: "Marketing Internetowy", href: "/agencja-marketingu-internetowego" },
  ],
  dlaKogo: [
    { name: "Firmy lokalne", href: "/dla-kogo/firmy-lokalne" },
    { name: "E-commerce", href: "/dla-kogo/ecommerce" },
    { name: "Marki premium", href: "/dla-kogo/marki-premium" },
    { name: "Instytucje i eventy", href: "/dla-kogo/instytucje" },
  ],
  branze: [
    { name: "Branża medyczna", href: "/dla-kogo/branza-medyczna" },
    { name: "Gastronomia", href: "/dla-kogo/gastronomia" },
    { name: "Beauty & Wellness", href: "/dla-kogo/beauty-wellness" },
    { name: "Nieruchomości", href: "/dla-kogo/nieruchomosci" },
    { name: "Automotive", href: "/dla-kogo/automotive" },
    { name: "Edukacja", href: "/dla-kogo/edukacja" },
    { name: "Prawo & Finanse", href: "/dla-kogo/prawo-finanse" },
    { name: "E-commerce & Retail", href: "/dla-kogo/ecommerce-retail" },
    { name: "IT & SaaS", href: "/dla-kogo/it-saas" },
    { name: "Produkcja", href: "/dla-kogo/produkcja" },
    { name: "NGO & Fundacje", href: "/dla-kogo/ngo" },
    { name: "Turystyka", href: "/dla-kogo/turystyka" },
  ],
  firma: [
    { name: "O nas", href: "/o-nas" },
    { name: "Realizacje", href: "/realizacje" },
    { name: "Cennik", href: "/cennik" },
    { name: "Blog", href: "/blog" },
    { name: "Kariera", href: "/kariera" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Panel klienta", href: "https://panel.fotz.pl/login", external: true },
  ],
  narzedzia: [
    { name: "Quiz rekomendacyjny", href: "/quiz" },
    { name: "Kalkulator ROI", href: "/kalkulator-roi" },
    { name: "Kalkulator cen", href: "/kalkulator-cen" },
    { name: "Generator briefu", href: "/generator-briefu" },
    { name: "Audyt SEO", href: "/audyt-seo" },
    { name: "Słownik marketingowy", href: "/slownik-marketingowy" },
    { name: "Darmowe zasoby", href: "/zasoby" },
  ],
  miasta: [
    { name: "Poznań", href: "/uslugi/strony-internetowe/poznan" },
    { name: "Warszawa", href: "/uslugi/strony-internetowe/warszawa" },
    { name: "Wrocław", href: "/uslugi/strony-internetowe/wroclaw" },
    { name: "Kraków", href: "/uslugi/strony-internetowe/krakow" },
    { name: "Gdańsk", href: "/uslugi/strony-internetowe/gdansk" },
    { name: "Łódź", href: "/uslugi/strony-internetowe/lodz" },
    { name: "Katowice", href: "/uslugi/strony-internetowe/katowice" },
    { name: "Szczecin", href: "/uslugi/strony-internetowe/szczecin" },
    { name: "Bydgoszcz", href: "/uslugi/strony-internetowe/bydgoszcz" },
    { name: "Lublin", href: "/uslugi/strony-internetowe/lublin" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/fotz.pl", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/fotzstudio", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/company/fotzstudio", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@fotzstudio", label: "YouTube" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: "Newsletter signup - Footer",
          from_name: "Fotz Studio - Newsletter",
          email: email,
          message: "Zapis do newslettera z footera",
        }),
      });
      const data = await response.json();
      if (!data.success) throw new Error();
      setIsSubmitted(true);
    } catch {
      setError("Błąd. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Banner */}
      <div className="bg-card border-b border-border">
        <div className="container-wide section-padding py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-heading font-bold mb-1">
                Zapisz się do newslettera
              </h3>
              <p className="text-muted-foreground text-sm">
                Otrzymuj porady marketingowe i checklisty do pobrania
              </p>
            </div>
            {isSubmitted ? (
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Dziękujemy za zapis!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full md:w-auto max-w-md">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Twój email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 bg-secondary border-border"
                  />
                  {error && <p className="text-xs text-destructive mt-1">{error}</p>}
                </div>
                <Button type="submit" variant="hero" className="h-11" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      {/* Main Footer */}
      <div className="section-padding py-10 md:py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-2 lg:col-span-1">
              <Link
                to="/"
                className="inline-block mb-4"
              >
              <img 
                  src={logoFotz} 
                  alt="Fotz Studio" 
                  className="h-16 sm:h-20 md:h-32 lg:h-40 w-auto"
                />
              </Link>
              <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6 max-w-sm">
                Studio marketingu wzrostu. Projektujemy marketing, 
                który realnie pozyskuje klientów.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex items-center gap-2 md:gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <span className="text-xs md:text-sm">Plac Wolności 16, 61-739 Poznań</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <a href="tel:+48790814814" className="hover:text-foreground transition-colors text-xs md:text-sm">
                    +48 790 814 814
                  </a>
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <a href="mailto:adam@fotz.pl" className="hover:text-foreground transition-colors text-xs md:text-sm">
                    adam@fotz.pl
                  </a>
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-muted-foreground">
                  <Building2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <span className="text-xs md:text-sm">NIP: 7851806089</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2 md:gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Usługi</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.uslugi.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Kampanie Reklamowe</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.kampanie.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Dla kogo</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.dlaKogo.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Branże</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.branze.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Firma</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.firma.map((link) => (
                  <li key={link.name}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm flex items-center gap-1"
                      >
                        {link.name}
                        <span className="text-xs text-primary">→</span>
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Narzędzia</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.narzedzia.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Miasta - nowa kolumna dla internal linking */}
            <div className="col-span-2 md:col-span-3 lg:col-span-6 pt-6 border-t border-border/30">
              <h4 className="font-heading font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Strony internetowe w Polsce</h4>
              <div className="flex flex-wrap gap-2">
                {footerLinks.miasta.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-xs px-2 py-1 bg-secondary/50 rounded"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/strony-internetowe" className="text-primary hover:text-primary/80 transition-colors text-xs px-2 py-1">
                  + więcej miast
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-4 md:py-6">
        <div className="container-wide px-4 md:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
            <p className="text-center md:text-left">© {new Date().getFullYear()} Fotz Studio. Wszystkie prawa zastrzeżone.</p>
            <div className="flex gap-4 md:gap-6">
              <Link to="/polityka-prywatnosci" className="hover:text-foreground transition-colors">
                Polityka prywatności
              </Link>
              <Link to="/regulamin" className="hover:text-foreground transition-colors">
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
