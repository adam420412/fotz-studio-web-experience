import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  path: string;
  icon?: string;
}

interface RelatedServicesProps {
  services: Service[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <section className="py-12 md:py-16 border-t border-border mt-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Sprawdź nasze usługi
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Powiązane usługi
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={service.path}
                className="group block p-5 rounded-xl bg-card hover:bg-card/80 border border-border hover:border-primary/50 transition-all duration-300 h-full"
              >
                <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                  Sprawdź
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Predefined service mappings for blog articles
export const servicesByCategory = {
  seo: [
    { title: "Pozycjonowanie SEO", description: "Wypozycjonuj swoją stronę w Google", path: "/seo/pozycjonowanie" },
    { title: "Pozycjonowanie Google Maps", description: "Lokalne SEO dla firm w Poznaniu", path: "/seo/google-maps" },
    { title: "Content Marketing", description: "Treści, które budują autorytet", path: "/content-marketing/strategia" },
    { title: "Audyt SEO", description: "Kompleksowa analiza Twojej strony", path: "/seo/audyt" },
  ],
  ads: [
    { title: "Google Ads", description: "Kampanie w sieci wyszukiwania Google", path: "/performance-marketing/google-ads" },
    { title: "Facebook Ads", description: "Reklamy na Facebooku i Instagramie", path: "/performance-marketing/facebook-ads" },
    { title: "Kampanie reklamowe", description: "Kompleksowe kampanie wielokanałowe", path: "/kampanie-reklamowe" },
    { title: "Remarketing", description: "Odzyskuj porzucone koszyki", path: "/performance-marketing/remarketing" },
  ],
  socialMedia: [
    { title: "Social Media", description: "Profesjonalne prowadzenie profili", path: "/social-media/obsluga" },
    { title: "Instagram Ads", description: "Reklamy wizualne na Instagramie", path: "/performance-marketing/instagram-ads" },
    { title: "TikTok Ads", description: "Docieraj do młodych odbiorców", path: "/performance-marketing/tiktok-ads" },
    { title: "LinkedIn Ads", description: "Marketing B2B na LinkedIn", path: "/performance-marketing/linkedin-ads" },
  ],
  websites: [
    { title: "Strony internetowe", description: "Nowoczesne strony dla firm", path: "/uslugi/strony-internetowe" },
    { title: "Sklepy e-commerce", description: "Sklepy z wysoką konwersją", path: "/uslugi/strony-internetowe/ecommerce" },
    { title: "Landing Page", description: "Strony sprzedażowe", path: "/blog/jak-stworzyc-landing-page" },
    { title: "Identyfikacja wizualna", description: "Spójny branding marki", path: "/uslugi/branding" },
  ],
  ecommerce: [
    { title: "Sklepy e-commerce", description: "Sklepy z wysoką konwersją", path: "/uslugi/strony-internetowe/ecommerce" },
    { title: "Google Ads", description: "Kampanie produktowe i search", path: "/performance-marketing/google-ads" },
    { title: "Pozycjonowanie SEO", description: "SEO dla e-commerce", path: "/seo/pozycjonowanie" },
    { title: "Facebook Ads", description: "Remarketing i DPA", path: "/performance-marketing/facebook-ads" },
  ],
  analytics: [
    { title: "Google Ads", description: "Kampanie z pełną analityką", path: "/performance-marketing/google-ads" },
    { title: "Pozycjonowanie SEO", description: "Mierz efekty pozycjonowania", path: "/seo/pozycjonowanie" },
    { title: "Audyt SEO", description: "Analiza i rekomendacje", path: "/seo/audyt" },
    { title: "Kampanie reklamowe", description: "Kompleksowe raporty kampanii", path: "/kampanie-reklamowe" },
  ],
  branding: [
    { title: "Identyfikacja wizualna", description: "Logo, kolory, typografia", path: "/uslugi/branding" },
    { title: "Strony internetowe", description: "Strony dopasowane do marki", path: "/uslugi/strony-internetowe" },
    { title: "Social Media", description: "Spójny wizerunek w social", path: "/social-media/obsluga" },
    { title: "Content Marketing", description: "Treści budujące markę", path: "/content-marketing/strategia" },
  ],
  video: [
    { title: "Produkcja filmów", description: "Profesjonalne produkcje wideo", path: "/uslugi/produkcja-filmow" },
    { title: "Spoty reklamowe", description: "Reklamy wideo dla Twojej marki", path: "/uslugi/produkcja-video" },
    { title: "YouTube Ads", description: "Kampanie wideo na YouTube", path: "/performance-marketing/youtube-ads" },
    { title: "TikTok Ads", description: "Krótkie formy wideo", path: "/performance-marketing/tiktok-ads" },
  ],
  contentMarketing: [
    { title: "Content Marketing", description: "Strategia treści dla Twojej marki", path: "/content-marketing/strategia" },
    { title: "Pozycjonowanie SEO", description: "Optymalizacja treści pod SEO", path: "/seo/pozycjonowanie" },
    { title: "Social Media", description: "Dystrybucja treści", path: "/social-media/obsluga" },
    { title: "Strony internetowe", description: "Blog firmowy", path: "/uslugi/strony-internetowe" },
  ],
  automation: [
    { title: "Kampanie reklamowe", description: "Automatyzacja kampanii Ads", path: "/kampanie-reklamowe" },
    { title: "Google Ads", description: "Smart Bidding i automatyzacja", path: "/performance-marketing/google-ads" },
    { title: "Facebook Ads", description: "Automatyczne kampanie Meta", path: "/performance-marketing/facebook-ads" },
    { title: "Content Marketing", description: "Automatyzacja content marketingu", path: "/content-marketing/strategia" },
  ],
};
