// Client logos for the top marquee band
import eneaLogo from "@/assets/clients/enea-stadion.png";
import lechLogo from "@/assets/clients/lech-poznan.png";
import rppgLogo from "@/assets/clients/rppg.svg";
import fpsLogo from "@/assets/clients/fps.png";
import pumaLogo from "@/assets/clients/puma.png";
import mixbudLogo from "@/assets/clients/mixbud.png";
import klagemLogo from "@/assets/clients/klagem.png";
import partsLogo from "@/assets/clients/parts-jewelry.jpeg";
import zabkaLogo from "@/assets/clients/zabka.png";

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
                className="max-h-10 w-auto object-contain"
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
