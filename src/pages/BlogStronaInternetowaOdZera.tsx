import { motion } from "framer-motion";
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Share2, CheckCircle2, ArrowRight } from 'lucide-react';
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

export default function BlogStronaInternetowaOdZera() {
  const faqItems = [
    {
      question: "Czy strona dla małej firmy musi być skomplikowana?",
      answer: "Nie. Strona dla małej firmy powinna być prosta, czytelna i łatwa do zarządzania. Skomplikowanie wcale nie oznacza lepszej konwersji. W rzeczywistości proste strony działają lepiej - szybciej się ładują, łatwiej je aktualizować, a klienci szybciej znajdują to, czego szukają."
    },
    {
      question: "Czy mogę robić stronę sam zamiast wynajmować agencję?",
      answer: "Możesz, ale warto zastanowić się nad swoim czasem. Jeśli jesteś przedsiębiorcą zajętym rozwojem biznesu, lepiej inwestować w profesjonalną stronę niż spędzać godziny na nauce WordPress'a. Jednak jeśli masz czas, konstruktory online jak Wix czy Squarespace mogą być OK dla początkujących."
    },
    {
      question: "Ile czasu zajmuje zrobienie strony dla małej firmy?",
      answer: "Zazwyczaj 2-4 tygodnie dla prostej strony firmowej. Zależy od złożoności, liczby podstron, ilości treści do napisania. Strony dla małych firm nie muszą być długie - często 5-8 solidnych podstron wystarczy, żeby pokazać biznes."
    },
    {
      question: "Co jeśli zmienię zdanie na temat kolorów lub struktury?",
      answer: "To normalne. W trakcie realizacji projektu zawsze omawiamy design. Pokazujemy prototypy, zbieramy feedback, wdrażamy zmiany. Nie budujemy stron w próżni - Ty jesteś decyzjodawcą."
    },
    {
      question: "Czy będę w stanie edytować treść sami później?",
      answer: "Tak, jeśli wybierzesz WordPress'a z sensownym systemem zarządzania treścią. Nauczymy Cię, jak dodawać posty na blogu, zmieniać tekst, wgrywać zdjęcia. Dla bardziej zaawansowanych zmian zawsze możesz liczyć na naszą pomoc."
    },
    {
      question: "Jaki jest koszt utrzymania strony po uruchomieniu?",
      answer: "Główne koszty to hosting (od 30 zł/miesiąc), domena (60 zł/rok) i wsparcie techniczne (opcjonalnie). Jeśli chcesz, żebyśmy monitorowali stronę, uaktualniali pluginy i dbali o bezpieczeństwo - to zazwyczaj 100-200 zł/miesiąc."
    },
    {
      question: "Czy strona będzie działać dobrze na telefonach?",
      answer: "Oczywiście. Wszystkie nowoczesne strony muszą być responsywne - tzn. dostosowywać się do rozmiaru ekranu. W 2025 roku większość ruchu pochodzi z urządzeń mobilnych, więc to absolutny standard."
    }
  ];

  const whatWebsiteNeeds = [
    {
      title: "1. Home page (strona główna)",
      description: "Krótka prezentacja, co robisz i dla kogo. Ta strona ma być przejrzysta - odwiedzający powinni w 10 sekund zrozumieć, czym się zajmujesz."
    },
    {
      title: "2. Usługi / Oferta",
      description: "Szczegółowy opis tego, co oferujesz. Nie pisz encyklopedii - bądź konkretny. Daj przykłady, ceny, konkretne efekty."
    },
    {
      title: "3. O nas",
      description: "Krótka historia, kim jesteś, dlaczego robisz to, co robisz. Ludzie kupują od ludzi - niech wiedzą, z kim mają do czynienia."
    },
    {
      title: "4. Portfolio / Case studies",
      description: "Pokaż swoje prace, projekty, realizacje. To buduje zaufanie. Bez portfolio trudniej przekonać nowych klientów."
    },
    {
      title: "5. Blog / News",
      description: "Artykuły na temat Twojej branży, poradniki, FAQ. To pokazuje kompetencje i pomaga w SEO - Google lubi strony z regularnie aktualizowaną treścią."
    },
    {
      title: "6. Formularz kontaktowy",
      description: "Sposób dla klienta, żeby się z Tobą skontaktować. Powinien być prosty - imię, email, wiadomość. Tyle wystarczy."
    },
    {
      title: "7. Certyfikaty / Nagrody",
      description: "Jeśli masz certyfikaty, wyróżnienia, rekomendacje - pokaż je. To zwiększa wiarygodność."
    },
    {
      title: "8. Testimoniale / Opinie",
      description: "Cytat od zadowolonego klienta to warte więcej niż tysiące słów. Postaraj się zdobyć parę opinii od swoich obecnych klientów."
    }
  ];

  const platformComparison = [
    {
      name: "Wix / Squarespace",
      pros: ["Szybkie uruchomienie (dni)", "Gotowe szablony", "Brak umiejętności technicznych", "Niski koszt"],
      cons: ["Mało elastyczności", "Wyglądają jak szablony", "Trudno przenieść się gdzie indziej", "Słabe SEO"]
    },
    {
      name: "WordPress",
      pros: ["Duża elastyczność", "Dobrze dla SEO", "Duża społeczność", "Wiele pluginów"],
      cons: ["Wymaga wiedzy technicznej", "Dłuższe wdrażanie", "Trzeba płacić za hosting", "Musisz dbać o bezpieczeństwo"]
    },
    {
      name: "Agencja interaktywna",
      pros: ["Projektanta strona od zera", "Wysoka jakość", "Pełne wsparcie", "Nowoczesne technologie"],
      cons: ["Większy koszt", "Dłuższy proces", "Zależność od agencji"]
    }
  ];

  const commonMistakes = [
    {
      title: "Brak SEO",
      description: "Strona stoi gdzieś w ciemności internetu. Nikt jej nie znajduje, bo nikt o niej nie wie. Optymalizacja SEO od początku to inwestycja, która się opłaca."
    },
    {
      title: "Zbyt wiele tekstu",
      description: "Strona czyta się jak doktorat. Ludzie na internecie nie czytają - skanują. Tekst powinien być krótki, podzielony na akapity, z nagłówkami."
    },
    {
      title: "Zwłoka w aktualizacji",
      description: "Strona stara się 2 lata bez zmian. Google daje rankingowe punkty za świeżość treści. Stara strona = mniejsza widoczność."
    },
    {
      title: "Niewystarczające informacje kontaktowe",
      description: "Numer telefonu gdzieś w stopce. Klienci nie wiedzą, jak się z Tobą skontaktować. Kontakt powinien być łatwy do znalezienia."
    },
    {
      title: "Strona nie działa na mobilnych",
      description: "W 2025 roku to czysty horror. Większość ruchu pochodzi z telefonów. Jeśli strona źle wygląda na mobile - stracisz klientów."
    }
  ];

  return (
    <>
      <SEOHead
        title="Strona internetowa dla małej firmy - poradnik 2025 | fotz.pl"
        description="Pełny poradnik jak zrobić stronę dla małej firmy. Co musi mieć strona? Ile kosztuje? WordPress vs Wix. 5 najczęstszych błędów. Praktyczne porady."
        canonical="https://fotz.pl/blog/strona-internetowa-dla-malej-firmy"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Strona internetowa dla małej firmy - poradnik 2025",
          "description": "Pełny poradnik jak zrobić stronę dla małej firmy. Co musi mieć strona? Ile kosztuje? WordPress vs Wix. 5 najczęstszych błędów.",
          "image": "https://fotz.pl/og-blog-malafirma.jpg",
          "datePublished": "2025-02-15T09:00:00Z",
          "dateModified": "2025-04-01T14:30:00Z",
          "author": {
            "@type": "Organization",
            "name": "fotz.pl"
          },
          "publisher": {
            "@type": "Organization",
            "name": "fotz.pl",
            "logo": {
              "@type": "ImageObject",
              "url": "https://fotz.pl/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://fotz.pl/blog/strona-internetowa-dla-malej-firmy"
          }
        }}

        keywords="Strona internetowa dla małej firmy - poradnik 2025, Strona internetowa dla małej firmy - poradnik 2025 co to jest, Strona internetowa dla małej firmy - poradnik 2025 jak działa, Strona internetowa dla małej firmy - poradnik 2025 definicja, Strona internetowa dla małej firmy - poradnik 2025 przykłady, Strona internetowa dla małej firmy - poradnik 2025 poradnik, Strona internetowa dla małej firmy - poradnik 2025 przewodnik"
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
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition mb-6"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Wróć do bloga
            </Link>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Strona Internetowa dla Małej Firmy 2025
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Kompletny poradnik jak zrobić stronę, która będzie działać. Co powinna zawierać? Na jakiej platformie? Ile to kosztuje? 5 błędów, których unikać.
            </p>

            <div className="flex gap-4 flex-wrap text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>15.02.2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>10 min czytania</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <FadeInView>
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Dlaczego małej firmie potrzebna jest strona internetowa?</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Możemy to powiedzieć sto razy, ale to prawda: w 2025 roku firmy bez stron internetowych tracą klientów. Ludzie szukają Ciebie na Google'u zanim zadzwonią. Jeśli Cię tam nie ma, dzwonią do konkurencji.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Strona nie musi być skomplikowana czy droga. Musi być profesjonalna, czytelna, mobilna i wygodna. To wszystko.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  W tym poradniku pokażemy, co powinna zawierać strona małej firmy, jakie opcje masz do wyboru, ile to kosztuje i jakie błędy trzeba unikać.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Co powinna mieć strona dla małej firmy?</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Strona nie musi być dużą encyklopedią. Te 8 elementów wystarczy, aby być solidnym punktem wyjścia:
                </p>

                <div className="space-y-4">
                  {whatWebsiteNeeds.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">WordPress vs Wix vs Agencja - porównanie</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Masz trzy główne opcje. Każda ma plusy i minusy.
                </p>

                <div className="space-y-8">
                  {platformComparison.map((platform, idx) => (
                    <div key={idx} className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                      <h3 className="text-2xl font-bold mb-6 text-primary">{platform.name}</h3>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4 text-green-700">Plusy</h4>
                          <ul className="space-y-2">
                            {platform.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-700">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-4 text-red-700">Minusy</h4>
                          <ul className="space-y-2">
                            {platform.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-700">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-primary/10 p-8 rounded-lg border border-primary/20">
                  <p className="text-lg text-slate-800">
                    <strong>Nasz advise:</strong> Jeśli chcesz szybko i tanio - Wix/Squarespace. Jeśli chcesz coś poważnego i planujesz skalować biznes - WordPress lub agencja. Jeśli chcesz się nie przejmować niczym technicznym i zainwestować w jakość - agencja.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Ile kosztuje strona dla małej firmy?</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-lg mb-2">Wix / Squarespace</h3>
                    <p className="text-2xl text-primary font-bold mb-2">20-50 zł/miesiąc</p>
                    <p className="text-slate-600">Wymaga pracy własnej lub zapłaty za customization.</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-lg mb-2">WordPress (sam DIY)</h3>
                    <p className="text-2xl text-primary font-bold mb-2">30-100 zł/miesiąc + Twój czas</p>
                    <p className="text-slate-600">Hosting + domena. Musisz znać się na rzeczy lub wynająć kogoś do wdrażania.</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-lg mb-2">WordPress (agencja robi)</h3>
                    <p className="text-2xl text-primary font-bold mb-2">1500-5000 zł jednorazowo + 100-200 zł/miesiąc</p>
                    <p className="text-slate-600">Agencja projektuje i wdraża. Po tym Ty lub agencja dbają o wsparcie.</p>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <h3 className="font-bold text-lg mb-2 text-primary">Custom strona (agencja)</h3>
                    <p className="text-2xl text-primary font-bold mb-2">3000-10000+ zł</p>
                    <p className="text-slate-700">Strona napisana od zera, projektowana specjalnie dla Ciebie. Najwyższa jakość, najdłuższy czas realizacji.</p>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Co wybrać? Zależy od Twojego budżetu, czasu i ambicji. Mała firma do sklepiku internetowego - Wix/Squarespace może wystarczyć. Mała firma, która chce rosnąć i dbać o SEO - WordPress z pomocą agencji. Firma, która chce się nie przejmować niczym technicznym - custom strona.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">5 najczęstszych błędów małych firm</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Widzieliśmy wiele stron dla małych firm. Oto błędy, które powtarzają się najczęściej:
                </p>

                <div className="space-y-6">
                  {commonMistakes.map((mistake, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-lg border-l-4 border-red-500">
                      <h3 className="text-xl font-bold mb-3">{idx + 1}. {mistake.title}</h3>
                      <p className="text-slate-600">{mistake.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Porady: jak napisać treść dla strony</h2>
                
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    <strong>1. Bądź konkretny:</strong> Nie pisz że "mamy najlepszych specjalistów". Napisz "mamy 15 lat doświadczenia w elektroinstalacji". Konkret buduje zaufanie.
                  </p>
                  <p>
                    <strong>2. Pisz dla człowieka, nie dla Google'a:</strong> SEO jest ważne, ale czytaną treść powinno być dla klienta, nie dla algorytmu. Jeśli tekst jest sztuczny - nikt go nie przeczyta.
                  </p>
                  <p>
                    <strong>3. Pokaż efekty, nie proces:</strong> Klienta nie interesuje jak robisz swoją pracę. Interesuje go, co dostanie. "Instalujemy systemy grzewcze" vs "Oszczędzisz do 30% na rachunkach za ogrzewanie".
                  </p>
                  <p>
                    <strong>4. Używaj nagłówków i przerw:</strong> Człowiek czytając internet skanuje treść. Jeśli się nie przerwiesz - przeskoczy. Używaj nagłówków H2, H3, krótkich akapitów.
                  </p>
                  <p>
                    <strong>5. Dodaj opinie klientów:</strong> Cytat od zadowolonego klienta warte więcej niż tysiące słów o sobie. Poproś parę osób o opinię.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Jak zacząć?</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Szybki checklist:
                </p>

                <div className="space-y-3">
                  {[
                    "Wybrać platformę (Wix/WordPress/agencja)",
                    "Zarezerwować domenę (np. twojanazwa.pl)",
                    "Zbierać materiały - teksty, zdjęcia, logotyp",
                    "Napisać podstawowe strony - home, usługi, o nas, kontakt",
                    "Dodać formularz kontaktowy",
                    "Skonfigurować Google Search Console",
                    "Uruchomić i monitorować",
                    "Regularnie aktualizować treść (co najmniej co miesiąc)"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12 bg-primary/10 p-8 rounded-lg border border-primary/20">
                <h2 className="text-3xl font-bold mb-6">Potrzebujesz pomocy?</h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Jeśli czytając ten poradnik czujesz się przytłoczony wszystkimi opcjami - to normalne. Tworzenie stron to czasami złożone zagadnienie.
                </p>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  Możemy Ci w tym pomóc. Mamy pakiety dla małych firm od 499 zł. Możemy zrobić stronę wizytówkę, bardziej rozbudowaną stronę firmową albo nawet mały sklep. W każdym pakiecie jest SEO od dnia 1, support i możliwość aktualizacji.
                </p>
                <Link
                  to="/cennik-tworzenia-stron"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                >
                  Sprawdź nasze pakiety
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </section>
            </FadeInView>
          </div>
        </div>
      </article>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Pytania od małych firm</h2>

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

      {/* Related Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Powiązane artykuły</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInView delay={0}>
              <Link
                to="/blog/seo-dla-malych-firm"
                className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-primary transition group"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition">
                  SEO dla małych firm
                </h3>
                <p className="text-slate-600 mb-4">
                  Jak zrobić, żeby Twoja strona była widoczna w Google'u? Praktyczne porady dla początkujących.
                </p>
                <span className="text-primary font-semibold group-hover:gap-2 transition">
                  Czytaj więcej →
                </span>
              </Link>
            </FadeInView>

            <FadeInView delay={0.1}>
              <Link
                to="/blog"
                className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-primary transition group"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition">
                  E-commerce dla małego biznesu
                </h3>
                <p className="text-slate-600 mb-4">
                  Kiedy warto uruchamiać sklep online? Ile to kosztuje? Praktyczne porady.
                </p>
                <span className="text-primary font-semibold group-hover:gap-2 transition">
                  Czytaj więcej →
                </span>
              </Link>
            </FadeInView>

            <FadeInView delay={0.2}>
              <Link
                to="/cennik-tworzenia-stron"
                className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-primary transition group"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition">
                  Cennik tworzenia stron
                </h3>
                <p className="text-slate-600 mb-4">
                  Ile kosztuje strona internetowa? Sprawdź nasze pakiety i addony.
                </p>
                <span className="text-primary font-semibold group-hover:gap-2 transition">
                  Sprawdź →
                </span>
              </Link>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Gotowy na nową stronę dla Twojej firmy?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Zapraszamy na bezpłatną konsultację. Opowiemy Ci, jak możemy pomóc Twojemu biznesowi.
          </p>
          
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition inline-flex items-center gap-2">
            Zaplanuj konsultację
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
