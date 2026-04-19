import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { FAQSchema } from "@/components/seo/StructuredData";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function HomeFAQ() {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t(
        "Czym zajmuje się agencja marketingowa i agencja reklamowa?",
        "What does a marketing and advertising agency do?"
      ),
      answer: t(
        "Agencja marketingowa to firma oferująca kompleksowe wsparcie w promocji produktów i usług — od strategii content marketingu, przez kampanie mediowe i performance, po obsługę social media. Agencja reklamowa i agencja interaktywna często współpracują z klientami, proponując indywidualne rozwiązania dostosowane do potrzeb, budując lejek pozyskiwania klientów i optymalizując konwersję w sklepie internetowym.",
        "A marketing agency is a company offering comprehensive support in promoting products and services — from content marketing strategy, through media and performance campaigns, to social media management."
      ),
      link: { text: t("Sprawdź naszą ofertę kompleksowej obsługi marketingowej", "Check our comprehensive marketing services"), url: "/kompleksowa-obsluga-marketingowa" },
    },
    {
      question: t(
        "Jak agencja wykorzystuje AI i automatyzację w digital marketingu?",
        "How does the agency use AI and automation in digital marketing?"
      ),
      answer: t(
        "Wykorzystanie AI i automatyzacji pozwala agencjom zwiększać efektywność kampanii digital i performance — od automatycznego targetowania leadów po optymalizację reklam zgodnie z algorytmami Google i wytycznymi Google. Automatyzacja umożliwia skalowanie kampanii dla firm oraz szybsze analizowanie danych z Google Analytics.",
        "Using AI and automation allows agencies to increase the effectiveness of digital and performance campaigns."
      ),
      link: { text: t("Oferujemy Google Ads i Facebook Ads", "We offer Google Ads and Facebook Ads"), url: "/kampanie-reklamowe" },
    },
    {
      question: t(
        "Jakie kreacje reklamowe są najbardziej skuteczne?",
        "What advertising creatives are most effective?"
      ),
      answer: t(
        "Skuteczne kreacje reklamowe łączą atrakcyjny content marketing, jasne CTA oraz dopasowanie do grupy docelowej. Agencja interaktywna testuje różne formaty mediowe, content i warianty graficzne w kampaniach performance, aby maksymalizować wynik konwersji i minimalizować koszt pozyskania leadów.",
        "Effective advertising creatives combine attractive content marketing, clear CTAs and targeting."
      ),
      link: { text: t("Nasze studio tworzy profesjonalne materiały wideo", "Our studio creates professional video materials"), url: "/uslugi/produkcja-video" },
    },
    {
      question: t(
        "Jak zaplanować content marketing w strategii agencji reklamowej?",
        "How to plan content marketing in an advertising agency strategy?"
      ),
      answer: t(
        "Plan content marketingu powinien zawierać analizę słów kluczowych, harmonogram publikacji, integrację z kampaniami mediowymi i działania SEO poprawiające widoczność w wynikach wyszukiwania. Content musi być dopasowany do potrzeb odbiorców i wspierać cele sprzedażowe produktów i usług oraz generowanie leadów.",
        "A content marketing plan should include keyword analysis, publication schedule, integration with media campaigns and SEO activities."
      ),
      link: { text: t("Poznaj naszą ofertę pozycjonowania stron", "Learn about our website positioning services"), url: "/seo/pozycjonowanie" },
    },
    {
      question: t(
        "Jak agencja zwiększa konwersję w sklepie internetowym?",
        "How does the agency increase conversion in an online store?"
      ),
      answer: t(
        "Agencja marketingowa optymalizuje stronę i sklep internetowy poprzez testy A/B, poprawę ścieżki zakupowej, optymalizację landing page'y oraz analizy w Google Analytics. Połączenie kampanii performance, remarketingu i treści dopasowanych do klientów zwiększa współczynnik konwersji i efektywność pozyskiwania klientów.",
        "A marketing agency optimizes websites and online stores through A/B testing."
      ),
      link: { text: t("Tworzymy skuteczne sklepy e-commerce", "We create effective e-commerce stores"), url: "/uslugi/strony-internetowe/ecommerce" },
    },
    {
      question: t(
        "Jak mierzyć efekty działań digital i performance?",
        "How to measure the effects of digital and performance activities?"
      ),
      answer: t(
        "Efekty mierzy się za pomocą KPI takich jak liczba leadów, koszt za konwersję, ROI i wskaźniki z Google Analytics. Agencja digital ustala cele kampanii, monitoruje algorytmy Google i raportuje wyniki, proponując korekty strategii, by osiągać skuteczne strategie zarówno w Polsce i na świecie.",
        "Effects are measured using KPIs such as number of leads, cost per conversion, ROI and Google Analytics metrics."
      ),
      link: { text: t("Dowiedz się więcej o pozycjonowaniu w Google Maps", "Learn more about Google Maps positioning"), url: "/seo/google-maps" },
    },
    {
      question: t(
        "Na czym polega kampania performance i dla kogo jest najlepsza?",
        "What is a performance campaign and who is it best for?"
      ),
      answer: t(
        "Kampania performance skupia się na mierzalnych wynikach — leadach, sprzedaży i konkretnych konwersjach. To rozwiązanie idealne dla firm sprzedających produkty i usługi, które oczekują szybkich rezultatów i ROI. Agencja reklamowa łączy działania w Google Ads, social media i kampanie mediowe, optymalizując budżet pod wydajność.",
        "A performance campaign focuses on measurable results — leads, sales and specific conversions."
      ),
      link: { text: t("Sprawdź nasze rozwiązania dla e-commerce", "Check our solutions for e-commerce"), url: "/dla-kogo/ecommerce" },
    },
    {
      question: t(
        "Czy agencja interaktywna oferuje indywidualne rozwiązania i integracje?",
        "Does an interactive agency offer custom solutions and integrations?"
      ),
      answer: t(
        "Tak — agencje interaktywne proponują indywidualne rozwiązania, integrujące CRM, narzędzia do pozyskiwania klientów i automatyzację marketingu. Dzięki temu kampanie dla firm są lepiej skalowalne, a komunikacja z leadami bardziej spersonalizowana, zgodna z wytycznymi Google i zasadami ochrony danych.",
        "Yes — interactive agencies offer custom solutions integrating CRM, customer acquisition tools and marketing automation."
      ),
      link: { text: t("Tworzymy profesjonalne strony internetowe", "We create professional websites"), url: "/uslugi/strony-internetowe" },
    },
  ];

  const faqSchemaItems = faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <>
      <FAQSchema items={faqSchemaItems} />
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--dv-ink)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            {/* Left — heading */}
            <div>
              <span className="dv-eyebrow mb-6 inline-block">FAQ</span>
              <h2
                className="font-geist"
                style={{
                  fontSize: "clamp(36px, 4vw, 64px)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1.05,
                  fontWeight: 400,
                }}
              >
                {t("Najczęściej zadawane", "Frequently asked")}
                <br />
                <span className="dv-text-grad italic">{t("pytania", "questions")}</span>
              </h2>
            </div>

            {/* Right — accordion */}
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FAQItem({
  faq,
}: {
  faq: { question: string; answer: string; link?: { text: string; url: string } };
}) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid var(--dv-hair)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span
          className="font-geist text-[15px] md:text-[17px] text-foreground"
          style={{ letterSpacing: "-0.01em" }}
        >
          {faq.question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 flex-shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
          style={{ color: "var(--dv-accent-pink)" }}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-5" style={{ color: "var(--dv-fg-muted)" }}>
            <p className="text-[15px] leading-relaxed max-w-[60ch]">
              {faq.answer}
            </p>
            {faq.link && (
              <Link
                to={faq.link.url}
                className="inline-flex items-center gap-1 mt-3 text-[13px] hover:underline"
                style={{ color: "var(--dv-accent-pink)" }}
              >
                {faq.link.text} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
