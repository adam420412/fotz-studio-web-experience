import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Rocket, TrendingUp, Lightbulb, Users, Building2, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { ContactSection } from '@/components/sections/ContactSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FadeInView = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true, margin: '-100px' }}
  >
    {children}
  </motion.div>
);

export default function StronyInternetowePodkarpacie() {
  const faqItems = [
    {
      question: "Czy fotz.pl wspiera firmy z Rzeszowa i Podkarpacia?",
      answer: "Tak, specjalizujemy się w obsłudze firm z całego Podkarpacia, w tym z Rzeszowa, Przemyśla, Tarnobrzegu i okolicznych miast. Pracujemy zdalnie, ale rozumiemy specyfikę biznesu na Podkarpaciu - szybko rosnący rynek, dużo innowacyjnych firm, niedostateczna digitalizacja w wielu sektorach."
    },
    {
      question: "Ile kosztuje strona internetowa w Podkarpaciu?",
      answer: "Ceny zaczynają się od 499 zł dla strony wizytówki i sięgają 5000-10000 zł dla bardziej zaawansowanych projektów e-commerce czy korporacyjnych. Każdą wycenę dostosowujemy do rzeczywistych potrzeb Twojej firmy. Zapraszamy na darmową konsultację."
    },
    {
      question: "Czym się wyróżniacie dla firm z Podkarpacia?",
      answer: "Rozumiemy, że Podkarpacie szybko się rozwija. Jest wiele firm, które dopiero wchodzą na rynek cyfrowy. Specjalizujemy się w tworzeniu stron, które mogą być budowane etapami - zaczniesz od strony wizytówki, a później dodasz e-commerce czy integracje z systemami biznesowymi."
    },
    {
      question: "Czy będzie SEO dla Rzeszowa?",
      answer: "Oczywiście. Optymalizujemy strony pod frazy lokalne jak 'strony internetowe Rzeszów', 'tworzenie stron Podkarpacie', 'agencja interaktywna Rzeszów' itp. To daje Ci przewagę konkurencyjną w lokalnych wyszukiwaniach."
    },
    {
      question: "Ile czasu trwa zrobienie strony?",
      answer: "Zazwyczaj 4-8 tygodni zależnie od skomplikowania projektu. Staramy się pracować szybko, ale bez pogorszenia jakości. Jeśli pilny projekt - możemy pracować intensywniej, ale wtedy koszt może być wyższy."
    },
    {
      question: "Czy mogę płacić etapami?",
      answer: "Tak, oferujemy różne modele płatności, w tym rozłożenie na etapy projektu. Zazwyczaj: 30% zaliczki, 40% w trakcie, 30% po uruchomieniu. Dla dużych projektów możemy negocjować warunki."
    },
    {
      question: "Co się stanie po uruchomieniu strony?",
      answer: "Po uruchomieniu oferujemy pakiety wsparcia od 100 zł/miesiąc za podstawowe utrzymanie, do 500 zł/miesiąc za pełną opiekę z cotygodniowymi raportami SEO. Wybierasz pakiet, który pasuje do Twoich potrzeb."
    }
  ];

  const podkarpacieFacts = [
    {
      number: "2,1 mln",
      label: "ludzi w Podkarpaciu",
      description: "Trzecia co do wielkości populacji w Polsce"
    },
    {
      number: "550k",
      label: "mieszkańców Rzeszowa",
      description: "Drugie miasto Podkarpacia"
    },
    {
      number: "120+",
      label: "firm w Aviation Valley",
      description: "Klaster lotniczy (MTU, P&W, Safran)"
    },
    {
      number: "15%",
      label: "wzrost PKB rocznie",
      description: "Najszybciej rosnący region w Polsce"
    }
  ];

  const opportunities = [
    {
      title: "Aviation Valley",
      description: "Ponad 120 firm z sektora lotniczego. Wiele z nich potrzebuje nowoczesnych stron do rekrutacji i B2B.",
      icon: Rocket
    },
    {
      title: "Startup ecosystem",
      description: "Rzeszów przyciąga młodych przedsiębiorców. Firmy technologiczne szukają agencji, które rozumieją scaling.",
      icon: Lightbulb
    },
    {
      title: "Niski poziom digitalizacji",
      description: "Wiele firm małych i średnich w Podkarpaciu nie ma jeszcze stron. To ogromna szansa dla tych, którzy pójdą pierwszy.",
      icon: TrendingUp
    },
    {
      title: "Logistyka i produkcja",
      description: "Branża logistyki i produkcji bardzo się rozwija. B2B strony dla hurtowni, dystrybutorów, producentów - duży potencjał.",
      icon: Building2
    }
  ];

  const industriesPodkarpacie = [
    "Lotnictwo i kosmonautyka (Aviation Valley)",
    "Startups i technologia",
    "Produkcja i przetwórstwo",
    "Logistyka i dystrybucja",
    "Usługi biznesowe",
    "Turystyka religajna",
    "Handel i e-commerce",
    "Edukacja i szkolenia"
  ];

  return (
    <>
      <SEOHead
        title="Strony internetowe Podkarpacie | Rzeszów | fotz.pl"
        description="Profesjonalne strony internetowe dla firm z Podkarpacia i Rzeszowa. Specjalizujemy się w firmach z Aviation Valley, startupach i sektorze logistyki. Od…"
        canonical="https://fotz.pl/uslugi/strony-internetowe/podkarpacie"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "fotz.pl - Strony Internetowe Podkarpacie",
          "image": "https://fotz.pl/logo.png",
          "description": "Tworzenie stron internetowych dla firm z Podkarpacia i Rzeszowa. Aviation Valley, startups, logistyka, produkcja.",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Podkarpackie",
            "addressCountry": "PL"
          },
          "areaServed": [
            {"@type": "City", "name": "Rzeszów"},
            {"@type": "City", "name": "Przemyśl"},
            {"@type": "State", "name": "Podkarpackie"}
          ],
          "url": "https://fotz.pl/uslugi/strony-internetowe/podkarpacie",
          "telephone": "+48123456789",
          "priceRange": "$$",
          "serviceType": "Web Design & Development"
        }}
        keywords="strony internetowe podkarpacie, tworzenie stron rzeszów, strony www podkarpacie, projektowanie stron podkarpacie"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 border border-primary/30">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Rzeszów - Podkarpacie</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Strony Internetowe<br />dla Firm Podkarpackich
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Podkarpacie to najszybciej rosnący region w Polsce. Czy Twoja firma rośnie razem z regionem? Nowoczesna strona internetowa to krok, który zrobimy za Ciebie. Już od 499 zł.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center gap-2">
                Zacznij projekt
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/cennik-tworzenia-stron"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition border border-white/20"
              >
                Sprawdź cennik
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {podkarpacieFacts.map((fact, idx) => (
              <FadeInView key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {fact.number}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 mb-1">
                    {fact.label}
                  </div>
                  <div className="text-xs text-slate-600">
                    {fact.description}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold mb-6">Dlaczego Podkarpacie to idealne miejsce na cyfrową transformację?</h2>
            <p className="text-lg text-slate-600">
              Podkarpacie rośnie szybciej niż inne regiony Polski. Aviation Valley przyciąga światowe firmy, startups zmieniają sposób robienia biznesu, a wiele tradycyjnych firm dopiero wchodzi na rynek cyfrowy. To idealna chwila, by zainwestować w nowoczesną stronę.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opp, idx) => {
              const Icon = opp.icon;
              return (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary transition">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{opp.title}</h3>
                    <p className="text-slate-600">{opp.description}</p>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Podkarpacie Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">Dlaczego my dla firm z Podkarpacia?</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeInView delay={0}>
              <div className="bg-white p-8 rounded-lg border border-slate-200">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Szybkość realizacji</h3>
                <p className="text-slate-600">
                  Podkarpacie to dynamiczny rynek. Pracujemy szybko, aby Twoja firma mogła wykorzystać okazje pierwsza.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.1}>
              <div className="bg-white p-8 rounded-lg border border-slate-200">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">SEO od dnia 1</h3>
                <p className="text-slate-600">
                  Optymalizujemy strony pod frazy takie jak "strony internetowe Rzeszów", "tworzenie stron Podkarpacie" itp.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-white p-8 rounded-lg border border-slate-200">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Elastyczne podejście</h3>
                <p className="text-slate-600">
                  Wiele firm z Podkarpacia rośnie. Budujemy strony, które można skalować - dodawać nowe podsekcje, funkcje, integracje.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="bg-white p-8 rounded-lg border border-slate-200">
                <Lightbulb className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Myślimy biznesowo</h3>
                <p className="text-slate-600">
                  Nie robimy stron dla sztuki. Każdy projekt musi przynosić Ci konkretne efekty biznesowe - nowych klientów, wyższe sprzedaże.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">Branże na Podkarpaciu, które obsługujemy</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {industriesPodkarpacie.map((industry, idx) => (
              <FadeInView key={idx} delay={idx * 0.05}>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-slate-800 text-sm">{industry}</span>
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-semibold mb-4">Twoja branża nie jest na liście?</h3>
              <p className="text-slate-700 mb-6">
                Obsługujemy projekty z każdej branży. Jeśli prowadzisz biznes w Podkarpaciu i chcesz go cyfryzować, możemy Ci pomóc. Zapraszamy na bezpłatną konsultację.
              </p>
              <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition">
                Skonsultuj się z nami
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Cost Structure Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">Ceny dostępne dla firm Podkarpackich</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInView delay={0}>
              <div className="bg-white p-8 rounded-lg border border-slate-200">
                <div className="text-3xl font-bold text-primary mb-4">499 zł</div>
                <h3 className="text-xl font-semibold mb-4">Strona Wizytówka</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Do 5 podstron</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Formularz kontaktowy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>SEO basic</span>
                  </li>
                </ul>
              </div>
            </FadeInView>

            <FadeInView delay={0.1}>
              <div className="bg-white p-8 rounded-lg border-2 border-primary shadow-lg relative">
                <div className="absolute -top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popularne
                </div>
                <div className="text-3xl font-bold text-primary mb-4">1499 zł</div>
                <h3 className="text-xl font-semibold mb-4">Strona Firmowa</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Do 15 podstron</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Blog</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>SEO pełne</span>
                  </li>
                </ul>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-white p-8 rounded-lg border border-slate-200">
                <div className="text-3xl font-bold text-primary mb-4">2999 zł</div>
                <h3 className="text-xl font-semibold mb-4">Sklep E-commerce</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Katalog produktów</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Integracja płatności</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>SEO e-commerce</span>
                  </li>
                </ul>
              </div>
            </FadeInView>
          </div>

          <FadeInView delay={0.3}>
            <div className="mt-16 bg-white p-8 rounded-lg border border-slate-200 text-center">
              <p className="text-slate-600 mb-6 text-lg">
                Każdy projekt jest inny. Powyższe ceny to orientacyjne pakiety. Możemy dostosować zakres i budżet do Twoich potrzeb.
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition">
                Zaplanuj konsultację
              </button>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Pytania firmy z Podkarpacia</h2>

          <div className="max-w-2xl">
            <Accordion>
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Gotowy na cyfrową transformację?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Podkarpacie rośnie. Twoja firma powinna rosnąć razem z regionem. Zacznij od nowoczesnej strony internetowej.
          </p>
          
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition inline-flex items-center gap-2">
            Zaplanuj projekt
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
