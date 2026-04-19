import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Zap,
  Shield,
  Settings,
  BarChart3,
  Star,
  Code,
} from "lucide-react";
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

export default function StronaWordPress() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Strona WordPress" },
  ];

  const advantages = [
    { icon: Globe, title: "Najpopularniejszy CMS na świecie", desc: "Ponad 43% stron w internecie działa na WordPress. Ogromna społeczność, tysiące wtyczek i motywów." },
    { icon: Settings, title: "Łatwe zarządzanie treścią", desc: "Dodajesz artykuły, zdjęcia i strony bez kodowania. Intuicyjny panel administracyjny dla każdego." },
    { icon: Zap, title: "Szybkość i wydajność", desc: "Zoptymalizowany WordPress jest szybki. Caching, CDN, optymalizacja obrazów — wszystko możliwe." },
    { icon: Shield, title: "Bezpieczeństwo", desc: "Regularne aktualizacje, wtyczki bezpieczeństwa, SSL, backupy. WordPress może być bezpieczny jak każda platforma." },
    { icon: BarChart3, title: "SEO-friendly", desc: "Yoast SEO, RankMath, schema markup — WordPress ma najlepszy ekosystem wtyczek SEO." },
    { icon: Star, title: "Elastyczność", desc: "Od prostej strony wizytówki do zaawansowanego e-commerce. WordPress rośnie razem z Twoim biznesem." },
  ];

  const packages = [
    {
      title: "WordPress Basic",
      price: "od 1 999 zł",
      desc: "Strona wizytówka / firmowa",
      features: [
        "Do 5 podstron",
        "Responsywny design",
        "Motyw premium",
        "Formularz kontaktowy",
        "Podstawowe SEO",
        "Szkolenie z obsługi",
      ],
    },
    {
      title: "WordPress Business",
      price: "od 3 999 zł",
      desc: "Rozbudowana strona firmowa",
      features: [
        "Do 15 podstron",
        "Dedykowany design",
        "Blog / aktualności",
        "Integracja z GA4",
        "Zaawansowane SEO (Yoast)",
        "Mapa strony, schema",
        "Szkolenie + miesiąc wsparcia",
      ],
      highlight: true,
    },
    {
      title: "WordPress Premium",
      price: "od 7 999 zł",
      desc: "Zaawansowane rozwiązania",
      features: [
        "Nielimitowane podstrony",
        "Custom design od podstaw",
        "WooCommerce / e-commerce",
        "Integracje API i CRM",
        "Wielojęzyczność (WPML)",
        "Opieka techniczna 3 mies.",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Czy WordPress jest dobry dla mojej firmy?",
      answer:
        "WordPress sprawdza się świetnie dla: firm usługowych, agencji, freelancerów, sklepów (WooCommerce), blogów, portali. Nie jest najlepszy dla bardzo specyficznych aplikacji webowych lub systemów wymagających niestandardowej logiki. 43% stron w internecie to WordPress — to mówi samo za siebie.",
    },
    {
      question: "Ile kosztuje strona na WordPress?",
      answer:
        "Koszt strony WordPress to: domena ok. 60-100 zł/rok, hosting 40-200 zł/mies., motyw premium 0-400 zł (jednorazowo), projekt i wdrożenie przez agencję 1999-15 000 zł. Najtańsza sensowna strona to ok. 2500 zł łącznie. Cena zależy od liczby podstron, funkcji i stopnia customizacji.",
    },
    {
      question: "Jak długo trwa budowa strony WordPress?",
      answer:
        "Prosta strona wizytówka: 1-2 tygodnie. Rozbudowana strona firmowa: 3-6 tygodni. Sklep WooCommerce: 4-10 tygodni. Czas zależy od przygotowania treści przez klienta, liczby poprawek i złożoności projektu graficznego.",
    },
    {
      question: "Czy WordPress jest bezpieczny?",
      answer:
        "WordPress jest bezpieczny gdy jest odpowiednio skonfigurowany. Kluczowe: regularne aktualizacje (core, wtyczki, motywy), wtyczka bezpieczeństwa (Wordfence, iThemes), silne hasła, SSL, regularne backupy. Podatności wynikają głównie z zaniedbanych aktualizacji i słabych haseł.",
    },
    {
      question: "Czy mogę samodzielnie edytować stronę WordPress?",
      answer:
        "Tak — to jedna z głównych zalet WordPress. Możesz samodzielnie dodawać artykuły, strony, zdjęcia, zmieniać teksty. Robimy szkolenie po wdrożeniu. Do zaawansowanych zmian wyglądu lub funkcji potrzebujesz dewelopera.",
    },
    {
      question: "WordPress czy inna platforma — co wybrać?",
      answer:
        "WordPress vs alternatywy: Wix/Squarespace — prostsze ale mniej elastyczne. Webflow — droższe, dla projektantów. Custom React/Next.js — najszybsze ale drogie w utrzymaniu. Dla większości firm WordPress jest złotym środkiem — elastyczny, skalowalny, z ogromnym ekosystemem.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Strona WordPress dla firmy | Tworzenie stron WordPress | fotz.pl"
        description="Tworzenie stron na WordPress — od wizytówki do zaawansowanego e-commerce. Responsywne, szybkie i SEO-friendly strony WordPress. Wycena od 1999 zł!"
        canonical="https://fotz.pl/uslugi/strona-wordpress"
        keywords="strona wordpress, strona internetowa wordpress, tworzenie stron wordpress, wordpress dla firm, strona www wordpress, wordpress agencja"
      />
      <ServiceSchema
        name="Strona WordPress"
        description="Tworzenie profesjonalnych stron internetowych na WordPress — responsywne, szybkie, zoptymalizowane pod SEO"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-blue-900 bg-opacity-50 text-blue-300 px-3 py-1 rounded-full text-sm mb-4">
                <Code className="w-4 h-4" />
                Eksperci WordPress
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Strona WordPress dla firmy — responsywna, szybka i skuteczna
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Tworzymy profesjonalne strony internetowe na WordPress. Od prostej wizytówki po zaawansowany sklep WooCommerce.
                Każda strona jest responsywna, zoptymalizowana pod SEO i dostosowana do Twojej marki.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "43%", label: "Stron na świecie na WP" },
                  { value: "1999 zł", label: "Cena od" },
                  { value: "2-6 tyg.", label: "Czas realizacji" },
                  { value: "100%", label: "Responsywność" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Bezpłatna wycena strony <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link to="/uslugi/tworzenie-stron-www">
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Wszystkie strony internetowe
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Advantages */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Dlaczego WordPress?</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                WordPress to najpopularniejszy CMS na świecie z dobrych powodów.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.07}>
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <Icon className="w-8 h-8 text-blue-600 mb-3" />
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

        {/* Packages */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pakiety stron WordPress</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Dopasowane do rozmiaru i potrzeb Twojej firmy.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`rounded-lg p-8 ${
                      pkg.highlight
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border-2 border-blue-400 transform scale-105"
                        : "bg-white border border-slate-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <div className={`text-2xl font-bold mb-2 ${pkg.highlight ? "text-white" : "text-blue-600"}`}>
                      {pkg.price}
                    </div>
                    <p className={`mb-6 text-sm ${pkg.highlight ? "text-blue-100" : "text-slate-600"}`}>{pkg.desc}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-white" : "text-blue-600"}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Process */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Jak tworzymy strony WordPress?</h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Briefing i analiza", desc: "Poznajemy Twoje cele, grupę docelową, konkurencję. Ustalamy zakres projektu i harmonogram." },
                  { step: "2", title: "Projekt graficzny", desc: "Makiety i design w Figma. Zatwierdzasz wygląd przed rozpoczęciem kodowania." },
                  { step: "3", title: "Wdrożenie WordPress", desc: "Instalacja, konfiguracja motywu/buildera, wdrożenie projektu graficznego. Responsive + szybkość." },
                  { step: "4", title: "Treści i SEO", desc: "Wprowadzanie treści, optymalizacja SEO (Yoast/RankMath), schema markup, mapa strony." },
                  { step: "5", title: "Testy i uruchomienie", desc: "Testy na różnych urządzeniach i przeglądarkach. Certyfikat SSL, konfiguracja Analytics." },
                  { step: "6", title: "Szkolenie i wsparcie", desc: "Uczysz się obsługi panelu WordPress. Oddajemy pełną dokumentację i wsparcie po uruchomieniu." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Strona WordPress</h2>
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
          heading="Zbudujmy Twoją stronę WordPress"
          subheading="Bezpłatna wycena i konsultacja. Odpowiadamy w ciągu 24 godzin."
        />
      </Layout>
    </>
  );
}
