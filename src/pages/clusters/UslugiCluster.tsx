import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, OrganizationSchema, FAQSchema } from "@/components/seo/StructuredData";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Camera, Palette, ShoppingCart, BarChart3, Megaphone, Search, Smartphone, Video } from "lucide-react";

const faqItems = [
  {
    question: "Jakie usługi marketingowe oferuje FOTZ Studio?",
    answer: "FOTZ Studio oferuje kompleksowe usługi: strony internetowe, SEO i pozycjonowanie, kampanie Google Ads i Meta Ads, branding i identyfikację wizualną, fotografię i produkcję wideo, e-commerce, social media marketing oraz content marketing."
  },
  {
    question: "Ile kosztują usługi marketingowe w FOTZ Studio?",
    answer: "Ceny zależą od zakresu projektu. Strony internetowe od 3 000 zł, SEO od 2 000 zł/mies., Google Ads od 1 500 zł/mies. Każdy projekt wyceniamy indywidualnie po analizie potrzeb klienta."
  },
  {
    question: "Dla jakich firm pracuje FOTZ Studio?",
    answer: "Pracujemy z firmami z różnych branż — od startupów po duże przedsiębiorstwa. Specjalizujemy się w usługach dla branży beauty, gastronomii, e-commerce, nieruchomości, motoryzacji i usług profesjonalnych."
  },
  {
    question: "Jak wygląda proces współpracy z FOTZ Studio?",
    answer: "Proces zaczyna się od bezpłatnej konsultacji, następnie przygotowujemy strategię i wycenę. Po akceptacji realizujemy projekt etapami z regularnymi raportami postępów. Zapewniamy stałe wsparcie po zakończeniu projektu."
  },
  {
    question: "Czy FOTZ Studio obsługuje klientów z całej Polski?",
    answer: "Tak, obsługujemy klientów z całej Polski. Nasza siedziba jest w Poznaniu, ale dzięki narzędziom online i regularnym spotkaniom video realizujemy projekty dla firm z każdego miasta."
  }
];

const services = [
  {
    icon: Globe,
    title: "Strony Internetowe",
    description: "Nowoczesne, responsywne strony internetowe zoptymalizowane pod SEO i konwersje. WordPress, React, dedykowane rozwiązania.",
    href: "/uslugi/strony-internetowe",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Search,
    title: "SEO & Pozycjonowanie",
    description: "Kompleksowa optymalizacja SEO: audyty techniczne, pozycjonowanie lokalne i ogólnopolskie, link building.",
    href: "/seo",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Google Ads & Meta Ads",
    description: "Kampanie reklamowe w Google i na Facebooku z pełną optymalizacją ROI i raportowaniem wyników.",
    href: "/uslugi/google-ads",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Palette,
    title: "Branding & Identyfikacja",
    description: "Projektowanie logo, identyfikacji wizualnej, materiałów firmowych i brandbooka dla Twojej marki.",
    href: "/uslugi/branding",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Camera,
    title: "Fotografia & Drony",
    description: "Profesjonalna fotografia produktowa, eventowa, z drona. Zdjęcia dla e-commerce i social media.",
    href: "/uslugi/fotografia",
    color: "from-rose-500 to-red-500",
  },
  {
    icon: Video,
    title: "Produkcja Wideo",
    description: "Filmy reklamowe, korporacyjne, relacje z wydarzeń, animacje i montaż profesjonalnego wideo.",
    href: "/uslugi/wideo",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Sklepy internetowe na WooCommerce, Shopify i dedykowanych platformach. Integracje z systemami płatności.",
    href: "/uslugi/ecommerce",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Prowadzenie profili, tworzenie contentu, kampanie reklamowe na Facebook, Instagram, LinkedIn i TikTok.",
    href: "/social-media",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Aplikacje & Landing Page",
    description: "Aplikacje webowe, landing page'e konwersyjne i mikroserwisy dostosowane do celów biznesowych.",
    href: "/uslugi/landing-page",
    color: "from-amber-500 to-yellow-500",
  },
];

export default function UslugiCluster() {
  return (
    <>
      <OrganizationSchema />
      <Layout>
        <SEOHead
          title="Usługi Marketingowe | Strony, SEO, Ads, Branding — FOTZ Studio"
          description="Pełny zakres usług marketingowych: strony internetowe, SEO, Google Ads, branding, fotografia, wideo, e-commerce i social media. Poznań i cała Polska."
          canonical="https://fotz.pl/uslugi"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Usługi", url: "https://fotz.pl/uslugi" },
          ]}
        />
        <FAQSchema items={faqItems} />

        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-background pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold tracking-wider uppercase mb-4 text-sm">
                Kompleksowe rozwiązania
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Usługi Marketingowe<br />
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  FOTZ Studio
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Od strategii po realizację — wszystko, czego potrzebujesz, aby Twoja firma rosła w internecie. Działamy w Poznaniu i obsługujemy klientów z całej Polski.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    to={service.href}
                    className="group block h-full bg-card border border-border/40 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Dowiedz się więcej <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Article Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Dlaczego warto wybrać FOTZ Studio?</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
                <p>
                  FOTZ Studio to agencja marketingowa z Poznania, która łączy strategiczne myślenie z kreatywną realizacją. Nasze usługi obejmują cały ekosystem marketingu cyfrowego — od budowy stron internetowych i pozycjonowania SEO, przez kampanie reklamowe Google Ads i Meta Ads, aż po produkcję wideo i fotografię profesjonalną.
                </p>
                <p>
                  Każdy projekt rozpoczynamy od dokładnej analizy potrzeb klienta i rynku. Nie oferujemy gotowych szablonów — tworzymy indywidualne strategie, które przynoszą mierzalne rezultaty. Nasze podejście opiera się na danych, a nie domysłach.
                </p>
                <p>
                  Współpracujemy z firmami z całej Polski, od lokalnych biznesów w Poznaniu po ogólnopolskie marki. Niezależnie od wielkości projektu, zapewniamy ten sam poziom zaangażowania i profesjonalizmu.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
                <Link to="/seo" className="text-primary hover:underline font-medium text-sm">→ Usługi SEO</Link>
                <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
                <Link to="/performance-marketing/google-ads" className="text-primary hover:underline font-medium text-sm">→ Google Ads</Link>
                <Link to="/kontakt" className="text-primary hover:underline font-medium text-sm">→ Kontakt</Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
