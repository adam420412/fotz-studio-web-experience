import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Zap,
  BarChart3,
  Users,
  Target,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function EmailMarketing() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Email marketing" },
  ];

  const services = [
    { icon: Mail, title: "Newslettery", desc: "Regularna komunikacja z bazą — aktualności, promocje, wartościowe treści. Buduje relacje i stały ruch." },
    { icon: Zap, title: "Automation — welcome series", desc: "Sekwencja powitalna dla nowych subskrybentów. Buduje zaangażowanie od pierwszego kontaktu." },
    { icon: Target, title: "Drip campaigns", desc: "Seria emaili wysyłanych automatycznie po określonym czasie lub akcji użytkownika." },
    { icon: Users, title: "Lead nurturing", desc: "Pielęgnowanie leadów przez serię wartościowych emaili aż do gotowości do zakupu." },
    { icon: MessageSquare, title: "Transakcyjne emaile", desc: "Potwierdzenia zamówień, powiadomienia o statusie, resetowanie hasła — konfigurujemy i optymalizujemy." },
    { icon: TrendingUp, title: "Reaktywacja bazy", desc: "Kampanie do nieaktywnych subskrybentów — win-back i czyszczenie bazy dla lepszej dostarczalności." },
  ];

  const tools = ["Mailchimp", "ActiveCampaign", "GetResponse", "Brevo (Sendinblue)", "Klaviyo", "HubSpot", "Mailerlite"];

  const packages = [
    {
      title: "Email Basic",
      price: "799 zł/mies.",
      desc: "Regularne newslettery",
      features: [
        "Do 4 newsletterów/mies.",
        "Projekt szablonu email",
        "Copywriting i grafiki",
        "Segmentacja listy",
        "Raport otwarć i kliknięć",
      ],
    },
    {
      title: "Email Growth",
      price: "1 699 zł/mies.",
      desc: "Newsletter + automation",
      features: [
        "Do 8 emaili/mies.",
        "Welcome sequence",
        "Porzucony koszyk (e-com)",
        "A/B testy tematów",
        "Segmentacja zaawansowana",
        "Optymalizacja dostarczalności",
      ],
      highlight: true,
    },
    {
      title: "Email Pro",
      price: "2 999+ zł/mies.",
      desc: "Pełna automatyzacja email",
      features: [
        "Unlimited emaili",
        "Pełna marketing automation",
        "Integracja z CRM",
        "Lead scoring",
        "Personalizacja dynamiczna",
        "Dedykowany strateg email",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Czy email marketing nadal działa w 2025?",
      answer:
        "Tak — email marketing ma najwyższy ROI ze wszystkich kanałów marketingowych: 36-42 zł zwrotu na każde 1 zł inwestycji (wg DMA). Otwieralność emaili w Polsce to 20-35%, znacznie wyżej niż zasięg organiczny w social media. Email to kanał własny — nie zależy od algorytmów platform.",
    },
    {
      question: "Jak zbudować bazę mailingową?",
      answer:
        "Metody budowania bazy: lead magnet (e-book, checklist, darmowy kurs), pop-up na stronie, formularz w stopce, contest/konkurs, lista zakupów z newsletterem, checkout opt-in w sklepie. Kupowanie baz jest nielegalne (RODO) i nieskuteczne. Organicznie zbudowana baza to 5-10x wyższe wyniki.",
    },
    {
      question: "Jaka powinna być otwieralność emaili?",
      answer:
        "Branżowe benchmarki dla Polski: e-commerce 20-25%, B2B 25-35%, NGO/edukacja 35-45%. Jeśli Open Rate jest poniżej 15% — problem z jakością bazy lub tematami. Kluczowe do poprawy: temat emaila, nadawca, czas wysyłki, segmentacja, higiena bazy.",
    },
    {
      question: "Jakie narzędzie do email marketingu wybrać?",
      answer:
        "Małe firmy/start: Mailerlite (najtańszy, prosty). Średnie e-commerce: Klaviyo (najlepszy dla sklepów) lub Mailchimp. B2B i CRM: HubSpot lub ActiveCampaign. Polskie firmy: GetResponse lub Freshmail. Wybór zależy od budżetu, integracji i potrzeby automatyzacji.",
    },
    {
      question: "Czym jest email automation?",
      answer:
        "Email automation to automatyczne wysyłanie emaili na podstawie zachowań użytkownika lub czasu. Przykłady: welcome series (po zapisie), porzucony koszyk (2h po opuszczeniu koszyka), drip campaign (co 3 dni przez miesiąc), win-back (po 90 dniach nieaktywności). Raz ustawiony, działa 24/7.",
    },
    {
      question: "Jak unikać spamu w email marketingu?",
      answer:
        "Podstawy antyspamowe: używaj double opt-in, uwierzytelnij domenę (SPF, DKIM, DMARC), regularnie czyść bazę z nieaktywnych, nie kupuj baz, unikaj spamowych słów w tematach (GRATIS, KLIKNIJ TERAZ), zawsze dodawaj link do wypisu, monitoruj wskaźnik odrzuceń (bounces) i complaints.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Email marketing dla firm — automation i newslettery | fotz.pl"
        description="Email marketing — newslettery, automation, lead nurturing dla firm. Najwyższy ROI z wszystkich kanałów marketingowych. Obsługa email marketingu od 799 zł/mies.!"
        canonical="https://fotz.pl/uslugi/email-marketing"
        keywords="email marketing, marketing emailowy, kampanie email, newsletter marketing, automatyzacja email, mailing dla firm"
      />
      <ServiceSchema
        name="Email marketing"
        description="Kompleksowa obsługa email marketingu — newslettery, marketing automation, lead nurturing, segmentacja bazy"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-emerald-900 bg-opacity-50 text-emerald-300 px-3 py-1 rounded-full text-sm mb-4">
                <Mail className="w-4 h-4" />
                Email Marketing Specialists
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Email marketing — najwyższy ROI w marketingu
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Email marketing to kanał własny, niezależny od algorytmów. Budujemy listy, tworzymy sekwencje automatyczne
                i prowadzimy newslettery które konwertują subskrybentów w klientów.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "4200%", label: "Średni ROI email marketingu" },
                  { value: "25-35%", label: "Open rate B2B w PL" },
                  { value: "36 zł", label: "Zwrot na każde 1 zł" },
                  { value: "24/7", label: "Automation pracuje" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Zaczęajmy od konsultacji <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link to="/uslugi/marketing-internetowy">
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Marketing internetowy
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co robimy w ramach email marketingu?</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Od newslettera do zaawansowanej automatyzacji — pełen zakres email marketingu.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.07}>
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <Icon className="w-8 h-8 text-emerald-600 mb-3" />
                        <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                        <p className="text-slate-600 text-sm">{service.desc}</p>
                      </div>
                    </FadeInView>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Tools */}
        <FadeInView>
          <section className="py-12 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Pracujemy z narzędziami:</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {tools.map((tool, idx) => (
                  <span key={idx} className="bg-white border border-slate-200 px-4 py-2 rounded-full text-slate-700 text-sm font-medium shadow-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Packages */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pakiety email marketingu</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Stałe plany miesięczne. Bez ukrytych kosztów.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`rounded-lg p-8 ${
                      pkg.highlight
                        ? "bg-gradient-to-br from-emerald-600 to-emerald-700 text-white border-2 border-emerald-400 transform scale-105"
                        : "bg-white border border-slate-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <div className={`text-2xl font-bold mb-2 ${pkg.highlight ? "text-white" : "text-emerald-600"}`}>
                      {pkg.price}
                    </div>
                    <p className={`mb-6 text-sm ${pkg.highlight ? "text-emerald-100" : "text-slate-600"}`}>{pkg.desc}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-white" : "text-emerald-600"}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Email marketing</h2>
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
          heading="Uruchom email marketing dla swojej firmy"
          subheading="Bezpłatna audyt aktualnych działań emailowych i plan na wzrost open rate i konwersji."
        />
      </Layout>
    </>
  );
}
