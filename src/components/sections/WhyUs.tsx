import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Target, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function WhyUs() {
  const { t } = useLanguage();

  const items = [
    {
      icon: Users,
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
      color: "from-orange-500/20 to-amber-500/10",
      accentColor: "text-orange-400",
    },
    {
      icon: Target,
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
      color: "from-purple-500/20 to-pink-500/10",
      accentColor: "text-purple-400",
    },
    {
      icon: TrendingUp,
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
      color: "from-blue-500/20 to-cyan-500/10",
      accentColor: "text-blue-400",
    },
  ];

  const keyWords = [
    { text: t("Strategia", "Strategy"), color: "text-primary" },
    { text: t("Analityka", "Analytics"), color: "text-purple-400" },
    { text: t("Kampanie", "Campaigns"), color: "text-orange-400" },
    { text: t("Wzrost", "Growth"), color: "text-green-400" },
    { text: t("ROI", "ROI"), color: "text-blue-400" },
    { text: t("Automatyzacja", "Automation"), color: "text-pink-400" },
    { text: t("Content", "Content"), color: "text-amber-400" },
    { text: t("Konwersja", "Conversion"), color: "text-cyan-400" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card relative overflow-hidden">
      {/* Background - static, no animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px] bg-primary/[0.08]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {t("Dlaczego my", "Why us")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            {t("Dlaczego wybór", "Why choosing a")}{" "}
            <span className="text-gradient-premium">
              {t("agencji marketingowej jest kluczowy?", "marketing agency is crucial?")}
            </span>
          </h2>
        </div>

        {/* Keywords - static */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {keyWords.map((word) => (
            <span key={word.text} className={cn("px-4 py-2 rounded-full bg-muted text-sm font-medium", word.color)}>
              {word.text}
            </span>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <WhyUsCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsCard({ item }: { item: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative group">
      <div className="relative p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-brand">
          <item.icon className="w-7 h-7 text-primary-foreground" />
        </div>

        <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h3>

        {/* Description */}
        <div className="relative">
          <div className={cn("overflow-hidden transition-all duration-300", isExpanded ? "max-h-[500px]" : "max-h-[80px]")}>
            <p className="text-foreground/70 leading-relaxed text-sm">{item.description}</p>
          </div>
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
          )}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-sm text-primary flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
        >
          {isExpanded ? "Zwiń" : "Rozwiń"}
          <ArrowRight className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-90")} />
        </button>

        {/* Bullet points */}
        {isExpanded && (
          <div className="pt-4 border-t border-border/30 mt-4 space-y-2">
            {item.bullets.map((bullet: string) => (
              <div key={bullet} className="flex items-center gap-2 text-sm text-foreground/70">
                <div className={cn("w-1.5 h-1.5 rounded-full", item.accentColor.replace("text-", "bg-"))} />
                {bullet}
              </div>
            ))}
          </div>
        )}

        {/* Corner decoration */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-primary/50" />
        </div>
      </div>
    </div>
  );
}
