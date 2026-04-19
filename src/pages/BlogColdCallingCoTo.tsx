import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Phone, TrendingUp, XCircle, Users } from "lucide-react";
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

export default function BlogColdCallingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Cold calling — co to jest i jak skutecznie dzwonić?" },
  ];

  const coldCallTips = [
    { title: "Przygotuj się przed rozmową", desc: "Sprawdź firmę, dowiedz się o branży, znajdź powód kontaktu. 2 minuty researchu = 3x wyższy sukces rozmowy." },
    { title: "Miej jasny cel rozmowy", desc: "Nie sprzedawaj przez telefon — celem cold calla jest uzyskanie spotkania lub demo. Jeden cel = jedno działanie." },
    { title: "Pierwsze 10 sekund decyduje", desc: "Przedstaw się, firmę i powód dzwonienia w jednym zdaniu. 'Dzwonię bo...'. Bez skryptów brzmiących jak skrypt." },
    { title: "Słuchaj więcej niż mówisz", desc: "Zadawaj otwarte pytania i słuchaj. Zrozumienie problemu klienta to podstawa każdej skutecznej sprzedaży." },
    { title: "Przygotuj się na obiekcje", desc: "'Nie mamy budżetu', 'Jestem zajęty', 'Wyślijcie email' — poznaj odpowiedzi na top 5 obiekcji swojej branży." },
    { title: "Follow-up to klucz", desc: "80% sprzedaży wymaga 5+ kontaktów. Większość handlowców rezygnuje po 1-2. Wyróżnij się wytrwałością." },
  ];

  const faqItems = [
    {
      question: "Co to jest cold calling?",
      answer:
        "Cold calling (zimne telefony) to technika sprzedaży polegająca na dzwonieniu do potencjalnych klientów, którzy nie oczekiwali kontaktu i wcześniej nie wyrazili zainteresowania ofertą. To forma outbound marketingu — wychodzisz do klienta, zamiast czekać aż sam przyjdzie. Przeciwieństwo cold callingu to inbound marketing, gdzie klient sam znajdzie Cię przez Google, social media lub rekomendacje.",
    },
    {
      question: "Czy cold calling jest legalny w Polsce?",
      answer:
        "Cold calling do firm (B2B) jest legalny, ale z ograniczeniami. Dzwonienie do konsumentów (B2C) wymaga ich wcześniejszej zgody na kontakt marketingowy (RODO + prawo telekomunikacyjne). Do firm możesz dzwonić w celach biznesowych — ale osoba po drugiej stronie słuchawki ma prawo żądać usunięcia danych i zakończenia kontaktu. W Polsce obowiązuje też zakaz dzwonienia do numerów z rejestru sprzeciwu (jeśli ktoś się tam wpisał).",
    },
    {
      question: "Jaka jest skuteczność cold callingu?",
      answer:
        "Statystyki cold callingu są trzeźwiące: współczynnik połączeń z decydentem: 15-25%, wskaźnik umówionych spotkań: 1-3% wszystkich wykonanych połączeń, wymagana liczba połączeń do zamknięcia dealu: 80-200+. Oznacza to że cold calling jest wymagający i kosztowny, ale przy odpowiedniej skali i target liście może być opłacalny. Najlepiej działa w kombinacji z innymi kanałami (email, LinkedIn).",
    },
    {
      question: "Czym różni się cold calling od cold mailingu?",
      answer:
        "Cold calling = bezpośredni telefon do potencjalnego klienta. Cold mailing = zimny email do potencjalnego klienta. Cold mailing jest mniej inwazyjny, łatwiej skalowalny i zostawia ślad pisemny — klient może odpowiedzieć gdy ma czas. Cold calling jest natychmiastowy i pozwala na dialog, ale wymaga odciągania uwagi rozmówcy. Najlepsza praktyka: cold mail jako pierwsze dotknięcie → cold call jako follow-up po 2-3 dniach.",
    },
    {
      question: "Jak napisać skrypt cold calla?",
      answer:
        "Dobry skrypt cold calla zawiera: 1) Powitanie i przedstawienie się (imię, firma, rola). 2) Powód dzwonienia — konkretny i personalny ('Widziałem że Wasza firma...', 'Pracujemy z firmami takimi jak...'). 3) Wartość propozycja — co możesz zrobić dla tej firmy w jednym zdaniu. 4) Pytanie kwalifikacyjne — czy to w ogóle pasuje do ich sytuacji? 5) Propozycja następnego kroku (spotkanie, demo, email z materiałami). Uwaga: skrypt to szkielet, nie tekst do czytania. Brzmi naturalnie, nie jak robot.",
    },
    {
      question: "Kiedy cold calling ma sens, a kiedy lepszy jest inbound?",
      answer:
        "Cold calling działa w B2B z długim cyklem sprzedaży, wysoką wartością kontraktu i wąską grupą docelową (np. sprzedaż software dla firm logistycznych — 200 firm w Polsce). Inbound marketing (SEO, content, LinkedIn) lepiej sprawdza się gdy: masz szerszą grupę docelową, dłuższy czas na budowanie kanału, chcesz skalować bez proporcjonalnego wzrostu kosztów ludzkich. Idealnie — oba: inbound generuje ruch i leady, cold calling dociera do klientów niedostępnych przez internet.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Cold calling — co to jest i jak skutecznie dzwonić? | fotz.pl"
        description="Cold calling co to jest — wyjaśniamy czym są zimne telefony, jak skutecznie dzwonić do klientów, legalność cold callingu i różnica między cold calling a…"
        canonical="https://fotz.pl/blog/cold-calling-co-to"

        keywords="Cold calling co to jest, Cold calling definicja, czym jest Cold calling, Cold calling przykłady, jak działa Cold calling, Cold calling znaczenie, Cold calling przewodnik"
      />
      <ArticleSchema
        title="Cold calling — co to jest i jak skutecznie dzwonić?"
        description="Czym jest cold calling, skuteczność zimnych telefonów, jak napisać skrypt i kiedy cold calling ma sens versus inbound marketing."
        datePublished="2025-04-08"
        dateModified="2025-04-09"
        url="https://fotz.pl/blog/cold-calling-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> Sprzedaż B2B</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Cold calling — co to jest i jak skutecznie dzwonić?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Cold calling to dzwonienie do potencjalnych klientów którzy nie oczekiwali kontaktu.
                Czy wciąż działa w 2025? Jak robić to skutecznie i co zamiast tego?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">6 zasad skutecznego cold callingu</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {coldCallTips.map((tip, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-slate-900 text-sm mb-1">{tip.title}</p>
                        <p className="text-slate-600 text-xs">{tip.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Cold calling vs inne kanały prospectingu</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Kanał</th>
                      <th className="text-left p-3 border border-slate-700">Zasięg / skala</th>
                      <th className="text-left p-3 border border-slate-700">Najlepszy dla</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { channel: "Cold calling", scale: "Niski (100-300 dziennie)", best: "Wąski target B2B, wysoka wartość kontraktu" },
                      { channel: "Cold mailing", scale: "Wysoki (1000+ dziennie)", best: "Szeroki target, B2B/SaaS, first touch" },
                      { channel: "LinkedIn outreach", scale: "Średni (50-100 dziennie)", best: "C-level, decydenci, B2B SaaS" },
                      { channel: "Inbound SEO", scale: "Brak limitu (pasywny)", best: "Długoterminowe, szeroka grupa docelowa" },
                      { channel: "Reklamy płatne", scale: "Brak limitu (budżet)", best: "Szybki wynik, testowanie oferty" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-blue-600">{row.channel}</td>
                        <td className="p-3 border border-slate-200 text-slate-700">{row.scale}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Users className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Szukasz alternatywy dla cold callingu?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Inbound marketing i SEO generują leady przez całą dobę — bez dzwonienia do obcych.
                </p>
                <Link to="/uslugi/marketing-b2b" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Marketing B2B — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Cold calling co to jest</h2>
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
          heading="Generuj leady bez zimnych telefonów"
          subheading="Inbound marketing, SEO i content — klienci sami znajdą Twoją firmę."
        />
      </Layout>
    </>
  );
}
