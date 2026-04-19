import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Star, Search, CheckCircle2 } from "lucide-react";
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

export default function BlogGoogleBusinessProfileCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Google Business Profile — co to jest i jak skonfigurować?" },
  ];

  const optimizationSteps = [
    { step: "1. Zweryfikuj firmę", desc: "Google wysyła kartę pocztową lub weryfikuje przez telefon/email. Bez weryfikacji profil ma ograniczone możliwości." },
    { step: "2. Uzupełnij wszystkie informacje", desc: "Nazwa, adres, godziny otwarcia, numer telefonu, strona www, kategoria główna i dodatkowe — kompletność profilu wpływa na ranking." },
    { step: "3. Dodaj zdjęcia i filmy", desc: "Firmy z zdjęciami mają 42% więcej próśb o wskazówki i 35% więcej kliknięć na stronę. Min. 5-10 zdjęć wysokiej jakości." },
    { step: "4. Zbieraj i odpowiadaj na recenzje", desc: "Odpowiedzi na recenzje (zarówno pozytywne jak i negatywne) pokazują zaangażowanie. Średnia ocena wpływa na ranking." },
    { step: "5. Dodawaj posty GBP", desc: "Google Posts — aktualności, oferty, eventy. Widoczne w Knowledge Panelu i mapach. Świeże treści sygnalizują aktywność firmy." },
    { step: "6. Użyj słów kluczowych w opisie", desc: "Opis firmy (750 znaków) powinien zawierać lokalne słowa kluczowe. Np. 'agencja SEO Kraków specjalizująca się...'." },
  ];

  const faqItems = [
    {
      question: "Co to jest Google Business Profile?",
      answer: "Google Business Profile (dawniej Google My Business, GMB) to darmowy profil firmy w ekosystemie Google, który pojawia się w wynikach Google Maps, Google Search i Knowledge Panel. Profil GBP zawiera: nazwę firmy, adres, godziny otwarcia, numer telefonu, stronę www, zdjęcia, recenzje klientów, posty i produkty. Profil GBP jest szczególnie ważny dla firm lokalnych — pojawia się w 'Local Pack' (3 firmy na mapie) dla zapytań lokalnych np. 'restauracja Kraków', 'agencja SEO Wrocław'. Dla firm bez witryny GBP może być jedyną prezentacją w internecie.",
    },
    {
      question: "Jak Google Business Profile wpływa na lokalne SEO?",
      answer: "Google Business Profile to kluczowy czynnik lokalnego SEO (Local Pack). Google ocenia profile GBP według trzech kryteriów: Relevance (dopasowanie do zapytania) — kompletny profil z odpowiednimi kategoriami i słowami kluczowymi. Distance (odległość) — jak blisko firma jest od lokalizacji użytkownika. Prominence (renoma) — liczba i jakość recenzji, cytowań NAP (Name, Address, Phone) na innych stronach, autorytet strony www. Statystyki: 46% wyszukań w Google ma lokalną intencję. Firmy w Local Pack (3-pack) uzyskują 25-30% wszystkich kliknięć dla danego zapytania lokalnego.",
    },
    {
      question: "Jak założyć i zweryfikować Google Business Profile?",
      answer: "Kroki do założenia GBP: 1) Wejdź na business.google.com i zaloguj się kontem Google. 2) Kliknij 'Dodaj firmę' i wpisz nazwę firmy. 3) Wybierz kategorię główną (np. Agencja marketingowa, Restauracja). 4) Dodaj adres fizyczny lub zaznacz 'Dostarczam produkty/usługi do klientów'. 5) Podaj numer telefonu i adres strony www. 6) Zweryfikuj firmę — Google wyśle pocztówkę z 5-cyfrowym kodem (7-14 dni) lub zaoferuje weryfikację telefoniczną/email. 7) Po weryfikacji uzupełnij profil: zdjęcia, opis, godziny, atrybuty. Uwaga: nie twórz duplikatów — sprawdź czy firma nie jest już na Maps.",
    },
    {
      question: "Jak zdobywać recenzje w Google Business Profile?",
      answer: "Strategie pozyskiwania recenzji GBP: 1) Generuj link bezpośredni do recenzji — GBP Dashboard → Klienci → Recenzje → Udostępnij link. 2) Wyślij link do zadowolonych klientów przez email/SMS po zakończeniu usługi. 3) Dodaj link do podpisu email. 4) QR kod w lokalu/na fakturze linkujący do recenzji. 5) Poproś klientów bezpośrednio — 70% klientów zostawi recenzję jeśli zostanie poproszone. 6) Zawsze odpowiadaj na recenzje — Google to widzi. Czego NIE robić: nie kupuj fałszywych recenzji (Google usuwa), nie proś pracowników, nie oferuj nagród za recenzje (niezgodne z polityką Google).",
    },
    {
      question: "Czym są Google Posts i jak je wykorzystać?",
      answer: "Google Posts to krótkie wpisy (do 1500 znaków + zdjęcie) publikowane bezpośrednio w profilu GBP, widoczne w Knowledge Panelu i Google Maps. Typy postów: Nowości — aktualności o firmie, nowe produkty/usługi. Oferty — promocje z datą ważności, kod rabatowy. Eventy — wydarzenie z datą i godziną. Produkty — prezentacja konkretnych produktów. Posty Google wygasają po 7 dniach (oferty i eventy według daty). Najlepsze praktyki: regularność (1-2 posty tygodniowo), słowa kluczowe lokalne w treści, konkretne CTA (Zarezerwuj, Zadzwoń, Dowiedz się więcej), zdjęcia min. 720x540px.",
    },
    {
      question: "Co to są cytowania NAP i jak wpływają na Local SEO?",
      answer: "NAP (Name, Address, Phone) to spójne dane kontaktowe firmy — nazwa, adres i telefon — w różnych katalogach i serwisach internetowych. Cytowania NAP (citations) to wzmianki o firmie z tymi danymi na zewnętrznych stronach: katalogi firm (Panorama Firm, Yelp, TripAdvisor, Yellow Pages), branżowe portale, media lokalne, Google Maps. Spójność NAP jest kluczowa dla lokalnego SEO — rozbieżności (inna nazwa, stary adres) confundują Google i obniżają ranking. Gdzie budować cytowania: Panoramafirm.pl, Aleo.com, Yelp.pl, TripAdvisor (gastronomia), Booking.com (hotele), branżowe katalogi. Narzędzia do audytu: Moz Local, BrightLocal, Yext.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Google Business Profile — co to jest i jak skonfigurować?"
        description="Google Business Profile co to jest — wyjaśniamy czym jest GBP (Google My Business), jak wpływa na lokalne SEO, jak założyć profil i zdobywać recenzje."
        canonical="https://fotz.pl/blog/google-business-profile-co-to"

        keywords="Google Business Profile co to jest, Google Business Profile definicja, czym jest Google Business Profile, Google Business Profile przykłady, jak działa Google Business Profile, Google Business Profile znaczenie, Google Business Profile przewodnik"
      />
      <ArticleSchema
        title="Google Business Profile — co to jest i jak skonfigurować?"
        description="Czym jest Google Business Profile (dawniej Google My Business), jak wpływa na lokalne SEO, Local Pack, jak zakładać i optymalizować profil GBP."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/google-business-profile-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Lokalne SEO</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Google Business Profile — co to jest i jak go skonfigurować?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Google Business Profile (dawniej Google My Business) to darmowy profil firmy w Google Maps i Search.
                Klucz do lokalnego SEO — jak go optymalizować?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Jak optymalizować Google Business Profile?</h2>
              <div className="space-y-3 mb-6">
                {optimizationSteps.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{s.step}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Czynniki rankingu w Google Local Pack</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6">
                <p className="text-slate-400 text-xs mb-3">Jak Google ocenia firmy do Local Pack (3 pierwsze wyniki na mapach)</p>
                <div className="space-y-3">
                  {[
                    { factor: "Relevance (Trafność)", weight: "~35%", desc: "Kategoria firmy, słowa kluczowe w nazwie/opisie, kompletność profilu", color: "text-blue-400" },
                    { factor: "Distance (Odległość)", weight: "~30%", desc: "Odległość firmy od lokalizacji użytkownika lub centrum wyszukiwanego miasta", color: "text-green-400" },
                    { factor: "Prominence (Renoma)", weight: "~35%", desc: "Liczba i jakość recenzji, cytowania NAP, autorytet strony www, linki", color: "text-yellow-400" },
                  ].map((f, idx) => (
                    <div key={idx} className="flex items-start justify-between gap-3">
                      <div>
                        <p className={`font-bold text-sm ${f.color}`}>{f.factor}</p>
                        <p className="text-slate-400 text-xs">{f.desc}</p>
                      </div>
                      <span className="text-white font-bold text-sm whitespace-nowrap">{f.weight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <MapPin className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz poprawić widoczność lokalną?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Optymalizacja GBP, lokalne SEO i budowanie cytowań NAP — pojawiaj się w Local Pack dla Twojego miasta.
                </p>
                <Link to="/seo/pozycjonowanie" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Lokalne SEO — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Google Business Profile co to jest</h2>
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
          heading="Pojaw się na pierwszym miejscu w Google Maps"
          subheading="Optymalizacja Google Business Profile i lokalne SEO — więcej klientów z Twojego miasta."
        />
      </Layout>
    </>
  );
}
