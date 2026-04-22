import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Utensils, MapPin, Camera, Heart, Star, BarChart3, TrendingUp, Users, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function BlogMarketingDlaRestauracji() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Marketing dla restauracji" },
  ];

  const marketingChannels = [
    {
      icon: MapPin,
      title: "Google Moja Firma",
      description: "Zoptymalizowana wizytówka biznesowa",
      tactics: "Pełny profil, zdjęcia, godziny otwarcia, linki do rezerwacji, regularne posty o promotach i nowych daniach"
    },
    {
      icon: Users,
      title: "Instagram i Facebook",
      description: "Zbuduj społeczność i zaangażowanie",
      tactics: "Codzienne stories z kulisów, Reels z poradami kulinarnymi, konkursy, user-generated content (zdjęcia klientów)"
    },
    {
      icon: TrendingUp,
      title: "TikTok dla restauracji",
      description: "Trendowa platforma dla młodszych odbiorców",
      tactics: "Szybkie przepisy, challenge'e, behind-the-scenes, trendy edycje filmowe, duety z influencerami"
    },
    {
      icon: Star,
      title: "Opinie i reputacja",
      description: "Kluczowe dla decyzji klientów",
      tactics: "Motywuj klientów do zostawiania opinii, odpowiadaj na recenzje, monitoruj Google Reviews, Allegro, TripAdvisor"
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "Zoptymalizuj Google Moja Firma",
      desc: "Uzupełnij wszystkie pola, dodaj wysokiej jakości zdjęcia, ustaw godziny otwarcia i włącz rezerwacje online."
    },
    {
      step: 2,
      title: "Stwórz harmonogram postów na Social Media",
      desc: "Publikuj 4-5 razy tygodniowo. Najlepsze czasy to 12-14:00 i 18-20:00. Miksuj content: zdjęcia potraw, behind-the-scenes, promocje."
    },
    {
      step: 3,
      title: "Wdroz system rezerwacji online",
      desc: "Konfiguracja Booksy, TheFork lub systemu na własnej stronie umożliwia klientom rezerwowanie bez telefonowania."
    },
    {
      step: 4,
      title: "Zaplanuj sesje fotografii kulinarnej",
      desc: "Profesjonalne zdjęcia potraw zwiększają atrakcyjność o 40%. Rób je raz w miesiącu, zbuduj bibliotekę."
    },
    {
      step: 5,
      title: "Uruchom kampanie Google Ads Lokalne",
      desc: "Kampanie Performance Max i Local Services Ads pokazują restaurację w wynikach wyszukiwania dla lokalnych klientów."
    },
    {
      step: 6,
      title: "Zbieraj emails dla newsletter'a",
      desc: "Newsletter codzienny/tygodniowy z promocjami, nowymi daniami, событиями. Używaj Braze lub MailerLite."
    },
    {
      step: 7,
      title: "Monitoruj opinię i reputację online",
      desc: "Codziennie sprawdzaj nowe recenzje, szybko odpowiadaj, fix negative feedback. Używaj Birdeye lub Brand24."
    }
  ];

  const faqItems = [
    {
      question: "Jakie są najskuteczniejsze kanały marketingowe dla restauracji?",
      answer: "Dla restauracji najskuteczniejsze są: 1) Google Moja Firma (50% decyzji zakupowych lokalnych pochodzi stąd), 2) Instagram/Facebook (visual content dla branży F&B), 3) TikTok (szczególnie dla pizzerii, kebabni, fast-food), 4) Opinie online (reviews na Google, Allegro, TripAdvisor wpływają na wiarygodność), 5) Email marketing dla stałych klientów. Średnio restauracja powinna przeznaczyć 30% budżetu na GMF SEO, 40% na social media, 20% na Google Ads lokalne, 10% na email marketing."
    },
    {
      question: "Ile kosztuje system rezerwacji online dla restauracji?",
      answer: "Systemy rezerwacji online kosztują: Booksy (0-99 zł/mies w zależności od planu), TheFork (0-150 zł/mies), GetTable (50-200 zł/mies), własna implementacja (2000-5000 zł). Rekomendacja: zacznij od Booksy lub TheFork — są zintegrowane z social media, map i mają aplikacje mobilne. ROI: każda rezerwacja online vs telefoniczna zaoszczędza 5-10 min pracy + zmniejsza no-show (gośc płaci online, nie będzie ignorować rezerwacji)."
    },
    {
      question: "Jak zrobić dobre zdjęcia potraw na telefon?",
      answer: "Fotografia kulinarna na telefon: 1) Światło naturalne (przy oknie, idealne 9-11 rano lub 16-18), 2) Proste tła (biały papier, czarny karton, drewno), 3) Kompozycja (reguła trzecin, kąt 45 st zamiast z góry), 4) Props (sztućce, nalewki, warzywa), 5) Edycja (Lightroom, VSCO — lift ciepła, zwiększ kontrast). Zrób 10-20 zdjęć potraw — ta biblioteka wystarczy na 6 miesięcy postów. Koszt: 0 zł (telefon) vs 1000-2000 zł za profesjonalną sesję fotograficzną."
    },
    {
      question: "Jakie kampanie Google Ads warto uruchomić dla restauracji?",
      answer: "Dla restauracji najefektywniejsze to: 1) Local Services Ads (pojawiają się nad mapą, pokazują rezerwacje, opinie, godziny — idealne dla 'restauracja obok mnie'), 2) Performance Max z lokalnym geotargetingiem (reklamy pokazywane w 10 km promieniu restauracji), 3) Search Ads na słowa kluczowe 'restauracja Poznań', 'pizza Poznań', 'obiad [miasto]', 4) YouTube Ads z video postaw (visual medium dla F&B). Budget startowy: 300-500 zł/mies. ROAS: LSA zwraca 3-5x (czym lepsze opinie, tym wyższy ROAS)."
    },
    {
      question: "Jak budować email marketing dla restauracji?",
      answer: "Email marketing dla restauracji: 1) Zbierz bazy przy rezerwacji/zamówieniu (checkbox newsletter), 2) Podziel segmenty: stali klienci vs okazyjni, wegetarianie vs mięsożercy, 3) Wysyłaj 1x tygodniowo: promocja (poniedz), specjalne danie (czwart), event (pią), 4) Personalizuj: 'Cześć [Imię], Twoją ulubioną pizzę zamawiasz każdy czwartek — mamy 20% rabatu', 5) CTR powinien być 3-5% (niższe niż zwykle, bo dużo starszych użytkowników). Narzędzia: Braze, MailerLite, ConvertKit. ROI: email marketing to najlepszy zwrot dla restauracji (1 zł wydatku = 20-30 zł przychodu)."
    },
    {
      question: "Dlaczego opinie online są tak ważne dla restauracji?",
      answer: "Opinie i reputacja online wpływają na decyzję 83% klientów. Dla restauracji to krytyczne, bo ludzie decydują gdzie iść jeść na podstawie zdjęć, oceny i opinii. Strategie: 1) Uprosić do opinii (papierowe karteczki przy stoliku, QR do Google Reviews, email po wizycie), 2) Odpowiadać na każdą opinię w ciągu 24h — podziękuj za dobrą, fix problem przy złej, 3) Odpowiedzi na negatywne opinie muszą być profesjonalne i konstruktywne (zaproponuj rekompensatę, zaproś ponownie), 4) Monitoruj opinie (Google Alerts, Brand24) — 95% osób czyta opinie przed wejściem. Restauracja z 4.5 gwiazdek zarabia 30% więcej niż z 3.5 gwiazdek."
    }
  ];

  const restaurantTips = [
    {
      icon: Camera,
      title: "Fotografia kulinarna",
      description: "Zrób zdjęcia potraw w naturalnym świetle. Profesjonalne foto = +30% zainteresowania na social media. Biblioteka 20 zdjęć wystarczy na 6 miesięcy."
    },
    {
      icon: Heart,
      title: "User-generated content",
      description: "Zachęcaj gości do tagowania Cię na Instagram/Facebook zdjęciami posiłków. Hashtag restauracji (#MojaPizzeria) buduje społeczność."
    },
    {
      icon: Star,
      title: "Programy lojalnościowe",
      description: "Każdy 5. obiad za 50% ceny lub punkty do zbierania. Loyalty app (Punchh, Toast) zwiększa powtórzenie wizyt o 25%."
    },
    {
      icon: Utensils,
      title: "Zawartość edukacyjna",
      description: "Szybkie przepisy (Reels/Shorts 30sec), porada kulinarna (jak gotować makaron), historia restauracji (founder story) budują autentyczność."
    },
    {
      icon: BarChart3,
      title: "Promocje sezonowe",
      description: "Promuj dania sezonowe, specjalne zestawy, limitowane edycje. Scarcity Effect powoduje większe zaangażowanie (dzisiaj ostatni dzień)."
    },
    {
      icon: TrendingUp,
      title: "Influencer marketing",
      description: "Zaproś lokalnych foodblogerów na darmowy obiad w zamian za post/Reels. Reach micro-influencerów (10k-50k followers) jest najlepszy dla restauracji."
    }
  ];

  return (
    <>
      <SEOHead
        title="Marketing dla restauracji | Fotz Studio"
        description="Kompleksowy poradnik marketing dla restauracji. Google Moja Firma, Instagram, TikTok, fotografia kulinarna, rezerwacje online, Google Ads lokalne, opinie…"
        canonical="https://fotz.pl/blog/marketing-dla-restauracji"

        keywords="Marketing dla restauracji, Marketing dla restauracji poradnik, Marketing dla restauracji strategia, Marketing dla restauracji jak zrobić, Marketing dla restauracji marketing, Marketing dla restauracji przykłady, Marketing dla restauracji w Polsce"
      />
      <ArticleSchema
        title="Marketing dla restauracji — kompletny poradnik 2025"
        description="Marketing dla restauracji: strategie social media, Google Moja Firma, rezerwacje online, fotografia kulinarna, Google Ads lokalne, email marketing, opinie online, programy lojalnościowe."
        datePublished="2025-03-10"
        dateModified="2025-07-20"
        url="https://fotz.pl/blog/marketing-dla-restauracji"
        author="Fotz Studio"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Marketing dla restauracji", url: "/blog/marketing-dla-restauracji" }
      ]}/>

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 min czytania</span>
                <span className="flex items-center gap-1"><Utensils className="w-4 h-4" /> Marketing dla restauracji</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Marketing dla restauracji — kompletny poradnik
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Jak zwiększyć przychód restauracji poprzez strategiczny marketing w sieci.
                Google Moja Firma, Instagram, TikTok, rezerwacje online, fotografia kulinarna, Google Ads lokalne, opinie online.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Marketing dla restauracji to temat, który nieustannie ewoluuje. Kilka lat temu wystarczył adres na Google Maps,
                dziś bez obecności w sieci, profesjonalnych zdjęć potraw, aktywności na social media i systemu rezerwacji online,
                restauracja traci 30-50% potencjalnych klientów.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                W tym poradniku pokażemy Ci, jak budować marketing dla restauracji w sieciach społecznych, jak optymalizować widoczność
                lokalną, jak fotografować potrawy, jak zbudować program lojalnościowy i jak mierzyć ROI kampanii marketingowych.
                Przychody restauracji w dużej mierze zależą od tego, czy potencjalni klienci Cię w ogóle znajdą.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Marketing Channels */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Główne kanały marketingowe dla restauracji</h2>
              <p className="text-slate-300 mb-12">
                Każdy kanał odgrywa inną rolę w konwersji gościa. Zestawienie najefektywniejszych kanałów dla branży gastronomicznej:
              </p>
            </FadeInView>

            <div className="grid md:grid-cols-2 gap-6">
              {marketingChannels.map((channel, idx) => {
                const Icon = channel.icon;
                return (
                  <FadeInView key={idx} delay={idx * 0.1}>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-400/50 transition">
                      <div className="flex items-start gap-4 mb-3">
                        <Icon className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-bold text-yellow-400 mb-1">{channel.title}</h3>
                          <p className="text-sm text-gray-400">{channel.description}</p>
                        </div>
                      </div>
                      <div className="bg-gray-900/50 rounded p-3 border-l-2 border-yellow-400">
                        <p className="text-sm text-slate-200">{channel.tactics}</p>
                      </div>
                    </div>
                  </FadeInView>
                );
              })}
            </div>
          </div>
        </section>

        {/* Praktyczne porady */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Praktyczne porady do wdrażania</h2>
              <p className="text-slate-300 mb-12">
                Sprawdzone techniki, które restauracje wdrażają z największym sukcesem:
              </p>
            </FadeInView>

            <div className="grid md:grid-cols-2 gap-6">
              {restaurantTips.map((tip, idx) => {
                const Icon = tip.icon;
                return (
                  <FadeInView key={idx} delay={idx * 0.1}>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                        <h3 className="text-lg font-bold text-white">{tip.title}</h3>
                      </div>
                      <p className="text-slate-300 text-sm">{tip.description}</p>
                    </div>
                  </FadeInView>
                );
              })}
            </div>
          </div>
        </section>

        {/* Implementation Steps */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Jak wdrożyć marketing dla restauracji - krok po kroku</h2>
              <p className="text-slate-300 mb-8">
                Praktyczne kroki do wdrożenia strategii marketingowej w Twojej restauracji:
              </p>
            </FadeInView>

            <div className="space-y-4">
              {implementationSteps.map((item) => (
                <FadeInView key={item.step} delay={item.step * 0.08}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex gap-4">
                    <div className="bg-yellow-400/20 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 font-bold text-sm">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Metryki do monitorowania */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Metryki do monitorowania sukcesu marketingu</h2>
              <p className="text-slate-300 mb-8">
                Nie możesz zarządzać tym, czego nie mierzysz. Oto kluczowe KPI dla restauracji:
              </p>
            </FadeInView>

            <div className="space-y-4">
              {[
                {
                  metric: "Traffic z wyszukiwarki (GMF)",
                  target: "50-100 kliknięć miesięcznie na wizytę",
                  action: "Google Analytics, Search Console, monitoruj ranking geo-lokalny"
                },
                {
                  metric: "Opinie online",
                  target: "4.5+ gwiazdek, nowe opinie 2-3 tygodniowo",
                  action: "Google Reviews, TripAdvisor, Allegro — odpowiadaj w 24h"
                },
                {
                  metric: "Engagement na Social Media",
                  target: "Reach 5-10k osób, engagement rate 2-4%",
                  action: "Instagram Insights, Facebook Analytics — testuj co działa"
                },
                {
                  metric: "Rezerwacje online",
                  target: "20-30% rezerwacji przez system (vs telefon)",
                  action: "Booksy, TheFork — monitoruj no-show, feedback"
                },
                {
                  metric: "Newsletter",
                  target: "Open rate 25-30%, click rate 3-5%",
                  action: "MailerLite, Braze — testuj subject lines, timing"
                },
                {
                  metric: "Konwersja kampanii Google Ads",
                  target: "ROAS 3-5x (każdy zł wydatku = 3-5 zł przychodu)",
                  action: "Google Ads, conversion tracking — testuj budżety, targeting"
                }
              ].map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.08}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                    <div className="flex gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <h3 className="font-bold text-white">{item.metric}</h3>
                    </div>
                    <p className="text-slate-300 text-sm mb-2"><span className="text-gray-400">Cel:</span> {item.target}</p>
                    <p className="text-yellow-300 text-sm"><span className="text-gray-400">Jak mierzyć:</span> {item.action}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Najczęstsze pytania o marketing restauracji</h2>
              <p className="text-slate-300 mb-8">
                Odpowiadamy na pytania, które zadają nam restauratorzy.
              </p>
            </FadeInView>

            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.05}>
                  <AccordionItem value={`faq-${idx}`} className="border border-gray-700 rounded-lg bg-gray-800 px-4">
                    <AccordionTrigger className="text-base font-semibold text-white hover:text-yellow-400 py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4 pt-0">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </FadeInView>
              ))}
            </Accordion>
          </div>

          <FAQSchema
            items={faqItems.map(item => ({
              question: item.question,
              answer: item.answer
            }))}
          />
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-b border-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Gotów do transformacji marketingu Twojej restauracji?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Marketing dla restauracji to inwestycja, która szybko się zwraca.
                Pomożemy Ci wybrać kanały, zbudować strategię i zwiększyć przychód.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition"
              >
                Bezpłatna konsultacja <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeInView>
          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
}
