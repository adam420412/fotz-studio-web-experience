import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  BarChart2,
  Star,
  Building2,
  Globe,
  Target,
  Clock,
  Award,
  Shield,
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
    question: "Ile kosztuje pozycjonowanie w Sosnowcu?",
    answer:
      "Pozycjonowanie lokalne w Sosnowcu zaczyna się od 800 zł netto miesięcznie. Sosnowiec to 180k miasto z bogatą historią górniczą i rosnącym sektorem handlu, usług i małych biznesów. Dla branż tradycyjnych i lokalnych usług — szybciej i taniej osiągamy TOP 10. Dla e-commerce i bardziej konkurencyjnych fraz — pakiet STANDARD (1500-3000 zł) lub PRO (3000-6000 zł).",
  },
  {
    question: "Ile czasu zajmuje TOP 10 w Google dla słów z Sosnowca?",
    answer:
      "Pierwsze rezultaty przychodzą po 4–6 tygodni. Stabilne pozycje TOP 10 uzyskujemy po 2–4 miesiące dla słów lokalnych. Sosnowiec ma niższą konkurencję SEO niż większe miasta (Katowice, Kraków), ale solidny rynek lokalny. Dla lokalnych fraz (np. 'usługi transportowe Sosnowiec', 'fryzjer Sosnowiec') — top 10 w 3–6 tygodni. Traffic organiczny rośnie systematycznie.",
  },
  {
    question: "Jakie branże mają największy potencjał SEO w Sosnowcu?",
    answer:
      "Usługi lokalne i rzemiosło (fryzjerstwo, kosmetyka, hydraulika, elektryka) — wysokie zapotrzebowanie na franczyzy słów 'Sosnowiec'. Handel i e-commerce (moda, sport, wyposażenie domu). Logistyka i transport (sąsiedztwo Katowic i głównych tras GOM). Usługi medyczne i zdrowotne dla 180k populacji. Gastronomia i HoReCa. Turystyka związana z dziedzictwem górniczym.",
  },
  {
    question: "Czy dziedzictwo górnicze Sosnowca wpływa na SEO?",
    answer:
      "Zdecydowanie. Sosnowiec to legendarne miasto górnicze — frazy takie jak 'wycieczki historyczne Sosnowiec', 'muzeum górnictwa', 'turystyka górnicza' mają rosnący potencjał. Turystyka aktywna, edukacyjna i patrimonium stwarzają szanse dla usług związanych z historią. Jednocześnie miasto transformuje się — nowe biznesu i usługi. Mała konkurencja SEO dla tego segmentu = duża szansa.",
  },
  {
    question: "Czy warto pozycjonować się na Sosnowiec czy całe GOM?",
    answer:
      "Zależy od branży. Dla lokalnych usług (fryzjer, lekarz, auto-serwis, sklep) — skupiamy się na Sosnowcu i okolicach (Kazimierz Górniczy, Modrzejów). Dla e-commerce i B2B — optymalizujemy Sosnowiec, ale i całe GOM ('dostawa Zabrze Gliwice', 'transport GOM'). Rekomendujemy strategię hybrydową: silna obecność w Sosnowcu + zasięg regionalny.",
  },
  {
    question: "Czy transformacja pogornictwa w Sosnowcu zmienia SEO?",
    answer:
      "Tak — Sosnowiec przechodzi ewolucję od miasta górniczego do centrum usług i handlu. Powstawanie nowych biznesów, rozwój handlu, turystyki i Small & Medium Business. Potencjał SEO rośnie dla usług biznesowych, logistyki, handlu. Konkurencja jest niższa niż w dużych ośrodkach — idealnie do szybkiego zdobycia pozycji i dominacji lokalnej.",
  },
];

const PozycjonowanieSosnowiec = () => {
  const results = [
    {
      metric: "+240%",
      label: "Wzrost ruchu organicznego",
      context: "usługi lokalne i handel",
    },
    { metric: "TOP 5", label: "Pozycja w Google", context: "frazy Sosnowiec" },
    { metric: "3-4 mies.", label: "Czas do stabilnych pozycji", context: "konkurencyjne frazy" },
    { metric: "4,9/5", label: "Ocena klientów", context: "15 opinii" },
  ];

  const districts = [
    "Śródmieście",
    "Przezchlebie",
    "Centrum",
    "Maczki",
    "Kazimierz Górniczy",
    "Modrzejów",
    "Stary Sosnowiec",
    "Nowe Osiedle",
  ];

  const industries = [
    { name: "Usługi lokalne", icon: Star },
    { name: "Handel e-commerce", icon: Award },
    { name: "Transport i logistyka", icon: BarChart2 },
    { name: "Gastronomia", icon: Globe },
    { name: "Usługi medyczne", icon: Building2 },
    { name: "Turystyka górnicza", icon: Target },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Sosnowiec - SEO lokalne dla firm | fotz studio"
        description="Pozycjonowanie stron Sosnowiec. Agencja SEO fotz studio — audyt SEO, optymalizacja dla usług lokalnych, handlu, transportu. Rynek Sosnowca z bogatą historią górniczą. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/sosnowiec"
        ogTitle="Pozycjonowanie Sosnowiec — fotz studio Agencja SEO"
        ogDescription="Pozycjonowanie dla Sosnowca — usługi lokalne, handel, transport. SEO dla rynku górniczego i transformującego się miasta. Audyt SEO, optymalizacja, link building."
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Sosnowiec"
        description="Agencja SEO fotz studio oferuje pozycjonowanie stron dla firm z Sosnowca. Specjalizacja w usługach lokalnych, handlu, transporcie i turystyce górniczej. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne dla Sosnowca i GOM."
        provider="Fotz Studio"
        areaServed="Sosnowiec"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Sosnowiec", url: "https://fotz.pl/uslugi/pozycjonowanie/sosnowiec" },
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
                Pozycjonowanie lokalne · Sosnowiec i GOM
              </div>
            </FadeInView>

            <FadeInView delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Pozycjonowanie{" "}
                <span className="text-yellow-400">Sosnowiec</span> — lokalne SEO dla firm
              </h1>
            </FadeInView>

            <FadeInView delay={0.2}>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Pomagamy firmom z Sosnowca zdobyć pierwszą stronę Google. Sosnowiec to 180k ludzi,
                bogatą historią górniczą i rosnącym rynkiem usług, handlu i transportu w GOM.
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
                {["White-hat SEO", "Raport co 2 tygodnie", "Doświadczenie rynku Sosnowca", "Gwarancja transparentności"].map(
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

      {/* Sosnowiec SEO specifics */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sosnowiec — od dziedzictwa górniczego do nowoczesnego rynku
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-gray-300">
                <p>
                  Sosnowiec to <strong className="text-white">180 tys. ludzi</strong> z bogatą
                  <strong className="text-white"> historią górniczą</strong> — legendarne miasto węglowe GOM,
                  teraz transformujące się w nowoczesne centrum usług, handlu i małych biznesów.
                </p>
                <p>
                  <strong className="text-white">Rynek lokalny ekspanduje</strong> — usługi dla 180k ludzi,
                  handel e-commerce, gastronomia, transport, turystyka związana z dziedzictwem górniczym.
                  Potencjał SEO rośnie — mniejsza konkurencja niż w Katowicach czy Krakowie,
                  ale solidny rynek lokalny z wysokim zapotrzebowaniem na słowa kluczowe.
                </p>
                <p>
                  <strong className="text-white">Turystyka górnicza i edukacyjna</strong> — wycieczki,
                  muzea, patimoniium stwarzają szanse dla branży usług turystycznych.
                  <strong className="text-white"> Logistyka</strong> — sąsiedztwo głównych tras A1/A4 = rynek transportu.
                  <strong className="text-white"> Handel i usługi</strong> — intensywna lokalnie.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Sosnowca
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
                  + cały GOM (Zabrze, Gliwice, Katowice, Bytom, Chorzów...)
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
              Branże, które pozycjonujemy w Sosnowcu
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Od usług lokalnych po turystykę górniczą — doświadczenie we wszystkich segmentach rynku Sosnowca.
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
              Jak działamy — pozycjonowanie firm z Sosnowca
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę i frazy z Sosnowca i całego GOM. Sprawdzamy potencjał w usługach lokalnych, handlu, logistyce czy Twojej branży.",
              },
              {
                step: "02",
                title: "Strategia dla Sosnowca i regionu",
                desc: "Dobieramy słowa kluczowe dla lokalnych usług, e-commerce i turystyki. Planujemy SEO dla transformującego się rynku Sosnowca.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści na lokalne i branżowe frazy, budujemy linki z branżowych źródeł.",
              },
              {
                step: "04",
                title: "Raportowanie i dostosowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Strategia dostosowywana do zmian konkurencji i wzrostu rynku Sosnowca.",
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
                  "Sosnowiec + bliska okolica",
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
                  "Sosnowiec + całe GOM",
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
                  "Sosnowiec + Śląsk + B2B",
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
              Gotowy na pierwszą stronę Google w Sosnowcu?
            </h2>
            <p className="text-gray-800 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Otrzymasz raport z konkretnymi
              rekomendacjami dla rynku Sosnowca i całego GOM.
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
              FAQ — pozycjonowanie stron Sosnowiec
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
              { label: "Pozycjonowanie Katowice", url: "/uslugi/pozycjonowanie/katowice" },
              { label: "Pozycjonowanie Wrocław", url: "/uslugi/pozycjonowanie/wroclaw" },
              { label: "Pozycjonowanie Poznań", url: "/uslugi/pozycjonowanie/poznan" },
              { label: "Pozycjonowanie Gdańsk", url: "/uslugi/pozycjonowanie/gdansk" },
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

export default PozycjonowanieSosnowiec;
