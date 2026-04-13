import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Mic, TrendingUp, Users, Star } from "lucide-react";
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

export default function BlogPodcastMarketingCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Podcast Marketing — co to jest i jak prowadzic podcast biznesowy?" },
  ];

  const podcastTypes = [
    { type: "Podcast wywiadowy (Interview)", desc: "Zapraszasz gostci-ekspertow. Wyzszy zasieg (goscie przyprowadzaja swoje audytorium), latwiejsza produkcja tresci.", example: "How I Built This, Lex Fridman, Polskie: Marketing Maczeta" },
    { type: "Podcast solowy (Solo)", desc: "Ty jako ekspert dzielisz sie wiedza. Mocny personal branding, ale wymaga dyscypliny i regularnosci.", example: "Gary Vee, Tim Ferriss (solo episodes)" },
    { type: "Podcast konwersacyjny (Co-host)", desc: "Dwoch lub wiecej hostow dyskutuje temat. Naturalnie angaz ujacy, latwiejszy do prowadzenia.", example: "My First Million, Acquired, Polskie: Rynek Ksiazki" },
    { type: "Podcast narracyjny (Storytelling)", desc: "Opowiadanie historii w formie narracyjnej — najwyzszy czas produkcji, ale bardzo angaz ujacy.", example: "Serial, Radiolab, This American Life" },
  ];

  const faqItems = [
    {
      question: "Co to jest Podcast Marketing?",
      answer:
        "Podcast Marketing to strategia marketingowa wykorzystujaca format audio (podcastow) do budowania relacji z audytorium, pozycjonowania jako eksperta branzy i generowania leadow lub sprzedazy. Obejmuje dwa podejscia: 1) Prowadzenie wlasnego podcastu — firma lub osoba prowadzi regularny podcast dla swojej grupy docelowej (np. podcast o e-commerce dla wlascicieli sklepow). 2) Sponsoring lub goscinna obecnosc w cudzych podcastach — reklama lub wywiad w podcascie ktory dociera do Twojego ICP. Podcast marketing jest czlecia dark funnel — sluchacze rzadko klikaja bezposrednio po odcinku, ale buduje on zaufanie i rozpoznawalnosc marki przez czas.",
    },
    {
      question: "Czy warto prowadzic podcast biznesowy?",
      answer:
        "Korzysci z podcastu biznesowego: Budowanie autorytetu — regularnie dzielac sie wiedza stajesz sie 'Tym ekspertem' w niszy. Personal i brand building — podcast jest formatem budujacym zaufanie szybciej niz blog (glos humanizuje marke). Siec kontaktow — zapraszanie gostci buduje relacje z ekspertami i decydentami. Content repurposing — odcinek podcastu to material na blog post, LinkedIn posty, clips na social media. Dark funnel — sluchacze ktos moze sluchac miesiacami zanim sie skontaktuje. Statystyki: 68% sluchaczy podcastow kupuje produkty lub uslugi ktore uslyszeli w podcascie (Edison Research). Podcast B2B ma zazwyczaj male ale bardzo zaangazowane i zamozne audytorium.",
    },
    {
      question: "Jak zaczac podcast biznesowy?",
      answer:
        "Kroki do uruchomienia podcastu: 1) Zdefiniuj nische i audytorium — dla kogo jest podcast? O czym bedziez mowic? Jak wawskie = lepiej. 2) Wybierz format — wywiad, solo, co-host? Zazwyczaj najlatwiejszy start to wywiadowy. 3) Sprzet — mikrofon (Rode NT-USB ~500 zl, Blue Yeti ~400 zl), sluchawki, opcjonalnie izolacja akustyczna. 4) Oprogramowanie — nagrywanie: Audacity (darmowe), Adobe Audition. Remote: Riverside.fm, Zencastr. 5) Hosting — Spotify for Podcasters (darmowy), Buzzsprout, Anchor. 6) Regularne publikacje — minimum 1x/tydz lub 2x/mies. Regularnosc kluczowa. 7) Promuj — social media, email lista, LinkedIn, cross-promocja z innymi podcastami.",
    },
    {
      question: "Jak monetyzowac podcast?",
      answer:
        "Sposoby monetyzacji podcastu: 1) Sponsoring — reklamy mid-roll lub pre-roll. Cena: zazwyczaj 15-50 USD CPM (za 1000 wyslucha). Przy 1000 odcinek/mies. mozesz liczyc na 15-50 USD/odcinek. 2) Lead generation — podcast jako kanal pozyskiwania leadow dla wlasnych uslug. Np. agencja marketingowa z podcastem o marketingu — sluchacze staja sie klientami. 3) Affilliate marketing — polecasz produkty w podcascie z unikalnym linkiem. 4) Premium subskrypcja — Patreon, Spotify exclusive, Apple Podcasts Subscriptions. 5) Kursy i coaching — podcast jako top-of-funnel dla platnych produktow. 6) Ksiazka / speaking — pozycja eksperta zbudowana przez podcast otwiera inne okazje.",
    },
    {
      question: "Jak mierzyc wyniki podcastu?",
      answer:
        "Metryki podcasto: Zasiega: Downloads per episode (najwazniejsza metryka), unique listeners per month, downloads trend (rosnace czy plateaujace). Zaangazowanie: completion rate (ile % odcinka sluchacze dosluchuja — cel: powyzej 50%), subscriber growth, recenzje i oceny. Sponsoring: CPM (koszt na 1000 wyslucha) — sponsorzy oceniaja tym. Biznesowe: leads z podcastu (pytaj nowych klientow 'skad sie o nas dowiedzieles?'), website traffic z linku w odcinku, konwersja CTA w podcascie. Narzedzia: Spotify for Podcasters (analytics), Buzzsprout Analytics, podtrac.com (rankingi). Dlugosc odcinka: B2B 20-45 min, general audience 20-60 min.",
    },
    {
      question: "Ile kosztuje produkcja podcastu?",
      answer:
        "Koszty podcastu: Sprzet (jednorazowo): Mikrofon Rode NT-USB: 500-700 zl. Sluchawki studyjne (Sony MDR-7506): 400 zl. Pop filter, podstawka: 100-200 zl. Razem sprzet: 1 000 - 2 000 zl. Software i serwisy (miesiecznie): Hosting (Buzzsprout Basic): 12-18 USD/mies. Nagrywanie remote (Riverside.fm): 19-29 USD/mies. Edycja (DIY): 0 zl. Edycja (outsource): 50-150 USD/odcinek. Marketing i promocja: graphic design intro/outro: 500-1500 zl jednorazowo. Social media clips: 200-500 zl/odcinek. Calkowity budzet: DIY (edytujesz sam): 100-300 zl/mies. Z outsourcingiem edycji: 500-2000 zl/mies. Produkcja agencyjna: 3000-10000+ zl/mies.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Podcast Marketing — co to jest i jak prowadzic podcast biznesowy? | fotz.pl"
        description="Podcast Marketing co to jest — wyjasnamy czym jest podcast marketing, jak zaczac podcast biznesowy, monetyzacja, metryki i koszty produkcji podcastu."
        canonical="https://fotz.pl/blog/podcast-marketing-co-to"

        keywords="Podcast Marketing co to jest, Podcast Marketing definicja, czym jest Podcast Marketing, Podcast Marketing w marketingu, Podcast Marketing przykłady, jak działa Podcast Marketing, Podcast Marketing strategia"
      />
      <ArticleSchema
        title="Podcast Marketing — co to jest i jak prowadzic podcast biznesowy?"
        description="Czym jest podcast marketing, typy podcastow, jak zaczac podcast biznesowy, monetyzacja, metryki i koszty produkcji."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/podcast-marketing-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Mic className="w-4 h-4" /> Content marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Podcast Marketing — co to jest i jak prowadzic podcast biznesowy?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Podcast to potezny kanal budowania autorytetu i relacji z audytorium.
                Jak zaczac, formaty, monetyzacja i koszty produkcji.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Formaty podcastow biznesowych</h2>
              <div className="space-y-3 mb-6">
                {podcastTypes.map((t, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-1">{t.type}</p>
                    <p className="text-slate-600 text-xs mb-1">{t.desc}</p>
                    <p className="text-blue-600 text-xs italic">{t.example}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Podcast prowadzi sluchaczy na Twoja strone — czy ona konwertuje?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy strony z wyraznym CTA i landing page ktore zamieniaja sluchaczy podcastu w klientow i subskrybentow.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Podcast Marketing co to jest</h2>
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
          heading="Zbudujemy strone dla Twojego podcastu i firmy"
          subheading="Strona, blog i landing page — infrastruktura do monetyzacji audytorium podcastu."
        />
      </Layout>
    </>
  );
}
