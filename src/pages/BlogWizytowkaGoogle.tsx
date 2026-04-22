import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, MapPin, Star, Search, Camera, MessageSquare } from "lucide-react";
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

export default function BlogWizytowkaGoogle() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Wizytówka Google — jak stworzyć i zoptymalizować?" },
  ];

  const optimizationSteps = [
    { icon: MapPin, title: "Dane kontaktowe 100%", desc: "Nazwa, adres, telefon, strona WWW, godziny otwarcia — wszystkie dane muszą być aktualne i spójne." },
    { icon: Camera, title: "Zdjęcia wysokiej jakości", desc: "Minimum 10-20 zdjęć: logo, okładka, wnętrze, zewnętrze, produkty, zespół. Zdjęcia = wyższe kliknięcia." },
    { icon: MessageSquare, title: "Posty Google Business", desc: "Regularne posty (aktualności, oferty, eventy) pokazują że profil jest aktywny — Google to nagradza." },
    { icon: Star, title: "Zarządzanie opiniami", desc: "Odpowiadaj na WSZYSTKIE opinie — pozytywne i negatywne. Pokazuje zaangażowanie i buduje zaufanie." },
    { icon: Search, title: "Pytania i odpowiedzi", desc: "Uzupełnij sekcję Q&A zanim zrobią to klienci. Kontrolujesz narrację i zmniejszasz bariery kontaktu." },
    { icon: CheckCircle2, title: "Atrybuty i kategorie", desc: "Wybierz właściwą kategorię główną i uzupełnij atrybuty (parking, dostępność, metody płatności)." },
  ];

  const faqItems = [
    {
      question: "Czym jest wizytówka Google i jak ją założyć?",
      answer:
        "Wizytówka Google (Google Business Profile) to bezpłatny profil firmy w Google Search i Google Maps. Założenie: wejdź na business.google.com, wyszukaj swoją firmę lub dodaj nową, wypełnij dane, zweryfikuj firmę (pocztówka, SMS lub video). Po weryfikacji uzupełnij profil 100% — zdjęcia, godziny, opis, usługi.",
    },
    {
      question: "Czy wizytówka Google jest bezpłatna?",
      answer:
        "Tak — Google Business Profile jest całkowicie bezpłatna. Tworzenie, zarządzanie, dodawanie zdjęć, postów i odpowiadanie na opinie jest darmowe. Google zarabia na reklamach Google Ads — sama wizytówka i widoczność organiczna w Mapach są bezpłatne.",
    },
    {
      question: "Jak zdobyć więcej opinii w wizytówce Google?",
      answer:
        "Skuteczne metody: Poproś bezpośrednio po usłudze (najskuteczniejsze). Wyślij SMS/email z linkiem do opinii (business.google.com > Udostępnij opinie). Dodaj kod QR do wizytówek i przy kasie. Umieść link w stopce emaila. Nigdy nie kupuj fałszywych opinii — ryzykujesz zawieszeniem profilu.",
    },
    {
      question: "Jak wyżej wyświetlać się w Mapach Google?",
      answer:
        "Czynniki rankingowe: kompletność profilu (100%), liczba i jakość opinii (4+ gwiazdki), regularność aktywności (posty, Q&A), odległość od szukającego, linki do strony internetowej. Kluczowe: zbieraj opinie, regularnie dodawaj posty i zdjęcia, uzupełnij wszystkie pola profilu.",
    },
    {
      question: "Co robić z negatywnymi opiniami w Google?",
      answer:
        "Kroki: 1) Sprawdź czy opinia narusza zasady Google (możesz ją zgłosić). 2) Odpowiedz publicznie — spokojnie, bez emocji, z propozycją rozwiązania. 3) Nigdy nie usuwaj ani nie ignoruj. 4) Zbieraj więcej pozytywnych opinii by 'rozmyć' negatywy. Profesjonalna odpowiedź na negatyw często bardziej buduje zaufanie niż brak problemów.",
    },
    {
      question: "Czy wizytówka Google zastępuje stronę internetową?",
      answer:
        "Nie — wzajemnie się uzupełniają. Wizytówka Google świetnie sprawdza się dla wyszukiwań lokalnych i Map. Strona internetowa daje więcej miejsca na treść, portfolio, blog, SEO i konwersje. Optymalne: masz oba — dobrą stronę + zoptymalizowany profil Google Business.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Wizytówka Google — jak założyć i zoptymalizować profil firmy"
        description="Wizytówka Google (Google Business Profile) — poradnik krok po kroku. Jak założyć, zweryfikować i zoptymalizować wizytówkę Google. Pojaw się wyżej w Mapach!"
        canonical="https://fotz.pl/blog/wizytowka-google"

        keywords="Wizytówka Google, Wizytówka Google co to jest, Wizytówka Google jak działa, Wizytówka Google definicja, Wizytówka Google przykłady, Wizytówka Google poradnik, Wizytówka Google przewodnik"
      />
      <ArticleSchema
        title="Wizytówka Google — kompletny poradnik Google Business Profile"
        description="Jak założyć wizytówkę Google, zweryfikować profil i zoptymalizować go pod wyższą widoczność w Mapach Google."
        datePublished="2025-02-10"
        dateModified="2025-03-25"
        url="https://fotz.pl/blog/wizytowka-google"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min czytania</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> SEO lokalne</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Wizytówka Google — jak założyć i zoptymalizować profil firmy?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Wizytówka Google to bezpłatne i jedno z najskuteczniejszych narzędzi marketingowych dla lokalnych firm.
                Ten przewodnik pokaże Ci jak ją założyć, zweryfikować i optymalizować krok po kroku.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Dlaczego wizytówka Google jest kluczowa?</h2>
              <p className="text-slate-700 mb-4">
                Google Business Profile to Twoja wizytówka widoczna dla milionów ludzi szukających firm w Google.
                Gdy ktoś wpisuje "fryzjer Kraków" lub "mechanik blisko mnie" — Local Pack (mapa z 3 firmami) to pierwsze co widzi.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { stat: "46%", desc: "zapytań Google ma charakter lokalny" },
                  { stat: "72%", desc: "szuka firmy lokalnej na smartfonie i odwiedza ją w ciągu dnia" },
                  { stat: "0 zł", desc: "kosztuje wizytówka Google Business Profile" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{item.stat}</div>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak założyć wizytówkę Google krok po kroku?</h2>
              <div className="space-y-4 mb-6">
                {[
                  { step: "1", title: "Wejdź na business.google.com", desc: "Zaloguj się kontem Google (najlepiej firmowym, nie prywatnym)." },
                  { step: "2", title: "Znajdź lub utwórz profil", desc: "Wyszukaj nazwę firmy — może istnieć unclaimed profil. Kliknij 'Zarządzaj' lub 'Dodaj firmę'." },
                  { step: "3", title: "Uzupełnij dane", desc: "Nazwa (dokładna jak w rejestrze), kategoria główna, adres, numer telefonu, strona www." },
                  { step: "4", title: "Zweryfikuj profil", desc: "Wybierz metodę: pocztówka (5-14 dni), SMS, video call. Bez weryfikacji profil nie jest publiczny." },
                  { step: "5", title: "Uzupełnij profil 100%", desc: "Godziny otwarcia, opis firmy, zdjęcia, kategorie dodatkowe, atrybuty, produkty i usługi." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak zoptymalizować wizytówkę Google?</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {optimizationSteps.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz pomocy z wizytówką Google?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Zajmujemy się optymalizacją Google Business Profile w ramach pozycjonowania lokalnego.
                </p>
                <Link to="/uslugi/pozycjonowanie-lokalne" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Pozycjonowanie lokalne <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Wizytówka Google</h2>
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
        />
      </Layout>
    </>
  );
}
