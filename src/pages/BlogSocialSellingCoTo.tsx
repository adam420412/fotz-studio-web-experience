import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, MessageSquare, TrendingUp, Star } from "lucide-react";
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

export default function BlogSocialSellingCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Social Selling — co to jest i jak sprzedawac przez social media?" },
  ];

  const ssiComponents = [
    { component: "Profesjonalna marka (Professional Brand)", desc: "Kompletny profil LinkedIn, regularne posty wartosciowe, eksperckie artykuly i komentarze. Klienci musza wierzyc ze jestes ekspertem.", score: "Maks 25 pkt" },
    { component: "Znajdz wlasciwych ludzi (Find the Right People)", desc: "Uzycie LinkedIn Search i Sales Navigator do wyszukiwania decydentow i ICP. Aktywne poszukiwanie kontaktow.", score: "Maks 25 pkt" },
    { component: "Angagazuj przez insights (Engage with Insights)", desc: "Udostepnianie tresci bransowych, komentowanie postow potencjalnych klientow, dzielenie sie wiedza.", score: "Maks 25 pkt" },
    { component: "Buduj relacje (Build Relationships)", desc: "Rozszerzanie sieci kontaktow o decydentow, interakcje i budowanie zaufania przez czas.", score: "Maks 25 pkt" },
  ];

  const faqItems = [
    {
      question: "Co to jest Social Selling?",
      answer:
        "Social Selling to strategia sprzedazowa polegajaca na uzywaniu mediow spolecznosciowych (glownie LinkedIn, ale tez Twitter/X, Instagram) do wyszukiwania potencjalnych klientow, budowania z nimi relacji, angaz owania ich przez wartosciowy content i ostatecznie do sprzedazy — bez tradycyjnego cold callingu. Social selling nie jest spamowaniem wiadomosciami o produkcie — to budowanie zaufania przez czas. Kluczowe zasady: wiecej wartosci niz promocji (zasada 80/20 — 80% edukacja, 20% sprzedaz), dlugosfalowe myslenie o relacjach, personalizacja kontaktu. LinkedIn SSI (Social Selling Index) to oficjalna metryka LinkedIn mierzaca zaawansowanie social sellingu (skala 0-100).",
    },
    {
      question: "Czy Social Selling jest skuteczny?",
      answer:
        "Statystyki social sellingu: Sprzedawcy z wysokim SSI (Social Selling Index) zamykaja o 45% wiecej szans niz z niskim (LinkedIn). 78% sprzedawcow uzywajacych social media sprzedaje wiecej niz ci ktorzy go nie uzywaja. 75% kupujacych B2B uzywa social media do podejmowania decyzji zakupowych. Sprzedawcy social selling sa 51% bardziej prawdopodobni do osiagniecia targetu. Dlaczego dziala: klienci B2B robia research online zanim skontaktuja sie ze sprzedawca. Bedac widocznym i wartosciowym w ich feed — budujesz zaufanie i rozpoznawalnosc przed pierwszym kontaktem.",
    },
    {
      question: "Jak zaczac Social Selling na LinkedIn?",
      answer:
        "Kroki do startu Social Selling na LinkedIn: 1) Zoptymalizuj profil — profesjonalne zdjecie, headline skupiony na wartosci (nie 'Sales Manager w Firmie X' ale 'Pomagam firmom SaaS zwiekszyc revenue przez [specjalizacja]'), sekcja About skupiona na kliencie. 2) Zdefiniuj ICP — kogo szukasz? Stanowisko, branaza, wielkosc firmy, lokalizacja. 3) Zacznij tworzyc content — 2-3 posty tygodniowo o problemach Twojego ICP, case studies, insights branzy. 4) Angaz uj innych — komentuj posty potencjalnych klientow, dodawaj wartoscowe uwagi (nie 'Swietny post!'). 5) Buduj siec — wysylaj zaproszenia z personalizowanym notesem do ludzi z ICP. 6) Inicjuj rozmowy — dopiero po budowaniu relacji, nie 'Hej, mam oferte!'.",
    },
    {
      question: "Czym rozni sie Social Selling od Cold Outreach?",
      answer:
        "Cold Outreach (email/call): Kontaktujesz sie z osoba ktora Cie nie zna i nie oczekuje kontaktu. Wysoka liczba kontaktow, niski reply rate. Skupia sie na szybkim pozyskaniu spotkania. Social Selling: Budujesz znajomosc przez czas — potencjalny klient widzi Twoje posty, czyta artykuly, komentuje. Kiedy sie kontaktujesz — nie jestes juz obcy (warm outreach). Nizszy volume, wyzszy reply rate, lepsze relacje. Najlepsze podejscie: polacz oba — uzyj Social Selling do rozgrzania kontaktu (engage z postami, obserwuj profil), a nastepnie wyslij spersonalizowany cold email lub InMail do juz 'rozmrozonych' kontaktow.",
    },
    {
      question: "Co to jest LinkedIn Social Selling Index (SSI)?",
      answer:
        "LinkedIn SSI (Social Selling Index) to wskaznik mierzacy skutecznosc social sellingu w skali 0-100. Sklada sie z 4 komponentow po 25 punktow: 1) Professional Brand — jak kompletny i aktywny jest Twoj profil. 2) Find the Right People — jak efektywnie szukasz decydentow. 3) Engage with Insights — jak czesto angaz ujesz sie z contentem bransowym. 4) Build Relationships — jak szybko rozszerzasz siec kontaktow. Srednie SSI wedlug LinkedIn: Average: 26/100. SSI 70+: sprzedawcy osiagaja o 45% wiecej szans. Jak sprawdzic SSI: linkedin.com/sales/ssi — darmowy dostep dla uzytkownikow LinkedIn.",
    },
    {
      question: "Jak mierzyc efektywnosc Social Selling?",
      answer:
        "Metryki Social Selling: Aktywnosc: liczba postow tygodniowo, zaangazowanie (likes/komentarze/share), wzrost sieci kontaktow w ICP. LinkedIn SSI score — regularnie monitoruj zmiany. Zasieg: profile views (ile osob ogladalo Twoj profil), post impressions, followersi. Pipeline: liczba warm leadow z LinkedIn, meetings booked via LinkedIn, opps created via social. Revenue: deals won influenced by LinkedIn, deal size vs tradycyjny outreach, win rate dla LinkedIn-sourced deals. Trudnosc: atrybucja social selling jest trudna — uzytkownik moze zobaczyc Twoje posty i potem skontaktowac sie przez inne kanaly.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Social Selling — co to jest i jak sprzedawac przez social media?"
        description="Social Selling co to jest — wyjasnamy czym jest social selling na LinkedIn, jak zaczac, LinkedIn SSI, roznica vs cold outreach i metryki social selling."
        canonical="https://fotz.pl/blog/social-selling-co-to"

        keywords="Social Selling co to jest, Social Selling definicja, czym jest Social Selling, Social Selling w marketingu, Social Selling przykłady, jak działa Social Selling, Social Selling strategia"
      />
      <ArticleSchema
        title="Social Selling — co to jest i jak sprzedawac przez social media?"
        description="Czym jest Social Selling, jak zaczac na LinkedIn, SSI (Social Selling Index), roznica vs cold outreach i jak mierzyc efektywnosc."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/social-selling-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Sprzedaz B2B</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Social Selling — co to jest i jak sprzedawac przez LinkedIn?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Social Selling to budowanie relacji z potencjalnymi klientami przez social media zanim zaczniemy sprzedawac.
                LinkedIn SSI, strategie i metryki.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">LinkedIn Social Selling Index (SSI) — 4 komponenty</h2>
              <div className="space-y-3 mb-6">
                {ssiComponents.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{idx + 1}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-bold text-slate-900 text-sm">{c.component}</p>
                        <span className="text-blue-600 text-xs">{c.score}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Social Selling prowadzi do strony — czy Twoja strona konwertuje?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Kiedy prospect klika Twoj profil LinkedIn i przechodzi na strone — ona musi konwertowac. Tworzymy strony gotowe na ruch z social.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Social Selling co to jest</h2>
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
          heading="Zadbamy o strone ktora konwertuje leady z LinkedIn"
          subheading="Landing page, strona ofertowa i portfolio — fundament skutecznego social sellingu B2B."
        />
      </Layout>
    </>
  );
}
