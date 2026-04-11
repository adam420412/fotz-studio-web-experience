import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Star, TrendingUp, Instagram } from "lucide-react";
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

export default function BlogInfluencerMarketingCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Influencer marketing — co to jest? Wplywowi twórcy" },
  ];

  const influencerTypes = [
    { typ: "Nano-influencer", followesi: "1 000 - 10 000", engagement: "5-10%", opis: "Bardzo wysoka wiarygodnosc, niszowi eksperci. Cena: 100-2 000 zl za post.", kolor: "bg-green-100 border-green-200 text-green-800" },
    { typ: "Micro-influencer", followesi: "10 000 - 100 000", engagement: "3-5%", opis: "Wysoki engagement, specjalizacja branyzowa. Cena: 500-15 000 zl za post.", kolor: "bg-blue-100 border-blue-200 text-blue-800" },
    { typ: "Macro-influencer", followesi: "100 000 - 1 000 000", engagement: "1-3%", opis: "Duzy zasieg, rozpoznawalna twarz. Cena: 5 000-100 000 zl za post.", kolor: "bg-purple-100 border-purple-200 text-purple-800" },
    { typ: "Mega-influencer / celebrity", followesi: "Powyzej 1 000 000", engagement: "0.5-1%", opis: "Ogolnopolski lub globalny zasieg. Cena: 50 000-500 000+ zl za kampanie.", kolor: "bg-yellow-100 border-yellow-200 text-yellow-800" },
  ];

  const faqItems = [
    {
      question: "Co to jest influencer marketing?",
      answer:
        "Influencer marketing to forma marketingu, w ktorej marki wspolpracuja z osobami majacymi wplywy w mediach spolecznosciowych (influencerami) w celu dotarcia do ich spolecznosci. Influencer (wplywowy tworca) to osoba z lojalna i zaangazowana audiencja na platformach takich jak Instagram, YouTube, TikTok, LinkedIn czy Twitch. Zamiast klasycznych reklam (banner, tv spot) — marka placi influencerowi za prezentacje produktu w autentyczny sposob, ktory rezonuje z jego audinecy. Skutecznosc: 63% konsumentow ufa rekomendacjom influencerow bardziej niz reklamom marek. ROI z influencer marketingu: srednio 5,78 USD na kazdy wydany USD (Influencer Marketing Hub 2024).",
    },
    {
      question: "Jak dobrac odpowiedniego influencera?",
      answer:
        "Kryteria wyboru influencera: Dopasowanie (Brand fit): czy influencer pasuje do wartosci i estetyki marki? Audience match: czy jego audiencja to Twoi potencjalni klienci (demografia, zainteresowania, geolokalizacja)? Engagement rate: wazniejszy niz liczba followersow — engagement ponizej 1% to slaby wynik. Autentycznosc: czy wspolpracuje z wieloma markami jednoczesnie? Czy promuje tez konkurencje? Jakosc tresci: sprawdz poprzednie posty sponsorowane — czy sa wiarygodne? Historia wspolpracy: opinie innych marek, przypadki kontrowersji. Narzedzia do research: HypeAuditor (analiza audiencji i engagement), Brand24, Upfluence, NinjaOutreach. Polska platforma: WhitePress, Sarcon (influencer marketplace).",
    },
    {
      question: "Ile kosztuje wspolpraca z influencerem?",
      answer:
        "Stawki influencerow w Polsce (2024): Nano (1k-10k): 100-2 000 zl za post na IG / 300-3 000 zl za film YT. Micro (10k-100k): 500-15 000 zl za post na IG / 2 000-20 000 zl za film YT. Macro (100k-1M): 5 000-100 000 zl za post. Mega (1M+): 50 000-500 000+ zl za kampanie. TikTok: zazwyczaj 30-50% tanszy niz Instagram przy podobnym zasieg. LinkedIn B2B: stawki zblizone do IG, ale mniejszy rynek influencerow. Modele wspolpracy: flat fee (stala kwota), pay-per-performance (% od sprzedazy), barterowy (produkt za post), ambasador marki (dlugoterminowa umowa). Jak negocjowac: zacznij od nano i micro — cz sprawdz efekty przed inwestycja w macro.",
    },
    {
      question: "Jak mierzyc efekty influencer marketingu?",
      answer:
        "Metryki influencer marketingu: Zasiag (Reach): ile osob zobaczyl post/film. Wyswietlenia (Impressions): ile razy tresc zostala wyswietlona (jedna osoba moze obejrzec kilka razy). Engagement: liczba polubien, komentarzy, udostepnien, zapisow. Engagement rate = (zaangazowania / followesi) x 100%. Klikniecia (CTR): jezeli influencer podaje link w bio lub swipe-up. Konwersje: zakupy z kodu rabatowego influencera lub linku UTM. Wzrost obserwujacych: przyrost follwersow marki w czasie kampanii. CPM (Cost per Mille): koszt za 1000 wyswietlen. CPE (Cost per Engagement): koszt za jedno zaangazowanie. Narzedzia: UTM parametry w linkach, dedykowane kody rabatowe dla kazdego influencera, Google Analytics 4.",
    },
    {
      question: "Jak wdrozyc kampanie influencer marketingową krok po kroku?",
      answer:
        "Kroki kampanii influencer marketing: 1) Zdefiniuj cel: swiadomosc marki, sprzedaz, budowanie spolecznosci. 2) Okresl budzet: minimal 2 000-5 000 zl na mala kampanie testowa. 3) Zidentyfikuj influencerow — uzyj narzedzi lub manualnie (szukaj po hashtagu). 4) Zweryfikuj influencera — analiza audiencji, engagement, autentycznosc. 5) Wyslij brief — opisz co chcesz, jakie wartosci marki, KPI. 6) Przygotuj umowe — zakres, termin, prawa do tresci, FCA compliance. 7) Dostarczy produkt lub brief. 8) Influencer tworzy tresc — zapewnij freedom kreatywny (wyglada autentyczniej). 9) Monitoruj wyniki w czasie kampanii. 10) Mierz ROI po kampanii — kody, UTM, konwersje.",
    },
    {
      question: "Jaka jest roznica miedzy influencer marketingiem a reklama sponsorowana?",
      answer:
        "Influencer marketing vs sponsorowana reklama (Paid Social): Reklama sponsorowana (Meta Ads, Google Ads) — marka kontroluje kreacje, targetowanie i budzet. Skalowalna, przewidywalna, szybka. Ale: mniej autentyczna, rosnaca slepota reklamowa. Influencer marketing — tworca kontentuje autentycznie, audiencja ufa twórcy. Wyzszy engagement, wiarygodnosc, mozliwosc dotarcia do niszowych spolecznosci. Ale: mniejsza kontrola, trudniejszy pomiar ROI, ryzyko kontrowersji wokol influencera. Najlepsza strategia: polacz oba — influencer tworzy content, a Ty wzmacniasz go platna reklama (tzw. branded content / boosting). Mozesz targetowac reklame do fanow influencera na Facebooku.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Influencer marketing — co to jest? Wplywowi tworcy | fotz.pl"
        description="Influencer marketing co to jest — wyjasnamy czym jest marketing z wplywowymi tworcami, typy influencerow, koszty, mierzenie ROI i jak wdrozyc kampanie."
        canonical="https://fotz.pl/blog/influencer-marketing-co-to"
      />
      <ArticleSchema
        title="Influencer marketing — co to jest? Wplywowi tworcy"
        description="Czym jest influencer marketing, typy influencerow (nano-mega), koszty wspolpracy, metryki, jak dobrac influencera i jak wdrozyc kampanie."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/influencer-marketing-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Star className="w-4 h-4" /> Social media marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Influencer marketing — co to jest i czy sie oplaca?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Influencer marketing to wspolpraca z wplywowymi tworcy w mediach spolecznosciowych.
                Typy influencerow, koszty, ROI i jak przeprowadzic skuteczna kampanie.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Typy influencerow — zasieg i engagement</h2>
              <div className="space-y-3 mb-6">
                {influencerTypes.map((i, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border ${i.kolor}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm">{i.typ}</span>
                      <span className="text-sm font-medium">{i.followesi} followersow</span>
                    </div>
                    <div className="flex items-center gap-4 mb-1">
                      <span className="text-xs">Engagement: {i.engagement}</span>
                    </div>
                    <p className="text-xs opacity-80">{i.opis}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Strona docelowa influencer kampanii musi konwertowac</p>
                <p className="text-blue-700 text-sm mb-3">
                  Ruch od influencera traci sie na zlej stronie. Projektujemy landing page'e ktore zamieniaja ruch w klientow.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Influencer marketing co to jest</h2>
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
          heading="Strona www ktora przeksztalca ruch influencerow w klientow"
          subheading="Kampania influencer + landing page + retargeting = kompletny system marketingowy."
        />
      </Layout>
    </>
  );
}
