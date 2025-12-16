import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Film, Play, Video, Camera, Clapperboard, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const videos = [
  { src: "/videos/fotz-reel.mp4", title: "Fotz Studio Reel", category: "Showreel" },
  { src: "/videos/autospa.mp4", title: "AutoSpa", category: "Reklama" },
  { src: "/videos/skaland-osiedle.mp4", title: "Skaland Osiedle", category: "Nieruchomości" },
  { src: "/videos/eko-kamionki.mp4", title: "Eko Kamionki", category: "Promocja" },
  { src: "/videos/fun-sport-stylish.mp4", title: "Fun Sport Stylish", category: "Lifestyle" },
  { src: "/videos/sequence-01.mp4", title: "Sequence 01", category: "Produkcja" },
];

export default function ProdukcjaFilmowPoznan() {
  return (
    <Layout>
      <Helmet>
        <title>Produkcja Filmów Reklamowych Poznań | Studio Filmowe Fotz</title>
        <meta name="description" content="Profesjonalna produkcja filmów reklamowych i promocyjnych w Poznaniu. Spoty reklamowe, filmy korporacyjne, video marketing. Studio filmowe Fotz." />
      </Helmet>

      <main className="bg-background min-h-screen pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] bg-primary/20" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
                <Film className="w-4 h-4" />
                Studio Filmowe Poznań
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Produkcja Filmów Reklamowych i Promocyjnych w <span className="text-gradient">Poznaniu</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Produkcja filmów reklamowych i promocyjnych w Poznaniu stała się kluczowym elementem strategii marketingowych wielu firm. W dobie dynamicznie rozwijającego się rynku, skuteczna reklama wideo staje się nie tylko sposobem na promocję produktów, ale również na budowanie wizerunku marki.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
                <Play className="w-4 h-4" />
                Nasze realizacje
              </span>
              <h2 className="text-2xl md:text-4xl font-heading font-bold">
                Zobacz nasze <span className="text-gradient">produkcje filmowe</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                    <video
                      src={video.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{video.category}</span>
                    <h3 className="text-lg font-semibold mt-1">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Section 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Clapperboard className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">Produkcja filmów reklamowych Poznań</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Produkcja filmów reklamowych w Poznaniu obejmuje kilka kluczowych etapów. Na początku konieczne jest zdefiniowanie celu kampanii reklamowej, co pozwala na skuteczne zaplanowanie realizacji. Następnie, w ramach procesu tworzenia filmu reklamowego, przeprowadza się szczegółowy research dotyczący grupy docelowej oraz analizę konkurencji. Kolejnym krokiem jest projektowanie scenariusza, który powinien odpowiadać na potrzeby i oczekiwania widzów.
                </p>
                
                <div className="bg-card/50 border border-border/50 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Jakie są kluczowe elementy skutecznej produkcji filmowej?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kluczowymi elementami skutecznej produkcji filmowej są jakość obrazu oraz dźwięku, które mają ogromny wpływ na odbiór reklamy przez widzów. Użycie profesjonalnego sprzętu, takiego jak kamery i mikrofony, jest niezbędne do uzyskania wysokiej jakości wideo. Warto również zwrócić uwagę na montaż filmu, który powinien być płynny i spójny. Estetyka filmu reklamowego, w tym dobór kolorystyki i stylu wizualnego, ma znaczenie w budowaniu wizerunku marki.
                  </p>
                </div>

                <div className="bg-card/50 border border-border/50 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Jak długo trwa produkcja filmów reklamowych?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Czas realizacji filmów reklamowych może być różny w zależności od skali projektu. W przypadku prostych spotów reklamowych, produkcja może zająć od kilku dni do tygodnia. Natomiast bardziej złożone produkcje, które wymagają większej liczby lokacji, efektów specjalnych czy animacji, mogą trwać nawet kilka miesięcy. Kluczowe jest odpowiednie zaplanowanie harmonogramu, aby zrealizować projekt zgodnie z terminem i budżetem.
                  </p>
                </div>
              </motion.div>

              {/* Section 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Video className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">Jak stworzyć efektywny film promocyjny?</h2>
                </div>
                
                <div className="bg-card/50 border border-border/50 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Najlepsze praktyki w zakresie video marketingu</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Skuteczny film promocyjny powinien być dopasowany do strategii marketingowej twojej firmy. Najlepsze praktyki w video marketingu obejmują zrozumienie potrzeb i oczekiwań grupy docelowej oraz dostarczenie wartościowego przekazu. Ważne jest, aby film był krótki i treściwy, ponieważ widzowie często tracą zainteresowanie długimi materiałami. Warto także skupić się na storytellingu, który angażuje widzów i buduje emocjonalne połączenie z marką.
                  </p>
                </div>

                <div className="bg-card/50 border border-border/50 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Jakie narzędzia wykorzystać do produkcji?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Produkcja filmów promocyjnych wymaga zastosowania różnorodnych narzędzi. Można korzystać z profesjonalnych programów do montażu wideo, takich jak Adobe Premiere Pro czy Final Cut Pro, które umożliwiają edytowanie i tworzenie wysokiej jakości filmów. Warto także rozważyć użycie oprogramowania do animacji, które pozwala na wzbogacenie materiału o animacje 2D lub 3D.
                  </p>
                </div>

                <div className="bg-card/50 border border-border/50 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Jak dobrać styl filmu do kampanii marketingowej?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dobór stylu filmu do kampanii marketingowej jest niezwykle istotny i powinien być zgodny z wizerunkiem marki. W zależności od celu kampanii, film może przyjąć formę humorystyczną, emocjonalną lub informacyjną. Warto zwrócić uwagę na to, jak styl filmu wpisuje się w ogólną strategię marketingową, aby przekaz był spójny i skuteczny.
                  </p>
                </div>
              </motion.div>

              {/* Section 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Camera className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">Usługi studia filmowego w Poznaniu</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card/50 border border-border/50 rounded-2xl p-6 space-y-3">
                    <h3 className="text-lg font-semibold">Filmy wizerunkowe</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Koncentrują się na budowaniu i promowaniu marki, tworzą pozytywny obraz w oczach konsumentów.
                    </p>
                  </div>
                  <div className="bg-card/50 border border-border/50 rounded-2xl p-6 space-y-3">
                    <h3 className="text-lg font-semibold">Filmy produktowe</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Skupiają się na prezentacji konkretnych produktów lub usług, podkreślając ich zalety i unikalne cechy.
                    </p>
                  </div>
                  <div className="bg-card/50 border border-border/50 rounded-2xl p-6 space-y-3">
                    <h3 className="text-lg font-semibold">Spoty reklamowe</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Krótkie, dynamiczne materiały promocyjne idealne do kampanii w mediach społecznościowych i TV.
                    </p>
                  </div>
                  <div className="bg-card/50 border border-border/50 rounded-2xl p-6 space-y-3">
                    <h3 className="text-lg font-semibold">Filmy korporacyjne</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Prezentują firmę, jej wartości, misję oraz kulturę organizacyjną dla partnerów i pracowników.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section 4 - Trends */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">Trendy w produkcji filmów reklamowych</h2>
                </div>
                
                <div className="bg-card/50 border border-border/50 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Nowoczesne techniki animacji</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nowoczesne techniki animacji, takie jak animacja 2D i 3D, zyskują na popularności w reklamie. Umożliwiają one tworzenie dynamicznych i angażujących filmów, które przyciągają uwagę widzów. Zastosowanie animacji pozwala na kreatywne przedstawienie produktów oraz usług w sposób, który nie zawsze jest możliwy do osiągnięcia w tradycyjnych filmach.
                  </p>
                </div>

                <div className="bg-card/50 border border-border/50 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Wideo w mediach społecznościowych</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Media społecznościowe odgrywają kluczową rolę w promocji filmów reklamowych. Firmy zaczynają wykorzystywać krótkie formy wideo, które są bardziej atrakcyjne dla użytkowników. Platformy takie jak Instagram czy TikTok preferują treści, które są szybkie, angażujące i łatwe do udostępnienia.
                  </p>
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">Najczęściej zadawane pytania</h2>
                
                <div className="space-y-4">
                  {[
                    {
                      q: "Jakie są korzyści z produkcji spotów reklamowych w Poznaniu?",
                      a: "Produkcja spotów reklamowych w Poznaniu to skuteczne narzędzie marketingowe, które pozwala na efektywną promocję swojej marki. Dzięki profesjonalnym filmom możesz dotrzeć do szerszej grupy odbiorców i budować pozytywne skojarzenia z Twoją firmą."
                    },
                    {
                      q: "Jakie są etapy produkcji filmów reklamowych?",
                      a: "Proces produkcji filmów reklamowych zazwyczaj obejmuje kilka etapów: koncepcję, scenariusz, nagrania, postprodukcję oraz dystrybucję. Każdy z tych etapów jest kluczowy dla uzyskania wysokiej jakości profesjonalnego filmu reklamowego."
                    },
                    {
                      q: "Jak długo trwa produkcja filmów reklamowych?",
                      a: "Czas produkcji filmów reklamowych może się różnić w zależności od skomplikowania projektu. Zazwyczaj trwa to od kilku tygodni do kilku miesięcy, w zależności od wymagań klienta i charakteru spotu reklamowego."
                    },
                    {
                      q: "Jakie rodzaje filmów reklamowych można zrealizować?",
                      a: "W Poznaniu można zrealizować różne rodzaje filmów reklamowych, w tym spoty reklamowe, filmy promocyjne dla firm oraz filmy korporacyjne. Każdy z tych formatów ma na celu skuteczne przedstawienie oferty oraz wartości firmy."
                    },
                    {
                      q: "Jakie są koszty produkcji filmów reklamowych?",
                      a: "Koszty produkcji filmów reklamowych mogą się znacznie różnić w zależności od wielu czynników, takich jak długość filmu, skomplikowanie produkcji oraz wybór studia filmowego. Warto skontaktować się z nami, aby uzyskać szczegółową wycenę."
                    },
                    {
                      q: "Czym różni się film wizerunkowy od filmu produktowego?",
                      a: "Film wizerunkowy koncentruje się na budowaniu i promowaniu marki, a jego celem jest stworzenie pozytywnego obrazu w oczach konsumentów. Z kolei film produktowy skupia się na prezentacji konkretnych produktów lub usług, podkreślając ich zalety i unikalne cechy."
                    },
                    {
                      q: "Jakie są korzyści z współpracy z profesjonalnym studiem filmowym?",
                      a: "Współpraca z profesjonalnym studiem filmowym przynosi szereg korzyści. Przede wszystkim, doświadczenie i wiedza zespołu filmowego pozwala na stworzenie wysokiej jakości materiałów, które wyróżniają się na tle konkurencji."
                    },
                    {
                      q: "Jak skutecznie promować film reklamowy w Internecie?",
                      a: "Skuteczna promocja filmów reklamowych w Internecie wymaga zastosowania różnorodnych strategii. Warto wykorzystać potencjał mediów społecznościowych, kampanie reklamowe w Google Ads oraz na platformach video, takich jak YouTube."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-card/50 border border-border/50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center py-12"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Zaplanujmy Twój film reklamowy
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Skontaktuj się z nami i porozmawiajmy o Twoim projekcie filmowym. Oferujemy bezpłatną konsultację i wycenę.
                </p>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  Umów bezpłatną konsultację
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
