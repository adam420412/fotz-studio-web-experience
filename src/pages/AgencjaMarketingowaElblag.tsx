import { SEOHead } from "@/components/seo/SEOHead";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const AgencjaMarketingowaElblag = () => {
  const seoTitle = "Agencja marketingowa Elbląg - fotz studio | Marketing dla firm";
  const seoDescription = "Profesjonalna agencja marketingowa w Elblągu. Oferujemy kompleksowe usługi marketingowe dla firm. Zwiększ widoczność swojej marki z fotz studio.";

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Agencja marketingowa", url: "/agencja-marketingowa" },
    { name: "Elbląg", url: "/agencja-marketingowa/elblag" },
  ];

  const faqItems = [
    {
      question: "Jakie usługi marketingowe oferujecie dla Elbląga?",
      answer: "Oferujemy kompleksowe usługi marketingowe: strategie marketingowe, pozycjonowanie SEO, kampanie Google Ads, social media marketing, content marketing, branding i tworzenie stron internetowych. Wszystkie usługi dostosowujemy do potrzeb lokalnych firm z Elbląga i regionu.",
    },
    {
      question: "Ile czasu zajmuje widoczność wyników w pozycjonowaniu?",
      answer: "Pierwsze rezultaty są widoczne po 3-4 miesiącach intensywnych prac SEO. Pełne efekty widać zwykle po 6-12 miesiącach, w zależności od konkurencji na rynku i zakresu optymalizacji. Prowadzimy regularne raporty postępów.",
    },
    {
      question: "Czy pracujecie z małymi i średnimi firmami?",
      answer: "Tak, pracujemy głównie z małymi i średnimi firmami. Posiadamy specjalistyczne pakiety dla każdej wielkości biznesu - START dla początkujących, ROZWÓJ dla rozwijających się firm i PREMIUM dla dużych przedsiębiorstw.",
    },
    {
      question: "Jak ustalana jest cena usług marketingowych?",
      answer: "Ceny zależą od zakresu usług, konkurencji branżowej i celów biznesowych. Oferujemy pakiety od 1500 zł (START), przez 3500 zł (ROZWÓJ), do 7000+ zł (PREMIUM) miesięcznie. Każdy pakiet można dostosować do indywidualnych potrzeb.",
    },
    {
      question: "Czy macie portfolio realizacji w Elblągu?",
      answer: "Tak, posiadamy bogatą bazę realizacji dla firm z Elbląga i regionu. Zapraszamy do zapoznania się z case studies na naszej stronie. Chętnie pokażemy konkretne rezultaty dla firm podobnych do Waszej.",
    },
    {
      question: "Jak wygląda proces współpracy z agencją?",
      answer: "Zaczynamy od konsultacji - poznajemy Waszą firmę i cele. Następnie przeprowadzamy audyt obecnego stanu, ustalamy strategię, implementujemy zmiany i monitorujemy wyniki. Regularnie raportujemy postęp i dostosowujemy działania do rezultatów.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical="/agencja-marketingowa/elblag"
        keywords="agencja marketingowa elbląg, marketing internetowy elbląg, usługi marketingowe elbląg, agencja reklamowa elbląg"
      />

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Agencja marketingowa Elbląg"
        description="Profesjonalna agencja marketingowa oferująca kompleksowe usługi marketingowe dla firm z Elbląga i regionu."
        provider="fotz studio"
        areaServed="Elbląg"
      />
      <FAQSchema items={faqItems} />

      {/* Hero Section */}
      <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Agencja marketingowa Elbląg
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Profesjonalne strategie marketingowe dla firm z Elbląga. Zwiększamy widoczność, budujemy marki i generujemy sprzedaż.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Bezpłatna konsultacja
              </Button>
              <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900">
                Poznaj nasze usługi
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Dlaczego warto pracować z fotz studio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle2 className="text-yellow-400 flex-shrink-0 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Doświadczenie i specjalistyka</h3>
                <p className="text-gray-300">
                  Ponad 10 lat doświadczenia w obsłudze firm z regionu Elbląga. Znamy lokalny rynek i specyficzne potrzeby firm.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-yellow-400 flex-shrink-0 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Mierzalne rezultaty</h3>
                <p className="text-gray-300">
                  Każda kampania ma jasno określone KPI. Raportujemy transparentnie i regularnie pokazujemy konkretne wyniki.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-yellow-400 flex-shrink-0 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Indywidualne podejście</h3>
                <p className="text-gray-300">
                  Nie oferujemy szablonowych rozwiązań. Każdą strategię dopasowujemy do unikalnych potrzeb Waszej firmy.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-yellow-400 flex-shrink-0 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Wsparcie 24/7</h3>
                <p className="text-gray-300">
                  Nasz zespół jest zawsze dostępny dla Waszych pytań i pilnych spraw. Szybka komunikacja gwarantowana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nasze usługi marketingowe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-yellow-400 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Pozycjonowanie SEO</h3>
              <p className="text-gray-300 mb-4">
                Optymalizacja stron internetowych pod wyszukiwarki. Zwiększamy organiczny ruch i widoczność w Google.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Audit SEO</li>
                <li>Badania słów kluczowych</li>
                <li>Budowa linków</li>
                <li>Techniczne SEO</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-yellow-400 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Reklama Google Ads</h3>
              <p className="text-gray-300 mb-4">
                Kampanie tekstowe, display i shopping. Szybkie widoczności i kontrola budżetu reklamowego.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Kampanie Search</li>
                <li>Google Shopping</li>
                <li>Display Ads</li>
                <li>Analiza konwersji</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-yellow-400 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Social Media Marketing</h3>
              <p className="text-gray-300 mb-4">
                Strategiczne zarządzanie profilami na Facebooku, Instagramie i LinkedIn. Budowanie społeczności marki.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Content strategy</li>
                <li>Zarządzanie profilami</li>
                <li>Kampanie społeczne</li>
                <li>Community management</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-yellow-400 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Content Marketing</h3>
              <p className="text-gray-300 mb-4">
                Tworzenie wartościowych treści: artykuły, blogi, infografiki. Edukujemy i angażujemy odbiorców.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Strategie contentu</li>
                <li>Pisanie artykułów</li>
                <li>Infografiki i video</li>
                <li>Email marketing</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-yellow-400 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Branding i design</h3>
              <p className="text-gray-300 mb-4">
                Budowanie tożsamości marki. Logo, wytyczne brandingowe, materiały promocyjne i kampanijne.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Projektowanie logo</li>
                <li>Brandbook</li>
                <li>Design graficzny</li>
                <li>Materiały drukowane</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-yellow-400 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Strony internetowe</h3>
              <p className="text-gray-300 mb-4">
                Tworzenie nowoczesnych, responsywnych stron internetowych. Szybkie, bezpieczne i zoptymalizowane pod konwersję.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Strony wizytówkowe</li>
                <li>E-commerce</li>
                <li>Optymalizacja konwersji</li>
                <li>Hosting i wsparcie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Elbląg Local Context Section */}
      <section className="bg-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Marketing w Elblągu - znamy Wasz rynek</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Elbląg jako hub biznesowy</h3>
              <p className="text-gray-300 mb-4">
                Elbląg to miasto portowe z bogatą historią handlową. Jego gospodarka opiera się na logistyce, turystyce i branżach produkcyjnych. Funkcjonujący port stanowi bazę dla wielu przedsiębiorstw.
              </p>
              <p className="text-gray-300 mb-4">
                Bliskość Trójmiasta (Gdańsk, Gdynia, Sopot) tworzy dynamiczny rynek lokalny pełen potencjału dla firm szukających wzrostu i ekspansji.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Turystyka i kultura</h3>
              <p className="text-gray-300 mb-4">
                Elbląg przyciąga turystów starą architekturą i malowniczym Kanalem Elbląskim. Sektor turystyczny rozwija się dynamicznie, tworząc szanse dla branży hotelarskiej, gastronomii i usług.
              </p>
              <p className="text-gray-300">
                Marketing lokalny w Elblągu wymaga zrozumienia tak ruchu turystycznego, jak i potrzeb stałych mieszkańców. My to znamy.
              </p>
            </div>
          </div>
          <div className="mt-8 p-8 bg-gray-900 rounded-lg border border-gray-700">
            <p className="text-gray-300 mb-3">
              Nasz zespół pracuje z firmami z sektora logistyki, turystyki, produkcji i handlu. Wiemy, jakie strategie marketingowe działają najlepiej w Elblągu i dla jakich grup docelowych.
            </p>
            <p className="text-yellow-400 font-semibold">
              Chcesz zapoznać się, jak możemy wspomóc Twoją firmę w Elblągu? Zaproś nas na rozmowę.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pakiety cenowe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 flex flex-col">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">START</h3>
              <p className="text-gray-400 mb-6">Dla małych firm i startupów</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">1500</span>
                <span className="text-gray-400 ml-2">zł/miesiąc</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow text-gray-300">
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> Zarządzanie jednym kanałem social media
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> 4 posty miesięcznie
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> Podstawowy raport wyników
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> Email support
                </li>
              </ul>
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 w-full">
                Wybierz pakiet
              </Button>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border-2 border-yellow-400 flex flex-col transform md:scale-105">
              <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full inline-block mb-4 w-fit font-bold">
                Najpopularniejszy
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">ROZWÓJ</h3>
              <p className="text-gray-400 mb-6">Dla średnich firm</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">3500</span>
                <span className="text-gray-400 ml-2">zł/miesiąc</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow text-gray-300">
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> Zarządzanie 2-3 kanałami social media
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> 12 postów miesięcznie
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> Kampania Google Ads (200 zł budżetu)
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> Raport szczegółowy
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> Wsparcie priorytetowe
                </li>
              </ul>
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 w-full">
                Wybierz pakiet
              </Button>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 flex flex-col">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">PREMIUM</h3>
              <p className="text-gray-400 mb-6">Dla dużych firm i e-commerce</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">7000</span>
                <span className="text-gray-400 ml-2">zł+/miesiąc</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow text-gray-300">
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> Pełna strategia marketingowa
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> Zarządzanie wszystkimi kanałami
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> Kampanie Google Ads (1000 zł budżetu)
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> SEO i content marketing
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> Raport zaawansowany z analizą
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">+</span> Wsparcie VIP 24/7
                </li>
              </ul>
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 w-full">
                Wybierz pakiet
              </Button>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-12">
            Wszystkie pakiety możemy dostosować do Waszych specyficznych potrzeb. Chcesz coś innego? Skontaktuj się z nami.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Często zadawane pytania
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-700 border-gray-600 rounded-lg px-6 py-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-yellow-400 hover:text-yellow-500">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pt-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowy na wzrost Twojego biznesu?
          </h2>
          <p className="text-lg mb-8 text-gray-800">
            Skontaktuj się z nami na bezpłatną konsultację. Omówimy Twoje cele i pokażemy, jak możemy Ci pomóc w Elblągu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gray-900 text-yellow-400 hover:bg-gray-800"
            >
              Zarezerwuj konsultację
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-yellow-400"
            >
              Wyślij wiadomość
            </Button>
          </div>
          <div className="mt-12 pt-12 border-t border-gray-700">
            <p className="text-gray-800 mb-4">
              Dane kontaktowe:
            </p>
            <p className="text-gray-800 font-semibold">
              fotz studio - agencja marketingowa
            </p>
            <p className="text-gray-800">
              Elbląg, Polska | phone: +48 123 456 789 | email: hello@fotz.pl
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AgencjaMarketingowaElblag;
