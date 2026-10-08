// Client logos for the top marquee band
import eneaLogo from "@/assets/clients/enea-stadion-web.webp";
import lechLogo from "@/assets/clients/lech-poznan-web.webp";
import rppgLogo from "@/assets/clients/rppg.svg";
import fpsLogo from "@/assets/clients/fps-web.webp";
import pumaLogo from "@/assets/clients/puma-web.webp";
import mixbudLogo from "@/assets/clients/mixbud-web.webp";
import klagemLogo from "@/assets/clients/klagem-web.webp";
import partsLogo from "@/assets/clients/parts-jewelry-web.webp";
import zabkaLogo from "@/assets/clients/zabka-web.webp";

const CLIENTS = [
  { name: "Enea Stadion", logo: eneaLogo },
  { name: "Lech Poznań", logo: lechLogo },
  { name: "RPPG Group", logo: rppgLogo },
  { name: "FPS Cegielski", logo: fpsLogo },
  { name: "Puma", logo: pumaLogo },
  { name: "Mix-Bud", logo: mixbudLogo },
  { name: "Klagem", logo: klagemLogo },
  { name: "Parts Jewelry", logo: partsLogo },
  { name: "Żabka", logo: zabkaLogo },
];

export function ClientMarqueeV3() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <div
      className="dv-marquee py-9"
      style={{
        borderTop: "1px solid var(--dv-hair)",
        borderBottom: "1px solid var(--dv-hair)",
      }}
    >
      <div className="dv-marquee-track">
        {items.map((client, i) => (
          <span
            key={i}
            className="flex items-center gap-10"
          >
            <span
              className="flex items-center justify-center bg-white px-5 py-2"
              style={{ borderRadius: 12, height: 56 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                width={140}
                height={40}
                className="h-10 w-[140px] object-contain"
                style={{ maxWidth: 140 }}
                loading="lazy"
                decoding="async"
              />
            </span>
            <span
              aria-hidden
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--dv-burgundy)" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
