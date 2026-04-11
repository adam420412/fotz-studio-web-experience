import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Zap, FileText, Users, TrendingUp } from "lucide-react";
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

export default function BlogLeadMagnetCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Lead magnet — co to jest i jak tworzyć skuteczne materiały?" },
  ];

  const leadMagnetTypes = [
    { icon: FileText, name: "PDF / Ebook", desc: "Poradnik, raport, przewodnik. Działa gdy odpowiada na konkretne pytanie (np. 'Jak obniżyć podatek — checklista dla przedsiębiorcy')." },
    { icon: CheckCircle2, name: "Checklista / Szablon", desc: "Praktyczne narzędzie do pobrania. Szybkie w użyciu, duża percepcja wartości. Np. 'Checklista SEO przed publikacją wpisu'." },
    { icon: Zap, name: "Mini kurs / Wideo", desc: "Seria emaili lub lekcji video. Angażujący format, buduje relację przez kilka dni. Wyższy próg wejścia = leady wyższej jakości." },
    { icon: TrendingUp, name: "Kalkulator / Narzędzie", desc: "Interaktywne narzędzie (np. kalkulator oszczędności, wyceny). Wysoka unikalność, trudniejszy do skopiowania." },
    { icon: Users, name: "Webinar / Event online", desc: "Bezpłatne spotkanie online. Buduje relację i zaufanie. Kwalifikuje leady — kto przyszedł na webinar, jest zainteresowany." },
    { icon: ArrowRight, name: "Bezpłatna konsultacja / Audyt", desc: "Dla usług B2B — 30-minutowe spotkanie lub darmowy przegląd. Najcieplej kwalifikowane leady, ale wymagają Twojego czasu." },
  ];

  const faqItems = [
    {
      question: "Co to jest lead magnet?",
      answer:
        "Lead magnet (magnes na leady) to bezpłatna wartość oferowana użytkownikowi w zamian za jego dane kontaktowe — zazwyczaj adres email. Przykłady: darmowy ebook, checklista, mini kurs, webinar, kalkulator, szablon. Lead magnet jest pierwszym krokiem lejka sprzedażowego — przyciągasz potencjalnych klientów wartościowym materiałem, a oni dołączają do Twojej listy mailingowej.",
    },
    {
      question: "Jak stworzyć skuteczny lead magnet?",
      answer:
        "Zasady skutecznego lead magnetu: 1) Rozwiązuje konkretny problem jednej grupy docelowej. 2) Dostarcza wartość szybko (checklista > 50-stronicowy ebook). 3) Tytuł jasno komunikuje korzyść ('7 błędów które niszą SEO Twojej strony'). 4) Pasuje do Twojej oferty głównej — ktoś zainteresowany checklistą SEO to potencjalny klient agencji SEO. 5) Jest łatwy do konsumpcji (PDF, video <15 min). 6) Wymaga podania tylko emaila — każde dodatkowe pole redukuje konwersję.",
    },
    {
      question: "Gdzie umieścić lead magnet na stronie?",
      answer:
        "Miejsca do promowania lead magnetu: landing page dedykowany (najlepsza konwersja), pop-up exit-intent (wyskakuje gdy użytkownik próbuje opuścić stronę), sticky bar na górze strony, formularz w artykule bloga powiązanym tematycznie, sidebar bloga, strona 404 ('zostań mimo wszystko — pobierz bezpłatnie'). Pop-up exit-intent konwertuje 2-4% opuszczających — nie denerwuje, bo pojawia się tylko gdy i tak wychodzą.",
    },
    {
      question: "Ile emaili można zebrać przez lead magnet?",
      answer:
        "Ilość leadów zależy od ruchu na stronie i konwersji landing page'a (2-15%). Przy 1000 odwiedzin/mies. i konwersji 5% = 50 leadów miesięcznie. Jeśli zainwestujesz w ruch płatny (Facebook Lead Ads, Google Ads) lub SEO, możesz skalować. Najważniejsza metryka nie jest jednak ilość leadów, ale ich jakość — czy otwierają Twoje maile i finalnie kupują?",
    },
    {
      question: "Co zrobić po pobraniu lead magnetu?",
      answer:
        "Po zapisie na lead magnet uruchom sekwencję emaili (welcome sequence): 1) Email z linkiem do pobrania (natychmiast). 2) Email z dodatkową wartością powiązaną z lead magnetem (po 2 dniach). 3) Email edukacyjny z case study lub historią sukcesu (po 4 dniach). 4) Email z lekką ofertą główną lub zaproszeniem do rozmowy (po 7 dniach). Sekwencja welcome ma 3-4x wyższy open rate niż regularne newslettery — nie marnuj tego momentu.",
    },
    {
      question: "Jakie narzędzia użyć do lead magnetu?",
      answer:
        "Narzędzia do obsługi lead magnetu: formularz i email lista — Mailchimp, MailerLite, GetResponse (mają bezpłatne plany). Landing page — Unbounce, Landingi, lub strona na WordPress. PDF/ebook — Canva (bezpłatne), Adobe InDesign. Webinary — Zoom, Demio, ClickMeeting. Exit-intent pop-up — Sumo, OptinMonster. Dla WordPress świetnie sprawdza się Elementor (landing) + MailerLite (email) = zero kosztów na start.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Lead magnet — co to jest i jak stworzyć skuteczny? | fotz.pl"
        description="Lead magnet co to jest — wyjaśniamy jak działa magnes na leady, rodzaje lead magnetów, jak je tworzyć i promować oraz jakie narzędzia używać."
        canonical="https://fotz.pl/blog/lead-magnet-co-to"
      />
      <ArticleSchema
        title="Lead magnet — co to jest i jak tworzyć skuteczne materiały?"
        description="Czym jest lead magnet, rodzaje (ebook, checklista, webinar), jak tworzyć skuteczne magnesy na leady i jakie narzędzia email marketing użyć."
        datePublished="2025-04-08"
        dateModified="2025-04-09"
        url="https://fotz.pl/blog/lead-magnet-co-to"
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
                <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Email marketing i leady</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Lead magnet — co to jest i jak tworzyć skuteczny?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Lead magnet to bezpłatna wartość (ebook, checklista, webinar) w zamian za email.
                Jak stworzyć magnes który przyciągnie właściwych klientów?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Rodzaje lead magnetów — co działa?</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {leadMagnetTypes.map((type, idx) => {
                  const Icon = type.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{type.name}</h3>
                      <p className="text-slate-600 text-xs">{type.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak wygląda lejek z lead magnetem?</h2>
              <div className="space-y-3 mb-6">
                {[
                  { step: "1", title: "Użytkownik trafia na stronę", desc: "Przez Google (SEO), reklamę, social media lub rekomendację. Widzi propozycję lead magnetu." },
                  { step: "2", title: "Pobiera lead magnet", desc: "Wypełnia formularz (tylko email) → dostaje link do pobrania. Trafia na Twoją listę mailingową." },
                  { step: "3", title: "Otrzymuje welcome sequence", desc: "Seria 4-7 emaili edukacyjnych → budują zaufanie, pokazują ekspertyzę, delikatnie prowadzą do oferty." },
                  { step: "4", title: "Staje się klientem", desc: "Po budowaniu zaufania część subskrybentów kupuje. Reszta pozostaje na liście do kolejnej kampanii lub promocji." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="w-7 h-7 bg-slate-800 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{item.step}</span>
                    <div>
                      <p className="font-bold text-slate-900 text-sm mb-1">{item.title}</p>
                      <p className="text-slate-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz strategii email marketingu z lead magnetem?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Zaprojektujemy lead magnet, landing page i sekwencję emaili dla Twojego biznesu.
                </p>
                <Link to="/uslugi/email-marketing" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Email marketing — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Lead magnet co to jest</h2>
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
          heading="Zbuduj listę mailową z pomocą lead magnetu"
          subheading="Strategia, landing page, welcome sequence — gotowy lejek pozyskiwania leadów."
        />
      </Layout>
    </>
  );
}
