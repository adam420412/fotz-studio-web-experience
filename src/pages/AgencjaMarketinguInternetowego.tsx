import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";
import { enquiryHref } from "@/lib/enquiry.mjs";

const content = {
  title: "Stała obsługa marketingowa z jasnym zakresem",
  eyebrow: "FOTZ Studio · Poznań i współpraca zdalna",
  path: "/agencja-marketingu-internetowego",
  enquiryVariant: "retainer",
  contactLabel: "Porozmawiajmy o stałej obsłudze",
  priceNote: "Od 3 000 zł netto miesięcznie. Produkcja i reklamy wyceniane osobno.",
  lead: "Masz firmę do prowadzenia. My zajmiemy się uzgodnioną częścią jej marketingu: planem, treściami i publikacją. Sprawdzimy też, czy odbiorca łatwo trafia z materiałów do oferty i kontaktu.",
  summary: [
    "Wybieramy jeden cel i zakres, który da się regularnie wykonać.",
    "Wiesz, co otrzymasz w danym miesiącu i czego potrzebujemy od Ciebie.",
    "Pierwsza, bezpłatna rozmowa trwa około 15 minut. Termin potwierdzamy w odpowiedzi."
  ],
  scopeTitle: "Co obejmuje zakres za 3 000 zł netto miesięcznie",
  scope: [
    { title: "Plan i priorytet", text: "Wybieramy usługę lub produkt, odbiorców i cel. Ustalamy, co ma zrobić zainteresowana osoba: zadzwonić, wysłać zapytanie, zarezerwować albo kupić." },
    { title: "Cztery materiały", text: "Przygotowujemy cztery materiały na bazie dostępnych zdjęć i filmów: tekst oraz opracowanie graficzne. Nowe nagrania i montaż rolek wyceniamy osobno." },
    { title: "Publikacja i akceptacja", text: "Publikujemy uzgodnione materiały na maksymalnie dwóch profilach. Przed publikacją otrzymujesz całą partię do jednej, zbiorczej rundy uwag." },
    { title: "Czytelny kontakt", text: "Wykonujemy jedną drobną aktualizację istniejącej oferty lub przycisku kontaktowego, do godziny pracy. Większe zmiany na stronie wyceniamy osobno." },
    { title: "Podsumowanie miesiąca", text: "Pokazujemy, co powstało, jakie zainteresowanie odnotowaliśmy i co warto zrobić dalej. Rozmowy i sprzedaż porównujemy z Twoimi danymi; same wyświetlenia nie oznaczają nowych klientów." },
    { title: "Rozmowa o dalszych pracach", text: "Raz w miesiącu omawiamy wnioski podczas rozmowy do 30 minut. Zmiany zakresu, dodatkowe materiały i koszty uzgadniamy przed ich realizacją." }
  ],
  sections: [
    {
      title: "Kiedy warto zacząć",
      text: "Stała współpraca ma sens, kiedy masz ofertę do promowania i potrzebujesz regularnego wykonania uzgodnionych prac.",
      points: ["Komunikacja pojawia się tylko wtedy, gdy znajdziesz na nią czas.", "Materiały, profile i strona nie prowadzą klienta do jasnego następnego kroku.", "Potrzebujesz wykonawcy, który przygotuje i opublikuje uzgodnione materiały."]
    },
    {
      title: "Potrzebujesz zdjęć, filmów lub kampanii?",
      text: "FOTZ łączy produkcję foto i wideo z pracą nad stronami i komunikacją. Nowe sesje, nagrania, montaż rolek, obsługę reklam, codzienną moderację i większą liczbę materiałów rozpisujemy jako dodatkowy zakres. Budżet płacony platformie reklamowej jest osobną pozycją. Możesz też zlecić pojedynczy projekt bez abonamentu.",
      href: "/realizacje", link: "Zobacz realizacje FOTZ"
    },
    {
      title: "Ograniczona opieka: 2 000 zł netto miesięcznie",
      text: "Mała potrzeba nie wymaga dużego pakietu. Przy jednym obszarze możemy ustalić zakres do czterech godzin pracy łącznie w miesiącu. W tym czasie mieszczą się realizacja, kontakt, poprawki i podsumowanie. Zadania ustalamy przed rozpoczęciem miesiąca. Ten wariant nie obejmuje regularnych nagrań, prowadzenia wielu profili ani kompleksowej obsługi kampanii.",
      href: enquiryHref("marketing", "limited_care"), link: "Zapytaj o ograniczoną opiekę"
    },
    {
      title: "Jak zaczynamy",
      text: "Nie potrzebujesz rozbudowanego briefu. Wystarczy adres strony lub profilu oraz opis potrzeby.",
      points: ["Opisujesz firmę, obecne działania i to, co chcesz poprawić.", "Rozmawiamy i przygotowujemy zakres, cenę oraz termin. Rozpisujemy również materiały i decyzje potrzebne po Twojej stronie.", "Po uzgodnieniu warunków rozpoczynamy pracę. Mierzymy wykonanie zakresu oraz efekty możliwe do potwierdzenia."]
    }
  ],
  faqs: [
    { question: "Czy 3 000 zł obejmuje reklamy i nagrania?", answer: "Zakres podstawowy obejmuje opisane treści na dostępnych materiałach, publikację, drobną aktualizację i podsumowanie. Nową produkcję oraz prowadzenie kampanii wyceniamy osobno. Budżet płacony platformie reklamowej również jest osobną pozycją." },
    { question: "Czy muszę mieć gotową strategię?", answer: "Nie. Do pierwszej rozmowy wystarczy adres strony lub profilu i opis potrzeby. Szczegółowy audyt lub strategię, jeżeli będą potrzebne, ustalimy jako osobny zakres." },
    { question: "Czy gwarantujecie liczbę klientów?", answer: "Nie obiecujemy konkretnej liczby sprzedaży. Ustalamy zakres pracy i mierniki, a wyniki oceniamy również w kontekście oferty, budżetu i obsługi zapytań po Twojej stronie." },
    { question: "Jak wygląda kontakt i akceptacja?", answer: "Przed startem ustalamy osobę decyzyjną, terminy przekazania materiałów i zebrania uwag. Zakres podstawowy obejmuje jedną zbiorczą rundę uwag do partii materiałów oraz miesięczną rozmowę do 30 minut. Zmiany wychodzące poza zakres wymagają osobnego uzgodnienia." },
    { question: "Czy pracujecie wyłącznie w Poznaniu?", answer: "Pracujemy z firmami z Poznania i zdalnie. Produkcję na miejscu oraz ewentualny dojazd ustalamy i wyceniamy przed rozpoczęciem projektu." }
  ],
  contactDescription: "Napisz, co oferujesz, do kogo chcesz dotrzeć i co dziś zabiera Ci najwięcej czasu w marketingu. Dobierzemy zakres dla Twojej firmy."
};

export default function AgencjaMarketinguInternetowego() {
  return <>
    <SEOHead
      title="Stała obsługa marketingowa Poznań | FOTZ Studio"
      description="Stała obsługa marketingowa firm z Poznania i zdalnie. Plan, treści, publikacja i ocena zapytań. Zakres od 3 000 zł netto miesięcznie. Porozmawiajmy."
      canonical="https://www.fotz-studio.pl/agencja-marketingu-internetowego"
    />
    <ServiceEditorial {...content} />
  </>;
}
