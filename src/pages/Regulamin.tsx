import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Regulamin() {
  return (
    <>
      <Helmet>
        <title>Regulamin | Fotz Studio</title>
        <meta name="description" content="Regulamin świadczenia usług Fotz Studio. Warunki współpracy, prawa i obowiązki stron." />
        <link rel="canonical" href="https://fotz.pl/regulamin" />
      </Helmet>
      
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
                <span className="text-gradient">Regulamin</span> świadczenia usług
              </h1>
              
              <div className="prose prose-invert prose-lg max-w-none space-y-8">
                <p className="text-muted-foreground text-lg">
                  Ostatnia aktualizacja: 16 grudnia 2024
                </p>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">§1. Postanowienia ogólne</h2>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>Niniejszy regulamin określa zasady świadczenia usług przez Fotz Studio z siedzibą w Poznaniu, Plac Wolności 16, 61-738 Poznań, NIP: 7851806089.</li>
                    <li>Kontakt z Usługodawcą: e-mail: adam@fotz.pl, tel. +48 790 814 814.</li>
                    <li>Korzystanie z usług Fotz Studio oznacza akceptację niniejszego regulaminu.</li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">§2. Definicje</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Usługodawca</strong> – Fotz Studio</li>
                    <li><strong>Klient</strong> – osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z usług</li>
                    <li><strong>Usługi</strong> – usługi marketingowe, reklamowe i kreatywne świadczone przez Usługodawcę</li>
                    <li><strong>Umowa</strong> – umowa o świadczenie usług zawarta między Usługodawcą a Klientem</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">§3. Zakres usług</h2>
                  <p className="text-muted-foreground">Fotz Studio świadczy usługi w zakresie:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Strategii marketingowych i brandingowych</li>
                    <li>Kampanii reklamowych (Meta Ads, Google Ads)</li>
                    <li>Prowadzenia mediów społecznościowych</li>
                    <li>Produkcji wideo i fotografii</li>
                    <li>Projektowania i tworzenia stron internetowych</li>
                    <li>Content marketingu</li>
                    <li>Konsultacji marketingowych</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">§4. Zawarcie umowy</h2>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>Zawarcie umowy następuje po akceptacji oferty przez Klienta oraz potwierdzeniu jej przez Usługodawcę.</li>
                    <li>Szczegółowy zakres usług, terminy realizacji oraz wynagrodzenie określane są w indywidualnej ofercie lub umowie.</li>
                    <li>Usługodawca zastrzega sobie prawo do odmowy świadczenia usług bez podania przyczyny.</li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">§5. Realizacja usług</h2>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>Usługodawca zobowiązuje się do realizacji usług z należytą starannością, zgodnie z obowiązującymi standardami branżowymi.</li>
                    <li>Klient zobowiązany jest do dostarczenia niezbędnych materiałów i informacji w uzgodnionych terminach.</li>
                    <li>Opóźnienia wynikające z braku współpracy ze strony Klienta mogą wpłynąć na termin realizacji.</li>
                    <li>Usługodawca może korzystać z podwykonawców przy realizacji usług.</li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">§6. Płatności</h2>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>Wynagrodzenie za usługi określane jest w ofercie lub umowie.</li>
                    <li>Płatność następuje na podstawie faktury VAT w terminie 14 dni od daty wystawienia, chyba że umowa stanowi inaczej.</li>
                    <li>W przypadku projektów długoterminowych stosowane są płatności etapowe lub abonamentowe.</li>
                    <li>Za opóźnienia w płatnościach naliczane są odsetki ustawowe.</li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">§7. Prawa autorskie</h2>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>Prawa autorskie do utworów powstałych w ramach realizacji usług przechodzą na Klienta z chwilą dokonania pełnej płatności.</li>
                    <li>Do momentu pełnej płatności prawa autorskie pozostają przy Usługodawcy.</li>
                    <li>Usługodawca zastrzega sobie prawo do wykorzystania zrealizowanych projektów w portfolio i materiałach promocyjnych.</li>
                    <li>Klient oświadcza, że dostarczone materiały nie naruszają praw osób trzecich.</li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">§8. Poufność</h2>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>Strony zobowiązują się do zachowania poufności informacji uzyskanych w trakcie współpracy.</li>
                    <li>Obowiązek poufności nie dotyczy informacji publicznie dostępnych lub wymaganych przez prawo.</li>
                    <li>Obowiązek poufności obowiązuje w trakcie współpracy oraz przez okres 2 lat po jej zakończeniu.</li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">§9. Odpowiedzialność</h2>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>Usługodawca odpowiada za szkody wynikłe z niewykonania lub nienależytego wykonania usług do wysokości wynagrodzenia za daną usługę.</li>
                    <li>Usługodawca nie ponosi odpowiedzialności za wyniki kampanii reklamowych, gdyż zależą one od wielu czynników zewnętrznych.</li>
                    <li>Usługodawca nie odpowiada za treści dostarczone przez Klienta.</li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">§10. Rozwiązanie umowy</h2>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>Każda ze stron może rozwiązać umowę z zachowaniem 30-dniowego okresu wypowiedzenia, chyba że umowa stanowi inaczej.</li>
                    <li>W przypadku rozwiązania umowy Klient zobowiązany jest do zapłaty za usługi wykonane do dnia rozwiązania.</li>
                    <li>Usługodawca może rozwiązać umowę ze skutkiem natychmiastowym w przypadku rażącego naruszenia jej postanowień przez Klienta.</li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">§11. Reklamacje</h2>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>Reklamacje należy zgłaszać na adres e-mail: adam@fotz.pl w terminie 14 dni od wykonania usługi.</li>
                    <li>Reklamacja powinna zawierać opis problemu oraz oczekiwany sposób rozwiązania.</li>
                    <li>Usługodawca rozpatrzy reklamację w terminie 14 dni roboczych od jej otrzymania.</li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">§12. Postanowienia końcowe</h2>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego.</li>
                    <li>Wszelkie spory będą rozstrzygane przez sąd właściwy dla siedziby Usługodawcy.</li>
                    <li>Usługodawca zastrzega sobie prawo do zmiany regulaminu. Zmiany wchodzą w życie z dniem publikacji.</li>
                    <li>Regulamin obowiązuje od dnia 16 grudnia 2024 roku.</li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">§13. Kontakt</h2>
                  <p className="text-muted-foreground">
                    W sprawach związanych z regulaminem prosimy o kontakt:
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
