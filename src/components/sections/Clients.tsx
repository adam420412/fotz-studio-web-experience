import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import eneaLogo from "@/assets/clients/enea-stadion.png";
import lechLogo from "@/assets/clients/lech-poznan.png";
import rppgLogo from "@/assets/clients/rppg.svg";
import fpsLogo from "@/assets/clients/fps.png";
import pumaLogo from "@/assets/clients/puma.png";
import mixbudLogo from "@/assets/clients/mixbud.png";
import klagemLogo from "@/assets/clients/klagem.png";
import partsLogo from "@/assets/clients/parts-jewelry.jpeg";
import zabkaLogo from "@/assets/clients/zabka.png";

const clientTypes = [
  {
    title: "Firmy lokalne",
    subtitle: "Poznań i okolice",
    description:
      "Budujemy silną obecność lokalnych firm w internecie. SEO lokalne, mapy Google i kampanie geotargetowane.",
    href: "/dla-kogo/firmy-lokalne",
  },
  {
    title: "E-commerce & B2B",
    subtitle: "Sprzedaż online",
    description:
      "Strategia e-commerce, performance marketing i automatyzacja sprzedaży dla sklepów i firm B2B.",
    href: "/dla-kogo/ecommerce",
  },
  {
    title: "Marki premium",
    subtitle: "Luksus & jakość",
    description:
      "Wyrafinowany marketing dla marek premium. Pozycjonowanie, ekskluzywny content i influencer marketing.",
    href: "/dla-kogo/marki-premium",
  },
  {
    title: "Instytucje & eventy",
    subtitle: "Kultura & wydarzenia",
    description:
      "Marketing eventowy i promocja wydarzeń kulturalnych. Kampanie sprzedaży biletów i budowanie zasięgów.",
    href: "/dla-kogo/instytucje",
  },
];

const trustedBy = [
  { name: "Enea Stadion", logo: eneaLogo },
  { name: "Lech Poznań", logo: lechLogo },
  { name: "RPPG", logo: rppgLogo },
  { name: "FPS Cegielski", logo: fpsLogo },
  { name: "Puma", logo: pumaLogo },
  { name: "Mix-Bud", logo: mixbudLogo },
  { name: "Klagem", logo: klagemLogo },
  { name: "Parts Jewelry", logo: partsLogo },
  { name: "Żabka", logo: zabkaLogo },
];

export function Clients() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--dv-ink)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="dv-eyebrow mb-6 inline-block">Dla kogo pracujemy</span>
          <h2
            className="font-geist mb-6"
            style={{
              fontSize: "clamp(40px, 5vw, 88px)",
              letterSpacing: "-0.045em",
              lineHeight: 0.98,
              fontWeight: 400,
            }}
          >
            Wspieramy
            <br />
            <span className="dv-text-grad italic">różne branże</span>
          </h2>
          <p
            className="mx-auto"
            style={{
              color: "var(--dv-fg-muted)",
              fontSize: "17px",
              lineHeight: 1.55,
              maxWidth: "48ch",
            }}
          >
            Każda branża ma swoją specyfikę. Dostosowujemy strategię do
            unikalnych wyzwań Twojego biznesu.
          </p>
        </div>

        {/* Client type cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {clientTypes.map((type) => (
            <Link
              key={type.title}
              to={type.href}
              className="group dv-panel p-7 hover:border-[color:var(--dv-accent-pink)]/20 transition-colors duration-300"
            >
              <span
                className="dv-mono text-[11px] uppercase tracking-widest block mb-3"
                style={{ color: "var(--dv-accent-pink)" }}
              >
                {type.subtitle}
              </span>
              <h3
                className="font-geist text-foreground text-lg mb-3 group-hover:text-[color:var(--dv-accent-pink)] transition-colors duration-200"
                style={{ letterSpacing: "-0.02em", fontWeight: 400 }}
              >
                {type.title}
              </h3>
              <p
                className="text-[14px] leading-relaxed mb-4"
                style={{ color: "var(--dv-fg-muted)" }}
              >
                {type.description}
              </p>
              <span
                className="inline-flex items-center gap-1 text-[13px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: "var(--dv-accent-pink)" }}
              >
                Dowiedz się więcej
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>

        {/* Trusted by logos */}
        <div className="text-center">
          <p
            className="dv-eyebrow-muted mb-10"
          >
            Zaufali nam między innymi
          </p>
          <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            {trustedBy.map((client) => (
              <div
                key={client.name}
                className="group flex items-center justify-center p-6 md:p-8 aspect-square overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
                style={{ borderRadius: 16 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-24 h-24 md:w-28 md:h-28 object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
