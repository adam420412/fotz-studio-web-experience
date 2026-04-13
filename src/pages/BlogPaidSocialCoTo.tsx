import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest paid social (reklama w social media)?",
    answer:
      "Paid social (płatna reklama w mediach społecznościowych) to wszystkie płatne formaty reklamowe na platformach social media — Meta (Facebook/Instagram), LinkedIn, TikTok, Twitter/X, Pinterest, Snapchat, YouTube. W odróżnieniu od organicznych postów, paid social pozwala precyzyjnie targetować odbiorcę według demografii, zainteresowań, zachowań i danych własnych firmy. Paid social to dziś niezbędny element każdej strategii digital marketingu — zasięg organiczny platform B2C wynosi średnio 1-5%.",
  },
  {
    question: "Jaka jest różnica między Meta Ads a LinkedIn Ads?",
    answer:
      "Meta Ads (Facebook/Instagram): silne targetowanie behawioralne i demograficzne, niższy CPM (5-15 USD), świetne dla B2C, e-commerce, consumer apps i brandów. LinkedIn Ads: targetowanie profesjonalne (stanowisko, branża, wielkość firmy, skills), wyższy CPM (15-50 USD), idealne dla B2B, rekrutacji i produktów enterprise. Reguła: B2C → Meta, B2B z ACV powyżej 5 000 USD → LinkedIn. TikTok: zasięg Gen Z i Millenialsów, bardzo niski CPM (2-8 USD), video-first.",
  },
  {
    question: "Co to jest retargeting w paid social?",
    answer:
      "Retargeting (remarketing) to wyświetlanie reklam osobom, które wcześniej miały kontakt z Twoją firmą — odwiedziły stronę, porzuciły koszyk, oglądały wideo, były w CRM. Implementacja: Meta Pixel na stronie, TikTok Pixel, LinkedIn Insight Tag. Retargeting ma zwykle 2-5× wyższy CTR i 40-60% niższy CPA niż cold audience, bo dociera do osób które już znają markę. Segmentacja retargetingu: visitors 1-7 dni (gorący), 8-30 dni, 31-90 dni (zimniejszy).",
  },
  {
    question: "Jakie są najważniejsze metryki kampanii paid social?",
    answer:
      "Metryki zasięgu: Impressions (wyświetlenia), Reach (unikalni odbiorcy), Frequency (średnia liczba wyświetleń per osoba — powyżej 3-5 zwykle sygnalizuje ad fatigue). Metryki zaangażowania: CTR (Click-Through Rate), Engagement Rate, Video Views, Watch Time. Metryki konwersji: CPM (Cost per Mille), CPC (Cost per Click), CPA (Cost per Acquisition), ROAS (Return on Ad Spend). ROAS = Przychód / Wydatki na reklamę. Benchmark ROAS dla e-commerce: powyżej 3-4× jest dobre.",
  },
  {
    question: "Co to jest lookalike audience i jak go używać?",
    answer:
      "Lookalike audience (podobna publiczność) to technika targetowania gdzie platforma (Meta, LinkedIn, TikTok) analizuje cechy Twoich najlepszych klientów i szuka podobnych osób w swoich bazach danych. Tworzysz seed audience z listy klientów (minimum 1000 osób), konwertujących użytkowników lub top 10% klientów według LTV. Platforma generuje audience 1-10× większy złożony z osób o podobnych cechach. 1% lookalike = najbardziej podobni do seeda, 5-10% = szerszy zasięg ale mniej precyzyjny.",
  },
];

const platforms = [
  {
    platforma: "Meta (Facebook + Instagram)",
    najlepsza_dla: "B2C, e-commerce, consumer apps, retargeting",
    cpm: "5-15 USD",
    targetowanie: "Demograficzne, zainteresowania, zachowania, Custom Audiences, Lookalike",
    formaty: "Image, Carousel, Video, Stories, Reels, Collection, Lead Gen",
    zalety: "Najszerszy zasięg, najlepszy retargeting (Meta Pixel), Advantage+ AI",
    minimalny_budzet: "20-50 USD/dzień",
  },
  {
    platforma: "LinkedIn Ads",
    najlepsza_dla: "B2B SaaS, rekrutacja, produkty enterprise, edukacja biznesowa",
    cpm: "20-60 USD",
    targetowanie: "Job title, Company size, Industry, Skills, Seniority, Groups",
    formaty: "Sponsored Content, Message Ads, Lead Gen Forms, Text Ads, Video",
    zalety: "Precyzyjne targetowanie B2B, Lead Gen Forms z wysoką konwersją, InMail",
    minimalny_budzet: "50-100 USD/dzień",
  },
  {
    platforma: "TikTok Ads",
    najlepsza_dla: "Gen Z, lifestyle, beauty, fashion, consumer brands, e-commerce",
    cpm: "2-10 USD",
    targetowanie: "Demograficzne, zainteresowania, zachowania, Custom Audiences",
    formaty: "In-Feed Ads, TopView, Branded Hashtag Challenge, Spark Ads",
    zalety: "Bardzo niski CPM, wysokie zaangażowanie, viral potential, UGC",
    minimalny_budzet: "20 USD/dzień",
  },
  {
    platforma: "Pinterest Ads",
    najlepsza_dla: "E-commerce, home decor, fashion, food, wedding, DIY, beauty",
    cpm: "3-12 USD",
    targetowanie: "Zainteresowania, słowa kluczowe (jak wyszukiwarka!), demographics",
    formaty: "Promoted Pins, Video Pins, Shopping Ads, Collections",
    zalety: "Wysokie purchase intent, długa 'shelf life' Pinów, unikalna wyszukiwarkowa funkcja",
    minimalny_budzet: "10-20 USD/dzień",
  },
];

const campaignObjectives = [
  { cel: "Awareness", opis: "Budowanie świadomości marki — zasięg i wyświetlenia", metryki: "Reach, Frequency, CPM, Brand Lift", kiedy: "Nowe rynki, nowe produkty, top-of-funnel" },
  { cel: "Consideration", opis: "Generowanie zainteresowania — kliknięcia, wideo, zaangażowanie", metryki: "CTR, Video Views, Link Clicks, Engagement Rate", kiedy: "Edukacja, nurturing, middle-of-funnel" },
  { cel: "Conversion", opis: "Generowanie akcji — zakupy, leady, instalacje aplikacji", metryki: "CPA, ROAS, CPL, Conversion Rate", kiedy: "Bottom-of-funnel, retargeting, hot audiences" },
];

const creativeFormats = [
  { format: "Single Image", kiedy: "Testowanie copy i wizuali, prosty przekaz, remarketing", wskazówki: "Text poniżej 20% powierzchni, wyraźne CTA, kontrastujące kolory" },
  { format: "Video (15-30 sek.)", kiedy: "Storytelling, product demos, awareness, brand building", wskazówki: "Hook w pierwszych 3 sekundach, autodesk w wideo, napisy obowiązkowe" },
  { format: "Carousel", kiedy: "E-commerce (wiele produktów), storytelling krok-po-kroku", wskazówki: "Pierwszy kadr = hook, każda karta = osobna korzyść, ostatnia = CTA" },
  { format: "UGC (User Generated Content)", kiedy: "Social proof, authenticity, obniżenie CPM", wskazówki: "Naturalne wideo z telefonu > produkcyjne, realne testimoniale" },
];

export default function BlogPaidSocialCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Paid Social | Fotz Studio"
        description="Paid social — definicja, porównanie platform (Meta, LinkedIn, TikTok, Pinterest), formaty reklam, metryki (ROAS, CPM, CPA) i jak targetować. Przewodnik po…"
        canonicalUrl="https://fotz.pl/blog/paid-social-co-to"

        keywords="Paid Social co to jest, Paid Social definicja, czym jest Paid Social, Paid Social w marketingu, Paid Social przykłady, jak działa Paid Social, Paid Social strategia"

        canonical="https://fotz.pl/blog/paid-social-co-to"
      />
      <ArticleSchema
        title="Paid Social — co to jest i jak prowadzić reklamy w Social Media?"
        description="Kompletny przewodnik po paid social: porównanie platform (Meta vs LinkedIn vs TikTok), formaty, metryki i strategie targetowania."
        url="https://fotz.pl/blog/paid-social-co-to"
        datePublished="2024-01-21"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Paid Social", url: "https://fotz.pl/blog/paid-social-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Paid Social" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Paid Social — co to jest i jak prowadzić reklamy w Social Media?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Reklama w social media to dziś must-have — zasięg organiczny to 1-5%.
            Poznaj platformy (Meta, LinkedIn, TikTok), formaty, metryki i strategie targetowania.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest paid social?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Paid social</strong> to płatna reklama na platformach social media —
              Facebook, Instagram, LinkedIn, TikTok, Pinterest, YouTube i innych.
              W erze, gdy zasięg organiczny postów wynosi 1-5%, reklama płatna jest
              koniecznością dla firm chcących docierać do nowych odbiorców.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Globalnie wydatki na social media advertising przekroczyły 230 miliardów dolarów
              w 2023 roku i wciąż rosną. Kluczowa przewaga paid social to precyzja targetowania —
              możliwość dotarcia do dokładnie zdefiniowanej grupy docelowej.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "1-5%", opis: "zasięg organiczny postów na Facebooku i Instagramie — paid social to konieczność" },
                { stat: "230 mld USD", opis: "globalne wydatki na social media advertising w 2023 roku" },
                { stat: "3-4×", opis: "benchmark ROAS dla kampanii e-commerce paid social — poniżej to sygnał optymalizacji" },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Porównanie platform paid social</h2>
            <div className="space-y-4">
              {platforms.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-slate-900 text-lg">{p.platforma}</h3>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">CPM: {p.cpm}</span>
                  </div>
                  <p className="text-xs text-blue-600 mb-2 font-semibold">Najlepsza dla: {p.najlepsza_dla}</p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Targetowanie:</p>
                      <p className="text-slate-700">{p.targetowanie}</p>
                    </div>
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-xs font-semibold text-blue-600 mb-1">Formaty:</p>
                      <p className="text-blue-800">{p.formaty}</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Zalety:</p>
                      <p className="text-green-800">{p.zalety}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Min. budżet: {p.minimalny_budzet}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Cele kampanii — funnel paid social</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {campaignObjectives.map((c, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 text-lg mb-2">{c.cel}</h3>
                  <p className="text-slate-600 text-sm mb-2">{c.opis}</p>
                  <p className="text-xs text-slate-500 mb-1">Metryki: {c.metryki}</p>
                  <p className="text-xs text-slate-400">Kiedy: {c.kiedy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Formaty kreacji w paid social</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {creativeFormats.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 mb-1">{f.format}</h3>
                  <p className="text-slate-600 text-sm mb-2">{f.kiedy}</p>
                  <p className="text-xs text-slate-500">{f.wskazówki}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — paid social</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <ContactSection />
    </Layout>
  );
}
