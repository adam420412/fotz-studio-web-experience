import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Server, Shield, Zap, Globe, AlertCircle } from "lucide-react";
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

export default function BlogCoToJestHosting() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Co to jest hosting? Poradnik dla początkujących" },
  ];

  const hostingTypes = [
    { icon: Server, title: "Hosting współdzielony (shared)", desc: "Twoja strona dzieli serwer z innymi. Najtańszy (20-80 zł/mies.), wystarczający dla małych stron i blogów. Ograniczone zasoby." },
    { icon: Zap, title: "VPS (Virtual Private Server)", desc: "Dedykowana część serwera z gwarantowanymi zasobami. Dla większych stron i sklepów (50-300 zł/mies.). Lepsza wydajność." },
    { icon: Shield, title: "Serwer dedykowany", desc: "Cały serwer tylko dla Ciebie. Maksymalna wydajność i kontrola. Dla dużych serwisów (500-3000+ zł/mies.)." },
    { icon: Globe, title: "Hosting w chmurze (cloud)", desc: "Skalowalne zasoby w chmurze (AWS, Google Cloud, Azure). Płacisz za faktyczne użycie. Dla aplikacji z zmiennym ruchem." },
  ];

  const hostingParams = [
    { param: "Przestrzeń dyskowa", desc: "Ile GB możesz przechowywać (pliki, baza danych, emaile). Dla standardowej strony wystarczy 5-20 GB." },
    { param: "Transfer (bandwidth)", desc: "Ilość danych przesyłanych miesięcznie. Większość hostingów oferuje 'unlimited' — czytaj regulamin." },
    { param: "Czas działania (uptime)", desc: "Gwarantowany % dostępności. Szukaj 99,9%+ — to ok. 8 godzin niedostępności rocznie." },
    { param: "Lokalizacja serwerów", desc: "Serwery w Polsce/EU = szybsze ładowanie dla polskich użytkowników. Ma znaczenie dla Core Web Vitals i SEO." },
    { param: "Certyfikat SSL", desc: "Obowiązkowy dla każdej strony. Większość hostingów oferuje gratis przez Let's Encrypt." },
    { param: "Kopie zapasowe (backup)", desc: "Automatyczne kopie zapasowe codziennie lub tygodniowo. Absolutnie niezbędne — strony ulegają awariom." },
  ];

  const faqItems = [
    {
      question: "Co to jest hosting?",
      answer:
        "Hosting (web hosting) to usługa wynajmu miejsca na serwerze, gdzie przechowywane są pliki Twojej strony internetowej. Gdy ktoś wpisuje Twój adres www w przeglądarce, serwer hostingowy wysyła pliki strony do przeglądarki odwiedzającego. Bez hostingu Twoja strona nie jest dostępna w internecie. Hosting to jak wynajem przestrzeni biurowej dla Twojej strony — musisz za niego regularnie płacić.",
    },
    {
      question: "Jaka jest różnica między hostingiem a domeną?",
      answer:
        "Domena (np. mojafirma.pl) to adres, pod którym Twoja strona jest dostępna — jak adres ulicy. Hosting to przestrzeń na serwerze gdzie przechowywane są pliki strony — jak sam budynek. Potrzebujesz obu: domenę (ok. 80-150 zł/rok) i hosting (ok. 20-300 zł/mies.). Domenę można kupić u rejestratora, a hosting u firmy hostingowej — lub oba w jednym miejscu.",
    },
    {
      question: "Ile kosztuje hosting w Polsce?",
      answer:
        "Ceny hostingu w Polsce: hosting współdzielony (shared) 20-100 zł/mies., hosting WordPress (zarządzany) 30-200 zł/mies., VPS 50-500 zł/mies., serwer dedykowany 500-5000+ zł/mies. Dla małej firmy lub bloga wystarczy hosting współdzielony za 30-60 zł/mies. od firm takich jak LH.pl, Cyber_Folks, home.pl, H88.",
    },
    {
      question: "Jaki hosting wybrać dla WordPress?",
      answer:
        "Dla WordPress możesz wybrać: 1) Zwykły hosting shared (tani, wymaga konfiguracji) — np. LH.pl, Cyber_Folks. 2) Managed WordPress hosting (droższy, automatyczne aktualizacje i bezpieczeństwo) — np. Kinsta, WP Engine, Siteground. 3) VPS z własną konfiguracją (dla zaawansowanych). Dla małej firmy polecamy zarządzany hosting WordPress — mniej problemów technicznych.",
    },
    {
      question: "Czy hosting wpływa na SEO?",
      answer:
        "Tak — hosting ma bezpośredni wpływ na SEO przez: szybkość ładowania strony (Core Web Vitals — ważny czynnik rankingowy), uptime (jeśli strona jest niedostępna, Google ją nie indeksuje), lokalizację serwera (serwer w Polsce = niższy TTFB dla polskich użytkowników), certyfikat SSL (brak SSL = penalizacja przez Google). Dobry hosting to fundament SEO.",
    },
    {
      question: "Co zrobić gdy hosting nie działa?",
      answer:
        "Kroki gdy strona nie działa: 1) Sprawdź status u hostingodawcy (zazwyczaj status.hostname.pl). 2) Sprawdź czy to problem z domeną (pinguj adres IP). 3) Skontaktuj się z supportem hostingu — podaj numer zgłoszenia i objawy. 4) Jeśli problem się powtarza, rozważ zmianę hostingodawcy. 5) Upewnij się że masz aktualne kopie zapasowe — odtworzenie strony po awarii może być konieczne.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Co to jest hosting? Poradnik dla początkujących 2025 | fotz.pl"
        description="Co to jest hosting — wyjaśniamy czym jest hosting, jakie są rodzaje (shared, VPS, cloud), ile kosztuje i jak wybrać dobry hosting dla swojej strony. Poradnik 2025."
        canonical="https://fotz.pl/blog/co-to-jest-hosting"
      />
      <ArticleSchema
        title="Co to jest hosting? Kompletny poradnik dla początkujących"
        description="Czym jest hosting, rodzaje hostingów, ile kosztują i jak wybrać właściwy dla strony internetowej lub sklepu."
        datePublished="2025-01-15"
        dateModified="2025-03-25"
        url="https://fotz.pl/blog/co-to-jest-hosting"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><Server className="w-4 h-4" /> Hosting i domeny</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Co to jest hosting? Kompletny poradnik dla początkujących
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Hosting to fundament każdej strony internetowej — bez niego Twoja witryna po prostu nie istnieje
                w sieci. Wyjaśniamy czym jest, jakie są rodzaje i jak wybrać właściwy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Jak działa hosting? Prosta analogia</h2>
              <p className="text-slate-700 mb-4">
                Wyobraź sobie że Twoja strona internetowa to sklep. <strong>Domena</strong> (np. twojfirma.pl) to
                adres sklepu na szyldzie. <strong>Hosting</strong> to budynek, w którym sklep się mieści — przestrzeń
                gdzie trzymasz wszystkie produkty (pliki, zdjęcia, bazy danych).
              </p>
              <p className="text-slate-700 mb-6">
                Gdy klient wpisuje adres w przeglądarce, DNS (jak spis adresów) wskazuje mu właściwy serwer,
                a serwer hostingowy wysyła pliki strony do przeglądarki. Wszystko dzieje się w ułamku sekundy.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Rodzaje hostingu</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {hostingTypes.map((item, idx) => {
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
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Na co zwrócić uwagę przy wyborze hostingu?</h2>
              <div className="space-y-3 mb-6">
                {hostingParams.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{item.param}: </span>
                      <span className="text-slate-600 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Polecani dostawcy hostingu w Polsce</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Dostawca</th>
                      <th className="text-left p-3 border border-slate-700">Typ</th>
                      <th className="text-left p-3 border border-slate-700">Cena od</th>
                      <th className="text-left p-3 border border-slate-700">Dla kogo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "LH.pl", type: "Shared / VPS", price: "25 zł/mies.", for: "Małe strony, startupy" },
                      { name: "Cyber_Folks", type: "Shared / WordPress", price: "20 zł/mies.", for: "Blogi, strony firmowe" },
                      { name: "home.pl", type: "Shared / Managed", price: "30 zł/mies.", for: "Firmy, sklepy" },
                      { name: "Kinsta", type: "Managed WordPress", price: "~95 USD/mies.", for: "Duże WordPress, sklepy" },
                      { name: "Siteground", type: "Managed WordPress", price: "~15 USD/mies.", for: "WordPress, WooCommerce" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-medium text-slate-800">{row.name}</td>
                        <td className="p-3 border border-slate-200 text-slate-600">{row.type}</td>
                        <td className="p-3 border border-slate-200 text-blue-600 font-bold">{row.price}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.for}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6 flex gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-700 text-sm">Nie wybieraj hostingu tylko po cenie. Tani hosting = wolna strona, awarie, brak supportu. Hosting to inwestycja w dostępność i SEO.</p>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz pomocy z hostingiem i stroną?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy strony i doradzamy w wyborze hostingu — zapewniamy szybką, bezpieczną infrastrukturę.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron internetowych <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Co to jest hosting</h2>
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
          heading="Masz pytania o hosting lub stronę?"
          subheading="Doradzimy najlepsze rozwiązanie i wdrożymy stronę od A do Z."
        />
      </Layout>
    </>
  );
}
