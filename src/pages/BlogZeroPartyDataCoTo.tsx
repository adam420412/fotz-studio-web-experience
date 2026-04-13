import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest zero-party data?",
    answer:
      "Zero-party data to dane, które klienci świadomie i dobrowolnie przekazują marce bezpośrednio — np. poprzez ankiety, quizy, formularze preferencji, konfiguratory produktów czy prośby o personalizację. W odróżnieniu od danych third-party (kupowanych od brokerów) i first-party (zbieranych przez śledzenie zachowań), zero-party data pochodzi wprost od konsumenta, który aktywnie chce się podzielić informacjami.",
  },
  {
    question: "Czym różnią się zero-party, first-party i third-party data?",
    answer:
      "Zero-party data: klient aktywnie i świadomie udostępnia dane (ankieta preferencji). First-party data: dane zebrane przez śledzenie zachowań klienta na własnych platformach (historia zakupów, kliknięcia, sesje). Third-party data: dane kupione od zewnętrznych brokerów, zbierane przez inne firmy. Zero-party ma najwyższą jakość i zgodność z RODO, third-party ma najniższą.",
  },
  {
    question: "Dlaczego zero-party data jest ważna po śmierci cookies?",
    answer:
      "Google wycofuje third-party cookies, co niszczy tradycyjne targetowanie remarketingowe i audience segmentation opartą na brokerach danych. Zero-party data staje się kluczową alternatywą — dane bezpośrednio od klientów są najcenniejsze, najbardziej precyzyjne i w pełni zgodne z RODO. Firmy, które budują strategie zero-party data teraz, będą miały przewagę w cookieless future.",
  },
  {
    question: "Jak zbierać zero-party data?",
    answer:
      "Metody zbierania zero-party data to: quizy personalizacyjne (np. 'Znajdź idealny produkt dla siebie'), ankiety preferencji po zakupie, konfigurator produktu z zapisanymi preferencjami, center preferencji email (tematy, częstotliwość), formularze profilu klienta, programy lojalnościowe z deklarowanymi zainteresowaniami, chatboty zbierające intencje, oraz interaktywne formularze 'powiedz nam więcej'.",
  },
  {
    question: "Jak wykorzystać zero-party data do personalizacji?",
    answer:
      "Zebrane zero-party data można używać do: personalizacji rekomendacji produktowych, segmentacji list emailowych wg deklarowanych preferencji, dostosowania contentu na stronie do profilu użytkownika, targetowania reklam first-party audience, tworzenia hiperspersonalizowanych kampanii email, oraz budowania lepszych ICP (Ideal Customer Profile) do sprzedaży i product development.",
  },
];

const dataComparison = [
  {
    typ: "Zero-Party Data",
    źródło: "Klient aktywnie podaje dane",
    przykłady: "Ankiety, quizy, formularze preferencji",
    jakość: "Bardzo wysoka",
    rodo: "W pełni zgodne",
    koszt: "Niski (wymaga budowania relacji)",
  },
  {
    typ: "First-Party Data",
    źródło: "Zbierane przez śledzenie zachowań na własnych platformach",
    przykłady: "Historia zakupów, kliknięcia, sesje, email opens",
    jakość: "Wysoka",
    rodo: "Zgodne przy transparency",
    koszt: "Niski (własna infrastruktura)",
  },
  {
    typ: "Second-Party Data",
    źródło: "First-party data partnera, udostępniana bezpośrednio",
    przykłady: "Dane od partnera biznesowego (np. retailera)",
    jakość: "Średnia",
    rodo: "Wymaga umowy",
    koszt: "Średni",
  },
  {
    typ: "Third-Party Data",
    źródło: "Dane kupione od brokerów danych",
    przykłady: "Audience segments od Oracle Data Cloud, Acxiom",
    jakość: "Niska",
    rodo: "Problematyczne",
    koszt: "Wysoki",
  },
];

const zeroPartyTactics = [
  {
    taktyka: "Quiz Personalizacyjny",
    opis: "Interaktywny quiz prowadzący do rekomendacji produktu. Przy okazji zbiera preferencje, potrzeby i kontekst klienta.",
    przykład: "Warby Parker: quiz doboru okularów; Sephora: quiz typu cery",
    zebraneData: "Styl życia, preferencje estetyczne, potrzeby, budżet",
  },
  {
    taktyka: "Preference Center Email",
    opis: "Strona preferencji, gdzie subskrybent sam wybiera tematy, częstotliwość i format newslettera.",
    przykład: "'Chcę otrzymywać: Nowości / Promocje / Poradniki. Jak często: tygodniowo / miesięcznie'",
    zebraneData: "Zainteresowania tematyczne, częstotliwość komunikacji, format",
  },
  {
    taktyka: "Ankieta Post-Purchase",
    opis: "Krótka (3–5 pytań) ankieta po zakupie: dlaczego kupiłeś, co porównywałeś, do czego używasz.",
    przykład: "'Jak planujesz używać tego produktu? Dla siebie / Jako prezent / Do pracy'",
    zebraneData: "Motywacja zakupu, use case, segmenty zastosowań",
  },
  {
    taktyka: "Konfiguratory i Selektory",
    opis: "Interaktywne narzędzia, gdzie klient konfiguruje swój ideał — a dane z konfiguracji zostają zapisane do personalizacji.",
    przykład: "Nike iD konfigurator buta, konstruktor zestawu komputerowego",
    zebraneData: "Preferencje produktowe, priorytety, budżet, styl",
  },
  {
    taktyka: "Profil Klienta / Onboarding Flow",
    opis: "Przy rejestracji lub po niej: seria pytań budujących profil klienta. Używane do natychmiastowej personalizacji doświadczeń.",
    przykład: "Spotify: ulubione gatunki muzyczne przy onboardingu; Netflix: wybór filmów",
    zebraneData: "Preferencje kategorii, poziom wiedzy, cele użytkowania",
  },
];

export default function BlogZeroPartyDataCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Zero-Party Data | Fotz Studio"
        description="Zero-party data — definicja, różnice vs. first/third-party data, 5 taktyk zbierania (quiz, preference center, ankiety) i jak używać do personalizacji po…"
        canonicalUrl="https://fotz.pl/blog/zero-party-data-co-to"

        keywords="Zero-Party Data co to jest, Zero-Party Data definicja, czym jest Zero-Party Data, Zero-Party Data przykłady, jak działa Zero-Party Data, Zero-Party Data znaczenie, Zero-Party Data przewodnik"

        canonical="https://fotz.pl/blog/zero-party-data-co-to"
      />
      <ArticleSchema
        title="Zero-Party Data — co to jest i jak zbierać?"
        description="Kompletny przewodnik po zero-party data: porównanie typów danych, 5 taktyk zbierania i personalizacja w cookieless future."
        url="https://fotz.pl/blog/zero-party-data-co-to"
        datePublished="2024-01-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Zero-Party Data", url: "https://fotz.pl/blog/zero-party-data-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Zero-Party Data" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Zero-Party Data — co to jest i dlaczego zastępuje cookies?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Zero-party data to dane dobrowolnie przekazywane przez klientów — najcenniejsze i najbardziej
            zgodne z RODO w cookieless future. Poznaj różnice typów danych, 5 taktyk zbierania i jak wdrożyć.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest zero-party data?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Zero-party data</strong> to kategoria danych zdefiniowana przez Forrester Research —
              dane, które konsumenci <em>celowo i proaktywnie</em> udostępniają marce.
              Kluczowe słowo to "proaktywnie": klient sam inicjuje przekazanie informacji,
              bo rozumie, że w zamian otrzyma lepsze, bardziej spersonalizowane doświadczenie.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              W świecie zanikających third-party cookies i rosnących regulacji prywatności (RODO, CCPA),
              zero-party data staje się fundamentem nowoczesnego marketingu opartego na danych.
            </p>
          </div>
        </section>
      </FadeInView>

      {/* Porównanie typów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Typy danych — porównanie</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Typ</th>
                    <th className="p-3 text-left">Źródło</th>
                    <th className="p-3 text-left">Jakość</th>
                    <th className="p-3 text-left">RODO</th>
                  </tr>
                </thead>
                <tbody>
                  {dataComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.typ}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.źródło}</td>
                      <td className={`p-3 font-medium text-sm ${i === 0 ? "text-green-700" : i === 1 ? "text-blue-700" : i === 2 ? "text-yellow-700" : "text-red-700"}`}>{row.jakość}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.rodo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 5 taktyk */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 taktyk zbierania zero-party data</h2>
            <div className="space-y-5">
              {zeroPartyTactics.map((t, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{t.taktyka}</h3>
                  <p className="text-slate-600 mb-3">{t.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Przykład:</p>
                      <p className="text-slate-700">{t.przykład}</p>
                    </div>
                    <div className="bg-cyan-50 rounded p-3">
                      <p className="text-xs font-semibold text-cyan-600 mb-1">Zbierane dane:</p>
                      <p className="text-cyan-800">{t.zebraneData}</p>
                    </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — zero-party data</h2>
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
