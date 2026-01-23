import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, WebPageSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Clock, Users, Rocket, Heart, Coffee, Zap, Send, Upload, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// Office images
import officeStairs from "@/assets/office/office-stairs.webp";
import officeWorkspace from "@/assets/office/office-workspace.webp";
import officeDining from "@/assets/office/office-dining.webp";

// Team images
import teamBrainstorm2 from "@/assets/team/team-brainstorm-2.jpg";
import teamMeeting3 from "@/assets/team/team-meeting-3.jpg";

const jobOffers = [
  {
    id: 1,
    title: "Staż - Dział Sprzedaży",
    type: "Staż / Praktyki",
    location: "Poznań",
    department: "Sprzedaż",
    description: "Szukamy ambitnej osoby do działu sprzedaży. Nauczysz się pozyskiwać klientów, prowadzić negocjacje i budować relacje biznesowe w branży marketingowej.",
    requirements: [
      "Komunikatywność i otwartość",
      "Podstawowa znajomość social media",
      "Chęć nauki i rozwoju",
      "Status studenta lub absolwenta",
    ],
    benefits: ["Mentoring", "Możliwość zatrudnienia", "Elastyczne godziny"],
  },
  {
    id: 2,
    title: "Staż - Dział 3D & Wizualizacje",
    type: "Staż / Praktyki",
    location: "Poznań",
    department: "3D / Kreacja",
    description: "Dołącz do zespołu wizualizacji 3D! Będziesz tworzyć renderingi produktowe, architektoniczne i materiały do kampanii reklamowych.",
    requirements: [
      "Podstawowa znajomość Blender lub Cinema 4D",
      "Zainteresowanie grafiką 3D",
      "Portfolio (nawet z projektów hobbystycznych)",
      "Chęć nauki nowych narzędzi",
    ],
    benefits: ["Szkolenia z Blender/C4D", "Praca na prawdziwych projektach", "Sprzęt w biurze"],
  },
  {
    id: 3,
    title: "Staż - Montaż Video",
    type: "Staż / Praktyki",
    location: "Poznań",
    department: "Produkcja Video",
    description: "Szukamy osoby z pasją do video! Będziesz montować reelsy, spoty reklamowe i materiały promocyjne dla naszych klientów.",
    requirements: [
      "Znajomość Premiere Pro lub DaVinci Resolve",
      "Podstawy After Effects mile widziane",
      "Wyczucie rytmu i narracji wizualnej",
      "Portfolio z realizacjami (nawet amatorskimi)",
    ],
    benefits: ["Dostęp do profesjonalnego sprzętu", "Mentoring od doświadczonych edytorów", "Projekty dla znanych marek"],
  },
  {
    id: 4,
    title: "Staż - Social Media",
    type: "Staż / Praktyki",
    location: "Poznań / Hybrid",
    department: "Marketing",
    description: "Praktyki w dziale social media! Nauczysz się prowadzić profile klientów, tworzyć content i analizować wyniki kampanii.",
    requirements: [
      "Aktywność w social mediach",
      "Podstawowa znajomość Canva lub Photoshop",
      "Kreatywność i pomysłowość",
      "Znajomość trendów w SM",
    ],
    benefits: ["Praca hybrydowa", "Szkolenia z Meta Business Suite", "Możliwość stałej współpracy"],
  },
];

const benefits = [
  { icon: Coffee, title: "Biuro w centrum Poznania", description: "Plac Wolności 16 - najlepsza lokalizacja" },
  { icon: Rocket, title: "Rozwój i szkolenia", description: "Budżet na kursy i konferencje" },
  { icon: Heart, title: "Work-life balance", description: "Elastyczne godziny i praca hybrydowa" },
  { icon: Users, title: "Młody zespół", description: "Średnia wieku 28 lat, zero corporate" },
  { icon: Zap, title: "Ciekawe projekty", description: "Dla marek takich jak Enea, Żabka, PUMA" },
  { icon: Briefcase, title: "Stabilność", description: "Umowa o pracę lub B2B - Ty wybierasz" },
];

export default function Kariera() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    portfolio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Aplikacja wysłana!", {
      description: "Dziękujemy za zainteresowanie. Odezwiemy się wkrótce!",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
      portfolio: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <SEOHead
        title="Kariera w Fotz Studio | Dołącz do zespołu"
        description="Szukasz pracy w marketingu? Dołącz do Fotz Studio w Poznaniu. Aktualne oferty pracy: grafik, social media specialist, video editor i więcej."
        canonical="https://fotz.pl/kariera"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Kariera", url: "https://fotz.pl/kariera" }
        ]}
      />
      <WebPageSchema 
        title="Kariera w Fotz Studio"
        description="Aktualne oferty pracy w agencji marketingowej Fotz Studio w Poznaniu."
        url="https://fotz.pl/kariera"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20 pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <Badge variant="outline" className="mb-6 text-primary border-primary/30">
                <Briefcase className="w-4 h-4 mr-2" />
                Dołącz do nas
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Kariera w <span className="text-primary">Fotz Studio</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl">
                Budujemy zespół ludzi z pasją do marketingu. Jeśli chcesz tworzyć 
                projekty dla topowych marek, to miejsce jest dla Ciebie.
              </p>
            </motion.div>

            {/* Team Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-3 md:gap-4 order-1 lg:order-2"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img src={teamBrainstorm2} alt="Zespół przy pracy" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img src={teamMeeting3} alt="Spotkanie zespołu" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img src={officeStairs} alt="Biuro Fotz Studio" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Dlaczego warto z nami pracować?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferujemy więcej niż tylko pracę - to miejsce, gdzie rozwiniesz swoje umiejętności
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Offers Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Aktualne oferty pracy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sprawdź, które stanowisko pasuje do Twoich umiejętności
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobOffers.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <CardTitle className="text-xl font-heading text-foreground mb-2">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {job.type}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            <MapPin className="w-3 h-3 mr-1" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {job.department}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-4">{job.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2 text-sm">Wymagania:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2 text-sm">Oferujemy:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.benefits.map((benefit, i) => (
                            <Badge key={i} variant="outline" className="text-xs bg-primary/5 border-primary/20 text-primary">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Aplikuj teraz
              </h2>
              <p className="text-muted-foreground">
                Wyślij swoją aplikację - odpowiadamy w ciągu 48 godzin
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Imię i nazwisko *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jan Kowalski"
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jan@example.com"
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                          Telefon
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+48 123 456 789"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="position" className="text-sm font-medium text-foreground">
                          Stanowisko *
                        </label>
                        <select
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          required
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Wybierz stanowisko</option>
                          {jobOffers.map((job) => (
                            <option key={job.id} value={job.title}>
                              {job.title}
                            </option>
                          ))}
                          <option value="Inne">Inne / Aplikacja otwarta</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="portfolio" className="text-sm font-medium text-foreground">
                        Link do portfolio / LinkedIn
                      </label>
                      <Input
                        id="portfolio"
                        name="portfolio"
                        type="url"
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="https://..."
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Wiadomość / O sobie *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Opowiedz nam o sobie, swoim doświadczeniu i dlaczego chcesz dołączyć do Fotz Studio..."
                        required
                        rows={5}
                        className="bg-background resize-none"
                      />
                    </div>

                    <p className="text-xs text-muted-foreground">
                      Wysyłając aplikację, wyrażasz zgodę na przetwarzanie danych osobowych 
                      w procesie rekrutacji zgodnie z{" "}
                      <a href="/polityka-prywatnosci" className="text-primary hover:underline">
                        Polityką Prywatności
                      </a>
                      .
                    </p>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Wysyłanie...</>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Wyślij aplikację
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
