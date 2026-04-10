import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, Target, TrendingUp, Users, Lightbulb, BarChart3, Palette, Video, MessageSquare, Globe, Zap, Award, Clock, Shield, Play } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { InstagramEmbed } from "@/components/InstagramEmbed";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const AgencjaReklamowaPoznan = () => {
  const services = [
    { icon: Target, title: "Kampanie Google Ads", desc: "Reklamy w wyszukiwarce i sieci reklamowej Google" },
    { icon: Users, title: "Kampanie Meta Ads", desc: "Reklamy na Facebooku i Instagramie" },
    { icon: Palette, title: "Branding i identyfikacja", desc: "Logo, księga znaku, materiały reklamowe" },
    { icon: Video, title: "Video marketing", desc: "Produkcja treści wideo i UGC" },
    { icon: Globe, title: "Web design", desc: "Strony internetowe i landing page" },
    { icon: MessageSquare, title: "Content marketing", desc: "Strategia treści i social media" },
  ];

  const faqItems = [
    {
      question: "Agencja reklamowa Poznań — czym wyróżnia się lokalna firma w obszarze digital?",
      answer: "Agencja reklamowa w Poznaniu łączy wiedzę o rynku lokalnym z kompetencjami digital i marketingu internetowego, oferując spójność komunikacji online i offline. Dzięki analityce i monitorowaniu wyników agencja dostosowuje kampanie w Google i Meta Ads tak, by osiągnąć najlepsze rezultaty przy optymalnym budżecie reklamowym, jednocześnie dbając o profesjonalny wizerunek marki na rynku."
    },
    {
      question: "Branding i design — jak agencja kreatywna buduje spójność wizualną twojej marce?",
      answer: "Agencja kreatywna opracowuje strategię brandingu, visual i design, która zapewnia spójność identyfikacji — od logotypu po materiały marketingowe. Dzięki produkcji wideo, contentowi i UGC można zwiększyć zaangażowania odbiorców, a analityka pozwala mierzyć wpływ na rozpoznawalność marki i pozycję wobec konkurencji."
    },
    {
      question: "Content i kampanie w Google — jak tworzyć treści, które konwertują?",
      answer: "Skuteczny content łączy SEO, reklamy w Google Ads i strategie social media (w tym LinkedIn i TikTok) w oparciu o dane. Kreacje visual oraz treści edukacyjne i sprzedażowe powinny odpowiadać na cele biznesowe, by maksymalizować ROI i najlepiej wykorzystać budżet reklamowy."
    },
    {
      question: "Strategiczny plan — kiedy współpraca z agencją jest niezbędna dla rozwoju firmy?",
      answer: "Współpraca z agencją jest kluczowa, gdy firma potrzebuje strategicznego podejścia 360: od analizy rynku i konkurencji, przez planowanie kampanii digital, po wdrożenie i monitorowanie wyników. Profesjonalny partner zapewnia transparentność, raportowanie i dostosowanie działań do zmieniających się celów biznesowych."
    },
    {
      question: "TikTok i Instagram — czy to najskuteczniejszy kanał dla mojej marki?",
      answer: "TikTok może być najskuteczniejszy dla marek celujących w wysokie zaangażowanie odbiorców i szybkie budowanie zasięgu, szczególnie przy wykorzystaniu UGC i produkcji wideo. Decyzję warto oprzeć o analitykę demograficzną i testy A/B, a także uwzględnić obecność na LinkedIn i kanałach offline, jeśli grupa docelowa tego wymaga."
    },
    {
      question: "Meta Ads i Google Ads — jak optymalizować budżet reklamowy na rezultaty?",
      answer: "Optymalizacja budżetu reklamowego polega na ciągłym monitorowaniu wyników, analizie konwersji i alokacji środków do najefektywniejszych kanałów. Agencja stosuje strategie oparte o dane, testuje kreacje visual i copy, oraz wykorzystuje remarketing 360, by osiągnąć najlepsze rezultaty przy możliwie niskim koszcie pozyskania klienta."
    },
    {
      question: "UGC i zaangażowanie odbiorców — jak wykorzystać treści tworzone przez użytkowników?",
      answer: "UGC zwiększa wiarygodność i zaangażowanie odbiorców, wzmacniając profesjonalny wizerunek marki i obniżając koszty produkcji wideo. Agencja pomaga moderować i włączać UGC do kampanii digital i offline w sposób zgodny ze strategią marki, dbając o transparentność i prawa autorskie."
    },
    {
      question: "FMCG i konkurencja — jakie działania marketingowe sprawdzają się w branży szybkozbywalnej?",
      answer: "W sektorze FMCG efektywne są kampanie łączące digital i POS (offline), szybkie testy R&D produktowego oraz silna obecność w social media. Analityka sprzedaży, monitorowanie rynku i szybkie optymalizacje kreatywne pozwalają przebić konkurencję i zająć lepsze miejsce marki na rynku."
    },
    {
      question: "Case w oparciu o dane — jak mierzyć skuteczność i raportować rezultaty?",
      answer: "Najlepsze case'y opierają się na jasno zdefiniowanych celach biznesowych, strukturze mierników KPI i regularnych raportach analitycznych. Transparentność w raportowaniu oraz monitorowanie metryk (ruch, konwersje, zaangażowanie odbiorców, ROI) umożliwiają wprowadzanie korekt i osiąganie najskuteczniejszych efektów w długim terminie."
    }
  ];

  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Agencja Reklamowa Poznań — Reklama Online, Spoty, Kampanie | Fotz Studio"
        description="Agencja reklamowa Poznań — tworzenie reklam wideo, spoty reklamowe, kampanie Google Ads i Meta Ads, identyfikacja wizualna. Fotz Studio."
        canonical="https://fotz.pl/agencja-reklamowa-poznan"
        keywords="agencja reklamowa poznań, kampanie reklamowe poznań, reklama google ads, meta ads poznań, branding poznań, reklama atl btl, agencja kreatywna poznań"
      />
      <ServiceSchema
        name="Agencja Reklamowa Poznań"
        description="Kompleksowe kampanie reklamowe, branding, Google Ads, Meta Ads. Strategiczny partner w budowaniu silnej marki."
        provider="Fotz Studio"
        areaServed="Poznań"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja Reklamowa Poznań", url: "https://fotz.pl/agencja-reklamowa-poznan" }
        ]}
      />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        
        <div className="container mx-auto px-4 relative z-10 pt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            >
              Agencja Reklamowa Poznań: Google Ads, Meta Ads, Branding
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              W dynamicznym świecie biznesu efektywna komunikacja marketingowa jest kluczem do sukcesu. <strong className="text-foreground">Agencja marketingowa Poznań to Twój strategiczny partner w budowaniu silnej marki i osiąganiu celów biznesowych</strong>. Oferujemy kompleksowe rozwiązania, od analizy rynku po wdrożenie kampanii reklamowych.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/kontakt">
                  Bezpłatna konsultacja <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+48790814814">
                  <Phone className="mr-2 h-5 w-5" /> +48 790 814 814
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wprowadzenie Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Wprowadzenie do agencji reklamowej w Poznaniu
            </motion.h2>
            
            <div className="space-y-12">
              <motion.div variants={fadeIn} className="bg-background p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Target className="h-7 w-7 text-primary" />
                  Rola agencji reklamowej w marketingu
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Agencja reklamowa Poznań odgrywa kluczową rolę w efektywnym marketingu, oferując kompleksowe wsparcie w budowaniu marki i docieraniu do potencjalnych klientów</strong>. Agencja kreatywna opracowuje innowacyjne kampanie reklamowe, wykorzystując różnorodne narzędzia i kanały komunikacji. Celem jest zwiększenie rozpoznawalności marki w mediach społecznościowych, generowanie leadów i optymalizacja kampanii pod kątem sprzedaży.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-background p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <CheckCircle className="h-7 w-7 text-primary" />
                  Dlaczego warto współpracować z agencją w Poznaniu?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Współpraca z agencją reklamową w Poznaniu to strategiczna decyzja, która przynosi wymierne korzyści dla Twojej firmy</strong>. Agencja marketingowa Poznań oferuje kompleksową obsługę obejmującą analizę rynku, opracowanie strategii marketingowej, wdrażanie kampanii reklamowych oraz optymalizację działań marketingowych. Dzięki temu możesz skupić się na kluczowych aspektach prowadzenia biznesu.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-background p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <MapPin className="h-7 w-7 text-primary" />
                  Specyfika rynku reklamowego w Poznaniu
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Rynek reklamowy w Poznaniu charakteryzuje się specyfiką, którą warto uwzględnić w działaniach marketingowych Twojej firmy</strong>. Agencja reklamowa Poznań, dzięki lokalnej wiedzy i doświadczeniu, doskonale rozumie potrzeby potencjalnych klientów i trendy panujące w regionie. Wykorzystując narzędzia takie jak Google Ads, SEO i influencer marketing, agencja pomaga w budowaniu silnej marki.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oferta Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Oferta agencji marketingowej
            </motion.h2>

            {/* Services Grid */}
            <motion.div variants={fadeIn} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group">
                  <service.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Kampanie Section */}
            <motion.div variants={fadeIn} className="max-w-4xl mx-auto space-y-12">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-semibold mb-4">Kampanie reklamowe w Google i social media</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Agencja reklamowa Poznań, Fotz Studio, oferuje kompleksowe kampanie reklamowe Meta Ads i Google Ads, zwiększające rozpoznawalność Twojej firmy w social media</strong>. Specjalizujemy się w kampaniach SEM, które generują leady i realne wyniki sprzedażowe. Nasze kreatywne strategie reklamowe są dopasowane do specyfiki Twojej firmy.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-semibold mb-4">Usługi brandingowe i identyfikacja wizualna</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Zakres usług agencji reklamowej Poznań, Fotz Studio, obejmuje kompleksowy branding i identyfikację wizualną. Kreujemy unikalny wizerunek Twojej marki:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Usługi web design</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Tworzenie logo i księgi znaku</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Projektowanie materiałów reklamowych</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Opracowywanie innych elementów identyfikacji wizualnej</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-semibold mb-4">Tworzenie treści i strategii marketingowych</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-foreground">Agencja reklamowa Poznań, Fotz Studio, oferuje kompleksowe usługi tworzenia treści i strategii marketingowych</strong>. Tworzymy angażujący content marketingowy na potrzeby social media i stron internetowych.
                </p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Usługi Content Marketingowe</TableHead>
                      <TableHead>Pozostałe Usługi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Video marketing i produkcja treści</TableCell>
                      <TableCell>Wdrażanie systemów pozyskiwania leadów i automatyzacja marketingu</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Współpraca Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Współpraca z agencją reklamową
            </motion.h2>

            <motion.div variants={fadeIn} className="bg-background p-8 rounded-2xl border border-border mb-8">
              <h3 className="text-2xl font-semibold mb-4">Jak wybrać odpowiednią agencję reklamową?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Wybór odpowiedniej agencji reklamowej w Poznaniu to kluczowa decyzja dla sukcesu Twojej firmy</strong>. Szukaj partnera, a nie wykonawcy. Dobra agencja to strategiczny partner w rozwoju Twojej firmy.
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Typ Klienta</TableHead>
                    <TableHead>Oczekiwane Rezultaty</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Marki Premium</TableCell>
                    <TableCell>Doświadczenie i case studies agencji</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">E-commerce i Skalujące się Biznesy</TableCell>
                    <TableCell>Sprzedaż i leady. Oczekuj danych, optymalizacji i testów.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-muted-foreground mt-4">
                Instytucje i organizacje cenią stabilność i profesjonalizm. Oczekuj jasnego procesu i mierzalnych efektów.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-background p-8 rounded-2xl border border-border mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Award className="h-7 w-7 text-primary" />
                Przykłady udanych kampanii reklamowych
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Agencja reklamowa Poznań, Fotz Studio, może pochwalić się licznymi przykładami udanych kampanii reklamowych</strong>, które przyczyniły się do wzrostu rozpoznawalności i sprzedaży naszych klientów. Wdrożyliśmy kompleksowe strategie marketingowe dla firm z różnych branż, osiągając wysokie wskaźniki konwersji.
              </p>
              <div className="mt-4">
                <Button asChild variant="outline">
                  <Link to="/realizacje">Zobacz nasze realizacje <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-background p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Users className="h-7 w-7 text-primary" />
                Referencje i opinie klientów
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Referencje i opinie klientów są najlepszym dowodem na skuteczność agencji reklamowej Poznań, Fotz Studio</strong>. Nasze kompleksowe działania marketingowe są doceniane przez klientów z różnych branż za kreatywność, profesjonalizm i efektywność.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Realizations Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Play className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Nasze realizacje wideo
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Zobacz przykłady naszych produkcji wideo dla klientów z Poznania i całej Polski. Tworzymy angażujący content, który buduje markę.
              </p>
            </motion.div>

            {/* Featured Video */}
            <motion.div variants={fadeIn} className="mb-12">
              <div className="max-w-2xl mx-auto">
                <div className="relative aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden border border-border bg-card">
                  <video
                    src="/videos/fotz-reel.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center mt-3 text-muted-foreground">Kulisy pracy Fotz Studio</p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <InstagramEmbed 
                  url="https://www.instagram.com/reel/DSKans0jDzY/" 
                  className="flex-1"
                />
                <div className="mt-3 text-center">
                  <span className="text-sm text-muted-foreground">Enea Stadion Poznań</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <InstagramEmbed 
                  url="https://www.instagram.com/reel/DR4RyXdiOEt/" 
                  className="flex-1"
                />
                <div className="mt-3 text-center">
                  <span className="text-sm text-muted-foreground">Klub Muzyczny B17</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <InstagramEmbed 
                  url="https://www.instagram.com/reel/DRPhtXkkuJj/" 
                  className="flex-1"
                />
                <div className="mt-3 text-center">
                  <span className="text-sm text-muted-foreground">Klub Muzyczny B17</span>
                </div>
              </div>

              <div className="flex flex-col">
                <InstagramEmbed 
                  url="https://www.instagram.com/reel/DQpSgAqjGxB/" 
                  className="flex-1"
                />
                <div className="mt-3 text-center">
                  <span className="text-sm text-muted-foreground">Enea Stadion Poznań</span>
                </div>
              </div>

              <div className="flex flex-col">
                <InstagramEmbed 
                  url="https://www.instagram.com/reel/DQCNKAajM-q/" 
                  className="flex-1"
                />
                <div className="mt-3 text-center">
                  <span className="text-sm text-muted-foreground">Enea Stadion Poznań</span>
                </div>
              </div>

              <div className="flex flex-col">
                <InstagramEmbed 
                  url="https://www.instagram.com/reel/DPtonLMDC8o/" 
                  className="flex-1"
                />
                <div className="mt-3 text-center">
                  <span className="text-sm text-muted-foreground">Enea Stadion Poznań</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center mt-10">
              <Button asChild size="lg" variant="outline">
                <a href="https://www.instagram.com/fotz_studio/" target="_blank" rel="noopener noreferrer">
                  Zobacz więcej na Instagram <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trendy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Trendy w branży marketingowej
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div variants={fadeIn} className="bg-card p-6 rounded-xl border border-border">
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Wzrost znaczenia influencer marketingu</h3>
                <p className="text-muted-foreground text-sm">
                  Influencer marketing to skuteczne narzędzie budowania rozpoznawalności marki w autentyczny sposób, zwiększające zaufanie do Twojej firmy.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-card p-6 rounded-xl border border-border">
                <BarChart3 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Optymalizacja kampanii reklamowych</h3>
                <p className="text-muted-foreground text-sm">
                  Analizujemy dane, aby identyfikować obszary do poprawy i zwiększać efektywność kampanii w Google Ads i social media.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-card p-6 rounded-xl border border-border">
                <Lightbulb className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Kreatywne podejście do e-commerce</h3>
                <p className="text-muted-foreground text-sm">
                  Tworzymy unikalne kampanie reklamowe, które przyciągają uwagę potencjalnych klientów i zwiększają sprzedaż.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Przyszłość Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Przyszłość agencji reklamowych w Poznaniu
            </motion.h2>

            <div className="space-y-6">
              <motion.div variants={fadeIn} className="bg-background p-6 rounded-xl border border-border flex gap-4">
                <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategie na nadchodzące lata</h3>
                  <p className="text-muted-foreground">
                    Opracowujemy strategie uwzględniając zmieniające się trendy w branży i nowe technologie. Skupiamy się na kompleksowej obsłudze klientów i budowaniu długotrwałych relacji.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-background p-6 rounded-xl border border-border flex gap-4">
                <Zap className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dostosowanie do zmieniającego się rynku</h3>
                  <p className="text-muted-foreground">
                    Kluczowe jest śledzenie trendów, inwestowanie w rozwój kompetencji zespołu i wdrażanie nowych technologii dla przewagi konkurencyjnej.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-background p-6 rounded-xl border border-border flex gap-4">
                <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rola danych w strategiach marketingowych</h3>
                  <p className="text-muted-foreground">
                    Analizujemy dane demograficzne, zachowania użytkowników i wyniki kampanii, aby identyfikować trendy i dostosowywać strategie do potrzeb klientów.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Często zadawane pytania
            </motion.h2>

            <motion.div variants={fadeIn}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Porozmawiajmy o Twoim marketingu
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8">
              Umów się na bezpłatną konsultację i dowiedz się, jak możemy pomóc rozwinąć Twoją firmę.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/kontakt">
                  Bezpłatna konsultacja <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+48790814814">
                  <Phone className="mr-2 h-5 w-5" /> Zadzwoń teraz
                </a>
              </Button>
            </motion.div>
            <motion.div variants={fadeIn} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
              <a href="mailto:adam@fotz.pl" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" /> adam@fotz.pl
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" /> Plac Wolności 16, Poznań
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Agencja reklamowa Poznań — tworzenie reklam wideo i kampanie reklamowe</h2>
            <p className="text-muted-foreground mb-4">Agencja reklamowa Poznań — Fotz Studio specjalizuje się w tworzeniu reklam wideo, spotów reklamowych, kampanii Google Ads i Meta Ads oraz kompleksowej identyfikacji wizualnej. Obsługujemy firmy z Poznania, Wielkopolski i całej Polski, tworząc materiały reklamowe wysokiej jakości, które przyciągają uwagę i budują markę.</p>
            <p className="text-muted-foreground mb-6">Tworzenie reklam wideo to jeden z najefektywniejszych formatów we współczesnej reklamie. Spoty reklamowe online (pre-roll na YouTube, reklamy wideo na Facebooku i Instagramie) generują wysoki zasięg i zaangażowanie przy relatywnie niskim koszcie dotarcia.</p>

            <h2 className="text-3xl font-heading font-bold mb-6">Spoty reklamowe, filmy reklamowe Poznań i produkcja wideo dla firm</h2>
            <p className="text-muted-foreground mb-4">Filmy reklamowe Poznań — produkcja spotów od scenariusza po post-produkcję. Tworzymy: spoty reklamowe do emisji w TV i online, filmy prezentacyjne firm, materiały wideo na social media (rolki, reelsy), video marketing dla e-commerce (zdjęcia 360°, wideo produktowe) i animacje 2D i 3D.</p>
            <p className="text-muted-foreground">Agencja reklamowa Poznań to jeden punkt obsługi dla wszystkich potrzeb reklamowych — kreacja, produkcja i media planning. Zarządzanie kampaniami PPC, obsługa graficzna oraz usługi foto i wideo — wszystko pod jednym dachem. Zbudujmy razem kampanię, która zostawi ślad w głowach Twoich klientów.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
    </>
  );
};

export default AgencjaReklamowaPoznan;
