import { Layout } from "@/components/layout/Layout";
import { ArrowLeft, Calendar, Clock, User, Headphones, TrendingUp, Mic2, Users, DollarSign, CheckCircle, Radio, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Ile osób słucha podcastów w Polsce?",
    answer: "W 2025 roku podcasty słucha już 23% Polaków regularnie, a 38% przynajmniej raz spróbowało. To wzrost o 40% w ciągu ostatnich 2 lat. Trend pokazuje, że podcast stał się mainstream medium."
  },
  {
    question: "Jaki budżet potrzebny do uruchomienia podcastu firmowego?",
    answer: "Można zacząć od 1000 PLN miesięcznie - mikrofon, hosting, edycja. Pełna produkcja studia to 3000-8000 PLN/miesiąc. Najważniejsze jest consistency, a nie najdroższy sprzęt na początek."
  },
  {
    question: "Jak długo trwa zwrot z inwestycji w podcast?",
    answer: "Zwrot wymaganych 6-12 miesięcy konsekwentnego tworzenia. Pierwszy przychód z podcastu (sponsorzy, lead generation) pojawia się około miesiąca 4-6, jeśli podcastem poprawnie się promuje."
  },
  {
    question: "Czy podcast musi być na Spotify?",
    answer: "Nie, ale Spotify ma 40% słuchaczy podcastów w Polsce. Warto być na Spotify, Apple Podcasts i YouTube. RSS feed trafia automatycznie na większość platform naraz."
  },
  {
    question: "Jak generować lead-y z podcastu?",
    answer: "CTA w odcinku (link, kod promocyjny, landing page), kontakt do gościa jako lead generation, newsletter posłuchaczy, sponsorzy z affiliate linkami, membership/patron modele."
  },
  {
    question: "Czy podcast pomaga w SEO?",
    answer: "Bezpośrednio nie rankuje w Google, ale wspiera SEO: transkrypcje (tekstowa wersja), backlinki, content repurposing, zwiększona dwell time na stronie. Podcast to wsparcie strategii SEO, nie jej zastępca."
  },
  {
    question: "Ile odcinków potrzeba, aby zwrócić uwagę słuchaczy?",
    answer: "Konsekwencja ważniejsza niż ilość. Jednak 10-15 odcinków to punkt breakeven, gdzie algorytmy platform zaczynają promować podcast. Unikaj publikacji 1-2 odcinków i zaniechania."
  },
  {
    question: "Czy może być podcast dla sklepu e-commerce?",
    answer: "Oczywiście. Podcast może opowiadać o produktach, trendach branżowych, przypadkach klientów, poradach. Buduje autorytет, zaufanie i community wokół marki e-commerce."
  }
];

const BlogPodcastMarketing = () => {
  return (
    <>
      <SEOHead
        title="Podcast dla firmy - jak zacząć i czy to się opłaca? 2025"
        description="Podcast dla firmy - jak uruchomić podcastu firmowy, koszty produkcji, platformy, strategie marketingu podcastowego. Fotz Studio."
        ogType="article"
        canonical="https://fotz.pl/blog/podcast-dla-firmy"
        keywords="podcast dla firmy, podcast marketing, podcasty Polski, audioblog, marketing podcastowy, content marketing, Spotify"
      />
      <ArticleSchema
        title="Podcast dla firmy - jak zacząć i czy to się opłaca? 2025"
        description="Kompleksowy przewodnik po podcastach firmowych - platformy, koszty, strategie marketingu podcastowego i praktyczne porady."
        url="https://fotz.pl/blog/podcast-dla-firmy"
        datePublished="2025-02-15"
        dateModified="2026-04-12"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Podcast dla firmy", url: "https://fotz.pl/blog/podcast-dla-firmy" },
        ]}
      />
      <FAQSchema items={faqItems} />
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-gray-900 to-gray-900" />
          <div className="container mx-auto px-4 relative z-10">
            <div>
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
                  15 lutego 2025
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  18 min czytania
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Fotz Studio
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Podcast dla firmy — jak zacząć i czy to się opłaca?
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
                Podcast to medium, które eksploduje w Polsce. 23% Polaków słucha podcastów regularnie. Dowiedz się, jak zbudować podcast firmowy, który generuje lead-y, buduje autorytet i wspiera marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 md:py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-gray-200">

              {/* Intro */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Boom podcastów w Polsce - dlaczego Twoja firma powinna się zainteresować?</h2>
                <p className="text-lg text-gray-300 mb-4">
                  Podcast to medium audio, które słucha się podczas jazdy samochodem, treningu, czy pracy. W Polsce rynek podcastów rośnie 40% rok do roku. Podcasty słuchają pracownicy, przedsiębiorcy, decydenci - osoby zarabiające dobrze.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  Dla firm podcast to:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span><strong>Budowanie autorytetu</strong> - pozycjonujesz się jako ekspert w branży</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span><strong>Lead generation</strong> - call-to-action w odcinku kieruje do landing page lub formularza</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span><strong>Głęboka konwersja</strong> - słuchacz spędza 30-60 minut z Twoją marką</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span><strong>Repurposing treści</strong> - jeden odcinek to treści na bloga, Instagram, YouTube</span>
                  </li>
                </ul>
              </section>

              {/* Platforms Table */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8">Platformy podcastowe - gdzie publikować?</h2>
                <div className="overflow-x-auto border border-gray-700 rounded-lg">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700 bg-gray-800">
                        <th className="px-6 py-4 text-left font-semibold text-yellow-400">Platforma</th>
                        <th className="px-6 py-4 text-left font-semibold text-yellow-400">Zasięg PL</th>
                        <th className="px-6 py-4 text-left font-semibold text-yellow-400">Monetyzacja</th>
                        <th className="px-6 py-4 text-left font-semibold text-yellow-400">Koszt dla autora</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-white">Spotify</td>
                        <td className="px-6 py-4 text-gray-300">40% słuchaczy</td>
                        <td className="px-6 py-4 text-gray-300">Sponsorzy, Spotify for Creators</td>
                        <td className="px-6 py-4 text-gray-300">0 PLN</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-white">Apple Podcasts</td>
                        <td className="px-6 py-4 text-gray-300">25% słuchaczy</td>
                        <td className="px-6 py-4 text-gray-300">Sponsorzy (wymagana Apple Podcasts+ Subscriptions)</td>
                        <td className="px-6 py-4 text-gray-300">0 PLN</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-white">Google Podcasts</td>
                        <td className="px-6 py-4 text-gray-300">15% słuchaczy</td>
                        <td className="px-6 py-4 text-gray-300">Brak (przejmowany przez YouTube Music)</td>
                        <td className="px-6 py-4 text-gray-300">0 PLN</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-white">YouTube</td>
                        <td className="px-6 py-4 text-gray-300">Bardzo duży (video growth)</td>
                        <td className="px-6 py-4 text-gray-300">YouTube Partner (AdSense), Super Chat, Members</td>
                        <td className="px-6 py-4 text-gray-300">0 PLN</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-white">Anchor/Spotify for Podcasters</td>
                        <td className="px-6 py-4 text-gray-300">Integrator (dystrybucja)</td>
                        <td className="px-6 py-4 text-gray-300">Spotify for Creators (50/50 split)</td>
                        <td className="px-6 py-4 text-gray-300">0 PLN (hosting darmowy)</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-white">Buzzsprout</td>
                        <td className="px-6 py-4 text-gray-300">Hosting niezależny</td>
                        <td className="px-6 py-4 text-gray-300">Darmowy plan, Premium 120 PLN/rok</td>
                        <td className="px-6 py-4 text-gray-300">120 PLN/rok (premium)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Porada: Zaczynaj od Anchor (teraz Spotify for Podcasters) lub Buzzsprout. Jedna publikacja trafia automatycznie na 99% platform globalnie.
                </p>
              </section>

              {/* Koszty Produkcji */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8">Koszty produkcji podcastu - ile realnie wydać?</h2>

                <div className="space-y-8">
                  <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                    <div className="flex items-start gap-4">
                      <DollarSign className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Sprzęt (setup początkowy)</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>Mikrofon USB (Audio-Technica AT2020) - 200-400 PLN</li>
                          <li>Słuchawki - 100-300 PLN</li>
                          <li>Pop filter (reduktor hałasu) - 50-150 PLN</li>
                          <li>Statyw / uchwyt - 50 PLN</li>
                        </ul>
                        <p className="text-yellow-300 font-semibold mt-4">Razem: 400-900 PLN (jednorazowo)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Radio className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Hosting i dystrybucja (miesięczne)</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>Anchor/Spotify for Podcasters - 0 PLN</li>
                          <li>Buzzsprout Premium - 120 PLN/rok</li>
                          <li>Transistor (pro) - 200 PLN/miesiąc (zaawansowane)</li>
                        </ul>
                        <p className="text-yellow-300 font-semibold mt-4">Realnie: 0-50 PLN/miesiąc</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Mic2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Edycja i produkcja (miesięczne)</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>Audacity (darmowy) - 0 PLN</li>
                          <li>Adobe Audition lub Descript - 100-300 PLN/miesiąc</li>
                          <li>Freelancer edycja (2-3 zł/minut) - 200-600 PLN/miesiąc per odcinek</li>
                          <li>Studio graficzne (intro/outro) - 300-1500 PLN (jednorazowo)</li>
                        </ul>
                        <p className="text-yellow-300 font-semibold mt-4">DIY: 0-300 PLN/miesiąc | Profesjonalnie: 800-2000 PLN/miesiąc</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-400/10 border border-yellow-400/30 p-6 rounded-lg">
                    <p className="text-gray-100">
                      <strong>Budżet na start:</strong> 1000-2000 PLN/miesiąc wystarczy dla dobrze zrobionego podcastu (2-3 odcinki/miesiąc, edycja DIY lub freelancer).
                    </p>
                  </div>
                </div>
              </section>

              {/* Jak podcast wspiera marketing */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8">Jak podcast wspiera marketing Twojej firmy?</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <TrendingUp className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">SEO i transkrypcje</h4>
                        <p className="text-gray-300 text-sm">Każdy odcinek podcastu transkrybujesz (zamiana na tekst). To treść dla SEO, backlinki, wzmacnianie słów kluczowych.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Users className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Budowanie autorytetu</h4>
                        <p className="text-gray-300 text-sm">30-60 minut głosu = głębokie zaangażowanie. Słuchacz ustawia Cię jako eksperta. Gościnne odcinki z partnerami = wzmacnianie sieci.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Headphones className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Lead generation</h4>
                        <p className="text-gray-300 text-sm">CTA w każdym odcinku: "Wejdź na fotz.pl/bezplatny-konsultacja", kod promocyjny, newsletter. Podcastowe linki trackujesz w Google Analytics.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Repurposing treści</h4>
                        <p className="text-gray-300 text-sm">Jeden odcinek = artykuł na blogu, 5-10 postów Instagram, krótki film YouTube, newsletter. Mnożysz ROI z jednego nagrania.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Plan treści - pierwsze 10 odcinków */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8">Pierwsze 10 odcinków - plan treści</h2>
                <p className="text-gray-300 mb-6">
                  Konsekwencja to klucz. Oto sprawdzony plan pierwszych 10 odcinków, który buduje traction:
                </p>

                <div className="space-y-4">
                  {[
                    { num: 1, title: "Kim jesteśmy i co będziemy robić", desc: "Wprowadzenie: marca, historia, dlaczego ta branża, co słuchacz się nauczy" },
                    { num: 2, title: "Problem #1 w branży", desc: "Artykuł-rozmowa: główny problem, który boli Twoich klientów, jak go rozwiązujesz" },
                    { num: 3, title: "Gość #1 - ekspert z branży", desc: "Zaproś znany głos, np. influencera, eksperta. Budowanie wiarygodności" },
                    { num: 4, title: "Case study /Success story", desc: "Jak pomogłeś klientowi. Konkretne liczby, wyniki, proces" },
                    { num: 5, title: "Problem #2", desc: "Drugi ból naszych klientów. Temat bardziej zaawansowany" },
                    { num: 6, title: "Gość #2 - konkurent lub partner", desc: "Perspektywa z innej strony. Nie boisz się konkurencji, jesteś pewny" },
                    { num: 7, title: "Praktyczne porady - TOP 5", desc: "Wartościowy odcinek: TOP 5 rzeczy, które musisz zrobić w Twojej branży" },
                    { num: 8, title: "Gość #3 - satysfakcjonowany klient", desc: "Autentyczna rozmowa z klientem, który osiągnął wynik dzięki Twojej pomocy" },
                    { num: 9, title: "FAQ - odpowiadamy na pytania", desc: "Pytania ze social media, emaili. Pokazujesz, że słuchacie" },
                    { num: 10, title: "Podsumowanie 1. sezonu + co dalej", desc: "Słowa podziękowania, feedback request, zachęta do newsletter, teaser sezonu 2" },
                  ].map((item) => (
                    <div key={item.num} className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                          {item.num}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                          <p className="text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-yellow-400/10 border border-yellow-400/30 p-6 rounded-lg flex gap-4">
                  <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-100">
                      <strong>Złota reguła:</strong> W pierwszych 10 odcinków nie mów o sobie za dużo. Mów o PROBLEMACH, których rozwiązujesz. Słuchacz musi czuć, że to dla niego, nie o tobie.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8">Najczęstsze pytania o podcastach (FAQ)</h2>
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                      <h4 className="font-semibold text-white mb-3 text-lg">{item.question}</h4>
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="mt-16 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 border border-yellow-400/30 p-12 rounded-lg">
                <div className="max-w-2xl">
                  <div className="flex items-start gap-4 mb-6">
                    <Mic2 className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Chcesz zacząć z profesjonalnym podcastem?
                      </h3>
                      <p className="text-gray-300 mb-6">
                        Fotz Studio specjalizuje się w produkcji podcastów firmowych. Od koncepcji, przez nagranie w profesjonalnym studiu, edycję, po dystrybucję - wszystko w jednym miejscu.
                      </p>
                      <p className="text-gray-300 mb-6">
                        Nagrany podcast to nie tylko treści audio. To transkrypcje do bloga, grafiki do social media, segmenty do YouTube - pełny content marketing system.
                      </p>
                      <Link
                        to="/uslugi/studio-podcastowe"
                        className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                      >
                        Dowiedz się więcej o naszych usługach podcastowych
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Closing */}
              <section className="mt-12 pt-8 border-t border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">Podsumowanie</h2>
                <p className="text-gray-300 mb-4">
                  Podcast dla firmy to inwestycja o dużym potencjale. Rynek podcastów w Polsce rośnie, słuchacze to zazwyczaj osoby aktywne zawodowo i decyzyjne. Wystarczy 1000-2000 PLN miesięcznie i konsekwencja.
                </p>
                <p className="text-gray-300 mb-4">
                  Zacznij od 10 odcinków. Jeśli będą dobre, słuchacze przyjdą. Podcast buduje autorytet, generuje leady i wspiera SEO. To medium, które wciąż ma przestrzeń do wzrostu w Polsce.
                </p>
                <p className="text-gray-300">
                  Pytania? Piszemy na <a href="mailto:adam@fotz.pl" className="text-yellow-400 hover:underline">adam@fotz.pl</a> lub zapraszamy na <Link to="/kontakt" className="text-yellow-400 hover:underline">bezpłatną konsultację</Link>.
                </p>
              </section>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <RelatedArticles currentSlug="podcast-dla-firmy" />
          </div>
        </article>
      </Layout>
    </>
  );
};

export default BlogPodcastMarketing;
