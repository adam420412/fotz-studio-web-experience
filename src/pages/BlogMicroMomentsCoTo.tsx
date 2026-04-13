import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Smartphone, TrendingUp, CheckCircle2 } from "lucide-react";
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

export default function BlogMicroMomentsCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Micro-Moments — co to jest? Chwile decyzyjne w marketingu mobilnym" },
  ];

  const microMomentTypes = [
    {
      type: "I-Want-to-Know Moments",
      pl: "Chcę wiedzieć",
      desc: "Użytkownik szuka informacji — research, edukacja, porównania. Nie jest jeszcze gotowy do zakupu, ale zbiera wiedzę.",
      examples: "Jak działa fotowoltaika? Jaki laptop do grafiki? Co to jest CRM?",
      strategy: "Content marketing (blogi, filmy YT, poradniki), SEO na pytania 'jak', 'co to jest', 'jak wybrać'.",
      metric: "Organic traffic, time on page, email sign-ups.",
    },
    {
      type: "I-Want-to-Go Moments",
      pl: "Chcę pojechać",
      desc: "Użytkownik szuka lokalnego miejsca lub trasy — restauracja, sklep, salon, usługi w pobliżu. Mobile-first.",
      examples: "Restauracja sushi w pobliżu, serwis samochodowy Warszawa, Ikea godziny otwarcia.",
      strategy: "Google Business Profile, Local SEO, Local Google Ads, lokalne landing pages.",
      metric: "Google Maps clicks, 'get directions', phone calls, store visits.",
    },
    {
      type: "I-Want-to-Do Moments",
      pl: "Chcę zrobić",
      desc: "Użytkownik chce nauczyć się jak coś zrobić — tutorial, instrukcja, how-to. YouTube i wyszukiwarki to główne kanały.",
      examples: "Jak zainstalować umywalkę, jak zrobić risotto, jak skonfigurować GA4.",
      strategy: "How-to content (video, teksty), YouTube SEO, rich snippets (HowTo schema).",
      metric: "Video views, featured snippets, tutorial traffic.",
    },
    {
      type: "I-Want-to-Buy Moments",
      pl: "Chcę kupić",
      desc: "Użytkownik jest gotowy do zakupu — szuka najlepszej oferty, ceny, miejsca zakupu. Kluczowy moment dla konwersji.",
      examples: "Kup iPhone 15 cena, najlepsza oferta ubezpieczenia OC, zamów kwiaty online.",
      strategy: "Google Shopping, PPC (branded + product keywords), social proof, uproszczony checkout.",
      metric: "ROAS, conversion rate, CPA (Cost Per Acquisition).",
    },
  ];

  const microMomentsStrategy = [
    { step: "Zidentyfikuj micro-moments Twoich klientów", desc: "Zmapuj podróż klienta (buyer journey) i zidentyfikuj kluczowe momenty: kiedy szukają informacji, kiedy są gotowi do zakupu, gdzie są (lokalizacja, urządzenie)." },
    { step: "Bądź tam (Be There)", desc: "Obecność w momentach gdy klient szuka — SEO, Google Ads, Google Maps, YouTube. Klient który Cię nie znajdzie w micro-moment pójdzie do konkurencji." },
    { step: "Bądź pomocny (Be Useful)", desc: "Dostarczaj treści odpowiedzi na konkretne pytanie klienta w danym momencie. Nie generic content — odpowiadaj na pytanie które zadali." },
    { step: "Działaj szybko (Be Quick)", desc: "Strona ładuje się w 3 sekundy lub mniej. Checkout w 2 kliknięcia. Mobile-first UX. 53% użytkowników opuszcza stronę która ładuje się dłużej niż 3 sekundy." },
    { step: "Mierz i optymalizuj", desc: "Micro-conversion tracking per moment: search intent analysis, path to purchase, device breakdown, time to conversion." },
  ];

  const faqItems = [
    {
      question: "Co to są micro-moments?",
      answer: "Micro-moments to koncepcja Google z 2015 roku opisująca krótkie, intensywne chwile gdy użytkownik sięga po smartfon żeby coś sprawdzić, znaleźć, zrobić lub kupić. W tych momentach decyzje zakupowe i preferencje marki są kształtowane. Google zidentyfikował 4 typy: I-Want-to-Know (chcę wiedzieć), I-Want-to-Go (chcę pojechać), I-Want-to-Do (chcę zrobić), I-Want-to-Buy (chcę kupić). Dlaczego micro-moments mają znaczenie: konsumenci używają telefonów 150+ razy dziennie. 96% używa smartfona do research przed zakupem. 82% sprawdza telefon przed zakupem w sklepie. W każdym micro-moment klient oczekuje natychmiastowej, relevantnej odpowiedzi — jeśli jej nie dostanie od Ciebie, dostanie od konkurencji. Strategia: bycie obecnym, pomocnym i szybkim w każdym micro-moment.",
    },
    {
      question: "Jak micro-moments wpływają na strategię SEO?",
      answer: "Micro-moments a SEO: I-Want-to-Know moments → SEO na pytania informacyjne: 'co to jest X', 'jak X działa', 'X vs Y'. Target: featured snippets, PAA (People Also Ask), FAQ schema. Treść: wyczerpujące artykuły, definitywne poradniki. I-Want-to-Go moments → Local SEO: Google Business Profile (GMB), lokalne landing pages, 'near me' keywords, Local Pack. I-Want-to-Do moments → How-to SEO: YouTube SEO (filmy instruktażowe), HowTo schema markup, rich snippets. I-Want-to-Buy moments → Commercial SEO: product pages, pricing pages, comparison keywords ('najlepszy X', 'X opinie'). Techniczne wymagania dla micro-moments: Core Web Vitals (LCP poniżej 2.5s, FID poniżej 100ms, CLS poniżej 0.1). AMP lub szybkie ładowanie mobile. Structured data (FAQ, Product, HowTo schema). Mobile-first design.",
    },
    {
      question: "Jak mierzyć micro-moments w analityce?",
      answer: "Mierzenie micro-moments w GA4 i innych narzędziach: Search Intent Analysis: Podziel ruch organiczny wg search intent (informational/navigational/commercial/transactional) używając narzędzi jak Ahrefs lub własnej klasyfikacji keywords. Micro-conversion tracking: Track nie tylko final conversion ale micro-konwersje per moment: scroll do sekcji pricing (I-Want-to-Buy signal), kliknięcie numeru telefonu (I-Want-to-Go), wideo odtworzone do 75% (I-Want-to-Do), dodanie do ulubionych (I-Want-to-Know). Device breakdown: porównaj conversion rate mobile vs desktop — mobile micro-moments często konwertują gorzej ale ich wartość jest często wyższa (local intent). Time-to-conversion: ilu klientów konwertuje w tej samej sesji vs multi-session? Micro-moments to często multi-session journey. Path to purchase: GA4 Exploration → Funnel exploration. Które pages/touchpoints pojawiają się przed konwersją?",
    },
    {
      question: "Jaka jest rola mobile w micro-moments?",
      answer: "Mobile i micro-moments — nierozerwalne: Dlaczego mobile jest kluczowy: 91% wszystkich micro-moments dzieje się na smartfonie. Użytkownicy sięgają po telefon 150+ razy dziennie. 'Moment of intent' — impulsy są natychmiastowe, czas na decyzję minimalny. Mobile-first wymagania: Speed — 53% użytkowników opuszcza stronę ładującą się dłużej niż 3 sekundy. Google Page Speed Insights: cel LCP poniżej 2.5s. UX mobile — kciuk zone design, duże przyciski CTA, uproszczone formularze (nie więcej niż 3 pola). Local integration — dla I-Want-to-Go moments: clickable phone number, Google Maps embed, open hours clearly visible. One-click actions — tel: link, email: link, directions link, WhatsApp contact. AMP (Accelerated Mobile Pages) — nie wymagane ale przyspiesza ładowanie dla news i content. Metryka: mobile conversion rate optimization. Typowy benchmark: mobile konwertuje 2-3x gorzej niż desktop. Celem jest zmniejszenie tej luki.",
    },
    {
      question: "Jak dostosować content marketing do micro-moments?",
      answer: "Content strategy per micro-moment: I-Want-to-Know: Długi content (1500-3000 słów) wyczerpujący temat. Struktury FAQ, H2/H3 na pytania. Infografiki i dane. Celem: featured snippet i pozycja 0 w Google. I-Want-to-Go: Lokalne landing pages per miasto. Google Business Profile z aktualnymi info. Zdjęcia obiektu, godziny, parking. Review schema markup. I-Want-to-Do: Video tutorials (YouTube). Step-by-step written tutorials. Checklist i downloadable PDFs. HowTo schema markup dla rich snippets. I-Want-to-Buy: Product pages z pełnymi specyfikacjami i zdjęciami. Comparison tables (Ty vs konkurencja). Social proof (reviews, case studies, testimonials). Urgency i scarcity (jeśli autentyczne). Clear pricing i CTA. Tone po moment: I-Want-to-Know = edukacyjny, obiektywny. I-Want-to-Buy = przekonujący, konkretny. Formaty: mobile-first (krótkie paragrafy, duże nagłówki, bullet points).",
    },
    {
      question: "Czym micro-moments różnią się od customer journey?",
      answer: "Micro-moments vs Customer Journey: Customer Journey: makro-perspektywa na całą ścieżkę od awareness do lojalności. Linearna lub nieliniowa sekwencja etapów (Awareness → Interest → Consideration → Purchase → Loyalty). Planowana przez marketerów. Micro-moments: mikro-perspektywa — pojedyncze, intensywne chwile wewnątrz customer journey. Nieplanowane, impulsywne, kontekstowe. Inicjowane przez potrzebę klienta w danym momencie. Relacja: customer journey to mapa, micro-moments to konkretne skrzyżowania na tej mapie gdzie klient podejmuje decyzję. Przykład: Customer journey użytkownika kupującego ekspres do kawy: Awareness (I-Want-to-Know: 'co to jest coffee subscriptions') → Research (I-Want-to-Know: 'najlepszy ekspres automatyczny ranking') → Local check (I-Want-to-Go: 'Media Expert Warszawa godziny') → Purchase decision (I-Want-to-Buy: 'De'Longhi Magnifica kup online') → How-to (I-Want-to-Do: 'jak nastawić De'Longhi Magnifica'). Każdy z tych momentów to osobna szansa dla marki. Wygrywa ta która jest obecna, pomocna i szybka w każdym z nich.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Micro-Moments — co to jest? Chwile decyzyjne w marketingu mobilnym | fotz.pl"
        description="Micro-moments co to jest — wyjaśniamy czym są micro-moments Google, 4 typy (I-Want-to-Know/Go/Do/Buy), strategia mobilna i jak mierzyć micro-moments w analityce."
        canonical="https://fotz.pl/blog/micro-moments-co-to"

        keywords="Micro-Moments co to jest, Micro-Moments definicja, czym jest Micro-Moments, Micro-Moments w marketingu, Micro-Moments przykłady, jak działa Micro-Moments, Micro-Moments strategia"
      />
      <ArticleSchema
        title="Micro-Moments — co to jest? Chwile decyzyjne w marketingu mobilnym"
        description="Czym są micro-moments, 4 typy (I-Want-to-Know/Go/Do/Buy), strategia SEO i content per moment, rola mobile i pomiar micro-moments w GA4."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/micro-moments-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><Smartphone className="w-4 h-4" /> Mobile / SEO</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Micro-Moments — co to jest i jak wykorzystać w marketingu?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Micro-moments to krótkie chwile gdy użytkownik sięga po smartfon z konkretną intencją.
                I-Want-to-Know, I-Want-to-Go, I-Want-to-Do, I-Want-to-Buy — 4 momenty decyzyjne.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">4 typy micro-moments</h2>
              <div className="space-y-4 mb-6">
                {microMomentTypes.map((m, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-bold text-slate-900 text-sm">{m.type}</p>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{m.pl}</span>
                    </div>
                    <p className="text-slate-600 text-xs mb-2">{m.desc}</p>
                    <p className="text-slate-500 text-xs mb-1"><span className="font-medium">Przykłady:</span> {m.examples}</p>
                    <p className="text-blue-600 text-xs mb-1"><span className="font-medium">Strategia:</span> {m.strategy}</p>
                    <p className="text-slate-500 text-xs"><span className="font-medium">Metryki:</span> {m.metric}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Strategia micro-moments — 5 kroków</h2>
              <div className="space-y-3 mb-6">
                {microMomentsStrategy.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{idx + 1}</span>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{s.step}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zoptymalizować stronę pod micro-moments?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strony mobilne i SEO — budujemy strony które są obecne w kluczowych momentach decyzyjnych klientów.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Strony mobile-first — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Micro-Moments co to jest</h2>
              <FAQSchema items={faqItems} />
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg border border-slate-200">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6">
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 px-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        <ContactSection
          heading="Budujemy strony które wygrywają w micro-moments"
          subheading="SEO, mobile-first design i content — pomagamy firmom być obecnym gdy klienci szukają odpowiedzi."
        />
      </Layout>
    </>
  );
}
