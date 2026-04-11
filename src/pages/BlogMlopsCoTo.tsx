import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest MLOps?",
    answer: "MLOps (Machine Learning Operations) to zbiór praktyk, narzędzi i kultur łączących Machine Learning i DevOps, mający na celu skrócenie czasu od eksperymentu w Jupyter Notebook do modelu działającego na produkcji i utrzymywanego w czasie. Analogicznie do DevOps (który rozwiązał problem 'działa na moim laptopie' dla software), MLOps rozwiązuje problem 'działa w moim notebooku' dla modeli ML. Kluczowe wyzwania bez MLOps: modele trenowane raz nigdy nie są aktualizowane (model drift). Brak reproducibility — nie wiadomo jak model był trenowany. Brak monitoring — nie wiemy kiedy model zaczął działać źle. Organizacja: MLOps żyje na przecięciu Data Science (buduje modele), ML Engineering (skaluje) i DevOps (infrastruktura, CI/CD).",
  },
  {
    question: "Jaki jest cykl życia modelu ML w MLOps?",
    answer: "MLOps ML lifecycle: Data Collection & Validation — zbieranie i walidacja danych treningowych. Jakość danych = jakość modelu. Feature Engineering — tworzenie cech (features) z surowych danych. Feature Store przechowuje gotowe cechy do re-użycia. Model Training — trening z eksperyment tracking (MLflow, W&B). Śledzenie hyperparametrów, metryk, artefaktów. Model Evaluation — weryfikacja na test set. Fairness check, bias analysis. Model Deployment — deployment do produkcji (REST API, batch, streaming). Canary deployment, A/B testing modeli. Model Monitoring — monitorowanie data drift, model drift, prediction quality. Alert gdy performance spada. Retraining — automatyczny lub ręczny retraining gdy model się starzeje. Pełne koło. Kluczowe: bez monitoring i retraining model ML jest jednorazowym artefaktem — nie żywym systemem.",
  },
  {
    question: "Jakie narzędzia MLOps są najpopularniejsze?",
    answer: "MLOps tooling: Eksperyment Tracking — MLflow (open-source, najpopularniejszy), Weights & Biases (W&B), Neptune.ai, Comet ML. Śledzenie runs, metryki, modele. Feature Store — Feast (open-source), Tecton, Hopsworks. Centralne repo cech dla treningu i inferencji. Model Registry — MLflow Model Registry, W&B Registry, Hugging Face Hub. Versioning i lifecycle modeli. Model Serving (Deployment) — BentoML, Seldon Core, KServe (Kubernetes), Ray Serve, TensorFlow Serving, Triton Inference Server. Pipeline Orchestration — Kubeflow Pipelines, Metaflow, Apache Airflow, Prefect, ZenML. Data & Model Monitoring — Evidently AI, WhyLabs, Arize, Fiddler. MLOps Platforms (all-in-one) — Vertex AI (Google), SageMaker (AWS), Azure ML, Databricks MLflow. Startup recommendation: zacznij od MLflow + FastAPI/BentoML + Evidently. Prosto i open-source.",
  },
  {
    question: "Co to jest model drift i jak go wykrywać?",
    answer: "Model drift to stopniowe pogarszanie się jakości modelu ML w czasie. Typy: Data Drift (Covariate Shift) — rozkład danych wejściowych (features) zmienił się od czasu treningu. Model widzi dane inne niż te na których był trenowany. Concept Drift — zmiana zależności między features a target. Np. model credit scoring trenowany przed COVID-em nie rozumie nowej rzeczywistości. Prediction Drift — zmiana rozkładu predykcji modelu (np. więcej extreme predictions). Jak wykrywać: monitoruj rozkład statystyczny danych wejściowych per feature (histogramy, KS-test, PSI — Population Stability Index). Monitoruj distribution predykcji. Śledź business metrics (accuracy jeśli masz ground truth). Narzędzia: Evidently AI, WhyLabs, Arize, Great Expectations. Alert thresholds: gdy PSI powyżej 0.2 dla kluczowej cechy — automatyczny alert.",
  },
  {
    question: "Jak zorganizować team MLOps?",
    answer: "Organizacja MLOps team: Poziom 0 (Manual) — data scientist trenuje model lokalnie, deployment ręczny. Niereproducible, powolne. Poziom 1 (ML Pipeline Automation) — automatyczny trening i deployment przez pipeline. Eksperyment tracking. Podstawa produkcyjnego ML. Poziom 2 (CI/CD for ML) — automatyczne testy modeli, continuous training z nowymi danymi, A/B testing nowych modeli. Role w team: ML Engineer — buduje pipeline'y, deployment, infrastrukturę. Data Scientist — eksperymenty, feature engineering, model selection. Platform Engineer / DevOps — klaster Kubernetes, storage, monitoring. ML Product Manager — definiuje przypadki użycia, metryki sukcesu, priorytetyzuje. Małe startupy: Data Scientist + ML Engineer w jednej osobie = 'Full Stack ML Engineer'. Na 50+ pracownikach warto dedykować MLOps Engineer.",
  },
];

const mlopsStack = [
  { warstwa: "Data Collection & Storage", narzędzia: "Airflow, Kafka, Snowflake, Delta Lake, S3/GCS", opis: "Zbieranie i przechowywanie danych treningowych w skali", kolor: "blue" },
  { warstwa: "Experiment Tracking", narzędzia: "MLflow, Weights & Biases, Neptune.ai, Comet ML", opis: "Śledzenie eksperymentów, hyperparametrów, metryk i artefaktów", kolor: "green" },
  { warstwa: "Feature Store", narzędzia: "Feast, Tecton, Hopsworks, Vertex AI Feature Store", opis: "Centralne repozytorium cech — wspólne dla treningu i inferencji", kolor: "purple" },
  { warstwa: "Model Training & Orchestration", narzędzia: "Kubeflow, ZenML, Metaflow, SageMaker Pipelines", opis: "Automatyzacja pipeline'ów treningowych, distributed training", kolor: "orange" },
  { warstwa: "Model Registry", narzędzia: "MLflow Registry, W&B Registry, Hugging Face Hub", opis: "Versioning modeli, lifecycle management (Staging → Production)", kolor: "teal" },
  { warstwa: "Model Serving", narzędzia: "BentoML, Ray Serve, KServe, TensorFlow Serving, Triton", opis: "Deployment modeli jako REST API, batch lub streaming", kolor: "red" },
  { warstwa: "Monitoring & Observability", narzędzia: "Evidently AI, WhyLabs, Arize, Grafana + Prometheus", opis: "Data drift, model drift, latency, throughput, business metrics", kolor: "indigo" },
];

const mlopsMaturity = [
  { poziom: "Level 0 — Manual", opis: "Ręczny trening i deployment. Data scientist deploy'uje model jako skrypt. Brak automatyzacji, versioning, monitoring.", sygnał: "Modele 'żyją' na laptopach DS. Reprodukcja niemożliwa." },
  { poziom: "Level 1 — ML Pipeline Automation", opis: "Zautomatyzowany pipeline treningowy. Eksperyment tracking. Automatyczny deployment po zatwierdzeniu.", sygnał: "Masz MLflow lub W&B. Modele są wersjonowane i deployo wane przez CI/CD." },
  { poziom: "Level 2 — CI/CD for ML", opis: "Continuous training z nowymi danymi. Automatyczne testy modeli. A/B testing. Data drift monitoring z alertami.", sygnał: "Model sam się retrainuje gdy wykryje drift. Pełna pętla feedback." },
];

export default function BlogMlopsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="MLOps — co to jest i jak wdrożyć Machine Learning Operations? | Fotz.pl"
        description="MLOps: cykl życia modelu ML, tooling (MLflow, W&B, BentoML, Evidently), model drift, poziomy dojrzałości i jak zorganizować team MLOps w firmie."
        canonicalUrl="https://fotz.pl/blog/mlops-machine-learning-operations-co-to-jest"
      />
      <ArticleSchema
        title="MLOps — co to jest i jak wdrożyć Machine Learning Operations?"
        description="MLOps: ML lifecycle, tooling (MLflow, W&B, BentoML, Evidently AI), model drift detection, poziomy dojrzałości (0-2) i organizacja team MLOps w firmach SaaS."
        url="https://fotz.pl/blog/mlops-machine-learning-operations-co-to-jest"
        datePublished="2024-03-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "MLOps", url: "https://fotz.pl/blog/mlops-machine-learning-operations-co-to-jest" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "MLOps", href: "/blog/mlops-machine-learning-operations-co-to-jest" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              AI / ML Engineering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MLOps
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Zbudować model to 10% pracy. Wdrożyć, monitorować i utrzymywać
              przez lata to 90%. MLOps to praktyki które zamieniają jednorazowy
              eksperyment w żywy system produkcyjny.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Warstwy MLOps stack", value: "7" },
                { label: "Tracking standard", value: "MLflow" },
                { label: "Monitoring narzędzie", value: "Evidently AI" },
                { label: "Poziomy dojrzałości", value: "0 → 2" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-orange-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">MLOps stack — 7 warstw</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Kompletny MLOps stack to 7 warstw od danych do monitorowania
              modeli w produkcji.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {mlopsStack.map((w, i) => (
              <FadeInView key={w.warstwa}>
                <div className={`rounded-xl border-2 p-4 ${
                  w.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  w.kolor === "green" ? "border-green-200 bg-green-50" :
                  w.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  w.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  w.kolor === "teal" ? "border-teal-200 bg-teal-50" :
                  w.kolor === "red" ? "border-red-200 bg-red-50" :
                  "border-indigo-200 bg-indigo-50"
                }`}>
                  <div className="flex gap-4">
                    <div className="bg-orange-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-xs">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">{w.warstwa}</h3>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <p className="text-gray-600 text-xs">{w.opis}</p>
                        <div className="text-xs"><span className="font-semibold text-gray-600">Narzędzia: </span><span className="text-gray-500">{w.narzędzia}</span></div>
                      </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Poziomy dojrzałości MLOps</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Większość firm startuje na Level 0. Cel to osiągnięcie Level 1 który
              pozwala na powtarzalne, skalowalne wdrożenia modeli.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {mlopsMaturity.map((m) => (
              <FadeInView key={m.poziom}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{m.poziom}</h3>
                  <p className="text-gray-700 text-sm mb-2">{m.opis}</p>
                  <div className="text-sm bg-gray-50 rounded p-2">
                    <span className="font-semibold text-gray-600">Sygnał że tu jesteś: </span>
                    <span className="text-gray-600">{m.sygnał}</span>
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
