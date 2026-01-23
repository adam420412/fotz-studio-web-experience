import { useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";
import { 
  Calculator, TrendingUp, DollarSign, Target, 
  ArrowRight, Info, BarChart3, Rocket
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IndustryData {
  name: string;
  avgCPC: number; // średni koszt kliknięcia
  conversionRate: number; // średni współczynnik konwersji
  avgOrderValue: number; // średnia wartość zamówienia
}

const industries: IndustryData[] = [
  { name: "E-commerce / Sklep online", avgCPC: 1.5, conversionRate: 2.5, avgOrderValue: 250 },
  { name: "Usługi B2B", avgCPC: 4.5, conversionRate: 3.0, avgOrderValue: 2000 },
  { name: "Gastronomia", avgCPC: 1.2, conversionRate: 4.0, avgOrderValue: 80 },
  { name: "Nieruchomości", avgCPC: 3.5, conversionRate: 1.5, avgOrderValue: 5000 },
  { name: "Beauty & Wellness", avgCPC: 1.8, conversionRate: 3.5, avgOrderValue: 150 },
  { name: "Medycyna / Zdrowie", avgCPC: 3.0, conversionRate: 2.0, avgOrderValue: 500 },
  { name: "Automotive", avgCPC: 2.5, conversionRate: 1.8, avgOrderValue: 1500 },
  { name: "Edukacja / Kursy", avgCPC: 2.0, conversionRate: 2.5, avgOrderValue: 300 },
  { name: "IT / SaaS", avgCPC: 5.0, conversionRate: 2.0, avgOrderValue: 800 },
  { name: "Produkcja / Przemysł", avgCPC: 4.0, conversionRate: 1.5, avgOrderValue: 3000 },
];

const KalkulatorROI = () => {
  const [budget, setBudget] = useState(5000);
  const [selectedIndustry, setSelectedIndustry] = useState<number>(0);
  const [agencyFee] = useState(20); // % prowizji agencji

  const industry = industries[selectedIndustry];
  
  // Obliczenia
  const adBudget = budget * (1 - agencyFee / 100); // budżet reklamowy po odjęciu prowizji
  const clicks = Math.round(adBudget / industry.avgCPC);
  const conversions = Math.round(clicks * (industry.conversionRate / 100));
  const revenue = conversions * industry.avgOrderValue;
  const profit = revenue - budget;
  const roi = budget > 0 ? ((revenue - budget) / budget * 100) : 0;
  const roas = budget > 0 ? (revenue / budget) : 0;

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('pl-PL').format(Math.round(num));
  };

  return (
    <>
      <SEOHead
        title="Kalkulator ROI Reklam - Oblicz zwrot z inwestycji | Fotz Studio"
        description="Oblicz szacowany zwrot z inwestycji w kampanie reklamowe Google Ads i Facebook Ads. Interaktywny kalkulator ROI dla Twojego biznesu."
        canonical="https://fotz.pl/kalkulator-roi"
      />
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-6">
                <Calculator className="w-4 h-4" />
                <span className="text-sm font-medium">Interaktywny kalkulator</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Kalkulator ROI
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Kampanii Reklamowych</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Oblicz szacowany zwrot z inwestycji w kampanie Google Ads i Facebook Ads. 
                Dostosuj budżet i branżę, aby zobaczyć potencjalne wyniki.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Inputs */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card border border-border rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  Parametry kampanii
                </h2>

                {/* Budget Slider */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-semibold flex items-center gap-2">
                      Miesięczny budżet
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Całkowity budżet miesięczny obejmujący koszt reklam i obsługi agencji.</p>
                        </TooltipContent>
                      </Tooltip>
                    </label>
                    <span className="text-2xl font-bold text-primary">
                      {formatNumber(budget)} zł
                    </span>
                  </div>
                  <Slider
                    value={[budget]}
                    onValueChange={(value) => setBudget(value[0])}
                    min={1000}
                    max={50000}
                    step={500}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1 000 zł</span>
                    <span>50 000 zł</span>
                  </div>
                </div>

                {/* Industry Selection */}
                <div className="mb-8">
                  <label className="font-semibold block mb-4">Wybierz branżę</label>
                  <div className="grid grid-cols-2 gap-2">
                    {industries.map((ind, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedIndustry(index)}
                        className={`p-3 rounded-xl text-sm font-medium transition-all text-left ${
                          selectedIndustry === index
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted hover:bg-muted/80"
                        }`}
                      >
                        {ind.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Industry Stats */}
                <div className="bg-muted/50 rounded-2xl p-4">
                  <h3 className="font-semibold mb-3 text-sm text-muted-foreground">Średnie wskaźniki dla branży:</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">{industry.avgCPC} zł</div>
                      <div className="text-xs text-muted-foreground">Koszt kliknięcia</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">{industry.conversionRate}%</div>
                      <div className="text-xs text-muted-foreground">Konwersja</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">{formatNumber(industry.avgOrderValue)} zł</div>
                      <div className="text-xs text-muted-foreground">Śr. wartość</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  Szacowane wyniki
                </h2>

                {/* Main Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-background/80 backdrop-blur rounded-2xl p-4 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {formatNumber(clicks)}
                    </div>
                    <div className="text-sm text-muted-foreground">Kliknięć</div>
                  </div>
                  <div className="bg-background/80 backdrop-blur rounded-2xl p-4 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {formatNumber(conversions)}
                    </div>
                    <div className="text-sm text-muted-foreground">Konwersji</div>
                  </div>
                </div>

                {/* Revenue */}
                <div className="bg-background/80 backdrop-blur rounded-2xl p-6 mb-6 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {formatNumber(revenue)} zł
                  </div>
                  <div className="text-muted-foreground">Szacowany przychód</div>
                </div>

                {/* ROI & ROAS */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`rounded-2xl p-4 text-center ${roi >= 0 ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                    <div className={`text-2xl font-bold mb-1 ${roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {roi >= 0 ? '+' : ''}{roi.toFixed(0)}%
                    </div>
                    <div className="text-sm text-muted-foreground">ROI</div>
                  </div>
                  <div className="bg-background/80 backdrop-blur rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {roas.toFixed(1)}x
                    </div>
                    <div className="text-sm text-muted-foreground">ROAS</div>
                  </div>
                </div>

                {/* Profit */}
                <div className={`rounded-2xl p-4 text-center mb-6 ${profit >= 0 ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
                  <DollarSign className={`w-6 h-6 mx-auto mb-2 ${profit >= 0 ? 'text-green-500' : 'text-red-500'}`} />
                  <div className={`text-2xl font-bold ${profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {profit >= 0 ? '+' : ''}{formatNumber(profit)} zł
                  </div>
                  <div className="text-sm text-muted-foreground">Szacowany zysk netto</div>
                </div>

                {/* CTA */}
                <Button asChild size="lg" className="w-full gap-2">
                  <Link to="/kontakt">
                    Uzyskaj dokładniejszą wycenę
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 p-6 bg-muted/30 rounded-2xl text-center"
            >
              <Info className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Powyższe obliczenia są szacunkowe i oparte na średnich branżowych. 
                Rzeczywiste wyniki zależą od jakości strony, konkurencji, sezonu i wielu innych czynników. 
                Skontaktuj się z nami, aby uzyskać dokładniejszą prognozę dla Twojego biznesu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-2 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Chcesz poznać realne wyniki?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Umów się na bezpłatną konsultację, a przeanalizujemy Twój biznes 
                i przygotujemy dokładniejszą prognozę ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/kontakt">
                    <Target className="w-4 h-4" />
                    Bezpłatna konsultacja
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/kampanie-reklamowe">
                    Zobacz ofertę kampanii
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default KalkulatorROI;
