import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, MapPin, Star, Search, BarChart3, Globe, AlertCircle } from "lucide-react";
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

export default function GoogleMojaFirma() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Google Moja Firma — poradnik" },
  ];

  const faqItems = [
    {
      question: "Co to jest Google Moja Firma (Google Business Profile)?",
      answer:
        "Google Moja Firma (oficjalnie Google Business Profile) to bezpłatne narzędzie Google umożliwiające firmom zarządzanie swoim wyglądem w wyszukiwarce i Mapach Google. Zawiera: dane kontaktowe, godziny otwarcia, zdjęcia, opinie, posty i wiele więcej. To wizytówka firmy w Google — bezpłatna i niezbędna.",
    },
    {
      question: "Jak założyć Google Moja Firma?",
      answer:
        "Krok 1: Wejdź na business.google.com i kliknij 'Zarządzaj teraz'. Krok 2: Wyszukaj swoją firmę lub dodaj nową. Krok 3: Podaj dane (nazwa, kategoria, adres, kontakt). Krok 4: Zweryfikuj firmę (pocztą, telefonem lub wideo). Krok 5: Uzupełnij profil — zdjęcia, godziny, opis. Weryfikacja trwa 1-14 dni.",
    },
    {
      question: "Czy Google Moja Firma jest bezpłatna?",
      answer:
        "Tak — Google Business Profile jest całkowicie bezpłatny. Tworzenie profilu, zarządzanie nim, dodawanie zdjęć i postów jest darmowe. Google zarabia na reklamach (Google Ads), ale samo narzędzie do zarządzania wizytówką jest bezpłatne dla każdej firmy.",
    },
    {
      question: "Jak zdobywać opinie w Google Moja Firma?",
      answer:
        "Metody zdobywania opinii: Wyślij klientom bezpośredni link do zostawienia opinii (business.google.com > Udostępnij opinie). Poproś osobiście po wykonaniu usługi. Dodaj link w stopce emaila lub na paragonach. Integracja z systemem CRM. Nigdy nie kupuj fałszywych opinii — grozi to usunięciem profilu.",
    },
    {
      question: "Co zrobić jeśli mam fałszywe negatywne opinie?",
      answer:
        "Możesz zgłosić opinię do Google jako nieodpowiednią (Zgłoś). Google usuwa opinie które naruszają zasady (fałszywe, obraźliwe, nie dotyczące rzeczywistej wizyty). Odpowiadaj na wszystkie opinie — negatywne szczególnie. Profesjonalna, spokojna odpowiedź buduje zaufanie w oczach innych klientów.",
    },
    {
      question: "Jak zoptymalizować wizytówkę Google?",
      answer:
        "Optymalizacja Google Business Profile: Wypełnij 100% profilu. Dodaj 10+ zdjęć wysokiej jakości. Regularnie dodawaj Posty Google (aktualności, oferty). Odpowiadaj na wszystkie opinie. Uzupełnij pytania i odpowiedzi. Dodaj produkty i usługi z cenami. Sprawdź poprawność godzin otwarcia (szczególnie świątecznych). Regularność aktywności = wyższe pozycje.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Google Moja Firma — jak założyć i zoptymalizować wizytówkę? | fotz.pl"
        description="Google Moja Firma (Google Business Profile) — kompletny poradnik. Jak założyć, zweryfikować i zoptymalizować wizytówkę Google. Bezpłatnie, krok po kroku."
        canonical="https://fotz.pl/blog/google-moja-firma"
        keywords="google moja firma, wizytówka google, google my business, google business profile, pozycjonowanie google maps, profil google moja firma, optymalizacja gmb, wizytówka google moja firma, zakładanie google moja firma, jak założyć wizytówkę google, optymalizacja wizytówki google, pozycjonowanie lokalne"
      />
      <ArticleSchema
        title="Google Moja Firma — kompletny przewodnik po Google Business Profile"
        description="Jak założyć Google Moja Firma, zweryfikować i zoptymalizować profil. Wszystko co musisz wiedzieć o wizytówce Google."
        datePublished="2025-01-20"
        dateModified="2025-03-10"
        url="https://fotz.pl/blog/google-moja-firma"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 min czytania</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> SEO lokalne</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Google Moja Firma — jak założyć i zoptymalizować wizytówkę Google?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Google Moja Firma (Google Business Profile) — bezpłatna wizytówka Google dla firm. Optymalizacja wizytówki Google Maps i pozycjonowanie lokalne krok po kroku. Jak założyć wizytówkę Google Moja Firma i pozyskiwać klientów lokalnych.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Co to jest Google Moja Firma?</h2>
              <p className="text-slate-700 mb-4">
                Google Business Profile (GBP), znany wcześniej jako Google Moja Firma, to bezpłatne narzędzie
                Google umożliwiające firmom zarządzanie swoją obecnością w wyszukiwarce Google i na Mapach Google.
              </p>
              <p className="text-slate-700 mb-6">
                Kiedy ktoś wpisuje w Google np. "restauracja Kraków" lub "hydraulik blisko mnie" — wyniki
                z Mapy Google (tzw. Local Pack) to właśnie firmy które mają aktywne i zoptymalizowane profile GBP.
                Pojawienie się tam jest BEZPŁATNE.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 font-semibold text-sm mb-1">Kluczowy fakt:</p>
                <p className="text-green-700 text-sm">
                  46% wszystkich wyszukiwań w Google ma charakter lokalny. Dobrze zoptymalizowana wizytówka Google
                  może generować dziesiątki leadów miesięcznie — całkowicie bezpłatnie.
                </p>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak założyć Google Moja Firma?</h2>
              <div className="space-y-4 mb-6">
                {[
                  { step: "1", title: "Wejdź na business.google.com", desc: "Zaloguj się na konto Google (Twojej firmy) i kliknij 'Zarządzaj teraz'." },
                  { step: "2", title: "Znajdź lub dodaj firmę", desc: "Wyszukaj nazwę firmy — może już istnieć niezatwierdzony profil. Jeśli nie — kliknij 'Dodaj firmę'." },
                  { step: "3", title: "Podaj dane firmy", desc: "Nazwa, kategoria główna, adres, obszar obsługi, numer telefonu, strona internetowa." },
                  { step: "4", title: "Zweryfikuj firmę", desc: "Metody: pocztówka pocztą (5-14 dni), SMS/telefon (natychmiastowo dla eligible), wideo call z Google." },
                  { step: "5", title: "Uzupełnij profil w 100%", desc: "Godziny otwarcia, opis firmy (750 znaków), zdjęcia, atrybuty, produkty/usługi." },
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
              <p className="text-slate-600 mb-4">Firmy które robią te rzeczy regularnie dominują lokalne wyniki:</p>
              <div className="space-y-2 mb-6">
                {[
                  { icon: Star, text: "Zdobywaj opinie — 4+ gwiazdki = wyższe pozycje i więcej kliknięć" },
                  { icon: Globe, text: "Dodaj Posty Google min. 1-2 razy w tygodniu (aktualności, oferty, eventy)" },
                  { icon: Search, text: "Uzupełnij pytania i odpowiedzi — proaktywnie, nie czekaj na klientów" },
                  { icon: BarChart3, text: "Analizuj statystyki — które słowa kluczowe generują widoki i kliknięcia" },
                  { icon: MapPin, text: "Dodaj 20+ zdjęć wysokiej jakości (wnętrze, ekipa, produkty, logo)" },
                  { icon: CheckCircle2, text: "Aktualizuj godziny na święta i wyjątkowe dni" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak pozycjonować się wyżej w Mapach Google?</h2>
              <p className="text-slate-700 mb-4">
                Google Local Pack (Mapy) bierze pod uwagę 3 główne czynniki rankingowe:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { title: "Relevance (Trafność)", desc: "Czy profil odpowiada na zapytanie? Ważne: kategoria, opis, posty, produkty z frazami kluczowymi." },
                  { title: "Distance (Odległość)", desc: "Jak daleko jesteś od osoby szukającej? Tego nie zmienisz — ale obszar obsługi możesz zdefiniować." },
                  { title: "Prominence (Widoczność)", desc: "Opinie, aktywność profilu, linki do strony, wzmianki w internecie. Tu jest największa praca." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-blue-600 mb-2 text-sm">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-800 font-semibold text-sm mb-1">Nie rób tego z wizytówką Google!</p>
                  <p className="text-amber-700 text-sm">
                    Kupowanie fałszywych opinii, podawanie fałszywego adresu, duplikowanie profilów, stosowanie keyword stuffing
                    w nazwie firmy — to wszystko narusza zasady Google i grozi zawieszeniem profilu.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Chcesz być wyżej w Mapach Google?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Zajmujemy się lokalnym SEO — optymalizacją wizytówek Google i pozycjonowaniem lokalnym.
                </p>
                <Link to="/uslugi/pozycjonowanie-lokalne">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm">
                    Dowiedz się więcej o SEO lokalnym <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Google Moja Firma</h2>
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
          heading="Potrzebujesz pomocy z Google Business Profile?"
          subheading="Optymalizujemy wizytówki Google i prowadzimy lokalne SEO które generuje klientów."
        />
      </Layout>
    </>
  );
}
