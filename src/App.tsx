import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";

// Only load Index synchronously - it's the most common entry point
import Index from "./pages/Index";

// Lazy load all other pages for code splitting
const Uslugi = lazy(() => import("./pages/Uslugi"));
const Realizacje = lazy(() => import("./pages/Realizacje"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Konsultacja = lazy(() => import("./pages/Konsultacja"));
const ONas = lazy(() => import("./pages/ONas"));
const Blog = lazy(() => import("./pages/Blog"));
const Poradniki = lazy(() => import("./pages/Poradniki"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Case Studies - grouped
const CaseStudyEnea = lazy(() => import("./pages/CaseStudyEnea"));
const CaseStudyRPPG = lazy(() => import("./pages/CaseStudyRPPG"));
const CaseStudyFabrykaVirali = lazy(() => import("./pages/CaseStudyFabrykaVirali"));
const CaseStudyFriendlyGas = lazy(() => import("./pages/CaseStudyFriendlyGas"));
const CaseStudyFPS = lazy(() => import("./pages/CaseStudyFPS"));
const CaseStudyGierki = lazy(() => import("./pages/CaseStudyGierki"));
const CaseStudyPrzedszkole = lazy(() => import("./pages/CaseStudyPrzedszkole"));
const CaseStudyVerthe = lazy(() => import("./pages/CaseStudyVerthe"));
const CaseStudyVictoryCars = lazy(() => import("./pages/CaseStudyVictoryCars"));
const CaseStudyKlagem = lazy(() => import("./pages/CaseStudyKlagem"));
const CaseStudyMechanica = lazy(() => import("./pages/CaseStudyMechanica"));
const CaseStudyCelsjusz = lazy(() => import("./pages/CaseStudyCelsjusz"));
const CaseStudySookar = lazy(() => import("./pages/CaseStudySookar"));
const CaseStudyGraf = lazy(() => import("./pages/CaseStudyGraf"));
const CaseStudyStagePlan = lazy(() => import("./pages/CaseStudyStagePlan"));
const CaseStudyCuteDumpling = lazy(() => import("./pages/CaseStudyCuteDumpling"));
const CaseStudyApartamenty = lazy(() => import("./pages/CaseStudyApartamenty"));
const CaseStudyLauvjah = lazy(() => import("./pages/CaseStudyLauvjah"));

// Blog posts - grouped
const BlogKosztStrony = lazy(() => import("./pages/BlogKosztStrony"));
const BlogTanieStrony = lazy(() => import("./pages/BlogTanieStrony"));
const BlogWordPressVsCustom = lazy(() => import("./pages/BlogWordPressVsCustom"));
const BlogAudytStrony = lazy(() => import("./pages/BlogAudytStrony"));
const BlogKampaniaReklamowa = lazy(() => import("./pages/BlogKampaniaReklamowa"));
const BlogAIMarketing = lazy(() => import("./pages/BlogAIMarketing"));
const BlogGoogleVsFacebook = lazy(() => import("./pages/BlogGoogleVsFacebook"));
const BlogTikTokBiznes = lazy(() => import("./pages/BlogTikTokBiznes"));
const BlogSEOLokalnePoznan = lazy(() => import("./pages/BlogSEOLokalnePoznan"));
const BlogEmailMarketing = lazy(() => import("./pages/BlogEmailMarketing"));
const BlogReelsVsTikTok = lazy(() => import("./pages/BlogReelsVsTikTok"));
const BlogLandingPage = lazy(() => import("./pages/BlogLandingPage"));
const BlogInfluencerMarketing = lazy(() => import("./pages/BlogInfluencerMarketing"));
const BlogBrandingStartupy = lazy(() => import("./pages/BlogBrandingStartupy"));
const BlogUXEcommerce = lazy(() => import("./pages/BlogUXEcommerce"));
const BlogSEOEcommerce = lazy(() => import("./pages/BlogSEOEcommerce"));
const BlogMarketingAutomation = lazy(() => import("./pages/BlogMarketingAutomation"));
const BlogPersonalBrandingLinkedIn = lazy(() => import("./pages/BlogPersonalBrandingLinkedIn"));
const BlogVideoMarketing = lazy(() => import("./pages/BlogVideoMarketing"));
const BlogRemarketing = lazy(() => import("./pages/BlogRemarketing"));
const BlogGoogleAnalytics4 = lazy(() => import("./pages/BlogGoogleAnalytics4"));
const BlogBudzetMarketingowy = lazy(() => import("./pages/BlogBudzetMarketingowy"));
const BlogB2BvsB2C = lazy(() => import("./pages/BlogB2BvsB2C"));
const BlogPsychologiaCen = lazy(() => import("./pages/BlogPsychologiaCen"));
const BlogCopywritingLanding = lazy(() => import("./pages/BlogCopywritingLanding"));
const BlogArticleDynamic = lazy(() => import("./pages/BlogArticleDynamic"));
const BlogSprzedazOnline = lazy(() => import("./pages/BlogSprzedazOnline"));
const BlogBriefMarketingowy = lazy(() => import("./pages/BlogBriefMarketingowy"));
const BlogPozycjonowanieStron = lazy(() => import("./pages/BlogPozycjonowanieStron"));
const BlogKosztGoogleAds = lazy(() => import("./pages/BlogKosztGoogleAds"));
const BlogJakWybracAgencje = lazy(() => import("./pages/BlogJakWybracAgencje"));
const BlogKonwersjeNaStronie = lazy(() => import("./pages/BlogKonwersjeNaStronie"));
const BlogSocialMediaStrategia = lazy(() => import("./pages/BlogSocialMediaStrategia"));
const BlogStronaDlaFirmy = lazy(() => import("./pages/BlogStronaDlaFirmy"));

// New blog posts (Wave 5 - content gaps)
const BlogIdentyfikacjaWizualna = lazy(() => import("./pages/BlogIdentyfikacjaWizualna"));
const BlogJakZaprojektowacLogo = lazy(() => import("./pages/BlogJakZaprojektowacLogo"));
const BlogGoogleAdsCennik = lazy(() => import("./pages/BlogGoogleAdsCennik"));

// Case Studies
const CaseStudyEcommerceCRO = lazy(() => import("./pages/CaseStudyEcommerceCRO"));
const CaseStudyLocalSEO = lazy(() => import("./pages/CaseStudyLocalSEO"));
const CaseStudyStronaWWW = lazy(() => import("./pages/CaseStudyStronaWWW"));

// DlaKogo pages
const DlaKogo = lazy(() => import("./pages/DlaKogo"));
const DlaKogoFirmyLokalne = lazy(() => import("./pages/DlaKogoFirmyLokalne"));
const DlaKogoEcommerce = lazy(() => import("./pages/DlaKogoEcommerce"));
const DlaKogoMarkiPremium = lazy(() => import("./pages/DlaKogoMarkiPremium"));
const DlaKogoInstytucje = lazy(() => import("./pages/DlaKogoInstytucje"));

// Branze/Industry pages
const MarketingMedyczny = lazy(() => import("./pages/branze/MarketingMedyczny"));
const MarketingGastronomia = lazy(() => import("./pages/branze/MarketingGastronomia"));
const MarketingBeauty = lazy(() => import("./pages/branze/MarketingBeauty"));
const MarketingNieruchomosci = lazy(() => import("./pages/branze/MarketingNieruchomosci"));
const MarketingAutomotive = lazy(() => import("./pages/branze/MarketingAutomotive"));
const MarketingEdukacja = lazy(() => import("./pages/branze/MarketingEdukacja"));
const MarketingPrawoFinanse = lazy(() => import("./pages/branze/MarketingPrawoFinanse"));
const MarketingEcommerceRetail = lazy(() => import("./pages/branze/MarketingEcommerceRetail"));
const MarketingIT = lazy(() => import("./pages/branze/MarketingIT"));
const MarketingProdukcja = lazy(() => import("./pages/branze/MarketingProdukcja"));
const MarketingNGO = lazy(() => import("./pages/branze/MarketingNGO"));
const MarketingTurystyka = lazy(() => import("./pages/branze/MarketingTurystyka"));

// Akademia
const AkademiaLanding = lazy(() => import("./pages/AkademiaLanding"));
const AkademiaAuth = lazy(() => import("./pages/AkademiaAuth"));
const Akademia = lazy(() => import("./pages/Akademia"));
const AkademiaAdmin = lazy(() => import("./pages/AkademiaAdmin"));

// Wave 4: SEO cluster expansion
const SEOLinkBuilding = lazy(() => import("./pages/SEOLinkBuilding"));
const SEOCopywriting = lazy(() => import("./pages/SEOCopywriting"));
const SEOCoreWebVitals = lazy(() => import("./pages/SEOCoreWebVitals"));

// Wave 4: AI visibility pages
const AIMarketing = lazy(() => import("./pages/AIMarketing"));
const AISEO = lazy(() => import("./pages/AISEO"));

// Wave 4: Local SEO - city positioning pages
const SEOPozycjonowanieWarszawa = lazy(() => import("./pages/SEOPozycjonowanieWarszawa"));
const SEOPozycjonowanieKrakow = lazy(() => import("./pages/SEOPozycjonowanieKrakow"));
const SEOPozycjonowanieWroclaw = lazy(() => import("./pages/SEOPozycjonowanieWroclaw"));
const SEOPozycjonowanieGdansk = lazy(() => import("./pages/SEOPozycjonowanieGdansk"));
const SEOPozycjonowanieKatowice = lazy(() => import("./pages/SEOPozycjonowanieKatowice"));
const SEOPozycjonowanieLodz = lazy(() => import("./pages/SEOPozycjonowanieLodz"));

// Local SEO pages
const AgencjaMarketingowaPoznan = lazy(() => import("./pages/AgencjaMarketingowaPoznan"));
const AgencjaMarketinguInternetowego = lazy(() => import("./pages/AgencjaMarketinguInternetowego"));
const AgencjaReklamowaPoznan = lazy(() => import("./pages/AgencjaReklamowaPoznan"));

// City pages - all lazy loaded
const StronyInternetowePoznan = lazy(() => import("./pages/StronyInternetowePoznan"));
const StronyInternetoweWarszawa = lazy(() => import("./pages/StronyInternetoweWarszawa"));
const StronyInternetoweWroclaw = lazy(() => import("./pages/StronyInternetoweWroclaw"));
const StronyInternetoweKrakow = lazy(() => import("./pages/StronyInternetoweKrakow"));
const StronyInternetoweGdansk = lazy(() => import("./pages/StronyInternetoweGdansk"));
const StronyInternetoweGdynia = lazy(() => import("./pages/StronyInternetoweGdynia"));
const StronyInternetoweLodz = lazy(() => import("./pages/StronyInternetoweLodz"));
const StronyInternetoweSzczecin = lazy(() => import("./pages/StronyInternetoweSzczecin"));
const StronyInternetoweBydgoszcz = lazy(() => import("./pages/StronyInternetoweBydgoszcz"));
const StronyInternetoweKatowice = lazy(() => import("./pages/StronyInternetoweKatowice"));
const StronyInternetoweLublin = lazy(() => import("./pages/StronyInternetoweLublin"));
const StronyInternetoweKoszalin = lazy(() => import("./pages/StronyInternetoweKoszalin"));
const StronyInternetoweGliwice = lazy(() => import("./pages/StronyInternetoweGliwice"));
const StronyInternetoweRybnik = lazy(() => import("./pages/StronyInternetoweRybnik"));
const StronyInternetoweTychy = lazy(() => import("./pages/StronyInternetoweTychy"));
const StronyInternetoweKamionki = lazy(() => import("./pages/StronyInternetoweKamionki"));
const StronyInternetoweTorun = lazy(() => import("./pages/StronyInternetoweTorun"));
const StronyInternetoweRzeszow = lazy(() => import("./pages/StronyInternetoweRzeszow"));
const StronyInternetoweRadom = lazy(() => import("./pages/StronyInternetoweRadom"));
const StronyInternetoweOpole = lazy(() => import("./pages/StronyInternetoweOpole"));
const StronyInternetoweOlsztyn = lazy(() => import("./pages/StronyInternetoweOlsztyn"));
const StronyInternetoweKielce = lazy(() => import("./pages/StronyInternetoweKielce"));
const StronyInternetoweKonin = lazy(() => import("./pages/StronyInternetoweKonin"));
const StronyInternetoweTarnow = lazy(() => import("./pages/StronyInternetoweTarnow"));
const StronyInternetowePlock = lazy(() => import("./pages/StronyInternetowePlock"));
const StronyInternetoweSosnowiec = lazy(() => import("./pages/StronyInternetoweSosnowiec"));
const StronyInternetoweBialystok = lazy(() => import("./pages/StronyInternetoweBialystok"));
const StronyInternetoweCzestochowa = lazy(() => import("./pages/StronyInternetoweCzestochowa"));
const StronyInternetoweZielonaGora = lazy(() => import("./pages/StronyInternetoweZielonaGora"));
const StronyInternetoweElblag = lazy(() => import("./pages/StronyInternetoweElblag"));
const StronyInternetoweLegnica = lazy(() => import("./pages/StronyInternetoweLegnica"));
const StronyInternetoweKalisz = lazy(() => import("./pages/StronyInternetoweKalisz"));
const StronyInternetoweGorzow = lazy(() => import("./pages/StronyInternetoweGorzow"));
const StronyInternetowe = lazy(() => import("./pages/StronyInternetowe"));
const UslugiLandingPage = lazy(() => import("./pages/UslugiLandingPage"));

// Service pages
const SocialMediaPoznan = lazy(() => import("./pages/SocialMediaPoznan"));
const SocialMedia = lazy(() => import("./pages/SocialMedia"));
const FotografPoznan = lazy(() => import("./pages/FotografPoznan"));
const FotografiaZDrona = lazy(() => import("./pages/FotografiaZDrona"));
const PozycjonowanieStronPoznan = lazy(() => import("./pages/PozycjonowanieStronPoznan"));
const AgencjaSEOPoznan = lazy(() => import("./pages/AgencjaSEOPoznan"));
const SklepyInternetowePoznan = lazy(() => import("./pages/SklepyInternetowePoznan"));
const SklepyInternetoweWarszawa = lazy(() => import("./pages/SklepyInternetoweWarszawa"));
const SklepyInternetoweKrakow = lazy(() => import("./pages/SklepyInternetoweKrakow"));
const AgencjaMarketingowaWarszawa = lazy(() => import("./pages/AgencjaMarketingowaWarszawa"));
const AgencjaKreaTywnaPoznan = lazy(() => import("./pages/AgencjaKreaTywnaPoznan"));
const Pozycjonowanie = lazy(() => import("./pages/Pozycjonowanie"));
const PozycjonowanieGoogleMaps = lazy(() => import("./pages/PozycjonowanieGoogleMaps"));
const ProdukcjaFilmowPoznan = lazy(() => import("./pages/ProdukcjaFilmowPoznan"));
const SpotyReklamowe = lazy(() => import("./pages/SpotyReklamowe"));
const Wizualizacje3D = lazy(() => import("./pages/Wizualizacje3D"));
const KompleksowaObsluga = lazy(() => import("./pages/KompleksowaObsluga"));
const StudioPodcastowe = lazy(() => import("./pages/StudioPodcastowe"));

// Ads pages
const FacebookAds = lazy(() => import("./pages/FacebookAds"));
const GoogleAds = lazy(() => import("./pages/GoogleAds"));
const KampanieReklamowe = lazy(() => import("./pages/KampanieReklamowe"));
const KampanieReklamowePoznan = lazy(() => import("./pages/KampanieReklamowePoznan"));
const TikTokAds = lazy(() => import("./pages/TikTokAds"));
const LinkedInAds = lazy(() => import("./pages/LinkedInAds"));
const YouTubeAds = lazy(() => import("./pages/YouTubeAds"));
const InstagramAds = lazy(() => import("./pages/InstagramAds"));
const FacebookInstagramAds = lazy(() => import("./pages/FacebookInstagramAds"));

// Wave 5: New service pages (logo, pozycjonowanie, fotografia, video)
const LogoIBranding = lazy(() => import("./pages/LogoIBranding"));
const UslugiPozycjonowanie = lazy(() => import("./pages/UslugiPozycjonowanie"));
const PozycjonowanieWarszawa = lazy(() => import("./pages/PozycjonowanieWarszawa"));
const PozycjonowanieKrakow = lazy(() => import("./pages/PozycjonowanieKrakow"));
const PozycjonowanieWroclaw = lazy(() => import("./pages/PozycjonowanieWroclaw"));
const PozycjonowaniePoznan = lazy(() => import("./pages/PozycjonowaniePoznan"));
const PozycjonowanieGdansk = lazy(() => import("./pages/PozycjonowanieGdansk"));
const PozycjonowanieLodz = lazy(() => import("./pages/PozycjonowanieLodz"));
const FotografiaProduktowa = lazy(() => import("./pages/FotografiaProduktowa"));
const VideoMarketing = lazy(() => import("./pages/VideoMarketing"));

// Wave 6: Agencja city pages
const AgencjaMarketingowaKatowice = lazy(() => import("./pages/AgencjaMarketingowaKatowice"));
const AgencjaMarketingowaWroclaw = lazy(() => import("./pages/AgencjaMarketingowaWroclaw"));

// Wave 7: SEO city pages + new service/blog pages
const PozycjonowanieSzczecin = lazy(() => import("./pages/PozycjonowanieSzczecin"));
const PozycjonowanieBialystok = lazy(() => import("./pages/PozycjonowanieBialystok"));
const UslugiIdentyfikacjaWizualna = lazy(() => import("./pages/UslugiIdentyfikacjaWizualna"));
const BlogCoToJestSeo = lazy(() => import("./pages/BlogCoToJestSeo"));

// Wave 8: New city pages + pricing
const CennikStronInternetowych = lazy(() => import("./pages/CennikStronInternetowych"));
const PozycjonowanieLublin = lazy(() => import("./pages/PozycjonowanieLublin"));
const PozycjonowanieRzeszow = lazy(() => import("./pages/PozycjonowanieRzeszow"));
const PozycjonowanieKatowice = lazy(() => import("./pages/PozycjonowanieKatowice"));
const PozycjonowanieCzestochowa = lazy(() => import("./pages/PozycjonowanieCzestochowa"));
const AgencjaMarketingowaLodz = lazy(() => import("./pages/AgencjaMarketingowaLodz"));
const AgencjaMarketingowaGdansk = lazy(() => import("./pages/AgencjaMarketingowaGdansk"));
const AgencjaMarketingowaKrakow = lazy(() => import("./pages/AgencjaMarketingowaKrakow"));
const AgencjaMarketingowaLublin = lazy(() => import("./pages/AgencjaMarketingowaLublin"));
const BlogIleKosztujePozycjonowanie = lazy(() => import("./pages/BlogIleKosztujePozycjonowanie"));
const BlogSocialMediaDlaFirm = lazy(() => import("./pages/BlogSocialMediaDlaFirm"));
const BlogJakWybracAgencjeSEO = lazy(() => import("./pages/BlogJakWybracAgencjeSEO"));
const PozycjonowanieTorun = lazy(() => import("./pages/PozycjonowanieTorun"));
const PozycjonowanieBydgoszcz = lazy(() => import("./pages/PozycjonowanieBydgoszcz"));
const PozycjonowanieRadom = lazy(() => import("./pages/PozycjonowanieRadom"));
const PozycjonowanieKielce = lazy(() => import("./pages/PozycjonowanieKielce"));
const AgencjaMarketingowaRzeszow = lazy(() => import("./pages/AgencjaMarketingowaRzeszow"));
const AgencjaMarketingowaBydgoszcz = lazy(() => import("./pages/AgencjaMarketingowaBydgoszcz"));
const AgencjaMarketingowaTorun = lazy(() => import("./pages/AgencjaMarketingowaTorun"));
const AgencjaMarketingowaSzczecin = lazy(() => import("./pages/AgencjaMarketingowaSzczecin"));
const CennikPozycjonowania = lazy(() => import("./pages/CennikPozycjonowania"));
const BlogPozycjonowanieLokalnePoradnik = lazy(() => import("./pages/BlogPozycjonowanieLokalnePoradnik"));
const BlogContentMarketing = lazy(() => import("./pages/BlogContentMarketing"));

// Wave 9: Strony internetowe cluster + city pages
const TworzenieStronInternetowych = lazy(() => import("./pages/TworzenieStronInternetowych"));
const ProjektowanieStronInternetowych = lazy(() => import("./pages/ProjektowanieStronInternetowych"));
const StronyInternetoweLubelskie = lazy(() => import("./pages/StronyInternetoweLubelskie"));
const StronyInternetoweWielkopolska = lazy(() => import("./pages/StronyInternetoweWielkopolska"));
const StronyInternetowePodkarpacie = lazy(() => import("./pages/StronyInternetowePodkarpacie"));
const BlogJakStworzyc = lazy(() => import("./pages/BlogJakStworzyc"));
const BlogStronaInternetowaOdZera = lazy(() => import("./pages/BlogStronaInternetowaOdZera"));
const CennikTworzenieStron = lazy(() => import("./pages/CennikTworzenieStron"));
const PozycjonowanieOpole = lazy(() => import("./pages/PozycjonowanieOpole"));
const PozycjonowanieOlsztyn = lazy(() => import("./pages/PozycjonowanieOlsztyn"));
const AgencjaMarketingowaOpole = lazy(() => import("./pages/AgencjaMarketingowaOpole"));
const AgencjaMarketingowaOlsztyn = lazy(() => import("./pages/AgencjaMarketingowaOlsztyn"));

// Wave 10: Tworzenie stron city pages
const TworzenieStronWarszawa = lazy(() => import("./pages/TworzenieStronWarszawa"));
const TworzenieStronKrakow = lazy(() => import("./pages/TworzenieStronKrakow"));
const TworzenieStronWroclaw = lazy(() => import("./pages/TworzenieStronWroclaw"));
const TworzenieStronGdansk = lazy(() => import("./pages/TworzenieStronGdansk"));
const TworzenieStronLodz = lazy(() => import("./pages/TworzenieStronLodz"));
const TworzenieStronTorun = lazy(() => import("./pages/TworzenieStronTorun"));
const TworzenieStronSzczecin = lazy(() => import("./pages/TworzenieStronSzczecin"));
const BlogJakZalozycSklep = lazy(() => import("./pages/BlogJakZalozycSklep"));

// Wave 11: More tworzenie stron city pages + service pages + blog
const TworzenieStronBydgoszcz = lazy(() => import("./pages/TworzenieStronBydgoszcz"));
const TworzenieStronKatowice = lazy(() => import("./pages/TworzenieStronKatowice"));
const TworzenieStronLublin = lazy(() => import("./pages/TworzenieStronLublin"));
const TworzenieStronPoznan = lazy(() => import("./pages/TworzenieStronPoznan"));
const MarketingInternetowy = lazy(() => import("./pages/MarketingInternetowy"));
const AgencjaSEOWarszawa = lazy(() => import("./pages/AgencjaSEOWarszawa"));
const BlogDropshippingPolska = lazy(() => import("./pages/BlogDropshippingPolska"));
const BlogReklamaWGoogle = lazy(() => import("./pages/BlogReklamaWGoogle"));

// Wave 113: DCF, WACC, Break-even
const BlogDcfCoTo = lazy(() => import("./pages/BlogDcfCoTo"));
const BlogWaccCoTo = lazy(() => import("./pages/BlogWaccCoTo"));
const BlogBreakevenCoTo = lazy(() => import("./pages/BlogBreakevenCoTo"));

// Wave 112: PostgreSQL, Elasticsearch, Kafka
const BlogPostgresqlCoTo = lazy(() => import("./pages/BlogPostgresqlCoTo"));
const BlogElasticsearchCoTo = lazy(() => import("./pages/BlogElasticsearchCoTo"));
const BlogKafkaCoTo = lazy(() => import("./pages/BlogKafkaCoTo"));

// Wave 111: Terraform, MongoDB, TypeScript
const BlogTerraformCoTo = lazy(() => import("./pages/BlogTerraformCoTo"));
const BlogMongodbCoTo = lazy(() => import("./pages/BlogMongodbCoTo"));
const BlogTypescriptCoTo = lazy(() => import("./pages/BlogTypescriptCoTo"));

// Wave 110: Kubernetes, Redis, AWS
const BlogKubernetesCoTo = lazy(() => import("./pages/BlogKubernetesCoTo"));
const BlogRedisCoTo = lazy(() => import("./pages/BlogRedisCoTo"));
const BlogAwsCoTo = lazy(() => import("./pages/BlogAwsCoTo"));

// Wave 109: Docker, REST API, GraphQL
const BlogDockerCoTo = lazy(() => import("./pages/BlogDockerCoTo"));
const BlogRestApiCoTo = lazy(() => import("./pages/BlogRestApiCoTo"));
const BlogGraphqlCoTo = lazy(() => import("./pages/BlogGraphqlCoTo"));

// Wave 108: CI/CD, DevOps, Mikroserwisy
const BlogCiCdCoTo = lazy(() => import("./pages/BlogCiCdCoTo"));
const BlogDevOpsCoTo = lazy(() => import("./pages/BlogDevOpsCoTo"));
const BlogMicroservicesCoTo = lazy(() => import("./pages/BlogMicroservicesCoTo"));

// Wave 107: User Story, SLA/SLO/SLI, Postmortem
const BlogUserStoryCoTo = lazy(() => import("./pages/BlogUserStoryCoTo"));
const BlogSlaCoTo = lazy(() => import("./pages/BlogSlaCoTo"));
const BlogPostmortemCoTo = lazy(() => import("./pages/BlogPostmortemCoTo"));

// Wave 106: JTBD, Product Owner, Scrum Master
const BlogJobsToBeDeoneCoTo = lazy(() => import("./pages/BlogJobsToBeDeoneCoTo"));
const BlogProductOwnerCoTo = lazy(() => import("./pages/BlogProductOwnerCoTo"));
const BlogScrumMasterCoTo = lazy(() => import("./pages/BlogScrumMasterCoTo"));

// Wave 105: Risk Management, Sprint Retrospective, Pivot
const BlogRiskManagementCoTo = lazy(() => import("./pages/BlogRiskManagementCoTo"));
const BlogSprintRetrospectiveCoTo = lazy(() => import("./pages/BlogSprintRetrospectiveCoTo"));
const BlogPivotCoTo = lazy(() => import("./pages/BlogPivotCoTo"));

// Wave 104: TAM/SAM/SOM, KPI Dashboard, Stakeholder Management
const BlogTamSamSomCoTo = lazy(() => import("./pages/BlogTamSamSomCoTo"));
const BlogKpiDashboardCoTo = lazy(() => import("./pages/BlogKpiDashboardCoTo"));
const BlogStakeholderManagementCoTo = lazy(() => import("./pages/BlogStakeholderManagementCoTo"));

// Wave 103: SDR, Buyer Persona, Change Management
const BlogSdrCoTo = lazy(() => import("./pages/BlogSdrCoTo"));
const BlogBuyerPersonaCoTo = lazy(() => import("./pages/BlogBuyerPersonaCoTo"));
const BlogChangeManagementCoTo = lazy(() => import("./pages/BlogChangeManagementCoTo"));

// Wave 102: Feedback Loop, Community-Led Growth, QBR
const BlogFeedbackLoopCoTo = lazy(() => import("./pages/BlogFeedbackLoopCoTo"));
const BlogCommunityLedGrowthCoTo = lazy(() => import("./pages/BlogCommunityLedGrowthCoTo"));
const BlogQbrCoTo = lazy(() => import("./pages/BlogQbrCoTo"));

// Wave 101: Network Effects, Switching Costs, Competitive Moat
const BlogNetworkEffectsCoTo = lazy(() => import("./pages/BlogNetworkEffectsCoTo"));
const BlogSwitchingCostsCoTo = lazy(() => import("./pages/BlogSwitchingCostsCoTo"));
const BlogCompetitiveMoatCoTo = lazy(() => import("./pages/BlogCompetitiveMoatCoTo"));

// Wave 100: Sentiment Analysis, Growth Loop, Data-Driven Marketing
const BlogSentimentAnalysisCoTo = lazy(() => import("./pages/BlogSentimentAnalysisCoTo"));
const BlogGrowthLoopCoTo = lazy(() => import("./pages/BlogGrowthLoopCoTo"));
const BlogDataDrivenMarketingCoTo = lazy(() => import("./pages/BlogDataDrivenMarketingCoTo"));

// Wave 99: Event Tracking, Funnel Analytics, Social Listening
const BlogEventTrackingCoTo = lazy(() => import("./pages/BlogEventTrackingCoTo"));
const BlogFunnelAnalyticsCoTo = lazy(() => import("./pages/BlogFunnelAnalyticsCoTo"));
const BlogSocialListeningCoTo = lazy(() => import("./pages/BlogSocialListeningCoTo"));

// Wave 98: Burn Rate, Unit Economics, North Star Metric
const BlogBurnRateCoTo = lazy(() => import("./pages/BlogBurnRateCoTo"));
const BlogUnitEconomicsCoTo = lazy(() => import("./pages/BlogUnitEconomicsCoTo"));
const BlogNorthStarMetricCoTo = lazy(() => import("./pages/BlogNorthStarMetricCoTo"));

// Wave 97: Design Sprint, Tech Debt, Value Stream Mapping
const BlogDesignSprintCoTo = lazy(() => import("./pages/BlogDesignSprintCoTo"));
const BlogTechDebtCoTo = lazy(() => import("./pages/BlogTechDebtCoTo"));
const BlogValueStreamMappingCoTo = lazy(() => import("./pages/BlogValueStreamMappingCoTo"));

// Wave 96: OKR, Service Blueprint, MVP
const BlogOkrCoTo = lazy(() => import("./pages/BlogOkrCoTo"));
const BlogServiceBlueprintCoTo = lazy(() => import("./pages/BlogServiceBlueprintCoTo"));
const BlogMvpCoTo = lazy(() => import("./pages/BlogMvpCoTo"));

// Wave 95: User Persona, Empathy Map, Net Promoter Score
const BlogUserPersonaCoTo = lazy(() => import("./pages/BlogUserPersonaCoTo"));
const BlogEmpathyMapCoTo = lazy(() => import("./pages/BlogEmpathyMapCoTo"));
const BlogNetPromoterScoreCoTo = lazy(() => import("./pages/BlogNetPromoterScoreCoTo"));

// Wave 94: SEO Copywriting, A/B Testing, Heatmap
const BlogSeoCopywritingCoTo = lazy(() => import("./pages/BlogSeoCopywritingCoTo"));
const BlogAbTestingCoTo = lazy(() => import("./pages/BlogAbTestingCoTo"));
const BlogHeatmapCoTo = lazy(() => import("./pages/BlogHeatmapCoTo"));

// Wave 93: Accessibility, Market Segmentation, Paid Social
const BlogAccessibilityWebCoTo = lazy(() => import("./pages/BlogAccessibilityWebCoTo"));
const BlogMarketSegmentationCoTo = lazy(() => import("./pages/BlogMarketSegmentationCoTo"));
const BlogPaidSocialCoTo = lazy(() => import("./pages/BlogPaidSocialCoTo"));

// Wave 92: Wireframe, Pricing Page, Sales Velocity
const BlogWireframeCoTo = lazy(() => import("./pages/BlogWireframeCoTo"));
const BlogPricingPageOptimizationCoTo = lazy(() => import("./pages/BlogPricingPageOptimizationCoTo"));
const BlogSalesVelocityCoTo = lazy(() => import("./pages/BlogSalesVelocityCoTo"));

// Wave 91: Email Deliverability, Customer LTV, Content Distribution
const BlogEmailDeliverabilityCoTo = lazy(() => import("./pages/BlogEmailDeliverabilityCoTo"));
const BlogCustomerLtvCoTo = lazy(() => import("./pages/BlogCustomerLtvCoTo"));
const BlogContentDistributionCoTo = lazy(() => import("./pages/BlogContentDistributionCoTo"));

// Wave 90: Design System, Subscription Model, UX Audit
const BlogDesignSystemCoTo = lazy(() => import("./pages/BlogDesignSystemCoTo"));
const BlogSubscriptionModelCoTo = lazy(() => import("./pages/BlogSubscriptionModelCoTo"));
const BlogUxAuditCoTo = lazy(() => import("./pages/BlogUxAuditCoTo"));

// Wave 89: Brand Guidelines, Information Architecture, Revenue Model
const BlogBrandGuidelinesCoTo = lazy(() => import("./pages/BlogBrandGuidelinesCoTo"));
const BlogInformationArchitectureCoTo = lazy(() => import("./pages/BlogInformationArchitectureCoTo"));
const BlogRevenueModelCoTo = lazy(() => import("./pages/BlogRevenueModelCoTo"));

// Wave 88: Lead Scoring, SaaS Metrics
const BlogLeadScoringCoTo = lazy(() => import("./pages/BlogLeadScoringCoTo"));
const BlogSaasMetricsCoTo = lazy(() => import("./pages/BlogSaasMetricsCoTo"));

// Wave 87: Service Design, Churn Analysis, Programmatic Advertising
const BlogServiceDesignCoTo = lazy(() => import("./pages/BlogServiceDesignCoTo"));
const BlogChurnAnalysisCoTo = lazy(() => import("./pages/BlogChurnAnalysisCoTo"));
const BlogProgrammaticAdvertisingCoTo = lazy(() => import("./pages/BlogProgrammaticAdvertisingCoTo"));

// Wave 86: Usability Testing, Communication Strategy, Positioning Statement
const BlogUsabilityTestingCoTo = lazy(() => import("./pages/BlogUsabilityTestingCoTo"));
const BlogCommunicationStrategyCoTo = lazy(() => import("./pages/BlogCommunicationStrategyCoTo"));
const BlogPositioningStatementCoTo = lazy(() => import("./pages/BlogPositioningStatementCoTo"));

// Wave 85: Customer Experience Management, Product Analytics, Cohort Analysis
const BlogCustomerExperienceManagementCoTo = lazy(() => import("./pages/BlogCustomerExperienceManagementCoTo"));
const BlogProductAnalyticsCoTo = lazy(() => import("./pages/BlogProductAnalyticsCoTo"));
const BlogCohortAnalysisCoTo = lazy(() => import("./pages/BlogCohortAnalysisCoTo"));

// Wave 84: Brand Architecture, Target Audience, Voice of Customer
const BlogBrandArchitectureCoTo = lazy(() => import("./pages/BlogBrandArchitectureCoTo"));
const BlogTargetAudienceCoTo = lazy(() => import("./pages/BlogTargetAudienceCoTo"));
const BlogVoiceOfCustomerCoTo = lazy(() => import("./pages/BlogVoiceOfCustomerCoTo"));

// Wave 83: Visual Identity, Multichannel Marketing, Competitive Intelligence
const BlogVisualIdentityCoTo = lazy(() => import("./pages/BlogVisualIdentityCoTo"));
const BlogMultichannelMarketingCoTo = lazy(() => import("./pages/BlogMultichannelMarketingCoTo"));
const BlogCompetitiveIntelligenceCoTo = lazy(() => import("./pages/BlogCompetitiveIntelligenceCoTo"));

// Wave 82: Data Storytelling, Brand Equity, Sponsorship Marketing
const BlogDataStorytellingCoTo = lazy(() => import("./pages/BlogDataStorytellingCoTo"));
const BlogBrandEquityCoTo = lazy(() => import("./pages/BlogBrandEquityCoTo"));
const BlogSponsorshipMarketingCoTo = lazy(() => import("./pages/BlogSponsorshipMarketingCoTo"));

// Wave 81: Marketing Mix, Product Launch, Behavioral Marketing
const BlogMarketingMixCoTo = lazy(() => import("./pages/BlogMarketingMixCoTo"));
const BlogProductLaunchCoTo = lazy(() => import("./pages/BlogProductLaunchCoTo"));
const BlogBehavioralMarketingCoTo = lazy(() => import("./pages/BlogBehavioralMarketingCoTo"));

// Wave 80: Topic Clusters, Zero-Party Data, Brand Ambassador
const BlogTopicClustersCoTo = lazy(() => import("./pages/BlogTopicClustersCoTo"));
const BlogZeroPartyDataCoTo = lazy(() => import("./pages/BlogZeroPartyDataCoTo"));
const BlogBrandAmbassadorCoTo = lazy(() => import("./pages/BlogBrandAmbassadorCoTo"));

// Wave 79: Dark Social, Content Audit, Employee Advocacy
const BlogDarkSocialCoTo = lazy(() => import("./pages/BlogDarkSocialCoTo"));
const BlogContentAuditCoTo = lazy(() => import("./pages/BlogContentAuditCoTo"));
const BlogEmployeeAdvocacyCoTo = lazy(() => import("./pages/BlogEmployeeAdvocacyCoTo"));

// Wave 78: Thought Leadership, Public Relations, Co-Marketing
const BlogThoughtLeadershipCoTo = lazy(() => import("./pages/BlogThoughtLeadershipCoTo"));
const BlogPublicRelationsCoTo = lazy(() => import("./pages/BlogPublicRelationsCoTo"));
const BlogCoMarketingCoTo = lazy(() => import("./pages/BlogCoMarketingCoTo"));

// Wave 77: Creator Economy, Micro Influencer, Brand Storytelling
const BlogCreatorEconomyCoTo = lazy(() => import("./pages/BlogCreatorEconomyCoTo"));
const BlogMicroInfluencerCoTo = lazy(() => import("./pages/BlogMicroInfluencerCoTo"));
const BlogBrandStorytellingCoTo = lazy(() => import("./pages/BlogBrandStorytellingCoTo"));

// Wave 76: Neuromarketing, Pricing Psychology, FOMO Marketing
const BlogNeuromarketingCoTo = lazy(() => import("./pages/BlogNeuromarketingCoTo"));
const BlogPricingPsychologyCoTo = lazy(() => import("./pages/BlogPricingPsychologyCoTo"));
const BlogFOMOMarketingCoTo = lazy(() => import("./pages/BlogFOMOMarketingCoTo"));

// Wave 75: Loyalty Program, Personalization Marketing, Mobile Marketing
const BlogLoyaltyProgramCoTo = lazy(() => import("./pages/BlogLoyaltyProgramCoTo"));
const BlogPersonalizationMarketingCoTo = lazy(() => import("./pages/BlogPersonalizationMarketingCoTo"));
const BlogMobileMarketingCoTo = lazy(() => import("./pages/BlogMobileMarketingCoTo"));

// Wave 74: Cause Marketing, Customer Acquisition, Customer Retention
const BlogCauseMarketingCoTo = lazy(() => import("./pages/BlogCauseMarketingCoTo"));
const BlogCustomerAcquisitionCoTo = lazy(() => import("./pages/BlogCustomerAcquisitionCoTo"));
const BlogCustomerRetentionCoTo = lazy(() => import("./pages/BlogCustomerRetentionCoTo"));

// Wave 73: Account-Based Marketing, Inbound Marketing, Outbound Marketing
const BlogAccountBasedMarketingCoTo = lazy(() => import("./pages/BlogAccountBasedMarketingCoTo"));
const BlogInboundMarketingCoTo = lazy(() => import("./pages/BlogInboundMarketingCoTo"));
const BlogOutboundMarketingCoTo = lazy(() => import("./pages/BlogOutboundMarketingCoTo"));

// Wave 72: Event Marketing, Brand Activation, Social Commerce
const BlogEventMarketingCoTo = lazy(() => import("./pages/BlogEventMarketingCoTo"));
const BlogBrandActivationCoTo = lazy(() => import("./pages/BlogBrandActivationCoTo"));
const BlogSocialCommerceCoTo = lazy(() => import("./pages/BlogSocialCommerceCoTo"));

// Wave 71: Viral Marketing, Word of Mouth, Guerrilla Marketing
const BlogViralMarketingCoTo = lazy(() => import("./pages/BlogViralMarketingCoTo"));
const BlogWordOfMouthCoTo = lazy(() => import("./pages/BlogWordOfMouthCoTo"));
const BlogGuerrillaMarketingCoTo = lazy(() => import("./pages/BlogGuerrillaMarketingCoTo"));

// Wave 70: Bootstrapping, Lean Startup, Kanban
const BlogBootstrappingCoTo = lazy(() => import("./pages/BlogBootstrappingCoTo"));
const BlogLeanStartupCoTo = lazy(() => import("./pages/BlogLeanStartupCoTo"));
const BlogKanbanCoTo = lazy(() => import("./pages/BlogKanbanCoTo"));

// Wave 69: OKR, Product Marketing, Employer Branding
const BlogOKRCoTo = lazy(() => import("./pages/BlogOKRCoTo"));
const BlogProductMarketingCoTo = lazy(() => import("./pages/BlogProductMarketingCoTo"));
const BlogEmployerBrandingCoTo = lazy(() => import("./pages/BlogEmployerBrandingCoTo"));

// Wave 68: Pricing Strategy, Micro-Moments, Buyer Journey
const BlogPricingStrategyCoTo = lazy(() => import("./pages/BlogPricingStrategyCoTo"));
const BlogMicroMomentsCoTo = lazy(() => import("./pages/BlogMicroMomentsCoTo"));
const BlogBuyerJourneyCoTo = lazy(() => import("./pages/BlogBuyerJourneyCoTo"));

// Wave 67: Ambassador Marketing, Go-to-Market Strategy, Revenue Operations
const BlogAmbassadorMarketingCoTo = lazy(() => import("./pages/BlogAmbassadorMarketingCoTo"));
const BlogGoToMarketCoTo = lazy(() => import("./pages/BlogGoToMarketCoTo"));
const BlogRevenueOperationsCoTo = lazy(() => import("./pages/BlogRevenueOperationsCoTo"));

// Wave 66: Design Thinking, Sales Funnel, Community Marketing
const BlogDesignThinkingCoTo = lazy(() => import("./pages/BlogDesignThinkingCoTo"));
const BlogSalesFunnelCoTo = lazy(() => import("./pages/BlogSalesFunnelCoTo"));
const BlogCommunityMarketingCoTo = lazy(() => import("./pages/BlogCommunityMarketingCoTo"));

// Wave 65: Brand Positioning, TAM SAM SOM, User Onboarding
const BlogBrandPositioningCoTo = lazy(() => import("./pages/BlogBrandPositioningCoTo"));
const BlogTAMSAMSOMCoTo = lazy(() => import("./pages/BlogTAMSAMSOMCoTo"));
const BlogUserOnboardingCoTo = lazy(() => import("./pages/BlogUserOnboardingCoTo"));

// Wave 64: Customer Data Platform, Lead Nurturing, Account Management
const BlogCustomerDataPlatformCoTo = lazy(() => import("./pages/BlogCustomerDataPlatformCoTo"));
const BlogLeadNurturingCoTo = lazy(() => import("./pages/BlogLeadNurturingCoTo"));
const BlogAccountManagementCoTo = lazy(() => import("./pages/BlogAccountManagementCoTo"));

// Wave 63: Win/Loss Analysis, Email Marketing CoTo, Retention Marketing
const BlogWinLossAnalysisCoTo = lazy(() => import("./pages/BlogWinLossAnalysisCoTo"));
const BlogEmailMarketingCoTo = lazy(() => import("./pages/BlogEmailMarketingCoTo"));
const BlogRetentionMarketingCoTo = lazy(() => import("./pages/BlogRetentionMarketingCoTo"));

// Wave 62: Sales Enablement, Zero-Click Search, Market Research
const BlogSalesEnablementCoTo = lazy(() => import("./pages/BlogSalesEnablementCoTo"));
const BlogZeroClickSearchCoTo = lazy(() => import("./pages/BlogZeroClickSearchCoTo"));
const BlogMarketResearchCoTo = lazy(() => import("./pages/BlogMarketResearchCoTo"));

// Wave 61: Attribution Modeling, Native Advertising, Customer Segmentation
const BlogAttributionModelingCoTo = lazy(() => import("./pages/BlogAttributionModelingCoTo"));
const BlogNativeAdvertisingCoTo = lazy(() => import("./pages/BlogNativeAdvertisingCoTo"));
const BlogCustomerSegmentationCoTo = lazy(() => import("./pages/BlogCustomerSegmentationCoTo"));

// Wave 60: Hreflang, Robots.txt
const BlogHreflangCoTo = lazy(() => import("./pages/BlogHreflangCoTo"));
const BlogRobotsTxtCoTo = lazy(() => import("./pages/BlogRobotsTxtCoTo"));

// Wave 59: Quality Score, Smart Bidding, Performance Max
const BlogQualityScoreCoTo = lazy(() => import("./pages/BlogQualityScoreCoTo"));
const BlogSmartBiddingCoTo = lazy(() => import("./pages/BlogSmartBiddingCoTo"));
const BlogPerformanceMaxCoTo = lazy(() => import("./pages/BlogPerformanceMaxCoTo"));

// Wave 58: E-E-A-T, Crawl Budget, UGC
const BlogEEATCoTo = lazy(() => import("./pages/BlogEEATCoTo"));
const BlogCrawlBudgetCoTo = lazy(() => import("./pages/BlogCrawlBudgetCoTo"));
const BlogUGCCoTo = lazy(() => import("./pages/BlogUGCCoTo"));

// Wave 57: XML Sitemap, Bounce Rate, Referral Marketing
const BlogXMLSitemapCoTo = lazy(() => import("./pages/BlogXMLSitemapCoTo"));
const BlogBounceRateCoTo = lazy(() => import("./pages/BlogBounceRateCoTo"));
const BlogReferralMarketingCoTo = lazy(() => import("./pages/BlogReferralMarketingCoTo"));

// Wave 56: Long Tail Keywords, Page Speed, JTBD
const BlogLongTailKeywordsCoTo = lazy(() => import("./pages/BlogLongTailKeywordsCoTo"));
const BlogPageSpeedCoTo = lazy(() => import("./pages/BlogPageSpeedCoTo"));
const BlogJTBDCoTo = lazy(() => import("./pages/BlogJTBDCoTo"));

// Wave 55: Social Proof, Digital PR, Voice Search
const BlogSocialProofCoTo = lazy(() => import("./pages/BlogSocialProofCoTo"));
const BlogDigitalPRCoTo = lazy(() => import("./pages/BlogDigitalPRCoTo"));
const BlogVoiceSearchCoTo = lazy(() => import("./pages/BlogVoiceSearchCoTo"));

// Wave 54: Internal Linking, Keyword Research, Google Business Profile
const BlogInternalLinkingCoTo = lazy(() => import("./pages/BlogInternalLinkingCoTo"));
const BlogKeywordResearchCoTo = lazy(() => import("./pages/BlogKeywordResearchCoTo"));
const BlogGoogleBusinessProfileCoTo = lazy(() => import("./pages/BlogGoogleBusinessProfileCoTo"));

// Wave 53: Meta Tagi, Featured Snippets, Product-Led Growth
const BlogMetaTagiCoTo = lazy(() => import("./pages/BlogMetaTagiCoTo"));
const BlogFeaturedSnippetsCoTo = lazy(() => import("./pages/BlogFeaturedSnippetsCoTo"));
const BlogProductLedGrowthCoTo = lazy(() => import("./pages/BlogProductLedGrowthCoTo"));

// Wave 52: Schema Markup, E-commerce Marketing
const BlogSchemaMarkupCoTo = lazy(() => import("./pages/BlogSchemaMarkupCoTo"));
const BlogEcommerceMarketingCoTo = lazy(() => import("./pages/BlogEcommerceMarketingCoTo"));

// Wave 51: Growth Marketing
const BlogGrowthMarketingCoTo = lazy(() => import("./pages/BlogGrowthMarketingCoTo"));

// Wave 50: SEO Lokalne, Technical SEO
const BlogSEOLokalneCoTo = lazy(() => import("./pages/BlogSEOLokalneCoTo"));
const BlogTechnicalSEOCoTo = lazy(() => import("./pages/BlogTechnicalSEOCoTo"));

// Wave 49: ICP, Content Strategy
const BlogICPCoTo = lazy(() => import("./pages/BlogICPCoTo"));
const BlogContentStrategyCoTo = lazy(() => import("./pages/BlogContentStrategyCoTo"));

// Wave 48: Marketing Automation
const BlogMarketingAutomationCoTo = lazy(() => import("./pages/BlogMarketingAutomationCoTo"));

// Wave 47: Affiliate Marketing
const BlogAffiliateMarketingCoTo = lazy(() => import("./pages/BlogAffiliateMarketingCoTo"));

// Wave 46: SaaS Pricing, Email Sequence
const BlogSaaSPricingCoTo = lazy(() => import("./pages/BlogSaaSPricingCoTo"));
const BlogEmailSequenceCoTo = lazy(() => import("./pages/BlogEmailSequenceCoTo"));

// Wave 45: LinkedIn Marketing, Content Calendar, RevOps
const BlogLinkedInMarketingCoTo = lazy(() => import("./pages/BlogLinkedInMarketingCoTo"));
const BlogContentCalendarCoTo = lazy(() => import("./pages/BlogContentCalendarCoTo"));
const BlogRevOpsCoTo = lazy(() => import("./pages/BlogRevOpsCoTo"));

// Wave 44: UTM, CRO, Heatmapy
const BlogUTMCoToJest = lazy(() => import("./pages/BlogUTMCoToJest"));
const BlogCROCoTo = lazy(() => import("./pages/BlogCROCoTo"));
const BlogHeatmapyCoTo = lazy(() => import("./pages/BlogHeatmapyCoTo"));

// Wave 43: Storytelling, Podcast Marketing
const BlogStorytellingCoTo = lazy(() => import("./pages/BlogStorytellingCoTo"));
const BlogPodcastMarketingCoTo = lazy(() => import("./pages/BlogPodcastMarketingCoTo"));

// Wave 42: Freemium, Social Selling
const BlogFreemiumCoTo = lazy(() => import("./pages/BlogFreemiumCoTo"));
const BlogSocialSellingCoTo = lazy(() => import("./pages/BlogSocialSellingCoTo"));

// Wave 41: Programmatic Advertising, Customer Success
const BlogProgrammaticCoTo = lazy(() => import("./pages/BlogProgrammaticCoTo"));
const BlogCustomerSuccessCoTo = lazy(() => import("./pages/BlogCustomerSuccessCoTo"));

// Wave 40: GTM Strategy, ABM, Demand Generation
const BlogGTMStrategyCoTo = lazy(() => import("./pages/BlogGTMStrategyCoTo"));
const BlogABMCoTo = lazy(() => import("./pages/BlogABMCoTo"));
const BlogDemandGenerationCoTo = lazy(() => import("./pages/BlogDemandGenerationCoTo"));

// Wave 39: Product-Market Fit, Brand Awareness, B2B Marketing
const BlogProductMarketFit = lazy(() => import("./pages/BlogProductMarketFit"));
const BlogBrandAwarenessCoTo = lazy(() => import("./pages/BlogBrandAwarenessCoTo"));
const BlogB2BMarketingCoTo = lazy(() => import("./pages/BlogB2BMarketingCoTo"));

// Wave 38: USP, Value Proposition, Cold Email
const BlogUSPCoToJest = lazy(() => import("./pages/BlogUSPCoToJest"));
const BlogValuePropositionCoTo = lazy(() => import("./pages/BlogValuePropositionCoTo"));
const BlogColdEmailCoTo = lazy(() => import("./pages/BlogColdEmailCoTo"));

// Wave 37: Lejek Sprzedazowy, Churn Rate, Onboarding, Omnichannel
const BlogLejekSprzedazowy = lazy(() => import("./pages/BlogLejekSprzedazowy"));
const BlogChurnRateCoTo = lazy(() => import("./pages/BlogChurnRateCoTo"));
const BlogOnboardingCoToJest = lazy(() => import("./pages/BlogOnboardingCoToJest"));
const BlogOmnichannelCoTo = lazy(() => import("./pages/BlogOmnichannelCoTo"));

// Wave 36: Customer Journey, CRM, Influencer Marketing
const BlogCustomerJourneyCoTo = lazy(() => import("./pages/BlogCustomerJourneyCoTo"));
const BlogCRMCoToJest = lazy(() => import("./pages/BlogCRMCoToJest"));
const BlogInfluencerMarketingCoTo = lazy(() => import("./pages/BlogInfluencerMarketingCoTo"));

// Wave 35: Webinar, Persona, A/B Testing
const BlogWebinarCoToJest = lazy(() => import("./pages/BlogWebinarCoToJest"));
const BlogPersonaMarketingowa = lazy(() => import("./pages/BlogPersonaMarketingowa"));
const BlogABTestingCoTo = lazy(() => import("./pages/BlogABTestingCoTo"));

// Wave 34: Growth Hacking, Retargeting, Lead Generation
const BlogGrowthHackingCoTo = lazy(() => import("./pages/BlogGrowthHackingCoTo"));
const BlogRetargetingCoTo = lazy(() => import("./pages/BlogRetargetingCoTo"));
const BlogLeadGenerationCoTo = lazy(() => import("./pages/BlogLeadGenerationCoTo"));

// Wave 33: Umowa B2B, CEIDG
const BlogUmowaBCoToJest = lazy(() => import("./pages/BlogUmowaBCoToJest"));
const BlogCEIDGCoToJest = lazy(() => import("./pages/BlogCEIDGCoToJest"));

// Wave 32: Leasing, Hipoteka, KRS, Outsourcing, Faktoring
const BlogLeasingCoToJest = lazy(() => import("./pages/BlogLeasingCoToJest"));
const BlogHipotekaCoToJest = lazy(() => import("./pages/BlogHipotekaCoToJest"));
const BlogKRSCoToJest = lazy(() => import("./pages/BlogKRSCoToJest"));
const BlogOutsourcingCoToJest = lazy(() => import("./pages/BlogOutsourcingCoToJest"));
const BlogFaktoringCoToJest = lazy(() => import("./pages/BlogFaktoringCoToJest"));

// Wave 31: VAT, PIT, REGON, ZUS
const BlogVATCoToJest = lazy(() => import("./pages/BlogVATCoToJest"));
const BlogPITCoToJest = lazy(() => import("./pages/BlogPITCoToJest"));
const BlogREGONCoToJest = lazy(() => import("./pages/BlogREGONCoToJest"));
const BlogZUSCoToJest = lazy(() => import("./pages/BlogZUSCoToJest"));

// Wave 30: Freelancer, NIP
const BlogFreelancerCoToJest = lazy(() => import("./pages/BlogFreelancerCoToJest"));
const BlogNIPCoToJest = lazy(() => import("./pages/BlogNIPCoToJest"));

// Wave 29: NPS, Startup, SaaS, UX Design, MRR/ARR
const BlogNPSCoToJest = lazy(() => import("./pages/BlogNPSCoToJest"));
const BlogStartupCoToJest = lazy(() => import("./pages/BlogStartupCoToJest"));
const BlogSaaSCoToJest = lazy(() => import("./pages/BlogSaaSCoToJest"));
const BlogUXDesignCoTo = lazy(() => import("./pages/BlogUXDesignCoTo"));
const BlogMRRARRCoTo = lazy(() => import("./pages/BlogMRRARRCoTo"));

// Wave 28: B2B, Venture Capital, Pitch deck, Cross-selling, ERP
const BlogB2BCoToJest = lazy(() => import("./pages/BlogB2BCoToJest"));
const BlogVentureCapital = lazy(() => import("./pages/BlogVentureCapital"));
const BlogPitchDeck = lazy(() => import("./pages/BlogPitchDeck"));
const BlogCrossSellingCoTo = lazy(() => import("./pages/BlogCrossSellingCoTo"));
const BlogERPCoToJest = lazy(() => import("./pages/BlogERPCoToJest"));

// Wave 27: Agile, EBITDA, ROI, MVP, Due diligence
const BlogAgileCoTo = lazy(() => import("./pages/BlogAgileCoTo"));
const BlogEbitdaCoToJest = lazy(() => import("./pages/BlogEbitdaCoToJest"));
const BlogROICoToJest = lazy(() => import("./pages/BlogROICoToJest"));
const BlogMVPCoToJest = lazy(() => import("./pages/BlogMVPCoToJest"));
const BlogDueDiligence = lazy(() => import("./pages/BlogDueDiligence"));

// Wave 26: CPM, Scrum, Digital marketing
const BlogCPMCoTo = lazy(() => import("./pages/BlogCPMCoTo"));
const BlogScrumCoToJest = lazy(() => import("./pages/BlogScrumCoToJest"));
const BlogDigitalMarketingCoTo = lazy(() => import("./pages/BlogDigitalMarketingCoTo"));

// Wave 25: Cold calling, Lead magnet, Trener personalny
const BlogColdCallingCoTo = lazy(() => import("./pages/BlogColdCallingCoTo"));
const BlogLeadMagnetCoTo = lazy(() => import("./pages/BlogLeadMagnetCoTo"));
const StronaInternetowaDlaTrenera = lazy(() => import("./pages/StronaInternetowaDlaTrenera"));

// Wave 24: Dropshipping, Allegro, E-commerce, Inbound marketing, Lejek
const BlogDropshippingCoToJest = lazy(() => import("./pages/BlogDropshippingCoToJest"));
const BlogJakSprzedawacNaAllegro = lazy(() => import("./pages/BlogJakSprzedawacNaAllegro"));
const BlogEcommerceCoToJest = lazy(() => import("./pages/BlogEcommerceCoToJest"));

// Wave 23: GTM, Link building, Core Web Vitals, Google Search Console
const BlogGoogleTagManager = lazy(() => import("./pages/BlogGoogleTagManager"));
const BlogLinkBuilding = lazy(() => import("./pages/BlogLinkBuilding"));
const BlogCoreWebVitals = lazy(() => import("./pages/BlogCoreWebVitals"));
const BlogGoogleSearchConsole = lazy(() => import("./pages/BlogGoogleSearchConsole"));

// Wave 22: KPI, API, Konwersja, CTR, Fotograf
const BlogKPICoToJest = lazy(() => import("./pages/BlogKPICoToJest"));
const BlogAPICoToJest = lazy(() => import("./pages/BlogAPICoToJest"));
const BlogKonwersjaCoTo = lazy(() => import("./pages/BlogKonwersjaCoTo"));
const BlogCTRCoToJest = lazy(() => import("./pages/BlogCTRCoToJest"));
const StronaInternetowaDlaFotografa = lazy(() => import("./pages/StronaInternetowaDlaFotografa"));

// Wave 21: Newsletter, CMS, marketing afiliacyjny, prawnik, landing page
const BlogNewsletterCoTo = lazy(() => import("./pages/BlogNewsletterCoTo"));
const BlogMarketingAfiliacyjny = lazy(() => import("./pages/BlogMarketingAfiliacyjny"));
const BlogCMSCoToJest = lazy(() => import("./pages/BlogCMSCoToJest"));
const StronaInternetowaDlaPrawnika = lazy(() => import("./pages/StronaInternetowaDlaPrawnika"));

// Wave 20: Pozycjonowanie sklepu, branding, UI/UX, stomatolog, SEO e-commerce
const BlogPozycjonowanieSklepu = lazy(() => import("./pages/BlogPozycjonowanieSklepu"));
const BlogBrandingCoTo = lazy(() => import("./pages/BlogBrandingCoTo"));
const BlogUIUXCoTo = lazy(() => import("./pages/BlogUIUXCoTo"));
const StronaInternetowaDlaStomatologa = lazy(() => import("./pages/StronaInternetowaDlaStomatologa"));

// Wave 19: Hosting, SSL, WordPress co to, domena, jak pozycjonować
const BlogCoToJestHosting = lazy(() => import("./pages/BlogCoToJestHosting"));
const BlogCertyfikatSSL = lazy(() => import("./pages/BlogCertyfikatSSL"));
const BlogWordPressCoTo = lazy(() => import("./pages/BlogWordPressCoTo"));
const BlogDomenaCoToJest = lazy(() => import("./pages/BlogDomenaCoToJest"));
const BlogJakPozycjonowacStrone = lazy(() => import("./pages/BlogJakPozycjonowacStrone"));

// Wave 18: Google Ads co to, SEO co to, pozycjonowanie co to, WooCommerce, kurs Google Ads
const BlogGoogleAdsCoTo = lazy(() => import("./pages/BlogGoogleAdsCoTo"));
const BlogSEOCoToJest = lazy(() => import("./pages/BlogSEOCoToJest"));
const BlogPozycjonowanieCoTo = lazy(() => import("./pages/BlogPozycjonowanieCoTo"));
const SklepWooCommerce = lazy(() => import("./pages/SklepWooCommerce"));
const BlogKursGoogleAds = lazy(() => import("./pages/BlogKursGoogleAds"));

// Wave 17: Shopify, cenniki stron, wizytówka Google, sklep cena
const BlogShopifyPolska = lazy(() => import("./pages/BlogShopifyPolska"));
const BlogTworzenieStronCennik = lazy(() => import("./pages/BlogTworzenieStronCennik"));
const BlogWizytowkaGoogle = lazy(() => import("./pages/BlogWizytowkaGoogle"));
const BlogSklepInternetowyCena = lazy(() => import("./pages/BlogSklepInternetowyCena"));

// Wave 16: Google Moja Firma, marketing automation, lead gen, SEO Lublin, restauracja
const GoogleMojaFirma = lazy(() => import("./pages/GoogleMojaFirma"));
const MarketingAutomation = lazy(() => import("./pages/MarketingAutomation"));
const LeadGeneration = lazy(() => import("./pages/LeadGeneration"));
const AgencjaSEOLublin = lazy(() => import("./pages/AgencjaSEOLublin"));
const StronaInternetowaDlaRestauracji = lazy(() => import("./pages/StronaInternetowaDlaRestauracji"));

// Wave 15: FB/IG Ads, email marketing, content marketing, strona cena, pozycjonowanie cena
const StronaInternetowaCena = lazy(() => import("./pages/StronaInternetowaCena"));
const ReklamaFacebook = lazy(() => import("./pages/ReklamaFacebook"));
const EmailMarketing = lazy(() => import("./pages/EmailMarketing"));
const BlogContentMarketingCoTo = lazy(() => import("./pages/BlogContentMarketingCoTo"));
const ReklamaInstagram = lazy(() => import("./pages/ReklamaInstagram"));
const BlogPozycjonowanieStronCena = lazy(() => import("./pages/BlogPozycjonowanieStronCena"));

// Wave 14: Social media, rebranding, copywriting, WordPress, identyfikacja wizualna
const SocialMediaMarketing = lazy(() => import("./pages/SocialMediaMarketing"));
const BlogRebrandingCoTo = lazy(() => import("./pages/BlogRebrandingCoTo"));
const BlogCopywritingCoTo = lazy(() => import("./pages/BlogCopywritingCoTo"));
const StronaWordPress = lazy(() => import("./pages/StronaWordPress"));
const IdentyfikacjaWizualnaFirmy = lazy(() => import("./pages/IdentyfikacjaWizualnaFirmy"));
const BlogCopywritingCennik = lazy(() => import("./pages/BlogCopywritingCennik"));

// Wave 13: Google Ads campaign, B2B marketing, optimization, one-page, SEO cities
const KampaniaGoogleAds = lazy(() => import("./pages/KampaniaGoogleAds"));
const MarketingB2B = lazy(() => import("./pages/MarketingB2B"));
const AudytStronyInternetowej = lazy(() => import("./pages/AudytStronyInternetowej"));
const OptymalizacjaStronyInternetowej = lazy(() => import("./pages/OptymalizacjaStronyInternetowej"));
const StronaOnePage = lazy(() => import("./pages/StronaOnePage"));
const AgencjaSEOWroclaw = lazy(() => import("./pages/AgencjaSEOWroclaw"));
const BlogLandingPageCena = lazy(() => import("./pages/BlogLandingPageCena"));

// Wave 12: High-value service pages + city SEO + blog
const TworzenieStronWWW = lazy(() => import("./pages/TworzenieStronWWW"));
const StronyInternetoweDlaFirm = lazy(() => import("./pages/StronyInternetoweDlaFirm"));
const PozycjonowanieLokalne = lazy(() => import("./pages/PozycjonowanieLokalne"));
const TworzenieSklepowInternetowych = lazy(() => import("./pages/TworzenieSklepowInternetowych"));
const ProjektStronyInternetowej = lazy(() => import("./pages/ProjektStronyInternetowej"));
const AgencjaSEOKrakow = lazy(() => import("./pages/AgencjaSEOKrakow"));
const TworzenieStronBialystok = lazy(() => import("./pages/TworzenieStronBialystok"));
const BlogJakSprzedawacWInternecie = lazy(() => import("./pages/BlogJakSprzedawacWInternecie"));

// Other service pages
const IdentyfikacjaWizualna = lazy(() => import("./pages/IdentyfikacjaWizualna"));
const AgencjaGraficzna = lazy(() => import("./pages/AgencjaGraficzna"));
const EcommerceTworzenie = lazy(() => import("./pages/EcommerceTworzenie"));
const SklepyInternetowe = lazy(() => import("./pages/SklepyInternetowe"));
const ContentMarketing = lazy(() => import("./pages/ContentMarketing"));

// Legal & utility pages
const PolitykaPrywatnosci = lazy(() => import("./pages/PolitykaPrywatnosci"));
const Regulamin = lazy(() => import("./pages/Regulamin"));
const Kariera = lazy(() => import("./pages/Kariera"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Cennik = lazy(() => import("./pages/Cennik"));
const Podziekowanie = lazy(() => import("./pages/Podziekowanie"));
const Zainstaluj = lazy(() => import("./pages/Zainstaluj"));

// Admin pages
const AdminRezerwacje = lazy(() => import("./pages/AdminRezerwacje"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

// Tools pages
const Quiz = lazy(() => import("./pages/Quiz"));
const KalkulatorROI = lazy(() => import("./pages/KalkulatorROI"));
const SlownikMarketingowy = lazy(() => import("./pages/SlownikMarketingowy"));
const Zasoby = lazy(() => import("./pages/Zasoby"));
const GeneratorBriefu = lazy(() => import("./pages/GeneratorBriefu"));
const AudytSEO = lazy(() => import("./pages/AudytSEO"));
const KalkulatorCen = lazy(() => import("./pages/KalkulatorCen"));

// Cluster hub pages (Phase 1 - new IA structure)
const SEOOnPage = lazy(() => import("./pages/SEOOnPage"));
const SEOOffPage = lazy(() => import("./pages/SEOOffPage"));
const SEOTechniczne = lazy(() => import("./pages/SEOTechniczne"));
const SocialMediaStrategia = lazy(() => import("./pages/SocialMediaStrategia"));
const SocialMediaContent = lazy(() => import("./pages/SocialMediaContent"));
const SocialMediaAnalityka = lazy(() => import("./pages/SocialMediaAnalityka"));
const PMOptymalizacja = lazy(() => import("./pages/PMOptymalizacja"));
const PMTargetowanie = lazy(() => import("./pages/PMTargetowanie"));
const CMEbooki = lazy(() => import("./pages/CMEbooki"));
const CMVideoContent = lazy(() => import("./pages/CMVideoContent"));
const SEOCluster = lazy(() => import("./pages/clusters/SEOCluster"));
const SocialMediaCluster = lazy(() => import("./pages/clusters/SocialMediaCluster"));
const PerformanceMarketingCluster = lazy(() => import("./pages/clusters/PerformanceMarketingCluster"));
const ContentMarketingCluster = lazy(() => import("./pages/clusters/ContentMarketingCluster"));
const UslugiCluster = lazy(() => import("./pages/clusters/UslugiCluster"));

// Lazy load non-critical global components
const CookieBanner = lazy(() => import("./components/CookieBanner").then(m => ({ default: m.CookieBanner })));
const SEODevPanel = lazy(() => import("./components/dev/SEODevPanel").then(m => ({ default: m.SEODevPanel })));
const Redirect301 = lazy(() => import("./components/seo/Redirect301").then(m => ({ default: m.Redirect301 })));

const queryClient = new QueryClient();

// Ultra minimal page loader - just a subtle fade
const PageLoader = () => (
  <div className="min-h-screen bg-background" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/uslugi" element={<Uslugi />} />
                <Route path="/realizacje" element={<Realizacje />} />
                <Route path="/realizacje/enea-stadion" element={<CaseStudyEnea />} />
                <Route path="/realizacje/rppg" element={<CaseStudyRPPG />} />
                <Route path="/realizacje/fabryka-virali" element={<CaseStudyFabrykaVirali />} />
                <Route path="/realizacje/friendly-gas" element={<CaseStudyFriendlyGas />} />
                <Route path="/realizacje/fps-cegielski" element={<CaseStudyFPS />} />
                <Route path="/realizacje/gierki" element={<CaseStudyGierki />} />
                <Route path="/realizacje/przedszkole" element={<CaseStudyPrzedszkole />} />
                <Route path="/realizacje/verthe" element={<CaseStudyVerthe />} />
                <Route path="/realizacje/victory-cars" element={<CaseStudyVictoryCars />} />
                <Route path="/realizacje/klagem" element={<CaseStudyKlagem />} />
                <Route path="/realizacje/mechanica" element={<CaseStudyMechanica />} />
                <Route path="/realizacje/celsjusz" element={<CaseStudyCelsjusz />} />
                <Route path="/realizacje/sookar" element={<CaseStudySookar />} />
                <Route path="/realizacje/graf-tapicerstwo" element={<CaseStudyGraf />} />
                <Route path="/realizacje/stageplan" element={<CaseStudyStagePlan />} />
                <Route path="/realizacje/cute-dumpling" element={<CaseStudyCuteDumpling />} />
                <Route path="/realizacje/apartamenty-chorwacja" element={<CaseStudyApartamenty />} />
                <Route path="/realizacje/lauvjah" element={<CaseStudyLauvjah />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/konsultacja" element={<Konsultacja />} />
                <Route path="/o-nas" element={<ONas />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/ile-kosztuje-strona-internetowa" element={<BlogKosztStrony />} />
                <Route path="/blog/tanie-strony-internetowe" element={<BlogTanieStrony />} />
                <Route path="/blog/wordpress-vs-strona-na-zamowienie" element={<BlogWordPressVsCustom />} />
                <Route path="/blog/audyt-strony-internetowej" element={<BlogAudytStrony />} />
                <Route path="/blog/ai-w-marketingu-msp-2025" element={<BlogAIMarketing />} />
                <Route path="/blog/jak-stworzyc-landing-page" element={<BlogLandingPage />} />
                <Route path="/blog/branding-dla-startupow" element={<BlogBrandingStartupy />} />
                <Route path="/blog/ux-ui-ecommerce" element={<BlogUXEcommerce />} />
                <Route path="/blog/marketing-automation" element={<BlogMarketingAutomation />} />
                <Route path="/blog/personal-branding-linkedin" element={<BlogPersonalBrandingLinkedIn />} />
                <Route path="/blog/video-marketing-trendy-2025" element={<BlogVideoMarketing />} />
                <Route path="/blog/google-analytics-4-poradnik" element={<BlogGoogleAnalytics4 />} />
                <Route path="/blog/budzet-marketingowy-planowanie" element={<BlogBudzetMarketingowy />} />
                <Route path="/blog/marketing-b2b-vs-b2c" element={<BlogB2BvsB2C />} />
                <Route path="/blog/psychologia-cen" element={<BlogPsychologiaCen />} />
                <Route path="/blog/jak-zwiekszyc-sprzedaz-przez-internet" element={<BlogSprzedazOnline />} />
                <Route path="/blog/jak-napisac-brief-marketingowy" element={<BlogBriefMarketingowy />} />
                <Route path="/blog/pozycjonowanie-stron-internetowych-poradnik" element={<BlogPozycjonowanieStron />} />
                <Route path="/blog/ile-kosztuje-reklama-w-google" element={<BlogKosztGoogleAds />} />
                <Route path="/blog/jak-wybrac-agencje-marketingowa" element={<BlogJakWybracAgencje />} />
                <Route path="/blog/jak-zwiekszyc-konwersje-na-stronie" element={<BlogKonwersjeNaStronie />} />
                <Route path="/blog/strategia-social-media-marketing" element={<BlogSocialMediaStrategia />} />
                <Route path="/blog/strona-internetowa-dla-firmy" element={<BlogStronaDlaFirmy />} />
                <Route path="/blog/co-to-jest-identyfikacja-wizualna" element={<BlogIdentyfikacjaWizualna />} />
                <Route path="/blog/jak-zaprojektowac-logo-dla-firmy" element={<BlogJakZaprojektowacLogo />} />
                <Route path="/blog/google-ads-cennik" element={<BlogGoogleAdsCennik />} />
                <Route path="/blog/co-to-jest-seo" element={<BlogCoToJestSeo />} />
                <Route path="/blog/ile-kosztuje-pozycjonowanie" element={<BlogIleKosztujePozycjonowanie />} />
                <Route path="/blog/social-media-dla-firm" element={<BlogSocialMediaDlaFirm />} />
                <Route path="/blog/jak-wybrac-agencje-seo" element={<BlogJakWybracAgencjeSEO />} />
                <Route path="/blog/pozycjonowanie-lokalne-dla-firm" element={<BlogPozycjonowanieLokalnePoradnik />} />
                <Route path="/blog/content-marketing-dla-firm" element={<BlogContentMarketing />} />
                <Route path="/blog/jak-stworzyc-strone-internetowa" element={<BlogJakStworzyc />} />
                <Route path="/blog/strona-internetowa-dla-malej-firmy" element={<BlogStronaInternetowaOdZera />} />
                <Route path="/cennik-tworzenia-stron" element={<CennikTworzenieStron />} />

                {/* Case Studies */}
                <Route path="/case-studies/optymalizacja-konwersji-ecommerce" element={<CaseStudyEcommerceCRO />} />
                <Route path="/case-studies/seo-lokalne-poznan-wzrost-ruchu" element={<CaseStudyLocalSEO />} />
                <Route path="/case-studies/strona-internetowa-dla-firmy-produkcyjnej" element={<CaseStudyStronaWWW />} />

                {/* Blog → cluster redirects MUST be BEFORE the catch-all /blog/:slug */}
                <Route path="/blog/seo-ecommerce" element={<Redirect301 to="/seo/ecommerce" />} />
                <Route path="/blog/influencer-marketing-polska" element={<Redirect301 to="/social-media/influencer" />} />
                <Route path="/blog/remarketing-poradnik" element={<Redirect301 to="/performance-marketing/remarketing" />} />
                <Route path="/blog/google-ads-vs-facebook-ads" element={<Redirect301 to="/performance-marketing/google-vs-facebook" />} />
                <Route path="/blog/seo-lokalne-poznan-poradnik" element={<Redirect301 to="/seo/lokalne-poznan" />} />
                <Route path="/blog/instagram-reels-vs-tiktok" element={<Redirect301 to="/social-media/reels-vs-tiktok" />} />
                <Route path="/blog/tiktok-dla-biznesu" element={<Redirect301 to="/social-media/tiktok-biznes" />} />
                <Route path="/blog/copywriting-landing-page" element={<Redirect301 to="/content-marketing/copywriting-landing" />} />
                <Route path="/blog/email-marketing-2025" element={<Redirect301 to="/content-marketing/email-2025" />} />
                <Route path="/blog/kampania-reklamowa-marketingowa" element={<Redirect301 to="/content-marketing/kampanie" />} />

                {/* Dynamic blog catch-all - MUST be AFTER all specific /blog/* routes */}
                <Route path="/blog/:slug" element={<BlogArticleDynamic />} />

                {/* Cluster hubs */}
                <Route path="/seo" element={<SEOCluster />} />
                <Route path="/social-media" element={<SocialMediaCluster />} />
                <Route path="/performance-marketing" element={<PerformanceMarketingCluster />} />
                <Route path="/content-marketing" element={<ContentMarketingCluster />} />

                <Route path="/poradniki" element={<Poradniki />} />
                {/* Uslugi cluster */}
                <Route path="/uslugi/strony-internetowe" element={<StronyInternetowe />} />
                <Route path="/uslugi/landing-page" element={<UslugiLandingPage />} />
                <Route path="/uslugi/strony-internetowe/ecommerce" element={<EcommerceTworzenie />} />
                <Route path="/uslugi/strony-internetowe/poznan" element={<StronyInternetowePoznan />} />
                <Route path="/uslugi/strony-internetowe/warszawa" element={<StronyInternetoweWarszawa />} />
                <Route path="/uslugi/strony-internetowe/wroclaw" element={<StronyInternetoweWroclaw />} />
                <Route path="/uslugi/strony-internetowe/krakow" element={<StronyInternetoweKrakow />} />
                <Route path="/uslugi/strony-internetowe/gdansk" element={<StronyInternetoweGdansk />} />
                <Route path="/uslugi/strony-internetowe/gdynia" element={<StronyInternetoweGdynia />} />
                <Route path="/uslugi/strony-internetowe/lodz" element={<StronyInternetoweLodz />} />
                <Route path="/uslugi/strony-internetowe/szczecin" element={<StronyInternetoweSzczecin />} />
                <Route path="/uslugi/strony-internetowe/bydgoszcz" element={<StronyInternetoweBydgoszcz />} />
                <Route path="/uslugi/strony-internetowe/katowice" element={<StronyInternetoweKatowice />} />
                <Route path="/uslugi/strony-internetowe/lublin" element={<StronyInternetoweLublin />} />
                <Route path="/uslugi/strony-internetowe/koszalin" element={<StronyInternetoweKoszalin />} />
                <Route path="/uslugi/strony-internetowe/gliwice" element={<StronyInternetoweGliwice />} />
                <Route path="/uslugi/strony-internetowe/rybnik" element={<StronyInternetoweRybnik />} />
                <Route path="/uslugi/strony-internetowe/tychy" element={<StronyInternetoweTychy />} />
                <Route path="/uslugi/strony-internetowe/kamionki" element={<StronyInternetoweKamionki />} />
                <Route path="/uslugi/strony-internetowe/torun" element={<StronyInternetoweTorun />} />
                <Route path="/uslugi/strony-internetowe/rzeszow" element={<StronyInternetoweRzeszow />} />
                <Route path="/uslugi/strony-internetowe/radom" element={<StronyInternetoweRadom />} />
                <Route path="/uslugi/strony-internetowe/opole" element={<StronyInternetoweOpole />} />
                <Route path="/uslugi/strony-internetowe/olsztyn" element={<StronyInternetoweOlsztyn />} />
                <Route path="/uslugi/strony-internetowe/kielce" element={<StronyInternetoweKielce />} />
                <Route path="/uslugi/strony-internetowe/konin" element={<StronyInternetoweKonin />} />
                <Route path="/uslugi/strony-internetowe/tarnow" element={<StronyInternetoweTarnow />} />
                <Route path="/uslugi/strony-internetowe/plock" element={<StronyInternetowePlock />} />
                <Route path="/uslugi/strony-internetowe/sosnowiec" element={<StronyInternetoweSosnowiec />} />
                <Route path="/uslugi/strony-internetowe/bialystok" element={<StronyInternetoweBialystok />} />
                <Route path="/uslugi/strony-internetowe/czestochowa" element={<StronyInternetoweCzestochowa />} />
                <Route path="/uslugi/strony-internetowe/zielona-gora" element={<StronyInternetoweZielonaGora />} />
                <Route path="/uslugi/strony-internetowe/elblag" element={<StronyInternetoweElblag />} />
                <Route path="/uslugi/strony-internetowe/legnica" element={<StronyInternetoweLegnica />} />
                <Route path="/uslugi/strony-internetowe/kalisz" element={<StronyInternetoweKalisz />} />
                <Route path="/uslugi/strony-internetowe/gorzow" element={<StronyInternetoweGorzow />} />
                <Route path="/uslugi/logo-i-branding" element={<LogoIBranding />} />
                <Route path="/uslugi/pozycjonowanie" element={<UslugiPozycjonowanie />} />
                <Route path="/uslugi/pozycjonowanie/warszawa" element={<PozycjonowanieWarszawa />} />
                <Route path="/uslugi/pozycjonowanie/krakow" element={<PozycjonowanieKrakow />} />
                <Route path="/uslugi/pozycjonowanie/wroclaw" element={<PozycjonowanieWroclaw />} />
                <Route path="/uslugi/pozycjonowanie/poznan" element={<PozycjonowaniePoznan />} />
                <Route path="/uslugi/pozycjonowanie/gdansk" element={<PozycjonowanieGdansk />} />
                <Route path="/uslugi/pozycjonowanie/lodz" element={<PozycjonowanieLodz />} />
                <Route path="/uslugi/pozycjonowanie/szczecin" element={<PozycjonowanieSzczecin />} />
                <Route path="/uslugi/pozycjonowanie/bialystok" element={<PozycjonowanieBialystok />} />
                <Route path="/uslugi/pozycjonowanie/lublin" element={<PozycjonowanieLublin />} />
                <Route path="/uslugi/pozycjonowanie/rzeszow" element={<PozycjonowanieRzeszow />} />
                <Route path="/uslugi/pozycjonowanie/katowice" element={<PozycjonowanieKatowice />} />
                <Route path="/uslugi/pozycjonowanie/czestochowa" element={<PozycjonowanieCzestochowa />} />
                <Route path="/uslugi/pozycjonowanie/torun" element={<PozycjonowanieTorun />} />
                <Route path="/uslugi/pozycjonowanie/bydgoszcz" element={<PozycjonowanieBydgoszcz />} />
                <Route path="/uslugi/pozycjonowanie/radom" element={<PozycjonowanieRadom />} />
                <Route path="/uslugi/pozycjonowanie/kielce" element={<PozycjonowanieKielce />} />
                <Route path="/uslugi/pozycjonowanie/opole" element={<PozycjonowanieOpole />} />
                <Route path="/uslugi/pozycjonowanie/olsztyn" element={<PozycjonowanieOlsztyn />} />
                <Route path="/uslugi/identyfikacja-wizualna" element={<UslugiIdentyfikacjaWizualna />} />
                <Route path="/uslugi/tworzenie-stron-internetowych" element={<TworzenieStronInternetowych />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/warszawa" element={<TworzenieStronWarszawa />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/krakow" element={<TworzenieStronKrakow />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/wroclaw" element={<TworzenieStronWroclaw />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/gdansk" element={<TworzenieStronGdansk />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/lodz" element={<TworzenieStronLodz />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/torun" element={<TworzenieStronTorun />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/szczecin" element={<TworzenieStronSzczecin />} />
                <Route path="/blog/jak-zalozyc-sklep-internetowy" element={<BlogJakZalozycSklep />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/bydgoszcz" element={<TworzenieStronBydgoszcz />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/katowice" element={<TworzenieStronKatowice />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/lublin" element={<TworzenieStronLublin />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/poznan" element={<TworzenieStronPoznan />} />
                <Route path="/uslugi/marketing-internetowy" element={<MarketingInternetowy />} />
                <Route path="/agencja-seo-warszawa" element={<AgencjaSEOWarszawa />} />
                <Route path="/blog/dropshipping-polska" element={<BlogDropshippingPolska />} />
                <Route path="/blog/reklama-w-google" element={<BlogReklamaWGoogle />} />
                <Route path="/uslugi/tworzenie-stron-www" element={<TworzenieStronWWW />} />
                <Route path="/uslugi/strony-internetowe-dla-firm" element={<StronyInternetoweDlaFirm />} />
                <Route path="/uslugi/pozycjonowanie-lokalne" element={<PozycjonowanieLokalne />} />
                <Route path="/uslugi/tworzenie-sklepow-internetowych" element={<TworzenieSklepowInternetowych />} />
                <Route path="/uslugi/projekt-strony-internetowej" element={<ProjektStronyInternetowej />} />
                <Route path="/agencja-seo-krakow" element={<AgencjaSEOKrakow />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/bialystok" element={<TworzenieStronBialystok />} />
                <Route path="/blog/jak-sprzedawac-w-internecie" element={<BlogJakSprzedawacWInternecie />} />
                <Route path="/uslugi/audyt-seo" element={<AudytSEO />} />
                {/* Wave 113 */}
                <Route path="/blog/dcf-discounted-cash-flow-co-to" element={<BlogDcfCoTo />} />
                <Route path="/blog/wacc-sredni-wazony-koszt-kapitalu" element={<BlogWaccCoTo />} />
                <Route path="/blog/break-even-prog-rentownosci-co-to" element={<BlogBreakevenCoTo />} />
                {/* Wave 112 */}
                <Route path="/blog/postgresql-co-to-jest" element={<BlogPostgresqlCoTo />} />
                <Route path="/blog/elasticsearch-co-to-jest" element={<BlogElasticsearchCoTo />} />
                <Route path="/blog/kafka-co-to-jest" element={<BlogKafkaCoTo />} />
                {/* Wave 111 */}
                <Route path="/blog/terraform-co-to-jest" element={<BlogTerraformCoTo />} />
                <Route path="/blog/mongodb-co-to-jest" element={<BlogMongodbCoTo />} />
                <Route path="/blog/typescript-co-to-jest" element={<BlogTypescriptCoTo />} />
                {/* Wave 110 */}
                <Route path="/blog/kubernetes-co-to-jest" element={<BlogKubernetesCoTo />} />
                <Route path="/blog/redis-co-to-jest" element={<BlogRedisCoTo />} />
                <Route path="/blog/aws-co-to-jest" element={<BlogAwsCoTo />} />
                {/* Wave 109 */}
                <Route path="/blog/docker-co-to-jest" element={<BlogDockerCoTo />} />
                <Route path="/blog/rest-api-co-to" element={<BlogRestApiCoTo />} />
                <Route path="/blog/graphql-co-to" element={<BlogGraphqlCoTo />} />
                {/* Wave 108 */}
                <Route path="/blog/ci-cd-co-to-jest" element={<BlogCiCdCoTo />} />
                <Route path="/blog/devops-co-to-jest" element={<BlogDevOpsCoTo />} />
                <Route path="/blog/mikroserwisy-co-to-jest" element={<BlogMicroservicesCoTo />} />
                {/* Wave 107 */}
                <Route path="/blog/user-story-co-to" element={<BlogUserStoryCoTo />} />
                <Route path="/blog/sla-slo-sli-co-to" element={<BlogSlaCoTo />} />
                <Route path="/blog/postmortem-analiza-incydentu" element={<BlogPostmortemCoTo />} />
                {/* Wave 106 */}
                <Route path="/blog/jobs-to-be-done-co-to" element={<BlogJobsToBeDeoneCoTo />} />
                <Route path="/blog/product-owner-co-to" element={<BlogProductOwnerCoTo />} />
                <Route path="/blog/scrum-master-co-to" element={<BlogScrumMasterCoTo />} />
                {/* Wave 105 */}
                <Route path="/blog/risk-management-co-to" element={<BlogRiskManagementCoTo />} />
                <Route path="/blog/sprint-retrospective-co-to" element={<BlogSprintRetrospectiveCoTo />} />
                <Route path="/blog/pivot-startup-co-to" element={<BlogPivotCoTo />} />
                {/* Wave 104 */}
                <Route path="/blog/tam-sam-som-co-to" element={<BlogTamSamSomCoTo />} />
                <Route path="/blog/dashboard-kpi-co-to" element={<BlogKpiDashboardCoTo />} />
                <Route path="/blog/stakeholder-management-co-to" element={<BlogStakeholderManagementCoTo />} />
                {/* Wave 103 */}
                <Route path="/blog/sdr-co-to-jest" element={<BlogSdrCoTo />} />
                <Route path="/blog/buyer-persona-co-to" element={<BlogBuyerPersonaCoTo />} />
                <Route path="/blog/change-management-co-to" element={<BlogChangeManagementCoTo />} />
                {/* Wave 102 */}
                <Route path="/blog/feedback-loop-co-to" element={<BlogFeedbackLoopCoTo />} />
                <Route path="/blog/community-led-growth-co-to" element={<BlogCommunityLedGrowthCoTo />} />
                <Route path="/blog/qbr-co-to" element={<BlogQbrCoTo />} />
                {/* Wave 101 */}
                <Route path="/blog/efekty-sieciowe-network-effects" element={<BlogNetworkEffectsCoTo />} />
                <Route path="/blog/switching-costs-co-to" element={<BlogSwitchingCostsCoTo />} />
                <Route path="/blog/competitive-moat-co-to" element={<BlogCompetitiveMoatCoTo />} />
                {/* Wave 100 */}
                <Route path="/blog/analiza-sentymentu-co-to" element={<BlogSentimentAnalysisCoTo />} />
                <Route path="/blog/growth-loop-co-to" element={<BlogGrowthLoopCoTo />} />
                <Route path="/blog/data-driven-marketing-co-to" element={<BlogDataDrivenMarketingCoTo />} />
                {/* Wave 99 */}
                <Route path="/blog/event-tracking-co-to" element={<BlogEventTrackingCoTo />} />
                <Route path="/blog/funnel-analytics-co-to" element={<BlogFunnelAnalyticsCoTo />} />
                <Route path="/blog/social-listening-co-to" element={<BlogSocialListeningCoTo />} />
                {/* Wave 98 */}
                <Route path="/blog/burn-rate-runway-co-to" element={<BlogBurnRateCoTo />} />
                <Route path="/blog/unit-economics-co-to" element={<BlogUnitEconomicsCoTo />} />
                <Route path="/blog/north-star-metric-co-to" element={<BlogNorthStarMetricCoTo />} />
                {/* Wave 97 */}
                <Route path="/blog/design-sprint-co-to" element={<BlogDesignSprintCoTo />} />
                <Route path="/blog/dług-techniczny-co-to" element={<BlogTechDebtCoTo />} />
                <Route path="/blog/value-stream-mapping-co-to" element={<BlogValueStreamMappingCoTo />} />
                {/* Wave 96 */}
                <Route path="/blog/okr-co-to-jest" element={<BlogOkrCoTo />} />
                <Route path="/blog/service-blueprint-co-to" element={<BlogServiceBlueprintCoTo />} />
                <Route path="/blog/mvp-co-to-jest" element={<BlogMvpCoTo />} />
                {/* Wave 95 */}
                <Route path="/blog/user-persona-co-to" element={<BlogUserPersonaCoTo />} />
                <Route path="/blog/mapa-empatii-co-to" element={<BlogEmpathyMapCoTo />} />
                <Route path="/blog/net-promoter-score-co-to" element={<BlogNetPromoterScoreCoTo />} />
                {/* Wave 94 */}
                <Route path="/blog/seo-copywriting-co-to" element={<BlogSeoCopywritingCoTo />} />
                <Route path="/blog/ab-testing-co-to" element={<BlogAbTestingCoTo />} />
                <Route path="/blog/heatmapa-co-to" element={<BlogHeatmapCoTo />} />
                {/* Wave 93 */}
                <Route path="/blog/dostepnosc-stron-internetowych" element={<BlogAccessibilityWebCoTo />} />
                <Route path="/blog/segmentacja-rynku-co-to" element={<BlogMarketSegmentationCoTo />} />
                <Route path="/blog/paid-social-co-to" element={<BlogPaidSocialCoTo />} />
                {/* Wave 92 */}
                <Route path="/blog/wireframe-co-to" element={<BlogWireframeCoTo />} />
                <Route path="/blog/optymalizacja-strony-cennikowej" element={<BlogPricingPageOptimizationCoTo />} />
                <Route path="/blog/sales-velocity-co-to" element={<BlogSalesVelocityCoTo />} />
                {/* Wave 91 */}
                <Route path="/blog/email-deliverability-co-to" element={<BlogEmailDeliverabilityCoTo />} />
                <Route path="/blog/customer-ltv-co-to" element={<BlogCustomerLtvCoTo />} />
                <Route path="/blog/content-distribution-co-to" element={<BlogContentDistributionCoTo />} />
                {/* Wave 90 */}
                <Route path="/blog/design-system-co-to" element={<BlogDesignSystemCoTo />} />
                <Route path="/blog/subscription-model-co-to" element={<BlogSubscriptionModelCoTo />} />
                <Route path="/blog/ux-audit-co-to" element={<BlogUxAuditCoTo />} />
                {/* Wave 89 */}
                <Route path="/blog/brand-guidelines-co-to" element={<BlogBrandGuidelinesCoTo />} />
                <Route path="/blog/information-architecture-co-to" element={<BlogInformationArchitectureCoTo />} />
                <Route path="/blog/revenue-model-co-to" element={<BlogRevenueModelCoTo />} />
                {/* Wave 88 */}
                <Route path="/blog/lead-scoring-co-to" element={<BlogLeadScoringCoTo />} />
                <Route path="/blog/saas-metrics-co-to" element={<BlogSaasMetricsCoTo />} />
                {/* Wave 87 */}
                <Route path="/blog/service-design-co-to" element={<BlogServiceDesignCoTo />} />
                <Route path="/blog/churn-analysis-co-to" element={<BlogChurnAnalysisCoTo />} />
                <Route path="/blog/reklama-programatyczna-co-to" element={<BlogProgrammaticAdvertisingCoTo />} />
                {/* Wave 86 */}
                <Route path="/blog/usability-testing-co-to" element={<BlogUsabilityTestingCoTo />} />
                <Route path="/blog/strategia-komunikacji-co-to" element={<BlogCommunicationStrategyCoTo />} />
                <Route path="/blog/positioning-statement-co-to" element={<BlogPositioningStatementCoTo />} />
                {/* Wave 85 */}
                <Route path="/blog/customer-experience-management-co-to" element={<BlogCustomerExperienceManagementCoTo />} />
                <Route path="/blog/product-analytics-co-to" element={<BlogProductAnalyticsCoTo />} />
                <Route path="/blog/cohort-analysis-co-to" element={<BlogCohortAnalysisCoTo />} />
                {/* Wave 84 */}
                <Route path="/blog/architektura-marki-co-to" element={<BlogBrandArchitectureCoTo />} />
                <Route path="/blog/target-audience-co-to" element={<BlogTargetAudienceCoTo />} />
                <Route path="/blog/voice-of-customer-co-to" element={<BlogVoiceOfCustomerCoTo />} />
                {/* Wave 83 */}
                <Route path="/blog/identyfikacja-wizualna-co-to" element={<BlogVisualIdentityCoTo />} />
                <Route path="/blog/multichannel-marketing-co-to" element={<BlogMultichannelMarketingCoTo />} />
                <Route path="/blog/competitive-intelligence-co-to" element={<BlogCompetitiveIntelligenceCoTo />} />
                {/* Wave 82 */}
                <Route path="/blog/data-storytelling-co-to" element={<BlogDataStorytellingCoTo />} />
                <Route path="/blog/brand-equity-co-to" element={<BlogBrandEquityCoTo />} />
                <Route path="/blog/sponsoring-marketing-co-to" element={<BlogSponsorshipMarketingCoTo />} />
                {/* Wave 81 */}
                <Route path="/blog/marketing-mix-co-to" element={<BlogMarketingMixCoTo />} />
                <Route path="/blog/product-launch-co-to" element={<BlogProductLaunchCoTo />} />
                <Route path="/blog/behavioral-marketing-co-to" element={<BlogBehavioralMarketingCoTo />} />
                {/* Wave 80 */}
                <Route path="/blog/topic-clusters-co-to" element={<BlogTopicClustersCoTo />} />
                <Route path="/blog/zero-party-data-co-to" element={<BlogZeroPartyDataCoTo />} />
                <Route path="/blog/brand-ambassador-co-to" element={<BlogBrandAmbassadorCoTo />} />
                {/* Wave 79 */}
                <Route path="/blog/dark-social-co-to" element={<BlogDarkSocialCoTo />} />
                <Route path="/blog/content-audit-co-to" element={<BlogContentAuditCoTo />} />
                <Route path="/blog/employee-advocacy-co-to" element={<BlogEmployeeAdvocacyCoTo />} />
                {/* Wave 78 */}
                <Route path="/blog/thought-leadership-co-to" element={<BlogThoughtLeadershipCoTo />} />
                <Route path="/blog/public-relations-co-to" element={<BlogPublicRelationsCoTo />} />
                <Route path="/blog/co-marketing-co-to" element={<BlogCoMarketingCoTo />} />
                {/* Wave 77 */}
                <Route path="/blog/creator-economy-co-to" element={<BlogCreatorEconomyCoTo />} />
                <Route path="/blog/micro-influencer-marketing-co-to" element={<BlogMicroInfluencerCoTo />} />
                <Route path="/blog/brand-storytelling-co-to" element={<BlogBrandStorytellingCoTo />} />
                {/* Wave 76 */}
                <Route path="/blog/neuromarketing-co-to" element={<BlogNeuromarketingCoTo />} />
                <Route path="/blog/psychologia-cen-co-to" element={<BlogPricingPsychologyCoTo />} />
                <Route path="/blog/fomo-marketing-co-to" element={<BlogFOMOMarketingCoTo />} />
                {/* Wave 75 */}
                <Route path="/blog/loyalty-program-co-to" element={<BlogLoyaltyProgramCoTo />} />
                <Route path="/blog/personalizacja-marketingu-co-to" element={<BlogPersonalizationMarketingCoTo />} />
                <Route path="/blog/mobile-marketing-co-to" element={<BlogMobileMarketingCoTo />} />
                {/* Wave 74 */}
                <Route path="/blog/cause-marketing-co-to" element={<BlogCauseMarketingCoTo />} />
                <Route path="/blog/customer-acquisition-co-to" element={<BlogCustomerAcquisitionCoTo />} />
                <Route path="/blog/customer-retention-co-to" element={<BlogCustomerRetentionCoTo />} />
                {/* Wave 73 */}
                <Route path="/blog/account-based-marketing-co-to" element={<BlogAccountBasedMarketingCoTo />} />
                <Route path="/blog/inbound-marketing-co-to" element={<BlogInboundMarketingCoTo />} />
                <Route path="/blog/outbound-marketing-co-to" element={<BlogOutboundMarketingCoTo />} />
                {/* Wave 72 */}
                <Route path="/blog/event-marketing-co-to" element={<BlogEventMarketingCoTo />} />
                <Route path="/blog/brand-activation-co-to" element={<BlogBrandActivationCoTo />} />
                <Route path="/blog/social-commerce-co-to" element={<BlogSocialCommerceCoTo />} />
                {/* Wave 71 */}
                <Route path="/blog/viral-marketing-co-to" element={<BlogViralMarketingCoTo />} />
                <Route path="/blog/word-of-mouth-marketing-co-to" element={<BlogWordOfMouthCoTo />} />
                <Route path="/blog/guerrilla-marketing-co-to" element={<BlogGuerrillaMarketingCoTo />} />
                {/* Wave 70 */}
                <Route path="/blog/bootstrapping-co-to" element={<BlogBootstrappingCoTo />} />
                <Route path="/blog/lean-startup-co-to" element={<BlogLeanStartupCoTo />} />
                <Route path="/blog/kanban-co-to" element={<BlogKanbanCoTo />} />
                {/* Wave 69 */}
                <Route path="/blog/okr-co-to" element={<BlogOKRCoTo />} />
                <Route path="/blog/product-marketing-co-to" element={<BlogProductMarketingCoTo />} />
                <Route path="/blog/employer-branding-co-to" element={<BlogEmployerBrandingCoTo />} />
                {/* Wave 68 */}
                <Route path="/blog/pricing-strategy-co-to" element={<BlogPricingStrategyCoTo />} />
                <Route path="/blog/micro-moments-co-to" element={<BlogMicroMomentsCoTo />} />
                <Route path="/blog/buyer-journey-co-to" element={<BlogBuyerJourneyCoTo />} />
                {/* Wave 67 */}
                <Route path="/blog/ambassador-marketing-co-to" element={<BlogAmbassadorMarketingCoTo />} />
                <Route path="/blog/go-to-market-strategy-co-to" element={<BlogGoToMarketCoTo />} />
                <Route path="/blog/revenue-operations-revops-co-to" element={<BlogRevenueOperationsCoTo />} />
                {/* Wave 66 */}
                <Route path="/blog/design-thinking-co-to" element={<BlogDesignThinkingCoTo />} />
                <Route path="/blog/sales-funnel-co-to" element={<BlogSalesFunnelCoTo />} />
                <Route path="/blog/community-marketing-co-to" element={<BlogCommunityMarketingCoTo />} />
                {/* Wave 65 */}
                <Route path="/blog/brand-positioning-co-to" element={<BlogBrandPositioningCoTo />} />
                <Route path="/blog/tam-sam-som-co-to" element={<BlogTAMSAMSOMCoTo />} />
                <Route path="/blog/user-onboarding-co-to" element={<BlogUserOnboardingCoTo />} />
                {/* Wave 64 */}
                <Route path="/blog/customer-data-platform-cdp-co-to" element={<BlogCustomerDataPlatformCoTo />} />
                <Route path="/blog/lead-nurturing-co-to" element={<BlogLeadNurturingCoTo />} />
                <Route path="/blog/account-management-co-to" element={<BlogAccountManagementCoTo />} />
                {/* Wave 63 */}
                <Route path="/blog/win-loss-analysis-co-to" element={<BlogWinLossAnalysisCoTo />} />
                <Route path="/blog/email-marketing-co-to" element={<BlogEmailMarketingCoTo />} />
                <Route path="/blog/retention-marketing-co-to" element={<BlogRetentionMarketingCoTo />} />
                {/* Wave 62 */}
                <Route path="/blog/sales-enablement-co-to" element={<BlogSalesEnablementCoTo />} />
                <Route path="/blog/zero-click-search-co-to" element={<BlogZeroClickSearchCoTo />} />
                <Route path="/blog/market-research-co-to" element={<BlogMarketResearchCoTo />} />
                {/* Wave 61 */}
                <Route path="/blog/attribution-modeling-co-to" element={<BlogAttributionModelingCoTo />} />
                <Route path="/blog/native-advertising-co-to" element={<BlogNativeAdvertisingCoTo />} />
                <Route path="/blog/customer-segmentation-co-to" element={<BlogCustomerSegmentationCoTo />} />
                {/* Wave 60 */}
                <Route path="/blog/hreflang-co-to" element={<BlogHreflangCoTo />} />
                <Route path="/blog/robots-txt-co-to" element={<BlogRobotsTxtCoTo />} />
                {/* Wave 59 */}
                <Route path="/blog/quality-score-co-to" element={<BlogQualityScoreCoTo />} />
                <Route path="/blog/smart-bidding-co-to" element={<BlogSmartBiddingCoTo />} />
                <Route path="/blog/performance-max-co-to" element={<BlogPerformanceMaxCoTo />} />
                {/* Wave 58 */}
                <Route path="/blog/e-e-a-t-seo" element={<BlogEEATCoTo />} />
                <Route path="/blog/crawl-budget-co-to" element={<BlogCrawlBudgetCoTo />} />
                <Route path="/blog/ugc-co-to" element={<BlogUGCCoTo />} />
                {/* Wave 57 */}
                <Route path="/blog/xml-sitemap-co-to" element={<BlogXMLSitemapCoTo />} />
                <Route path="/blog/bounce-rate-co-to" element={<BlogBounceRateCoTo />} />
                <Route path="/blog/referral-marketing-co-to" element={<BlogReferralMarketingCoTo />} />
                {/* Wave 56 */}
                <Route path="/blog/long-tail-keywords-co-to" element={<BlogLongTailKeywordsCoTo />} />
                <Route path="/blog/page-speed-co-to" element={<BlogPageSpeedCoTo />} />
                <Route path="/blog/jobs-to-be-done-jtbd" element={<BlogJTBDCoTo />} />
                {/* Wave 55 */}
                <Route path="/blog/social-proof-co-to" element={<BlogSocialProofCoTo />} />
                <Route path="/blog/digital-pr-co-to" element={<BlogDigitalPRCoTo />} />
                <Route path="/blog/voice-search-seo" element={<BlogVoiceSearchCoTo />} />
                {/* Wave 54 */}
                <Route path="/blog/internal-linking-co-to" element={<BlogInternalLinkingCoTo />} />
                <Route path="/blog/keyword-research-co-to" element={<BlogKeywordResearchCoTo />} />
                <Route path="/blog/google-business-profile-co-to" element={<BlogGoogleBusinessProfileCoTo />} />
                {/* Wave 53 */}
                <Route path="/blog/meta-tagi-co-to" element={<BlogMetaTagiCoTo />} />
                <Route path="/blog/featured-snippets-co-to" element={<BlogFeaturedSnippetsCoTo />} />
                <Route path="/blog/product-led-growth-co-to" element={<BlogProductLedGrowthCoTo />} />
                {/* Wave 52 */}
                <Route path="/blog/schema-markup-co-to" element={<BlogSchemaMarkupCoTo />} />
                <Route path="/blog/ecommerce-marketing-co-to" element={<BlogEcommerceMarketingCoTo />} />
                {/* Wave 51 */}
                <Route path="/blog/growth-marketing-co-to" element={<BlogGrowthMarketingCoTo />} />
                {/* Wave 50 */}
                <Route path="/blog/seo-lokalne-co-to" element={<BlogSEOLokalneCoTo />} />
                <Route path="/blog/technical-seo-co-to" element={<BlogTechnicalSEOCoTo />} />
                {/* Wave 49 */}
                <Route path="/blog/icp-co-to-jest" element={<BlogICPCoTo />} />
                <Route path="/blog/content-strategy-co-to" element={<BlogContentStrategyCoTo />} />
                {/* Wave 48 */}
                <Route path="/blog/marketing-automation-co-to" element={<BlogMarketingAutomationCoTo />} />
                {/* Wave 47 */}
                <Route path="/blog/affiliate-marketing-co-to" element={<BlogAffiliateMarketingCoTo />} />
                {/* Wave 46 */}
                <Route path="/blog/saas-pricing-modele-cenowe" element={<BlogSaaSPricingCoTo />} />
                <Route path="/blog/email-sequence-co-to" element={<BlogEmailSequenceCoTo />} />
                {/* Wave 45 */}
                <Route path="/blog/linkedin-marketing-co-to" element={<BlogLinkedInMarketingCoTo />} />
                <Route path="/blog/content-calendar-co-to" element={<BlogContentCalendarCoTo />} />
                <Route path="/blog/revops-co-to-jest" element={<BlogRevOpsCoTo />} />
                {/* Wave 44 */}
                <Route path="/blog/utm-co-to-jest" element={<BlogUTMCoToJest />} />
                <Route path="/blog/cro-co-to-jest" element={<BlogCROCoTo />} />
                <Route path="/blog/heatmapy-co-to-jest" element={<BlogHeatmapyCoTo />} />
                {/* Wave 43 */}
                <Route path="/blog/storytelling-co-to" element={<BlogStorytellingCoTo />} />
                <Route path="/blog/podcast-marketing-co-to" element={<BlogPodcastMarketingCoTo />} />
                {/* Wave 42 */}
                <Route path="/blog/freemium-co-to" element={<BlogFreemiumCoTo />} />
                <Route path="/blog/social-selling-co-to" element={<BlogSocialSellingCoTo />} />
                {/* Wave 41 */}
                <Route path="/blog/programmatic-advertising-co-to" element={<BlogProgrammaticCoTo />} />
                <Route path="/blog/customer-success-co-to" element={<BlogCustomerSuccessCoTo />} />
                {/* Wave 40 */}
                <Route path="/blog/gtm-strategy-co-to" element={<BlogGTMStrategyCoTo />} />
                <Route path="/blog/abm-co-to-jest" element={<BlogABMCoTo />} />
                <Route path="/blog/demand-generation-co-to" element={<BlogDemandGenerationCoTo />} />
                {/* Wave 39 */}
                <Route path="/blog/product-market-fit-co-to" element={<BlogProductMarketFit />} />
                <Route path="/blog/brand-awareness-co-to" element={<BlogBrandAwarenessCoTo />} />
                <Route path="/blog/marketing-b2b-co-to" element={<BlogB2BMarketingCoTo />} />
                {/* Wave 38 */}
                <Route path="/blog/usp-co-to-jest" element={<BlogUSPCoToJest />} />
                <Route path="/blog/value-proposition-co-to" element={<BlogValuePropositionCoTo />} />
                <Route path="/blog/cold-email-co-to" element={<BlogColdEmailCoTo />} />
                {/* Wave 37 */}
                <Route path="/blog/lejek-sprzedazowy-co-to" element={<BlogLejekSprzedazowy />} />
                <Route path="/blog/churn-rate-co-to" element={<BlogChurnRateCoTo />} />
                <Route path="/blog/onboarding-co-to-jest" element={<BlogOnboardingCoToJest />} />
                <Route path="/blog/omnichannel-co-to" element={<BlogOmnichannelCoTo />} />
                {/* Wave 36 */}
                <Route path="/blog/customer-journey-co-to" element={<BlogCustomerJourneyCoTo />} />
                <Route path="/blog/crm-co-to-jest" element={<BlogCRMCoToJest />} />
                <Route path="/blog/influencer-marketing-co-to" element={<BlogInfluencerMarketingCoTo />} />
                {/* Wave 35 */}
                <Route path="/blog/webinar-co-to-jest" element={<BlogWebinarCoToJest />} />
                <Route path="/blog/persona-marketingowa" element={<BlogPersonaMarketingowa />} />
                <Route path="/blog/ab-testing-co-to" element={<BlogABTestingCoTo />} />
                {/* Wave 34 */}
                <Route path="/blog/growth-hacking-co-to" element={<BlogGrowthHackingCoTo />} />
                <Route path="/blog/retargeting-co-to" element={<BlogRetargetingCoTo />} />
                <Route path="/blog/lead-generation-co-to" element={<BlogLeadGenerationCoTo />} />
                {/* Wave 33 */}
                <Route path="/blog/umowa-b2b-co-to-jest" element={<BlogUmowaBCoToJest />} />
                <Route path="/blog/ceidg-co-to-jest" element={<BlogCEIDGCoToJest />} />
                {/* Wave 32 */}
                <Route path="/blog/leasing-co-to-jest" element={<BlogLeasingCoToJest />} />
                <Route path="/blog/hipoteka-co-to-jest" element={<BlogHipotekaCoToJest />} />
                <Route path="/blog/krs-co-to-jest" element={<BlogKRSCoToJest />} />
                <Route path="/blog/outsourcing-co-to-jest" element={<BlogOutsourcingCoToJest />} />
                <Route path="/blog/faktoring-co-to-jest" element={<BlogFaktoringCoToJest />} />
                {/* Wave 31 */}
                <Route path="/blog/vat-co-to-jest" element={<BlogVATCoToJest />} />
                <Route path="/blog/pit-co-to-jest" element={<BlogPITCoToJest />} />
                <Route path="/blog/regon-co-to-jest" element={<BlogREGONCoToJest />} />
                <Route path="/blog/zus-co-to-jest" element={<BlogZUSCoToJest />} />
                {/* Wave 30 */}
                <Route path="/blog/freelancer-co-to-jest" element={<BlogFreelancerCoToJest />} />
                <Route path="/blog/nip-co-to-jest" element={<BlogNIPCoToJest />} />
                {/* Wave 29 */}
                <Route path="/blog/nps-co-to-jest" element={<BlogNPSCoToJest />} />
                <Route path="/blog/startup-co-to-jest" element={<BlogStartupCoToJest />} />
                <Route path="/blog/saas-co-to-jest" element={<BlogSaaSCoToJest />} />
                <Route path="/blog/ux-design-co-to" element={<BlogUXDesignCoTo />} />
                <Route path="/blog/mrr-arr-co-to" element={<BlogMRRARRCoTo />} />
                {/* Wave 28 */}
                <Route path="/blog/b2b-co-to-jest" element={<BlogB2BCoToJest />} />
                <Route path="/blog/venture-capital-co-to" element={<BlogVentureCapital />} />
                <Route path="/blog/pitch-deck-co-to" element={<BlogPitchDeck />} />
                <Route path="/blog/cross-selling-co-to" element={<BlogCrossSellingCoTo />} />
                <Route path="/blog/erp-co-to-jest" element={<BlogERPCoToJest />} />
                {/* Wave 27 */}
                <Route path="/blog/agile-co-to" element={<BlogAgileCoTo />} />
                <Route path="/blog/ebitda-co-to-jest" element={<BlogEbitdaCoToJest />} />
                <Route path="/blog/roi-co-to-jest" element={<BlogROICoToJest />} />
                <Route path="/blog/mvp-co-to-jest" element={<BlogMVPCoToJest />} />
                <Route path="/blog/due-diligence-co-to" element={<BlogDueDiligence />} />
                {/* Wave 26 */}
                <Route path="/blog/cpm-co-to" element={<BlogCPMCoTo />} />
                <Route path="/blog/scrum-co-to-jest" element={<BlogScrumCoToJest />} />
                <Route path="/blog/digital-marketing-co-to" element={<BlogDigitalMarketingCoTo />} />
                {/* Wave 25 */}
                <Route path="/blog/cold-calling-co-to" element={<BlogColdCallingCoTo />} />
                <Route path="/blog/lead-magnet-co-to" element={<BlogLeadMagnetCoTo />} />
                <Route path="/uslugi/strona-internetowa-dla-trenera-personalnego" element={<StronaInternetowaDlaTrenera />} />
                {/* Wave 24 */}
                <Route path="/blog/dropshipping-co-to-jest" element={<BlogDropshippingCoToJest />} />
                <Route path="/blog/jak-sprzedawac-na-allegro" element={<BlogJakSprzedawacNaAllegro />} />
                <Route path="/blog/e-commerce-co-to-jest" element={<BlogEcommerceCoToJest />} />
                {/* Wave 23 */}
                <Route path="/blog/google-tag-manager-co-to" element={<BlogGoogleTagManager />} />
                <Route path="/blog/link-building-co-to" element={<BlogLinkBuilding />} />
                <Route path="/blog/core-web-vitals-co-to" element={<BlogCoreWebVitals />} />
                <Route path="/blog/google-search-console-co-to" element={<BlogGoogleSearchConsole />} />
                {/* Wave 22 */}
                <Route path="/blog/kpi-co-to-jest" element={<BlogKPICoToJest />} />
                <Route path="/blog/api-co-to-jest" element={<BlogAPICoToJest />} />
                <Route path="/blog/konwersja-co-to" element={<BlogKonwersjaCoTo />} />
                <Route path="/blog/ctr-co-to-jest" element={<BlogCTRCoToJest />} />
                <Route path="/uslugi/strona-internetowa-dla-fotografa" element={<StronaInternetowaDlaFotografa />} />
                {/* Wave 21 */}
                <Route path="/blog/newsletter-co-to" element={<BlogNewsletterCoTo />} />
                <Route path="/blog/marketing-afiliacyjny-co-to" element={<BlogMarketingAfiliacyjny />} />
                <Route path="/blog/co-to-jest-cms" element={<BlogCMSCoToJest />} />
                <Route path="/uslugi/strona-internetowa-dla-prawnika" element={<StronaInternetowaDlaPrawnika />} />
                {/* Wave 20 */}
                <Route path="/blog/pozycjonowanie-sklepu-internetowego" element={<BlogPozycjonowanieSklepu />} />
                <Route path="/blog/branding-co-to" element={<BlogBrandingCoTo />} />
                <Route path="/blog/ui-ux-co-to" element={<BlogUIUXCoTo />} />
                <Route path="/uslugi/strona-internetowa-dla-stomatologa" element={<StronaInternetowaDlaStomatologa />} />
                {/* Wave 19 */}
                <Route path="/blog/co-to-jest-hosting" element={<BlogCoToJestHosting />} />
                <Route path="/blog/certyfikat-ssl-co-to" element={<BlogCertyfikatSSL />} />
                <Route path="/blog/wordpress-co-to" element={<BlogWordPressCoTo />} />
                <Route path="/blog/domena-co-to-jest" element={<BlogDomenaCoToJest />} />
                <Route path="/blog/jak-pozycjonowac-strone" element={<BlogJakPozycjonowacStrone />} />
                {/* Wave 18 */}
                <Route path="/blog/google-ads-co-to" element={<BlogGoogleAdsCoTo />} />
                <Route path="/blog/seo-co-to-jest" element={<BlogSEOCoToJest />} />
                <Route path="/blog/pozycjonowanie-co-to" element={<BlogPozycjonowanieCoTo />} />
                <Route path="/uslugi/sklep-woocommerce" element={<SklepWooCommerce />} />
                <Route path="/blog/kurs-google-ads" element={<BlogKursGoogleAds />} />
                {/* Wave 17 */}
                <Route path="/blog/shopify-polska" element={<BlogShopifyPolska />} />
                <Route path="/blog/tworzenie-stron-internetowych-cennik" element={<BlogTworzenieStronCennik />} />
                <Route path="/blog/wizytowka-google" element={<BlogWizytowkaGoogle />} />
                <Route path="/blog/sklep-internetowy-cena" element={<BlogSklepInternetowyCena />} />
                {/* Wave 16 */}
                <Route path="/blog/google-moja-firma" element={<GoogleMojaFirma />} />
                <Route path="/uslugi/marketing-automation" element={<MarketingAutomation />} />
                <Route path="/uslugi/lead-generation" element={<LeadGeneration />} />
                <Route path="/agencja-seo-lublin" element={<AgencjaSEOLublin />} />
                <Route path="/uslugi/strona-internetowa-dla-restauracji" element={<StronaInternetowaDlaRestauracji />} />
                {/* Wave 15 */}
                <Route path="/blog/strona-internetowa-cena" element={<StronaInternetowaCena />} />
                <Route path="/uslugi/reklama-facebook" element={<ReklamaFacebook />} />
                <Route path="/uslugi/email-marketing" element={<EmailMarketing />} />
                <Route path="/blog/content-marketing-co-to" element={<BlogContentMarketingCoTo />} />
                <Route path="/uslugi/reklama-instagram" element={<ReklamaInstagram />} />
                <Route path="/blog/pozycjonowanie-stron-cena" element={<BlogPozycjonowanieStronCena />} />
                {/* Wave 14 */}
                <Route path="/uslugi/social-media-marketing" element={<SocialMediaMarketing />} />
                <Route path="/blog/rebranding-co-to" element={<BlogRebrandingCoTo />} />
                <Route path="/blog/copywriting-co-to" element={<BlogCopywritingCoTo />} />
                <Route path="/uslugi/strona-wordpress" element={<StronaWordPress />} />
                <Route path="/uslugi/identyfikacja-wizualna-firmy" element={<IdentyfikacjaWizualnaFirmy />} />
                <Route path="/blog/copywriting-cennik" element={<BlogCopywritingCennik />} />
                <Route path="/uslugi/kampania-google-ads" element={<KampaniaGoogleAds />} />
                <Route path="/uslugi/marketing-b2b" element={<MarketingB2B />} />
                <Route path="/uslugi/audyt-strony-internetowej" element={<AudytStronyInternetowej />} />
                <Route path="/uslugi/optymalizacja-strony-internetowej" element={<OptymalizacjaStronyInternetowej />} />
                <Route path="/uslugi/strona-one-page" element={<StronaOnePage />} />
                <Route path="/agencja-seo-wroclaw" element={<AgencjaSEOWroclaw />} />
                <Route path="/blog/landing-page-cena" element={<BlogLandingPageCena />} />
                <Route path="/uslugi/projektowanie-stron-internetowych" element={<ProjektowanieStronInternetowych />} />
                <Route path="/uslugi/strony-internetowe/lubelskie" element={<StronyInternetoweLubelskie />} />
                <Route path="/uslugi/strony-internetowe/wielkopolska" element={<StronyInternetoweWielkopolska />} />
                <Route path="/uslugi/strony-internetowe/podkarpacie" element={<StronyInternetowePodkarpacie />} />
                <Route path="/uslugi/fotografia-produktowa" element={<FotografiaProduktowa />} />
                <Route path="/uslugi/video-marketing" element={<VideoMarketing />} />
                <Route path="/uslugi/branding" element={<IdentyfikacjaWizualna />} />
                <Route path="/uslugi/produkcja-video" element={<SpotyReklamowe />} />
                <Route path="/uslugi/fotografia" element={<FotografPoznan />} />
                <Route path="/uslugi/fotografia-z-drona" element={<FotografiaZDrona />} />
                <Route path="/uslugi/studio-podcastowe" element={<StudioPodcastowe />} />
                <Route path="/uslugi/produkcja-filmow" element={<ProdukcjaFilmowPoznan />} />

                {/* SEO cluster */}
                <Route path="/seo/audyt" element={<AudytSEO />} />
                <Route path="/seo/pozycjonowanie" element={<Pozycjonowanie />} />
                <Route path="/seo/pozycjonowanie-poznan" element={<PozycjonowanieStronPoznan />} />
                <Route path="/seo/google-maps" element={<PozycjonowanieGoogleMaps />} />
                <Route path="/seo/ecommerce" element={<BlogSEOEcommerce />} />
                <Route path="/seo/lokalne-poznan" element={<BlogSEOLokalnePoznan />} />
                <Route path="/seo/on-page" element={<SEOOnPage />} />
                <Route path="/seo/off-page" element={<SEOOffPage />} />
                <Route path="/seo/techniczne" element={<SEOTechniczne />} />
                <Route path="/seo/link-building" element={<SEOLinkBuilding />} />
                <Route path="/seo/copywriting-seo" element={<SEOCopywriting />} />
                <Route path="/seo/core-web-vitals" element={<SEOCoreWebVitals />} />
                <Route path="/seo/pozycjonowanie-warszawa" element={<SEOPozycjonowanieWarszawa />} />
                <Route path="/seo/pozycjonowanie-krakow" element={<SEOPozycjonowanieKrakow />} />
                <Route path="/seo/pozycjonowanie-wroclaw" element={<SEOPozycjonowanieWroclaw />} />
                <Route path="/seo/pozycjonowanie-gdansk" element={<SEOPozycjonowanieGdansk />} />
                <Route path="/seo/pozycjonowanie-katowice" element={<SEOPozycjonowanieKatowice />} />
                <Route path="/seo/pozycjonowanie-lodz" element={<SEOPozycjonowanieLodz />} />

                {/* Social media cluster */}
                <Route path="/social-media/obsluga" element={<SocialMedia />} />
                <Route path="/social-media/poznan" element={<SocialMediaPoznan />} />
                <Route path="/social-media/influencer" element={<BlogInfluencerMarketing />} />
                <Route path="/social-media/reels-vs-tiktok" element={<BlogReelsVsTikTok />} />
                <Route path="/social-media/strategia" element={<SocialMediaStrategia />} />
                <Route path="/social-media/content" element={<SocialMediaContent />} />
                <Route path="/social-media/analityka" element={<SocialMediaAnalityka />} />
                <Route path="/social-media/tiktok-biznes" element={<BlogTikTokBiznes />} />

                {/* Performance marketing cluster */}
                <Route path="/performance-marketing/google-ads" element={<GoogleAds />} />
                <Route path="/performance-marketing/facebook-ads" element={<FacebookAds />} />
                <Route path="/performance-marketing/instagram-ads" element={<InstagramAds />} />
                <Route path="/performance-marketing/meta-ads" element={<FacebookInstagramAds />} />
                <Route path="/performance-marketing/linkedin-ads" element={<LinkedInAds />} />
                <Route path="/performance-marketing/tiktok-ads" element={<TikTokAds />} />
                <Route path="/performance-marketing/youtube-ads" element={<YouTubeAds />} />
                <Route path="/performance-marketing/google-vs-facebook" element={<BlogGoogleVsFacebook />} />
                <Route path="/performance-marketing/remarketing" element={<BlogRemarketing />} />
                <Route path="/performance-marketing/optymalizacja" element={<PMOptymalizacja />} />
                <Route path="/performance-marketing/targetowanie" element={<PMTargetowanie />} />

                {/* Content marketing cluster */}
                <Route path="/content-marketing/strategia" element={<ContentMarketing />} />
                <Route path="/content-marketing/copywriting-landing" element={<BlogCopywritingLanding />} />
                <Route path="/content-marketing/email-2025" element={<BlogEmailMarketing />} />
                <Route path="/content-marketing/kampanie" element={<BlogKampaniaReklamowa />} />
                <Route path="/content-marketing/tresci-seo" element={<Redirect301 to="/content-marketing/strategia" />} />
                <Route path="/content-marketing/ebooki" element={<CMEbooki />} />
                <Route path="/content-marketing/video-content" element={<CMVideoContent />} />

                {/* Legacy local SEO pages (unchanged paths) */}
                <Route path="/agencja-marketingowa-poznan" element={<AgencjaMarketingowaPoznan />} />
                <Route path="/agencja-marketingu-internetowego" element={<AgencjaMarketinguInternetowego />} />
                <Route path="/agencja-reklamowa-poznan" element={<AgencjaReklamowaPoznan />} />
                <Route path="/agencja-seo-poznan" element={<AgencjaSEOPoznan />} />
                <Route path="/uslugi/sklepy-internetowe" element={<SklepyInternetowe />} />
                <Route path="/uslugi/sklepy-internetowe/poznan" element={<SklepyInternetowePoznan />} />
                <Route path="/uslugi/sklepy-internetowe/warszawa" element={<SklepyInternetoweWarszawa />} />
                <Route path="/uslugi/sklepy-internetowe/krakow" element={<SklepyInternetoweKrakow />} />
                <Route path="/agencja-marketingowa-warszawa" element={<AgencjaMarketingowaWarszawa />} />
                <Route path="/agencja-marketingowa-katowice" element={<AgencjaMarketingowaKatowice />} />
                <Route path="/agencja-marketingowa-wroclaw" element={<AgencjaMarketingowaWroclaw />} />
                <Route path="/agencja-marketingowa-lodz" element={<AgencjaMarketingowaLodz />} />
                <Route path="/agencja-marketingowa-gdansk" element={<AgencjaMarketingowaGdansk />} />
                <Route path="/agencja-marketingowa-krakow" element={<AgencjaMarketingowaKrakow />} />
                <Route path="/agencja-marketingowa-lublin" element={<AgencjaMarketingowaLublin />} />
                <Route path="/agencja-marketingowa-rzeszow" element={<AgencjaMarketingowaRzeszow />} />
                <Route path="/agencja-marketingowa-bydgoszcz" element={<AgencjaMarketingowaBydgoszcz />} />
                <Route path="/agencja-marketingowa-torun" element={<AgencjaMarketingowaTorun />} />
                <Route path="/agencja-marketingowa-szczecin" element={<AgencjaMarketingowaSzczecin />} />
                <Route path="/agencja-marketingowa-opole" element={<AgencjaMarketingowaOpole />} />
                <Route path="/agencja-marketingowa-olsztyn" element={<AgencjaMarketingowaOlsztyn />} />
                <Route path="/cennik-stron-internetowych" element={<CennikStronInternetowych />} />
                <Route path="/cennik-pozycjonowania" element={<CennikPozycjonowania />} />
                <Route path="/agencja-kreatywna-poznan" element={<AgencjaKreaTywnaPoznan />} />
                <Route path="/agencja-graficzna" element={<AgencjaGraficzna />} />
                <Route path="/kompleksowa-obsluga-marketingowa" element={<KompleksowaObsluga />} />
                <Route path="/wizualizacje-3d" element={<Wizualizacje3D />} />
                <Route path="/ai-marketing" element={<AIMarketing />} />
                <Route path="/ai-seo" element={<AISEO />} />
                <Route path="/kampanie-reklamowe" element={<KampanieReklamowe />} />
                <Route path="/kampanie-reklamowe-poznan" element={<KampanieReklamowePoznan />} />

                {/* Dla kogo - hub + audience pages */}
                <Route path="/dla-kogo" element={<DlaKogo />} />
                <Route path="/dla-kogo/firmy-lokalne" element={<DlaKogoFirmyLokalne />} />
                <Route path="/dla-kogo/ecommerce" element={<DlaKogoEcommerce />} />
                <Route path="/dla-kogo/marki-premium" element={<DlaKogoMarkiPremium />} />
                <Route path="/dla-kogo/instytucje" element={<DlaKogoInstytucje />} />

                {/* Dla kogo - industry pages */}
                <Route path="/dla-kogo/branza-medyczna" element={<MarketingMedyczny />} />
                <Route path="/dla-kogo/gastronomia" element={<MarketingGastronomia />} />
                <Route path="/dla-kogo/beauty-wellness" element={<MarketingBeauty />} />
                <Route path="/dla-kogo/nieruchomosci" element={<MarketingNieruchomosci />} />
                <Route path="/dla-kogo/automotive" element={<MarketingAutomotive />} />
                <Route path="/dla-kogo/edukacja" element={<MarketingEdukacja />} />
                <Route path="/dla-kogo/prawo-finanse" element={<MarketingPrawoFinanse />} />
                <Route path="/dla-kogo/ecommerce-retail" element={<MarketingEcommerceRetail />} />
                <Route path="/dla-kogo/it-saas" element={<MarketingIT />} />
                <Route path="/dla-kogo/produkcja" element={<MarketingProdukcja />} />
                <Route path="/dla-kogo/ngo" element={<MarketingNGO />} />
                <Route path="/dla-kogo/turystyka" element={<MarketingTurystyka />} />

                <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
                <Route path="/regulamin" element={<Regulamin />} />
                <Route path="/kariera" element={<Kariera />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/cennik" element={<Cennik />} />
                <Route path="/podziekowanie" element={<Podziekowanie />} />
                <Route path="/zainstaluj" element={<Zainstaluj />} />
                <Route path="/admin/rezerwacje" element={<AdminRezerwacje />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/kalkulator-roi" element={<KalkulatorROI />} />
                <Route path="/slownik-marketingowy" element={<SlownikMarketingowy />} />
                <Route path="/zasoby" element={<Zasoby />} />
                <Route path="/generator-briefu" element={<GeneratorBriefu />} />
                <Route path="/kalkulator-cen" element={<KalkulatorCen />} />
                
                {/* 301 Redirects - broken/legacy paths */}
                <Route path="/login" element={<Redirect301 to="/zasoby" />} />
                <Route path="/akademia" element={<Redirect301 to="/zasoby" />} />
                <Route path="/akademia/*" element={<Redirect301 to="/zasoby" />} />
                <Route path="/landing-page" element={<Redirect301 to="/blog/jak-stworzyc-landing-page" />} />

                {/* 301 Redirects - stare URL-e /branze/* */}
                <Route path="/branze/marketing-medyczny" element={<Redirect301 to="/dla-kogo/branza-medyczna" />} />
                <Route path="/branze/marketing-gastronomia" element={<Redirect301 to="/dla-kogo/gastronomia" />} />
                <Route path="/branze/marketing-beauty" element={<Redirect301 to="/dla-kogo/beauty-wellness" />} />
                <Route path="/branze/marketing-nieruchomosci" element={<Redirect301 to="/dla-kogo/nieruchomosci" />} />
                <Route path="/branze/marketing-automotive" element={<Redirect301 to="/dla-kogo/automotive" />} />
                <Route path="/branze/marketing-edukacja" element={<Redirect301 to="/dla-kogo/edukacja" />} />
                <Route path="/branze/marketing-prawo-finanse" element={<Redirect301 to="/dla-kogo/prawo-finanse" />} />
                <Route path="/branze/marketing-ecommerce-retail" element={<Redirect301 to="/dla-kogo/ecommerce-retail" />} />
                <Route path="/branze/marketing-it" element={<Redirect301 to="/dla-kogo/it-saas" />} />
                <Route path="/branze/marketing-produkcja" element={<Redirect301 to="/dla-kogo/produkcja" />} />
                <Route path="/branze/marketing-ngo" element={<Redirect301 to="/dla-kogo/ngo" />} />
                <Route path="/branze/marketing-turystyka" element={<Redirect301 to="/dla-kogo/turystyka" />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Suspense fallback={null}>
              <SEODevPanel />
            </Suspense>
          </BrowserRouter>
          <Suspense fallback={null}>
            <CookieBanner />
          </Suspense>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
