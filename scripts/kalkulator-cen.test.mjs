import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';
const require = createRequire(import.meta.url);

// Drives the real calculator page with hook state in memory. UI libraries, motion, icons,
// the booking calendar and the contact delivery are replaced; nothing reaches Supabase or the CRM.
function harness({ submitError = false } = {}) {
  const states = [], effects = [], dependencies = [];
  let cursor = 0;
  const calls = { submissions: [], toasts: [] };
  const react = { ...require('react'),
    useState(initial) {
      const i = cursor++;
      if (!(i in states)) states[i] = typeof initial === 'function' ? initial() : initial;
      return [states[i], value => { states[i] = typeof value === 'function' ? value(states[i]) : value; }];
    },
    useRef(value) { const i = cursor++; return states[i] ??= { current: value }; },
    useMemo(fn, deps) {
      const i = cursor++;
      if (!dependencies[i] || deps.some((v, j) => v !== dependencies[i][j])) states[i] = fn();
      dependencies[i] = deps;
      return states[i];
    },
    useCallback(fn) { return fn; },
    useEffect(fn, deps) {
      const i = cursor++;
      if (!dependencies[i] || deps.some((v, j) => v !== dependencies[i][j])) effects.push(fn);
      dependencies[i] = deps;
    },
  };
  // Any component or icon becomes a plain element named after its import, so props stay inspectable.
  const stub = new Proxy({}, { get: (_, name) => (name === '__esModule' ? true : name === 'motion' ? new Proxy({}, { get: (_, tag) => String(tag) }) : String(name)) });
  const mocks = {
    react,
    'react-router-dom': { Link: 'a' },
    '@/lib/utils': { cn: (...a) => a.filter(Boolean).join(' ') },
    '@/hooks/use-toast': { useToast: () => ({ toast: t => calls.toasts.push(t) }) },
    '@/lib/web3forms': { submitWeb3Form: async payload => {
      calls.submissions.push(payload);
      if (submitError) throw new Error('offline');
      return { success: true, submission_id: 'sub-123', crm_queued: true };
    } },
  };
  const source = fs.readFileSync(new URL('../src/pages/KalkulatorCen.tsx', import.meta.url), 'utf8');
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
  const context = { exports: {}, require: key => mocks[key] ?? (key.startsWith('@/') || key === 'framer-motion' || key === 'lucide-react' ? stub : require(key)), console, Date, Error, Intl, Math, JSON, Object, String };
  vm.runInNewContext(code, context);
  const Page = context.exports.default;
  function render() { cursor = 0; return Page({}); }
  function all(tree, predicate, result = []) {
    if (!tree || typeof tree !== 'object') return result;
    if (predicate(tree)) result.push(tree);
    const children = tree.props?.children;
    (Array.isArray(children) ? children.flat(Infinity) : [children]).forEach(child => all(child, predicate, result));
    return result;
  }
  function text(tree) {
    if (tree == null || typeof tree === 'boolean') return '';
    if (typeof tree !== 'object') return String(tree);
    return [tree.props?.children].flat(Infinity).map(text).join(' ').trim();
  }
  // Collapses whitespace and the spaces the element walker inserts around punctuation; pl-PL groups digits only from five digits up.
  const plain = value => String(value).replace(/\s+/g, ' ').replace(/\s+([:.,;)%])/g, '$1').replace(/\(\s+/g, '(').replace(/\+\s+(?=\d)/g, '+').replace(/\s+-krotnie/g, '-krotnie');
  const find = (tree, predicate) => { const item = all(tree, predicate)[0]; assert.ok(item, 'expected UI control'); return item; };
  const click = (tree, predicate) => { find(tree, predicate).props.onClick({ stopPropagation() {} }); return render(); };
  const button = label => n => n.type === 'Button' && typeof n.props.onClick === 'function' && plain(text(n)).includes(label);
  const tile = name => n => n.type === 'div' && typeof n.props.onClick === 'function' && plain(text(n)).includes(name) && !plain(text(n)).includes('Wybierz usługi');
  return { render, all, find, text, plain, click, button, tile, calls, exports: context.exports };
}

async function sendEnquiry(h, contact = { name: 'Ewa Test', email: 'ewa@example.invalid', phone: '600700800', message: 'Proszę o kontakt po 16' }) {
  let tree = h.render();
  tree = h.click(tree, h.tile('Landing Page'));
  tree = h.click(tree, h.tile('Google Ads'));
  tree = h.click(tree, h.button('Wyślij zapytanie'));
  for (const [id, value] of Object.entries(contact)) {
    h.find(tree, n => n.type === 'Input' && n.props.id === id || n.type === 'Textarea' && n.props.id === id).props.onChange({ target: { value } });
    tree = h.render();
  }
  await h.find(tree, n => n.type === 'form').props.onSubmit({ preventDefault() {} });
  return h.render();
}

test('buildCalculatorNote lists the selection, labels and totals without any contact data', () => {
  const { buildCalculatorNote, CALCULATOR_NOTE_LIMIT } = harness().exports;
  const note = buildCalculatorNote({
    selectedItems: [{ name: 'Landing Page', price: 3250, type: 'jednorazowo' }, { name: 'Google Ads', price: 2600, type: 'miesięcznie' }],
    complexityLabel: 'Standard', urgencyLabel: 'Standardowy (4-6 tyg.)', contractMonths: 6,
    oneTimeTotal: 3250, monthlyTotal: 2600, discountedMonthly: 2340, monthlyDiscount: 0.1, totalContractValue: 17290,
    enquiryReceipt: 'sub-123',
  });
  const flat = note.replace(/\s+/g, ' ');
  assert.match(flat, /^Wycena z kalkulatora \(orientacyjna, netto\): - Landing Page: 3250 PLN jednorazowo - Google Ads: 2600 PLN\/mies\./);
  assert.match(flat, /Poziom: Standard; termin: Standardowy \(4-6 tyg\.\); umowa: 6 mies\./);
  assert.match(flat, /jednorazowo 3250 PLN; miesięcznie 2340 PLN \(rabat 10%\); łącznie za 6 mies\. 17 290 PLN/);
  assert.match(flat, /nr zgłoszenia: sub-123$/);
  assert.ok(note.length <= CALCULATOR_NOTE_LIMIT);
  assert.equal(buildCalculatorNote({ selectedItems: [], complexityLabel: 'Standard', urgencyLabel: '', contractMonths: 3, oneTimeTotal: 0, monthlyTotal: 0, discountedMonthly: 0, monthlyDiscount: 0, totalContractValue: 0 }), '');
  const oneOff = buildCalculatorNote({ selectedItems: [{ name: 'Projekt Logo', price: 2500, type: 'jednorazowo' }], complexityLabel: 'Podstawowy', urgencyLabel: 'Express (do 2 tyg.)', contractMonths: 12, oneTimeTotal: 2500, monthlyTotal: 0, discountedMonthly: 0, monthlyDiscount: 0.15, totalContractValue: 2500 });
  assert.doesNotMatch(oneOff, /umowa|miesięcznie|rabat|łącznie/);
});

test('buildCalculatorNote caps very long selections within the note limit', () => {
  const { buildCalculatorNote, CALCULATOR_NOTE_LIMIT } = harness().exports;
  const selectedItems = Array.from({ length: 30 }, (_, i) => ({ name: `Usługa o bardzo długiej nazwie numer ${i + 1} z dodatkowym opisem`, price: 1000 + i, type: 'miesięcznie' }));
  const note = buildCalculatorNote({ selectedItems, complexityLabel: 'Premium', urgencyLabel: 'Express (do 2 tyg.)', contractMonths: 24, oneTimeTotal: 0, monthlyTotal: 30000, discountedMonthly: 25500, monthlyDiscount: 0.15, totalContractValue: 612000 });
  assert.ok(note.length <= CALCULATOR_NOTE_LIMIT, note.length);
  assert.match(note, /- oraz 18 kolejnych pozycji/);
});

test('after a sent estimate the calendar receives the note and the typed contact data as editable initial values', async () => {
  const h = harness();
  let tree = await sendEnquiry(h);
  assert.equal(h.calls.submissions.length, 1);
  assert.match(h.calls.submissions[0].selected_services, /Landing Page/);
  assert.match(h.text(tree), /Wycena wysłana!/);
  tree = h.click(tree, h.button('Zarezerwuj konsultację'));
  const calendar = h.find(tree, n => n.type === 'BookingCalendar');
  assert.deepEqual({ ...calendar.props.initialValues }, { name: 'Ewa Test', email: 'ewa@example.invalid', phone: '600700800', message: 'Proszę o kontakt po 16' });
  const note = h.plain(calendar.props.note);
  assert.match(note, /^Wycena z kalkulatora/);
  assert.match(note, /Landing Page: 3250 PLN jednorazowo/);
  assert.match(note, /Google Ads: 2600 PLN\/mies\./);
  assert.match(note, /nr zgłoszenia: sub-123/);
  assert.doesNotMatch(note, /Ewa|example\.invalid|600700800|kontakt po 16/);
  assert.equal(h.calls.submissions.length, 1, 'opening the calendar sends nothing');
});

test('opening the calendar without sending an estimate passes the live selection and empty contact fields', () => {
  const h = harness();
  let tree = h.render();
  tree = h.click(tree, h.tile('Audyt SEO'));
  tree = h.click(tree, h.button('Wybierz termin konsultacji'));
  const calendar = h.find(tree, n => n.type === 'BookingCalendar');
  assert.deepEqual({ ...calendar.props.initialValues }, { name: '', email: '', phone: '', message: '' });
  assert.match(h.plain(calendar.props.note), /Audyt SEO: 2600 PLN jednorazowo/);
  assert.doesNotMatch(calendar.props.note, /nr zgłoszenia/);
  assert.equal(h.calls.submissions.length, 0);
});

test('changing the selection changes the note handed to the calendar', () => {
  const h = harness();
  let tree = h.render();
  tree = h.click(tree, h.tile('Audyt SEO'));
  tree = h.click(tree, h.tile('Projekt Logo'));
  tree = h.click(tree, h.tile('Audyt SEO'));
  tree = h.click(tree, h.button('Wybierz termin konsultacji'));
  const note = h.plain(h.find(tree, n => n.type === 'BookingCalendar').props.note);
  assert.match(note, /Projekt Logo/);
  assert.doesNotMatch(note, /Audyt SEO/);
});

test('a failed estimate keeps the contact form open and hands no receipt to the calendar', async () => {
  const h = harness({ submitError: true });
  const tree = await sendEnquiry(h);
  assert.equal(h.calls.toasts.at(-1).variant, 'destructive');
  assert.ok(h.all(tree, n => n.type === 'form').length, 'form stays open for retry');
  assert.doesNotMatch(h.text(tree), /Wycena wysłana!/);
});

test('closing the handoff clears selection, contact data and receipt', async () => {
  const h = harness();
  let tree = await sendEnquiry(h);
  tree = h.click(tree, h.button('Zamknij'));
  assert.match(h.text(tree), /Wybierz usługi, aby zobaczyć wycenę/);
  assert.doesNotMatch(h.text(tree), /Wycena wysłana!/);
});

test('SEO copy quotes only prices from the calculator model', () => {
  const h = harness();
  const copy = h.plain(h.text(h.render()));
  assert.match(copy, /Strony WWW: od 500 PLN \(Hosting \+ Domena \(rok\)\) do 12 000 PLN \(Sklep E-commerce\)/);
  assert.match(copy, /Pozycjonowanie SEO: od 1200 PLN\/mies\. \(SEO Lokalne \+ Google Maps\) do 3500 PLN\/mies\. \(SEO Business\)/);
  assert.match(copy, /nawet 2-krotnie \(Premium\).*\+50% \(Express\).*od 3 miesięcy mają rabat 5%–15%/);
  assert.doesNotMatch(copy, /800 zł\/mc|5000\+ zł|20 000\+|500 zł\/mc|3000-15 000|2000-8000|5000-25 000/);
});
