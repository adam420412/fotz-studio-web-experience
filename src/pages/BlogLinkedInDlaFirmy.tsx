import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Clock, Users, TrendingUp, MessageSquare, ArrowRight, Zap, BarChart3, Target } from "lucide-react";
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

export default function BlogLinkedInDlaFirmy() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "LinkedIn dla firmy — budowanie marki i generowanie leadów" },
  ];

  const contentTypes = [
    {
      type: "Tekst (bez zdjęcia)",
      reach: "Średni",
      engagement: "Wysoki",
      bestFor: "Storytelling, doświadczenia, ekspertyza",
    },
    {
      type: "Post ze zdjęciem",
      reach: "Wysoki",
      engagement: "Wysoki",
      bestFor: "Wiadomości, produkty, dokumentacja",
    },
    {
      type: "Karuzela (dokument PDF)",
      reach: "Bardzo wysoki",
      engagement: "Bardzo wysoki",
      bestFor: "Instrukcje, porady, case studies",
    },
    {
      type: "Video natywne",
      reach: "Bardzo wysoki",
      engagement: "Bardzo wysoki",
      bestFor: "Webinary, behind-the-scenes, démonstrations",
    },
    {
      type: "Artykuł LinkedIn",
      reach: "Wysoki",
      engagement: "Wysoki",
      bestFor: "Długie formy, thought leadership, analiza",
    },
    {
      type: "Poll",
      reach: "Średni",
      engagement: "Bardzo wysoki",
      bestFor: "Badania opinii, zaangażowanie audytorium",
    },
    {
      type: "Newsletter LinkedIn",
      reach: "Zbudowana baza",
      engagement: "Wysoki",
      bestFor: "Treści edukacyjne, branding, reemailing",
    },
  ];

  const profileElements = [
    {
      name: "Zdjęcie profilowe",
      description:
        "Profesjonalne, wysokojakościowe zdjęcie w proporcjach kwadratowych (1024x1024px). Logo firmy lub portret CEO — ostatnio widać trend ku personalizacji profilem kierownika.",
    },
    {
      name: "Banner (okładka)",
      description:
        "Grafika 1584x396px. Powinien zawierać główny komunikat marki, keyword LinkedIn dla firmy i CTA. Kolor i typografia zgodne z brandiem.",
    },
    {
      name: "Opis (About)",
      description:
        "150 słów maksymalnie. Wpisz keywords — 'LinkedIn dla firmy', 'B2B marketing', 'lead generation'. Zawrzyj: kim jesteś, co oferujesz, dla kogo, CTA do kontaktu.",
    },
    {
      name: "URL niestandardowy",
      description:
        "Zmień linkedin.com/company/1234567 na linkedin.com/company/twoja-firma. Łatwiejsze do zapamiętania i dzielenia.",
    },
    {
      name: "Sekcje i media",
      description:
        "Dodaj sekcje: Usługi, Case Studies, Artykuły, Media/Prasa. Piny artykuły na górze profilu. Zawartość multimedialna (wideo, PDF) zwiększa kredybiloość.",
    },
    {
      name: "Linki i CTA",
      description:
        "Dodaj link do strony www, formularza kontaktowego, kalendarza demo. LinkedIn pozwala na 5 linków w sekcji Website &amp; More — wykorzystaj to dla bezpośredniej konwersji.",
    },
  ];

  const platformComparison = [
    {
      platform: "LinkedIn dla firmy",
      users: "900+ mln (B2B focus)",
      b2bSuitability: "Doskonałe — głównie decydenci",
      costPerClick: "5-15 USD",
      bestFor: "Lead generation, thought leadership",
    },
    {
      platform: "Facebook Business",
      users: "2.9 mld (masowy)",
      b2bSuitability: "Ograniczone — głównie B2C",
      costPerClick: "0.5-3 USD",
      bestFor: "Brand awareness, retail",
    },
    {
      platform: "X (Twitter) dla firm",
      users: "500+ mln",
      b2bSuitability: "Średnie — industry talk",
      costPerClick: "0.5-4 USD",
      bestFor: "Thought leadership, PR",
    },
    {
      platform: "Google Ads (Search)",
      users: "Nad 5 mld zapytań/dzień",
      b2bSuitability: "Wyborne — intent-based",
      costPerClick: "2-20 USD",
      bestFor: "Direct response, keywords",
    },
  ];

  const faqItems = [
    {
      question: "Dlaczego LinkedIn dla firmy jest tak istotny w B2B?",
      answer:
        "LinkedIn to jedyna platforma sieciowa gdzie siedzi 68% pracowników B2B i 71% senior decydentów. To oznacza że Twoi potencjalni klienci spędzają czas właśnie tutaj — zamiast na TikToku czy Instagramie. 80% leadów B2B z social mediów pochodzi z LinkedIn. Budując profil firmowy i publikując regularnie, dostajesz dostęp do docelowej audytorium bez zimnych maili czy LinkedIn Ads.",
    },
    {
      question: "Jak często powinniśmy publikować na LinkedIn dla firmy?",
      answer:
        "Minimum 3-4 posty tygodniowo aby algorytm LinkedIn dostrzegł aktywność. Lepiej 5-6 postów z wysoką jakością niż 20 treści wartościowych dla użytkownika. LinkedIn nagradza regularność i czas na platformie — im więcej postów tym wyżej ranking. Idealnie: poniedziałek do piątku, 7-9 rano lub 12-14 (europejski czas pracy). Unikaj postów weekendowych chyba że skierowane do US.",
    },
    {
      question: "Jakie metryki są najważniejsze na LinkedIn dla firmy?",
      answer:
        "Dla organicznego: (1) Engagement rate — interakcje dzielone przez zasięg &times; 100% — cel powyżej 2-3%. (2) Zasięg (impressions) — ile osób widziało post. (3) Post saves — jeśli ludzie zapisują Twoje posty to silny sygnał wartości. (4) Profile views — ile osób zajrzało na Twój profil po co-post. (5) Follow growth — przyrost obserwatorów. Dla LinkedIn Ads: CPL (koszt leada), CTR powyżej 0.5%, conversion rate z form, pipeline value.",
    },
    {
      question: "Ile kosztuje reklama LinkedIn dla firmy (LinkedIn Ads)?",
      answer:
        "LinkedIn Ads to 3-5x droższe niż Facebook Ads ale z wyższą konwersją dla B2B. CPC (Cost Per Click): 5-15 USD. CPM (koszt na 1000 wyświetleń): 6-12 USD. CPL (koszt leada przez formularz): 30-150 USD zależnie od branży. Minimalny dzienny budżet: 10 USD. Jednak dla sensownych testów rekomendujemy 1500-3000 USD/miesiąc. ROI jest wyższy niż FB/IG dla B2B dzięki precyzyjnemu targetowaniu: stanowisko, seniorność, branża, rozmiar firmy.",
    },
    {
      question: "Jak zbudować profil firmowy LinkedIn aby generować leady?",
      answer:
        "Krok 1: Profesjonalne zdjęcie i banner z keyword 'LinkedIn dla firmy' oraz CTA. Krok 2: Opis z keywords i value proposition. Krok 3: Pełne sekcje — usługi, case studies, artykuły. Krok 4: Linki do strony, formularza, kalendarza demo. Krok 5: Aktywni pracownicy publikujący posty — employee advocacy. Krok 6: Regular posty z storytelling i proof social. Krok 7: Angażowanie się — komentarze i replies w pierwszą godzinę. Krok 8: LinkedIn Ads dla lead gen form. Krok 9: Mierzenie — analytics, tracking UTM, attribution.",
    },
    {
      question: "Czy personal branding na LinkedIn pomaga profilu firmowemu?",
      answer:
        "Tak, bardzo. Posty publikowane przez pracowników (zwłaszcza CEO i kierowników) mają 8-10x większy zasięg niż posty firmowego profilu. Pracownicy mają własne sieci i algorytm premiuje posty z autorów niż korporacyjne akty. Strategia employee advocacy — zorganizowanie zespołu do publikowania i sharingowania treści firmowych — zwiększa reach o 300-500%. To nie musi być skomplikowane: pracownicy share linku do artykułu na swoim profilu i dodają komentarz. LinkedIn widzi sygnał — wiele ludzi z firmy propaguje to — i boost reach.",
    },
    {
      question: "Jakie błędy popełniają firmy na LinkedIn dla biznesu?",
      answer:
        "Błąd #1: Tylko publikacja — bez nawiązywania relacji. LinkedIn to sieć społeczna. Musisz komentować, odpowiadać, angażować się. Błąd #2: Posting tylko treści sprzedażowych. 80% treści powinna być edukacyjna, inspiracyjna, value-adding. 20% może być sprzedażowe. Błąd #3: Ignorowanie algorytmu — posty bez visual (bez zdjęć/video) mają 10x mniej zasięgu. Błąd #4: Brak konsystencji — publikowanie raz na miesiąc nie działa. Błąd #5: Puste profile. Błąd #6: Linkowanie bezpośrednio w poście — LinkedIn demotuje posty z linkami. Lepiej: story w poście, link w first comment.",
    },
    {
      question: "Czy LinkedIn dla firmy jest lepszy od Google Ads dla lead gen?",
      answer:
        "To różne narzędzia do różnych celów. Google Ads działa gdy ktoś szuka rozwiązania — intent-based. LinkedIn dla firmy działa na intent ale też na targeting demograficznym — czy osoba jest VP Sales w tech firmie size 100-1000. Najlepiej: LinkedIn dla awareness, education, relationship-building. Google Ads do konwersji osób które już znają problem. Połączenie obu = maksimum lead gen. LinkedIn ma wyższy CPL ale wyższą quality klientów. Google niższy CPL ale mniej qualified.",
    },
  ];

  return (
    <>
      <SEOHead
        title="LinkedIn dla firmy — jak budować markę i generować leady? 2025"
        description="LinkedIn dla firmy — kompletny poradnik: optymalizacja profilu, strategie treści, LinkedIn Ads, generowanie leadów B2B. Praktyczne porady dla agencji i SaaS."
        canonical="https://fotz.pl/blog/linkedin-dla-firmy"
      />
      <ArticleSchema
        title="LinkedIn dla firmy — jak budować markę i generować leady? 2025"
        description="Jak efektywnie wykorzystać LinkedIn dla Business Profile: optymalizacja profilu, content strategy, LinkedIn Ads, lead generation, mierzenie ROI w 2025."
        datePublished="2025-04-12"
        dateModified="2025-04-12"
        url="https://fotz.pl/blog/linkedin-dla-firmy"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 8 min czytania
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" /> LinkedIn Marketing B2B
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                LinkedIn dla firmy — jak budować markę i generować leady?
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                LinkedIn to gdzie siedzą Twoi potencjalni klienci B2B. Jak zoptymalizować profil firmowy, publikować treści które
                konwertują i uruchamiać kampanie które generują leady wysokiej jakości.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Dlaczego LinkedIn dla firmy to nie opcja lecz konieczność
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  LinkedIn to największa platforma zawodowa na świecie — 900+ milionów użytkowników, z czego 68% to pracownicy
                  B2B. To jest Twoja docelowa publiczność. Zamiast tracić czas na TikTok, Instagram czy YouTube gdzie Twoi
                  klienci siedzi decyzent biznesowy (VP, CTO, CFO) — to siedzi na LinkedIn.
                </p>
                <p>
                  Dane mówią jasno: 80% leadów B2B z social mediów pochodzi z LinkedIn. To nie jest hype — to miejsce gdzie się
                  buduje reputacja B2B, gdzie publikuje się thought leadership, gdzie generuje się lead.
                </p>
                <p>
                  LinkedIn dla firmy działa na trzech poziomach:
                </p>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>
                    <strong>Organiczny:</strong> profil firmowy &plus; posty które docierają do sieci bez kosztów ADS
                  </li>
                  <li>
                    <strong>Employee advocacy:</strong> pracownicy dzielą treść firmową a algorytm boost reach
                  </li>
                  <li>
                    <strong>Płatny:</strong> LinkedIn Ads z precyzyjnym targetowaniem B2B (stanowisko, firma, branża)
                  </li>
                </ul>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Content Types Table */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Typy treści na LinkedIn dla firmy</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left p-4 font-semibold">Typ treści</th>
                      <th className="text-left p-4 font-semibold">Zasięg</th>
                      <th className="text-left p-4 font-semibold">Engagement</th>
                      <th className="text-left p-4 font-semibold">Najlepiej dla</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contentTypes.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-t border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50 transition`}
                      >
                        <td className="p-4 font-semibold text-gray-900">{row.type}</td>
                        <td className="p-4 text-gray-700">{row.reach}</td>
                        <td className="p-4 text-gray-700">{row.engagement}</td>
                        <td className="p-4 text-gray-600">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Profile Optimization */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Optymalizacja profilu firmowego na LinkedIn</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Twój profil to wizytówka firmy. 70% osób będzie przeglądać profil zanim skontaktuje się z Tobą. Dlatego każdy
                element musi być celowy i profesjonalny.
              </p>

              <div className="space-y-5">
                {profileElements.map((element, idx) => (
                  <div key={idx} className="flex gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-yellow-400 transition">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400 text-gray-900 font-bold flex items-center justify-center text-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{element.name}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{element.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </section>

        {/* LinkedIn vs Other Platforms */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">LinkedIn dla firmy vs inne platformy B2B</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left p-4 font-semibold">Platforma</th>
                      <th className="text-left p-4 font-semibold">Użytkownicy</th>
                      <th className="text-left p-4 font-semibold">Przydatność B2B</th>
                      <th className="text-left p-4 font-semibold">CPC</th>
                      <th className="text-left p-4 font-semibold">Najlepiej dla</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platformComparison.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-t border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                      >
                        <td className="p-4 font-semibold text-gray-900">{row.platform}</td>
                        <td className="p-4 text-gray-700">{row.users}</td>
                        <td className="p-4 text-gray-700">{row.b2bSuitability}</td>
                        <td className="p-4 text-gray-700">{row.costPerClick}</td>
                        <td className="p-4 text-gray-600 text-sm">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* LinkedIn Ads Basics */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">LinkedIn Ads — podstawy</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                LinkedIn Ads to najprecyzyjniej targetowana platforma reklamowa dla B2B. W przeciwieństwie do Facebook Ads gdzie
                targetujesz demografię i zainteresowania, LinkedIn Ads pozwala targetować:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-5 bg-gradient-to-br from-gray-50 to-yellow-50 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Stanowisko</h3>
                      <p className="text-sm text-gray-700">VP Sales, CTO, CFO itp.</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-gray-50 to-yellow-50 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Rozmiar firmy</h3>
                      <p className="text-sm text-gray-700">1-10, 11-50, 51-200 pracowników...</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-gray-50 to-yellow-50 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Branża</h3>
                      <p className="text-sm text-gray-700">Tech, finance, healthcare...</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-gray-50 to-yellow-50 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Konkretna firma</h3>
                      <p className="text-sm text-gray-700">Targetuj pracowników X firmy</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <p className="text-gray-900 leading-relaxed">
                  <strong>Formaty LinkedIn Ads:</strong> Sponsored Content (feed), Message Ads (prywatne wiadomości), Dynamic Ads
                  (osób-targeted), Lead Gen Forms (formularz na platformie bez redirect). Cena: CPC 5-15 USD, CPM 6-12 USD, CPL
                  30-150 USD.
                </p>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                LinkedIn Ads to najlepszą opcję gdy: chcesz targetować konkretny segment stanowisk (np. VP Sales w tech startups),
                budujesz awareness u decydentów, generujesz lead gen formami gdzie ludzie wpisują dane bez opuszczania LinkedIn.
                Gorzej działa do: sprzedaży retail, targetowania konsumentów, kampanii brand z low budget.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">FAQ — LinkedIn dla firmy</h2>
              <FAQSchema items={faqItems} />
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg border border-gray-200">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6 py-4 hover:bg-yellow-50 transition">
                      <span className="font-semibold text-gray-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 px-6 py-4 leading-relaxed bg-gray-50 border-t border-gray-200">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <FadeInView>
              <h2 className="text-3xl font-bold text-white mb-4">Gotowy na LinkedIn dla biznesu?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Budowanie marki na LinkedIn wymaga strategii, konsystencji i know-how. W fotz.pl pomagamy agencjom i SaaS
                firmom tworzyć strategie LinkedIn które generują leady i budują autorytety.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition"
              >
                Zaplanuj konsultację LinkedIn <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInView>
          </div>
        </section>

        <ContactSection
          heading="Kompleksowa strategia LinkedIn dla biznesu"
          subheading="Od optymalizacji profilu, strategii treści, do LinkedIn Ads i lead generation — pełne wsparcie marketingu B2B."
        />
      </Layout>
    </>
  );
}
