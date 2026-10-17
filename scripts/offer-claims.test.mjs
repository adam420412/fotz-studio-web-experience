import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { findClaims, pageCopy, routeFiles } from './offer-claims.mjs';

// Golden set: real sentences removed from offers during the October review
// (PR #43–#65). Each must still be detected so the claim cannot return.
const rejected = [
  ['Wzrost rezerwacji online o 180% po wdrożeniu nowej strony z systemem rezerwacji.', 'percent'],
  ['+380% ruchu organicznego', 'percent'],
  ['-62% niższy CPA dzięki SEO vs Google Ads', 'percent'],
  ['Kampanie Meta Ads dla firm z Łodzi. Od 400 zł/mies.', 'price'],
  ['Nasze pakiety zaczynają się od 1200 zł/mies. dla lokalnych firm.', 'price'],
  ['Sklep internetowy (WooCommerce/Shopify): 5000-25 000 zł.', 'price'],
  ['Dlatego walczymy o TOP 3 dla każdej frazy.', 'ranking'],
  ['Gwarantujemy natomiast mierzalny wzrost ruchu organicznego.', 'guarantee'],
  ['Certyfikowani specjaliści Meta i Google.', 'certified'],
  ['Średnia ocena 4,9/5 od klientów.', 'rating'],
  ['Nasze biuro w Katowicach obsługuje firmy ze Śląska.', 'office'],
  ['FOTZ Studio ma siedzibę w Warszawie.', 'office'],
  ['Pakiet START: 1 499 zl/mc.', 'price'],
  ['Gwarancja skuteczności kampanii.', 'guarantee'],
];

// Stated limits that reviewed offers use on purpose.
const accepted = [
  'Nie gwarantujemy TOP 3 po określonej liczbie tygodni.',
  'Nie można zagwarantować konkretnej pozycji ani tego, że każde wyświetlenie przyniesie klienta.',
  'Usunięto twierdzenia bez dowodów, nie podajemy stałych cen w zł.',
  'Czy gwarantujecie pierwsze miejsce w Google Maps?',
  'Nie przedstawiamy tej oferty jako biura w Krakowie.',
  'Sklep z siedzibą w Łodzi może sprzedawać w całej Polsce.',
  'FOTZ Studio ma siedzibę w Poznaniu.',
];

test('golden set of rejected claims is still detected', () => {
  for (const [sentence, rule] of rejected) {
    assert.ok(findClaims(sentence).some(item => item.rule === rule), `${rule} not detected: ${sentence}`);
  }
});

test('page copy skips CSS colours and keeps template text', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'claims-'));
  const file = path.join(dir, 'Page.tsx');
  fs.writeFileSync(file, 'const city = "Gdańsk";\nexport default () => <div style={{ background: "hsla(30, 71%, 27%, 0.1)" }}>{`Pakiet od 2 500 zł w ${city}`}</div>;');
  const claims = findClaims(pageCopy(file));
  assert.deepEqual(claims.map(item => item.rule), ['price']);
});

test('stated limits and questions are not reported as claims', () => {
  for (const sentence of accepted) assert.deepEqual(findClaims(sentence), [], sentence);
});

// Offers published after the October review. Their copy must stay free of
// unsupported claims; add each newly reviewed offer here when it ships.
const reviewed = [
  '/uslugi/strony-internetowe/legnica', '/agencja-marketingowa/poznan', '/seo/audyt', '/agencja-social-media',
  '/uslugi/video-marketing', '/uslugi/reklama-facebook', '/uslugi/strony-internetowe-dla-firm',
  '/seo/pozycjonowanie-katowice', '/seo/pozycjonowanie-krakow', '/seo/pozycjonowanie-poznan',
  '/content-marketing/strategia', '/agencja-marketingowa/wroclaw', '/social-media/obsluga', '/agencja-marketingowa/warszawa',
  '/performance-marketing/instagram-ads', '/uslugi/pozycjonowanie/opole', '/performance-marketing/facebook-ads/warszawa',
  '/performance-marketing/facebook-ads/lodz', '/uslugi/fotografia-produktowa', '/pozycjonowanie/legnica',
  '/agencja-marketingowa-opole', '/uslugi/pozycjonowanie-lokalne', '/kampanie-reklamowe-poznan', '/o-nas',
  '/seo/pozycjonowanie-warszawa', '/seo/pozycjonowanie-wroclaw', '/seo/pozycjonowanie-lodz', '/seo/pozycjonowanie-gdansk', '/seo/pozycjonowanie-lublin',
  '/agencja-marketingu-internetowego', '/agencja-social-media/poznan', '/blog/digital-marketing-co-to', '/blog/instagram-dla-firmy', '/blog/copywriting-co-to', '/blog/ile-kosztuje-strona-internetowa',
  '/uslugi/strony-internetowe/poznan', '/uslugi/strony-internetowe/torun', '/uslugi/strony-internetowe/lodz', '/uslugi/strony-internetowe/szczecin', '/uslugi/strony-internetowe/bialystok',
  '/pozycjonowanie/zabrze', '/pozycjonowanie/walbrzych', '/pozycjonowanie/elblag', '/uslugi/pozycjonowanie/olsztyn', '/uslugi/pozycjonowanie/rzeszow',
  '/uslugi/pozycjonowanie/czestochowa', '/pozycjonowanie/sosnowiec', '/pozycjonowanie/plock',
  '/agencja-social-media/szczecin', '/agencja-social-media/lublin', '/agencja-social-media/warszawa', '/agencja-social-media/krakow',
  '/agencja-marketingowa/rzeszow', '/agencja-marketingowa/lodz', '/agencja-marketingowa/krakow', '/uslugi/studio-podcastowe',
  '/uslugi/sklepy-internetowe/krakow', '/kompleksowa-obsluga-marketingowa', '/uslugi/produkcja-filmow', '/uslugi/strony-internetowe/wroclaw',
];
// Offers cleaned of unsupported claims on 17.10 (not rewritten for NEURONwriter yet).
const cleaned = [
  '/uslugi/strony-internetowe/lublin', '/performance-marketing/tiktok-ads/gdansk', '/dla-kogo/branza-medyczna', '/performance-marketing/google-ads/bialystok',
  '/performance-marketing/google-ads/wroclaw', '/uslugi/strony-internetowe/koszalin', '/performance-marketing/linkedin-ads', '/uslugi/strony-internetowe/tychy',
  '/agencja-marketingowa/gdynia', '/dla-kogo/gastronomia', '/performance-marketing/facebook-ads/gdansk', '/social-media/strategia',
  '/performance-marketing/google-ads/warszawa', '/seo/lokalne-poznan', '/uslugi/email-marketing', '/uslugi/strony-internetowe/lubelskie',
  '/dla-kogo/it-saas', '/slownik-marketingowy', '/cennik-pozycjonowania', '/uslugi/strony-internetowe/rzeszow',
  '/performance-marketing/facebook-ads/szczecin', '/blog', '/performance-marketing/tiktok-ads', '/content-marketing/copywriting-landing',
  '/agencja-marketingowa', '/performance-marketing/facebook-ads/wroclaw', '/dla-kogo/beauty-wellness', '/uslugi/sklepy-internetowe/poznan',
  '/performance-marketing/google-ads', '/agencja-marketingowa/gliwice', '/agencja-marketingowa/gdansk', '/agencja-marketingowa-torun',
  '/performance-marketing/youtube-ads', '/agencja-marketingowa/katowice', '/dla-kogo/produkcja', '/uslugi/strona-internetowa-dla-restauracji',
  '/uslugi/strony-internetowe/gliwice', '/wizualizacje-3d', '/performance-marketing/google-ads/bydgoszcz', '/uslugi/tworzenie-stron-www',
  '/agencja-marketingowa/szczecin', '/social-media/reels-vs-tiktok', '/uslugi/strony-internetowe/radom', '/performance-marketing/google-ads/katowice',
  '/agencja-marketingowa/plock', '/uslugi/strony-internetowe/warszawa', '/agencja-marketingowa/bialystok', '/dla-kogo/edukacja',
  '/agencja-marketingowa/bydgoszcz', '/agencja-marketingowa/jelenia-gora', '/uslugi/strony-internetowe/zabrze', '/uslugi/strony-internetowe/plock',
  '/uslugi/strony-internetowe/tarnow', '/ai-marketing', '/performance-marketing/facebook-ads/katowice', '/performance-marketing/google-vs-facebook',
  '/social-media/tiktok-biznes', '/uslugi/sklep-woocommerce', '/uslugi/strony-internetowe/sosnowiec', '/agencja-marketingowa/legnica',
];
const files = routeFiles(new URL('../src/App.tsx', import.meta.url));

for (const path of [...reviewed, ...cleaned]) {
  test(`reviewed offer ${path} publishes no unsupported claims`, () => {
    const file = files.get(path);
    assert.ok(file && fs.existsSync(file), `no page source for ${path}`);
    const claims = findClaims(pageCopy(file));
    assert.deepEqual(claims.map(item => `${item.label}: „${item.match}” — ${item.sentence}`), []);
  });
}
