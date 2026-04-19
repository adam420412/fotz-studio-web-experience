/* global React, useApp, useT, Icon, Reveal, SectionHeader, WorkCard, ClientMarquee, WORKS, SERVICES, TEAM */
const { useState, useEffect, useRef } = React;

/* ============================================================
   SERVICES PAGE
   ============================================================ */
function ServicesPage({ setRoute }) {
  const t = useT();
  const [active, setActive] = useState(0);
  const s = SERVICES[active];
  return (
    <div className="page">
      <section className="wrap" style={{padding:'80px 52px 40px'}}>
        <span className="eyebrow">{t("svc_eyebrow")}</span>
        <h1 className="h-xl" style={{marginTop: 24, maxWidth: 1100}}>
          Cztery praktyki, które <em style={{fontStyle:'italic', color:'var(--accent)'}}>tworzą markę</em> od środka.
        </h1>
      </section>

      <section className="wrap" style={{padding:'80px 52px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap: 60}}>
          <div style={{position:'sticky', top: 100, alignSelf:'flex-start', display:'flex', flexDirection:'column'}}>
            {SERVICES.map((sv, i) => (
              <button key={sv.key}
                onClick={()=>setActive(i)}
                style={{
                  textAlign:'left', padding:'24px 0', borderBottom:'1px solid var(--hair)',
                  display:'grid', gridTemplateColumns:'50px 1fr auto', gap: 20, alignItems:'center',
                  color: active===i?'var(--fg)':'var(--fg-muted)',
                  fontSize: active===i?28:20,
                  transition: 'color .3s, font-size .3s',
                  fontFamily:'Geist', letterSpacing:'-0.025em',
                }}>
                <span className="mono" style={{fontSize:12}}>{sv.num}</span>
                <span>{t(sv.titleKey)}</span>
                <span style={{color: active===i?'var(--accent)':'transparent'}}>●</span>
              </button>
            ))}
          </div>

          <div>
            <h2 className="h-lg" style={{marginBottom: 24}}>{t(s.titleKey)}</h2>
            <p className="lede" style={{fontSize: 22, marginBottom: 48}}>{t(s.descKey)}</p>

            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 16, marginBottom: 48}}>
              {s.bullets.map(b => (
                <div key={b} className="panel" style={{padding:'20px 24px', display:'flex', alignItems:'center', gap: 12}}>
                  <span style={{color:'var(--accent)'}}><Icon.check size={18}/></span>
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="panel" style={{padding: 32, marginBottom: 24}}>
              <div className="eyebrow-muted" style={{marginBottom: 16}}>Typowe zaangażowanie</div>
              <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap: 32}}>
                <div>
                  <div className="mono" style={{fontSize:11, opacity:0.5, marginBottom:8}}>Czas trwania</div>
                  <div className="h-sm">6–16 tygodni</div>
                </div>
                <div>
                  <div className="mono" style={{fontSize:11, opacity:0.5, marginBottom:8}}>Budżet od</div>
                  <div className="h-sm">80 000 zł</div>
                </div>
                <div>
                  <div className="mono" style={{fontSize:11, opacity:0.5, marginBottom:8}}>Zespół</div>
                  <div className="h-sm">3–6 osób</div>
                </div>
              </div>
            </div>

            <button className="btn btn-primary" onClick={()=>setRoute("booking")}>
              Umów rozmowę o tej usłudze <Icon.arrow size={14}/>
            </button>
          </div>
        </div>
      </section>

      <section style={{padding:'120px 0', background:'var(--bg-alt)'}}>
        <div className="wrap">
          <SectionHeader eyebrow="Model współpracy" title="Trzy sposoby pracy z Fotz."/>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap: 24}}>
            {[
              ['Projekt','Jeden konkretny output: strategia, rebranding, kampania. Budżet i harmonogram z góry.','od 80k zł'],
              ['Retainer','Stały zespół — 2–4 osoby dostępne miesięcznie. Najlepsze dla ciągłego rozwoju marki.','od 35k zł/mc'],
              ['Partnerstwo','Długoterminowe. Jesteśmy de facto Twoim działem marketingu — strategia, kreacja, performance.','custom'],
            ].map(([t1,d,p],i) => (
              <div key={i} className="panel" style={{padding: 40, minHeight: 320, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                  <h3 className="h-md" style={{marginBottom: 16}}>{t1}</h3>
                  <p className="body">{d}</p>
                </div>
                <div className="mono" style={{fontSize:12, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--accent)'}}>{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   WORK / PORTFOLIO
   ============================================================ */
function WorkPage({ setRoute, openWork }) {
  const t = useT();
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? WORKS : WORKS.filter(w => w.cat === filter);
  const filters = [
    ['all','Wszystkie'], ['branding','Branding'], ['campaign','Kampanie'],
    ['digital','Digital'], ['strategy','Strategia'],
  ];
  return (
    <div className="page">
      <section className="wrap" style={{padding:'80px 52px 60px'}}>
        <span className="eyebrow">{t("work_eyebrow")}</span>
        <h1 className="h-xl" style={{marginTop: 24, maxWidth: 1200}}>
          {t("work_title")}
        </h1>
        <p className="lede" style={{marginTop: 24}}>{t("work_sub")}</p>

        <div style={{display:'flex', gap: 8, marginTop: 48, flexWrap:'wrap'}}>
          {filters.map(([k,l]) => (
            <button key={k} className="pill"
              onClick={()=>setFilter(k)}
              style={{
                cursor:'pointer',
                background: filter===k?'var(--accent)':'var(--chip)',
                color: filter===k?'var(--on-accent)':'var(--fg)',
                border:'none',
              }}>{l}</button>
          ))}
        </div>
      </section>

      <section className="wrap" style={{padding:'0 52px 120px'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 24}}>
          {filtered.map((w,i) => (
            <Reveal key={w.id} delay={i*60}>
              <WorkCard work={w} onClick={()=>openWork(w)}/>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   CASE STUDY
   ============================================================ */
function CaseStudyPage({ setRoute, work }) {
  const t = useT();
  const w = work || WORKS[0];
  return (
    <div className="page">
      <section style={{padding: 0, background: w.palette[0], color: w.palette[2]}}>
        <div className="wrap" style={{padding: '80px 52px 0'}}>
          <div className="mono" style={{fontSize:12, letterSpacing:'0.14em', textTransform:'uppercase', opacity:0.6, marginBottom: 32}}>
            <button onClick={()=>setRoute('work')} style={{color:'inherit'}}>← Wszystkie realizacje</button>
            <span style={{margin:'0 12px'}}>·</span>{w.tags.join(' · ')} · {w.year}
          </div>
          <h1 style={{fontFamily:'Geist', fontSize:'clamp(60px, 9vw, 180px)', letterSpacing:'-0.06em', lineHeight:0.88, fontWeight:400, marginBottom: 48}}>
            {w.client}
          </h1>
          <div style={{display:'grid', gridTemplateColumns:'2fr 1fr', gap: 80, paddingBottom: 80}}>
            <p style={{fontSize: 28, lineHeight: 1.3, letterSpacing:'-0.015em'}}>{w.title}</p>
            <div>
              <div style={{borderTop:'1px solid currentColor', opacity: 0.3, marginBottom: 24}}/>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24, fontSize: 14}}>
                <div>
                  <div className="mono" style={{fontSize:11, letterSpacing:'0.14em', opacity:0.6, marginBottom: 8}}>Klient</div>
                  <div>{w.client}</div>
                </div>
                <div>
                  <div className="mono" style={{fontSize:11, letterSpacing:'0.14em', opacity:0.6, marginBottom: 8}}>Rok</div>
                  <div>{w.year}</div>
                </div>
                <div>
                  <div className="mono" style={{fontSize:11, letterSpacing:'0.14em', opacity:0.6, marginBottom: 8}}>Zakres</div>
                  <div>{w.tags.join(', ')}</div>
                </div>
                <div>
                  <div className="mono" style={{fontSize:11, letterSpacing:'0.14em', opacity:0.6, marginBottom: 8}}>Zespół</div>
                  <div>6 osób</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ph" style={{aspectRatio:'16/9', borderRadius:0, width:'100%', background: `linear-gradient(135deg, ${w.palette[0]} 0%, ${w.palette[1]} 100%)`}}>
          <div style={{
            fontFamily:'Geist', fontSize: 360, color: w.palette[2], opacity: 0.3,
            letterSpacing:'-0.06em',
          }}>{w.client[0]}</div>
        </div>
      </section>

      <section className="wrap" style={{padding:'120px 52px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap: 80}}>
          <span className="eyebrow">Wyzwanie</span>
          <div>
            <h2 className="h-lg" style={{marginBottom: 32}}>Marka premium, która wyglądała jak ekonomiczna.</h2>
            <p className="lede" style={{fontSize: 20}}>
              {w.client} od lat budował pozycję lidera, ale w komunikacji nie nadążał za własnym produktem. Celem było stworzenie systemu wizualnego godnego marki i budującego przewagę na półce.
            </p>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 52px', background:'var(--bg-alt)'}}>
        <div className="wrap">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24}}>
            {[1,2].map(i => (
              <div key={i} className="ph" style={{
                aspectRatio: '4/5',
                background: `linear-gradient(135deg, ${w.palette[0]}, ${w.palette[1]})`,
                color: w.palette[2],
              }}>
                <span style={{fontFamily:'Geist', fontSize: 180, opacity: 0.5, letterSpacing:'-0.05em'}}>{i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap" style={{padding:'120px 52px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap: 80}}>
          <span className="eyebrow">Rozwiązanie</span>
          <div>
            <h2 className="h-lg" style={{marginBottom: 32}}>Nowy system, jedna narracja.</h2>
            <p className="lede" style={{fontSize: 20, marginBottom: 48}}>
              Od pozycjonowania po packaging. System typograficzny, paleta wyjściowa z surowca, ilustracja opakowania wykonana we własnej fotografii. Wszystko w 12 tygodni.
            </p>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap: 24}}>
              {[
                ['+34%','Wzrost sprzedaży serii premium'],
                ['4.8/5','Średnia ocena na półce (test sklepowy)'],
                ['KTR 2025','Nagroda główna za packaging'],
              ].map(([n,l],i) => (
                <div key={i} style={{padding: 24, borderTop:'1px solid var(--hair)'}}>
                  <div style={{fontFamily:'Geist', fontSize: 64, letterSpacing:'-0.04em', color:'var(--accent)', marginBottom: 12}}>{n}</div>
                  <div className="mono" style={{fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)'}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 52px', background: w.palette[0], color: w.palette[2]}}>
        <div className="wrap">
          <div className="ph" style={{aspectRatio: '16/7', borderRadius: 16,
            background: `linear-gradient(45deg, ${w.palette[0]}, ${w.palette[1]}, ${w.palette[0]})`,
          }}>
            <span style={{fontFamily:'Geist Mono', color: w.palette[2], opacity: 0.6, fontSize:12, letterSpacing:'0.14em', textTransform:'uppercase'}}>
              — Hero composition —
            </span>
          </div>
        </div>
      </section>

      <section className="wrap" style={{padding:'120px 52px'}}>
        <blockquote style={{fontFamily:'Geist', fontSize:'clamp(32px, 4vw, 56px)', letterSpacing:'-0.035em', lineHeight: 1.15, maxWidth: 1000, margin:'0 auto', textAlign:'center'}}>
          „Fotz nie zrobił nam logo. Fotz zrobił nam markę, która się sprzedaje."
          <cite style={{display:'block', marginTop: 32, fontStyle:'normal', fontFamily:'Geist Mono', fontSize: 12, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)'}}>
            — Marta Górka, CMO {w.client}
          </cite>
        </blockquote>
      </section>

      <section className="wrap" style={{padding:'0 52px 120px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'48px 0', borderTop:'1px solid var(--hair)', borderBottom:'1px solid var(--hair)'}}>
          <div>
            <span className="eyebrow">Następny case</span>
            <h3 className="h-md" style={{marginTop: 12}}>{WORKS[(WORKS.indexOf(w)+1) % WORKS.length].client} — {WORKS[(WORKS.indexOf(w)+1) % WORKS.length].title}</h3>
          </div>
          <button className="btn btn-primary" onClick={()=>setRoute('work')}>
            Wszystkie realizacje <Icon.arrow size={14}/>
          </button>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   ABOUT
   ============================================================ */
function AboutPage({ setRoute }) {
  const t = useT();
  return (
    <div className="page">
      <section className="wrap" style={{padding:'80px 52px 120px'}}>
        <span className="eyebrow">{t("about_eyebrow")}</span>
        <h1 className="h-display" style={{marginTop: 24, maxWidth: 1300}}>
          Mały zespół.<br/>
          <em style={{fontStyle:'italic', color:'var(--accent)'}}>Duże</em> projekty.
        </h1>
        <p className="lede" style={{marginTop: 48, fontSize: 24, maxWidth: 900}}>
          {t("about_body")}
        </p>
      </section>

      <section style={{padding:'120px 0', background:'var(--bg-alt)'}}>
        <div className="wrap">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 80, alignItems:'center'}}>
            <div>
              <span className="eyebrow">Nasz manifest</span>
              <h2 className="h-lg" style={{marginTop: 20, marginBottom: 32}}>
                Robimy marki, które coś znaczą.
              </h2>
              <p className="body" style={{fontSize: 18, maxWidth: 520, marginBottom: 24}}>
                Marketing bez strategii to tylko reklama. Branding bez produktu to tylko dekoracja. Kampania bez liczb to tylko nadzieja.
              </p>
              <p className="body" style={{fontSize: 18, maxWidth: 520}}>
                Pracujemy z markami, które chcą być pierwszym wyborem — nie alternatywą. Dla nich robimy całe platformy, nie pojedyncze postery.
              </p>
            </div>
            <div className="ph ph-dark" style={{aspectRatio:'4/5', borderRadius: 20}}>
              <span>[ zdjęcie studia — 4:5 ]</span>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" style={{padding:'120px 52px'}}>
        <SectionHeader eyebrow="Zespół" title="14 osób, 4 praktyki, 0 juniorów bez opiekuna."/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 24}}>
          {TEAM.map((p,i) => (
            <Reveal key={p.name} delay={i*40}>
              <div>
                <div className="ph" style={{aspectRatio:'4/5', marginBottom: 16}}>
                  <span>{p.name.split(' ').map(n=>n[0]).join('')}</span>
                </div>
                <div style={{fontFamily:'Geist', fontSize: 18, letterSpacing:'-0.02em'}}>{p.name}</div>
                <div className="mono" style={{fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--fg-muted)', marginTop: 4}}>{p.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{padding:'120px 0', background:'var(--accent)', color:'var(--on-accent)'}}>
        <div className="wrap" style={{display:'grid', gridTemplateColumns:'1fr 1.5fr', gap: 60, alignItems:'end'}}>
          <h2 style={{fontFamily:'Geist', fontSize:'clamp(48px, 6vw, 100px)', letterSpacing:'-0.04em', lineHeight: 0.95, fontWeight:400}}>
            Pracuj<br/>z nami.
          </h2>
          <div>
            <p style={{fontSize: 20, lineHeight: 1.5, marginBottom: 24}}>
              Szukamy Senior Brand Strategist oraz Motion Designera. Jeśli masz portfolio, które wygląda jak manifest — napisz.
            </p>
            <button className="btn btn-primary" style={{background:'var(--ink)', color:'var(--lime)'}}>
              Zobacz oferty pracy <Icon.arrow size={14}/>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ServicesPage, WorkPage, CaseStudyPage, AboutPage });
