import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Zero Trust Security?",
    answer: "Zero Trust to model bezpieczeństwa IT oparty na zasadzie 'Never Trust, Always Verify' — nigdy nie ufaj, zawsze weryfikuj. W tradycyjnym modelu perimeter security zakładano że wszystko wewnątrz sieci firmowej jest bezpieczne (trusted zone). Zero Trust odrzuca to założenie: każde żądanie dostępu — niezależnie od tego czy pochodzi z sieci wewnętrznej czy zewnętrznej — musi być uwierzytelnione, autoryzowane i szyfrowane. Termin Zero Trust stworzył John Kindervag z Forrester Research w 2010 roku. Microsoft, Google (BeyondCorp) i NIST sformalizowały go jako standard. Kluczowe zasady: Verify explicitly — zawsze uwierzytelniaj na podstawie wielu czynników (tożsamość, urządzenie, lokalizacja, czas). Use least privilege — minimalny konieczny dostęp, nie 'wide open' po zalogowaniu. Assume breach — zakładaj że sieć jest już skompromitowana.",
  },
  {
    question: "Dlaczego tradycyjny perimeter security nie wystarcza?",
    answer: "Problemy z perimeter security: Praca zdalna — pracownicy łączą się z niezaufanych sieci (home WiFi, kawiarnia). Perimeter przestał istnieć. Cloud adoption — dane i aplikacje są w chmurze (SaaS, IaaS), nie za korporacyjnym firewallem. Insider threats — pracownik ze złośliwym zamiarem MA dostęp do sieci wewnętrznej. Perimeter go nie zatrzyma. Supply chain attacks — atakujący uzyskują dostęp przez zaufanych vendorów (SolarWinds attack 2020). Lateral movement — gdy atakujący przełamie perimeter, ma swobodny dostęp do wszystkiego wewnątrz. Zero Trust minimalizuje 'blast radius' naruszenia przez segmentację. VPN limitations — VPN daje pełny dostęp do sieci, nie granularny. Powolne, podatne na ataki. Zero Trust zastępuje VPN rozwiązaniami ZTNA (Zero Trust Network Access).",
  },
  {
    question: "Jakie są kluczowe komponenty Zero Trust?",
    answer: "Komponenty Zero Trust: Identity — silne uwierzytelnianie (MFA), SSO, Identity Provider (Okta, Azure AD, Google Workspace). Każdy user jest weryfikowany przed dostępem. Device — weryfikacja stanu urządzenia (MDM, endpoint security, patch level). Niezarządzane urządzenia = ograniczony dostęp. Network — mikrosegmentacja sieci, ZTNA zamiast VPN, szyfrowanie end-to-end. Application — aplikacje niewidoczne publicznie. Dostęp tylko przez identity-aware proxy. Data — klasyfikacja danych, DLP (Data Loss Prevention), szyfrowanie. Visibility — pełna telemetria i monitorowanie wszystkich requestów. SIEM, CASB (Cloud Access Security Broker). Analityka behawioralna (UEBA) — wykrywanie anomalii w zachowaniu użytkowników.",
  },
  {
    question: "Jak wdrożyć Zero Trust w organizacji?",
    answer: "Wdrożenie Zero Trust: Zacznij od Identity — wdrożenie silnego MFA (Okta, Azure AD MFA). To największy zwrot z inwestycji. 90% ataków można zatrzymać przez MFA. Zinwentaryzuj zasoby — co musisz chronić? Aplikacje, dane, sieci. Podziel na tiery według krytyczności. Wdrożenie least privilege — przegląd i ograniczenie uprawnień. Usuń 'standing admin access'. Implement JIT (Just-in-Time) access dla uprawnień administratora. Micro-segmentacja — podziel sieć na małe segmenty. Ruch między segmentami jest domyślnie blokowany i wymaga autoryzacji. Zastąp VPN ZTNA — rozwiązania jak Zscaler, Cloudflare Access, Palo Alto Prisma Access. Visibility — wdrożenie SIEM i monitorowania behawioralnego. Ciągłe doskonalenie — Zero Trust to podróż, nie projekt. Regularnie audytuj, testuj i poprawiaj.",
  },
  {
    question: "Jakie narzędzia wspierają Zero Trust?",
    answer: "Narzędzia Zero Trust: Identity (IdP) — Okta, Azure Active Directory, Ping Identity, JumpCloud. SSO + MFA + lifecycle management. Device Management (MDM/UEM) — Microsoft Intune, Jamf, VMware Workspace ONE. Zarządzanie urządzeniami i compliance. ZTNA (Zastępuje VPN) — Zscaler Private Access, Cloudflare Access, Palo Alto Prisma, Cisco Duo. Endpoint Security — CrowdStrike Falcon, SentinelOne, Microsoft Defender. CASB (Cloud Security) — Netskope, Microsoft Defender for Cloud Apps. Mikrosegmentacja — Illumio, Guardicore, VMware NSX. SIEM — Splunk, Microsoft Sentinel, Google Chronicle. PAM (Privileged Access Management) — CyberArk, BeyondTrust, Thycotic. Budżet Zero Trust dla startupów: zacznij od Okta ($6-15/user/mies.) + Microsoft Defender/CrowdStrike. To core Zero Trust za rozsądne pieniądze.",
  },
];

const zeroTrustPrinciples = [
  {
    zasada: "Never Trust, Always Verify",
    opis: "Każdy request dostępu jest weryfikowany niezależnie od źródła — sieć wewnętrzna nie jest 'zaufana' z definicji.",
    implementacja: "Continuous authentication, context-aware access policies, re-verification po każdej wrażliwej akcji.",
    kolor: "blue",
  },
  {
    zasada: "Least Privilege Access",
    opis: "Użytkownicy i systemy mają minimalny dostęp konieczny do wykonania zadania — nie 'wszystko co mogą potrzebować'.",
    implementacja: "RBAC, JIT access, automatic privilege expiration, access reviews co 90 dni.",
    kolor: "green",
  },
  {
    zasada: "Assume Breach",
    opis: "Zakładaj że atakujący jest już w sieci. Projektuj systemy tak jakby perimeter już był przełamany.",
    implementacja: "Mikrosegmentacja, end-to-end encryption, lateral movement prevention, comprehensive logging.",
    kolor: "red",
  },
  {
    zasada: "Verify Explicitly",
    opis: "Uwierzytelniaj i autoryzuj używając wszystkich dostępnych danych: tożsamość, urządzenie, lokalizacja, usługa, obciążenie.",
    implementacja: "Contextual access policies (user + device + location + time + risk score = access decision).",
    kolor: "purple",
  },
];

const ztMaturityLevels = [
  { poziom: "Initial", opis: "Podstawowe MFA, brak segmentacji, VPN jako główny mechanizm dostępu zdalnego. Punkt startowy większości firm.", akcje: "Wdróż MFA dla wszystkich, zacznij inwentaryzację zasobów.", kolor: "red" },
  { poziom: "Advanced", opis: "Identity-centric security, SSO, conditional access, ZTNA zastępuje VPN, podstawowa segmentacja sieci.", akcje: "Implementacja ZTNA, mikrosegmentacja kluczowych systemów, endpoint compliance.", kolor: "orange" },
  { poziom: "Optimal", opis: "Pełna implementacja Zero Trust: continuous verification, automated threat response, just-in-time access, comprehensive telemetry.", akcje: "Behavioral analytics, automated remediation, mature security operations.", kolor: "green" },
];

export default function BlogZeroTrustCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Zero Trust Security — co to jest i jak wdrożyć? | Fotz.pl"
        description="Zero Trust Security: zasady Never Trust Always Verify, komponenty (Identity, Device, Network, App, Data), narzędzia i jak wdrożyć Zero Trust w organizacji SaaS."
        canonicalUrl="https://fotz.pl/blog/zero-trust-security-co-to-jest-jak-wdrozyz"
      />
      <ArticleSchema
        title="Zero Trust Security — co to jest i jak wdrożyć?"
        description="Zero Trust: Never Trust Always Verify, Least Privilege, Assume Breach, komponenty, narzędzia (Okta, Zscaler, CrowdStrike) i poziomy dojrzałości. Przewodnik dla firm."
        url="https://fotz.pl/blog/zero-trust-security-co-to-jest-jak-wdrozyz"
        datePublished="2024-02-27"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Zero Trust Security", url: "https://fotz.pl/blog/zero-trust-security-co-to-jest-jak-wdrozyz" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Zero Trust Security", href: "/blog/zero-trust-security-co-to-jest-jak-wdrozyz" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Security
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Zero Trust Security
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              "Never Trust, Always Verify" — era firewalla i VPN minęła.
              Praca zdalna, cloud i insider threats wymagają nowego podejścia
              gdzie każdy request jest weryfikowany niezależnie od lokalizacji.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Główna zasada", value: "Never Trust" },
                { label: "Ataki przez MFA", value: "-90%" },
                { label: "Stworzony", value: "Forrester 2010" },
                { label: "Kluczowy start", value: "Identity + MFA" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-red-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zasady */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 fundamentalne zasady Zero Trust</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Zero Trust to nie produkt który kupujesz — to filozofia i architektura
              oparta na czterech kluczowych zasadach.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {zeroTrustPrinciples.map((z) => (
              <FadeInView key={z.zasada}>
                <div className={`rounded-xl border-2 p-6 ${
                  z.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  z.kolor === "green" ? "border-green-200 bg-green-50" :
                  z.kolor === "red" ? "border-red-200 bg-red-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <h3 className={`font-bold text-xl mb-3 font-mono ${
                    z.kolor === "blue" ? "text-blue-800" :
                    z.kolor === "green" ? "text-green-800" :
                    z.kolor === "red" ? "text-red-800" :
                    "text-purple-800"
                  }`}>{z.zasada}</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <p className="text-gray-700">{z.opis}</p>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Implementacja</div>
                      <p className="text-gray-700">{z.implementacja}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Dojrzałość */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Poziomy dojrzałości Zero Trust</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Zero Trust to podróż — nie każda firma musi od razu osiągnąć poziom optymalny.
              Zacznij od fundamentów i buduj stopniowo.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {ztMaturityLevels.map((l) => (
              <FadeInView key={l.poziom}>
                <div className={`rounded-xl border-2 p-5 ${
                  l.kolor === "red" ? "border-red-200 bg-red-50" :
                  l.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-green-200 bg-green-50"
                }`}>
                  <div className="flex gap-4 items-start">
                    <div className={`px-3 py-1 rounded-full text-white text-sm font-bold flex-shrink-0 ${
                      l.kolor === "red" ? "bg-red-500" :
                      l.kolor === "orange" ? "bg-orange-500" :
                      "bg-green-600"
                    }`}>{l.poziom}</div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm mb-2">{l.opis}</p>
                      <div>
                        <span className="text-xs font-bold text-gray-500 uppercase">Następne kroki: </span>
                        <span className="text-sm text-gray-700">{l.akcje}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
