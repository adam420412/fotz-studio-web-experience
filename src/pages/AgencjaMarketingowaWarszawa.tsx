import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Palette,
  Globe,
  Share2,
  Target,
  Search,
  FileText,
  Rocket,
  BarChart3,
  Building2,
  Users,
  Award,
  Video,
  TrendingUp,
  ShoppingCart,
  Camera
} from "lucide-react";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const services = [
  {
    icon: Globe,
    title: "Strony i sklepy internetowe",
    description: "Projektujemy i wdrażamy strony www oraz sklepy e-commerce dla firm z Warszawy. Responsywne, szybkie, zoptymalizowane pod SEO i konwersję. Shopify, WooCommerce, Next.js i rozwiązania custom.",
    link: "/uslugi/strony-internetowe/warszawa"
  },
  {
    icon: Search,
    title: "Pozycjonowanie SEO",
    description: "Zwiększamy widoczność Twojej firmy w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizujemy się w SEO lokalnym dla firm z Warszawy i Mazowsza oraz SEO dla e-commerce.",
    link: "/seo/pozycjonowanie"
  },
  {
    icon: Target,
    title: "Kampanie reklamowe Google i Meta",
    description: "Kampanie Google Ads i Meta Ads z nastawieniem na wyniki. Konfiguracja, optymalizacja i skalowanie kampanii. Raportowanie ROAS i CPL. Pracujemy na budżetach od 2000 do 100 000 PLN/mies.",
    link: "/performance-marketing/google-ads"
  },
  {
    icon: Share2,
    title: "Social media marketing",
    description: "Prowadzenie profili na Instagramie, Facebooku, LinkedInie i TikToku. Kreacja treści, harmonogram publikacji, obsługa komentarzy, kampanie zasięgowe i leadowe.",
    link: "/social-media/poznan"
  },
  {
    icon: Video,
    title: "Produkcja wideo i foto",
    description: "Profesjonalne sesje fotograficzne, filmy produktowe, spoty reklamowe i treści wideo na social media. Własne studio w Poznaniu, realizacje w Warszawie i całej Polsce.",
    link: "/uslugi/produkcja-filmow"
  },
  {
    icon: Palette,
    title: "Branding i identyfikacja wizualna",
    description: "Budujemy marki od podstaw i odświeżamy istniejące. Logo, brandbook, system identyfikacji wizualnej, materiały reklamowe. Spójna marka = wyższe ceny i lepsze konwersje.",
    link: "/uslugi/identyfikacja-wizualna"
  }
];

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Bezpłatna konsultacja i analiza",
    description: "Rozmawiamy o Twojej firmie, celach i budżecie. Analizujemy aktualną sytuację marketingową, konkurencję i potencjał w wyszukiwarce. Na tej podstawie rekomendujemy najlepsze działania."
  },
  {
    number: "02",
    icon: FileText,
    title: "Strategia i plan działania",
    description: "Tworzymy indywidualną strategię marketingową z wyborem kanałów, harmonogramem, budżetem i mierzalnymi KPI. Żadnych standardowych pakietów — plan szyty pod Twój biznes."
  },
  {
    number: "03",
    icon: Rocket,
    title: "Wdrożenie i realizacja",
    description: "Działamy. Tworzymy treści, konfigurujemy kampanie, optymalizujemy strony, budujemy linki. Masz stały dostęp do raportów i dedykowanego opiekuna."
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Optymalizacja i raportowanie",
    description: "Co miesiąc omawiamy wyniki i planujemy kolejne kroki. Dane z GA4, Google Ads, Meta Ads i SEO w jednym raporcie. Stale optymalizujemy, żeby wyniki rosły."
  }
];

const faqItems = [
  {
    question: "Czy agencja z Poznania obsługuje klientów z Warszawy?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Warszawy i okolic. Spotkania prowadzimy online (Google Meet, Teams). Przy większych projektach przyjeżdżamy do Warszawy. Ponad 40% naszych klientów pochodzi spoza Poznania."
  },
  {
    question: "Jakie branże obsługujecie w Warszawie?",
    answer: "Pracujemy z firmami z różnych branż: e-commerce, nieruchomości, IT, motoryzacja, B2B usługowe, gastronomia, beauty i wiele innych. Każdy projekt poprzedzamy analizą specyfiki branży i konkurencji."
  },
  {
    question: "Ile kosztują usługi agencji marketingowej w Warszawie?",
    answer: "Ceny zależą od zakresu usług. Pojedynczy kanał (np. SEO lub Meta Ads) to od 1500–3000 PLN/mies. Kompleksowa obsługa marketingowa od 5000–15 000 PLN/mies. Każdą wycenę poprzedzamy bezpłatną konsultacją."
  },
  {
    question: "Jak mierzycie efekty działań marketingowych?",
    answer: "Raportujemy co miesiąc — ruch organiczny, konwersje, ROAS, CPL, pozycje w Google. Korzystamy z GA4, Google Search Console, Google Ads i narzędzi SEO. Masz dostęp do dashboardu z danymi na żywo."
  },
  {
    question: "Czy możecie przejąć obsługę klienta od innej agencji?",
    answer: "Tak — regularnie przejmujemy kampanie i konta reklamowe od innych agencji. Zaczynamy od audytu istniejących działań, identyfikujemy co nie działa i wdrażamy zmiany. Migracje przeprowadzamy bez przerwy w kampaniach."
  },
  {
    question: "Czy oferujecie kompleksową obsługę — od strony po marketing?",
    answer: "Tak, jesteśmy agencją full-service. Możemy zaprojektować i wdrożyć stronę lub sklep, a następnie prowadzić jej marketing (SEO, Google Ads, social media, email). Jeden partner — pełna odpowiedzialność za wyniki."
  }
];

export default function AgencjaMarketingowaWarszawa() {
  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Warszawa | Marketing Internetowy | Fotz Studio"
        description="Agencja marketingowa obsługująca firmy z Warszawy. SEO, Google Ads, Meta Ads, social media, strony internetowe i produkcja wideo. Bezpłatna konsultacja."
        canonical="https://fotz.pl/agencja-marketingowa-warszawa"
        keywords="agencja marketingowa Warszawa, marketing internetowy Warszawa, agencja SEO Warszawa, Google Ads Warszawa, kampanie reklamowe Warszawa, agencja digital Warszawa, marketing dla firm Warszawa"
      />

      <ServiceSchema
        name="Agencja Marketingowa Warszawa"
        description="Kompleksowe usługi marketingu internetowego dla firm z Warszawy — SEO, Google Ads, Meta Ads, social media, strony internetowe i produkcja wideo."
        provider="Fotz Studio"
        areaServed="Warszawa"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja Marketingowa Warszawa", url: "https://fotz.pl/agencja-marketingowa-warszawa" }
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#0F3053]/8 blur-3xl pointer-events-none" />

        <div className="container px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground/80">
                <MapPin className="w-4 h-4 text-primary" /> Warszawa i cała Polska
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Agencja Marketingowa{" "}
              <span className="text-gradient">Warszawa</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Kompleksowy marketing internetowy dla firm z Warszawy i Mazowsza. SEO, Google Ads, Meta Ads,
              social media, strony internetowe i produkcja wideo — wszystko w jednej agencji.
            </motion.p>

            <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
              Warszawski rynek jest jednym z najbardziej konkurencyjnych w Polsce. Firmy, które inwestują
              w profesjonalny marketing, systematycznie zyskują przewagę nad tymi, które oszczędzają na strategii.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/kontakt">
                  Bezpłatna konsultacja <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/realizacje">Zobacz nasze realizacje</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card/30 border-y border-border/30">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
          >
            {[
              { value: "200+", label: "zrealizowanych projektów" },
              { value: "8+ lat", label: "na rynku marketingu" },
              { value: "15 branż", label: "obsługiwanych sektorów" },
              { value: "4.9/5", label: "średnia ocen Google" }
            ].map((s, i) => (
              <motion.div key={i} variants={fadeIn}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Dlaczego firmy z Warszawy{" "}
                <span className="text-gradient">wybierają Fotz Studio?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nie jesteśmy najtańszą agencją w Polsce. Jesteśmy agencją, która dostarcza wyniki.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: BarChart3,
                  title: "Orientacja na wyniki, nie na aktywności",
                  desc: "Raportujemy to, co ma znaczenie: leady, ROAS, wzrost ruchu organicznego, koszt konwersji. Nie słupki zasięgów na Facebooku."
                },
                {
                  icon: Users,
                  title: "Dedykowany zespół, nie rotujący juniorzy",
                  desc: "Masz stały kontakt z opiekunem projektu i specjalistami, którzy rozumieją Twoją branżę. Nie zaczynasz od nowa po każdej rotacji."
                },
                {
                  icon: Award,
                  title: "Full-service bez podwykonawców",
                  desc: "SEO, Ads, social media, strony, wideo i foto — robimy wszystko wewnętrznie. Spójna strategia, jedna faktura, jedno miejsce odpowiedzialności."
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="p-6 rounded-2xl border border-border/40 bg-card/20">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Nasze usługi marketingowe{" "}
                <span className="text-gradient">dla firm z Warszawy</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-2xl bg-background border border-border/40 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
                  <Link to={s.link} className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                    Dowiedz się więcej <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Jak wygląda{" "}
                <span className="text-gradient">nasza współpraca?</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex gap-6 p-6 rounded-2xl border border-border/40 bg-card/20"
                >
                  <div className="text-4xl font-heading font-bold text-primary/20 shrink-0 leading-none">
                    {step.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-heading font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Najczęstsze pytania — agencja marketingowa Warszawa
              </h2>
            </motion.div>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-2xl border border-border/40 bg-background"
                >
                  <h3 className="font-heading font-semibold mb-3 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item.question}
                  </h3>
                  <p className="text-sm text-muted-foreground pl-7">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary/90 to-[#0F3053]/90">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Zacznijmy wspólnie budować Twój marketing w Warszawie
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 mb-8">
              Bezpłatna konsultacja — 30 minut, zero zobowiązań. Omówimy Twoją sytuację
              i zaproponujemy konkretne działania.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link to="/kontakt">
                  Umów konsultację <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/realizacje">Zobacz case studies</Link>
              </Button>
            </motion.div>
            <motion.p variants={fadeIn} className="text-white/50 text-xs mt-6">
              Odpowiadamy w ciągu 24 godzin · Bez sprzedaży pod presją
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Internal linking */}
      <section className="py-12 border-t border-border/30 bg-card/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">Powiązane usługi</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Agencja marketingowa Poznań", to: "/agencja-marketingowa-poznan" },
              { label: "Strony internetowe Warszawa", to: "/uslugi/strony-internetowe/warszawa" },
              { label: "Sklepy internetowe Warszawa", to: "/uslugi/sklepy-internetowe/warszawa" },
              { label: "Agencja SEO Poznań", to: "/agencja-seo-poznan" },
              { label: "Pozycjonowanie stron", to: "/seo/pozycjonowanie" },
              { label: "Google Ads", to: "/uslugi/google-ads" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
