import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Building2,
  TrendingUp,
  Star,
  Users,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Target,
  Smartphone,
  BarChart3,
  Lightbulb,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";

export default function AgencjaMarketingowaWroclaw() {
  const [activeTab, setActiveTab] = useState<string>("services");

  const schemaData = {
    services: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "FOTZ - Agencja Marketingowa Wrocław",
      "image": "https://fotz.pl/logo.png",
      "description": "Agencja marketingowa w Wrocławiu specjalizująca się w SEO, Google Ads, Social Media oraz tworzeniu stron internetowych.",
      "url": "https://fotz.pl/agencja-marketingowa/wroclaw",
      "telephone": "+48-12-345-6789",
      "email": "kontakt@fotz.pl",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Stare Miasto, Wrocław",
        "addressLocality": "Wrocław",
        "addressRegion": "Dolny Śląsk",
        "postalCode": "50-000",
        "addressCountry": "PL"
      },
      "areaServed": "Wroclaw",
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      }
    }
  };

  const faqData = [
    {
      question: "Jakie usługi marketingowe oferuje agencja FOTZ we Wrocławiu?",
      answer: "FOTZ oferuje kompleksowe usługi marketingowe: SEO lokalne, pozycjonowanie Google, kampanie Google Ads, Social Media Marketing, tworzenie stron internetowych, branding i content marketing. Każda usługa jest dostosowana do potrzeb firm z Wrocławia i regionu Dolnego Śląska."
    },
    {
      question: "Ile czasu trwają pierwsze rezultaty ze strategii SEO?",
      answer: "Zazwyczaj pierwsze wyniki w pozycjonowaniu widoczne są po 2-3 miesiącach pracy. Jednak pełne efekty SEO mogą pojawić się po 6-12 miesiącach. Wszystko zależy od konkurencyjności słów kluczowych i stanu technicznego strony."
    },
    {
      question: "Czy FOTZ pracuje z firmami z różnych branż we Wrocławiu?",
      answer: "Tak! Posiadamy doświadczenie w pracy z firmami z różnych sektorów: e-commerce, usługi, budownictwo, produkcja, IT, gastronomia i wiele innych. Każdy projekt jest indywidualnie analizowany i dostosowywany do konkretnej branży."
    },
    {
      question: "Jakie są ceny usług agencji marketingowej we Wrocławiu?",
      answer: "Ceny zależą od zakresu prac i wybranych usług. Oferujemy pakiety START (500 PLN/m-c), BIZNES (1500 PLN/m-c) i PREMIUM (od 3000 PLN/m-c). Zapraszamy do kontaktu na bezpłatną wycenę dostosowaną do Twoich potrzeb."
    },
    {
      question: "Czy mogę się spotkać z agencją FOTZ osobiście w Wrocławiu?",
      answer: "Tak, możliwe są spotkania w naszym biurze w Starym Mieście we Wrocławiu. Oferujemy też konsultacje online. Zapraszamy do kontaktu, aby umówić się na spotkanie lub rozmowę wideo."
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Wrocław | FOTZ – Marketing Dla Firm we Wrocławiu"
        description="Agencja marketingowa Wrocław ✓ SEO, Google Ads, Social Media, strony WWW. Ponad 200 projektów dla firm z Wrocławia i Dolnego Śląska. Bezpłatna wycena!"
        canonical="https://fotz.pl/agencja-marketingowa/wroclaw"
        ogTitle="Agencja Marketingowa Wrocław | FOTZ"
        ogDescription="Profesjonalna agencja marketingowa we Wrocławiu. SEO, Google Ads, Social Media, tworzenie stron. 500+ zadowolonych klientów."
        ogImage="https://fotz.pl/og-wroclaw.jpg"
        keywords="agencja marketingowa wrocław, marketing internetowy wrocław, agencja reklamowa wrocław, kampanie reklamowe wrocław, seo wrocław, google ads wrocław, agencja marketingowa dolny śląsk"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://fotz.pl" },
          { name: "Agencja Marketingowa", url: "https://fotz.pl/agencja-marketingowa" },
          { name: "Wrocław", url: "https://fotz.pl/agencja-marketingowa/wroclaw" }
        ]}
      />

      <FAQSchema faqs={faqData} />

      <ServiceSchema
        name="FOTZ - Agencja Marketingowa Wrocław"
        areaServed="Wroclaw"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="bg-white/20 border-white/40 text-white mb-4">
              Agencja Marketingowa we Wrocławiu
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Agencja Marketingowa Wrocław
            </h1>

            <p className="text-xl text-white/90 mb-8">
              Profesjonalne usługi marketingowe dla firm z Wrocławia. Efektywne strategie SEO, Google Ads, Social Media i tworzenie stron internetowych, które przynoszą wymierne rezultaty dla Twojego biznesu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100">
                Bezpłatna Wycena
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Phone className="w-4 h-4 mr-2" />
                Zadzwoń
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-white/80">Zadowolonych Klientów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">8 lat</div>
                <div className="text-sm text-white/80">Doświadczenia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">97%</div>
                <div className="text-sm text-white/80">Zadowolenia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">TOP3</div>
                <div className="text-sm text-white/80">Wyniki dla Klientów</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dlaczego Wybrać FOTZ?</h2>
            <p className="text-gray-600 text-lg">
              Jesteśmy agencją marketingową z Wrocławia, która zna lokalny rynek i specyfikę biznesu na Dolnym Śląsku. Nasza zespół to doświadczeni specjaliści z passion do marketingu.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Strategia Dopasowana</h3>
                <p className="text-gray-600">
                  Każda strategia marketingowa jest indywidualnie tworzona dla Twojego biznesu i branży. Nie stosujemy gotowych rozwiązań.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Wymierne Wyniki</h3>
                <p className="text-gray-600">
                  Liczymy się rezultatami. Codziennie monitorujemy metryki i optymalizujemy kampanie na rzecz Twojego wzrostu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Wsparcie 24/7</h3>
                <p className="text-gray-600">
                  Twój dedykowany account manager zawsze dostępny. Pytania, wątpliwości, potrzeba zmiany? Jesteśmy tu dla Ciebie.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Usługi Marketingowe we Wrocławiu</h2>
            <p className="text-gray-600 text-lg">
              Pełna gama usług marketingowych dostosowanych do potrzeb firm z Wrocławia i Dolnego Śląska.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* SEO Service */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold">SEO Lokalne Wrocław</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Pozycjonowanie Twojej strony w Google dla słów kluczowych lokalnych. Zdobywamy pierwsze pozycje dla firm z Wrocławia, Krakowa, Poznania i całej Polski.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Analiza konkurencji</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Optymalizacja on-page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Budowanie backlinków</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Raporty miesięczne</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Dowiedz się więcej
                </Button>
              </CardContent>
            </Card>

            {/* Social Media Service */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold">Social Media Marketing</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Profesjonalne zarządzanie mediami społecznościowymi. Tworzymy angażujące treści dla Facebooka, Instagrama i LinkedIn, które generują zaangażowanie i sprzedaż.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Zarządzanie kontami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Tworzenie treści</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Kampanie reklamowe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Analityka i KPI</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Dowiedz się więcej
                </Button>
              </CardContent>
            </Card>

            {/* Google Ads Service */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold">Google Ads</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Efektywne kampanie Google Ads (Search, Display, Shopping) które przynoszą rzeczywistych klientów. Minimalizujemy koszty, maksymalizujemy konwersje.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Google Search Ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Display &amp; Remarketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Shopping Campaign</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Optymalizacja ROI</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Dowiedz się więcej
                </Button>
              </CardContent>
            </Card>

            {/* Website Service */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold">Strony Internetowe</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Nowoczesne, responsywne strony internetowe zbudowane z SEO na uwadze. Każda strona to inwestycja w Twój biznes, która generuje potencjalnych klientów.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Responsive Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Szybkość i SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">E-commerce integracja</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Wsparcie 24/7</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Dowiedz się więcej
                </Button>
              </CardContent>
            </Card>

            {/* Content Marketing Service */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold">Content Marketing</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Tworzenie wysokiej jakości treści, które przyciągają, edukują i konwertują. Blog posty, artykuły, case studies, infografiki i wiele więcej.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Strategia treści</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Blog i artykuły</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Video content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Infografiki i e-booki</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Dowiedz się więcej
                </Button>
              </CardContent>
            </Card>

            {/* Branding Service */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold">Branding</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Budowanie silnej marki, która wyróżnia Cię od konkurencji. Logo, identyfikacja wizualna, koncepcja marki i pozycjonowanie na rynku.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Projektowanie logo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Identyfikacja wizualna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Brand strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Messaging &amp; Positioning</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Dowiedz się więcej
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pakiety Cenowe</h2>
            <p className="text-gray-600 text-lg">
              Wybierz pakiet dopasowany do Twoich potrzeb i budżetu. Wszystkie pakiety obejmują bezpłatną konsultację i raport audytu.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter Package */}
            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Pakiet START</h3>
                <p className="text-gray-600 mb-6">Dla małych firm i startupów</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">500 PLN</span>
                  <span className="text-gray-600">/miesiąc</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>SEO optymalizacja</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Google My Business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Monitoring pozycji</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Raport co miesiąc</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Wybierz pakiet
                </Button>
              </CardContent>
            </Card>

            {/* Business Package */}
            <Card className="border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-blue-600">Popularne</Badge>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Pakiet BIZNES</h3>
                <p className="text-gray-600 mb-6">Dla rozwijających się firm</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">1500 PLN</span>
                  <span className="text-gray-600">/miesiąc</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Pełne SEO i Social Media</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Kampanie Google Ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Content Marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Dedykowany account manager</span>
                  </li>
                </ul>
                <Button className="w-full">
                  Wybierz pakiet
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Pakiet PREMIUM</h3>
                <p className="text-gray-600 mb-6">Dla przedsiębiorstw</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">3000+ PLN</span>
                  <span className="text-gray-600">/miesiąc</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Pełny marketing stack</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Budowa i optymalizacja strony</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Strategia kompletna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Wsparcie i konsultacje nieograniczone</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Zapytaj o ofertę
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Obsługujemy Wrocław i Dolny Śląsk
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                Dzielnice Wrocławia
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Stare Miasto
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Krzyki
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Fabryczna
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Psie Pole
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Śródmieście
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-blue-600" />
                Rejony Działalności
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Cały Dolny Śląsk
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Polska (zdalnie)
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Firmy lokalne
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  E-commerce i usługi
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Wszystkie branże
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Pytania i Odpowiedzi
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gotowy na Wzrost Twojego Biznesu?
            </h2>

            <p className="text-xl text-white/90 mb-8">
              Zapraszamy do bezpłatnej konsultacji marketingowej. Przeanalizujemy Twój biznes i pokażemy, jak możemy Ci pomóc w osiągnięciu celów.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Bezpłatna Konsultacja
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Phone className="w-4 h-4 mr-2" />
                +48 12 345 6789
              </Button>
            </div>

            <p className="text-sm text-white/70 mt-8">
              Odpowiemy w ciągu 24 godzin. Bez zobowiązań.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-white/70 mb-8">
            Zaufało nam ponad 500 firm z Wrocławia i całej Polski
          </p>

          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">4.9/5 gwiazdek</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">500+ klientów</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">2000+ projektów</p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">97% zadowolenia</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
