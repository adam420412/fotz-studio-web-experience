import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function BlogSocialMediaMarketingPoradnik() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: "Social media marketing poradnik", path: "/blog/social-media-marketing-poradnik" },
  ];

  const faqItems = [
    {
      question: "Co to jest social media marketing?",
      answer: "Social media marketing to zestaw działań mających na celu promocję marki, produktów lub usług za pośrednictwem platform mediów społecznych. Obejmuje zarówno organiczne publikowanie treści, jak i płatne kampanie reklamowe. To efektywny sposób na nawiązanie kontaktu z docelową grupą odbiorców, budowanie relacji z klientami i zwiększenie sprzedaży.",
    },
    {
      question: "Ile czasu zajmuje prowadzenie social media?",
      answer: "Czas poświęcony na social media zależy od liczby platform i częstotliwości publikacji. Dla małej firmy wystarczy 5-10 godzin tygodniowo, dla większych firm 20-40 godzin tygodniowo. Wiele firm powierza to zadanie agencjom marketingowym, co pozwala skupić się na core business.",
    },
    {
      question: "Jak często publikować posty na Facebooku?",
      answer: "Zalecenia wskazują na 1-2 posty dziennie, ale ważniejsza jest konsystencja i jakość niż ilość. Obserwuj metryki zaangażowania i dostosuj częstotliwość do preferencji swojej publiczności. Некоторые branże mogą czerpać korzyści z publikacji 3-5 razy dziennie, innym wystarczy kilka razy w tygodniu.",
    },
    {
      question: "Czy warto płacić za reklamy w social media?",
      answer: "Tak, płatne reklamy w mediach społecznych mogą generować wysoki ROI. Pozwalają na precyzyjne targetowanie grupy docelowej, mierzenie efektywności kampanii i szybkie skalowanie. Średni zwrot z inwestycji wynosi 300-400% dla dobrze sformułowanych kampanii.",
    },
    {
      question: "Jak mierzyć efektywność social media?",
      answer: "Monitoruj kluczowe wskaźniki (KPI) takie jak: zasięg, engagement rate, liczba konwersji, koszt na kliknięcie, wzrost obserwujących. Korzystaj z narzędzi analitycznych wbudowanych w platformy (Facebook Insights, Instagram Analytics) lub zewnętrznych narzędzi (Google Analytics, Hootsuite).",
    },
    {
      question: "Jaka platforma social media jest najlepsza dla firmy?",
      answer: "Nie ma jednej najlepszej platformy. Wybór zależy od Twojej branży i grupy docelowej. Facebook doskonały do e-commerce i usług, Instagram dla brandów lifestylowych, TikTok dla młodszych odbiorców, LinkedIn dla biznesu B2B, YouTube dla treści wideo.",
    },
    {
      question: "Ile kosztuje prowadzenie social media przez agencję?",
      answer: "Koszt wynosi zwykle od 2 000 do 15 000 PLN miesięcznie w zależności od zakresu usług (zarządzanie, tworzenie treści, reklamy). Agencje zazwyczaj oferują pakiety: podstawowy (1-2 platformy), standardowy (3-4 platformy) i premium (wszystkie platformy + kampanie reklamowe).",
    },
    {
      question: "Co to jest engagement rate i jaki jest dobry wynik?",
      answer: "Engagement rate to procent obserwujących, którzy interagują z postem (polubienia, komentarze, udostępnienia). Dobry wynik to 1-5% dla większości branż. Wysoka engagement rate oznacza, że treść rezonuje z publiczością i warto ją rozwijać w tym kierunku.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Social media marketing — kompletny poradnik dla firm 2025 | Fotz.pl"
        description="Kompleksowy poradnik social media marketing dla firm. Strategie, KPI, metryki, wybór platform i praktyczne porady jak efektywnie promować firmę w mediach społecznych."
        canonical="https://fotz.pl/blog/social-media-marketing-poradnik"
        keywords="social media marketing poradnik, jak zacząć social media marketing, social media poradnik, marketing na facebooku poradnik"
        ogImage="https://fotz.pl/og-social-media-marketing.jpg"
      />

      <ArticleSchema
        headline="Social media marketing — kompletny poradnik dla firm 2025"
        description="Kompleksowy poradnik dotyczący strategii social media marketing, wyboru platform, tworzenia treści i mierzenia efektywności kampanii."
        author="Fotz.pl"
        datePublished="2025-04-12"
        dateModified="2025-04-12"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-white">
        <PageBreadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-950 via-pink-950 to-rose-900 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeInView>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Social media marketing — Kompletny poradnik dla firm 2025
              </h1>
              <p className="text-lg sm:text-xl text-pink-100 mb-12">
                Dowiedz się, jak efektywnie promować firmę w mediach społecznych, budować społeczność wokół marki
                i generować sprzedaż poprzez platformy takie jak Facebook, Instagram, TikTok i LinkedIn.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <FadeInView delay={0.1}>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                    <div className="text-3xl font-bold text-pink-300 mb-2">3,2 mld</div>
                    <p className="text-pink-100 text-sm">uzytkownikow SM</p>
                  </div>
                </FadeInView>

                <FadeInView delay={0.2}>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                    <div className="text-3xl font-bold text-pink-300 mb-2">1-5%</div>
                    <p className="text-pink-100 text-sm">Engagement rate</p>
                  </div>
                </FadeInView>

                <FadeInView delay={0.3}>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                    <div className="text-3xl font-bold text-pink-300 mb-2">300%+</div>
                    <p className="text-pink-100 text-sm">ROI od pierwszego miesiaca</p>
                  </div>
                </FadeInView>

                <FadeInView delay={0.4}>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                    <div className="text-3xl font-bold text-pink-300 mb-2">77%</div>
                    <p className="text-pink-100 text-sm">Firmy na SM</p>
                  </div>
                </FadeInView>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Section 1: Co to jest social media marketing */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Czym jest social media marketing?</h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p>
                  Social media marketing to kompleksowa strategia promocji marca, produktów i usług poprzez platformy
                  mediów społecznych takie jak Facebook, Instagram, TikTok, LinkedIn czy YouTube. W dobie cyfryzacji
                  biznesu, gdzie 3,2 miliarda ludzi regularnie korzysta z mediów społecznych, efektywna strategia SM
                  stała się niezbędna dla sukcesu każdej firmy.
                </p>
                <p>
                  Social media marketing dzieli się na dwa główne nurty: organiczny i płatny. Marketing organiczny
                  obejmuje naturalne publikowanie treści, interakcje z publicznością, budowanie społeczności i
                  zaangażowania. Marketing płatny to kampanie reklamowe, które docierają do precyzyjnie wybranej grupy
                  docelowej za pośrednictwem systemów reklamowych platform.
                </p>
                <p>
                  Każda platforma ma inne cechy, algorytmy i grupy demograficzne. Facebook dominuje wśród użytkowników
                  30+, Instagram przyciąga użytkowników zainteresowanych vizualami i lifestylem, TikTok rządzi wśród
                  Gen Z, LinkedIn skupia profesjonalistów, a YouTube jest platformą dla treści wideo. Dobrze zaplanowana
                  strategia SM powinna uwzględniać charakterystykę każdej platformy i dostosować do niej typ publikowanej
                  treści.
                </p>
              </div>
            </section>
          </FadeInView>

          {/* Section 2: Wybor platform */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Wybor platform social media dla firmy</h2>
              <div className="prose prose-lg max-w-none text-slate-700 mb-6">
                <p>
                  Wybór odpowiednich platform jest kluczowy dla sukcesu. Nie musisz być aktywny na wszystkich platformach
                  - lepiej być obecnym na kilku, ale z wysokiej jakości treścią. Poniżej prezentujemy porównanie głównych
                  platform:
                </p>
              </div>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 border-b-2 border-slate-300">
                      <th className="px-6 py-3 text-left font-bold text-slate-900">Platforma</th>
                      <th className="px-6 py-3 text-left font-bold text-slate-900">Dla kogo</th>
                      <th className="px-6 py-3 text-left font-bold text-slate-900">Typ tresci</th>
                      <th className="px-6 py-3 text-left font-bold text-slate-900">Avg. engagement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Facebook</td>
                      <td className="px-6 py-4 text-slate-700">E-commerce, uslugi, B2B</td>
                      <td className="px-6 py-4 text-slate-700">Posty, karuzele, wideo</td>
                      <td className="px-6 py-4 text-slate-700">1-3%</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Instagram</td>
                      <td className="px-6 py-4 text-slate-700">Lifestyle, moda, beauty</td>
                      <td className="px-6 py-4 text-slate-700">Reels, Stories, posty</td>
                      <td className="px-6 py-4 text-slate-700">2-5%</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">TikTok</td>
                      <td className="px-6 py-4 text-slate-700">Gen Z, entertainment</td>
                      <td className="px-6 py-4 text-slate-700">Krotkie wideo, trendy</td>
                      <td className="px-6 py-4 text-slate-700">3-8%</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">LinkedIn</td>
                      <td className="px-6 py-4 text-slate-700">B2B, profesjonalisci</td>
                      <td className="px-6 py-4 text-slate-700">Artykuly, poradniki</td>
                      <td className="px-6 py-4 text-slate-700">1-2%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">YouTube</td>
                      <td className="px-6 py-4 text-slate-700">Wszystkie bransze</td>
                      <td className="px-6 py-4 text-slate-700">Dluzsze wideo</td>
                      <td className="px-6 py-4 text-slate-700">2-4%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <p className="text-slate-700">
                  <span className="font-bold">Porada:</span> Zacznij od maksymalnie 2-3 platform, na ktorych twoja
                  docelowa grupa jest najbardziej aktywna. Lepiej publikowac regularne, wysokiej jakosci posty na
                  Instagram i Facebook, niz byc nieobecnym na wszystkich.
                </p>
              </div>
            </section>
          </FadeInView>

          {/* Section 3: Strategia */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Strategia social media krok po kroku</h2>
              <div className="prose prose-lg max-w-none text-slate-700 mb-8">
                <p>
                  Skuteczna kampania w mediach społecznych wymaga przemyślanej strategii. Oto siedem kluczowych kroków,
                  które poprowadzą Cię od pomysłu do mierzalnych rezultatów:
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Okresl cele",
                    desc: "Zdecyduj, co chcesz osiagnac: wzrost sprzedazy, budowanie marki, generowanie leadow czy zaangazowanie odbiorow.",
                  },
                  {
                    step: 2,
                    title: "Analiza konkurencji",
                    desc: "Przeanalizuj, jak promocje sie konkurencja, jakie platformy wykorzystuja, jaki rodzaj tresci ma najwyzsze zaangazowanie.",
                  },
                  {
                    step: 3,
                    title: "Zdefiniuj tone of voice",
                    desc: "Ustal sposob komunikacji marki: formalny czy nieformalny, zartobliwy czy serio, edukacyjny czy rozrywkowy.",
                  },
                  {
                    step: 4,
                    title: "Stwor content plan",
                    desc: "Zaplanuj rodzaje tresci: posty edukacyjne, promocyjne, behind the scenes, konkursy, case studies.",
                  },
                  {
                    step: 5,
                    title: "Ustal harmonogram",
                    desc: "Okresl czestotliwosc publikacji dla kazdej platformy i przygotuj content calendar na miesiace do przodu.",
                  },
                  {
                    step: 6,
                    title: "Publikuj i zaangazuj",
                    desc: "Regularnie publikuj zaplanowana tresc, odpowiadaj na komentarze, interaguj z publicznoscia.",
                  },
                  {
                    step: 7,
                    title: "Analizuj wyniki",
                    desc: "Mierz efektywnosc kampanii poprzez KPI, dostosowuj strategie na podstawie danych.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 pb-4 border-b border-slate-200">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeInView>

          {/* Section 4: Rodzaje tresci */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Rodzaje tresci w social media</h2>
              <div className="prose prose-lg max-w-none text-slate-700 mb-8">
                <p>
                  Zroznicowana tresc drazy zaangazowanie i utrzymuje publicznosc w zainteresowaniu. Kazdego typu post
                  sluzy innym celom i powinna pojawiac sie w regulowanych proporcjach w Twoim content planie:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "📚", title: "Posty edukacyjne", desc: "Porady, poradniki, infografiki nauczajace odbiorcom" },
                  { icon: "🎬", title: "Behind the scenes", desc: "Zakulisowe ujecia z pracy, poznaj nas lepiej" },
                  { icon: "👥", title: "UGC - User Generated Content", desc: "Posty od zadowolonych klientow i recenzje" },
                  { icon: "📖", title: "Storytelling", desc: "Opowiesci o marce, jej wartosciach i misji" },
                  { icon: "🎞", title: "Reels i wideo", desc: "Dynamiczne, krotkie wideo do maksimum zaangazowania" },
                  { icon: "🎁", title: "Konkursy i giveaways", desc: "Akcje promo ktore zachecaja do udzialu" },
                  { icon: "⭐", title: "Case studies", desc: "Studium przypadku pokazujace sukces klientow" },
                  { icon: "💬", title: "Interaktywne posty", desc: "Polowania, quizy, pytania do komentarzy" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-pink-300 transition-colors"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeInView>

          {/* Section 5: KPI i metryki */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">KPI i metryki social media</h2>
              <div className="prose prose-lg max-w-none text-slate-700 mb-6">
                <p>
                  Aby wiedziec, czy Twoja strategia dziala, musisz mierzyc odpowiednie metryki. Kazdej platformy ma
                  wbudowany dashboard analityczny, ale warto uzupelnic go narzedziem takim jak Google Analytics:
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 border-b-2 border-slate-300">
                      <th className="px-6 py-3 text-left font-bold text-slate-900">Metryka</th>
                      <th className="px-6 py-3 text-left font-bold text-slate-900">Co mierzy</th>
                      <th className="px-6 py-3 text-left font-bold text-slate-900">Benchmark</th>
                      <th className="px-6 py-3 text-left font-bold text-slate-900">Narzedzie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Zasieg</td>
                      <td className="px-6 py-4 text-slate-700">Liczba uzytkownikow ktorzy zobaczyli post</td>
                      <td className="px-6 py-4 text-slate-700">Wyzsza liczba, tym lepiej</td>
                      <td className="px-6 py-4 text-slate-700">Insights, Analytics</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Engagement rate</td>
                      <td className="px-6 py-4 text-slate-700">Procent interakcji (like, comment, share)</td>
                      <td className="px-6 py-4 text-slate-700">1-5% to dobry wynik</td>
                      <td className="px-6 py-4 text-slate-700">Insights, Hootsuite</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">CTR (Click-Through Rate)</td>
                      <td className="px-6 py-4 text-slate-700">Procent klikniec w link</td>
                      <td className="px-6 py-4 text-slate-700">1-3% w zaleznosci od branzy</td>
                      <td className="px-6 py-4 text-slate-700">Google Analytics</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Wzrost obserwujacych</td>
                      <td className="px-6 py-4 text-slate-700">Liczba nowych obserwujacych miesiecznie</td>
                      <td className="px-6 py-4 text-slate-700">2-5% MoM growth</td>
                      <td className="px-6 py-4 text-slate-700">Insights, Analytics</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">CPC (Cost Per Click)</td>
                      <td className="px-6 py-4 text-slate-700">Sredni koszt jednego klikniecia w reklamie</td>
                      <td className="px-6 py-4 text-slate-700">0,50 - 3 PLN w zaleznosci od branzy</td>
                      <td className="px-6 py-4 text-slate-700">Facebook Ads Manager</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
                <p className="text-slate-700">
                  <span className="font-bold">Wazne:</span> Nie mierz wszystkiego - skupi sie na KPI souvisacych z
                  Twoimi celami biznesowymi. Jezeli celem jest sprzedaz, sledz konwersje. Jezeli budowanie marki, sledz
                  zasieg i engagement rate.
                </p>
              </div>
            </section>
          </FadeInView>

          {/* Section 6: Social media a SEO */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Social media a SEO — czy social pomaga w pozycjonowaniu?</h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p>
                  Czy social media wplywa bezposrednio na pozycje w Google? Odpowiedz brzmi: nie w sposob algorytmiczny,
                  ale tak - w sposob posredni. Google nie interpretuje sygnalor z mediow spolecznych jako czynnika
                  rankingowego, ale social media wspiera SEO na wiele innych sposobow:
                </p>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-slate-900 mb-3">Jak SM wlasciwie wspolpracuje z SEO:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">1.</span>
                      <span>
                        <strong>Linki do strony:</strong> Posty z linkami do artykulow bloga generuja traffic i buduja
                        backlinki.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">2.</span>
                      <span>
                        <strong>Zwiększony traffic:</strong> Wiecej ruchu ze social mediow oznacza wiecej danych dla
                        Google o zainteresowaniu trescia.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">3.</span>
                      <span>
                        <strong>Brand authority:</strong> Aktywna obecnosc w SM buduje autorytet marki, co posrednio
                        wplywa na wiarygodnosc.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">4.</span>
                      <span>
                        <strong>Slowa kluczowe:</strong> Treści na SM powinna zawierac slowa kluczowe z Twojej strategii
                        SEO.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">5.</span>
                      <span>
                        <strong>Brand mentions:</strong> Wspomniana marki na SM pomagaja budowac brand recognition.
                      </span>
                    </li>
                  </ul>
                </div>

                <p>
                  Podsumowujac: social media nie bezposrednio rankuje w Google, ale pomaga poprzez budowanie traffic,
                  backlinków i autorytu marki.
                </p>
              </div>
            </section>
          </FadeInView>

          {/* Section 7: Jak fotz.pl prowadzi social media */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Jak fotz.pl prowadzi social media dla firm?</h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p>
                  W Fotz.pl posiadamy doswiadczenie w prowadzeniu kampanii social media dla firm z roznych branż. Nasza
                  usługa obsluga social media obejmuje:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">✓</span>
                    <span>
                      <strong>Strategie SM:</strong> Opracowujemy indywidualną strategię na podstawie Twoich celów i
                      grup docelowych.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">✓</span>
                    <span>
                      <strong>Tworzenie tresci:</strong> Projektujemy i publikujemy wysokiej jakości posty, wideo,
                      grafiki.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">✓</span>
                    <span>
                      <strong>Kampanie reklamowe:</strong> Zarządzamy płatnymi kampaniami na Facebook, Instagram i
                      LinkedIn.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">✓</span>
                    <span>
                      <strong>Zaangazowanie:</strong> Odpowiadamy na komentarze, rozwiązujemy pytania, budujemy relacje z
                      publiczością.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">✓</span>
                    <span>
                      <strong>Raportowanie:</strong> Dostarczamy regularne raporty analityczne i rekomendacje popraw.
                    </span>
                  </li>
                </ul>

                <p>
                  Nasza agencja łączy twórczość z analityką, aby tworzyć kampanie, które nie tylko wyglądają dobrze, ale
                  również generują rzeczywiste wyniki biznesowe.
                </p>
              </div>

              <Link to="/social-media/obsluga">
                <button className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all shadow-lg">
                  Dowiedz sie wiecej o naszcych uslugach SM
                </button>
              </Link>
            </section>
          </FadeInView>

          {/* CTA Box */}
          <FadeInView>
            <section className="my-16 bg-slate-900 text-white p-8 sm:p-12 rounded-xl shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Gotowy na transformacje social media?</h3>
              <p className="text-lg text-slate-200 mb-8">
                Pozwol nam na sprowadzenie Twojej marki do mediow społecznych. Wspol nas w tworzeniu strategii, ktora
                generuje wyniki.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/social-media/obsluga">
                  <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all">
                    Poznaj naszych uslugach
                  </button>
                </Link>

                <Link to="/kontakt">
                  <button className="w-full sm:w-auto px-8 py-3 bg-white bg-opacity-20 text-white font-bold rounded-lg border-2 border-white hover:bg-opacity-30 transition-all">
                    Skontaktuj sie z nami
                  </button>
                </Link>
              </div>
            </section>
          </FadeInView>

          {/* FAQ Section */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-slate-900">Czesto zadawane pytania (FAQ)</h2>

              <FAQSchema items={faqItems} />

              <div className="space-y-6">
                {faqItems.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-lg p-6 cursor-pointer hover:border-pink-300 transition-colors"
                  >
                    <summary className="flex items-start gap-4 font-bold text-slate-900 text-lg list-none">
                      <span className="flex-shrink-0 mt-1 text-pink-600 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                      <span>{faq.question}</span>
                    </summary>
                    <p className="mt-4 ml-8 text-slate-700 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </FadeInView>

          {/* Related Links */}
          <FadeInView>
            <section className="border-t border-slate-200 pt-12">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Przydatne zasoby</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  to="/blog/prowadzenie-social-media-cennik"
                  className="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-pink-300 transition-colors hover:shadow-md"
                >
                  <h4 className="font-bold text-slate-900 mb-2">Prowadzenie Social Media - Cennik</h4>
                  <p className="text-slate-700 text-sm">
                    Sprawdz wylaczne ceny za prowazdenie social media dla firm.
                  </p>
                </Link>

                <Link
                  to="/social-media/obsluga"
                  className="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-pink-300 transition-colors hover:shadow-md"
                >
                  <h4 className="font-bold text-slate-900 mb-2">Usluga Social Media Marketing</h4>
                  <p className="text-slate-700 text-sm">
                    Poznaj pelny zakres naszych uslug marketingu social media dla firm.
                  </p>
                </Link>

                <Link
                  to="/blog/google-ads-vs-seo"
                  className="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-pink-300 transition-colors hover:shadow-md"
                >
                  <h4 className="font-bold text-slate-900 mb-2">Google Ads vs SEO</h4>
                  <p className="text-slate-700 text-sm">
                    Porownanie planiej kampanii reklamowych z organicznym pozycjonowaniem.
                  </p>
                </Link>
              </div>
            </section>
          </FadeInView>
        </article>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </Layout>
  );
}
