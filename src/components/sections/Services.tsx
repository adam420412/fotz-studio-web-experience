import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      num: "01",
      title: t("Strony internetowe i SEO", "Websites and SEO"),
      description: t(
        "Projektujemy strony firmowe, landing pages i sklepy. Porządkujemy treści, formularze i techniczne SEO, żeby użytkownik mógł łatwo znaleźć ofertę i wykonać kolejny krok.",
        "We design company websites, landing pages and shops. We improve content, forms and technical SEO so visitors can find your offer and take the next step."
      ),
      features: ["WWW", "E-commerce", "SEO", "UX"],
      href: "/uslugi/strony-internetowe",
    },
    {
      num: "02",
      title: t("Social Media Marketing", "Social Media Marketing"),
      description: t(
        "Od strategii i planu publikacji po zdjęcia, rolki i reklamy. Tworzymy spójną komunikację marki na Facebooku, Instagramie i TikToku, z zakresem dopasowanym do Twojej firmy.",
        "From strategy and publishing plans to photography, reels and ads: we create consistent communication for Facebook, Instagram and TikTok."
      ),
      features: ["Facebook Ads", "Instagram Ads", "TikTok Ads", "Content marketing"],
      href: "/agencja-social-media",
    },
    {
      num: "03",
      title: t("Video i fotografia", "Video and photography"),
      description: t(
        "Produkujemy filmy, zdjęcia i krótkie formaty do social media. Ustalamy scenariusz, nagrania, montaż i wersje materiałów dopasowane do miejsca publikacji.",
        "We produce films, photography and short social formats. We agree the script, filming, editing and versions for each publishing channel."
      ),
      features: ["Filmy", "Reels", "Fotografia", "Montaż"],
      href: "/uslugi/produkcja-video",
    },
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-14 md:py-20">
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
                {t("obszary pracy", "areas of work")}
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
