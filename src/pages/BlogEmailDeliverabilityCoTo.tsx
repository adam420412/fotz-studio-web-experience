import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest email deliverability?",
    answer:
      "Email deliverability (dostarczalność emaili) to zdolność wiadomości email do dotarcia do skrzynki odbiorczej (inbox) zamiast do folderu spam lub odrzucenia przez serwer. Mierzony jako Inbox Placement Rate — % wysłanych emaili które trafiły do głównej skrzynki. Dobra dostarczalność zależy od: reputacji domeny i IP nadawcy, konfiguracji technicznej (SPF, DKIM, DMARC), jakości listy i zaangażowania odbiorców.",
  },
  {
    question: "Co to jest SPF, DKIM i DMARC?",
    answer:
      "Trzy fundamenty technicznej konfiguracji email: SPF (Sender Policy Framework) — rekord DNS definiujący które serwery mogą wysyłać emaile w imieniu twojej domeny. DKIM (DomainKeys Identified Mail) — cyfrowy podpis kryptograficzny weryfikujący że email nie był modyfikowany w transmisji. DMARC (Domain-based Message Authentication) — polityka informująca serwery co robić z emailami które nie przeszły SPF/DKIM. Wszystkie trzy są wymagane przez Gmail i Yahoo od 2024.",
  },
  {
    question: "Jaki jest optymalny bounce rate dla emaili?",
    answer:
      "Hard bounce rate (trwale niedostarczalne adresy — nieistniejące konta) — powinien być poniżej 2%, idealnie poniżej 0.5%. Soft bounce rate (chwilowe problemy — pełna skrzynka) — poniżej 5%. Spam complaint rate — poniżej 0.1% (Google/Yahoo limit), idealnie poniżej 0.08%. Przekroczenie tych progów skutkuje blokadą domeny lub IP przez filtry antyspamowe.",
  },
  {
    question: "Jak poprawić dostarczalność emaili?",
    answer:
      "Kluczowe działania: 1) Skonfiguruj SPF, DKIM i DMARC poprawnie, 2) Ogrzej nową domenę (warm-up IP/domain — stopniowe zwiększanie wolumenu), 3) Czyść listę regularnie (usuń hard bounces natychmiast, nieaktywnych po 6-12 miesiącach), 4) Stosuj double opt-in przy zbieraniu maili, 5) Monitoruj reputację w Google Postmaster Tools i Microsoft SNDS, 6) Segmentuj — wysyłaj tylko do zaangażowanych.",
  },
  {
    question: "Co to jest warm-up IP/domain i ile trwa?",
    answer:
      "Warm-up to proces stopniowego budowania reputacji nowego IP lub domeny przez wysyłanie malejących wolumenów do najbardziej zaangażowanych odbiorców. Nowy IP zaczyna od 50-100 emaili dziennie, podwajając wolumen co 1-2 tygodnie. Pełny warm-up trwa 4-8 tygodni dla typowego sendera, 3-6 miesięcy dla dużego enterprise. Zbyt szybkie wysyłanie z nowego IP = natychmiastowa blokada przez filtry antyspamowe.",
  },
];

const deliverabilityFactors = [
  {
    czynnik: "Reputacja domeny",
    waga: "Wysoka",
    opis: "Historia domeny nadawcy w oczach dostawców skrzynek (Gmail, Outlook, etc.)",
    jak: "Google Postmaster Tools, Talos Intelligence, MXToolbox",
  },
  {
    czynnik: "Reputacja IP",
    waga: "Wysoka",
    opis: "Historia serwera pocztowego — shared IP vs. dedicated IP, wolumen, historia spamu",
    jak: "Senderscore.org, Barracuda Reputation, SORBS",
  },
  {
    czynnik: "Autentykacja (SPF/DKIM/DMARC)",
    waga: "Krytyczna",
    opis: "Weryfikacja tożsamości nadawcy — brak = natychmiastowe podejrzenie o phishing",
    jak: "MXToolbox Email Test, GlockApps, Mail-tester.com",
  },
  {
    czynnik: "Zaangażowanie odbiorców",
    waga: "Bardzo wysoka",
    opis: "Open rate, click rate, czas czytania, forwarding — sygnał że email jest pożądany",
    jak: "Segmentacja aktywnych vs. nieaktywnych, sunset policy",
  },
  {
    czynnik: "Jakość listy email",
    waga: "Wysoka",
    opis: "% nieistniejących adresów (hard bounces) i pułapek spamowych (spam traps)",
    jak: "Email verification tools: ZeroBounce, NeverBounce, Kickbox",
  },
  {
    czynnik: "Treść i HTML",
    waga: "Średnia",
    opis: "Spam trigger words, stosunek tekstu do obrazów, broken links, HTML quality",
    jak: "SpamAssassin test, Litmus, Email on Acid",
  },
];

const technicalConfig = [
  { rekord: "SPF", typ: "DNS TXT", cel: "Autoryzuje serwery mogące wysyłać z domeny", przykład: "v=spf1 include:_spf.google.com ~all" },
  { rekord: "DKIM", typ: "DNS TXT", cel: "Podpisuje wiadomości kryptograficznie", przykład: "mail._domainkey IN TXT \"v=DKIM1; k=rsa; p=[klucz publiczny]\"" },
  { rekord: "DMARC", typ: "DNS TXT", cel: "Polityka dla emaili które nie przeszły SPF/DKIM", przykład: "_dmarc IN TXT \"v=DMARC1; p=quarantine; rua=mailto:dmarc@twojadomena.pl\"" },
  { rekord: "BIMI", typ: "DNS TXT", cel: "Wyświetlanie logo marki w skrzynce (wymaga DMARC p=quarantine/reject)", przykład: "Weryfikowany logotyp przy emailach marketingowych" },
];

const deliverabilityMetrics = [
  { metryka: "Inbox Placement Rate", benchmark: "powyżej 90%", opis: "% emaili w inboxie (nie spam)" },
  { metryka: "Spam Placement Rate", benchmark: "poniżej 5%", opis: "% emaili w folderze spam" },
  { metryka: "Hard Bounce Rate", benchmark: "poniżej 0.5%", opis: "% trwale niedostarczalnych emaili" },
  { metryka: "Spam Complaint Rate", benchmark: "poniżej 0.08%", opis: "% odbiorców którzy oznaczyli jako spam" },
  { metryka: "Open Rate", benchmark: "20-25% (branżowy avg)", opis: "Sygnał zaangażowania wpływający na reputację" },
  { metryka: "Unsubscribe Rate", benchmark: "poniżej 0.3%", opis: "Wysoki = zła segmentacja lub za duże częstotliwość" },
];

export default function BlogEmailDeliverabilityCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Email Deliverability | Fotz Studio"
        description="Email deliverability — definicja, 6 czynników reputacji, konfiguracja SPF/DKIM/DMARC, metryki (bounce rate, spam rate) i jak poprawić dostarczalność…"
        canonical="https://fotz.pl/blog/email-deliverability-co-to"

        keywords="Email Deliverability co to jest, Email Deliverability definicja, czym jest Email Deliverability, Email Deliverability przykłady, jak działa Email Deliverability, Email Deliverability znaczenie, Email Deliverability przewodnik"
      />
      <ArticleSchema
        title="Email Deliverability — co to jest i jak poprawić dostarczalność emaili?"
        description="Kompletny przewodnik po email deliverability: SPF, DKIM, DMARC, 6 czynników reputacji, metryki i strategie poprawy dostarczalności."
        url="https://fotz.pl/blog/email-deliverability-co-to"
        datePublished="2024-01-19"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Email Deliverability", url: "https://fotz.pl/blog/email-deliverability-co-to" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: "Email Deliverability", url: "https://fotz.pl" }]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Email Deliverability — co to jest i jak ją poprawić?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Dostarczalność emaili decyduje czy Twoje wiadomości trafiają do inboxu czy spamu.
            Poznaj SPF, DKIM, DMARC, 6 czynników reputacji i jak budować sender score.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest email deliverability?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Email deliverability</strong> to miara tego, jak skutecznie Twoje emaile docierają
              do skrzynki odbiorczej. Możesz mieć najlepszy subject line i treść — ale jeśli
              email ląduje w spamie, Twój wysiłek jest zmarnowany. Przeciętnie 21% emaili
              marketingowych nigdy nie trafia do inboxu.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Od 2024 roku Google i Yahoo wprowadziły obowiązkowe wymagania dla senderów
              (SPF, DKIM, DMARC, easy unsubscribe) — ignorowanie tych standardów
              skutkuje blokadą dostaw dla milionów adresatów.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "21%", opis: "emaili marketingowych nie trafia do inboxu — ląduje w spamie lub jest blokowane" },
                { stat: "0.08%", opis: "maksymalny spam complaint rate akceptowany przez Gmail i Yahoo od 2024" },
                { stat: "4-8 tyg.", opis: "tyle trwa prawidłowy warm-up nowej domeny lub IP przed wysyłką masową" },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 czynników dostarczalności emaili</h2>
            <div className="space-y-4">
              {deliverabilityFactors.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-slate-900 text-lg">{f.czynnik}</h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      f.waga === "Krytyczna" ? "bg-red-100 text-red-700" :
                      f.waga === "Bardzo wysoka" ? "bg-orange-100 text-orange-700" :
                      f.waga === "Wysoka" ? "bg-yellow-100 text-yellow-700" :
                      "bg-green-100 text-green-700"
                    }`}>{f.waga}</span>
                  </div>
                  <p className="text-slate-600 mb-2">{f.opis}</p>
                  <p className="text-xs text-slate-400">Monitoring: {f.jak}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Konfiguracja techniczna — SPF, DKIM, DMARC, BIMI</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Rekord</th>
                    <th className="p-3 text-left">Typ DNS</th>
                    <th className="p-3 text-left">Cel</th>
                    <th className="p-3 text-left">Przykład / Uwaga</th>
                  </tr>
                </thead>
                <tbody>
                  {technicalConfig.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-bold text-blue-700">{row.rekord}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.typ}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.cel}</td>
                      <td className="p-3 text-slate-500 text-xs font-mono">{row.przykład}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe metryki email deliverability</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {deliverabilityMetrics.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 mb-1">{m.metryka}</h3>
                  <p className="text-slate-600 text-sm mb-1">{m.opis}</p>
                  <p className="text-xs font-semibold text-green-600">Benchmark: {m.benchmark}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — email deliverability</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="email-deliverability-co-to" />
      <ContactSection />
    </Layout>
  );
}
