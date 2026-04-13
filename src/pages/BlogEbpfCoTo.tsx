import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest eBPF i dlaczego jest przełomowy?",
    answer: "eBPF (extended Berkeley Packet Filter) to technologia w jądrze Linux która pozwala uruchamiać niestandardowy, sandboxed kod bezpośrednio w kernel space — bez modyfikowania kodu jądra i bez ładowania modułów kernel. Jest bezpieczny: BPF verifier sprawdza kod przed uruchomieniem — nie może crashnąć jądra. Jest programowalny: możesz dynamicznie instrumentować dowolny punkt w jądrze (system calls, network events, function calls). Dlaczego przełomowy: tradycyjnie dostęp do kernel space wymagał pisania kernel modules (niebezpieczne, trudne, wymagają rebootu). eBPF pozwala na kernel programmability bez tych ograniczeń. Analogia: Brendan Gregg (Netflix) porównał eBPF do JavaScript dla przeglądarki — dał programistom dostęp do kernel tak jak JS dał programistom dostęp do DOM. Kluczowe zastosowania: Networking — wysokowydajny packet processing, load balancing (Cilium). Observability — zbieranie metrics, profiling bez overheadu (Pixie, Tetragon). Security — runtime security, syscall filtering (Falco, Tetragon). Performance analysis — low-overhead profiling w produkcji (Pixie, Parca). Historia: BPF stworzony w 1992 do filtrowania pakietów. eBPF (extended) w Linuksie od 2014. Eksplozja adopcji po 2019.",
  },
  {
    question: "Jak działa eBPF — architektura i BPF maps?",
    answer: "Architektura eBPF: Program eBPF piszesz w C (restricted subset) lub Rust. Kompiluje do BPF bytecode (LLVM/Clang). BPF Verifier sprawdza: brak nieskończonych pętli, poprawne dostępy do pamięci, bounded execution time. JIT Compiler kompiluje BPF bytecode do natywnych instrukcji CPU (x86, ARM). Program jest wstrzykiwany jako hook do punktu w jądrze (kprobe, tracepoint, XDP hook, socket filter). Punkty attach: kprobes/kretprobes — dynamic tracing dowolnej funkcji kernel. Tracepoints — statyczne punkty trace w jądrze. XDP (eXpress Data Path) — packet processing przed alokacją skb, ultra-niskie latency. TC (Traffic Control) — network packet processing. Uprobe/uretprobe — user-space function tracing. LSM (Linux Security Module) — security hooks. BPF Maps — mechanizm komunikacji: BPF Maps to struktury danych współdzielone między programem eBPF a user-space. Typy map: hash map, array, ring buffer, LRU map, per-CPU map. Użycie: eBPF program zbiera dane (np. latency per syscall) → zapisuje do map → user-space aplikacja czyta z map i prezentuje. BPF CO-RE (Compile Once, Run Everywhere): modern eBPF dzięki BTF (BPF Type Format) może działać na różnych wersjach kernela bez rekompilacji.",
  },
  {
    question: "eBPF w networking — Cilium i XDP?",
    answer: "eBPF w networking: Cilium (CNCF Graduated): CNI plugin dla Kubernetes oparty na eBPF. Zastępuje iptables dla service networking (dramatycznie szybszy). Network policy enforcement przez eBPF (Layer 3/4/7). Mutual authentication (mTLS) bez sidecar proxy. Tetragon — runtime security i observability. Hubble — distributed observability dla Kubernetes. Używany przez Google GKE, Azure AKS, AWS EKS. XDP (eXpress Data Path): pakiety są przetwarzane przez eBPF zanim zostaną alokowane do socket buffer. Pozwala na line-rate packet processing. Use cases: DDoS mitigation (Facebook używa XDP do ochrony przed DDoS), high-performance load balancing (Cloudflare), network monitoring. Benchmark: XDP może przetwarzać 10-25 Mpps na zwykłym serwerze vs. 1-3 Mpps przez iptables. iptables replacement: Linux networking historycznie opierało się na iptables. eBPF/Cilium zastępuje iptables: szybsze (O(1) vs. O(n)), lepszy observability, L7-aware. TC (Traffic Control) eBPF: packet shaping, QoS, bandwidth management przez eBPF programy attach'owane do network interfaces. Socket programs: BPF_PROG_TYPE_SOCK_OPS do optymalizacji TCP stack (Cloudflare używa do redukcji latency).",
  },
  {
    question: "eBPF w observability — Pixie, Tetragon, Parca?",
    answer: "eBPF w Observability: Pixie (New Relic, CNCF Sandbox): auto-instrumentation bez kodu — zbiera HTTP/gRPC/MySQL/Redis requests przez eBPF upprobes. Nie wymaga zmian w aplikacji, nie wymaga sidecar. Low overhead (1-5% CPU). Live debugging w produkcji przez Pixie Live UI. Parca / Pyroscope: continuous profiling przez eBPF. Zbiera CPU flame graphs bez overhead profilerów opartych na sampling (np. perf, async-profiler). Zawsze włączony w produkcji. Grafana Pyroscope — hosted continuous profiling. Bpftrace: high-level tracing language dla eBPF. Jednolinijkowe programy do analizy systemu: bpftrace -e 'kprobe:do_sys_open { printf(\"%s\\n\", str(arg1)); }' (pokaż wszystkie otwierane pliki). BCC (BPF Compiler Collection): Python/C biblioteka do pisania eBPF programów. Setki gotowych narzędzi (execsnoop, opensnoop, tcpconnect). Autorzy: Brendan Gregg (Netflix, teraz Intel). libbpf: nowoczesna C library do eBPF (preferowana nad BCC dla produkcji). Falco (CNCF): security monitoring przez eBPF (i inne mechanizmy). Definiujesz rules dla syscall patterns. Alerty gdy container wykonuje podejrzane syscalls. Tetragon (Cilium): eBPF-based security enforcement + observability. Policy enforcement na poziomie kernel (kill process bez wyjścia do user-space).",
  },
  {
    question: "Jak zacząć z eBPF — learning path i zasoby?",
    answer: "Learning Path eBPF: Podstawy Linux: zrozumienie jak działa kernel (system calls, VFS, network stack). Niezbędne ale nie musisz być ekspertem. Krok 1 — Zrozum koncepty: przeczytaj 'What is eBPF?' na ebpf.io. Obejrzyj prezentację Brendan Gregg 'eBPF Superpowers'. Krok 2 — Zacznij od bpftrace (najłatwiejszy): bpftrace jest jak awk dla kernel events. Eksperymentuj z gotowymi one-linery. Krok 3 — BCC tools: zainstaluj bcc-tools, eksploruj opensnoop, execsnoop, tcpretrans. Zrozum jak są zbudowane. Krok 4 — libbpf + C: napisz swój pierwszy eBPF program w C z libbpf. Skeleton based development (bpftool gen skeleton). Krok 5 — Rust eBPF (aya): nowoczesna alternatywa — pisz eBPF w Rust z type-safety. Krok 6 — Production tools: wdróż Cilium w Kubernetes. Użyj Pixie do obserwacji aplikacji. Zasoby: ebpf.io — oficjalna strona. 'Learning eBPF' by Liz Rice (O'Reilly, 2023). isovalent.com/labs — bezpłatne labs eBPF. cilium.io/learn — tutoriale. Brendan Gregg blog i BPF Performance Tools (książka). Wymagania: Linux kernel 4.4+ (podstawowe eBPF), kernel 5.x+ dla zaawansowanych features. Nie Windows (eBPF for Windows istnieje ale jest limitowane).",
  },
];

const ebpfUseCases = [
  { obszar: "Networking", przykłady: "Cilium CNI, XDP load balancing, DDoS mitigation, packet filtering", narzędzia: "Cilium, Katran (FB)" },
  { obszar: "Observability", przykłady: "Auto-instrumentation HTTP/gRPC, tracing syscalls, profiling", narzędzia: "Pixie, Parca, bpftrace, BCC" },
  { obszar: "Security", przykłady: "Runtime security monitoring, syscall filtering, intrusion detection", narzędzia: "Falco, Tetragon, Sysdig" },
  { obszar: "Performance", przykłady: "CPU flame graphs, latency analysis, TCP optimization", narzędzia: "Pyroscope, perf + eBPF, bpftrace" },
  { obszar: "Load Balancing", przykłady: "L4 LB bez iptables, XDP-based forwarding, Maglev hashing", narzędzia: "Cilium LB, Cloudflare" },
  { obszar: "Service Mesh", przykłady: "Sidecar-less service mesh, mTLS bez proxy", narzędzia: "Cilium Mesh, Ambient Mesh (Istio)" },
];

const ebpfTools = [
  { narzędzie: "Cilium", cel: "Kubernetes networking + security", poziom: "Production-grade" },
  { narzędzie: "Pixie", cel: "Auto-instrumentation observability", poziom: "Production-grade" },
  { narzędzie: "Falco", cel: "Runtime security monitoring", poziom: "Production-grade" },
  { narzędzie: "bpftrace", cel: "Ad-hoc kernel tracing (one-liners)", poziom: "Debugging/Analysis" },
  { narzędzie: "BCC Tools", cel: "Pre-built analysis tools (execsnoop, etc.)", poziom: "Debugging/Analysis" },
  { narzędzie: "Pyroscope", cel: "Continuous CPU profiling", poziom: "Production-grade" },
];

export default function BlogEbpfCoTo() {
  return (
    <Layout>
      <SEOHead
        title="eBPF | Fotz Studio"
        description="eBPF: co to jest, architektura (BPF Maps, XDP, kprobes), zastosowania (networking, observability, security), Cilium, Pixie, Falco i jak zacząć."
        canonicalUrl="https://fotz.pl/blog/ebpf-co-to-jest-jak-uzywac-kubernetes-observability"

        keywords="eBPF co to jest, eBPF jak działa, eBPF tutorial, eBPF przykład, czym jest eBPF, eBPF dokumentacja, eBPF przewodnik"

        canonical="https://fotz.pl/blog/ebpf-co-to-jest-jak-uzywac-kubernetes-observability"
      />
      <ArticleSchema
        title="eBPF — co to jest i jak używać w Kubernetes i observability?"
        description="eBPF: architektura (verifier, JIT, maps), 6 obszarów zastosowań, Cilium/Pixie/Falco/bpftrace, XDP networking i learning path."
        url="https://fotz.pl/blog/ebpf-co-to-jest-jak-uzywac-kubernetes-observability"
        datePublished="2024-03-31"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "eBPF", url: "https://fotz.pl/blog/ebpf-co-to-jest-jak-uzywac-kubernetes-observability" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "eBPF", href: "/blog/ebpf-co-to-jest-jak-uzywac-kubernetes-observability" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-amber-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Linux / Cloud Native
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              eBPF
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              JavaScript dał programistom dostęp do przeglądarki.
              eBPF daje programistom dostęp do jądra Linux — bezpiecznie,
              bez modyfikowania kernel source i bez rebootu.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Twórca trendu", value: "Linux Kernel" },
                { label: "Popularny tool", value: "Cilium (CNCF)" },
                { label: "Use cases", value: "6 obszarów" },
                { label: "Performance", value: "10-25 Mpps (XDP)" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-amber-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 obszarów zastosowań eBPF</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              eBPF rewolucjonizuje każdy obszar gdzie tradycyjne podejście
              wymagało kernel modules lub user-space workarounds.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {ebpfUseCases.map((u) => (
              <FadeInView key={u.obszar}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{u.obszar}</h3>
                  <p className="text-gray-700 text-sm mb-2">{u.przykłady}</p>
                  <p className="text-xs text-amber-700 font-semibold">Narzędzia: {u.narzędzia}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kluczowe narzędzia eBPF</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Ekosystem eBPF obejmuje zarówno production-grade narzędzia
              jak i narzędzia do ad-hoc analizy systemów.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {ebpfTools.map((t) => (
              <FadeInView key={t.narzędzie}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <h3 className="font-bold text-gray-900">{t.narzędzie}</h3>
                    <p className="text-gray-700 text-sm">{t.cel}</p>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        t.poziom === "Production-grade" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                      }`}>{t.poziom}</span>
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

      <RelatedArticles currentArticleId="ebpf-co-to-jest-jak-uzywac-kubernetes-observability" />
      <ContactSection />
    </Layout>
  );
}
