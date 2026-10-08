import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { FAQSchema } from "@/components/seo/StructuredData";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function HomeFAQ() {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("W czym może pomóc FOTZ Studio?", "How can FOTZ Studio help?"),
      answer: t("Tworzymy strony internetowe, zdjęcia, filmy i materiały do social media. Przygotowujemy również działania SEO i kampanie reklamowe. Zakres dobieramy do celu projektu i zasobów firmy.", "We create websites, photography, video and social media content, and prepare SEO and advertising campaigns. We agree the scope around your goals and resources."),
      link: { text: t("Poznaj usługi", "Explore our services"), url: "/uslugi" },
    },
    {
      question: t("Ile kosztuje współpraca?", "How much does it cost?"),
      answer: t("Wycenę przygotowujemy indywidualnie po poznaniu zakresu. Ustalamy listę materiałów lub funkcji, etapy, poprawki i termin. Budżet reklamowy omawiamy oddzielnie od kosztu obsługi.", "We quote individually after discussing the scope, deliverables, revisions and schedule. Advertising spend is separate from our service fee."),
      link: { text: t("Co wpływa na wycenę", "What affects the quote"), url: "/cennik" },
    },
    {
      question: t("Czy pracujecie tylko w Poznaniu?", "Do you only work in Poznań?"),
      answer: t("Nasze biuro mieści się przy Placu Wolności 16 w Poznaniu. Strony, strategię i obsługę marketingową możemy realizować zdalnie. Miejsce nagrań i ewentualny dojazd ustalamy przed wyceną.", "Our office is at Plac Wolności 16 in Poznań. Website and marketing work can be delivered remotely. We agree filming locations and travel before quoting."),
      link: { text: t("Dane kontaktowe", "Contact details"), url: "/kontakt" },
    },
    {
      question: t("Jak przygotować się do pierwszej rozmowy?", "How should I prepare for the first call?"),
      answer: t("Przygotuj link do obecnej strony lub profilu, opisz odbiorców i cel. Pomogą też oczekiwany termin, orientacyjny budżet i przykłady materiałów. Konsultacja w kalendarzu trwa 15 minut.", "Bring your website or profile link, audience and goal. Your target date, approximate budget and references will also help. Calendar consultations take 15 minutes."),
      link: { text: t("Umów konsultację", "Book a consultation"), url: "/konsultacja" },
    },
    {
      question: t("Gdzie zobaczę przykłady realizacji?", "Where can I see your work?"),
      answer: t("W portfolio pokazujemy projekty stron, produkcje video i materiały dla marek. Podczas rozmowy możemy odnieść ich zakres do Twojego projektu. Efekty zależą od branży, oferty i warunków kampanii.", "Our portfolio includes websites, video and brand content. We can discuss the scope in relation to your project. Results depend on the industry, offer and campaign conditions."),
      link: { text: t("Zobacz realizacje", "View our work"), url: "/realizacje" },
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
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-14 md:py-20">
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
  const id = useId();

  return (
    <div style={{ borderBottom: "1px solid var(--dv-hair)" }}>
      <button
        type="button"
        id={`${id}-trigger`}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span
          className="font-geist text-[15px] md:text-[17px] text-foreground"
          style={{ letterSpacing: "-0.01em" }}
        >
          {faq.question}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "w-5 h-5 flex-shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
          style={{ color: "var(--dv-accent-pink)" }}
        />
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!open}
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
                tabIndex={open ? undefined : -1}
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
