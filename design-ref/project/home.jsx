/* global React, useApp, useT, Icon, Reveal, SectionHeader, WorkCard, ClientMarquee, WORKS, SERVICES, TEAM, CLIENTS */
const { useState, useEffect, useRef } = React;

/* ============================================================
   HOME V1 — Editorial / cinematic
   ============================================================ */
function HomeV1({ setRoute, openWork }) {
  const t = useT();
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const timeStr = time.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div className="page">
      {/* HERO */}
      <section style={{
        minHeight: 'calc(100vh - 80px)', position:'relative', overflow:'hidden',
        background: 'var(--bg)',
        padding: '60px 0 100px',
      }}>
        {/* gridlines */}
        <div style={{
          position:'absolute', inset: 0,
          backgroundImage: 'linear-gradient(to right, var(--hair) 1px, transparent 1px)',
          backgroundSize: 'calc(100%/12) 100%',
          opacity: 0.4, pointerEvents:'none',
        }}/>
        <div className="wrap" style={{position:'relative'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 80, fontFamily:'Geist Mono', fontSize:12, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)'}}>
            <span>{t("h1_eyebrow")}</span>
            <span className="pill dot">WARSZAWA · {timeStr} CET</span>
          </div>

          <h1 className="h-display fade-up" style={{maxWidth: 1400}}>
            {t("h1_title_a")} <em style={{fontStyle:'italic', fontFamily:'Geist', color:'var(--accent)'}}>{t("h1_title_b")}</em><br/>
            {t("h1_title_c")}
          </h1>

          <div style={{
            marginTop: 80, display:'grid', gridTemplateColumns:'1.2fr 1fr 1fr', gap: 60, alignItems:'end',
          }}>
            <div className="fade-up delay-2">
              <p className="lede" style={{fontSize: 22, color:'var(--fg)'}}>
                {t("h1_sub")}
              </p>
              <div style={{display:'flex', gap:12, marginTop: 32}}>
                <button className="btn btn-primary" onClick={()=>setRoute("booking")}>
                  {t("h1_cta_primary")} <Icon.arrow size={14}/>
                </button>
                <button className="btn btn-secondary" onClick={()=>setRoute("work")}>
                  {t("h1_cta_secondary")}
                </button>
              </div>
            </div>

            <div className="fade-up delay-3" style={{borderLeft:'1px solid var(--hair)', paddingLeft: 32}}>
              <div className="eyebrow-muted" style={{marginBottom: 12}}>Nasze usługi</div>
              {SERVICES.map(s => (
                <div key={s.key} style={{display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:'1px solid var(--hair)'}}>
                  <span style={{fontSize:15}}>{t(s.titleKey)}</span>
                  <span className="mono" style={{fontSize:12, opacity:0.5}}>{s.num}</span>
                </div>
              ))}
            </div>

            <div className="fade-up delay-4" style={{borderLeft:'1px solid var(--hair)', paddingLeft: 32}}>
              <div className="eyebrow-muted" style={{marginBottom: 12}}>Ostatnio</div>
              <div style={{fontSize: 15, lineHeight: 1.5}}>
                <div style={{marginBottom: 14}}>
                  <span className="mono" style={{fontSize:11, opacity:0.5, display:'block', marginBottom:2}}>2025 · Branding</span>
                  Rebranding serii premium dla <b>Żubr</b>
                </div>
                <div style={{marginBottom: 14}}>
                  <span className="mono" style={{fontSize:11, opacity:0.5, display:'block', marginBottom:2}}>2025 · Campaign</span>
                  Launch D2C dla <b>Flox</b>
                </div>
                <div>
                  <span className="mono" style={{fontSize:11, opacity:0.5, display:'block', marginBottom:2}}>2024 · Digital</span>
                  Platforma B2B dla <b>Kontoor</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientMarquee/>

      {/* ABOUT STRIP */}
      <section className="wrap" style={{padding:'140px 52px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.3fr', gap: 80}}>
          <Reveal>
            <span className="eyebrow">{t("about_eyebrow")}</span>
            <h2 className="h-lg" style={{marginTop: 20, marginBottom: 32}}>
              Nie jesteśmy agencją.<br/>
              Jesteśmy <em style={{fontStyle:'italic'}}>partnerem</em>.
            </h2>
            <p className="lede">{t("about_body")}</p>
            <div style={{marginTop: 40}}>
              <button className="btn btn-secondary" onClick={()=>setRoute("about")}>
                {t("read_more")} <Icon.arrow size={14}/>
              </button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, borderRadius:16, overflow:'hidden', border:'1px solid var(--hair)'}}>
              {[
                ['412', t('stats_projects')],
                ['37', t('stats_clients')],
                ['24', t('stats_awards')],
                ['12', t('stats_years')],
              ].map(([n,l],i)=>(
                <div key={i} style={{background:'var(--bg)', padding:'48px 32px', minHeight: 220, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                  <span className="mono" style={{fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)'}}>{l}</span>
                  <span style={{fontFamily:'Geist', fontSize: 96, letterSpacing:'-0.05em', lineHeight:1, color:'var(--accent)'}}>{n}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section style={{padding:'40px 0 120px', background:'var(--bg-alt)'}}>
        <div className="wrap">
          <SectionHeader
            eyebrow={t("work_eyebrow")}
            title={t("work_title")}
            sub={t("work_sub")}/>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24}}>
            {WORKS.slice(0,2).map((w,i) => (
              <Reveal key={w.id} delay={i*80}>
                <WorkCard work={w} large onClick={()=>openWork(w)}/>
              </Reveal>
            ))}
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap: 24, marginTop: 24}}>
            {WORKS.slice(2,5).map((w,i) => (
              <Reveal key={w.id} delay={i*80}>
                <WorkCard work={w} onClick={()=>openWork(w)}/>
              </Reveal>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop: 64}}>
            <button className="btn btn-secondary" onClick={()=>setRoute("work")}>
              Zobacz wszystkie realizacje <Icon.arrow size={14}/>
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES BIG */}
      <section className="wrap" style={{padding:'140px 52px'}}>
        <SectionHeader eyebrow={t("svc_eyebrow")} title={t("svc_title")}/>
        <div style={{borderTop:'1px solid var(--hair)'}}>
          {SERVICES.map((s,i) => (
            <ServiceRow key={s.key} service={s} setRoute={setRoute}/>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL / CTA */}
      <section style={{padding: '120px 0', background:'var(--accent)', color:'var(--on-accent)'}}>
        <div className="wrap" style={{textAlign:'center'}}>
          <p className="mono" style={{fontSize:12, letterSpacing:'0.16em', textTransform:'uppercase', opacity:0.6, marginBottom: 40}}>
            — Marta Górka, CMO Żubr
          </p>
          <h2 style={{fontFamily:'Geist', fontSize:'clamp(48px, 5vw, 80px)', letterSpacing:'-0.04em', lineHeight:1.05, maxWidth: 1000, margin:'0 auto 64px'}}>
            „Fotz przepracował nam markę od pozycjonowania po packaging. Sprzedaż serii premium wzrosła o 34% w pierwszym kwartale."
          </h2>
          <button className="btn btn-primary" style={{background:'var(--ink)', color:'var(--lime)'}} onClick={()=>setRoute("booking")}>
            Zacznij projekt z nami <Icon.arrow size={14}/>
          </button>
        </div>
      </section>
    </div>
  );
}

function ServiceRow({ service, setRoute }) {
  const t = useT();
  const [open, setOpen] = useState(false);
  return (
    <div style={{borderBottom:'1px solid var(--hair)'}}>
      <button
        onClick={()=>setOpen(!open)}
        style={{
          width:'100%', display:'grid', gridTemplateColumns:'80px 1.5fr 2fr 60px',
          gap: 40, alignItems:'center', padding:'36px 0', textAlign:'left',
        }}>
        <span className="mono" style={{fontSize:14, opacity:0.5}}>{service.num}</span>
        <span style={{fontFamily:'Geist', fontSize: 40, letterSpacing:'-0.03em'}}>{t(service.titleKey)}</span>
        <span style={{color:'var(--fg-muted)', fontSize:16}}>{t(service.descKey)}</span>
        <span style={{
          width:44, height:44, borderRadius:'50%', border:'1px solid var(--hair)',
          display:'flex', alignItems:'center', justifyContent:'center',
          justifySelf:'end',
          transform: open?'rotate(45deg)':'none', transition:'transform .3s',
        }}>
          <Icon.plus size={18}/>
        </span>
      </button>
      {open && (
        <div style={{padding:'0 0 40px 120px', display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap: 16}}>
          {service.bullets.map(b => (
            <div key={b} className="pill" style={{justifyContent:'center', fontSize:11}}>{b}</div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   HOME V2 — Brutalist / bold — giant type, oversize lime
   ============================================================ */
function HomeV2({ setRoute, openWork }) {
  const t = useT();
  return (
    <div className="page">
      <section style={{padding:'40px 0 0', background:'var(--bg)'}}>
        <div className="wrap">
          <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:40}}>
            <span className="pill dot">{t("h2_tag")}</span>
          </div>
          <h1 style={{
            fontFamily:'Geist', fontSize:'clamp(72px, 14vw, 240px)',
            letterSpacing:'-0.06em', lineHeight: 0.82, fontWeight: 400,
            margin: 0,
          }}>
            <span style={{display:'block'}}>{t("h2_title_a")}</span>
            <span style={{display:'block', position:'relative'}}>
              <span style={{
                background:'var(--accent)', color:'var(--on-accent)',
                padding:'0.05em 0.15em 0.1em', borderRadius: 16, display:'inline-block',
              }}>{t("h2_title_b")}</span>
            </span>
            <span style={{display:'block', fontStyle:'italic'}}>{t("h2_title_c")}</span>
          </h1>
          <div style={{display:'grid', gridTemplateColumns:'1.5fr 1fr', gap: 80, marginTop: 80, alignItems:'end'}}>
            <p className="lede" style={{fontSize: 24, color:'var(--fg)', maxWidth: 720}}>
              {t("h2_sub")}
            </p>
            <div style={{display:'flex', gap:12, justifyContent:'flex-end'}}>
              <button className="btn btn-primary" onClick={()=>setRoute("booking")}>
                {t("h1_cta_primary")} <Icon.arrow size={14}/>
              </button>
              <button className="btn btn-secondary" onClick={()=>setRoute("work")}>
                {t("h1_cta_secondary")}
              </button>
            </div>
          </div>

          {/* hero showcase grid */}
          <div style={{marginTop: 120, display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 16, height: 600}}>
            <div style={{gridRow:'span 2'}}>
              <WorkCard work={WORKS[0]} large onClick={()=>openWork(WORKS[0])}/>
            </div>
            <div><WorkCard work={WORKS[1]} onClick={()=>openWork(WORKS[1])}/></div>
            <div><WorkCard work={WORKS[2]} onClick={()=>openWork(WORKS[2])}/></div>
            <div><WorkCard work={WORKS[3]} onClick={()=>openWork(WORKS[3])}/></div>
            <div><WorkCard work={WORKS[4]} onClick={()=>openWork(WORKS[4])}/></div>
          </div>
        </div>
      </section>

      <ClientMarquee/>

      {/* Numbered services row */}
      <section style={{padding:'120px 0', background:'var(--bg-alt)'}}>
        <div className="wrap">
          <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap: 80, marginBottom: 80}}>
            <div>
              <span className="eyebrow">{t("svc_eyebrow")}</span>
              <h2 className="h-lg" style={{marginTop: 20}}>{t("svc_title")}</h2>
            </div>
            <div>
              <p className="lede">Łączymy strategię, kreację i performance. Jedna faktura, jedno spotkanie, jedna odpowiedzialność.</p>
            </div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 24}}>
            {SERVICES.map(s => (
              <Reveal key={s.key}>
                <div className="panel" style={{padding: 28, minHeight: 320, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                  <div>
                    <div className="mono" style={{fontSize:12, letterSpacing:'0.14em', color:'var(--accent)', marginBottom: 20}}>{s.num}</div>
                    <h3 className="h-sm" style={{marginBottom: 12}}>{t(s.titleKey)}</h3>
                    <p className="body">{t(s.descKey)}</p>
                  </div>
                  <div style={{marginTop: 24, display:'flex', flexWrap:'wrap', gap: 6}}>
                    {s.bullets.slice(0,3).map(b => (
                      <span key={b} style={{fontSize:11, padding:'5px 10px', borderRadius: 99, background:'var(--chip)', fontFamily:'Geist Mono', letterSpacing:'0.08em'}}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section style={{padding:'160px 0', background:'var(--accent)', color:'var(--on-accent)'}}>
        <div className="wrap" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 60, alignItems:'center'}}>
          <h2 style={{fontFamily:'Geist', fontSize:'clamp(60px, 8vw, 140px)', letterSpacing:'-0.05em', lineHeight: 0.9, fontWeight:400}}>
            Chcemy<br/>
            <em style={{fontStyle:'italic'}}>z Tobą</em><br/>
            pracować.
          </h2>
          <div>
            <p style={{fontSize: 22, lineHeight: 1.5, marginBottom: 32}}>
              Mamy miejsce na 2 nowe projekty w Q3. Jeśli szukasz partnera, który podejmie się całego procesu — od strategii po zasięg — napisz.
            </p>
            <button className="btn btn-primary" style={{background:'var(--ink)', color:'var(--lime)'}} onClick={()=>setRoute("booking")}>
              Umów rozmowę <Icon.arrow size={14}/>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   HOME V3 — Data-forward / split hero with live stats
   ============================================================ */
function HomeV3({ setRoute, openWork }) {
  const t = useT();

  return (
    <div className="page">
      <section style={{minHeight: 'calc(100vh - 80px)', display:'grid', gridTemplateColumns:'1.3fr 1fr', background:'var(--bg)', position:'relative', overflow:'hidden'}}>
        {/* Brand-gradient ambient glow */}
        <div aria-hidden style={{
          position:'absolute', inset:0, pointerEvents:'none',
          background: 'radial-gradient(ellipse 50% 60% at 10% 90%, rgba(120,20,60,0.22) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 90% 10%, rgba(20,40,80,0.28) 0%, transparent 60%)',
        }}/>
        <div style={{padding:'60px 52px', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRight:'1px solid var(--hair)', position:'relative'}}>
          <div style={{display:'flex', justifyContent:'space-between', fontFamily:'Geist Mono', fontSize:12, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)'}}>
            <span>{t("h3_eyebrow")}</span>
            <span>52.4082° N · 16.9335° E</span>
          </div>
          <div>
            <h1 style={{fontFamily:'Geist', fontSize:'clamp(60px, 10vw, 180px)', letterSpacing:'-0.06em', lineHeight: 0.88, fontWeight: 400}}>
              Marketing <span style={{background:'linear-gradient(135deg, rgb(230,130,170) 0%, rgb(120,170,230) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', fontStyle:'italic'}}>z dowodami.</span>
            </h1>
            <p style={{marginTop: 48, fontSize: 22, lineHeight: 1.4, maxWidth: 560, color:'var(--fg-muted)'}}>
              {t("h3_sub")}
            </p>
            <div style={{display:'flex', gap:12, marginTop: 40, flexWrap:'wrap'}}>
              <button className="btn btn-primary" onClick={()=>setRoute("booking")}>
                {t("h1_cta_primary")} <Icon.arrow size={14}/>
              </button>
              <button className="btn btn-secondary" onClick={()=>setRoute("work")}>
                {t("h1_cta_secondary")}
              </button>
            </div>
            <div style={{display:'flex', gap:24, marginTop:40, alignItems:'center', fontFamily:'Geist Mono', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)'}}>
              <span style={{display:'flex', alignItems:'center', gap:6}}>
                <span style={{color:'rgb(230,130,170)'}}>★★★★★</span> 5.0 · 160+ Google
              </span>
              <span style={{width:1, height:14, background:'var(--hair)'}}/>
              <span>+48 790 814 814</span>
            </div>
          </div>
          <div style={{display:'flex', gap:40, fontFamily:'Geist Mono', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)'}}>
            <span>(↓) Scroll</span>
            <span>Plac Wolności 16</span>
            <span>EST. 2012</span>
          </div>
        </div>

        {/* Right: live data panel */}
        <div style={{padding: 0, display:'flex', flexDirection:'column', position:'relative'}}>
          <LiveStat label="Wyświetlenia treści / mies." value="1M+" sub="Zasięg portfolio klientów" />
          <LiveStat label="Opinii Google" value="5.0 / 160+" sub="Od 2014 · stale aktualizowane" accent />
          <LiveStat label="Lat doświadczenia" value="12+" sub="Studio marketingu wzrostu" />
          <LiveStat label="Główna realizacja" value="Enea Stadion" sub="+340% zaangażowanie · 2M+ wyśw." />
        </div>
      </section>

      <ClientMarquee/>

      {/* Recent projects carousel-style */}
      <section style={{padding:'120px 0'}}>
        <div className="wrap">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 60}}>
            <div>
              <span className="eyebrow">{t("work_eyebrow")}</span>
              <h2 className="h-lg" style={{marginTop: 20}}>{t("work_title")}</h2>
            </div>
            <div style={{display:'flex', gap: 8}}>
              {['Wszystkie','Branding','Kampanie','Digital','Strategia'].map((f,i)=>(
                <button key={f} className="pill" style={{background: i===0?'var(--accent)':'var(--chip)', color: i===0?'var(--on-accent)':'var(--fg)', border:'none'}}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap: 24}}>
            {WORKS.slice(0,6).map((w,i) => (
              <Reveal key={w.id} delay={i*60}>
                <WorkCard work={w} onClick={()=>openWork(w)}/>
              </Reveal>
            ))}
          </div>
          <div style={{marginTop:60, display:'flex', justifyContent:'center'}}>
            <button className="btn btn-secondary" onClick={()=>setRoute("work")}>
              Wszystkie realizacje <Icon.arrow size={14}/>
            </button>
          </div>
        </div>
      </section>

      {/* Process / How we work */}
      <section style={{padding:'120px 0', background:'var(--bg-alt)'}}>
        <div className="wrap">
          <SectionHeader eyebrow="Jak pracujemy" title="Proces w trzech fazach." sub="Transparentna współpraca oparta na analizie, wdrożeniu i ciągłej optymalizacji." align="center"/>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 0, borderTop:'1px solid var(--hair)', borderBottom:'1px solid var(--hair)'}}>
            {[
              ["01", "Analiza i planowanie", "1–2 tyg.", "Audyt strategii, analiza konkurencji, cele biznesowe. Audyt Twojej obecnej strategii marketingowej i analityki ruchu."],
              ["02", "Wdrożenie kampanii", "2–4 tyg.", "AI i automatyzacja, Google Ads, Social Media. Najnowsze narzędzia do optymalizacji kampanii i ROI."],
              ["03", "Monitorowanie wyników", "Stale", "Raportowanie, optymalizacja, wzrost ROI. Regularne raporty i optymalizacje dla maksymalnego przychodu."],
            ].map(([n,t,len,d],i) => (
              <div key={i} style={{padding: 40, borderRight: i<2?'1px solid var(--hair)':'none'}}>
                <div className="mono" style={{fontSize:12, letterSpacing:'0.14em', color:'var(--accent)', marginBottom: 24}}>{n} · {len}</div>
                <h3 className="h-sm" style={{marginBottom: 16}}>{t}</h3>
                <p className="body" style={{fontSize:15}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function LiveStat({ label, value, sub, accent }) {
  return (
    <div style={{
      flex: 1, padding: '48px 52px',
      borderBottom: '1px solid var(--hair)',
      background: accent ? 'var(--brand-grad)' : 'transparent',
      color: accent ? '#fff' : 'var(--fg)',
      display:'flex', flexDirection:'column', justifyContent:'space-between',
      position:'relative', overflow:'hidden',
    }}>
      <span className="mono" style={{fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', opacity:0.6}}>{label}</span>
      <div>
        <div style={{fontFamily:'Geist', fontSize: 'clamp(56px, 6vw, 96px)', letterSpacing:'-0.05em', lineHeight:1, marginBottom: 12}}>
          {value}
        </div>
        <div className="mono" style={{fontSize:12, letterSpacing:'0.1em', textTransform:'uppercase', opacity:0.6}}>{sub}</div>
      </div>
    </div>
  );
}

Object.assign(window, { HomeV1, HomeV2, HomeV3 });
