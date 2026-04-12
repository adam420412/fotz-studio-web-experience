import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Clock,
  User,
  TrendingUp,
  Target,
  BarChart3,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArticleSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/seo/StructuredData";

export default function BlogReklamaFacebookVsGoogle() {
  const breadcrumbs = [
    { name: "Strona główna", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Reklama Facebook vs Google Ads",
      url: "/blog/reklama-facebook-vs-google",
    },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje reklama na Google Ads vs Facebook Ads?",
      answer:
        "Koszty są zmienne i zależą od branży, targeting i konkurencji. Średnia CPC na Google to 1,50-3,00 PLN, na Facebooku 0,50-1,50 PLN. CPM na Google: 5-15 PLN, na Facebooku: 3-8 PLN. Twój budżet powinien być dostosowany do celów biznesowych.",
    },
    {
      question:
        "Czy powinienem inwestować w oba kanały jednocześnie czy wybrać jeden?",
      answer:
        "Zdecydowanie warto testować oba kanały. Google Ads trafia osoby szukające rozwiązań (wysokie zamiaru), Facebook trafia na podstawie zainteresowań (awareness). Połączenie obu daje kompleksową strategię i lepsze rezultaty.",
    },
    {
      question: "Jaki jest średni czas ROI dla Google Ads i Facebook Ads?",
      answer:
        "Google Ads przynosi wyniki szybciej (7-14 dni), szczególnie dla e-commerce. Facebook wymaga więcej czasu na budowanie świadomości (14-30 dni). Conversion tracking jest kluczowy w obu przypadkach.",
    },
    {
      question:
        "Czy Facebook Ads jest dobry dla B2B czy lepszy jest Google Ads?",
      answer:
        "Google Ads dominuje w B2B dzięki intencji wyszukiwania i wysokiej wartości leadsów. Facebook Ads w B2B może być efektywny dla lead generation i brand awareness, ale wymaga bardziej zaawansowanego targetowania i content.",
    },
    {
      question: "Jak wybrać budget na reklamy dla początkujących?",
      answer:
        "Zacznij od 1000-2000 PLN na kanale i testuj przez 2-4 tygodnie. Google Ads: 500-1000 PLN, Facebook Ads: 500-1000 PLN. Monitoruj metrics i skaluj co działa. Nigdy nie inwestuj więcej niż możesz stracić podczas testów.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Reklama Facebook vs Google Ads – Która Lepsza dla Twojej Firmy? [2026]"
        description="Reklama Facebook czy Google Ads? Porównujemy koszty, targeting, ROI i przypadki użycia. Dowiedz się, gdzie zainwestować budżet reklamowy ✓ Przykłady i liczby"
        canonical="https://fotz.pl/blog/reklama-facebook-vs-google"
        ogTitle="Reklama Facebook vs Google Ads – Porównanie 2026"
        ogDescription="Kompleksowe porównanie Google Ads i Facebook Ads. Poznaj różnice, koszty, targeting i wybierz właściwą platformę dla Twojej firmy."
        ogImage="https://fotz.pl/images/og/facebook-vs-google.jpg"
        ogType="article"
      />
      <ArticleSchema
        headline="Reklama Facebook vs Google Ads – Porównanie 2026"
        description="Kompleksowe porównanie platform reklamowych: Google Ads vs Facebook Ads. Analiza kosztów, targetowania, ROI i zastosowań dla różnych branż."
        author="Zespół FOTZ"
        publishDate="2026-04-01"
        image="https://fotz.pl/images/og/facebook-vs-google.jpg"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema
        items={faqItems.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />

      <Layout>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">Blog</Badge>
                <Badge variant="outline">Performance Marketing</Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Reklama Facebook vs Google Ads – Porównanie 2026
              </h1>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Czy powinieneś inwestować w Google Ads czy Facebook Ads? Kiedy
                wybrać jeden kanał, a kiedy oba? W tym poradniku
                porównujemy dwie największe platformy reklamowe, analizując
                koszty, targeting, ROI i przypadki użycia. Dowiedz się, która
                platforma najlepiej sprawdzi się dla Twojej firmy.
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600 border-t border-b border-gray-200 py-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 min czytania</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Zespół FOTZ</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>1 kwietnia 2026</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {/* Intro Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Dlaczego porównanie ma znaczenie?
                </h2>
                <p className="text-gray-700 mb-4">
                  W 2026 roku reklama cyfrowa stanowi kluczowy element strategii
                  marketingowej każdej firmy. Dwa giganty – Google Ads i Facebook
                  Ads – dzielą rynek. Ale który kanał wybrać?
                </p>
                <p className="text-gray-700 mb-4">
                  Oto kilka liczb, które warto znać:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Google: 90% udziału w rynku wyszukiwarek na świecie</li>
                  <li>Meta (Facebook, Instagram, Messenger): 3 miliardy użytkowników</li>
                  <li>Google Ads: 10 miliardów dolarów przychodu rocznie</li>
                  <li>Facebook Ads: 114 miliardów dolarów przychodu rocznie</li>
                  <li>
                    82% przedsiębiorstw korzysta z co najmniej dwóch kanałów
                    reklamowych
                  </li>
                </ul>
                <p className="text-gray-700">
                  Wybór między platformami nie musi być binarny. W rzeczywistości,
                  wiele najlepiej prosperujących firm wykorzystuje oba kanały.
                  Ale każda platforma ma swoje mocne i słabe strony.
                </p>
              </section>

              {/* Google Ads Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Jak działają reklamy Google Ads?
                </h2>
                <p className="text-gray-700 mb-4">
                  Google Ads działa na zasadzie <strong>intencji wyszukiwania</strong>.
                  Kiedy użytkownik wyszukuje coś na Google, pokazujesz mu swoją
                  ofertę dokładnie w momencie, gdy jej szuka.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  Główne formaty reklam Google Ads:
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Search Ads (Reklamy w wyszukiwarce):</strong> Tekst
                      pojawiający się na stronie wyników wyszukiwania. Idealny
                      dla high-intent leadów.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Display Ads (Reklamy wyświetlane):</strong> Bannery
                      na stronach partnerskich. Doskonały dla brand awareness i
                      remarketing.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Shopping Ads (Reklamy zakupów):</strong> Produkty
                      z ceną, obrazkiem i opinią. Kluczowe dla e-commerce.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>YouTube Ads (Reklamy wideo):</strong> Reklamy w
                      serwisie YouTube. Świetne dla storytellingu i reach.
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-gray-800">
                    <strong>Kluczowa cecha Google Ads:</strong> Trafia ludzi,
                    którzy aktywnie szukają Twojego produktu lub usługi. Masz
                    dostęp do intencji wyszukiwania, co pozwala na precyzyjne
                    targetowanie.
                  </p>
                </div>
              </section>

              {/* Facebook Ads Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Jak działają reklamy Facebook Ads?
                </h2>
                <p className="text-gray-700 mb-4">
                  Facebook Ads działa na zasadzie <strong>zainteresowań i audience targeting</strong>.
                  Reklamujesz się do ludzi na podstawie ich profilu, zachowania
                  i zainteresowań.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  Główne formaty reklam Facebook Ads:
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Feed Ads (Reklamy w strumieniu):</strong> Reklamy
                      pojawiające się w głównym strumieniu Facebooka/Instagrama.
                      Najczęstszy format.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Stories Ads (Reklamy w Stories):</strong> Format
                      pełnoekranowy na Facebooku, Instagramie i Messenge. Świetny
                      dla mobile-first audience.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Video Ads (Reklamy wideo):</strong> Wideo w
                      strumieniu. Bardzo wysokie zaangażowanie.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Carousel Ads (Reklamy karuzelowe):</strong>
                      Wiele produktów w jednej reklamie. Doskonałe dla e-commerce.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Collection Ads (Reklamy kolekcji):</strong> Katalog
                      produktów wewnątrz Facebooka. Immersive experience.
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-gray-800">
                    <strong>Kluczowa cecha Facebook Ads:</strong> Targeting
                    opiera się na zainteresowaniach, demografii i zachowaniu.
                    Trafiasz ludzi zainteresowanych tematem, nawet jeśli
                    nie szukają tego aktywnie.
                  </p>
                </div>
              </section>

              {/* Comparison Table */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Porównanie - tabela szybkiego przeglądu
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left font-semibold">
                          Kryterium
                        </th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">
                          Google Ads
                        </th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">
                          Facebook Ads
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold bg-gray-50">
                          Model
                        </td>
                        <td className="border border-gray-300 p-3">
                          Intencja wyszukiwania
                        </td>
                        <td className="border border-gray-300 p-3">
                          Zainteresowania i audience
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold bg-gray-50">
                          Średnia CPC
                        </td>
                        <td className="border border-gray-300 p-3">
                          1,50-3,00 PLN
                        </td>
                        <td className="border border-gray-300 p-3">
                          0,50-1,50 PLN
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold bg-gray-50">
                          Średnia CPM
                        </td>
                        <td className="border border-gray-300 p-3">
                          5-15 PLN
                        </td>
                        <td className="border border-gray-300 p-3">
                          3-8 PLN
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold bg-gray-50">
                          Conversion Rate
                        </td>
                        <td className="border border-gray-300 p-3">
                          3-5% (średnio)
                        </td>
                        <td className="border border-gray-300 p-3">
                          1-3% (średnio)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold bg-gray-50">
                          Łatwość targetowania
                        </td>
                        <td className="border border-gray-300 p-3">
                          Opiera się na słowach kluczowych
                        </td>
                        <td className="border border-gray-300 p-3">
                          Bardzo zaawansowane audiencje
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold bg-gray-50">
                          Czas do wyniku
                        </td>
                        <td className="border border-gray-300 p-3">
                          7-14 dni
                        </td>
                        <td className="border border-gray-300 p-3">
                          14-30 dni
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold bg-gray-50">
                          Najlepsza dla
                        </td>
                        <td className="border border-gray-300 p-3">
                          E-commerce, B2B, high-intent
                        </td>
                        <td className="border border-gray-300 p-3">
                          Brand awareness, B2C, visual
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* When to Choose Google Ads */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Kiedy wybrać Google Ads?
                </h2>
                <p className="text-gray-700 mb-6">
                  Google Ads sprawdza się świetnie, kiedy szukasz ludzi z
                  <strong> wysoką intencją zakupową</strong>. Oto konkretne przypadki:
                </p>

                <div className="space-y-4 mb-6">
                  <Card className="border-l-4 border-l-green-600">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5 text-green-600" />
                        E-commerce
                      </h3>
                      <p className="text-gray-700">
                        Ludzie szukają konkretnych produktów. Pokażenie produktu
                        w wyniku wyszukiwania ma bardzo wysoką konwersję (4-6%).
                        Shopping Ads jest tutaj niezbędny.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-600">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5 text-green-600" />
                        Usługi lokalne
                      </h3>
                      <p className="text-gray-700">
                        Gdy ludzie szukają "hydraulika blisko mnie" czy "hotel
                        Kraków" – szukają dokładnie tego, co oferujesz.
                        Konwersja może być nawet 7-10%.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-600">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5 text-green-600" />
                        B2B i lead generation
                      </h3>
                      <p className="text-gray-700">
                        Decydenci biznesowi aktywnie szukają rozwiązań. Pokazy
                        reklam Search Ads trafiają na duże wartości conversion.
                        CPC wysoki, ale ROAS również.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-600">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5 text-green-600" />
                        Remarketing do osób na stronie
                      </h3>
                      <p className="text-gray-700">
                        Display Ads pozwala na trafienie osób, które już
                        odwiedziły Twoją stronę. Konwersja jest tutaj
                        znacznie wyższa (5-15%).
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-gray-800">
                    <strong>Zasada ogólna:</strong> Jeśli potrzebujesz szybkich
                    konwersji od ludzi, którzy wyraźnie szukają Twojego
                    produktu – Google Ads to najlepszy wybór.
                  </p>
                </div>
              </section>

              {/* When to Choose Facebook Ads */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Kiedy wybrać Facebook Ads?
                </h2>
                <p className="text-gray-700 mb-6">
                  Facebook Ads sprawdza się świetnie, kiedy musisz budować
                  <strong> świadomość marki</strong> lub target dużą audience
                  na podstawie zainteresowań.
                </p>

                <div className="space-y-4 mb-6">
                  <Card className="border-l-4 border-l-blue-600">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        Brand awareness
                      </h3>
                      <p className="text-gray-700">
                        Chcesz, żeby ludzie poznali Twoją markę? Facebook Ads
                        może dotrzeć do milionów ludzi zainteresowanych Twoją
                        branżą za stosunkowo niewielkie koszty.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-600">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        Produkty wizualne
                      </h3>
                      <p className="text-gray-700">
                        Ubrania, kosmetyki, akcesoria – produkty, które wyglądają
                        dobrze. Facebook Stories i Instagram są idealne do
                        pokazania wizualnego piękna produktu.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-600">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        Impulse buying
                      </h3>
                      <p className="text-gray-700">
                        Produkty, które ludzie kupują impulsywnie bez rozważania?
                        Facebook trafia je w momencie relaksu, kiedy przeglądają
                        feed. Doskonałe dla konwersji impulsowych.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-600">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        Remarketing to website visitors
                      </h3>
                      <p className="text-gray-700">
                        Pixel Facebooka pozwala na reklamowanie do osób, które
                        odwiedziły Twoją stronę. Konwersja może być 2-5x wyższa
                        niż dla "zimnej" audience.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-600">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        Zaawansowane targeting
                      </h3>
                      <p className="text-gray-700">
                        Chcesz reklamować się do kobiet w wieku 25-35 lat,
                        zainteresowanych fitnessem, mieszkających w dużych
                        miastach? Facebook pozwala na takie precyzyjne segmenty.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-gray-800">
                    <strong>Zasada ogólna:</strong> Jeśli potrzebujesz budować
                    świadomość, trafiać ludzi zainteresowanych tematem lub
                    reklamować wizualne produkty – Facebook to idealne miejsce.
                  </p>
                </div>
              </section>

              {/* Both Strategy */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  A może oba kanały jednocześnie?
                </h2>
                <p className="text-gray-700 mb-6">
                  Rzeczywistość to ta, że kombinacja obu kanałów daje najlepsze
                  wyniki. Oto dlaczego:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Customer Journey:</strong>
                      <p className="text-gray-700 mt-1">
                        Klient poznaje Twoją markę na Facebooku (awareness),
                        następnie szuka jej na Google (consideration), wreszcie
                        konwertuje. Pominięcie Google Ads lub Facebooka oznacza
                        utratę klientów w jakimś stadium.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Różne audience:</strong>
                      <p className="text-gray-700 mt-1">
                        Nie każdy szuka aktywnie, ale każdy kiedyś przegląda
                        social media. Kombinacja obu kanałów pozwala dotrzeć do
                        ludzi w różnych momentach ich journey.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Synergy:</strong>
                      <p className="text-gray-700 mt-1">
                        Kampania Facebook buduje świadomość marki, co zwiększa
                        clicki na Google Ads. Google Ads konwertuje zaware już
                        ludzi. Razem działają lepiej.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Data i optymalizacja:</strong>
                      <p className="text-gray-700 mt-1">
                        Testując oba kanały, zdobywasz dane o Twojej audience z
                        dwóch perspektyw. Co działa na Facebooku? Co sprawdza
                        się na Google? Odpowiedzi edukują Twoją całą strategię.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Rekomendowany split budżetu (dla większości branż):
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • <strong>E-commerce:</strong> 60% Google, 40% Facebook
                    </li>
                    <li>
                      • <strong>B2B:</strong> 70% Google, 30% Facebook
                    </li>
                    <li>
                      • <strong>B2C premium:</strong> 50% Google, 50% Facebook
                    </li>
                    <li>
                      • <strong>Startup/nowa marka:</strong> 40% Google, 60%
                      Facebook (najpierw awareness)
                    </li>
                  </ul>
                </div>
              </section>

              {/* Costs Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Koszty – Google Ads vs Facebook Ads
                </h2>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                  Cost Per Click (CPC)
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Google Ads</p>
                    <p className="text-gray-700">
                      Średnia CPC: <strong>1,50-3,00 PLN</strong> (w Polsce).
                      Może być wyżej w konkurencyjnych branżach jak finanse czy
                      nieruchomości (5-10 PLN+).
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Facebook Ads</p>
                    <p className="text-gray-700">
                      Średnia CPC: <strong>0,50-1,50 PLN</strong> (w Polsce).
                      Zazwyczaj 50% niższy niż Google. W niektórych segmentach
                      może być nawet 0,20-0,30 PLN.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                  Cost Per Thousand Impressions (CPM)
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Google Ads</p>
                    <p className="text-gray-700">
                      Średnia CPM: <strong>5-15 PLN</strong>. Display Ads: 3-8 PLN,
                      Search: bardziej na CPC. YouTube Ads: 7-20 PLN.
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Facebook Ads</p>
                    <p className="text-gray-700">
                      Średnia CPM: <strong>3-8 PLN</strong>. Bardzo zmienne w
                      zależności od audience. Feed Ads: 2-5 PLN, Stories: 4-10 PLN.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                  Average Order Value (AOV) i ROI
                </h3>
                <p className="text-gray-700 mb-4">
                  Chociaż Facebook jest tańszy, Google zwróci się szybciej dla
                  e-commerce:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>
                    <strong>Google Ads dla e-commerce:</strong> Średni AOV
                    150 PLN, konwersja 3%, CPC 1,50 PLN = ROI ~300%
                  </li>
                  <li>
                    <strong>Facebook Ads dla e-commerce:</strong> Średni AOV
                    150 PLN, konwersja 1%, CPC 0,80 PLN = ROI ~187%
                  </li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-gray-800">
                    <strong>Ważna uwaga:</strong> Te liczby to średnie.
                    Rzeczywisty ROI zależy od Twojej branży, audience,
                    copy'u i creative'ów. Testuj, mierz, optymalizuj.
                  </p>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Najczęściej zadawane pytania
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-gray-700">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Summary Section */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Podsumowanie
                  </h2>

                  <div className="space-y-4 mb-8">
                    <p className="text-gray-700">
                      <strong>Google Ads vs Facebook Ads</strong> – to nie jest
                      pytanie "jeden lub drugi". To pytanie "jaki jest Twój cel
                      teraz?"
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Szukasz szybkich konwersji?</strong> Google
                          Ads. Ludzie szukają dokładnie tego, co masz.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Musisz budować świadomość?</strong> Facebook
                          Ads. Tańsze, większy reach, doskonałe targety.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Chcesz maksimum wyników?</strong> Oba kanały.
                          Testuj split 50/50, zobaczysz co działa dla Twojego
                          biznesu.
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mt-6 pt-6 border-t border-blue-200">
                      Pamiętaj: najlepszy kanał to ten, który testujesz,
                      mierzysz i optymalizujesz. Statystyki to średnie – Twoje
                      wyniki mogą być zupełnie inne.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-semibold text-gray-900">
                      Gotowy do uruchomienia kampanii?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/performance-marketing/google-ads"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                      >
                        Dowiedz się więcej o Google Ads
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/performance-marketing/facebook-ads"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                      >
                        Dowiedz się więcej o Facebook Ads
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
