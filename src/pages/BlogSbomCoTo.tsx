import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest SBOM (Software Bill of Materials)?",
    answer: "SBOM (Software Bill of Materials) to formalny, ustrukturyzowany zapis wszystkich komponentów oprogramowania — bibliotek, dependencji, modułów i ich relacji — które składają się na dany produkt software. Analogia: SBOM dla software to to samo co lista składników na opakowaniu żywności — wiesz dokładnie co jest w środku. Dlaczego SBOM jest kluczowy: incydent Log4Shell (CVE-2021-44228) pokazał że firmy nie wiedziały czy używają Log4j (często była 10+ poziomów głębiej w dependency tree). Bez SBOM — response na krytyczny CVE trwa tygodnie (musisz ręcznie sprawdzić każdy projekt). Z SBOM — w godzinę wiesz które produkty są dotknięte. Regulacje wymagające SBOM: US Executive Order 14028 (2021) — wymaga SBOM dla software dostarczanego do rządu US. EU Cyber Resilience Act — wymaga SBOM dla produktów z elementami cyfrowymi. FDA — wymaga SBOM dla medical devices. PCI DSS 4.0 — zaleca SBOM. Formaty SBOM: CycloneDX (OWASP) — bogaty w security context, popularny. SPDX (Linux Foundation) — standard ISO 5962. SWID Tags — starszy standard. CycloneDX i SPDX są dziś dominujące.",
  },
  {
    question: "Jak generować SBOM i jakie narzędzia wybrać?",
    answer: "Generowanie SBOM — narzędzia: Syft (Anchore): open-source, generuje CycloneDX i SPDX z container images, filesystems, code directories. Wbudowany w Grype (vulnerability scanner). Komenda: syft alpine:latest -o cyclonedx-json. Trivy: open-source (Aqua Security), scanner który generuje SBOM jako efekt uboczny skanowania. Trivy sbom --format cyclonedx image:tag. cdxgen (OWASP): generuje CycloneDX dla wielu języków i package managers (npm, pip, Maven, Gradle, Go modules, Cargo). Microsoft SBOM Tool: open-source, cross-platform. Snyk: komercyjne, generuje SBOM jako część security analysis. Grype: vulnerability scanner który konsumuje SBOM (Syft output) i mapuje do CVE. Gdzie generować SBOM: W CI/CD pipeline po każdym build. Przy każdym container image build. Przechowuj w OCI Registry (OCI artifacts) lub dedykowanym SBOM store. Attestation: podpisuj SBOM kryptograficznie (cosign + Sigstore). Udostępnij klientom lub regulatorom jako artefakt. SBOM Consumption: gdy pojawi się nowy CVE — query SBOM store żeby znaleźć które produkty mają vulnerable component. Automatyczne alerting per product owner.",
  },
  {
    question: "Software Supply Chain Security — co to jest i jak chronić?",
    answer: "Software Supply Chain Security: Ataki na software supply chain rosną — atakujący kompromitują nie produkt end-to-end ale jedno z narzędzi w łańcuchu budowania. Słynne ataki: SolarWinds (2020) — backdoor wstrzyknięty podczas build process. XZ Utils (2024) — backdoor wstrzyknięty do popularnej biblioteki kompresji Linux. event-stream npm (2018) — malicious code w popularnym npm package. Kategorie zagrożeń: Compromised dependencies (złośliwy kod w bibliotece). Typosquatting (złośliwe pakiety z podobnymi nazwami np. requsts zamiast requests). Account takeover developera (przejęcie konta maintainera npm/PyPI). Build system compromise (backdoor w CI/CD). Framework SLSA (Supply-chain Levels for Software Artifacts): L1: Build process jest scriptable i logged. L2: Signed provenance. L3: Source i build integrity. L4: Two-party review, hermetic build. Sigstore/cosign: bezpłatne narzędzie do podpisywania software artifacts. cosign sign my-image:tag → tworzy kryptograficzny podpis w OCI registry. cosign verify my-image:tag → weryfikuje podpis. Rekor: transparency log (public ledger) dla software signatures. SLSA + Sigstore + SBOM = kompletna supply chain security posture. Dependency pinning: pin wersje (nie latest), używaj lock files, weryfikuj checksums.",
  },
  {
    question: "Vulnerability Management w Software Supply Chain?",
    answer: "Vulnerability Management: VEX (Vulnerability Exploitability eXchange): dokument towarzyszący SBOM który wyjaśnia czy CVE w komponencie jest exploitable w danym kontekście. Nie każdy CVE w SBOM jest rzeczywistym zagrożeniem. VEX stany: Affected, Not Affected (z uzasadnieniem), Fixed, Under Investigation. CVE Lifecycle: CVE Discovery → CVE Assignment (CNA) → NVD Publication → CVSS Score → Patch release → Deployment. SLAs dla vulnerability remediation: Critical (CVSS 9.0+): patch w 24-48h. High (7.0-8.9): patch w 7 dni. Medium (4.0-6.9): patch w 30 dni. Low (0.1-3.9): patch w 90 dni. Narzędzia do vulnerability scanning: Trivy — container i filesystem scan, szybki, open-source. Grype — SBOM-based scanner. Snyk — developer-friendly, IDE integration, komercyjne. OWASP Dependency-Check — Java/Maven/Gradle focus, open-source. Renovate / Dependabot: automatyczne PR-y gdy pojawiają się nowe wersje dependencies. Dependabot (GitHub native), Renovate (bardziej konfigurowalne). Policy Engine: OPA do definiowania polityki: 'nie możesz deployować jeśli masz CVE Critical nienaprawione'. Admission Controllers w Kubernetes blokują deployment.",
  },
  {
    question: "Jak wdrożyć SBOM w organizacji — krok po kroku?",
    answer: "Wdrożenie SBOM w organizacji: Krok 1 — Wybierz format: CycloneDX (zalecany dla security use cases) lub SPDX (jeśli potrzebujesz ISO compliance). Krok 2 — Wdrożenie generowania: dodaj Syft lub cdxgen do CI/CD pipeline. Generuj SBOM dla każdego build (application + container image). Krok 3 — Przechowywanie: SBOM jako OCI artifact w registry (attach do image przez cosign attach sbom). SBOM w dedykowanym store (Dependency-Track, SW360). Krok 4 — Vulnerability scanning: Grype konsumuje SBOM → mapuje CVE → alerty. Dependency-Track — platforma do zarządzania SBOM i vulnerability tracking. Krok 5 — VEX workflow: analityk security ocenia CVE → tworzy VEX document → produkty oznaczone właściwie. Krok 6 — Attestation i signing: cosign + Sigstore podpisuje SBOM i image. Weryfikacja w deployment pipeline. Krok 7 — Customer distribution: udostępnij SBOM klientom (enterprise B2B wymaga tego coraz częściej). Dependency-Track jako SBOM management platforma: open-source (OWASP), przyjmuje CycloneDX i SPDX, zarządza CVE per komponent, dashboard per project, REST API do integracji. Maturity: Level 1 — SBOM generowany per build. Level 2 — SBOM signed i stored. Level 3 — SBOM used for vulnerability management. Level 4 — VEX + customer distribution.",
  },
];

const sbomComponents = [
  { element: "Component Name", opis: "Nazwa biblioteki lub modułu (np. log4j-core)", wymagane: true },
  { element: "Version", opis: "Dokładna wersja komponentu (np. 2.14.1)", wymagane: true },
  { element: "Unique Identifier", opis: "Package URL (purl) — globalnie unikalny identyfikator", wymagane: true },
  { element: "License", opis: "Licencja komponentu (Apache-2.0, MIT, GPL-3.0)", wymagane: true },
  { element: "Supplier", opis: "Dostawca / maintainer komponentu", wymagane: false },
  { element: "Hash / Checksum", opis: "SHA-256 lub SHA-512 dla weryfikacji integralności", wymagane: false },
  { element: "Dependencies", opis: "Powiązania między komponentami (dependency graph)", wymagane: false },
  { element: "VEX Data", opis: "Exploitability status dla znanych CVE", wymagane: false },
];

const sbomTools = [
  { narzędzie: "Syft", producent: "Anchore", format: "CycloneDX, SPDX", useCase: "Container image i filesystem SBOM generation" },
  { narzędzie: "cdxgen", producent: "OWASP", format: "CycloneDX", useCase: "Multi-language (npm, pip, Maven, Go, Cargo)" },
  { narzędzie: "Grype", producent: "Anchore", format: "SBOM consumer", useCase: "CVE scanning z SBOM input" },
  { narzędzie: "Dependency-Track", producent: "OWASP", format: "CycloneDX, SPDX", useCase: "SBOM management platform, vulnerability tracking" },
  { narzędzie: "cosign", producent: "Sigstore/CNCF", format: "Sigowanie", useCase: "Podpisywanie i weryfikacja SBOM i container images" },
  { narzędzie: "Trivy", producent: "Aqua Security", format: "CycloneDX, SPDX", useCase: "All-in-one scanner z SBOM output" },
];

export default function BlogSbomCoTo() {
  return (
    <Layout>
      <SEOHead
        title="SBOM | Fotz Studio"
        description="SBOM: definicja, formaty (CycloneDX, SPDX), narzędzia (Syft, Trivy, Grype), Software Supply Chain Security, VEX i wdrożenie krok po kroku."
        canonical="https://fotz.pl/blog/sbom-software-bill-of-materials-co-to-jest-jak-wdrozyz"

        keywords="SBOM co to jest, SBOM definicja, czym jest SBOM, SBOM przykłady, jak działa SBOM, SBOM znaczenie, SBOM przewodnik"

        canonical="https://fotz.pl/blog/sbom-software-bill-of-materials-co-to-jest-jak-wdrozyz"
      />
      <ArticleSchema
        title="SBOM — co to jest Software Bill of Materials i jak wdrożyć?"
        description="SBOM: elementy, formaty (CycloneDX/SPDX), Supply Chain Security (SLSA, Sigstore), vulnerability management, VEX i 6 narzędzi."
        url="https://fotz.pl/blog/sbom-software-bill-of-materials-co-to-jest-jak-wdrozyz"
        datePublished="2024-04-03"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "SBOM", url: "https://fotz.pl/blog/sbom-software-bill-of-materials-co-to-jest-jak-wdrozyz" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "SBOM", url: "/blog/sbom-software-bill-of-materials-co-to-jest-jak-wdrozyz" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-slate-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Security / Supply Chain
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SBOM
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Log4Shell pokazał że firmy nie wiedziały co mają w swoim oprogramowaniu.
              SBOM to lista składników software — wie jaka biblioteka jest
              w jakim produkcie i reaguj na CVE w godzinach, nie tygodniach.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Formaty", value: "CycloneDX / SPDX" },
                { label: "Narzędzia", value: "Syft, Trivy, cdxgen" },
                { label: "Wymagane przez", value: "US EO14028, EU CRA" },
                { label: "Supply Chain", value: "SLSA + Sigstore" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-slate-300">{s.value}</div>
                  <div className="text-sm text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SBOM elementy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Elementy SBOM</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              NTIA (US National Telecommunications) definiuje minimum viable SBOM —
              elementy wymagane i opcjonalne które czynią SBOM użytecznym.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-3">
            {sbomComponents.map((c) => (
              <FadeInView key={c.element}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900 text-sm">{c.element}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                      c.wymagane ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-600"
                    }`}>{c.wymagane ? "Wymagane" : "Opcjonalne"}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{c.opis}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Narzędzia */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Narzędzia SBOM</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Ekosystem SBOM tools obejmuje generatory, skanery i platformy
              zarządzania — większość open-source.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left p-3 font-bold text-gray-900">Narzędzie</th>
                  <th className="text-left p-3 font-bold text-gray-900">Producent</th>
                  <th className="text-left p-3 font-bold text-gray-900">Format</th>
                  <th className="text-left p-3 font-bold text-gray-900">Use Case</th>
                </tr>
              </thead>
              <tbody>
                {sbomTools.map((t, i) => (
                  <tr key={t.narzędzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-bold text-gray-900">{t.narzędzie}</td>
                    <td className="p-3 text-gray-600">{t.producent}</td>
                    <td className="p-3 text-slate-700 font-medium">{t.format}</td>
                    <td className="p-3 text-gray-600 text-xs">{t.useCase}</td>
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

      <RelatedArticles currentArticleId="sbom-software-bill-of-materials-co-to-jest-jak-wdrozyz" />
      <ContactSection />
    </Layout>
  );
}
