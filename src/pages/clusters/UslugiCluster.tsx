import { SEOHead } from "@/components/seo/SEOHead";

export default function UslugiCluster() {
  return (
    <div>
      <SEOHead
        title="Usługi | Fotz Studio"
        description="Pełny zakres usług marketingowych: strony internetowe, branding, fotografia, produkcja video, projekty graficzne, e-commerce i więcej."
        canonical="/uslugi"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Nasze Usługi</h1>
          <p className="text-xl text-slate-300 mb-12">
            Kompleksowe rozwiązania marketingowe dla Twojej firmy
          </p>

          {/* Placeholder for service cards - will be updated in Phase 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Strony Internetowe</h3>
              <p>Nowoczesne strony dla różnych miast</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Branding</h3>
              <p>Identyfikacja wizualna i projekty graficzne</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Fotografia & Wideo</h3>
              <p>Produkcja filmowa, fotografia z drona</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">E-commerce</h3>
              <p>Sklepy internetowe i systemy sprzedażowe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
