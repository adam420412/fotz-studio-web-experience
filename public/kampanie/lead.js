import config from './config.js';
import { buildPayload, submitLead, submissionIdentity } from './lead-core.mjs';

const production = ['fotz-studio.pl', 'www.fotz-studio.pl', 'fotz-studio-web-experience.lovable.app'].includes(location.hostname);
const form = document.getElementById('lead-form');
const result = document.getElementById('form-result');
const banner = document.getElementById('consent-banner');
const service = document.body.dataset.service;
let consent = null;
try { consent = localStorage.getItem('fotz-campaign-consent-v1'); } catch { /* A blocked storage must not block the form. */ }
let pixelLoaded = false;
let pageTracked = false;
let pending = false;
let lastFingerprint = '';
let lastId = null;
const storageFallback = new Map();
const submissionStorage = {
  getItem(key) { try { return sessionStorage.getItem(key) || storageFallback.get(key); } catch { return storageFallback.get(key); } },
  setItem(key, value) { storageFallback.set(key, value); try { sessionStorage.setItem(key, value); } catch {} },
};

function startPixel() {
  if (!production || consent !== 'accepted') return;
  if (!window.fbq) {
    const fbq = function () { fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments); };
    fbq.push = fbq; fbq.loaded = true; fbq.version = '2.0'; fbq.queue = [];
    window.fbq = window._fbq = fbq;
  }
  window.fbq('consent', 'grant');
  if (!pixelLoaded) {
    window.fbq('set', 'autoConfig', false, config.pixelId);
    window.fbq('init', config.pixelId);
    const script = document.createElement('script');
    script.async = true; script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script); pixelLoaded = true;
  }
  if (!pageTracked) { window.fbq('track', 'PageView'); pageTracked = true; }
}

function chooseConsent(value) {
  consent = value;
  try { localStorage.setItem('fotz-campaign-consent-v1', value); } catch {}
  banner.hidden = true;
  if (value === 'accepted') startPixel();
  else {
    window.fbq?.('consent', 'revoke');
    // Clear the Meta identifiers available on this domain when consent is withdrawn.
    for (const name of ['_fbp', '_fbc']) for (const domain of ['', location.hostname, '.fotz-studio.pl']) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? `; Domain=${domain}` : ''}`;
    }
  }
}
document.getElementById('cookies-accept').addEventListener('click', () => chooseConsent('accepted'));
document.getElementById('cookies-reject').addEventListener('click', () => chooseConsent('rejected'));
document.getElementById('cookies-settings').addEventListener('click', () => { banner.hidden = false; document.getElementById('cookies-reject').focus(); });
banner.hidden = consent === 'accepted' || consent === 'rejected';
startPixel();
const cookie = name => document.cookie.split('; ').find(item => item.startsWith(`${name}=`))?.slice(name.length + 1) || null;

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (pending || !form.reportValidity()) return;
  const entries = Object.fromEntries(new FormData(form));
  if (entries.website_check) return;
  delete entries.website_check;
  const button = form.querySelector('[type="submit"]');
  if (!production) {
    result.hidden = false;
    result.textContent = 'Wersja testowa: nie wysłano danych. Formularz wysyła zapytania wyłącznie na opublikowanej stronie FOTZ.';
    result.focus(); return;
  }
  pending = true; button.disabled = true; form.setAttribute('aria-busy', 'true');
  const originalLabel = button.innerHTML;
  button.textContent = 'Wysyłamy…';
  result.hidden = true;
  try {
    const fingerprint = JSON.stringify(entries);
    if (fingerprint !== lastFingerprint || !lastId) {
      lastId = await submissionIdentity(entries, service, submissionStorage);
      lastFingerprint = fingerprint;
    }
    const payload = buildPayload(entries, { service, url: location.href, submissionId: lastId,
      consent: consent === 'accepted', fbp: cookie('_fbp'), fbc: cookie('_fbc'), now: new Date().toISOString() });
    const accepted = await submitLead(config, payload);
    if (consent === 'accepted' && window.fbq) {
      const key = `fotz:tracked:${accepted.submission_id}`;
      if (!submissionStorage.getItem(key)) {
        window.fbq('track', 'Lead', { content_name: `FOTZ ${service}` }, { eventID: accepted.submission_id });
        submissionStorage.setItem(key, '1');
      }
    }
    result.textContent = 'Dziękujemy! Twoje zapytanie zostało zapisane. Wrócimy do Ciebie w sprawie projektu. Możesz też zadzwonić: +48 790 814 814.';
    form.reset();
  } catch (error) {
    result.textContent = error?.name === 'TimeoutError' || error?.name === 'AbortError'
      ? 'Odpowiedź trwa dłużej niż zwykle. Spróbuj ponownie — ponowienie nie tworzy drugiego zgłoszenia.'
      : (error.message || 'Nie udało się wysłać zapytania. Spróbuj ponownie lub zadzwoń.');
  } finally {
    pending = false; button.disabled = false; button.innerHTML = originalLabel;
    form.removeAttribute('aria-busy'); result.hidden = false; result.focus();
  }
});

// Enable submission only after the complete handler is attached.
form.querySelector('[type="submit"]').disabled = false;
