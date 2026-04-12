import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Layers, AlertCircle, Zap, BarChart2, Wrench } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function BlogUXAudit() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Audyt UX strony internetowej" },
  ];

  const auditElements = [
    {
      element: "Nawigacja",
      checking: "Czy menu jest intuicyjne i łatwe do zrozumienia? Czy użytkownik łatwo znajduje szukane strony?",
      tools: "Hotjar, UserTesting, SessionCam",
      weight: "Krytyczna"
    },
    {
      element: "Szybkość ładowania",
      checking: "Ile czasu zajmuje załadowanie strony? Czy kod jest zoptymalizowany? Czy obrazy są skompresowane?",
      tools: "Google PageSpeed, GTmetrix, WebPageTest",
      weight: "Krytyczna"
    },
    {
      element: "Mobile responsiveness",
      checking: "Czy strona wygląda dobrze na telefonach i tabletach? Czy wszystkie elementy są klikalne?",
      tools: "Chrome DevTools, BrowserStack, Responsively",
      weight: "Krytyczna"
    },
    {
      element: "CTA i formularze",
      checking: "Czy przyciski są widoczne i wciągające? Czy formularze nie pytają o zbyt wiele danych? Czy komunikaty błędów są jasne?",
      tools: "Hotjar, Microsoft Clarity, Contentsquare",
      weight: "Wysoka"
    },
    {
      element: "Treści i czytelność",
      checking: "Czy tekst jest dobrze ustrukturyzowany? Czy czcionki są duże i czytelne? Czy kontrast kolorów wystarczający?",
      tools: "WAVE, Axe DevTools, Color Contrast Analyzer",
      weight: "Wysoka"
    },
    {
      element: "Trust signals",
      checking: "Czy widoczne są certyfikaty, opinie, numery kontaktów? Czy strona wygląda profesjonalnie i wiarygodnie?",
      tools: "Obserwacja wizualna, User Testing",
      weight: "Wysoka"
    },
    {
      element: "Checkout/konwersja",
      checking: "Ile kroków do zakupu? Czy proces jest skomplikowany? Czy można kupić bez rejestracji? Ile ludzi porzuca koszyk?",
      tools: "Google Analytics 4, Contentsquare, VWO",
      weight: "Krytyczna"
    },
  ];

  const freeTools = [
    { name: "Google Analytics 4", desc: "Śledzenie ruchu, konwersji, zachowań użytkowników, dane demograficzne" },
    { name: "Google PageSpeed", desc: "Analiza szybkości strony, sugestie optymalizacji dla mobile i desktop" },
    { name: "Hotjar Free", desc: "Nagrania sesji, heatmapy, formularze zwrotne — do 1000 sesji/miesiąc" },
    { name: "WAVE", desc: "Analiza dostępności (accessibility) — czy strona jest dostępna dla osób niepełnosprawnych" },
  ];

  const paidTools = [
    { name: "Contentsquare (Contentsquare)", desc: "Pełny analytics: ścieżki użytkownika, form analytics, session replay, od 500 EUR/miesiąc" },
    { name: "Microsoft Clarity", desc: "Darmowe nagrania sesji i heatmapy (lepsze od Hotjar free) — w pełni darmowe" },
    { name: "VWO", desc: "A/B testing, personalizacja, session recording — od ~100 USD/miesiąc" },
    { name: "UserTesting.com", desc: "Prawdziwi użytkownicy testują stronę na wideo — ~20 USD per test" },
  ];

  const stepsGuide = [
    {
      number: "1",
      title: "Zbierz dane z Google Analytics 4",
      description: "Sprawdź jakie strony mają najwyższy bounce rate (opuszczenie), czy użytkownicy dochodą do checkoutu, gdzie tracisz ludzi w funelu konwersji."
    },
    {
      number: "2",
      title: "Uruchom nagrania sesji (Hotjar, Clarity)",
      description: "Obserwuj jak rzeczywiści użytkownicy się poruszają. Gdzie klikają, gdzie się zatrzymują, co ich myli."
    },
    {
      number: "3",
      title: "Przetestuj szybkość strony",
      description: "Google PageSpeed, GTmetrix — sprawdź czy strona ładuje się szybko. Nawet 1 sekunda spowolnienia = mniej konwersji."
    },
    {
      number: "4",
      title: "Przetestuj responsywność",
      description: "Otwórz Chrome DevTools, przełącz na widok mobile. Kliknij każdy przycisk, wypełnij każdy formularz. Czy wszystko działa?"
    },
    {
      number: "5",
      title: "Czytaj mapy cieplne (heatmapy)",
      description: "Gdzie użytkownicy klikają najczęściej? Czy widzą CTA? Czy scrollują do końca strony czy rezygnują po kilku sekundach?"
    },
    {
      number: "6",
      title: "Sprawdź funnel konwersji",
      description: "Google Analytics: ile ludzi wchodzi na stronę > ile przechodzi do koszyka > ile kończy zakup. Gdzieś tracisz ludzi?"
    },
    {
      number: "7",
      title: "Zbierz feedback bezpośredni",
      description: "Dodaj formularz zwrotny na stronie (Hotjar, Typeform). Poproś odwiedzających co im przeszkadzało."
    },
    {
      number: "8",
      title: "Zrób A/B testy zmian",
      description: "Jeśli wiesz co zmienić — testuj. Zmień jeden element (przycisk, tekst, kolor), mierz wynik. Ewolucja przez eksperymenty."
    }
  ];

  const faqItems = [
    {
      question: "Co to jest audyt UX strony?",
      answer: "Audyt UX to systematyczna analiza doświadczenia użytkownika na stronie internetowej. Sprawdzamy każdy element: czy strona jest szybka, czy intuicyjna, czy dostępna, czy konwertuje. Celem jest znalezienie bottlenecków i możliwości optymalizacji."
    },
    {
      question: "Jak често powinienem robić audyt UX?",
      answer: "Po dużych zmianach na stronie (redesign, nowe sekcje) — zrób audyt. Dla stron e-commerce — co najmniej raz na 6 miesięcy. Dla stron z niskim conversion rate — audyt natychmiast. Dla dobrze działających stron — raz do roku wystarczy."
    },
    {
      question: "Jakie metryki są najważniejsze w audycie?",
      answer: "Bounce rate (% ludzi co odchodzą bez akcji), conversion rate (% ludzi co kupują/kontaktują), avg session duration (czas na stronie), click-through rate na CTA, mobile vs desktop performance, page load time, scroll depth (jak daleko scrollują), form completion rate."
    },
    {
      question: "Czy sam mogę zrobić audyt czy potrzebuję agencji?",
      answer: "Możesz zacząć sam — Google Analytics i Hotjar free dadzą dobre insights. Ale agencja (lub UX designer) zobaczy rzeczy których ty przegapisz: problemy z nawigacją, niezbyt oczywiste dla ciebie ale jasne dla świeżych oczu. Dobry audyt to połączenie danych (Analytics) + obserwacji (Hotjar) + testów (użytkownicy)."
    },
    {
      question: "Ile kosztuje audyt UX zrobiony przez agencję?",
      answer: "Audyt UX: 1500-5000 zł w zależności od rozmiaru strony. Full audyt z raportami i rekomendacjami: 3000-8000 zł. Testowanie użytkownika (UserTesting): 500-2000 zł. Redesign na bazie audytu: 5000-30 000+ zł."
    },
    {
      question: "Co zrobić z wynikami audytu?",
      answer: "Nie zrób wszystkiego naraz — to przytłaczające. Prioritizuj: Krytyczne (błędy na mobile, powolna strona, form bugs) → napraw natychmiast. Wysokie (nagłówki, CTA widoczność) → w ciągu miesiąca. Średnie (drobne redesignu, teksty) → w backlogu. Testuj zmiany jedną po drugiej, mierz wynik."
    },
    {
      question: "Czy audyt UX zwiększa conversion rate?",
      answer: "Tak. Badania pokazują: średnia strona ma conversion rate 2-3%. Po auditcie i wdrożeniu rekomendacji conversion rate rośnie do 5-10% (lub więcej dla e-commerce). To oznacza dla 10 000 odwiedzających: 200-300 konwersji vs 500-1000. ROI audytu to zwykle 5-10x koszt audytu w ciągu roku."
    },
    {
      question: "Jakie są najczęstsze problemy znalezione w auditach?",
      answer: "1. Strona ładuje się wolno (>3 sekundy) 2. Mobile nie działa prawidłowo 3. CTA nie jest widoczny/wciągający 4. Zbyt wiele kroków w checkout 5. Teksty są zbyt małe lub kontrast niewystarczający 6. Nawigacja jest myląca 7. Brak trust signals 8. Form fields pytają o zbyt wiele."
    }
  ];

  return (
    <>
      <SEOHead
        title="Audyt UX strony internetowej - co to jest i jak przeprowadzić? 2025"
        description="Audyt UX strony — co to jest, jak samodzielnie przeprowadzić, jakie narzędzia használować i co zrobić z wynikami. Poradnik pełny dla wskaźników konwersji."
        canonical="https://fotz.pl/blog/audyt-ux-strony"
      />
      <ArticleSchema
        title="Audyt UX strony internetowej - jak przeprowadzić audyt doświadczenia użytkownika"
        description="Co to jest audyt UX, jakie elementy sprawdzać, jakie narzędzia wykorzystać i jak interpretować wyniki w celu optymalizacji konwersji."
        datePublished="2025-03-15"
        dateModified="2025-04-12"
        url="https://fotz.pl/blog/audyt-ux-strony"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs.map(b => ({ name: b.label, url: b.href || "https://fotz.pl" }))} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div className="opacity-0 animate-fadeIn">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 12 min czytania</span>
                <span className="flex items-center gap-1"><Layers className="w-4 h-4" /> UX Design</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Audyt UX strony internetowej
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Jak samodzielnie zbadać doświadczenie użytkownika, znaleźć bottlenecki i zwiększyć conversion rate.
                Krok po kroku — od danych po działania.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Co to jest audyt UX?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Audyt UX (User Experience) to systematyczna analiza doświadczenia użytkownika na twojej stronie.
                Sprawdzamy każdy element: czy strona jest szybka, intuicyjna, dostępna, a najważniejsze — czy konwertuje.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Audyt to połączenie:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Danych</strong> — analytics, nagrania sesji, heatmapy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Testów</strong> — czy wszystko działa? Czy strona jest szybka?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Feedback od użytkowników</strong> — co im przeszkadzało?</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>Kiedy robić audyt?</strong> Po zmianach na stronie, gdy conversion rate spada, co 6-12 miesięcy dla e-commerce, lub zawsze gdy chcesz zwiększyć przychody.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Table */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Elementy audytu UX — co sprawdzamy?</h2>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <th className="px-4 py-3 text-left font-bold text-gray-900 text-sm">Element</th>
                      <th className="px-4 py-3 text-left font-bold text-gray-900 text-sm">Co sprawdzamy</th>
                      <th className="px-4 py-3 text-left font-bold text-gray-900 text-sm">Narzędzia</th>
                      <th className="px-4 py-3 text-left font-bold text-gray-900 text-sm">Waga</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditElements.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-4 font-semibold text-gray-900 text-sm">{item.element}</td>
                        <td className="px-4 py-4 text-gray-700 text-sm">{item.checking}</td>
                        <td className="px-4 py-4 text-gray-600 text-sm">{item.tools}</td>
                        <td className="px-4 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            item.weight === "Krytyczna" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {item.weight}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* How To */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Jak przeprowadzić audyt UX samodzielnie?</h2>

              <div className="space-y-6">
                {stepsGuide.map((step, idx) => (
                  <div key={idx} className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-400 text-gray-900 font-bold text-sm">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-700 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Tools Section */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Narzędzia do audytu UX</h2>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" /> Darmowe narzędzia
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {freeTools.map((tool, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-1">{tool.name}</h4>
                      <p className="text-gray-600 text-sm">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-yellow-400" /> Narzędzia premium
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {paidTools.map((tool, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-1">{tool.name}</h4>
                      <p className="text-gray-600 text-sm">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Results Section */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Wyniki audytu — co zrobić z wnioskami?</h2>

              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                  <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" /> Krytyczne (fix ASAP)
                  </h3>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Strona ładuje się ponad 3 sekundy</li>
                    <li>• Mobile nie działa prawidłowo (przyciski nie działają, elementy nachodzą na siebie)</li>
                    <li>• Błędy w checkout (ludzie nie mogą kupić)</li>
                    <li>• Bounce rate powyżej 70% na głównych stronach</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <h3 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                    <BarChart2 className="w-5 h-5" /> Wysokie (w ciągu 1-2 tygodni)
                  </h3>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• CTA nie jest wystarczająco widoczny</li>
                    <li>• Teksty są niejasne lub zbyt techniczne</li>
                    <li>• Użytkownicy nie scrollują do ważnych sekcji</li>
                    <li>• Conversion rate znacznie poniżej benchmarku branży</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Średnie (backlog na następny miesiąc)
                  </h3>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Drobne zmiany w designie</li>
                    <li>• Dodanie trust signals (certyfikaty, opinie)</li>
                    <li>• Optymalizacja nagłówków i opisów</li>
                    <li>• Poprawa struktury strony</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-5">
                <p className="text-gray-900 font-semibold mb-2">Ważna zasada:</p>
                <p className="text-gray-700 text-sm">
                  Nie zmieniaj wszystkiego na raz. Zmień jeden element (przycisk, tekst, kolorystykę), zmierz wynik w GA4.
                  Jeśli conversion rate rośnie — dobrze! Powtórz. Jeśli spada — wróć. To się nazywa iteracyjny UX design.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">FAQ — Audyt UX</h2>
              <FAQSchema items={faqItems} />
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg border border-gray-200">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6">
                      <span className="font-semibold text-gray-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 px-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        {/* CTA Box */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-gray-900 font-bold text-lg mb-2">Audyt UX — mały koszt, wielki efekt</p>
                <p className="text-gray-700 mb-4">
                  Audyt sam z siebie nie zwiększa konwersji — akcja na jego podstawie tak. Dlatego oferujemy audyty UX
                  połączone z konkretnymi rekomendacjami i wsparciem przy wdrożeniu zmian.
                </p>
                <Link to="/uslugi/audyt-strony-internetowej" className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
                  Zamów audyt UX strony <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </FadeInView>

        <ContactSection
          heading="Chcesz zwiększyć conversion rate swojej strony?"
          subheading="Audyt UX + implementacja zmian = średnio 2-3x więcej konwersji w ciągu 3 miesięcy."
        />
      </Layout>
    </>
  );
}
