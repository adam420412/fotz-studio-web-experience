// Public facts shared by contact UI and assistant. Add prices only after verification.
export const business = Object.freeze({
  name: 'FOTZ Studio', site: 'https://www.fotz-studio.pl',
  address: 'Plac Wolności 16, 61-739 Poznań', phone: '+48 790 814 814', phoneHref: 'tel:+48790814814',
  email: 'adam@fotz.pl', consultationMinutes: 15, consultationPath: '/konsultacja', contactPath: '/kontakt', pricingPath: '/cennik',
  quote: 'Zakres, cenę i harmonogram ustalamy po poznaniu projektu. Budżet reklamowy rozliczamy oddzielnie od obsługi.',
});
export const assistantTopics = [
  { keys: ['adres', 'gdzie jest', 'gdzie znajduje', 'siedziba', 'lokalizacja', 'biuro'], question: 'Gdzie znajduje się studio?', answer: `Nasza siedziba: ${business.address}. Termin spotkania ustal z nami wcześniej. Obsługujemy także projekty zdalnie.`, links: [{ label: 'Dane kontaktowe', href: business.contactPath }] },
  { keys: ['konsult', 'spotkanie', 'rozmowa'], question: 'Jak umówić konsultację?', answer: `Pierwsza konsultacja jest bezpłatna i trwa ${business.consultationMinutes} minut. W formularzu możesz podać preferowany termin; spotkanie wymaga naszego potwierdzenia.`, links: [{ label: 'Zgłoś rozmowę', href: business.consultationPath }] },
  { keys: ['cena', 'ceny', 'cennik', 'koszt', 'wycen', 'budzet', 'pakiet'], question: 'Jak otrzymać wycenę?', answer: 'Pakiety WWW START i WIDEO START kosztują po 1490 zł netto i mają określony zakres. Rozbudowane projekty oraz stałą obsługę wyceniamy osobno. Szczegóły pakietów znajdziesz w cenniku. Budżet reklamowy rozliczamy oddzielnie.', links: [{ label: 'Zobacz zakres i ceny', href: business.pricingPath }] },
  { keys: ['kontakt', 'telefon', 'email', 'e-mail', 'mail', 'godzin', 'zadzwon'], question: 'Jak się skontaktować?', answer: `Zadzwoń: ${business.phone} lub napisz: ${business.email}. Dostępność rozmowy i termin odpowiedzi ustalamy indywidualnie.`, links: [{ label: 'Zadzwoń', href: business.phoneHref }, { label: 'Napisz e-mail', href: `mailto:${business.email}` }] },
  { keys: ['umowa', 'gwaranc', 'zaliczk', 'platnosc', 'poprawk', 'wspolprac', 'termin', 'dlugo'], question: 'Jak wygląda współpraca?', answer: 'Zaczynamy od celu i briefu. Następnie ustalamy zakres, harmonogram, liczbę poprawek, płatności i warunki współpracy w ofercie oraz umowie.', links: [{ label: 'Opisz projekt', href: business.contactPath }] },
  { keys: ['social', 'facebook', 'instagram', 'tiktok', 'posty', 'linkedin'], question: 'Co obejmuje obsługa social media?', answer: 'Zakres może obejmować strategię, plan publikacji, zdjęcia i video, prowadzenie profili oraz reklamy. Liczbę kanałów i materiałów dopasowujemy do briefu.', links: [{ label: 'Oferta social media', href: '/agencja-social-media' }] },
  { keys: ['stron', 'www', 'sklep', 'ecommerce', 'e-commerce', 'landing'], question: 'Jakie strony tworzycie?', answer: 'Przygotowujemy strony firmowe, landing pages i sklepy internetowe. Dobór technologii, integracji i treści wynika z potrzeb projektu.', links: [{ label: 'Strony internetowe', href: '/uslugi/strony-internetowe' }] },
  { keys: ['wideo', 'video', 'film', 'rolk', 'nagran', 'dron'], question: 'Jak zaplanować nagrania?', answer: 'Prześlij cel filmu, miejsce, potrzebne formaty i planowany termin. Ustalimy scenariusz, zakres nagrań, montażu oraz wersji materiału.', links: [{ label: 'Produkcja video', href: '/uslugi/produkcja-video' }] },
  { keys: ['seo', 'pozycjon', 'widoczn'], question: 'Od czego zacząć SEO?', answer: 'Od sprawdzenia strony, jej treści i danych Search Console. Na tej podstawie ustalamy priorytety. Pozycje i czas osiągnięcia wyników zależą od wielu czynników.', links: [{ label: 'Audyt SEO', href: '/seo/audyt' }] },
  { keys: ['reklam', 'kampan', 'ads', 'marketing'], question: 'Jak zaplanować kampanię?', answer: 'Najpierw określamy ofertę, odbiorców i sposób pomiaru zapytań. Kreację, obsługę i budżet emisji rozpisujemy osobno.', links: [{ label: 'Kampanie reklamowe', href: '/kampanie-reklamowe' }] },
  { keys: ['portfolio', 'realizac', 'klien', 'przyklad', 'branz'], question: 'Gdzie zobaczę realizacje?', answer: 'W portfolio znajdziesz wybrane projekty stron, komunikacji i produkcji treści. Przy rozmowie dobierzemy przykłady do Twojego zakresu.', links: [{ label: 'Zobacz realizacje', href: '/realizacje' }] },
  { keys: ['checklist', 'pdf', 'material', 'zasob'], question: 'Gdzie znajdę materiały do przygotowania projektu?', answer: 'W zasobach znajdziesz poradniki i generator briefu. Pomogą określić odbiorców, cel oraz potrzebne materiały przed rozmową.', links: [{ label: 'Poradniki i brief', href: '/zasoby' }] },
];
export function answerQuestion(question) {
  const normalized = question.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replaceAll('ł', 'l');
  return assistantTopics.find(topic => topic.keys.some(key => normalized.includes(key))) ?? {
    answer: 'To pytanie wymaga ustalenia szczegółów z zespołem. Opisz projekt w formularzu lub umów krótką konsultację.',
    links: [{ label: 'Kontakt z zespołem', href: business.contactPath }],
  };
}
