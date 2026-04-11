import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Code2, Globe, Zap, Shield } from "lucide-react";
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

export default function BlogAPICoToJest() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "API — co to jest i jak działa?" },
  ];

  const apiTypes = [
    { icon: Globe, name: "REST API", desc: "Najpopularniejszy typ — komunikacja przez HTTP (GET, POST, PUT, DELETE). Używany przez większość stron i aplikacji webowych. Format danych: JSON." },
    { icon: Code2, name: "GraphQL", desc: "Nowoczesna alternatywa dla REST. Klient sam określa jakich danych potrzebuje — mniej zapytań, mniejsze ładunki danych. Popularny w React/Vue." },
    { icon: Zap, name: "WebSocket API", desc: "Dwukierunkowa komunikacja w czasie rzeczywistym. Idealny do czatów, powiadomień, aktualizacji live (kursy walut, mecze na żywo)." },
    { icon: Shield, name: "SOAP API", desc: "Starszy standard, używany głównie w dużych korporacjach i systemach bankowych. Bardziej rygorystyczny i bezpieczny niż REST, ale też cięższy." },
  ];

  const faqItems = [
    {
      question: "Co to jest API?",
      answer:
        "API (Application Programming Interface) to interfejs programowania aplikacji — zestaw reguł i protokołów pozwalający różnym programom komunikować się ze sobą. Przykład: gdy rezerwujesz lot przez Skyscanner, ich aplikacja korzysta z API linii lotniczych aby sprawdzić dostępność i ceny. API to 'wtyczka elektryczna' świata software — definiuje jak systemy mogą ze sobą rozmawiać.",
    },
    {
      question: "Jak działa API na prostym przykładzie?",
      answer:
        "Wyobraź sobie restaurację: Ty (klient) = aplikacja, kelner = API, kuchnia = serwer. Składasz zamówienie (zapytanie) → kelner zanosi je do kuchni (serwera) → kuchnia gotuje (przetwarza dane) → kelner przynosi danie (odpowiedź). W praktyce: klikasz 'Zapłać przez PayPal' → Twoja aplikacja wysyła żądanie do API PayPal → PayPal sprawdza dane i autoryzuje → zwraca potwierdzenie. Twoja aplikacja widzi tylko wynik, nie kod PayPal.",
    },
    {
      question: "Po co firmom API?",
      answer:
        "API dają firmom możliwość: integracji z zewnętrznymi usługami (płatności, mapy, social media), udostępnienia danych partnerom bez dawania dostępu do całego systemu, budowania ekosystemu — inne firmy mogą budować produkty na bazie Twojego API (jak Allegro czy Google Maps), automatyzacji procesów między systemami. Firmy które udostępniają API mają silniejszą pozycję na rynku.",
    },
    {
      question: "Czym różni się REST API od GraphQL?",
      answer:
        "REST API zwraca stałe dane dla każdego endpointu — np. /users/123 zawsze zwraca cały profil użytkownika. GraphQL pozwala klientowi określić dokładnie jakich pól potrzebuje — np. tylko imię i email. Kiedy wybrać: REST — prostsze projekty, większa kompatybilność. GraphQL — złożone aplikacje z wieloma różnymi widokami potrzebującymi różnych danych. Przykład: Facebook i GitHub używają GraphQL.",
    },
    {
      question: "Co to jest klucz API (API key)?",
      answer:
        "Klucz API to unikalny ciąg znaków identyfikujący i autoryzujący aplikację korzystającą z API. Działa jak hasło — serwer sprawdza klucz i decyduje czy dać dostęp. Przykład: korzystasz z Google Maps API na swojej stronie — Google daje Ci klucz API, który dodajesz do kodu. Google wie ile zapytań robisz i może naliczać opłaty lub ograniczać dostęp. Klucze API nigdy nie powinny być publiczne — przechowuj je w zmiennych środowiskowych.",
    },
    {
      question: "Jak API wpływa na budowanie strony internetowej?",
      answer:
        "Nowoczesne strony internetowe używają dziesiątek API: płatności (PayU, Stripe, Przelewy24), mapy (Google Maps, Leaflet), logowanie (Google, Facebook OAuth), email (SendGrid, Mailchimp), analityka (GA4), live chat (Intercom, Crisp), e-commerce (WooCommerce REST API, Shopify API). Strona bez integracji API jest jak wyspa — API pozwala korzystać z gotowych, sprawdzonych usług zamiast budować wszystko od zera.",
    },
  ];

  return (
    <>
      <SEOHead
        title="API — co to jest i jak działa? Interfejs programowania aplikacji | fotz.pl"
        description="API co to jest — wyjaśniamy czym jest Application Programming Interface, jak działają REST API i GraphQL, po co firmom API i jak integrować strony z zewnętrznymi usługami."
        canonical="https://fotz.pl/blog/api-co-to-jest"
      />
      <ArticleSchema
        title="API — co to jest i jak działa?"
        description="Czym jest API (Application Programming Interface), rodzaje API (REST, GraphQL, WebSocket), zastosowanie w stronach internetowych i biznesie."
        datePublished="2025-03-15"
        dateModified="2025-04-05"
        url="https://fotz.pl/blog/api-co-to-jest"
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
                <span className="flex items-center gap-1"><Code2 className="w-4 h-4" /> Technologia webowa</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                API — co to jest i jak działa?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                API (Application Programming Interface) to technologia która pozwala aplikacjom komunikować się
                ze sobą. Bez API nie byłoby płatności online, map Google ani logowania przez Facebook.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Rodzaje API — który wybrać?</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {apiTypes.map((api, idx) => {
                  const Icon = api.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{api.name}</h3>
                      <p className="text-slate-600 text-sm">{api.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak wygląda zapytanie API?</h2>
              <p className="text-slate-700 mb-4">
                Komunikacja przez REST API opiera się na metodach HTTP. Każde zapytanie zawiera: URL (endpoint),
                metodę HTTP, nagłówki (np. klucz API) i opcjonalnie dane (body).
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Metoda HTTP</th>
                      <th className="text-left p-3 border border-slate-700">Co robi</th>
                      <th className="text-left p-3 border border-slate-700">Przykład</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { method: "GET", action: "Pobiera dane", example: "GET /products — lista produktów" },
                      { method: "POST", action: "Tworzy nowy zasób", example: "POST /orders — nowe zamówienie" },
                      { method: "PUT/PATCH", action: "Aktualizuje zasób", example: "PUT /users/5 — edytuj profil" },
                      { method: "DELETE", action: "Usuwa zasób", example: "DELETE /comments/12 — usuń komentarz" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-blue-600">{row.method}</td>
                        <td className="p-3 border border-slate-200 text-slate-700">{row.action}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Popularne API które znasz (i używasz)</h2>
              <div className="space-y-2 mb-6">
                {[
                  "Google Maps API — mapy i geolokalizacja na stronach www",
                  "PayU / Stripe / Przelewy24 API — płatności online",
                  "Facebook / Google OAuth API — logowanie przez social media",
                  "OpenAI API — integracja AI i ChatGPT w aplikacjach",
                  "Mailchimp / SendGrid API — wysyłanie emaili transakcyjnych",
                  "WooCommerce REST API — zarządzanie sklepem przez zewnętrzne aplikacje",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz integracji API na swojej stronie?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Wdrożymy płatności, mapy, formularze i inne integracje API dla Twojego projektu.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — API co to jest</h2>
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
          heading="Potrzebujesz integracji API w swoim projekcie?"
          subheading="Płatności, mapy, automatyzacje — wdrożymy potrzebne integracje od A do Z."
        />
      </Layout>
    </>
  );
}
