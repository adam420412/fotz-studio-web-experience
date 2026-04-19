import { useLanguage } from "@/contexts/LanguageContext";

export function WhyUs() {
  const { t } = useLanguage();

  const items = [
    {
      num: "01",
      title: t("Wartościowa współpraca z klientem", "Valuable client collaboration"),
      description: t(
        "Współpraca z agencją marketingową to klucz do efektywnych kampanii reklamowych. Agencja staje się partnerem, który rozumie potrzeby klienta i dostosowuje strategie marketingowe do specyfiki jego biznesu. Indywidualne podejście do klienta to fundament sukcesu, pozwalający na tworzenie kampanii, które realnie wpływają na przychód i konwersję.",
        "Working with a marketing agency is the key to effective advertising campaigns. The agency becomes a partner who understands the client's needs and adapts marketing strategies to the specifics of their business."
      ),
      bullets: [
        t("Indywidualne podejście do każdego projektu", "Individual approach to each project"),
        t("Transparentna komunikacja i raportowanie", "Transparent communication and reporting"),
        t("Długoterminowe partnerstwo biznesowe", "Long-term business partnership"),
      ],
    },
    {
      num: "02",
      title: t("Nasze podejście do strategii marketingowej", "Our approach to marketing strategy"),
      description: t(
        "Nasze podejście do strategii marketingowej opiera się na głębokiej analityce i zrozumieniu potrzeb klienta. Przeprowadzamy audyt oraz analizę danych z analityki witryny i ruchu na stronie. Wykorzystujemy AI i automatyzację, aby zoptymalizować kampanie Google Ads i Social Media, maksymalizując zwrot z inwestycji.",
        "Our approach to marketing strategy is based on deep analytics and understanding of client needs."
      ),
      bullets: [
        t("Dogłębna analityka i audyty", "In-depth analytics and audits"),
        t("AI i automatyzacja procesów", "AI and process automation"),
        t("Optymalizacja kampanii w czasie rzeczywistym", "Real-time campaign optimization"),
      ],
    },
    {
      num: "03",
      title: t("Jak agencja wpływa na przychody biznesowe", "How agency impacts business revenue"),
      description: t(
        "Agencja marketingowa ma bezpośredni wpływ na przychody biznesowe poprzez skuteczne kampanie reklamowe i content marketing. Kreacje copywriterów angażują odbiorców, a pozycjonowanie stron zwiększa widoczność w wyszukiwarce. Optymalizacja UX i contentu sprzyja konwersji, przekształcając ruch na stronie w realnych klientów e-commerce.",
        "A marketing agency has a direct impact on business revenue through effective advertising campaigns and content marketing."
      ),
      bullets: [
        t("Wzrost konwersji i sprzedaży", "Increased conversions and sales"),
        t("Większa widoczność w wyszukiwarkach", "Greater visibility in search engines"),
        t("Angażujący content marketing", "Engaging content marketing"),
      ],
    },
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--dv-ink)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <span className="dv-eyebrow mb-6 inline-block">
            {t("Dlaczego my", "Why us")}
          </span>
          <h2
            className="font-geist"
            style={{
              fontSize: "clamp(40px, 5vw, 88px)",
              letterSpacing: "-0.045em",
              lineHeight: 0.98,
              fontWeight: 400,
            }}
          >
            {t("Dlaczego wybór agencji", "Why choosing an agency")}
            <br />
            <span className="dv-text-grad italic">
              {t("jest kluczowy?", "is crucial?")}
            </span>
          </h2>
        </div>

        {/* Items */}
        <div className="space-y-0">
          {items.map((item) => (
            <div
              key={item.num}
              className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1.2fr] gap-6 lg:gap-12 py-10"
              style={{ borderTop: "1px solid var(--dv-hair)" }}
            >
              {/* Number */}
              <span
                className="dv-mono text-[13px]"
                style={{ color: "var(--dv-accent-pink)" }}
              >
                {item.num}
              </span>

              {/* Title */}
              <h3
                className="font-geist text-foreground"
                style={{
                  fontSize: "clamp(22px, 1.6vw, 28px)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  fontWeight: 400,
                }}
              >
                {item.title}
              </h3>

              {/* Description + bullets */}
              <div>
                <p
                  className="text-[15px] leading-relaxed mb-6"
                  style={{ color: "var(--dv-fg-muted)" }}
                >
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.bullets.map((bullet) => (
                    <span key={bullet} className="dv-pill">
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
