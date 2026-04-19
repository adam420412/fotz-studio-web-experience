import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
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

export default function BlogProjektowanieStron() {
  const stagesData = [
    {
      stage: "Brief i wymagania",
      description: "Spotkanie z klientem, omówienie celów biznesowych, grupy docelowej, konkurencji i wizji projektu",
      time: "1-2 dni",
      responsible: "Project Manager + Klient",
    },
    {
      stage: "Analiza konkurencji",
      description: "Badanie podobnych stron w branży, identyfikacja trendów, best practices i elementów, które konwertują",
      time: "2-3 dni",
      responsible: "UX Designer",
    },
    {
      stage: "Architektura informacji",
      description: "Mapowanie struktury strony, definiowanie sekcji, przepływ użytkownika i hierarchia treści",
      time: "2-3 dni",
      responsible: "UX Designer",
    },
    {
      stage: "Wireframing",
      description: "Tworzenie szkiców bez kolorów i grafiki. Skupienie na rozmieszczeniu elementów i funkcjonalności",
      time: "3-5 dni",
      responsible: "UX Designer",
    },
    {
      stage: "Projekt graficzny",
      description: "Design w Figma: kolory, typografia, ikony, ilustracje. Zatwierdzanie przez klienta",
      time: "5-7 dni",
      responsible: "UI Designer",
    },
    {
      stage: "Kodowanie",
      description: "Implementacja w HTML, CSS, JavaScript. Responsive design, pixel-perfect zgodność z projektem",
      time: "7-10 dni",
      responsible: "Frontend Developer",
    },
    {
      stage: "Testowanie",
      description: "Testowanie na różnych urządzeniach, przeglądarkach, walidacja kodu, testy dostępności (A11y)",
      time: "2-3 dni",
      responsible: "QA Engineer + Developer",
    },
    {
      stage: "Wdrożenie",
      description: "Migracja na produkcję, konfiguracja DNS, SSL, Google Analytics, test finałowy",
      time: "1 dzień",
      responsible: "DevOps + Developer",
    },
    {
      stage: "Szkolenie",
      description: "Wdrożenie zespołu klienta, instrukcje obsługi CMS, dokumentacja, wsparcie przez 30 dni",
      time: "1-2 dni",
      responsible: "Project Manager + Support",
    },
  ];

  const costFactors = [
    {
      title: "Skomplikowanie funkcjonalne",
      description: "Proste wizytówki kosztują mniej niż sklepów e-commerce z systemem płatności. Liczba podstron, formularzy i integracji bezpośrednio wpływa na cenę.",
    },
    {
      title: "Grafika i branding",
      description: "Rebranding, autorskie ilustracje, fotografia produktów lub custom ikony znacznie zwiększają koszt. Materiały stock to oszczędność.",
    },
    {
      title: "Responsywność i urządzenia",
      description: "Strona musi działać na desktopach, tabletach i telefonach. Im więcej breakpointów, tym więcej pracy dla designera i developera.",
    },
    {
      title: "Optymalizacja SEO i wydajności",
      description: "Zaawansowana SEO (schema markup, optymalizacja obrazów, redukcja Time to First Byte) wymaga doświadczenia i czasu.",
    },
    {
      title: "Integracje i API",
      description: "Połączenie ze systemem CRM, mailmailer, analytics, social media czy payment gateway wymaga pracy developera backend.",
    },
    {
      title: "Wsparcie i pielęgnacja",
      description: "Pakiety powiększania, regularne backupy, monitoring, szybka pomoc techniczna - to koszty dodatkowe po uruchomieniu.",
    },
  ];

  const websiteTypes = [
    {
      type: "Wizytówka (1-3 strony)",
      description: "Proste strony - o firmie, kontakt, galeria. Bez e-commerce, bez formularzy dynamicznych.",
      cost: "2 000 - 5 000 PLN",
    },
    {
      type: "Blog / Portal informacyjny",
      description: "Struktura dla publikacji artykułów, kategorie, tagi, wyszukiwanie. CMS jak WordPress.",
      cost: "5 000 - 12 000 PLN",
    },
    {
      type: "Strona korporacyjna (5-10 stron)",
      description: "Usługi, portfolio, oferta. Formularze kontaktowe, integracja z Calendly, live chat.",
      cost: "10 000 - 25 000 PLN",
    },
    {
      type: "Sklep e-commerce (do 100 produktów)",
      description: "System płatności, koszyk, konto użytkownika, zarządzanie produktami, integracja z Shopify lub WooCommerce.",
      cost: "15 000 - 40 000 PLN",
    },
    {
      type: "Platforma SaaS / Aplikacja webowa",
      description: "Zaawansowana funkcjonalność, baza danych, system autoryzacji, API, dashboard. Wymaga backend developera.",
      cost: "40 000 - 150 000+ PLN",
    },
  ];

  const selectionCriteria = [
    {
      title: "Portfolio i doświadczenie w Twojej branży",
      description: "Szukaj agencji, która ma realizacje dla podobnych firm. Agent, który zrobił 50 sklepów e-commerce, zrobi to lepiej niż front-end developer.",
    },
    {
      title: "Proces pracy i komunikacja",
      description: "Czy masz dostęp do regularnych aktualizacji? Czy projektant wyjaśnia każdą decyzję? Czy odpowiadają szybko na pytania?",
    },
    {
      title: "Gwarancja i wsparcie po uruchomieniu",
      description: "Czy oferują wsparcie przez 30-90 dni? Czy potem są dostępni za dodatkową opłatą? Czy naprawiają błędy za darmo w gwarancji?",
    },
    {
      title: "Technologia i SEO",
      description: "Czy strona będzie na React, Vue czy statycznym HTML? Czy włączą SEO od początku? Czy będą optymalizować prędkość ładowania?",
    },
    {
      title: "Cena vs. wartość",
      description: "Najtańsza opcja zwykle oznacza template i mało indywidualności. Szukaj złotego środka - agencji, która daje dobre efekty w rozsądnej cenie.",
    },
  ];

  const faqItems = [
    {
      question: "Ile czasu zajmuje projektowanie strony internetowej?",
      answer: "Dla średniej strony korporacyjnej: 6-10 tygodni. Proste wizytówki: 2-3 tygodnie. Zaawansowane platformy: 3-6 miesięcy. Wszystko zależy od złożoności, liczby iteracji i szybkości zatwierdzania przez klienta.",
    },
    {
      question: "Czy mogę mieć dostęp do plików projektu i kodu?",
      answer: "Zdecydowanie tak. Najlepsze agencje przekazują Ci pełne prawa do kodu, projektów Figma i całej dokumentacji. To gwarantuje, że zawsze możesz pracować z kimś innym, jeśli chcesz zmienić agencję.",
    },
    {
      question: "Czy strona będzie responsywna na mobilach?",
      answer: "Tak - każda profesjonalna strona musi być responsywna. Ponad 60% ruchu pochodzi z telefonów. Projektujemy zawsze mobile-first: najpierw wersja na telefon, potem skalujemy na tablet i desktop.",
    },
    {
      question: "Czy mogę mieć wiele wersji designu do wyboru?",
      answer: "Zazwyczaj są 1-2 kierunki designu. Po wyborze preferowanego kierunku robisz iteracje i refinement. Liczba zmian zwykle jest wliczona w koszt - ale sprawdź w umowie ile rund poprawek masz.",
    },
    {
      question: "Czy design będzie zoptymalizowany pod SEO?",
      answer: "Powinien być. Dobry design to zarówno estetyka, jak i SEO. Semantyczna struktura HTML, szybkość ładowania, mobile-friendly layout, czytelne nagłówki - to wszystko wpływa na ranking w Google.",
    },
    {
      question: "Ile kosztuje zmiana strony po jej uruchomieniu?",
      answer: "Zależy od zakresu. Zmiana tekstu: 200-500 PLN. Przeprojektowanie całej sekcji: 2000-5000 PLN. Dodanie nowej funkcjonalności: 3000-10000+ PLN. Zawsze negocjuj pakiet wsparcia przed uruchomieniem.",
    },
    {
      question: "Co zrobić, jeśli strona jest wolna po uruchomieniu?",
      answer: "Najpierw audit wydajności w Google PageSpeed Insights. Zwykle problem to: duże, nieopimalizowane obrazy, zbyt wiele JS, brak cache'owania. Dobra agencja powinna to naprawić w ramach gwarancji.",
    },
    {
      question: "Czy mogę sam zarządzać treścią po uruchomieniu?",
      answer: "Tak, jeśli strona ma CMS (WordPress, Webflow, custom dashboard). Agencja powinna Cię wdrożyć i dać instrukcje. Bez CMS - musisz zawsze prosić developera o zmiany.",
    },
  ];

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Projektowanie stron internetowych" },
  ];

  return (
    <>
      <SEOHead
        title="Projektowanie stron internetowych - co musisz wiedzieć przed…"
        description="Pełny poradnik projektowania stron: etapy, koszty, jak wybrać agencję. Praktyczne porady dla każdego przedsiębiorcy szukającego profesjonalnej strony."
        canonical="https://fotz.pl/blog/projektowanie-stron-internetowych-poradnik"

        keywords="Projektowanie stron internetowych - co musisz wiedzieć przed zamówieniem? 2025, Projektowanie stron internetowych - co musisz wiedzieć przed zamówieniem? 2025 co to jest, Projektowanie stron internetowych - co musisz wiedzieć przed zamówieniem? 2025 jak działa, Projektowanie stron internetowych - co musisz wiedzieć przed zamówieniem? 2025 definicja, Projektowanie stron internetowych - co musisz wiedzieć przed zamówieniem? 2025 przykłady, Projektowanie stron internetowych - co musisz wiedzieć przed zamówieniem? 2025 poradnik, Projektowanie stron internetowych - co musisz wiedzieć przed zamówieniem? 2025 przewodnik"
      />
      <ArticleSchema
        headline="Projektowanie stron internetowych - co musisz wiedzieć przed zamówieniem? 2025"
        description="Pełny poradnik: etapy projektowania, czynniki wpływające na koszt, typy stron i jak wybrać agencję"
        image="https://fotz.pl/og-blog-design.jpg"
        datePublished="2025-04-12"
        dateModified="2025-04-12"
        author="Fotz Studio"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Projektowanie stron internetowych — Pełny poradnik 2025
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Chcesz wiedzieć, jak powstaje profesjonalna strona? Co wpływa na koszt? Jak wybrać agencję?
                Przeczytaj praktyczny poradnik dla każdego przedsiębiorcy szukającego nowej strony.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="text-gray-400 text-sm">
                  <strong className="text-yellow-400">Czas czytania:</strong> 8-10 minut
                </div>
                <div className="text-gray-400 text-sm">
                  <strong className="text-yellow-400">Zaktualizowano:</strong> Kwiecień 2025
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Co to znaczy "zaprojektować stronę" w 2025?
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Projektowanie stron internetowych to nie tylko estetyka. To nauka o tym, jak ludzie zachowują się na Twojej stronie,
                  co ich blokuje, gdzie się gubią i co ich do konwersji prowadzi.
                </p>
                <p>
                  W 2025 profesjonalne projektowanie obejmuje:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>UX Design</strong> — badanie użytkowników, wireframing, testowanie użyteczności</li>
                  <li><strong>UI Design</strong> — kolory, typografia, ikony, mikro-interakcje, animacje</li>
                  <li><strong>Web Development</strong> — kodowanie, responsywność, SEO, wydajność</li>
                  <li><strong>Accessibility (A11y)</strong> — strona dostępna dla osób niepełnosprawnych (WCAG 2.1 AA minimum)</li>
                  <li><strong>Mobile-First</strong> — zaczyna się od wersji mobilnej, potem skalowanie</li>
                </ul>
                <p>
                  To już nie wystarczy mieć ładną stronę. Musi być szybka, bezpieczna, dostępna i przede wszystkim konwertować.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Stages Table */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Etapy projektowania strony internetowej
              </h2>
              <p className="text-gray-600 mb-12 text-lg">
                Od ersten rozmowy do uruchomienia: każdy etap ma swoją rolę i duration.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Etap</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Opis</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-bold">Czas</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Kto odpowiada</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {stagesData.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                          {item.stage}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          {item.description}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-gray-700 whitespace-nowrap">
                          {item.time}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          {item.responsible}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-semibold mb-2">Razem: 6-10 tygodni dla średnich projektów</p>
                    <p className="text-gray-700 text-sm">
                      Proste wizytówki: 2-3 tygodnie. Zaawansowane platformy: 3-6 miesięcy.
                      Większość czasu to czekanie na zatwierdzenie od klienta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Cost Factors */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Co wpływa na koszt projektu?
              </h2>
              <p className="text-gray-600 mb-12 text-lg">
                Sześć głównych czynników, które znacząco wpływają na final cenę projektowania strony.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {costFactors.map((factor, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                    <div className="text-2xl font-bold text-yellow-400 mb-3">{idx + 1}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{factor.title}</h3>
                    <p className="text-gray-700">{factor.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Types and Costs Table */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Typy stron a orientacyjny koszt
              </h2>
              <p className="text-gray-600 mb-12 text-lg">
                Ceny w Polsce 2025. Zależy od agencji, doświadczenia i zakresu pracy.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Typ strony</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Opis</th>
                      <th className="border border-gray-300 px-4 py-3 text-right font-bold">Koszt</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {websiteTypes.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                          {item.type}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          {item.description}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-right font-bold text-yellow-600 whitespace-nowrap">
                          {item.cost}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">Uwagi na temat cen:</p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span>Prezentowane ceny to rynek warszawski i dużych miast. W mniejszych miastach może być taniej.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span>Agencje premium mogą być droższe nawet o 50%. Freelancerzy zwykle taniej, ale mniej doświadczeni.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span>Zawsze pytaj o co jest wliczone: hosting, domene, wsparcie, backup, monitoring?</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Selection Criteria */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Jak wybrać projektanta lub agencję?
              </h2>
              <p className="text-gray-600 mb-12 text-lg">
                5 praktycznych kryteriów, które warto sprawdzić przed podpisaniem umowy.
              </p>

              <div className="space-y-6">
                {selectionCriteria.map((criterion, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-400 text-gray-900 font-bold text-lg">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{criterion.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{criterion.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-gray-950 text-white rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Czarna lista - czego unikać:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-xl">✕</span>
                    <span>Agencje, które nie mają portfolio lub nie mogą pokazać realizacji</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-xl">✕</span>
                    <span>Projekty, które to Twój pierwszy projekt - duże ryzyko błędów</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-xl">✕</span>
                    <span>Agencje z bardzo niską ceną - zwykle template, niskie kvalitet, wsparcie zerowe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-xl">✕</span>
                    <span>Brak dokumentacji, umowy lub jasnego zakresu pracy. To droga do chaosu.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                Odpowiadamy na Twoje pytania
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Najczęstsze pytania o projektowanie stron
              </p>

              <FAQSchema items={faqItems} />

              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold text-gray-900">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        {/* Related Articles */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Powiązane artykuły i usługi</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  to="/uslugi/projektowanie-stron-internetowych"
                  className="block p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-yellow-400 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-gray-900 mb-2">Usługa: Projektowanie stron</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Dowiedz się jak dokładnie pracujemy nad każdym projektem w naszej agencji
                  </p>
                  <span className="text-yellow-600 font-semibold text-sm flex items-center gap-2">
                    Poznaj usługę <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  to="/realizacje"
                  className="block p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-yellow-400 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-gray-900 mb-2">Nasze realizacje</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Obejrzyj rzeczywiste projekty, które stworzyliśmy dla firm z Polski
                  </p>
                  <span className="text-yellow-600 font-semibold text-sm flex items-center gap-2">
                    Obejrzyj portfolio <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* CTA */}
        <ContactSection
          heading="Szukasz agencji do projektowania Twojej strony?"
          subheading="Poznamy Twoje potrzeby i zaproponujemy strategie. Bez zobowiązań, bez ciśnienia sprzedażowego."
        />
      </Layout>
    </>
  );
}
