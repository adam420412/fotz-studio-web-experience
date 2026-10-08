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
} from "lucide-react";
import { Calendar } from "lucide-react";


const footerLinks = {
  uslugi: [
    { name: "Marketing Internetowy", href: "/agencja-marketingu-internetowego" },
    { name: "Content Marketing", href: "/content-marketing/strategia" },
    { name: "Strony internetowe", href: "/uslugi/strony-internetowe" },
    { name: "E-commerce & Sklepy", href: "/uslugi/strony-internetowe/ecommerce" },
    { name: "Prowadzenie social media", href: "/social-media/obsluga" },
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
    { name: "Instagram dla firm", href: "/blog/instagram-dla-firmy" },
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
  agencjaSocialMediaMiasta: [
    { name: "Agencja SM Poznań", href: "/agencja-social-media/poznan" },
    { name: "Agencja SM Warszawa", href: "/agencja-social-media/warszawa" },
    { name: "Agencja SM Kraków", href: "/agencja-social-media/krakow" },
    { name: "Agencja SM Wrocław", href: "/agencja-social-media/wroclaw" },
    { name: "Agencja SM Katowice", href: "/agencja-social-media/katowice" },
    { name: "Agencja SM Lublin", href: "/agencja-social-media/lublin" },
    { name: "Agencja SM Szczecin", href: "/agencja-social-media/szczecin" },
    { name: "Agencja social media", href: "/agencja-social-media" },
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
    { name: "Kielce", href: "/strony-internetowe/kielce" },
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
  return (
    <footer
      className="site-footer relative overflow-hidden mt-16 text-white"
      style={{ background: "#0d0d13" }}
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

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 pt-14 md:pt-20 pb-10">
        {/* CTA Booking */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-10 mb-10 border-b border-white/10">
          <div>
            <h3 className="font-geist text-white text-xl md:text-2xl mb-1" style={{ letterSpacing: "-0.02em" }}>
              Wolisz krótki call? Umów 15 minut.
            </h3>
            <p className="dv-mono uppercase tracking-[0.14em] text-[11px] text-white/50">
              Bez zobowiązań · pierwszy wolny termin online
            </p>
          </div>
          <Link
            to="/konsultacja"
            className="dv-btn dv-btn-primary h-12 inline-flex items-center gap-2 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" strokeWidth={1.5} />
            Umów konsultację 15 min
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-between pb-8 mb-8 border-b border-white/10">
          <div><h3 className="text-2xl mb-2">Od pomysłu do konkretnego zakresu</h3><p className="text-white/60">Zbierz cele, materiały i potrzeby swojego projektu.</p></div>
          <Link className="dv-btn dv-btn-secondary text-white" to="/generator-briefu">Przygotuj brief</Link>
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
        <div className="grid grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr_1fr] gap-8 pb-12">
          <div className="col-span-2">
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

        <nav aria-label="Pozostałe usługi i miasta" className="border-t border-white/10">
          {[
            { title: "Strony internetowe w Polsce", links: footerLinks.miasta },
            { title: "Agencja marketingowa — miasta", links: footerLinks.agencjaMiasta },
            { title: "Agencja social media w miastach", links: footerLinks.agencjaSocialMediaMiasta },
            { title: "Pozycjonowanie SEO w miastach", links: footerLinks.seoMiasta },
            { title: "Social media — kanały", links: footerLinks.socialMedia },
          ].map(group => (
            <details key={group.title} className="border-b border-white/10 py-4">
              <summary className="cursor-pointer text-sm text-white/80 py-2 hover:text-white">{group.title}</summary>
              <div className="flex flex-wrap gap-2 pt-4 pb-2">
                {group.links.map(link => (
                  <Link key={link.href} to={link.href} className="text-xs font-geist-mono tracking-[0.06em] uppercase text-white/75 hover:text-white px-3 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-[color:var(--dv-accent-pink)] transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </nav>

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
