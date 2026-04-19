import { Link } from "react-router-dom";
import { MapPin, Video, Mic, Users, ArrowRight } from "lucide-react";
import officeLounge from "@/assets/office/office-lounge.webp";
import officeWorkspace from "@/assets/office/office-workspace.webp";

const features = [
  {
    icon: MapPin,
    title: "Plac Wolności 16",
    description: "Prestiżowa lokalizacja w centrum Poznania.",
  },
  {
    icon: Video,
    title: "Studio video",
    description: "Własna produkcja wideo — 4K, green screen.",
  },
  {
    icon: Mic,
    title: "Studio podcastowe",
    description: "Izolacja akustyczna, multi-cam, streaming.",
  },
  {
    icon: Users,
    title: "Zespół na miejscu",
    description: "Strategia, kreacja i produkcja pod jednym dachem.",
  },
];

export function Studio() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--dv-ink)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — content */}
          <div>
            <span className="dv-eyebrow mb-6 inline-block">Nasz wyróżnik</span>
            <h2
              className="font-geist mb-6"
              style={{
                fontSize: "clamp(40px, 5vw, 88px)",
                letterSpacing: "-0.045em",
                lineHeight: 0.98,
                fontWeight: 400,
              }}
            >
              Biuro i studio
              <br />
              w sercu <span className="dv-text-grad italic">Poznania</span>
            </h2>

            <p
              className="mb-10"
              style={{
                color: "var(--dv-fg-muted)",
                fontSize: "17px",
                lineHeight: 1.55,
                maxWidth: "50ch",
              }}
            >
              Nie jesteśmy agencją zdalną. Mamy realne biuro, studio produkcyjne
              i zespół na miejscu. Możesz nas odwiedzić, porozmawiać i zobaczyć,
              jak powstają Twoje materiały.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="dv-panel p-5 group hover:border-[color:var(--dv-accent-pink)]/20 transition-colors duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: "var(--dv-brand-grad)" }}
                  >
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3
                    className="font-geist text-foreground text-[15px] mb-1 group-hover:text-[color:var(--dv-accent-pink)] transition-colors duration-200"
                    style={{ fontWeight: 500 }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-[13px]" style={{ color: "var(--dv-fg-muted)" }}>
                    {f.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/kontakt" className="dv-btn dv-btn-primary group">
                Umów spotkanie
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/uslugi/studio-podcastowe" className="dv-btn dv-btn-secondary">
                Zobacz studio
              </Link>
            </div>
          </div>

          {/* Right — images */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            {/* Large image */}
            <div
              className="col-span-7 row-span-2 overflow-hidden group"
              style={{ borderRadius: 20, border: "1px solid var(--dv-hair)" }}
            >
              <div className="relative h-full">
                <img
                  loading="lazy"
                  src={officeLounge}
                  alt="Biuro Fotz Studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--dv-ink) 0%, transparent 50%)",
                  }}
                />
                <div className="absolute bottom-4 left-4 dv-pill">
                  <MapPin className="w-3.5 h-3.5" style={{ color: "var(--dv-accent-pink)" }} />
                  Centrum Poznania
                </div>
              </div>
            </div>

            {/* Video tile */}
            <div
              className="col-span-5 overflow-hidden group"
              style={{ borderRadius: 20, border: "1px solid var(--dv-hair)" }}
            >
              <div className="aspect-square relative">
                <video
                  src="/videos/skaland-osiedle.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "var(--dv-brand-grad)" }}
                >
                  <Video className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Workspace tile */}
            <div
              className="col-span-5 overflow-hidden group"
              style={{ borderRadius: 20, border: "1px solid var(--dv-hair)" }}
            >
              <div className="aspect-square relative">
                <img
                  loading="lazy"
                  src={officeWorkspace}
                  alt="Workspace Fotz Studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
