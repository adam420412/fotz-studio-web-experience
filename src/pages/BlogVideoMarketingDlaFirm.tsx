import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, User, TrendingUp, Play, Target, CheckCircle2, Zap, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

export default function BlogVideoMarketingDlaFirm() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Video Marketing dla Firm – Kompletny Przewodnik 2026",
    description: "Video marketing dla firm – rodzaje filmów reklamowych, YouTube Ads, TikTok, koszty i zwrot z inwestycji. Kompletny przewodnik po video marketingu",
    image: "https://fotz.pl/images/video-marketing-dla-firm.jpg",
    datePublished: "2026-03-10",
    dateModified: "2026-03-10",
    author: {
      "@type": "Organization",
      name: "Zespół FOTZ",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Blog",
        item: "https://fotz.pl/blog",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Video Marketing dla Firm",
        item: "https://fotz.pl/blog/video-marketing-dla-firm",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Ile kosztuje produkcja wideo dla firmy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Koszt produkcji wideo zależy od jakości i zakresu projektu. Wideo do social media kosztuje 1000-5000 PLN, profesjonalny film promocyjny 5000-20000 PLN, a kampania złożona 20000+ PLN.",
        },
      },
      {
        "@type": "Question",
        name: "Czy video marketing rzeczywiście zwiększa sprzedaż?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, badania pokazują, że wideo zwiększa engagement o 6x i konwersje o 30-80% w zależności od branży i jakości zawartości.",
        },
      },
      {
        "@type": "Question",
        name: "Jaki format wideo jest najlepszy dla TikToka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Na TikToku najskuteczniejsze są krótkie, dynamiczne wideo w formacie pionowym (9:16) trwające 15-60 sekund, z autentyczną zawartością i ścieżką dźwiękową.",
        },
      },
      {
        "@type": "Question",
        name: "Ile czasu zajmuje produkcja profesjonalnego wideo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Profesjonalna produkcja wideo trwa zazwyczaj 4-8 tygodni, w zależności od kompleksności projektu, od konceptu, przez produkcję, do edycji.",
        },
      },
      {
        "@type": "Question",
        name: "Jakie metryki powinnam śledzić w video marketingu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kluczowe metryki to liczba wyświetleń, czas oglądania, procentowa przeglądalność (VTR), współczynnik kliknięcia (CTR), zaangażowanie i konwersje.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEOHead
        title="Video Marketing dla Firm | Fotz Studio"
        description="Video marketing dla firm – rodzaje filmów reklamowych, YouTube Ads, TikTok, koszty i zwrot z inwestycji. Kompletny przewodnik po video marketingu ✓"
        canonical="https://fotz.pl/blog/video-marketing-dla-firm"
        schema={articleSchema}

        keywords="Video Marketing dla Firm – Jak Skutecznie Promować Firmę Wideo? [2026], Video Marketing dla Firm – Jak Skutecznie Promować Firmę Wideo? [2026] poradnik, Video Marketing dla Firm – Jak Skutecznie Promować Firmę Wideo? [2026] strategia, Video Marketing dla Firm – Jak Skutecznie Promować Firmę Wideo? [2026] jak zrobić, Video Marketing dla Firm – Jak Skutecznie Promować Firmę Wideo? [2026] marketing, Video Marketing dla Firm – Jak Skutecznie Promować Firmę Wideo? [2026] przykłady, Video Marketing dla Firm – Jak Skutecznie Promować Firmę Wideo? [2026] w Polsce"
      />

      <BreadcrumbSchema items={breadcrumbSchema.itemListElement} />
      <FAQSchema data={faqSchema} />

      <article className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8 border-b border-gray-200 pb-8">
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="default">Video Marketing</Badge>
              <Badge variant="outline">Marketing Cyfrowy</Badge>
            </div>

            <h1 className="mb-4 text-4xl font-bold leading-tight lg:text-5xl">
              Video Marketing dla Firm – Kompletny Przewodnik 2026
            </h1>

            <p className="mb-6 text-xl text-gray-600">
              Wideo to najpotężniejsze narzędzie marketingowe XXI wieku. Dowiedz się, jak wykorzystać video marketing do promocji firmy, zwiększenia zaangażowania i sprzedaży.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Zespół FOTZ</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>10 marca 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} />
                <span>15 min czytania</span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className="mb-12 rounded-lg bg-gray-50 p-6">
            <h2 className="mb-4 font-semibold text-gray-900">Spis treści</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#introduction" className="text-blue-600 hover:underline">
                  1. Dlaczego video marketing jest ważny dla firm?
                </a>
              </li>
              <li>
                <a href="#types" className="text-blue-600 hover:underline">
                  2. Rodzaje filmów marketingowych
                </a>
              </li>
              <li>
                <a href="#youtube" className="text-blue-600 hover:underline">
                  3. YouTube marketing dla firm
                </a>
              </li>
              <li>
                <a href="#social" className="text-blue-600 hover:underline">
                  4. Video w mediach społecznościowych
                </a>
              </li>
              <li>
                <a href="#ads" className="text-blue-600 hover:underline">
                  5. Reklamy wideo online
                </a>
              </li>
              <li>
                <a href="#planning" className="text-blue-600 hover:underline">
                  6. Jak zaplanować kampanię video?
                </a>
              </li>
              <li>
                <a href="#costs" className="text-blue-600 hover:underline">
                  7. Ile kosztuje produkcja wideo?
                </a>
              </li>
              <li>
                <a href="#measurement" className="text-blue-600 hover:underline">
                  8. Mierzenie skuteczności
                </a>
              </li>
              <li>
                <a href="#case-study" className="text-blue-600 hover:underline">
                  9. Case study kampanii video
                </a>
              </li>
              <li>
                <a href="#faq" className="text-blue-600 hover:underline">
                  10. FAQ – Najczęstsze pytania
                </a>
              </li>
            </ul>
          </nav>

          {/* Introduction */}
          <section id="introduction" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">1. Dlaczego video marketing jest ważny dla firm?</h2>

            <div className="mb-6 rounded-lg bg-blue-50 p-6">
              <p className="font-semibold text-blue-900">Statystyka:</p>
              <p className="mt-2 text-blue-900">
                82% całego ruchu internetowego generuje wideo. Firmy korzystające z video marketingu osiągają 6x większe zaangażowanie niż w marketingu tradycyjnym.
              </p>
            </div>

            <p className="mb-4">
              Video marketing to nie przyszłość – to rzeczywistość. W 2026 roku wideo stanowi dominującą formę treści online. Dlaczego? Ponieważ:
            </p>

            <ul className="mb-6 space-y-3">
              <li className="flex gap-3">
                <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Wideo jest bardziej zapamiętywalne</strong> – ludzie zapamiętują 95% wiadomości z wideo, ale tylko 10% z tekstu
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Zwiększa konwersje</strong> – strony z wideo mają 80% więcej szans na konwersję
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Dominuje algorytmy platform</strong> – YouTube, TikTok, Instagram i LinkedIn promują zawartość wideo
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Buduje zaufanie do marki</strong> – wideo pozwala pokazać ludzi za firmą, co buduje autentyczność
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Poprawia SEO</strong> – strony zawierające wideo mają wyższe rankingi w Google
                </span>
              </li>
            </ul>

            <p>
              Niezależnie od branży, video marketing powinien być kluczową częścią Twojej strategii marketingowej. Pytanie nie jest "czy robić video marketing", ale "jak to robić efektywnie".
            </p>
          </section>

          {/* Section: Types of Marketing Videos */}
          <section id="types" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">2. Rodzaje filmów marketingowych</h2>

            <p className="mb-8">
              Nie wszystkie wideo są takie same. Każdy typ wideo ma inny cel i funkcję w strategii marketingowej. Oto najpopularniejsze rodzaje filmów dla firm:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Film marki */}
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Play className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Film marki (Brand Film)</h3>
                  <p className="text-gray-700">
                    Opowiada historię Twojej firmy, wartości i misji. Buduje emocjonalne połączenie z odborcami. Zazwyczaj trwa 1-3 minuty.
                  </p>
                </CardContent>
              </Card>

              {/* Wideo wyjaśniające */}
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Wideo wyjaśniające (Explainer Video)</h3>
                  <p className="text-gray-700">
                    Pokazuje jak działa Twój produkt lub usługa. Krótkie, zrozumiałe wideo (2-3 min) które upraszczają skomplikowane koncepty.
                  </p>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <User className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Testimonial / Case Study</h3>
                  <p className="text-gray-700">
                    Klient opowiada o swoim doświadczeniu z Twoją firmą. Niezwykle ważne dla budowania wiarygodności i zaufania.
                  </p>
                </CardContent>
              </Card>

              {/* Instruktaż */}
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                    <CheckCircle2 className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Instruktaż (How-To Video)</h3>
                  <p className="text-gray-700">
                    Uczy odbiorców jak wykonać jakieś zadanie. Doskonały dla SEO i budowania autorytetu eksperta w branży.
                  </p>
                </CardContent>
              </Card>

              {/* Zawartość do social media */}
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100">
                    <TrendingUp className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Reels i Shorts</h3>
                  <p className="text-gray-700">
                    Krótkie, dynamiczne wideo (15-60 sekund) dla TikToka, Instagram Reels i YouTube Shorts. Wysokie zaangażowanie, łatwe do udostępnienia.
                  </p>
                </CardContent>
              </Card>

              {/* Reklamy produktów */}
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                    <Target className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Reklama produktu</h3>
                  <p className="text-gray-700">
                    Bezpośrednia promocja produktu z wezwaniem do działania. Przygotowana do kampanii advertising na YouTube, TikTok lub Facebooku.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section: YouTube Marketing */}
          <section id="youtube" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">3. YouTube marketing dla firm</h2>

            <p className="mb-6">
              YouTube to drugi największy portal wyszukiwania (po Google) z ponad 2 miliardami zalogowanych użytkowników miesięcznie. Dla firm video marketing to oznacza ogromną szansę na dotarcie do docelowej publiczności.
            </p>

            <h3 className="mb-4 text-2xl font-bold">Optymalizacja kanału YouTube</h3>
            <ul className="mb-8 space-y-2">
              <li className="flex gap-3">
                <ArrowRight size={20} className="flex-shrink-0 text-blue-600" />
                <span>
                  <strong>Profesjonalny baner i logo</strong> – pierwszy składnik wizualny Twojego kanału
                </span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={20} className="flex-shrink-0 text-blue-600" />
                <span>
                  <strong>Opisz kanał słowami kluczowymi</strong> – YouTube przeszukuje opis kanału w poszukiwaniu tematów
                </span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={20} className="flex-shrink-0 text-blue-600" />
                <span>
                  <strong>Tworz playlisty</strong> – grupuj wideo tematycznie, zwiększa to czas spędzony na kanale
                </span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={20} className="flex-shrink-0 text-blue-600" />
                <span>
                  <strong>Spersonalizuj kanał</strong> – dodaj w górnej części kanału napis z wezwaniem do działania (CTA)
                </span>
              </li>
            </ul>

            <h3 className="mb-4 text-2xl font-bold">YouTube Ads – formaty reklam</h3>
            <ul className="mb-8 space-y-2">
              <li className="flex gap-3">
                <ArrowRight size={20} className="flex-shrink-0 text-green-600" />
                <span>
                  <strong>Reklamy skippowalne (TrueView)</strong> – widz może pominąć reklamę po 5 sekundach. Płacisz tylko jeśli obejrzy 30 sekund lub cały film
                </span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={20} className="flex-shrink-0 text-green-600" />
                <span>
                  <strong>Reklamy nieskippowalne (Bumper Ads)</strong> – krótkie reklamy (6 sekund) które się nie dają pominąć
                </span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={20} className="flex-shrink-0 text-green-600" />
                <span>
                  <strong>Reklamy surround</strong> – pojawiają się obok wideo bez przerywania go
                </span>
              </li>
            </ul>

            <h3 className="mb-4 text-2xl font-bold">SEO dla YouTube</h3>
            <p className="mb-4">
              Jeśli chcesz, aby Twoje wideo było widoczne w YouTube, musisz zadbać o SEO:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                <span>
                  <strong>Tytuł</strong> – musi zawierać słowo kluczowe, być interesujący i zachęcać do kliknięcia
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                <span>
                  <strong>Opis</strong> – pisze dla ludzi i algorytmu YouTube; zawiera słowa kluczowe i linki
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                <span>
                  <strong>Tagi</strong> – używaj co najmniej 10 tagów zawierających słowa kluczowe
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                <span>
                  <strong>Miniatura (thumbnail)</strong> – musi być ostRA i wyróżniająca się, zwiększa CTR nawet o 30%
                </span>
              </li>
            </ul>
          </section>

          {/* Section: Social Media Video */}
          <section id="social" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">4. Video w mediach społecznościowych</h2>

            <p className="mb-8">
              Każda platforma społecznościowa ma inne wymagania dla wideo. Oto krótki przewodnik po najpopularniejszych platformach:
            </p>

            <div className="space-y-8">
              {/* TikTok */}
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-4 text-2xl font-bold">TikTok dla biznesu</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                    <span>Format pionowy 9:16, długość 15-60 sekund (optymalnie 21-34 sekundy)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                    <span>Dynamiczne, autentyczne treści – TikTok karze nudne, profesjonalne wideo</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                    <span>Używaj trendów i muzyki – algorytm TikToka promuje wideo z popularnymi dźwiękami</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                    <span>Hashtagi – badania pokazują, że 3 hashtagi to optimum, nie więcej niż 5</span>
                  </li>
                </ul>
              </div>

              {/* Instagram Reels */}
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-4 text-2xl font-bold">Instagram Reels</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-green-600" />
                    <span>Format pionowy 9:16, długość do 90 sekund, optymalnie 15-30 sekund</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-green-600" />
                    <span>Instagram promuje Reels ponad posty ze zdjęciami – inwestuj w ten format</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-green-600" />
                    <span>Dodaj tekst na wideo – wiele osób ogląda bez dźwięku</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-green-600" />
                    <span>Wezwanie do działania (CTA) – zachęć do kliknięcia w bio lub na profil</span>
                  </li>
                </ul>
              </div>

              {/* Facebook Video */}
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-4 text-2xl font-bold">Facebook Video</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                    <span>Format kwadratowy (1:1) lub pionowy (9:16), długość do 2 minut</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                    <span>Facebook automitycznie odtwarza wideo bez dźwięku – dodaj napisy/tekst</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                    <span>Pierwsze 3 sekundy są kluczowe – musisz przyciągnąć uwagę natychmiast</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                    <span>Facebook Video Ads – jeden z najtańszych formatów reklam wideo</span>
                  </li>
                </ul>
              </div>

              {/* LinkedIn Video */}
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-4 text-2xl font-bold">LinkedIn Video</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-purple-600" />
                    <span>Format pionowy lub poziomy, idealna długość 30 sekund - 1 minuta</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-purple-600" />
                    <span>Profesjonalna treść – instruktaże, porady dla branży, case studies</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-purple-600" />
                    <span>LinkedIn zawsze zmienia treści pracowników – szkolenie zespołu to inwestycja</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 text-purple-600" />
                    <span>Doskonale dla B2B – osiągaj decydentów w branży Twojej firmy</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Video Ads */}
          <section id="ads" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">5. Reklamy wideo online</h2>

            <p className="mb-8">
              Reklama wideo online pozwala na precyzyjne targetowanie i mierzalne wyniki. Oto największe platformy do advertising wideo:
            </p>

            <div className="grid gap-6">
              {/* YouTube Ads */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-bold">YouTube Ads</h3>
                  <p className="mb-4 text-gray-700">
                    Dotarcie do miliardów ludzi na YouTube. Możesz targetować wg zainteresowań, słów kluczowych, demographic i zachowań użytkowników.
                  </p>
                  <ul className="space-y-2">
                    <li>Koszt per view: 0,10-0,30 PLN</li>
                    <li>Opcje targetowania: słowa kluczowe, placement, demografię, zainteresowania</li>
                    <li>Doskonałe dla filmów 30-120 sekund</li>
                  </ul>
                </CardContent>
              </Card>

              {/* TikTok Ads */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-bold">TikTok Ads</h3>
                  <p className="mb-4 text-gray-700">
                    Najszybciej rosnąca platforma reklamowa ze skupieniem na młodszych audytoriach. Doskonałe dla kampanii marki i productów.
                  </p>
                  <ul className="space-y-2">
                    <li>Koszt per view: 0,05-0,15 PLN</li>
                    <li>Idealny format: 15-30 sekund</li>
                    <li>Wysokie zaangażowanie i CPM konkurencyjne</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Facebook & Instagram Ads */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-bold">Facebook & Instagram Video Ads</h3>
                  <p className="mb-4 text-gray-700">
                    Połączone platformy Meta dają dostęp do ponad 3 miliardów użytkowników. Najlepsze dla e-commerce i kampanii konwersji.
                  </p>
                  <ul className="space-y-2">
                    <li>Koszt per view: 0,08-0,25 PLN</li>
                    <li>Zaawansowane targetowanie i retargeting</li>
                    <li>Integracja ze sklepami online dla bezpośrednich sprzedaży</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Google Ads - Video */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-bold">Google Ads - Video Campaign</h3>
                  <p className="mb-4 text-gray-700">
                    Kampanie wideo w ekosystemie Google, od YouTube aż do Google Display Network na stronach partnerów.
                  </p>
                  <ul className="space-y-2">
                    <li>Łatwa integracja ze stronami i aplikacjami partnerów</li>
                    <li>Dużo danych do optymalizacji kampanii</li>
                    <li>Możliwość retargetowania użytkowników Google</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section: Planning Video Campaign */}
          <section id="planning" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">6. Jak zaplanować kampanię video?</h2>

            <p className="mb-8">
              Zaplanowanie kampanii video jest kluczowe dla sukcesu. Oto kroki które powinieneś wykonać:
            </p>

            <div className="space-y-8">
              {/* Krok 1 */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="mb-3 text-xl font-bold">Krok 1. Zdefiniuj cel kampanii</h3>
                <p className="mb-2">
                  Jakie chcesz osiągnąć wyniki? Zwiększenie świadomości marki, generacja leadów, wzrost sprzedaży, czy budowanie autorytetu?
                </p>
                <p className="text-gray-700">
                  Każdy cel wymaga innego podejścia do twórczości i dystrybucji wideo.
                </p>
              </div>

              {/* Krok 2 */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="mb-3 text-xl font-bold">Krok 2. Poznaj swoją publiczność</h3>
                <p className="mb-2">
                  Na którą platformę powinni iść twoi odbiorcy? Jaki jest ich wiek, płeć, zainteresowania?
                </p>
                <p className="text-gray-700">
                  Ta wiedza determinuje format, styl i kanał dystrybucji twojego wideo.
                </p>
              </div>

              {/* Krok 3 */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="mb-3 text-xl font-bold">Krok 3. Stwórz brief kreatywny</h3>
                <p className="mb-2">
                  Dokument który zawiera: cel, publiczność, wiadomość kluczowa, wezwanie do działania, długość, budżet i timeline.
                </p>
                <p className="text-gray-700">
                  Brief jest mapą drogową dla całego procesu produkcji.
                </p>
              </div>

              {/* Krok 4 */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="mb-3 text-xl font-bold">Krok 4. Napisz scenariusz (script)</h3>
                <p className="mb-2">
                  Każde dobre wideo zaczyna się od dobrego scenariusza. Napisz dialog, opisy ujęć i plan produkcji.
                </p>
                <p className="text-gray-700">
                  Scenariusz nie musi być długi – nawet krótkie wideo (30 sekund) powinno mieć strukturę.
                </p>
              </div>

              {/* Krok 5 */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="mb-3 text-xl font-bold">Krok 5. Produkcja wideo</h3>
                <p className="mb-2">
                  Zdjęcia, nagrania, Voice-over, muzyka. Możesz wynająć profesjonalistów lub zrobić DIY.
                </p>
                <p className="text-gray-700">
                  Jakość powinna odpowiadać budżetowi, ale nawet budżetowe produkcje mogą być skuteczne jeśli idea jest dobra.
                </p>
              </div>

              {/* Krok 6 */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="mb-3 text-xl font-bold">Krok 6. Edycja i postprodukcja</h3>
                <p className="mb-2">
                  Montaż, korekta kolorów, dodanie efektów, tekstu i muzyki. To ten etap gdzie wideo ożywa.
                </p>
                <p className="text-gray-700">
                  Dobrze zmontowane wideo może nawet słabsze nagrania przekształcić w coś wartościowego.
                </p>
              </div>

              {/* Krok 7 */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="mb-3 text-xl font-bold">Krok 7. Dystrybucja</h3>
                <p className="mb-2">
                  Opublikuj wideo na wybranych kanałach. Pamiętaj o:
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>Optymalizacji SEO (tytuł, opis, tagi, miniatura)</li>
                  <li>Wezwaniu do działania (subscribe, klik w link, itp.)</li>
                  <li>Promocji wideo poprzez media społecznościowe i email</li>
                </ul>
              </div>

              {/* Krok 8 */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="mb-3 text-xl font-bold">Krok 8. Mierzenie i optymalizacja</h3>
                <p className="mb-2">
                  Śledź metryki: views, watch time, engagement, CTR, konwersje.
                </p>
                <p className="text-gray-700">
                  Używaj tych danych do optymalizacji przyszłych kampanii i poprawy rezultatów.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Video Production Costs */}
          <section id="costs" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">7. Ile kosztuje produkcja wideo dla firmy?</h2>

            <p className="mb-8">
              Koszt produkcji wideo bardzo się różni w zależności od wielu czynników. Oto przewodnik po typowych kosztach:
            </p>

            <div className="grid gap-6">
              {/* Wideo do social media */}
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold">Wideo do social media (Reels, Shorts)</h3>
                    <Badge className="bg-green-100 text-green-800">Budżetowe</Badge>
                  </div>
                  <p className="mb-4 text-gray-700">
                    Krótkie wideo 15-60 sekund, do TikToka, Instagram, YouTube.
                  </p>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-lg font-semibold">1 000 - 5 000 PLN</p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                      <li>• Koncepcja i scenariusz</li>
                      <li>• Prosty montaż</li>
                      <li>• Bez profesjonalnej ekipy produkcyjnej</li>
                      <li>• Można robić in-house lub zlecić freelancerowi</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Film promocyjny */}
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold">Film promocyjny firmy</h3>
                    <Badge className="bg-blue-100 text-blue-800">Standardowo</Badge>
                  </div>
                  <p className="mb-4 text-gray-700">
                    Film 1-3 minut pokazujący firmę, usługi lub produkty. Nakręcony profesjonalnie.
                  </p>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-lg font-semibold">5 000 - 20 000 PLN</p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                      <li>• Profesjonalna kamera i sprzęt</li>
                      <li>• Scenariusz i koncepcja</li>
                      <li>• Profesjonalny montaż</li>
                      <li>• Muzyka i efekty dźwiękowe</li>
                      <li>• Mała ekipa produkcyjna (1-3 osoby)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Kampania złożona */}
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold">Kampania video (3-5 filmów)</h3>
                    <Badge className="bg-purple-100 text-purple-800">Premium</Badge>
                  </div>
                  <p className="mb-4 text-gray-700">
                    Kompletna kampania z wieloma wariantami wideo do różnych kanałów i odbiorców.
                  </p>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-lg font-semibold">20 000 - 100 000+ PLN</p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                      <li>• Pełna produkcja z dużą ekipą</li>
                      <li>• Wszystkie elementy (scenariusz, reżyseria, edycja, color grading)</li>
                      <li>• Profesjonalna post-produkcja i sound design</li>
                      <li>• Kampania advertising</li>
                      <li>• Mierzenie i optymalizacja</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Wideo live action */}
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold">Produkcja TV / Cinema</h3>
                    <Badge className="bg-red-100 text-red-800">Prestiż</Badge>
                  </div>
                  <p className="mb-4 text-gray-700">
                    Wysokobudżetowa produkcja do użytku w TV, kinach lub kampaniach flag szipowych.
                  </p>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-lg font-semibold">100 000 - 500 000+ PLN</p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                      <li>• Profesjonalna ekipa (reżyser, operator, producent)</li>
                      <li>• Profesjonalne aktorstwo i kadrowanie</li>
                      <li>• Zaawansowana post-produkcja</li>
                      <li>• VFX i animacje</li>
                      <li>• Dystrybucja na licznych kanałach</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 rounded-lg bg-yellow-50 p-6">
              <p className="font-semibold text-yellow-900">Wskazówka:</p>
              <p className="mt-2 text-yellow-900">
                Najważniejsze nie jest ile wydasz na produkcję, ale czy wideo będzie efektywne. Czasem prosty, autenticzny film DIY osiągnie lepsze wyniki niż droga, korporacyjna produkcja. Inwestuj w dobrą ideę i scenariusz, zanim inwestujesz w sprzęt.
              </p>
            </div>
          </section>

          {/* Section: Measuring Success */}
          <section id="measurement" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">8. Mierzenie skuteczności video marketingu</h2>

            <p className="mb-8">
              Jeśli nie mierzysz, to nie możesz optymalizować. Oto kluczowe metryki dla video marketingu:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-2 font-bold text-blue-600">Wyświetlenia (Views)</h3>
                <p className="text-sm text-gray-700">
                  Liczba razy jaką wideo zostało obejrzane. Dla YouTube minimum to 30 sekund, dla TikToka 3 sekundy.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-2 font-bold text-blue-600">Czas oglądania (Watch Time)</h3>
                <p className="text-sm text-gray-700">
                  Całkowita liczba minut lub godzin jaki widzowie spędzili na obejrzeniu wideo. Krytyczne dla rankingu YouTube.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-2 font-bold text-green-600">Procent przeglądalności (VTR)</h3>
                <p className="text-sm text-gray-700">
                  Procent wideo jaki średni widz obejrzał. 50% to dobrze, 70%+ to doskonale.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-2 font-bold text-green-600">Zaangażowanie (Engagement)</h3>
                <p className="text-sm text-gray-700">
                  Polubienia, komentarze, udostępnienia, subskrypcje. Wysoka zaangażowanie oznacza że treść je zainteresowała.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-2 font-bold text-purple-600">Współczynnik kliknięcia (CTR)</h3>
                <p className="text-sm text-gray-700">
                  Procent osób które kliknęły na link po obejrzeniu wideo. Dobrze zoptymalizowane wideo ma CTR 5-10%.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-2 font-bold text-purple-600">Konwersje</h3>
                <p className="text-sm text-gray-700">
                  Liczba osób które wykonały żądane działanie (zakupił, zasubskrybował, wypełnił formularz) dzięki wideo.
                </p>
              </div>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold">Jak śledzić metryki?</h3>

            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                <span>
                  <strong>YouTube Analytics</strong> – darmowy dostęp dla właścicieli kanału z szczegółowymi danymi na temat oglądaczy
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                <span>
                  <strong>Insights TikTok/Instagram</strong> – każda platforma daje dostęp do statystyk dla biznesu
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                <span>
                  <strong>Google Analytics</strong> – śledź które wideo doprowadziły użytkowników na Twoją stronę i co robili
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                <span>
                  <strong>UTM parametry</strong> – dodaj parametry do linków w wideo aby śledzić zwrotną drogę (source, medium, campaign)
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 text-blue-600" />
                <span>
                  <strong>Narzędzia analityczne</strong> – użyj Sprout Social, Buffer, Later do analizy wszystkich kanałów w jednym miejscu
                </span>
              </li>
            </ul>
          </section>

          {/* Case Study */}
          <section id="case-study" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">9. Case Study – Przykład kampanii video</h2>

            <Card className="border-2 border-blue-200">
              <CardContent className="pt-6">
                <div className="mb-6 rounded-lg bg-blue-50 p-4">
                  <h3 className="mb-2 text-lg font-bold">Scenario: E-commerce – Nowa linia ubrań</h3>
                  <p className="text-sm text-gray-700">
                    Sklep online z ubraniami chciał zwiększyć sprzedaż nowej linii. Zbudował kampanię video multi-platformową.
                  </p>
                </div>

                <h4 className="mb-4 font-bold">Etap 1: Strategia</h4>
                <ul className="mb-6 space-y-2">
                  <li className="flex gap-2">
                    <span className="font-semibold text-blue-600">Cel:</span>
                    <span>50% wzrost sprzedaży nowej linii w ciągu 3 miesięcy</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-blue-600">Publiczność:</span>
                    <span>Kobiety 25-45 lat zainteresowane modą, zdrowym stylem życia</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-blue-600">Kanały:</span>
                    <span>Instagram Reels, TikTok, YouTube Shorts, Facebook Video Ads</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-blue-600">Budżet:</span>
                    <span>10 000 PLN na produkcję + 15 000 PLN na advertising</span>
                  </li>
                </ul>

                <h4 className="mb-4 font-bold">Etap 2: Produkcja</h4>
                <p className="mb-3">Stworzyliśmy 3 wideo:</p>
                <ul className="mb-6 space-y-2">
                  <li>
                    <strong>Wideo 1 (15 sekund):</strong> Dynamiczny showcase linii ubrań, trendy muzyka, lifestyle feel
                  </li>
                  <li>
                    <strong>Wideo 2 (30 sekund):</strong> Testimonial od influencerki z branży fashion o nowych ubraniach
                  </li>
                  <li>
                    <strong>Wideo 3 (60 sekund):</strong> Behind-the-scenes z tworzenia linii + historia marki
                  </li>
                </ul>

                <h4 className="mb-4 font-bold">Etap 3: Dystrybucja</h4>
                <ul className="mb-6 space-y-2">
                  <li>
                    <strong>Instagram Reels & TikTok:</strong> Publikacja 3x dziennie, organiczny reach + paid promotion
                  </li>
                  <li>
                    <strong>YouTube Ads:</strong> Skippowalne reklamy na kanałach fashion i lifestyle
                  </li>
                  <li>
                    <strong>Facebook Video Ads:</strong> Retargeting do osób które odwiedziły stronę sklepu
                  </li>
                </ul>

                <h4 className="mb-4 font-bold">Etap 4: Wyniki (po 3 miesiącach)</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-green-50 p-4">
                    <p className="text-sm text-gray-600">Całkowite views</p>
                    <p className="text-3xl font-bold text-green-600">850K</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <p className="text-sm text-gray-600">Średnia VTR</p>
                    <p className="text-3xl font-bold text-green-600">68%</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4">
                    <p className="text-sm text-gray-600">Konwersje</p>
                    <p className="text-3xl font-bold text-blue-600">280 sprzedaży</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4">
                    <p className="text-sm text-gray-600">ROI</p>
                    <p className="text-3xl font-bold text-blue-600">385%</p>
                  </div>
                </div>

                <p className="mt-6 text-sm text-gray-600">
                  Wynik: Sprzedaż nowej linii wzrosła o 62%, a koszt pozyskania klienta przez wideo wyniósł zaledwie 90 PLN vs 250 PLN w poprzednich kampaniach.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">10. FAQ – Najczęstsze pytania o video marketing</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Ile kosztuje produkcja wideo dla firmy?
                </AccordionTrigger>
                <AccordionContent>
                  Koszt produkcji wideo zależy od jakości i zakresu projektu. Wideo do social media kosztuje 1000-5000 PLN, profesjonalny film promocyjny 5000-20000 PLN, a kampania złożona 20000+ PLN. Najważniejsze jest czy wideo osiąga cele biznesowe, a nie jak dużo wydano na produkcję.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Czy video marketing rzeczywiście zwiększa sprzedaż?
                </AccordionTrigger>
                <AccordionContent>
                  Tak, badania pokazują, że wideo zwiększa engagement o 6x i konwersje o 30-80% w zależności od branży i jakości zawartości. Jednak wymaga to poprawnego planowania, produkcji i dystrybucji. Wideo samo w sobie nie zwiększa sprzedaży – musi być częścią większej strategii marketingowej.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Jaki format wideo jest najlepszy dla TikToka?
                </AccordionTrigger>
                <AccordionContent>
                  Na TikToku najskuteczniejsze są krótkie, dynamiczne wideo w formacie pionowym (9:16) trwające 15-60 sekund, z autentyczną zawartością i ścieżką dźwiękową. Unikaj zbyt edytowanego lub profesjonalnego wyglądu – TikTok preferuje naturalne, zabawne i trendujące treści.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Ile czasu zajmuje produkcja profesjonalnego wideo?
                </AccordionTrigger>
                <AccordionContent>
                  Profesjonalna produkcja wideo trwa zazwyczaj 4-8 tygodni, w zależności od kompleksności projektu. Od konceptu, przez pre-produkcję (scenariusz, casting), produkcję (nagrania), do post-produkcji (edycja, color grading, sound design). Wideo prostsze mogą być gotowe w 2-3 tygodnie.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Jakie metryki powinnam śledzić w video marketingu?
                </AccordionTrigger>
                <AccordionContent>
                  Kluczowe metryki to: liczba wyświetleń, czas oglądania, procent przeglądalności (VTR), zaangażowanie (likes, comments, shares), współczynnik kliknięcia (CTR) i konwersje. Jednak najważniejsza metryka zależy od celu kampanii – jeśli chcesz sprzedaży, śledź konwersje. Jeśli świadomość marki, śledź reach i views.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* CTA */}
          <section className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-12 text-white md:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Gotowy na video marketing?</h2>
              <p className="mb-8 text-lg">
                Zespół FOTZ stworzy dla Twojej firmy kampanię video, która będzie działać. Od konceptu, przez produkcję, do mierzenia rezultatów.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  to="/uslugi/video-marketing"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
                >
                  Sprawdź usługę Video Marketing
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-600"
                >
                  Zarezerwuj konsultację
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
