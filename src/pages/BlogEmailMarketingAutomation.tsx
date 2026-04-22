import { Layout } from "@/components/layout/Layout";
import { ArrowLeft, Calendar, Clock, User, Mail, Zap, BarChart3, CheckCircle2, AlertCircle, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Jaka jest różnica między automatyzacją a regularnymi newsletterami?",
    answer: "Newsletter to mail wysyłany ręcznie lub w ustalonym harmonogramie do wszystkich subskrybentów. Automatyzacja to inteligentne sekwencje wyzwalane konkretnymi działaniami użytkownika (zapis, porzucony koszyk, rocznica). Automatyzacja zwiększa ROI nawet o 500% dzięki personalizacji i timingowi."
  },
  {
    question: "Co to jest drip campaign i jak się różni od welcome sequence?",
    answer: "Drip campaign to seria maili wysyłana w określonym tempie do segmentu odbiorców (np. nowe leadsy). Welcome sequence to specjalny typ drip campaigna dedykowany świeżo zapisanym subskrybentom. Każda welcome sequence to drip campaign, ale nie każda drip campaign to welcome sequence."
  },
  {
    question: "Ile czasu powinno być pomiędzy emailami w sekwencji?",
    answer: "Optimalny timing zależy od typu sekwencji. Welcome: 0h, 24h, 72h, 7 dni. Nurturing drip: 2-4 dni. Cart abandonment: 1h, 24h, 72h. Zbyt krótkie interwały denerwują, zbyt długie - subskrybent zapomina kontekstu. Testuj i optymalizuj na podstawie open rate."
  },
  {
    question: "Jak osią automatyzacja zgodę z RODO?",
    answer: "Sekwencja musi być konsekwencją wyrażonej przez użytkownika zgody (opt-in list). Każdy mail musi zawierać aktualny adres firmy i możliwość wypisania się. Personalizacja (imię, zachowanie) musi być transparentna. Pamiętaj: RODO wymaga zgody na marketing, a automatyzacja to marketing."
  },
  {
    question: "Jaka jest najlepsza platformę do automatyzacji email?",
    answer: "Nie ma jednej najlepszej - to zależy od potrzeb. GetResponse: najlepszy stosunek ceny do funkcji. ActiveCampaign: zaawansowana automatyzacja. Klaviyo: dla e-commerce. MailerLite: dla twórców. Hubspot: dla CRM. Testuj wersję darmową zanim przejdziesz na płatny plan."
  },
  {
    question: "Jak zmierzyć efektywność sekwencji automatycznej?",
    answer: "Śledź: open rate, CTR, conversion rate (czy osiągnięty cel?), unsubscribe rate, bounce rate. Porównaj te metryki dla automatyzacji vs newsletter. Automatyzacja powinna mieć wyższy open rate (ze 150% wpływem na delivery) i CTR. Ale sprawdzaj też ROI - czy automatyzacja przynosi pieniądze?"
  },
  {
    question: "Czy powinienem wysyłać nowe produkty do całej listy czy tylko segmentu?",
    answer: "Zawsze segmentuj. Wysyłaj nowe produkty do subskrybentów zainteresowanych tą kategorią. Nieoddane zamówienia - do kupujących. Produkty premium - do top spenderów. Segmentacja zwiększa conversion rate o 150%+ i zmniejsza wypisania. Testuj różne segmenty, by znaleźć optymalne rozwiązanie."
  },
  {
    question: "Jak zrekonstruować nowych użytkowników za pomocą win-back kampanii?",
    answer: "Identyfikuj subskrybentów nieaktywnych (90+ dni bez otwarcia). Wyślij series win-back: 1. 'Tęskniliśmy za Tobą' + wartościowy content. 2. Po 5 dniach: 'Oto co się zmieniło'. 3. Po 3 dniach: 'Ostatnia szansa' + oferta. Jeśli nadalzostaniesz bierne - wypisz. Zwykle win-back ma engagement 15-25%."
  }
];

const BlogEmailMarketingAutomation = () => {
  return (
    <>
      <SEOHead
        title="Email marketing automation - jak wdrożyć sekwencje maili? 2025"
        description="Sekwencje automatyczne email marketing 2025 — welcome series, drip campaigns, cart abandonment, win-back. Jak wdrożyć automatyzację maili i zwiększyć ROI."
        ogType="article"
        canonical="https://fotz.pl/blog/email-marketing-automation"
        keywords="email marketing automation, sekwencje maili, drip campaign, welcome sequence, automatyzacja email, marketing automation"
      />
      <ArticleSchema
        title="Email marketing automation - jak wdrożyć sekwencje maili? 2025"
        description="Kompletny poradnik automatyzacji email marketing. Sekwencje powitalnej, drip campaigns, porzucone koszyki, win-back. Narzędzia i strategie."
        url="https://fotz.pl/blog/email-marketing-automation"
        datePublished="2025-04-12"
        dateModified="2025-04-12"
        author="Fotz Studio"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Email marketing automation", url: "https://fotz.pl/blog/email-marketing-automation" },
        ]}/>
      <FAQSchema items={faqItems} />
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-gray-900 to-gray-900" />
          <div className="container mx-auto px-4 relative z-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót do bloga
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                12 kwietnia 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                22 min czytania
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Fotz Studio
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Email marketing automation — jak wdrożyć sekwencje maili? 2025
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
              Automatyzacja email marketing zwiększa ROI o 500%. Odkryj, jak wdrożyć welcome sequences, drip campaigns i win-back strategii, które pracują za Ciebie 24/7.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <article className="prose prose-invert max-w-4xl mx-auto">
              <h2 className="text-white mt-8 mb-4">Czym jest email automation i dlaczego jest kluczowa?</h2>

              <p className="text-gray-300">
                Email automation to zestawsekwencji maili wyzwalanych konkretnymi działaniami użytkownika - zapisem, porzuconym koszykiem, rocznicą kupna czy brakiem aktywności. To nie jest rozsyłka do wszystkich jednocześnie, ale inteligentny system, który wysyła właściwe wiadomości na właściwy moment dla konkretnej osoby.
              </p>

              <p className="text-gray-300">
                <strong className="text-yellow-400">Regularne newslettery</strong> dotychąśmy trafiają do 20-25% odbiorców. Sekwencje automatyczne - do 40-50%, bo są wysyłane w momencie, gdy potencjalny klient jest najbardziej zaangażowany. Różnica to średnio +500% zwrotu z inwestycji.
              </p>

              <h3 className="text-yellow-400 text-xl font-bold mt-8 mb-4">Email automation vs newsletter - kluczowe różnice</h3>

              <div className="my-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Element</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Newsletter</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Automatyzacja</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">Wysyłanie</td>
                      <td className="py-3 px-4 text-gray-300">Ręczne lub w harmonogramie</td>
                      <td className="py-3 px-4 text-gray-300">Wyzwalane akcją użytkownika</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">Odbiorcy</td>
                      <td className="py-3 px-4 text-gray-300">Cała lista lub duży segment</td>
                      <td className="py-3 px-4 text-gray-300">Pojedynczy użytkownik lub mikro-segment</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">Open Rate</td>
                      <td className="py-3 px-4 text-gray-300">20-25%</td>
                      <td className="py-3 px-4 text-gray-300">40-60%</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">Personalizacja</td>
                      <td className="py-3 px-4 text-gray-300">Minimalna (imię)</td>
                      <td className="py-3 px-4 text-gray-300">Głęboka (zachowanie, historia)</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">Praca</td>
                      <td className="py-3 px-4 text-gray-300">Ręczna w każdym miesiącu</td>
                      <td className="py-3 px-4 text-gray-300">Zaraz po wdrożeniu - samo pracuje</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-semibold">ROI</td>
                      <td className="py-3 px-4 text-gray-300">100-200%</td>
                      <td className="py-3 px-4 text-gray-300">300-500%+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-white mt-12 mb-4">Typy sekwencji automatycznych - które wdrożyć?</h2>

              <p className="text-gray-300">
                Nie musisz wdrażać wszystkich naraz. Zacznij od welcome sequence, potem dodaj nurturing drip, a następnie specjalizuj się w pozostałych.
              </p>

              <div className="my-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Sekwencja</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Cel</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Czas</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Narzędzie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">Welcome series</td>
                      <td className="py-3 px-4 text-gray-300">Zbudować relację z nowym subskrybentem</td>
                      <td className="py-3 px-4 text-gray-300">5-10 dni</td>
                      <td className="py-3 px-4 text-yellow-400">Wszystkie platformy</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">Nurturing drip</td>
                      <td className="py-3 px-4 text-gray-300">Edukacja i budowanie zaufania przed sprzedażą</td>
                      <td className="py-3 px-4 text-gray-300">3-8 tygodni</td>
                      <td className="py-3 px-4 text-yellow-400">GetResponse, MailerLite, ActiveCampaign</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">Cart abandonment</td>
                      <td className="py-3 px-4 text-gray-300">Odzyskanie porzuconych koszyków (e-commerce)</td>
                      <td className="py-3 px-4 text-gray-300">1-3 dni</td>
                      <td className="py-3 px-4 text-yellow-400">Klaviyo, GetResponse, Shopify</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">Win-back</td>
                      <td className="py-3 px-4 text-gray-300">Reaktywacja nieaktywnych subskrybentów</td>
                      <td className="py-3 px-4 text-gray-300">1-2 tygodnie</td>
                      <td className="py-3 px-4 text-yellow-400">Wszystkie platformy</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">Post-purchase</td>
                      <td className="py-3 px-4 text-gray-300">Instrukcje, upsell, cross-sell</td>
                      <td className="py-3 px-4 text-gray-300">1-14 dni po zakupie</td>
                      <td className="py-3 px-4 text-yellow-400">Klaviyo, ActiveCampaign, MailerLite</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-semibold">Onboarding</td>
                      <td className="py-3 px-4 text-gray-300">Wdrażanie nowych użytkowników SaaS/aplikacji</td>
                      <td className="py-3 px-4 text-gray-300">2-4 tygodnie</td>
                      <td className="py-3 px-4 text-yellow-400">Zapier, GetResponse, Brevo</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-white mt-12 mb-4">Jak zbudować sekwencję powitalną (welcome series)?</h2>

              <p className="text-gray-300">
                Welcome sequence to najważniejsza sekwencja automatyczna. Ustala ton całej relacji z klientem i może zwiększyć conversion rate nawet o 300% w stosunku do brak welcome sequence.
              </p>

              <h3 className="text-yellow-400 text-lg font-bold mt-6 mb-4">5-email welcome blueprint</h3>

              <div className="space-y-4">
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="text-yellow-400 font-bold mb-2">Email 1: Podziękowanie + Lead Magnet (wysyłanie natychmiast)</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Temat:</strong> "Twój [nazwa lead magnetu] jest gotowy!"</p>
                  <p className="text-gray-300 text-sm"><strong>Zawartość:</strong> Podziękowanie, bezpośredni link do pobrania lead magnetu, krótkie przedstawienie się, zaproszenie do odpisania.</p>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="text-yellow-400 font-bold mb-2">Email 2: Twoja Historia (dzień 2)</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Temat:</strong> "Jak zaczęłem..." lub "Czemu to robię"</p>
                  <p className="text-gray-300 text-sm"><strong>Zawartość:</strong> Krótka, emocjonalna historia o tym, jak zacząłeś. Problem, który miałeś, jak go rozwiązałeś. Dlaczego to robisz teraz.</p>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="text-yellow-400 font-bold mb-2">Email 3: Wartościowy Content + Case Study (dzień 5)</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Temat:</strong> "Case study: jak X osiągnął Y" lub "3 sposoby na..."</p>
                  <p className="text-gray-300 text-sm"><strong>Zawartość:</strong> Konkretne wskazówki, case study, dowód społeczny (opinie, liczby). Brak sprzedaży - tylko wartość.</p>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="text-yellow-400 font-bold mb-2">Email 4: Przedstawienie Oferty (dzień 8)</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Temat:</strong> "Mamy coś dla Ciebie" lub "[Imię], to może Cię zainteresować"</p>
                  <p className="text-gray-300 text-sm"><strong>Zawartość:</strong> Delikatne przedstawienie głównej oferty (usługa, produkt, kurs). Dlaczego jest dla nich, jakie problemy rozwiązuje. Soft CTA.</p>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="text-yellow-400 font-bold mb-2">Email 5: Pytanie + Final CTA (dzień 12)</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Temat:</strong> "Mogę Ci coś ułatwić?" lub "Pytanie dla Ciebie"</p>
                  <p className="text-gray-300 text-sm"><strong>Zawartość:</strong> Zapytaj, co im utrudnia życie. Zaproponuj rozmowę, darmową konsultację. Mocny CTA z ofertą ograniczoną.</p>
                </div>
              </div>

              <h2 className="text-white mt-12 mb-4">Platformy do email automation - porównanie 2025</h2>

              <p className="text-gray-300">
                Wybór platformy zależy od budżetu, liczby kontaktów i złożoności sekwencji. Oto najlepsze opcje:
              </p>

              <div className="my-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Platforma</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Koszt/mies</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Limit kontaktów</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Funkcje</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">Mailchimp</td>
                      <td className="py-3 px-4 text-gray-300">0-330 PLN</td>
                      <td className="py-3 px-4 text-gray-300">do 500 (darmowo)</td>
                      <td className="py-3 px-4 text-gray-300">Baza, automacja prosta, A/B testing</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">GetResponse</td>
                      <td className="py-3 px-4 text-gray-300">59-999 PLN</td>
                      <td className="py-3 px-4 text-gray-300">do 1000 (w planie basic)</td>
                      <td className="py-3 px-4 text-gray-300">Automatyzacja zaawansowana, webinary, landing pages</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">ActiveCampaign</td>
                      <td className="py-3 px-4 text-gray-300">99-999 PLN</td>
                      <td className="py-3 px-4 text-gray-300">bez limitu</td>
                      <td className="py-3 px-4 text-gray-300">Najlepsze automaty, CRM, AI copywriting</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">Klaviyo</td>
                      <td className="py-3 px-4 text-gray-300">20-999 PLN (za kontakt)</td>
                      <td className="py-3 px-4 text-gray-300">bez limitu</td>
                      <td className="py-3 px-4 text-gray-300">Najlepsza dla e-commerce, segmentacja zaawansowana</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-semibold">MailerLite</td>
                      <td className="py-3 px-4 text-gray-300">0-99 PLN</td>
                      <td className="py-3 px-4 text-gray-300">do 1000 (darmowo)</td>
                      <td className="py-3 px-4 text-gray-300">Automaty, landing pages, szablony piekne</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-white mt-12 mb-4">Siedem krytycznych błędów w automatyzacji email</h2>

              <div className="my-8 p-6 bg-gray-800 rounded-xl border border-gray-700">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-4">Unikaj tych błędów</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li><strong className="text-yellow-400">1. Wysyłanie za dużo maili za szybko</strong> - welcome sequence powinna trwać 7-10 dni, nie 3. Daj czasem się rozwinąć relacji.</li>
                      <li><strong className="text-yellow-400">2. Brak testowania sekwencji</strong> - testuj tematy, timing, zawartość. Nawet 1% wzrost open rate to znacznie więcej konwersji.</li>
                      <li><strong className="text-yellow-400">3. Nieodpowiednia segmentacja</strong> - wysyłaj cart abandonment tylko do osób, które mają koszyk. Wszystko inne to spam.</li>
                      <li><strong className="text-yellow-400">4. Ignorowanie mobilnych</strong> - 60% maili otwierane na telefonach. Testuj responsive design.</li>
                      <li><strong className="text-yellow-400">5. Brak jasnego CTA</strong> - użytkownik powinien wiedzieć, co zrobić. "Kupić", "Zarezerwować", "Pobrać" - konkretnie.</li>
                      <li><strong className="text-yellow-400">6. Pozostawianie nieaktywnych subskrybentów</strong> - co 90 dni wyślij win-back. Jeśli biernie - wypisz. Niskie engagement boli deliverability.</li>
                      <li><strong className="text-yellow-400">7. Wysyłanie tej samej sekwencji wszystkim</strong> - personalizuj na podstawie źródła zapisu, zachowania, etapu lejka. Nie ma One Size Fits All.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-white mt-12 mb-4">FAQ - 8 najczęstszych pytań</h2>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <details
                    key={index}
                    className="group p-4 bg-gray-800 rounded-lg border border-gray-700 cursor-pointer"
                  >
                    <summary className="font-semibold text-white flex items-center justify-between hover:text-yellow-400 transition-colors">
                      {item.question}
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-gray-300 mt-3 leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>

              <h2 className="text-white mt-12 mb-4">Podsumowanie - checklist wdrażania automatyzacji</h2>

              <div className="my-8 space-y-3">
                {[
                  "Wybierz platformę (zacznij od MailerLite lub GetResponse)",
                  "Zbuduj welcome sequence - to pierwsza priorytet",
                  "Wdrożyć na stronie - zintegruj formularz ze stroną internetową",
                  "Testuj i optymalizuj - A/B testing tematu, timing, zawartości",
                  "Dodaj nurturing drip - edukuj przed sprzedażą",
                  "Jeśli e-commerce - wdrożyć cart abandonment",
                  "Monitoruj metryki - open rate, CTR, conversion rate",
                  "Co 90 dni - review i redesign sekwencji",
                  "Skaluj - dodaj win-back, post-purchase, onboarding",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 rounded-xl border border-yellow-400/30">
                <h3 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Chcesz wdrożyć automatyzację email?
                </h3>
                <p className="text-gray-300 mb-4">
                  Email automation to jeden z najlepszych inwestycji w marketing. Zamiast wysyłać te same maile do wszystkich, wysyłasz właściwe wiadomości właściwym osobom we właściwym momencie. ROI mówi sam za siebie: +500%.
                </p>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Konsultacja z ekspertem
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 md:py-24 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-white">Powiązane artykuły</h2>
            <RelatedArticles />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogEmailMarketingAutomation;
