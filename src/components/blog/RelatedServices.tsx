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
    { title: "Pozycjonowanie SEO", description: "Wypozycjonuj swoją stronę w Google", path: "/pozycjonowanie" },
    { title: "Pozycjonowanie Google Maps", description: "Lokalne SEO dla firm w Poznaniu", path: "/pozycjonowanie-google-maps" },
    { title: "Content Marketing", description: "Treści, które budują autorytet", path: "/content-marketing" },
    { title: "Audyt SEO", description: "Kompleksowa analiza Twojej strony", path: "/audyt-seo" },
  ],
  ads: [
    { title: "Google Ads", description: "Kampanie w sieci wyszukiwania Google", path: "/google-ads" },
    { title: "Facebook Ads", description: "Reklamy na Facebooku i Instagramie", path: "/facebook-ads" },
    { title: "Kampanie reklamowe", description: "Kompleksowe kampanie wielokanałowe", path: "/kampanie-reklamowe" },
    { title: "Remarketing", description: "Odzyskuj porzucone koszyki", path: "/blog/remarketing-poradnik" },
  ],
  socialMedia: [
    { title: "Social Media", description: "Profesjonalne prowadzenie profili", path: "/social-media" },
    { title: "Instagram Ads", description: "Reklamy wizualne na Instagramie", path: "/instagram-ads" },
    { title: "TikTok Ads", description: "Docieraj do młodych odbiorców", path: "/tiktok-ads" },
    { title: "LinkedIn Ads", description: "Marketing B2B na LinkedIn", path: "/linkedin-ads" },
  ],
  websites: [
    { title: "Strony internetowe", description: "Nowoczesne strony dla firm", path: "/strony-internetowe" },
    { title: "Sklepy e-commerce", description: "Sklepy z wysoką konwersją", path: "/ecommerce-tworzenie-sklepu" },
    { title: "Landing Page", description: "Strony sprzedażowe", path: "/landing-page" },
    { title: "Identyfikacja wizualna", description: "Spójny branding marki", path: "/identyfikacja-wizualna" },
  ],
  ecommerce: [
    { title: "Sklepy e-commerce", description: "Sklepy z wysoką konwersją", path: "/ecommerce-tworzenie-sklepu" },
    { title: "Google Ads", description: "Kampanie produktowe i search", path: "/google-ads" },
    { title: "Pozycjonowanie SEO", description: "SEO dla e-commerce", path: "/pozycjonowanie" },
    { title: "Facebook Ads", description: "Remarketing i DPA", path: "/facebook-ads" },
  ],
  analytics: [
    { title: "Google Ads", description: "Kampanie z pełną analityką", path: "/google-ads" },
    { title: "Pozycjonowanie SEO", description: "Mierz efekty pozycjonowania", path: "/pozycjonowanie" },
    { title: "Audyt SEO", description: "Analiza i rekomendacje", path: "/audyt-seo" },
    { title: "Kampanie reklamowe", description: "Kompleksowe raporty kampanii", path: "/kampanie-reklamowe" },
  ],
  branding: [
    { title: "Identyfikacja wizualna", description: "Logo, kolory, typografia", path: "/identyfikacja-wizualna" },
    { title: "Strony internetowe", description: "Strony dopasowane do marki", path: "/strony-internetowe" },
    { title: "Social Media", description: "Spójny wizerunek w social", path: "/social-media" },
    { title: "Content Marketing", description: "Treści budujące markę", path: "/content-marketing" },
  ],
  video: [
    { title: "Produkcja filmów", description: "Profesjonalne produkcje wideo", path: "/produkcja-filmow-poznan" },
    { title: "Spoty reklamowe", description: "Reklamy wideo dla Twojej marki", path: "/spoty-reklamowe" },
    { title: "YouTube Ads", description: "Kampanie wideo na YouTube", path: "/youtube-ads" },
    { title: "TikTok Ads", description: "Krótkie formy wideo", path: "/tiktok-ads" },
  ],
  contentMarketing: [
    { title: "Content Marketing", description: "Strategia treści dla Twojej marki", path: "/content-marketing" },
    { title: "Pozycjonowanie SEO", description: "Optymalizacja treści pod SEO", path: "/pozycjonowanie" },
    { title: "Social Media", description: "Dystrybucja treści", path: "/social-media" },
    { title: "Strony internetowe", description: "Blog firmowy", path: "/strony-internetowe" },
  ],
  automation: [
    { title: "Kampanie reklamowe", description: "Automatyzacja kampanii Ads", path: "/kampanie-reklamowe" },
    { title: "Google Ads", description: "Smart Bidding i automatyzacja", path: "/google-ads" },
    { title: "Facebook Ads", description: "Automatyczne kampanie Meta", path: "/facebook-ads" },
    { title: "Content Marketing", description: "Automatyzacja content marketingu", path: "/content-marketing" },
  ],
};
