import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Database, CheckCircle2, TrendingUp } from "lucide-react";
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

export default function BlogCRMCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "CRM — co to jest? System CRM dla firmy — poradnik" },
  ];

  const crmSystems = [
    { crm: "HubSpot CRM", opis: "Bezplatna wersja dla malych firm. Pelny CRM + marketing + sprzedaz. Najpopularniejszy dla MŚP B2B.", cena: "Od 0 USD/mies.", typ: "All-in-one" },
    { crm: "Salesforce", opis: "Lider rynku enterprise. Ogromne mozliwosci customizacji, ale skomplikowany i drogi.", cena: "Od 25 USD/user/mies.", typ: "Enterprise" },
    { crm: "Pipedrive", opis: "Prosty CRM skupiony na pipeline sprzedazowym. Popularny wsrod mniejszych zespolow sprzedazy.", cena: "Od 14 EUR/user/mies.", typ: "Sales" },
    { crm: "monday.com CRM", opis: "Elastyczny, wizualny CRM oparty na monday.com. Latwy do kustomizacji.", cena: "Od 10 USD/user/mies.", typ: "Flexible" },
    { crm: "Freshsales", opis: "CRM od Freshworks z wbudowanym telefonem i AI scoring. Dobre dla call center i sprzedazy telefonicznej.", cena: "Od 15 USD/user/mies.", typ: "Sales+Phone" },
    { crm: "Livespace", opis: "Polski CRM dla B2B — polski interfejs, RODO, dedykowane wsparcie po polsku.", cena: "Od 69 zl/user/mies.", typ: "Polski" },
  ];

  const faqItems = [
    {
      question: "Co to jest CRM?",
      answer:
        "CRM (Customer Relationship Management — Zarzadzanie Relacjami z Klientami) to oprogramowanie do zarzadzania kontaktami z klientami, leadami i procesami sprzedazowymi. CRM centralizuje wszystkie informacje o klientach: dane kontaktowe, historia rozmow i email, status w procesie sprzedazy, otwarte zadania i follow-upy, wystawione oferty i faktury. Bez CRM: informacje o klientach sa rozproszone po Excelu, emailach i glowach handlowcow. Z CRM: caly zespol ma dostep do aktualnej historii kontaktu z kazdym klientem. Rynek CRM to jeden z najszybciej rosnacych segmentow oprogramowania — wartosc w 2024: 65 mld USD globalnie.",
    },
    {
      question: "Jakie sa rodzaje systemow CRM?",
      answer:
        "Typy CRM: Operacyjny CRM — automatyzacja procesow sprzedazowych i marketingowych (automatyczne emaile, sekwencje follow-up). Przyklad: Salesforce, HubSpot. Analityczny CRM — zaawansowana analitika danych klientow — segmentacja, prognozowanie, LTV. Przyklad: Salesforce Analytics. Kolaboracyjny CRM — podziel informacje o klientach miedzy sprzedaz, marketing i support. Przyklad: Zendesk. Strategiczny CRM — dlugookresowe zarzadzanie relacjami z klientami — programy lojalnosciowe. Podejscia: all-in-one (HubSpot, Salesforce) vs dedykowane (Pipedrive — tylko sprzedaz). Dla MŚP: zaczsnij od prostego CRM (HubSpot free lub Pipedrive) zanim wdrozysz enterprise.",
    },
    {
      question: "Jakie sa korzysci z wdrozenia CRM?",
      answer:
        "Korzysci z CRM wedlug badan: Wzrost sprzedazy: CRM zwieksza sprzedaz srednio o 29% (Salesforce). Poprawa produktywnosci sprzedawcow: +34%. Dokladnosc prognoz sprzedazy: +42%. Retencja klientow: lepsza obsluga = mniej odejsc. Korzysci operacyjne: Brak zapomnianych follow-upow — CRM przypomina o kontakcie. Pelna historia kontaktu — nowy handlowiec widzi caly kontekst. Raporty i dashboardy — wiesz ktory handlowiec generuje ile i skad. Automatyzacja — emaile sekwencyjne, przydzelanie leadow, powiadomienia. Lepsza wspolpraca — marketing wie co sprzedaz zamknela, support widzi co kupil klient.",
    },
    {
      question: "Jak wybrac CRM dla malej firmy?",
      answer:
        "Kryteria wyboru CRM dla MŚP: Latwosc uzytkowania — czy handlowcy beda faktycznie uzywac systemu? (adoption to glowny problem z CRM). Cena — koszt na uzytkownika miesiecznie; dla 5 handlowcow przy 14 EUR/user to 70 EUR/mies. Integracje — czy laczy sie z Twoim emailem (Gmail/Outlook), strona, narzedziem do email marketingu, telefonem. Pipeline sprzedazowy — wizualizacja etapow sprzedazy (Kanban). Automatyzacja — sekwencje follow-up, przydzielanie leadow. Mobile — czy dziala na telefonie (handlowcy w terenie). RODO i przechowywanie danych — gdzie sa przechowywane dane klientow. Rekomendacja: zacznij od HubSpot (darmowy) lub Pipedrive (14 EUR/user), a dopiero przy 20+ handlowcach mysl o Salesforce.",
    },
    {
      question: "Ile kosztuje wdrozenie CRM?",
      answer:
        "Koszty CRM: Oprogramowanie: od 0 (HubSpot free) do 300+ USD/user/mies. (Salesforce Enterprise). Wdrozenie: proste CRM (HubSpot, Pipedrive) mozna wdrozyc samodzielnie w kilka dni. Zlozone projekty (Salesforce, enterprise) wymagaja konsultantow — 20 000-200 000 zl. Migracja danych: przeniesienie danych z Excela lub starego CRM — 1 000-10 000 zl. Szkolenia: 1 000-5 000 zl dla malego zespolu. Calkowity TCO: dla firmy 10 handlowcow przez rok: HubSpot Starter 5 000-15 000 zl rocznie, Pipedrive 8 000-20 000 zl rocznie, Salesforce 40 000-100 000 zl rocznie (licencja + wdrozenie). ROI: dobrze wdrozony CRM zwraca sie typowo w 3-12 miesiecy przez wyzszy wspolczynnik zamkniecia leadow.",
    },
    {
      question: "Jak powiazac CRM z innymi narzedziami?",
      answer:
        "Integracje CRM: Email: HubSpot i Salesforce integruja sie z Gmail i Outlook — kazdy email jest automatycznie zapisywany w historii kontaktu. Marketing automation: HubSpot (wbudowany), ActiveCampaign, Mailchimp — synchronizacja leadow i statusow. Strona internetowa: formularze kontaktowe trafiaja bezposrednio do CRM (np. HubSpot Forms, Typeform). Telefon VoIP: Aircall, Ringover — rozmowy telefoniczne nagrywane i zapisywane w CRM. Zapier/Make: automatyzacja bez kodu miedzy CRM a 1000+ innymi aplikacjami. Fakturowanie: Fakturownia, inFakt, Faktura.pl — synchronizacja umow i faktur. Slack/Teams — powiadomienia o nowych leadach bezposrednio do kanalu zespolu.",
    },
  ];

  return (
    <>
      <SEOHead
        title="CRM — co to jest? System CRM dla firmy — poradnik | fotz.pl"
        description="CRM co to jest — wyjasnamy czym jest system CRM, rodzaje, korzysci, jak wybrac CRM dla malej firmy, koszty wdrozenia i najlepsze systemy."
        canonical="https://fotz.pl/blog/crm-co-to-jest"
      />
      <ArticleSchema
        title="CRM — co to jest? System CRM dla firmy — poradnik"
        description="Czym jest CRM (Customer Relationship Management), rodzaje, korzysci, jak wybrac CRM dla MŚP, koszty wdrozenia i integracje."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/crm-co-to-jest"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Database className="w-4 h-4" /> Narzedzia dla firm</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                CRM — co to jest i jaki system wybrac dla firmy?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                CRM to system do zarzadzania relacjami z klientami. Porownanie systemow,
                korzysci wdrozenia, koszty i jak zintegrowa CRM ze strona internetowa.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Popularne systemy CRM</h2>
              <div className="space-y-2 mb-6">
                {crmSystems.map((c, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-slate-900 text-sm">{c.crm}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-blue-600 font-medium">{c.typ}</span>
                        <span className="text-xs text-slate-500">{c.cena}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-xs">{c.opis}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Users className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Strona zintegrowana z CRM generuje wiecej leadow</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy strony z formularzami bezposrednio wpadajacymi do HubSpot, Pipedrive lub innego CRM.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — CRM co to jest</h2>
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
          heading="Strona www + CRM = maszyna do generowania klientow"
          subheading="Budujemy strony zintegrowane z CRM — kazde zapytanie trafia bezposrednio do Twojego systemu sprzedazowego."
        />
      </Layout>
    </>
  );
}
