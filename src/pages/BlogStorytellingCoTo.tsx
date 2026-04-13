import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MessageSquare, Star, TrendingUp, Users } from "lucide-react";
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

export default function BlogStorytellingCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Storytelling — co to jest i jak uzywac w marketingu?" },
  ];

  const storyElements = [
    { element: "Bohater (Hero)", desc: "Twoj klient — nie Twoja firma. Klient ma marzenie lub problem. Firma jest mentorem (jak Yoda, nie Luke)." },
    { element: "Problem (Conflict)", desc: "Wewnetrzny (frustracja, strach), zewnetrzny (konkretny problem) i filozoficzny (dlaczego to jest niesprawiedliwe?)." },
    { element: "Przewodnik (Guide)", desc: "Twoja firma — pokazuje droge, ma empatie i autorytet. Nie jest glownym bohaterem historii." },
    { element: "Plan (Plan)", desc: "Konkretne kroki do rozwiazania problemu — czytelne, bez skomplikowania." },
    { element: "Wezwanie do dzialania (CTA)", desc: "Wyrazne wezwanie — co klient powinien zrobic teraz? Bez tego historia nie ma konca." },
    { element: "Sukces (Transformation)", desc: "Wizja jak bedzie wygladac zycie klienta po skorzystaniu z Twojego produktu. Kontrast z obecna sytuacja." },
  ];

  const faqItems = [
    {
      question: "Co to jest Storytelling w marketingu?",
      answer:
        "Storytelling w marketingu to technika komunikacji polegajaca na opowiadaniu historii zamiast prezentowania suchych faktow i cech produktu. Nauka stoi za storytellingiem: ludzki mozg przetwarza narracje 22x skuteczniej niz statystyki. Opowiesci aktywuja wiecej obszarow mozgu (emocionalne + kognitywne), co prowadzi do lepszego zapamietywania i wyzszego zaangazowania. W marketingu storytelling pojawia sie w: reklamach (Apple Think Different), opisach produktow (jak produkt zmienia zycie), about us (historia zalozenia firmy), case studies (historia klienta przed i po), social media (za kulisami, founder stories).",
    },
    {
      question: "Jak StoryBrand (framework Millera) dziala w marketingu?",
      answer:
        "StoryBrand (Donald Miller) to framework marketingowy oparty na 7 elementach narracji: 1) Bohater — klient ma pragnienie. 2) Problem — napotyka problem (zewnetrzny, wewnetrzny, filozoficzny). 3) Przewodnik — pojawia sie firma z empatia i autorytetem. 4) Plan — firma podaje konkretne kroki. 5) Wezwanie do dzialania — firma wzywa do dzialania. 6) Unikniecie poraki — co sie stanie jesli klient nie podejmie dzialania? 7) Sukces — wizja zycia klienta po rozwiazaniu problemu. Kluczowy insight StoryBrand: Twoja firma to Yoda, nie Luke Skywalker. Bohaterem jest klient, nie Twoja firma.",
    },
    {
      question: "Jak stosowac Storytelling na stronie internetowej?",
      answer:
        "Storytelling na stronie: Homepage: naglowek opisujacy problem i transformacje klienta (nie firmy), hero section z wizja zycia klienta po uzyciu produktu, social proof (case studies) jako dowod ze transformacja jest mozliwa. About us: historia zalozenia firmy skupiona na 'dlaczego' — jaki problem chcieliscie rozwiazac? Nie 'jestesmy liderem rynku' ale 'widzielismy ze [problem] i postanowilismy [rozwiazanie]'. Case studies / referencje: forma narracji — klient przed (problem), dzialania, klient po (wyniki). Blog: artykuly oparte na storytellingu angaz uja wiecej i sa czesciej udostepniane. Email marketing: opowiesci w emailach maja 2-3x wyzszy CTR niz suche informacje.",
    },
    {
      question: "Jak pisac stories ktore angaz uja?",
      answer:
        "Zasady skutecznego storytellingu: 1) Zacznij od konflktu — nie zacznij od poczatku chronologicznie. Zacznij od napiecia, problemu, pytania ktore przyciagnie uwage. 2) Badzin konkretny — 'obrotny ruch 28% w 6 miesiecy' lepiej niz 'wzrost sprzedazy'. Konkretne szczegoly buduja wiarygodnosc. 3) Emotuj — czytelnik musi czuc emocje bohatera (frustracje, niepewnosc, satysfakcje). 4) Uchron sie od moralizowania — historia sama mowi za siebie, nie dodawaj moralu na koncu. 5) Zamiesci wyrazne CTA — historia bez wezwania do dzialania jest rozrywka, nie marketingiem. 6) Pokazuj, nie opowiadaj — 'nasz produkt jest szybki' vs 'wdrozenie zajelo 2 godziny, nie 2 tygodnie'.",
    },
    {
      question: "Jakie sa przyklady dobrego storytellingu w reklamie?",
      answer:
        "Ikoniczne przyklady storytellingu marketingowego: Apple '1984' (Mac) — reklama Super Bowl zmieniajaca postrzeganie produktu przez opowiadanie historii. Dove 'Real Beauty' — opowiesci prawdziwych kobiet zamiast modeli, wywolanie emocji i dyskusji. Nike 'Just Do It' — historia przezwyciazenia barier i osiagniecia celu, sportowcy jako bohaterowie. Always '#LikeAGirl' — zmiana narracji o stereotypach plci, viral storytelling. Patagonia — opowiesci o ochronie srodowiska jako rdzen marki. Polskie przyklady: Allegro 'Co jest grane?' — emocjonalne reklamy o polaczeniu pokolen przez zakupy. Wszystkie cechuja: bohater, problem, transformacja i silne emocje.",
    },
    {
      question: "Jak storytelling zwieksza konwersje?",
      answer:
        "Wplyw storytellingu na konwersje: Zapamietywalnosc — fakty sa zapamietywane przez 5-10%, fakty w historii przez 65-70% (chip Heath, Made to Stick). Zaangazowanie — landing page z historia konwertuje o 30% lepiej niz bullet-point lista cechy (badania Unbounce). Email — opowiesci w emailach maja 2-3x wyzszy CTR. Sharing — emocjonalny content jest 3x czesciej udostepniany. Dlaczego dziala na konwersje: historia buduje zaufanie, tworzy emocjonalne polaczenie z marka, pomaga wyobrazic sobie 'zycie po produkcie'. Implementacja: zamien 'nasze uslugi' na case study w formie narracji, zamien 'funkcje' na 'co mozesz osiagnac', zamien 'o nas' na 'dlaczego powstalismy'.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Storytelling — co to jest i jak uzywac w marketingu? | fotz.pl"
        description="Storytelling co to jest — wyjasnamy czym jest storytelling w marketingu, framework StoryBrand, jak pisac stories ktore angaz uja i jak zwiekszaja konwersje."
        canonical="https://fotz.pl/blog/storytelling-co-to"

        keywords="Storytelling co to jest, Storytelling definicja, czym jest Storytelling, Storytelling w marketingu, Storytelling przykłady, jak działa Storytelling, Storytelling strategia"
      />
      <ArticleSchema
        title="Storytelling — co to jest i jak uzywac w marketingu?"
        description="Czym jest storytelling w marketingu, framework StoryBrand, jak stosowac na stronie, jak pisac angaz ujace stories i przykladny ikonicznych kampanii."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/storytelling-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4" /> Marketing i copywriting</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Storytelling — co to jest i jak uzywac w marketingu?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Storytelling to opowiadanie historii zamiast suchych faktow — mozg zapamietuje narracje 22x lepiej.
                Framework StoryBrand, techniki i przykladny.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Elementy narracji StoryBrand (Donald Miller)</h2>
              <div className="space-y-3 mb-6">
                {storyElements.map((e, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{idx + 1}</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{e.element}</p>
                      <p className="text-slate-600 text-xs">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-slate-900 rounded-lg p-5 mb-6">
                <p className="text-slate-400 text-xs mb-3">Przyklad zastosowania StoryBrand:</p>
                <div className="space-y-2 text-sm">
                  <p className="text-red-400">Zle: "Jestesmy agencja SEO z 10-letnim doswiadczeniem oferujaca kompleksowe uslugu pozycjonowania."</p>
                  <p className="text-green-400 mt-3">Dobrze: "Twoja firma traci klientow do konkurencji ktorzy wypadaja wyzej w Google? Pomagamy firmom MŚP podwajac ruch organiczny w 12 miesiecy — bez wydawania majatku na reklamy."</p>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Star className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zbudowac strone opartana na storytellingu?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Projektujemy strony oparte na frameworku StoryBrand — klient jako bohater, Twoja firma jako przewodnik.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Storytelling co to jest</h2>
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
          heading="Zaprojektujemy strone ktora opowiada Twoja historię"
          subheading="Copywriting, design i UX oparty na storytellingu — zamieniamy odwiedzajacych w klientow przez sile narracji."
        />
      </Layout>
    </>
  );
}
