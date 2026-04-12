import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Shield, TrendingUp, AlertTriangle, Search, CheckCircle, Eye } from "lucide-react";
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

export default function BlogWizerunekFirmy() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Wizerunek firmy w internecie" },
  ];

  const wizerunkFilars = [
    {
      filar: "Strona www",
      opis: "Główna wizytówka firmy. Szybkość, mobilność, SEO i design wpływają na pierwsze wrażenie klientów.",
      narzedzia: "Google PageSpeed Insights, SEO Audit, Analytics",
      priorytet: "Najwyższy"
    },
    {
      filar: "Google Business Profile",
      opis: "Profil lokalny widoczny w wynikach Google. Numer telefonów, adres, opinie, zdjęcia. Kluczowy dla wyszukiwań lokalnych.",
      narzedzia: "Google Business Profile, Google Reviews, GBP Manager",
      priorytet: "Najwyższy"
    },
    {
      filar: "Social media",
      opis: "Facebook, Instagram, LinkedIn. Pozycjonowanie, zaangażowanie, response time na komentarze. Budowanie społeczności.",
      narzedzia: "Meta Business Suite, Later, Hootsuite, Buffer",
      priorytet: "Wysoki"
    },
    {
      filar: "Opinie i recenzje",
      opis: "Google, Trustpilot, Ceneo, portale branżowe. Opinie zarządzane mogą znacznie poprawiać wizerunek i CTR.",
      narzedzia: "Review Manager, Trustpilot, Google Reviews, Ceneo Reviews",
      priorytet: "Wysoki"
    },
    {
      filar: "Content marketing",
      opis: "Blog, artykuły, case studies. Pokazuje expertyzę, buduje autorytet, poprawia SEO i zaangażowanie.",
      narzedzia: "WordPress, Medium, LinkedIn Articles, Google Docs",
      priorytet: "Średni-wysoki"
    },
    {
      filar: "PR cyfrowy",
      opis: "Publikacje w mediach, artykuły gościnne, prasowe. Buduje wiarygodność i backlinki dla SEO.",
      narzedzia: "Cision, mailing do redakcji, PR agencies, Newsroom",
      priorytet: "Średni"
    }
  ];

  const budowanieFazy = [
    {
      faza: 1,
      tytul: "Analiza obecnego wizerunku",
      opis: "Zbadaj, jak firma jest postrzegana online. Przeszukaj markę na Google, social media, fora, opinie. Sprawdź backlinki i wzmianki. Zidentyfikuj słabe punkty."
    },
    {
      faza: 2,
      tytul: "Zdefiniuj markę i wartości",
      opis: "Ustal misję, wizję, wartości firmy. Napisz unique value proposition (UVP). To będzie podstawa wszystkich komunikatów. Spójność to klucz do silnego wizerunku."
    },
    {
      faza: 3,
      tytul: "Optymalizacja strony www",
      opis: "Zadbaj o design, szybkość, SEO, mobile-friendly. Dodaj case studies, testimoniale, social proof. Clear CTA. Strona to najważniejszy asset. Inwestuj w profesjonalny design."
    },
    {
      faza: 4,
      tytul: "Zbuduj Google Business Profile",
      opis: "Uzupełnij wszystkie informacje, dodaj zdjęcia, regularne aktualizacje, odpowiadaj na opinie. Zachęcaj klientów do zostawienia opinii. Monitoruj review rate."
    },
    {
      faza: 5,
      tytul: "Content marketing i SEO",
      opis: "Publikuj artykuły, poradniki, case studies. Optymalizuj dla słów kluczowych (wizerunek firmy w internecie to 400+ wol/mies). Buduj backlinki przez publicyzm i content."
    },
    {
      faza: 6,
      tytul: "Monitoring i zarządzanie reputacją",
      opis: "Monitoruj wzmianki, opinie, komentarze. Reaguj szybko na negatywne oceny. Wzmacniaj pozytywny content. Automatyzuj monitoring za pomocą narzędzi."
    }
  ];

  const kryzysRadzenie = [
    {
      krok: "Szybka reakcja",
      opis: "Dobrze mieć established crisis management team. W ciągu 24h odpowiedz na negatywną opinię lub artykuł. Ignorowanie pogarszy sytuację."
    },
    {
      krok: "Empatia i odpowiedzialność",
      opis: "Nie atakuj recenzenta. Przeproś jeśli masz rację, wyjaśnij sytuację. Słowa: 'Rozumiemy Twoją frustrację', 'Chcemy to naprawić', budują zaufanie."
    },
    {
      krok: "Przeniesienie do offline",
      opis: "Zaproponuj telefon lub spotkanie. Wiele konfliktów da się rozwiązać prywatnie. Publiczna dyskusja może eskalować."
    },
    {
      krok: "Wzmacnianie pozytywnej treści",
      opis: "Nie usuwaj negativu (wyglądasz podejrzanie). Zamiast tego publikuj więcej pozytywnych artykułów, opinii, case studies. Pozytywna treść 'zagłusza' negatywną."
    },
    {
      krok: "Przezroczystość",
      opis: "Wyjaśnij co poszło nie tak i co robisz aby to naprawić. Transparentna komunikacja buduje zaufanie szybciej niż ukrywanie."
    },
    {
      krok: "Monitoring długoterminowy",
      opis: "Po kryzysie monitoruj nowe wzmianki i opinie. Zadbaj aby problem się nie powtórzył. Pokaż że się zmieniłeś."
    }
  ];

  const monitoringNarzedzia = [
    {
      narzedzie: "Google Alerts",
      opis: "Bezpłatne alerty na nowe wzmianki o firmie i konkurentach. Ustawiaj dla nazwy firmy, CEO, głównych produktów.",
      koszt: "Darmowe"
    },
    {
      narzedzie: "Mention.com",
      opis: "Monitoring wzmianek na całym internecie (sieci, blogi, media, YouTube, TikTok). Dashboard z real-time alertami.",
      koszt: "Od 49/mies"
    },
    {
      narzedzie: "Semrush / Ahrefs",
      opis: "Monitoring backlinków, pozycji SEO, konkurencji. Alerty na nowe mention. Narzędzia SEO all-in-one.",
      koszt: "Od 99/mies (Semrush), 99/mies (Ahrefs)"
    },
    {
      narzedzie: "Brandwatch / Talkwalker",
      opis: "Enterprise monitoring sentymentu. AI analysis. Tracking na mediach społecznych, blogach, mediach. Bardzo zaawansowane.",
      koszt: "Custom pricing (zazwyczaj 2k+/mies)"
    },
    {
      narzedzie: "Social Listening (Meta Business Suite, Hootsuite)",
      opis: "Monitoring komentarzy, mentions i hashtags na social media. Sentiment analysis. Scheduling postów.",
      koszt: "Meta Business Suite darmowe, Hootsuite od 49/mies"
    },
    {
      narzedzie: "Review.io / Trustpilot",
      opis: "Monitoring opinii ze wszystkich portali (Google, Trustpilot, Ceneo itd). Alerts na nowe recenzje.",
      koszt: "Review.io od 99/mies, Trustpilot od 199/mies"
    }
  ];

  const faqItems = [
    {
      question: "Co to jest wizerunek firmy w internecie i dlaczego jest ważny?",
      answer: "Wizerunek firmy w internecie (online reputation) to suma wszystkich informacji o Twojej firmie dostępnych online: strona www, Google Business Profile, social media, opinie, artykuły, media mentions. Ważny jest, bo 90% potencjalnych klientów Google-uje firmę zanim zadzwoni. Negatywny wizerunek to stracone sprzedaże, trudności w rekrutacji, gorsze relacje z partnerami."
    },
    {
      question: "Jak długo trwa budowanie pozytywnego wizerunku?",
      answer: "To zależy od skali i bieżącego stanu. Pierwsze efekty SEO widać po 2-3 miesiącach. Pełny effect (marka rozpoznawalna, opinie, backlinki) to 6-12 miesięcy. Jeśli masz negatywny wizerunek do naprawienia, może zająć 12-24 miesiące. Klucz to konsystencja i długoterminowe podejście."
    },
    {
      question: "Czy mogę usunąć negatywne opinie z Google?",
      answer: "Negatywne opinie można usunąć TYLKO jeśli naruszają politykę Google (spam, wulgaryzmaty, niedochodne linki). Jeśli to legalna opinia, nie usuniesz jej. Zamiast tego: odpowiedz na opinię, zaproponuj rozwiązanie, publikuj pozytywne recenzje aby 'zagłuszyć' negatywną. Spróbuj skontaktować się z autorem, może się zgodzą na zmianę."
    },
    {
      question: "Jaki wpływ ma SEO na wizerunek firmy?",
      answer: "Ogromny. 90% ruchu na pierwszy wynik Google. Jeśli na pozycji 1 masz artykuł, że Twoja firma to scam (nawet jeśli nieprawda), wszyscy to zobaczą. Dlatego inwestuj w content marketing — publikuj artykuły branżowe, case studies, poradniki. Zajmą pozycje w Google i wzmacniają pozytywny wizerunek. SEO to długoterminowa inwestycja w reputację."
    },
    {
      question: "Czy social media naprawdę wpływa na wizerunek?",
      answer: "Tak. LinkedIn, Facebook, Instagram to nowe CV firmy. Potencjalni pracownicy i klienci sprawdzają social media, szukają aktywności, review rate, tone of voice. Nieaktywne social media = firm wygląda na martwą. Aktywne z pozytywnym tone = profesjonalna, nowoczesna, angażująca. Nie musisz być na wszystkich platformach, ale tam gdzie jesteś — bądź aktywny i responsywny."
    },
    {
      question: "Ile czasu dziennie powinniśmy poświęcać na monitorowanie opinii?",
      answer: "Minimum 15-30 minut dziennie. Sprawdź Google Alerts, komentarze na social media, nowe opinie. Odpowiedz na każdy komentarz w ciągu 24h (w tym negatywne). Jeśli masz timea, niech monitoring będzie podzielony: rano check Google Business Profile, w trakcie dnia social media monitoring, wieczorem finalne odpowiedzi. Używaj narzędzi do automatyzacji — Google Alerts, Hootsuite, Review.io."
    },
    {
      question: "Czy mogę kupować pozytywne opinie?",
      answer: "Nie. To łamie politykę każdej platformy i może Ci UJ Google Business Profile, Facebook, Trustpilot. Nawet jeśli kupisz fałszywe opinie, szybko je wyłapią (algorytmy, konkurenci się donoszą). Zamiast tego: 15 minut po zakupie wyślij automatyczną wiadomość o recenzji. Osobiście dzwonij do VIP klientów i proś o opinię. Offeruj mały discount za recenzję (legalne na większości platform)."
    },
    {
      question: "Jak reagować na ataki konkurencji lub fake reviews?",
      answer: "Fake reviews: Zgłoś platformie (Google, Trustpilot). Mają tools do ich usunięcia jeśli widać wzorzec. Ataki konkurencji: Nie kontruj publicznie — wygląda źle. Zamiast tego dokumentuj wszystko, pisz do platformy, oraz — key — publikuj swojego pozytywnego contentu. Pozytywny signal zawsze przebija negatywny szum. Jeśli ataki są extreme: zatrudnij agencję PR, mogą napisać rebuttal article, uaktualnić media coverage. Ale najlepsze - ignoruj i buduj."
    }
  ];

  return (
    <>
      <SEOHead
        title="Wizerunek firmy w internecie - jak budować i chronić? 2025"
        description="Kompleksowy poradnik budowania wizerunku firmy online. Filary reputacji, zarządzanie kryzysem, opinie, monitoring marki, SEO. Praktyczne narzędzia i strategie."
        canonical="https://fotz.pl/blog/wizerunek-firmy-w-internecie"
      />
      <ArticleSchema
        title="Wizerunek firmy w internecie - jak budować i chronić? 2025"
        description="Kompleksowy poradnik budowania wizerunku firmy online. Filary reputacji (strona www, GBP, social media, opinie, content marketing), zarządzanie kryzysem wizerunkowym, monitoring marki, narzędzia i strategie 2025."
        datePublished="2025-04-12"
        dateModified="2025-04-12"
        url="https://fotz.pl/blog/wizerunek-firmy-w-internecie"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 min czytania</span>
              <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Reputacja online</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Wizerunek firmy w internecie
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Jak zbudować pozytywny wizerunek online, zarządzać opiniami, reagować na kryzysy wizerunkowe
              i monitorować reputację marki. Praktyczne strategie i narzędzia na 2025 rok.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                90% potencjalnych klientów Google-uje firmę zanim nawiąże kontakt. Twój wizerunek w internecie to całość
                danych o Twojej firmie: strona www, opinie, social media, artykuły, press mentions. Każdy element wpływa
                na decyzje zakupowe, rekrutacyjne, partnerskie.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Pozytywny wizerunek to: wyższa konwersja, lepsze kandydatury, silniejsza pozycja negocjacyjna. Negatywny
                to: utrata sprzedaży, problemy z PR, trudniejsza rekrutacja. W tym przewodniku wyjaśnimy, jak budować
                wizerunek od zera, zarządzać kryzysami i monitorować marką 24/7.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Filary */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sześć filarów wizerunku online</h2>
              <p className="text-slate-300 mb-8">
                Pozytywny wizerunek buduje się na tych sześciu elementach. Każdy jest równie ważny.
              </p>
            </FadeInView>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-yellow-400 font-semibold">Filar</th>
                    <th className="text-left py-3 px-4 text-yellow-400 font-semibold">Opis</th>
                    <th className="text-left py-3 px-4 text-yellow-400 font-semibold">Narzędzia</th>
                    <th className="text-left py-3 px-4 text-yellow-400 font-semibold">Priorytet</th>
                  </tr>
                </thead>
                <tbody>
                  {wizerunkFilars.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                      <td className="py-3 px-4 text-slate-200 font-medium">{row.filar}</td>
                      <td className="py-3 px-4 text-slate-300">{row.opis}</td>
                      <td className="py-3 px-4 text-slate-300 text-xs">{row.narzedzia}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          row.priorytet === "Najwyższy" ? "bg-red-500/20 text-red-300" :
                          row.priorytet === "Wysoki" ? "bg-orange-500/20 text-orange-300" :
                          "bg-blue-500/20 text-blue-300"
                        }`}>
                          {row.priorytet}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Budowanie */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Jak zbudować pozytywny wizerunek?</h2>
              <p className="text-slate-300 mb-8">
                6-etapowy plan budowania wizerunku firmy od zera:
              </p>
            </FadeInView>

            <div className="space-y-4">
              {budowanieFazy.map((item) => (
                <FadeInView key={item.faza} delay={item.faza * 0.1}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex gap-4">
                    <div className="bg-yellow-400/20 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 font-bold text-sm">{item.faza}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1">{item.tytul}</h3>
                      <p className="text-slate-300 text-sm">{item.opis}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Kryzys */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Zarządzanie kryzysem wizerunkowym</h2>
              <p className="text-slate-300 mb-8">
                Pojawiła się negatywna opinia lub artykuł? Oto jak reagować:
              </p>
            </FadeInView>

            <div className="space-y-4">
              {kryzysRadzenie.map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-red-900/10 border border-red-700/30 rounded-lg p-6">
                    <div className="flex gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-red-400 mb-2">{item.krok}</h3>
                        <p className="text-slate-300">{item.opis}</p>
                      </div>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>

            <div className="mt-8 bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-6">
              <div className="flex gap-4">
                <Eye className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">Kluczowa zasada</h3>
                  <p className="text-slate-300">
                    Nigdy nie atakuj autora negatywnej opinii. Zawsze odpowiadaj z empatią i profesjonalizmem.
                    Publiczna dyskusja powinna pokazać że Ty jesteś profesjonalistą, a recenzent może być sfrustrowany.
                    Czytelnicy widzą twoją odpowiedź i sami się orientują czy jesteś wiarygodny czy nie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monitoring */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Monitoring marki — narzędzia</h2>
              <p className="text-slate-300 mb-8">
                Aby zarządzać reputacją, musisz wiedzieć co się mówi o Twojej firmie. Oto narzędzia do monitoring 24/7:
              </p>
            </FadeInView>

            <div className="grid md:grid-cols-2 gap-6">
              {monitoringNarzedzia.map((tool, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-400/50 transition">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3">{tool.narzedzie}</h3>
                    <div className="space-y-3 text-sm">
                      <p className="text-slate-300">{tool.opis}</p>
                      <div className="bg-gray-900/50 rounded px-3 py-2">
                        <p className="text-yellow-300 text-xs">
                          <span className="font-semibold">Koszt:</span> {tool.koszt}
                        </p>
                      </div>
                    </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Najczęstsze pytania</h2>
              <p className="text-slate-300 mb-8">
                Odpowiadamy na pytania dotyczące budowania i ochrony wizerunku online.
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
                Chcesz wzmocnić wizerunek firmy?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Budowanie wizerunku to długoterminowy proces, ale efekty są trwałe. Pozytywna reputacja
                to stała przewaga konkurencyjna i szansa na wyższe przychody.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition"
              >
                Rozmowa strategiczna <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeInView>
          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
}
