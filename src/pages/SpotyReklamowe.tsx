import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Play, 
  Video, 
  Film, 
  Clapperboard,
  Sparkles,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  Palette,
  Volume2,
  MonitorPlay,
  Share2,
  Megaphone
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const videos = [
  { id: "OC1VEXL1PCk", title: "Spot reklamowy - Realizacja 1" },
  { id: "N92YjnDq1ks", title: "Spot reklamowy - Realizacja 2" },
  { id: "LXTjtFpHgbc", title: "Spot reklamowy - Realizacja 3" },
  { id: "GqxcFYBYlq4", title: "Spot reklamowy - Realizacja 4" },
  { id: "XsDrb84IljY", title: "Spot reklamowy - Realizacja 5" },
];

const processSteps = [
  { icon: Target, title: "Określenie celu", description: "Definiujemy cel kampanii i grupę docelową" },
  { icon: Clapperboard, title: "Scenariusz", description: "Tworzymy kreatywny scenariusz spotu" },
  { icon: Film, title: "Produkcja", description: "Realizacja nagrań z profesjonalną ekipą" },
  { icon: Palette, title: "Postprodukcja", description: "Montaż, koloryzacja i efekty specjalne" },
];

const faqItems = [
  {
    question: "Jak produkcja spotów reklamowych zmienia się pod wpływem nowych technologii?",
    answer: "Produkcja spotów reklamowych ewoluuje bardzo dynamicznie, głównie dzięki postępowi technologicznemu. Stosowanie nowoczesnych technik takich jak animacja 3D, efekty specjalne w 2D lub nawet rozbudowane techniki montażu pozwala tworzyć bardziej atrakcyjne i angażujące wideo. To sprawia, że każdy film produktowy może być nie tylko prezentacją oferty, ale też dziełem sztuki marketingowej."
  },
  {
    question: "Jakie są główne zalety wykorzystania filmu produktowego w strategii marketingowej?",
    answer: "Film produktowy oferuje możliwość przekazania kluczowych cech produktu lub usługi w sposób atrakcyjny i przystępny dla odbiorcy. Dobrze zrealizowane wideo może zwiększyć rozpoznawalność marki, osiągnąć zamierzone cele marketingowe, a także poprawić wizerunek danej firmy na stronach internetowych oraz w mediach społecznościowych."
  },
  {
    question: "Jakie kroki należy podjąć, aby zrealizować film reklamowy?",
    answer: "Pierwszym krokiem jest zawsze zdefiniowanie celów, które chcesz osiągnąć dzięki reklamie video. Następnie warto zwrócić uwagę na proces tworzenia scenariusza, gdyż to on stanowi podstawę każdego dobrego filmu. Po przygotowaniu scenariusza można przejść do fazy produkcji, czyli samych nagrań, a następnie do montażu wideo. Ważne jest, aby cały proces był wspierany przez doświadczoną ekipę, która pomoże wykreować oczekiwany obraz marki."
  },
  {
    question: "W jaki sposób tworzymy spoty reklamowe, aby były skuteczne?",
    answer: "Aby spoty reklamowe były skuteczne, należy skoncentrować się na jasnym przekazie, atrakcyjnym wizualnie wykonaniu oraz dopasowaniu do grupy docelowej. Istotne jest również, aby treść była zrozumiała i angażująca, co zwiększa szansę na to, że odbiorcy będą chcieli podzielić się nią z innymi. Nie można zapominać o znaczeniu odpowiedniej muzyki i efektów dźwiękowych, które potęgują emocje widzów."
  },
  {
    question: "Czy warto skorzystać z pomocy profesjonalistów przy tworzeniu scenariusza?",
    answer: "Tworzenie scenariusza spotu reklamowego wymaga znajomości pewnych zasad i doświadczenia w dziedzinie produkcji filmowej. Chociaż możesz spróbować stworzyć scenariusz samodzielnie, skorzystanie z pomocy profesjonalistów zapewnia, że treść będzie nie tylko kreatywna, ale również skutecznie wpisze się w wymogi rynku oraz aktualne trendy, co znacząco zwiększy potencjał marketingowy filmu."
  },
  {
    question: "Jak znaleźć odpowiednią ekipę do realizacji filmu produktowego?",
    answer: "Znalezienie odpowiedniej ekipy do realizacji filmu produktowego wymaga przeprowadzenia dokładnych badań. Najlepiej zacząć od przeczytania recenzji i obejrzenia portfolio różnych studiów produkcyjnych. Ważne, aby wybrać zespół, który ma doświadczenie w tworzeniu treści dla firm z branży podobnej do Twojej. Ponadto, warto skontaktować się z wybranymi firmami, aby dokładnie omówić Twoje potrzeby i oczekiwania."
  },
  {
    question: "Jaki jest idealny czasowy zakres filmu reklamowego?",
    answer: "Idealna długość filmu reklamowego zależy od wielu czynników, w tym od platformy, na której ma być publikowany, oraz od przekazu, jaki chcesz przekazać. Generalnie, krótsze, dynamiczne wideo, trwające od 15 do 30 sekund, jest zalecane na media społecznościowe, podczas gdy bardziej szczegółowe przekazy mogą wymagać dłuższej formy. Kluczowe jest, aby utrzymać uwagę widza i przekazać główne wartości w jak najbardziej skondensowany sposób."
  },
  {
    question: "Gdzie najlepiej publikować film reklamowy?",
    answer: "Wybór platformy do publikacji filmu reklamowego zależy od Twojego docelowego odbiorcy oraz celów marketingowych. Media społecznościowe takie jak Facebook, Instagram, czy YouTube są idealne do szybkiego dotarcia do szerokiej publiczności. Dla bardziej specjalistycznych lub B2B produktów, publikacja na LinkedIn lub dedykowanej stronie internetowej może przynieść lepsze rezultaty. Rozważ też wykorzystanie telebimów czy innych form reklamy zewnętrznej, jeśli pasuje to do Twojej strategii."
  },
];

export default function SpotyReklamowe() {
  return (
    <Layout>
      <Helmet>
        <title>Spoty Reklamowe - Produkcja Filmów Promocyjnych | Fotz Studio</title>
        <meta name="description" content="Profesjonalna produkcja spotów reklamowych i filmów promocyjnych. Kreatywne reklamy wideo dla Twojej marki. Studio Fotz Poznań." />
        <link rel="canonical" href="https://fotz.pl/spoty-reklamowe" />
      </Helmet>
      
      <OrganizationSchema />
      <ServiceSchema 
        name="Spoty Reklamowe"
        description="Profesjonalna produkcja spotów reklamowych i filmów promocyjnych dla firm."
      />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] bg-primary/15" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px] bg-primary/10" />
        </div>
        
        <div className="container-wide relative z-10 pt-32 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.span 
              variants={fadeIn}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-6"
            >
              <Video className="w-4 h-4" />
              Produkcja filmowa
            </motion.span>
            
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
            >
              Krótkie spoty reklamowe, produkcja filmów promocyjnych - <span className="text-gradient">Studio Fotz</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl"
            >
              W dzisiejszych czasach, kiedy rynek reklamowy jest wyjątkowo nasycony, stworzenie skutecznej reklamy, która przykuje uwagę potencjalnych klientów, stanowi duże wyzwanie. Reklama, by odnieść sukces, musi być nie tylko kreatywna, ale i technicznie doskonale wykonana.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Zamów spot reklamowy
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#portfolio">
                  <Play className="w-5 h-5" />
                  Zobacz realizacje
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Portfolio Section */}
      <section id="portfolio" className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
              <Film className="w-4 h-4" />
              Nasze realizacje
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Spoty reklamowe <span className="text-gradient">w akcji</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-video rounded-xl overflow-hidden border border-border/50 shadow-lg"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Elements Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Kluczowe elementy
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Co sprawia, że spot reklamowy jest <span className="text-gradient">skuteczny?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  Czym charakteryzuje się skuteczny spot reklamowy?
                </h3>
                <p className="text-muted-foreground">
                  Skuteczny spot reklamowy musi przede wszystkim wyróżniać się na tle innych komunikatów. Powinien zawrzeć klarowne przesłanie, odnośnie produktu lub usługi, które chce promować. Długość spotu reklamowego, trwającego najczęściej 30 sekund, zmusza do skondensowania informacji, ale jednocześnie daje możliwość zbudowania silnego, emocjonalnego przekazu. Ważne jest, aby spot miał ciekawą opowieść lub pomysł, który zostanie zapamiętany przez widzów.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  Jak określić cel i target reklamy?
                </h3>
                <p className="text-muted-foreground">
                  Pierwszym krokiem w procesie kreowania spotu reklamowego jest określenie celu i grupy docelowej. Reklamowe i promocyjne cele mogą się różnić w zależności od tego, co chcemy osiągnąć: budowy świadomości marki, zwiększenia sprzedaży, czy wprowadzenia nowego produktu na rynek. Zrozumienie docelowych widzów pozwala na dopasowanie przekazu, stylu oraz kanału dystrybucji reklamy, tak aby jak najlepiej trafić do wybranej grupy odbiorców.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  Czynniki wpływające na skuteczność przekazu
                </h3>
                <p className="text-muted-foreground">
                  Na skuteczność przekazu promocyjnego mocno wpływają odpowiednio dobrana estetyka, kreacja oraz media, w których spot jest emitowany. Filmy promocyjne i spoty reklamowe powinny być zoptymalizowane pod kątem dostępnych platform i urządzeń, na których będą oglądane, co ma kluczowe znaczenie zwłaszcza w erze dominacji mediów cyfrowych. Ważne jest, aby reklama niosła ze sobą jasne call to action, zachęcające widzów do podjęcia konkretnych działań.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                <h3 className="text-xl font-heading font-bold mb-4">💡 Wskazówka</h3>
                <p className="text-muted-foreground">
                  Pamiętaj, że skuteczny spot reklamowy to taki, który nie tylko przyciąga uwagę, ale też zostaje w pamięci odbiorców i skłania ich do działania. Współpracując z profesjonalnym studiem produkcyjnym, masz pewność, że Twoja reklama spełni wszystkie te kryteria.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
              <Clapperboard className="w-4 h-4" />
              Produkcja filmowa
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Od pomysłu do <span className="text-gradient">realizacji</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center p-6 rounded-2xl bg-background border border-border/50"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                  {index + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-6">Jak przebiega proces produkcji spotu reklamowego?</h3>
              <p className="text-muted-foreground mb-6">
                Produkcja spotu reklamowego rozpoczyna się od zdefiniowania ideału reklamowego i napisania scenariusza. Następnie przechodzi przez etap preprodukcji, który obejmuje planowanie, dobór lokacji i casting. Realizacja, czyli właściwe kręcenie filmu, wymaga pracy zespołu złożonego z reżysera, operatora, scenografa i innych specjalistów. Każdy detal jest ważny, aby finalny produkt mógł skutecznie promować promowany produkt lub usługę.
              </p>
              <ul className="space-y-3">
                {["Preprodukcja i scenariusz", "Dobór lokacji i casting", "Profesjonalna realizacja", "Postprodukcja i efekty"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-6">Etapy postprodukcji</h3>
              <p className="text-muted-foreground mb-6">
                Postprodukcja jest etapem, na którym materiał filmowy zostaje zmieniony w gotowy spot reklamowy. Obróbka audio, kolor korekcja, dodanie efektów specjalnych czy animacji – wszystkie te działania mają na celu polepszenie estetyki i przekazu reklamy. To również czas, kiedy dokonuje się wyboru idealnego lektora oraz muzyki, które mają ogromne znaczenie dla ostatecznego odbioru spotu przez widzów.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Palette, label: "Korekcja kolorów" },
                  { icon: Volume2, label: "Obróbka audio" },
                  { icon: Sparkles, label: "Efekty specjalne" },
                  { icon: MonitorPlay, label: "Animacje" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
              <Clock className="w-4 h-4" />
              Budżet reklamowy
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Jak określić koszt <span className="text-gradient">realizacji spotu?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-card border border-border/50"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Czynniki wpływające na koszt</h3>
              <p className="text-muted-foreground">
                Koszt realizacji spotu reklamowego zależy od wielu czynników, takich jak czas trwania spotu, lokalizacja kręcenia, koszty wynajmu sprzętu, opłaty za zaangażowaną ekipę oraz wybrane techniki produkcji, w tym animacje i efekty specjalne. Nie należy też zapominać o budżecie na postprodukcję.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border/50"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Optymalizacja wydatków</h3>
              <p className="text-muted-foreground">
                Optymalizacja kosztów produkcji filmów promocyjnych może obejmować wybór prostszych lokalizacji, ograniczenie liczby dni kręcenia czy zredukowanie skali efektów specjalnych. Ważne jest, aby na wczesnym etapie wiedzieć, co konkretnie chcemy osiągnąć dzięki reklamie.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl bg-card border border-border/50"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Transparentność cennika</h3>
              <p className="text-muted-foreground">
                Zarówno dla agencji reklamowej, jak i klienta, kluczowe jest zrozumienie wszystkich kosztów związanych z produkcją spotu reklamowego. Transparentność cennika usług produkcyjnych pomaga w budowaniu zaufania i zapewnia, że każda strona wie, na co idą wydane środki.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Techniques Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Zaawansowane techniki
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Animacja i efekty specjalne <span className="text-gradient">w spotach</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-background border border-border/50"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Rola animacji</h3>
              <p className="text-muted-foreground">
                Animacja w spotach reklamowych to narzędzie, które, dzięki swojej plastyczności i możliwości adaptacji do różnych przekazów, skutecznie przyciąga uwagę widza. Pozwala ona na przedstawienie produktów i usług w intrygujący i często niekonwencjonalny sposób.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-background border border-border/50"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Efekty specjalne</h3>
              <p className="text-muted-foreground">
                Efekty specjalne, kiedy są wykorzystywane z umiarem i w odpowiedni sposób, mogą znacząco wzbogacić przekaz wizualny reklamy, przyciągając uwagę i budując dodatkowe emocje. Marka może zostać postrzegana jako innowacyjna i nowoczesna.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl bg-background border border-border/50"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <MonitorPlay className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Interaktywne spoty</h3>
              <p className="text-muted-foreground">
                Interaktywne spoty promocyjne, wykorzystując technologie takie jak VR czy AR, otwierają nowe możliwości dla producentów i reklamodawców, dając odbiorcom nie tylko pasywną rozrywkę, ale i aktywne uczestnictwo w przekazie.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distribution Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
              <Share2 className="w-4 h-4" />
              Emisja i promocja
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Jak dotrzeć do <span className="text-gradient">szerokiej publiczności?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Share2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Wybór kanałów dystrybucji</h3>
              <p className="text-muted-foreground">
                Wybór kanału dystrybucji reklamy to kluczowy element, decydujący o skuteczności dotarcia do wybranej grupy docelowej. Odpowiednie platformy mogą obejmować telewizję, radio, internet - w tym media społecznościowe oraz platformy streamingowe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Znaczenie targetowania</h3>
              <p className="text-muted-foreground">
                Targetowanie pozwala na skierowanie reklam do osób, które najprawdopodobniej będą zainteresowane oferowanym produktem lub usługą. Wykorzystanie danych demograficznych, zainteresowań czy zachowań konsumenckich umożliwia dopasowanie przekazu.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl bg-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Megaphone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Targi i eventy</h3>
              <p className="text-muted-foreground">
                Kolejną skuteczną formą promocji są targi branżowe i eventy, na których można bezpośrednio dotrzeć do zainteresowanych osób, zaprezentować produkt lub usługę, a nawet bezpośrednio interaktywnie angażować potencjalnych klientów.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Najczęściej zadawane <span className="text-gradient">pytania</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border border-border/50 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-heading font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Gotowy na profesjonalny <span className="text-gradient">spot reklamowy?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Skontaktuj się z nami i omów swój projekt. Stworzymy dla Ciebie spot reklamowy, który wyróżni Twoją markę na tle konkurencji.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Zamów bezpłatną wycenę
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/realizacje">Zobacz realizacje</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
