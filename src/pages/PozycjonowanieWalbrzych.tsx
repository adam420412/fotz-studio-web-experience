import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  BarChart2,
  Star,
  Building2,
  Globe,
  Target,
  Award,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const faqItems = [
  {
    question: "Ile kosztuje pozycjonowanie w Wałbrzychu?",
    answer:
      "Pozycjonowanie lokalne w Wałbrzychu zaczyna się od 800 zł netto miesięcznie. Wałbrzych to 110k ludzi z bogatą historią górniczą i rosnącym turystyzmem (Kopalna Venus, turystyka podziemna). Dla branż lokalnych i usług — szybciej osiągamy TOP 10. Dla e-commerce i bardziej konkurencyjnych fraz — pakiet STANDARD (1500-3000 zł) lub PRO (3000-6000 zł).",
  },
  {
    question: "Ile czasu zajmuje TOP 10 w Google dla słów z Wałbrzychu?",
    answer:
      "Pierwsze rezultaty przychodzą po 4–6 tygodni. Stabilne pozycje TOP 10 uzyskujemy po 2–4 miesiące dla słów lokalnych. Wałbrzych ma niższą konkurencję SEO niż Dolnośląskie metropolie (Wrocław, Legnica), ale solidny rynek lokalny. Dla lokalnych fraz (np. 'wycieczka kopalna Wałbrzych', 'rower górski Wałbrzych') — top 10 w 3–6 tygodni. Traffic rośnie systematycznie.",
  },
  {
    question: "Jakie branże mają największy potencjał SEO w Wałbrzychu?",
    answer:
      "Turystyka i edukacja (Kopalna Venus, muzea górnicze, wycieczki podziemne) — wysokie zapotrzebowanie. Usługi lokalne i rzemiosło (fryzjerstwo, hydraulika, elektryka). Handel i e-commerce. Turystyka aktywna (rowery górskie, trasy piesze, agroturystyka). Usługi medyczne dla 110k populacji. Gastronomia i nocleg dla turystów. Transport i logistyka (sąsiedztwo głównych tras).",
  },
  {
    question: "Czy dziedzictwo górnicze i turystyka wpływają na SEO Wałbrzychu?",
    answer:
      "Zdecydowanie. Wałbrzych to legendarne miasto górnicze transformujące się w centrum turystyki górniczej. Frazy takie jak 'wycieczka do kopalni Wałbrzych', 'turystyka podziemna', 'muzeum górnictwa Venus' mają rosnący potencjał. Konkurencja jest niska — duża szansa na dominację dla turystyki i branż związanych z dziedzictwem. Nowe biznesu i usługi dla turystów to nowy rynek.",
  },
  {
    question: "Czy warto pozycjonować się na Wałbrzych czy cały Dolny Śląsk?",
    answer:
      "Zależy od branży. Dla lokalnych usług i turystyki — skupiamy się na Wałbrzychu i okolicach (Chocianów, Szczawienko). Dla e-commerce — optymalizujemy Wałbrzych, ale i całe Dolnośląskie ('wysyłka Dolny Śląsk'). Rekomendujemy strategię hybrydową: silna obecność w Wałbrzychu + zasięg Dolnośląski dla e-commerce i usług mobilnych.",
  },
  {
    question: "Czy transformacja z górnictwa na turystykę zmienia SEO Wałbrzychu?",
    answer:
      "Tak — Wałbrzych przechodzi ewolucję od miasta górniczego do centrum turystyki aktywnej i edukacyjnej. Powstawanie nowych biznesów turystycznych, atrakcji, noclegów i gastronomii. Potencjał SEO rośnie dla turystyki, HoReCa i usług edukacyjnych. Konkurencja jest niska — idealnie do szybkiego zdobycia pozycji i dominacji na lokalnym rynku turystycznym.",
  },
];

const PozycjonowanieWalbrzych = () => {
  const results = [
    {
      metric: "+220%",
      label: "Wzrost ruchu organicznego",
      context: "turystyka i usługi lokalne",
    },
    { metric: "TOP 5", label: "Pozycja w Google", context: "frazy Wałbrzych" },
    { metric: "3-4 mies.", label: "Czas do stabilnych pozycji", context: "konkurencyjne frazy" },
    { metric: "4,9/5", label: "Ocena klientów", context: "10 opinii" },
  ];

  const districts = [
    "Śródmieście",
    "Biały Dunajec",
    "Podzamcze",
    "Konradów",
    "Sobięcin",
    "Nowe Miasto",
    "Stare Miasto",
    "Rusinów",
  ];

  const industries = [
    { name: "Turystyka górnicza", icon: Star },
    { name: "Usługi lokalne", icon: Award },
    { name: "Handel e-commerce", icon: BarChart2 },
    { name: "Gastronomia", icon: Globe },
    { name: "Usługi medyczne", icon: Building2 },
    { name: "Agroturystyka", icon: Target },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Wałbrzych - SEO lokalne dla firm | fotz studio"
        description="Pozycjonowanie stron Wałbrzych. Agencja SEO fotz studio — audyt SEO, optymalizacja dla turystyki górniczej, usług lokalnych. Rynek Wałbrzychu z bogatą historią górniczą. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/walbrzych"
        ogTitle="Pozycjonowanie Wałbrzych — fotz studio Agencja SEO"
        ogDescription="Pozycjonowanie dla Wałbrzychu — turystyka górnicza, usługi lokalne. SEO dla miasta transformującego się z górnictwa na turystykę. Audyt SEO, optymalizacja, link building."
        keywords="pozycjonowanie wałbrzych, seo wałbrzych, agencja seo wałbrzych, pozycjonowanie lokalne wałbrzych, pozycjonowanie stron wałbrzych, seo dla firm wałbrzych"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Wałbrzych"
        description="Agencja SEO fotz studio oferuje pozycjonowanie stron dla firm z Wałbrzychu. Specjalizacja w turystyce górniczej, usługach lokalnych, handlu i gastronomii. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne dla Wałbrzychu i Dolnego Śląska."
        provider="Fotz Studio"
        areaServed="Wałbrzych"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Wałbrzych", url: "https://fotz.pl/uslugi/pozycjonowanie/walbrzych" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gray-900 overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Pozycjonowanie lokalne · Wałbrzych i Dolny Śląsk
              </div>
            </FadeInView>

            <FadeInView delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Pozycjonowanie{" "}
                <span className="text-yellow-400">Wałbrzychu</span> — lokalne SEO dla firm
              </h1>
            </FadeInView>

            <FadeInView delay={0.2}>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Pomagamy firmom z Wałbrzychu zdobyć pierwszą stronę Google. Wałbrzych to 110k ludzi,
                bogatą historią górniczą i rosnącym rynkiem turystyki górniczej w Dolnym Śląsku.
                Audyt SEO, optymalizacja techniczna, content i link building dostosowane do lokalnego rynku.
              </p>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-base px-8 bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                  <Link to="/kontakt">
                    Zamów bezpłatny audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8 border-gray-700 text-white hover:bg-gray-800">
                  <Link to="/uslugi/pozycjonowanie">
                    Pakiety i ceny SEO
                  </Link>
                </Button>
              </div>
            </FadeInView>

            <FadeInView delay={0.4}>
              <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400">
                {["White-hat SEO", "Raport co 2 tygodnie", "Doświadczenie rynku Wałbrzychu", "Gwarancja transparentności"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-800 border-y border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((r, i) => (
              <FadeInView key={i} delay={i * 0.1} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">
                  {r.metric}
                </div>
                <div className="text-sm font-medium text-white">{r.label}</div>
                <div className="text-xs text-gray-400 mt-1">{r.context}</div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Walbrzych SEO specifics */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Wałbrzych — od dziedzictwa górniczego do turystyki podziemnej
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-gray-300">
                <p>
                  Wałbrzych to <strong className="text-white">110 tys. ludzi</strong> z bogatą
                  <strong className="text-white"> historią górniczą</strong> — legendarne miasto węglowe Dolnego Śląska,
                  teraz transformujące się w nowoczesne centrum turystyki górniczej i usług lokalnych.
                </p>
                <p>
                  <strong className="text-white">Turystyka górnicza ekspanduje</strong> — Kopalna Venus,
                  turystyka podziemna, muzea górnictwa, wycieczki historyczne to nowy rynek z wysokim
                  zapotrzebowaniem na słowa kluczowe. Potencjał SEO rośnie — mniejsza konkurencja niż w Wrocławiu,
                  ale solidny rynek lokalny z bogatą ofertą dla turystów.
                </p>
                <p>
                  <strong className="text-white">Usługi dla turystów i mieszkańców</strong> — gastronomia,
                  noclegi, agroturystyka, wycieczki górskie, transport. <strong className="text-white">Handel i e-commerce</strong> — dla
                  110k populacji i turystów. <strong className="text-white"> Logistyka</strong> — sąsiedztwo głównych tras.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Wałbrzychu
                </h3>
                <div className="flex flex-wrap gap-2">
                  {districts.map((district) => (
                    <span
                      key={district}
                      className="bg-yellow-400/10 text-yellow-400 text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {district}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  + Dolny Śląsk (Legnica, Bolesławiec, Złotoryja...)
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Branże, które pozycjonujemy w Wałbrzychu
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Od turystyki górniczej po usługi lokalne — doświadczenie we wszystkich segmentach rynku Wałbrzychu.
            </p>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {industries.map((ind, i) => (
              <FadeInView key={i} delay={i * 0.08}>
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 flex items-center gap-3 hover:border-yellow-400/40 transition-colors">
                  <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center shrink-0">
                    <ind.icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="font-medium text-white text-sm">{ind.name}</span>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Jak działamy — pozycjonowanie firm z Wałbrzychu
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę i frazy z Wałbrzychu i całego Dolnego Śląska. Sprawdzamy potencjał w turystyce górniczej, usługach lokalnych czy Twojej branży.",
              },
              {
                step: "02",
                title: "Strategia dla Wałbrzychu i regionu",
                desc: "Dobieramy słowa kluczowe dla turystyki górniczej, usług lokalnych i e-commerce. Planujemy SEO dla transformującego się rynku Wałbrzychu.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści na lokalne i branżowe frazy, budujemy linki z turystycznych i branżowych źródeł.",
              },
              {
                step: "04",
                title: "Raportowanie i dostosowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Strategia dostosowywana do zmian konkurencji i wzrostu rynku Wałbrzychu.",
              },
            ].map((step, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center shrink-0 text-gray-900 font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-white text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.desc}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pakiety pozycjonowania
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Elastyczne pakiety dostosowane do potrzeb Twojej firmy. Wszystkie pakiety zawierają pełny audyt SEO.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "LOCAL",
                price: "800-1500",
                features: [
                  "Audyt SEO",
                  "20-30 słów kluczowych",
                  "Optymalizacja on-page",
                  "Raport co 2 tygodnie",
                  "Wałbrzych + bliska okolica",
                ],
              },
              {
                name: "STANDARD",
                price: "1500-3000",
                features: [
                  "Audyt SEO + techniczny",
                  "40-60 słów kluczowych",
                  "Optymalizacja + content",
                  "Link building",
                  "Raport tygodniowy",
                  "Wałbrzych + całe Dolnośląskie",
                ],
                highlight: true,
              },
              {
                name: "PRO",
                price: "3000-6000",
                features: [
                  "Pełny audyt wieloaspektowy",
                  "80+ słów kluczowych",
                  "Content strategy",
                  "Zaawansowany link building",
                  "Raport tygodniowy + konsultacje",
                  "Wałbrzych + Dolny Śląsk + B2B",
                ],
              },
            ].map((tier, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className={`rounded-xl p-8 border transition-all ${
                  tier.highlight
                    ? "bg-gray-900 border-yellow-400 ring-2 ring-yellow-400/20"
                    : "bg-gray-900 border-gray-700"
                }`}>
                  <h3 className={`text-lg font-bold mb-2 ${
                    tier.highlight ? "text-yellow-400" : "text-white"
                  }`}>
                    {tier.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">{tier.price} zł</span>
                    <span className="text-gray-400 ml-2">/mies. netto</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${
                    tier.highlight
                      ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                      : "border-gray-700 text-white hover:bg-gray-800"
                  }`} variant={tier.highlight ? "default" : "outline"}>
                    <Link to="/kontakt">Wybierz pakiet</Link>
                  </Button>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-400 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gotowy na pierwszą stronę Google w Wałbrzychu?
            </h2>
            <p className="text-gray-800 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Otrzymasz raport z konkretnymi
              rekomendacjami dla rynku Wałbrzychu i całego Dolnego Śląska.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8 bg-gray-900 text-yellow-400 hover:bg-gray-800">
                <Link to="/kontakt">
                  Zamów bezpłatny audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base px-8 border-gray-900 text-gray-900 hover:bg-yellow-300"
              >
                <Link to="/uslugi/pozycjonowanie">Wszystkie pakiety SEO</Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              FAQ — pozycjonowanie stron Wałbrzych
            </h2>
          </FadeInView>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <FadeInView key={i} delay={i * 0.05}>
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-gray-900 border border-gray-700 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5 text-white hover:text-yellow-400">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </FadeInView>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Internal nav */}
      <section className="py-12 bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
            Pozycjonowanie w innych miastach:
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "Pozycjonowanie Warszawa", url: "/uslugi/pozycjonowanie/warszawa" },
              { label: "Pozycjonowanie Kraków", url: "/uslugi/pozycjonowanie/krakow" },
              { label: "Pozycjonowanie Wrocław", url: "/uslugi/pozycjonowanie/wroclaw" },
              { label: "Pozycjonowanie Poznań", url: "/uslugi/pozycjonowanie/poznan" },
              { label: "Pozycjonowanie Gdańsk", url: "/uslugi/pozycjonowanie/gdansk" },
              { label: "Pozycjonowanie Katowice", url: "/uslugi/pozycjonowanie/katowice" },
              { label: "Pozycjonowanie Gliwice", url: "/uslugi/pozycjonowanie/gliwice" },
              { label: "Pozycjonowanie Zabrze", url: "/uslugi/pozycjonowanie/zabrze" },
              { label: "Wszystkie usługi SEO", url: "/uslugi/pozycjonowanie" },
            ].map((link) => (
              <Link
                key={link.url}
                to={link.url}
                className="text-yellow-400 hover:underline font-medium text-sm"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default PozycjonowanieWalbrzych;
