import { Target, Rocket, TrendingUp, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: Target,
      title: t("Analiza i planowanie strategii", "Analysis and strategy planning"),
      description: t(
        "Proces współpracy z naszą agencją marketingową rozpoczyna się od dogłębnej analizy Twojej firmy, konkurencji i rynku. Przeprowadzamy szczegółowy audyt Twojej obecnej strategii marketingowej oraz analityki witryny i ruchu na stronie.",
        "The collaboration process with our marketing agency begins with an in-depth analysis of your company, competition and market."
      ),
      details: [
        t("Audyt strategii", "Strategy audit"),
        t("Analiza konkurencji", "Competition analysis"),
        t("Cele biznesowe", "Business goals"),
      ],
    },
    {
      number: "02",
      icon: Rocket,
      title: t("Wdrożenie i zarządzanie kampaniami", "Implementation and campaign management"),
      description: t(
        "Po opracowaniu strategii przechodzimy do jej wdrożenia i zarządzania kampaniami reklamowymi. Wykorzystujemy najnowsze narzędzia i technologie, w tym AI i automatyzację, aby zoptymalizować kampanie Google Ads i social media.",
        "After developing the strategy, we move to its implementation and advertising campaign management."
      ),
      details: [
        t("AI i automatyzacja", "AI and automation"),
        t("Google Ads", "Google Ads"),
        t("Social Media", "Social Media"),
      ],
    },
    {
      number: "03",
      icon: TrendingUp,
      title: t("Monitorowanie i analityka wyników", "Monitoring and analytics"),
      description: t(
        "Kluczem do sukcesu każdej kampanii marketingowej jest ciągłe monitorowanie i analiza wyników. Regularnie raportujemy postępy i wyniki kampanii, wprowadzając niezbędne optymalizacje, aby zapewnić maksymalny przychód.",
        "The key to success for any marketing campaign is continuous monitoring and analysis of results."
      ),
      details: [
        t("Raportowanie", "Reporting"),
        t("Optymalizacja", "Optimization"),
        t("Wzrost ROI", "ROI growth"),
      ],
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Static background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px]"
          style={{ background: "hsl(var(--primary) / 0.05)" }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {t("Jak pracujemy", "How we work")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            {t("Proces", "Collaboration")}{" "}
            <span className="text-gradient-premium">
              {t("współpracy z naszą agencją", "process with our agency")}
            </span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t(
              "Transparentny proces współpracy oparty na analizie, wdrożeniu i ciągłej optymalizacji.",
              "Transparent collaboration process based on analysis, implementation and continuous optimization."
            )}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop, static */}
          <div className="hidden md:block absolute top-32 left-[16%] right-[16%] h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step) => (
              <ProcessCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step }: { step: any }) {
  return (
    <div className="relative text-center group">
      {/* Number & Icon */}
      <div className="relative inline-flex flex-col items-center mb-8">
        <span className="text-7xl md:text-8xl font-heading font-bold text-muted/30 group-hover:text-muted/50 transition-opacity">
          {step.number}
        </span>
        <div className="absolute bottom-0 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
          style={{ boxShadow: "0 0 30px hsl(var(--primary) / 0.2)" }}
        >
          <step.icon className="w-7 h-7 text-primary-foreground" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors duration-300">
        {step.title}
      </h3>
      <p className="text-foreground/60 mb-6">{step.description}</p>

      {/* Details */}
      <div className="flex flex-wrap justify-center gap-2">
        {step.details.map((detail: string) => (
          <span
            key={detail}
            className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {detail}
          </span>
        ))}
      </div>
    </div>
  );
}
