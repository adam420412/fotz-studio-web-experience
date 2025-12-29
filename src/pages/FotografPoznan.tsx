import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Users, Star, Heart, Calendar, MapPin, Clock, Image } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BackstageGallery } from "@/components/sections/BackstageGallery";
import portrait1 from "@/assets/fotograf/portrait-1.png";
import portrait2 from "@/assets/fotograf/portrait-2.jpg";
import portrait3 from "@/assets/fotograf/portrait-3.jpg";
import portrait4 from "@/assets/fotograf/portrait-4.jpg";
import portrait5 from "@/assets/fotograf/portrait-5.png";
import portrait6 from "@/assets/fotograf/portrait-6.jpg";
import portrait7 from "@/assets/fotograf/portrait-7.png";
import portrait8 from "@/assets/fotograf/portrait-8.jpg";
import concert1 from "@/assets/fotograf/concert-1.jpg";
import concert2 from "@/assets/fotograf/concert-2.jpg";
import concert3 from "@/assets/fotograf/concert-3.png";
import concert4 from "@/assets/fotograf/concert-4.jpg";
import concert5 from "@/assets/fotograf/concert-5.jpg";
import concert6 from "@/assets/fotograf/concert-6.jpg";
import concert7 from "@/assets/fotograf/concert-7.jpg";
import concert8 from "@/assets/fotograf/concert-8.jpg";
import concert9 from "@/assets/fotograf/concert-9.jpg";
import event1 from "@/assets/fotograf/event-1.jpg";
import event2 from "@/assets/fotograf/event-2.jpg";
import event3 from "@/assets/fotograf/event-3.jpg";

const galleryImages = [
  { src: portrait1, title: "Portret artystyczny", category: "Portret" },
  { src: concert1, title: "Koncert", category: "Event" },
  { src: portrait2, title: "Portret lifestyle", category: "Portret" },
  { src: concert2, title: "Muzyka na żywo", category: "Event" },
  { src: concert3, title: "Festiwal", category: "Event" },
  { src: event1, title: "Event plenerowy", category: "Lifestyle" },
  { src: event2, title: "Red Bull BC One", category: "Event" },
  { src: concert4, title: "Koncert", category: "Event" },
  { src: concert5, title: "Festiwal muzyczny", category: "Event" },
  { src: portrait3, title: "Sesja artystyczna", category: "Portret" },
  { src: concert6, title: "Festiwal plenerowy", category: "Event" },
  { src: concert7, title: "Koncert na żywo", category: "Event" },
  { src: portrait4, title: "Sesja produktowa", category: "Portret" },
  { src: concert8, title: "Występ sceniczny", category: "Event" },
  { src: portrait5, title: "Sesja grupowa", category: "Portret" },
  { src: portrait6, title: "Portret męski", category: "Portret" },
  { src: portrait7, title: "Sesja kobieca", category: "Portret" },
  { src: portrait8, title: "Portret miejski", category: "Portret" },
  { src: event3, title: "Impreza klubowa", category: "Event" },
  { src: concert9, title: "Koncert stadionowy", category: "Event" },
];

const services = [
  {
    icon: Users,
    title: "Sesje rodzinne",
    description: "Uwieczniamy wspólne chwile z najbliższymi w studio lub plenerze"
  },
  {
    icon: Camera,
    title: "Zdjęcia biznesowe",
    description: "Profesjonalne fotografie dla firm i portale LinkedIn"
  },
  {
    icon: Heart,
    title: "Sesje ciążowe",
    description: "Piękne pamiątki z wyjątkowego okresu w życiu"
  },
  {
    icon: Star,
    title: "Fotografia eventowa",
    description: "Relacje z koncertów, festiwali i wydarzeń firmowych"
  },
  {
    icon: Image,
    title: "Portrety artystyczne",
    description: "Kreatywne sesje portretowe w unikalnym stylu"
  },
  {
    icon: Calendar,
    title: "Sesje okolicznościowe",
    description: "Ślubne, chrzcinowe, urodzinowe i inne ważne momenty"
  }
];

const faqItems = [
  {
    question: "Jakie rodzaje sesji oferuje fotograf Poznań?",
    answer: "Fotograf Poznań oferuje różnorodne sesje fotograficzne, w tym sesje rodzinne, plenerowe oraz reportaże z wesel. Każda sesja jest dostosowywana do indywidualnych potrzeb klientów, aby stworzyć wyjątkowe i niepowtarzalne piękne zdjęcia."
  },
  {
    question: "Jak mogę wynająć fotografa w Poznaniu?",
    answer: "Aby wynająć fotografa w Poznaniu, wystarczy skontaktować się z nami za pośrednictwem naszej strony internetowej lub telefonu. Chętnie odpowiemy na Twoje pytania i pomożemy w organizacji profesjonalnej sesji fotograficznej."
  },
  {
    question: "Jakie są koszty sesji fotograficznych w Poznaniu?",
    answer: "Koszty sesji fotograficznych w Poznaniu są uzależnione od rodzaju sesji oraz jej długości. Zapraszamy do kontaktu, aby ustalić szczegóły i otrzymać dokładną wycenę."
  },
  {
    question: "Czy mogę zrealizować sesję fotograficzną w plenerze?",
    answer: "Tak, oferujemy sesje fotograficzne w plenerze. To doskonała okazja, aby poczuć bliskość natury i uwiecznić piękne chwile w wyjątkowych miejscach w Poznaniu."
  },
  {
    question: "Jakie przygotowania są potrzebne przed sesją fotograficzną?",
    answer: "Przed sesją fotograficzną warto zastanowić się nad stylizacjami, które chcesz nosić oraz lokalizacją sesji. Dobrze jest również zadbać o odpowiednie samopoczucie, aby w trakcie fotografowania móc w pełni się odprężyć."
  },
  {
    question: "Jak długo trwa obróbka zdjęć po sesji?",
    answer: "Czas obróbki zdjęć po sesji zależy od ilości zdjęć oraz rodzaju sesji. Zwykle trwa to od kilku dni do dwóch tygodni, aby zapewnić ich realistyczny i profesjonalny wygląd."
  },
  {
    question: "Czy oferujecie sesje fotograficzne dla rodzin z małymi dziećmi?",
    answer: "Tak, specjalizujemy się w sesjach rodzinnych, które są idealne dla rodzin z małymi dziećmi. Stawiamy na komfort i radość, aby uwiecznić naturalne emocje i relacje."
  },
  {
    question: "Jakie są zalety korzystania z usług profesjonalnego fotografa?",
    answer: "Korzystanie z usług profesjonalnego fotografa zapewnia wysoką jakość zdjęć, artystyczne podejście do fotografowania oraz umiejętność uchwycenia wyjątkowych chwil, co sprawia, że fotografie są nie tylko piękne, ale także pełne emocji."
  },
  {
    question: "Jakie dane osobowe są potrzebne do rezerwacji sesji fotograficznej?",
    answer: "Do rezerwacji sesji fotograficznej potrzebujemy podstawowych danych osobowych, takich jak imię, nazwisko, adres e-mail oraz numer telefonu. Wszelkie dane osobowe są chronione zgodnie z polityką prywatności."
  }
];

const FotografPoznan = () => {
  return (
    <Layout>
      <Helmet>
        <title>Fotograf Poznań - Profesjonalne Sesje Fotograficzne | Fotz Studio</title>
        <meta name="description" content="Profesjonalny fotograf w Poznaniu. Sesje rodzinne, biznesowe, ciążowe, portretowe i eventowe. Uwieczniamy wyjątkowe chwile w różnorodnych sesjach zdjęciowych." />
        <link rel="canonical" href="https://fotz.pl/fotograf-poznan" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#75143F]/20 via-background to-background" />
        <div className="container-wide px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#75143F]/20 text-[#75143F] rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Fotograf Poznań
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Fotografia w Poznaniu:{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Profesjonalny Fotograf i Usługi Fotograficzne
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              W dobie cyfrowej, fotografia staje się nieodłącznym elementem naszego życia. 
              W Poznaniu, profesjonalny fotograf oferuje szeroki wachlarz usług fotograficznych, 
              które umożliwiają uchwycenie wyjątkowych chwil w różnorodnych sesjach zdjęciowych. 
              Od sesji rodzinnych, przez zdjęcia biznesowe, aż po fotografie ciążowe i portretowe – 
              każdy znajdzie coś dla siebie.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/kontakt">
                  Zarezerwuj sesję
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/realizacje">Zobacz portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="container-wide px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Nasze realizacje fotograficzne</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              Zobacz wybrane prace z naszego portfolio - od portretów artystycznych po relacje z największych wydarzeń
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-lg sm:rounded-xl"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                    <span className="text-[10px] sm:text-xs text-[#75143F] font-medium">{image.category}</span>
                    <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link to="/realizacje">
                Zobacz więcej realizacji
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20">
        <div className="container-wide px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Usługi fotograficzne w Poznaniu</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              Oferujemy szeroki zakres profesjonalnych usług fotograficznych dostosowanych do Twoich potrzeb
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-[#75143F]/50 transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-brand flex items-center justify-center mb-3 sm:mb-4">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 group-hover:text-[#75143F] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sesje Rodzinne Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Jakie sesje rodzinne oferuje fotograf w Poznaniu?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#75143F]">Co to jest sesja rodzinna i jak ją zarezerwować?</h3>
                  <p className="text-muted-foreground">
                    Sesja rodzinna to doskonała okazja, aby uwiecznić wspólne chwile z najbliższymi. 
                    Fotograf w Poznaniu wykonuje zdjęcia, które stają się pamiątką na całe życie. 
                    Aby zarezerwować taką sesję, wystarczy skontaktować się z wybranym studiem fotograficznym.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#75143F]">Najlepsze miejsca na sesje rodzinne w plenerze</h3>
                  <p className="text-muted-foreground">
                    Poznań obfituje w piękne miejsca, które idealnie nadają się na sesje rodzinne w plenerze. 
                    Urokliwe parki, malownicze nadwarciańskie tereny oraz urokliwa starówka to tylko niektóre z propozycji. 
                    Fotografia w plenerze pozwala na uzyskanie naturalnych i pełnych emocji ujęć.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#75143F]">Usługi w studio fotograficznym</h3>
                  <p className="text-muted-foreground">
                    W studio fotograficznym oferowane są różnorodne usługi związane z sesjami rodzinnymi. 
                    Profesjonalny fotograf dysponuje odpowiednim sprzętem, takim jak aparat o wysokiej rozdzielczości, 
                    co zapewnia doskonałą jakość zdjęć.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={portrait1} alt="Sesja portretowa" className="rounded-2xl aspect-[3/4] object-cover" />
              <img src={portrait2} alt="Sesja lifestyle" className="rounded-2xl aspect-[3/4] object-cover mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zdjęcia biznesowe Section */}
      <section className="py-20">
        <div className="container-wide px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 grid grid-cols-2 gap-4"
            >
              <img src={concert1} alt="Fotografia eventowa" className="rounded-2xl aspect-[3/4] object-cover" />
              <img src={concert4} alt="Fotografia koncertowa" className="rounded-2xl aspect-[3/4] object-cover mt-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Jakie zdjęcia biznesowe można wykonać w Poznaniu?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#75143F]">Korzyści z profesjonalnej fotografii biznesowej</h3>
                  <p className="text-muted-foreground">
                    W dzisiejszych czasach, profesjonalne zdjęcia biznesowe odgrywają kluczową rolę w budowaniu wizerunku firmy. 
                    Dobre fotografie mogą przyciągnąć uwagę potencjalnych klientów oraz partnerów biznesowych. 
                    Oferujemy usługi, które pozwalają na wykonanie zdjęć indywidualnych, grupowych oraz reportażowych.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#75143F]">Jak przygotować się do sesji zdjęciowej dla biznesu?</h3>
                  <p className="text-muted-foreground">
                    Aby sesja zdjęciowa dla biznesu była udana, warto dobrze się do niej przygotować. 
                    Należy zadbać o odpowiedni strój, który będzie odzwierciedlał charakter firmy oraz osobiste preferencje. 
                    Dobrze jest też ustalić z fotografem, jakie ujęcia są najważniejsze.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#75143F]">Gdzie znaleźć profesjonalnego fotografa w Poznaniu?</h3>
                  <p className="text-muted-foreground">
                    W Poznaniu istnieje wiele studiów fotograficznych, które oferują profesjonalne usługi. 
                    Warto poszukać referencji oraz portfolio fotografów, by wybrać odpowiednią osobę do realizacji sesji. 
                    Serdecznie polecamy zapoznać się z opiniami naszych klientów.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sesje ciążowe Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Jakie są opcje sesji ciążowych w studio fotograficznym?</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-2xl border border-border">
                <h3 className="text-lg font-semibold mb-3 text-[#75143F]">Popularne style fotografii ciążowej</h3>
                <p className="text-muted-foreground text-sm">
                  Sesje ciążowe to wyjątkowe chwile, które warto uwiecznić. Oferujemy różnorodne style, 
                  od klasycznych portretów po bardziej kreatywne ujęcia w plenerze.
                </p>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border">
                <h3 className="text-lg font-semibold mb-3 text-[#75143F]">Akcesoria wzbogacające sesję</h3>
                <p className="text-muted-foreground text-sm">
                  W trakcie sesji ciążowej można wykorzystać różnorodne akcesoria, które dodadzą charakteru zdjęciom. 
                  Często stosowane są chusty, kwiaty czy specjalne ubrania.
                </p>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border">
                <h3 className="text-lg font-semibold mb-3 text-[#75143F]">Najlepsze terminy na sesję</h3>
                <p className="text-muted-foreground text-sm">
                  Optymalnym czasem na zarezerwowanie sesji ciążowej jest okres między 28. a 34. tygodniem ciąży. 
                  W tym czasie brzuszek jest już wyraźnie widoczny.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fotografia portretowa Section */}
      <section className="py-20">
        <div className="container-wide px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Możliwości fotografii portretowej w Poznaniu</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#75143F]">Co powinno się wiedzieć przed sesją portretową?</h3>
                  <p className="text-muted-foreground">
                    Fotografia portretowa to sztuka uchwycenia emocji i osobowości, dlatego warto dobrze się przygotować do takiej sesji. 
                    Przede wszystkim, należy wybrać odpowiednią lokalizację i zadbać o dobór stylizacji, które będą pasować do charakteru zdjęć.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#75143F]">Różnice między fotografią portretową a innymi rodzajami sesji</h3>
                  <p className="text-muted-foreground">
                    Fotografia portretowa skupia się na osobie lub grupie osób, natomiast inne rodzaje sesji mogą obejmować szerszą tematykę i kontekst. 
                    Portrety mają na celu ukazanie charakteru i emocji.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#75143F]">Pomysły na stylizacje w sesji portretowej</h3>
                  <p className="text-muted-foreground">
                    Stylizacje w sesji portretowej powinny odzwierciedlać osobowość modela. 
                    Można postawić na klasyczne ubrania, które są ponadczasowe, jak białe koszule czy eleganckie sukienki.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={portrait3} alt="Sesja artystyczna" className="rounded-2xl aspect-square object-cover w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sesje okolicznościowe Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Okolicznościowe sesje zdjęciowe w Poznaniu</h2>
            <p className="text-muted-foreground">
              W Poznaniu dostępne są różnorodne sesje okolicznościowe, które pozwalają na uwiecznienie ważnych momentów. 
              Oferujemy sesje ślubne, chrzcinowe, urodzinowe, a także fotografie związane z różnymi wydarzeniami rodzinnymi.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Rodzaje sesji okolicznościowych</h3>
              <p className="text-muted-foreground text-sm">
                Sesje ślubne, chrzcinowe, urodzinowe oraz fotografie z wydarzeń rodzinnych
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Momenty do uwiecznienia</h3>
              <p className="text-muted-foreground text-sm">
                Wymiana przysięg, pierwszy taniec, reakcje gości na ważne wydarzenia
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lokalizacja</h3>
              <p className="text-muted-foreground text-sm">
                Studio w centrum Poznania lub wybrane przez Ciebie miejsce w plenerze
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Backstage Gallery Section */}
      <BackstageGallery 
        title="Backstage z sesji"
        subtitle="Zobacz kulisy profesjonalnych sesji fotograficznych w naszym studiu"
        maxImages={8}
      />

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-wide px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Najczęściej zadawane pytania</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-brand">
        <div className="container-wide px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Zarezerwuj sesję fotograficzną</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby omówić szczegóły sesji fotograficznej. 
              Odpowiemy na Twoje pytania i pomożemy w organizacji.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/kontakt">
                  Skontaktuj się
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <a href="tel:+48790814814">
                  <Clock className="mr-2 w-5 h-5" />
                  +48 790 814 814
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FotografPoznan;
