import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Building2,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { submitWeb3Form } from "@/lib/web3forms";

const emailSchema = z.string().trim().email("Nieprawidłowy email");

const footerLinks = {
  uslugi: [
    { name: "Marketing Internetowy", href: "/agencja-marketingu-internetowego" },
    { name: "Content Marketing", href: "/content-marketing/strategia" },
    { name: "Strony internetowe", href: "/uslugi/strony-internetowe" },
    { name: "E-commerce & Sklepy", href: "/uslugi/strony-internetowe/ecommerce" },
    { name: "Social Media", href: "/social-media/obsluga" },
    { name: "Pozycjonowanie SEO", href: "/seo/pozycjonowanie" },
    { name: "Identyfikacja wizualna", href: "/uslugi/branding" },
    { name: "Wizualizacje 3D", href: "/wizualizacje-3d" },
    { name: "Produkcja filmów", href: "/uslugi/produkcja-filmow" },
    { name: "Spoty reklamowe", href: "/uslugi/produkcja-video" },
    { name: "Fotografia z drona", href: "/uslugi/fotografia-z-drona" },
    { name: "Obsługa graficzna", href: "/agencja-graficzna" },
    { name: "Agencja reklamowa", href: "/agencja-reklamowa-poznan" },
  ],
  kampanie: [
    { name: "Google Ads", href: "/performance-marketing/google-ads" },
    { name: "Facebook Ads", href: "/performance-marketing/facebook-ads" },
    { name: "Instagram Ads", href: "/performance-marketing/instagram-ads" },
    { name: "Meta Ads (FB + IG)", href: "/performance-marketing/meta-ads" },
    { name: "TikTok Ads", href: "/performance-marketing/tiktok-ads" },
    { name: "LinkedIn Ads", href: "/performance-marketing/linkedin-ads" },
    { name: "YouTube Ads", href: "/performance-marketing/youtube-ads" },
    { name: "Remarketing", href: "/performance-marketing/remarketing" },
    { name: "Google vs Facebook", href: "/performance-marketing/google-vs-facebook" },
    { name: "Kampanie Poznań", href: "/kampanie-reklamowe-poznan" },
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
    { name: "Poradniki", href: "/poradniki" },
    { name: "Zasoby", href: "/zasoby" },
    { name: "Kariera", href: "/kariera" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Mapa strony", href: "/mapa-strony" },
    { name: "Zainstaluj aplikację", href: "/zainstaluj" },
    { name: "Panel klienta", href: "https://panel.fotz.pl/login", external: true },
  ],
  narzedzia: [
    { name: "Quiz rekomendacyjny", href: "/quiz" },
    { name: "Kalkulator ROI", href: "/kalkulator-roi" },
    { name: "Kalkulator cen", href: "/kalkulator-cen" },
    { name: "Generator briefu", href: "/generator-briefu" },
    { name: "Audyt SEO", href: "/seo/audyt" },
    { name: "Słownik marketingowy", href: "/slownik-marketingowy" },
    { name: "Darmowe zasoby", href: "/zasoby" },
  ],
  socialMedia: [
    { name: "Facebook dla firm", href: "/social-media/facebook" },
    { name: "Instagram dla firm", href: "/social-media/instagram" },
    { name: "TikTok dla firm", href: "/social-media/tiktok" },
    { name: "LinkedIn dla firm", href: "/social-media/linkedin" },
    { name: "YouTube dla firm", href: "/social-media/youtube" },
    { name: "Pinterest dla firm", href: "/social-media/pinterest" },
    { name: "Meta (FB + IG)", href: "/social-media/meta" },
    { name: "Strategia social media", href: "/social-media/strategia" },
  ],
  seoMiasta: [
    { name: "SEO Poznań", href: "/seo/pozycjonowanie-poznan" },
    { name: "SEO Warszawa", href: "/seo/pozycjonowanie-warszawa" },
    { name: "SEO Kraków", href: "/seo/pozycjonowanie-krakow" },
    { name: "SEO Wrocław", href: "/seo/pozycjonowanie-wroclaw" },
    { name: "SEO Gdańsk", href: "/seo/pozycjonowanie-gdansk" },
    { name: "SEO Łódź", href: "/seo/pozycjonowanie-lodz" },
    { name: "SEO Katowice", href: "/seo/pozycjonowanie-katowice" },
  ],
  agencjaMiasta: [
    { name: "Agencja Poznań", href: "/agencja-marketingowa/poznan" },
    { name: "Agencja Warszawa", href: "/agencja-marketingowa/warszawa" },
    { name: "Agencja Kraków", href: "/agencja-marketingowa/krakow" },
    { name: "Agencja Wrocław", href: "/agencja-marketingowa/wroclaw" },
    { name: "Agencja Gdańsk", href: "/agencja-marketingowa/gdansk" },
    { name: "Agencja Łódź", href: "/agencja-marketingowa/lodz" },
    { name: "Wszystkie miasta", href: "/agencja-marketingowa" },
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
    { name: "Toruń", href: "/uslugi/strony-internetowe/torun" },
    { name: "Rzeszów", href: "/uslugi/strony-internetowe/rzeszow" },
    { name: "Olsztyn", href: "/uslugi/strony-internetowe/olsztyn" },
    { name: "Kielce", href: "/uslugi/strony-internetowe/kielce" },
    { name: "Opole", href: "/uslugi/strony-internetowe/opole" },
    { name: "Radom", href: "/uslugi/strony-internetowe/radom" },
    { name: "Tarnów", href: "/uslugi/strony-internetowe/tarnow" },
    { name: "Płock", href: "/uslugi/strony-internetowe/plock" },
    { name: "Sosnowiec", href: "/uslugi/strony-internetowe/sosnowiec" },
    { name: "Koszalin", href: "/uslugi/strony-internetowe/koszalin" },
    { name: "Gliwice", href: "/uslugi/strony-internetowe/gliwice" },
    { name: "Rybnik", href: "/uslugi/strony-internetowe/rybnik" },
    { name: "Tychy", href: "/uslugi/strony-internetowe/tychy" },
    { name: "Konin", href: "/uslugi/strony-internetowe/konin" },
    { name: "Kamionki", href: "/uslugi/strony-internetowe/kamionki" },
    { name: "Białystok", href: "/uslugi/strony-internetowe/bialystok" },
    { name: "Częstochowa", href: "/uslugi/strony-internetowe/czestochowa" },
    { name: "Zielona Góra", href: "/uslugi/strony-internetowe/zielona-gora" },
    { name: "Elbląg", href: "/uslugi/strony-internetowe/elblag" },
    { name: "Legnica", href: "/uslugi/strony-internetowe/legnica" },
    { name: "Kalisz", href: "/uslugi/strony-internetowe/kalisz" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/fotz_studio/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/fotzpoznan/", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/fotz-studio/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@Studio-Fotz", label: "YouTube" },
];

const columnHeader =
  "dv-mono uppercase text-[11px] tracking-[0.16em] text-white/50 mb-5 font-normal";
const columnLink =
  "block py-1.5 text-sm md:text-[15px] text-white/85 hover:text-[color:var(--dv-accent-pink)] transition-colors";

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
      await submitWeb3Form({
        subject: "Newsletter signup - Footer",
        from_name: "Fotz Studio - Newsletter",
        email: email,
        message: "Zapis do newslettera z footera",
      });
      setIsSubmitted(true);
    } catch {
      setError("Błąd. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      className="relative overflow-hidden mt-24 text-white"
      style={{ background: "var(--dv-ink)" }}
    >
      {/* Ambient radial glow from design */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 120%, rgba(120,20,60,0.35) 0%, transparent 50%), radial-gradient(ellipse at 80% 120%, rgba(20,40,80,0.45) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 pt-24 pb-10">
        {/* Newsletter banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 mb-12 border-b border-white/10">
          <div>
            <h3
              className="font-geist mb-2"
              style={{
                fontSize: "clamp(24px, 2.4vw, 32px)",
                letterSpacing: "-0.03em",
              }}
            >
              Zapisz się do newslettera
            </h3>
            <p className="dv-mono uppercase tracking-[0.14em] text-[11px] text-white/50">
              Porady marketingowe · checklisty · nowości — raz w miesiącu
            </p>
          </div>
          {isSubmitted ? (
            <div className="flex items-center gap-2 text-[color:var(--dv-accent-pink)]">
              <CheckCircle className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-medium">Dziękujemy za zapis!</span>
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex gap-2 w-full md:w-auto max-w-md"
            >
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Twój email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-[color:var(--dv-accent-pink)]"
                />
                {error && (
                  <p className="text-xs text-destructive mt-1">{error}</p>
                )}
              </div>
              <button
                type="submit"
                className="dv-btn dv-btn-primary h-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" strokeWidth={1.5} />
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Zapisz
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Giant brand title */}
        <div
          className="flex items-baseline gap-4 pb-10 mb-10 border-b border-white/10 overflow-hidden"
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "clamp(80px, 16vw, 260px)",
            letterSpacing: "-0.06em",
            lineHeight: 0.82,
            background:
              "linear-gradient(135deg, rgb(240,230,235) 0%, rgb(230,130,170) 40%, rgb(120,170,230) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <span>fotz</span>
          <span style={{ color: "rgb(230,130,170)", WebkitTextFillColor: "rgb(230,130,170)" }}>.</span>
          <span>pl</span>
          <span
            className="ml-auto self-end"
            style={{
              fontSize: "0.08em",
              fontFamily: "'Geist Mono', monospace",
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.4)",
              textTransform: "uppercase",
              paddingBottom: "30px",
              WebkitTextFillColor: "rgba(255,255,255,0.4)",
            }}
          >
            EST. MMXII · POZNAŃ
          </span>
        </div>

        {/* Brand block + contact */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr_1fr] gap-10 pb-12">
          <div className="md:col-span-2">
            <p className="text-white/70 leading-relaxed max-w-sm mb-6">
              Studio marketingu wzrostu. Projektujemy marketing, który realnie
              pozyskuje klientów.
            </p>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin
                  className="w-4 h-4 text-[color:var(--dv-accent-pink)] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <span>Plac Wolności 16 · 61-739 Poznań</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone
                  className="w-4 h-4 text-[color:var(--dv-accent-pink)] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <a
                  href="tel:+48790814814"
                  className="hover:text-[color:var(--dv-accent-pink)] transition-colors"
                >
                  +48 790 814 814
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail
                  className="w-4 h-4 text-[color:var(--dv-accent-pink)] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <a
                  href="mailto:adam@fotz.pl"
                  className="hover:text-[color:var(--dv-accent-pink)] transition-colors"
                >
                  adam@fotz.pl
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Building2
                  className="w-4 h-4 text-[color:var(--dv-accent-pink)] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <span>NIP: 7851806089</span>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[color:var(--dv-burgundy)] hover:text-white hover:border-[color:var(--dv-burgundy)] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={columnHeader}>Usługi</h4>
            <ul>
              {footerLinks.uslugi.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className={columnLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={columnHeader}>Kampanie</h4>
            <ul>
              {footerLinks.kampanie.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className={columnLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={columnHeader}>Branże</h4>
            <ul>
              {[...footerLinks.dlaKogo, ...footerLinks.branze].slice(0, 14).map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className={columnLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={columnHeader}>Firma</h4>
            <ul>
              {footerLinks.firma.map((link) => (
                <li key={link.name}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className={columnLink + " flex items-center gap-1"}
                    >
                      {link.name}
                      <span className="text-[color:var(--dv-accent-pink)]">↗</span>
                    </a>
                  ) : (
                    <Link to={link.href} className={columnLink}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <h4 className={columnHeader + " mt-8"}>Narzędzia</h4>
            <ul>
              {footerLinks.narzedzia.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className={columnLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Miasta */}
        <div className="pt-8 border-t border-white/10">
          <h4 className={columnHeader}>Strony internetowe w Polsce</h4>
          <div className="flex flex-wrap gap-2">
            {footerLinks.miasta.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs font-geist-mono tracking-[0.1em] uppercase text-white/60 hover:text-white px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-[color:var(--dv-accent-pink)] transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Agencja marketingowa - miasta */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <h4 className={columnHeader}>Agencja marketingowa - miasta</h4>
          <div className="flex flex-wrap gap-2">
            {footerLinks.agencjaMiasta.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs font-geist-mono tracking-[0.1em] uppercase text-white/60 hover:text-white px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-[color:var(--dv-accent-pink)] transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* SEO - miasta */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <h4 className={columnHeader}>Pozycjonowanie SEO w miastach</h4>
          <div className="flex flex-wrap gap-2">
            {footerLinks.seoMiasta.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs font-geist-mono tracking-[0.1em] uppercase text-white/60 hover:text-white px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-[color:var(--dv-accent-pink)] transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Media - kanaly */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <h4 className={columnHeader}>Social Media - kanały</h4>
          <div className="flex flex-wrap gap-2">
            {footerLinks.socialMedia.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs font-geist-mono tracking-[0.1em] uppercase text-white/60 hover:text-white px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-[color:var(--dv-accent-pink)] transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 mt-10 border-t border-white/10 dv-mono uppercase tracking-[0.12em] text-[11px] text-white/50">
          <div>
            © 2012–{new Date().getFullYear()} Fotz Studio · NIP 785-18-06-089
          </div>
          <div className="flex gap-5">
            <Link
              to="/polityka-prywatnosci"
              className="hover:text-white transition-colors"
            >
              Polityka prywatności
            </Link>
            <Link to="/regulamin" className="hover:text-white transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
