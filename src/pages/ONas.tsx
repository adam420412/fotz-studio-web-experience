import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Zap, Users, MapPin, Camera, Video, Film, Clapperboard } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

// Office images
import officeStairs from "@/assets/office/office-stairs.webp";
import officeSign from "@/assets/office/office-sign.webp";
import officeLounge from "@/assets/office/office-lounge.webp";
import officeWorkspace from "@/assets/office/office-workspace.webp";
import officeDining from "@/assets/office/office-dining.webp";

// Team images
import teamWork1 from "@/assets/team/team-work-1.jpg";
import teamWork2 from "@/assets/team/team-work-2.jpg";
import teamWork3 from "@/assets/team/team-work-3.jpg";
import teamMeeting1 from "@/assets/team/team-meeting-1.jpg";
import teamMeeting3 from "@/assets/team/team-meeting-3.jpg";
import teamWork4 from "@/assets/team/team-work-4.jpg";
import teamBrainstorm2 from "@/assets/team/team-brainstorm-2.jpg";
import teamBrainstorm3 from "@/assets/team/team-brainstorm-3.jpg";

const values = [
  {
    icon: Target,
    title: "Rezultaty",
    description: "Mierzymy sukces konkretnymi wynikami. KPI, ROI, konwersje - to dla nas nie hasła, ale codzienna praca.",
  },
  {
    icon: Heart,
    title: "Pasja",
    description: "Kochamy to, co robimy. Każdy projekt traktujemy jak własny, angażując się w 100%.",
  },
  {
    icon: Zap,
    title: "Innowacja",
    description: "Śledzimy trendy i wyprzedzamy rynek. Wdrażamy rozwiązania, które dają przewagę konkurencyjną.",
  },
  {
    icon: Users,
    title: "Partnerstwo",
    description: "Nie jesteśmy wykonawcą - jesteśmy partnerem. Doradzamy, wspieramy, rozwijamy.",
  },
];

const equipment = [
  {
    icon: Video,
    name: "Sony FX6",
    description: "Profesjonalna kamera kinowa z pełnoklatkową matrycą 4K",
    category: "Kamera Cinema",
  },
  {
    icon: Film,
    name: "Sony FX3",
    description: "Kompaktowa kamera kinowa idealna do dynamicznych ujęć",
    category: "Kamera Cinema",
  },
  {
    icon: Clapperboard,
    name: "RED Komodo 6K",
    description: "Kamera kinowa 6K z globalną migawką i RAW",
    category: "Kamera Cinema",
  },
  {
    icon: Camera,
    name: "Sony A1 II",
    description: "Flagowy aparat 50MP z nagrywaniem 8K",
    category: "Aparat",
  },
];

const officeImages = [
  { src: officeStairs, alt: "Wejście do biura Fotz Studio - designerskie schody" },
  { src: officeSign, alt: "Tabliczka Fotz Studio na budynku HOFA Plac Wolności" },
  { src: officeLounge, alt: "Strefa relaksu w biurze Fotz Studio" },
  { src: officeWorkspace, alt: "Przestrzeń do pracy kreatywnej z piłkarzykami" },
  { src: officeDining, alt: "Kuchnia i strefa spotkań w biurze" },
];

const teamImages = [
  { src: teamWork1, alt: "Praca przy komputerze w biurze Fotz Studio" },
  { src: teamWork2, alt: "Dwóch członków zespołu pracujących nad projektem" },
  { src: teamWork3, alt: "Rozmowa zespołu o projekcie" },
  { src: teamMeeting1, alt: "Prezentacja projektu Klagem w sali konferencyjnej" },
  { src: teamMeeting3, alt: "Spotkanie zespołu przy projektorze" },
  { src: teamWork4, alt: "Grafik pracujący przy laptopie" },
  { src: teamBrainstorm2, alt: "Burza mózgów przy kawie" },
  { src: teamBrainstorm3, alt: "Zespół pracujący wspólnie w kuchni biurowej" },
];

export default function ONas() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-40 pb-20 section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                O nas
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Studio marketingu{" "}
                <span className="text-gradient">nowej generacji</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Jesteśmy zespołem pasjonatów marketingu, który wierzy w moc 
                strategii, kreatywności i danych. Łączymy świeże podejście 
                z doświadczeniem, by dostarczać realne rezultaty.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Poznaj nas bliżej
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={officeStairs}
                  alt="Biuro Fotz Studio w Poznaniu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-xl bg-card border border-border shadow-xl">
                <div className="text-4xl font-heading font-bold text-gradient">12+</div>
                <div className="text-muted-foreground">lat doświadczenia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Gallery */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
              <MapPin className="w-4 h-4" />
              Plac Wolności 16, Poznań
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Nasze <span className="text-gradient">biuro</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {officeImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "group relative aspect-[3/4] rounded-xl overflow-hidden transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={ref} className="section-padding bg-card">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span
              className={cn(
                "inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Nasze wartości
            </span>
            <h2
              className={cn(
                "text-3xl md:text-5xl font-heading font-bold transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Co nas <span className="text-gradient">wyróżnia?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={cn(
                  "p-6 rounded-2xl bg-secondary border border-border transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{
                  transitionDelay: isVisible ? `${(index + 2) * 100}ms` : "0ms",
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Nasz sprzęt
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Najwyższej klasy <span className="text-gradient">wyposażenie</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Nie oszczędzamy na sprzęcie, bo liczy się dla nas jakość. Pracujemy na profesjonalnym 
              sprzęcie filmowym i fotograficznym, który gwarantuje kinową jakość każdej produkcji.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <div
                key={item.name}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold mt-1 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-card border border-border text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <span className="text-foreground font-semibold">Inwestujemy w jakość.</span>{" "}
              Każdy projekt realizujemy na sprzęcie z najwyższej półki - od kamer kinowych 
              po profesjonalne oświetlenie i stabilizatory. Dzięki temu Twoja marka 
              prezentuje się na poziomie międzynarodowych produkcji.
            </p>
          </div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Zespół
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Poznaj <span className="text-gradient">naszych ludzi</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Młody, kreatywny zespół specjalistów od marketingu, grafiki, video i strategii
            </p>
          </div>

          {/* Masonry-style grid for team photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {teamImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "group relative rounded-xl overflow-hidden",
                  index === 0 || index === 4 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Dołącz do <span className="text-gradient">naszych klientów</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Porozmawiajmy o tym, jak możemy pomóc Twojej firmie osiągnąć 
            ambitne cele marketingowe.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/kontakt" className="group">
              Bezpłatna konsultacja
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
