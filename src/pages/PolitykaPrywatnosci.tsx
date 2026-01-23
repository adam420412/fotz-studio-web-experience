import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function PolitykaPrywatnosci() {
  return (
    <>
      <SEOHead
        title="Polityka Prywatności | Fotz Studio"
        description="Polityka prywatności Fotz Studio. Informacje o przetwarzaniu danych osobowych, cookies i prawach użytkowników zgodnie z RODO."
        canonical="https://fotz.pl/polityka-prywatnosci"
      />
      
      <Layout>
        <section className="pt-32 pb-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                Polityka <span className="text-gradient">Prywatności</span>
              </h1>
              
              <div className="prose prose-invert prose-lg max-w-none space-y-8">
                <p className="text-muted-foreground text-lg">
                  Ostatnia aktualizacja: 16 grudnia 2024
                </p>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">1. Administrator Danych</h2>
                  <p className="text-muted-foreground">
                    Administratorem Twoich danych osobowych jest Fotz Studio z siedzibą w Poznaniu, 
                    Plac Wolności 16, 61-738 Poznań, NIP: 7851806089.
                  </p>
                  <p className="text-muted-foreground">
                    Kontakt z administratorem: <a href="mailto:adam@fotz.pl" className="text-primary hover:underline">adam@fotz.pl</a>, 
                    tel. <a href="tel:+48790814814" className="text-primary hover:underline">+48 790 814 814</a>.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">2. Jakie dane zbieramy</h2>
                  <p className="text-muted-foreground">Zbieramy następujące kategorie danych:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Dane identyfikacyjne (imię, nazwisko, nazwa firmy)</li>
                    <li>Dane kontaktowe (adres e-mail, numer telefonu)</li>
                    <li>Dane techniczne (adres IP, typ przeglądarki, system operacyjny)</li>
                    <li>Dane o aktywności na stronie (odwiedzane podstrony, czas spędzony na stronie)</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">3. Cele przetwarzania danych</h2>
                  <p className="text-muted-foreground">Twoje dane przetwarzamy w celu:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Odpowiedzi na zapytania przesłane przez formularz kontaktowy</li>
                    <li>Realizacji umów i świadczenia usług marketingowych</li>
                    <li>Wysyłania informacji handlowych (za Twoją zgodą)</li>
                    <li>Analizy ruchu na stronie i optymalizacji jej działania</li>
                    <li>Wypełnienia obowiązków prawnych</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">4. Podstawy prawne przetwarzania</h2>
                  <p className="text-muted-foreground">Przetwarzamy dane na podstawie:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Art. 6 ust. 1 lit. a RODO – Twoja zgoda</li>
                    <li>Art. 6 ust. 1 lit. b RODO – wykonanie umowy</li>
                    <li>Art. 6 ust. 1 lit. c RODO – obowiązek prawny</li>
                    <li>Art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">5. Odbiorcy danych</h2>
                  <p className="text-muted-foreground">
                    Twoje dane mogą być przekazywane podmiotom świadczącym usługi na naszą rzecz: 
                    hostingowe, analityczne, marketingowe, księgowe oraz organom państwowym 
                    w przypadkach przewidzianych prawem.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">6. Okres przechowywania danych</h2>
                  <p className="text-muted-foreground">
                    Dane przechowujemy przez okres niezbędny do realizacji celów przetwarzania, 
                    nie dłużej niż przez okres przedawnienia roszczeń lub przez okres wymagany 
                    przepisami prawa (np. 5 lat dla dokumentów księgowych).
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">7. Twoje prawa</h2>
                  <p className="text-muted-foreground">Przysługuje Ci prawo do:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Dostępu do swoich danych osobowych</li>
                    <li>Sprostowania (poprawienia) danych</li>
                    <li>Usunięcia danych ("prawo do bycia zapomnianym")</li>
                    <li>Ograniczenia przetwarzania</li>
                    <li>Przenoszenia danych</li>
                    <li>Sprzeciwu wobec przetwarzania</li>
                    <li>Cofnięcia zgody w dowolnym momencie</li>
                    <li>Wniesienia skargi do Prezesa UODO</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">8. Pliki Cookies</h2>
                  <p className="text-muted-foreground">
                    Nasza strona wykorzystuje pliki cookies (ciasteczka) w celu zapewnienia 
                    prawidłowego działania strony, analizy ruchu oraz personalizacji treści.
                  </p>
                  <p className="text-muted-foreground">Rodzaje wykorzystywanych cookies:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Niezbędne</strong> – konieczne do funkcjonowania strony</li>
                    <li><strong>Analityczne</strong> – pomagają zrozumieć, jak użytkownicy korzystają ze strony</li>
                    <li><strong>Marketingowe</strong> – służą do wyświetlania spersonalizowanych reklam</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Możesz zarządzać ustawieniami cookies w swojej przeglądarce lub poprzez 
                    baner cookies na naszej stronie.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">9. Bezpieczeństwo danych</h2>
                  <p className="text-muted-foreground">
                    Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić Twoje 
                    dane przed nieuprawnionym dostępem, utratą lub zniszczeniem. Strona 
                    wykorzystuje szyfrowanie SSL.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">10. Zmiany w polityce prywatności</h2>
                  <p className="text-muted-foreground">
                    Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. 
                    O wszelkich zmianach będziemy informować poprzez aktualizację daty na początku dokumentu.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">11. Kontakt</h2>
                  <p className="text-muted-foreground">
                    W sprawach związanych z ochroną danych osobowych prosimy o kontakt:
                  </p>
                  <p className="text-muted-foreground">
                    E-mail: <a href="mailto:adam@fotz.pl" className="text-primary hover:underline">adam@fotz.pl</a><br />
                    Telefon: <a href="tel:+48790814814" className="text-primary hover:underline">+48 790 814 814</a><br />
                    Adres: Plac Wolności 16, 61-738 Poznań
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
