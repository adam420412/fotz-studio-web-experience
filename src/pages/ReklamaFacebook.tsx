import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Facebook,
  Target,
  BarChart3,
  Users,
  Zap,
  TrendingUp,
  DollarSign,
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

export default function ReklamaFacebook() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Reklama Facebook" },
  ];

  const adTypes = [
    { title: "Kampanie zasięgowe", desc: "Buduj świadomość marki — docierasz do jak największej liczby osób w grupie docelowej." },
    { title: "Reklamy konwersyjne", desc: "Optymalizacja pod zakup, formularz lub inną akcję na stronie. Najwyższy ROAS." },
    { title: "Lead Ads", desc: "Formularz kontaktowy bezpośrednio w Facebooku — bez konieczności wychodzenia z platformy." },
    { title: "Remarketing", desc: "Dotarcie do osób które odwiedziły stronę lub weszły w interakcję z treściami. Najniższy koszt konwersji." },
    { title: "Lookalike Audiences", desc: "Targetowanie na podobnych do Twoich najlepszych klientów. Skalowanie przy zachowaniu ROAS." },
    { title: "Katalog produktów", desc: "Reklamy dynamiczne dla e-commerce — automatyczne wyświetlanie oglądanych produktów." },
  ];

  const packages = [
    {
      title: "Facebook Ads Start",
      price: "799 zł/mies.",
      desc: "Obsługa kampanii + 1000 zł budżet",
      features: [
        "Konfiguracja konta reklamowego",
        "1-2 kampanie",
        "Kreacje graficzne (3 banery)",
        "Pixel Facebook konfiguracja",
        "Raport miesięczny",
      ],
    },
    {
      title: "Facebook Ads Growth",
      price: "1 499 zł/mies.",
      desc: "Skalowanie + remarketing",
      features: [
        "3-5 kampanii równolegle",
        "Remarketing + Lookalike",
        "A/B testy kreacji",
        "Kreacje graficzne (do 10)",
        "Tygodniowy raport",
        "Optymalizacja budżetu",
      ],
      highlight: true,
    },
    {
      title: "Facebook Ads Pro",
      price: "2 999+ zł/mies.",
      desc: "Pełne zarządzanie Meta Ads",
      features: [
        "Nielimitowane kampanie",
        "Facebook + Instagram Ads",
        "Katalog produktów (DPA)",
        "Copywriting reklam",
        "Wideo produkcja",
        "Dedykowany opiekun",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje reklama na Facebooku?",
      answer:
        "Koszty reklamy Facebook to: koszt obsługi agencji (od 799 zł/mies.) + budżet reklamowy (minimum 500-1000 zł/mies. dla małych firm). CPM (koszt za 1000 wyświetleń) w Polsce to 5-30 zł. CPC (koszt za klik) to 0,20-2 zł. Koszt per lead: 10-200 zł w zależności od branży i jakości targetowania.",
    },
    {
      question: "Jaki budżet na Facebook Ads dla małej firmy?",
      answer:
        "Minimalny sensowny budżet to 1000-1500 zł/mies. Poniżej tej kwoty algorytm nie ma dość danych do optymalizacji. Rekomendujemy: 500-1000 zł/mies. na testy (pierwsze 4-6 tygodni), potem skalowanie do 2000-5000 zł/mies. w kampaniach które konwertują.",
    },
    {
      question: "Czy Facebook Ads działa dla mojej branży?",
      answer:
        "Facebook Ads działa praktycznie dla każdej branży B2C — e-commerce, usługi lokalne, gastronomia, beauty, fitness, edukacja, nieruchomości. Trudniej w B2B (tu lepszy LinkedIn) i w branżach zabronionych (alkohol, broń, papierosy, niektóre usługi finansowe). Zawsze robimy analizę przed kampanią.",
    },
    {
      question: "Facebook Ads czy Google Ads — co wybrać?",
      answer:
        "Facebook: buduje świadomość, dociera do osób które nie szukają aktywnie, świetny dla e-commerce i nowych produktów. Google: chwyta aktywne zapytania zakupowe, wyższy intent. Idealne: oba razem — Google dla popytu istniejącego, Facebook dla budowania popytu. Jeśli jeden — dla e-commerce Facebook, dla usług lokalnych Google.",
    },
    {
      question: "Jak mierzyć skuteczność reklam Facebook?",
      answer:
        "Kluczowe metryki: ROAS (przychód/koszt reklam), CPM, CPC, CTR, koszt per lead, koszt per konwersja, frequency. Ustawiamy Pixel Facebook i konwersje — bez tego nie ma mierzalnych wyników. Raportujemy co tydzień w dashboardzie.",
    },
    {
      question: "Czy potrzebuję fanpage do reklam Facebook?",
      answer:
        "Tak — musisz mieć fanpage firmowy aby wyświetlać reklamy. Nie musisz mieć ogromnej społeczności ani regularnie postować — reklamy działają niezależnie. Zalecamy jednak utrzymanie aktywnego profilu dla wiarygodności gdy użytkownicy klikną i sprawdzą stronę.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Reklama Facebook — agencja Meta Ads | fotz.pl"
        description="Reklama na Facebooku — kampanie Meta Ads które sprzedają. Remarketing, Lookalike, Lead Ads. Obsługa Facebook Ads dla firm od 799 zł/mies. Sprawdź!"
        canonical="https://fotz.pl/uslugi/reklama-facebook"
      />
      <ServiceSchema
        name="Reklama Facebook (Meta Ads)"
        description="Profesjonalna obsługa reklam na Facebooku i Instagramie — kampanie Meta Ads, remarketing, Lookalike Audiences"
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
                <Facebook className="w-4 h-4" />
                Certyfikowani specjaliści Meta
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Reklama Facebook — kampanie Meta Ads które sprzedają
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Zarządzamy reklamami Facebook i Instagram dla firm. Targetowanie, kreacje, optymalizacja i raportowanie.
                Skupiamy się na wynikach — więcej sprzedaży i leadów przy niższym koszcie.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "16 mln", label: "Polaków na FB" },
                  { value: "3 mld", label: "Użytkowników globalnie" },
                  { value: "2,5 zł", label: "Śr. CPC w Polsce" },
                  { value: "ROAS", label: "Optymalizacja pod wyniki" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Bezpłatny audyt kampanii <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link to="/uslugi/social-media-marketing">
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Social media marketing
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ad types */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Typy reklam Facebook które tworzymy</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Każdy format dopasowany do celu kampanii — od budowania świadomości po sprzedaż.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {adTypes.map((item, idx) => (
                  <FadeInView key={idx} delay={idx * 0.07}>
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Process */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Jak pracujemy z kampaniami Facebook?</h2>
              <div className="space-y-4">
                {[
                  { icon: Target, title: "Analiza i strategia", desc: "Audyt obecnych kampanii lub start od zera. Definiujemy grupy docelowe, cele i KPIs." },
                  { icon: Users, title: "Konfiguracja i pixle", desc: "Poprawna konfiguracja Pixel Facebook, katalogów produktów, zdarzeń konwersji." },
                  { icon: Zap, title: "Kreacje reklamowe", desc: "Grafiki, wideo, karuzele — testujemy wiele wariantów i skalujemy zwycięzców." },
                  { icon: TrendingUp, title: "Optymalizacja", desc: "Codzienne monitorowanie, A/B testy, realokacja budżetu między kampaniami." },
                  { icon: BarChart3, title: "Raportowanie", desc: "Cotygodniowy raport z wynikami, wnioskami i rekomendacjami na kolejny tydzień." },
                  { icon: DollarSign, title: "Skalowanie", desc: "Gdy kampania działa — skalujemy budżet i zasięg przy zachowaniu docelowego ROAS." },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4 bg-white p-5 rounded-lg border border-slate-200">
                      <div className="bg-blue-100 p-2.5 rounded-lg flex-shrink-0 h-10 w-10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Packages */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pakiety obsługi Facebook Ads</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Cena obsługi netto. Budżet reklamowy doliczany osobno.
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

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Reklama Facebook</h2>
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
          heading="Uruchom kampanie Facebook Ads"
          subheading="Bezpłatny audyt obecnych kampanii lub wycena nowych. Odpowiadamy szybko!"
        />
      </Layout>
    </>
  );
}
