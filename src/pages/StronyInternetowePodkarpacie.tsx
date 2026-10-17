import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import React from 'react';
import { Link } from 'react-router-dom';
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
      answer: "Tak. Pracujemy z Poznania, a firmy z Rzeszowa, Przemyśla, Tarnobrzegu i całego Podkarpacia obsługujemy zdalnie: rozmowy online, wspólne makiety w Figmie i stały kontakt mailowy oraz telefoniczny."
    },
    {
      question: "Ile kosztuje strona internetowa w Podkarpaciu?",
      answer: "Koszt ustalamy po poznaniu zakresu: liczby podstron, treści, integracji i sposobu zarządzania. W ofercie określamy cenę, etapy, poprawki i termin; utrzymanie oraz działania marketingowe omawiamy osobno."
    },
    {
      question: "Czym się wyróżniacie dla firm z Podkarpacia?",
      answer: "Wiele firm dopiero rozbudowuje swoją obecność w internecie. Dlatego budujemy strony, które mogą być rozwijane etapami - zaczniesz od strony wizytówki, a później dodasz e-commerce czy integracje z systemami biznesowymi."
    },
    {
      question: "Czy będzie SEO dla Rzeszowa?",
      answer: "Oczywiście. Optymalizujemy strony pod frazy lokalne jak 'strony internetowe Rzeszów', 'tworzenie stron Podkarpacie', 'agencja interaktywna Rzeszów' itp. Nie gwarantujemy konkretnej pozycji w Google, ale przygotowujemy stronę tak, by miała solidne podstawy do widoczności lokalnej."
    },
    {
      question: "Ile czasu trwa zrobienie strony?",
      answer: "Termin podajemy w ofercie, bo zależy od zakresu projektu i dostarczenia materiałów. Staramy się pracować szybko, ale bez pogorszenia jakości. Jeśli pilny projekt - możemy pracować intensywniej, ale wtedy koszt może być wyższy."
    },
    {
      question: "Czy mogę płacić etapami?",
      answer: "Tak, oferujemy różne modele płatności, w tym rozłożenie na etapy projektu. Harmonogram płatności ustalamy indywidualnie i zapisujemy w umowie."
    },
    {
      question: "Co się stanie po uruchomieniu strony?",
      answer: "Po uruchomieniu możemy uzgodnić opiekę techniczną. Zakres, częstotliwość prac i koszt zapisujemy w indywidualnej ofercie."
    }
  ];

  const opportunities = [
    {
      title: "Aviation Valley",
      description: "Klaster firm z sektora lotniczego. Takie firmy często potrzebują nowoczesnych stron do rekrutacji i B2B.",
      icon: Rocket
    },
    {
      title: "Startup ecosystem",
      description: "Rzeszów przyciąga młodych przedsiębiorców. Firmy technologiczne szukają agencji, które rozumieją scaling.",
      icon: Lightbulb
    },
    {
      title: "Niski poziom digitalizacji",
      description: "Część małych i średnich firm wciąż nie ma nowoczesnej strony. To szansa dla tych, którzy zadbają o nią wcześniej.",
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
    <Layout>
      <div className="pt-20">
      <SEOHead
        title="Strony internetowe Podkarpacie | Rzeszów | FOTZ Studio"
        description="Strony internetowe dla firm z Podkarpacia i Rzeszowa. Pracujemy z Poznania, klientów z regionu obsługujemy zdalnie. Responsywne strony zoptymalizowane pod SEO, wycena indywidualna."
        canonical="https://www.fotz-studio.pl/uslugi/strony-internetowe/podkarpacie"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "fotz.pl - Strony Internetowe Podkarpacie",
          "image": "https://www.fotz-studio.pl/logo-fotz.jpg",
          "description": "Tworzenie stron internetowych dla firm z Podkarpacia i Rzeszowa. Aviation Valley, startups, logistyka, produkcja.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Poznań",
            "addressRegion": "Wielkopolskie",
            "addressCountry": "PL"
          },
          "areaServed": [
            {"@type": "City", "name": "Rzeszów"},
            {"@type": "City", "name": "Przemyśl"},
            {"@type": "State", "name": "Podkarpackie"}
          ],
          "url": "https://www.fotz-studio.pl/uslugi/strony-internetowe/podkarpacie",
          "telephone": "+48790814814",
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
              <span className="text-sm font-medium">Rzeszów i Podkarpacie, obsługa zdalna z Poznania</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Strony Internetowe<br />dla Firm Podkarpackich
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Podkarpacie to dynamicznie rozwijający się region. Czy Twoja firma rośnie razem z nim? Nowoczesna strona internetowa to krok, który zrobimy za Ciebie. Zapytaj o indywidualną wycenę.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center gap-2">
                Zacznij projekt
                <ArrowRight className="w-5 h-5" />
              </a>
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

      {/* Opportunities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold mb-6">Dlaczego Podkarpacie to idealne miejsce na cyfrową transformację?</h2>
            <p className="text-lg text-slate-600">
              Podkarpacie to region z silnym przemysłem i rosnącą liczbą firm technologicznych. Aviation Valley przyciąga duże firmy, startups zmieniają sposób robienia biznesu, a wiele tradycyjnych firm dopiero wchodzi na rynek cyfrowy. To idealna chwila, by zainwestować w nowoczesną stronę.
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
              <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center text-primary font-semibold flex items-center gap-2 hover:gap-3 transition">
                Skonsultuj się z nami
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Cost Structure Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">Od czego zależy wycena?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInView delay={0}>
              <div className="bg-white p-8 rounded-lg border border-slate-200">
                <div className="text-3xl font-bold text-primary mb-4">Wycena indywidualna</div>
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
                <div className="text-3xl font-bold text-primary mb-4">Wycena indywidualna</div>
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
                <div className="text-3xl font-bold text-primary mb-4">Wycena indywidualna</div>
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
                Każdy projekt jest inny. Wycenę przygotowujemy po rozmowie o zakresie: liczbie podstron, treściach, integracjach i sposobie zarządzania stroną.
              </p>
              <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition">
                Zaplanuj konsultację
              </a>
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
          
          <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition inline-flex items-center gap-2">
            Zaplanuj projekt
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      </div>
    </Layout>
  );
}
