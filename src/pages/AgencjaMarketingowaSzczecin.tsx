import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Building2, TrendingUp, Star, Users, MapPin, CheckCircle2, ArrowRight, Phone, Target, Smartphone, BarChart3, Lightbulb, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

export default function AgencjaMarketingowaSzczecin() {
  const [selectedPackage, setSelectedPackage] = useState<string>("standard");

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Szczecin | Fotz Studio"
        description="Agencja marketingowa Szczecin ✓ SEO, Google Ads, Social Media, strony WWW. Ponad 200 projektów dla firm z Szczecina i Zachodniopomorskiego. Bezpłatna wycena!"
        canonical="https://fotz.pl/agencja-marketingowa/szczecin"
        keywords="agencja marketingowa szczecin, marketing internetowy szczecin, agencja reklamowa szczecin, kampanie reklamowe szczecin, seo szczecin, google ads szczecin"
      />

      <BreadcrumbSchema items={[
          { name: "Home", url: "https://fotz.pl" },
          { name: "Agencja Marketingowa", url: "https://fotz.pl/agencja-marketingowa" },
          { name: "Szczecin", url: "https://fotz.pl/agencja-marketingowa/szczecin" },
        ]}/>

      <ServiceSchema
        name="Agencja Marketingowa Szczecin"
        description="Kompleksowe usługi marketingowe dla firm w Szczecinie: SEO, Google Ads, Social Media, strony internetowe i copywriting."
        areaServed="Szczecin"
      />

      <FAQSchema
        items={[
          {
            question: "Ile kosztuje agencja marketingowa w Szczecinie?",
            answer: "Ceny zaczynają się od 2500 zł/miesiąc za pakiet STARTER. Każde wyceny dostosowujemy indywidualnie do potrzeb firmy. Oferujemy bezpłatną konsultację.",
          },
          {
            question: "Jak długo czekać na pierwsze wyniki z SEO?",
            answer: "Pierwsze pozytywne wyniki obserwujemy zwykle po 2-3 miesiącach. Pełne efekty SEO osiągamy po 6-9 miesiącach regularnej pracy.",
          },
          {
            question: "Czy pracujecie z firmami z Zachodniopomorskiego?",
            answer: "Tak, pracujemy z firmami z całego Szczecina i regionu Zachodniopomorskiego. Oferujemy również obsługę firm chcących ekspandować na rynki niemieckie.",
          },
          {
            question: "Co zawiera pakiet PREMIUM?",
            answer: "Pakiet PREMIUM zawiera: SEO, kampanie Google Ads, zarządzanie social media, copywriting, analitykę i raporty miesięczne.",
          },
          {
            question: "Czy oferujecie stronę internetową?",
            answer: "Tak, projektujemy i kodujemy nowoczesne strony internetowe w React, Next.js i WordPress, zoptymalizowane pod SEO.",
          },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Agencja Marketingowa w Szczecinie</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Agencja Marketingowa Szczecin
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Profesjonalny marketing dla firm z Szczecina. Specjalizujemy się w SEO, Google Ads, Social Media i tworzeniu stron internetowych. Ponad 200 projektów na koncie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Bezpłatna Wycena
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 w-4 h-4" />
                Zadzwoń Teraz
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Klientów z regionu</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">8 lat</div>
                <div className="text-sm text-gray-600">Doświadczenia</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
                <div className="text-sm text-gray-600">Zadowolonych Klientów</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">TOP3</div>
                <div className="text-sm text-gray-600">Wyniki w Szczecinie</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O Szczecinie */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Szczecin – Dynamiczny Rynek dla Biznesu
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Szczecin to główne miasto Zachodniopomorskiego i dynamiczny ośrodek gospodarczy na zachodzie Polski. Jako stolica województwa i ważny port międzynarodowy, stanowi bramę do rynku niemieckiego.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Miasto przyciąga przedsiębiorców z całej Polski. Rosnąca scena startupowa, nowoczesne obiekty (Filharmonia, nowe biurowce) i rosnąca liczba specjalistów IT sprawiają, że Szczecin to idealny rynek dla agencji marketingowej.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Obsługujemy firmy z dzielnic: Śródmieście, Niebuszewo, Pogodno, Gumieńce, Żelechowa, Pomorzany i całego regionu Zachodniopomorskiego.
              </p>
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Biuro w Szczecinie dostępne do wizyty</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <Users className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="font-semibold text-gray-900">Populacja</div>
                  <div className="text-sm text-gray-600">408 000+ mieszkańców</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="font-semibold text-gray-900">Wzrost</div>
                  <div className="text-sm text-gray-600">Dynamicznie rozwijającym się rynkiem</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Target className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="font-semibold text-gray-900">Rynek niemiecki</div>
                  <div className="text-sm text-gray-600">Bliskość do granic Niemiec</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Lightbulb className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="font-semibold text-gray-900">Innowacje</div>
                  <div className="text-sm text-gray-600">Rosnąca scena startup</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Usługi Marketingowe w Szczecinie
            </h2>
            <p className="text-xl text-gray-700">
              Kompleksowe rozwiązania marketingowe dla firm z Szczecina
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* SEO */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">SEO Szczecin</h3>
                <p className="text-gray-700 mb-4">
                  Pozycjonowanie stron w Google. Pracujemy na wynik i podwyższamy widoczność Twojej firmy w organicznych wynikach wyszukiwania.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Audyt i optymalizacja SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Budowa linków lokalnych</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Google My Business optymalizacja</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Google Ads */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Zap className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Google Ads</h3>
                <p className="text-gray-700 mb-4">
                  Kampanie Google Ads z szybkim zwrotem z inwestycji. Docieramy do klientów szukających Twoich produktów i usług w Szczecinie.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Kampanie Search</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Display i Remarketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Optymalizacja budżetu</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media</h3>
                <p className="text-gray-700 mb-4">
                  Zarządzanie mediami społecznościowymi. Budujemy engagement, zwiększamy zasięg i konwertujemy fanów w klientów.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Zarządzanie Facebook i Instagram</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Tworzenie treści</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Kampanie społecznościowe</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Strony Internetowe */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Smartphone className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strony Internetowe</h3>
                <p className="text-gray-700 mb-4">
                  Projektujemy i kodujemy nowoczesne strony WWW w React, Next.js i WordPress. Responsywne i szybkie.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Projektowanie UX/UI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Strony responsywne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Optymalizacja prędkości</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Analytics */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BarChart3 className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Analityka i Raporty</h3>
                <p className="text-gray-700 mb-4">
                  Mierzymy co jest ważne. Kompleksowa analiza danych, raporty miesięczne i rekomendacje dotyczące poprawy wyników.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Google Analytics 4 setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Raporty miesięczne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Tracking konwersji</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Copywriting */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Lightbulb className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Copywriting</h3>
                <p className="text-gray-700 mb-4">
                  Teksty, które sprzedają. Profesjonalne copywriting na stronę, maile marketingowe i content na bloga.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Copywriting stron</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Email marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Artykuły do bloga</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pakiety Usług Marketingowych
            </h2>
            <p className="text-xl text-gray-700">
              Wybierz pakiet dostosowany do potrzeb Twojej firmy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <Card
              className={`relative transition-all cursor-pointer ${
                selectedPackage === "starter" ? "ring-2 ring-blue-600 shadow-lg" : ""
              }`}
              onClick={() => setSelectedPackage("starter")}
            >
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-blue-100 text-blue-800">Najpopularniejszy</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">STARTER</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">2500 zł</span>
                  <span className="text-gray-600">/miesiąc</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Idealna dla małych firm i startupów chcących rozpocząć marketing online.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Optymalizacja SEO</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Zarządzanie 1 kanałem social media</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">4 posty na miesiąc</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Raport analityczny</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Wybierz Pakiet
                </Button>
              </CardContent>
            </Card>

            {/* Standard */}
            <Card
              className={`relative transition-all cursor-pointer border-2 ${
                selectedPackage === "standard" ? "ring-2 ring-blue-600 shadow-lg border-blue-600" : "border-gray-200"
              }`}
              onClick={() => setSelectedPackage("standard")}
            >
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-green-100 text-green-800">Najczęściej wybierany</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">STANDARD</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">4990 zł</span>
                  <span className="text-gray-600">/miesiąc</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Kompleksowe rozwiązanie dla firm chcących rosta i widoczności w sieci.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">SEO oraz Google My Business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Zarządzanie 2 kanałami social media</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">8 postów na miesiąc</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Kampania Google Ads (podstawowa)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Raporty analityczne</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Wybierz Pakiet
                </Button>
              </CardContent>
            </Card>

            {/* Premium */}
            <Card
              className={`relative transition-all cursor-pointer ${
                selectedPackage === "premium" ? "ring-2 ring-blue-600 shadow-lg" : ""
              }`}
              onClick={() => setSelectedPackage("premium")}
            >
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-purple-100 text-purple-800">Premium</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">PREMIUM</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">8900 zł</span>
                  <span className="text-gray-600">/miesiąc</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Pełny zakres usług marketingowych dla firm chcących dominować na rynku.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Kompleksowe SEO i strategie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Zarządzanie 4 kanałami social media</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">20+ postów na miesiąc</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Google Ads oraz Social Ads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Copywriting i email marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dedykowany account manager</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Wybierz Pakiet
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Nie jesteś pewien, który pakiet wybrać? Chętnie pomożemy!
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Umów Bezpłatną Konsultację
              <Phone className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Najczęściej Zadawane Pytania
            </h2>
            <p className="text-xl text-gray-700">
              Odpowiedzi na pytania firm z Szczecina i regionu
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                Ile kosztuje agencja marketingowa w Szczecinie?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700">
                Ceny agencji marketingowych w Szczecinie zaczynają się od 2500 zł/miesiąc za pakiet STARTER. Nasz pakiet STANDARD (najpopularniejszy) to 4990 zł/miesiąc, a PREMIUM to 8900 zł/miesiąc. Każda wycena jest dostosowana indywidualnie do potrzeb i budżetu firmy. Oferujemy bezpłatną konsultację i wycenę.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                Jak długo czekać na pierwsze wyniki z SEO w Szczecinie?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700">
                SEO to długoterminowa inwestycja. Pierwsze pozytywne wyniki obserwujemy zwykle po 2-3 miesiącach regularnej pracy. Znaczne poprawy widoczności pojawiają się po 6-9 miesiącach. Wszystko zależy od konkurencji na słowa kluczowe i stanu wyjściowego strony. Chętnie opowiemy dokładniej podczas konsultacji.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                Czy pracujecie z firmami z Zachodniopomorskiego?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700">
                Tak, pracujemy z firmami z całego Szczecina i regionu Zachodniopomorskiego. Obsługiwaliśmy już firmy z dzielnic: Śródmieście, Niebuszewo, Pogodno, Gumieńce, Żelechowa, Pomorzany. Oferujemy również specjalistyczną obsługę dla firm chcących ekspandować na rynki niemieckie, wykorzystując naszą bliskość do granic Niemiec.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                Co zawiera pakiet PREMIUM?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700">
                Pakiet PREMIUM zawiera: kompleksowe SEO i strategie marketingowe, zarządzanie 4 kanałami social media, 20+ postów na miesiąc, kampanie Google Ads oraz Social Ads, copywriting profesjonalny, email marketing, dedykowany account manager i raporty analityczne. To pełny zakres usług dla firm chcących dominować na rynku Szczecina.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                Czy oferujecie tworzenie stron internetowych?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700">
                Tak, projektujemy i kodujemy nowoczesne strony internetowe w React, Next.js i WordPress. Wszystkie strony są responsywne, szybkie, zoptymalizowane pod SEO i mają świetny UX/UI. Oferujemy pełny zakres od koncepcji, przez design, aż do wdrożenia i wsparcia. Możemy też przerobić istniejące strony, aby były bardziej efektywne.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 py-16 md:py-24 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowy na nowy poziom marketingu?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ponad 500 firm z Szczecina i regionu ufa nam obsługę swoje kampanie marketingowe. Dołącz do nich i dostań bezpłatną wycenę.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-blue-600 hover:text-blue-700">
              Bezpłatna Wycena
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="mr-2 w-4 h-4" />
              +48 531 234 567
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Skontaktuj się z nami
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Jesteśmy dostępni do dyskusji o Twoim projekcie marketingowym. Zadzwoń, wyślij wiadomość lub umów się na spotkanie w naszym biurze w Szczecinie.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Telefon</div>
                    <div className="text-gray-700">+48 531 234 567</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Adres</div>
                    <div className="text-gray-700">Szczecin, Zachodniopomorskie</div>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="pt-8">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="jan@przykład.pl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Wiadomość
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      rows={4}
                      placeholder="Opowiedz nam o swoim projekcie..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Wyślij Wiadomość
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
