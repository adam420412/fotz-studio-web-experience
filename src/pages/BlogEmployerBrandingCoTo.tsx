import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Building, TrendingUp, CheckCircle2 } from "lucide-react";
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

export default function BlogEmployerBrandingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Employer Branding — co to jest? Marka pracodawcy" },
  ];

  const evpComponents = [
    { component: "Kultura i wartości", desc: "Kim jesteśmy? Jakie wartości kierują codziennymi decyzjami? Autentyczna kultura firmy — nie wishful thinking." },
    { component: "Możliwości rozwoju", desc: "Ścieżki kariery, szkolenia, mentoring, konferencje. Co pracownik zyska za 2-5 lat?" },
    { component: "Wynagrodzenie i benefity", desc: "Konkurencyjne wynagrodzenie, equity (startup/scaleup), benefity (healthcare, elastyczność, remote)." },
    { component: "Środowisko pracy", desc: "Hybrid/remote, biuro, narzędzia, work-life balance, autonomia vs micromanagement." },
    { component: "Misja i wpływ", desc: "Czy praca ma sens? Czy firma rozwiązuje ważny problem? Purpose-driven employer branding działa szczególnie na pokolenie Z." },
    { component: "Marka liderów i CEO", desc: "Personal branding CEO i C-suite na LinkedIn buduje wiarygodność firmy jako pracodawcy. Employee advocacy." },
  ];

  const ebChannels = [
    { channel: "LinkedIn", desc: "Podstawowy kanał dla rekrutacji i employer brandingu B2B. Company page, pracownicy jako ambasadorzy, LinkedIn Life tab. Employer targeting w LinkedIn Ads." },
    { channel: "Kariera na stronie www", desc: "Strona /kariera jako landing page dla kandydatów — kultura, team, benefity, process rekrutacji. Powinna być tak dobra jak strona dla klientów." },
    { channel: "Glassdoor / GoWork", desc: "Platforma recenzji pracodawców. Niezarządzane recenzje mogą zabijać rekrutację. Aktywne zarządzanie: odpowiadaj na recenzje, pozyskuj pozytywne od zadowolonych pracowników." },
    { channel: "Content i blog", desc: "Artykuły o kulturze, case studies projektów, 'day in life' posty. LinkedIn Articles i Medium. Pokazuje jak wyglądaje praca od środka." },
    { channel: "Social media (Instagram/TikTok)", desc: "Behind-the-scenes, team stories, office life. Działa dla firm zatrudniających young professionals i gen Z." },
    { channel: "Referral program", desc: "Pracownicy polecają znajomych — najlepsze źródło kandydatów (wyższy fit, niższy koszt, szybsza onboardingu). Reward: 2-5k PLN za zatrudnionego polecającego." },
  ];

  const faqItems = [
    {
      question: "Co to jest employer branding?",
      answer: "Employer branding (marka pracodawcy) to strategia budowania wizerunku firmy jako atrakcyjnego miejsca pracy — tak jak marketing buduje wizerunek marki dla klientów. Cel: przyciąganie najlepszych kandydatów, retencja obecnych pracowników i redukcja kosztów rekrutacji. Employer branding obejmuje: EVP (Employee Value Proposition) — unikalną ofertę wartości dla pracownika. Komunikację zewnętrzną — strona kariery, LinkedIn, eventy, Glassdoor. Kulturę wewnętrzną — codzienne doświadczenie pracowników. Employee advocacy — pracownicy jako ambasadorzy marki. Dlaczego jest ważny: firma z silnym employer brandingiem zatrudnia 3x szybciej i płaci 50% mniej za rekrutację (LinkedIn). 86% kandydatów bada stronę firmy i social media przed aplikowaniem. W rynku pracownika (szczególnie IT, fintech, SaaS) marka pracodawcy decyduje kto wygraje 'wojnę o talent'.",
    },
    {
      question: "Co to jest EVP (Employee Value Proposition)?",
      answer: "EVP (Employee Value Proposition) to unikalna propozycja wartości dla pracownika — odpowiedź na pytanie 'dlaczego ktoś powinien pracować właśnie u nas, a nie u konkurencji?'. EVP analogicznie do UVP (Unique Value Proposition) dla klientów. Komponenty dobrego EVP: Wynagrodzenie i benefity (must have ale nie differentiator). Możliwości rozwoju i awansu. Kultura i wartości (często najważniejsze dla retention). Praca meaningfull i impact (szczególnie ważne dla senior profesjonalistów). Work-life balance i elastyczność. Jak definiować EVP: 1) Wywiady z obecnymi pracownikami — co najbardziej cenią? Co jest wyjątkowe? 2) Exit interviews — dlaczego odchodzą? Co mogłoby ich zatrzymać? 3) Competitive analysis — co oferuje konkurencja? 4) Formulate EVP statement — jedno lub dwa zdania które podsumowują 'dlaczego my'. Przykład EVP: 'W X budujesz produkt który używają miliony ludzi, w teamie który traktuje engineering jak rzemiosło i gdzie masz realny wpływ na kierunek produktu.' Uwaga: EVP musi być autentyczny — fałszywy EVP generuje churn w pierwszym roku.",
    },
    {
      question: "Jak mierzyć efektywność employer brandingu?",
      answer: "Metryki employer brandingu: Recruitment metrics: Quality of hire — jak nowi pracownicy radzą sobie na stanowisku po 6-12 miesiącach? Time to hire — ile czasu od otwarcia roli do oferty? Benchmark: 30-45 dni. Cost per hire — łączny koszt rekrutacji / liczba zatrudnionych. Offer acceptance rate — % kandydatów którzy przyjmują ofertę. Referral rate — % zatrudnionych z poleceń (benchmark: 20-40% u firm z dobrym EB). Brand awareness metrics: LinkedIn followers i engagement. Glassdoor/GoWork rating i liczba recenzji. Career page traffic (Google Analytics). Employee net promoter score (eNPS) — czy pracownicy polecają firmę jako miejsce pracy? Retention metrics: Employee turnover rate (roczny % odchodzących). 90-day retention rate (czy nowi pracownicy zostają). Engagement scores (Gallup Q12 lub własne badania). Koszt złego employer brandingu: koszt złej reputacji pracodawcy = dodatkowe 10% do wynagrodzenia żeby przyciągnąć kandydatów (Harvard Business Review). High turnover: odejście pracownika kosztuje 50-200% rocznego wynagrodzenia (rekrutacja + onboarding + productivity gap).",
    },
    {
      question: "Jak zbudować stronę kariery która przyciąga kandydatów?",
      answer: "Dobra strona kariery — elementy: Must have: Kultura i wartości — nie korporacyjny buzzword ale autentyczny opis. Zdjęcia i video z prawdziwego biura i prawdziwych ludzi (nie stock photos). Benefity — konkretne, bez 'atrakcyjne wynagrodzenie'. Team stories i testimonials pracowników. Wyraźny proces rekrutacji — czego kandydat może oczekiwać. Otwarty job board z jasno opisanymi rolami. Nice to have: 'Day in the life' video per rola lub dział. Blog / artykuły o kulturze i pracy. Social media feed (LinkedIn, Instagram). Glassdoor widget z recenzjami. Tech stack dla ról technicznych. Techniczne: Mobile-friendly, szybkie ładowanie. ATS integration (Lever, Greenhouse, Workable). Tracking kandydatów (GA4 + ATS analytics). Błędy: 'We're looking for passionate, motivated, self-starter...' — generyczny język. Brak informacji o wynagrodzeniu (kandydaci to lubią, szczególnie senior). Outdated content — biuro z 2019 roku a teraz pracujecie zdalnie. Inspiracje: Basecamp, Buffer (radical transparency), Spotify, Shopify — słynne strony kariery jako benchmark.",
    },
    {
      question: "Jak employer branding wpływa na retencję pracowników?",
      answer: "Employer branding a retencja — relacja: Zewnętrzny EB (co przyciąga) vs Internal EB (co zatrzymuje): Zewnętrzny employer branding przyciąga właściwych kandydatów — jeśli EVP jest autentyczne, nowi pracownicy mają właściwe oczekiwania i rzadziej odchodzą po 3-6 miesiącach. Internal employer branding (employee experience) to codzienne doświadczenie pracownika — onboarding, management, feedback, rozwój. Badania: Gallup: firmy z wysokim engagement pracowników mają 59% niższy turnover. LinkedIn: pracownicy w firmach z silnym EB zostają 2x dłużej. Glassdoor: firmy z ratingiem powyżej 4.0 mają 25% niższy turnover vs rynek. Narzędzia budowania wewnętrznego EB: Regular employee surveys (Officevibe, Culture Amp, Lattice). Transparent 1:1s i performance reviews. Recognition programs (peer-to-peer, manager spotlights). Clear career paths — pracownicy zostają jeśli widzą przyszłość. Internal mobility — możliwość zmiany roli wewnątrz firmy. Pułapka: firma inwestuje dużo w external EB (LinkedIn, strona) ale zaniedbuje internal EB. Kandydaci są 'wciągnięci' przez piękny branding a rzeczywistość nie spełnia oczekiwań → wysoki churn.",
    },
    {
      question: "Jak small business lub startup może budować employer branding bez dużego budżetu?",
      answer: "Employer branding dla małych firm i startupów — low-budget tactics: LinkedIn (bezpłatny): CEO i co-founders aktywni na LinkedIn — dzielą się insights, kulturą, procesem budowania firmy. Autentyczność > profesjonalna produkcja. Pracownicy jako ambasadorzy (employee advocacy): zachęcaj pracowników do pisania postów. Nawet 3-5 aktywnych pracowników na LinkedIn buduje brand. Glassdoor management: zaproś obecnych pracowników do pozostawienia recenzji (organicznie, bez nacisków). Odpowiadaj na każdą recenzję (nawet negatywną) — pokazuje kulturę feedbacku. Transparentność jako differentiator: mała firma nie może konkurować wynagrodzeniem z korporacją — może konkurować transparentnością, autonomią, wpływem. 'Open salaries', transparent equity, open roadmap. Culture content: prosty zapis Loom video — 'day in the life', retrospektywa projektu, team meeting. Nie potrzebujesz produkcji filmowej. Job posting optimization: jasno opisuj role, kulturę, wynagrodzenie. Kandydaci research firmy przed aplikowaniem — upewnij się że znajdą pozytywne informacje. Bezpłatne narzędzia: LinkedIn Company Page, Glassdoor (free), Indeed company profile, employer.gov.pl (Polska).",
    },
  ];

  return (
    <>
      <SEOHead
        title="Employer Branding — co to jest? Marka pracodawcy | fotz.pl"
        description="Employer branding co to jest — wyjaśniamy czym jest marka pracodawcy, EVP, jak budować stronę kariery, mierzyć efektywność i employer branding dla małych firm."
        canonical="https://fotz.pl/blog/employer-branding-co-to"

        keywords="Employer Branding co to jest, Employer Branding definicja, czym jest Employer Branding, Employer Branding w marketingu, Employer Branding przykłady, jak działa Employer Branding, Employer Branding strategia"
      />
      <ArticleSchema
        title="Employer Branding — co to jest? Marka pracodawcy"
        description="Czym jest employer branding, EVP (Employee Value Proposition), kanały (LinkedIn, Glassdoor, strona kariery), metryki i employer branding dla startupów."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/employer-branding-co-to"
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
                <span className="flex items-center gap-1"><Building className="w-4 h-4" /> HR / Marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Employer Branding — co to jest i jak budować markę pracodawcy?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Employer branding to marketing skierowany do kandydatów. Firma z silną marką pracodawcy
                zatrudnia 3x szybciej i płaci 50% mniej za rekrutację.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Składniki EVP (Employee Value Proposition)</h2>
              <div className="space-y-3 mb-6">
                {evpComponents.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{c.component}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kanały employer brandingu</h2>
              <div className="space-y-3 mb-6">
                {ebChannels.map((c, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-1">{c.channel}</p>
                    <p className="text-slate-600 text-xs">{c.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zbudować profesjonalną stronę kariery?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strony kariery, landing pages i content — pomagamy firmom komunikować swoją kulturę i przyciągać najlepszych.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Strony kariery — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Employer Branding co to jest</h2>
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
          heading="Pomożemy zbudować markę pracodawcy która przyciąga talenty"
          subheading="Strony kariery, content i kampanie rekrutacyjne — budujemy employer branding który wyróżnia Cię w rynku pracy."
        />
      </Layout>
    </>
  );
}
