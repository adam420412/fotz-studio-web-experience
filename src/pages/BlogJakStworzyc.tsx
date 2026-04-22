import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Code,
  Zap,
  Globe,
  DollarSign,
  Clock,
  Shield,
  Smartphone,
  Search,
  TrendingUp,
  BookOpen
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function BlogJakStworzyc() {
  const methods = [
    {
      number: "1",
      title: "Kreatory stron (Wix, Squarespace, Webflow)",
      intro: "Dla kogo: Osoby bez doświadczenia, potrzebujące szybkiego wyniku",
      pros: [
        "Najtaniej (0-100 PLN/miesiąc)",
        "Nie wymaga wiedzy technicznej",
        "Gotowe szablony do wyboru",
        "Wsparcie techniczne wbudowane"
      ],
      cons: [
        "Ograniczone możliwości dostosowania",
        "Trudne SEO (każda platforma ma inne możliwości)",
        "Lock-in (trudno przenieść stronę gdzie indziej)",
        "Design może być 'masowy'"
      ],
      cost: "0-100 PLN/miesiąc",
      verdict: "Dobry na start, ale do zmiany jak będzie rosnąć"
    },
    {
      number: "2",
      title: "WordPress",
      intro: "Dla kogo: Osoby, które chcą elastyczności i kontroli, są gotowe nauczyć się basics",
      pros: [
        "Najtańszy hosting (50-150 PLN/miesiąc)",
        "Ogromna biblioteka wtyczek (pluginów)",
        "Świetne SEO możliwości (Yoast, RankMath)",
        "Można przenieść stronę do innego hostingu",
        "Duża społeczność (mnóstwo tutoriali)"
      ],
      cons: [
        "Wymaga nauki (ale jest dużo kursów)",
        "Trzeba zarządzać aktualizacjami",
        "Bezpieczeństwo zależy od Ciebie",
        "Stare motywy mogą być wolne"
      ],
      cost: "200-300 PLN/rok domena + hosting, 0-300 PLN motyw",
      verdict: "Najlepszy stosunek ceny do możliwości"
    },
    {
      number: "3",
      title: "Zlecenie agencji/freelancerowi",
      intro: "Dla kogo: Osoby, które chcą powiedzieć 'chcę taką stronę' i mieć gotowe",
      pros: [
        "Profesjonalny wygląd gwarantowany",
        "Oszczędzasz czas",
        "Wsparcie po uruchomieniu",
        "Pomoc z SEO od początku",
        "Nie musisz się uczyć"
      ],
      cons: [
        "Koszty wyższe (od 1500 PLN)",
        "Trzeba wyjaśnić wizję agencji",
        "Iteracje mogą być powolne",
        "Możliwe ukryte koszty (hosting, support)"
      ],
      cost: "1 500 - 30 000 PLN jednorazowo",
      verdict: "Warto jeśli strona ma sprzedawać"
    },
    {
      number: "4",
      title: "Custom kod (React, Next.js, Vue)",
      intro: "Dla kogo: Deweloperzy, startupy potrzebujące czegoś niszowego",
      pros: [
        "Pełna kontrola nad kodem",
        "Skalowalne (robi się razem ze wzrostem)",
        "Nowoczesne frameworki (fast, secure)",
        "Integracje z dowolnym API"
      ],
      cons: [
        "Wymaga doświadczenia (3+ lat dev)",
        "Drogi hosting (100-1000+ PLN/miesiąc)",
        "Trzeba dbać o bezpieczeństwo",
        "Utrzymanie kosztuje $$$$"
      ],
      cost: "500 PLN - bez granic (zależy od ekipy)",
      verdict: "Dla skomplikowanych aplikacji, nie dla Blog-ów"
    }
  ];

  const wordpressSteps = [
    {
      number: "1",
      title: "Wybierz domenę i hosting",
      content: "Domena to Twój adres (np. moje-imie.pl) - koszt ~50 PLN/rok. Hosting to serwer, gdzie żyje strona - 100-200 PLN/rok dla małej strony. Polecam Setti.pl, Nazwa.pl lub Hostgator.pl."
    },
    {
      number: "2",
      title: "Zainstaluj WordPress",
      content: "Większość hostów ma 1-klik instalacja WordPressa. Po zalogowaniu do panelu hosta (cPanel) klikasz Install WordPress i gotowe. Hasło do panelu dostaniesz mailem."
    },
    {
      number: "3",
      title: "Wybierz motyw (Theme)",
      content: "Motyw to wygląd Twojej strony. Bezpłatne motywy: Astra, OceanWP (ok), Elementor (lepszy). Premium: GeneratePress, Neve (100-500 PLN jednorazowo). Download z WordPress.org, zainstaluj z panelu."
    },
    {
      number: "4",
      title: "Zainstaluj kluczowe wtyczki (Pluginy)",
      content: "Yoast SEO (SEO), Contact Form 7 (formularz), Wordfence (bezpieczeństwo), Smush (optymalizacja zdjęć), WP Super Cache (szybkość). Wszystkie bezpłatne i ze stronicą Pluginy w panelu."
    },
    {
      number: "5",
      title: "Stwórz podstawowe strony",
      content: "Strona główna, O nas, Usługi, Blog, Kontakt. Każdą stronę robisz w edytorze Gutenberg (wizualny, drag-drop). Nie trzeba znać kodu - jest wystarczająco intuicyjny."
    },
    {
      number: "6",
      title: "Skonfiguruj SSL",
      content: "SSL to zabezpieczenie, które zmienia http:// na https://. Większość hostów daje Let's Encrypt SSL za darmo. Włączasz go z panelu, potem w WordPress Settings zmieniasz URL na https://."
    },
    {
      number: "7",
      title: "Podłącz Google Analytics",
      content: "Analytics pokazuje, kto odwiedza Twoją stronę, skąd pochodzą, co robią. Rejestrujesz się na analytics.google.com, dostajesz kod, instalujesz wtyczkę (MonsterInsights) i podłączasz."
    }
  ];

  const costBreakdown = [
    {
      method: "Kreatory (Wix, Squarespace)",
      initial: "0 PLN",
      monthly: "30-100 PLN",
      year1: "360-1200 PLN",
      note: "Brak kosztów wstępnych, ale ciągły koszt"
    },
    {
      method: "WordPress (samodzielnie)",
      initial: "50-300 PLN",
      monthly: "10-20 PLN",
      year1: "220-540 PLN",
      note: "Najniższy koszt całoroczny"
    },
    {
      method: "Freelancer",
      initial: "2 000-5 000 PLN",
      monthly: "50-200 PLN",
      year1: "2 600-7 400 PLN",
      note: "Zależy od złożoności projektu"
    },
    {
      method: "Agencja",
      initial: "5 000-30 000 PLN",
      monthly: "200-1 000 PLN",
      year1: "7 400-42 000 PLN",
      note: "Profesjonalny, pełny serwis"
    }
  ];

  const mistakesAndSolutions = [
    {
      mistake: "Brak SSL",
      why: "Google preferuje https. Wizytuący widzą ostrzeżenie 'Niezabezpieczona strona'. Straciłeś wiarygodność.",
      solution: "Zainstaluj Let's Encrypt SSL (większość hostów daje za darmo). Zmień URL w Settings z http:// na https://."
    },
    {
      mistake: "Wolne ładowanie (nieoptymalizowane zdjęcia)",
      why: "Zdjęcie 5MB zamiast 100KB to różnica między 3s a ładowaniem. Google ukarze Cię w rankingu.",
      solution: "Używaj wtyczki Smush, WebP format, CompressJPEG.com. Cele: plik < 200KB, ładowanie < 2s w PageSpeed."
    },
    {
      mistake: "Brak responsywności",
      why: "70% ruchu to mobile. Jeśli na telefoniu strona wygląda źle, tracisz klientów.",
      solution: "Wszystkie motywy WordPress są responsive. Test: otwórz na iPhone i sprawdź. W Chrome F12 > toggle device toolbar."
    },
    {
      mistake: "Brak Google Analytics",
      why: "Nie wiesz, kto przychodzi, skąd, co robi, jaki % konwertuje. Pracujesz na ślepo.",
      solution: "MonsterInsights wtyczka + Google Analytics. 10 minut setup. Masz dashboard ze statystykami."
    },
    {
      mistake: "Słabe SEO (brak meta tagów, nagłówków)",
      why: "Google nie zna tematu Twojej strony. Nikt nie znajdzie Cię w wyszukiwarce.",
      solution: "Yoast SEO wtyczka. Dla każdej strony: tytuł SEO (max 60 znaków), meta opis, H1, słowa kluczowe w tekście."
    },
    {
      mistake: "Chaotyczne CTA (call-to-action)",
      why: "Jeśli nie wiadomo co robić (gdzie kliknąć, co to kosztuje), użytkownik wychodzi.",
      solution: "Jedno główne CTA na stronie (duży przycisk 'Zamów teraz'). Clear value proposition - czemu mnie wybrać?"
    }
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona internetowa?",
      answer: "DIY costs: domena (50 zł) + hosting (200 zł) + motyw (0-300 zł) = od ~250 zł. Freelancer: 1 000-5 000 zł jednorazowo. Agencja: 2 500-30 000 zł. Miesięczne koszty: kreatory 30-100 zł, WordPress 10-20 zł, agencja 200-1 000 zł. Każde rozwiązanie ma swój koszt utrzymania."
    },
    {
      question: "Ile czasu zajmuje stworzenie strony?",
      answer: "Kreator (Wix): 1-2 dni (samodzielnie). WordPress: 2-4 tygodnie (nauka + setup). Freelancer: 2-6 tygodni zależy od złożoności. Agencja: 4-12 tygodni (research + design + kodowanie + testing)."
    },
    {
      question: "Czy WordPress jest trudny do nauki?",
      answer: "Nie. Panel WordPress jest intuicyjny (podobny do Worda). Główne rzeczy: dodawanie stron, edytowanie tekstu, zainstalowanie wtyczek. YouTube ma 100k tutoriali. Do nauki: 5-10 godzin praktyki i będziesz się swobodnie poruszać."
    },
    {
      question: "Czy potrzebuję umieć programować żeby mieć stronę?",
      answer: "Absolutnie nie! WordPress, Wix, Squarespace - wszystkie mają wizualne edytory (drag-drop). Kod to opcja zaawansowana, ale do stworzenia i zarządzania stron normalnej firmy nie potrzebujesz nawet znać HTML."
    },
    {
      question: "Jaki hosting wybrać do strony WordPress?",
      answer: "Dla startu: Setti.pl (ok), Nazwa.pl (ok), Hostgator.pl (dobry). Szukaj: support PL, 1-klik WordPress, backup, SSL. Unikaj: shared hosting za 10 zł (wolny), cenę nieskuteczną (to trap). 100-200 PLN/rok to fair price."
    },
    {
      question: "Jak zadbać o bezpieczeństwo strony?",
      answer: "1) Wordfence wtyczka (firewall + security). 2) Silne hasło do panelu. 3) Aktualizacje (WordPress + motywy + wtyczki). 4) SSL (https://). 5) Backupy regularne (UpdraftPlus). Większość hackerów to boty - zabezpiecz się na podstawy."
    },
    {
      question: "Czy Wix jest dobry dla firm?",
      answer: "Wix to dobry start dla małych biznesów, ale: SEO jest słabszy niż WordPress, trudno przenieść dane gdzie indziej, lock-in (zależysz od Wix). Jeśli planujesz rosnąć - WordPress to lepszy wybór. Jeśli teraz potrzebujesz szybkiej strony - Wix okej."
    },
    {
      question: "Kiedy warto zlecić stronę agencji zamiast robić samemu?",
      answer: "Zlecić warto jeśli: 1) Strona ma generować sprzedaż (nie stać na ryzyko). 2) Potrzebujesz SEO od dnia 1. 3) Nie masz czasu (bądź zajęty swoim biznesem). 4) Projekt jest skomplikowany (e-commerce, integracje). Jeśli to blog osobisty lub szybka wizytówka - WordPress samodzielnie to ok."
    }
  ];

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Jak stworzyć stronę internetową" },
  ];

  return (
    <>
      <SEOHead
        title="Jak stworzyć stronę internetową? Kompletny poradnik 2025"
        description="Dowiedz się jak stworzyć stronę internetową krok po kroku. Porównanie metod: WordPress, Wix, własny kod. Ile kosztuje, ile trwa i co wybrać?"
        canonical="https://fotz.pl/blog/jak-stworzyc-strone-internetowa"

        keywords="Jak stworzyć stronę internetową? Kompletny poradnik 2025, Jak stworzyć stronę internetową? Kompletny poradnik 2025 co to jest, Jak stworzyć stronę internetową? Kompletny poradnik 2025 jak działa, Jak stworzyć stronę internetową? Kompletny poradnik 2025 definicja, Jak stworzyć stronę internetową? Kompletny poradnik 2025 przykłady, Jak stworzyć stronę internetową? Kompletny poradnik 2025 poradnik, Jak stworzyć stronę internetową? Kompletny poradnik 2025 przewodnik"
      />
      <ArticleSchema
        headline="Jak stworzyć stronę internetową? Kompletny poradnik 2025"
        description="Kompletny poradnik tworzenia strony internetowej dla początkujących"
        datePublished="2025-01-20"
        dateModified="2025-04-11"
        author="fotz.pl"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">PORADNIK</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Jak stworzyć stronę internetową? Kompletny poradnik 2025
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Czy można stworzyć stronę internetową samemu? <strong>Tak</strong>. Ale jest duża różnica między stron, która
                <em> działa</em> a stron, która <em>generuje biznes</em>.
              </p>
              <p className="text-lg text-slate-400">
                W tym poradniku: wszystkie metody, jak długo trwa, ile kosztuje, co wybrać. Plus step-by-step tutorial dla WordPress.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <div className="prose prose-lg max-w-none">
                <h2>Czy można stworzyć stronę internetową samemu?</h2>
                <p>
                  Tak, można. W 2025 narzędzia są dostępne i intuicyjne - nawet osoba bez doświadczenia technicznego da radę.
                </p>
                <p>
                  <strong>Ale istnieje warunek:</strong> strona może być <em>funkcjonalna</em> (działa, jest ładna) lub <em>biznesowa</em> (sprzedaje, przyciąga klientów).
                  Różnica jest w SEO, designie, szybkości, konwersji.
                </p>
                <p>
                  Jeśli potrzebujesz strony do sprzedaży - czytaj dalej. Pokażemy Ci 4 metody i powiedzimy wprost, która z nich ma sens dla Ciebie.
                </p>
              </div>

              <div className="mt-12 p-8 bg-blue-50 border-l-4 border-blue-600 rounded">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  TL;DR (dla zabieganych)
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• <strong>Chcesz szybko:</strong> Wix / Squarespace (30-100 PLN/miesiąc, kilka dni pracy)</li>
                  <li>• <strong>Chcesz tanio:</strong> WordPress (250 PLN setup, 10-20 PLN/miesiąc, 2-4 tygodnie nauki)</li>
                  <li>• <strong>Chcesz profesjonalnie:</strong> Zlecenie freelancerowi lub agencji (2500-15000 PLN)</li>
                  <li>• <strong>Chcesz skalowalne app:</strong> Custom kod (drogi, ale warte jeśli rośnie)</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* 4 Methods */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                4 metody tworzenia strony internetowej
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Każda ma inne plusy, minusy, koszt i czas
              </p>

              <div className="space-y-8">
                {methods.map((method, idx) => (
                  <FadeInView key={idx} delay={idx * 0.05}>
                    <div className="bg-white rounded-lg overflow-hidden border border-slate-200">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                            <p className="text-blue-100">{method.intro}</p>
                          </div>
                          <span className="text-4xl font-bold opacity-20">{method.number}</span>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                              Plusy
                            </h4>
                            <ul className="space-y-2">
                              {method.pros.map((pro, i) => (
                                <li key={i} className="text-slate-700 text-sm flex gap-2">
                                  <span className="text-green-600 font-bold">✓</span>
                                  <span>{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                              <AlertCircle className="w-5 h-5 text-red-600" />
                              Minusy
                            </h4>
                            <ul className="space-y-2">
                              {method.cons.map((con, i) => (
                                <li key={i} className="text-slate-700 text-sm flex gap-2">
                                  <span className="text-red-600 font-bold">✕</span>
                                  <span>{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="border-t pt-6">
                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <div className="text-sm text-slate-500 font-semibold">KOSZT</div>
                              <div className="text-2xl font-bold text-slate-900">{method.cost}</div>
                            </div>
                            <div>
                              <div className="text-sm text-slate-500 font-semibold">WERDYKT</div>
                              <div className="text-slate-900 font-semibold">{method.verdict}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* WordPress Tutorial */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jak samodzielnie zrobić stronę - Tutorial WordPress (krok po kroku)
              </h2>
              <p className="text-slate-600 mb-12">
                Jeśli wybrałeś WordPress - tutaj znasz każdy krok. Szacuje się 20-40 godzin pracy.
              </p>

              <div className="space-y-8">
                {wordpressSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-6 pb-8 border-b border-slate-200 last:border-b-0"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-grow pt-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-700 leading-relaxed">{step.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3">Po tych 7 krokach będziesz mieć:</h3>
                <ul className="space-y-2 text-green-900">
                  <li>✓ Stronę domową z logo i opisem biznesu</li>
                  <li>✓ Stronę "O nas" z historią firmy</li>
                  <li>✓ Stronę "Usługi" z listą oferty</li>
                  <li>✓ Formularz kontaktowy</li>
                  <li>✓ Blog do publikowania artykułów (SEO + marketing content)</li>
                  <li>✓ Google Analytics - statystyki odwiedzających</li>
                  <li>✓ HTTPS zabezpieczenie</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Cost Breakdown */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Ile kosztuje stworzenie strony internetowej?
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Porównanie czterech metod
              </p>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-300">
                      <th className="text-left p-4 font-bold text-slate-900">Metoda</th>
                      <th className="text-right p-4 font-bold text-slate-900">Koszt początkowy</th>
                      <th className="text-right p-4 font-bold text-slate-900">Miesięcznie</th>
                      <th className="text-right p-4 font-bold text-slate-900">Rok 1 razem</th>
                      <th className="text-left p-4 font-bold text-slate-900">Notatka</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costBreakdown.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-slate-100"}
                      >
                        <td className="p-4 font-semibold text-slate-900">{row.method}</td>
                        <td className="p-4 text-right text-slate-700">{row.initial}</td>
                        <td className="p-4 text-right text-slate-700">{row.monthly}</td>
                        <td className="p-4 text-right font-bold text-slate-900">{row.year1}</td>
                        <td className="p-4 text-sm text-slate-600">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-slate-900">
                  <strong>Uwaga:</strong> Ceny to średnie dla Polski w 2025. Freelancerzy mogą być drożsi/taniej zależy od doświadczenia.
                  Agencje często mają pakiety: "małych" (2-5k), "średnich" (5-15k), "dużych" (15k+).
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* When to DIY vs Hire */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Kiedy robić samemu, a kiedy zlecić?
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
                  <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    Robić samemu
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">→</span>
                      <div>
                        <strong>Blog osobisty</strong>
                        <p className="text-sm text-slate-600">Jeśli piszesz dla siebie, nie dla biznesu</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">→</span>
                      <div>
                        <strong>Portfolio/wizytówka</strong>
                        <p className="text-sm text-slate-600">Freelancer, designer - musisz pokazać pracę</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">→</span>
                      <div>
                        <strong>Landing page testowy</strong>
                        <p className="text-sm text-slate-600">Chcesz przetestować ideę biznesu szybko</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">→</span>
                      <div>
                        <strong>Ograniczony budżet</strong>
                        <p className="text-sm text-slate-600">Nie stać Cię na agencję - YouTube + WordPress = ok</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-200">
                  <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                    Zlecić agencji
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-orange-600 font-bold">→</span>
                      <div>
                        <strong>Strona firmowa</strong>
                        <p className="text-sm text-slate-600">Generuje klientów - ryzyko mało zarabiania</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-600 font-bold">→</span>
                      <div>
                        <strong>Sklep internetowy</strong>
                        <p className="text-sm text-slate-600">E-commerce wymaga wiedzy: płatności, dostawa, ustawy</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-600 font-bold">→</span>
                      <div>
                        <strong>SEO od dnia 1</strong>
                        <p className="text-sm text-slate-600">Chcesz być na Google - potrzebujesz eksperta</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-600 font-bold">→</span>
                      <div>
                        <strong>Nie masz czasu</strong>
                        <p className="text-sm text-slate-600">Bądź zajęty biznesem - strona to zlecenie dla kogoś</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Common Mistakes */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Najczęstsze błędy przy tworzeniu strony samemu
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Poznaj je zanim będą Twoje
              </p>

              <div className="space-y-6">
                {mistakesAndSolutions.map((item, idx) => (
                  <FadeInView key={idx} delay={idx * 0.05}>
                    <div className="bg-white rounded-lg p-8 border-l-4 border-red-500">
                      <div className="flex gap-4 mb-4">
                        <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        <h3 className="text-lg font-bold text-slate-900">{item.mistake}</h3>
                      </div>

                      <div className="ml-10 space-y-4">
                        <div>
                          <p className="text-sm text-slate-500 font-semibold mb-2">WHY MATTERS</p>
                          <p className="text-slate-700">{item.why}</p>
                        </div>
                        <div className="pt-4 border-t border-slate-200">
                          <p className="text-sm text-slate-500 font-semibold mb-2">SOLUTION</p>
                          <p className="text-slate-700">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* SEO Basics */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Strona internetowa a pozycja w Google
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <FadeInView>
                  <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                    <Search className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="font-bold text-lg text-slate-900 mb-3">Podstawowy SEO</h3>
                    <p className="text-slate-700 text-sm mb-4">
                      Google musi wiedzieć, o czym jest Twoja strona. Meta tagi, nagłówki, słowa kluczowe.
                    </p>
                    <div className="bg-white p-4 rounded text-sm">
                      <p className="font-semibold text-slate-900 mb-2">Na Twojej liście:</p>
                      <ul className="space-y-1 text-slate-600 text-xs">
                        <li>• Meta title (max 60 znaków)</li>
                        <li>• Meta description (155 znaków)</li>
                        <li>• H1 na każdej stronie</li>
                        <li>• Słowa kluczowe w tekście</li>
                      </ul>
                    </div>
                  </div>
                </FadeInView>

                <FadeInView delay={0.05}>
                  <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                    <Zap className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="font-bold text-lg text-slate-900 mb-3">Szybkość ładowania</h3>
                    <p className="text-slate-700 text-sm mb-4">
                      Google ma obsesję na punkcie szybkości. Każda sekunda to -7% konwersji.
                    </p>
                    <div className="bg-white p-4 rounded text-sm">
                      <p className="font-semibold text-slate-900 mb-2">Cele:</p>
                      <ul className="space-y-1 text-slate-600 text-xs">
                        <li>• Ładowanie poniżej 2 sekund</li>
                        <li>• Obrazy poniżej 200KB</li>
                        <li>• Cache + compression</li>
                        <li>• PageSpeed Insights "Zielone"</li>
                      </ul>
                    </div>
                  </div>
                </FadeInView>

                <FadeInView delay={0.1}>
                  <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                    <Smartphone className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="font-bold text-lg text-slate-900 mb-3">Mobile-first</h3>
                    <p className="text-slate-700 text-sm mb-4">
                      70% ruchu to mobile. Google rankuje głównie na podstawie wersji mobilnej.
                    </p>
                    <div className="bg-white p-4 rounded text-sm">
                      <p className="font-semibold text-slate-900 mb-2">Checklist:</p>
                      <ul className="space-y-1 text-slate-600 text-xs">
                        <li>• Responsywny design</li>
                        <li>• Touch-friendly buttons</li>
                        <li>• Czytelny font na mobile</li>
                        <li>• Brak pop-upów na mobile</li>
                      </ul>
                    </div>
                  </div>
                </FadeInView>
              </div>

              <div className="mt-12 p-8 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-4">Ważne: SEO to maraton, nie sprint</h3>
                <p className="text-yellow-900 text-sm mb-4">
                  Pozycjonowanie organiczne zajmuje 3-6 miesięcy (czasem dłużej) bo Google musi obfotografować Twoją stronę,
                  przeanalizować konkurencję i sprawdzić, czy jesteś wiarygodny.
                </p>
                <p className="text-yellow-900 text-sm">
                  Ale jeśli zrobisz SEO od dnia 1 (zamiast robić naprawy potem) - zaoszczędzisz czas i pienią(dze. Po 6 miesiącach
                  będziesz w TOP 10 Google dla swoich głównych słów kluczowych.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Odpowiadamy na najczęstsze pytania
              </h2>

              <FAQSchema items={faqItems} />

              <Accordion type="single" collapsible className="w-full mt-12 bg-white rounded-lg">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6">
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 px-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        {/* CTA */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-blue-600">
            <div className="max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Czułeś się stracony, ale teraz wiesz co robić?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Jeśli jednak hosting/domain/WordPress to za dużo - my się tym zajmujemy. Gwarantujemy, że strona będzie sprzedawać.
              </p>
              <Link to="/uslugi/tworzenie-stron-internetowych">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                  Poznaj naszą usługę tworzenia stron <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </section>
        </FadeInView>

        {/* Related articles */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold mb-8">Powiązane artykuły</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  to="/blog/ile-kosztuje-strona-internetowa"
                  className="block p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-slate-900 mb-2">Ile kosztuje strona internetowa?</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Pełny breakdown cen: co wliczone, ukryte koszty, porównanie agencji
                  </p>
                  <span className="text-blue-600 font-semibold text-sm flex items-center gap-2">
                    Czytaj <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  to="/uslugi/pozycjonowanie"
                  className="block p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-slate-900 mb-2">Pozycjonowanie stron (SEO)</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Jak znaleźć się na Google? SEO od A do Z, co robić dzień po uruchomieniu
                  </p>
                  <span className="text-blue-600 font-semibold text-sm flex items-center gap-2">
                    Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Final CTA */}
        <ContactSection
        />
      </Layout>
    </>
  );
}
