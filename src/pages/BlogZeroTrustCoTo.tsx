import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Zero Trust Security i jakie są jego podstawowe zasady?",
    answer: "Zero Trust to model bezpieczeństwa oparty na zasadzie 'Never Trust, Always Verify' — żaden użytkownik, urządzenie ani serwis nie jest domyślnie zaufany, nawet jeśli jest wewnątrz sieci korporacyjnej. Tradycyjny model (Castle and Moat): wszystko wewnątrz sieci jest zaufane, wszystko na zewnątrz — nie. Problem: lateral movement po przejęciu jednego węzła wewnętrznego. Zero Trust zasady: Verify explicitly — uwierzytelniaj każde żądanie (identity, device health, location, service). Least privilege access — dostęp tylko do zasobów niezbędnych do zadania. Assume breach — zachowuj się jakby naruszenie już nastąpiło, minimalizuj promień rażenia (blast radius). Mikrosegmentacja — podziel sieć na małe segmenty z kontrolowanym przepływem. Filary Zero Trust (NIST SP 800-207): Identity — MFA, RBAC, Just-In-Time access. Device — compliance check (patch level, endpoint detection). Network — mikrosegmentacja, encrypted traffic, software-defined perimeter. Application — per-request authorization, WAF. Data — encryption at rest/in transit, DLP. Visibility — SIEM, logging wszystkich dostępów. Dlaczego Zero Trust teraz: praca zdalna — perimeter sieci nieistnieje. Cloud — zasoby poza tradycyjną siecią. SaaS — dane i aplikacje poza kontrolą IT. Zaawansowane ataki — lateral movement, supply chain attacks.",
  },
  {
    question: "Identity i MFA — jak zbudować silne uwierzytelnianie w Zero Trust?",
    answer: "Identity jest fundamentem Zero Trust — każdy użytkownik i serwis musi być jednoznacznie identyfikowany. MFA (Multi-Factor Authentication): coś wiesz (hasło), coś masz (TOTP app, hardware key), coś jesteś (biometria). Phishing-resistant MFA: FIDO2/WebAuthn + hardware keys (YubiKey). Passkeys — nowy standard (Apple/Google/Microsoft) — bez haseł, oparte na biometrii + kluczu kryptograficznym. SMS OTP — najsłabsze MFA (SIM swapping, SS7 attacks) — unikaj dla krytycznych systemów. Conditional Access: zamiast prostego tak/nie — decyzja oparta na ryzyku. Czynniki: lokalizacja IP, device compliance, czas dnia, sensitivity zasobu. Jeśli ryzyko wysokie — wymóg silniejszego MFA. Privileged Access Management (PAM): Just-In-Time (JIT) access — dostęp przyznawany na czas sesji, nie stały. Privileged Identity Management (PIM) — Azure AD PIM, CyberArk. Break-glass accounts — awaryjna procedura dostępu z pełnym auditingiem. Service accounts i workload identity: OIDC workload identity zamiast long-lived credentials. AWS IAM Roles for Service Accounts (IRSA) w Kubernetes. Workload Identity Federation (GCP, Azure). Identity providers: Okta, Microsoft Entra ID, Auth0, Keycloak (open-source). SAML vs. OIDC/OAuth2 — OIDC nowszy, lepszy dla API i mobile.",
  },
  {
    question: "Mikrosegmentacja i sieć w Zero Trust — jak ją zbudować?",
    answer: "Mikrosegmentacja: podział sieci na małe strefy z granularną kontrolą przepływu. Cel: ograniczenie lateral movement nawet po przejęciu jednego węzła. Podejścia do mikrosegmentacji: Network-based: VLAN segmentation, SDN (Software-Defined Networking), firewall rules. Application/Workload-based: polityki per workload niezależne od sieci (Illumio, Guardicore). Identity-based: policy oparta na identity workloada (service mesh mTLS). Software-Defined Perimeter (SDP): zastępuje VPN. Użytkownik/urządzenie weryfikowane ZANIM uzyska dostęp do sieci. Zero Trust Network Access (ZTNA): Cloudflare Access, Zscaler Private Access, Palo Alto Prisma Access. Każda aplikacja ma własną politykę dostępu, nie jeden VPN tunel. Service Mesh i mTLS: w mikroserwisach — Istio/Linkerd implementuje mTLS between services. Każdy serwis ma własny certyfikat (SVID). Polityki: allow-list który serwis może rozmawiać z którym. Network policy w Kubernetes: domyślnie deny-all, explicit allow rules. Cilium — eBPF-based network policy, L7 aware (HTTP, gRPC). Encrypted traffic: TLS 1.3 wszędzie. Certificate management: cert-manager w K8s. Private PKI (HashiCorp Vault PKI, AWS ACM Private CA). Monitorowanie ruchu: east-west traffic (między workloadami) często niewidoczny — service mesh telemetry go odkrywa.",
  },
  {
    question: "Zero Trust dla aplikacji i danych — RBAC, ABAC, DLP?",
    answer: "Authorization modele: RBAC (Role-Based Access Control) — dostęp na podstawie roli (Admin, Editor, Viewer). Prostszy, mniej granularny. ABAC (Attribute-Based Access Control) — dostęp na podstawie atrybutów (user.department, resource.sensitivity, time.hour). Bardziej granularny, bardziej złożony. ReBAC (Relationship-Based Access Control) — Google Zanzibar model. Dostęp na podstawie relacji (owner, viewer, member of group). Używany przez Google Drive, GitHub. Open Policy Agent (OPA): silnik polityk jako kod. Polityki w języku Rego. Używany w Kubernetes (admission controller), API Gateway, service mesh. Separacja polityki od kodu aplikacji. Just-In-Time (JIT) Access dla zasobów: produkcyjne bazy danych dostępne tylko na czas sesji debug. Automatyczne odwołanie po czasie lub zakończeniu sesji. Pełny audit log każdego użycia. Data Loss Prevention (DLP): wykrywanie i blokowanie wycieku danych wrażliwych. Email DLP — blokuj wysyłanie SSN, kart kredytowych. Cloud DLP — Google, Microsoft Purview. CASB (Cloud Access Security Broker): widoczność i kontrola używania SaaS. Shadow IT discovery. Polityki dla Dropbox, Slack, Google Drive. Encryption: at rest — AES-256, KMS (AWS KMS, Azure Key Vault, HashiCorp Vault). In transit — TLS 1.3. In use — Confidential Computing (Intel SGX, AMD SEV). Data classification: oznaczanie danych (Public, Internal, Confidential, Restricted) — podstawa polityk DLP i dostępu.",
  },
  {
    question: "Jak wdrożyć Zero Trust krok po kroku — od czego zacząć?",
    answer: "Zero Trust to podróż, nie produkt. Nie kupisz 'Zero Trust w pudełku'. Krok 1: Inwentaryzacja i widoczność: Co masz? Jakie zasoby, użytkownicy, urządzenia, sieci, aplikacje. Zacznij od Identity — gdzie są twoje tożsamości (AD, Azure AD, Google). Device inventory — MDM (Intune, Jamf). Krok 2: Wzmocnienie Identity: MFA dla wszystkich (zacznij od admins i krytycznych systemów). Conditional access policies. Single Sign-On (SSO) dla wszystkich aplikacji. Krok 3: Widoczność i monitoring: Centralny logging (SIEM — Microsoft Sentinel, Splunk, Elastic SIEM). User and Entity Behavior Analytics (UEBA). Krok 4: Aplikacje: Przenieś remote access z VPN na ZTNA. Per-app access policies zamiast network-level VPN. Krok 5: Segmentacja sieci: Mikrosegmentacja krytycznych zasobów. Network policies w cloud. Krok 6: Dane: Klasyfikacja danych. DLP dla email i cloud. Encryption zarządzana centralnie (KMS). Frameworki i certyfikacje: NIST SP 800-207 — oficjalny framework Zero Trust. CISA Zero Trust Maturity Model — 5 poziomów dojrzałości per filar. Microsoft Zero Trust deployment guide. Narzędzia: Cloudflare One (ZTNA + email security + DNS). Zscaler Zero Trust Exchange. Palo Alto Prisma Access. Microsoft Entra + Defender for Cloud. Okta Identity Platform.",
  },
];

const ztPillars = [
  { filar: "Identity", opis: "Każdy użytkownik i serwis posiada silną tożsamość. MFA, RBAC, JIT access, PAM.", narzedzia: "Okta, Microsoft Entra, Auth0, CyberArk" },
  { filar: "Device", opis: "Weryfikuj stan urządzenia przed dostępem — patch level, EDR, MDM enrollment.", narzedzia: "Intune, Jamf, CrowdStrike, SentinelOne" },
  { filar: "Network", opis: "Mikrosegmentacja, ZTNA zamiast VPN, encrypted east-west traffic, SDP.", narzedzia: "Cloudflare Access, Zscaler, Prisma Access" },
  { filar: "Application", opis: "Per-request authorization, WAF, API security, mTLS między serwisami.", narzedzia: "OPA, Istio, Apigee, Kong, AWS WAF" },
  { filar: "Data", opis: "Klasyfikacja, szyfrowanie, DLP, dostęp JIT do wrażliwych zasobów.", narzedzia: "Azure Purview, Google DLP, HashiCorp Vault" },
  { filar: "Visibility", opis: "Logging każdego dostępu, SIEM, UEBA, threat detection, audit trails.", narzedzia: "Sentinel, Splunk, Elastic SIEM, Datadog" },
];

const ztVsTraditional = [
  { aspekt: "Model zaufania", traditional: "Ufaj wszystkiemu wewnątrz sieci", zeroTrust: "Nigdy nie ufaj — zawsze weryfikuj" },
  { aspekt: "Dostęp zdalny", traditional: "VPN do całej sieci korporacyjnej", zeroTrust: "ZTNA — dostęp per aplikacja" },
  { aspekt: "Lateral movement", traditional: "Po przejęciu węzła — swobodny ruch", zeroTrust: "Mikrosegmentacja ogranicza promień rażenia" },
  { aspekt: "Identity", traditional: "Hasło wystarczy wewnątrz", zeroTrust: "MFA + context + device + risk" },
  { aspekt: "Autoryzacja", traditional: "Network-level (VLAN, firewall)", zeroTrust: "Per-request, per-resource (RBAC/ABAC)" },
  { aspekt: "Widoczność", traditional: "Ograniczona (east-west niewidoczny)", zeroTrust: "Pełny audit trail każdego dostępu" },
];

export default function BlogZeroTrustCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Zero Trust Security | Fotz Studio"
        description="Zero Trust Security: 6 filarów, mikrosegmentacja, ZTNA vs VPN, MFA, RBAC, OPA, DLP — jak budować bezpieczeństwo 'Never Trust, Always Verify' krok po kroku."
        canonicalUrl="https://fotz.pl/blog/zero-trust-security-co-to-jest-jak-wdrozyz-ztna-mfa"

        keywords="Zero Trust Security co to jest, Zero Trust Security definicja, czym jest Zero Trust Security, Zero Trust Security przykłady, jak działa Zero Trust Security, Zero Trust Security znaczenie, Zero Trust Security przewodnik"

        canonical="https://fotz.pl/blog/zero-trust-security-co-to-jest-jak-wdrozyz"
      />
      <ArticleSchema
        title="Zero Trust Security — co to jest, jak wdrożyć, MFA, ZTNA i mikrosegmentacja?"
        description="Zero Trust: 6 filarów (Identity/Device/Network/App/Data/Visibility), ZTNA vs VPN, mikrosegmentacja, OPA polityki, DLP i roadmapa wdrożenia."
        url="https://fotz.pl/blog/zero-trust-security-co-to-jest-jak-wdrozyz-ztna-mfa"
        datePublished="2024-04-10"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Zero Trust Security", url: "https://fotz.pl/blog/zero-trust-security-co-to-jest-jak-wdrozyz-ztna-mfa" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-orange-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Zero Trust Security", href: "/blog/zero-trust-security-co-to-jest-jak-wdrozyz-ztna-mfa" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Security / Cloud
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Zero Trust Security
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              'Never Trust, Always Verify.' W erze pracy zdalnej i cloud
              tradycyjny perimeter sieci nie istnieje. Zero Trust weryfikuje
              każde żądanie niezależnie od lokalizacji użytkownika.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Zasada", value: "Never Trust, Always Verify" },
                { label: "Dostęp zdalny", value: "ZTNA (nie VPN)" },
                { label: "Framework", value: "NIST SP 800-207" },
                { label: "Identity", value: "MFA + JIT + PAM" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-red-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filary */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 filarów Zero Trust</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Zero Trust to nie jeden produkt — to architektura obejmująca
              tożsamość, urządzenia, sieć, aplikacje, dane i widoczność.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {ztPillars.map((p) => (
              <FadeInView key={p.filar}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{p.filar}</h3>
                  <p className="text-gray-700 text-sm mb-2">{p.opis}</p>
                  <p className="text-xs text-red-700 font-medium">{p.narzedzia}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Porównanie */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Zero Trust vs. tradycyjne bezpieczeństwo</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Zero Trust fundamentalnie zmienia założenia — zamiast chronić
              perimeter sieci, weryfikujesz każde żądanie per zasobie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left p-3 font-bold text-gray-900">Aspekt</th>
                  <th className="text-left p-3 font-bold text-gray-900">Tradycyjne</th>
                  <th className="text-left p-3 font-bold text-gray-900">Zero Trust</th>
                </tr>
              </thead>
              <tbody>
                {ztVsTraditional.map((r, i) => (
                  <tr key={r.aspekt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-bold text-gray-900">{r.aspekt}</td>
                    <td className="p-3 text-red-700 text-xs">{r.traditional}</td>
                    <td className="p-3 text-green-700 text-xs">{r.zeroTrust}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      <RelatedArticles currentArticleId="zero-trust-security-co-to-jest-jak-wdrozyz" />
      <ContactSection />
    </Layout>
  );
}
