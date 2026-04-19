/* global React */
// Shared UI primitives for fotz.pl redesign.
// All strings pulled via useT() so PL/EN toggle works everywhere.

const { useState, useEffect, useRef, useMemo, useCallback, createContext, useContext } = React;

/* ============================================================
   i18n — copy dictionary
   ============================================================ */
const COPY = {
  pl: {
    // Nav
    nav_work: "Realizacje",
    nav_services: "Usługi",
    nav_about: "O nas",
    nav_contact: "Kontakt",
    nav_book: "Bezpłatna konsultacja",
    // Hero v1
    h1_eyebrow: "Studio marketingu wzrostu · Poznań",
    h1_title_a: "Agencja marketingowa,",
    h1_title_b: "która projektuje",
    h1_title_c: "realny wzrost firm.",
    h1_sub: "Fotz Studio to zespół, który rozumie Twoje cele biznesowe. Zadbamy o marketing internetowy, zwiększymy przychód i zbudujemy silną świadomość marki.",
    h1_cta_primary: "Bezpłatna konsultacja",
    h1_cta_secondary: "Zobacz realizacje",
    // Hero v2
    h2_tag: "Plac Wolności 16 · Poznań · 5.0 z 160+ opinii Google",
    h2_title_a: "Nie robimy",
    h2_title_b: "ładnych reklam.",
    h2_title_c: "Projektujemy wzrost.",
    h2_sub: "Strony www, SEO, Google Ads, Meta Ads, social media i produkcja wideo — wszystko pod jednym dachem w centrum Poznania.",
    // Hero v3
    h3_eyebrow: "Fotz Studio · Plac Wolności 16 · Poznań",
    h3_title: "Marketing z dowodami.",
    h3_sub: "Od strategii do zasięgu — własne studio, zespół na miejscu, zero outsourcingu. Ostatnie 12 miesięcy:",
    // Services
    svc_eyebrow: "Co robimy",
    svc_title: "Cztery kompetencje. Jeden zespół.",
    svc_1_t: "Strony & E-commerce", svc_1_d: "Strony WWW i sklepy internetowe — WordPress, Shopify, custom. UX/UI i wdrożenie.",
    svc_2_t: "SEO & Performance", svc_2_d: "Pozycjonowanie organiczne, Google Ads, Meta Ads, TikTok Ads — optymalizacja ROI.",
    svc_3_t: "Social Media & Content", svc_3_d: "Obsługa Facebook, Instagram, TikTok, LinkedIn. Content plan, kreacje, community.",
    svc_4_t: "Video & Branding", svc_4_d: "Własne studio wideo i podcastowe. Spoty, reklamy, identyfikacja wizualna.",
    // Work / Portfolio
    work_eyebrow: "Wybrane realizacje",
    work_title: "Dwanaście lat. Czterysta marek.",
    work_sub: "Kilka projektów, z których jesteśmy szczerze dumni.",
    // About
    about_eyebrow: "O studiu",
    about_title: "Mały zespół. Duże projekty.",
    about_body: "Założyliśmy Fotz w 2014 roku w Warszawie. Pracowaliśmy dla startupów, które stały się unicornami, i dla korporacji, które potrzebowały odświeżenia. Zespół: 14 osób, 4 działy, zero juniorów bez opiekuna.",
    // Contact
    contact_eyebrow: "Kontakt",
    contact_title: "Porozmawiajmy o wzroście.",
    contact_sub: "Bezpłatna konsultacja i wstępny audyt. Odpowiadamy w ciągu jednego dnia roboczego.",
    form_name: "Imię i nazwisko", form_company: "Firma", form_email: "E-mail",
    form_budget: "Budżet", form_scope: "Zakres", form_message: "Opowiedz o projekcie",
    form_submit: "Wyślij zapytanie",
    // Booking
    book_title: "Umów 30-minutową rozmowę",
    book_step1: "Wybierz temat", book_step2: "Wybierz termin", book_step3: "Twoje dane", book_step4: "Potwierdź",
    book_topic_brand: "Strategia marki", book_topic_web: "Strona / aplikacja", book_topic_camp: "Kampania",
    book_topic_audit: "Audyt marki",
    // Misc
    view_case: "Case study",
    read_more: "Czytaj dalej",
    stats_projects: "Zrealizowanych projektów",
    stats_clients: "Stałych klientów",
    stats_awards: "Nagród branżowych",
    stats_years: "Lat na rynku",
  },
  en: {
    nav_work: "Work",
    nav_services: "Services",
    nav_about: "About",
    nav_contact: "Contact",
    nav_book: "Book a call",
    h1_eyebrow: "Growth marketing studio · Poznań",
    h1_title_a: "A marketing agency",
    h1_title_b: "that engineers",
    h1_title_c: "real business growth.",
    h1_sub: "Fotz Studio is a team that understands your business goals. We run your digital marketing, grow revenue and build brand awareness that sticks.",
    h1_cta_primary: "Free consultation",
    h1_cta_secondary: "See our work",
    h2_tag: "Plac Wolności 16 · Poznań · 5.0 from 160+ Google reviews",
    h2_title_a: "We don't make",
    h2_title_b: "pretty ads.",
    h2_title_c: "We engineer growth.",
    h2_sub: "Websites, SEO, Google Ads, Meta Ads, social media and in-house video — all under one roof in central Poznań.",
    h3_eyebrow: "Fotz Studio · Plac Wolności 16 · Poznań",
    h3_title: "Marketing, with receipts.",
    h3_sub: "From strategy to reach — our own studio, team on-site, zero outsourcing. Last 12 months:",
    svc_eyebrow: "What we do",
    svc_title: "Four practices. One team.",
    svc_1_t: "Websites & E-commerce", svc_1_d: "Websites and online stores — WordPress, Shopify, custom. UX/UI and implementation.",
    svc_2_t: "SEO & Performance", svc_2_d: "Organic SEO, Google Ads, Meta Ads, TikTok Ads — ROI optimisation.",
    svc_3_t: "Social Media & Content", svc_3_d: "Facebook, Instagram, TikTok, LinkedIn management. Content plan, creative, community.",
    svc_4_t: "Video & Branding", svc_4_d: "In-house video and podcast studio. Ads, films, visual identity.",
    work_eyebrow: "Selected work",
    work_title: "Twelve years. Four hundred brands.",
    work_sub: "A few projects we're genuinely proud of.",
    about_eyebrow: "About the studio",
    about_title: "Small team. Big projects.",
    about_body: "We founded Fotz in 2014 in Warsaw. We've worked for startups that became unicorns and for corporations that needed a refresh. Team: 14 people, 4 practices, zero unsupervised juniors.",
    contact_eyebrow: "Contact",
    contact_title: "Let's talk growth.",
    contact_sub: "Free consultation and preliminary audit. We reply within one business day.",
    form_name: "Name", form_company: "Company", form_email: "E-mail",
    form_budget: "Budget", form_scope: "Scope", form_message: "Tell us about the project",
    form_submit: "Send inquiry",
    book_title: "Book a 30-minute call",
    book_step1: "Pick a topic", book_step2: "Pick a slot", book_step3: "Your details", book_step4: "Confirm",
    book_topic_brand: "Brand strategy", book_topic_web: "Website / app", book_topic_camp: "Campaign",
    book_topic_audit: "Brand audit",
    view_case: "Case study",
    read_more: "Read more",
    stats_projects: "Projects delivered",
    stats_clients: "Retained clients",
    stats_awards: "Industry awards",
    stats_years: "Years in business",
  }
};

const AppCtx = createContext(null);
function useApp() { return useContext(AppCtx); }
function useT() {
  const { lang } = useApp();
  return (k) => COPY[lang][k] ?? k;
}

/* ============================================================
   Data: clients, services, works, team
   ============================================================ */
const CLIENTS = ["Enea Stadion", "Lech Poznań", "RPPG Group", "FPS Cegielski", "Puma", "Mix-Bud", "Klagem", "Parts Jewelry", "Żabka"];

const WORKS = [
  { id: 1, client: "Enea Stadion", title: "Kompleksowa obsługa marketingowa", tags: ["Social Media", "Events", "Video"], year: "2024", palette: ["#0e1535", "#e9b6c2", "#ffffff"], cat: "social", stat: "+340% zaangażowanie" },
  { id: 2, client: "Lech Poznań", title: "Produkcja wideo · Enea Stadion", tags: ["Video", "Content"], year: "2024", palette: ["#041d3a", "#4a90d9", "#ffffff"], cat: "video", stat: "2M+ wyświetleń/mies." },
  { id: 3, client: "FPS Cegielski", title: "Strona www dla fabryki pojazdów", tags: ["Web", "UX/UI"], year: "2024", palette: ["#1a1a1a", "#c89157", "#f5f0e6"], cat: "web", stat: "Historia od 1846" },
  { id: 4, client: "RPPG Group", title: "Rebranding i identyfikacja", tags: ["Branding", "Strategy"], year: "2024", palette: ["#3e1530", "#d6a25e", "#ffffff"], cat: "branding", stat: "Nowa tożsamość" },
  { id: 5, client: "Puma", title: "Kampania produktowa", tags: ["Campaign", "Content"], year: "2024", palette: ["#141414", "#eaeaea", "#cbff4a"], cat: "campaign", stat: "Launch Q2" },
  { id: 6, client: "Parts Jewelry", title: "E-commerce + brand visuals", tags: ["Web", "E-commerce"], year: "2024", palette: ["#1c1210", "#c99a68", "#efe3d0"], cat: "web", stat: "Sklep D2C" },
  { id: 7, client: "Mix-Bud", title: "Strona + SEO lokalne", tags: ["Web", "SEO"], year: "2023", palette: ["#0d2818", "#f4c242", "#ffffff"], cat: "web", stat: "Top3 Poznań" },
  { id: 8, client: "Klagem", title: "Strategia i kampania Meta", tags: ["Strategy", "Meta Ads"], year: "2023", palette: ["#241a33", "#9b7fcc", "#ffffff"], cat: "campaign", stat: "ROAS 4.8x" },
  { id: 9, client: "Żabka", title: "Content kampania lokalna", tags: ["Content", "Social"], year: "2023", palette: ["#0a2e1a", "#7fcc5e", "#f4fff0"], cat: "social", stat: "Regionalny launch" },
];

const SERVICES = [
  { key: "web", num: "01", titleKey: "svc_1_t", descKey: "svc_1_d", bullets: ["Strony WWW", "Sklepy e-commerce", "WordPress / Shopify", "UX/UI design", "Wdrożenie + hosting"] },
  { key: "perf", num: "02", titleKey: "svc_2_t", descKey: "svc_2_d", bullets: ["Pozycjonowanie SEO", "Google Ads", "Meta Ads (FB + IG)", "TikTok Ads", "Remarketing + Performance Max"] },
  { key: "social", num: "03", titleKey: "svc_3_t", descKey: "svc_3_d", bullets: ["Facebook + Instagram", "TikTok + LinkedIn", "Content marketing", "Community management", "Strategia social"] },
  { key: "video", num: "04", titleKey: "svc_4_t", descKey: "svc_4_d", bullets: ["Produkcja wideo 4K", "Studio podcastowe", "Spoty reklamowe", "Fotografia z drona", "Identyfikacja wizualna"] },
];

const TEAM = [
  { name: "Adam", role: "Founder / Managing Director" },
  { name: "Zespół strategii", role: "Audyt, planowanie, analityka" },
  { name: "Zespół Web", role: "UX/UI, development, e-commerce" },
  { name: "Zespół Performance", role: "Google Ads, Meta Ads, SEO" },
  { name: "Zespół Social", role: "Content, community, kampanie" },
  { name: "Studio Video", role: "Produkcja 4K, spoty, wideo" },
  { name: "Studio Podcast", role: "Nagrania, streaming, multi-cam" },
  { name: "Copywriterzy", role: "Teksty, SEO content, scenariusze" },
];

/* ============================================================
   Icons (inline SVG, minimal)
   ============================================================ */
const Icon = {
  arrow: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M7 17L17 7M17 7H9M17 7v8"/></svg>,
  arrowRight: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  plus: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12h14"/></svg>,
  play: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="currentColor"><path d="M8 5v14l11-7L8 5z"/></svg>,
  check: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12l5 5L20 6"/></svg>,
  close: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 6l12 12M18 6L6 18"/></svg>,
  sun: (p) => <svg viewBox="0 0 24 24" width={p.size||14} height={p.size||14} fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>,
  moon: (p) => <svg viewBox="0 0 24 24" width={p.size||14} height={p.size||14} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>,
  dot: () => <span style={{display:'inline-block',width:6,height:6,borderRadius:'50%',background:'currentColor',margin:'0 10px',opacity:0.4}}/>,
};

/* ============================================================
   Logo
   ============================================================ */
function Logo({ onClick }) {
  return (
    <a href="#" onClick={(e)=>{e.preventDefault();onClick?.();}} className="nav-logo">
      <span className="nav-logo-dot">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square">
          <path d="M5 4 H19 V8 M5 4 V20 M5 12 H15 M11 12 L11 20"/>
        </svg>
      </span>
      <span>fotz<span style={{color:'rgb(230,130,170)', margin:'0 1px'}}>.</span><span style={{opacity:0.55}}>studio</span></span>
    </a>
  );
}

/* ============================================================
   Nav
   ============================================================ */
function Nav({ route, setRoute }) {
  const t = useT();
  const { theme, setTheme, lang, setLang } = useApp();
  const items = [
    ["work", t("nav_work")],
    ["services", t("nav_services")],
    ["about", t("nav_about")],
    ["contact", t("nav_contact")],
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Logo onClick={()=>setRoute("home")} />
        <div className="nav-menu">
          {items.map(([k,label]) => (
            <a key={k} href="#" className={route===k?"active":""}
               onClick={(e)=>{e.preventDefault();setRoute(k);}}>{label}</a>
          ))}
        </div>
        <div className="nav-right">
          <button className="pill"
            style={{cursor:'pointer', padding:'8px 10px'}}
            title="Theme"
            onClick={()=>setTheme(theme==='dark'?'light':'dark')}>
            {theme==='dark' ? <Icon.sun/> : <Icon.moon/>}
          </button>
          <button className="pill"
            style={{cursor:'pointer', padding:'8px 12px'}}
            onClick={()=>setLang(lang==='pl'?'en':'pl')}>
            {lang==='pl'?'PL / EN':'EN / PL'}
          </button>
          <a href="#" className="btn btn-primary" onClick={(e)=>{e.preventDefault();setRoute("booking");}}>
            {t("nav_book")} <Icon.arrow size={14}/>
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function Footer({ setRoute }) {
  const t = useT();
  return (
    <footer className="footer">
      <div className="wrap" style={{padding:0}}>
        <div className="footer-giant">
          <span>fotz</span>
          <span className="lime">.</span>
          <span>pl</span>
          <span style={{marginLeft:'auto', fontSize: '0.08em', fontFamily:'Geist Mono', letterSpacing:'0.14em', color:'rgba(247,249,242,0.4)', textTransform:'uppercase', alignSelf:'flex-end', paddingBottom:'30px'}}>
            EST. MMXII · POZNAŃ
          </span>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h5>Fotz Studio</h5>
            <p style={{maxWidth: 360, opacity: 0.7, lineHeight:1.55}}>
              Studio marketingu wzrostu. Projektujemy marketing, który realnie pozyskuje klientów.
            </p>
            <p className="mono" style={{marginTop: 20, fontSize:12, letterSpacing:'0.14em', textTransform:'uppercase', opacity:0.5}}>
              Plac Wolności 16 · 61-739 Poznań
            </p>
          </div>
          <div className="footer-col">
            <h5>{t("nav_work")}</h5>
            <a href="#" onClick={(e)=>{e.preventDefault();setRoute("work");}}>Wszystkie realizacje</a>
            <a href="#" onClick={(e)=>{e.preventDefault();setRoute("case");}}>Enea Stadion — Marketing 360</a>
            <a href="#" onClick={(e)=>{e.preventDefault();setRoute("case");}}>FPS Cegielski — Strona</a>
            <a href="#" onClick={(e)=>{e.preventDefault();setRoute("case");}}>RPPG — Rebranding</a>
          </div>
          <div className="footer-col">
            <h5>{t("nav_services")}</h5>
            <a href="#" onClick={(e)=>{e.preventDefault();setRoute("services");}}>Strony & E-commerce</a>
            <a href="#" onClick={(e)=>{e.preventDefault();setRoute("services");}}>SEO & Performance</a>
            <a href="#" onClick={(e)=>{e.preventDefault();setRoute("services");}}>Social Media</a>
            <a href="#" onClick={(e)=>{e.preventDefault();setRoute("services");}}>Video & Branding</a>
          </div>
          <div className="footer-col">
            <h5>{t("nav_contact")}</h5>
            <a href="mailto:adam@fotz.pl">adam@fotz.pl</a>
            <a href="tel:+48790814814">+48 790 814 814</a>
            <a href="#">Instagram ↗</a>
            <a href="#">Behance ↗</a>
            <a href="#">LinkedIn ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2012–2026 Fotz Studio · NIP 785-18-06-089</div>
          <div>Polityka prywatności · Cookies · Regulamin</div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   Marquee / client strip
   ============================================================ */
function ClientMarquee({ dark=true }) {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <div className="marquee" style={{
      padding: '36px 0', borderTop: '1px solid var(--hair)', borderBottom: '1px solid var(--hair)',
      background: dark ? 'transparent' : 'var(--cream)',
    }}>
      <div className="marquee-track">
        {items.map((n,i) => (
          <span key={i} className="mono" style={{
            fontSize: 20, letterSpacing:'-0.02em', textTransform:'uppercase',
            fontFamily:'Geist', fontWeight: 500, color: 'var(--fg)',
            display:'flex', alignItems:'center', gap: 60,
          }}>
            {n}<span style={{width:6,height:6,borderRadius:'50%',background:'var(--accent)'}}/>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   Work card
   ============================================================ */
function WorkCard({ work, onClick, large=false }) {
  const t = useT();
  const [hover, setHover] = useState(false);
  return (
    <div
      className="reveal in"
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      onClick={onClick}
      style={{cursor:'pointer'}}>
      <div style={{
        position:'relative', aspectRatio: large ? '16/10' : '4/5',
        borderRadius: 16, overflow:'hidden',
        background: `linear-gradient(135deg, ${work.palette[0]} 0%, ${work.palette[0]} 60%, ${work.palette[1]} 100%)`,
        transform: hover ? 'scale(1.01)' : 'scale(1)',
        transition: 'transform .6s cubic-bezier(.2,.8,.2,1)',
      }}>
        {/* abstract composition with client initial */}
        <div style={{
          position:'absolute', inset: 0,
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          <span style={{
            fontFamily:'Geist', fontWeight: 300,
            fontSize: large ? 280 : 180,
            color: work.palette[1], letterSpacing:'-0.06em',
            opacity: 0.85,
            transform: hover ? 'translateY(-10px) rotate(-2deg)' : 'none',
            transition: 'transform .8s cubic-bezier(.2,.8,.2,1)',
          }}>{work.client[0]}</span>
        </div>
        <div style={{
          position:'absolute', top: 20, left: 20, right: 20,
          display:'flex', justifyContent:'space-between',
          fontFamily:'Geist Mono', fontSize: 11, letterSpacing:'0.14em', textTransform:'uppercase',
          color: work.palette[2], opacity: 0.8,
        }}>
          <span>{work.tags.join(' · ')}</span>
          <span>{work.year}</span>
        </div>
        <div style={{
          position:'absolute', bottom: 20, left: 20, right: 20,
          display:'flex', justifyContent:'space-between', alignItems:'flex-end',
          color: work.palette[2],
        }}>
          <div>
            <div style={{fontFamily:'Geist Mono', fontSize: 11, letterSpacing:'0.14em', textTransform:'uppercase', opacity:0.7, marginBottom:4}}>
              {work.client}
            </div>
            <div style={{fontFamily:'Geist', fontSize: large?28:20, letterSpacing:'-0.02em', lineHeight:1.15, maxWidth: large?480:280}}>
              {work.title}
            </div>
          </div>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            border: `1px solid ${work.palette[2]}`, display:'flex', alignItems:'center', justifyContent:'center',
            transform: hover ? 'translate(4px,-4px)' : 'none',
            transition: 'transform .3s ease',
          }}>
            <Icon.arrow size={16}/>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Section header
   ============================================================ */
function SectionHeader({ eyebrow, title, sub, align='left' }) {
  return (
    <div style={{
      display:'flex', flexDirection:'column', gap: 20,
      alignItems: align==='center'?'center':'flex-start',
      textAlign: align,
      marginBottom: 72,
    }}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h-xl" style={{maxWidth: 900}}>{title}</h2>
      {sub && <p className="lede" style={{maxWidth: 620}}>{sub}</p>}
    </div>
  );
}

/* ============================================================
   Reveal on scroll
   ============================================================ */
function Reveal({ children, delay=0, style }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); } });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className="reveal" style={{transitionDelay: `${delay}ms`, ...style}}>{children}</div>;
}

/* ============================================================
   Export to window
   ============================================================ */
Object.assign(window, {
  AppCtx, useApp, useT, COPY, CLIENTS, WORKS, SERVICES, TEAM,
  Icon, Logo, Nav, Footer, ClientMarquee, WorkCard, SectionHeader, Reveal,
});
