/* global React, useApp, useT, Icon, Reveal, SectionHeader */
const { useState, useEffect, useRef } = React;

/* ============================================================
   CONTACT
   ============================================================ */
function ContactPage({ setRoute }) {
  const t = useT();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({name:'', company:'', email:'', budget:'', scope:[], message:''});
  const budgets = ['< 50k zł', '50–150k zł', '150–400k zł', '400k+ zł', 'retainer'];
  const scopes = ['Strategia', 'Branding', 'Kampania', 'Digital', 'Audyt'];

  const submit = (e) => { e.preventDefault(); setSent(true); };

  if (sent) return (
    <div className="page wrap" style={{padding:'120px 52px', textAlign:'center', minHeight:'calc(100vh - 80px)', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div>
        <div style={{width:80, height:80, borderRadius:'50%', background:'var(--accent)', color:'var(--on-accent)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 32px'}}>
          <Icon.check size={40}/>
        </div>
        <h1 className="h-lg" style={{marginBottom:24}}>Dzięki, {form.name || 'do usłyszenia'}.</h1>
        <p className="lede" style={{margin:'0 auto 40px'}}>Odpowiemy na adres <b>{form.email}</b> w ciągu jednego dnia roboczego.</p>
        <button className="btn btn-secondary" onClick={()=>{setSent(false); setRoute('home');}}>Wróć na stronę główną</button>
      </div>
    </div>
  );

  return (
    <div className="page">
      <section className="wrap" style={{padding:'80px 52px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 80}}>
          <div>
            <span className="eyebrow">{t("contact_eyebrow")}</span>
            <h1 className="h-xl" style={{marginTop: 24, marginBottom: 32, maxWidth: 520}}>
              {t("contact_title")}
            </h1>
            <p className="lede" style={{marginBottom: 48}}>{t("contact_sub")}</p>

            <div style={{display:'flex', flexDirection:'column', gap: 24, padding:'32px 0', borderTop:'1px solid var(--hair)', borderBottom:'1px solid var(--hair)'}}>
              <Contactline label="E-mail" value="hej@fotz.pl" href="mailto:hej@fotz.pl"/>
              <Contactline label="Telefon" value="+48 22 123 45 67" href="tel:+48221234567"/>
              <Contactline label="Adres" value="ul. Koszykowa 54, 00-675 Warszawa"/>
              <Contactline label="NIP" value="521-23-45-678"/>
            </div>

            <div style={{marginTop: 32, display:'flex', gap: 12}}>
              {['Instagram', 'Behance', 'LinkedIn', 'Vimeo'].map(s => (
                <a key={s} href="#" className="pill" style={{textDecoration:'none'}}>{s} ↗</a>
              ))}
            </div>
          </div>

          <form onSubmit={submit} style={{display:'flex', flexDirection:'column', gap: 24}}>
            <Field label={t("form_name")} value={form.name} onChange={v=>setForm({...form, name:v})} required/>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 16}}>
              <Field label={t("form_company")} value={form.company} onChange={v=>setForm({...form, company:v})}/>
              <Field label={t("form_email")} type="email" value={form.email} onChange={v=>setForm({...form, email:v})} required/>
            </div>

            <div>
              <label className="eyebrow-muted" style={{marginBottom: 12, display:'block'}}>{t("form_budget")}</label>
              <div style={{display:'flex', gap: 8, flexWrap:'wrap'}}>
                {budgets.map(b => (
                  <button type="button" key={b}
                    onClick={()=>setForm({...form, budget:b})}
                    className="pill"
                    style={{cursor:'pointer', background: form.budget===b?'var(--accent)':'var(--chip)', color: form.budget===b?'var(--on-accent)':'var(--fg)', border:'none'}}>
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="eyebrow-muted" style={{marginBottom: 12, display:'block'}}>{t("form_scope")}</label>
              <div style={{display:'flex', gap: 8, flexWrap:'wrap'}}>
                {scopes.map(s => {
                  const on = form.scope.includes(s);
                  return (
                    <button type="button" key={s}
                      onClick={()=>setForm({...form, scope: on ? form.scope.filter(x=>x!==s) : [...form.scope, s]})}
                      className="pill"
                      style={{cursor:'pointer', background: on?'var(--accent)':'var(--chip)', color: on?'var(--on-accent)':'var(--fg)', border:'none'}}>
                      {on && <Icon.check size={12}/>} {s}
                    </button>
                  );
                })}
              </div>
            </div>

            <Field label={t("form_message")} multi value={form.message} onChange={v=>setForm({...form, message:v})}/>

            <button type="submit" className="btn btn-primary" style={{alignSelf:'flex-start', marginTop: 12}}>
              {t("form_submit")} <Icon.arrow size={14}/>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function Contactline({ label, value, href }) {
  return (
    <div style={{display:'grid', gridTemplateColumns:'120px 1fr', gap: 20, alignItems:'center'}}>
      <span className="mono" style={{fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)'}}>{label}</span>
      {href ? <a href={href} style={{fontSize: 18, textDecoration:'none'}}>{value}</a> : <span style={{fontSize: 18}}>{value}</span>}
    </div>
  );
}

function Field({ label, value, onChange, required, type='text', multi=false }) {
  const [focus, setFocus] = useState(false);
  const active = focus || value;
  return (
    <label style={{position:'relative', display:'block'}}>
      <span style={{
        position:'absolute', left: 20,
        top: active?10:multi?20:'50%', transform: active?'none':'translateY(-50%)',
        fontFamily:'Geist Mono', fontSize: active?10:13, letterSpacing:'0.14em', textTransform:'uppercase',
        color: active?'var(--accent)':'var(--fg-muted)',
        transition: 'all .2s',
        pointerEvents:'none',
      }}>{label}{required && ' *'}</span>
      {multi ? (
        <textarea
          value={value}
          onChange={e=>onChange(e.target.value)}
          onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
          rows={5}
          style={{
            width:'100%', background:'transparent', color:'var(--fg)',
            border:'1px solid var(--hair)', borderRadius: 12,
            padding:'30px 20px 14px',
            fontFamily:'Geist', fontSize: 16, resize:'vertical',
            outline: focus?'1px solid var(--accent)':'none',
            outlineOffset: -1,
          }}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={e=>onChange(e.target.value)}
          onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
          required={required}
          style={{
            width:'100%', background:'transparent', color:'var(--fg)',
            border:'1px solid var(--hair)', borderRadius: 12,
            padding: active?'26px 20px 10px':'22px 20px',
            fontFamily:'Geist', fontSize: 16,
            outline: focus?'1px solid var(--accent)':'none',
            outlineOffset: -1,
          }}
        />
      )}
    </label>
  );
}

/* ============================================================
   BOOKING — multi-step
   ============================================================ */
function BookingPage({ setRoute }) {
  const t = useT();
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ topic: null, date: null, time: null, name: '', email: '', company: '' });

  const topics = [
    { k: 'brand', titleKey:'book_topic_brand', d:'Pozycjonowanie, architektura, messaging' },
    { k: 'web', titleKey:'book_topic_web', d:'UX/UI, platforma, e-commerce' },
    { k: 'camp', titleKey:'book_topic_camp', d:'Kreacja, produkcja, performance' },
    { k: 'audit', titleKey:'book_topic_audit', d:'Diagnoza marki w 10 dni' },
  ];

  // build 14 days
  const days = Array.from({length:14}, (_,i)=> {
    const d = new Date(); d.setDate(d.getDate()+i+1);
    return d;
  }).filter(d => d.getDay()!==0 && d.getDay()!==6);

  const slots = ['09:30', '11:00', '13:30', '15:00', '16:30'];

  const canNext = () =>
    (step===1 && data.topic) ||
    (step===2 && data.date && data.time) ||
    (step===3 && data.name && data.email);

  const stepLabels = [t('book_step1'), t('book_step2'), t('book_step3'), t('book_step4')];

  return (
    <div className="page wrap" style={{padding:'80px 52px', maxWidth: 1100}}>
      <span className="eyebrow">{t("nav_book")}</span>
      <h1 className="h-xl" style={{marginTop: 24, marginBottom: 48, maxWidth: 800}}>
        {t("book_title")}
      </h1>

      {/* Progress */}
      <div style={{display:'flex', gap: 8, marginBottom: 64, padding:'24px 0', borderTop:'1px solid var(--hair)', borderBottom:'1px solid var(--hair)'}}>
        {stepLabels.map((l,i) => {
          const n = i+1;
          const done = step > n, cur = step === n;
          return (
            <div key={i} style={{flex:1, display:'flex', gap: 12, alignItems:'center', opacity: cur||done?1:0.4}}>
              <span style={{
                width:32, height:32, borderRadius:'50%',
                display:'flex', alignItems:'center', justifyContent:'center',
                background: done?'var(--accent)':cur?'var(--fg)':'transparent',
                color: done?'var(--on-accent)':cur?'var(--bg)':'var(--fg-muted)',
                border: (!done&&!cur)?'1px solid var(--hair)':'none',
                fontFamily:'Geist Mono', fontSize: 12,
              }}>{done?<Icon.check size={14}/>:`0${n}`}</span>
              <span className="mono" style={{fontSize:12, letterSpacing:'0.12em', textTransform:'uppercase'}}>{l}</span>
            </div>
          );
        })}
      </div>

      {step === 1 && (
        <div>
          <h2 className="h-md" style={{marginBottom: 32}}>{t('book_step1')}</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 16}}>
            {topics.map(tp => (
              <button key={tp.k}
                onClick={()=>setData({...data, topic: tp.k})}
                style={{
                  textAlign:'left', padding: 32, borderRadius: 16,
                  border: data.topic===tp.k?'1px solid var(--accent)':'1px solid var(--hair)',
                  background: data.topic===tp.k?'var(--lime-ghost)':'var(--bg-raised)',
                  cursor:'pointer', transition: 'all .2s',
                }}>
                <h3 className="h-sm" style={{marginBottom: 8}}>{t(tp.titleKey)}</h3>
                <p className="body">{tp.d}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="h-md" style={{marginBottom: 32}}>{t('book_step2')}</h2>
          <div style={{marginBottom: 32}}>
            <div className="eyebrow-muted" style={{marginBottom: 16}}>Dzień</div>
            <div style={{display:'flex', gap: 8, flexWrap:'wrap'}}>
              {days.map((d,i) => {
                const key = d.toISOString().slice(0,10);
                const on = data.date === key;
                return (
                  <button key={i}
                    onClick={()=>setData({...data, date: key})}
                    style={{
                      padding:'12px 16px', borderRadius: 12,
                      border: on?'1px solid var(--accent)':'1px solid var(--hair)',
                      background: on?'var(--accent)':'var(--bg-raised)',
                      color: on?'var(--on-accent)':'var(--fg)',
                      textAlign:'center', cursor:'pointer', minWidth: 70,
                    }}>
                    <div className="mono" style={{fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', opacity:0.6}}>
                      {d.toLocaleDateString('pl-PL', {weekday:'short'})}
                    </div>
                    <div style={{fontSize: 18, fontFamily:'Geist', marginTop: 4}}>{d.getDate()}</div>
                    <div className="mono" style={{fontSize:10, letterSpacing:'0.08em', opacity:0.6}}>
                      {d.toLocaleDateString('pl-PL', {month:'short'}).replace('.', '')}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          {data.date && (
            <div>
              <div className="eyebrow-muted" style={{marginBottom: 16}}>Godzina (CET)</div>
              <div style={{display:'flex', gap: 8, flexWrap:'wrap'}}>
                {slots.map(s => {
                  const on = data.time === s;
                  return (
                    <button key={s}
                      onClick={()=>setData({...data, time: s})}
                      className="pill" style={{
                        fontSize:13, padding:'14px 20px', cursor:'pointer',
                        background: on?'var(--accent)':'var(--chip)',
                        color: on?'var(--on-accent)':'var(--fg)', border:'none',
                      }}>{s}</button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {step === 3 && (
        <div style={{maxWidth: 600}}>
          <h2 className="h-md" style={{marginBottom: 32}}>{t('book_step3')}</h2>
          <div style={{display:'flex', flexDirection:'column', gap: 16}}>
            <Field label={t('form_name')} value={data.name} onChange={v=>setData({...data, name:v})} required/>
            <Field label={t('form_email')} type="email" value={data.email} onChange={v=>setData({...data, email:v})} required/>
            <Field label={t('form_company')} value={data.company} onChange={v=>setData({...data, company:v})}/>
          </div>
        </div>
      )}

      {step === 4 && (
        <Confirmation data={data} topics={topics} setRoute={setRoute} t={t}/>
      )}

      {step < 4 && (
        <div style={{display:'flex', justifyContent:'space-between', marginTop: 64, paddingTop: 32, borderTop:'1px solid var(--hair)'}}>
          <button className="btn btn-secondary" disabled={step===1} style={{opacity:step===1?0.4:1}} onClick={()=>setStep(step-1)}>← Wstecz</button>
          <button className="btn btn-primary" disabled={!canNext()} style={{opacity:canNext()?1:0.4}} onClick={()=>setStep(step+1)}>Dalej <Icon.arrow size={14}/></button>
        </div>
      )}
    </div>
  );
}

function Confirmation({ data, topics, setRoute, t }) {
  const [confirmed, setConfirmed] = useState(false);
  const topic = topics.find(x => x.k === data.topic);
  const dateStr = data.date ? new Date(data.date).toLocaleDateString('pl-PL', {weekday:'long', day:'numeric', month:'long'}) : '';

  if (confirmed) return (
    <div style={{textAlign:'center', padding: '60px 0'}}>
      <div style={{width:80, height:80, borderRadius:'50%', background:'var(--accent)', color:'var(--on-accent)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 32px'}}>
        <Icon.check size={40}/>
      </div>
      <h2 className="h-lg" style={{marginBottom:24}}>Do usłyszenia, {data.name}.</h2>
      <p className="lede" style={{margin:'0 auto 12px'}}>Zaproszenie wysłaliśmy na <b>{data.email}</b>.</p>
      <p className="body" style={{margin:'0 auto 40px'}}>{dateStr} · {data.time} CET</p>
      <button className="btn btn-secondary" onClick={()=>setRoute('home')}>Wróć na stronę główną</button>
    </div>
  );

  return (
    <div>
      <h2 className="h-md" style={{marginBottom: 32}}>{t('book_step4')}</h2>
      <div className="panel" style={{padding: 32, marginBottom: 24}}>
        <div style={{display:'grid', gridTemplateColumns:'140px 1fr', gap: 20, rowGap: 16, alignItems:'baseline'}}>
          <span className="eyebrow-muted">Temat</span> <span style={{fontSize:18}}>{topic && t(topic.titleKey)}</span>
          <span className="eyebrow-muted">Termin</span> <span style={{fontSize:18}}>{dateStr}, {data.time} CET</span>
          <span className="eyebrow-muted">Kontakt</span> <span style={{fontSize:18}}>{data.name} · {data.email}</span>
          {data.company && <><span className="eyebrow-muted">Firma</span> <span style={{fontSize:18}}>{data.company}</span></>}
          <span className="eyebrow-muted">Kanał</span> <span style={{fontSize:18}}>Google Meet (link w zaproszeniu)</span>
          <span className="eyebrow-muted">Z naszej strony</span> <span style={{fontSize:18}}>Anna Kowalczyk, Marek Dąbrowski</span>
        </div>
      </div>
      <button className="btn btn-primary" onClick={()=>setConfirmed(true)}>
        Potwierdź spotkanie <Icon.arrow size={14}/>
      </button>
    </div>
  );
}

Object.assign(window, { ContactPage, BookingPage });
