import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, MapPin, Star, ShoppingBag, Calendar, Image } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function StronaInternetowaDlaRestauracji() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Strona internetowa dla restauracji" },
  ];

  const features = [
    { icon: ShoppingBag, title: "Menu online", desc: "Czytelne, atrakcyjne menu z zdjęciami, cenami i opisami. Aktualizujesz sam bez programisty." },
    { icon: Calendar, title: "System rezerwacji", desc: "Rezerwacje stolika online — integracja z kalendarzem, powiadomienia SMS/email." },
    { icon: MapPin, title: "SEO lokalne", desc: "Widoczność w 'restauracja [miasto]' i Google Maps. Pojawiasz się gdy ktoś szuka w okolicy." },
    { icon: Globe, title: "Zamówienia online", desc: "Integracja z Glovo, Uber Eats lub własnym systemem zamówień na wynos." },
    { icon: Image, title: "Galeria i zdjęcia", desc: "Profesjonalna prezentacja wnętrza i dań. Zdjęcia które wywołują apetyt." },
    { icon: Star, title: "Opinie Google", desc: "Integracja z opinii Google Maps i TripAdvisor. Buduje zaufanie nowych gości." },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona internetowa dla restauracji?",
      answer:
        "Strona internetowa dla restauracji kosztuje od 2000 do 10 000 zł w zależności od zakresu. Prosta strona z menu i mapą: 2000-4000 zł. Strona z systemem rezerwacji: 4000-7000 zł. Strona z zamówieniami online: 6000-15 000 zł. Do tego hosting (ok. 50-150 zł/mies.) i domena (ok. 80 zł/rok).",
    },
    {
      question: "Co powinna zawierać strona restauracji?",
      answer:
        "Obowiązkowe elementy: menu (z cenami i zdjęciami), godziny otwarcia, adres z mapą Google, numer telefonu i rezerwacje, galeria zdjęć, link do mediów społecznościowych, informacje o parkingu i dojazdu. Opcjonalnie: system rezerwacji online, zamówienia na wynos, blog z przepisami.",
    },
    {
      question: "Czy restauracja potrzebuje strony internetowej?",
      answer:
        "W 2025 roku — zdecydowanie tak. 90% gości sprawdza restaurację online zanim przyjdzie. Jeśli nie masz strony (lub masz słabą) — tracisz gości na rzecz konkurencji która ją ma. Poza tym strona to warunek konieczny do skutecznego SEO lokalnego i Google Maps.",
    },
    {
      question: "Jak promować restaurację w internecie?",
      answer:
        "Kanały promocji restauracji online: Google Business Profile (obowiązkowo i bezpłatnie), Facebook/Instagram (zdjęcia dań, aktualności), SEO lokalne (widoczność w wyszukiwarce), Google Ads (kampanie lokalne), TripAdvisor (opinie), platformy delivery (Glovo, Uber Eats, Wolt).",
    },
    {
      question: "Czy mogę samodzielnie aktualizować menu na stronie?",
      answer:
        "Tak — tworzymy strony na WordPress który umożliwia samodzielne aktualizowanie treści. Dodajesz dania, zmieniasz ceny, aktualizujesz godziny bez żadnej wiedzy technicznej. Robimy szkolenie z obsługi panelu po uruchomieniu strony.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Strona internetowa dla restauracji — menu, rezerwacje, SEO"
        description="Strona internetowa dla restauracji — menu online, system rezerwacji, SEO lokalne, zamówienia online. Profesjonalne strony dla gastronomii od 2000 zł. Wycena!"
        canonical="https://fotz.pl/uslugi/strona-internetowa-dla-restauracji"
        keywords="strona internetowa dla restauracji, strona www restauracji, strona restauracji, strona dla gastronomii, menu online restauracja"
      />
      <ServiceSchema
        name="Strona internetowa dla restauracji"
        description="Tworzenie stron internetowych dla restauracji — menu online, rezerwacje, SEO lokalne, galeria, integracja z Google Maps"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-amber-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-amber-900 bg-opacity-50 text-amber-300 px-3 py-1 rounded-full text-sm mb-4">
                <Star className="w-4 h-4" />
                Gastronomia i restauracje
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Strona internetowa dla restauracji — przyciągaj gości z Google
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Tworzymy strony internetowe dla restauracji, kawiarni i lokali gastronomicznych. Menu online,
                rezerwacje, SEO lokalne — wszystko co potrzebne żeby przyciągać nowych gości.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "90%", label: "Gości sprawdza online" },
                  { value: "od 2000 zł", label: "Cena strony" },
                  { value: "2-4 tyg.", label: "Czas realizacji" },
                  { value: "WordPress", label: "Łatwa aktualizacja" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Bezpłatna wycena strony <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co zawiera strona dla restauracji?</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Każda strona restauracji jest inna — dostosowujemy funkcje do potrzeb lokalu.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.07}>
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <Icon className="w-8 h-8 text-amber-600 mb-3" />
                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </FadeInView>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Checklist */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dlaczego restauracja traci gości bez dobrej strony?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Goście szukają menu online zanim zdecydują się przyjść",
                  "Konkurencja z rezerwacjami online zyskuje więcej stolików",
                  "Google Maps favours firmy z dobrymi stronami internetowymi",
                  "Brak zdjęć = utracone zakupy impulsowe",
                  "Klienci nie mogą znaleźć godzin otwarcia przez telefon",
                  "TripAdvisor i opinie online decydują o wyborze restauracji",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Strona dla restauracji</h2>
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
          heading="Stwórzmy stronę dla Twojej restauracji"
          subheading="Bezpłatna wycena i konsultacja. Powiemy Ci co warto, a co jest zbędne."
        />
      </Layout>
    </>
  );
}
