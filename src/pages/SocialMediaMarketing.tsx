import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Instagram,
  Facebook,
  Linkedin,
  BarChart3,
  Users,
  MessageSquare,
  Target,
  Zap,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function SocialMediaMarketing() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Social Media Marketing" },
  ];

  const platforms = [
    {
      icon: Facebook,
      name: "Facebook",
      desc: "Największa platforma w Polsce — 16 mln użytkowników. Idealna do budowania społeczności i reklam targetowanych demograficznie.",
      stats: "16 mln PL users",
    },
    {
      icon: Instagram,
      name: "Instagram",
      desc: "Platforma wizualna dla branż fashion, beauty, gastronomia, lifestyle. Reels, Stories, Shopping — pełen arsenał do konwersji.",
      stats: "11 mln PL users",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      desc: "Obowiązkowo dla B2B. Targeting po stanowisku i branży. Najlepszy ROAS w segmencie biznesowym.",
      stats: "5 mln PL users",
    },
    {
      icon: MessageSquare,
      name: "TikTok",
      desc: "Najszybciej rosnąca platforma. Zasięgi organiczne niedostępne nigdzie indziej. Dla marek celujących w młodych.",
      stats: "12 mln PL users",
    },
  ];

  const services = [
    {
      icon: Target,
      title: "Strategia social media",
      desc: "Audyt, analiza konkurencji, dobór platform, calendar contentu, KPIs. Solidna podstawa pod każde działanie.",
    },
    {
      icon: MessageSquare,
      title: "Tworzenie treści",
      desc: "Posty, grafiki, Reels, Stories, karuzele. Content planowany miesięcznie, tworzony profesjonalnie.",
    },
    {
      icon: BarChart3,
      title: "Reklamy płatne (Meta/TikTok Ads)",
      desc: "Kampanie sprzedażowe, lead generation, remarketing. Optymalizacja pod ROAS i koszt per konwersję.",
    },
    {
      icon: Users,
      title: "Community management",
      desc: "Odpowiadanie na komentarze i wiadomości, moderacja, budowanie zaangażowanej społeczności.",
    },
    {
      icon: TrendingUp,
      title: "Influencer marketing",
      desc: "Dobór twórców dopasowanych do marki, briefy, egzekucja kampanii, raportowanie wyników.",
    },
    {
      icon: Zap,
      title: "Social media automation",
      desc: "Narzędzia do planowania, automatyczne raporty, monitoring wzmianek marki 24/7.",
    },
  ];

  const packages = [
    {
      title: "Social Start",
      price: "1 299 zł/mies.",
      desc: "1 platforma, podstawowe działania",
      features: [
        "1 platforma (FB lub IG)",
        "12 postów miesięcznie",
        "Grafiki i copywriting",
        "Raport miesięczny",
        "Odpowiedzi na komentarze",
      ],
    },
    {
      title: "Social Growth",
      price: "2 299 zł/mies.",
      desc: "2-3 platformy, reklamy w cenie",
      features: [
        "2-3 platformy",
        "20 postów miesięcznie",
        "Meta Ads (do 1000 zł budżet)",
        "Reels i Stories produkcja",
        "Tygodniowy monitoring",
        "Strategia kwartalna",
      ],
      highlight: true,
    },
    {
      title: "Social Pro",
      price: "3 999+ zł/mies.",
      desc: "Pełna obsługa wszystkich platform",
      features: [
        "Wszystkie platformy",
        "Unlimited content",
        "Multi-platform Ads",
        "Influencer management",
        "Dedykowany opiekun",
        "Cotygodniowy raport",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje prowadzenie social mediów?",
      answer:
        "Koszt prowadzenia social mediów zależy od liczby platform, częstotliwości postów i zakresu usług. Podstawowa obsługa jednej platformy to od 1299 zł/mies. Pełna obsługa z reklamami i kilkoma platformami to 3000-6000 zł/mies. Do tego dochodzi budżet reklamowy (minimum 500-1000 zł/mies. dla małych firm).",
    },
    {
      question: "Ile czasu potrzeba żeby zobaczyć efekty?",
      answer:
        "Pierwsze wyniki organiczne widać po 2-3 miesiącach regularnych działań. Płatne reklamy dają efekty już po 2-4 tygodniach testów. Zbudowanie zaangażowanej społeczności to proces 6-12 miesięcy. Social media to strategia długoterminowa — im dłużej działasz, tym lepsze wyniki.",
    },
    {
      question: "Które platformy social media wybrać dla firmy?",
      answer:
        "B2C/e-commerce: Facebook + Instagram (i TikTok jeśli celujecie w młodszych). B2B: LinkedIn obowiązkowo, ewentualnie Facebook. Gastronomia/beauty/lifestyle: Instagram + TikTok. Lokalna usługa: Facebook lokalny. Nie musicie być wszędzie — lepiej dobrze prowadzić 2 platformy niż słabo 5.",
    },
    {
      question: "Czy musimy dostarczać materiały zdjęciowe?",
      answer:
        "Nie jest to konieczne. Tworzymy grafiki z zasobów stock lub projektujemy w Canva/Figma. Jednak własne zdjęcia i wideo znacznie podnoszą autentyczność i zaangażowanie. Zalecamy sesję zdjęciową co 2-3 miesiące dla najlepszych wyników.",
    },
    {
      question: "Jak mierzycie skuteczność social media?",
      answer:
        "Raportujemy: zasięg, wyświetlenia, zaangażowanie (likes/komentarze/udostępnienia), wzrost obserwujących, ruch na stronie z social media, konwersje z reklam, koszt per klik i koszt per konwersję. Miesięczny raport z rekomendacjami.",
    },
    {
      question: "Czy prowadzicie reklamy płatne na social media?",
      answer:
        "Tak — Meta Ads (Facebook i Instagram), TikTok Ads, LinkedIn Ads. Budżet reklamowy jest osobny od kosztu obsługi. Zarządzamy kampaniami, optymalizujemy je pod cele biznesowe i raportujemy wyniki. Rekomendujemy minimum 1000-2000 zł budżetu reklamowego miesięcznie.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Social Media Marketing | Agencja Social Media | fotz.pl"
        description="Social media marketing dla firm — kompleksowa obsługa Facebook, Instagram, LinkedIn, TikTok. Strategia, content, reklamy Meta Ads. Sprawdź ofertę agencji!"
        canonical="https://fotz.pl/uslugi/social-media-marketing"
        keywords="social media marketing, marketing w mediach społecznościowych, agencja social media, strategia social media, content social media, social media dla firm"
      />
      <ServiceSchema
        name="Social Media Marketing"
        description="Kompleksowa obsługa social media — strategia, tworzenie treści, reklamy Meta Ads, TikTok Ads, LinkedIn Ads dla firm"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-purple-900 bg-opacity-50 text-purple-300 px-3 py-1 rounded-full text-sm mb-4">
                <Star className="w-4 h-4" />
                Agencja Social Media
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Social Media Marketing — buduj markę i sprzedawaj w mediach społecznościowych
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Kompleksowa obsługa social media dla firm. Strategia, tworzenie treści, reklamy płatne i community management.
                Pracujemy na wyniki — więcej obserwujących, więcej zaangażowania, więcej sprzedaży.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "4+", label: "Platformy w ofercie" },
                  { value: "3x", label: "Więcej zasięgu" },
                  { value: "40 mln", label: "Polacy w social media" },
                  { value: "7h", label: "Śr. czas dzienny online" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Bezpłatna analiza social media <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link to="/uslugi">
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Wszystkie usługi
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Platforms */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Platformy, na których działamy</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Jesteśmy tam, gdzie są Twoi klienci. Każda platforma wymaga innego podejścia — wiemy jak to robić.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {platforms.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.1}>
                      <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-100 p-3 rounded-lg">
                            <Icon className="w-7 h-7 text-purple-600" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-xl text-slate-900">{p.name}</h3>
                              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">{p.stats}</span>
                            </div>
                            <p className="text-slate-600">{p.desc}</p>
                          </div>
                        </div>
                      </div>
                    </FadeInView>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Services */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co robimy w ramach social media?</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Pełna obsługa od strategii po codzienne działania i optymalizację.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.05}>
                      <div className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                        <Icon className="w-8 h-8 text-purple-600 mb-3" />
                        <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                        <p className="text-slate-600 text-sm">{service.desc}</p>
                      </div>
                    </FadeInView>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Packages */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pakiety social media</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Przejrzyste plany miesięczne dopasowane do wielkości firmy i celów.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`rounded-lg p-8 ${
                      pkg.highlight
                        ? "bg-gradient-to-br from-purple-600 to-purple-700 text-white border-2 border-purple-400 transform scale-105"
                        : "bg-white border border-slate-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <div className={`text-2xl font-bold mb-2 ${pkg.highlight ? "text-white" : "text-purple-600"}`}>
                      {pkg.price}
                    </div>
                    <p className={`mb-6 text-sm ${pkg.highlight ? "text-purple-100" : "text-slate-600"}`}>{pkg.desc}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-white" : "text-purple-600"}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-slate-500 text-sm mt-8">
                Budżet reklamowy (Meta Ads, TikTok Ads) doliczany osobno. Minimalna umowa 3 miesiące.
              </p>
            </div>
          </section>
        </FadeInView>

        {/* Why us */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dlaczego warto z nami pracować?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Strategia oparta na danych", desc: "Każda decyzja poparta analizą — nie działamy na intuicję. A/B testy, analiza zasięgu, optymalizacja pod cele." },
                  { title: "Własny dział kreacji", desc: "Graficy, copywriterzy i video producenci in-house. Szybka produkcja contentu bez zewnętrznych podwykonawców." },
                  { title: "Transparentne raportowanie", desc: "Miesięczny raport z wynikami, wnioskami i planem na kolejny okres. Zawsze wiesz co robimy i dlaczego." },
                  { title: "Odpowiadamy na wiadomości", desc: "Community management w godzinach pracy. Żaden komentarz ani wiadomość nie zostanie bez odpowiedzi." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 mb-3" />
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Social Media Marketing</h2>
              <FAQSchema items={faqItems} />
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg border border-slate-200">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6">
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 px-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        <ContactSection
        />
      </Layout>
    </>
  );
}
