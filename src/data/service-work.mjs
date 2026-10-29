import { industryWork } from './industry-work.mjs';
import { libraryProjects as library } from './industry-library.mjs';

const projects = Object.fromEntries(Object.values(industryWork).flatMap(work => work.projects).map(project => [project.image, project]));

export const serviceWork = {
  video: {
    title: 'Od filmu firmowego do krótkiej rolki',
    description: 'Produkcja przemysłowa, przelot FPV, salon, produkt i wypowiedź ekspercka. Zobacz, jak dopasowujemy obraz i montaż do tematu.',
    projects: [library.bax, library.gierky, library.ladavinci, library.krypton, projects.medeor, projects['wsb-merito']],
  },
  photo: {
    title: 'Produkty, miejsca i ludzie w naszych kadrach',
    description: 'Wybrane fotografie z sesji dla marek, gabinetów i firm oraz reportaż z wydarzenia kancelarii.',
    projects: [library.klagemPhoto, library.kobbe, library.dsk, library.endo, projects['gierky-bar'], projects['dembski-nowak']],
  },
  product: {
    title: 'Produkt pokazany w detalu i w użyciu',
    description: 'Meble, moda i produkty motoryzacyjne — trzy różne realizacje fotograficzne FOTZ Studio.',
    projects: [library.klagemPhoto, library.kobbe, { image: 'krypton-fotografia', name: 'Krypton.tools', scope: 'Fotografia produktowa w użyciu', description: 'Zdjęcie produktu w warsztatowym otoczeniu. Czytelne opakowanie i detal pokazane w kontekście zastosowania.', alt: 'Zmywacz do hamulców Krypton.tools trzymany w rękawicach w warsztacie' }],
  },
  drone: {
    title: 'Z powietrza i z bliska',
    description: 'Przelot FPV przez lokal, prezentacja osiedla i fotografia stadionu z drona. Każdy materiał pokazuje inny sposób wykorzystania perspektywy z powietrza.',
    projects: [library.gierky, library.skaland, projects['swiatowy-dzien-sm']],
  },
  web: {
    title: 'Strony dla różnych marek i różnych odbiorców',
    description: 'Producent, organizacja biznesowa, lokal, marka kosmetyczna, kancelaria i strona osobista. Zobacz projekty oraz zakres naszej pracy.',
    projects: [projects.fps, { image: 'rppg', name: 'RPPG Group', scope: 'Projekt strony internetowej', description: 'Serwis Rady Polskich Przedsiębiorców Globalnych prezentujący organizację i jej działalność.', alt: 'Projekt strony RPPG Group na ekranie laptopa', href: '/realizacje/rppg', linkLabel: 'Zobacz realizację RPPG', fit: 'contain' }, projects['gierky-web'], projects.verthe, projects['ratio-legal'], projects.romanowski],
  },
  '3d': {
    title: '3D, z którym można wejść w interakcję',
    description: 'Prezentacja produktu i nawigacja po obiekcie — wybrane projekty łączące model 3D z interfejsem użytkownika.',
    projects: [library.klagemVideo, { image: 'enea-nawigator', name: 'Enea Stadion — nawigator kibica 3D', scope: 'Projekt aplikacji i interfejsu 3D', description: 'Projekt nawigatora stadionu: wybór sektora, orientacja w obiekcie oraz prezentacja dojazdu i parkingów. Pokazujemy interfejs aplikacji z naszego portfolio.', alt: 'Interfejs nawigatora 3D Enea Stadionu z wyborem sektora i trybuny', href: '/realizacje#projekt-enea-nawigator', linkLabel: 'Zobacz projekt nawigatora', fit: 'contain' }],
  },
};

export const serviceWorkRoutes = {
  '/uslugi/produkcja-video': 'video',
  '/uslugi/produkcja-filmow': 'video',
  '/uslugi/fotografia': 'photo',
  '/uslugi/fotografia-produktowa': 'product',
  '/uslugi/fotografia-z-drona': 'drone',
  '/uslugi/strony-internetowe': 'web',
  '/wizualizacje-3d': '3d',
};

export function getServiceWork(pathname) {
  return serviceWorkRoutes[pathname.replace(/\/+$/, '')] ?? null;
}
