import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, User, BookOpen, TrendingUp, Target, FileText } from "lucide-react";
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

export default function BlogContentMarketingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Content marketing — co to jest?" },
  ];

  const faqItems = [
    {
      question: "Co to jest content marketing?",
      answer:
        "Content marketing to strategia polegająca na tworzeniu i dystrybucji wartościowych treści (artykułów, wideo, podcastów, e-booków) w celu przyciągnięcia i zaangażowania określonej grupy docelowej. Zamiast bezpośredniej reklamy, edukujesz i pomagasz potencjalnym klientom — co buduje zaufanie i w efekcie sprzedaż.",
    },
    {
      question: "Jak content marketing różni się od reklamy?",
      answer:
        "Reklama przerywa — content marketing przyciąga. Reklama płatna przestaje działać gdy skończy się budżet. Content marketing buduje aktywa (artykuły, wideo) które działają latami i generują organiczny ruch. ROI content marketingu rośnie z czasem, ROI reklamy jest natychmiastowy ale przemijający.",
    },
    {
      question: "Jakie formaty contentu działają najlepiej?",
      answer:
        "Zależy od branży i grupy docelowej: B2B: case studies, white papers, webinary, artykuły eksperckie. B2C: wideo, Reels/TikTok, infografiki, poradniki. E-commerce: recenzje, porównania, unboxing, tutoriale. SEO: długie artykuły (2000+ słów), poradniki, listicle. Nie ma jednej odpowiedzi — testuj i sprawdzaj co angażuje Twoją grupę.",
    },
    {
      question: "Ile czasu zajmuje zanim content marketing przyniesie efekty?",
      answer:
        "Content marketing to gra długoterminowa. Pierwsze wyniki organiczne z Google: 3-6 miesięcy. Budowanie autorytetu: 6-18 miesięcy. Pełne efekty: 12-24 miesiące. Jednak raz zainwestowany content pracuje latami. Po 2 latach dobrze zaplanowany content marketing kosztuje 62% mniej niż reklama przy 3x więcej leadach.",
    },
    {
      question: "Czy content marketing jest dla małych firm?",
      answer:
        "Tak — w wielu przypadkach to najlepsza strategia dla firm które nie mają budżetu na duże kampanie reklamowe. Wymagania: czas i wiedza branżowa (lub zlecenie agencji). Małe firmy mogą konkurować z dużymi przez wysoką jakość i specjalizację — Google nagradza wartościowe treści bez względu na rozmiar firmy.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Content marketing — co to jest i jak działa? | Blog fotz.pl"
        description="Content marketing co to — definicja, rodzaje, jak zacząć i ile kosztuje. Dlaczego content marketing to najlepsza strategia długoterminowa. Przykłady i wskazówki."
        canonical="https://fotz.pl/blog/content-marketing-co-to"

        keywords="Content marketing co to jest, Content marketing definicja, czym jest Content marketing, Content marketing w marketingu, Content marketing przykłady, jak działa Content marketing, Content marketing strategia"
      />
      <ArticleSchema
        title="Content marketing — co to jest i dlaczego działa?"
        description="Kompletny przewodnik po content marketingu — definicja, formaty, jak zacząć i mierzyć wyniki."
        datePublished="2024-12-01"
        dateModified="2025-02-15"
        url="https://fotz.pl/blog/content-marketing-co-to"
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
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> Zespół fotz.pl</span>
                <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> Marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Content marketing — co to jest i jak naprawdę działa?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                "Content is king" — to zdanie w marketingu internetowym powtarza się od lat. Ale czym właściwie jest
                content marketing, jak go zacząć i dlaczego jest skuteczniejszy od tradycyjnej reklamy?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Definicja content marketingu</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Content marketing to strategiczne podejście do marketingu polegające na tworzeniu i dystrybucji wartościowych,
                istotnych i spójnych treści w celu przyciągnięcia i zatrzymania precyzyjnie określonej grupy docelowej,
                a w konsekwencji — napędzania zyskownych działań klientów.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Innymi słowy: zamiast mówić "kup mój produkt", content marketing mówi "oto wiedza która Ci pomoże".
                Zaufanie budowane przez wartościowe treści przekłada się na klientów, którzy sami przychodzą do Ciebie.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Rodzaje content marketingu</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: FileText, title: "Blog i artykuły", desc: "Najczęstsza forma. Buduje pozycje SEO, edukuje i przyciąga organiczny ruch przez miesiące i lata." },
                  { icon: BookOpen, title: "E-booki i white papers", desc: "Wartościowe materiały PDF — świetne jako lead magnet. Budują autorytet ekspercki." },
                  { icon: Target, title: "Wideo i podcasty", desc: "Rosnący format. YouTube, TikTok, Spotify — docierają do szerszego grona niż tekst." },
                  { icon: TrendingUp, title: "Case studies", desc: "Najskuteczniejszy format B2B — 85% decydentów B2B czyta case studies przed zakupem." },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Dlaczego content marketing działa?</h2>
              <div className="space-y-3 mb-6">
                {[
                  "Generuje 3x więcej leadów niż outbound marketing przy 62% niższym koszcie",
                  "Buduje zaufanie — klienci którzy czytają Twoje treści kupują 6x chętniej",
                  "Działa 24/7 — artykuł napisany 2 lata temu nadal przyciąga ruch",
                  "Poprawia SEO — Google nagradza wartościowe, regularne treści",
                  "Redukuje koszt sprzedaży — klienci przychodzą już wyedukowani",
                  "Buduje bazę własną — subskrybentów, obserwujących, community",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak zacząć z content marketingiem?</h2>
              <div className="space-y-4 mb-6">
                {[
                  { step: "1", title: "Zdefiniuj grupę docelową", desc: "Persona klienta — kto to? Jakie ma problemy? Czego szuka w Google? Jakie pytania zadaje?" },
                  { step: "2", title: "Zrób research słów kluczowych", desc: "Znajdź frazy których szuka Twoja grupa. Google Search Console, Ahrefs, Semrush — do tego służą." },
                  { step: "3", title: "Stwórz calendar treści", desc: "Plan publicacji na 3 miesiące. Regularność jest kluczowa — lepiej 2 artykuły miesięcznie niż raz 10." },
                  { step: "4", title: "Produkuj wartościowe treści", desc: "Jakość ważniejsza od ilości. Odpowiadaj na prawdziwe pytania, dawaj praktyczne wskazówki." },
                  { step: "5", title: "Dystrybucja i promocja", desc: "Social media, email newsletter, linki wewnętrzne. Treść nie dotrze do nikogo sama z siebie." },
                  { step: "6", title: "Mierz i optymalizuj", desc: "GA4, GSC — sprawdzaj co działa. Podwajaj treści które rankują, odświeżaj te które tracą pozycje." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz strategii content marketingu?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Budujemy strategie oparte na danych Ahrefs i GSC. Tworzymy treści które rankują i konwertują.
                </p>
                <Link to="/kontakt" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Porozmawiajmy o Twojej strategii <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Content marketing</h2>
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

        {/* Related */}
        <FadeInView>
          <section className="py-10 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Powiązane artykuły</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { title: "Copywriting — co to jest?", href: "/blog/copywriting-co-to" },
                  { title: "SEO — pozycjonowanie stron internetowych", href: "/uslugi/pozycjonowanie-stron-internetowych" },
                  { title: "Marketing internetowy dla firm", href: "/uslugi/marketing-internetowy" },
                  { title: "Reklama w Google — jak działa?", href: "/blog/reklama-w-google" },
                ].map((post, idx) => (
                  <Link key={idx} to={post.href} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group">
                    <ArrowRight className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="text-slate-700 text-sm">{post.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        <ContactSection
          heading="Zacznij content marketing dla swojej firmy"
          subheading="Strategia, produkcja treści, SEO i dystrybucja. Zaczynamy od audytu i planu."
        />
      </Layout>
    </>
  );
}
