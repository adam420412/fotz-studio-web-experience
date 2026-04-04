import { SEOHead } from "@/components/seo/SEOHead";

export default function SocialMediaCluster() {
  return (
    <div>
      <SEOHead
        title="Social Media Marketing | Fotz Studio"
        description="Kompleksowa obsługa social media. Zarządzanie profilami, tworzenie treści, strategie mediów społecznościowych. Zwiększ zaangażowanie i zasięg."
        canonical="https://fotz.pl/social-media"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Social Media Marketing</h1>
          <p className="text-xl text-slate-300 mb-12">
            Zwiększ zasięg i zaangażowanie na mediach społecznościowych
          </p>

          {/* Placeholder for service cards - will be updated in Phase 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Obsługa Social Media</h3>
              <p>Zarządzanie Twoimi profilami</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Marketing Influencer</h3>
              <p>Współpraca z influencerami w Twojej branży</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Content Creation</h3>
              <p>Treści dostosowane do każdej platformy</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Strategie Social Media</h3>
              <p>Plan działań na rok</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
