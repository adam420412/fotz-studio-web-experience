import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Users, Briefcase, TrendingUp, DollarSign } from "lucide-react";
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

export default function BlogFreelancerCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Freelancer - co to jest i jak zaczac?" },
  ];

  const freelancerSkills = [
    { skill: "Programowanie / web dev", rate: "100-300 zl/h", demand: "Bardzo wysoki" },
    { skill: "UX/UI Design", rate: "80-200 zl/h", demand: "Wysoki" },
    { skill: "Copywriting / content", rate: "50-150 zl/h", demand: "Wysoki" },
    { skill: "SEO / SEM", rate: "70-200 zl/h", demand: "Wysoki" },
    { skill: "Grafika / illustration", rate: "60-150 zl/h", demand: "Sredni" },
    { skill: "Tlumaczenia", rate: "50-120 zl/h", demand: "Sredni" },
    { skill: "Ksiegowosc online", rate: "80-180 zl/h", demand: "Sredni" },
  ];

  const faqItems = [
    {
      question: "Co to jest freelancer?",
      answer:
        "Freelancer (wolny strzelec) to osoba pracujaca na wlasny rachunek, swiadczaca uslugi roznym klientom bez stalego zatrudnienia. Freelancer sam decyduje dla kogo pracuje, kiedy i za ile. Moze prowadzic dzialalnosc gospodarcza (JDG) lub praowac bez rejestracji (do 50% minimalnego wynagrodzenia bez DG). Popularne branzy freelancerskie: IT, design, marketing, copywriting, konsulting, tlumaczenia, ksiegowosc. Liczba freelancerow w Polsce szacowana jest na 500 000-1 mln osob.",
    },
    {
      question: "Jak zostac freelancerem?",
      answer:
        "Kroki do rozpoczecia freelancingu: 1) Wybierz specjalizacje - skupiaj sie na jednej niszy na poczatek. 2) Zbuduj portfolio - 3-5 realnych lub demonstracyjnych projektow. 3) Zaloz profil na platformach - Upwork, Freelancer.com, Useme (Polska), LinkedIn. 4) Ustaw stawki - sprawdz rynek, zacznij od srednich stawek. 5) Znajdz pierwszych klientow - siec kontaktow, zimny outreach, platforma. 6) Zarejestuj dzialalnosc gdy zarobki przekrocza limit. 7) Zbieraj referencje - fundamenty reputacji freelancera.",
    },
    {
      question: "Ile zarabia freelancer w Polsce?",
      answer:
        "Zarobki freelancerow w Polsce sa bardzo zroznicowane: Junior freelancer: 30-80 zl/h (2000-5000 zl/mies. przy pelnym etacie). Mid freelancer: 80-150 zl/h (6000-12 000 zl/mies.). Senior freelancer: 150-300 zl/h (10 000-25 000 zl/mies. i wiecej). Programisci i UX designerzy biora najwyzsze stawki - czesto 200-400 zl/h w projektach zagranicznych (USD/EUR). Wazne: freelancer placi swoje skladki ZUS (~1500-3500 zl/mies.) i podatki - realne zarobki to kwota po tych platach.",
    },
    {
      question: "Freelancer vs etat - co sie bardziej oplaca?",
      answer:
        "Porownanie: Etat: stale wynagrodzenie, pracodawca placi czesc ZUS, placa urlopowa, brak ryzyka, mniejsza elastycznosc. Freelancing: wyzszy potencjal zarobkowy, pelna elastycznosc, ale: samodzielny ZUS, brak platnego urlopu, niestabilnosc przychodow, koniecznosc samodzielnego pozyskiwania klientow. Finansowo: freelancer zarabiajacy 15 000 zl brutto/mies. moze miec podobne 'na reke' co etatowiec zarabiajacy 10 000 zl brutto - po oplaceniu ZUS i podatkow. Freelancing sie oplaca gdy masz specjalistyczne umiejetnosci, siec klientow i tolerancje na ryzyko.",
    },
    {
      question: "Jakie platformy freelancerskie sa popularne w Polsce?",
      answer:
        "Platformy do znajdowania zlecen dla freelancerow: Polskie: Useme.eu (popularne, umowa o dzielo bez JDG), NoFluffJobs (IT), Pracuj.pl (kontrakt B2B). Miedzynarodowe: Upwork (najpopularniejsza globalnie, USD), Toptal (premium, selekcja), Fiverr (niskobudzetowe uslugi na start), Freelancer.com, 99designs (design). LinkedIn - nie platforma, ale kluczowe zrodlo klientow B2B. Dla seniorow i konsultantow: bezposrednie kontakty czesto wazniejsze niz platformy.",
    },
    {
      question: "Czy freelancer musi zakladac dzialalnosc gospodarcza?",
      answer:
        "Nie od razu. W Polsce mozesz zarabiac bez rejestracji DG do limitu: 50% minimalnego wynagrodzenia miesieczne (od 2024: ok. 2100 zl/mies. brutto) - jezeli zarobki sa w ramach 'dzialalnosci nierejestrowanej'. Przy wyzszych zarobkach musisz zarejestrowac Jednoosobowa Dzialalnosc Gospodarcza (JDG). JDG daje dostep do: liniowego podatku 19% (korzystny przy wysokich zarobkach), rozliczania kosztow (komputer, telefon, szkolenia, samochod), kredytu i leasingu. Konsultacja z ksiegowym warto wykonac przed rejestracją.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Freelancer - co to jest i jak zaczac? Poradnik 2025 | fotz.pl"
        description="Freelancer co to jest - wyjasniamy czym jest freelancer, jak zostac freelancerem, ile mozna zarobic, platformy do zlecen i czy zakladac dzialalnosc."
        canonical="https://fotz.pl/blog/freelancer-co-to-jest"

        keywords="Freelancer - co to jest, Freelancer - definicja, czym jest Freelancer -, Freelancer - przykłady, jak działa Freelancer -, Freelancer - znaczenie, Freelancer - przewodnik"
      />
      <ArticleSchema
        title="Freelancer - co to jest i jak zaczac?"
        description="Czym jest freelancer, jak zostac freelancerem, ile zarabia, freelancer vs etat, platformy freelancerskie i czy zakladac dzialalnosc gospodarcza."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/freelancer-co-to-jest"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> Kariera i praca</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Freelancer - co to jest i jak zaczac?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Freelancer to niezalezny specjalista pracujacy dla roznych klientow bez stalego etatu.
                Jak zostac freelancerem, ile zarabiac i jakie platformy wybrac?
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Stawki freelancerow w Polsce (2025)</h2>
              <div className="space-y-2 mb-6">
                {freelancerSkills.map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <p className="text-slate-800 text-sm font-medium">{s.skill}</p>
                      <p className="text-slate-500 text-xs">Popyt: {s.demand}</p>
                    </div>
                    <span className="font-bold text-blue-600 text-sm ml-4 whitespace-nowrap">{s.rate}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Freelancer vs etat - porownanie</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Aspekt</th>
                      <th className="text-left p-3 border border-slate-700">Freelancer</th>
                      <th className="text-left p-3 border border-slate-700">Etat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspect: "Zarobki", fr: "Wyzszy potencjal, zmienne", etat: "Stale, przewidywalne" },
                      { aspect: "Elastycznosc", fr: "Pelna (kiedy, gdzie, dla kogo)", etat: "Ograniczona" },
                      { aspect: "ZUS", fr: "Samodzielny (~1500-3500 zl/mies.)", etat: "Czesc placi pracodawca" },
                      { aspect: "Urlop", fr: "Brak platnego urlopu", etat: "26 dni/rok platnego" },
                      { aspect: "Bezpieczenstwo", fr: "Niskie (ryzyko braku zlecen)", etat: "Wysokie (umowa o prace)" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.aspect}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.fr}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.etat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Users className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Jestes freelancerem i potrzebujesz strony portfolio?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Profesjonalna strona to Twoja wizytowka - pomagamy freelancerom budowac online presence ktore przyciaga klientow.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron - oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ - Freelancer co to jest</h2>
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
