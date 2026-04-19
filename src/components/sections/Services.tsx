import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      num: "01",
      title: t("Kampanie reklamowe", "Advertising campaigns"),
      description: t(
        "Jako agencja marketingowa oferujemy kompleksowy zakres usług, obejmujący tworzenie i realizację kampanii reklamowych na miarę Twoich potrzeb. Specjalizujemy się w kampaniach Meta Ads i Google Ads, zapewniając skuteczne dotarcie do Twojej grupy docelowej i maksymalny zwrot z inwestycji.",
        "As a marketing agency, we offer a comprehensive range of services, including creating and executing advertising campaigns tailored to your needs."
      ),
      features: ["Meta Ads", "Google Ads", "Remarketing", t("Optymalizacja ROI", "ROI optimization")],
      href: "/uslugi",
    },
    {
      num: "02",
      title: t("Social Media Marketing", "Social Media Marketing"),
      description: t(
        "Skuteczna obecność w social media to klucz do budowania świadomości marki i angażowania klientów. Nasza agencja oferuje kompleksową obsługę social media, od tworzenia strategii content marketing po realizację kampanii reklamowych na Facebooku, Instagramie i TikToku.",
        "Effective social media presence is the key to building brand awareness and engaging customers."
      ),
      features: ["Facebook Ads", "Instagram Ads", "TikTok Ads", "Content marketing"],
      href: "/uslugi",
    },
    {
      num: "03",
      title: t("Google Ads & Performance", "Google Ads & Performance"),
      description: t(
        "Google Ads to potężne narzędzie, które, właściwie wykorzystane, generuje wysoki przychód. Nasza agencja specjalizuje się w tworzeniu i optymalizacji kampanii Google Ads, zapewniając maksymalny zwrot z inwestycji. Dbamy o każdy detal, od doboru słów kluczowych po tworzenie angażujących kreacji.",
        "Google Ads is a powerful tool that, when used properly, generates high revenue."
      ),
      features: ["Search Ads", "Display Ads", "YouTube Ads", "Performance Max"],
      href: "/uslugi",
    },
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mb-16 lg:mb-20">
          <div>
            <span className="dv-eyebrow mb-6 inline-block">
              {t("Nasze usługi", "Our services")}
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
              {t("Nasze", "Our")}
              <br />
              <span className="dv-text-grad italic">
                {t("usługi reklamowe", "advertising services")}
              </span>
            </h2>
          </div>
          <div className="flex items-end">
            <p
              style={{
                color: "var(--dv-fg-muted)",
                fontSize: "17px",
                lineHeight: 1.55,
                maxWidth: "46ch",
              }}
            >
              {t(
                "Kompleksowy zakres usług marketingowych dostosowanych do Twoich celów biznesowych.",
                "Comprehensive range of marketing services tailored to your business goals."
              )}
            </p>
          </div>
        </div>

        {/* Service rows */}
        <div className="space-y-0">
          {services.map((service) => (
            <Link
              key={service.num}
              to={service.href}
              className="group grid grid-cols-1 lg:grid-cols-[80px_1.2fr_1.5fr_auto] gap-6 lg:gap-10 py-10 items-start transition-colors"
              style={{ borderTop: "1px solid var(--dv-hair)" }}
            >
              {/* Number */}
              <span
                className="dv-mono text-[13px]"
                style={{ color: "var(--dv-accent-pink)" }}
              >
                {service.num}
              </span>

              {/* Title */}
              <h3
                className="font-geist text-foreground group-hover:text-[color:var(--dv-accent-pink)] transition-colors duration-200"
                style={{
                  fontSize: "clamp(22px, 1.6vw, 28px)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  fontWeight: 400,
                }}
              >
                {service.title}
              </h3>

              {/* Description + features */}
              <div>
                <p
                  className="text-[15px] leading-relaxed mb-4"
                  style={{ color: "var(--dv-fg-muted)" }}
                >
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span key={f} className="dv-pill">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-center pt-1">
                <ArrowRight
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: "var(--dv-accent-pink)" }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
