import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, DollarSign, Globe, AlertCircle } from "lucide-react";
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

export default function StronaInternetowaCena() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Strona internetowa cena — ile kosztuje?" },
  ];

  const pricingTiers = [
    {
      type: "Strona wizytówka",
      priceRange: "1 500 – 4 000 zł",
      desc: "Prosta strona 1-5 podstron bez CMS",
      includes: ["Projekt graficzny", "HTML/CSS lub WordPress", "Formularz kontaktowy", "Responsywność"],
      time: "1-2 tygodnie",
    },
    {
      type: "Strona firmowa",
      priceRange: "3 000 – 12 000 zł",
      desc: "Rozbudowana strona z CMS (WordPress)",
      includes: ["Do 15 podstron", "Blog / aktualności", "Integracje (GA, Mapy)", "SEO podstawowe", "Szkolenie z obsługi"],
      time: "3-6 tygodni",
      highlight: true,
    },
    {
      type: "Sklep internetowy",
      priceRange: "8 000 – 40 000 zł",
      desc: "E-commerce (WooCommerce, Shopify, custom)",
      includes: ["Moduł sklepu", "Płatności online", "Integracja z magazynem", "Panel zarządzania", "Certyfikat SSL"],
      time: "6-16 tygodni",
    },
    {
      type: "Portal / aplikacja web",
      priceRange: "30 000+ zł",
      desc: "Zaawansowane rozwiązania webowe",
      includes: ["Custom development", "API i integracje", "Panel admina", "Skalowalna architektura", "Wsparcie techniczne"],
      time: "3-12 miesięcy",
    },
  ];

  const hiddenCosts = [
    { item: "Domena", cost: "50-150 zł/rok", note: "Obowiązkowo — bez niej strona nie działa" },
    { item: "Hosting", cost: "50-500 zł/rok", note: "Shared, VPS lub chmura — różne prędkości" },
    { item: "Certyfikat SSL", cost: "0-500 zł/rok", note: "Let's Encrypt gratis, komercyjne płatne" },
    { item: "Zdjęcia stock", cost: "0-1000 zł", note: "Unsplash gratis, Shutterstock płatne" },
    { item: "Motyw premium", cost: "100-500 zł", note: "Jednorazowo dla WordPress" },
    { item: "Wtyczki premium", cost: "0-1000 zł/rok", note: "SEO, cache, bezpieczeństwo, formularze" },
    { item: "Opieka techniczna", cost: "100-500 zł/mies.", note: "Aktualizacje, backupy, bezpieczeństwo" },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje prosta strona internetowa?",
      answer:
        "Prosta strona wizytówka (1-5 podstron) kosztuje od 1500 do 4000 zł. Do tego dochodzi domena (ok. 80 zł/rok) i hosting (100-300 zł/rok). Razem gotowa do pracy strona to koszt ok. 1800-4500 zł w pierwszym roku. Najtańsze opcje to kreatory jak Wix (400-1000 zł/rok) — ale mniej elastyczne.",
    },
    {
      question: "Co wpływa na cenę strony internetowej?",
      answer:
        "Główne czynniki: liczba podstron, funkcjonalności (sklep, blog, rezerwacje), stopień customizacji projektu graficznego, CMS (WordPress, custom), wymagania SEO, integracje z zewnętrznymi systemami (CRM, płatności, mapy), ilość treści i zdjęć do wprowadzenia, czas realizacji.",
    },
    {
      question: "Czy strona internetowa to jednorazowy koszt?",
      answer:
        "Nie — strona ma koszty stałe: domena (ok. 80 zł/rok), hosting (100-500 zł/rok), ewentualnie opieka techniczna (100-500 zł/mies.). Opcjonalnie: aktualizacje treści, pozycjonowanie, reklamy. Łączny koszt utrzymania to 100-1000 zł miesięcznie w zależności od potrzeb.",
    },
    {
      question: "Jak długo trwa budowa strony internetowej?",
      answer:
        "Prosta strona wizytówka: 1-2 tygodnie. Strona firmowa z blogiem: 3-6 tygodni. Sklep e-commerce: 6-16 tygodni. Największy wpływ na czas ma przygotowanie treści przez klienta i liczba korekt. Dobry brief i sprawna komunikacja skracają czas o 30-50%.",
    },
    {
      question: "Czy warto skorzystać z kreatora stron jak Wix?",
      answer:
        "Wix/Squarespace sprawdza się dla bardzo małych firm i prostych potrzeb. Minusy: ograniczona elastyczność, trudny transfer, gorszy SEO, roczna opłata ok. 400-1000 zł. WordPress to lepsza długoterminowa inwestycja — więcej możliwości, pełna kontrola, niższy koszt przy większej skali.",
    },
    {
      question: "Czy firma potrzebuje strony internetowej?",
      answer:
        "W 2025 roku — tak, zdecydowanie. 76% konsumentów sprawdza firmę online przed zakupem. Strona internetowa to cyfrowa wizytówka dostępna 24/7, element wiarygodności i narzędzie do pozyskiwania klientów. Brak strony to utrata leadów na rzecz konkurencji która ją ma.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Strona internetowa cena 2025 — ile kosztuje? | fotz.pl"
        description="Strona internetowa cena — aktualny przewodnik 2025. Ile kosztuje strona wizytówka, firmowa, sklep internetowy. Ukryte koszty i co wpływa na cenę. Sprawdź!"
        canonical="https://fotz.pl/blog/strona-internetowa-cena"
        keywords="strona internetowa cena, ile kosztuje strona internetowa, koszt strony internetowej, cena strony www, cennik stron internetowych"
      />
      <ArticleSchema
        title="Strona internetowa cena 2025 — ile kosztuje i od czego zależy?"
        description="Kompleksowy przegląd cen stron internetowych — od wizytówki do sklepu e-commerce. Ukryte koszty i co naprawdę wchodzi w cenę."
        datePublished="2025-01-15"
        dateModified="2025-03-01"
        url="https://fotz.pl/blog/strona-internetowa-cena"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min czytania</span>
                <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> Cennik</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Strona internetowa cena 2025 — ile naprawdę kosztuje?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Ceny stron internetowych w Polsce wahają się od 0 zł (kreatory DIY) do setek tysięcy złotych.
                Wyjaśniamy co naprawdę wpływa na cenę i czego nie mów swojemu klientowi.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing tiers */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Ceny stron internetowych w Polsce — przegląd</h2>
              <p className="text-slate-600 mb-8">
                Orientacyjne przedziały cenowe w polskich agencjach i u freelancerów (netto):
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {pricingTiers.map((tier, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className={`rounded-lg p-6 border ${tier.highlight ? "border-blue-400 bg-blue-50" : "border-slate-200 bg-slate-50"}`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-slate-900 text-lg">{tier.type}</h3>
                      <span className={`text-sm px-2 py-1 rounded font-medium ${tier.highlight ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-700"}`}>
                        {tier.time}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">{tier.priceRange}</div>
                    <p className="text-slate-600 text-sm mb-3">{tier.desc}</p>
                    <ul className="space-y-1">
                      {tier.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Ukryte koszty strony internetowej</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm">
                  Cena projektu to nie wszystko. Poniższe koszty często są pomijane przy planowaniu budżetu na stronę.
                </p>
              </div>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-3 border border-slate-200">Pozycja</th>
                      <th className="text-left p-3 border border-slate-200">Szacowany koszt</th>
                      <th className="text-left p-3 border border-slate-200">Uwagi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hiddenCosts.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-medium text-slate-800">{row.item}</td>
                        <td className="p-3 border border-slate-200 text-blue-600 font-medium">{row.cost}</td>
                        <td className="p-3 border border-slate-200 text-slate-600">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Co naprawdę wpływa na cenę strony?</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Liczba podstron", desc: "Każda podstrona to praca designera i dewelopera. Im więcej, tym drożej — ale nie liniowo." },
                  { title: "Projekt graficzny", desc: "Gotowy motyw vs. custom design: różnica 2000-10 000 zł. Custom = unikalność i pełna kontrola." },
                  { title: "Funkcjonalności", desc: "Blog, sklep, rezerwacje, chat, wielojęzyczność — każda funkcja to dodatkowy koszt." },
                  { title: "Treści i zdjęcia", desc: "Agencja przygotowuje treści lub je wprowadza. Własne teksty i zdjęcia obniżają cenę." },
                  { title: "Integracje", desc: "CRM, systemy płatności, marketing automation — każda integracja to dodatkowe godziny pracy." },
                  { title: "SEO i optymalizacja", desc: "Strona zoptymalizowana pod Google kosztuje więcej, ale szybciej się zwraca." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <Globe className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-bold text-slate-900 mb-2">Chcesz wiedzieć ile będzie kosztować Twoja strona?</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Wyceniamy strony internetowe bezpłatnie — podaj nam zakres i dostaniesz konkretną ofertę w 24 godziny.
                </p>
                <Link to="/kontakt">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Bezpłatna wycena strony <ArrowRight className="ml-2 w-4 h-4" />
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Cena strony internetowej</h2>
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
          heading="Ile kosztuje Twoja strona?"
          subheading="Bezpłatna wycena w 24 godziny. Opowiedz nam o projekcie!"
        />
      </Layout>
    </>
  );
}
