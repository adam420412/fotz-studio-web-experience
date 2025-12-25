import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Youtube, Building2 } from "lucide-react";
import logoFotz from "@/assets/logo-fotz.png";

const footerLinks = {
  uslugi: [
    { name: "Strony internetowe", href: "/strony-internetowe" },
    { name: "Social Media", href: "/social-media" },
    { name: "Pozycjonowanie SEO", href: "/pozycjonowanie" },
    { name: "Fotograf", href: "/fotograf-poznan" },
    { name: "Produkcja filmów", href: "/produkcja-filmow-poznan" },
    { name: "Studio podcastowe", href: "/studio-podcastowe" },
  ],
  realizacje: [
    { name: "Portfolio", href: "/realizacje" },
    { name: "Case Studies", href: "/realizacje" },
    { name: "Dla kogo pracujemy", href: "/dla-kogo" },
  ],
  firma: [
    { name: "O nas", href: "/o-nas" },
    { name: "Realizacje", href: "/realizacje" },
    { name: "Blog", href: "/blog" },
    { name: "Kontakt", href: "/kontakt" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/fotz.pl", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/fotzstudio", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/company/fotzstudio", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@fotzstudio", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="section-padding py-10 md:py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-2 lg:col-span-1">
              <Link
                to="/"
                className="inline-block mb-4"
              >
                <img 
                  src={logoFotz} 
                  alt="Fotz Studio" 
                  className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto"
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
              <h4 className="font-heading font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Realizacje</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.realizacje.map((link) => (
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

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-heading font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Firma</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.firma.map((link) => (
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
