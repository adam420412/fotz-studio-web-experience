import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest micro influencer?",
    answer:
      "Micro influencer to twórca treści z bazą obserwujących od 10 000 do 100 000 osób. Wyróżnia go wysoki engagement rate, silna relacja ze społecznością i niszowy autorytet w konkretnej dziedzinie. Mimo mniejszego zasięgu niż macro influencerzy, micro influencerzy osiągają wyższe wskaźniki zaangażowania i są postrzegani jako bardziej autentyczni.",
  },
  {
    question: "Dlaczego micro influencerzy są często skuteczniejsi od celebrities?",
    answer:
      "Micro influencerzy mają wyższy engagement rate (3–8% vs 0,5–2% dla mega influencerów), ich audiencja jest bardziej niszowa i precyzyjnie targetowana, postrzegani są jako bardziej autentyczni i 'prawdziwi', koszt współpracy jest wielokrotnie niższy, a konwersja na zakup jest zazwyczaj wyższa.",
  },
  {
    question: "Ile kosztuje współpraca z micro influencerem?",
    answer:
      "Stawki micro influencerów są bardzo zróżnicowane. Orientacyjnie: nano (1–10k) od 100–500 PLN za post; micro (10–100k) od 500 PLN do 5 000 PLN za post Instagram; od 1 000 PLN do 10 000 PLN za film YouTube. Stawki zależą od niszy, platformy, formatu i zaangażowania odbiorców.",
  },
  {
    question: "Jak znaleźć właściwych micro influencerów?",
    answer:
      "Metody wyszukiwania: narzędzia do influencer marketingu (Creator.co, Heepsy, Modash, Favikon), wyszukiwanie hashtagów na Instagramie/TikToku, analiza obserwujących istniejących klientów i fanów marki, monitoring wzmianek marki oraz rekomendacje od istniejących partnerów twórczych.",
  },
  {
    question: "Jak mierzyć ROI współpracy z micro influencerem?",
    answer:
      "Kluczowe metryki to: reach i impressions, engagement rate (polubienia + komentarze + udostępnienia), link clicks i swipe-ups, unikatowe kody promocyjne (do śledzenia konwersji), koszt na engagement, koszt na kliknięcie (CPC), konwersje z kampanii influencer oraz Brand Sentiment w komentarzach.",
  },
];

const microVsMacro = [
  { kryterium: "Followersów", micro: "10 000 – 100 000", macro: "500 000 – 5 000 000+" },
  { kryterium: "Engagement Rate", micro: "3–8% (wysoki)", macro: "0,5–2% (niski)" },
  { kryterium: "Autentyczność", micro: "Bardzo wysoka", macro: "Niska–Średnia" },
  { kryterium: "Koszt per post", micro: "500–5 000 PLN", macro: "20 000–200 000+ PLN" },
  { kryterium: "Targetowanie", micro: "Niszowe, precyzyjne", macro: "Masowe, szerokie" },
  { kryterium: "Konwersja", micro: "Wyższa", macro: "Niższa" },
  { kryterium: "Dostępność", micro: "Łatwa", macro: "Trudna (agencja, długi czas negocjacji)" },
  { kryterium: "Skalowalność", micro: "Wymagana kampania 10–100 twórców", macro: "Jeden deal = duży zasięg" },
];

const influencerProcess = [
  {
    etap: "Definicja celów i ICP",
    opis: "Określ co chcesz osiągnąć (awareness, trial, sprzedaż) i jakie cechy powinien mieć twórca: niszę, demografię audiencji, platformę, wartości zgodne z marką.",
  },
  {
    etap: "Discovery i screening",
    opis: "Znajdź potencjalnych twórców. Sprawdź nie tylko liczbę obserwujących, ale jakość audiencji (fake followers?), engagement rate, styl komunikacji i historię współpracy z markami.",
  },
  {
    etap: "Brief i onboarding",
    opis: "Przygotuj jasny brief: cele kampanii, key messages, dos and don'ts, harmonogram, wymagania odnośnie disclosure (#ad, #partner). Im mniej ograniczeń kreatywnych, tym bardziej autentyczny content.",
  },
  {
    etap: "Realizacja i monitoring",
    opis: "Śledź publikacje na bieżąco. Angażuj się w komentarze. Zbierz UTM linki i kody promocyjne do pomiaru. Repromujuj najlepsze treści organicznie i w płatnych boostach.",
  },
  {
    etap: "Pomiar i optymalizacja",
    opis: "Porównaj wyniki z KPI. Który twórca generuje najwyższy ROI? Buduj relacje z top performers, oferuj długoterminowe ambasadorstwo. Unikaj jednorazowych transakcji.",
  },
];

export default function BlogMicroInfluencerCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Micro Influencer — co to jest? Marketing z mikroinfluencerami"
        description="Micro influencer marketing — definicja, micro vs. macro influencer, jak znaleźć twórców, koszty i jak mierzyć ROI. Kompletny przewodnik po marketingu z mikroinfluencerami."
        canonicalUrl="https://fotz.pl/blog/micro-influencer-marketing-co-to"

        keywords="Micro Influencer co to jest, Micro Influencer definicja, czym jest Micro Influencer, Micro Influencer w marketingu, Micro Influencer przykłady, jak działa Micro Influencer, Micro Influencer strategia"
      />
      <ArticleSchema
        title="Micro Influencer — co to jest i jak z nimi współpracować?"
        description="Kompletny przewodnik po micro influencer marketingu: porównanie z macro, koszty, jak znajdować twórców i mierzyć ROI."
        url="https://fotz.pl/blog/micro-influencer-marketing-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Micro Influencer Marketing", url: "https://fotz.pl/blog/micro-influencer-marketing-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Micro Influencer Marketing" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Micro Influencer Marketing — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Micro influencerzy — 10–100k obserwujących — często przynoszą wyższy ROI niż celebrities.
            Poznaj porównanie micro vs. macro, koszty współpracy i jak prowadzić skuteczne kampanie.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest micro influencer?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Micro influencer</strong> to twórca treści posiadający między 10 000 a 100 000 obserwujących.
              Charakteryzuje się wysoce zaangażowaną, niszową społecznością i silnym autorytetem eksperckim
              w konkretnej dziedzinie — czy to fitness, kosmetyki, finanse osobiste, kuchnia czy gaming.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badanie Markerly pokazuje, że gdy liczba obserwujących rośnie, engagement rate maleje.
              Micro influencerzy osiągają engagement rate 3–8% vs 0,5–2% dla mega influencerów.
              Dla marek szukających jakości kontaktu zamiast ilości — micro jest często lepszym wyborem.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "3–8%", opis: "engagement rate micro influencerów vs 0,5–2% mega influencerów" },
                { stat: "22×", opis: "wyższe zaangażowanie mikro vs celebrity influencers (Twitter)" },
                { stat: "82%", opis: "konsumentów jest bardzo skłonnych kupić produkt polecony przez mikro influencera" },
              ].map((s, i) => (
                <div key={i} className="bg-fuchsia-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-fuchsia-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Porównanie */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Micro vs. Macro Influencer — porównanie</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Kryterium</th>
                    <th className="p-3 text-left">Micro Influencer</th>
                    <th className="p-3 text-left">Macro Influencer</th>
                  </tr>
                </thead>
                <tbody>
                  {microVsMacro.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.kryterium}</td>
                      <td className="p-3 text-fuchsia-700 font-medium">{row.micro}</td>
                      <td className="p-3 text-slate-600">{row.macro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Proces */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak przeprowadzić kampanię z micro influencerami? 5 etapów</h2>
            <div className="space-y-5">
              {influencerProcess.map((item, i) => (
                <div key={i} className="flex gap-5 bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="w-12 h-12 bg-fuchsia-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.etap}</h3>
                    <p className="text-slate-600">{item.opis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — micro influencer marketing</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
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
