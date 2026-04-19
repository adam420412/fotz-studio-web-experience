import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";

const faqItems = [
  {
    question: "Ile firm powinno wydawać na marketing?",
    answer: "Rekomendacje: Startup (0-2 lat): 5-10% przychodu, Mała firma (2-5 lat): 7-12%, Średnia firma (5+ lat): 5-10%, Duża firma: 2-5%. Przykład: firma z przychodem 200k zł powinna wydać 10-24k zł rocznie na marketing."
  },
  {
    question: "Czym różni się SEO od reklamy Google Ads?",
    answer: "SEO (organiczne pozycjonowanie) to długoterminowa inwestycja - wyniki po 3-6 mies., brak kosztów za klik, wyższa konwersja. Google Ads to reklama - wyniki natychmiast, płacisz za każdy klik, lepsze dla kampanii krótkoterminowych i launchów."
  },
  {
    question: "Czy strona internetowa jest obowiązkowa dla małej firmy?",
    answer: "Tak, idealna byłoby. Strona www buduje wiarygodność, poprawia widoczność w Google, pozwala zbierać leady 24/7 i konkurować z innymi firmami. Nawet prosta, tanio budowana strona jest lepsza niż jej brak. Google Business Profile to minimum, strona www to standard."
  },
  {
    question: "Jak długo trwa zanim zobaczę efekty marketingu?",
    answer: "Zależy od kanału: Google Ads - dzień, Social Media Ads - kilka dni, Email marketing - tygodnie, SEO organiczne - 3-6 miesięcy, Content marketing - 2-12 miesięcy. Kombinacja kanałów daje najszybsze rezultaty."
  },
  {
    question: "Czy warto inwestować w content marketing dla małej firmy?",
    answer: "Zdecydowanie tak. Content marketing buduje autorytet, przyciąga organiczny ruch z Google, poprawia conversion rate, działa długoterminowo. Najmniejszy koszt to własny czas lub 500-1500 zł/artykuł u copywritera. ROI bywa 300-500% w ciągu roku."
  },
  {
    question: "Kiedy zatrudnić agencję marketingową zamiast samodzielnego działania?",
    answer: "Zatrudnij agencję gdy: brakuje ci czasu, brakuje wiedzy (SEO, Google Ads), chcesz szybko skalować, potrzebujesz multi-kanałowej strategii. Warto zacząć samodzielnie (100-500 zł/mies. narzędzia) lub z freelancerem, später rozbudować zespół."
  },
  {
    question: "Jak mierzyć skuteczność marketingu dla firmy?",
    answer: "Kluczowe metryki: ROI (zysk/koszt marketingu), CAC (koszt pozyskania klienta), LTV (wartość klienta w czasie), conversion rate, cost per lead, traffic, leads, sprzedaż. Monitoruj w Google Analytics 4, Google Search Console, narzędziach CRM."
  },
  {
    question: "Czy social media mogą zastąpić stronę internetową?",
    answer: "Nie całkowicie. Social media buduje społeczność, generuje ruch - ale nie należą do Ciebie (mogą zmienić zasady, usunąć konto). Strona www to Twoja własna baza i lepszy punkt do konwersji. Idealne: strona + social media razem."
  }
];

const marketingChannelsData = [
  {
    channel: "SEO organiczne",
    cost: "500-2000 zł/mies",
    timeToResults: "3-6 miesięcy",
    bestFor: "Długoterminowy ruch, wysoka konwersja, firmy lokalne i ogólnopolskie"
  },
  {
    channel: "Google Ads",
    cost: "500-5000 zł/mies",
    timeToResults: "1-7 dni",
    bestFor: "Szybki ruch, kampanie sezonowe, e-commerce, lead generation"
  },
  {
    channel: "Social Media organicznie",
    cost: "0-500 zł/mies (narzędzia)",
    timeToResults: "4-12 tygodni",
    bestFor: "Community building, brand awareness, content sharing, B2C"
  },
  {
    channel: "Facebook/Instagram Ads",
    cost: "500-3000 zł/mies",
    timeToResults: "1-7 dni",
    bestFor: "Targeting demograficzny, retargeting, e-commerce, B2C"
  },
  {
    channel: "Email marketing",
    cost: "0-500 zł/mies",
    timeToResults: "2-4 tygodnie",
    bestFor: "Nurturing leadów, retention, sprzedaż dodatkowa (cross-sell)"
  },
  {
    channel: "Content marketing",
    cost: "1000-3000 zł/mies",
    timeToResults: "2-6 miesięcy",
    bestFor: "Autorytet branżowy, SEO, lead generation, edukacja klientów"
  },
  {
    channel: "Wideo marketing",
    cost: "1500-5000 zł/mies",
    timeToResults: "1-3 miesiące",
    bestFor: "YouTube SEO, Social media, product demos, testimonials"
  }
];

const budgetByCompanySizeData = [
  {
    size: "Mikrofirma (1-5 pracowników)",
    budget: "500-1500 zł/mies (6-18k/rok)",
    channels: "Google Business Profile, Google Ads, Email marketing, Local SEO"
  },
  {
    size: "Mała firma (6-20 pracowników)",
    budget: "1500-4000 zł/mies (18-48k/rok)",
    channels: "SEO, Google Ads, Social Media Ads, Content marketing, Email"
  },
  {
    size: "Średnia firma (21-100 pracowników)",
    budget: "4000-10000 zł/mies (48-120k/rok)",
    channels: "Wszystkie kanały, multi-channel strategy, retargeting campaigns"
  },
  {
    size: "Duża firma (100+ pracowników)",
    budget: "10000+ zł/mies (120k+/rok)",
    channels: "Full-funnel approach, brand campaigns, integrated marketing"
  }
];

const BlogMarketingDlaFirmy = () => {
  return (
    <>
      <SEOHead
        title="Marketing dla firmy - od czego zacząć? Poradnik 2025"
        description="Kompleksowy przewodnik marketingu internetowego dla małej firmy. Strategie, kanały, budżet. Dowiedz się, jak efektywnie promować firmę w 2025."
        ogType="article"
        canonical="https://fotz.pl/blog/marketing-dla-firmy"
        keywords="marketing dla firmy, marketing internetowy dla małej firmy, strategie marketingu, budżet marketingowy, kanały marketingu"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Marketing dla firmy: kompleksowy przewodnik 2025",
            "description": "Poradnik marketingu dla firm - strategie, kanały, budżety, praktyczne porady",
            "author": {
              "@type": "Organization",
              "name": "FOTZ"
            },
            "publisher": {
              "@type": "Organization",
              "name": "FOTZ",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fotz.pl/logo-fotz.jpg"
              }
            },
            "datePublished": "2025-04-12",
            "dateModified": "2025-04-12"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://fotz.pl" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fotz.pl/blog" },
              { "@type": "ListItem", "position": 3, "name": "Marketing dla firmy" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          }
        ]}
      />

      <Layout>
        {/* Breadcrumb */}
        <section className="pt-32 pb-4 bg-gray-900">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-yellow-400 transition-colors">Strona główna</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Marketing dla firmy</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <article className="pb-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-6">
                  <ArrowLeft className="h-4 w-4" />
                  Wróć do bloga
                </Link>

                <span className="inline-block text-sm font-medium text-yellow-400 uppercase tracking-wider mb-4">
                  Marketing Internetowy
                </span>

                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Marketing dla firmy: kompleksowy przewodnik 2025
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Zespół FOTZ
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    12 kwietnia 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    22 min czytania
                  </span>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img loading="lazy"
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2015"
                    alt="Marketing dla firmy - strategie i kanały"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p className="text-xl text-gray-400 mb-8 italic">
                  Marketing jest dzisiaj kluczem do sukcesu każdej firmy, niezależnie od wielkości. W tym przewodniku dowiesz się, dlaczego marketing ma znaczenie, jakie kanały wybrać, ile zaplanować budżet i jak zacząć efektywnie promować swoją firmę już dziś.
                </p>

                {/* Intro Section */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
                  Dlaczego marketing jest kluczowy dla każdej firmy?
                </h2>

                <p className="text-gray-300 mb-6">
                  Niezależnie od tego, czy prowadzisz mikrofirmę, małą biznes czy duże przedsiębiorstwo, marketing decyduje o Twojej widoczności, przychodach i wzroście. Bez skutecznego marketingu, nawet najlepszy produkt lub usługa pozostanie niezauważona.
                </p>

                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span><strong>Budowanie świadomości marki:</strong> Klienci muszą wiedzieć, że istniejesz</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span><strong>Pozyskiwanie leadów:</strong> Aby zmienić potencjalnych klientów w rzeczywistych</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span><strong>Zwiększanie sprzedaży:</strong> Marketing to najbezpośredniejsza ścieżka do przychodu</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span><strong>Konkurowanie:</strong> W internecie konkurencja jest zacięta - musisz być widoczny</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span><strong>Budowanie lojalności:</strong> Marketing nurturing zachowuje istniejących klientów</span>
                  </li>
                </ul>

                {/* Marketing Channels Table */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
                  Kanały marketingowe - które wybrać?
                </h2>

                <p className="text-gray-300 mb-6">
                  Poniżej znajduje się przegląd najpopularniejszych kanałów marketingowych z rzeczywistymi kosztami, czasem do efektów i najlepszym zastosowaniem:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm text-gray-300 border border-gray-700">
                    <thead className="bg-gray-800 border-b border-gray-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-yellow-400">Kanał</th>
                        <th className="px-4 py-3 text-left font-bold text-yellow-400">Koszt startu</th>
                        <th className="px-4 py-3 text-left font-bold text-yellow-400">Czas do efektów</th>
                        <th className="px-4 py-3 text-left font-bold text-yellow-400">Najlepiej dla</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketingChannelsData.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700 hover:bg-gray-800/50 transition">
                          <td className="px-4 py-3 font-semibold text-white">{row.channel}</td>
                          <td className="px-4 py-3">{row.cost}</td>
                          <td className="px-4 py-3">{row.timeToResults}</td>
                          <td className="px-4 py-3">{row.bestFor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Small Firm Action Plan */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
                  Marketing dla małej firmy - od czego zacząć?
                </h2>

                <p className="text-gray-300 mb-6">
                  Jeśli prowadzisz małą firmę i nie wiesz, od czego zacząć, ten 5-etapowy plan działania pokaże Ci, jak skutecznie promować się przy ograniczonym budżecie:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Krok 1: Zbuduj wiarygodność online (tydzień 1)</h3>
                    <p className="text-gray-300 mb-3">Zanim zaczniesz płacić za marketing, upewnij się, że Twoja obecność online jest profesjonalna:</p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Załóż Google Business Profile (bezpłatnie) - to podstawa dla lokalnego SEO</li>
                      <li>• Zweryfikuj profil i uzupełnij wszystkie dane (zdjęcia, godziny, opis)</li>
                      <li>• Stwórz lub uaktualnij stronę www (budż: 500-3000 zł lub DIY za darmo)</li>
                      <li>• Dodaj linki do profili na social media - Google to sprawdza</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Krok 2: Zacznij zbierać recenzje (tydzień 2-3)</h3>
                    <p className="text-gray-300 mb-3">Recenzje to najsilniej działające medium marketingowe dla firm lokalnych. Praktyka:</p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Poproś 10 zadowolonych klientów o opinię na Google (SMS lub email)</li>
                      <li>• Oferuj małą zachętę: rabat, freebie lub wpisanie do konkursu</li>
                      <li>• Reaguj na każdą recenzję w ciągu 24h - pokazuje zaangażowanie</li>
                      <li>• Celem jest osiągnięcie 4.5+ gwiazdek w ciągu 2 miesięcy</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Krok 3: Włącz email marketing (tydzień 4)</h3>
                    <p className="text-gray-300 mb-3">Email to najrentowniejszy kanał (ROI 4200%) - zacznij zbierać adresy emaili:</p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Zainstaluj formularz captcha na stronie (Mailchimp, Brevo - bezpłatnie)</li>
                      <li>• Oferuj magnes leadowy (e-book, poradnik, rabat) w zamian za email</li>
                      <li>• Wyślij pierwszy email powitania z wartością dla subskrybenta</li>
                      <li>• Planuj 1-2 emaile tygodniowo - nie spamuj, dodawaj wartość</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Krok 4: Włącz płatne reklamy (miesiąc 2)</h3>
                    <p className="text-gray-300 mb-3">Po przygotowaniu fundamentu, zacznij inwestować w reklamy. Start z budżetem 500-1000 zł/mies:</p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Dla e-commerce/usług: Google Ads (szybkie rezultaty)</li>
                      <li>• Dla B2C/targeting: Facebook/Instagram Ads (precyzyjne audience)</li>
                      <li>• Prowadź A/B testing - testuj różne teksty i grafiki</li>
                      <li>• Śledź ROI: Ile kosztuje jeden klient pozyskany vs. jego wartość?</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Krok 5: Skaluj SEO (miesiąc 3+)</h3>
                    <p className="text-gray-300 mb-3">SEO to inwestycja długoterminowa - wyniki po 3-6 miesiącach, ale ruch na lata:</p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Optymalizuj stronę pod główne słowa kluczowe (free: Google Keyword Planner)</li>
                      <li>• Publikuj 1-2 artykuły bloga co miesiąc (1000-2000 słów)</li>
                      <li>• Buduj linki do strony (local directories, partnerships, PR)</li>
                      <li>• Monitoruj rankingi w Google Search Console i Google Analytics 4</li>
                    </ul>
                  </div>
                </div>

                {/* Budget by Company Size */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
                  Budżet marketingowy wg wielkości firmy
                </h2>

                <p className="text-gray-300 mb-6">
                  Jaki budżet powinna mieć każda firma? Oto rekomendacje branżowe:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm text-gray-300 border border-gray-700">
                    <thead className="bg-gray-800 border-b border-gray-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-yellow-400">Wielkość firmy</th>
                        <th className="px-4 py-3 text-left font-bold text-yellow-400">Rekomendowany budżet</th>
                        <th className="px-4 py-3 text-left font-bold text-yellow-400">Priorytetowe kanały</th>
                      </tr>
                    </thead>
                    <tbody>
                      {budgetByCompanySizeData.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700 hover:bg-gray-800/50 transition">
                          <td className="px-4 py-3 font-semibold text-white">{row.size}</td>
                          <td className="px-4 py-3 font-semibold text-yellow-300">{row.budget}</td>
                          <td className="px-4 py-3">{row.channels}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* In-house vs Agency */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
                  Własny dział marketingu vs agencja?
                </h2>

                <p className="text-gray-300 mb-6">
                  Czy powinieneś zatrudnić kogoś wewnętrznie czy pracować z agencją? Oto porównanie:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-yellow-400 mb-4">Własny zespół</h3>
                    <p className="text-gray-300 text-sm mb-4"><strong>Plusy:</strong></p>
                    <ul className="space-y-2 text-gray-300 text-sm mb-4">
                      <li>• Pełna kontrola nad strategią</li>
                      <li>• Osoba zna Twoją firmę dogłębnie</li>
                      <li>• Niższe koszty (1 osoba vs cały zespół agencji)</li>
                      <li>• Szybka komunikacja</li>
                    </ul>
                    <p className="text-gray-300 text-sm"><strong>Minusy:</strong></p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Jedna osoba = ograniczone umiejętności</li>
                      <li>• Urlopy, choroby, rezygnacje to problem</li>
                      <li>• Budowanie doświadczenia zajmuje czas</li>
                      <li>• Trudniej znaleźć dobrego specjalistę</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-yellow-400 mb-4">Agencja</h3>
                    <p className="text-gray-300 text-sm mb-4"><strong>Plusy:</strong></p>
                    <ul className="space-y-2 text-gray-300 text-sm mb-4">
                      <li>• Multi-specjalistyczny zespół (SEO, PPC, content, design)</li>
                      <li>• Doświadczenie z setkami firm</li>
                      <li>• Odpowiedzialność za rezultaty</li>
                      <li>• Szybsza transformacja strategii</li>
                    </ul>
                    <p className="text-gray-300 text-sm"><strong>Minusy:</strong></p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Wyższe koszty (2000-10000 zł+/mies)</li>
                      <li>• Mniej bezpośrednia komunikacja</li>
                      <li>• Mniejsza personalizacja (pracuje z wieloma klientami)</li>
                      <li>• Konieczność podpisu umowy</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 text-sm bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <strong>Rekomendacja:</strong> Mała firma do 500k zł przychodu: zacznij samodzielnie lub z freelancerem (500-2000 zł/mies), później rozbuduj. Średnia firma 500k-2mln: inwestuj w 1-2 osobowy wewnętrzny zespół + wsparcie agencji w specjalistycznych obszarach. Duża firma 2mln+: pełny dział marketingu + agencja do specjalistycznych kampanii.
                </p>

                {/* Common Marketing Mistakes */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
                  Najczęstsze błędy w marketingu firm
                </h2>

                <p className="text-gray-300 mb-6">
                  Unikaj tych błędów, aby nie marnować budżetu na nieefektywne strategie:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">1. Brak jasnego CTA (Call To Action)</h3>
                    <p className="text-gray-300 text-sm">Strona bez wyraźnego przycisku "Zamów", "Skontaktuj się", "Pobierz" = strona bez konwersji. Każda strona powinna mieć minimum 1 główny CTA.</p>
                  </div>

                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">2. Ignorowanie Google Business Profile</h3>
                    <p className="text-gray-300 text-sm">Dla firm lokalnych, brak lub źle uzupełniony profil = tracisz 30-50% potencjalnych klientów. Inwestycja: 1-2 godziny pracy.</p>
                  </div>

                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">3. Nieoptymalizowana strona dla mobilnych</h3>
                    <p className="text-gray-300 text-sm">70% ruchu internetu to mobile. Strona wolna na telefonie = wysoki bounce rate i niska konwersja. Sprawdź w Google PageSpeed Insights.</p>
                  </div>

                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">4. Rozpylanie budżetu na wiele kanałów jednocześnie</h3>
                    <p className="text-gray-300 text-sm">Lepiej mieć 2000 zł na 1 kanał (i dostać wyniki) niż 200 zł na 10 kanałów (brak rezultatów). Zacznij z 1-2, potem skaluj.</p>
                  </div>

                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">5. Brak śledzenia metryk i ROI</h3>
                    <p className="text-gray-300 text-sm">Jeśli nie wiesz, ile kosztuje pozyskanie klienta vs. jego wartość, pracujesz w ciemności. Włącz Google Analytics 4 za darmo.</p>
                  </div>

                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">6. Brak spójności brandu i wiadomości</h3>
                    <p className="text-gray-300 text-sm">Jeśli strona mówi "premium", a reklamy "tanio", klientów będzie mniej. Spójna wiadomość = wyższa konwersja o 20-30%.</p>
                  </div>
                </div>

                {/* FAQ Section */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
                  Najczęściej zadawane pytania o marketing dla firm
                </h2>

                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqItems.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border border-gray-700 rounded-lg px-6 data-[state=open]:bg-gray-800">
                      <AccordionTrigger className="text-left font-bold text-white hover:text-yellow-400 transition">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pt-3">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-gray-900">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Gotów zacząć efektywny marketing dla swojej firmy?
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    Zespół FOTZ pokaże Ci, jak zbudować strategię marketingową, która rzeczywiście generuje wyniki i przyychód. Specjalizujemy się w SEO, Google Ads, content marketingu dla firm lokalnych i ogólnopolskich.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="bg-gray-900 text-yellow-400 hover:bg-gray-800 font-bold px-8 py-6 text-base"
                    >
                      <Link to="/kontakt">Zaplanuj konsultację</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-900 text-gray-900 hover:bg-gray-800/20 font-bold px-8 py-6 text-base"
                    >
                      Pobrań poradnik (bezpłatnie)
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
};

export default BlogMarketingDlaFirmy;
