import { motion } from "framer-motion";
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Zap, Award, Users, TrendingUp, CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react';
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

export default function StronyInternetoweWielkopolska() {
  const faqItems = [
    {
      question: "Czy fotz.pl obsługuje firmy z całej Wielkopolski?",
      answer: "Tak, prowadzimy projekty dla firm z całej Wielkopolski. Nasz zespół pracuje zdalnie, ale mamy głębokie zrozumienie rynku poznańskiego i regionalnego. Firma fotz.pl ma swoją siedzibę w Poznaniu, więc doskonale znamy specyfikę biznesu w regionie."
    },
    {
      question: "Jaki jest koszt strony internetowej dla firmy z Wielkopolski?",
      answer: "Ceny zaczynają się od 499 zł dla strony wizytówki, a rozbudowane projekty dla dużych firm na Wielkopolsku to zazwyczaj 3000-8000 zł. Każdą wycenę dostosowujemy do rzeczywistych potrzeb i budżetu klienta. Zapraszamy na konsultację, by poznać dokładny koszt Twojego projektu."
    },
    {
      question: "Czy mogę spotkać się z ekipą fotz.pl osobiście w Poznaniu?",
      answer: "Tak, możemy się spotykać w Poznaniu lub w Twojej lokalizacji na Wielkopolsku. Prowadzimy projektów na terenie całego regionu i chętnie dyskutujemy o Twoim biznesie osobiście. Umów się z nami przez formularz kontaktowy lub zadzwoń bezpośrednio."
    },
    {
      question: "Ile czasu trwa realizacja strony dla firmy z Wielkopolski?",
      answer: "Typowa realizacja trwa 4-8 tygodni w zależności od zakresu. Staramy się być szybcy, ale jakość zawsze bierze górę. W czasie realizacji utrzymujemy stały kontakt - tygodniowe spotkania, raporty postępu, możliwość zmian na życzenie klienta."
    },
    {
      question: "Czy otrzymam wsparcie po uruchomieniu strony?",
      answer: "Oczywiście. Po uruchomieniu oferujemy pakiety wsparcia: od zainstalowania nowych funkcji, przez aktualizacje, optymalizację, po pełną obsługę marketingową. Możesz wybrać, co pasuje do Twojej strategii."
    },
    {
      question: "Czy strona będzie zoptymalizowana pod Poznań i Wielkopolskę?",
      answer: "Absolutnie. Wdrażamy SEO od pierwszego dnia projektu. Strona będzie zoptymalizowana pod frazy takie jak 'Twoja usługa + Poznań/Wielkopolska', co ułatwi klientom znalezienie Ciebie w lokalnych wyszukiwaniach."
    },
    {
      question: "Czy mogę sama edytować treść na stronie?",
      answer: "Tak, jeśli wybierzesz WordPress lub nowoczesny CMS, otrzymasz prosty edytor, z którego łatwo można aktualizować treści. Pokażemy Ci, jak to robić. Dla bardziej zaawansowanych zmian zawsze możesz liczyć na naszą pomoc."
    },
    {
      question: "Czy strona będzie działać poprawnie na mobilnych?",
      answer: "Tak, wszystkie nasze strony są w 100% responsywne i zoptymalizowane pod urządzenia mobilne. W 2025 roku to standard, a dla nas priorytet. Strona będzie działać idealnie niezależnie od urządzenia klienta."
    }
  ];

  const whyWielkopolska = [
    {
      title: "Poznańska siedziba",
      description: "Mamy zespół w Poznaniu, rozumiemy lokalny rynek i specyfikę biznesu Wielkopolski. To dla nas nie nowy region - to nasz dom.",
      icon: MapPin
    },
    {
      title: "Wsparcie lokalne",
      description: "Możemy się spotkać osobiście, omówić projekt twarzą w twarz, lepiej zrozumieć Twoją wizję biznesu.",
      icon: Users
    },
    {
      title: "SEO na terenie Wielkopolski",
      description: "Specjalizujemy się w optymalizacji pod frazy lokalne. Strona będzie widoczna dla klientów szukających usług w Poznaniu, Koninie, Lesznie i całej Wielkopolsce.",
      icon: TrendingUp
    },
    {
      title: "Doświadczenie z branżami regionu",
      description: "Realizujemy projekty dla firm z branż silnie reprezentowanych w Wielkopolsce: produkcji, handlu, logistyki, targów i konferencji.",
      icon: Award
    }
  ];

  const regionStats = [
    { number: "3,4 mln", label: "ludzi w Wielkopolsce" },
    { number: "550k", label: "mieszkańców Poznania" },
    { number: "20k+", label: "zarejestrowanych firm" },
    { number: "4 miejsca", label: "na światowych targach" }
  ];

  const industriesWielkopolska = [
    "Produkcja i przetwórstwo",
    "Handel i e-commerce",
    "Logistyka i transport",
    "Usługi biznesowe",
    "Turystyka i gastronomia",
    "Targi i konferencje",
    "Sektor technologiczny",
    "Budownictwo"
  ];

  return (
    <>
      <SEOHead
        title="Strony internetowe Wielkopolska | Poznań | fotz.pl"
        description="Profesjonalne strony internetowe dla firm z Wielkopolski i Poznania. Mamy siedzibę w Poznaniu, specjalizujemy się w SEO dla branż lokalnych. Wycena od 499 zł."
        canonical="https://fotz.pl/uslugi/strony-internetowe/wielkopolska"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "fotz.pl - Strony Internetowe Wielkopolska",
          "image": "https://fotz.pl/logo.png",
          "description": "Tworzenie stron internetowych dla firm z Wielkopolski i Poznania. Zespół w Poznaniu, SEO, hosting, wsparcie.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Poznań",
            "addressRegion": "Wielkopolskie",
            "addressCountry": "PL"
          },
          "areaServed": [
            {"@type": "City", "name": "Poznań"},
            {"@type": "State", "name": "Wielkopolskie"}
          ],
          "url": "https://fotz.pl/uslugi/strony-internetowe/wielkopolska",
          "telephone": "+48123456789",
          "priceRange": "$$",
          "serviceType": "Web Design & Development"
        }}
        keywords="strony internetowe wielkopolska, tworzenie stron wielkopolska, strony www poznań i okolice, projektowanie stron wielkopolska"
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
              <span className="text-sm font-medium">Poznań - Wielkopolska</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Strony Internetowe<br />dla Firm Wielkopolskich
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Prowadzimy projektów dla firm z całej Wielkopolski. Nasz zespół pracuje w Poznaniu i doskonale zna specyfikę lokalnego biznesu. Strony internetowe od 499 zł z pełnym wsparciem SEO.
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
                Zobacz cennik
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {regionStats.map((stat, idx) => (
              <FadeInView key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600">
                    {stat.label}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Wielkopolska Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold mb-6">Dlaczego fotz.pl dla firm z Wielkopolski?</h2>
            <p className="text-lg text-slate-600">
              Prowadzimy biuro w Poznaniu i rozumiemy rynek Wielkopolski na wskroś. To nie jest kolejny freelancer z internetu - to partner biznesowy, który zna Twoją konkurencję i możliwości regionu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyWielkopolska.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary transition">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">Branże na Wielkopolsku, które obsługujemy</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {industriesWielkopolska.map((industry, idx) => (
              <FadeInView key={idx} delay={idx * 0.05}>
                <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-slate-800">{industry}</span>
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView>
            <div className="bg-white p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-semibold mb-4">Twoja branża nie jest na liście?</h3>
              <p className="text-slate-600 mb-6">
                Obsługujemy projekty z każdej branży. Jeśli prowadzisz biznes w Wielkopolsce, niezależnie od sektora, możemy Ci pomóc zbudować stronę, która będzie przynosić nowych klientów.
              </p>
              <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition">
                Skonsultuj się z nami
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-bold mb-6">SEO dla Wielkopolski i Poznania</h2>
            <p className="text-lg text-slate-600 mb-8">
              Strona internetowa to inwestycja. Dbamy, aby była widoczna dla klientów szukających Twoich usług w Poznaniu, Koninie, Lesznie i całej Wielkopolsce. Optymalizujemy pod lokalne frazy jak "tworzenie stron Poznań", "agencja interaktywna Wielkopolska" itp.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInView delay={0}>
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">SEO od dnia 1</h3>
                <p className="text-slate-600">
                  Rozpoczynamy pracę nad SEO jeszcze przed uruchomieniem strony. Wybieramy domeny, strukturujemy treści, dbamy o metatagy.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.1}>
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ruch organiczny</h3>
                <p className="text-slate-600">
                  Obieujemy nie ilość wizyt, a ich jakość. Strona powinni odwiedzać potencjalni klienci szukający Twoich usług.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Raporty i monitoring</h3>
                <p className="text-slate-600">
                  Regularnie raportujemy postęp w rankingach dla Twoich kluczowych słów kluczowych w Google.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">Jak pracujemy z firmami z Wielkopolski</h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                step: "01",
                title: "Poznajemy biznes",
                description: "Spotykamy się w Poznaniu lub u Ciebie. Rozmawiamy o Twoim biznesie, konkurencji, celach. Tego czasu trzeba, by zrobić dobrą stronę."
              },
              {
                step: "02",
                title: "Projektowanie i prototypy",
                description: "Pokazujemy early prototypes. Chcemy, abyś widział kierunek pracy i mógł zgłaszać uwagi. Bez niespodzianek na koniec."
              },
              {
                step: "03",
                title: "Tworzenie strony",
                description: "Kodujemy stronę. Równocześnie pracujemy nad SEO, piszemy treści optymalizowane pod wyszukiwarki, konfigurujemy hosting."
              },
              {
                step: "04",
                title: "Testy i poprawki",
                description: "Testujemy na różnych urządzeniach, przeglądarkach. Poprawiamy błędy. Wysyłamy Ci do recenzji."
              },
              {
                step: "05",
                title: "Uruchomienie",
                description: "Strona trafia live. Konfigurujemy Google Search Console, analytics, monitorujemy pierwsze wizyt."
              },
              {
                step: "06",
                title: "Wsparcie",
                description: "Po uruchomieniu jesteśmy do dyspozycji. Nowe funkcje, aktualizacje, optymalizacja - wszystko w pakiecie wsparcia."
              }
            ].map((item, idx) => (
              <FadeInView key={idx} delay={idx * 0.1}>
                <div className="flex gap-6 bg-white p-8 rounded-lg border border-slate-200">
                  <div className="flex-shrink-0">
                    <div className="text-3xl font-bold text-primary">{item.step}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Pytania i odpowiedzi</h2>

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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Gotowy na nową stronę dla Twojej firmy?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Zacznij od konsultacji. Wyjaśnimy, jak możemy pomóc Twojemu biznesowi w Wielkopolsce. Bez zobowiązań, bez presji.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition">
              Zaplanuj konsultację
            </button>
            <a
              href="tel:+48123456789"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Zadzwoń do nas
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
