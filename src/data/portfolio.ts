import { Camera, Video, Building, Users, Sparkles, MapPin, Music, Utensils, Briefcase } from "lucide-react";

// Import local portfolio images
import rppgImg from "@/assets/portfolio/rppg.png";
import fpsCegielskiImg from "@/assets/portfolio/fps-cegielski.png";
import fabrykaViraliImg from "@/assets/portfolio/fabryka-virali.png";
import friendlyGasImg from "@/assets/portfolio/friendly-gas-new.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";
import apartamentyChorwacjaImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import klagemImg from "@/assets/portfolio/klagem.png";
import mechanicaImg from "@/assets/portfolio/mechanica.png";
import celsjuszImg from "@/assets/portfolio/celsjusz.png";
import sookarImg from "@/assets/portfolio/sookar.jpg";
import grafImg from "@/assets/portfolio/graf-tapicerstwo.png";
import stageplanImg from "@/assets/portfolio/stageplan.jpg";
import vertheImg from "@/assets/portfolio/verthe.png";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import gierkiImg from "@/assets/portfolio/gierki.png";
import przedszkoleImg from "@/assets/portfolio/przedszkole.png";
import eneaStadionImg from "@/assets/portfolio/enea-stadion-web.webp";
import lauvjahImg from "@/assets/portfolio/lauvjah.png";

// Wizualizacje 3D
import viz17 from "@/assets/wizualizacje/viz-17.webp";
import viz18 from "@/assets/wizualizacje/viz-18.webp";
import viz19 from "@/assets/wizualizacje/viz-19.webp";
import viz20 from "@/assets/wizualizacje/viz-20.webp";
import viz21 from "@/assets/wizualizacje/viz-21.webp";
import viz22 from "@/assets/wizualizacje/viz-22.webp";

// Fotografia koncertowa
import concert1 from "@/assets/fotograf/concert-1.jpg";
import concert2 from "@/assets/fotograf/concert-2.jpg";
import concert3 from "@/assets/fotograf/concert-3.png";
import concert4 from "@/assets/fotograf/concert-4.jpg";
import concert5 from "@/assets/fotograf/concert-5.jpg";
import concert6 from "@/assets/fotograf/concert-6.jpg";
import concert7 from "@/assets/fotograf/concert-7.jpg";
import concert8 from "@/assets/fotograf/concert-8.jpg";
import concert9 from "@/assets/fotograf/concert-9.jpg";

// Fotografia eventowa
import event1 from "@/assets/fotograf/event-1.jpg";
import event2 from "@/assets/fotograf/event-2.jpg";
import event3 from "@/assets/fotograf/event-3.jpg";

// Portrety
import portrait1 from "@/assets/fotograf/portrait-1.png";
import portrait2 from "@/assets/fotograf/portrait-2.jpg";
import portrait3 from "@/assets/fotograf/portrait-3.jpg";
import portrait4 from "@/assets/fotograf/portrait-4.jpg";
import portrait5 from "@/assets/fotograf/portrait-5.png";
import portrait6 from "@/assets/fotograf/portrait-6.jpg";
import portrait7 from "@/assets/fotograf/portrait-7.png";
import portrait8 from "@/assets/fotograf/portrait-8.jpg";

// Drone / Aerial
import droneAerial from "@/assets/drone/event-aerial-view.jpg";
import droneBull from "@/assets/drone/event-bull-ride.jpg";
import droneConcert1 from "@/assets/drone/event-concert-1.jpg";
import droneConcert2 from "@/assets/drone/event-concert-2.jpg";
import dronePicnic1 from "@/assets/drone/event-picnic-1.jpg";
import dronePicnicTop from "@/assets/drone/event-picnic-top.jpg";

// Enea Stadion
import eneaTriatlon from "@/assets/enea/bydgoszcz-triatlon.png";
import eneaCatering from "@/assets/enea/catering-event.jpg";
import eneaConference from "@/assets/enea/conference-league.jpg";
import eneaPodsiadlo from "@/assets/enea/dawid-podsiadlo-koncert.jpg";
import eneaGrill from "@/assets/enea/grill-event.jpg";
import eneaKonferencja from "@/assets/enea/konferencja-event.jpg";
import eneaLounge from "@/assets/enea/lech-poznan-lounge.jpg";
import eneaFajerwerki from "@/assets/enea/stadion-race-fajerwerki.jpg";

// Gierky
import gierkyBar from "@/assets/gierky/gierky-bar.jpg";
import gierkyBowling from "@/assets/gierky/gierky-bowling.jpg";
import gierkyDarts from "@/assets/gierky/gierky-darts.jpg";
import gierkyGolf from "@/assets/gierky/gierky-golf.jpg";
import gierkyHall from "@/assets/gierky/gierky-hall.jpg";
import gierkyLounge from "@/assets/gierky/gierky-lounge.jpg";
import gierkyPinball from "@/assets/gierky/gierky-pinball.jpg";
import gierkyReception from "@/assets/gierky/gierky-reception.jpg";
import gierkyShuffleboard from "@/assets/gierky/gierky-shuffleboard.jpg";
import gierkyTables from "@/assets/gierky/gierky-tables.jpg";

// Backstage
import backstage1 from "@/assets/backstage/backstage-1.png";
import backstage2 from "@/assets/backstage/backstage-2.png";
import backstage3 from "@/assets/backstage/backstage-3.png";
import backstage4 from "@/assets/backstage/backstage-4.png";
import backstage5 from "@/assets/backstage/backstage-5.png";
import backstage6 from "@/assets/backstage/backstage-6.png";
import sessionFinal1 from "@/assets/backstage/session-final-1.png";
import sessionFinal2 from "@/assets/backstage/session-final-2.png";

export const projects = [
  {
    id: "dawid-edu",
    title: "Dawid EDU",
    category: "Kampanie reklamowe",
    description: "Kampania rekrutacyjna Meta Ads, kreacje i poprawki ścieżki kontaktu. 1 216 wyświetleń strony w okresie 18.08–28.09.2026.",
    image: "/case-studies/dawid-edu/ed-a.webp",
    featured: false,
    hasCase: true,
  },
  {
    id: "rppg",
    title: "RPPG Group",
    category: "Strony www",
    description: "Strona internetowa z interaktywnym globusem 3D, SEO i produkcja foto/video dla Rady Polskich Przedsiębiorców Globalnych.",
    image: rppgImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "enea-stadion",
    title: "Enea Stadion Poznań",
    category: "Strony www",
    description: "Strona internetowa prezentująca Enea Stadion w Poznaniu, przestrzenie obiektu i jego ofertę.",
    image: eneaStadionImg,
    featured: true,
    hasCase: true,
  },
  {
    id: "fps-cegielski",
    title: "FPS Poznań (Cegielski)",
    category: "Strony www",
    description: "Nowoczesna strona internetowa i identyfikacja wizualna dla historycznej fabryki pojazdów szynowych.",
    image: fpsCegielskiImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "fabryka-virali",
    title: "Fabryka Virali",
    category: "Strony www",
    description: "Strona internetowa z przejrzystym cennikiem i portfolio dla agencji marketingowej.",
    image: fabrykaViraliImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "friendly-gas",
    title: "Friendly Gas",
    category: "Strony www",
    description: "Strona www z systemem zamówień online, identyfikacja wizualna i SEO dla dystrybutora gazów technicznych.",
    image: friendlyGasImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "gierki",
    title: "Gierky Activity Bar",
    category: "Strony www",
    description: "Strona internetowa z systemem rezerwacji dla activity baru w centrum Poznania.",
    image: gierkiImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "przedszkole",
    title: "Przedszkole Mali Przyjaciele",
    category: "Strony www",
    description: "Strona internetowa, SEO i produkcja foto/video dla publicznego przedszkola.",
    image: przedszkoleImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "verthe",
    title: "Verthé",
    category: "E-commerce",
    description: "Sklep e-commerce z greckimi kosmetykami wegańskimi. SEM, SEO i produkcja foto/video.",
    image: vertheImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "victory-cars",
    title: "Victory Cars",
    category: "Strony www",
    description: "Strona internetowa dla dealera samochodów premium z gwarancją producenta.",
    image: victoryCarsImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "klagem",
    title: "Klagem",
    category: "Strony www",
    description: "Strona www dla firmy z modułowymi systemami meblowymi.",
    image: klagemImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "mechanica",
    title: "Mechanica",
    category: "Strony www",
    description: "Strona internetowa dla producenta urządzeń do transportu bliskiego - żurawie, suwnice.",
    image: mechanicaImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "celsjusz",
    title: "Celsjusz OZE",
    category: "Strony www",
    description: "Strona internetowa dla firmy OZE - pompy ciepła i fotowoltaika.",
    image: celsjuszImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "sookar",
    title: "Sookar",
    category: "Strony www",
    description: "Elite car market - strona internetowa dla dealera samochodów luksusowych.",
    image: sookarImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "graf-tapicerstwo",
    title: "Graf Tapicerstwo",
    category: "Strony www",
    description: "Strona www dla firmy tapicerskiej specjalizującej się w zabudowie busów.",
    image: grafImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "stageplan",
    title: "Stage Plan",
    category: "Strony www",
    description: "Strona internetowa dla firmy zajmującej się profesjonalną techniką sceniczną.",
    image: stageplanImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "cute-dumpling",
    title: "Cute as a Dumpling",
    category: "E-commerce",
    description: "Sklep internetowy z ozdobami świątecznymi. Design, UX i integracje.",
    image: cuteDumplingImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "apartamenty-chorwacja",
    title: "Apartamenty Chorwacja",
    category: "Strony www",
    description: "Strona internetowa dla apartamentów na wynajem w Chorwacji z systemem rezerwacji.",
    image: apartamentyChorwacjaImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "lauvjah",
    title: "Lauvjah Transport",
    category: "Strony www",
    description: "Strona internetowa dla firmy transportowo-spedycyjnej.",
    image: lauvjahImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "viz-sypialnia",
    title: "Wizualizacja sypialni",
    category: "Wizualizacje 3D",
    description: "Fotorealistyczna wizualizacja 3D sypialni w stylu japońskim.",
    image: viz17,
    featured: false,
    hasCase: false,
  },
  {
    id: "viz-salon-schody",
    title: "Salon ze schodami (Klagem)",
    category: "Wizualizacje 3D",
    description: "Wizualizacja wnętrza salonu z nowoczesnymi schodami i meblami modułowymi Klagem.",
    image: viz18,
    featured: false,
    hasCase: false,
  },
];

// Gallery categories with images
export const galleryCategories = [
  { id: "all", label: "Wszystkie", icon: Sparkles },
  { id: "concerts", label: "Koncerty", icon: Music },
  { id: "events", label: "Eventy", icon: Users },
  { id: "portraits", label: "Portrety", icon: Camera },
  { id: "drone", label: "Z drona", icon: MapPin },
  { id: "enea", label: "Enea Stadion", icon: Building },
  { id: "gierky", label: "Gierky", icon: Utensils },
  { id: "backstage", label: "Backstage", icon: Video },
  { id: "3d", label: "Wizualizacje 3D", icon: Briefcase },
];

export const galleryImages = [
  // Koncerty
  { src: concert1, title: "Koncert - ujęcie 1", category: "concerts" },
  { src: concert2, title: "Koncert - ujęcie 2", category: "concerts" },
  { src: concert3, title: "Koncert - ujęcie 3", category: "concerts" },
  { src: concert4, title: "Koncert - ujęcie 4", category: "concerts" },
  { src: concert5, title: "Koncert - ujęcie 5", category: "concerts" },
  { src: concert6, title: "Koncert - ujęcie 6", category: "concerts" },
  { src: concert7, title: "Koncert - ujęcie 7", category: "concerts" },
  { src: concert8, title: "Koncert - ujęcie 8", category: "concerts" },
  { src: concert9, title: "Koncert - ujęcie 9", category: "concerts" },
  
  // Eventy
  { src: event1, title: "Event firmowy", category: "events" },
  { src: event2, title: "Event korporacyjny", category: "events" },
  { src: event3, title: "Gala wieczorna", category: "events" },
  
  // Portrety
  { src: portrait1, title: "Portret biznesowy", category: "portraits" },
  { src: portrait2, title: "Portret studyjny", category: "portraits" },
  { src: portrait3, title: "Portret artystyczny", category: "portraits" },
  { src: portrait4, title: "Sesja portretowa", category: "portraits" },
  { src: portrait5, title: "Portret profesjonalny", category: "portraits" },
  { src: portrait6, title: "Headshot", category: "portraits" },
  { src: portrait7, title: "Portret lifestyle", category: "portraits" },
  { src: portrait8, title: "Portret kreatywny", category: "portraits" },
  
  // Drone
  { src: droneAerial, title: "Widok z lotu ptaka", category: "drone" },
  { src: droneBull, title: "Event - rodeo", category: "drone" },
  { src: droneConcert1, title: "Koncert z drona", category: "drone" },
  { src: droneConcert2, title: "Tłum na koncercie", category: "drone" },
  { src: dronePicnic1, title: "Piknik firmowy", category: "drone" },
  { src: dronePicnicTop, title: "Event z góry", category: "drone" },
  
  // Enea Stadion
  { src: eneaTriatlon, title: "Triatlon Bydgoszcz", category: "enea" },
  { src: eneaCatering, title: "Catering eventowy", category: "enea" },
  { src: eneaConference, title: "Liga Konferencji", category: "enea" },
  { src: eneaPodsiadlo, title: "Koncert Dawida Podsiadło", category: "enea" },
  { src: eneaGrill, title: "Event grillowy", category: "enea" },
  { src: eneaKonferencja, title: "Konferencja prasowa", category: "enea" },
  { src: eneaLounge, title: "Lech Poznań Lounge", category: "enea" },
  { src: eneaFajerwerki, title: "Fajerwerki na stadionie", category: "enea" },
  
  // Gierky
  { src: gierkyBar, title: "Bar Gierky", category: "gierky" },
  { src: gierkyBowling, title: "Strefa bowlingowa", category: "gierky" },
  { src: gierkyDarts, title: "Strefa darta", category: "gierky" },
  { src: gierkyGolf, title: "Symulator golfa", category: "gierky" },
  { src: gierkyHall, title: "Hala główna", category: "gierky" },
  { src: gierkyLounge, title: "Strefa lounge", category: "gierky" },
  { src: gierkyPinball, title: "Automaty pinball", category: "gierky" },
  { src: gierkyReception, title: "Recepcja", category: "gierky" },
  { src: gierkyShuffleboard, title: "Shuffleboard", category: "gierky" },
  { src: gierkyTables, title: "Stoły do gier", category: "gierky" },
  
  
  // Backstage
  { src: backstage1, title: "Za kulisami 1", category: "backstage" },
  { src: backstage2, title: "Za kulisami 2", category: "backstage" },
  { src: backstage3, title: "Za kulisami 3", category: "backstage" },
  { src: backstage4, title: "Za kulisami 4", category: "backstage" },
  { src: backstage5, title: "Za kulisami 5", category: "backstage" },
  { src: backstage6, title: "Za kulisami 6", category: "backstage" },
  { src: sessionFinal1, title: "Efekt końcowy 1", category: "backstage" },
  { src: sessionFinal2, title: "Efekt końcowy 2", category: "backstage" },
  
  // Wizualizacje 3D
  { src: viz17, title: "Sypialnia japońska", category: "3d" },
  { src: viz18, title: "Salon ze schodami", category: "3d" },
  { src: viz19, title: "Salon nowoczesny", category: "3d" },
  { src: viz20, title: "Loft industrialny", category: "3d" },
  { src: viz21, title: "Przestrzeń dzienna", category: "3d" },
  { src: viz22, title: "Biurko modułowe", category: "3d" },
];

