import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Zap, BarChart3, Mail, Users, CheckCircle, AlertCircle, Brain } from "lucide-react";
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

export default function BlogAutomatyzacjaMarketingu() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Automatyzacja marketingu w lejku sprzedazowym" },
  ];

  const funnelStages = [
    {
      name: "TOFU (Top of Funnel) — Swiadomosc",
      goal: "Przyciagnac jak najwiecej potencjalnych klientow",
      tools: "Google Ads, Meta Ads, SEO, Organic Social",
      kpi: "Impressions, CTR, Cost Per Click"
    },
    {
      name: "MOFU (Middle of Funnel) — Zainteresowanie",
      goal: "Budowac relacje i edukować odbiorce",
      tools: "Email nurturing, Content marketing, Webinary, LinkedIn Ads",
      kpi: "Email open rate, Time on page, Lead score"
    },
    {
      name: "BOFU (Bottom of Funnel) — Decyzja",
      goal: "Zamkniecie sprzedazy i konwersja na klienta",
      tools: "Demo, Trial, Sales email, Retargeting, CRM",
      kpi: "Conversion rate, Sales cycle length, CAC"
    },
    {
      name: "Retention — Lojalnosc",
      goal: "Utrzymanie klienta i upsell/cross-sell",
      tools: "Email marketing, Customer portal, Community, Loyalty program",
      kpi: "Retention rate, LTV, NPS score"
    }
  ];

  const marketingTools = [
    {
      stage: "Swiadomosc (TOFU)",
      goal: "Rozpoznawalnosc marki i generowanie ruchu",
      channels: "Google Ads, SEO, Social media, Content marketing",
      kpi: "CPM, CTR, Organic traffic"
    },
    {
      stage: "Zainteresowanie (MOFU)",
      goal: "Lead generation i nurturing",
      channels: "Email marketing, Webinary, Blog, LinkedIn, HubSpot",
      kpi: "Lead volume, Email engagement, Cost per lead"
    },
    {
      stage: "Decyzja (BOFU)",
      goal: "Konwersja i zamkniecie sprzedazy",
      channels: "Sales CRM, Demo request, Trial, Retargeting",
      kpi: "Conversion rate, Deal size, Sales cycle"
    },
    {
      stage: "Lojalnosc (Retention)",
      goal: "Utrzymanie i rozwoj wartosci klienta",
      channels: "Email loyalty program, Customer success, Community",
      kpi: "Retention rate, LTV, Upsell revenue"
    }
  ];

  const b2bVsB2c = [
    {
      aspect: "Cykl sprzedazy",
      b2b: "3-18 miesiecy, wiele etapów",
      b2c: "Dni do tygodni, decyzja impulsywna"
    },
    {
      aspect: "Liczba decydentow",
      b2b: "Buying committee (3-7 osob)",
      b2c: "Zwykle 1 osoba"
    },
    {
      aspect: "Wielkosc transakcji",
      b2b: "Wysoka (100k-500k+)",
      b2c: "Niska (10-1000 zl)"
    },
    {
      aspect: "Kanaly marketingowe",
      b2b: "LinkedIn, webinary, case studies, cold email",
      b2c: "Meta Ads, Google Ads, TikTok, influencerzy"
    },
    {
      aspect: "Punkt ciężkości",
      b2b: "MOFU i BOFU (edukacja, relacje)",
      b2c: "TOFU (swiadomosc) i konwersja"
    }
  ];

  const commonMistakes = [
    {
      title: "Brak jasnych definicji etapów lejka",
      description: "Wiele firm nie wie dokladnie, co to dla nich znaczy lead, SQL czy opportunity. Bez jasnego mapowania nie mozna optymalizowac.",
      solution: "Zdefiniuj dla kazdego etapu konkretne kryteria i metryki (np. SQL = lead z data firmowego + otwarty na rozmowe)."
    },
    {
      title: "Brak horizontu czasowego",
      description: "Zbyt czesto oczekuje sie konwersji w TOFU. Budowanie lejka to inwestycja — efekty widac po kilku miesiacach.",
      solution: "Mierz krótkoterminowe metryki (CTR, email opens) i długoterminowe (LTV, retention rate)."
    },
    {
      title: "Ignorowanie drop-offów między etapami",
      description: "Jesli 50% ludzi odchodzi miedzy TOFU a MOFU, to budowanie TOFU bez poprawy MOFU to marnowanie budżetu.",
      solution: "Analizuj conversion rate między etapami (GA, CRM) i zaczynaj optymalizacje od najmniejszych konwersji."
    },
    {
      title: "Niepersonalizowanie contentu dla B2B vs B2C",
      description: "Sama struktura lejka rozni sie znacznie. B2B wymaga dluzszego edukowania, B2C wymaga szybkiej decyzji.",
      solution: "B2B: investuj w case studies i SEO. B2C: skup sie na social proof i retargeting."
    },
    {
      title: "Brak automatyzacji",
      description: "Lejek bez automatyzacji to manualne wysylanie emaili i tracking — nieefektywne i podatne na błedy.",
      solution: "Wprowadz narzedzia: HubSpot, ActiveCampaign, Marketo (dla B2B) lub Klaviyo, ConvertKit (dla B2C)."
    }
  ];

  const faqItems = [
    {
      question: "Co to jest automatyzacja marketingu w lejku sprzedazowym?",
      answer: "Automatyzacja marketingu to zserwatyzowanie komunikacji, lead scoring i email nurturingu za pomocą narzędzi takich jak HubSpot, ActiveCampaign czy Marketo. Oznacza to, że gdy lead wchodzi do systemu, automatycznie odbiera serię emaili edukacyjnych, a jego zaangażowanie jest punktowane. Przykład: klient otwiera email → +10 pkt, klika link → +15 pkt, gdy osignie 100 pkt → zostaje oznaczony jako Sales Qualified Lead (SQL). Automatyzacja usprawnia lejek, zmniejsza koszty i poprawia konwersję."
    },
    {
      question: "Jakie narzędzia używać do automatyzacji lejka?",
      answer: "Dla B2B: HubSpot (CRM + marketing automation), Marketo (zaawansowana automatyzacja), Pipedrive (CRM + email). Dla B2C: Klaviyo (email + SMS marketing), ConvertKit (creator economy), Sumo (lead generation + automation). Uniwersalne: Zapier (integracje), Integromat (workflows). Wybór zależy od budżetu, skali i specjalności (e-commerce, SaaS, usługi)."
    },
    {
      question: "Jak ustawić email nurturing w automatyzacji?",
      answer: "Email nurturing to seria wiadomości wysłanych automatycznie w zależności od zachowania. Schemat: 1) Użytkownik pobiera white paper → lead entry point. 2) Day 1: Welcome email (wartość + edukacja). 3) Day 3: Problem email (zidentyfikuj bolączki). 4) Day 5: Solution email (pokaz jak rozwiazujesz problem). 5) Day 10: Social proof (case study, testimonial). 6) Day 15: CTA (demo, trial, spotkanie). Każdy email powinien dodawać wartość, nie sprzedawać."
    },
    {
      question: "Co to jest lead scoring i dlaczego jest ważny?",
      answer: "Lead scoring to przydzielanie punktów leadom na podstawie zachowania i danych demograficznych. Przykład: otworzenie emaila +5 pkt, klik na link +10 pkt, wypełnienie formularza +30 pkt, wizyta na stronie cennika +25 pkt. Gdy lead osiąga np. 100 pkt, jest oznaczany jako SQL (Sales Qualified Lead) i trafia do sprzedaży. Lead scoring oszczędza czas sprzedawcom, zmniejsza czas sprzedaży i poprawia konwersję, bo sprzedawcy fokusują się na gorące leady."
    },
    {
      question: "Jak integrować CRM z narzędziami marketingowymi?",
      answer: "Integracja zapewnia, że dane o klientach płyną między systemami bez ręcznego wprowadzania. Typowo: Google Analytics → HubSpot (dane o wizytach), HubSpot → Salesforce (SQL dla sprzedaży), E-mail marketing (Klaviyo) → CRM. Większość narzędzi ma wbudowane integracje lub możesz użyć Zapiera. Korzyść: single source of truth, automatyczne triggery (np. nowy lead → powiadomienie sprzedawcy)."
    },
    {
      question: "Jak mierzyć ROI automatyzacji marketingu?",
      answer: "ROI = (Przychód z automatyzacji - Koszt narzędzi) / Koszt narzędzi. Mierz: 1) Conversion rate (ile leadów staje się klientami). 2) Cost Per Lead (CPL = budżet / liczba leadów). 3) Cost Per Customer (CPC = budżet / liczba klientów). 4) Customer Lifetime Value (LTV = średni przychód na klienta). Jeśli LTV > 3x CPC, automatyzacja jest rentowna. Przykład: HubSpot kosztuje 5k/mies, generujesz 100 klientów mies, każdy wart 20k → ROI = (2M - 60k) / 60k = 32x zwrot."
    },
    {
      question: "Jakie są błędy przy wdrażaniu automatyzacji?",
      answer: "Najczęstsze błędy: 1) Wysyłanie zbyt wielu emaili → spam, rezygnacja. 2) Brak segmentacji — ten sam mail dla wszystkich → niska engagement. 3) Brak analizy — nie wiadomo co działa. 4) Zła baza danych — spam traps, nieaktualne maile. 5) Ignorowanie personalizacji — brak imienia, firmy. Rozwiązanie: Testuj, segmentuj do minimum 3 grup, analizuj metryki (open rate, click rate, unsubscribe rate), czyść bazę co miesiąc."
    },
    {
      question: "Ile czasu zajmuje zobaczenie rezultatów z automatyzacji?",
      answer: "Przygotowanie: 2-4 tygodnie (setup, testy, segmentacja). Pierwsze wyniki (lift w konwersji): 6-8 tygodni. Pełny ROI: 3-6 miesięcy. Zależy od: 1) Rozmaru bazy (10k kontaktów vs 100k). 2) Jakości danych. 3) Złożoności workflows. 4) Doświadczenia zespołu. B2B zazwyczaj zajmuje dłużej (3-6 mies) ze względu na dłuższy cykl sprzedaży. B2C szybciej (1-3 mies)."
    }
  ];

  return (
    <>
      <SEOHead
        title="Automatyzacja marketingu w lejku sprzedazowym | fotz.pl"
        description="Automatyzacja marketingu — jak zbudowac automatyzowany lejek sprzedazowy. Lead scoring, email nurturing, narzedzia HubSpot, ActiveCampaign, ROI automatyzacji."
        canonical="https://fotz.pl/blog/automatyzacja-marketingu"

        keywords="Automatyzacja marketingu w lejku sprzedazowym, Automatyzacja marketingu w lejku sprzedazowym poradnik, Automatyzacja marketingu w lejku sprzedazowym strategia, Automatyzacja marketingu w lejku sprzedazowym jak zrobić, Automatyzacja marketingu w lejku sprzedazowym marketing, Automatyzacja marketingu w lejku sprzedazowym przykłady, Automatyzacja marketingu w lejku sprzedazowym w Polsce"
      />
      <ArticleSchema
        title="Automatyzacja marketingu w lejku sprzedazowym — pełny przewodnik 2025"
        description="Automatyzacja lejka sprzedazowego, email nurturing, lead scoring, narzędzia (HubSpot, ActiveCampaign), strategie B2B vs B2C i ROI automatyzacji."
        datePublished="2025-04-12"
        dateModified="2025-04-12"
        url="https://fotz.pl/blog/automatyzacja-marketingu"
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
                <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Marketing automation</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Automatyzacja marketingu w lejku sprzedazowym
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Jak zautomatyzować lejek sprzedażowy, zwiększyć konwersję i zmniejszyć koszty pozyskania klienta.
                Lead scoring, email nurturing, strategie dla B2B i B2C.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Automatyzacja marketingu to jedną z najsilniejszych strategii, aby skalować sprzedaż bez proporcjonalnego wzrostu kosztów.
                Zamiast ręcznego wysyłania emaili każdemu klientowi, system automatycznie uruchamia sekwencje na podstawie zachowania użytkownika.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                W tym przewodniku wyjaśnimy, jak zautomatyzować lejek sprzedażowy, jakie narzędzia wybrać, jak ustawić lead scoring i email nurturing,
                oraz jak mierzyć ROI automatyzacji dla B2B i B2C.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Etapy automatyzacji w lejku */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Etapy automatyzacji w lejku sprzedażowym</h2>
              <p className="text-slate-300 mb-12">
                Automatyzacja działa na każdym etapie lejka. Oto jak wygląda w praktyce:
              </p>
            </FadeInView>

            <div className="grid md:grid-cols-2 gap-6">
              {funnelStages.map((stage, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-400/50 transition">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3">{stage.name}</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-gray-400">Cel</p>
                        <p className="text-slate-200">{stage.goal}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Narzędzia</p>
                        <p className="text-slate-200">{stage.tools}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">KPI</p>
                        <p className="text-slate-200">{stage.kpi}</p>
                      </div>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Tabela narzędzi */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Narzędzia marketingowe na każdym etapie lejka</h2>
              <p className="text-slate-300 mb-8">
                Wybór właściwych narzędzi to klucz do efektywnej automatyzacji.
              </p>
            </FadeInView>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-yellow-400 font-semibold">Etap</th>
                    <th className="text-left py-3 px-4 text-yellow-400 font-semibold">Cel</th>
                    <th className="text-left py-3 px-4 text-yellow-400 font-semibold">Kanały</th>
                    <th className="text-left py-3 px-4 text-yellow-400 font-semibold">KPI</th>
                  </tr>
                </thead>
                <tbody>
                  {marketingTools.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                      <td className="py-3 px-4 text-slate-200 font-medium">{row.stage}</td>
                      <td className="py-3 px-4 text-slate-300">{row.goal}</td>
                      <td className="py-3 px-4 text-slate-300">{row.channels}</td>
                      <td className="py-3 px-4 text-slate-300">{row.kpi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* B2B vs B2C */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Automatyzacja lejka B2B vs B2C</h2>
              <p className="text-slate-300 mb-8">
                Strategie automatyzacji znacznie się różnią w zależności od modelu biznesu.
              </p>
            </FadeInView>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-yellow-400 font-semibold">Aspekt</th>
                    <th className="text-left py-3 px-4 text-yellow-400 font-semibold">B2B</th>
                    <th className="text-left py-3 px-4 text-yellow-400 font-semibold">B2C</th>
                  </tr>
                </thead>
                <tbody>
                  {b2bVsB2c.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                      <td className="py-3 px-4 text-slate-200 font-medium">{row.aspect}</td>
                      <td className="py-3 px-4 text-slate-300">{row.b2b}</td>
                      <td className="py-3 px-4 text-slate-300">{row.b2c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <FadeInView delay={0.2}>
                <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-300 mb-3">Rekomendacja B2B</h3>
                  <p className="text-slate-300 text-sm">
                    Używaj HubSpot, Marketo lub Salesforce Marketing Cloud. Fokus na lead scoring oparte na firmie (branża, wielkość) i behawiorze (white paper, webinar).
                    Email nurturing powinien być edukacyjny i długoterminowy (3-6 mies). Najważniejsze: tracking buying committee.
                  </p>
                </div>
              </FadeInView>
              <FadeInView delay={0.3}>
                <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-emerald-300 mb-3">Rekomendacja B2C</h3>
                  <p className="text-slate-300 text-sm">
                    Używaj Klaviyo, Braze lub Segment. Fokus na behawioralny email marketing i SMS. Email nurturing powinien być krótszy (1-2 tygodnie).
                    Ważne: retargeting, personalizacja (imię, ostatni zakup), programy lojalnościowe. Integracja z Google Analytics.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Błędy */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Typowe błędy przy automatyzacji lejka</h2>
              <p className="text-slate-300 mb-8">
                Oto najczęstsze błędy, które osłabiają efektywność automatyzacji:
              </p>
            </FadeInView>

            <div className="space-y-6">
              {commonMistakes.map((mistake, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-red-900/10 border border-red-700/30 rounded-lg p-6">
                    <div className="flex gap-4">
                      <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-red-400 mb-2">{mistake.title}</h3>
                        <p className="text-slate-300 mb-3">{mistake.description}</p>
                        <div className="bg-gray-900/50 rounded p-3 border-l-2 border-yellow-400">
                          <p className="text-sm text-yellow-300">
                            <span className="font-semibold">Rozwiązanie:</span> {mistake.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Automatyzacja */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Jak zaimplementować automatyzację lejka</h2>
              <p className="text-slate-300 mb-8">
                Praktyczne kroki do wdrożenia automatyzacji:
              </p>
            </FadeInView>

            <div className="space-y-4">
              {[
                { step: 1, title: "Wybierz narzędzie", desc: "Decyduj bazując na budżecie, skali i integracji z istniejącymi systemami (CRM, e-commerce)." },
                { step: 2, title: "Mapuj lejek", desc: "Zdefiniuj etapy (lead → MQL → SQL → customer) i trigger'y do automatyzacji (np. lead entry → email 1)." },
                { step: 3, title: "Stwórz segmentację", desc: "Podziel bazę na co najmniej 3 segmenty (np. by źródło, branża, wielkość) aby email był bardziej trafny." },
                { step: 4, title: "Napisz email sequence", desc: "5-10 emaili z wartością edukacyjną. Testuj subject lines, timings, content. Nie sprzedawaj od razu." },
                { step: 5, title: "Ustaw lead scoring", desc: "Przydziel punkty za behawior (email open, link click, form fill, website visit) i dane (firma, branża)." },
                { step: 6, title: "Zintegruj CRM", desc: "Skonfiguruj sync bazy z CRM, aby SQL trafiały do sprzedaży. Setup notifications dla hot leads." },
                { step: 7, title: "Testuj i iteruj", desc: "Mierz conversion rate między etapami, open rate emaili, lead score distribution. Testuj A/B." }
              ].map((item) => (
                <FadeInView key={item.step} delay={item.step * 0.1}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex gap-4">
                    <div className="bg-yellow-400/20 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 font-bold text-sm">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Najczęstsze pytania</h2>
              <p className="text-slate-300 mb-8">
                Odpowiadamy na pytania dotyczące automatyzacji lejka sprzedażowego.
              </p>
            </FadeInView>

            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.05}>
                  <AccordionItem value={`faq-${idx}`} className="border border-gray-700 rounded-lg bg-gray-800 px-4">
                    <AccordionTrigger className="text-base font-semibold text-white hover:text-yellow-400 py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4 pt-0">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </FadeInView>
              ))}
            </Accordion>
          </div>

          <FAQSchema
            items={faqItems.map(item => ({
              question: item.question,
              answer: item.answer
            }))}
          />
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-b border-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Gotów do automatyzacji?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Automatyzacja lejka sprzedażowego to inwestycja, która szybko się zwraca.
                Pomożemy Ci wybrać narzędzia, zbudować strategie i mierzyć ROI.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition"
              >
                Konsultacja bezpłatna <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeInView>
          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
}
