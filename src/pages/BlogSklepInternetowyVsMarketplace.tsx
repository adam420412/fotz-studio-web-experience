import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, ShoppingBag, AlertCircle, TrendingUp, Users, Lock } from "lucide-react";
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

export default function SklepInternetowyVsMarketplace() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Sklep internetowy vs Marketplace" },
  ];

  const comparisonData = [
    {
      category: "Koszt wdrożenia",
      sklep: "5 000 - 40 000 zł",
      marketplace: "0 - 1 000 zł",
    },
    {
      category: "Koszty miesięczne",
      sklep: "200 - 1 000 zł (hosting, domenę, SEO)",
      marketplace: "0 zł (czesto bez sta łych opłat)",
    },
    {
      category: "Prowizje od sprzedaży",
      sklep: "1-2% (płatności) + 0,30 zł/transakcja",
      marketplace: "5-15% od każdej sprzedaży",
    },
    {
      category: "Kontrola marki",
      sklep: "100% kontrola (logo, kolory, treści)",
      marketplace: "Ograniczona (szablony, wytyczne)",
    },
    {
      category: "SEO i widoczność",
      sklep: "Ponad 6 miesięcy wysiłku",
      marketplace: "Natychmiast (miliony użytkowników)",
    },
    {
      category: "Niezależność",
      sklep: "Pełna niezależność od platform",
      marketplace: "Zależy od polityki platformy",
    },
    {
      category: "Czas do pierwszej sprzedaży",
      sklep: "4-8 tygodni (tworzenie + marketing)",
      marketplace: "Kilka dni (publikacja + zdjęcia)",
    },
    {
      category: "Skalowanie i rozbudowa",
      sklep: "Nie ma limitów (nieograniczony asortyment)",
      marketplace: "Ograniczenia (kategorie, funkcje)",
    },
  ];

  const breakdownCosts = [
    { item: "Wdrożenie sklepu WooCommerce", cost: "8 000 - 15 000 zł" },
    { item: "Projekt graficzny i branding", cost: "3 000 - 8 000 zł" },
    { item: "Zdjęcia produktów (100 szt)", cost: "2 000 - 5 000 zł" },
    { item: "Hosting roczny", cost: "600 - 2 400 zł" },
    { item: "Domena roczna", cost: "80 - 150 zł" },
    { item: "Certyfikat SSL (Let's Encrypt)", cost: "0 zł (gratis)" },
    { item: "Integracja płatności", cost: "0 - 500 zł" },
    { item: "SEO startowe i konsultacja", cost: "2 000 - 5 000 zł" },
  ];

  const skillsNeeded = [
    { skill: "Zarządzanie produktami", own: "Sami", marketplace: "Sami" },
    { skill: "Obsługa klientów", own: "Sami 24/7", marketplace: "Sami + wsparcie platformy" },
    { skill: "Logistyka i wysyłka", own: "Sami lub outsourcing", marketplace: "Zależy od usługi" },
    { skill: "Marketing i SEO", own: "Wymagane (budżet 1000-10000 zł/mies.)", marketplace: "Opcjonalne" },
    { skill: "Zarządzanie techniczne", own: "Hosting, bezpieczeństwo, backupy", marketplace: "Platforma zajmuje się tym" },
    { skill: "Analityka i raporty", own: "Własne dashboardy", marketplace: "Wbudowane narzędzia" },
  ];

  const prosCons = [
    {
      type: "Sklep internetowy",
      icon: Lock,
      title: "Pełna kontrola",
      description: "100% marki, funkcji, wyglądu. Niezależność od zmian polityki platformy.",
      pros: [
        "Własna domena i branding",
        "Pełna kontrola nad UX/UI",
        "Brak prowizji od sprzedaży",
        "Nieograniczony asortyment",
        "Własne kanały komunikacji",
        "Długoterminowy asset biznesowy",
      ],
      cons: [
        "Wyższa inwestycja startowa",
        "Wymaga marketingu (SEO/Ads)",
        "Odpowiedzialność za bezpieczeństwo",
        "Dłuższy czas do rentowności",
      ],
    },
    {
      type: "Marketplace (Allegro, Amazon)",
      icon: TrendingUp,
      title: "Szybki start",
      description: "Natychmiast dostęp do milionów potencjalnych klientów bez marketingu.",
      pros: [
        "Niski lub zerowy koszt wdrożenia",
        "Natychmiastowa widoczność",
        "Miliony gotowych kupujących",
        "Platforma zajmuje się bezpieczeństwem",
        "Wbudowana infrastruktura płatności",
        "Minimalna techniczna wiedza",
      ],
      cons: [
        "Prowizje od 5-15% od każdej sprzedaży",
        "Ograniczona kontrola marki",
        "Zależność od polityki platformy",
        "Kompetycja na cenę (race to bottom)",
        "Brak danych o klientach",
        "Trudniej budować lojalność",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Czy warto mieć własny sklep internetowy czy sprzedawać na Allegro?",
      answer:
        "Zależy od celów i budżetu. Allegro: szybki start, miliony klientów, ale 5-15% prowizji. Własny sklep: wyższa inwestycja (5-15 tys zł), ale długoterminowy asset, większe marże (możesz się rozwijać bez limitów). Najlepsze: połączyć oba kanały - Allegro dla szybkiego cashflow + własny sklep dla długoterminowej strategii.",
    },
    {
      question: "Ile mogę zaoszczędzić tworząc sklep zamiast sprzedawać na Allegro?",
      answer:
        "Jeśli sprzedajesz 10 000 zł miesięcznie: Allegro kosztuje 500-1500 zł (5-15%), własny sklep kosztuje 200-300 zł (hosting + SEO). Roczna oszczędność: 2400-15600 zł. Przy 50 000 zł sprzedaży: oszczędzisz 24 000 - 156 000 zł rocznie. Po roku zwróci się inwestycja w wdrożenie (8-15 tys zł).",
    },
    {
      question: "Jak długo zajmuje budowa sklepu od zera do pierwszej sprzedaży?",
      answer:
        "Marketplaces: 3-7 dni (tworzenie konta + dodanie produktów). Własny sklep: 4-8 tygodni (projekt + wdrożenie + fotografia produktów). Pierwsza sprzedaż na marketplace: zazwyczaj w ciągu 1-2 tygodni. Pierwsza sprzedaż na własnym sklepie: 2-3 miesiące (jeśli inwestujesz w SEO/Ads).",
    },
    {
      question: "Czy marketplace jest bezpieczeńszy niż własny sklep?",
      answer:
        "Tak, marketplace (Allegro, Amazon) zajmuje się bezpieczeństwem, certyfikami SSL, ochroną danych. Własny sklep wymaga zarządzania bezpieczeństwem (backup, aktualizacje, monitorowanie). To jest zadanie dla profesjonalistów (hosting wsparty, monitorowanie 24/7). Koszt: 200-800 zł/miesiąc za opieka techniczna.",
    },
    {
      question: "Czy mogę zacząć na marketplace a potem przenieść się do własnego sklepu?",
      answer:
        "Tak, ale trzeba uważać na bazę klientów. Na marketplace'u nie masz dostępu do emails klientów (chyba że się zgodzą). Rekomendacja: zacząć na marketplace'u + jednocześnie budować własny sklep (3-4 miesiące). Potem promować własny sklep istniejącym klientom. Niektórzy sprzedawcy utrzymują oba kanały na stałe.",
    },
    {
      question: "Jakie są ukryte koszty własnego sklepu?",
      answer:
        "Hosting: 100-500 zł/mies. Opieka techniczna: 200-800 zł/mies. Marketing (SEO/Ads): 1000-10000+ zł/mies. Zdjęcia produktów: 2-5 tys zł. Integracje (CRM, email, logistyka): 500-2000 zł. Koszty procesowe: opakowanie, wysyłka, zwroty. Razem: 2000-15000 zł/mies. Na marketplace takie koszty nie istnieją (poza prowizjami).",
    },
    {
      question: "Czy mogę konkurować ceną na marketplace'u?",
      answer:
        "Trudno, bo wszyscy sprzedawcy znają ceny konkurencji. Dochodzi do 'race to bottom' - obniżki cen bez granic. Wyjście: specjalizacja, unikalne produkty, lepszy opis/fotografia. Na własnym sklepie lepiej - możesz budować markę, wartość, nie konkurować ceną.",
    },
    {
      question: "Jaki przychód jest uzasadniony własnym sklepem?",
      answer:
        "Minimalnie 5-10 000 zł przychodu miesięcznie, aby zwrócić się koszty (inwestycja 8-15 tys zł powinна się zwrócić w 1-2 lata). Przy 5000 zł sprzedaży marketplace kosztuje 250-750 zł (5-15%), własny sklep kosztuje 500-1000 zł. Przy 20 000+ zł przychodu własny sklep jest dużo bardziej opłacalny.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Sklep internetowy vs Marketplace - ile zaoszczędzisz? | fotz.pl"
        description="Porównanie własnego sklepu internetowego vs Allegro, Amazon. Koszty, prowizje, zyski. Która strategia jest bardziej opłacalna w 2025?"
        canonical="https://fotz.pl/blog/sklep-internetowy-vs-marketplace"

        keywords="Sklep internetowy vs Marketplace - ile zaoszczędzisz?, Sklep internetowy vs Marketplace - ile zaoszczędzisz? co to jest, Sklep internetowy vs Marketplace - ile zaoszczędzisz? jak działa, Sklep internetowy vs Marketplace - ile zaoszczędzisz? definicja, Sklep internetowy vs Marketplace - ile zaoszczędzisz? przykłady, Sklep internetowy vs Marketplace - ile zaoszczędzisz? poradnik, Sklep internetowy vs Marketplace - ile zaoszczędzisz? przewodnik"
      />
      <ArticleSchema
        title="Sklep internetowy vs Marketplace - który wybrać w 2025?"
        description="Pełne porównanie: własny e-commerce vs sprzedaż na Allegro/Amazon. Koszty, marże, czas do zysku. Analiza dla małych i średnich firm."
        datePublished="2025-04-12"
        dateModified="2025-04-12"
        url="https://fotz.pl/blog/sklep-internetowy-vs-marketplace"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-yellow-900 to-gray-900">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 text-sm text-yellow-300 mb-6">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 min czytania</span>
                <span className="flex items-center gap-1"><ShoppingBag className="w-4 h-4" /> E-commerce</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Sklep internetowy vs Marketplace
              </h1>
              <p className="text-xl text-yellow-100 leading-relaxed max-w-3xl mx-auto mb-8">
                Czy warto tworzyć własny sklep czy sprzedawać na Allegro? Kompletna analiza kosztów, marż, czasu do zysku i rentowności.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/uslugi/tworzenie-sklepow-internetowych">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6">
                    Wycena sklepu <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6">

            {/* Intro */}
            <FadeInView>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Dlaczego ta decyzja jest ważna?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Wybór między własnym sklepem a marketplace'm jest jedną z kluczowych decyzji przy starcie e-commerce. Różnica w kosztach może wynosić 2000-15000 zł miesięcznie, a w marżach nawet 5-15% od każdej sprzedaży.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Na marketplace'ach jak Allegro, OLX czy Amazon sprzedajesz szybciej, ale płacisz wysokie prowizje. Własny sklep wymaga inwestycji startowej, ale daje długoterminową niezależność i wyższe zyski.
                </p>
              </div>
            </FadeInView>

            {/* Main Comparison Table */}
            <FadeInView>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Porównanie: Sklep vs Marketplace</h2>
              <div className="overflow-x-auto mb-12 border border-gray-200 rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <th className="text-left p-4 font-bold text-gray-900">Aspekt</th>
                      <th className="text-left p-4 font-bold text-gray-900">Własny sklep</th>
                      <th className="text-left p-4 font-bold text-gray-900">Marketplace</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, idx) => (
                      <tr key={idx} className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                        <td className="p-4 font-semibold text-gray-900">{row.category}</td>
                        <td className="p-4 text-gray-700">{row.sklep}</td>
                        <td className="p-4 text-gray-700">{row.marketplace}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            {/* Pros and Cons */}
            <FadeInView>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Zalety i wady</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {prosCons.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-8 rounded-lg border-2 ${
                        item.type === "Sklep internetowy"
                          ? "border-yellow-400 bg-yellow-50"
                          : "border-blue-400 bg-blue-50"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent className={`w-6 h-6 ${
                          item.type === "Sklep internetowy" ? "text-yellow-600" : "text-blue-600"
                        }`} />
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-sm text-gray-700 mb-6">{item.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 text-green-700">Zalety:</h4>
                        <ul className="space-y-2">
                          {item.pros.map((pro, pi) => (
                            <li key={pi} className="flex items-start gap-2 text-gray-700 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 text-red-700">Wady:</h4>
                        <ul className="space-y-2">
                          {item.cons.map((con, ci) => (
                            <li key={ci} className="flex items-start gap-2 text-gray-700 text-sm">
                              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            {/* Cost Breakdown */}
            <FadeInView>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Koszty pierwszego roku - Składniki wdrożenia sklepu
              </h2>
              <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden mb-12">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="text-left p-4 font-bold text-gray-900">Element</th>
                      <th className="text-right p-4 font-bold text-gray-900">Koszt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {breakdownCosts.map((item, idx) => (
                      <tr key={idx} className={`border-t border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                        <td className="p-4 text-gray-700">{item.item}</td>
                        <td className="p-4 text-right font-semibold text-gray-900">{item.cost}</td>
                      </tr>
                    ))}
                    <tr className="bg-yellow-100 border-t-2 border-yellow-400">
                      <td className="p-4 font-bold text-gray-900">Razem (pierwszy rok)</td>
                      <td className="p-4 text-right font-bold text-yellow-900">16 680 - 37 580 zł</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeInView>

            {/* Skills Required */}
            <FadeInView>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Co musisz umieć robić?
              </h2>
              <div className="overflow-x-auto mb-12 border border-gray-200 rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <th className="text-left p-4 font-bold text-gray-900">Umiejętność</th>
                      <th className="text-left p-4 font-bold text-gray-900">Własny sklep</th>
                      <th className="text-left p-4 font-bold text-gray-900">Marketplace</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skillsNeeded.map((row, idx) => (
                      <tr key={idx} className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                        <td className="p-4 font-semibold text-gray-900">{row.skill}</td>
                        <td className="p-4 text-gray-700">{row.own}</td>
                        <td className="p-4 text-gray-700">{row.marketplace}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            {/* When to Choose */}
            <FadeInView>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Kiedy wybrać co?</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Wybierz MARKETPLACE jeśli:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Potrzebujesz szybkich sprzedaży w kilka dni</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Masz małą ilość produktów (do 100)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Nie masz budżetu na marketing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Chcesz testować model biznesu</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Szukasz szybkiego cashflow</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Wybierz WŁASNY SKLEP jeśli:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Chcesz budować markę (nie tylko sprzedawać)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Sprzedajesz 20 000+ zł miesięcznie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Masz zaplanowany budżet na SEO/Ads</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Chcesz niezależności od platform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Myślisz długoterminowo (3+ lata)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInView>

            {/* Hybrid Strategy */}
            <FadeInView>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hybrydowa strategia (najpopularniejsza)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Najlepsze rozwiązanie to połączenie obu kanałów:
                </p>
                <ol className="space-y-3 ml-4">
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 flex-shrink-0">1.</span>
                    <span className="text-gray-700"><strong>Miesiące 1-3:</strong> Start na marketplace'ach (Allegro, OLX) - szybkie sprzedaże, pierwszy cashflow</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 flex-shrink-0">2.</span>
                    <span className="text-gray-700"><strong>Równocześnie:</strong> Budowanie własnego sklepu (4-8 tygodni, wydatek 10-15 tys zł)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 flex-shrink-0">3.</span>
                    <span className="text-gray-700"><strong>Miesiące 4-6:</strong> Uruchomienie własnego sklepu + promowanie go istniejącym klientom</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 flex-shrink-0">4.</span>
                    <span className="text-gray-700"><strong>Po roku:</strong> Większość sprzedaży z własnego sklepu, marketplace jako kanał wspomagający</span>
                  </li>
                </ol>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Ta strategia minimalizuje ryzyko i pozwala na szybszy zwrot inwestycji.
                </p>
              </div>
            </FadeInView>

            {/* ROI Calculation */}
            <FadeInView>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Kalkulacja ROI</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Scenariusz: Sprzedaż 30 000 zł miesięcznie</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg text-red-600 mb-4">Marketplace (Allegro) - Koszt roczny:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex justify-between">
                        <span>Sprzedaż roczna:</span>
                        <span className="font-semibold">360 000 zł</span>
                      </li>
                      <li className="flex justify-between border-t pt-2">
                        <span>Prowizja (8% średnio):</span>
                        <span className="font-semibold text-red-600">- 28 800 zł/rok</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Opakowanie, wysyłka:</span>
                        <span className="font-semibold text-red-600">- 18 000 zł/rok</span>
                      </li>
                      <li className="flex justify-between border-t pt-2 bg-red-50 p-2 rounded">
                        <span className="font-bold">Razem koszty:</span>
                        <span className="font-bold text-red-600">46 800 zł/rok</span>
                      </li>
                      <li className="flex justify-between font-bold bg-red-100 p-2 rounded mt-2">
                        <span>Zysk netto (po kosztach):</span>
                        <span className="text-red-600">313 200 zł</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-green-600 mb-4">Własny sklep - Koszt roczny:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex justify-between">
                        <span>Sprzedaż roczna:</span>
                        <span className="font-semibold">360 000 zł</span>
                      </li>
                      <li className="flex justify-between border-t pt-2">
                        <span>Wdrożenie (rok 1):</span>
                        <span className="font-semibold text-orange-600">- 15 000 zł</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Hosting + domena:</span>
                        <span className="font-semibold text-orange-600">- 2 000 zł</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Prowizje płatności (1.5%):</span>
                        <span className="font-semibold text-orange-600">- 5 400 zł</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Marketing (3 000/mies):</span>
                        <span className="font-semibold text-orange-600">- 36 000 zł</span>
                      </li>
                      <li className="flex justify-between border-t pt-2 bg-green-50 p-2 rounded">
                        <span className="font-bold">Razem koszty:</span>
                        <span className="font-bold text-orange-600">58 400 zł/rok</span>
                      </li>
                      <li className="flex justify-between font-bold bg-green-100 p-2 rounded mt-2">
                        <span>Zysk netto (po kosztach):</span>
                        <span className="text-green-600">301 600 zł</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-bold text-lg text-blue-900 mb-2">Podsumowanie dla sprzedaży 30 000 zł/mies.:</h4>
                  <p className="text-gray-700 mb-2">
                    W roku 1 marketplace jest nieznacznie bardziej opłacalny (różnica: 11 600 zł), ale aż 28 800 zł rocznie idzie na prowizje Allegro.
                  </p>
                  <p className="text-gray-700 font-semibold text-green-600">
                    W roku 2+ własny sklep zwraca się inwestycję i generuje 46 800 zł więcej zysku rocznie (brak inwestycji wdrożenia).
                  </p>
                </div>
              </div>
            </FadeInView>

            {/* CTA */}
            <FadeInView>
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 border-2 border-yellow-500 rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Chcesz stworzyć własny sklep?</h3>
                <p className="text-gray-800 mb-6 text-lg">
                  Pomożemy Ci wybrać najlepszą strategię dla Twojego biznesu. Bezpłatna konsultacja i wycena.
                </p>
                <Link to="/uslugi/tworzenie-sklepow-internetowych">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3">
                    Zarezerwuj bezpłatną konsultację <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQ - Pytania i odpowiedzi</h2>
              <FAQSchema items={faqItems} />
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg border border-gray-200">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6 hover:bg-gray-50">
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

        <ContactSection
        />
      </Layout>
    </>
  );
}
