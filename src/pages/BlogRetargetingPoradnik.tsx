import { SEOHead } from "@/components/seo/SEOHead";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { RefreshCw, Target, Users, BarChart3, Eye, Shield, Settings, TrendingUp } from "lucide-react";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function BlogRetargetingPoradnik() {
  const breadcrumbs = [
    { name: "Strona glowna", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Retargeting reklamy", url: "/blog/retargeting-reklamy-poradnik" }
  ];

  const faqs = [
    {
      question: "Jaka jest roznica miedzy retargetingiem a remarketingiem?",
      answer: "Retargeting i remarketing to terminy czesto uzywane zamiennie. Retargeting to broadsza strategia ponownego dotarcia do uzytkownikow poprzez rozne kanaly, zaś remarketing odnosi sie konkretnie do platformy Google Ads i kampanii wyswietlajacych sie w sieci search, display czy YouTube."
    },
    {
      question: "Jak dlugo pixel Google lub Facebook powinien sledzia uzytkownika?",
      answer: "Standardowo pixel sledzi uzytkownika przez 180 dni (6 miesiecy) w Facebooku i do 540 dni w Google Ads. Jednak czesto rekomenduje sie skrocic ten okres ze wzgledu na privacy regulations i freshnesc danych - idealne okno to 30-90 dni dla maksymalnego ROASu."
    },
    {
      question: "Czy retargeting jest nielegalne z powodu GDPR?",
      answer: "Retargeting nie jest nielegalny, ale wymaga zgody uzytkownika. Musisz posiadac wyrazna informacje o cookies w polityce prywatnosci, a uzytkownik musi wyrazic zgode. W kontekscie GDPR nalezy takze oferowac mozliwosc rezygnacji z retargetingu."
    },
    {
      question: "Ile powinien kosztowac retargeting w stosunku do cold traffic?",
      answer: "Retargeting jest zazwyczaj 2-5 razy tanszy niz kampanie dla nowych uzytkownikow (cold traffic), ale ROAS jest zazwyczaj 5-10 razy wyzszy. Sredni CPC w retargetingu wynosi 0,50-2,00 PLN wobec 3,00-8,00 PLN w cold traffic."
    },
    {
      question: "Jakie narzedzia powinienem uzyc do retargetingu?",
      answer: "Glowne platformy to Meta Ads Manager (Facebook/Instagram), Google Ads (Display Network, Search, YouTube), TikTok Ads Manager i LinkedIn Ads. Do zaawansowanego trackingu uzywaj narzedzi takich jak Segment, Mixpanel czy Custom Audiences poprzez CRM."
    }
  ];

  const articleSchema = {
    headline: "Retargeting reklamy i remarketing Google - Kompletny poradnik 2025",
    description: "Jak opanowac retargeting? Przewodnik po pixelach, segmentacji, kreatywach i budzetowaniu. Sredni ROAS 300-500% dla e-commerce.",
    image: "https://fotz.pl/og-retargeting.jpg",
    datePublished: "2025-03-18",
    dateModified: "2025-07-26",
    author: "Fotz Studio"
  };

  return (
    <Layout>
      <SEOHead
        title="Retargeting reklamy i remarketing Google - Kompletny poradnik…"
        description="Jak opanowac retargeting? Przewodnik po pixelach, segmentacji, kreatywach i budzetowaniu. Sredni ROAS 300-500% dla e-commerce."
        canonical="https://fotz.pl/blog/retargeting-reklamy-poradnik"

        keywords="Retargeting reklamy i remarketing Google - Kompletny poradnik 2025, Retargeting reklamy i remarketing Google - Kompletny poradnik 2025 poradnik, Retargeting reklamy i remarketing Google - Kompletny poradnik 2025 strategia, Retargeting reklamy i remarketing Google - Kompletny poradnik 2025 jak zrobić, Retargeting reklamy i remarketing Google - Kompletny poradnik 2025 marketing, Retargeting reklamy i remarketing Google - Kompletny poradnik 2025 przykłady, Retargeting reklamy i remarketing Google - Kompletny poradnik 2025 w Polsce"
      />

      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema {...articleSchema} />
      <FAQSchema items={faqs} />

      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
              <Target className="w-4 h-4" />
              <span>Poradnik Marketing Digital</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Retargeting reklamy i remarketing Google - Kompletny poradnik 2025
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Descobrij, jak zwiekszac konwersje poprzez trafianie do uzytkownikow, ktorzy juz interesowali sie Twoja firma. Sredni ROAS 300-500% w e-commerce.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>Czas czytania: 12 min</span>
              <span>Opublikowano: 18 marca 2025</span>
              <span>Zaktualizowano: 26 lipca 2025</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 bg-blue-50 rounded-lg p-6">
            <div>
              <div className="text-2xl font-bold text-blue-600">400%</div>
              <p className="text-sm text-gray-600">Sredni ROAS</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">2-5x</div>
              <p className="text-sm text-gray-600">Taniszy niz cold</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">180 dni</div>
              <p className="text-sm text-gray-600">Okno retargetingu</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">0,50-2 PLN</div>
              <p className="text-sm text-gray-600">CPC retargeting</p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-100 rounded-lg p-6 mb-12">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Spis tresci</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Co to retargeting vs remarketing?</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Jak dziala pixel Facebook i Google</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Rodzaje retargetingu</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Segmentacja odborcow</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Kreacje reklamowe dla retargetingu</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Budzet i frequency cap</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> ROAS, privacy i GDPR</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Narzedzia i platformy</li>
            </ul>
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none text-gray-700">
            {/* Section 1 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Co to retargeting vs remarketing?
                </h2>
              </div>
              <p>
                Retargeting i remarketing sa terminami czesto uzywanymi zamiennie, ale maja subtelne roznice. <strong>Retargeting</strong> to ogolna strategia ponownego dotarcia do uzytkownikow, ktorzy interesowali sie Twoja marka, bez wzgledu na kanal - media spoleczne, search, display czy email.
              </p>
              <p>
                <strong>Remarketing</strong> jest terminem specyficznym dla platformy Google Ads i odnosi sie do kampanii wyswietlajacych sie w Google Search, sieci Display czy YouTube. Inaczej mowiac, wszelki remarketing jest retargetingiem, ale nie wszystkie retargeting to remarketing.
              </p>
              <p>
                W Polsce czesto mowi sie "retargeting", ale jesli pracujesz z Google Ads, uzywasz tool o nazwie "remarketing". Niezaleznie od terminologii, chodzi o reconnect z uzytkownikami, ktorzy juz Cie znaja.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Jak dziala pixel Facebook i Google Ads
                </h2>
              </div>
              <p>
                Pixele sa male skrawkami kodu JavaScript, ktore umieszczasz na swojej stronie internetowej. Ich zadaniem jest śledzenie zachowan uzytkownikow - odwiedzenie strony, klikniecie przycisku, dodanie produktu do koszyka czy kompletne zlozenie zamowienia.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pixel Facebook (Meta)</h3>
              <p>
                Pixel Facebooka tworzy audi z uzytkownikow, ktorzy odwiedzili Twoja strone. Dane sa przechowywane przez 180 dni. Mozesz utworzyc publicznosc niestandardowa bazujaca na:
              </p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Wszystkich odwiedzajacych w ostatnich X dni</li>
                <li>Ludzi, ktorzy dodali produkt do koszyka ale nie kupili (cart abandoners)</li>
                <li>Osob, ktorzy przegladali konkretne kategorie produktow</li>
                <li>Klientow, ktorzy zrobili zakup w ciagu ostatniego roku</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pixel Google (Google Ads Audience)</h3>
              <p>
                Google Ads śledzacy kod (gtag.js) zbiera dane o zachowaniu uzytkownikow. Okno śledzenia wynosi do 540 dni. W Google Ads mozesz utworzyc:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Publicznosci z wizytami na stronie</li>
                <li>Publicznosci na podstawie kompletacji konwersji (np. zakupu)</li>
                <li>Custom intent audience oparta na slowach kluczowych oraz domenach</li>
                <li>Similar Audience (lookalike) na podstawie istniejacych klientow</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Rodzaje retargetingu
                </h2>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Retargeting stronowy (Website Retargeting)</h3>
              <p>
                To najczestszy typ. Wyswietlasz reklamy uzytkownikow, ktorzy odwiedzili Twoja strone. Dziala na podstawie piksela lub cookie. Idealny dla:
              </p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Sklepy online - ponowne pokazanie produktow, ktorych przegladalem</li>
                <li>SaaS - retargeting wizytujacych strone produktu bez zapisania sie</li>
                <li>Agencje - retargeting weszlych na landing page</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Retargeting listy klientow (List-based Retargeting)</h3>
              <p>
                Masz liste emaili, numerow telefonow lub SKAN ID uzytkownikow? Mozesz jej uzyc do dolaczenia ich na socjalach lub Google Ads. Bardzo efektywny dla:
              </p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Istniejacych klientow - cross-sell i up-sell</li>
                <li>Newsletter subscribersow - promowanie nowych produktow</li>
                <li>Bezplacznych użytkowników SaaS - konwersja na paid</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Retargeting video viewers</h3>
              <p>
                Uzytkownik obejral Twoj film na YouTube? Mozesz mu wyswietlic reklame. Fenomenalne dla:
              </p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Osob, ktorzy przegladali film produktu</li>
                <li>Widz kazdego statusu wideo (25%, 50%, 75%, 100%)</li>
                <li>Czesc filmu mozesz spasowal dla roznych publicznosci</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Retargeting lookalike (Podobne audi)</h3>
              <p>
                Platforma znajdzie uzytkownikow podobnych do Twoich najlepszych klientow. Polacz z retargetingiem - pokazuj te osoby reklamy z dobrym ROAS.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Segmentacja odborcow
                </h2>
              </div>
              <p>
                Nie pokazuj tej samej reklamy wszystkim w retargetingu. Segmentacja to klucz do wysokiego ROAS.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Segmenty na podstawie zachowania:</h3>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Opuszczajacy koszyk:</strong> Osob, ktorzy dodaly produkt ale nie kupili - reklama z ogromniem rabat</li>
                <li><strong>Przegladajacy bez kupna:</strong> Wizytujacy po raz 1-3 bez konwersji - reklama edukacyjna</li>
                <li><strong>Klienci:</strong> Juz kupili - retargeting dla nowych produktow i upsell</li>
                <li><strong>Wysokie zainteresowanie:</strong> 5+ wizyt na stronie - ready to buy reklama</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Segmenty na podstawie czasu:</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>0-3 dni: Agresywny retargeting, reklamy wsrod najlepszych klientow</li>
                <li>4-30 dni: Moderowany frequency, skupic sie na najwazniejszych audi</li>
                <li>31-180 dni: Nisko czestotliwosc, reklamy dla hottest deals</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Kreacje reklamowe dla retargetingu
                </h2>
              </div>
              <p>
                Kreacje musza byc inaczej zbudowane dla retargetingu niz dla cold traffic.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Best practices dla retargetingu:</h3>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Dynamiczne reklamy:</strong> Pokazuj dokładnie produkty, ktorych przegladal uzytkownik</li>
                <li><strong>Social proof:</strong> Recenzje, oceny gwiazdek, liczba sprzedanych sztuk</li>
                <li><strong>Sense of urgency:</strong> Promocja konczy sie za X godzin, tylko 3 sztuki w magazynie</li>
                <li><strong>Testimoniale i case studies:</strong> Video od zadowolonych klientow</li>
                <li><strong>Oferuj wartość:</strong> Rabat 15-25%, bezplatna dostawa, voucher</li>
                <li><strong>Video retargeting:</strong> Krótkie 15-sekowe wideo sa efektywniejsze niz statyczne grafiki</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Co unikac:</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>Generalnych reklam - pokazuj co uzytkownik aktualnie interesuje sie</li>
                <li>Braku call-to-action - zawsze jasne co uzytkownik ma robic</li>
                <li>Zbyt czestych pokazow tej samej reklamy - frequency cap!!</li>
                <li>Ignorowania roznych faz funneelu - cart abandoners dostaja inna wiadomosc niz browsers</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Budzet i frequency cap
                </h2>
              </div>
              <p>
                Czestotliwosc wyswietlen (frequency) to liczba razy, ile uzytkownik widzi Twoja reklame w okresie czasu.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Rekomendowane frequency cappy:</h3>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>1-3 dni:</strong> 2-4 razy dziennie (uzytkownik jeszcze pamieta wizyte)</li>
                <li><strong>7-14 dni:</strong> 5-8 razy w tygodniu</li>
                <li><strong>30+ dni:</strong> 2-3 razy w tygodniu</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Optymalny budzet:</h3>
              <p>
                Zasada 80/20 - alokuj 80% budgetu na retargeting (sa nizsze CPCs i wyzsze ROASy), 20% na cold traffic (budowanie nowych publicznosci).
              </p>
              <p>
                Jezeli masz 10 000 PLN miesiecznie na reklamy:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>8 000 PLN - Retargeting (istniejace audi)</li>
                <li>2 000 PLN - Cold traffic (nowe audi, lookalikie, prospecting)</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  ROAS z retargetingu vs cold traffic
                </h2>
              </div>
              <p>
                <strong>ROAS (Return on Ad Spend)</strong> to stosunek przychodu do wydatkow reklamowych. Retargeting tradycyjnie osiaga ROAS 3-5x, podczas gdy cold traffic zazwyczaj 1-2x.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Przyklady:</h3>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>E-commerce:</strong> Retargeting 400-500% ROAS, cold traffic 80-120% ROAS</li>
                <li><strong>SaaS:</strong> Retargeting free trial sign-ups 6-8x ROAS, cold 2-3x ROAS</li>
                <li><strong>Lead generation:</strong> Retargeting 300-400% ROAS, cold 60-100% ROAS</li>
              </ul>

              <p>
                Dla najwiekszego ROAS w retargetingu:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Rozdzel retargeting na maksymalnie 3-4 kampanie (zavisnie od wielkosci audi)</li>
                <li>Testuj rozne creative z tym samym segmentem - znajdz winners</li>
                <li>Regularnie sprawdzaj metrics - CTR, CPC, conversion rate, ROAS</li>
                <li>Scale up budgetu gdy ROAS ponad 300% (bezpieczny margines)</li>
                <li>Pausuj kampanie ponizej 150% ROAS</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Privacy, cookies i GDPR w retargetingu
                </h2>
              </div>
              <p>
                Retargeting jest oparty na śledzeniu uzytkownikow poprzez cookies. W europie, GDPR wymaga wyraznej zgody uzytkownika na śledzenie.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Co musisz zrobic ze wzgledu na GDPR:</h3>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Cookie banner:</strong> Pokazyj baner na zaladowaniu - uzytkownik musi wyrazic zgode na cookies</li>
                <li><strong>Polityka prywatnosci:</strong> Jasno opisz co to pixel, co sledzi, ile dni</li>
                <li><strong>Prawo do rezygnacji:</strong> Oferuj mozliwosc opt-out z retargetingu</li>
                <li><strong>Transparent komunikacja:</strong> Nie ukrywaj ze sledisz uzytkownikow</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Przyszlosc retargetingu po deprecjacji 3rd party cookies:</h3>
              <p>
                Google stopniowo wycofuje 3rd party cookies. Rozwazaj:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>First-party data:</strong> Zbieraj email u uzytkownikow - to nie wymiera</li>
                <li><strong>Google Analytics 4 consent mode:</strong> GA4 bedzie pracowac bez cookies gdy uzytkownik nie wyrazi zgody</li>
                <li><strong>CRM retargeting:</strong> Uzywaj liste emaili do retargetingu w Meta i Google</li>
                <li><strong>Server-side tracking:</strong> Bedzie bardziej niezawodny niz client-side</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Narzedzia i platformy do retargetingu
                </h2>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Meta Ads Manager (Facebook, Instagram, Audience Network)</h3>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Pixel Facebook - zbieranie danych ze strony</li>
                <li>Custom Audiences - tworzenie publicznosci na podstawie piksela</li>
                <li>Audience insights - analiza gdzie siedza Twoi retargeting uzytkowniczy</li>
                <li>Dobry CPC (sredni 0,50-1,50 PLN)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Google Ads (Search, Display, YouTube)</h3>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Audience manager - tworzenie remarketing list</li>
                <li>Dynamic remarketing - pokazywanie produktu ktory przegladal</li>
                <li>Video remarketing - reklamy dla Youtube viewers</li>
                <li>Custom intent audience - oparty na slowach kluczowych</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. TikTok Ads Manager</h3>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>TikTok Pixel - śledzenie zachowan na stronie</li>
                <li>Retargeting video viewers - uzytkowniczy ktorzy obejrzeli Twoje TikToki</li>
                <li>Rosniacy rynek w Polsce - wale CPMS sa nizsze niz Meta</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. LinkedIn Campaign Manager</h3>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Insight Tag - retargeting dla B2B</li>
                <li>List-based targeting - zaladuj liste emaili</li>
                <li>Higher budget ale bardziej qualified leads dla B2B</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Narzedzia do trackingu i analizy:</h3>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Google Analytics 4:</strong> Śledzenie konwersji, analiza ruchu</li>
                <li><strong>Segment/Mixpanel:</strong> Advanced data collection i integracje</li>
                <li><strong>Zapier/Integromat:</strong> Automatyzacja - wysylaj liste emaili z CRM do Platform ads</li>
                <li><strong>UTM parametry:</strong> Sledz gdzie pochodza konwersje w retargetingu</li>
              </ul>
            </section>

            {/* Section 10 - Podsumowanie */}
            <section className="mb-12 bg-blue-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Podsumowanie - Action Plan
              </h2>
              <ol className="list-decimal pl-8 space-y-3">
                <li>Zainstaluj pixele Facebook i Google na swojej stronie</li>
                <li>Czekaj 14 dni na zbieranie danych - minimum 100 konwersji do retargetingu</li>
                <li>Utwórz segmenty - opuszczajacy koszyk, high intent, istniejacy klienci</li>
                <li>Stwórz 3-5 kreatywnych ad copów specjalnie dla retargetingu</li>
                <li>Ustaw frequency cap - 3 razy dziennie przez pierwsze 7 dni</li>
                <li>Alokuj 80% budgetu na retargeting, 20% na cold traffic</li>
                <li>Sledz metrics codziennie - ROAS, CTR, frequency</li>
                <li>Scale up gdy ROAS ponad 300%, pause gdy poniżej 150%</li>
                <li>Testuj A/B creative co 2 tygodnie</li>
                <li>Aktualizuj publicznosci co miesiac nowych wyzej intencyjnych list</li>
              </ol>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white mt-12">
              <h3 className="text-2xl font-bold mb-4">
                Potrzebujesz pomocy z retargetingiem?
              </h3>
              <p className="mb-6">
                Zespol Fotz Studio specjalizuje sie w tworzeniu kampanii retargetingu dla e-commerce i SaaS. Sredni ROAS naszych kampanii to 400-600%.
              </p>
              <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Zarezerwuj konsultacje
              </button>
            </section>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Czeste pytania o retargetingu
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                  <summary className="flex items-center justify-between font-semibold text-gray-900">
                    {faq.question}
                    <span className="transform group-open:rotate-180 transition-transform text-blue-600">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-16 pt-12 border-t">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Powiazane artykuly
            </h3>
            <ul className="space-y-3">
              <li><a href="/blog/facebook-ads-poradnik" className="text-blue-600 hover:underline">Facebook Ads dla poczatkujacych - kompletny poradnik 2025</a></li>
              <li><a href="/blog/google-ads-performance-max" className="text-blue-600 hover:underline">Google Ads Performance Max - jak prawidlowo ustawic kampanie</a></li>
              <li><a href="/blog/pixel-facebook-konfiguracja" className="text-blue-600 hover:underline">Pixel Facebook - jak zainstalowac i konfigurowac poprawnie</a></li>
              <li><a href="/blog/konwersje-e-commerce-optymalizacja" className="text-blue-600 hover:underline">Optimalizacja konwersji e-commerce - praktyczne porady</a></li>
            </ul>
          </section>
        </div>
      </article>
      <RelatedArticles currentArticleId="retargeting-reklamy-poradnik" />
    </Layout>
  );
}
