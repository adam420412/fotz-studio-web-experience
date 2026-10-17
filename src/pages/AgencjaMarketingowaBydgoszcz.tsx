import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingUp, Users, MapPin, CheckCircle2, ArrowRight, Phone, Target, Smartphone, BarChart3, Lightbulb, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import LocalSEOBoost from "@/components/seo/LocalSEOBoost";

export default function AgencjaMarketingowaBydgoszcz() {
  const breadcrumbs = [
    { name: "Strona główna", url: "/" },
    { name: "Agencja marketingowa", url: "/agencja-marketingowa" },
    { name: "Bydgoszcz", url: "/agencja-marketingowa/bydgoszcz" },
  ];

  const services = [
    {
      id: 1,
      title: "Pozycjonowanie SEO",
      description: "Praca nad widocznością Twojej firmy w wyszukiwarce na frazy związane z Bydgoszczą i regionem Kujaw: audyt, poprawki na stronie, treści i linkowanie. Nie gwarantujemy konkretnej pozycji w Google — pokazujemy, co zrobiliśmy i jak zmienia się widoczność.",
      icon: TrendingUp,
      features: ["Audyt SEO", "Linkowanie", "Optymalizacja on-page"],
    },
    {
      id: 2,
      title: "Google Ads i kampanie PPC",
      description: "Bezpośrednie dotarcie do potencjalnych klientów szukających usług w Bydgoszczy. Konfigurujemy i prowadzimy kampanie, pilnujemy budżetu i regularnie je optymalizujemy. Budżet reklamowy płacony Google jest zawsze osobno od naszego wynagrodzenia.",
      icon: Target,
      features: ["Google Search", "Display & Video", "Remarketing"],
    },
    {
      id: 3,
      title: "Media społecznościowe",
      description: "Budowanie marki na Facebooku, Instagramie, TikToku i LinkedIn. Zaangażowanie publiczności, tworzenie treści i zarządzanie mediami społecznościowymi dla firm z Bydgoszczy.",
      icon: Users,
      features: ["Strategie SM", "Content creation", "Community management"],
    },
    {
      id: 4,
      title: "Strony WWW i e-commerce",
      description: "Nowoczesne, responsywne strony internetowe zaprojektowane z myślą o konwersji. Szybkie ładowanie, bezpieczeństwo SSL i pełna optymalizacja dla mobilnych urządzeń.",
      icon: Smartphone,
      features: ["Responsive design", "Szybkość ładowania", "Integracje"],
    },
    {
      id: 5,
      title: "Marketing content",
      description: "Tworzenie wartościowych treści, które przyciągają i konwertują klientów. Blog, artykuły, infografiki i wideo dla zwiększenia autorytetu Twojej marki w Bydgoszczy.",
      icon: Lightbulb,
      features: ["Blog optymalizowany", "Copywriting SEO", "Infografiki"],
    },
    {
      id: 6,
      title: "Analityka i raportowanie",
      description: "Pełne śledzenie wyników kampanii z raportami miesięczne. Analiza danych, optymalizacja strategii i ciągła poprawa skuteczności działań marketingowych.",
      icon: BarChart3,
      features: ["GA4 setup", "Raporty niestandardowe", "Optymalizacja"],
    },
  ];

  const pricingFactors = [
    {
      title: "Zakres działań",
      description: "Czy potrzebujesz jednego kanału (np. SEO albo Google Ads), czy kilku naraz: kampanii, social mediów, treści i strony WWW.",
    },
    {
      title: "Punkt wyjścia",
      description: "Stan strony, konta reklamowego i profili społecznościowych — inaczej wycenia się start od zera, a inaczej rozwój działań, które już trwają.",
    },
    {
      title: "Produkcja treści",
      description: "Liczba i rodzaj materiałów: teksty, grafiki, zdjęcia, wideo. Produkcję foto i wideo realizujemy własnym zespołem.",
    },
    {
      title: "Budżet reklamowy",
      description: "Budżet płacony Google lub Meta jest zawsze osobno od naszego wynagrodzenia — to Ty decydujesz, ile przeznaczasz na reklamy.",
    },
  ];

  const faqs = [
    {
      question: "Ile czasu trwa pojawienie się rezultatów z SEO?",
      answer: "SEO to inwestycja długoterminowa i nie da się podać sztywnego terminu efektów — zależy on od branży, konkurencji i stanu strony. Zwykle na wyraźne zmiany trzeba poczekać kilka miesięcy. Google Ads mogą zacząć przyprowadzać ruch szybciej, bo reklamy wyświetlają się od momentu uruchomienia kampanii.",
    },
    {
      question: "Dlaczego wybierać FOTZ zamiast innych agencji?",
      answer: "Pracujemy z Poznania, a firmy z Bydgoszczy obsługujemy zdalnie. Łączymy kampanie i SEO z własną produkcją foto i wideo, więc kreacje powstają w jednym zespole. Realizowaliśmy projekty m.in. dla Enea Stadionu, FPS Cegielski i WSB Merito. Stawiamy na przejrzystość i regularne raporty z wykonanych działań.",
    },
    {
      question: "Czy mogę anulować umowę w każdym momencie?",
      answer: "Tak. Nasze umowy są elastyczne i można je anulować ze stosownym wypowiedzeniem. Nie ma ukrytych opłat ani kontraktów na sztywne warunki. Chcemy pracować dla Ciebie z powodu rezultatów, które dostarczamy.",
    },
    {
      question: "Czy FOTZ pracuje z firmami spoza Bydgoszczy?",
      answer: "Tak. Nasz zespół pracuje z Poznania i obsługuje zdalnie firmy z różnych miast, w tym z Bydgoszczy. Strategię dopasowujemy do zasięgu firmy — lokalnego, regionalnego lub ogólnopolskiego.",
    },
    {
      question: "Ile kosztuje współpraca?",
      answer: "Wycenę przygotowujemy po rozmowie o zakresie: liczbie kanałów, stanie strony i kont reklamowych oraz ilości treści do przygotowania. Budżet reklamowy płacony Google lub Meta jest zawsze osobno. Wycena i pierwsza konsultacja są bezpłatne.",
    },
  ];

  const areas = [
    "Śródmieście",
    "Fordon",
    "Kapuściska",
    "Wyżyny",
    "Błonie",
    "Bartodzieje",
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Bydgoszcz | Fotz Studio"
        description="Agencja marketingowa dla firm z Bydgoszczy ✓ SEO, Google Ads, Social Media, strony WWW. Pracujemy z Poznania, Bydgoszcz obsługujemy zdalnie. Bezpłatna wycena!"
        canonical="https://www.fotz-studio.pl/agencja-marketingowa/bydgoszcz"
        keywords="agencja marketingowa Bydgoszcz, SEO Bydgoszcz, Google Ads Bydgoszcz, media społecznościowe, strony WWW, marketing Kujaw"
      />

      <BreadcrumbSchema items={breadcrumbs} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-blue-100 text-blue-700">
              <MapPin className="w-4 h-4 mr-2" />
              Pracujemy z Poznania — Bydgoszcz obsługujemy zdalnie
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Agencja Marketingowa Bydgoszcz
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              SEO, Google Ads, social media i strony WWW dla firm z Bydgoszczy. Pracujemy z Poznania, a współpracę z firmami z Bydgoszczy prowadzimy zdalnie — od strategii po własną produkcję foto i wideo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/kontakt">
                  <Phone className="w-5 h-5 mr-2" />
                  Bezpłatna wycena
                </Link>
              </Button>
              <Button asChild
                size="lg"
                variant="outline"
                className="border-2 border-slate-300"
              ><a href="/kontakt">
                <ArrowRight className="w-5 h-5 mr-2" />
                Zapytaj o szczegóły
              </a></Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Usługi marketingowe dla Bydgoszczy
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Kompleksowe rozwiązania marketingowe dostosowane do potrzeb Twojej firmy w Bydgoszczy i regionie.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={service.id}
                    className="hover:shadow-lg transition-shadow border-slate-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Od czego zależy wycena
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Nie mamy sztywnego cennika. Wycenę przygotowujemy po rozmowie o zakresie i celach Twojej firmy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricingFactors.map((factor) => (
                <Card key={factor.title} className="border-slate-200">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {factor.title}
                        </h3>
                        <p className="text-slate-700">{factor.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/kontakt">Poproś o wycenę</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Areas Served Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Obsługujemy wszystkie dzielnice Bydgoszczy
              </h2>
              <p className="text-lg text-slate-600">
                Pracujemy z Poznania, a firmy z całego miasta i powiatu bydgoskiego obsługujemy zdalnie.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {areas.map((area, idx) => (
                <Card key={idx} className="border-blue-100 bg-blue-50">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-slate-900">{area}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                O Bydgoszczy
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                Bydgoszcz to największe miasto w województwie kujawsko-pomorskim, znane z pięknego Kanału Bydgoskiego, nowoczesnej Opery Nova i dynamicznie rozwijającego się sektora IT. Nasz zespół pracuje z Poznania, a z firmami z Bydgoszczy współpracujemy zdalnie — przez rozmowy online, wspólne dokumenty i regularne raporty.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Strategię zaczynamy od poznania Twojej firmy, klientów i konkurencji w Bydgoszczy i regionie Kujaw, a działania dopasowujemy do realnego zasięgu Twojej obsługi.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Najczęstsze pytania
              </h2>
              <p className="text-lg text-slate-600">
                Odpowiadamy na najczęściej zadawane pytania przez naszych klientów z Bydgoszczy.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gotów do transformacji cyfrowej Twojej firmy?
            </h2>
            <p className="text-lg text-blue-50 mb-8">
              Skontaktuj się z nami dzisiaj i otrzymaj bezpłatną wycenę oraz konsultację strategiczną.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-100 font-semibold">
                <a href="tel:+48790814814">
                  <Phone className="w-5 h-5 mr-2" />
                  +48 790 814 814
                </a>
              </Button>
              <Button asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-blue-600"
              ><a href="/kontakt">
                <Zap className="w-5 h-5 mr-2" />
                Przejdź do formularza
              </a></Button>
            </div>
          </div>
        </section>
      </div>

      <ServiceSchema
        name="FOTZ - Agencja Marketingowa Bydgoszcz"
        description="Agencja marketingowa z Poznania obsługująca zdalnie firmy z Bydgoszczy: SEO, Google Ads, social media i strony internetowe."
        areaServed="Bydgoszcz"
      />

      <FAQSchema items={faqs} />

      <LocalSEOBoost
        city="Bydgoszcz"
        cityLocative="Bydgoszczy"
        voivodeshipLocative="kujawsko-pomorskim"
        variant="agency"
      />
    </Layout>
  );
}
