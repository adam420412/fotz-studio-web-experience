import { useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, WebPageSchema } from "@/components/seo/StructuredData";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  Download, FileText, CheckSquare, Video, BookOpen, 
  ArrowRight, Lock, Mail, Sparkles, Target, TrendingUp
} from "lucide-react";
import { toast } from "sonner";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "ebook" | "checklist" | "template" | "video";
  category: string;
  downloadUrl: string;
  thumbnail: string;
  gated: boolean;
}

const resources: Resource[] = [
  {
    id: "checklist-kampania",
    title: "Checklist: Skuteczna kampania reklamowa",
    description: "25-punktowa lista kontrolna przed uruchomieniem kampanii w Google Ads lub Facebook Ads. Uniknij najczęstszych błędów.",
    type: "checklist",
    category: "Reklama",
    downloadUrl: "#",
    thumbnail: "/videos/ads-campaign-poster.jpg",
    gated: true,
  },
  {
    id: "ebook-social-media",
    title: "E-book: Social Media dla biznesu",
    description: "Kompletny przewodnik po prowadzeniu profili firmowych na Facebooku, Instagramie, LinkedIn i TikTok. 40+ stron praktycznych porad.",
    type: "ebook",
    category: "Social Media",
    downloadUrl: "#",
    thumbnail: "/videos/social-media-poster.jpg",
    gated: true,
  },
  {
    id: "checklist-seo",
    title: "Checklist: SEO on-page",
    description: "Sprawdź czy Twoja strona spełnia wszystkie wymagania SEO. 30 punktów do weryfikacji przed publikacją.",
    type: "checklist",
    category: "SEO",
    downloadUrl: "#",
    thumbnail: "/videos/sequence-01-poster.jpg",
    gated: true,
  },
  {
    id: "template-content",
    title: "Szablon: Kalendarz content marketingu",
    description: "Gotowy szablon kalendarza treści na 3 miesiące. Planuj posty w social mediach i artykuły blogowe efektywnie.",
    type: "template",
    category: "Content",
    downloadUrl: "#",
    thumbnail: "/videos/video-production-poster.jpg",
    gated: true,
  },
  {
    id: "ebook-ecommerce",
    title: "E-book: Marketing dla e-commerce",
    description: "Jak zwiększyć sprzedaż w sklepie internetowym? Strategie reklamowe, SEO produktowe i remarketing w jednym poradniku.",
    type: "ebook",
    category: "E-commerce",
    downloadUrl: "#",
    thumbnail: "/videos/real-estate-poster.jpg",
    gated: true,
  },
  {
    id: "checklist-strona",
    title: "Checklist: Przed startem strony www",
    description: "Co sprawdzić przed opublikowaniem nowej strony internetowej? 40 punktów od technikaliów po marketing.",
    type: "checklist",
    category: "Strony WWW",
    downloadUrl: "#",
    thumbnail: "/videos/fps-poznan-poster.jpg",
    gated: true,
  },
];

const typeIcons = {
  ebook: BookOpen,
  checklist: CheckSquare,
  template: FileText,
  video: Video,
};

const typeLabels = {
  ebook: "E-book",
  checklist: "Checklist",
  template: "Szablon",
  video: "Wideo",
};

const Zasoby = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [unlockingResource, setUnlockingResource] = useState<string | null>(null);
  const [unlockedResources, setUnlockedResources] = useState<string[]>([]);

  const categories = [...new Set(resources.map(r => r.category))];

  const filteredResources = selectedCategory 
    ? resources.filter(r => r.category === selectedCategory)
    : resources;

  const handleUnlock = (resourceId: string) => {
    if (!email || !email.includes("@")) {
      toast.error("Podaj prawidłowy adres email");
      return;
    }

    // Simulate unlocking
    toast.success("Sprawdź swoją skrzynkę email! Link do pobrania został wysłany.");
    setUnlockedResources(prev => [...prev, resourceId]);
    setUnlockingResource(null);
    setEmail("");
  };

  return (
    <>
      <SEOHead
        title="Darmowe Zasoby Marketingowe — E-booki, Checklisty i Szablony | Fotz Studio"
        description="Darmowe zasoby marketingowe Fotz Studio — e-booki, checklisty SEO, szablony briefów i kalkulatory. Pobierz bezpłatne materiały dla firm i marketerów."
        canonical="https://fotz.pl/zasoby"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Zasoby", url: "https://fotz.pl/zasoby" }
        ]}
      />
      <WebPageSchema 
        title="Darmowe zasoby marketingowe"
        description="E-booki, checklisty i szablony marketingowe do pobrania."
        url="https://fotz.pl/zasoby"
      />
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Darmowe materiały</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Zasoby
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Marketingowe</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pobierz darmowe e-booki, checklisty i szablony stworzone przez naszych ekspertów. 
                Praktyczna wiedza, która pomoże Ci rozwinąć biznes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-6 px-4 border-b border-border sticky top-16 bg-background/95 backdrop-blur z-40">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !selectedCategory ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                }`}
              >
                Wszystkie
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => {
                const Icon = typeIcons[resource.type];
                const isUnlocked = unlockedResources.includes(resource.id);
                const isUnlocking = unlockingResource === resource.id;

                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={resource.thumbnail}
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-medium flex items-center gap-1.5">
                          <Icon className="w-3.5 h-3.5" />
                          {typeLabels[resource.type]}
                        </span>
                        <span className="px-3 py-1 bg-background/80 backdrop-blur rounded-full text-xs font-medium">
                          {resource.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {resource.description}
                      </p>

                      {/* Gated Content Form */}
                      {resource.gated && !isUnlocked ? (
                        isUnlocking ? (
                          <div className="space-y-3">
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <Input
                                type="email"
                                placeholder="Twój adres email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-10"
                              />
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                className="flex-1"
                                onClick={() => handleUnlock(resource.id)}
                              >
                                Pobierz
                              </Button>
                              <Button 
                                size="sm" 
                                variant="ghost"
                                onClick={() => setUnlockingResource(null)}
                              >
                                Anuluj
                              </Button>
                            </div>
                            <p className="text-xs text-muted-foreground text-center">
                              Wysyłając formularz zgadzasz się na otrzymywanie newslettera
                            </p>
                          </div>
                        ) : (
                          <Button 
                            variant="outline" 
                            className="w-full gap-2"
                            onClick={() => setUnlockingResource(resource.id)}
                          >
                            <Lock className="w-4 h-4" />
                            Odblokuj za email
                          </Button>
                        )
                      ) : (
                        <Button className="w-full gap-2">
                          <Download className="w-4 h-4" />
                          Pobierz teraz
                        </Button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-12">Dlaczego warto pobrać nasze materiały?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Praktyczne porady</h3>
                <p className="text-sm text-muted-foreground">
                  Żadnej teorii - tylko sprawdzone metody, które stosujemy w codziennej pracy.
                </p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Aktualna wiedza</h3>
                <p className="text-sm text-muted-foreground">
                  Materiały regularnie aktualizowane zgodnie z najnowszymi trendami marketingu.
                </p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Od ekspertów</h3>
                <p className="text-sm text-muted-foreground">
                  Tworzone przez specjalistów z 600+ zrealizowanych projektów.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Potrzebujesz więcej niż materiały?</h2>
            <p className="text-muted-foreground mb-8">
              Jeśli szukasz kompleksowej pomocy z marketingiem, porozmawiajmy o Twoich potrzebach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt">
                <Button size="lg" className="gap-2">
                  Umów bezpłatną konsultację
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/quiz">
                <Button variant="outline" size="lg">
                  Wypełnij quiz rekomendacyjny
                </Button>
              </Link>
            </div>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Darmowe zasoby marketingowe — e-booki, checklisty i szablony do pobrania
            </h2>
            <p className="text-muted-foreground mb-4">
              Fotz Studio udostępnia bezpłatne zasoby marketingowe dla firm i marketerów.
              W naszej bibliotece znajdziesz praktyczne e-booki o SEO i content marketingu,
              checklisty do audytu strony i kampanii reklamowych, szablony briefów
              projektowych oraz kalkulatory ROI i kosztów. Materiały tworzymy
              na podstawie wieloletniego doświadczenia w obsłudze klientów.
            </p>
            <p className="text-muted-foreground mb-6">
              Darmowe zasoby marketingowe to nasza inwestycja w edukację polskiego rynku.
              Wierzymy, że firmy znające podstawy marketingu są lepszymi partnerami
              do współpracy — rozumieją nasze działania i bardziej doceniają ich wartość.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              E-booki o SEO, content marketingu i reklamach — praktyczna wiedza do pobrania
            </h2>
            <p className="text-muted-foreground mb-4">
              Nasze e-booki marketingowe omawiają najważniejsze tematy: jak pozycjonować
              stronę w Google (SEO krok po kroku), jak tworzyć treści, które sprzedają
              (copywriting i content marketing), jak prowadzić skuteczne kampanie
              Google Ads i Meta Ads, jak budować markę w mediach społecznościowych.
            </p>
            <p className="text-muted-foreground mb-6">
              Checklisty i szablony to praktyczne narzędzia do codziennej pracy
              marketera i przedsiębiorcy. Checklista audytu SEO, szablon briefu
              kampanii reklamowej, szablon strategii content marketingu —
              gotowe do użycia po pobraniu.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Bezpłatne narzędzia marketingowe — kalkulatory, generatory i szablony
            </h2>
            <p className="text-muted-foreground">
              Kalkulator ROI kampanii reklamowych, generator briefu projektowego
              i kalkulator cen usług marketingowych — bezpłatne narzędzia online
              dla firm planujących działania marketingowe. Oblicz, ile może kosztować
              marketing Twojej firmy i jaki zwrot z inwestycji możesz oczekiwać.
              Pobierz nasze zasoby i zacznij działać z planem.
            </p>
          </motion.div>
        </div>
      </section>

      </Layout>
    </>
  );
};

export default Zasoby;
