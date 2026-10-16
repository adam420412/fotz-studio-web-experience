import { SEOHead } from '@/components/seo/SEOHead';
import { SalesOffer, type SalesOfferProps } from '@/components/SalesOffer';

const offer: SalesOfferProps = {
  path: '/kampanie-reklamowe-poznan',
  service: 'marketing',
  defaultVariant: 'meta_ads',
  title: 'Kampanie reklamowe Poznań — reklama Google i Facebook | agencja FOTZ',
  description: 'Kampanie reklamowe dla firm z Poznania: reklama w Google, Facebook i Instagram, social media, kreacje i pomiar. Agencja reklamowa FOTZ Studio, Poznań.',
  heading: 'Kampanie reklamowe Poznań — agencja reklamowa i marketing w Google, Facebook Ads i Instagram',
  eyebrow: 'Agencja reklamowa · Poznań · marketing digital',
  lead: 'Planujemy i prowadzimy kampanie marketingowe dla firm z Poznania i Wielkopolski: w wyszukiwarce Google, na Facebooku, Instagramie i w innych mediach społecznościowych. Łączymy reklamę z własnymi kreacjami — zdjęciami i wideo z naszego studia — oraz z tym, co dzieje się po kliknięciu: stroną, formularzem i obsługą leadów.',
  cta: 'Opisz cel kampanii',
  hero: 'conference',
  caption: 'Enea Stadion w Poznaniu — sala wydarzenia sfotografowana przez FOTZ Studio. Własne materiały to podstawa reklam, które pokazują prawdziwe miejsce i markę.',
  evidence: [
    { title: 'Dawid EDU — kampania Meta Ads', text: 'Kampania rekrutacyjna na Facebooku i Instagramie z kreacjami, poprawkami strony i formularza. Zobacz zakres pracy i opis ograniczeń pomiaru.', href: '/realizacje/dawid-edu' },
    { title: 'Enea Stadion — materiały marki', text: 'Filmy i zdjęcia z wydarzeń w Poznaniu. Przykład produkcji treści, z których powstają kreacje reklamowe i komunikacja w mediach społecznościowych.', href: '/realizacje/enea-stadion' },
    { title: 'Gierky — prezentacja miejsca', text: 'Fotografie wnętrza i stref rozrywki. Materiały, które pomagają zainteresować odbiorców lokalnej oferty, zanim przyjdą na miejsce.', href: '/realizacje/gierki' },
  ],
  options: [
    { title: 'Reklama w social media', text: 'Chcesz dotrzeć do odbiorców w Poznaniu lub w całej Polsce z usługą, wydarzeniem albo produktem. Na Facebooku i Instagramie ustalamy grupę odbiorców, komunikat i formaty reklam.', detail: 'Plan kampanii w Meta, kreacje graficzne lub wideo, kontrola strony docelowej, obsługa i raport.', variant: 'meta_ads' },
    { title: 'Reklama w Google', text: 'Klienci wyszukują Twojej usługi w Google. Dobieramy frazy, piszemy reklamy i kierujemy ruch do strony, która odpowiada na zapytanie.', detail: 'Struktura kampanii w wyszukiwarce, słowa kluczowe, rozszerzenia, pomiar konwersji i regularne poprawki.', variant: 'google_ads' },
    { title: 'Przegląd obecnych kampanii', text: 'Reklamy już działają, ale koszt leada rośnie albo kontakty są niedopasowane. Sprawdzamy ustawienia, kreacje, stronę i pomiar.', detail: 'Analiza konta, rekomendacje i lista zmian. Wdrożenie i dalszą obsługę wyceniamy osobno.', variant: 'campaign_audit' },
  ],
  scope: [
    { title: 'Cele biznesowe i odbiorcy', text: 'Zaczynamy od celu: zapytania, rezerwacji, wzrostu sprzedaży w sklepie albo rozpoznawalności marki. Określamy obszar działania — sam Poznań, Wielkopolska czy cała Polska — i grupę docelową.' },
    { title: 'Dobór platformy reklamowej', text: 'Wybieramy kanały do celu. Reklama w Google odpowiada osobom, które już szukają usługi; Facebook i Instagram pozwalają zainteresować odbiorców, zanim zaczną szukać. Czasem sensowny jest też TikTok albo kanał YouTube z reklamą wideo.' },
    { title: 'Kreacje i content', text: 'Przygotowujemy grafiki, karuzele, wideo i inne materiały promocyjne we własnym studiu w Poznaniu. Prawdziwe zdjęcia i filmy z Twojej firmy lepiej angażują odbiorców niż materiały stockowe, a dobry storytelling pomaga zapamiętać markę.' },
    { title: 'Strona i formularz', text: 'Sprawdzamy, czy strona docelowa odpowiada reklamie i działa na telefonie. Jeśli trzeba, przygotowujemy landing page lub poprawiamy formularz przed wydaniem budżetu.' },
    { title: 'Pomiar i analityka', text: 'Konfigurujemy zdarzenia w Google Analytics i Meta, linki kampanii oraz zgody. Odróżniamy kliknięcie od leada, który faktycznie trafił do firmy.' },
    { title: 'Testy, skalowanie i raport', text: 'Porównujemy warianty reklam, koszty i jakość kontaktów. Gdy kampania działa, pomagamy ją skalować na kolejne grupy odbiorców i platformy. Raport pokazuje zmiany, wnioski i plan kolejnych testów — także w Looker Studio, jeśli go używasz.' },
  ],
  pricing: 'Koszt kampanii dzielimy na budżet mediowy, płacony bezpośrednio w Google lub Meta, przygotowanie kreacji i wynagrodzenie za obsługę. Osobno ustalamy landing page, nagrania czy integrację formularza z CRM. Budżet testu dopasowujemy do celu, branży i rynku — nie podajemy jednej stawki za lead dla każdej firmy. Wycena określa liczbę materiałów, czas obsługi i sposób raportowania.',
  pricingHref: '#zapytanie',
  pricingLabel: 'Podaj cel i budżet do wyceny kampanii',
  steps: [
    { title: 'Rozmowa o celu', text: 'Opowiadasz o ofercie, kliencie i dotychczasowych reklamach — sam albo razem z marketing managerem po Twojej stronie. Spotkanie w Poznaniu albo online, termin ustalamy wcześniej.' },
    { title: 'Plan i kreacje', text: 'Przedstawiamy plan kampanii, budżet testu, listę materiałów i harmonogram. Po akceptacji przygotowujemy reklamy i stronę docelową.' },
    { title: 'Start, optymalizacja i raport', text: 'Uruchamiamy kampanie na Twoim koncie reklamowym, kontrolujemy pierwsze dni i regularnie raportujemy wyniki oraz wnioski.' },
  ],
  guidance: [
    { title: 'Partner marketingowy w Poznaniu — co robimy inaczej?', text: 'Działamy jak agencja interaktywna i studio produkcyjne jednocześnie. Ten sam zespół przygotowuje założenia strategii marketingowych, nagrywa wideo, robi zdjęcia, projektuje design reklam i prowadzi kampanie, więc kreacje powstają pod konkretną reklamę, a nie są dopasowywane po fakcie.', points: [
      'Własna produkcja zdjęć i wideo w Poznaniu — od sesji produktowej po film z wydarzenia.',
      'Kampanie w mediach społecznościowych i w Google prowadzone na koncie firmy, z pełnym dostępem do danych w Google Analytics i Meta.',
      'Sztucznej inteligencji (np. ChatGPT) używamy do szkiców i analiz, ale w 2026 roku każdą reklamę nadal sprawdza człowiek, który zna Twoją ofertę.',
      'Pomiar leadów i sprzedaży uzgodniony przed startem, bez liczenia samych kliknięć jako sukcesu; w razie potrzeby łączymy kampanie z marketing automation i CRM.',
      'Jasny podział kosztów: budżet mediowy, kreacje i obsługa rozpisane osobno.',
    ], link: { label: 'Poznaj ofertę agencji marketingowej w Poznaniu', href: '/agencja-marketingowa/poznan' } },
    { title: 'Brand, content i social media — nie tylko kliknięcia', text: 'Kampanie sprzedażowe działają lepiej, gdy marka jest rozpoznawalna, a wokół profili firmy powstaje społeczność, która chętnie angażuje się w treści. Dlatego obok reklam nastawionych na leady planujemy działania, które budują widoczność marki: wideo, branding, treści eksperckie i współpracę z twórcami w ramach influencer marketingu.', points: [
      'Branding i spójny wygląd reklam w każdym kanale — od Facebooka po YouTube.',
      'Employer branding: film rekrutacyjny i kampania do kandydatów, gdy firma szuka ludzi.',
      'Marketing B2B i budowanie marki osobistej właściciela lub ekspertów firmy.',
      'Przychód, wyniki sprzedaży i rozpoznawalność marki oceniamy razem, bo efekty kampanii wizerunkowej przychodzą później.',
    ], link: { label: 'Zobacz produkcję filmów', href: '/uslugi/video-marketing' } },
    { title: 'Platformy reklamowe — gdzie reklamować firmę z Poznania?', text: 'Wybór platformy zależy od tego, gdzie Twoi klienci wyszukują informacji i jak podejmują decyzje. Patrzymy na całą ścieżkę klienta (customer journey): od pierwszego kontaktu z marką, przez porównanie ofert, po zakup i powrót.', points: [
      'Google: osoby, które już szukają usługi lub produktu — reklama odpowiada na konkretne zapytanie.',
      'Facebook i Instagram: zasięg w regionie, precyzyjne grupy odbiorców i formaty wideo, które budują brand.',
      'YouTube i TikTok: dłuższe lub krótkie wideo, gdy produkt trzeba pokazać w działaniu.',
      'LinkedIn: marketing B2B i treści eksperckie kierowane do decydentów w firmach.',
    ], link: { label: 'Zobacz kampanie Instagram Ads', href: '/performance-marketing/instagram-ads' } },
    { title: 'Kampanie leadowe i sprzedażowe dla e-commerce i usług lokalnych', text: 'Sklep internetowy potrzebuje innych kampanii niż salon czy firma B2B. W e-commerce liczy się katalog produktów, kampanie produktowe i powracający klienci. Usługa lokalna w Poznaniu potrzebuje zasięgu na obszarze działania i łatwego kontaktu z telefonu.', points: [
      'Sklep: kampanie produktowe, remarketing i pomiar przychodu z zamówień.',
      'Usługi lokalne: reklamy na obszar Poznania, formularz lub telefon jako cel kampanii.',
      'B2B: dłuższy proces decyzji, kampanie leadowe i treści eksperckie, np. studium przypadku lub case studies z branży.',
      'Wydarzenia: promocja wydarzenia na Facebooku, sprzedaż biletów i przypomnienia przed terminem.',
    ], link: { label: 'Zobacz reklamę na Facebooku', href: '/uslugi/reklama-facebook' } },
  ],
  faqs: [
    { question: 'Ile kosztuje kampania reklamowa w Poznaniu?', answer: 'Koszt składa się z budżetu reklamowego płaconego w Google lub Meta, kreacji i obsługi. Wycenę przygotowujemy po poznaniu celu, rynku i potrzebnych materiałów. Nie zaczynamy od stałego pakietu.' },
    { question: 'Facebook czy Google — od czego zacząć?', answer: 'Jeśli klienci aktywnie szukają usługi, zwykle zaczynamy od reklamy w wyszukiwarce. Gdy trzeba ich dopiero zainteresować albo pokazać produkt, lepiej sprawdza się reklama na Facebooku i Instagramie. Często łączymy oba kanały.' },
    { question: 'Czy przygotowujecie kreacje do reklam?', answer: 'Tak. Robimy grafiki, wideo i zdjęcia we własnym zakresie, w Poznaniu lub u klienta. Możemy też wykorzystać materiały promocyjne, które już masz, i dopasować je do formatów reklamowych.' },
    { question: 'Na czyim koncie reklamowym działają kampanie?', answer: 'Na koncie Twojej firmy. Dzięki temu masz dostęp do wszystkich danych i historii kampanii także po zakończeniu współpracy.' },
    { question: 'Czy obiecujecie konkretną liczbę leadów?', answer: 'Nie. Wynik zależy od oferty, rynku, budżetu i obsługi zapytań. Ustalamy cel, sposób pomiaru i plan testów, a wyniki raportujemy na podstawie rzeczywistych danych.' },
    { question: 'Czy pracujecie z firmami spoza Poznania?', answer: 'Tak. Zespół jest w Poznaniu, ale kampanie prowadzimy dla firm z całej Polski. Spotkania i akceptację materiałów organizujemy także online.' },
    { question: 'Czy prowadzicie też social media i strony www?', answer: 'Tak. Możemy prowadzić profile w social media, przygotować content do publikacji i stronę www pod kampanię. Zakres ustalamy osobno, żeby było jasne, za co płacisz.' },
  ],
};

export default function KampanieReklamowePoznan() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <SalesOffer {...offer} />
  </>;
}
