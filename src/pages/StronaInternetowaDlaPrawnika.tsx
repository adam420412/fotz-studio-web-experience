import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star, Scale, Shield, Globe, FileText } from "lucide-react";
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

export default function StronaInternetowaDlaPrawnika() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Strona internetowa dla prawnika" },
  ];

  const features = [
    { icon: Scale, title: "Prezentacja specjalizacji", desc: "Przejrzyste opisanie obszarów praktyki — prawo cywilne, karne, rodzinne, gospodarcze. Klient od razu wie czy możesz mu pomóc." },
    { icon: MapPin, title: "SEO lokalne", desc: "Widoczność na 'prawnik [miasto]', 'adwokat [miasto]', 'radca prawny [specjalizacja]'. Klienci szukają prawnika przez Google." },
    { icon: Shield, title: "Budowanie autorytetu", desc: "Biogram z wykształceniem, doświadczeniem, wygranymi sprawami. Artykuły eksperckie budujące reputację i SEO." },
    { icon: Globe, title: "Formularz kontaktowy i konsultacje", desc: "Formularz zgłoszeniowy, możliwość umówienia konsultacji online lub telefonicznej. Ogranicza barierę pierwszego kontaktu." },
    { icon: FileText, title: "Blog prawniczy", desc: "Artykuły odpowiadające na pytania klientów — budują SEO i autoritet eksperta. Klienci szukają najpierw odpowiedzi, potem prawnika." },
    { icon: Star, title: "Opinie klientów", desc: "Rekomendacje byłych klientów (anonimowe lub za zgodą). Kluczowe dla budowania zaufania w branży prawniczej." },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona internetowa dla prawnika?",
      answer:
        "Strona internetowa dla prawnika lub kancelarii kosztuje od 2000 do 8000 zł w zależności od zakresu. Prosta strona z prezentacją usług: 2000-4000 zł. Strona z blogiem, formularzami i SEO: 4000-8000 zł. Do tego hosting (50-150 zł/mies.) i domena (ok. 80 zł/rok). Czas realizacji: 2-4 tygodnie.",
    },
    {
      question: "Czy prawnik może reklamować się w internecie?",
      answer:
        "Tak — adwokaci i radcowie prawni mogą reklamować się w internecie, ale z ograniczeniami: reklama musi być rzetelna i nie może wprowadzać w błąd, nie można obiecywać konkretnych wyników sprawy, nie można używać opinii klientów w formie referencji (kontrowersyjne – sprawdź aktualny kodeks etyki). Strona internetowa z opisem usług i artykułami eksperckimi jest w pełni dopuszczalna.",
    },
    {
      question: "Jak pozycjonować kancelarię prawną?",
      answer:
        "SEO dla kancelarii to przede wszystkim: Local SEO (frazy 'adwokat [miasto]', 'prawnik [specjalizacja] [miasto]'), artykuły blogowe odpowiadające na pytania prawne (long-tail SEO), zoptymalizowany Google Business Profile, zbieranie opinii Google. Prawo to branża high-competition SEO — warto inwestować w content marketing i link building z autorytatywnych serwisów prawniczych.",
    },
    {
      question: "Co powinna zawierać strona kancelarii prawnej?",
      answer:
        "Obowiązkowe elementy: lista specjalizacji z opisami, biogram prawnika/prawników, kontakt i formularz, adres z mapą, certyfikaty i przynależność do samorządu (ORA/OIRP). Opcjonalnie: blog z artykułami prawniczymi, FAQ, opinie klientów (sprawdź zasady etyki), cennik lub informacja o pierwszej konsultacji, kalkulatory prawne.",
    },
    {
      question: "Czy blog prawniczy pomaga w SEO?",
      answer:
        "Tak — blog prawniczy to jeden z najskuteczniejszych narzędzi SEO dla kancelarii. Powody: odpowiadasz na pytania które potencjalni klienci wpisują w Google ('co zrobić gdy pracodawca nie wypłaca wynagrodzenia'), budujesz autorytet eksperta (E-E-A-T), zdobywasz linki z innych serwisów. Artykuły trwają latami — jeden dobry wpis może generować klientów przez lata.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Strona internetowa dla prawnika — kancelaria, SEO, blog | fotz.pl"
        description="Strona internetowa dla prawnika i kancelarii — SEO lokalne, blog prawniczy, formularz kontaktowy, prezentacja specjalizacji. Profesjonalne strony od 2000…"
        canonical="https://fotz.pl/uslugi/strona-internetowa-dla-prawnika"
        keywords="strona internetowa dla prawnika, strona www kancelarii, strona prawnika, strona kancelarii prawnej, landing page prawnika"
      />
      <ServiceSchema
        name="Strona internetowa dla prawnika"
        description="Tworzenie stron internetowych dla prawników, adwokatów i kancelarii — SEO lokalne, blog prawniczy, formularz, prezentacja specjalizacji"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-sm mb-4">
                <Scale className="w-4 h-4" />
                Kancelarie i prawnicy
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Strona internetowa dla prawnika — buduj autorytet i zdobywaj klientów
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Tworzymy profesjonalne strony dla prawników, adwokatów i kancelarii. SEO lokalne,
                blog prawniczy i prezentacja specjalizacji — tak klienci znajdą Cię w Google.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "od 2000 zł", label: "Cena strony" },
                  { value: "2-4 tyg.", label: "Realizacja" },
                  { value: "SEO", label: "Lokalna widoczność" },
                  { value: "Blog", label: "Budowanie autorytetu" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Bezpłatna wycena strony <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co zawiera strona dla kancelarii?</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Każda strona dostosowana do specjalizacji prawnika i lokalnego rynku.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.07}>
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <Icon className="w-8 h-8 text-slate-700 mb-3" />
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

        {/* Why */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dlaczego prawnik potrzebuje strony?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "75% osób szuka prawnika przez internet przed podjęciem decyzji",
                  "Strona to 24/7 aktywna wizytówka — klienci znajdą Cię o każdej porze",
                  "Blog prawniczy buduje autorytet i generuje organiczny ruch latami",
                  "Brak strony = brak widoczności w Google Maps i wyszukiwarce",
                  "Profesjonalna strona odróżnia Cię od konkurencji i buduje zaufanie",
                  "SEO lokalne przyciąga klientów szukających prawnika w Twoim mieście",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Strona dla prawnika</h2>
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
