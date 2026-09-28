const offers = {
  www: {
    region: 'Strony internetowe / Polska',
    headline: 'Dobra firma.<br><em>Dobra strona.</em>',
    intro: 'Pokaż jakość swojej firmy, zanim padnie pierwsze „dzień dobry”. Projektujemy strony, które przedstawiają ofertę i prowadzą do kontaktu.',
    cta: 'Porozmawiajmy o stronie',
    foot: 'Strategia. Projekt. Wdrożenie.',
    line: 'Tworzymy dla firm, które mają coś do pokazania.',
    tags: ['Strony firmowe', 'E-commerce', 'Przebudowy'],
    workHeading: 'Tak wygląda<br><span>nasza praca.</span>',
    workIntro: 'Różne branże, różne potrzeby.<br>Każdy projekt z własnym charakterem.',
    projects: [
      {name:'Enea Stadion', type:'Serwis internetowy', image:'enea.png', alt:'Projekt strony Enea Stadion prezentowany na laptopie', url:'https://www.fotz-studio.pl/realizacje/enea-stadion'},
      {name:'Klagem', type:'Strona firmowa / prezentacja oferty', image:'klagem.png', alt:'Projekt strony Klagem z pomarańczową identyfikacją na komputerze', url:'https://www.fotz-studio.pl/realizacje/klagem'},
      {name:'Verthe', type:'E-commerce / marka kosmetyczna', image:'verthe.png', alt:'Sklep Verthe prezentowany na laptopie na szałwiowym tle', url:'https://www.fotz-studio.pl/realizacje/verthe'}
    ],
    approachHeading:'Od pierwszej rozmowy<br><span>do gotowej strony.</span>',
    approachIntro:'Nie potrzebujesz gotowego briefu. Zaczniemy od rozmowy o Twojej ofercie, klientach i tym, co strona ma dla Ciebie robić.',
    steps:[
      ['Najpierw cel.','Ustalamy, do kogo mówisz, co oferujesz i jak klient ma zrobić następny krok.'],
      ['Potem projekt.','Układ, treści i wygląd dopasowujemy do Twojej marki. Wiesz, co powstaje, zanim przejdziemy dalej.'],
      ['Na końcu start.','Wdrażamy stronę i sprawdzamy widok mobilny, nawigację oraz formularze w ustalonym zakresie.']
    ],
    contactHeading:'Zróbmy<br><em>dobrą stronę.</em>',
    contactIntro:'Nowa strona czy zmiana obecnej? Opowiedz nam o firmie. Wrócimy do Ciebie z pytaniami i ustalimy kolejny krok.',
    choices:['Nowa strona','Przebudowa','Sklep internetowy'],
    messageLabel:'Kilka słów o projekcie *',
    placeholder:'Czym zajmuje się firma? Czego potrzebujesz?',
    faq:[
      ['Ile kosztuje strona?','Cena zależy od podstron, funkcji, materiałów i integracji. Najpierw ustalimy zakres, a potem przedstawimy wycenę.'],
      ['Czy muszę mieć gotowe teksty i zdjęcia?','Nie musisz mieć wszystkiego na początku. Wspólnie ustalimy, co możesz dostarczyć, a co przygotować w ramach projektu.'],
      ['Czy możemy pracować zdalnie?','Tak. Projekty stron realizujemy dla firm z całej Polski. Etapy i sposób komunikacji ustalamy na początku współpracy.']
    ]
  },
  video: {
    region:'Filmy i rolki / Poznań i Wielkopolska',
    headline:'Twoja firma.<br><em>Nasze kadry.</em>',
    intro:'Produkty, miejsca i ludzie. Pokaż to, co wyróżnia Twoją firmę. Zajmiemy się pomysłem, nagraniami i montażem filmów oraz rolek.',
    cta:'Porozmawiajmy o nagraniach',
    foot:'Pomysł. Nagrania. Montaż.',
    line:'Dobry materiał zaczyna się od dobrego pomysłu.',
    tags:['Filmy reklamowe','Rolki','Relacje'],
    workHeading:'Zobacz, jak<br><span>opowiadamy obrazem.</span>',
    workIntro:'Miejsce, produkt, wydarzenie.<br>Forma dopasowana do tego, co chcesz pokazać.',
    projects:[
      {name:'Enea Stadion',type:'Wideo / wydarzenia',image:'enea-film.jpg',film:'enea-stadion-header.mp4',alt:'Kadr z materiału filmowego Enea Stadion'},
      {name:'FPS Poznań',type:'Wideo / przemysł',image:'fps-film.jpg',film:'fps-poznan.mp4',alt:'Kadr z filmu dla FPS Poznań'},
      {name:'Auto Spa',type:'Wideo / automotive',image:'autospa-film.jpg',film:'autospa.mp4',alt:'Kadr z filmu Auto Spa'}
    ],
    approachHeading:'Nie musisz mówić<br><span>do kamery.</span>',
    approachIntro:'Możemy pokazać produkt, detale, wnętrze i pracę zespołu. Najpierw ustalimy cel materiału i sposób, w jaki najlepiej pokazać Twoją ofertę.',
    steps:[
      ['Pomysł.','Rozmawiamy o firmie i odbiorcach. Ustalamy formę, główny przekaz i potrzebne ujęcia.'],
      ['Nagrania.','Umawiamy miejsce i termin. Przed nagraniami wiesz, co przygotować i jak będzie wyglądać realizacja.'],
      ['Gotowy materiał.','Montujemy film i przygotowujemy uzgodnione formaty. Zakres poprawek określamy w ofercie.']
    ],
    contactHeading:'Pokażmy<br><em>Twoją firmę.</em>',
    contactIntro:'Opowiedz, co chcesz nagrać i gdzie. Dobierzemy pomysł, zakres produkcji oraz formaty do Twoich kanałów publikacji.',
    choices:['Rolki','Film reklamowy','Relacja z wydarzenia'],
    messageLabel:'Co chcesz nagrać i w jakiej miejscowości? *',
    placeholder:'Opisz firmę, cel materiału i miejsce nagrań.',
    faq:[
      ['Czy muszę występować w filmie?','Nie. Film możemy oprzeć na produkcie, miejscu, detalach i ujęciach pracy. Jeśli występujesz w materiale, wcześniej ustalimy plan nagrań.'],
      ['Ile kosztują nagrania?','Cena zależy od lokalizacji, organizacji zdjęć, liczby materiałów i montażu. Zakres i wycenę otrzymasz przed rozpoczęciem współpracy.'],
      ['Czy przygotujecie rolki i film z jednego nagrania?','Możemy zaplanować taką realizację. Liczbę materiałów, długości i formaty ustalamy przed nagraniami.']
    ]
  }
};

let service = document.body.dataset.service === 'video' ? 'video' : 'www';
let activeProject = 0;
const byId = id => document.getElementById(id);
const dialog = byId('film-dialog');
const player = byId('film-player');

function openFilm(project) {
  player.src = '/videos/' + project.film;
  player.poster = 'assets/' + project.image;
  byId('film-title').textContent = project.name + ' / ' + project.type;
  dialog.showModal();
  player.play().catch(() => {});
}
function selectProject(index) {
  activeProject = index;
  const project = offers[service].projects[index];
  byId('hero-image').src = 'assets/' + project.image;
  byId('hero-image').alt = project.alt;
  byId('hero-project-name').textContent = project.name;
  byId('hero-project-type').textContent = project.type;
  byId('gallery-count').textContent = '0' + (index + 1) + ' — 03';
  byId('hero-project').href = project.url || '#realizacje';
  byId('hero-project').setAttribute('aria-label', (project.film ? 'Odtwórz film: ' : 'Zobacz realizację: ') + project.name);
  if (project.url) {
    byId('hero-project').target = '_blank';
    byId('hero-project').rel = 'noopener';
  } else {
    byId('hero-project').removeAttribute('target');
  }
  byId('hero-project').querySelector('.project-open').textContent = project.film ? '▷' : '↗';
  document.querySelectorAll('[data-project]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.project) === index)));
}
function render() {
  const data = offers[service];
  document.body.dataset.service = service;
  document.title = (service === 'www' ? 'Strony internetowe' : 'Filmy i rolki') + ' dla firm — FOTZ Studio';
  document.querySelectorAll('button[data-service]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.service === service)));
  const mapping = {region:'region',intro:'intro','hero-cta':'cta','hero-foot':'foot','service-line':'line','approach-intro':'approachIntro','contact-intro':'contactIntro','message-label':'messageLabel'};
  Object.entries(mapping).forEach(([id,key]) => byId(id).textContent = data[key]);
  const rich = {headline:'headline','work-heading':'workHeading','work-intro':'workIntro','approach-heading':'approachHeading','contact-heading':'contactHeading'};
  Object.entries(rich).forEach(([id,key]) => byId(id).innerHTML = data[key]);
  byId('message').placeholder = data.placeholder;
  byId('service-tags').innerHTML = data.tags.map(item => '<span>' + item + '</span>').join('');
  byId('project-picker').innerHTML = data.projects.map((project,index) => '<button type="button" data-project="' + index + '" aria-pressed="' + (index === 0) + '"><img src="assets/' + project.image + '" alt="" width="49" height="34"><span>' + project.name + '</span></button>').join('');
  byId('work-grid').innerHTML = data.projects.map((project,index) => {
    const media = '<img src="assets/' + project.image + '" alt="' + project.alt + '" loading="lazy" width="1920" height="1200"><span class="project-open" aria-hidden="true">' + (project.film ? '▷' : '↗') + '</span>';
    const linkedMedia = project.film
      ? '<button class="work-image" type="button" data-film="' + index + '" aria-label="Odtwórz film: ' + project.name + '">' + media + '</button>'
      : '<a class="work-image" href="' + project.url + '" target="_blank" rel="noopener" aria-label="Zobacz realizację: ' + project.name + '">' + media + '</a>';
    return '<article class="work-item">' + linkedMedia + '<div class="work-meta"><div><h3>' + project.name + '</h3><p>' + project.type + '</p></div><span class="mono">0' + (index + 1) + '</span></div></article>';
  }).join('');
  byId('steps').innerHTML = data.steps.map(([title,copy],index) => '<article class="step"><span class="step-no">0' + (index + 1) + '</span><h3>' + title + '</h3><p>' + copy + '</p></article>').join('');
  byId('need-options').innerHTML = data.choices.map((choice,index) => '<label><input type="radio" name="need" value="' + choice + '" required' + (index === 0 ? ' checked' : '') + '><span>' + choice + '</span></label>').join('');
  byId('faq').innerHTML = data.faq.map(([question,answer]) => '<details><summary>' + question + '</summary><p>' + answer + '</p></details>').join('');
  byId('lead-form').reset();
  byId('form-result').hidden = true;
  document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click',() => selectProject(Number(button.dataset.project))));
  document.querySelectorAll('[data-film]').forEach(button => button.addEventListener('click',() => openFilm(data.projects[Number(button.dataset.film)])));
  selectProject(0);

}
document.querySelectorAll('button[data-service]').forEach(button => button.addEventListener('click',() => {const next = new URL(button.dataset.service === 'video' ? 'wideo.html' : 'strony.html', location.href); next.search = location.search; location.assign(next.href);}));
byId('hero-project').addEventListener('click',event => {
  const project = offers[service].projects[activeProject];
  if (project.film) {event.preventDefault(); openFilm(project);}
});
byId('close-film').addEventListener('click',() => dialog.close());
dialog.addEventListener('close',() => {player.pause(); player.removeAttribute('src'); player.load();});
dialog.addEventListener('click',event => {if(event.target === dialog) {const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close();}});
render();
