import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Zap, Settings, BarChart3, Mail, Users, Target, Bot, Workflow, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const BlogMarketingAutomation = () => {
  return (
    <>
      <Helmet>
        <title>Marketing Automation - jak zautomatyzować sprzedaż w 2025 | Fotz Studio</title>
        <meta 
          name="description" 
          content="Kompletny przewodnik po marketing automation. Dowiedz się jak automatyzować procesy marketingowe i zwiększać sprzedaż bez zwiększania zespołu." 
        />
        <meta name="keywords" content="marketing automation, automatyzacja marketingu, lead nurturing, CRM, email automation, sales funnel, konwersja" />
        <link rel="canonical" href="https://fotz.pl/blog/marketing-automation-2025" />
      </Helmet>
      <ArticleSchema
        title="Marketing Automation - jak zautomatyzować sprzedaż w 2025"
        description="Kompletny przewodnik po marketing automation. Automatyzacja procesów marketingowych."
        url="https://fotz.pl/blog/marketing-automation-2025"
        datePublished="2025-01-04"
        dateModified="2025-01-04"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Marketing Automation 2025", url: "https://fotz.pl/blog/marketing-automation-2025" },
        ]}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Powrót do bloga
              </Link>
              
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  4 stycznia 2025
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  20 min czytania
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Fotz Studio
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Marketing Automation - jak zautomatyzować sprzedaż w 2025
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                Firmy korzystające z automatyzacji marketingu generują o 451% więcej kwalifikowanych leadów. Dowiedz się, jak wdrożyć automatyzację w swojej firmie.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-invert max-w-none">
                
                <h2>Czym jest Marketing Automation?</h2>
                <p>
                  Marketing automation to wykorzystanie oprogramowania do automatyzacji powtarzalnych zadań marketingowych. 
                  Obejmuje email marketing, zarządzanie leadami, scoring, kampanie wielokanałowe i personalizację treści 
                  - wszystko bez ręcznej interwencji.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-12 not-prose">
                  {[
                    { icon: Bot, title: "Automatyzacja procesów", desc: "Sekwencje emaili, follow-upy i nurturing bez ręcznej pracy" },
                    { icon: Target, title: "Lead scoring", desc: "Automatyczna ocena i priorytetyzacja potencjalnych klientów" },
                    { icon: BarChart3, title: "Analityka w czasie rzeczywistym", desc: "Śledzenie zachowań i optymalizacja kampanii" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-xl bg-card border border-border"
                    >
                      <item.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <h2>Korzyści z wdrożenia automatyzacji</h2>
                
                <h3>1. Oszczędność czasu i zasobów</h3>
                <p>
                  Automatyzacja eliminuje powtarzalne zadania. Zamiast ręcznie wysyłać emaile do każdego leada, 
                  system robi to automatycznie na podstawie zdefiniowanych triggerów. Twój zespół może skupić się 
                  na strategii i kreatywnych zadaniach.
                </p>

                <h3>2. Lepsza personalizacja na skalę</h3>
                <p>
                  Systemy automatyzacji pozwalają na personalizację komunikacji dla tysięcy kontaktów jednocześnie. 
                  Każdy klient otrzymuje treści dopasowane do jego etapu w lejku sprzedażowym, zainteresowań i zachowań.
                </p>

                <h3>3. Wyższe współczynniki konwersji</h3>
                <p>
                  Firmy używające automatyzacji notują średnio 14,5% wzrost produktywności sprzedażowej i 12,2% 
                  redukcji kosztów marketingowych. Lead nurturing poprzez automatyzację zwiększa konwersję o 50%.
                </p>

                <div className="my-12 p-8 rounded-2xl bg-primary/10 border border-primary/20 not-prose">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Zap className="w-8 h-8 text-primary" />
                    Statystyki Marketing Automation
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-4xl font-bold text-primary">451%</div>
                      <p className="text-muted-foreground">więcej kwalifikowanych leadów</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary">14,5%</div>
                      <p className="text-muted-foreground">wzrost produktywności sprzedaży</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary">12,2%</div>
                      <p className="text-muted-foreground">redukcja kosztów marketingu</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary">77%</div>
                      <p className="text-muted-foreground">wzrost konwersji z nurturingu</p>
                    </div>
                  </div>
                </div>

                <h2>Kluczowe elementy systemu automatyzacji</h2>

                <h3>Email Automation</h3>
                <p>
                  Sekwencje emailowe to podstawa automatyzacji. Welcome series dla nowych subskrybentów, 
                  drip campaigns dla nurturingu leadów, czy abandoned cart dla e-commerce - każdy scenariusz 
                  można zautomatyzować.
                </p>

                <h3>Lead Scoring</h3>
                <p>
                  Automatyczne przypisywanie punktów leadom na podstawie ich zachowań (otwarcia emaili, 
                  wizyty na stronie, pobrania materiałów) pozwala priorytetyzować kontakty gotowe do zakupu.
                </p>

                <h3>Workflow Builder</h3>
                <p>
                  Wizualne narzędzia do budowania automatyzacji typu "if-then". Jeśli lead odwiedzi stronę cennika 
                  3 razy w tygodniu, automatycznie wyślij mu ofertę i powiadom handlowca.
                </p>

                <h2>Popularne narzędzia do automatyzacji</h2>
                
                <div className="my-8 not-prose">
                  <div className="space-y-4">
                    {[
                      { name: "HubSpot", desc: "Kompleksowa platforma all-in-one dla MŚP i enterprise", price: "od $45/mies." },
                      { name: "ActiveCampaign", desc: "Silny w email automation i CRM dla małych firm", price: "od $29/mies." },
                      { name: "Mailchimp", desc: "Prosty w obsłudze, dobry na start", price: "darmowy plan dostępny" },
                      { name: "Salesforce Marketing Cloud", desc: "Enterprise-level, zaawansowane możliwości", price: "na zapytanie" },
                      { name: "GetResponse", desc: "Polski system z dobrym stosunkiem jakości do ceny", price: "od 59 zł/mies." },
                    ].map((tool, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
                        <div>
                          <h4 className="font-semibold">{tool.name}</h4>
                          <p className="text-sm text-muted-foreground">{tool.desc}</p>
                        </div>
                        <span className="text-primary font-medium whitespace-nowrap ml-4">{tool.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h2>Jak wdrożyć automatyzację krok po kroku</h2>

                <div className="my-8 not-prose space-y-4">
                  {[
                    { step: "1", title: "Audyt procesów", desc: "Zidentyfikuj powtarzalne zadania, które pochłaniają najwięcej czasu" },
                    { step: "2", title: "Wybór narzędzia", desc: "Dopasuj platformę do wielkości firmy i budżetu" },
                    { step: "3", title: "Mapowanie customer journey", desc: "Zdefiniuj ścieżki klienta i punkty styku" },
                    { step: "4", title: "Tworzenie treści", desc: "Przygotuj emaile, landing pages i lead magnets" },
                    { step: "5", title: "Konfiguracja workflow", desc: "Zbuduj pierwszą prostą automatyzację" },
                    { step: "6", title: "Testowanie i optymalizacja", desc: "Mierz wyniki i iteruj" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <h2>Najczęstsze błędy przy wdrożeniu</h2>
                <ul>
                  <li><strong>Zbyt skomplikowane workflow na start</strong> - zacznij od prostych automatyzacji</li>
                  <li><strong>Brak segmentacji</strong> - ten sam komunikat do wszystkich to spam</li>
                  <li><strong>Ignorowanie danych</strong> - automatyzacja bez analizy to strata potencjału</li>
                  <li><strong>Zapominanie o treści</strong> - nawet najlepsza automatyzacja nie uratuje słabego contentu</li>
                </ul>

                <h2>Podsumowanie</h2>
                <p>
                  Marketing automation to nie luksus, ale konieczność w 2025 roku. Firmy, które wdrożą automatyzację, 
                  zyskują przewagę konkurencyjną, oszczędzają czas i generują więcej kwalifikowanych leadów. 
                  Kluczem jest rozpoczęcie od prostych procesów i stopniowe rozbudowywanie systemu.
                </p>

                <div className="mt-12 p-6 rounded-xl bg-card border border-border not-prose">
                  <h3 className="text-xl font-bold mb-4">Potrzebujesz pomocy z automatyzacją marketingu?</h3>
                  <p className="text-muted-foreground mb-4">
                    Pomagamy firmom wdrażać systemy automatyzacji od strategii po konfigurację. 
                    Umów bezpłatną konsultację i dowiedz się, jak możemy pomóc Twojej firmie.
                  </p>
                  <Link 
                    to="/kontakt" 
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    Umów konsultację <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        <RelatedArticles currentArticleId="marketing-automation" />
      </Layout>
    </>
  );
};

export default BlogMarketingAutomation;
