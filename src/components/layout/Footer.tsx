import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFotz from "@/assets/logo-fotz.png";

const footerLinks = {
  uslugi: [
    { name: "Strony internetowe", href: "/strony-internetowe-poznan" },
    { name: "Social Media", href: "/social-media-poznan" },
    { name: "Fotograf", href: "/fotograf-poznan" },
    { name: "Pozycjonowanie SEO", href: "/pozycjonowanie-stron-poznan" },
    { name: "Produkcja filmów", href: "/produkcja-filmow-poznan" },
  ],
  lokalne: [
    { name: "Strony Internetowe Poznań", href: "/strony-internetowe-poznan" },
    { name: "Social Media Poznań", href: "/social-media-poznan" },
    { name: "Fotograf Poznań", href: "/fotograf-poznan" },
    { name: "Pozycjonowanie Poznań", href: "/pozycjonowanie-stron-poznan" },
    { name: "Produkcja Filmów Poznań", href: "/produkcja-filmow-poznan" },
    { name: "Agencja Marketingowa Poznań", href: "/agencja-marketingowa-poznan" },
    { name: "Agencja Reklamowa Poznań", href: "/agencja-reklamowa-poznan" },
    { name: "Marketing Internetowy", href: "/agencja-marketingu-internetowego" },
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
      <div className="section-padding py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link
                to="/"
                className="inline-block mb-4"
              >
                <img 
                  src={logoFotz} 
                  alt="Fotz Studio" 
                  className="h-32 w-auto"
                />
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Studio marketingu wzrostu. Projektujemy marketing, 
                który realnie pozyskuje klientów.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Plac Wolności 16, 61-739 Poznań</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+48790814814" className="hover:text-foreground transition-colors">
                    +48 790 814 814
                  </a>
                </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="mailto:adam@fotz.pl" className="hover:text-foreground transition-colors">
                    adam@fotz.pl
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <span>NIP: 7851806089</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Usługi</h4>
              <ul className="space-y-3">
                {footerLinks.uslugi.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Poznań</h4>
              <ul className="space-y-3">
                {footerLinks.lokalne.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Firma</h4>
              <ul className="space-y-3">
                {footerLinks.firma.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
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
      <div className="border-t border-border py-6">
        <div className="container-wide px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Fotz Studio. Wszystkie prawa zastrzeżone.</p>
            <div className="flex gap-6">
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
